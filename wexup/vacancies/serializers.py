from abc import ABC

from django.contrib.postgres.fields import ArrayField
from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from .models import Vacancy
from oauth.serializers import StudentSerializer, RecruiterSerializer
from oauth.models import Student, Recruiter


class VacancyListSerializer(serializers.ModelSerializer):
    recruiter = serializers.PrimaryKeyRelatedField(read_only=False, many=False, queryset=Recruiter.objects.all())
    class Meta:
        model = Vacancy
        fields = "__all__"
        depth = 1

    def create(self, validated_data):
        print(validated_data)
        recruiter = validated_data["recruiter"]
        vacancy = Vacancy.objects.create(
            title=validated_data["title"],
            wage=validated_data["wage"],
            description=validated_data["description"],
            duties=validated_data["duties"],
            requirements=validated_data["requirements"],
            conditions=validated_data["conditions"],
            company=validated_data["company"],
            address=validated_data["address"],
            contact=validated_data["contact"]
        )
        vacancy.save()
        recruiter.vacancies.add(vacancy)
        return vacancy



class VacancySerializer(serializers.ModelSerializer):
    students = StudentSerializer(many=True, read_only=True)

    class Meta:
        model = Vacancy
        fields = ["id", "title", "description", "wage", "duties", "requirements", "conditions", "address", "company",
                  "recruiter", "students"]
        depth = 1


class VacancyUpdateSerializer(serializers.ModelSerializer):
    students = serializers.PrimaryKeyRelatedField(read_only=False, many=True, queryset=Student.objects.all())

    class Meta:
        model = Vacancy
        fields = ["students"]

    def update(self, instance, validated_data):
        students_data = validated_data.pop('students')
        print('asdfasd', students_data)
        for student in students_data:
            instance.students.add(student)
        instance.save()
        return instance

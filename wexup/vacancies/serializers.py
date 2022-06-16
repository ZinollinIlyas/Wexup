from abc import ABC

from django.contrib.postgres.fields import ArrayField
from rest_framework import serializers
from rest_framework.relations import PrimaryKeyRelatedField

from .models import Vacancy
from oauth.serializers import StudentSerializer, RecruiterSerializer
from oauth.models import Student


class VacancyListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = "__all__"
        depth = 1


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

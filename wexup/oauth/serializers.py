from rest_framework import serializers
from .models import Student, Recruiter, CustomUser


class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = "__all__"


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"

    def create(self, validated_data):
        print(validated_data)
        user = Student.objects.create_user(
            email=validated_data["email"],
            password=validated_data["password"],
            first_name=validated_data["first_name"],
            second_name=validated_data["second_name"],
            role=validated_data["role"]
        )
        student = Student.objects.get(id=user.id)
        student.university = validated_data["university"]
        student.city = validated_data["city"]
        student.study_period = validated_data["study_period"]
        student.specialty = validated_data["specialty"]
        student.avatar = validated_data["avatar"]
        student.resume = validated_data["resume"]
        student.save()
        return student


class StudentRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = "__all__"


class RecruiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recruiter
        fields = "__all__"

    def create(self, validated_data):
        print(validated_data)
        user = Recruiter.objects.create_user(
            email=validated_data["email"],
            password=validated_data["password"],
            first_name=validated_data["first_name"],
            second_name=validated_data["second_name"],
            role=validated_data["role"]
        )
        recruiter = Recruiter.objects.get(id=user.id)
        recruiter.company = validated_data["company"]
        recruiter.position = validated_data["position"]

        recruiter.save()
        return recruiter

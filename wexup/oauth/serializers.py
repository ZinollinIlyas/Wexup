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
        extra_kwargs = {"email": {"required": False}, "password": {"required": False}, "first_name": {"required": False}, "second_name": {"required": False}}

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

    def update(self, instance, validated_data, pk=None):
        print(validated_data)
        # custom_user = serializers.PrimaryKeyRelatedField(read_only=False, many=True, queryset=CustomUser.objects.get(pk=pk))
        print(validated_data)
        instance.email = validated_data.get("email", instance.email)
        instance.favored_roles = validated_data.get("favored_roles", instance.favored_roles)
        instance.company = validated_data.get("company", instance.company)
        instance.position = validated_data.get("position", instance.position)
        instance.avatar = validated_data.get("avatar", instance.avatar)

        instance.save()
        return instance

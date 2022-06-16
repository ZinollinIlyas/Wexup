from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import StudentSerializer, ActiveUserSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from .models import CustomUser, Student, Recruiter
from .models import Student
from rest_framework import generics
import jwt


class StudentsViewSet(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        print(request.user)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        else:
            return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)


class StudentRetrieveView(generics.RetrieveAPIView):
    permission_classes = [AllowAny]
    queryset = Student.objects.all()
    serializer_class = ActiveUserSerializer




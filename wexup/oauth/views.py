from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny

from .models import Student

from .serializers import StudentSerializer


class StudentsViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

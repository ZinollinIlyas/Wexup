from django.shortcuts import render
from rest_framework.views import Response, APIView
from rest_framework.permissions import AllowAny

from .models import Student

from .serializers import StudentSerializer


class StudentView(APIView):
    permission_classes = [AllowAny]
    def get(self, request):
        students = Student.objects.all()
        serializer = StudentSerializer(students, many=True)
        return Response(serializer.data)

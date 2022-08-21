from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny, IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser

import bot_worker
from .serializers import VacancyListSerializer, VacancySerializer, VacancyUpdateSerializer
from rest_framework.response import Response
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST
from .models import Vacancy


class VacancyViewSet(APIView):
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request):
        students = Vacancy.objects.order_by("-id")
        serializer = VacancyListSerializer(students, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = VacancyListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            bot_worker.send_message_to_channel(serializer.data)
            return Response(serializer.data, status=HTTP_200_OK)
        else:
            print(serializer.errors)


class ReadUpdateVacancyView(generics.RetrieveUpdateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer



class UpdateVacancyView(generics.UpdateAPIView):
    serializer_class = VacancyUpdateSerializer

    def put(self, request, *args, **kwargs):
        pk = kwargs.get("pk")
        instance = Vacancy.objects.get(pk=pk)
        serializer = VacancyUpdateSerializer(data=request.data, instance=instance)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


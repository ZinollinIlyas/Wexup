from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# from .views import StudentsViewSet
# from rest_framework import routers
from .views import StudentsViewSet, StudentRetrieveView


urlpatterns = [
    path('', StudentsViewSet.as_view()),
    path('<int:pk>', StudentRetrieveView.as_view())
]


from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
# from .views import StudentsViewSet
# from rest_framework import routers
from .views import StudentsViewSet, UserRetrieveView, RecruiterViewSet, StudentRetrieveView, RecruiterRetrieveView


urlpatterns = [
    path('students/', StudentsViewSet.as_view()),
    path('recruiters/', RecruiterViewSet.as_view()),
    path('<int:pk>', UserRetrieveView.as_view()),
    path('students/<int:pk>', StudentRetrieveView.as_view()),
    path('recruiters/<int:pk>', RecruiterRetrieveView.as_view())
]


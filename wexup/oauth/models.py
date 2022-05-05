from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    role = models.SmallIntegerField(null=True, blank=True, verbose_name="role")
    university = models.CharField(max_length=100, blank=True, null=True, verbose_name="university")
    city = models.CharField(max_length=60, blank=True, null=True, verbose_name="city")
    study_period = models.CharField(max_length=30, blank=True, null=True, verbose_name='study period')
    specialty = models.CharField(max_length=100, blank=True, null=True, verbose_name='specialty')
    gender = models.CharField(max_length=20, blank=True, null=False, verbose_name='gender')
    avatar = models.ImageField(blank=True, null=True, upload_to='images/')
    resume = models.FileField(blank=True, null=True, upload_to='resumes/')
    favored_roles = models.CharField(blank=True, null=True, max_length=200, verbose_name='favored roles')
    company = models.CharField(max_length=60, blank=True, null=True, verbose_name='company')
    position = models.CharField(max_length=60, blank=True, null=True, verbose_name='position')


# class Vacancy(models.Model):
#     title = models.CharField(max_length=100, null=False, blank=False, verbose_name='title')
#     recruiter_id = models.ForeignKey(Recruiter, on_delete=models.CASCADE)
#     wage = models.CharField(max_length=60, null=False, blank=False, verbose_name='wage')
#     duties = ArrayField(models.CharField(max_length=100, null=True, blank=True))
#     requirements = ArrayField(models.CharField(max_length=100, null=True, blank=True))
#     conditions = ArrayField(models.CharField(max_length=100, null=True, blank=True))
#     address = models.CharField(max_length=100, null=True, blank=True)

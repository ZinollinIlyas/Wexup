from django.db import models


class Student(models.Model):
    email = models.EmailField(max_length=60, blank=False, null=False, unique=True, verbose_name="email")
    name = models.CharField(max_length=30, blank=False, null=False, verbose_name="name")
    surname = models.CharField(max_length=30, blank=False, null=False, verbose_name="surname")
    password = models.CharField(max_length=260, blank=False, null=False, verbose_name="password")
    university = models.CharField(max_length=100, blank=False, null=False, verbose_name="university")
    city = models.CharField(max_length=60, blank=False, null=False, verbose_name="city")
    study_period = models.CharField(max_length=30, blank=False, null=False, verbose_name='study period')
    specialty = models.CharField(max_length=100, blank=False, null=False, verbose_name='specialty')
    gender = models.CharField(max_length=20, blank=True, null=False, verbose_name='gender')
    avatar = models.ImageField(blank=True, null=True, upload_to='images/')
    resume = models.FileField(blank=True, null=True, upload_to='resumes/')
    favored_roles = models.CharField(blank=False, null=False, max_length=200, verbose_name='favored roles')

    def __str__(self):
        return f"{self.email}"


class Recruiter(models.Model):
    email = models.EmailField(max_length=60, blank=False, null=False, unique=True, verbose_name="email")
    name = models.CharField(max_length=30, blank=False, null=False, verbose_name="name")
    surname = models.CharField(max_length=30, blank=False, null=False, verbose_name="surname")
    password = models.CharField(max_length=260, blank=False, null=False, verbose_name="password")
    company = models.CharField(max_length=60, blank=False, null=False, verbose_name='company')
    position = models.CharField(max_length=60, blank=False, null=False, verbose_name='position')

    def __str__(self):
        return f"{self.email}"

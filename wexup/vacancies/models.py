from django.contrib.postgres.fields import ArrayField
from django.db import models


class Vacancy(models.Model):
    title = models.CharField(max_length=100, null=False, blank=False, verbose_name='title')
    description = models.TextField(max_length=500, null=True, blank=True, verbose_name='description')
    wage = models.CharField(max_length=60, null=False, blank=False, verbose_name='wage')
    duties = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    requirements = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    conditions = ArrayField(models.CharField(max_length=100, null=True, blank=True))
    address = models.CharField(max_length=100, null=True, blank=True)

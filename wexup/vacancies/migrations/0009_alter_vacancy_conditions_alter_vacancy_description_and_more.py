# Generated by Django 4.0.4 on 2022-08-21 21:05

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vacancies', '0008_vacancy_contact'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vacancy',
            name='conditions',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), size=None),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='description',
            field=models.TextField(blank=True, max_length=5000, null=True, verbose_name='description'),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='duties',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), size=None),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='requirements',
            field=django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=1000, null=True), size=None),
        ),
    ]
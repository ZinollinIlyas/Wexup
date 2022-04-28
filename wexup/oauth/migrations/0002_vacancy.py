# Generated by Django 4.0.4 on 2022-04-28 18:51

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('oauth', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='title')),
                ('wage', models.CharField(max_length=60, verbose_name='wage')),
                ('duties', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100, null=True), size=None)),
                ('requirements', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100, null=True), size=None)),
                ('conditions', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(blank=True, max_length=100, null=True), size=None)),
                ('address', models.CharField(blank=True, max_length=100, null=True)),
                ('recruiter_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='oauth.recruiter')),
            ],
        ),
    ]

# Generated by Django 4.0.4 on 2022-04-21 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Recruiter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=60, unique=True, verbose_name='email')),
                ('name', models.CharField(max_length=30, verbose_name='name')),
                ('surname', models.CharField(max_length=30, verbose_name='surname')),
                ('password', models.CharField(max_length=260, verbose_name='password')),
                ('company', models.CharField(max_length=60, verbose_name='company')),
                ('position', models.CharField(max_length=60, verbose_name='position')),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=60, unique=True, verbose_name='email')),
                ('name', models.CharField(max_length=30, verbose_name='name')),
                ('surname', models.CharField(max_length=30, verbose_name='surname')),
                ('password', models.CharField(max_length=260, verbose_name='password')),
                ('university', models.CharField(max_length=100, verbose_name='university')),
                ('city', models.CharField(max_length=60, verbose_name='city')),
                ('study_period', models.CharField(max_length=30, verbose_name='study period')),
                ('specialty', models.CharField(max_length=100, verbose_name='specialty')),
                ('gender', models.CharField(blank=True, max_length=20, verbose_name='gender')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('resume', models.FileField(blank=True, null=True, upload_to='resumes/')),
                ('favored_roles', models.CharField(max_length=200, verbose_name='favored roles')),
            ],
        ),
    ]
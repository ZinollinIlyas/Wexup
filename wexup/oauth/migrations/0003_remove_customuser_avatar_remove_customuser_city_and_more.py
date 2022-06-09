# Generated by Django 4.0.4 on 2022-06-04 11:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vacancies', '0001_initial'),
        ('oauth', '0002_customuser_is_staff'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='avatar',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='city',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='company',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='favored_roles',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='gender',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='position',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='resume',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='role',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='specialty',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='study_period',
        ),
        migrations.RemoveField(
            model_name='customuser',
            name='university',
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('customuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('university', models.CharField(blank=True, max_length=100, null=True, verbose_name='university')),
                ('city', models.CharField(blank=True, max_length=60, null=True, verbose_name='city')),
                ('study_period', models.CharField(blank=True, max_length=30, null=True, verbose_name='study period')),
                ('specialty', models.CharField(blank=True, max_length=100, null=True, verbose_name='specialty')),
                ('gender', models.CharField(blank=True, max_length=20, verbose_name='gender')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('resume', models.FileField(blank=True, null=True, upload_to='resumes/')),
            ],
            options={
                'abstract': False,
            },
            bases=('oauth.customuser',),
        ),
        migrations.CreateModel(
            name='Recruiter',
            fields=[
                ('customuser_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('favored_roles', models.CharField(blank=True, max_length=200, null=True, verbose_name='favored roles')),
                ('company', models.CharField(blank=True, max_length=60, null=True, verbose_name='company')),
                ('position', models.CharField(blank=True, max_length=60, null=True, verbose_name='position')),
                ('vacancy', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vacancies.vacancy')),
            ],
            options={
                'abstract': False,
            },
            bases=('oauth.customuser',),
        ),
    ]
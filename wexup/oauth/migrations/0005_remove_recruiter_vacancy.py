# Generated by Django 4.0.4 on 2022-06-11 09:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('oauth', '0004_alter_recruiter_vacancy'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='recruiter',
            name='vacancy',
        ),
    ]

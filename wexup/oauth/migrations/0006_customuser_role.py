# Generated by Django 4.0.4 on 2022-06-15 19:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('oauth', '0005_remove_recruiter_vacancy'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='role',
            field=models.CharField(default='admin', max_length=20, verbose_name='role'),
        ),
    ]

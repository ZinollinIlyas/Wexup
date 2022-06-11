# Generated by Django 4.0.4 on 2022-06-11 09:25

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('oauth', '0005_remove_recruiter_vacancy'),
        ('vacancies', '0002_vacancy_company'),
    ]

    operations = [
        migrations.AddField(
            model_name='vacancy',
            name='recruiter',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='vacancies', to='oauth.recruiter'),
        ),
    ]
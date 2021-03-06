# Generated by Django 4.0.4 on 2022-06-09 14:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vacancies', '0002_vacancy_company'),
        ('oauth', '0003_remove_customuser_avatar_remove_customuser_city_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recruiter',
            name='vacancy',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recruiters', to='vacancies.vacancy'),
        ),
    ]

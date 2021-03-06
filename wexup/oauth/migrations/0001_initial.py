# Generated by Django 4.0.4 on 2022-05-05 17:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=100, unique=True, verbose_name='email')),
                ('password', models.CharField(max_length=100, verbose_name='password')),
                ('first_name', models.CharField(max_length=60, verbose_name='first_name')),
                ('second_name', models.CharField(max_length=60, verbose_name='second_name')),
                ('date_joined', models.DateTimeField(auto_now_add=True, verbose_name='date_joined')),
                ('last_login', models.DateTimeField(auto_now=True, verbose_name='last_login')),
                ('is_admin', models.BooleanField(default=False)),
                ('is_active', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('role', models.SmallIntegerField(blank=True, null=True, verbose_name='role')),
                ('university', models.CharField(blank=True, max_length=100, null=True, verbose_name='university')),
                ('city', models.CharField(blank=True, max_length=60, null=True, verbose_name='city')),
                ('study_period', models.CharField(blank=True, max_length=30, null=True, verbose_name='study period')),
                ('specialty', models.CharField(blank=True, max_length=100, null=True, verbose_name='specialty')),
                ('gender', models.CharField(blank=True, max_length=20, verbose_name='gender')),
                ('avatar', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('resume', models.FileField(blank=True, null=True, upload_to='resumes/')),
                ('favored_roles', models.CharField(blank=True, max_length=200, null=True, verbose_name='favored roles')),
                ('company', models.CharField(blank=True, max_length=60, null=True, verbose_name='company')),
                ('position', models.CharField(blank=True, max_length=60, null=True, verbose_name='position')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]

from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from vacancy.models import Vacancy


class CustomUserManager(BaseUserManager):
    def create_user(self, email, first_name, second_name, password=None):
        if not email:
            raise ValueError("Users must have an email address")
        user = self.model(
            email=self.normalize_email(email),
            first_name=first_name,
            second_name=second_name
        )
        user.set_password(password)
        user.is_active = True
        user.save()

        return user

    def create_superuser(self, email, first_name, second_name, password):
        user = self.create_user(
            email=self.normalize_email(email),
            password=password,
            first_name=first_name,
            second_name=second_name
        )
        user.is_admin = True
        user.is_superuser = True
        user.is_staff = True
        user.is_active = True
        user.save()
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=100, unique=True, blank=False, null=False, verbose_name="email")
    password = models.CharField(max_length=100, null=False, blank=False, verbose_name="password")
    first_name = models.CharField(max_length=60, blank=False, null=False, verbose_name="first_name")
    second_name = models.CharField(max_length=60, blank=False, null=False, verbose_name="second_name")
    date_joined = models.DateTimeField(auto_now_add=True, verbose_name="date_joined")
    last_login = models.DateTimeField(auto_now=True, verbose_name="last_login")
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password', 'first_name', 'second_name']

    objects = CustomUserManager()

    def __str__(self):
        return f"{self.email}"

    def has_module_perms(self, app_label):
        return True


class Student(CustomUser):
    university = models.CharField(max_length=100, blank=True, null=True, verbose_name="university")
    city = models.CharField(max_length=60, blank=True, null=True, verbose_name="city")
    study_period = models.CharField(max_length=30, blank=True, null=True, verbose_name='study period')
    specialty = models.CharField(max_length=100, blank=True, null=True, verbose_name='specialty')
    gender = models.CharField(max_length=20, blank=True, null=False, verbose_name='gender')
    avatar = models.ImageField(blank=True, null=True, upload_to='images/')
    resume = models.FileField(blank=True, null=True, upload_to='resumes/')


class Recruiter(CustomUser):
    favored_roles = models.CharField(blank=True, null=True, max_length=200, verbose_name='favored roles')
    company = models.CharField(max_length=60, blank=True, null=True, verbose_name='company')
    position = models.CharField(max_length=60, blank=True, null=True, verbose_name='position')
    vacancy_id = models.ForeignKey(Vacancy, null=True, related_name="recruiters", on_delete=models.CASCADE)

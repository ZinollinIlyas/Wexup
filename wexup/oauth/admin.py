from django.contrib import admin
from .models import CustomUser
from .models import Student, Recruiter

admin.site.register(CustomUser)
admin.site.register(Student)
admin.site.register(Recruiter)


# Register your models here.

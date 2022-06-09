from django.contrib import admin
from .models import CustomUser, Student, Recruiter
# from .models import Student, Recruiter, Vacancy
#
# admin.site.register(Student)
# admin.site.register(Recruiter)
# admin.site.register(Vacancy)

admin.site.register(CustomUser)
admin.site.register(Student)
admin.site.register(Recruiter)


# Register your models here.

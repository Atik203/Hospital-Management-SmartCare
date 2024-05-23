from django.contrib import admin

# Register your models here.
from .models import Patient


class PatientModelAdmin(admin.ModelAdmin):
    list_display = [ 'username', 'first_name','last_name' ,'phone']
    def username(self, obj):
        return obj.user.username
    def first_name(self, obj):
        return obj.user.first_name
    def last_name(self, obj):
        return obj.user.last_name

admin.site.register(Patient, PatientModelAdmin)
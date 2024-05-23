from django.contrib import admin

# Register your models here.
from .models import Appointment


class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['patient_name', 'doctor_name', 'type', 'status', 'time', 'cancel']
    
    def patient_name(self, obj):
        return obj.patient.user.first_name + ' ' + obj.patient.user.last_name
    def doctor_name(self, obj):
        return obj.doctor.user.first_name + ' ' + obj.doctor.user.last_name


admin.site.register(Appointment, AppointmentAdmin)

from typing import Any

from django.contrib import admin
from django.core.mail import EmailMessage
from django.template.loader import render_to_string

# Register your models here.
from .models import Appointment


def send_confirm_email(patient_name,doctor_name,doctor_meeting_link,subject,template_name,email):
    mail_subject = subject
    message = render_to_string(template_name, {
        'patient_name': patient_name,
        'doctor_name': doctor_name,
        'doctor_meeting_link': doctor_meeting_link,
    })
    send_email = EmailMessage(
        mail_subject,
        message,
        to=[email]
    )
    send_email.content_subtype = 'html'
    send_email.send()

class AppointmentAdmin(admin.ModelAdmin):
    list_display = ['patient_name', 'doctor_name', 'type', 'status', 'time', 'cancel']
    
    def patient_name(self, obj):
        return obj.patient.user.first_name + ' ' + obj.patient.user.last_name
    def doctor_name(self, obj):
        return obj.doctor.user.first_name + ' ' + obj.doctor.user.last_name
    def save_model(self, request, obj, form, change):
        obj.save()
        if obj.status == 'Running' and obj.type == 'Online':
            patient = obj.patient.user
            patient_email = obj.patient.user.email
            patient_name = patient.first_name + ' ' + patient.last_name
            doctor = obj.doctor.user
            doctor_name = doctor.first_name + ' ' + doctor.last_name
            doctor_meeting_link = obj.doctor.meet_link
            send_confirm_email(patient_name,doctor_name,doctor_meeting_link,'Appointment Meet Link', 'admin_email.html', patient_email)
            


admin.site.register(Appointment, AppointmentAdmin)

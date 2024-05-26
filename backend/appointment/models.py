from django.db import models

from doctor.models import AvailableTime, Doctor
from patient.models import Patient

# Create your models here.

TYPE = [
    ('Online', 'Online'),
    ('Offline', 'Offline'),
]

APPOINTMENT_STATUS = [
    ('Pending', 'Pending'),
    ('Completed', 'Completed'),
    ('Running', 'Running'),
]
class Appointment(models.Model):
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    type = models.CharField(choices=TYPE, max_length=10)
    status = models.CharField(choices=APPOINTMENT_STATUS, max_length=10, default='Pending')
    symptom = models.TextField()
    time = models.ForeignKey(AvailableTime, on_delete=models.CASCADE)
    cancel = models.BooleanField(default=False)
    
    def __str__(self):
        return f'{self.patient.user.username} - {self.doctor.user.first_name} {self.doctor.user.last_name} - {self.time.name}'
    
    
    
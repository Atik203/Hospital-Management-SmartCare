from django.contrib.auth.models import User
from django.db import models

from patient.models import Patient


# Create your models here.
class Specialization(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)
    
    def __str__(self):
        return self.name
   

class Designation(models.Model):
    name = models.CharField(max_length=50)
    slug = models.SlugField(max_length=50, unique=True)
    
    def __str__(self):
        return self.name    

class AvailableTime(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
       

class Doctor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='doctor/images/')
    specialization = models.ManyToManyField(Specialization)
    designation = models.ManyToManyField(Designation)
    available_time = models.ManyToManyField(AvailableTime)
    fee = models.IntegerField()
    meet_link = models.CharField(max_length=100)
    
    def __str__(self):
        return f'{self.user.first_name} {self.user.last_name}'
    
STAR_CHOICES = (
    ('⭐', '⭐'),
    ('⭐⭐', '⭐⭐'),
    ('⭐⭐⭐', '⭐⭐⭐'),
    ('⭐⭐⭐⭐', '⭐⭐⭐⭐'),
    ('⭐⭐⭐⭐⭐', '⭐⭐⭐⭐⭐'),
)
class Review(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    reviewer = models.ForeignKey(Patient, on_delete=models.CASCADE)
    review = models.TextField()
    rating = models.CharField(choices=STAR_CHOICES, max_length=10)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.doctor.user.first_name} {self.doctor.user.last_name} - {self.reviewer.user.username} - {self.rating}'    
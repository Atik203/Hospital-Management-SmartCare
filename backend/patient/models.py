from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Patient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='patient/images/',null=True, blank=True)
    phone = models.CharField(max_length=11)
    address = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return f'{self.user.username}'
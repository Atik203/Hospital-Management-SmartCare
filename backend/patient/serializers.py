from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Patient


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [ 'id','username', 'email', 'first_name', 'last_name']


class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer(many = False, read_only = True)
    class Meta:
        model = Patient
        fields = '__all__'
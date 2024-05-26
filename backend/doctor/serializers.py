
from django.contrib.auth.models import User
from rest_framework import serializers

from patient.models import Patient

from .models import AvailableTime, Designation, Doctor, Review, Specialization


class SpecializationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Specialization
        fields = '__all__'
        

class DesignationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Designation
        fields = '__all__'

class AvailableTimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvailableTime
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
        
class DoctorSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    specialization = SpecializationSerializer(many=True, read_only=True)
    designation = DesignationSerializer(many=True, read_only=True)
    available_time = AvailableTimeSerializer(many=True, read_only=True)
    class Meta:
        model = Doctor
        fields = '__all__'   


class PatientSerializer(serializers.ModelSerializer):
    user = UserSerializer(many=False, read_only=True)
    class Meta:
        model = Patient
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    doctor = DoctorSerializer(many=False, read_only=True)
    reviewer = PatientSerializer(many=False, read_only=True)
    class Meta:
        model = Review
        fields = '__all__'                  
from django.shortcuts import render
from rest_framework import viewsets

# Create your views here.
from .models import Doctor, Review
from .serializers import DoctorSerializer, ReviewSerializer


class DoctorViewSet(viewsets.ModelViewSet):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    
class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer    


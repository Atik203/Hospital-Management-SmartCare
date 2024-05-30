from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from django.shortcuts import redirect
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Patient
from .serializers import (LoginSerializer, PatientSerializer,
                          RegistrationSerializer)


def send_confirm_email(confirm_link,subject,template_name,email):
    mail_subject = subject
    message = render_to_string(template_name, {
        'confirm_link': confirm_link,
    })
    send_email = EmailMessage(
        mail_subject,
        message,
        to=[email]
    )
    send_email.content_subtype = 'html'
    send_email.send()

class PatientViewSet(viewsets.ModelViewSet):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    

class RegistrationViewSet(APIView):
    serializer_class = RegistrationSerializer
    def post(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            user = serializer.save()
            user.is_active = False
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            confirm_link = f'https://smart-care-backend-3m5c.onrender.com/patient/active/{uid}/{token}'
            send_confirm_email(confirm_link,'Confirm Email','confirm_email.html',user.email)
            return Response("Check your email to confirm your account")
        return Response(serializer.errors)
    
def activate(request, uidb64, token):
    try:
        uid = urlsafe_base64_decode(uidb64).decode()
        user = User._default_manager.get(pk=uid)
    except(TypeError, ValueError, OverflowError, User.DoesNotExist):
        user = None
        
    if user is not None and default_token_generator.check_token(user, token):
        user.is_active = True
        user.save()
        return redirect("register")
    else:
        return redirect('login')


class LoginViewSet(APIView):
    serializer_class = LoginSerializer
    def post(self, request):
        serializer = self.serializer_class(data = request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(username = username, password = password)
            if user:
                token,_ = Token.objects.get_or_create(user = user)
                login(request, user)
                user_data = {
                    'username': user.username, 
                    'email': user.email, 
                    'first_name': user.first_name, 
                    'last_name': user.last_name,
                }
                if hasattr(user, 'patient') and user.patient is not None:
                    user_data['phone'] = user.patient.phone
                    user_data['image'] = request.build_absolute_uri(user.patient.image.url)
                return Response({'token': token.key, 'user': user_data })
            else:
                return Response({'error': 'Invalid credentials'})
        return Response(serializer.errors)
    

class LogOutViewSet(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            request.user.auth_token.delete()
            logout(request)
        return Response("Logged out successfully")     



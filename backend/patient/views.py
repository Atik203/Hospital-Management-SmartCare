from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Patient
from .serializers import PatientSerializer, RegistrationSerializer


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
            confirm_link = f'http://127.0.0.1:8000/patient/active/{uid}/{token}'
            print(confirm_link)
            send_confirm_email(confirm_link,'Confirm Email','confirm_email.html',user.email)
            return Response("Check your email to confirm your account")
        return Response(serializer.errors)



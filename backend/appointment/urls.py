
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import AppointmentViewSet

router = DefaultRouter()

router.register('', AppointmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

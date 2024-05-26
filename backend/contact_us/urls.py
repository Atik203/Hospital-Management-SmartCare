from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ContactUsViewSet

router = DefaultRouter()

router.register('', ContactUsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ServiceViewSet

router = DefaultRouter()

router.register('', ServiceViewSet)

urlpatterns =  [
    path('', include(router.urls)),
]

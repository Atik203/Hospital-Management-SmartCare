from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import DoctorViewSet, ReviewViewSet

router = DefaultRouter()


router.register('doctors', DoctorViewSet)
router.register('reviews', ReviewViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

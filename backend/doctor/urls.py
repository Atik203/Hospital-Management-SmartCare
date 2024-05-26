from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (AvailableTimeViewSet, DesignationViewSet, DoctorViewSet,
                    ReviewViewSet, SpecializationViewSet)

router = DefaultRouter()


router.register('list', DoctorViewSet)
router.register('reviews', ReviewViewSet)
router.register('specializations', SpecializationViewSet)
router.register('designations', DesignationViewSet)
router.register('available-times', AvailableTimeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

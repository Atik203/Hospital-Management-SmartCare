from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (LoginViewSet, LogOutViewSet, PatientViewSet,
                    RegistrationViewSet, activate)

router = DefaultRouter()
router.register('list', PatientViewSet) 


urlpatterns = [
    path('', include(router.urls)),
    path('register/', RegistrationViewSet.as_view(), name = 'register'),
    path('active/<uidb64>/<token>/', activate),
    path('login/', LoginViewSet.as_view(), name = 'login'),
    path('logout/', LogOutViewSet.as_view(), name = 'logout'),
]

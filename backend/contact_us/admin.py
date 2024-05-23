from django.contrib import admin

# Register your models here.
from .models import ContactUs


class ContactUsModelAdmin(admin.ModelAdmin):
    list_display = ['name', 'phone', 'problem']
    list_per_page = 10

admin.site.register(ContactUs, ContactUsModelAdmin)

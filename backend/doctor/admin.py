from django.contrib import admin

# Register your models here.
from .models import AvailableTime, Designation, Doctor, Review, Specialization


class SpecializationAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

class DesignationAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}    
    

admin.site.register(Specialization, SpecializationAdmin)
admin.site.register(Designation, DesignationAdmin)
admin.site.register(Review)
admin.site.register(AvailableTime)
admin.site.register(Doctor)
# Generated by Django 5.0.6 on 2024-05-23 08:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('doctor', '0002_alter_doctor_available_time'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='doctor',
            name='available_time',
        ),
        migrations.AddField(
            model_name='doctor',
            name='available_time',
            field=models.ManyToManyField(to='doctor.availabletime'),
        ),
    ]

from django.db import models
from distutils.command.upload import upload
from unittest.util import _MAX_LENGTH

# Create your models here.

class users(models.Model):
    name = models.CharField(max_length = 15)
    uname = models.CharField(max_length = 10)
    password = models.CharField(max_length = 10)

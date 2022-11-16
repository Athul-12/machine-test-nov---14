from django.db import models
from common.models import users
from unittest.util import _MAX_LENGTH

# Create your models here.

class post(models.Model):
    User = models.ForeignKey(users,on_delete = models.SET_NULL, null = True)
    u_title = models.CharField(max_length = 30)
    u_dis = models.CharField(max_length = 100)

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
	Name = models.CharField(max_length=100)
	Email = models.EmailField(max_length=100)

	


class Posts(models.Model):
	user = models.ForeignKey(User, null=True)
	Title = models.CharField(max_length=100)
	Description = models.TextField(max_length=500)
	created_at = models.DateTimeField(auto_now_add=True)

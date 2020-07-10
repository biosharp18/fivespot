# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.

class Posts(models.Model):
    Title = models.CharField(max_length=100)
    Description = models.TextField(max_length=500)
    Slug = models.SlugField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
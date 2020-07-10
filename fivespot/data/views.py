# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Posts
from .serializers import PostsSerializer
from rest_framework import generics

class PostsListCreate(generics.ListCreateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer
# Create your views here.

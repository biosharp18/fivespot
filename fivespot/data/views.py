# -*- coding: utf-8 -*-
from __future__ import unicode_literals
#from django.shortcuts import render
from .models import Posts, User
from .serializers import PostsSerializer, UsersSerializer
from rest_framework import generics
from rest_framework.generics import ListAPIView

class PostsListCreate(generics.ListCreateAPIView):
    queryset = Posts.objects.all()
    serializer_class = PostsSerializer

class UsersListCreate(generics.ListCreateAPIView):
	queryset = User.objects.all()
	serializer_class = UsersSerializer
# Create your views here.
class User1PostsListCreate(generics.ListCreateAPIView):
	queryset = Posts.objects.filter(user="1")
	serializer_class = PostsSerializer

class User2PostsListCreate(generics.ListCreateAPIView):
	queryset = Posts.objects.filter(user="2")
	serializer_class = PostsSerializer



#class UserPostsAPIView(ListAPIView):
#	queryset = Posts.objects.all()
#	def get_queryset(self, *args, **kwargs):	
#		queryset_list = Posts.objects.all()
#		query = self.request.GET.get("q")
#		if query:
#			queryset_list = queryset_list.filter(
#				Q(title__icontains=query))
#		return queryset_list
	

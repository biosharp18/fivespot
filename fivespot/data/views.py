# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.shortcuts import render
from .models import Posts, User
from django.db.models import Q
from .serializers import PostsSerializer, UsersSerializer
from rest_framework import generics
from rest_framework.generics import ListAPIView
#class PostsListCreate(generics.ListCreateAPIView):
  #  queryset = Posts.objects.all()
  #  serializer_class = PostsSerializer

class UsersListCreate(generics.ListCreateAPIView):
	queryset = User.objects.all()
	serializer_class = UsersSerializer
# Create your views here.
class UserPostsListAPIView(generics.ListCreateAPIView):
	serializer_class = PostsSerializer
	#queryset = Posts.objects.all()
	def get_queryset(self, *args, **kwargs):	
		queryset_list = Posts.objects.all()
		query = self.request.GET.get("q")
		if query:
				queryset_list = queryset_list.filter(
					Q(user__name__icontains=query)).distinct()
		return queryset_list


class SearchPostsListAPIView(generics.ListCreateAPIView):
	serializer_class = PostsSerializer
	def get_queryset(self, *args, **kwargs):	
		queryset_list = Posts.objects.all()
		query = self.request.GET.get("q")
		if query:
				queryset_list = queryset_list.filter(
					Q(title__icontains=query)|
					Q(description__icontains=query)|
					Q(user__name__icontains=query)).distinct()
		return queryset_list
	




#class UserPostsAPIView(ListAPIView):
#	queryset = Posts.objects.all()
#	def get_queryset(self, *args, **kwargs):	
#		queryset_list = Posts.objects.all()
#		query = self.request.GET.get("q")
#		if query:
#			queryset_list = queryset_list.filter(
#				Q(title__icontains=query))
#		return queryset_list
	

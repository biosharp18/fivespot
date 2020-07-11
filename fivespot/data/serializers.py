from rest_framework import serializers
from .models import Posts, User

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('id', 'user', 'Title', 'Description')
    depth = 1

class UsersSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'Name', 'Email')  
        
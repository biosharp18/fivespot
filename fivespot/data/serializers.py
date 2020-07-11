from rest_framework import serializers
from .models import Posts, User

class PostsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = ('id', 'user', 'title', 'description', 'created_at', 'sub1', 'body1', 'lat1', 'long1', 'sub2', 'body2', 'lat2', 'long2', 'sub3', 'body3', 'lat3', 'long3', 'sub4', 'body4', 'lat4', 'long4', 'sub5', 'body5', 'lat5', 'long5')
    	depth = 1

class UsersSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'name', 'email')  
        
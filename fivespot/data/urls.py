from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/posts/', views.PostsListCreate.as_view() ),
    url('api/user1posts/', views.User1PostsListCreate.as_view()),
    url('api/user2posts/', views.User2PostsListCreate.as_view()),
    url('api/users', views.UsersListCreate.as_view()),
]
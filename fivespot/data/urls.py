from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/posts/', views.UserPostsListAPIView.as_view() ),
    url('api/users', views.UsersListCreate.as_view()),
]
from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/posts/', views.PostsListCreate.as_view() ),
]
from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^[ A-Za-z0-9_@./#&+-]*$', views.home),
    
]






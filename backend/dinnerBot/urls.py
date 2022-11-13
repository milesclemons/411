from django.urls import path
from . import views

#URLConf module, #originally "dinnerBot/hello/""
urlpatterns = [
    path("hello/", views.index) 
]

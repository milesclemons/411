#from django.conf.urls import url
from NewApp import views
from django.urls import re_path


urlpatterns=[
    re_path(r'^employee/$',views.employeeApi),
    re_path(r'^employee/([0-9]+)$',views.employeeApi),
    re_path(r'^form/$',views.form),
    re_path(r'^select/$',views.select),
    re_path(r'^recipe/$', views.recipe),
    re_path(r'^testing/([0-9]+)$')
] 

from django.conf.urls import url 
from restApi import views 
 
urlpatterns = [ 
    url(r'^api/restApi$', views.restApi_list),
    url(r'^api/restApi/(?P<pk>[0-9]+)$', views.restApi_detail),
    url(r'^api/restApi/published$', views.restApi_list_published)
]
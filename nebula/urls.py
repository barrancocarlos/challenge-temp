from django.conf.urls import url
from django.views.generic import TemplateView
from nebula import views

urlpatterns = [    
    url('^$', views.home, name='home'),
    url('^datasets/$', views.datasets, name='datasets'),
]
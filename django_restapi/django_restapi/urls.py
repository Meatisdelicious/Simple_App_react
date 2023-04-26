"""
URL configuration for django_restapi project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django_restapi import views
from rest_framework.urlpatterns import format_suffix_patterns
urlpatterns = [
    path('admin/', admin.site.urls),
    # To say what URL hits this views (file) ( pretty much the path of the url )
    path('drinks/', views.drink_list),
    path('drinks/<int:id>', views.drink_detail)
]

# to be able to be able to input url patterns directly in the browser
urlpattern = format_suffix_patterns(urlpatterns)

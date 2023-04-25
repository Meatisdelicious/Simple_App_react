from django.urls import path
# from the currnet folder, we import views file
from . import views

# URLConf
urlpatterns = [
    path('hello/', views.say_hello)
]

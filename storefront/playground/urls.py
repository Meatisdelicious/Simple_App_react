from django.urls import path
# from the currnet folder, we import views file
from . import views

# URLConfiguration
urlpatterns = [
    path('playground/hello', views.say_hello)
]

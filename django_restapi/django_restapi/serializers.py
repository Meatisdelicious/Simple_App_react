# describes the process from going to a python object to JSON
from rest_framework import serializers
from .models import Drink


class DrinkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Drink
        fields = ['id', 'name', 'description']

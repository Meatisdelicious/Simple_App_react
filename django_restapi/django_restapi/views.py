from django.http import JsonResponse
from .models import Drink
from .serializers import DrinkSerializer
from rest_framework.decorators import api_view


# something you put above a function to describe it in some way
@api_view('GET', 'POST')
def drink_list(request):
    # get all the drinks from class Drink
    drinks = Drink.objects.all()
    # serialize them
    serializer = DrinkSerializer(drinks, many=True)
    # return json
    return JsonResponse({"drinks": serializer.data})

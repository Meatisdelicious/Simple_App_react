from django.http import JsonResponse
from .models import Drink
from .serializers import DrinkSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status


# something you put above a function to describe it in some way
@api_view(['GET', 'POST'])
def drink_list(request):

    if request.method == 'GET':
        # get all the drinks from class Drink
        drinks = Drink.objects.all()
        # serialize them
        serializer = DrinkSerializer(drinks, many=True)
        # return json
        return JsonResponse({"drinks": serializer.data})

    if request.method == 'POST':
        serializer = DrinkSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET', 'PUT', 'DELETE'])
def drink_detail(request, id):
    # Cheking if it's a valid request
    try:
        drink = Drink.objects.get(pk=id)
    except Drink.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = DrinkSerializer(drink)
        return Response(serializer.data)
    elif request.method == 'PUT':
        pass
    elif request.method == 'DELETE':
        pass
    return

from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
...

@api_view(['GET', 'POST', 'DELETE'])
def restApi_list(request):
    # GET list of tutorials, POST a new tutorial, DELETE all tutorials
 
 
@api_view(['GET', 'PUT', 'DELETE'])
def restApi_detail(request, pk):
    # find tutorial by pk (id)
    try: 
        tutorial = RestApi.objects.get(pk=pk) 
    except RestApi.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 
 
    # GET / PUT / DELETE tutorial
    
        
@api_view(['GET'])
def restApi_list_published(request):
    # GET all published tutorials
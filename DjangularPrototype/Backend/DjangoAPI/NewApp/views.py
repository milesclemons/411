from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from NewApp.models import Employees
from NewApp.serializers import EmployeeSerializer

from django.core.files.storage import default_storage

from django.http import HttpResponse
from django.template import loader
import http.client

# Create your views here.
  
@csrf_exempt
def form(request):
  employees = Employees.objects.all().values()
  template = loader.get_template('index.html')
  context = {
    'employees': employees,
  }
  return HttpResponse(template.render(context, request))

@csrf_exempt
def select(request):
  mydata = Employees.objects.filter(EmployeeId = '11').values()
  template = loader.get_template('index.html')
  context = {
    'employees': mydata,
  }
  return HttpResponse(template.render(context, request))


@csrf_exempt
def testing(request, id):
  mydata = Employees.objects.filter(EmployeeId = id).values()
  template = loader.get_template('index.html')
  context = {
    'employees': mydata,
  }
  return HttpResponse(template.render(context, request))

@csrf_exempt
def employeeApi(request,id=0):
    if request.method=='GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)

    elif request.method=='POST':
        employee_data=JSONParser().parse(request)
        employee_serializer = EmployeeSerializer(data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        employee_data = JSONParser().parse(request)
        employee=Employees.objects.get(EmployeeId=employee_data['EmployeeId'])
        employee_serializer=EmployeeSerializer(employee,data=employee_data)
        if employee_serializer.is_valid():
            employee_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        employee=Employees.objects.get(EmployeeId=id)
        employee.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)
"""
@csrf_exempt
def foodPicApi(request,id=0):
    if request.method=='GET':
        employees = Employees.objects.all()
        employees_serializer = EmployeeSerializer(employees, many=True)
        return JsonResponse(employees_serializer.data, safe=False)
"""

@csrf_exempt
def recipe(request):
  conn = http.client.HTTPSConnection("recipesapi2.p.rapidapi.com")

  headers = {
      'X-RapidAPI-Key': "010ca04508msh45bd4d297b578f4p1fc18bjsn5d648ac7eeea",
      'X-RapidAPI-Host': "recipesapi2.p.rapidapi.com"
      }

  conn.request("GET", "/recipes/tomato%20soup?maxRecipes=2", headers=headers)

  res = conn.getresponse()
  data = res.read()

  print(data.decode("utf-8"))


@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)

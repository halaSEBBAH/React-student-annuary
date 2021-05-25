from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt 
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse 
from StudentApp.models import Students, Departments, Articles
from StudentApp.serializers import StudentSerializer, DepartmentSerializer ,ArticleSerializer
from django.core.files.storage import default_storage


@csrf_exempt
def departmentApi(request, id=0):

    if request.method=='GET' :
        departments = Departments.objects.all()
        departments_serializer = DepartmentSerializer(departments, many=True)  
        return JsonResponse(departments_serializer.data,safe=False) 

    elif request.method=='POST' :
        department_data = JSONParser().parse(request)
        department_serializer = DepartmentSerializer(data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to add",safe=False)
        
    elif request.method== 'PUT' :
        department_data = JSONParser().parse(request)
        department = Departments.objects.get(DepartmentId=department_data['DepartmentId'])
        # should understand this line ??
        department_serializer = DepartmentSerializer(department,data=department_data)
        if department_serializer.is_valid():
            department_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Not Updated",safe=False)
    
    elif request.method== 'DELETE' :
        department = Departments.objects.get(DepartmentId=id)
        department.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def studentApi(request, id=0):

    if request.method=='GET' :
        students = Students.objects.all()
        students_serializer = StudentSerializer(students, many=True)
        return JsonResponse(students_serializer.data,safe=False)

    elif request.method=='POST' :
        student_data = JSONParser().parse(request)
        student_serializer = StudentSerializer(data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to add",safe=False)
        
    elif request.method== 'PUT' :
        student_data = JSONParser().parse(request)
        student = Students.objects.get(StudentId=student_data['StudentId'])
        # should understand this line ??
        student_serializer = StudentSerializer(student,data=student_data)
        if student_serializer.is_valid():
            student_serializer.save()
            return JsonResponse("Updated Successfully",safe=False)
        return JsonResponse("Not Updated",safe=False)
    
    elif request.method== 'DELETE' :
        student = Students.objects.get(StudentId=id)
        student.delete()
        return JsonResponse("Deleted Successfully", safe=False)



@csrf_exempt
def articleApi(request, id=0):

    if request.method=='GET' :
        articles = Articles.objects.all()
        articles_serializer = ArticleSerializer(articles, many=True)
        return JsonResponse(articles_serializer.data,safe=False)

    
    elif request.method=='POST' :
        article_data = JSONParser().parse(request)
        article_serializer = ArticleSerializer(data=article_data)
        if article_serializer.is_valid():
            article_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to add",safe=False)

    elif request.method== 'DELETE' :
        article = Articles.objects.get(ArticleId=id)
        article.delete()
        return JsonResponse("Deleted Successfully", safe=False)


@csrf_exempt
def SaveFile(request):
    file=request.FILES['myFile']
    file_name = default_storage.save(file.name,file)
    return JsonResponse(file_name,safe=False)
    
    



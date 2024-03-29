from django.db import models

# Create your models here.

class Departments(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)


class Students(models.Model):
    StudentId = models.AutoField(primary_key=True)
    StudentName = models.CharField(max_length=100)
    Department = models.CharField(max_length=100)
    DateOfJoining = models.DateField()
    PhotoFileName = models.CharField(max_length=100)
    

class Articles(models.Model):
    ArticleId = models.AutoField(primary_key=True)
    ArticleTitle = models.TextField()
    ArticleContent = models.TextField()


    






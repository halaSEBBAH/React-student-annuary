from rest_framework import serializers
from StudentApp.models import Departments, Students , Articles


class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Departments
        fields = ('DepartmentId', 'DepartmentName')



class StudentSerializer(serializers.ModelSerializer):
    class Meta :
        model = Students
        fields = ('StudentId', 'StudentName', 'Department', 'DateOfJoining', 'PhotoFileName')

        
class ArticleSerializer(serializers.ModelSerializer):
    class Meta :
        model = Articles
        fields = ('ArticleId','ArticleTitle', 'ArticleContent')




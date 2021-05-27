from django.conf.urls import url
from StudentApp import views

from django.conf.urls.static import static 
from django.conf import settings

urlpatterns = [
    url(r'^department/$', views.departmentApi),
    url(r'^department/([0-9]+)$', views.departmentApi),
    
    url(r'^student/$', views.studentApi),
    url(r'^student/([0-9]+)$', views.studentApi),

    url(r'^Student/SaveFile$', views.SaveFile),
    url(r'^article/$', views.articleApi),
    url(r'^article/([0-9]+)$', views.articleApi),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)








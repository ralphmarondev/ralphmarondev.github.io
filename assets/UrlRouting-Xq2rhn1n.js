import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-D7ikJtJE.js";import{_ as l}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-Ca5_d8z1.js";import{C as r}from"./CodeBlock-BmaIm1zG.js";import{_ as i}from"./ImageBlock.vue_vue_type_script_setup_true_lang-wAb2lTsJ.js";import{u as y}from"./djangoRestStore-evRa4N2v.js";import{d as b,r as o,p as f,l as a,m as c,o as R,a as e,t as w,b as s,k as n}from"./index-BZPLMLwK.js";const U="July 26, 2026",q=b({__name:"UrlRouting",setup(v){const g=y(),d=o(`
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
]
`),p=o(`
from django.http import HttpResponse


def home(request):
    return HttpResponse("Welcome to Django!")
`),u=o(`
from django.urls import path
from .views import home

urlpatterns = [
    path('', home),
]
`),m=o(`
from django.urls import path, include

urlpatterns = [
    path('students/', include('students.urls')),
]
`);return(L,t)=>(R(),f(x,{title:"Django REST Framework",navigation:c(g).sections},{default:a(()=>[t[2]||(t[2]=e("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Django URL Routing ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+w(U)),t[3]||(t[3]=e("p",{class:"text-gray-600 text-lg mb-6"}," URL routing is the process of connecting a URL request to a specific function or class that handles the request. ",-1)),t[4]||(t[4]=e("p",{class:"text-gray-600 text-lg mb-6"},[s(" In Django, URLs are managed using URL configuration files commonly called "),e("code",null,"urls.py"),s(". These files define which view should be executed when a user accesses a specific URL. ")],-1)),n(l,null,{default:a(()=>[...t[0]||(t[0]=[s(" Django URL routing acts as a map that tells Django where each request should go. ",-1)])]),_:1}),n(i,{src:"/tutorials/django/url-routing-flow.png",alt:"Django URL Routing Flow",caption:"Figure 11.1 Django URL routing connects requests to views."}),t[5]||(t[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," How Django Routing Works ",-1)),t[6]||(t[6]=e("p",{class:"text-gray-600 text-lg mb-4"}," When a user enters a URL, Django follows a sequence to find the correct response. ",-1)),t[7]||(t[7]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`User Request

      |
      v

Project urls.py

      |
      v

Application urls.py

      |
      v

View Function / Class

      |
      v

Response
`)],-1)),t[8]||(t[8]=e("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[e("li",null," The browser sends a request. "),e("li",null," Django checks the URL patterns. "),e("li",null," The matching URL calls a view. "),e("li",null," The view returns a response. ")],-1)),t[9]||(t[9]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," The urls.py File ",-1)),t[10]||(t[10]=e("p",{class:"text-gray-600 text-lg mb-4"},[s(" Every Django project contains a main "),e("code",null,"urls.py"),s(" file that controls the application's main URL routes. ")],-1)),n(r,{code:d.value,language:"python"},null,8,["code"]),t[11]||(t[11]=e("p",{class:"text-gray-600 text-lg mb-6"},[s(" The "),e("code",null,"urlpatterns"),s(" list contains all available routes in the application. ")],-1)),t[12]||(t[12]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating a View ",-1)),t[13]||(t[13]=e("p",{class:"text-gray-600 text-lg mb-4"}," A URL needs a view to handle the request. Views contain the logic that processes incoming requests and returns responses. ",-1)),n(r,{code:p.value,language:"python"},null,8,["code"]),t[14]||(t[14]=e("p",{class:"text-gray-600 text-lg mb-6"}," This view returns a simple text response when called. ",-1)),t[15]||(t[15]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Connecting a URL to a View ",-1)),t[16]||(t[16]=e("p",{class:"text-gray-600 text-lg mb-4"},[s(" The view must be connected to a URL pattern using the "),e("code",null,"path()"),s(" function. ")],-1)),n(r,{code:u.value,language:"python"},null,8,["code"]),t[17]||(t[17]=e("p",{class:"text-gray-600 text-lg mb-6"},[s(" Now when users visit the root URL, Django executes the "),e("code",null,"home()"),s(" view. ")],-1)),n(i,{src:"/tutorials/django/url-view-connection.png",alt:"URL View Connection",caption:"Figure 11.2 URL patterns connect URLs to views."}),t[18]||(t[18]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Application URL Configuration ",-1)),t[19]||(t[19]=e("p",{class:"text-gray-600 text-lg mb-4"}," In larger projects, it is recommended to create separate URL files for each Django application. ",-1)),t[20]||(t[20]=e("p",{class:"text-gray-600 text-lg mb-4"}," The main project URL file can include application routes. ",-1)),n(r,{code:m.value,language:"python"},null,8,["code"]),t[21]||(t[21]=e("p",{class:"text-gray-600 text-lg mb-6"},[s(" This means every URL beginning with "),e("code",null,"/students/"),s(" will be handled by the students application. ")],-1)),t[22]||(t[22]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," URL Patterns ",-1)),t[23]||(t[23]=e("div",{class:"overflow-x-auto mb-6"},[e("table",{class:"min-w-full border border-gray-300 text-lg"},[e("thead",{class:"bg-gray-100 dark:bg-gray-800"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," URL Pattern "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Purpose ")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," /admin/ "),e("td",{class:"border border-gray-300 px-4 py-2"}," Django administration panel. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," /students/ "),e("td",{class:"border border-gray-300 px-4 py-2"}," Student-related features. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," /api/ "),e("td",{class:"border border-gray-300 px-4 py-2"}," REST API endpoints. ")])])])],-1)),t[24]||(t[24]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," URL Routing in Django REST Framework ",-1)),t[25]||(t[25]=e("p",{class:"text-gray-600 text-lg mb-4"}," In Django REST Framework, URLs are used to expose API endpoints. Each endpoint points to an API view. ",-1)),t[26]||(t[26]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`GET /api/students/

        |
        v

StudentAPIView

        |
        v

JSON Response
`)],-1)),n(l,null,{default:a(()=>[...t[1]||(t[1]=[s(" Every REST API endpoint starts with URL routing. Without a URL, clients cannot access your API. ",-1)])]),_:1}),t[27]||(t[27]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),t[28]||(t[28]=e("p",{class:"text-gray-600 text-lg"},[s(" Django URL routing connects incoming requests to the correct views. The "),e("code",null,"urls.py"),s(" file defines application routes using URL patterns. In Django REST Framework, URL routing becomes the foundation for creating API endpoints that clients can access. ")],-1))]),_:1},8,["navigation"]))}});export{q as default};

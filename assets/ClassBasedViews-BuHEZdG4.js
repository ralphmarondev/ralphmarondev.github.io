import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-D7ikJtJE.js";import{_ as n}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-Ca5_d8z1.js";import{C as l}from"./CodeBlock-BmaIm1zG.js";import{_ as d}from"./ImageBlock.vue_vue_type_script_setup_true_lang-wAb2lTsJ.js";import{u as b}from"./djangoRestStore-evRa4N2v.js";import{d as y,r,p as f,l as o,m as w,o as c,a as e,t as P,b as t,k as a}from"./index-BZPLMLwK.js";const v="July 26, 2026",h=y({__name:"ClassBasedViews",setup(A){const i=b(),u=r(`
from rest_framework.views import APIView
from rest_framework.response import Response


class StudentAPIView(APIView):

    def get(self, request):

        return Response({
            "message": "List of students"
        })
`),p=r(`
class StudentAPIView(APIView):

    def get(self, request):

        return Response({
            "message": "Retrieve students"
        })


    def post(self, request):

        return Response({
            "message": "Create student"
        })
`),g=r(`
from django.urls import path
from .views import StudentAPIView


urlpatterns = [

    path(
        'students/',
        StudentAPIView.as_view()
    )

]
`),m=r(`
class StudentDetailAPIView(APIView):

    def get(self, request, id):

        return Response({
            "student_id": id
        })


    def delete(self, request, id):

        return Response({
            "message": "Student deleted"
        })
`);return(I,s)=>(c(),f(x,{title:"Django REST Framework",navigation:w(i).sections},{default:o(()=>[s[2]||(s[2]=e("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Class-Based API Views ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+P(v)),s[3]||(s[3]=e("p",{class:"text-gray-600 text-lg mb-6"}," Class-Based API Views (CBV) allow developers to create REST API endpoints using Python classes instead of functions. ",-1)),s[4]||(s[4]=e("p",{class:"text-gray-600 text-lg mb-6"},[t(" Django REST Framework provides the "),e("code",null,"APIView"),t(" class, which handles HTTP requests and provides a structured way to organize API logic. ")],-1)),a(n,null,{default:o(()=>[...s[0]||(s[0]=[t(" Class-Based API Views organize API endpoints into classes where each HTTP method is represented by a separate method. ",-1)])]),_:1}),a(d,{src:"/tutorials/django/class-based-api-view-flow.png",alt:"Class Based API View Flow",caption:"Figure 17.1 Class-Based API Views organize requests using classes."}),s[5]||(s[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Why Use Class-Based API Views? ",-1)),s[6]||(s[6]=e("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[e("li",null," Better organization of API logic. "),e("li",null," Supports object-oriented programming principles. "),e("li",null," Easier code reuse through inheritance. "),e("li",null," Better structure for large applications. "),e("li",null," Works well with DRF generic views and viewsets. ")],-1)),s[7]||(s[7]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," APIView Class ",-1)),s[8]||(s[8]=e("p",{class:"text-gray-600 text-lg mb-4"},[e("code",null,"APIView"),t(" is the foundation of DRF class-based views. Developers create a class that inherits from it and define HTTP method handlers. ")],-1)),s[9]||(s[9]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`HTTP Method

     |
     v

APIView Class

     |
     |
 -----------------
 |       |       |
get()  post()  delete()

`)],-1)),s[10]||(s[10]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating a Basic Class-Based API View ",-1)),a(l,{code:u.value,language:"python"},null,8,["code"]),s[11]||(s[11]=e("p",{class:"text-gray-600 text-lg mb-6"},[t(" The "),e("code",null,"get()"),t(" method handles GET requests and returns a JSON response using DRF's "),e("code",null,"Response"),t(" class. ")],-1)),s[12]||(s[12]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Handling Multiple HTTP Methods ",-1)),s[13]||(s[13]=e("p",{class:"text-gray-600 text-lg mb-4"}," One class can handle multiple operations by defining different methods. ",-1)),a(l,{code:p.value,language:"python"},null,8,["code"]),s[14]||(s[14]=e("div",{class:"overflow-x-auto mb-6"},[e("table",{class:"min-w-full border border-gray-300 text-lg"},[e("thead",{class:"bg-gray-100 dark:bg-gray-800"},[e("tr",null,[e("th",{class:"border px-4 py-2 text-left"}," Method "),e("th",{class:"border px-4 py-2 text-left"}," Purpose ")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border px-4 py-2"}," get() "),e("td",{class:"border px-4 py-2"}," Retrieve data. ")]),e("tr",null,[e("td",{class:"border px-4 py-2"}," post() "),e("td",{class:"border px-4 py-2"}," Create new data. ")]),e("tr",null,[e("td",{class:"border px-4 py-2"}," put() "),e("td",{class:"border px-4 py-2"}," Update data. ")]),e("tr",null,[e("td",{class:"border px-4 py-2"}," delete() "),e("td",{class:"border px-4 py-2"}," Remove data. ")])])])],-1)),s[15]||(s[15]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Connecting Class-Based Views to URLs ",-1)),s[16]||(s[16]=e("p",{class:"text-gray-600 text-lg mb-4"},[t(" Class-based views must use the "),e("code",null,"as_view()"),t(" method when connected to URL patterns. ")],-1)),a(l,{code:g.value,language:"python"},null,8,["code"]),s[17]||(s[17]=e("p",{class:"text-gray-600 text-lg mb-6"},[t(" The "),e("code",null,"as_view()"),t(" method converts the class into a callable view that Django can process. ")],-1)),a(d,{src:"/tutorials/django/class-url-routing.png",alt:"Class Based URL Routing",caption:"Figure 17.2 URL patterns connect requests to API classes."}),s[18]||(s[18]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Handling URL Parameters ",-1)),s[19]||(s[19]=e("p",{class:"text-gray-600 text-lg mb-4"}," Class-Based API Views can receive parameters from URLs. ",-1)),a(l,{code:m.value,language:"python"},null,8,["code"]),s[20]||(s[20]=e("p",{class:"text-gray-600 text-lg mb-6"}," This example handles requests such as: ",-1)),s[21]||(s[21]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`GET /students/5/

id = 5
`)],-1)),s[22]||(s[22]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Function-Based vs Class-Based API Views ",-1)),s[23]||(s[23]=e("div",{class:"overflow-x-auto mb-6"},[e("table",{class:"min-w-full border border-gray-300 text-lg"},[e("thead",{class:"bg-gray-100 dark:bg-gray-800"},[e("tr",null,[e("th",{class:"border px-4 py-2"}," Function-Based "),e("th",{class:"border px-4 py-2"}," Class-Based ")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border px-4 py-2"}," Uses functions. "),e("td",{class:"border px-4 py-2"}," Uses classes. ")]),e("tr",null,[e("td",{class:"border px-4 py-2"}," Simpler syntax. "),e("td",{class:"border px-4 py-2"}," More organized structure. ")]),e("tr",null,[e("td",{class:"border px-4 py-2"}," Good for small APIs. "),e("td",{class:"border px-4 py-2"}," Better for complex systems. ")])])])],-1)),s[24]||(s[24]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Advantages of Class-Based Views ",-1)),s[25]||(s[25]=e("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[e("li",null," Code can be reused through inheritance. "),e("li",null," Separates different HTTP operations clearly. "),e("li",null," Easier to extend with authentication and permissions. "),e("li",null," Provides the foundation for generic views and viewsets. ")],-1)),a(n,null,{default:o(()=>[...s[1]||(s[1]=[t(" Class-Based API Views are commonly used in production Django REST Framework applications because they provide cleaner organization and scale better as projects grow. ",-1)])]),_:1}),s[26]||(s[26]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),s[27]||(s[27]=e("p",{class:"text-gray-600 text-lg"},[t(" Class-Based API Views use Python classes to create REST API endpoints. The APIView class provides methods such as "),e("code",null,"get()"),t(", "),e("code",null,"post()"),t(", "),e("code",null,"put()"),t(", and "),e("code",null,"delete()"),t(" for handling HTTP requests. They provide better structure and scalability compared to function-based API views. ")],-1))]),_:1},8,["navigation"]))}});export{h as default};

import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{_ as l}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-DK7RfPDB.js";import{C as o}from"./CodeBlock-DXevIYip.js";import{_ as y}from"./ImageBlock.vue_vue_type_script_setup_true_lang-LEeV8n9S.js";import{u as b}from"./djangoRestStore-DBXapxyV.js";import{d as f,r as n,p as w,l as a,m as c,o as v,a as t,t as P,b as s,k as r}from"./index-DaKFBQPl.js";const F="July 26, 2026",S=f({__name:"FunctionBasedViews",setup(T){const i=b(),d=n(`
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view()
def students(request):
    return Response({
        "message": "Student list"
    })
`),p=n(`
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def students(request):

    return Response({
        "message": "Getting students"
    })
`),u=n(`
@api_view(['GET', 'POST'])
def students(request):

    if request.method == 'GET':

        return Response({
            "message": "Retrieve students"
        })


    elif request.method == 'POST':

        return Response({
            "message": "Create student"
        })
`),g=n(`
from django.urls import path
from .views import students


urlpatterns = [
    path(
        'students/',
        students
    )
]
`),m=n(`
{
    "name": "Ralph",
    "age": 22
}
`);return(V,e)=>(v(),w(x,{title:"Django REST Framework",navigation:c(i).sections},{default:a(()=>[e[2]||(e[2]=t("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Function-Based API Views ",-1)),t("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+P(F)),e[3]||(e[3]=t("p",{class:"text-gray-600 text-lg mb-6"}," Function-Based API Views (FBV) allow developers to create REST API endpoints using regular Python functions. ",-1)),e[4]||(e[4]=t("p",{class:"text-gray-600 text-lg mb-6"},[s(" Instead of creating a class that inherits from "),t("code",null,"APIView"),s(", developers create a function and use the "),t("code",null,"@api_view"),s(" decorator provided by Django REST Framework. ")],-1)),r(l,null,{default:a(()=>[...e[0]||(e[0]=[s(" Function-Based API Views are the simplest way to create API endpoints in Django REST Framework. ",-1)])]),_:1}),r(y,{src:"/tutorials/django/function-based-api-view-flow.png",alt:"Function Based API View Flow",caption:"Figure 16.1 Function-Based API Views process requests using Python functions."}),e[5]||(e[5]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," What is a Function-Based API View? ",-1)),e[6]||(e[6]=t("p",{class:"text-gray-600 text-lg mb-4"}," A Function-Based API View is a Python function that receives a request and returns an API response. ",-1)),e[7]||(e[7]=t("p",{class:"text-gray-600 text-lg mb-6"},[s(" DRF provides the "),t("code",null,"@api_view"),s(" decorator to convert a normal Django function into an API endpoint. ")],-1)),e[8]||(e[8]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`Normal Django View

def view(request)


        ↓


DRF Function-Based View

@api_view()

def view(request)
`)],-1)),e[9]||(e[9]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating a Basic Function-Based API View ",-1)),e[10]||(e[10]=t("p",{class:"text-gray-600 text-lg mb-4"}," The following example creates a simple API endpoint. ",-1)),r(o,{code:d.value,language:"python"},null,8,["code"]),e[11]||(e[11]=t("p",{class:"text-gray-600 text-lg mb-6"},[s(" The "),t("code",null,"Response"),s(" object automatically converts Python data into JSON format. ")],-1)),e[12]||(e[12]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," The @api_view Decorator ",-1)),e[13]||(e[13]=t("p",{class:"text-gray-600 text-lg mb-4"},[s(" The "),t("code",null,"@api_view"),s(" decorator defines which HTTP methods are allowed for an endpoint. ")],-1)),r(o,{code:p.value,language:"python"},null,8,["code"]),e[14]||(e[14]=t("p",{class:"text-gray-600 text-lg mb-6"}," In this example, the endpoint only accepts GET requests. ",-1)),e[15]||(e[15]=t("h2",{class:"text-2xl font-semibold text-gray-100 mt-10 mb-4"}," Handling Multiple HTTP Methods ",-1)),e[16]||(e[16]=t("p",{class:"text-gray-600 text-lg mb-4"}," A single function can handle multiple operations depending on the request method. ",-1)),r(o,{code:u.value,language:"python"},null,8,["code"]),e[17]||(e[17]=t("div",{class:"overflow-x-auto mt-6 mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border px-4 py-2 text-left"}," Method "),t("th",{class:"border px-4 py-2 text-left"}," Purpose ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border px-4 py-2"}," GET "),t("td",{class:"border px-4 py-2"}," Retrieve existing data. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," POST "),t("td",{class:"border px-4 py-2"}," Create new data. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," PUT "),t("td",{class:"border px-4 py-2"}," Update existing data. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," DELETE "),t("td",{class:"border px-4 py-2"}," Delete data. ")])])])],-1)),e[18]||(e[18]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Connecting FBV to URLs ",-1)),e[19]||(e[19]=t("p",{class:"text-gray-600 text-lg mb-4"}," Like normal Django views, Function-Based API Views must be connected to URL patterns. ",-1)),r(o,{code:g.value,language:"python"},null,8,["code"]),e[20]||(e[20]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Accessing Request Data ",-1)),e[21]||(e[21]=t("p",{class:"text-gray-600 text-lg mb-4"},[s(" For POST requests, clients send data inside the request body. DRF provides "),t("code",null,"request.data"),s(" to access this information. ")],-1)),r(o,{code:m.value,language:"json"},null,8,["code"]),e[22]||(e[22]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`def create_student(request):

    name = request.data['name']

`)],-1)),e[23]||(e[23]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Function-Based Views vs APIView ",-1)),e[24]||(e[24]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border px-4 py-2"}," Function-Based API View "),t("th",{class:"border px-4 py-2"}," APIView ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border px-4 py-2"}," Uses Python functions. "),t("td",{class:"border px-4 py-2"}," Uses classes. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," Simple and beginner-friendly. "),t("td",{class:"border px-4 py-2"}," More structured. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," Good for small APIs. "),t("td",{class:"border px-4 py-2"}," Better for larger systems. ")])])])],-1)),e[25]||(e[25]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," When to Use Function-Based API Views ",-1)),e[26]||(e[26]=t("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[t("li",null," Small API endpoints. "),t("li",null," Simple CRUD operations. "),t("li",null," Beginner projects. "),t("li",null," Quick prototypes. ")],-1)),r(l,null,{default:a(()=>[...e[1]||(e[1]=[s(" Function-Based API Views are easier to understand, but larger applications usually use Class-Based Views, Generic Views, or ViewSets for better organization. ",-1)])]),_:1}),e[27]||(e[27]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),e[28]||(e[28]=t("p",{class:"text-gray-600 text-lg"},[s(" Function-Based API Views allow developers to create REST endpoints using Python functions. The "),t("code",null,"@api_view"),s(" decorator converts a function into an API endpoint capable of handling HTTP requests and returning JSON responses. They provide a simple introduction to API development before moving to more advanced DRF patterns. ")],-1))]),_:1},8,["navigation"]))}});export{S as default};

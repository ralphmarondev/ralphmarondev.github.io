import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-rmfghmAq.js";import{_ as l}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-Dgnb2M-y.js";import{C as a}from"./CodeBlock-D8jROP2n.js";import{_ as i}from"./ImageBlock.vue_vue_type_script_setup_true_lang-CgBnHqpC.js";import{u as b}from"./djangoRestStore-J_RKQmxt.js";import{d as y,r as n,p as w,l as o,m as f,o as P,a as t,t as A,k as r,b as s}from"./index-BMgOVC93.js";const I="July 26, 2026",j=y({__name:"APIViews",setup(V){const d=b(),g=n(`
from rest_framework.views import APIView
from rest_framework.response import Response


class StudentAPIView(APIView):

    def get(self, request):

        data = {
            "message": "List of students"
        }

        return Response(data)
`),u=n(`
class StudentAPIView(APIView):

    def post(self, request):

        name = request.data['name']

        return Response({
            "message": f"Student {name} created"
        })
`),p=n(`
from django.urls import path
from .views import StudentAPIView


urlpatterns = [
    path(
        'students/',
        StudentAPIView.as_view()
    )
]
`),m=n(`
{
    "name": "Ralph",
    "age": 22
}
`);return(v,e)=>(P(),w(x,{title:"Django REST Framework",navigation:f(d).sections},{default:o(()=>[e[2]||(e[2]=t("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Django REST Framework API Views ",-1)),t("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+A(I)),e[3]||(e[3]=t("p",{class:"text-gray-600 text-lg mb-6"}," API Views are components in Django REST Framework responsible for handling requests and returning API responses. ",-1)),e[4]||(e[4]=t("p",{class:"text-gray-600 text-lg mb-6"}," Unlike traditional Django views that usually return HTML pages, API Views return data formats such as JSON that can be consumed by mobile applications, web applications, and other systems. ",-1)),r(l,null,{default:o(()=>[...e[0]||(e[0]=[s(" An API View is the entry point of a REST API. It receives client requests, processes data, and returns responses. ",-1)])]),_:1}),r(i,{src:"/tutorials/django/api-view-flow.png",alt:"Django REST API View Flow",caption:"Figure 15.1 API Views process requests and return JSON responses."}),e[5]||(e[5]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Django Views vs API Views ",-1)),e[6]||(e[6]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border border-gray-300 px-4 py-2"}," Django View "),t("th",{class:"border border-gray-300 px-4 py-2"}," DRF API View ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," Returns HTML responses. "),t("td",{class:"border border-gray-300 px-4 py-2"}," Returns JSON responses. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," Uses HttpResponse. "),t("td",{class:"border border-gray-300 px-4 py-2"}," Uses Response. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," Uses functions or classes. "),t("td",{class:"border border-gray-300 px-4 py-2"}," Uses APIView, Generic Views, ViewSets. ")])])])],-1)),e[7]||(e[7]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," What is APIView? ",-1)),e[8]||(e[8]=t("p",{class:"text-gray-600 text-lg mb-4"},[t("code",null,"APIView"),s(" is a class provided by Django REST Framework that allows developers to create API endpoints using class-based views. ")],-1)),e[9]||(e[9]=t("p",{class:"text-gray-600 text-lg mb-6"}," Each HTTP method is handled using a separate class method. ",-1)),e[10]||(e[10]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`GET      → get()

POST     → post()

PUT      → put()

DELETE   → delete()
`)],-1)),e[11]||(e[11]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating an API View ",-1)),e[12]||(e[12]=t("p",{class:"text-gray-600 text-lg mb-4"},[s(" An API View is created by inheriting from "),t("code",null,"APIView"),s(". ")],-1)),r(a,{code:g.value,language:"python"},null,8,["code"]),e[13]||(e[13]=t("p",{class:"text-gray-600 text-lg mb-6"},[s(" The "),t("code",null,"Response"),s(" class automatically converts Python data into JSON format. ")],-1)),e[14]||(e[14]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Connecting API Views to URLs ",-1)),e[15]||(e[15]=t("p",{class:"text-gray-600 text-lg mb-4"}," API Views must be connected to URL patterns before clients can access them. ",-1)),r(a,{code:p.value,language:"python"},null,8,["code"]),e[16]||(e[16]=t("p",{class:"text-gray-600 text-lg mb-6"},[s(" The "),t("code",null,"as_view()"),s(" method converts the class into a callable view that Django can execute. ")],-1)),r(i,{src:"/tutorials/django/api-url-view.png",alt:"API URL View Connection",caption:"Figure 15.2 URLs connect API endpoints to API Views."}),e[17]||(e[17]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Handling GET Requests ",-1)),e[18]||(e[18]=t("p",{class:"text-gray-600 text-lg mb-6"}," GET requests are commonly used for retrieving resources from the API. ",-1)),e[19]||(e[19]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`GET /api/students/

Response:

[
    {
        "name": "Ralph",
        "age": 22
    }
]
`)],-1)),e[20]||(e[20]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Handling POST Requests ",-1)),e[21]||(e[21]=t("p",{class:"text-gray-600 text-lg mb-4"}," POST requests are used to send new data to the server. ",-1)),r(a,{code:u.value,language:"python"},null,8,["code"]),e[22]||(e[22]=t("p",{class:"text-gray-600 text-lg mb-4"}," The client sends data through the request body. ",-1)),r(a,{code:m.value,language:"json"},null,8,["code"]),e[23]||(e[23]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Request Object in API Views ",-1)),e[24]||(e[24]=t("p",{class:"text-gray-600 text-lg mb-4"}," DRF extends Django's request object with additional API features. ",-1)),e[25]||(e[25]=t("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[t("li",null,[t("code",null,"request.data"),s(" - contains submitted JSON data. ")]),t("li",null,[t("code",null,"request.query_params"),s(" - contains URL query parameters. ")]),t("li",null,[t("code",null,"request.user"),s(" - contains authenticated user information. ")])],-1)),e[26]||(e[26]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," API View Request Flow ",-1)),e[27]||(e[27]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`Client

 |

 v

URL Endpoint

 |

 v

APIView

 |

 v

Business Logic

 |

 v

Response(JSON)
`)],-1)),r(l,null,{default:o(()=>[...e[1]||(e[1]=[s(" API Views are the foundation of Django REST Framework. More advanced DRF features such as serializers, generic views, and viewsets build on top of this concept. ",-1)])]),_:1}),e[28]||(e[28]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),e[29]||(e[29]=t("p",{class:"text-gray-600 text-lg"}," API Views handle requests and responses in Django REST Framework. They receive client requests, execute application logic, and return JSON responses. The APIView class provides a structured way to create REST API endpoints using HTTP methods such as GET and POST. ",-1))]),_:1},8,["navigation"]))}});export{j as default};

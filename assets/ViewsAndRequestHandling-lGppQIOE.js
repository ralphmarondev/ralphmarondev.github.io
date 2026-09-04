import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{_ as l}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-DK7RfPDB.js";import{C as n}from"./CodeBlock-DXevIYip.js";import{_ as d}from"./ImageBlock.vue_vue_type_script_setup_true_lang-LEeV8n9S.js";import{u as y}from"./djangoRestStore-DBXapxyV.js";import{d as f,r as o,p as w,l as a,m as R,o as v,a as e,t as T,k as s,b as r}from"./index-DaKFBQPl.js";const q="July 26, 2026",E=f({__name:"ViewsAndRequestHandling",setup(c){const i=y(),g=o(`
from django.http import HttpResponse


def home(request):
    return HttpResponse("Hello Django!")
`),p=o(`
def profile(request):

    method = request.method

    return HttpResponse(
        f"Request Method: {method}"
    )
`),u=o(`
def students(request):

    if request.method == "GET":
        return HttpResponse(
            "Retrieving students"
        )
`),m=o(`
def createStudent(request):

    if request.method == "POST":
        return HttpResponse(
            "Creating student"
        )
`),b=o(`
from django.http import JsonResponse


def apiExample(request):

    data = {
        "message": "Hello API"
    }

    return JsonResponse(data)
`);return(j,t)=>(v(),w(x,{title:"Django REST Framework",navigation:R(i).sections},{default:a(()=>[t[2]||(t[2]=e("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Django Views and Request Handling ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+T(q)),t[3]||(t[3]=e("p",{class:"text-gray-600 text-lg mb-6"}," In Django, a view is a component responsible for processing incoming requests and returning responses. ",-1)),t[4]||(t[4]=e("p",{class:"text-gray-600 text-lg mb-6"}," Views contain the application's logic. They receive data from the client, perform operations, communicate with models, and return the result. ",-1)),s(l,null,{default:a(()=>[...t[0]||(t[0]=[r(" A Django view is the bridge between the URL and the application's behavior. ",-1)])]),_:1}),s(d,{src:"/tutorials/django/view-request-response.png",alt:"Django View Request Response",caption:"Figure 12.1 Django views process requests and return responses."}),t[5]||(t[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," What is a Django View? ",-1)),t[6]||(t[6]=e("p",{class:"text-gray-600 text-lg mb-4"}," A Django view is a Python function or class that receives an HTTP request and returns an HTTP response. ",-1)),t[7]||(t[7]=e("p",{class:"text-gray-600 text-lg mb-6"},[r(" A basic view receives a "),e("code",null,"request"),r(" object as a parameter. ")],-1)),s(n,{code:g.value,language:"python"},null,8,["code"]),t[8]||(t[8]=e("p",{class:"text-gray-600 text-lg mb-6"},[r(" The "),e("code",null,"request"),r(" parameter contains information about the client's request, while the returned response is sent back to the client. ")],-1)),t[9]||(t[9]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," The Django Request Object ",-1)),t[10]||(t[10]=e("p",{class:"text-gray-600 text-lg mb-4"}," The request object contains information sent by the client, including: ",-1)),t[11]||(t[11]=e("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[e("li",null," HTTP method (GET, POST, PUT, DELETE) "),e("li",null," URL information "),e("li",null," Request headers "),e("li",null," Submitted form data "),e("li",null," User authentication information ")],-1)),s(n,{code:p.value,language:"python"},null,8,["code"]),t[12]||(t[12]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," HTTP Request Methods ",-1)),t[13]||(t[13]=e("p",{class:"text-gray-600 text-lg mb-4"}," Applications use different HTTP methods depending on the operation being performed. ",-1)),t[14]||(t[14]=e("div",{class:"overflow-x-auto mb-6"},[e("table",{class:"min-w-full border border-gray-300 text-lg"},[e("thead",{class:"bg-gray-100 dark:bg-gray-800"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Method "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Purpose ")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," GET "),e("td",{class:"border border-gray-300 px-4 py-2"}," Retrieve data from the server. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," POST "),e("td",{class:"border border-gray-300 px-4 py-2"}," Send new data to the server. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," PUT "),e("td",{class:"border border-gray-300 px-4 py-2"}," Update existing data. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," DELETE "),e("td",{class:"border border-gray-300 px-4 py-2"}," Remove data. ")])])])],-1)),t[15]||(t[15]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Handling GET Requests ",-1)),t[16]||(t[16]=e("p",{class:"text-gray-600 text-lg mb-4"}," A GET request is commonly used when retrieving information. ",-1)),s(n,{code:u.value,language:"python"},null,8,["code"]),t[17]||(t[17]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Handling POST Requests ",-1)),t[18]||(t[18]=e("p",{class:"text-gray-600 text-lg mb-4"}," A POST request is used when sending new information to the server. ",-1)),s(n,{code:m.value,language:"python"},null,8,["code"]),s(d,{src:"/tutorials/django/post-request-flow.png",alt:"Django Post Request",caption:"Figure 12.2 POST requests send data from clients to servers."}),t[19]||(t[19]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Returning JSON Responses ",-1)),t[20]||(t[20]=e("p",{class:"text-gray-600 text-lg mb-4"}," Traditional Django applications usually return HTML pages. However, REST APIs usually return JSON data. ",-1)),s(n,{code:b.value,language:"python"},null,8,["code"]),t[21]||(t[21]=e("p",{class:"text-gray-600 text-lg mb-6"},[r(" The "),e("code",null,"JsonResponse"),r(" class converts Python dictionaries into JSON responses that can be consumed by applications. ")],-1)),t[22]||(t[22]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Django View Request Flow ",-1)),t[23]||(t[23]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`Client

   |
   v

URL Pattern

   |
   v

View Function

   |
   v

Process Data

   |
   v

HTTP Response
`)],-1)),t[24]||(t[24]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Django Views vs DRF Views ",-1)),t[25]||(t[25]=e("div",{class:"overflow-x-auto mb-6"},[e("table",{class:"min-w-full border border-gray-300 text-lg"},[e("thead",{class:"bg-gray-100 dark:bg-gray-800"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2"}," Django View "),e("th",{class:"border border-gray-300 px-4 py-2"}," DRF API View ")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," Returns HTML pages. "),e("td",{class:"border border-gray-300 px-4 py-2"}," Returns JSON responses. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," Uses HttpResponse. "),e("td",{class:"border border-gray-300 px-4 py-2"}," Uses Response objects. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," Handles web pages. "),e("td",{class:"border border-gray-300 px-4 py-2"}," Handles APIs. ")])])])],-1)),s(l,null,{default:a(()=>[...t[1]||(t[1]=[r(" Django REST Framework builds on top of Django views. Understanding regular Django views makes learning API views much easier. ",-1)])]),_:1}),t[26]||(t[26]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),t[27]||(t[27]=e("p",{class:"text-gray-600 text-lg"}," Django views handle requests and generate responses. Views receive a request object, process application logic, interact with models, and return a response. In Django REST Framework, the same concept is extended to create API endpoints that return JSON data. ",-1))]),_:1},8,["navigation"]))}});export{E as default};

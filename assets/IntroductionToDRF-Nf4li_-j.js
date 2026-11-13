import{_ as g}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-CDCZL-bD.js";import{T as o,a as r,_ as h}from"./TopicNext.vue_vue_type_script_setup_true_lang-ByHyYtG_.js";import{T as l}from"./TopicTerm-Bt_DEisM.js";import{C as i}from"./CodeBlock-bZN1puOf.js";import{O as u}from"./OutputBlock-Cz3Nj6CK.js";import{_ as d}from"./TableBlock.vue_vue_type_script_setup_true_lang-Cxw-iObO.js";import{d as w,h as b,i as a,o as c,a as s,q as n,g as t}from"./index-DJwcHVGb.js";const v={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-8 mt-3 space-y-2"},y="pip install django djangorestframework",P=`django-admin startproject ai_service
cd ai_service

python manage.py startapp chatbot`,I=`INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
    'chatbot',
]`,j=`ai_service/
│
├── ai_service/
│   ├── __init__.py
│   ├── settings.py
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── chatbot/
│   ├── migrations/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   └── views.py
│
└── manage.py`,A=`from rest_framework import serializers

class MessageSerializer(serializers.Serializer):
    message = serializers.CharField(
        max_length=500
    )`,k=`from rest_framework import serializers

class MessageSerializer(serializers.Serializer):
    message = serializers.CharField(
        max_length=500
    )
    language = serializers.CharField(
        max_length=50,
        required=False,
        default='English'
    )`,R=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ChatbotView(APIView):

    def post(self, request):
        message = request.data.get('message')

        return Response(
            {
                'message': message,
                'reply': 'This is a sample AI response.'
            },
            status=status.HTTP_200_OK
        )`,S=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import MessageSerializer

class ChatbotView(APIView):

    def post(self, request):
        serializer = MessageSerializer(
            data=request.data
        )

        if serializer.is_valid():
            message = serializer.validated_data['message']

            return Response(
                {
                    'message': message,
                    'reply': 'This is a sample AI response.'
                },
                status=status.HTTP_200_OK
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )`,D=`from django.urls import path
from .views import ChatbotView

urlpatterns = [
    path('chat/', ChatbotView.as_view(), name='chat'),
]`,E=`from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('chatbot.urls')),
]`,x=`python manage.py migrate
python manage.py runserver`,q=`curl -X POST http://127.0.0.1:8000/api/chat/ -H "Content-Type: application/json" -d '{"message": "What is Artificial Intelligence?"}'`,F=`HTTP 200 OK

{
    "message": "What is Artificial Intelligence?",
    "reply": "This is a sample AI response."
}`,z=`curl -X POST http://127.0.0.1:8000/api/chat/ -H "Content-Type: application/json" -d '{"message": ""}'`,C=`HTTP 400 Bad Request

{
    "message": [
        "This field may not be blank."
    ]
}`,G=w({__name:"IntroductionToDRF",setup(O){const p=[{label:"GET",values:["Retrieve information from the server."]},{label:"POST",values:["Send information or create a resource."]},{label:"PUT",values:["Replace an existing resource."]},{label:"PATCH",values:["Update selected fields of a resource."]},{label:"DELETE",values:["Remove an existing resource."]}],m=[{label:"Django",values:["Provides the main web framework, routing, database integration, and application structure."]},{label:"Django REST Framework",values:["Provides tools for building REST APIs, handling requests, serialization, and responses."]},{label:"AI Model",values:["Processes prompts and generates AI-powered responses."]},{label:"Frontend",values:["Sends requests to the API and displays the returned information."]}];return(V,e)=>(c(),b(f,null,{default:a(()=>[s("div",v,[e[78]||(e[78]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:g,alt:"Introduction to Django REST Framework",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[79]||(e[79]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Introduction to Django REST Framework ")],-1)),n(o,null,{default:a(()=>[e[1]||(e[1]=t(" Modern web applications often separate their frontend and backend. The frontend handles what users see and interact with, while the backend processes requests, manages data, and performs application logic. When an application needs to communicate with an AI model, the backend can act as the middle layer between the frontend and the AI service. ",-1)),n(l,null,{default:a(()=>[...e[0]||(e[0]=[t("Django REST Framework (DRF)",-1)])]),_:1}),e[2]||(e[2]=t(" is a powerful toolkit built on top of Django that helps developers create RESTful APIs using Python. It provides tools for receiving requests, validating input, processing information, and returning structured responses. ",-1))]),_:1}),n(r,null,{default:a(()=>[...e[3]||(e[3]=[t("Understanding Django and Django REST Framework",-1)])]),_:1}),n(o,null,{default:a(()=>[e[6]||(e[6]=t(" Before exploring DRF, it is important to understand the relationship between Django and Django REST Framework. ",-1)),n(l,null,{default:a(()=>[...e[4]||(e[4]=[t("Django",-1)])]),_:1}),e[7]||(e[7]=t(" is a Python web framework used to build web applications. It provides features such as URL routing, database integration, authentication, and an administrative interface. ",-1)),n(l,null,{default:a(()=>[...e[5]||(e[5]=[t("Django REST Framework",-1)])]),_:1}),e[8]||(e[8]=t(" extends Django by providing additional tools specifically designed for building APIs. ",-1))]),_:1}),n(d,{headers:["Technology","Primary Purpose"],rows:[{label:"Django",values:["Builds the main backend application and provides core web development features."]},{label:"Django REST Framework",values:["Makes it easier to expose backend functionality through REST APIs."]}]}),n(o,null,{default:a(()=>[...e[9]||(e[9]=[t(" Think of Django as the foundation of a building and Django REST Framework as an additional system that allows different parts of the building to communicate with one another. Django provides the main application structure, while DRF makes it easier to expose its functionality to other applications. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[10]||(e[10]=[t("What Is a REST API?",-1)])]),_:1}),n(o,null,{default:a(()=>[n(l,null,{default:a(()=>[...e[11]||(e[11]=[t("API (Application Programming Interface)",-1)])]),_:1}),e[13]||(e[13]=t(" is a set of rules that allows different software applications to communicate with each other. ",-1)),n(l,null,{default:a(()=>[...e[12]||(e[12]=[t("REST (Representational State Transfer)",-1)])]),_:1}),e[14]||(e[14]=t(" is an architectural style for designing web APIs. REST APIs commonly use HTTP methods to perform operations on resources and exchange data, often using JSON. ",-1))]),_:1}),n(o,null,{default:a(()=>[...e[15]||(e[15]=[t(" Consider an online student information system. A frontend application may need to retrieve student records, register new students, update information, or remove records. Instead of directly accessing the backend database, the frontend sends requests to API endpoints. ",-1)])]),_:1}),n(d,{headers:["HTTP Method","Common Purpose"],rows:p}),n(o,null,{default:a(()=>[...e[16]||(e[16]=[t(" For example, an API might provide the following endpoints: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,[s("code",null,"GET /api/students/"),t(" – retrieve student records.")]),s("li",null,[s("code",null,"POST /api/students/"),t(" – create a student record.")]),s("li",null,[s("code",null,"PUT /api/students/1/"),t(" – replace a student's information.")]),s("li",null,[s("code",null,"PATCH /api/students/1/"),t(" – update selected student information.")]),s("li",null,[s("code",null,"DELETE /api/students/1/"),t(" – delete a student record.")])],-1)])]),_:1}),n(r,null,{default:a(()=>[...e[17]||(e[17]=[t("How DRF Fits into an AI Application",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[18]||(e[18]=[t(" Imagine building an intelligent web application with a Vue frontend and an AI model running through Ollama. The frontend should not need to communicate directly with the AI model. Instead, it can send a request to a Django REST API, which handles the processing and communicates with the model. ",-1)])]),_:1}),n(d,{headers:["Component","Responsibility"],rows:m}),n(o,null,{default:a(()=>[...e[19]||(e[19]=[t(" The communication process can be summarized as follows: ",-1),s("ol",{class:"list-decimal pl-8 mt-3 space-y-2"},[s("li",null,"The user enters a question in the frontend."),s("li",null,"The frontend sends the question to a Django REST API."),s("li",null,"The backend validates the request."),s("li",null,"The backend sends the prompt to the AI model."),s("li",null,"The model generates a response."),s("li",null,"The backend returns the result to the frontend as JSON."),s("li",null,"The frontend displays the response to the user.")],-1)])]),_:1}),n(r,null,{default:a(()=>[...e[20]||(e[20]=[t("Installing Django REST Framework",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[21]||(e[21]=[t(" To start developing APIs, we first need to install Django and Django REST Framework. It is recommended to create and activate a Python virtual environment before installing the required packages. ",-1)])]),_:1}),n(i,{language:"bash",code:`python -m venv venv

# Windows
venv\\Scripts\\activate

# Linux / macOS
source venv/bin/activate`}),n(o,null,{default:a(()=>[...e[22]||(e[22]=[t(" After activating the virtual environment, install the required packages. ",-1)])]),_:1}),n(i,{language:"bash",code:y}),n(o,null,{default:a(()=>[...e[23]||(e[23]=[t(" Django provides the main web framework, while Django REST Framework supplies the additional tools needed to build REST APIs. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[24]||(e[24]=[t("Creating a Django Project",-1)])]),_:1}),n(o,null,{default:a(()=>[e[27]||(e[27]=t(" After installing the packages, we can create a Django project and an application. In Django, a ",-1)),n(l,null,{default:a(()=>[...e[25]||(e[25]=[t("project",-1)])]),_:1}),e[28]||(e[28]=t(" contains the overall configuration of a website or backend system. An ",-1)),n(l,null,{default:a(()=>[...e[26]||(e[26]=[t("application",-1)])]),_:1}),e[29]||(e[29]=t(" is a component inside the project that handles a particular feature or responsibility. ",-1))]),_:1}),n(i,{language:"bash",code:P}),n(o,null,{default:a(()=>[...e[30]||(e[30]=[t(" This creates a project named ",-1),s("code",null,"ai_service",-1),t(" and an application named ",-1),s("code",null,"chatbot",-1),t(". The chatbot application will eventually contain the functionality needed to receive user prompts and communicate with an AI model. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[31]||(e[31]=[t("Understanding the Project Structure",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[32]||(e[32]=[t(" After creating the project, Django generates several files and folders. Each one has a specific responsibility. ",-1)])]),_:1}),n(i,{language:"text",code:j}),n(d,{headers:["File or Folder","Purpose"],rows:[{label:"settings.py",values:["Contains the project's configuration and installed applications."]},{label:"urls.py",values:["Defines the URL routes of the project."]},{label:"views.py",values:["Contains the functions or classes that process requests."]},{label:"models.py",values:["Defines database models used by the application."]},{label:"admin.py",values:["Configures models for Django administration."]},{label:"manage.py",values:["Provides commands for managing the Django project."]}]}),n(r,null,{default:a(()=>[...e[33]||(e[33]=[t("Registering Django REST Framework",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[34]||(e[34]=[t(" Before using DRF, we need to register it in the project's ",-1),s("code",null,"settings.py",-1),t(" file. Find the ",-1),s("code",null,"INSTALLED_APPS",-1),t(" list and add ",-1),s("code",null,"rest_framework",-1),t(" along with the application we created. ",-1)])]),_:1}),n(i,{language:"python",code:I}),n(o,null,{default:a(()=>[...e[35]||(e[35]=[t(" Registering an application allows Django to recognize it and include it when loading the project. The ",-1),s("code",null,"rest_framework",-1),t(" entry makes the DRF functionality available throughout the project. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[36]||(e[36]=[t("Understanding Serializers",-1)])]),_:1}),n(o,null,{default:a(()=>[e[38]||(e[38]=t(" When an application receives JSON data, the backend needs to inspect and validate that information before processing it. ",-1)),n(l,null,{default:a(()=>[...e[37]||(e[37]=[t("Serializer",-1)])]),_:1}),e[39]||(e[39]=t(" is a DRF component that converts complex data into native Python data types that can be rendered into formats such as JSON. It can also validate incoming data before the application uses it. Think of a serializer as an inspection checkpoint. Before information enters the application's processing logic, it checks whether the submitted data follows the expected structure and rules. ",-1))]),_:1}),n(o,null,{default:a(()=>[...e[40]||(e[40]=[t(" For example, a chatbot API may require users to submit a message. We can create a serializer that defines what an acceptable message looks like. ",-1)])]),_:1}),n(i,{language:"python",code:A}),n(o,null,{default:a(()=>[...e[41]||(e[41]=[t(" The ",-1),s("code",null,"MessageSerializer",-1),t(" defines one required field named ",-1),s("code",null,"message",-1),t(". It must contain text and cannot exceed 500 characters. We can also add optional fields when the application requires additional information. ",-1)])]),_:1}),n(i,{language:"python",code:k}),n(o,null,{default:a(()=>[...e[42]||(e[42]=[t(" In this version, the user can optionally specify a language. If no language is supplied, the serializer uses English as the default value. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[43]||(e[43]=[t("Creating an API View",-1)])]),_:1}),n(o,null,{default:a(()=>[n(l,null,{default:a(()=>[...e[44]||(e[44]=[t("View",-1)])]),_:1}),e[45]||(e[45]=t(" is the component responsible for processing an incoming request and returning a response. DRF provides ",-1)),e[46]||(e[46]=s("code",null,"APIView",-1)),e[47]||(e[47]=t(", a class-based view that gives developers control over how different HTTP methods are handled. Let us create a basic chatbot API that accepts a message and returns a sample response. ",-1))]),_:1}),n(i,{language:"python",code:R}),n(o,null,{default:a(()=>[...e[48]||(e[48]=[t(" The ",-1),s("code",null,"ChatbotView",-1),t(" handles POST requests through its ",-1),s("code",null,"post()",-1),t(" method. It retrieves the submitted message from ",-1),s("code",null,"request.data",-1),t(" and returns a JSON response using DRF's ",-1),s("code",null,"Response",-1),t(" class. The response is only a placeholder for now. In a later implementation, this part can be replaced with an actual request to an AI model. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[49]||(e[49]=[t("Connecting Serializers to API Views",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[50]||(e[50]=[t(" Retrieving input directly from a request is possible, but an application should validate that input before using it. We can improve our API view by using the serializer we created earlier. ",-1)])]),_:1}),n(i,{language:"python",code:S}),n(o,null,{default:a(()=>[...e[51]||(e[51]=[t(" Notice how the view now creates a ",-1),s("code",null,"MessageSerializer",-1),t(" using the incoming request data. The ",-1),s("code",null,"is_valid()",-1),t(" method checks whether the submitted information follows the serializer's rules. If validation succeeds, the application accesses the cleaned data through ",-1),s("code",null,"validated_data",-1),t(". Otherwise, it returns the validation errors with an HTTP 400 status code. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[52]||(e[52]=[t("Creating API URL Routes",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[53]||(e[53]=[t(" An API view must be connected to a URL before clients can access it. Inside the ",-1),s("code",null,"chatbot",-1),t(" application, create a file named ",-1),s("code",null,"urls.py",-1),t(". ",-1)])]),_:1}),n(i,{language:"python",code:D}),n(o,null,{default:a(()=>[...e[54]||(e[54]=[t(" The ",-1),s("code",null,"ChatbotView.as_view()",-1),t(" method converts the class-based view into a callable view that Django can use when a request reaches the specified URL. Next, connect the application routes to the main project's ",-1),s("code",null,"urls.py",-1),t(". ",-1)])]),_:1}),n(i,{language:"python",code:E}),n(o,null,{default:a(()=>[...e[55]||(e[55]=[t(" The project now forwards requests beginning with ",-1),s("code",null,"/api/",-1),t(" to the chatbot application's URL configuration. Therefore, the complete endpoint for our chatbot API is: ",-1)])]),_:1}),n(i,{language:"text",code:"http://127.0.0.1:8000/api/chat/"}),n(r,null,{default:a(()=>[...e[56]||(e[56]=[t("Running and Testing the API",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[57]||(e[57]=[t(" Before testing the API, apply Django's initial database migrations and start the development server. ",-1)])]),_:1}),n(i,{language:"bash",code:x}),n(o,null,{default:a(()=>[...e[58]||(e[58]=[t(" Django starts a local development server, usually accessible at ",-1),s("code",null,"http://127.0.0.1:8000/",-1),t(". We can now send a POST request to our chatbot endpoint. The following example uses ",-1),s("code",null,"curl",-1),t(". ",-1)])]),_:1}),n(i,{language:"bash",code:q}),n(o,null,{default:a(()=>[...e[59]||(e[59]=[t(" If the request is valid, the API returns the submitted message and a sample reply. ",-1)])]),_:1}),n(u,{output:F}),n(o,null,{default:a(()=>[...e[60]||(e[60]=[t(" We can also test the validation by submitting an empty message. ",-1)])]),_:1}),n(i,{language:"bash",code:z}),n(u,{output:C}),n(o,null,{default:a(()=>[...e[61]||(e[61]=[t(" The API rejects the request because the message field cannot be blank. The HTTP 400 status indicates that the client submitted invalid data. This demonstrates how DRF serializers help protect the backend from requests that do not meet the application's requirements. ",-1)])]),_:1}),n(r,null,{default:a(()=>[...e[62]||(e[62]=[t("Advantages of Django REST Framework",-1)])]),_:1}),n(o,null,{default:a(()=>[e[75]||(e[75]=t(" Django REST Framework provides several features that make backend API development easier: ",-1)),s("ul",T,[s("li",null,[n(l,null,{default:a(()=>[...e[63]||(e[63]=[t("Serialization",-1)])]),_:1}),e[64]||(e[64]=t(" – converts data between Python objects and formats such as JSON. ",-1))]),s("li",null,[n(l,null,{default:a(()=>[...e[65]||(e[65]=[t("Validation",-1)])]),_:1}),e[66]||(e[66]=t(" – checks incoming data before it is processed. ",-1))]),s("li",null,[n(l,null,{default:a(()=>[...e[67]||(e[67]=[t("Authentication",-1)])]),_:1}),e[68]||(e[68]=t(" – supports identifying users making API requests. ",-1))]),s("li",null,[n(l,null,{default:a(()=>[...e[69]||(e[69]=[t("Permissions",-1)])]),_:1}),e[70]||(e[70]=t(" – controls which users are allowed to access specific resources. ",-1))]),s("li",null,[n(l,null,{default:a(()=>[...e[71]||(e[71]=[t("Browsable API",-1)])]),_:1}),e[72]||(e[72]=t(" – provides a web interface for exploring and testing API endpoints. ",-1))]),s("li",null,[n(l,null,{default:a(()=>[...e[73]||(e[73]=[t("Response handling",-1)])]),_:1}),e[74]||(e[74]=t(" – provides convenient classes for returning structured API responses. ",-1))])])]),_:1}),n(r,null,{default:a(()=>[...e[76]||(e[76]=[t("Summary",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[77]||(e[77]=[t(" In this topic, you learned that: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Django is a Python web framework used to build backend applications."),s("li",null,"Django REST Framework extends Django with tools for developing REST APIs."),s("li",null,"REST APIs allow different applications to communicate through HTTP requests."),s("li",null,"HTTP methods such as GET, POST, PUT, PATCH, and DELETE represent common API operations."),s("li",null,"Serializers convert and validate incoming and outgoing data."),s("li",null,"APIView provides a class-based approach to handling API requests."),s("li",null,"URL routing connects API endpoints to their corresponding views."),s("li",null,"DRF can serve as the backend layer between a frontend application and an AI model.")],-1)])]),_:1}),n(h,{to:"/academia/student/classes/elective3-designing-ai-endpoints"})])]),_:1}))}});export{G as default};

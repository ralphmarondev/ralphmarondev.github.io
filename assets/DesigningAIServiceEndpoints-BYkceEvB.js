import{_ as m}from"./logo-C9ImmdpX.js";import{_ as c}from"./MainLayout.vue_vue_type_script_setup_true_lang-GBq8Y1gq.js";import{T as i,a as o,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-Ck0YDR9Z.js";import{T as r}from"./TopicTerm-8Gsj2bko.js";import{C as l}from"./CodeBlock-CB31lEux.js";import{O as g}from"./OutputBlock-BeV5bNCQ.js";import{_ as u}from"./TableBlock.vue_vue_type_script_setup_true_lang-DQk5hU4S.js";import{d as h,h as w,i as a,o as v,a as n,q as s,g as t}from"./index-CTOJ-Nsm.js";const T={class:"max-w-4xl mx-auto"},x=`POST /api/ai/chat/

Request:
{
    "message": "Explain machine learning."
}

Response:
{
    "reply": "Machine learning is a branch of AI..."
}`,A=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class ChatView(APIView):

    def post(self, request):
        message = request.data.get('message')

        return Response(
            {
                'reply': f'You asked: {message}'
            },
            status=status.HTTP_200_OK
        )`,b=`from django.urls import path
from .views import ChatView

urlpatterns = [
    path('chat/', ChatView.as_view(), name='ai-chat'),
]`,I=`from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/ai/', include('chatbot.urls')),
]`,y=`curl -X POST http://127.0.0.1:8000/api/ai/chat/ -H "Content-Type: application/json" -d '{"message": "Explain machine learning."}'`,P=`HTTP 200 OK

{
    "reply": "You asked: Explain machine learning."
}`,S=`from django.urls import path
from .views import (
    ChatView,
    SummarizeView,
    ClassifyView
)

urlpatterns = [
    path('chat/', ChatView.as_view(), name='ai-chat'),
    path('summarize/', SummarizeView.as_view(), name='ai-summarize'),
    path('classify/', ClassifyView.as_view(), name='ai-classify'),
]`,C=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class SummarizeView(APIView):

    def post(self, request):
        text = request.data.get('text')

        if not text:
            return Response(
                {'error': 'Text is required.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {
                'summary': f'Sample summary of: {text}'
            },
            status=status.HTTP_200_OK
        )`,q=`# AI Chat
POST /api/ai/chat/

# Text Summarization
POST /api/ai/summarize/

# Text Classification
POST /api/ai/classify/

# Information Extraction
POST /api/ai/extract/`,R=`{
    "reply": "Machine learning allows computers to learn patterns from data.",
    "model": "llama3.2",
    "success": true
}`,k=`{
    "error": "The message field is required.",
    "success": false
}`,N=h({__name:"DesigningAIServiceEndpoints",setup(O){const d=[{label:"POST /api/ai/chat/",values:["Accepts a message and generates an AI response."]},{label:"POST /api/ai/summarize/",values:["Accepts text and returns a summarized version."]},{label:"POST /api/ai/classify/",values:["Accepts text and assigns it to a category."]},{label:"POST /api/ai/extract/",values:["Extracts specific information from supplied text."]}],p=[{label:"200 OK",values:["The request was successfully processed."]},{label:"201 Created",values:["A new resource was successfully created."]},{label:"400 Bad Request",values:["The submitted request contains invalid data."]},{label:"401 Unauthorized",values:["Authentication is required or has failed."]},{label:"403 Forbidden",values:["The user is not allowed to perform the requested operation."]},{label:"404 Not Found",values:["The requested resource or endpoint does not exist."]},{label:"500 Internal Server Error",values:["An unexpected error occurred on the server."]},{label:"503 Service Unavailable",values:["The service is temporarily unavailable."]}];return(E,e)=>(v(),w(c,null,{default:a(()=>[n("div",T,[e[42]||(e[42]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:m,alt:"Designing AI Service Endpoints",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[43]||(e[43]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Designing AI Service Endpoints ")],-1)),s(i,null,{default:a(()=>[e[1]||(e[1]=t(" An AI-powered application may provide several features, such as answering questions, summarizing documents, classifying messages, and extracting information. Instead of placing all these operations inside a single API endpoint, developers can organize them into separate endpoints based on their responsibilities. ",-1)),s(r,null,{default:a(()=>[...e[0]||(e[0]=[t("API endpoint",-1)])]),_:1}),e[2]||(e[2]=t(" refers to a specific URL through which a client can access a particular functionality of a backend application. Designing endpoints properly makes an API easier to understand, maintain, test, and integrate with frontend applications. ",-1))]),_:1}),s(o,null,{default:a(()=>[...e[3]||(e[3]=[t("Understanding AI Service Endpoints",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[4]||(e[4]=[t(" Consider an intelligent web application that allows users to interact with an AI model. The application might provide a chatbot, a document summarizer, and a text classifier. Each feature performs a different task, so each can have its own endpoint. ",-1)])]),_:1}),s(u,{headers:["Endpoint","Responsibility"],rows:d}),s(i,null,{default:a(()=>[...e[5]||(e[5]=[t(" Each endpoint represents a specific operation. The frontend only needs to know which endpoint to call and what information to submit. For example, a chatbot sends a message to the chat endpoint, while a summarization feature sends a document to the summarization endpoint. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[6]||(e[6]=[t("Choosing Appropriate HTTP Methods",-1)])]),_:1}),s(i,null,{default:a(()=>[e[8]||(e[8]=t(" REST APIs use HTTP methods to describe the operation being performed. For AI service endpoints, ",-1)),s(r,null,{default:a(()=>[...e[7]||(e[7]=[t("POST",-1)])]),_:1}),e[9]||(e[9]=t(" is commonly used because clients usually submit input data that the backend needs to process. Consider the following request: ",-1))]),_:1}),s(l,{language:"http",code:x}),s(i,null,{default:a(()=>[...e[10]||(e[10]=[t(" The client sends a POST request containing a message. The backend processes that message and returns the generated response. POST is appropriate here because the request contains input that the server must process to produce a result. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[11]||(e[11]=[t("Designing a Chat Endpoint",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[12]||(e[12]=[t(" Let us create our first AI service endpoint using Django REST Framework. The endpoint will accept a message and return a sample reply. We will use this example to understand the API structure before integrating an actual AI model. ",-1)])]),_:1}),s(l,{language:"python",code:A}),s(i,null,{default:a(()=>[...e[13]||(e[13]=[t(" The ",-1),n("code",null,"ChatView",-1),t(" inherits from ",-1),n("code",null,"APIView",-1),t(" and defines a ",-1),n("code",null,"post()",-1),t(" method. The view retrieves the submitted message from ",-1),n("code",null,"request.data",-1),t(" and returns a response using DRF's ",-1),n("code",null,"Response",-1),t(" class. For now, the response simply repeats the submitted message. This is a placeholder for the actual AI-generated response that will be implemented later. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[14]||(e[14]=[t("Connecting the Endpoint to a URL",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[15]||(e[15]=[t(" After creating the view, we need to register its URL so that clients can access it. Inside the chatbot application, open its ",-1),n("code",null,"urls.py",-1),t(" file. ",-1)])]),_:1}),s(l,{language:"python",code:b}),s(i,null,{default:a(()=>[...e[16]||(e[16]=[t(" Next, include the chatbot application's URL configuration in the main project's ",-1),n("code",null,"urls.py",-1),t(". ",-1)])]),_:1}),s(l,{language:"python",code:I}),s(i,null,{default:a(()=>[...e[17]||(e[17]=[t(" Since the project uses the ",-1),n("code",null,"api/ai/",-1),t(" prefix and the application defines the ",-1),n("code",null,"chat/",-1),t(" route, the complete endpoint becomes: ",-1)])]),_:1}),s(l,{language:"text",code:"POST http://127.0.0.1:8000/api/ai/chat/"}),s(o,null,{default:a(()=>[...e[18]||(e[18]=[t("Testing the Chat Endpoint",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[19]||(e[19]=[t(" Start the Django development server and send a POST request containing a message. ",-1)])]),_:1}),s(l,{language:"bash",code:y}),s(i,null,{default:a(()=>[...e[20]||(e[20]=[t(" If the request is processed successfully, the API returns a JSON response. ",-1)])]),_:1}),s(g,{output:P}),s(i,null,{default:a(()=>[...e[21]||(e[21]=[t(" This confirms that the endpoint can receive input and return a response. We can use tools such as curl, Postman, or DRF's browsable API to test endpoints during development. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[22]||(e[22]=[t("Creating Multiple AI Endpoints",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[23]||(e[23]=[t(" As the application grows, additional AI features can be introduced. Rather than adding every operation to the chat endpoint, developers can create separate views for each feature. ",-1)])]),_:1}),s(l,{language:"python",code:S}),s(i,null,{default:a(()=>[...e[24]||(e[24]=[t(" In this example, the application defines three endpoints: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"chat/"),t(" handles conversational requests.")]),n("li",null,[n("code",null,"summarize/"),t(" handles text summarization.")]),n("li",null,[n("code",null,"classify/"),t(" handles text classification.")])],-1),t(" Each endpoint has its own view, allowing developers to maintain each feature independently. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[25]||(e[25]=[t("Example: Designing a Summarization Endpoint",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[26]||(e[26]=[t(" A summarization endpoint accepts a longer piece of text and returns a shorter version containing its important information. For this example, we will create a simple view that checks whether text was provided before returning a sample summary. ",-1)])]),_:1}),s(l,{language:"python",code:C}),s(i,null,{default:a(()=>[...e[27]||(e[27]=[t(" The view checks whether the request contains a ",-1),n("code",null,"text",-1),t(" value. If no text is supplied, the endpoint returns an error with HTTP 400. Otherwise, it returns a sample summary. The summarization logic is still a placeholder. In a later implementation, we will connect this view to an AI service that generates the actual summary. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[28]||(e[28]=[t("Designing Consistent API Responses",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[29]||(e[29]=[t(" A well-designed API should return responses in a predictable structure. For example, successful AI requests can include the generated result, the model used, and a success indicator. ",-1)])]),_:1}),s(l,{language:"json",code:R}),s(i,null,{default:a(()=>[...e[30]||(e[30]=[t(" When an error occurs, the API can return a clear error message and indicate that the request was unsuccessful. ",-1)])]),_:1}),s(l,{language:"json",code:k}),s(i,null,{default:a(()=>[...e[31]||(e[31]=[t(" Consistent response structures make it easier for frontend applications to determine whether a request succeeded and how to display the result. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[32]||(e[32]=[t("Using Appropriate HTTP Status Codes",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[33]||(e[33]=[t(" In addition to returning JSON data, an API should use appropriate HTTP status codes to describe the outcome of a request. ",-1)])]),_:1}),s(u,{headers:["Status Code","Meaning"],rows:p}),s(i,null,{default:a(()=>[...e[34]||(e[34]=[t(" For example, a missing message should result in HTTP 400 because the client did not provide the required input. If the AI service is temporarily unavailable, the backend may return HTTP 503 to indicate that the service cannot currently process the request. These status codes help frontend applications handle different situations appropriately. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[35]||(e[35]=[t("Organizing API Routes",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[36]||(e[36]=[t(" As an application grows, grouping related endpoints under a common URL prefix makes the API easier to navigate. For example, all AI-related features can use the ",-1),n("code",null,"/api/ai/",-1),t(" prefix. ",-1)])]),_:1}),s(l,{language:"text",code:q}),s(i,null,{default:a(()=>[...e[37]||(e[37]=[t(" This organization provides a consistent naming structure and makes it easier to identify which endpoints belong to the AI service. Developers should also use descriptive endpoint names and maintain consistent naming conventions throughout the application. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[38]||(e[38]=[t("Best Practices for Designing AI Endpoints",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[39]||(e[39]=[t(" When creating endpoints for AI-powered applications, consider the following practices: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Give each endpoint a clear and specific responsibility."),n("li",null,"Use appropriate HTTP methods for each operation."),n("li",null,"Choose descriptive and consistent URL patterns."),n("li",null,"Validate incoming data before processing it."),n("li",null,"Return predictable JSON response structures."),n("li",null,"Use appropriate HTTP status codes."),n("li",null,"Handle AI service errors without exposing sensitive internal information."),n("li",null,"Keep AI processing logic separate from request and response handling as the application grows.")],-1)])]),_:1}),s(o,null,{default:a(()=>[...e[40]||(e[40]=[t("Summary",-1)])]),_:1}),s(i,null,{default:a(()=>[...e[41]||(e[41]=[t(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"An API endpoint is a URL that provides access to a specific backend functionality."),n("li",null,"AI applications can use separate endpoints for chat, summarization, classification, and other features. "),n("li",null,"POST is commonly used when submitting information for AI processing."),n("li",null,[t("DRF's "),n("code",null,"APIView"),t(" can handle incoming API requests.")]),n("li",null,"Django URL configurations connect endpoints to their corresponding views."),n("li",null,"Consistent JSON responses make frontend integration easier."),n("li",null,"HTTP status codes communicate the outcome of API requests."),n("li",null,"Well-organized endpoints make backend applications easier to maintain and expand.")],-1)])]),_:1}),s(f,{to:"/academia/student/classes/elective3-ai-serializers"})])]),_:1}))}});export{N as default};

import{_ as p}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-GBq8Y1gq.js";import{T as r,a as n,_ as c}from"./TopicNext.vue_vue_type_script_setup_true_lang-Ck0YDR9Z.js";import{T as h}from"./TopicTerm-8Gsj2bko.js";import{C as l}from"./CodeBlock-CB31lEux.js";import{_ as o}from"./TableBlock.vue_vue_type_script_setup_true_lang-DQk5hU4S.js";import{d as g,h as f,i,o as v,a,q as s,g as t}from"./index-CTOJ-Nsm.js";const y={class:"max-w-4xl mx-auto"},w=`from rest_framework.views import APIView
from rest_framework.response import Response

class ChatView(APIView):

    def post(self, request):
        message = request.data.get('message')

        # AI processing happens inside the view
        reply = f'You asked: {message}'

        return Response({
            'reply': reply
        })`,b=`chatbot/
|
|-- migrations/
|-- __init__.py
|-- admin.py
|-- apps.py
|-- models.py
|-- serializers.py
|-- services.py
|-- urls.py
|-- views.py`,I=`class AIService:

    @staticmethod
    def generate_reply(message):
        # Placeholder for AI model processing
        return f'You asked: {message}'`,A=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import (
    ChatRequestSerializer,
    ChatResponseSerializer
)

from .services import AIService

class ChatView(APIView):

    def post(self, request):
        request_serializer = ChatRequestSerializer(
            data=request.data
        )

        if not request_serializer.is_valid():
            return Response(
                request_serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        message = request_serializer.validated_data['message']

        reply = AIService.generate_reply(message)

        response_data = {
            'reply': reply,
            'model': 'sample-model',
            'success': True
        }

        response_serializer = ChatResponseSerializer(
            instance=response_data
        )

        return Response(
            response_serializer.data,
            status=status.HTTP_200_OK
        )`,T=`class AIService:

    @staticmethod
    def generate_reply(message):
        return f'You asked: {message}'

    @staticmethod
    def summarize_text(text):
        # Placeholder for summarization logic
        return f'Summary of: {text}'

    @staticmethod
    def classify_text(text):
        # Placeholder for classification logic
        return 'General'`,x=`class AIService:

    @staticmethod
    def generate_reply(message):
        try:
            # Placeholder for AI model processing
            return f'You asked: {message}'

        except Exception as error:
            raise RuntimeError(
                'Unable to generate AI response.'
            ) from error`,S=`Frontend
   |
   v
Django URL
   |
   v
DRF View
   |
   v
Request Serializer
   |
   v
AI Service Layer
   |
   v
AI Model
   |
   v
Response Serializer
   |
   v
HTTP Response
   |
   v
Frontend`,k=`{
    "reply": "You asked: Explain artificial intelligence.",
    "model": "sample-model",
    "success": true
}`,_=g({__name:"ServiceLayerArchitecture",setup(z){const d=[{label:"Frontend",values:["Collects user input and displays the returned information."]},{label:"URL Configuration",values:["Maps incoming URLs to the appropriate views."]},{label:"View Layer",values:["Handles HTTP requests, validation, and HTTP responses."]},{label:"Serializer Layer",values:["Validates incoming data and structures outgoing data."]},{label:"Service Layer",values:["Contains the application logic and AI processing operations."]},{label:"AI Model / External Service",values:["Processes prompts and generates AI results."]}],u=[{label:"Code Organization",values:["AI logic is mixed with request handling.","Responsibilities are separated."]},{label:"Reusability",values:["Logic may need to be repeated across views.","Services can be reused by different views."]},{label:"Testing",values:["Views are harder to test independently.","Service methods can be tested separately."]},{label:"Maintenance",values:["Changes can affect multiple responsibilities.","Changes are easier to isolate."]}];return(q,e)=>(v(),f(m,null,{default:i(()=>[a("div",y,[e[40]||(e[40]=a("div",{class:"w-full flex justify-center mb-6"},[a("img",{src:p,alt:"Service Layer Architecture",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[41]||(e[41]=a("div",{class:"text-center mb-4"},[a("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),a("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Service Layer Architecture ")],-1)),s(r,null,{default:i(()=>[e[1]||(e[1]=t(" As an AI-powered application grows, its backend may handle several operations, such as generating chatbot responses, summarizing documents, classifying text, and extracting information. If all these operations are implemented directly inside Django REST Framework views, the code can become difficult to maintain. A better approach is to separate the responsibilities of handling HTTP requests and performing application operations. This can be achieved using a ",-1)),s(h,null,{default:i(()=>[...e[0]||(e[0]=[t("Service Layer",-1)])]),_:1}),e[2]||(e[2]=t(" . ",-1))]),_:1}),s(n,null,{default:i(()=>[...e[3]||(e[3]=[t("Understanding the Service Layer",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[4]||(e[4]=[t(" A service layer is a part of an application that contains its main business logic and application operations. In an AI-powered application, it can handle tasks such as preparing prompts, communicating with AI models, processing generated responses, and handling AI-related operations. Instead of placing these operations directly inside API views, developers move them into dedicated service classes or functions. ",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[5]||(e[5]=[t(" Think of a restaurant as an example. The waiter receives the customer's order and communicates it to the kitchen. The kitchen prepares the food, while the waiter handles the interaction with the customer. Similarly, a Django view receives the request and returns the response, while the service layer performs the actual application operation. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[6]||(e[6]=[t("The Problem with Placing Everything Inside Views",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[7]||(e[7]=[t(" Consider a chatbot endpoint where the request handling and AI processing are implemented inside the same view. ",-1)])]),_:1}),s(l,{language:"python",code:w}),s(r,null,{default:i(()=>[...e[8]||(e[8]=[t(" This example is simple, but imagine replacing the placeholder with actual AI processing. The view would eventually contain prompt preparation, communication with the model, response processing, and error handling. As more AI features are added, the view becomes increasingly complicated. Separating these responsibilities helps keep the code organized. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[9]||(e[9]=[t("Organizing the Service Layer",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[10]||(e[10]=[t(" In Django, we can create a separate Python file named ",-1),a("code",null,"services.py",-1),t(" inside our chatbot application. Our application structure will look like this: ",-1)])]),_:1}),s(l,{language:"text",code:b}),s(r,null,{default:i(()=>[...e[11]||(e[11]=[t(" The ",-1),a("code",null,"services.py",-1),t(" file will contain the operations used by our application. The ",-1),a("code",null,"views.py",-1),t(" file will remain responsible for handling incoming HTTP requests and returning responses. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[12]||(e[12]=[t("Creating an AI Service",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[13]||(e[13]=[t(" Inside ",-1),a("code",null,"services.py",-1),t(", create a class named ",-1),a("code",null,"AIService",-1),t(". This class will contain the operations related to our AI features. ",-1)])]),_:1}),s(l,{language:"python",code:I}),s(r,null,{default:i(()=>[...e[14]||(e[14]=[t(" The ",-1),a("code",null,"generate_reply()",-1),t(" method receives a message and returns a sample response. The ",-1),a("code",null,"@staticmethod",-1),t(" decorator allows us to call the method directly through the class without creating an instance of it. For example, we can call it using: ",-1)])]),_:1}),s(l,{language:"python",code:"reply = AIService.generate_reply('Hello, AI!')"}),s(r,null,{default:i(()=>[...e[15]||(e[15]=[t(" This keeps the AI operation separate from the view that receives the request. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[16]||(e[16]=[t("Updating the DRF View",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[17]||(e[17]=[t(" Now that we have created the service, we can update our chatbot view. Instead of implementing the AI operation directly inside the view, we simply call the corresponding service method. ",-1)])]),_:1}),s(l,{language:"python",code:A}),s(r,null,{default:i(()=>[...e[18]||(e[18]=[t(" Notice this line: ",-1)])]),_:1}),s(l,{language:"python",code:"reply = AIService.generate_reply(message)"}),s(r,null,{default:i(()=>[...e[19]||(e[19]=[t(" The view passes the validated message to the service layer and receives the generated reply. It does not need to know how the AI processing is performed internally. It only needs to call the service and use the returned result. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[20]||(e[20]=[t("Adding More AI Operations",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[21]||(e[21]=[t(" The service layer can contain multiple operations related to AI functionality. For example, we can extend our ",-1),a("code",null,"AIService",-1),t(" class with methods for summarization and text classification. ",-1)])]),_:1}),s(l,{language:"python",code:T}),s(r,null,{default:i(()=>[...e[22]||(e[22]=[t(" Our service now provides three operations: ",-1),a("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[a("li",null,[a("code",null,"generate_reply()"),t(" handles chatbot responses.")]),a("li",null,[a("code",null,"summarize_text()"),t(" handles text summarization.")]),a("li",null,[a("code",null,"classify_text()"),t(" handles text classification.")])],-1),t(" These methods are still placeholders. Later, we can replace their implementations with actual calls to an AI model without changing the overall responsibility of our views. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[23]||(e[23]=[t("Understanding Layer Responsibilities",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[24]||(e[24]=[t(" A typical AI-powered Django application can contain several layers, each with a specific responsibility. ",-1)])]),_:1}),s(o,{headers:["Layer","Responsibility"],rows:d}),s(r,null,{default:i(()=>[...e[25]||(e[25]=[t(" Each layer works with the others to process a request. The frontend submits information, the view handles the request, the serializer validates the input, and the service performs the requested operation. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[26]||(e[26]=[t("Understanding the Request Flow",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[27]||(e[27]=[t(" The following flow illustrates how a chatbot request moves through the application. ",-1)])]),_:1}),s(l,{language:"text",code:S}),s(r,null,{default:i(()=>[...e[28]||(e[28]=[t(" Once the AI service returns its result, the view can pass the response data to a response serializer before returning it to the frontend. This creates a clear separation between HTTP communication, data validation, and AI processing. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[29]||(e[29]=[t("Error Handling in the Service Layer",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[30]||(e[30]=[t(" AI operations may fail for several reasons. The AI model might be unavailable, a connection might time out, or the model might return an unexpected result. These errors can be handled within the service layer so that AI-specific problems are not mixed with the view's request-handling logic. ",-1)])]),_:1}),s(l,{language:"python",code:x}),s(r,null,{default:i(()=>[...e[31]||(e[31]=[t(" In this example, the service catches an exception and raises a new error with a more meaningful message. The original exception is preserved as its cause using ",-1),a("code",null,"from error",-1),t(". In a production application, the view or a centralized exception handler should catch expected service errors and translate them into appropriate HTTP responses. Internal error details should not be exposed to users. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[32]||(e[32]=[t("Benefits of a Service Layer",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[33]||(e[33]=[t(" Separating application logic into services provides several advantages. ",-1)])]),_:1}),s(o,{headers:["Aspect","Without Service Layer","With Service Layer"],rows:u}),s(r,null,{default:i(()=>[...e[34]||(e[34]=[t(" The main advantage is separation of concerns. Each part of the application has a clear responsibility, making the code easier to understand, test, reuse, and maintain. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[35]||(e[35]=[t("Understanding the Complete Output",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[36]||(e[36]=[t(" Even though the AI processing has been moved into a separate service, the frontend still receives the same response structure. ",-1)])]),_:1}),s(l,{language:"json",code:k}),s(r,null,{default:i(()=>[...e[37]||(e[37]=[t(" This is important because changing the internal organization of the backend does not necessarily require changing how the frontend communicates with the API. The service layer improves the backend's internal structure while keeping the API contract consistent. ",-1)])]),_:1}),s(n,null,{default:i(()=>[...e[38]||(e[38]=[t("Summary",-1)])]),_:1}),s(r,null,{default:i(()=>[...e[39]||(e[39]=[t(" In this topic, you learned that: ",-1),a("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[a("li",null,"A service layer separates application logic from HTTP request handling."),a("li",null,"Django REST Framework views should focus on processing requests and returning responses."),a("li",null,[t("AI operations can be placed inside a dedicated "),a("code",null,"services.py"),t(" file.")]),a("li",null,"Service methods can be reused by multiple views."),a("li",null,"Serializers remain responsible for validating and structuring data."),a("li",null,"AI-specific errors can be handled within the service layer."),a("li",null,"Separating responsibilities improves maintainability and testability.")],-1)])]),_:1}),s(c,{to:"/academia/student/classes/elective3",text:"Finish"})])]),_:1}))}});export{_ as default};

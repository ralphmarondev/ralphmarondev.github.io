import{_ as p}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as i,a as r,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as h}from"./TopicTerm-DyqgLCaN.js";import{C as n}from"./CodeBlock-CazTR3fe.js";import{_ as o}from"./TableBlock.vue_vue_type_script_setup_true_lang-CuR93uMb.js";import{d as c,h as g,i as a,o as v,a as s,q as l,g as t}from"./index-CP-QU3eE.js";const z={class:"max-w-4xl mx-auto"},b=`serializer = ChatRequestSerializer(data=request.data)

if serializer.is_valid():
    message = serializer.validated_data['message']
else:
    return Response(
        serializer.errors,
        status=status.HTTP_400_BAD_REQUEST
    )`,w=`{
    "message": "Explain artificial intelligence."
}`,y=`{
    "message": ""
}`,S=`{
    "message": [
        "This field may not be blank."
    ]
}`,x=`from rest_framework import serializers

class ChatRequestSerializer(serializers.Serializer):
    message = serializers.CharField(
        max_length=1000,
        trim_whitespace=True
    )`,T=`class ChatResponseSerializer(serializers.Serializer):
    reply = serializers.CharField()
    model = serializers.CharField()
    success = serializers.BooleanField()`,I=`from rest_framework import serializers

class ChatRequestSerializer(serializers.Serializer):
    message = serializers.CharField(
        max_length=1000,
        trim_whitespace=True
    )

class ChatResponseSerializer(serializers.Serializer):
    reply = serializers.CharField()
    model = serializers.CharField()
    success = serializers.BooleanField()`,k=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import (
    ChatRequestSerializer,
    ChatResponseSerializer
)

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

        # Placeholder for AI model processing
        reply = f'You asked: {message}'

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
        )`,R=`{
    "reply": "You asked: Explain artificial intelligence.",
    "model": "sample-model",
    "success": true
}`,q=`{
    "message": [
        "This field may not be blank."
    ]
}`,C=`Client Request
      |
      v
ChatRequestSerializer
      |
      v
Validate Input
      |
      +---- Invalid ----> Return Validation Errors
      |
      v
Get validated_data
      |
      v
Process AI Request
      |
      v
ChatResponseSerializer
      |
      v
Return JSON Response`,B=c({__name:"SerializersForPromptsAndResponses",setup(A){const d=[{label:"CharField",values:["Accepts text values such as prompts, messages, and replies."]},{label:"IntegerField",values:["Accepts whole numbers."]},{label:"FloatField",values:["Accepts decimal numbers."]},{label:"BooleanField",values:["Accepts true or false values."]},{label:"EmailField",values:["Validates whether a value has a valid email format."]},{label:"JSONField",values:["Accepts JSON-compatible data."]}],u=[{label:"required",values:["Determines whether a field must be included in the request."]},{label:"allow_blank",values:["Determines whether an empty string is accepted by text fields."]},{label:"max_length",values:["Sets the maximum number of characters allowed."]},{label:"min_length",values:["Sets the minimum number of characters allowed."]},{label:"default",values:["Provides a default value when an optional field is omitted."]},{label:"trim_whitespace",values:["Removes leading and trailing whitespace from text input."]}];return(F,e)=>(v(),g(m,null,{default:a(()=>[s("div",z,[e[41]||(e[41]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:p,alt:"Serializers for Prompts and Responses",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[42]||(e[42]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Serializers for Prompts and Responses ")],-1)),l(i,null,{default:a(()=>[e[1]||(e[1]=t(" When a frontend application communicates with an AI backend, it sends information such as prompts, messages, and configuration settings. The backend must check this information before processing it. After processing, the backend also needs to organize its response into a consistent format that the frontend can understand. Django REST Framework provides a feature called ",-1)),l(h,null,{default:a(()=>[...e[0]||(e[0]=[t("Serializer",-1)])]),_:1}),e[2]||(e[2]=t(" to handle these tasks. A serializer converts complex data into simple Python data types that can be rendered into formats such as JSON. It can also validate incoming data before the application uses it. ",-1))]),_:1}),l(r,null,{default:a(()=>[...e[3]||(e[3]=[t("Understanding Serializers",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[4]||(e[4]=[t(" Think of a serializer as a checkpoint between the frontend and backend. When a user submits a prompt, the serializer checks whether the submitted information follows the expected structure and rules. If the input is valid, the backend can proceed with processing it. When the backend generates a response, a serializer can also help ensure that the returned data follows the expected structure. ",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[5]||(e[5]=[t(" In an AI application, serializers commonly handle two types of data: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,[s("strong",null,"Request data:"),t(" Information submitted by the frontend, such as prompts and messages.")]),s("li",null,[s("strong",null,"Response data:"),t(" Information returned by the backend, such as AI-generated replies and model information. ")])],-1)])]),_:1}),l(r,null,{default:a(()=>[...e[6]||(e[6]=[t("Creating a Request Serializer",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[7]||(e[7]=[t(" Let us begin by creating a serializer for chatbot requests. Inside the chatbot application, create a file named ",-1),s("code",null,"serializers.py",-1),t(". This file will contain the serializers used by the application. ",-1)])]),_:1}),l(n,{language:"python",code:x}),l(i,null,{default:a(()=>[...e[8]||(e[8]=[t(" The ",-1),s("code",null,"ChatRequestSerializer",-1),t(" defines the expected structure of an incoming chatbot request. It contains one field named ",-1),s("code",null,"message",-1),t(", which accepts text with a maximum length of 1,000 characters. The ",-1),s("code",null,"trim_whitespace=True",-1),t(" option removes unnecessary spaces at the beginning and end of the submitted message. ",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[9]||(e[9]=[t(" For example, the following JSON request contains a valid message: ",-1)])]),_:1}),l(n,{language:"json",code:w}),l(i,null,{default:a(()=>[...e[10]||(e[10]=[t(" However, an empty message is not accepted because ",-1),s("code",null,"CharField",-1),t(" does not allow blank values by default. ",-1)])]),_:1}),l(n,{language:"json",code:y}),l(r,null,{default:a(()=>[...e[11]||(e[11]=[t("Common Serializer Fields",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[12]||(e[12]=[t(" Django REST Framework provides different serializer fields depending on the type of information being handled. ",-1)])]),_:1}),l(o,{headers:["Field","Description"],rows:d}),l(i,null,{default:a(()=>[...e[13]||(e[13]=[t(" For example, a chatbot may use ",-1),s("code",null,"CharField",-1),t(" for the user's prompt, ",-1),s("code",null,"BooleanField",-1),t(" for a success indicator, and ",-1),s("code",null,"IntegerField",-1),t(" for a token count. ",-1)])]),_:1}),l(r,null,{default:a(()=>[...e[14]||(e[14]=[t("Configuring Serializer Fields",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[15]||(e[15]=[t(" Serializer fields also support additional options that allow developers to control how submitted values are validated. ",-1)])]),_:1}),l(o,{headers:["Option","Description"],rows:u}),l(i,null,{default:a(()=>[...e[16]||(e[16]=[t(" These options are useful when designing AI endpoints because prompts and other input values often have specific requirements. For example, limiting the prompt length helps prevent excessively large inputs from being submitted to the AI service. ",-1)])]),_:1}),l(r,null,{default:a(()=>[...e[17]||(e[17]=[t("Validating Incoming Data",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[18]||(e[18]=[t(" Creating a serializer is only the first step. We also need to use it to validate incoming requests. DRF provides the ",-1),s("code",null,"is_valid()",-1),t(" method to check whether submitted data follows the serializer's defined rules. ",-1)])]),_:1}),l(n,{language:"python",code:b}),l(i,null,{default:a(()=>[...e[19]||(e[19]=[t(" The code performs two important operations: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,[s("code",null,"is_valid()"),t(" checks whether the submitted data meets the serializer's requirements.")]),s("li",null,[s("code",null,"validated_data"),t(" provides the cleaned and validated values that the application can safely use according to those rules. ")])],-1),t(" If validation fails, ",-1),s("code",null,"serializer.errors",-1),t(" contains the details of the validation problems. ",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[20]||(e[20]=[t(" For example, if the client submits an empty message, the serializer can return the following validation error: ",-1)])]),_:1}),l(n,{language:"json",code:S}),l(i,null,{default:a(()=>[...e[21]||(e[21]=[t(" This allows the backend to reject invalid input before attempting to process it. ",-1)])]),_:1}),l(r,null,{default:a(()=>[...e[22]||(e[22]=[t("Creating a Response Serializer",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[23]||(e[23]=[t(" Request serializers validate information coming from the frontend. Response serializers help organize information that the backend sends back. For our chatbot, we want the API to return three values: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,[s("code",null,"reply"),t(" – the generated response.")]),s("li",null,[s("code",null,"model"),t(" – the name of the AI model used.")]),s("li",null,[s("code",null,"success"),t(" – indicates whether the operation was successful.")])],-1)])]),_:1}),l(n,{language:"python",code:T}),l(i,null,{default:a(()=>[...e[24]||(e[24]=[t(" The ",-1),s("code",null,"ChatResponseSerializer",-1),t(" defines the expected structure of the chatbot's response. For example, the backend can use this serializer to organize a generated reply before returning it to the frontend. ",-1)])]),_:1}),l(r,null,{default:a(()=>[...e[25]||(e[25]=[t("Using Request and Response Serializers Together",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[26]||(e[26]=[t(" In an actual endpoint, both serializers can be used in the same view. The request serializer validates the incoming prompt, while the response serializer prepares the data returned by the backend. ",-1)])]),_:1}),l(n,{language:"python",code:I}),l(i,null,{default:a(()=>[...e[27]||(e[27]=[t(" We can now update the ",-1),s("code",null,"ChatView",-1),t(" to use both serializers. ",-1)])]),_:1}),l(n,{language:"python",code:k}),l(i,null,{default:a(()=>[...e[28]||(e[28]=[t(" Notice how the view is organized: ",-1),s("ol",{class:"list-decimal pl-8 mt-3 space-y-2"},[s("li",null,"The request serializer receives the submitted JSON data."),s("li",null,[t("The "),s("code",null,"is_valid()"),t(" method checks the submitted message.")]),s("li",null,"If validation fails, the API returns the validation errors with HTTP 400."),s("li",null,[t("If validation succeeds, the message is retrieved from "),s("code",null,"validated_data"),t(".")]),s("li",null,"The backend processes the message and prepares a response."),s("li",null,"The response serializer organizes the response data before it is returned.")],-1)])]),_:1}),l(i,null,{default:a(()=>[...e[29]||(e[29]=[t(" The AI processing part is still a placeholder. The purpose of this example is to demonstrate how serializers fit into the request and response workflow. ",-1)])]),_:1}),l(r,null,{default:a(()=>[...e[30]||(e[30]=[t("Understanding the API Output",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[31]||(e[31]=[t(" When a valid message is submitted, the API returns a response following the structure defined by ",-1),s("code",null,"ChatResponseSerializer",-1),t(". ",-1)])]),_:1}),l(n,{language:"json",code:R}),l(i,null,{default:a(()=>[...e[32]||(e[32]=[t(" If an empty message is submitted, the request serializer rejects it and returns a validation error instead. ",-1)])]),_:1}),l(n,{language:"json",code:q}),l(i,null,{default:a(()=>[...e[33]||(e[33]=[t(" Both responses are JSON, but they serve different purposes. The first contains the chatbot's result, while the second explains why the submitted request was rejected. ",-1)])]),_:1}),l(r,null,{default:a(()=>[...e[34]||(e[34]=[t("Understanding the Complete Workflow",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[35]||(e[35]=[t(" The following diagram summarizes how request and response serializers work together in an AI-powered application. ",-1)])]),_:1}),l(n,{language:"text",code:C}),l(i,null,{default:a(()=>[...e[36]||(e[36]=[t(" This workflow separates input validation from AI processing and response formatting. It also helps prevent invalid data from reaching the AI service and gives the frontend a predictable structure for handling API responses. ",-1)])]),_:1}),l(r,null,{default:a(()=>[...e[37]||(e[37]=[t("Why Serializers Matter in AI Applications",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[38]||(e[38]=[t(" AI applications often receive unpredictable user input. A user might submit an empty prompt, an excessively long message, or data in an unexpected format. Without validation, these inputs can cause errors or unnecessary processing. Serializers help developers: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Validate prompts before sending them to an AI model."),s("li",null,"Enforce input requirements such as maximum message length."),s("li",null,"Convert incoming JSON into validated Python data."),s("li",null,"Organize AI-generated responses into consistent structures."),s("li",null,"Return meaningful validation errors to frontend applications."),s("li",null,"Make API endpoints easier to maintain and test.")],-1)])]),_:1}),l(r,null,{default:a(()=>[...e[39]||(e[39]=[t("Summary",-1)])]),_:1}),l(i,null,{default:a(()=>[...e[40]||(e[40]=[t(" In this topic, you learned that: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Serializers convert complex data into simple Python data types and support JSON representation."),s("li",null,"Request serializers validate information submitted by frontend applications."),s("li",null,"Response serializers help organize information returned by the backend."),s("li",null,"Serializer fields define the expected data types."),s("li",null,"Field options control validation rules and requirements."),s("li",null,[s("code",null,"is_valid()"),t(" checks whether submitted data meets the defined rules.")]),s("li",null,[s("code",null,"validated_data"),t(" provides the validated input values.")]),s("li",null,[s("code",null,"serializer.errors"),t(" provides details when validation fails.")])],-1)])]),_:1}),l(f,{to:"/academia/student/classes/elective3-service-layer-architecture"})])]),_:1}))}});export{B as default};

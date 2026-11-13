import{_ as m}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-GBq8Y1gq.js";import{a as n,T as i,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-Ck0YDR9Z.js";import{T as l}from"./TopicTerm-8Gsj2bko.js";import{C as o}from"./CodeBlock-CB31lEux.js";import{O as d}from"./OutputBlock-BeV5bNCQ.js";import{_ as u}from"./TableBlock.vue_vue_type_script_setup_true_lang-DQk5hU4S.js";import{d as g,h,i as s,o as c,a as r,q as t,g as a}from"./index-CTOJ-Nsm.js";const v={class:"max-w-4xl mx-auto"},x=`from rest_framework import serializers

class SummarizationSerializer(serializers.Serializer):
    text = serializers.CharField(
        required=True,
        allow_blank=False,
        trim_whitespace=True
    )

    max_length = serializers.IntegerField(
        required=False,
        default=100,
        min_value=20,
        max_value=500
    )

    style = serializers.ChoiceField(
        choices=["concise", "detailed", "bullet_points"],
        required=False,
        default="concise"
    )

    def validate_text(self, value):
        if len(value) < 50:
            raise serializers.ValidationError(
                "Text must contain at least 50 characters."
            )

        if len(value) > 10000:
            raise serializers.ValidationError(
                "Text must not exceed 10,000 characters."
            )

        return value`,y=`import requests
from django.conf import settings

class AIServiceError(Exception):
    pass


class AIService:
    @staticmethod
    def summarize(text, max_length=100, style="concise"):
        prompt = f"""
        Summarize the following text faithfully.

        Instructions:
        - Preserve the important information.
        - Do not introduce facts not found in the text.
        - Keep the summary within approximately {max_length} words.
        - Use a {style} writing style.

        Text:
        {text}

        Summary:
        """

        try:
            response = requests.post(
                f"{settings.OLLAMA_URL}/api/generate",
                json={
                    "model": settings.OLLAMA_MODEL,
                    "prompt": prompt,
                    "stream": False
                },
                timeout=(5, 60)
            )

            response.raise_for_status()
            data = response.json()

            summary = data.get("response", "").strip()

            if not summary:
                raise AIServiceError("The model returned an empty summary.")

            return {
                "summary": summary,
                "model": data.get("model", settings.OLLAMA_MODEL),
                "total_duration": data.get("total_duration")
            }

        except requests.exceptions.Timeout as exc:
            raise AIServiceError("The AI service timed out.") from exc

        except requests.exceptions.RequestException as exc:
            raise AIServiceError("Unable to connect to the AI service.") from exc`,w=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import SummarizationSerializer
from .services.ai_service import AIService, AIServiceError


class SummarizationView(APIView):

    def post(self, request):
        serializer = SummarizationSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                serializer.errors,
                status=status.HTTP_400_BAD_REQUEST
            )

        try:
            result = AIService.summarize(
                text=serializer.validated_data["text"],
                max_length=serializer.validated_data["max_length"],
                style=serializer.validated_data["style"]
            )

            return Response({
                "summary": result["summary"],
                "model": result["model"],
                "total_duration": result["total_duration"]
            }, status=status.HTTP_200_OK)

        except AIServiceError as exc:
            return Response(
                {"error": str(exc)},
                status=status.HTTP_503_SERVICE_UNAVAILABLE
            )`,T=`from django.urls import path
from .views import SummarizationView

urlpatterns = [
    path(
        "summarize/",
        SummarizationView.as_view(),
        name="summarize"
    ),
]`,A=`POST /api/ai/summarize/
Content-Type: application/json

{
    "text": "Artificial intelligence (AI) is a field of computer science that focuses on creating systems capable of performing tasks that normally require human intelligence. These tasks include learning, reasoning, problem-solving, understanding language, and recognizing patterns. AI is used in healthcare, education, transportation, finance, and many other industries.",
    "max_length": 60,
    "style": "concise"
}`,I=`{
    "summary": "Artificial intelligence enables computer systems to perform tasks associated with human intelligence, such as learning, reasoning, and language understanding. It is widely applied across industries including healthcare, education, transportation, and finance.",
    "model": "llama3.2:3b",
    "total_duration": 1845320000
}`,z=`{
    "text": "Too short",
    "max_length": 60,
    "style": "concise"
}`,b=`HTTP 400 Bad Request

{
    "text": [
        "Text must contain at least 50 characters."
    ]
}`,V=g({__name:"TextSummarizationEndpoint",setup(S){return(q,e)=>(c(),h(p,null,{default:s(()=>[r("div",v,[e[39]||(e[39]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:m,alt:"Text Summarization",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[40]||(e[40]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Text Summarization Endpoint ")],-1)),t(n,null,{default:s(()=>[...e[0]||(e[0]=[a("Introduction",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[1]||(e[1]=[a(" Long documents, articles, and reports can contain more information than a user needs at a given moment. A summarization feature helps reduce lengthy content into a shorter version while preserving its most important ideas. In this lesson, we will build an API endpoint that accepts text, sends it to an AI model through Ollama, and returns a generated summary. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[2]||(e[2]=[a("Understanding Text Summarization",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[3]||(e[3]=[a(" Text summarization is the process of producing a shorter version of a document while retaining its essential information. There are two common approaches: ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[4]||(e[4]=[a("Extractive Summarization",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[5]||(e[5]=[a(" Selects important sentences or phrases directly from the original text. The system does not generate entirely new sentences; it chooses existing parts of the document. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[6]||(e[6]=[a("Abstractive Summarization",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[7]||(e[7]=[a(" Generates a shorter version using new sentences and paraphrased expressions. It aims to communicate the original meaning in a more concise way. Large language models commonly perform abstractive summarization through instructions provided in a prompt. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[8]||(e[8]=[a("Designing the API Request",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[9]||(e[9]=[a(" Before implementing the endpoint, we need to determine what information the client must provide. Our summarization endpoint will accept three fields: ",-1)])]),_:1}),t(u,{headers:["Field","Description","Example"],rows:[{label:"text",values:["The original content to summarize.","An article or report"]},{label:"max_length",values:["Approximate target summary length in words.","100"]},{label:"style",values:["The preferred writing style.","concise"]}]}),t(i,null,{default:s(()=>[...e[10]||(e[10]=[a(" The text is required, while the other fields have default values. This allows the frontend to request a summary without specifying every option. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[11]||(e[11]=[a("Creating the Serializer",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[12]||(e[12]=[a(" The serializer validates incoming data before it reaches our AI service. We will enforce a minimum and maximum text length to prevent empty or excessively large requests. ",-1)])]),_:1}),t(o,{language:"python",code:x}),t(i,null,{default:s(()=>[...e[13]||(e[13]=[a(" The ",-1),r("code",null,"ChoiceField",-1),a(" restricts the style to supported values. The ",-1),r("code",null,"validate_text()",-1),a(" method applies additional validation to the submitted content. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[14]||(e[14]=[a("Why validate the input?",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[15]||(e[15]=[a(" Validation protects the endpoint from unnecessary requests and ensures that the AI model receives data in the expected format. It also gives the frontend meaningful errors that can be displayed to the user. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[16]||(e[16]=[a("Creating the AI Service Method",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[17]||(e[17]=[a(" The service layer is responsible for communicating with Ollama. Instead of placing HTTP requests directly inside the API view, we keep the AI integration in a dedicated service class. We will use Ollama's ",-1),r("code",null,"/api/generate",-1),a(" endpoint with ",-1),r("code",null,"stream",-1),a(" set to ",-1),r("code",null,"false",-1),a(", so the model returns the completed summary in a single response. ",-1)])]),_:1}),t(o,{language:"python",code:y}),t(i,null,{default:s(()=>[...e[18]||(e[18]=[a(" Notice how the prompt contains specific instructions. It tells the model to preserve important information, avoid introducing unsupported facts, and follow the requested length and style. The service also handles connection errors and timeouts. If Ollama is unavailable or takes too long to respond, it raises an application-level exception instead of returning an incomplete result. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[19]||(e[19]=[a("Understanding the returned metadata",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[20]||(e[20]=[a(" Ollama may include additional information about the generation process. Here, we return the model name and ",-1),r("code",null,"total_duration",-1),a(" when available. The duration is reported in nanoseconds. It is useful for monitoring how long the model takes to generate a summary, but it is not a complete measurement of the API's total response time. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[21]||(e[21]=[a("Creating the API View",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[22]||(e[22]=[a(" Now that the serializer and service method are ready, we can connect them through a Django REST Framework API view. ",-1)])]),_:1}),t(o,{language:"python",code:w}),t(i,null,{default:s(()=>[...e[23]||(e[23]=[a(" The view follows a simple process: ",-1)])]),_:1}),t(u,{headers:["Step","Operation"],rows:[{label:"1",values:["Receive the POST request."]},{label:"2",values:["Validate the request using the serializer."]},{label:"3",values:["Pass the validated data to the AI service."]},{label:"4",values:["Return the generated summary."]},{label:"5",values:["Return an error response if the AI service fails."]}]}),t(i,null,{default:s(()=>[...e[24]||(e[24]=[a(" We use HTTP 400 when the submitted data is invalid and HTTP 503 when the AI service cannot fulfill the request. These status codes help the frontend distinguish between client-side validation problems and service availability problems. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[25]||(e[25]=[a("Registering the Endpoint",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[26]||(e[26]=[a(" Add the summarization view to your application's URL configuration. ",-1)])]),_:1}),t(o,{language:"python",code:T}),t(i,null,{default:s(()=>[...e[27]||(e[27]=[a(" If the application's URL configuration is already included under ",-1),r("code",null,"/api/ai/",-1),a(", the endpoint will be accessible at: ",-1)])]),_:1}),t(d,{output:"POST http://localhost:8000/api/ai/summarize/"}),t(n,null,{default:s(()=>[...e[28]||(e[28]=[a("Testing the Endpoint",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[29]||(e[29]=[a(" We can test the endpoint using Postman, Thunder Client, or another API testing tool. Send a POST request with a JSON body. ",-1)])]),_:1}),t(o,{language:"json",code:A}),t(i,null,{default:s(()=>[...e[30]||(e[30]=[a(" If the request is valid and Ollama successfully generates a summary, the API returns a response similar to this: ",-1)])]),_:1}),t(o,{language:"json",code:I}),t(i,null,{default:s(()=>[...e[31]||(e[31]=[a(" The generated summary may differ between requests because language models generate responses dynamically. The example above illustrates the expected response structure, not a guaranteed output. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[32]||(e[32]=[a("Handling Invalid Requests",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[33]||(e[33]=[a(" Try sending a request with text that does not meet the minimum length requirement. ",-1)])]),_:1}),t(o,{language:"json",code:z}),t(d,{output:b}),t(i,null,{default:s(()=>[...e[34]||(e[34]=[a(" The serializer rejects the request before the AI service is called. This prevents unnecessary model execution and returns a clear validation message to the client. ",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[35]||(e[35]=[a("Important Considerations",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[36]||(e[36]=[a(" A working summarization endpoint is only the starting point. A production implementation should also consider: ",-1)])]),_:1}),t(u,{headers:["Consideration","Purpose"],rows:[{label:"Input limits",values:["Prevent excessively large requests."]},{label:"Timeout handling",values:["Avoid waiting indefinitely for the model."]},{label:"Authentication",values:["Restrict access to authorized users."]},{label:"Rate limiting",values:["Prevent excessive requests."]},{label:"Output validation",values:["Ensure the generated summary is not empty and is usable."]},{label:"Privacy",values:["Avoid exposing sensitive submitted content through logs or error messages."]}]}),t(n,null,{default:s(()=>[...e[37]||(e[37]=[a("Summary",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[38]||(e[38]=[a(" We created a text summarization endpoint using Django REST Framework and Ollama. The implementation validates incoming text, constructs a summarization prompt, communicates with the AI model, and returns the generated result through an API response. This same architecture can support other AI-powered features. Instead of building a separate AI integration for every feature, we can reuse the service layer and change the prompt and validation rules according to the task. ",-1)])]),_:1}),t(f,{to:"/academia/student/classes/elective3-text-classification"})])]),_:1}))}});export{V as default};

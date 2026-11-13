import{_ as h}from"./logo-C9ImmdpX.js";import{_ as T}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as i,a as l,_ as c}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as a}from"./TopicTerm-DyqgLCaN.js";import{C as r}from"./CodeBlock-CazTR3fe.js";import{O as m}from"./OutputBlock-DHZz8RI8.js";import{_ as u}from"./TableBlock.vue_vue_type_script_setup_true_lang-CuR93uMb.js";import{d as w,h as y,i as o,o as q,a as n,q as s,g as t}from"./index-CP-QU3eE.js";const v={class:"max-w-4xl mx-auto"},b=`import requests

try:
    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3.2",
            "prompt": "Explain artificial intelligence.",
            "stream": False
        },
        timeout=(5, 60)
    )

    response.raise_for_status()

    result = response.json()
    print(result["response"])

except requests.exceptions.ConnectTimeout:
    print("Connection timed out.")

except requests.exceptions.ReadTimeout:
    print("The AI model took too long to respond.")

except requests.exceptions.RequestException as error:
    print("Request failed:", error)`,R=`with requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "llama3.2",
        "prompt": "Explain artificial intelligence.",
        "stream": True
    },
    stream=True,
    timeout=(5, 60)
) as response:

    response.raise_for_status()

    for line in response.iter_lines():
        if line:
            print(line)`,x=`Connection timed out.
The AI model took too long to respond.
Request failed: ...`,A=`# Example rate limit:

5 requests per minute

User submits request 1  -> Allowed
User submits request 2  -> Allowed
User submits request 3  -> Allowed
User submits request 4  -> Allowed
User submits request 5  -> Allowed
User submits request 6  -> Rejected`,I="pip install djangorestframework",k=`REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.AnonRateThrottle',
        'rest_framework.throttling.UserRateThrottle',
    ],

    'DEFAULT_THROTTLE_RATES': {
        'anon': '10/hour',
        'user': '100/hour',
    },
}`,E=`from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.throttling import UserRateThrottle

class AIChatThrottle(UserRateThrottle):
    rate = '10/minute'


class ChatView(APIView):
    permission_classes = [IsAuthenticated]
    throttle_classes = [AIChatThrottle]

    def post(self, request):
        message = request.data.get('message')

        return Response({
            'message': message,
            'status': 'Request accepted'
        })`,P=`HTTP 200 OK

{
    "message": "Explain artificial intelligence.",
    "status": "Request accepted"
}

HTTP 429 Too Many Requests

{
    "detail": "Request was throttled."
}`,S=`from rest_framework.throttling import UserRateThrottle

class ChatThrottle(UserRateThrottle):
    scope = 'chat'


class SummaryThrottle(UserRateThrottle):
    scope = 'summary'`,L=`REST_FRAMEWORK = {
    'DEFAULT_THROTTLE_CLASSES': [
        'rest_framework.throttling.ScopedRateThrottle',
    ],

    'DEFAULT_THROTTLE_RATES': {
        'chat': '10/minute',
        'summary': '5/minute',
    },
}`,C=`User sends API request
        |
        v
Django REST Framework
        |
        v
Check request limit
        |
        +------ Within limit?
        |          |
        |          v
        |      Process request
        |          |
        |          v
        |      Return response
        |
        +------ Limit exceeded?
                   |
                   v
             HTTP 429 Response`,U=`from rest_framework.response import Response
from rest_framework import status

return Response(
    {
        'detail': 'Too many requests. Please try again later.'
    },
    status=status.HTTP_429_TOO_MANY_REQUESTS
)`,j=`HTTP/1.1 429 Too Many Requests
Retry-After: 30
Content-Type: application/json

{
    "detail": "Too many requests."
}`,F=`import requests

def generate_response(prompt):
    try:
        response = requests.post(
            "http://localhost:11434/api/generate",
            json={
                "model": "llama3.2",
                "prompt": prompt,
                "stream": False
            },
            timeout=(5, 60)
        )

        response.raise_for_status()

        return response.json()["response"]

    except requests.exceptions.Timeout:
        return "The AI service took too long to respond."

    except requests.exceptions.RequestException:
        return "Unable to connect to the AI service."`,z=w({__name:"TimeoutsAndRateLimiting",setup(D){const d=[{label:"Connection Timeout",values:["Maximum time allowed to establish a connection with another service."]},{label:"Read Timeout",values:["Maximum time to wait for data after a connection has been established."]},{label:"Write Timeout",values:["Maximum time allowed when sending data to another service."]},{label:"Total Request Deadline",values:["Maximum overall duration allowed for an operation, including multiple steps."]}],p=[{label:"Short Timeout",values:["Useful for simple operations that should finish quickly."]},{label:"Long Timeout",values:["May be necessary for large AI models or lengthy generation requests."]},{label:"No Timeout",values:["Can leave requests waiting indefinitely when a service becomes unresponsive."]}],f=[{label:"Per-User Limit",values:["Controls how many requests each authenticated user can make."]},{label:"Per-IP Limit",values:["Controls requests originating from a particular IP address."]},{label:"Global Limit",values:["Limits the total number of requests received by the entire application."]},{label:"Endpoint Limit",values:["Applies different limits to specific API endpoints."]}],g=[{label:"Timeouts",values:["Prevent requests from waiting indefinitely."]},{label:"Rate Limiting",values:["Restrict excessive requests from users or clients."]},{label:"Authentication",values:["Identify users and apply account-based usage restrictions."]},{label:"Monitoring",values:["Track request volume, response times, and failure rates."]},{label:"Resource Limits",values:["Protect CPU, memory, and other resources used by AI models."]}];return(O,e)=>(q(),y(T,null,{default:o(()=>[n("div",v,[e[64]||(e[64]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:h,alt:"Timeouts and Rate Limiting",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[65]||(e[65]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Timeouts and Rate Limiting ")],-1)),s(i,null,{default:o(()=>[e[2]||(e[2]=t(" AI-powered applications communicate with external services, process user requests, and generate responses. However, these operations do not always finish successfully or within an expected amount of time. An AI model may take too long to respond, a server may become unavailable, or a user may repeatedly send requests within a short period. To handle these situations, applications use ",-1)),s(a,null,{default:o(()=>[...e[0]||(e[0]=[t("Timeouts",-1)])]),_:1}),e[3]||(e[3]=t(" and ",-1)),s(a,null,{default:o(()=>[...e[1]||(e[1]=[t("Rate Limiting",-1)])]),_:1}),e[4]||(e[4]=t(" . ",-1))]),_:1}),s(i,null,{default:o(()=>[...e[5]||(e[5]=[t(" Timeouts control how long an application waits for an operation, while rate limiting controls how frequently requests can be submitted. Both techniques help improve application reliability and protect backend resources. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[6]||(e[6]=[t("Understanding Timeouts",-1)])]),_:1}),s(i,null,{default:o(()=>[e[8]||(e[8]=t(" A ",-1)),s(a,null,{default:o(()=>[...e[7]||(e[7]=[t("Timeout",-1)])]),_:1}),e[9]||(e[9]=t(" is a limit on how long an application waits for an operation to complete. Imagine calling a customer service hotline. If nobody answers after a reasonable amount of time, you may decide to end the call and try again later. Applications use timeouts in a similar way. Instead of waiting indefinitely for an unresponsive service, the application stops waiting and handles the situation. ",-1))]),_:1}),s(i,null,{default:o(()=>[...e[10]||(e[10]=[t(" Without appropriate timeouts, a backend request may remain occupied for an unnecessarily long period. This can consume resources and affect other users. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[11]||(e[11]=[t("Types of Timeouts",-1)])]),_:1}),s(u,{headers:["Timeout Type","Description"],rows:d}),s(i,null,{default:o(()=>[...e[12]||(e[12]=[t(" Connection and read timeouts are especially important when our Django backend communicates with Ollama. A connection timeout limits the time spent establishing a connection, while a read timeout limits how long the client waits for incoming data. ",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[13]||(e[13]=[t(" A total request deadline is different from an individual connection or read timeout. It limits the overall duration of an operation, including multiple network requests and processing steps. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[14]||(e[14]=[t("Setting Timeouts in Python Requests",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[15]||(e[15]=[t(" The Python Requests library supports timeouts through the ",-1),n("code",null,"timeout",-1),t(" parameter. Let's apply it to an HTTP request sent to Ollama. ",-1)])]),_:1}),s(r,{language:"python",code:b}),s(i,null,{default:o(()=>[...e[16]||(e[16]=[t(" Notice the following: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"timeout=(5, 60)"),t(" sets a connection timeout of five seconds and a read timeout of 60 seconds. ")]),n("li",null,[n("code",null,"ConnectTimeout"),t(" handles connection timeout errors.")]),n("li",null,[n("code",null,"ReadTimeout"),t(" handles cases where the server takes too long to provide data.")]),n("li",null,[n("code",null,"RequestException"),t(" handles other request-related errors.")])],-1)])]),_:1}),s(i,null,{default:o(()=>[...e[17]||(e[17]=[t(" The values are expressed in seconds. ",-1)])]),_:1}),s(m,{output:x}),s(i,null,{default:o(()=>[...e[18]||(e[18]=[t(" The output illustrates possible error messages. The actual message depends on what happened during the request. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[19]||(e[19]=[t("Timeouts in Streaming Requests",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[20]||(e[20]=[t(" Timeouts are also important when receiving streamed AI responses. In a streaming request, the model may generate content over an extended period. The client must allow enough time for the response while still protecting the application from stalled connections. ",-1)])]),_:1}),s(r,{language:"python",code:R}),s(i,null,{default:o(()=>[...e[21]||(e[21]=[t(" In this example, the read timeout applies to waiting for incoming data between reads. It is not a guaranteed maximum duration for the entire stream. If the application needs a strict overall deadline, it must implement additional deadline tracking and cancellation logic. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[22]||(e[22]=[t("Choosing Appropriate Timeout Values",-1)])]),_:1}),s(u,{headers:["Configuration","When to Use"],rows:p}),s(i,null,{default:o(()=>[...e[23]||(e[23]=[t(" Timeout values should depend on the operation being performed. A simple database lookup may require only a short timeout, while generating a lengthy response using a large language model may require a longer one. Setting timeouts too aggressively can interrupt valid operations. Setting them too generously can leave resources occupied for too long. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[24]||(e[24]=[t("Understanding Rate Limiting",-1)])]),_:1}),s(i,null,{default:o(()=>[s(a,null,{default:o(()=>[...e[25]||(e[25]=[t("Rate Limiting",-1)])]),_:1}),e[26]||(e[26]=t(" is a technique that restricts how many requests a user or client can make within a specified period. For example, an AI chatbot may allow a user to submit only five requests per minute. ",-1))]),_:1}),s(r,{language:"text",code:A}),s(i,null,{default:o(()=>[...e[27]||(e[27]=[t(" Once the limit is reached, additional requests are rejected until the rate limit window allows more requests. This helps prevent excessive usage and protects the application from unnecessary processing. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[28]||(e[28]=[t("Types of Rate Limits",-1)])]),_:1}),s(u,{headers:["Rate Limit Type","Description"],rows:f}),s(i,null,{default:o(()=>[...e[29]||(e[29]=[t(" For an AI application, per-user and endpoint limits are particularly useful. For example, generating a short text summary may be less expensive than generating a lengthy AI response. Different endpoints can therefore have different limits. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[30]||(e[30]=[t("Rate Limiting in Django REST Framework",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[31]||(e[31]=[t(" Django REST Framework provides built-in throttling classes that allow developers to limit API request rates. These classes can be configured globally or applied to individual API views. ",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[32]||(e[32]=[t(" First, make sure Django REST Framework is installed. ",-1)])]),_:1}),s(r,{language:"bash",code:I}),s(l,null,{default:o(()=>[...e[33]||(e[33]=[t("Configuring Global Throttling",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[34]||(e[34]=[t(" Open the Django project's ",-1),n("code",null,"settings.py",-1),t(" file and configure the ",-1),n("code",null,"REST_FRAMEWORK",-1),t(" settings. ",-1)])]),_:1}),s(r,{language:"python",code:k}),s(i,null,{default:o(()=>[...e[35]||(e[35]=[t(" This configuration enables two built-in throttling classes: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"AnonRateThrottle"),t(" limits requests from unauthenticated clients.")]),n("li",null,[n("code",null,"UserRateThrottle"),t(" limits requests from authenticated users.")])],-1),t(" The configured rates allow anonymous clients ten requests per hour and authenticated users one hundred requests per hour. These values are examples and should be adjusted according to the application's expected usage and available resources. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[36]||(e[36]=[t("Applying Throttling to an API View",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[37]||(e[37]=[t(" We can also define a custom throttle class and apply it to a specific endpoint. ",-1)])]),_:1}),s(r,{language:"python",code:E}),s(i,null,{default:o(()=>[...e[38]||(e[38]=[t(" In this example, ",-1),n("code",null,"AIChatThrottle",-1),t(" allows ten requests per minute for each authenticated user. The ",-1),n("code",null,"throttle_classes",-1),t(" property applies that limit to the chat endpoint. The ",-1),n("code",null,"IsAuthenticated",-1),t(" permission ensures that only authenticated users can access this example view. ",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[39]||(e[39]=[t(" If a user exceeds the configured limit, Django REST Framework rejects the request instead of executing the view. ",-1)])]),_:1}),s(m,{output:P}),s(i,null,{default:o(()=>[e[41]||(e[41]=t(" HTTP status code ",-1)),e[42]||(e[42]=n("code",null,"429",-1)),e[43]||(e[43]=t(" means ",-1)),s(a,null,{default:o(()=>[...e[40]||(e[40]=[t("Too Many Requests",-1)])]),_:1}),e[44]||(e[44]=t(" . It tells the client that it has submitted requests too frequently and should wait before trying again. ",-1))]),_:1}),s(l,null,{default:o(()=>[...e[45]||(e[45]=[t("Applying Different Limits to Different Endpoints",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[46]||(e[46]=[t(" Some AI operations may require more resources than others. For example, an application may allow ten chat requests per minute but only five summarization requests per minute. Django REST Framework supports this using ",-1),n("code",null,"ScopedRateThrottle",-1),t(". ",-1)])]),_:1}),s(r,{language:"python",code:S}),s(i,null,{default:o(()=>[...e[47]||(e[47]=[t(" The corresponding configuration can be added to ",-1),n("code",null,"settings.py",-1),t(". ",-1)])]),_:1}),s(r,{language:"python",code:L}),s(i,null,{default:o(()=>[...e[48]||(e[48]=[t(" Each API view can assign a scope that matches the configured rate limit. This gives developers more control over how frequently different AI operations can be accessed. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[49]||(e[49]=[t("Understanding the Throttling Workflow",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[50]||(e[50]=[t(" Before processing an API request, Django REST Framework checks whether the client is allowed to submit another request. ",-1)])]),_:1}),s(r,{language:"text",code:C}),s(i,null,{default:o(()=>[...e[51]||(e[51]=[t(" If the client is within its allowed request rate, the application continues processing the request. Otherwise, the framework returns an HTTP 429 response without executing the API view. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[52]||(e[52]=[t("Returning a Rate Limit Error",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[53]||(e[53]=[t(" Although Django REST Framework can generate throttling responses automatically, we can also return an HTTP 429 response manually when implementing custom request limits. ",-1)])]),_:1}),s(r,{language:"python",code:U}),s(i,null,{default:o(()=>[...e[54]||(e[54]=[t(" A useful rate limit response may also include a ",-1),n("code",null,"Retry-After",-1),t(" header. ",-1)])]),_:1}),s(r,{language:"http",code:j}),s(i,null,{default:o(()=>[...e[55]||(e[55]=[t(" In this example, the client is instructed to wait 30 seconds before trying again. This helps the frontend determine when it should allow another request. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[56]||(e[56]=[t("Combining Timeouts and Error Handling",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[57]||(e[57]=[t(" We can combine timeouts and exception handling inside an AI service function. This ensures that the application handles slow or unavailable AI services without leaving the calling code unaware of what happened. ",-1)])]),_:1}),s(r,{language:"python",code:F}),s(i,null,{default:o(()=>[...e[58]||(e[58]=[t(" This example handles timeout errors separately from other request failures. In a real application, the service should communicate errors to the API view through appropriate exceptions or structured results. The view can then return a suitable HTTP response without exposing internal service details. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[59]||(e[59]=[t("Protecting an AI Application",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[60]||(e[60]=[t(" Timeouts and rate limiting are only part of a complete resource protection strategy. ",-1)])]),_:1}),s(u,{headers:["Technique","Purpose"],rows:g}),s(i,null,{default:o(()=>[...e[61]||(e[61]=[t(" One important distinction is that Django REST Framework throttling is not a complete security or denial-of-service protection mechanism. Its built-in throttles use cache-based counters and are suitable for application-level usage policies, but their limits may not be perfectly accurate under heavy concurrent traffic. Production systems may also need infrastructure-level rate limiting, shared caching, request-size restrictions, and authentication controls. ",-1)])]),_:1}),s(l,null,{default:o(()=>[...e[62]||(e[62]=[t("Summary",-1)])]),_:1}),s(i,null,{default:o(()=>[...e[63]||(e[63]=[t(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Timeouts limit how long an application waits for an operation."),n("li",null,"Connection timeouts and read timeouts control different stages of HTTP communication."),n("li",null,[t("Python Requests supports timeouts through the "),n("code",null,"timeout"),t(" parameter.")]),n("li",null,"Streaming requests need appropriate timeout and cancellation handling."),n("li",null,"Rate limiting restricts how frequently clients can submit requests."),n("li",null,"Django REST Framework provides built-in throttling classes."),n("li",null,"Custom throttle classes can apply different limits to specific API endpoints."),n("li",null,"HTTP 429 indicates that a client has exceeded its allowed request rate."),n("li",null,"Timeouts and rate limiting help protect AI services from excessive or stalled requests.")],-1)])]),_:1}),s(c,{to:"/academia/student/classes/elective3",text:"Finish"})])]),_:1}))}});export{z as default};

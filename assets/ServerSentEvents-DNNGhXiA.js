import{_ as f}from"./logo-C9ImmdpX.js";import{_ as g}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as o,a as l,_ as v}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as d}from"./TopicTerm-DyqgLCaN.js";import{C as r}from"./CodeBlock-CazTR3fe.js";import{O as h}from"./OutputBlock-DHZz8RI8.js";import{_ as i}from"./TableBlock.vue_vue_type_script_setup_true_lang-CuR93uMb.js";import{d as S,h as b,i as a,o as w,a as n,q as s,g as t}from"./index-CP-QU3eE.js";const y={class:"max-w-4xl mx-auto"},T=`event: message
data: Artificial

event: message
data: intelligence

event: message
data: is a field of computer science.

event: done
data: [DONE]`,E=`Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive`,x=`from django.http import StreamingHttpResponse
import time

def stream_example(request):

    def event_stream():
        messages = [
            "Artificial ",
            "intelligence ",
            "is a field ",
            "of computer science."
        ]

        for message in messages:
            yield f"data: {message}\\n\\n"
            time.sleep(1)

    response = StreamingHttpResponse(
        event_stream(),
        content_type="text/event-stream"
    )

    response["Cache-Control"] = "no-cache"

    return response`,P=`data: Artificial

data: intelligence

data: is a field

data: of computer science.`,A=`import json
import requests

from django.http import StreamingHttpResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@require_POST
def chat_stream(request):

    body = json.loads(request.body)
    prompt = body.get("message", "")

    def event_stream():
        try:
            with requests.post(
                "http://localhost:11434/api/generate",
                json={
                    "model": "llama3.2",
                    "prompt": prompt,
                    "stream": True
                },
                stream=True,
                timeout=(5, 300)
            ) as ollama_response:

                ollama_response.raise_for_status()

                for line in ollama_response.iter_lines():
                    if not line:
                        continue

                    data = json.loads(line)
                    chunk = data.get("response", "")

                    if chunk:
                        event = {
                            "content": chunk
                        }

                        yield (
                            f"event: message\\n"
                            f"data: {json.dumps(event)}\\n\\n"
                        )

                    if data.get("done"):
                        yield "event: done\\ndata: [DONE]\\n\\n"
                        return

        except requests.RequestException:
            error = {"message": "AI service unavailable"}

            yield (
                f"event: error\\n"
                f"data: {json.dumps(error)}\\n\\n"
            )

        except Exception:
            error = {"message": "An unexpected error occurred"}

            yield (
                f"event: error\\n"
                f"data: {json.dumps(error)}\\n\\n"
            )

    response = StreamingHttpResponse(
        event_stream(),
        content_type="text/event-stream"
    )

    response["Cache-Control"] = "no-cache"
    response["X-Accel-Buffering"] = "no"

    return response`,I=`from django.urls import path
from .views import chat_stream

urlpatterns = [
    path("chat/stream/", chat_stream, name="chat-stream"),
]`,O=`import { ref } from 'vue'

const answer = ref('')
const isGenerating = ref(false)
const errorMessage = ref('')

async function sendMessage(message: string) {
    answer.value = ''
    errorMessage.value = ''
    isGenerating.value = true

    try {
        const response = await fetch(
            'http://localhost:8000/api/chat/stream/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            }
        )

        if (!response.ok || !response.body) {
            throw new Error('Unable to connect to AI service.')
        }

        const reader = response.body.getReader()
        const decoder = new TextDecoder()

        let buffer = ''

        while (true) {
            const { value, done } = await reader.read()

            if (done) break

            buffer += decoder.decode(value, {
                stream: true
            })

            const events = buffer.split('\\n\\n')
            buffer = events.pop() ?? ''

            for (const eventText of events) {
                let eventName = 'message'
                const dataLines: string[] = []

                for (const line of eventText.split('\\n')) {
                    if (line.startsWith('event:')) {
                        eventName = line.slice(6).trim()
                    }

                    if (line.startsWith('data:')) {
                        dataLines.push(
                            line.slice(5).trimStart()
                        )
                    }
                }

                const data = dataLines.join('\\n')

                if (eventName === 'message') {
                    const payload = JSON.parse(data)
                    answer.value += payload.content
                }

                if (eventName === 'done') {
                    return
                }

                if (eventName === 'error') {
                    const payload = JSON.parse(data)
                    throw new Error(payload.message)
                }
            }
        }
    } catch (error) {
        errorMessage.value = error instanceof Error
            ? error.message
            : 'Something went wrong.'
    } finally {
        isGenerating.value = false
    }
}`,j=`Vue 3 Frontend
       |
       | HTTP POST
       v
Django REST Backend
       |
       | HTTP Streaming Request
       v
Ollama AI Model
       |
       | Generated Chunks
       v
Django StreamingHttpResponse
       |
       | SSE Events
       v
Vue 3 Frontend
       |
       v
Update Chat Interface`,W=S({__name:"ServerSentEvents",setup(k){const u=[{label:"HTTP Request",values:["The client sends a request and receives a response."]},{label:"WebSocket",values:["Allows two-way communication between the client and server."]},{label:"Server-Sent Events",values:["Allows the server to continuously send events to the client through one HTTP connection."]}],m=[{label:"message",values:["Contains a portion of the generated AI response."]},{label:"done",values:["Indicates that the AI generation has completed."]},{label:"error",values:["Indicates that an error occurred while processing the request."]}],p=[{label:"Simple Implementation",values:["Uses standard HTTP communication instead of requiring a separate WebSocket connection."]},{label:"Browser Support",values:["Browsers provide native EventSource support for receiving SSE events."]},{label:"Progressive Updates",values:["The server can send updates as they become available."]},{label:"Automatic Reconnection",values:["The native EventSource API can automatically reconnect after certain connection interruptions."]}],c=[{label:"One-Way Communication",values:["The server sends events to the client, but the client cannot send messages through the same SSE stream."]},{label:"Connection Management",values:["Long-running connections must be handled carefully."]},{label:"Buffering",values:["Some proxies or web servers may buffer responses unless configured correctly."]},{label:"Event Parsing",values:["The client must process event boundaries and incomplete data correctly."]}];return(C,e)=>(w(),b(g,null,{default:a(()=>[n("div",y,[e[46]||(e[46]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:f,alt:"Server-Sent Events",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[47]||(e[47]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Server-Sent Events (SSE) ")],-1)),s(o,null,{default:a(()=>[e[1]||(e[1]=t(" When an AI model generates a long response, users should not have to wait until the entire answer is finished before seeing anything. In the previous topic, we learned that response streaming allows applications to receive generated content progressively. However, we still need a communication method that allows the backend to continuously send these generated portions to the frontend. One solution is ",-1)),s(d,null,{default:a(()=>[...e[0]||(e[0]=[t("Server-Sent Events (SSE)",-1)])]),_:1}),e[2]||(e[2]=t(" . ",-1))]),_:1}),s(o,null,{default:a(()=>[...e[3]||(e[3]=[t(" Server-Sent Events is a web technology that allows a server to send updates to a browser through a persistent HTTP connection. Instead of returning one completed response, the server can send multiple events over time. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[4]||(e[4]=[t("Understanding Server-Sent Events",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[5]||(e[5]=[t(" Imagine monitoring the progress of a file download. Instead of receiving only a final message saying that the download is complete, the application can continuously receive updates such as 10%, 25%, 50%, and 100%. SSE uses a similar concept. The server sends events whenever new information becomes available. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[6]||(e[6]=[t(" In an AI chatbot, each event can contain a portion of the generated response. The frontend receives these events and updates the chat interface while the model continues generating the answer. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[7]||(e[7]=[t("Comparing Communication Methods",-1)])]),_:1}),s(i,{headers:["Technology","Communication"],rows:u}),s(o,null,{default:a(()=>[...e[8]||(e[8]=[t(" The main characteristic of SSE is that communication is one-way: the server sends events to the client. The client can still send another HTTP request whenever it needs to submit a message, but it cannot send data back through the same SSE stream. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[9]||(e[9]=[t("How SSE Events Are Structured",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[10]||(e[10]=[t(" SSE uses a simple text-based format. Each event consists of fields such as ",-1),n("code",null,"event",-1),t(" and ",-1),n("code",null,"data",-1),t(". An empty line separates one event from another. ",-1)])]),_:1}),s(r,{language:"text",code:T}),s(o,null,{default:a(()=>[...e[11]||(e[11]=[t(" In this example: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"event: message"),t(" identifies the event type.")]),n("li",null,[n("code",null,"data:"),t(" contains the information being transmitted.")]),n("li",null,"The blank line marks the end of an event."),n("li",null,[n("code",null,"event: done"),t(" indicates that generation has finished.")])],-1)])]),_:1}),s(o,null,{default:a(()=>[...e[12]||(e[12]=[t(" The event names ",-1),n("code",null,"message",-1),t(" and ",-1),n("code",null,"done",-1),t(" are application-defined. SSE does not automatically understand what an AI response or completed generation means. The application defines how these events should be interpreted. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[13]||(e[13]=[t("Important SSE HTTP Headers",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[14]||(e[14]=[t(" An SSE response uses a specific content type so the client and server understand that the response contains an event stream. ",-1)])]),_:1}),s(r,{language:"http",code:E}),s(o,null,{default:a(()=>[...e[15]||(e[15]=[t(" These headers serve different purposes: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"Content-Type: text/event-stream"),t(" identifies the response as an SSE stream.")]),n("li",null,[n("code",null,"Cache-Control: no-cache"),t(" instructs caches not to serve a cached response.")]),n("li",null,[n("code",null,"Connection: keep-alive"),t(" is a commonly used HTTP/1.1 connection header. It is not required for HTTP/2. ")])],-1)])]),_:1}),s(l,null,{default:a(()=>[...e[16]||(e[16]=[t("Implementing SSE in Django",-1)])]),_:1}),s(o,null,{default:a(()=>[e[18]||(e[18]=t(" Django provides ",-1)),s(d,null,{default:a(()=>[...e[17]||(e[17]=[t("StreamingHttpResponse",-1)])]),_:1}),e[19]||(e[19]=t(" , which allows a view to return a response that produces content incrementally. Instead of passing a completed string or JSON object, we provide an iterable that yields content as it becomes available. ",-1))]),_:1}),s(r,{language:"python",code:x}),s(o,null,{default:a(()=>[...e[20]||(e[20]=[t(" In this example, the ",-1),n("code",null,"event_stream()",-1),t(" function generates four text portions. The ",-1),n("code",null,"yield",-1),t(" statement sends each portion to the response stream. The application does not need to build the entire response before returning the first portion. ",-1)])]),_:1}),s(h,{output:P}),s(o,null,{default:a(()=>[...e[21]||(e[21]=[t(" Each ",-1),n("code",null,"data:",-1),t(" line is followed by two newline characters. This is important because SSE uses a blank line to identify the end of an event. The ",-1),n("code",null,"time.sleep()",-1),t(" call is included only to simulate delays between generated portions. It is not required in a real AI integration. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[22]||(e[22]=[t("Connecting Django with Ollama",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[23]||(e[23]=[t(" We can now combine Django's streaming response with Ollama's streaming API. The backend receives a user's message, sends it to Ollama, and forwards each generated portion to the frontend using SSE. ",-1)])]),_:1}),s(r,{language:"python",code:A}),s(o,null,{default:a(()=>[...e[24]||(e[24]=[t(" Let's examine the important parts of this implementation: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"StreamingHttpResponse"),t(" creates a streaming HTTP response.")]),n("li",null,[n("code",null,"requests.post()"),t(" sends the prompt to Ollama with streaming enabled.")]),n("li",null,[n("code",null,"iter_lines()"),t(" reads the incoming Ollama response incrementally.")]),n("li",null,[n("code",null,"json.loads()"),t(" converts each Ollama JSON line into a Python dictionary.")]),n("li",null,[n("code",null,"yield"),t(" sends an SSE event containing the generated text.")]),n("li",null,[t("The "),n("code",null,"done"),t(" field identifies when Ollama finishes generation.")])],-1)])]),_:1}),s(o,null,{default:a(()=>[...e[25]||(e[25]=[t(" We also use different event names: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"message"),t(" carries generated text.")]),n("li",null,[n("code",null,"done"),t(" indicates successful completion.")]),n("li",null,[n("code",null,"error"),t(" communicates a processing failure.")])],-1),t(" Notice that the code uses JSON inside the SSE ",-1),n("code",null,"data",-1),t(" field. This allows the application to send structured information instead of plain text. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[26]||(e[26]=[t(" The example uses a POST request because the frontend submits a message in the request body. This is a valid way to implement an SSE-formatted HTTP response, but it cannot be consumed directly through the browser's native ",-1),n("code",null,"EventSource",-1),t(" API, which uses GET requests. We will use the Fetch API on the frontend to read this POST response. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[27]||(e[27]=[t("Registering the Django Endpoint",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[28]||(e[28]=[t(" Before the frontend can access the streaming view, we need to register its URL. ",-1)])]),_:1}),s(r,{language:"python",code:I}),s(o,null,{default:a(()=>[...e[29]||(e[29]=[t(" The endpoint can now be accessed through the following URL: ",-1),n("p",{class:"font-mono text-sm bg-gray-100 rounded-lg p-3 mt-3 break-all"}," http://localhost:8000/api/chat/stream/ ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[30]||(e[30]=[t("Receiving SSE Events in Vue",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[31]||(e[31]=[t(" On the frontend, we need to read the response stream and process each SSE event. Since our endpoint accepts POST requests, we will use the browser's Fetch API instead of native ",-1),n("code",null,"EventSource",-1),t(". ",-1)])]),_:1}),s(r,{language:"typescript",code:O}),s(o,null,{default:a(()=>[...e[32]||(e[32]=[t(" This implementation demonstrates how a Vue application can consume an SSE-formatted response: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"fetch()"),t(" sends the user's message to Django.")]),n("li",null,[n("code",null,"getReader()"),t(" obtains a reader for the response stream.")]),n("li",null,[n("code",null,"TextDecoder"),t(" converts incoming bytes into text.")]),n("li",null,[n("code",null,"buffer"),t(" temporarily stores incomplete event data.")]),n("li",null,"The application separates complete events using the blank-line delimiter."),n("li",null,"Each event is processed according to its event name."),n("li",null,[t("Generated content is appended to the reactive "),n("code",null,"answer"),t(" variable.")])],-1)])]),_:1}),s(o,null,{default:a(()=>[...e[33]||(e[33]=[t(" One important detail is that a network chunk is not guaranteed to contain exactly one SSE event. A single event may arrive in multiple chunks, or several events may arrive together. That is why the frontend keeps incomplete data in a buffer until a complete event is available. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[34]||(e[34]=[t(" For simplicity, the example uses a basic parser for the event fields used in our application. A production implementation should also handle carriage-return line endings, multiline data fields, stream completion with a final buffered event, and cancellation when a user stops generation. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[35]||(e[35]=[t("Understanding Event Types",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[36]||(e[36]=[t(" An application can define different event types to represent different stages of an AI request. ",-1)])]),_:1}),s(i,{headers:["Event","Purpose"],rows:m}),s(o,null,{default:a(()=>[...e[37]||(e[37]=[t(" Separating events makes the frontend easier to manage because it can respond differently depending on whether the model is generating text, has completed its response, or encountered an error. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[38]||(e[38]=[t("Advantages of Server-Sent Events",-1)])]),_:1}),s(i,{headers:["Advantage","Description"],rows:p}),s(l,null,{default:a(()=>[...e[39]||(e[39]=[t("Limitations of Server-Sent Events",-1)])]),_:1}),s(i,{headers:["Limitation","Description"],rows:c}),s(o,null,{default:a(()=>[...e[40]||(e[40]=[t(" Another important consideration is server configuration. Some reverse proxies may buffer streaming responses, preventing events from reaching the browser immediately. For example, when deploying Django behind Nginx, response buffering may need to be disabled for the streaming endpoint. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[41]||(e[41]=[t("Putting Everything Together",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[42]||(e[42]=[t(" The following diagram summarizes the communication flow of our AI chatbot using Django, Ollama, and Vue. ",-1)])]),_:1}),s(r,{language:"text",code:j}),s(o,null,{default:a(()=>[...e[43]||(e[43]=[t(" The frontend sends the user's message through an HTTP POST request. Django forwards the request to Ollama, receives the generated portions, and sends them back as SSE events. Vue processes each event and updates the displayed answer until the model finishes generating its response. ",-1)])]),_:1}),s(l,null,{default:a(()=>[...e[44]||(e[44]=[t("Summary",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[45]||(e[45]=[t(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Server-Sent Events allow servers to send updates to clients through a persistent HTTP connection."),n("li",null,"SSE is a one-way communication method from server to client."),n("li",null,[t("SSE events use a text-based format with fields such as "),n("code",null,"event"),t(" and "),n("code",null,"data"),t(".")]),n("li",null,[t("Django's "),n("code",null,"StreamingHttpResponse"),t(" can produce responses incrementally.")]),n("li",null,"Ollama's streaming API can be connected to Django's streaming response."),n("li",null,"The Fetch API can consume an SSE-formatted POST response."),n("li",null,"The frontend must parse complete events because network chunks do not necessarily match event boundaries. "),n("li",null,"Production applications must consider connection handling, buffering, errors, and stream cancellation. ")],-1)])]),_:1}),s(v,{to:"/academia/student/classes/elective3-background-processing"})])]),_:1}))}});export{W as default};

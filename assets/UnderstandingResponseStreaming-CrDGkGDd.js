import{_ as g}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as a,a as i,_ as h}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as d}from"./TopicTerm-DyqgLCaN.js";import{C as o}from"./CodeBlock-CazTR3fe.js";import{O as c}from"./OutputBlock-DHZz8RI8.js";import{_ as r}from"./TableBlock.vue_vue_type_script_setup_true_lang-CuR93uMb.js";import{d as v,h as y,i as l,o as w,a as s,q as n,g as t}from"./index-CP-QU3eE.js";const b={class:"max-w-4xl mx-auto"},T=`User: Explain artificial intelligence.

[User waits...]

AI: Artificial intelligence is a field of
computer science that focuses on creating
systems capable of performing tasks that
normally require human intelligence.`,x=`User: Explain artificial intelligence.

AI: Artificial
AI: Artificial intelligence
AI: Artificial intelligence is
AI: Artificial intelligence is a field
AI: Artificial intelligence is a field of
AI: Artificial intelligence is a field of computer
AI: Artificial intelligence is a field of computer science...`,k=`User
 |
 v
Frontend sends request
 |
 v
Backend calls AI model
 |
 v
Wait for complete response
 |
 v
Backend returns complete response
 |
 v
Frontend displays answer`,A=`User
 |
 v
Frontend sends request
 |
 v
Backend calls AI model
 |
 v
Receive generated text chunks
 |
 v
Forward chunks to frontend
 |
 v
Frontend displays each chunk
 |
 v
Stream finishes`,S=`import requests

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "llama3.2",
        "prompt": "Explain artificial intelligence.",
        "stream": False
    }
)

result = response.json()

print(result["response"])`,I=`import requests
import json

response = requests.post(
    "http://localhost:11434/api/generate",
    json={
        "model": "llama3.2",
        "prompt": "Explain artificial intelligence.",
        "stream": True
    },
    stream=True
)

for line in response.iter_lines():
    if line:
        data = json.loads(line)
        print(data.get("response", ""), end="", flush=True)`,R=`Artificial intelligence is a field of computer
science that focuses on creating systems
capable of performing tasks that normally
require human intelligence.`,q=`import requests
import json

response = requests.post(
    "http://localhost:11434/api/chat",
    json={
        "model": "llama3.2",
        "messages": [
            {
                "role": "user",
                "content": "Explain artificial intelligence."
            }
        ],
        "stream": True
    },
    stream=True
)

for line in response.iter_lines():
    if line:
        data = json.loads(line)

        message = data.get("message", {})
        content = message.get("content", "")

        print(content, end="", flush=True)`,O=`{
    "model": "llama3.2",
    "response": "Artificial",
    "done": false
}

{
    "model": "llama3.2",
    "response": " intelligence",
    "done": false
}

{
    "model": "llama3.2",
    "response": " is a field of computer science.",
    "done": false
}

{
    "model": "llama3.2",
    "response": "",
    "done": true
}`,F=`const response = await fetch("/api/chat/stream/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    message: "Explain artificial intelligence."
  })
})

const reader = response.body.getReader()
const decoder = new TextDecoder()

while (true) {
  const { value, done } = await reader.read()

  if (done) break

  const chunk = decoder.decode(value, {
    stream: true
  })

  console.log(chunk)
}`,D=v({__name:"UnderstandingResponseStreaming",setup(N){const u=[{label:"Normal Response",values:["The application waits until the model finishes generating the complete response.","The user receives the answer all at once."]},{label:"Streaming Response",values:["The application receives parts of the response as they are generated.","The user sees the answer progressively."]}],p=[{label:"Better User Experience",values:["Users can begin reading the answer without waiting for the entire response."]},{label:"Perceived Responsiveness",values:["The application appears more responsive because content arrives progressively."]},{label:"Early Feedback",values:["Users can see whether the model is responding to their request."]},{label:"Long Responses",values:["Streaming is especially useful for lengthy generated content."]}],m=[{label:"Connection Handling",values:["The application must handle interrupted connections and incomplete responses."]},{label:"Frontend Complexity",values:["The frontend must read and display incoming chunks correctly."]},{label:"Error Handling",values:["Errors can occur after part of the response has already been displayed."]},{label:"Resource Management",values:["Connections and resources must be properly released when streaming ends."]}];return(P,e)=>(w(),y(f,null,{default:l(()=>[s("div",b,[e[43]||(e[43]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:g,alt:"Understanding Response Streaming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[44]||(e[44]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Understanding Response Streaming ")],-1)),n(a,null,{default:l(()=>[e[1]||(e[1]=t(" When using an AI chatbot, you may notice that some applications display the answer one portion at a time instead of showing the entire response immediately. For example, when you ask an AI assistant a question, the first few words may appear while the model is still generating the rest of the answer. This technique is called ",-1)),n(d,null,{default:l(()=>[...e[0]||(e[0]=[t("Response Streaming",-1)])]),_:1}),e[2]||(e[2]=t(" . ",-1))]),_:1}),n(a,null,{default:l(()=>[...e[3]||(e[3]=[t(" Response streaming allows an application to receive and display generated content progressively rather than waiting for the model to finish generating the entire response. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[4]||(e[4]=[t("Normal Responses vs. Streaming Responses",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[5]||(e[5]=[t(" Imagine asking a chatbot to explain artificial intelligence. In a normal response, the application waits until the AI model finishes generating the complete answer before displaying it. ",-1)])]),_:1}),n(o,{language:"text",code:T}),n(a,null,{default:l(()=>[...e[6]||(e[6]=[t(" With streaming, the application receives portions of the generated text while the model is still processing the request. ",-1)])]),_:1}),n(o,{language:"text",code:x}),n(a,null,{default:l(()=>[...e[7]||(e[7]=[t(" The main difference is when the user receives the content. A normal response delivers the completed answer, while a streaming response delivers it progressively. ",-1)])]),_:1}),n(r,{headers:["Approach","Behavior"],rows:u}),n(i,null,{default:l(()=>[...e[8]||(e[8]=[t("How Response Streaming Works",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[9]||(e[9]=[t(" Streaming involves communication between the frontend, backend, and AI model. The frontend sends a request to the backend. The backend forwards the request to the AI model. Instead of waiting for the complete result, the backend receives generated text in smaller portions and forwards those portions to the frontend. ",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[10]||(e[10]=[t(" The frontend then displays each received portion as it arrives. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[11]||(e[11]=[t("Normal Response Workflow",-1)])]),_:1}),n(o,{language:"text",code:k}),n(a,null,{default:l(()=>[...e[12]||(e[12]=[t(" In this workflow, the backend waits for the AI model to finish before returning the response. If the model takes several seconds to generate an answer, the user may see nothing during that time. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[13]||(e[13]=[t("Streaming Response Workflow",-1)])]),_:1}),n(o,{language:"text",code:A}),n(a,null,{default:l(()=>[...e[14]||(e[14]=[t(" In this workflow, the backend forwards generated chunks as they become available. The user can start reading the answer even though the model has not finished generating it. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[15]||(e[15]=[t("Understanding Streaming in Ollama",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[16]||(e[16]=[t(" Ollama supports streaming through its REST API. For example, the ",-1),s("code",null,"/api/generate",-1),t(" endpoint accepts a ",-1),s("code",null,"stream",-1),t(" option that determines whether the response should be returned progressively or as a complete JSON response. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[17]||(e[17]=[t("Normal Generation with Ollama",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[18]||(e[18]=[t(" When streaming is disabled, Ollama returns the completed response as a single JSON object. ",-1)])]),_:1}),n(o,{language:"python",code:S}),n(a,null,{default:l(()=>[...e[19]||(e[19]=[t(" The application waits for the request to finish and then retrieves the generated text using ",-1),s("code",null,"response.json()",-1),t(". ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[20]||(e[20]=[t("Streaming Generation with Ollama",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[21]||(e[21]=[t(" To enable streaming, set ",-1),s("code",null,"stream",-1),t(" to ",-1),s("code",null,"True",-1),t(" in the JSON request body and enable streaming in the Python HTTP client. ",-1)])]),_:1}),n(o,{language:"python",code:I}),n(a,null,{default:l(()=>[...e[22]||(e[22]=[t(" Notice the following: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,[s("code",null,"stream: True"),t(" tells Ollama to return the generated result progressively.")]),s("li",null,[s("code",null,"stream=True"),t(" tells the Python Requests library to read the HTTP response incrementally instead of downloading the complete response first. ")]),s("li",null,[s("code",null,"iter_lines()"),t(" reads the incoming response one line at a time.")]),s("li",null,[s("code",null,"json.loads()"),t(" converts each JSON line into a Python dictionary.")]),s("li",null,[s("code",null,"print()"),t(" displays each generated text portion without adding a new line.")])],-1)])]),_:1}),n(c,{output:R}),n(a,null,{default:l(()=>[...e[23]||(e[23]=[t(" The output appears progressively in the terminal as Ollama generates the response. This is different from printing the complete response only after the request finishes. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[24]||(e[24]=[t("Streaming with the Chat Endpoint",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[25]||(e[25]=[t(" Ollama also supports streaming through its ",-1),s("code",null,"/api/chat",-1),t(" endpoint. Unlike the generate endpoint, the chat endpoint accepts a list of messages containing roles and content. This makes it suitable for applications that maintain conversation history. ",-1)])]),_:1}),n(o,{language:"python",code:q}),n(a,null,{default:l(()=>[...e[26]||(e[26]=[t(" In this example, the generated text is found inside ",-1),s("code",null,"message.content",-1),t(" instead of the top-level ",-1),s("code",null,"response",-1),t(" field. This distinction is important because the structure of the returned JSON depends on the endpoint being used. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[27]||(e[27]=[t("Understanding Streaming Chunks",-1)])]),_:1}),n(a,null,{default:l(()=>[e[29]||(e[29]=t(" A ",-1)),n(d,null,{default:l(()=>[...e[28]||(e[28]=[t("Chunk",-1)])]),_:1}),e[30]||(e[30]=t(" is a portion of data delivered during a streaming response. The model does not necessarily send one complete word at a time. A chunk may contain part of a word, several words, or other generated content. ",-1))]),_:1}),n(a,null,{default:l(()=>[...e[31]||(e[31]=[t(" For example, an Ollama generate request may produce a sequence of JSON objects similar to the following: ",-1)])]),_:1}),n(o,{language:"json",code:O}),n(a,null,{default:l(()=>[...e[32]||(e[32]=[t(" The ",-1),s("code",null,"done",-1),t(" field indicates whether generation has finished. While ",-1),s("code",null,"done",-1),t(" is false, the model may continue producing content. When it becomes true, the generation is complete. The final chunk may also contain additional metadata about the completed generation. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[33]||(e[33]=[t("Receiving Streaming Data in the Frontend",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[34]||(e[34]=[t(" Streaming is not limited to the backend. The frontend must also know how to receive the incoming data. In a Vue application, the browser's Fetch API provides a readable response body that can be consumed using a reader. ",-1)])]),_:1}),n(o,{language:"typescript",code:F}),n(a,null,{default:l(()=>[...e[35]||(e[35]=[t(" This example demonstrates the basic idea of reading a streamed HTTP response: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,[s("code",null,"fetch()"),t(" sends the request to the backend.")]),s("li",null,[s("code",null,"response.body.getReader()"),t(" obtains a reader for the response stream.")]),s("li",null,[s("code",null,"TextDecoder"),t(" converts incoming bytes into text.")]),s("li",null,[s("code",null,"reader.read()"),t(" retrieves the next available portion of data.")]),s("li",null,"The loop continues until the stream is complete.")],-1)])]),_:1}),n(a,null,{default:l(()=>[...e[36]||(e[36]=[t(" This is only a basic illustration. A real implementation must also handle HTTP errors, missing response bodies, incomplete text sequences, and the message framing format used by the backend. For example, if the backend uses Server-Sent Events, the frontend must parse the SSE event format rather than assuming every network chunk represents one complete event. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[37]||(e[37]=[t("Advantages of Response Streaming",-1)])]),_:1}),n(r,{headers:["Advantage","Description"],rows:p}),n(a,null,{default:l(()=>[...e[38]||(e[38]=[t(" Streaming is especially useful for AI chat applications because users can begin reading an answer while the model continues generating the remaining content. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[39]||(e[39]=[t("Limitations and Challenges",-1)])]),_:1}),n(r,{headers:["Challenge","Description"],rows:m}),n(a,null,{default:l(()=>[...e[40]||(e[40]=[t(" Streaming does not necessarily make the AI model generate answers faster. Instead, it reduces the time users wait before seeing the first part of a response. The total generation time may remain similar, but the application can feel more responsive. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...e[41]||(e[41]=[t("Summary",-1)])]),_:1}),n(a,null,{default:l(()=>[...e[42]||(e[42]=[t(" In this topic, you learned that: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Response streaming delivers generated content progressively."),s("li",null,"Normal responses return the completed answer, while streaming responses deliver smaller portions as they become available. "),s("li",null,[t("Ollama supports streaming through its REST API using the "),s("code",null,"stream"),t(" option.")]),s("li",null,[t("Python Requests can read streamed HTTP responses using "),s("code",null,"iter_lines()"),t(".")]),s("li",null,"A chunk represents a portion of the generated response."),s("li",null,"The frontend can read streamed data using the Fetch API and a readable stream."),s("li",null,"Streaming improves perceived responsiveness, especially for lengthy AI responses."),s("li",null,"Applications must handle errors, incomplete data, and interrupted connections.")],-1)])]),_:1}),n(h,{to:"/academia/student/classes/elective3-server-sent-events"})])]),_:1}))}});export{D as default};

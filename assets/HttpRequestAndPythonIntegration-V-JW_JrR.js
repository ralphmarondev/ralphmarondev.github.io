import{_ as d}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-GBq8Y1gq.js";import{T as a,a as o,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-Ck0YDR9Z.js";import{T as u}from"./TopicTerm-8Gsj2bko.js";import{C as i}from"./CodeBlock-CB31lEux.js";import{O as r}from"./OutputBlock-BeV5bNCQ.js";import{_ as h}from"./TableBlock.vue_vue_type_script_setup_true_lang-DQk5hU4S.js";import{d as g,h as f,i as l,o as c,a as n,q as s,g as t}from"./index-CTOJ-Nsm.js";const y={class:"max-w-4xl mx-auto"},b="pip install requests",T="import requests",w="http://localhost:11434/api/generate",q=`import requests

url = "http://localhost:11434/api/generate"

data = {
    "model": "llama3.2",
    "prompt": "What is artificial intelligence?",
    "stream": False
}

response = requests.post(url, json=data)

result = response.json()

print(result["response"])`,v=`Artificial intelligence (AI) is a field of computer science
that focuses on creating systems capable of performing
tasks that normally require human intelligence, such as
learning, reasoning, problem-solving, and understanding
language.`,P=`print(response.status_code)
print(response.json())`,O=`200
{
    "model": "llama3.2",
    "created_at": "2026-11-12T08:30:00Z",
    "response": "Artificial intelligence is ...",
    "done": True
}`,x=`import requests

url = "http://localhost:11434/api/chat"

data = {
    "model": "llama3.2",
    "messages": [
        {
            "role": "user",
            "content": "Explain what a computer is."
        }
    ],
    "stream": False
}

response = requests.post(url, json=data)

result = response.json()

print(result["message"]["content"])`,I=`A computer is an electronic device that receives data,
processes it according to instructions, stores information,
and produces useful output.`,A=`import requests

url = "http://localhost:11434/api/generate"

data = {
    "model": "llama3.2",
    "system": "You are a helpful programming tutor.",
    "prompt": "Explain Python variables to a beginner.",
    "stream": False
}

response = requests.post(url, json=data)

result = response.json()

print(result["response"])`,k=`A variable in Python is a named location used to store
a value. For example:

name = "Ralph"
age = 25

Here, name stores a text value, while age stores a number.`,R=`import requests

url = "http://localhost:11434/api/tags"

response = requests.get(url)

result = response.json()

for model in result["models"]:
    print(model["name"])`,H=`llama3.2:latest
qwen2.5:7b
mistral:latest`,S=`response = requests.post(
    url,
    json=data,
    timeout=60
)`,j=`import requests

def ask_ai(prompt):
    url = "http://localhost:11434/api/generate"

    data = {
        "model": "llama3.2",
        "prompt": prompt,
        "stream": False
    }

    response = requests.post(url, json=data, timeout=60)
    response.raise_for_status()

    result = response.json()

    return result["response"]


question = "What is machine learning?"

answer = ask_ai(question)

print("Question:", question)
print("AI:", answer)`,C=`Question: What is machine learning?

AI: Machine learning is a branch of artificial intelligence
that allows computers to learn patterns from data and make
predictions or decisions without being explicitly programmed
for every individual task.`,Y=g({__name:"HttpRequestAndPythonIntegration",setup(F){return(B,e)=>(c(),f(p,null,{default:l(()=>[n("div",y,[e[55]||(e[55]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:d,alt:"HTTP Requests and Python Integration",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[56]||(e[56]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," HTTP Requests and Python Integration ")],-1)),s(a,null,{default:l(()=>[...e[0]||(e[0]=[t(" Python applications can communicate with locally running AI models through HTTP requests. This allows developers to send instructions to an AI model and receive its generated responses directly inside their Python programs. For example, instead of manually opening a terminal and asking Ollama a question, a Python application can send that question automatically and process the returned answer. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[1]||(e[1]=[t("1. Understanding Python and HTTP Communication",-1)])]),_:1}),s(a,null,{default:l(()=>[s(u,null,{default:l(()=>[...e[2]||(e[2]=[t("HTTP (Hypertext Transfer Protocol)",-1)])]),_:1}),e[3]||(e[3]=t(" is a communication protocol used by applications to exchange data over a network. In this setup, Python acts as the client, while Ollama acts as the server that receives requests and runs the selected AI model. ",-1))]),_:1}),s(a,null,{default:l(()=>[...e[4]||(e[4]=[t(' Consider a simple example: a Python application sends the question "What is artificial intelligence?" to Ollama. Ollama processes the request using the selected model and sends the generated response back to Python. ',-1)])]),_:1}),s(a,null,{default:l(()=>[...e[5]||(e[5]=[t(" The communication follows these steps: ",-1),n("ol",{class:"list-decimal pl-8 mt-3 space-y-2"},[n("li",null,"The Python application prepares a question or prompt."),n("li",null,"Python sends an HTTP request to the Ollama server."),n("li",null,"Ollama processes the request using the specified AI model."),n("li",null,"The model generates a response."),n("li",null,"Ollama returns the response to the Python application."),n("li",null,"Python displays or processes the generated result.")],-1)])]),_:1}),s(o,null,{default:l(()=>[...e[6]||(e[6]=[t("2. Preparing the Python Environment",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[7]||(e[7]=[t(" Before connecting Python to Ollama, make sure that Ollama is installed, a model has been downloaded, and the Ollama server is running. You can verify that Ollama is working by opening a terminal and executing: ",-1)])]),_:1}),s(i,{language:"bash",code:"ollama list"}),s(a,null,{default:l(()=>[...e[8]||(e[8]=[t(" You should see the models currently installed on your computer. For this lesson, we will use ",-1),n("b",null,"llama3.2",-1),t(" as our example model. ",-1)])]),_:1}),s(a,null,{default:l(()=>[e[10]||(e[10]=t(" Next, we need a Python library called ",-1)),s(u,null,{default:l(()=>[...e[9]||(e[9]=[t("Requests",-1)])]),_:1}),e[11]||(e[11]=t(". It simplifies sending HTTP requests and receiving responses from web services. ",-1))]),_:1}),s(i,{language:"bash",code:b}),s(a,null,{default:l(()=>[...e[12]||(e[12]=[t(" Once installed, import the library into your Python program: ",-1)])]),_:1}),s(i,{language:"python",code:T}),s(a,null,{default:l(()=>[...e[13]||(e[13]=[t(" We can now use the ",-1),n("b",null,"requests",-1),t(" library to communicate with Ollama's REST API. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[14]||(e[14]=[t("3. Connecting to the Ollama Server",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[15]||(e[15]=[t(" By default, Ollama provides its API through the following local address: ",-1)])]),_:1}),s(i,{language:"python",code:w}),s(a,null,{default:l(()=>[...e[16]||(e[16]=[t(" The address uses ",-1),n("b",null,"localhost",-1),t(", which refers to the same computer where the Python application and Ollama server are running. Port ",-1),n("b",null,"11434",-1),t(" is Ollama's default API port. ",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[17]||(e[17]=[t(" The endpoint ",-1),n("b",null,"/api/generate",-1),t(" allows an application to submit a prompt and receive generated text from an AI model. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[18]||(e[18]=[t("4. Sending a POST Request to Ollama",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[19]||(e[19]=[t(" To send a prompt to an AI model, Python can use the ",-1),n("b",null,"requests.post()",-1),t(" method. A POST request is commonly used when an application needs to send data to a server. ",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[20]||(e[20]=[t(" Let's create a simple Python program that asks Ollama a question. ",-1)])]),_:1}),s(i,{language:"python",code:q}),s(a,null,{default:l(()=>[...e[21]||(e[21]=[t(" Let's understand the important parts of the program: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("b",null,"url"),t(" specifies the Ollama API endpoint.")]),n("li",null,[n("b",null,"model"),t(" identifies the AI model that will process the request.")]),n("li",null,[n("b",null,"prompt"),t(" contains the instruction or question sent to the model.")]),n("li",null,[n("b",null,"stream"),t(" is set to False so the complete response is returned at once.")]),n("li",null,[n("b",null,"requests.post()"),t(" sends the request to the Ollama server.")]),n("li",null,[n("b",null,"response.json()"),t(" converts the returned JSON data into a Python dictionary.")]),n("li",null,[n("b",null,'result["response"]'),t(" retrieves the generated text.")])],-1)])]),_:1}),s(a,null,{default:l(()=>[...e[22]||(e[22]=[t(" If the request is successful, the generated answer can be displayed: ",-1)])]),_:1}),s(r,{output:v}),s(a,null,{default:l(()=>[...e[23]||(e[23]=[t(" The exact response will vary because AI-generated answers are not always identical. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[24]||(e[24]=[t("5. Understanding the HTTP Response",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[25]||(e[25]=[t(" When Ollama receives a request, it sends an HTTP response back to Python. This response contains a status code and data. ",-1)])]),_:1}),s(a,null,{default:l(()=>[e[27]||(e[27]=t(" The ",-1)),s(u,null,{default:l(()=>[...e[26]||(e[26]=[t("HTTP status code",-1)])]),_:1}),e[28]||(e[28]=t(" indicates whether the request was successful or encountered a problem. ",-1))]),_:1}),s(h,{headers:["Status Code","Meaning"],rows:[{label:"200",values:["OK - The request was successful."]},{label:"400",values:["Bad Request - The submitted request contains invalid data."]},{label:"404",values:["Not Found - The requested endpoint or resource was not found."]},{label:"500",values:["Internal Server Error - The server encountered an unexpected problem."]}]}),s(a,null,{default:l(()=>[...e[29]||(e[29]=[t(" We can inspect the response using the following code: ",-1)])]),_:1}),s(i,{language:"python",code:P}),s(r,{output:O}),s(a,null,{default:l(()=>[...e[30]||(e[30]=[t(" The status code 200 indicates that the request was successful. The JSON response contains information about the model and its generated answer. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[31]||(e[31]=[t("6. Using the Chat Endpoint",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[32]||(e[32]=[t(" Aside from generating text using a single prompt, Python can communicate with Ollama through the ",-1),n("b",null,"/api/chat",-1),t(" endpoint. This endpoint is designed for conversational applications that send messages with different roles, such as user and assistant. ",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[33]||(e[33]=[t(" Unlike the generate endpoint, which primarily accepts a prompt string, the chat endpoint accepts a list of messages. ",-1)])]),_:1}),s(i,{language:"python",code:x}),s(a,null,{default:l(()=>[...e[34]||(e[34]=[t(" The important parts of this request are: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("b",null,"/api/chat"),t(" is the endpoint used for chat interactions.")]),n("li",null,[n("b",null,"messages"),t(" contains the conversation messages.")]),n("li",null,[n("b",null,"role"),t(" identifies who sent the message.")]),n("li",null,[n("b",null,"content"),t(" contains the actual message.")]),n("li",null,[n("b",null,"message.content"),t(" retrieves the generated assistant response.")])],-1)])]),_:1}),s(a,null,{default:l(()=>[...e[35]||(e[35]=[t(" The generated answer can be displayed using: ",-1)])]),_:1}),s(r,{output:I}),s(a,null,{default:l(()=>[...e[36]||(e[36]=[t(" This endpoint is particularly useful when developing chatbots, virtual assistants, and other applications that involve conversations. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[37]||(e[37]=[t("7. Sending Custom Instructions",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[38]||(e[38]=[t(" An application can also provide additional instructions that influence how the AI model responds. These instructions can define the model's role, behavior, or response style. ",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[39]||(e[39]=[t(" For example, we can instruct Ollama to behave like a programming tutor: ",-1)])]),_:1}),s(i,{language:"python",code:A}),s(r,{output:k}),s(a,null,{default:l(()=>[...e[40]||(e[40]=[t(" The ",-1),n("b",null,"system",-1),t(" property provides an instruction about how the model should behave, while the ",-1),n("b",null,"prompt",-1),t(" property contains the actual question. This is useful when creating applications with a specific purpose, such as programming tutors, customer support assistants, or educational chatbots. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[41]||(e[41]=[t("8. Retrieving Available Models",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[42]||(e[42]=[t(" Python can also retrieve information about the models installed in Ollama. The ",-1),n("b",null,"/api/tags",-1),t(" endpoint returns a list of locally available models. We can use a GET request to retrieve this information. ",-1)])]),_:1}),s(i,{language:"python",code:R}),s(r,{output:H}),s(a,null,{default:l(()=>[...e[43]||(e[43]=[t(" The program uses ",-1),n("b",null,"requests.get()",-1),t(" instead of ",-1),n("b",null,"requests.post()",-1),t(" because it only needs to retrieve information from the server. This can be useful when building applications that allow users to select which installed AI model they want to use. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[44]||(e[44]=[t("9. Setting a Request Timeout",-1)])]),_:1}),s(a,null,{default:l(()=>[e[46]||(e[46]=t(" Generating an AI response may take several seconds, especially when using larger models or computers with limited resources. A ",-1)),s(u,null,{default:l(()=>[...e[45]||(e[45]=[t("timeout",-1)])]),_:1}),e[47]||(e[47]=t(" defines how long Python should wait for a server response before stopping the request. ",-1))]),_:1}),s(i,{language:"python",code:S}),s(a,null,{default:l(()=>[...e[48]||(e[48]=[t(" In this example, Python waits for up to 60 seconds. If the server does not respond within that period, the request raises a timeout exception. This prevents an application from waiting indefinitely. More detailed error handling and retry strategies will be discussed in a separate topic. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[49]||(e[49]=[t("10. Building a Simple Python AI Application",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[50]||(e[50]=[t(" Let's combine the concepts into a simple program. The application accepts a question, sends it to Ollama, and displays the generated answer. ",-1)])]),_:1}),s(i,{language:"python",code:j}),s(r,{output:C}),s(a,null,{default:l(()=>[...e[51]||(e[51]=[t(" Notice that the communication with Ollama is placed inside a function called ",-1),n("b",null,"ask_ai()",-1),t(". This makes the code reusable because we can call the function whenever we need an AI-generated response. ",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[52]||(e[52]=[t(" The ",-1),n("b",null,"raise_for_status()",-1),t(" method checks whether the HTTP request was successful. If the server returns an unsuccessful status code, it raises an HTTP error instead of continuing as though the request succeeded. ",-1)])]),_:1}),s(o,null,{default:l(()=>[...e[53]||(e[53]=[t("Summary",-1)])]),_:1}),s(a,null,{default:l(()=>[...e[54]||(e[54]=[t(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Python applications can communicate with Ollama through HTTP requests."),n("li",null,"The Requests library simplifies communication with REST APIs."),n("li",null,[t("The "),n("b",null,"requests.post()"),t(" method sends data to Ollama.")]),n("li",null,[t("The "),n("b",null,"requests.get()"),t(" method retrieves information from Ollama.")]),n("li",null,[t("The "),n("b",null,"/api/generate"),t(" endpoint generates text from a prompt.")]),n("li",null,[t("The "),n("b",null,"/api/chat"),t(" endpoint supports message-based conversations.")]),n("li",null,"JSON responses can be converted into Python dictionaries."),n("li",null,"Timeouts help prevent applications from waiting indefinitely."),n("li",null,"Python functions can organize and reuse AI communication logic.")],-1)])]),_:1}),s(m,{to:"/academia/student/classes/elective3-ollama-python-library"})])]),_:1}))}});export{Y as default};

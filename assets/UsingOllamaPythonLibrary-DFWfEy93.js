import{_ as m}from"./logo-C9ImmdpX.js";import{_ as d}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as o,a as s,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as u}from"./TopicTerm-DyqgLCaN.js";import{C as i}from"./CodeBlock-CazTR3fe.js";import{O as r}from"./OutputBlock-DHZz8RI8.js";import{d as g,h as f,i as a,o as h,a as l,q as n,g as t}from"./index-CP-QU3eE.js";const b={class:"max-w-4xl mx-auto"},y="pip install ollama",c="import ollama",w=`import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'What is artificial intelligence?'
        }
    ]
)

print(response.message.content)`,v=`Artificial intelligence (AI) is a field of computer science
that focuses on creating systems capable of performing tasks
that normally require human intelligence, such as learning,
reasoning, problem-solving, and understanding language.`,T=`import ollama

response = ollama.generate(
    model='llama3.2',
    prompt='Explain what Python is.'
)

print(response.response)`,x=`Python is a high-level programming language known for its
simple syntax and readability. It is commonly used for web
development, automation, data analysis, and artificial
intelligence.`,O=`import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'system',
            'content': 'You are a helpful programming tutor.'
        },
        {
            'role': 'user',
            'content': 'Explain Python variables to a beginner.'
        }
    ]
)

print(response.message.content)`,P=`A variable in Python is a named location used to store a value.

For example:

name = "Ralph"
age = 25

Here, name stores text, while age stores a number.`,I=`import ollama

response = ollama.list()

for model in response.models:
    print(model.model)`,k=`llama3.2:latest
qwen2.5:7b
mistral:latest`,A=`import ollama

response = ollama.show('llama3.2')

print(response)`,q=`import ollama

response = ollama.pull('llama3.2')

print("Model downloaded successfully!")`,C=`import ollama

client = ollama.Client(
    host='http://localhost:11434'
)

response = client.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'What is machine learning?'
        }
    ]
)

print(response.message.content)`,L=`Machine learning is a branch of artificial intelligence
that allows computers to learn patterns from data and
make predictions or decisions.`,E=`import ollama

def ask_ai(question):
    response = ollama.chat(
        model='llama3.2',
        messages=[
            {
                'role': 'user',
                'content': question
            }
        ]
    )

    return response.message.content


question = "What is a database?"

answer = ask_ai(question)

print("Question:", question)
print("AI:", answer)`,M=`Question: What is a database?

AI: A database is an organized collection of information
that can be stored, accessed, managed, and updated
electronically.`,S=`import ollama

stream = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'Explain how the internet works.'
        }
    ],
    stream=True
)

for chunk in stream:
    print(chunk.message.content, end='', flush=True)`,B=`The internet is a global network of connected computers
and devices that communicate with one another using
standard communication protocols...`,R=`import ollama

try:
    response = ollama.chat(
        model='llama3.2',
        messages=[
            {
                'role': 'user',
                'content': 'Hello!'
            }
        ]
    )

    print(response.message.content)

except ollama.ResponseError as error:
    print("Ollama error:", error.error)`,D=g({__name:"UsingOllamaPythonLibrary",setup(H){return(F,e)=>(h(),f(d,null,{default:a(()=>[l("div",b,[e[63]||(e[63]=l("div",{class:"w-full flex justify-center mb-6"},[l("img",{src:m,alt:"Using the Ollama Python Library",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[64]||(e[64]=l("div",{class:"text-center mb-4"},[l("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),l("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Using the Ollama Python Library ")],-1)),n(o,null,{default:a(()=>[...e[0]||(e[0]=[t(" Python applications can communicate with Ollama using its REST API. However, manually creating HTTP requests and extracting JSON responses can require additional code. To make integration easier, Ollama provides an official Python library that allows developers to interact with AI models using simple Python functions. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[1]||(e[1]=[t("1. Introduction to the Ollama Python Library",-1)])]),_:1}),n(o,null,{default:a(()=>[e[3]||(e[3]=t(" The ",-1)),n(u,null,{default:a(()=>[...e[2]||(e[2]=[t("Ollama Python Library",-1)])]),_:1}),e[4]||(e[4]=t(" is an official Python package that provides functions for communicating with Ollama. Instead of manually sending HTTP requests, developers can use ready-made methods such as ",-1)),e[5]||(e[5]=l("b",null,"chat()",-1)),e[6]||(e[6]=t(", ",-1)),e[7]||(e[7]=l("b",null,"generate()",-1)),e[8]||(e[8]=t(", ",-1)),e[9]||(e[9]=l("b",null,"list()",-1)),e[10]||(e[10]=t(", and ",-1)),e[11]||(e[11]=l("b",null,"show()",-1)),e[12]||(e[12]=t(". ",-1))]),_:1}),n(o,null,{default:a(()=>[...e[13]||(e[13]=[t(" For example, sending a message to an AI model can be done with only a few lines of Python code. The library handles the communication with the Ollama server and provides the response through Python objects. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[14]||(e[14]=[t("2. Installing the Library",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[15]||(e[15]=[t(" Before using the library, make sure that Python and Ollama are installed on your computer. You should also have a model downloaded, such as ",-1),l("b",null,"llama3.2",-1),t(". ",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[16]||(e[16]=[t(" Open your terminal or command prompt and install the package using pip: ",-1)])]),_:1}),n(i,{language:"bash",code:y}),n(o,null,{default:a(()=>[...e[17]||(e[17]=[t(" Once installation is complete, import the library into your Python application: ",-1)])]),_:1}),n(i,{language:"python",code:c}),n(o,null,{default:a(()=>[...e[18]||(e[18]=[t(" You can now access the functions provided by the Ollama Python library through the ",-1),l("b",null,"ollama",-1),t(" module. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[19]||(e[19]=[t("3. Generating Responses Using chat()",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[20]||(e[20]=[t(" One of the most commonly used functions is ",-1),l("b",null,"chat()",-1),t(". It allows an application to send messages to an AI model and receive conversational responses. Let's create a simple program that asks an AI model a question. ",-1)])]),_:1}),n(i,{language:"python",code:w}),n(o,null,{default:a(()=>[...e[21]||(e[21]=[t(" Let's examine the important parts: ",-1),l("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[l("li",null,[l("b",null,"ollama.chat()"),t(" sends a chat request to the selected model.")]),l("li",null,[l("b",null,"model"),t(" specifies which installed AI model to use.")]),l("li",null,[l("b",null,"messages"),t(" contains the conversation messages.")]),l("li",null,[l("b",null,"role"),t(" identifies the sender of a message.")]),l("li",null,[l("b",null,"content"),t(" contains the actual message or question.")]),l("li",null,[l("b",null,"response.message.content"),t(" retrieves the generated answer.")])],-1)])]),_:1}),n(o,null,{default:a(()=>[...e[22]||(e[22]=[t(" The output may look like this: ",-1)])]),_:1}),n(r,{output:v}),n(o,null,{default:a(()=>[...e[23]||(e[23]=[t(" Notice that we did not manually specify an API URL or use ",-1),l("b",null,"requests.post()",-1),t(". The library handles the underlying communication with Ollama. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[24]||(e[24]=[t("4. Generating Text Using generate()",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[25]||(e[25]=[t(" Aside from chat interactions, the library also provides ",-1),l("b",null,"generate()",-1),t(". This function is used when an application needs to generate text from a single prompt. It is similar to the ",-1),l("b",null,"/api/generate",-1),t(" endpoint discussed earlier. ",-1)])]),_:1}),n(i,{language:"python",code:T}),n(o,null,{default:a(()=>[...e[26]||(e[26]=[t(" The generated text is available through the ",-1),l("b",null,"response.response",-1),t(" property. ",-1)])]),_:1}),n(r,{output:x}),n(o,null,{default:a(()=>[...e[27]||(e[27]=[t(" The main difference is that ",-1),l("b",null,"chat()",-1),t(" uses a list of messages, while ",-1),l("b",null,"generate()",-1),t(" accepts a prompt string. Choose the function based on the type of interaction your application needs. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[28]||(e[28]=[t("5. Providing System Instructions",-1)])]),_:1}),n(o,null,{default:a(()=>[e[30]||(e[30]=t(" Developers can control the behavior of an AI model by providing a ",-1)),n(u,null,{default:a(()=>[...e[29]||(e[29]=[t("system message",-1)])]),_:1}),e[31]||(e[31]=t(" . A system message defines the role or instructions that the model should follow when responding to the user. ",-1))]),_:1}),n(o,null,{default:a(()=>[...e[32]||(e[32]=[t(" For example, we can instruct the model to act as a programming tutor: ",-1)])]),_:1}),n(i,{language:"python",code:O}),n(r,{output:P}),n(o,null,{default:a(()=>[...e[33]||(e[33]=[t(" In this example: ",-1),l("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[l("li",null,"The system message defines the model as a programming tutor."),l("li",null,"The user message contains the actual question."),l("li",null,"The model generates an answer based on both messages.")],-1)])]),_:1}),n(o,null,{default:a(()=>[...e[34]||(e[34]=[t(" System instructions are useful when building applications with specific purposes, such as educational assistants, customer support chatbots, and programming helpers. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[35]||(e[35]=[t("6. Listing Available Models",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[36]||(e[36]=[t(" The Python library also provides functions for managing and inspecting models. The ",-1),l("b",null,"list()",-1),t(" function retrieves the models currently available on the Ollama server. ",-1)])]),_:1}),n(i,{language:"python",code:I}),n(r,{output:k}),n(o,null,{default:a(()=>[...e[37]||(e[37]=[t(" The ",-1),l("b",null,"response.models",-1),t(" property contains the available model information. We use a loop to display each model's name. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[38]||(e[38]=[t("7. Viewing Model Information",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[39]||(e[39]=[t(" If you want to inspect a specific model, you can use the ",-1),l("b",null,"show()",-1),t(" function. This retrieves information such as the model's architecture, parameters, and configuration. ",-1)])]),_:1}),n(i,{language:"python",code:A}),n(o,null,{default:a(()=>[...e[40]||(e[40]=[t(" The returned information can be used to inspect a model before selecting it for an application. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[41]||(e[41]=[t("8. Downloading Models Through Python",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[42]||(e[42]=[t(" The ",-1),l("b",null,"pull()",-1),t(" function allows a Python application to download a model from the Ollama model library. This can be useful when developing applications that need to prepare a specific model before using it. ",-1)])]),_:1}),n(i,{language:"python",code:q}),n(o,null,{default:a(()=>[...e[43]||(e[43]=[t(" The example downloads the specified model. The download may take some time depending on the model size and internet connection. If the model is already available locally, Ollama can use the existing model instead of downloading it again. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[44]||(e[44]=[t("9. Creating a Custom Ollama Client",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[45]||(e[45]=[t(" By default, the Python library connects to the local Ollama server at ",-1),l("b",null,"http://localhost:11434",-1),t(". However, developers can create a custom client when they need to specify a different server address or connection settings. ",-1)])]),_:1}),n(i,{language:"python",code:C}),n(r,{output:L}),n(o,null,{default:a(()=>[...e[46]||(e[46]=[t(" The ",-1),l("b",null,"ollama.Client()",-1),t(" constructor creates a client instance. The ",-1),l("b",null,"host",-1),t(" parameter specifies the address of the Ollama server. This is useful when the Python application and Ollama server are running on different computers within a network. ",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[47]||(e[47]=[t(" When connecting to another computer, replace localhost with the server's reachable address and make sure the server is configured to accept the connection. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[48]||(e[48]=[t("10. Creating Reusable AI Functions",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[49]||(e[49]=[t(" When developing a larger application, it is better to organize repeated operations into reusable functions. For example, we can create a function that accepts a question, sends it to Ollama, and returns the generated response. ",-1)])]),_:1}),n(i,{language:"python",code:E}),n(r,{output:M}),n(o,null,{default:a(()=>[...e[50]||(e[50]=[t(" The ",-1),l("b",null,"ask_ai()",-1),t(" function can now be called whenever the application needs an AI-generated answer. This approach keeps the code organized and separates AI communication logic from the rest of the application. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[51]||(e[51]=[t("11. Receiving Responses Through Streaming",-1)])]),_:1}),n(o,null,{default:a(()=>[e[53]||(e[53]=t(" By default, the library returns the completed response after the model finishes generating it. However, developers can enable ",-1)),n(u,null,{default:a(()=>[...e[52]||(e[52]=[t("streaming",-1)])]),_:1}),e[54]||(e[54]=t(" to receive the generated response in smaller pieces as the model produces them. ",-1))]),_:1}),n(i,{language:"python",code:S}),n(r,{output:B}),n(o,null,{default:a(()=>[...e[55]||(e[55]=[t(" In this example: ",-1),l("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[l("li",null,[l("b",null,"stream=True"),t(" enables streaming.")]),l("li",null,"The returned stream can be processed using a for loop."),l("li",null,[l("b",null,"chunk.message.content"),t(" retrieves each generated text segment.")]),l("li",null,[l("b",null,"print()"),t(" displays each segment immediately.")])],-1)])]),_:1}),n(o,null,{default:a(()=>[...e[56]||(e[56]=[t(" Streaming is especially useful for chat applications because users can begin reading the response before the model finishes generating the entire answer. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[57]||(e[57]=[t("12. Basic Error Handling",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[58]||(e[58]=[t(" Applications should also consider situations where the model cannot be found or the server returns an error. The Ollama Python library provides ",-1),l("b",null,"ResponseError",-1),t(" for handling errors returned by the server. ",-1)])]),_:1}),n(i,{language:"python",code:R}),n(o,null,{default:a(()=>[...e[59]||(e[59]=[t(" The ",-1),l("b",null,"try",-1),t(" and ",-1),l("b",null,"except",-1),t(" blocks allow the application to handle an error instead of unexpectedly terminating. For example, an error may occur when the requested model does not exist or the server cannot process the request. ",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[60]||(e[60]=[t(" More detailed error handling, timeouts, and retry strategies will be covered in a separate topic. ",-1)])]),_:1}),n(s,null,{default:a(()=>[...e[61]||(e[61]=[t("Summary",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[62]||(e[62]=[t(" In this topic, you learned that: ",-1),l("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[l("li",null,"The Ollama Python library simplifies communication with Ollama."),l("li",null,[t("The library can be installed using "),l("b",null,"pip install ollama"),t(".")]),l("li",null,[l("b",null,"chat()"),t(" sends messages and retrieves conversational responses.")]),l("li",null,[l("b",null,"generate()"),t(" generates text from a single prompt.")]),l("li",null,"System messages can define the behavior of an AI model."),l("li",null,[l("b",null,"list()"),t(" retrieves available models.")]),l("li",null,[l("b",null,"show()"),t(" retrieves information about a specific model.")]),l("li",null,[l("b",null,"pull()"),t(" downloads models through Python.")]),l("li",null,"Custom clients can connect to different Ollama server addresses."),l("li",null,"Streaming allows applications to display generated text as it arrives.")],-1)])]),_:1}),n(p,{to:"/academia/student/classes/elective3-chat-history-and-context"})])]),_:1}))}});export{D as default};

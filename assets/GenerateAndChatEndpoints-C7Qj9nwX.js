import{_ as p}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as a,a as l,_ as g}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as r}from"./TopicTerm-DyqgLCaN.js";import{C as i}from"./CodeBlock-CazTR3fe.js";import{O as u}from"./OutputBlock-DHZz8RI8.js";import{_ as d}from"./TableBlock.vue_vue_type_script_setup_true_lang-CuR93uMb.js";import{d as f,h,i as s,o as v,a as o,q as n,g as t}from"./index-CP-QU3eE.js";const y={class:"max-w-4xl mx-auto"},b={class:"list-disc pl-8 mt-3 space-y-3"},w=`curl http://localhost:11434/api/generate -d '{
    "model": "llama3.2",
    "prompt": "Explain what a computer is.",
    "stream": false
}'`,T=`{
    "model": "llama3.2",
    "created_at": "2026-11-12T08:00:00Z",
    "response": "A computer is an electronic device that processes data and performs tasks based on instructions.",
    "done": true
}`,x=`curl http://localhost:11434/api/generate -d '{
    "model": "llama3.2",
    "system": "You are a helpful computer science tutor.",
    "prompt": "Explain what an operating system is.",
    "stream": false
}'`,c=`curl http://localhost:11434/api/generate -d '{
    "model": "llama3.2",
    "prompt": "Write a short story about a robot.",
    "options": {
        "temperature": 0.7
    },
    "stream": false
}'`,q=`curl http://localhost:11434/api/chat -d '{
    "model": "llama3.2",
    "messages": [
        {
            "role": "user",
            "content": "Hello! Introduce yourself."
        }
    ],
    "stream": false
}'`,C=`{
    "model": "llama3.2",
    "created_at": "2026-11-12T08:00:00Z",
    "message": {
        "role": "assistant",
        "content": "Hello! I am an AI assistant. How can I help you today?"
    },
    "done": true
}`,I=`curl http://localhost:11434/api/chat -d '{
    "model": "llama3.2",
    "messages": [
        {
            "role": "user",
            "content": "What is Python?"
        },
        {
            "role": "assistant",
            "content": "Python is a programming language known for its simple syntax."
        },
        {
            "role": "user",
            "content": "What can I use it for?"
        }
    ],
    "stream": false
}'`,A=`{
    "model": "llama3.2",
    "message": {
        "role": "assistant",
        "content": "Python can be used for web development, automation, data analysis, artificial intelligence, and many other applications."
    },
    "done": true
}`,S=`async function generateText() {
    const response = await fetch(
        'http://localhost:11434/api/generate',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3.2',
                prompt: 'Explain what an operating system is.',
                stream: false
            })
        }
    )

    if (!response.ok) {
        throw new Error('Generation failed')
    }

    const data = await response.json()

    console.log(data.response)
}

generateText()`,O=`async function sendMessage() {
    const response = await fetch(
        'http://localhost:11434/api/chat',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3.2',
                messages: [
                    {
                        role: 'user',
                        content: 'What is a database?'
                    }
                ],
                stream: false
            })
        }
    )

    if (!response.ok) {
        throw new Error('Chat request failed')
    }

    const data = await response.json()

    console.log(data.message.content)
}

sendMessage()`,E=`const messages = [
    {
        role: 'user',
        content: 'What is Java?'
    },
    {
        role: 'assistant',
        content: 'Java is an object-oriented programming language.'
    },
    {
        role: 'user',
        content: 'What is it commonly used for?'
    }
]

async function continueConversation() {
    const response = await fetch(
        'http://localhost:11434/api/chat',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'llama3.2',
                messages: messages,
                stream: false
            })
        }
    )

    const data = await response.json()

    console.log(data.message.content)
}

continueConversation()`,R=`curl http://localhost:11434/api/chat -d '{
    "model": "llama3.2",
    "messages": [
        {
            "role": "user",
            "content": "Explain artificial intelligence."
        }
    ]
}'`,U=`{"message":{"role":"assistant","content":"Artificial"},"done":false}
{"message":{"role":"assistant","content":" intelligence"},"done":false}
{"message":{"role":"assistant","content":" is a field"},"done":false}
{"message":{"role":"assistant","content":" of computer science."},"done":false}
{"done":true,"total_duration":1234567890}`,z=f({__name:"GenerateAndChatEndpoints",setup(j){return(k,e)=>(v(),h(m,null,{default:s(()=>[o("div",y,[e[94]||(e[94]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:p,alt:"Generate and Chat Endpoints",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[95]||(e[95]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 6 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Generate and Chat Endpoints ")],-1)),n(a,null,{default:s(()=>[...e[0]||(e[0]=[t(" Ollama provides different API endpoints for interacting with locally running AI models. Two of the most important endpoints are ",-1),o("code",null,"/api/generate",-1),t(" and ",-1),o("code",null,"/api/chat",-1),t(". ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[1]||(e[1]=[t(" Both endpoints allow developers to send information to an AI model and receive generated responses. However, they are designed for slightly different purposes. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[2]||(e[2]=[t(" The generate endpoint focuses on generating text from a prompt, while the chat endpoint is designed to handle conversations using messages and roles. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[3]||(e[3]=[t("Understanding the Generate Endpoint",-1)])]),_:1}),n(a,null,{default:s(()=>[e[5]||(e[5]=t(" The ",-1)),n(r,null,{default:s(()=>[...e[4]||(e[4]=[t("Generate Endpoint",-1)])]),_:1}),e[6]||(e[6]=t(" allows applications to send a text prompt to an AI model and receive a generated response. ",-1))]),_:1}),n(a,null,{default:s(()=>[...e[7]||(e[7]=[t(" It is commonly used for tasks such as answering questions, explaining concepts, summarizing information, and generating written content. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[8]||(e[8]=[t(" The endpoint uses the POST HTTP method and the following URL: ",-1)])]),_:1}),n(i,{language:"text",code:"http://localhost:11434/api/generate"}),n(a,null,{default:s(()=>[...e[9]||(e[9]=[t(" To use this endpoint, the application sends a JSON request containing the selected model and the prompt. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[10]||(e[10]=[t("Sending a Generate Request",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[11]||(e[11]=[t(" Consider an application that asks an AI model to explain what a computer is. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[12]||(e[12]=[t(" The following cURL command sends the request to Ollama: ",-1)])]),_:1}),n(i,{language:"bash",code:w}),n(a,null,{default:s(()=>[...e[13]||(e[13]=[t(" Let's examine the important properties: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,[o("code",null,"model"),t(" specifies which AI model will process the request. ")]),o("li",null,[o("code",null,"prompt"),t(" contains the instruction or question sent to the model. ")]),o("li",null,[o("code",null,"stream"),t(" determines whether the response is streamed or returned as one complete response. ")])],-1)])]),_:1}),n(a,null,{default:s(()=>[...e[14]||(e[14]=[t(" In this example, ",-1),o("code",null,'"stream": false',-1),t(" tells Ollama to wait until the model finishes generating the response before returning the result. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[15]||(e[15]=[t("Understanding the Generate Response",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[16]||(e[16]=[t(" After processing the request, Ollama returns a JSON response containing the generated text and other information. ",-1)])]),_:1}),n(u,{output:T}),n(a,null,{default:s(()=>[...e[17]||(e[17]=[t(" The most important property for retrieving the generated text is ",-1),o("code",null,"response",-1),t(". An application can access this property and display the result to the user. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[18]||(e[18]=[t(" Other response properties provide information such as the model used, creation time, and whether generation has completed. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[19]||(e[19]=[t("Using a System Instruction",-1)])]),_:1}),n(a,null,{default:s(()=>[e[21]||(e[21]=t(" The generate endpoint also supports a ",-1)),n(r,null,{default:s(()=>[...e[20]||(e[20]=[t("System Instruction",-1)])]),_:1}),e[22]||(e[22]=t(" . It provides additional guidance about how the model should behave when responding to a prompt. ",-1))]),_:1}),n(a,null,{default:s(()=>[...e[23]||(e[23]=[t(" For example, an application can instruct the model to act as a computer science tutor. ",-1)])]),_:1}),n(i,{language:"bash",code:x}),n(a,null,{default:s(()=>[...e[24]||(e[24]=[t(" In this example, the ",-1),o("code",null,"system",-1),t(" property gives the model a general instruction, while the ",-1),o("code",null,"prompt",-1),t(" property contains the actual question. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[25]||(e[25]=[t(" This is useful when building applications that require a particular response style or behavior. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[26]||(e[26]=[t("Using Generation Options",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[27]||(e[27]=[t(" Developers can also configure how a model generates its responses by providing additional options. ",-1)])]),_:1}),n(a,null,{default:s(()=>[e[29]||(e[29]=t(" One commonly used option is ",-1)),n(r,null,{default:s(()=>[...e[28]||(e[28]=[t("Temperature",-1)])]),_:1}),e[30]||(e[30]=t(" . It controls the randomness of the model's output. ",-1))]),_:1}),n(d,{headers:["Temperature","General Behavior"],rows:[{label:"Lower value",values:["Generally produces more predictable and focused responses."]},{label:"Higher value",values:["Generally allows more varied and creative responses."]}]}),n(a,null,{default:s(()=>[...e[31]||(e[31]=[t(" For example, a developer can set the temperature to 0.7: ",-1)])]),_:1}),n(i,{language:"bash",code:c}),n(a,null,{default:s(()=>[...e[32]||(e[32]=[t(" Temperature is only one of several generation options. Developers can configure other parameters depending on the requirements of their applications. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[33]||(e[33]=[t("Understanding the Chat Endpoint",-1)])]),_:1}),n(a,null,{default:s(()=>[e[35]||(e[35]=t(" The ",-1)),n(r,null,{default:s(()=>[...e[34]||(e[34]=[t("Chat Endpoint",-1)])]),_:1}),e[36]||(e[36]=t(" allows applications to interact with AI models using a sequence of messages. ",-1))]),_:1}),n(a,null,{default:s(()=>[...e[37]||(e[37]=[t(" Unlike a simple text prompt, the chat endpoint uses a ",-1),o("code",null,"messages",-1),t(" array to organize the conversation. Each message contains a role and its corresponding content. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[38]||(e[38]=[t(" This structure makes it suitable for applications such as AI assistants, customer support chatbots, and interactive tutoring systems. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[39]||(e[39]=[t(" The endpoint uses the POST HTTP method and the following URL: ",-1)])]),_:1}),n(i,{language:"text",code:"http://localhost:11434/api/chat"}),n(l,null,{default:s(()=>[...e[40]||(e[40]=[t("Understanding Message Roles",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[41]||(e[41]=[t(" A chat request contains messages that describe different parts of a conversation. Each message has a role that identifies who is communicating. ",-1)])]),_:1}),n(d,{headers:["Role","Description"],rows:[{label:"system",values:["Provides general instructions that guide the model behavior."]},{label:"user",values:["Contains a message or question submitted by the user."]},{label:"assistant",values:["Contains a response generated by the AI model."]},{label:"tool",values:["Represents the result returned by an external tool in tool-based workflows."]}]}),n(a,null,{default:s(()=>[...e[42]||(e[42]=[t(" For example, when a user sends a message to an AI chatbot, the application can represent that message using the ",-1),o("code",null,"user",-1),t(" role. The model's generated response uses the ",-1),o("code",null,"assistant",-1),t(" role. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[43]||(e[43]=[t("Sending a Chat Request",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[44]||(e[44]=[t(" Consider a simple chatbot that receives a greeting from a user. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[45]||(e[45]=[t(" The application can send the following request: ",-1)])]),_:1}),n(i,{language:"bash",code:q}),n(a,null,{default:s(()=>[...e[46]||(e[46]=[t(" Notice that the request uses a ",-1),o("code",null,"messages",-1),t(" array instead of a single ",-1),o("code",null,"prompt",-1),t(" property. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[47]||(e[47]=[t(" Each message contains: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,[o("code",null,"role"),t(" identifies the speaker. ")]),o("li",null,[o("code",null,"content"),t(" contains the actual message. ")])],-1)])]),_:1}),n(l,null,{default:s(()=>[...e[48]||(e[48]=[t("Understanding the Chat Response",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[49]||(e[49]=[t(" After processing the messages, Ollama returns a response containing an assistant message. ",-1)])]),_:1}),n(u,{output:C}),n(a,null,{default:s(()=>[...e[50]||(e[50]=[t(" Unlike the generate endpoint, the generated content is stored inside the ",-1),o("code",null,"message",-1),t(" object. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[51]||(e[51]=[t(" The application can retrieve the response using: ",-1)])]),_:1}),n(i,{language:"javascript",code:"data.message.content"}),n(a,null,{default:s(()=>[...e[52]||(e[52]=[t(" This is the text that should be displayed in the chatbot interface. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[53]||(e[53]=[t("Maintaining Conversation History",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[54]||(e[54]=[t(" One of the main advantages of the chat endpoint is its ability to process multiple messages as part of a conversation. ",-1)])]),_:1}),n(a,null,{default:s(()=>[e[61]||(e[61]=t(" Consider the following interaction: ",-1)),o("ul",b,[o("li",null,[n(r,null,{default:s(()=>[...e[55]||(e[55]=[t("User:",-1)])]),_:1}),e[56]||(e[56]=t(" What is Python? ",-1))]),o("li",null,[n(r,null,{default:s(()=>[...e[57]||(e[57]=[t("Assistant:",-1)])]),_:1}),e[58]||(e[58]=t(" Python is a programming language known for its simple syntax. ",-1))]),o("li",null,[n(r,null,{default:s(()=>[...e[59]||(e[59]=[t("User:",-1)])]),_:1}),e[60]||(e[60]=t(" What can I use it for? ",-1))])])]),_:1}),n(a,null,{default:s(()=>[...e[62]||(e[62]=[t(" The second user question refers to information from the earlier exchange. To provide relevant context, the application should send the conversation history along with the latest message. ",-1)])]),_:1}),n(i,{language:"bash",code:I}),n(u,{output:A}),n(a,null,{default:s(()=>[...e[63]||(e[63]=[t(" By including previous messages, the model can understand the context of the conversation and generate a more relevant response. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[64]||(e[64]=[t(" An important detail is that the application is responsible for maintaining and sending the conversation history in subsequent requests. The chat endpoint does not automatically remember every previous API request. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[65]||(e[65]=[t("Understanding Conversation History in JavaScript",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[66]||(e[66]=[t(" In a real application, the conversation history can be stored in a JavaScript array. Every new message and assistant response can be added to that array. ",-1)])]),_:1}),n(i,{language:"javascript",code:E}),n(a,null,{default:s(()=>[...e[67]||(e[67]=[t(" The ",-1),o("code",null,"messages",-1),t(" array contains the earlier interaction and the latest question. Sending the entire array allows the model to consider the conversation context. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[68]||(e[68]=[t(" For a complete chatbot, developers should append the latest user message and the generated assistant response to the conversation history after each successful exchange. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[69]||(e[69]=[t("Comparing Generate and Chat",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[70]||(e[70]=[t(" Both endpoints can generate text, but their request structures and intended use cases are different. ",-1)])]),_:1}),n(d,{headers:["Feature","Generate","Chat"],rows:[{label:"Endpoint",values:["/api/generate","/api/chat"]},{label:"Main Input",values:["prompt","messages"]},{label:"Response Content",values:["response","message.content"]},{label:"Typical Use",values:["Text generation and single prompts.","Conversational applications."]},{label:"Conversation Structure",values:["Uses a prompt and optional context.","Uses messages with different roles."]}]}),n(a,null,{default:s(()=>[...e[71]||(e[71]=[t(" For example, generating a paragraph about computer hardware is a suitable use case for ",-1),o("code",null,"/api/generate",-1),t(". ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[72]||(e[72]=[t(" However, building a chatbot that remembers the messages exchanged during a conversation is more naturally handled by ",-1),o("code",null,"/api/chat",-1),t(". ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[73]||(e[73]=[t("Streaming Responses from the Chat Endpoint",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[74]||(e[74]=[t(" The chat endpoint supports streaming by default. This means that the model can send its generated response in multiple parts. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[75]||(e[75]=[t(" Each streamed part contains a JSON object. The application reads these objects as they arrive and combines their message content. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[76]||(e[76]=[t(" The following request uses the chat endpoint without setting ",-1),o("code",null,"stream",-1),t(" to false: ",-1)])]),_:1}),n(i,{language:"bash",code:R}),n(a,null,{default:s(()=>[...e[77]||(e[77]=[t(" A simplified example of the streamed response may look like this: ",-1)])]),_:1}),n(u,{output:U}),n(a,null,{default:s(()=>[...e[78]||(e[78]=[t(" Each line represents a separate JSON object. The application can extract the content from each message and append it to the displayed response. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[79]||(e[79]=[t(" The final object indicates that generation has completed. It may also contain additional information about generation performance. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[80]||(e[80]=[t(" If the application needs one complete JSON response instead, it can set ",-1),o("code",null,'"stream": false',-1),t(" in the request. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[81]||(e[81]=[t("Using Generate and Chat in JavaScript",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[82]||(e[82]=[t(" Both endpoints can be accessed through JavaScript using the ",-1),o("code",null,"fetch()",-1),t(" function. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[83]||(e[83]=[t(" The following example sends a request to the generate endpoint: ",-1)])]),_:1}),n(i,{language:"javascript",code:S}),n(a,null,{default:s(()=>[...e[84]||(e[84]=[t(" Notice that the generated text is retrieved through ",-1),o("code",null,"data.response",-1),t(". ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[85]||(e[85]=[t(" For a chatbot, the application can instead send messages to the chat endpoint: ",-1)])]),_:1}),n(i,{language:"javascript",code:O}),n(a,null,{default:s(()=>[...e[86]||(e[86]=[t(" In this example, the generated assistant response is retrieved through ",-1),o("code",null,"data.message.content",-1),t(". ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[87]||(e[87]=[t(" These examples use non-streaming requests to simplify response handling. They provide a starting point for integrating locally running AI models into web applications. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[88]||(e[88]=[t("Choosing the Appropriate Endpoint",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[89]||(e[89]=[t(" The choice between generate and chat depends on the requirements of the application. ",-1)])]),_:1}),n(d,{headers:["Application","Recommended Endpoint"],rows:[{label:"Text Summarizer",values:["/api/generate"]},{label:"Question and Answer Tool",values:["/api/generate"]},{label:"AI Writing Assistant",values:["/api/generate or /api/chat, depending on conversation requirements"]},{label:"Customer Support Chatbot",values:["/api/chat"]},{label:"Interactive AI Tutor",values:["/api/chat"]},{label:"Conversational Assistant",values:["/api/chat"]}]}),n(a,null,{default:s(()=>[...e[90]||(e[90]=[t(" A text summarizer can use a single prompt to generate a summary. On the other hand, a customer support chatbot usually needs to consider previous messages to understand the user's concerns. ",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[91]||(e[91]=[t(" Selecting the appropriate endpoint helps developers organize their requests and build applications that behave as expected. ",-1)])]),_:1}),n(l,null,{default:s(()=>[...e[92]||(e[92]=[t("Summary",-1)])]),_:1}),n(a,null,{default:s(()=>[...e[93]||(e[93]=[t(" In this topic, you learned that: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,[t(" The "),o("code",null,"/api/generate"),t(" endpoint generates text from a prompt. ")]),o("li",null,[t(" The "),o("code",null,"/api/chat"),t(" endpoint handles conversations using a sequence of messages. ")]),o("li",null,[t(" Generate requests use the "),o("code",null,"prompt"),t(" property. ")]),o("li",null,[t(" Chat requests use a "),o("code",null,"messages"),t(" array containing roles and content. ")]),o("li",null," Common message roles include system, user, assistant, and tool. "),o("li",null,[t(" The generate endpoint returns generated text through "),o("code",null,"response"),t(". ")]),o("li",null,[t(" The chat endpoint returns the assistant's generated message through "),o("code",null,"message.content"),t(". ")]),o("li",null," Applications must maintain and send conversation history when continuing a chat. "),o("li",null," Both endpoints support streaming and non-streaming responses. "),o("li",null," Developers should select the endpoint based on the requirements of their applications. ")],-1)])]),_:1}),n(g,{to:"/academia/student/classes/elective3",text:"Finish"})])]),_:1}))}});export{z as default};

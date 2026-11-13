import{_ as m}from"./logo-C9ImmdpX.js";import{_ as d}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as o,a as l,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as u}from"./TopicTerm-DyqgLCaN.js";import{C as i}from"./CodeBlock-CazTR3fe.js";import{O as r}from"./OutputBlock-DHZz8RI8.js";import{_ as g}from"./TableBlock.vue_vue_type_script_setup_true_lang-CuR93uMb.js";import{d as h,h as y,i as a,o as f,a as n,q as t,g as s}from"./index-CP-QU3eE.js";const v={class:"max-w-4xl mx-auto"},c=`import ollama

first_response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'My name is Alex.'
        }
    ]
)

second_response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'What is my name?'
        }
    ]
)

print(second_response.message.content)`,x="I don't know your name. You haven't told me in this conversation.",w=`import ollama

messages = [
    {
        'role': 'user',
        'content': 'My name is Alex.'
    }
]

first_response = ollama.chat(
    model='llama3.2',
    messages=messages
)

messages.append({
    'role': 'assistant',
    'content': first_response.message.content
})

messages.append({
    'role': 'user',
    'content': 'What is my name?'
})

second_response = ollama.chat(
    model='llama3.2',
    messages=messages
)

print(second_response.message.content)`,b="Your name is Alex!",C=`import ollama

messages = [
    {
        'role': 'system',
        'content': 'You are a helpful programming tutor.'
    }
]

def send_message(user_input):
    messages.append({
        'role': 'user',
        'content': user_input
    })

    response = ollama.chat(
        model='llama3.2',
        messages=messages
    )

    assistant_reply = response.message.content

    messages.append({
        'role': 'assistant',
        'content': assistant_reply
    })

    return assistant_reply


print("AI:", send_message("What is Python?"))
print("AI:", send_message("What is it commonly used for?"))`,A=`AI: Python is a high-level programming language known for
its readability and simple syntax.

AI: It is commonly used for web development, automation,
data analysis, artificial intelligence, and scripting.`,T=`messages = [
    {
        'role': 'system',
        'content': 'You are a helpful programming tutor.'
    }
]`,I=`import ollama

system_message = {
    'role': 'system',
    'content': 'You are a helpful programming tutor.'
}

messages = [system_message]

def send_message(user_input):
    messages.append({
        'role': 'user',
        'content': user_input
    })

    response = ollama.chat(
        model='llama3.2',
        messages=messages
    )

    assistant_reply = response.message.content

    messages.append({
        'role': 'assistant',
        'content': assistant_reply
    })

    # Keep only the most recent 6 conversation messages.
    recent_messages = messages[-6:]

    # Preserve the system instruction.
    request_messages = [system_message] + recent_messages

    return assistant_reply, request_messages


answer, conversation = send_message("What is Python?")
print(answer)`,q=`import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'Explain how databases work.'
        }
    ],
    options={
        'num_ctx': 4096
    }
)

print(response.message.content)`,O=`import json

with open('chat_history.json', 'w') as file:
    json.dump(messages, file, indent=4)`,S=`import json

with open('chat_history.json', 'r') as file:
    messages = json.load(file)`,P=`{
    "role": "user",
    "content": "What is Python?"
}
{
    "role": "assistant",
    "content": "Python is a programming language..."
}`,k=`User message
     |
     v
Append user message to history
     |
     v
Send conversation history to Ollama
     |
     v
Receive AI response
     |
     v
Append assistant response to history
     |
     v
Display response to user`,B=h({__name:"ChatHistoryAndContextManagement",setup(H){return(j,e)=>(f(),y(d,null,{default:a(()=>[n("div",v,[e[56]||(e[56]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:m,alt:"Chat History and Context Management",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[57]||(e[57]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Chat History and Context Management ")],-1)),t(o,null,{default:a(()=>[...e[0]||(e[0]=[s(" AI chat applications are expected to maintain meaningful conversations with users. For example, when a user asks a follow-up question, the AI should be able to understand what the user is referring to. To achieve this, applications need to manage conversation history and provide the appropriate context whenever they communicate with an AI model. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[1]||(e[1]=[s("1. Understanding Conversation Context",-1)])]),_:1}),t(o,null,{default:a(()=>[t(u,null,{default:a(()=>[...e[2]||(e[2]=[s("Conversation context",-1)])]),_:1}),e[3]||(e[3]=s(" refers to the information available to an AI model when generating a response. It may include previous messages, system instructions, and the current user request. Context helps the model understand what is being discussed instead of treating every message as an unrelated question. ",-1))]),_:1}),t(o,null,{default:a(()=>[...e[4]||(e[4]=[s(" Consider the following conversation: ",-1),n("div",{class:"my-4 space-y-3"},[n("div",{class:"flex justify-end"},[n("div",{class:"bg-purple-100 text-gray-700 rounded-xl px-4 py-3 max-w-[85%]"}," **User:** My name is Alex. ")]),n("div",{class:"flex justify-start"},[n("div",{class:"bg-gray-100 text-gray-700 rounded-xl px-4 py-3 max-w-[85%]"}," **AI:** Nice to meet you, Alex! ")]),n("div",{class:"flex justify-end"},[n("div",{class:"bg-purple-100 text-gray-700 rounded-xl px-4 py-3 max-w-[85%]"}," **User:** What is my name? ")]),n("div",{class:"flex justify-start"},[n("div",{class:"bg-gray-100 text-gray-700 rounded-xl px-4 py-3 max-w-[85%]"}," **AI:** Your name is Alex! ")])],-1),s(" The AI can answer the last question because the earlier message containing the user's name is available in the conversation context. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[5]||(e[5]=[s("2. Does Ollama Automatically Remember Previous Messages?",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[6]||(e[6]=[s(" An important concept when working with Ollama is that separate API requests do not automatically share conversation history. Even when using the same model, each new chat request only receives the messages included in that request. The application must maintain and resend the conversation history. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[7]||(e[7]=[s(" Consider this example: ",-1)])]),_:1}),t(i,{language:"python",code:c}),t(r,{output:x}),t(o,null,{default:a(()=>[...e[8]||(e[8]=[s(" The second request does not contain the first message. Therefore, the model has no information about the user's name in that request. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[9]||(e[9]=[s(" This demonstrates why managing conversation history is the responsibility of the application. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[10]||(e[10]=[s("3. Storing Conversation History",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[11]||(e[11]=[s(" Python can maintain conversation history using a list of dictionaries. Each dictionary represents one message and contains a role and its corresponding content. ",-1)])]),_:1}),t(g,{headers:["Role","Purpose"],rows:[{label:"system",values:["Provides instructions that guide the AI model."]},{label:"user",values:["Contains a message or question from the user."]},{label:"assistant",values:["Contains a response generated by the AI model."]},{label:"tool",values:["Represents a tool response in supported tool-calling workflows."]}]}),t(o,null,{default:a(()=>[...e[12]||(e[12]=[s(" For example, we can create a list that stores the messages exchanged between a user and an AI assistant: ",-1)])]),_:1}),t(i,{language:"python",code:w}),t(r,{output:b}),t(o,null,{default:a(()=>[...e[13]||(e[13]=[s(" The program performs several operations: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Creates a list containing the first user message."),n("li",null,"Sends the messages to Ollama."),n("li",null,"Stores the AI's response in the conversation history."),n("li",null,"Adds another user message to the same list."),n("li",null,"Sends the updated history to Ollama.")],-1)])]),_:1}),t(o,null,{default:a(()=>[...e[14]||(e[14]=[s(" Since the second request includes the earlier messages, the model can identify the user's name. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[15]||(e[15]=[s("4. Building a Conversational AI Application",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[16]||(e[16]=[s(" Instead of manually creating requests for every message, we can place the conversation logic inside a reusable function. The function will automatically append the user's message, send the conversation history to Ollama, and store the assistant's response. ",-1)])]),_:1}),t(i,{language:"python",code:C}),t(r,{output:A}),t(o,null,{default:a(()=>[...e[17]||(e[17]=[s(" Notice the role of the ",-1),n("b",null,"send_message()",-1),s(" function: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Accepts the user's new message."),n("li",null,"Adds it to the conversation history."),n("li",null,"Sends the complete message list to Ollama."),n("li",null,"Retrieves the generated response."),n("li",null,"Adds the assistant's response to the history."),n("li",null,"Returns the response for display.")],-1)])]),_:1}),t(o,null,{default:a(()=>[...e[18]||(e[18]=[s(" This approach is commonly used when developing chatbots and conversational applications. The same function can be called repeatedly while the user continues the conversation. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[19]||(e[19]=[s("5. Understanding the Conversation Flow",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[20]||(e[20]=[s(" A conversational application follows a repeated process every time the user sends a new message. ",-1)])]),_:1}),t(i,{language:"text",code:k}),t(o,null,{default:a(()=>[...e[21]||(e[21]=[s(" The important part is that both the user's messages and the assistant's responses are retained. Without the assistant's previous responses, the conversation history may become incomplete. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[22]||(e[22]=[s("6. Using System Messages in Conversation History",-1)])]),_:1}),t(o,null,{default:a(()=>[e[24]||(e[24]=s(" A ",-1)),t(u,null,{default:a(()=>[...e[23]||(e[23]=[s("system message",-1)])]),_:1}),e[25]||(e[25]=s(" defines the behavior and instructions of an AI assistant. It is typically included at the beginning of the conversation history. ",-1))]),_:1}),t(o,null,{default:a(()=>[e[26]||(e[26]=s(" For example, an educational application might instruct the model to behave as a programming tutor: ",-1)),t(i,{language:"python",code:`messages = [
    {
        'role': 'system',
        'content': 'You are a helpful programming tutor.'
    }
]`})]),_:1}),t(o,null,{default:a(()=>[...e[27]||(e[27]=[s(" Every subsequent request can include this system message along with the conversation history. This helps maintain the intended behavior throughout the interaction. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[28]||(e[28]=[s(" If the application removes the system message while managing older messages, the model may no longer receive those original instructions. Therefore, system instructions should be preserved when trimming conversation history. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[29]||(e[29]=[s("7. Managing Long Conversations",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[30]||(e[30]=[s(" As a conversation continues, the number of stored messages increases. Sending every message indefinitely can eventually become inefficient and may exceed the model's available context. ",-1)])]),_:1}),t(o,null,{default:a(()=>[t(u,null,{default:a(()=>[...e[31]||(e[31]=[s("Context window",-1)])]),_:1}),e[32]||(e[32]=s(" refers to the maximum amount of information a model can process in a single request. This includes the supplied messages and other relevant tokens used during generation. ",-1))]),_:1}),t(o,null,{default:a(()=>[...e[33]||(e[33]=[s(" When a conversation becomes too long, developers can manage its history using several approaches: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("b",null,"Message trimming:"),s(" Keep only the most recent messages.")]),n("li",null,[n("b",null,"Conversation summarization:"),s(" Replace older messages with a shorter summary.")]),n("li",null,[n("b",null,"Conversation reset:"),s(" Start a new conversation when the current one is no longer needed.")]),n("li",null,[n("b",null,"Context configuration:"),s(" Adjust the model's context capacity when supported by the model and available hardware. ")])],-1)])]),_:1}),t(l,null,{default:a(()=>[...e[34]||(e[34]=[s("8. Limiting Conversation History",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[35]||(e[35]=[s(" One simple approach is to retain only the most recent messages. For example, an application can keep the last six conversation messages while preserving the system instructions. ",-1)])]),_:1}),t(i,{language:"python",code:I}),t(o,null,{default:a(()=>[...e[36]||(e[36]=[s(" The expression ",-1),n("b",null,"messages[-6:]",-1),s(" selects the last six items from the list. The system message is then added separately so that it remains part of the request. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[37]||(e[37]=[s(" This is a basic example of message trimming. It does not guarantee that the request will fit within the model's context window because messages can contain different amounts of text. For more advanced applications, developers should consider estimating token usage or summarizing older conversation content. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[38]||(e[38]=[s("9. Configuring the Context Length",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[39]||(e[39]=[s(" Ollama allows developers to configure the context length for a request through the ",-1),n("b",null,"num_ctx",-1),s(" option. ",-1)])]),_:1}),t(i,{language:"python",code:q}),t(o,null,{default:a(()=>[...e[40]||(e[40]=[s(" In this example, ",-1),n("b",null,"num_ctx",-1),s(" is set to 4096 tokens. Increasing the context length allows the model to process more information in a request. However, a larger context can require additional memory, particularly for the KV cache. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[41]||(e[41]=[s(" Setting a larger context length does not automatically make the model remember previous conversations. The application must still include the relevant messages in every request. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[42]||(e[42]=[s("10. Resetting Conversation History",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[43]||(e[43]=[s(" There are situations when an application needs to start a completely new conversation. For example, when a user clicks a New Chat button, the previous conversation should no longer be included in the next request. ",-1)])]),_:1}),t(i,{language:"python",code:T}),t(o,null,{default:a(()=>[...e[44]||(e[44]=[s(" This example replaces the existing message list with a new one containing only the system instruction. The application can now start a separate conversation without including the previous messages. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[45]||(e[45]=[s("11. Saving and Loading Conversation History",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[46]||(e[46]=[s(" A Python list stored in memory disappears when the application terminates. If a user expects to continue a conversation later, the application needs to save the conversation history. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[47]||(e[47]=[s(" One simple way to store messages is through a JSON file. Python provides the built-in ",-1),n("b",null,"json",-1),s(" module for converting Python data into JSON and loading it again. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[48]||(e[48]=[s(" To save the current conversation: ",-1)])]),_:1}),t(i,{language:"python",code:O}),t(o,null,{default:a(()=>[...e[49]||(e[49]=[s(" To load the saved conversation: ",-1)])]),_:1}),t(i,{language:"python",code:S}),t(r,{output:P}),t(o,null,{default:a(()=>[...e[50]||(e[50]=[s(" This allows the application to restore the conversation history and include it in a future request to Ollama. ",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[51]||(e[51]=[s(" JSON files are suitable for simple demonstrations. Larger applications may use databases to manage multiple users, conversations, message timestamps, and other information. ",-1)])]),_:1}),t(l,null,{default:a(()=>[...e[52]||(e[52]=[s("12. Important Considerations in Context Management",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[53]||(e[53]=[s(" When implementing conversation history, developers should consider the following: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("b",null,"Memory usage:"),s(" Long conversations can consume additional memory.")]),n("li",null,[n("b",null,"Context limits:"),s(" The complete request must fit within the model's supported context capacity.")]),n("li",null,[n("b",null,"System instructions:"),s(" Preserve important instructions when trimming messages.")]),n("li",null,[n("b",null,"Conversation separation:"),s(" Different users should have separate conversation histories.")]),n("li",null,[n("b",null,"Data persistence:"),s(" Save messages if conversations need to survive application restarts.")]),n("li",null,[n("b",null,"Privacy:"),s(" Protect stored conversations because they may contain personal or sensitive information. ")])],-1)])]),_:1}),t(l,null,{default:a(()=>[...e[54]||(e[54]=[s("Summary",-1)])]),_:1}),t(o,null,{default:a(()=>[...e[55]||(e[55]=[s(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Conversation context provides information that helps an AI model understand messages."),n("li",null,"Ollama does not automatically retain conversation history between separate requests."),n("li",null,"Python applications can maintain history using a list of message dictionaries."),n("li",null,"User and assistant messages should both be included in the conversation history."),n("li",null,"System messages provide instructions that guide the model's behavior."),n("li",null,"Long conversations may exceed the model's context window."),n("li",null,"Message trimming and summarization help manage long conversations."),n("li",null,[s("The "),n("b",null,"num_ctx"),s(" option configures the context length for a request.")]),n("li",null,"Conversation history can be saved and restored using JSON files or databases.")],-1)])]),_:1}),t(p,{to:"/academia/student/classes/elective3-error-handling-and-retries"})])]),_:1}))}});export{B as default};

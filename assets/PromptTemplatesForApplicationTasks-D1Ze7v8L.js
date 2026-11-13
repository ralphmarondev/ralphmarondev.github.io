import{_ as d}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-z203udBN.js";import{T as n,a as l,_ as g}from"./TopicNext.vue_vue_type_script_setup_true_lang-9nRLLhFT.js";import{T as i}from"./TopicTerm-DyqgLCaN.js";import{C as r}from"./CodeBlock-CazTR3fe.js";import{O as p}from"./OutputBlock-DHZz8RI8.js";import{_ as u}from"./TableBlock.vue_vue_type_script_setup_true_lang-CuR93uMb.js";import{d as c,h,i as s,o as w,a as o,q as t,g as a}from"./index-CP-QU3eE.js";const y={class:"max-w-4xl mx-auto"},v=`import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'Explain photosynthesis in simple terms.'
        }
    ]
)

print(response['message']['content'])`,x=`template = """
You are a helpful educational assistant.

Explain the following topic: {topic}

Target audience: {audience}
Explanation length: {length}

Use simple language and provide one practical example.
"""

prompt = template.format(
    topic='Artificial Intelligence',
    audience='beginner students',
    length='one paragraph'
)

print(prompt)`,b=`You are a helpful educational assistant.

Explain the following topic: Artificial Intelligence

Target audience: beginner students
Explanation length: one paragraph

Use simple language and provide one practical example.`,T=`import ollama

def generate_explanation(topic, audience, length):
    template = """
    You are a helpful educational assistant.

    Explain the following topic: {topic}
    Target audience: {audience}
    Explanation length: {length}

    Use simple language and provide one practical example.
    """

    prompt = template.format(
        topic=topic,
        audience=audience,
        length=length
    )

    response = ollama.chat(
        model='llama3.2',
        messages=[
            {
                'role': 'user',
                'content': prompt
            }
        ]
    )

    return response['message']['content']


result = generate_explanation(
    topic='Machine Learning',
    audience='first-year students',
    length='one paragraph'
)

print(result)`,k=`Machine Learning is a branch of Artificial Intelligence
that allows computers to learn patterns from data and
make predictions or decisions.

For example, an email service can learn to identify
spam messages by analyzing previously labeled emails.`,A=`templates = {
    'summarization': """
    Summarize the following text in {sentences} sentences:

    {text}
    """,

    'classification': """
    Classify the following message as either
    Positive, Negative, or Neutral.

    Message: {message}

    Return only the classification.
    """,

    'code_explanation': """
    Explain what the following code does.
    Target audience: {audience}

    Code:
    {code}
    """
}

prompt = templates['summarization'].format(
    sentences=3,
    text='Artificial Intelligence is used in many modern applications...'
)

print(prompt)`,I=`prompt = """
Classify each customer message as Positive or Negative.

Examples:

Message: "The application is easy to use."
Classification: Positive

Message: "The system keeps crashing."
Classification: Negative

Now classify this message:

Message: "{message}"

Classification:
"""

message = "The website loads quickly and works perfectly."

formatted_prompt = prompt.format(message=message)

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': formatted_prompt
        }
    ]
)

print(response['message']['content'])`,P="Positive",C=`import ollama

system_instruction = """
You are a customer support assistant.

Answer using clear and professional language.
Keep responses concise.
If you do not know the answer, say so instead
of making up information.
"""

user_prompt = """
A customer asks: How can I reset my password?
"""

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'system',
            'content': system_instruction
        },
        {
            'role': 'user',
            'content': user_prompt
        }
    ]
)

print(response['message']['content'])`,E=`To reset your password, follow these steps:

1. Open the login page.
2. Select "Forgot Password".
3. Enter your registered email address.
4. Follow the password reset link sent to your email.
5. Create a new password and log in again.`,G=c({__name:"PromptTemplatesForApplicationTasks",setup(q){const m=[{label:"Clear instructions",values:["Tell the model exactly what it needs to do."]},{label:"Relevant context",values:["Provide the information needed to complete the task."]},{label:"Expected format",values:["Specify whether the answer should be a list, paragraph, JSON, or another format."]},{label:"Appropriate examples",values:["Include examples when the task requires a particular pattern or style."]},{label:"Reusable placeholders",values:["Use variables for information that changes between requests."]}];return(S,e)=>(w(),h(f,null,{default:s(()=>[o("div",y,[e[46]||(e[46]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:d,alt:"Prompt Templates for Application Tasks",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[47]||(e[47]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Prompt Templates for Application Tasks ")],-1)),t(n,null,{default:s(()=>[...e[0]||(e[0]=[a(" An AI model can generate different responses depending on how a request is written. A vague instruction may produce an unclear answer, while a specific instruction can guide the model toward a more useful result. In an application, however, prompts are not always written manually. They are often created automatically using information provided by users, such as names, questions, messages, or documents. This is where prompt templates become useful. They allow developers to create reusable instructions that can be filled with different values whenever the application needs to communicate with an AI model. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[1]||(e[1]=[a("Understanding Prompt Templates",-1)])]),_:1}),t(n,null,{default:s(()=>[t(i,null,{default:s(()=>[...e[2]||(e[2]=[a("Prompt",-1)])]),_:1}),e[4]||(e[4]=a(" refers to the instruction or input given to an AI model to guide its response. ",-1)),t(i,null,{default:s(()=>[...e[3]||(e[3]=[a("Prompt template",-1)])]),_:1}),e[5]||(e[5]=a(" is a reusable prompt containing placeholders that can be replaced with actual values before sending it to a model. Think of a prompt template as a fill-in-the-blank form. Instead of writing a completely new instruction every time, the application simply supplies the missing information. ",-1))]),_:1}),t(n,null,{default:s(()=>[...e[6]||(e[6]=[a(" For example, an application may need to explain different programming concepts to students. Instead of manually writing a new prompt for every concept, developers can prepare one template and change only the topic. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[7]||(e[7]=[a("Sending a Basic Prompt to an AI Model",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[8]||(e[8]=[a(" Before creating reusable templates, let us look at a basic example of sending a prompt to an Ollama model using its Python library. ",-1)])]),_:1}),t(r,{language:"python",code:v}),t(n,null,{default:s(()=>[e[10]||(e[10]=a(" The application sends a message to the model using ",-1)),t(i,null,{default:s(()=>[...e[9]||(e[9]=[a("ollama.chat()",-1)])]),_:1}),e[11]||(e[11]=a(" . The model processes the instruction and returns a response. Although this works, the prompt is directly written inside the code. If the application needs to handle many different topics, repeatedly modifying the prompt can become inconvenient. ",-1))]),_:1}),t(l,null,{default:s(()=>[...e[12]||(e[12]=[a("Creating a Reusable Prompt Template",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[13]||(e[13]=[a(" Python provides several ways to create reusable text templates. One simple approach is to use string formatting with placeholders enclosed in curly braces. In the following example, the placeholders are ",-1),o("code",null,"{'{topic}'}",-1),a(", ",-1),o("code",null,"{'{audience}'}",-1),a(", and ",-1),o("code",null,"{'{length}'}",-1),a(". ",-1)])]),_:1}),t(r,{language:"python",code:x}),t(n,null,{default:s(()=>[...e[14]||(e[14]=[a(" The ",-1),o("code",null,"format()",-1),a(" method replaces each placeholder with the corresponding value. The resulting string becomes the actual prompt that can be sent to the AI model. ",-1)])]),_:1}),t(p,{output:b}),t(n,null,{default:s(()=>[...e[15]||(e[15]=[a(" Notice that the template remains unchanged. Only the values supplied to ",-1),o("code",null,"format()",-1),a(" are different. This makes it easier to reuse the same instructions for multiple requests. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[16]||(e[16]=[a("Using Templates in Python Applications",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[17]||(e[17]=[a(" A prompt template becomes more useful when it is integrated into a reusable function. This allows other parts of an application to request AI-generated explanations without manually constructing the prompt each time. ",-1)])]),_:1}),t(r,{language:"python",code:T}),t(n,null,{default:s(()=>[...e[18]||(e[18]=[a(" In this example, the ",-1),o("code",null,"generate_explanation()",-1),a(" function accepts three arguments. It uses those values to complete the template, sends the resulting prompt to Ollama, and returns the model's response. The same function can be called with different topics, audiences, and explanation lengths. ",-1)])]),_:1}),t(p,{output:k}),t(n,null,{default:s(()=>[...e[19]||(e[19]=[a(" This approach separates the application's functionality from the prompt itself. If the developer wants to improve the instructions, the template can be modified without changing how the rest of the application calls the function. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[20]||(e[20]=[a("Templates for Different Application Tasks",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[21]||(e[21]=[a(" Prompt templates are not limited to generating explanations. They can support different features depending on what an application needs to accomplish. ",-1)])]),_:1}),t(u,{headers:["Application Task","Purpose"],rows:[{label:"Summarization",values:["Shorten long documents or articles into important points."]},{label:"Classification",values:["Assign a category or label to a message or record."]},{label:"Code Explanation",values:["Explain the purpose and behavior of a given code snippet."]},{label:"Question Answering",values:["Generate answers based on supplied information."]},{label:"Text Generation",values:["Create descriptions, announcements, or other written content."]}]}),t(n,null,{default:s(()=>[...e[22]||(e[22]=[a(" A single application can contain multiple templates for different tasks. The developer can select the appropriate template based on the feature being used. ",-1)])]),_:1}),t(r,{language:"python",code:A}),t(n,null,{default:s(()=>[...e[23]||(e[23]=[a(" Here, the application stores several templates in a dictionary. It selects the summarization template and supplies the required values. This is useful when an application provides multiple AI-powered features, because each feature can have its own instructions. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[24]||(e[24]=[a("Using Examples to Guide Model Responses",-1)])]),_:1}),t(n,null,{default:s(()=>[e[26]||(e[26]=a(" Sometimes, instructions alone are not enough to produce the desired response. An application may need to show the model examples of what a correct answer should look like. ",-1)),t(i,null,{default:s(()=>[...e[25]||(e[25]=[a("Few-shot prompting",-1)])]),_:1}),e[27]||(e[27]=a(" is a technique in which examples are included in a prompt to demonstrate the expected task and response pattern. For example, a customer support application may need to classify customer messages as positive or negative. Providing sample messages and their classifications helps demonstrate the expected output. ",-1))]),_:1}),t(r,{language:"python",code:I}),t(n,null,{default:s(()=>[...e[28]||(e[28]=[a(" The prompt provides two examples before presenting the actual customer message. The model can use these examples as guidance when generating its classification. ",-1)])]),_:1}),t(p,{output:P}),t(n,null,{default:s(()=>[...e[29]||(e[29]=[a(" Few-shot prompting is useful when the application needs consistent response patterns, specific writing styles, or task-specific behavior. However, examples should be relevant and clearly demonstrate the expected result. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[30]||(e[30]=[a("Separating System Instructions and User Prompts",-1)])]),_:1}),t(n,null,{default:s(()=>[e[33]||(e[33]=a(" When using Ollama's chat endpoint, developers can separate general model behavior from the user's actual request. The ",-1)),t(i,null,{default:s(()=>[...e[31]||(e[31]=[a("system message",-1)])]),_:1}),e[34]||(e[34]=a(" defines the model's overall role, behavior, and response guidelines. The ",-1)),t(i,null,{default:s(()=>[...e[32]||(e[32]=[a("user message",-1)])]),_:1}),e[35]||(e[35]=a(" contains the specific request or information that the model needs to process. ",-1))]),_:1}),t(r,{language:"python",code:C}),t(n,null,{default:s(()=>[...e[36]||(e[36]=[a(" In this example, the system message establishes the model as a customer support assistant. It also provides guidelines for how the model should respond. The user message contains the actual question. This separation makes the instructions easier to manage and reuse across different requests. ",-1)])]),_:1}),t(p,{output:E}),t(n,null,{default:s(()=>[...e[37]||(e[37]=[a(" System instructions help guide model behavior, but they do not guarantee that every response will follow the instructions perfectly. Applications should still check important outputs before using them. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[38]||(e[38]=[a("Characteristics of a Good Prompt Template",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[39]||(e[39]=[a(" A well-designed prompt template should make the expected task clear and provide enough information for the model to generate a useful response. ",-1)])]),_:1}),t(u,{headers:["Characteristic","Description"],rows:m}),t(n,null,{default:s(()=>[...e[40]||(e[40]=[a(" Consider the difference between these two instructions: ",-1)])]),_:1}),t(i,null,{default:s(()=>[...e[41]||(e[41]=[a("Unclear prompt",-1)])]),_:1}),t(r,{language:"python",code:"prompt = 'Explain this.'"}),t(i,null,{default:s(()=>[...e[42]||(e[42]=[a("More specific prompt",-1)])]),_:1}),t(r,{language:"python",code:`prompt = '''
Explain the concept of database normalization
to beginner programming students.

Use simple language, provide one practical
example, and keep the explanation concise.
'''`}),t(n,null,{default:s(()=>[...e[43]||(e[43]=[a(" The second prompt gives the model a clearer task, audience, and expected response. This can help produce answers that are more appropriate for the application's purpose. ",-1)])]),_:1}),t(l,null,{default:s(()=>[...e[44]||(e[44]=[a("Summary",-1)])]),_:1}),t(n,null,{default:s(()=>[...e[45]||(e[45]=[a(" In this topic, you learned that: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,"A prompt is an instruction or input given to an AI model."),o("li",null,"A prompt template is a reusable instruction containing placeholders."),o("li",null,[a("Python's "),o("code",null,"format()"),a(" method can replace placeholders with actual values.")]),o("li",null,"Templates can be integrated into reusable Python functions."),o("li",null,"Different application tasks can use different prompt templates."),o("li",null,"Few-shot prompting uses examples to demonstrate the expected response pattern."),o("li",null,"System messages define general model behavior, while user messages contain specific requests."),o("li",null,"Clear and specific instructions help guide the model toward more useful responses.")],-1)])]),_:1}),t(g,{to:"/academia/student/classes/elective3-output-validation"})])]),_:1}))}});export{G as default};

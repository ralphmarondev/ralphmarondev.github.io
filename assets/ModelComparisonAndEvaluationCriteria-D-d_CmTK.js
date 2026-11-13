import{_ as p}from"./logo-C9ImmdpX.js";import{_ as c}from"./MainLayout.vue_vue_type_script_setup_true_lang-GBq8Y1gq.js";import{T as l,a as n,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-Ck0YDR9Z.js";import{T as r}from"./TopicTerm-8Gsj2bko.js";import{C as i}from"./CodeBlock-CB31lEux.js";import{O as m}from"./OutputBlock-BeV5bNCQ.js";import{_ as d}from"./TableBlock.vue_vue_type_script_setup_true_lang-DQk5hU4S.js";import{d as g,h,i as o,o as v,a as s,q as t,g as a}from"./index-CTOJ-Nsm.js";const b={class:"max-w-4xl mx-auto"},y={class:"list-disc pl-8 mt-3 space-y-2"},w=`import ollama

models = [
    'llama3.2',
    'qwen2.5:3b'
]

prompt = """
Explain what a database is to a beginner.
Use simple language and provide one example.
"""

for model in models:
    response = ollama.chat(
        model=model,
        messages=[
            {
                'role': 'user',
                'content': prompt
            }
        ]
    )

    print(f"Model: {model}")
    print(response['message']['content'])
    print("-" * 40)`,x=`Model: llama3.2
A database is an organized collection of information
that can be stored, managed, and accessed easily.

For example, a school database can store student names,
grades, and enrollment records.
----------------------------------------

Model: qwen2.5:3b
A database is a system used to store and organize data
so it can be easily retrieved and managed.

For example, a school can use a database to keep
student records and grades.
----------------------------------------`,q=`import ollama

models = ['llama3.2', 'qwen2.5:3b']

test_prompt = """
You are a programming instructor.

Explain the difference between a list and a tuple
in Python.

Requirements:
- Use simple language.
- Provide one code example for each.
- Keep the answer under 150 words.
"""

for model in models:
    response = ollama.chat(
        model=model,
        messages=[
            {
                'role': 'user',
                'content': test_prompt
            }
        ],
        options={
            'temperature': 0
        }
    )

    print(f"MODEL: {model}")
    print(response['message']['content'])
    print()`,C=`import ollama
import time

models = ['llama3.2', 'qwen2.5:3b']

prompt = "Explain what an operating system does."

for model in models:
    start_time = time.perf_counter()

    response = ollama.chat(
        model=model,
        messages=[
            {
                'role': 'user',
                'content': prompt
            }
        ]
    )

    end_time = time.perf_counter()
    elapsed = end_time - start_time

    print(f"Model: {model}")
    print(f"Response time: {elapsed:.2f} seconds")
    print()`,A=`Model: llama3.2
Response time: 2.84 seconds

Model: qwen2.5:3b
Response time: 2.31 seconds`,T=`import ollama
import time

def evaluate_model(model, prompt):
    start = time.perf_counter()

    response = ollama.chat(
        model=model,
        messages=[
            {
                'role': 'user',
                'content': prompt
            }
        ]
    )

    elapsed = time.perf_counter() - start

    return {
        'model': model,
        'answer': response['message']['content'],
        'response_time': elapsed
    }


prompt = "What is the purpose of an operating system?"

models = ['llama3.2', 'qwen2.5:3b']

for model in models:
    result = evaluate_model(model, prompt)

    print("Model:", result['model'])
    print("Response time:", round(result['response_time'], 2))
    print("Answer:", result['answer'])
    print("-" * 40)`,k=`def calculate_score(accuracy, relevance, clarity, speed):
    weights = {
        'accuracy': 0.40,
        'relevance': 0.30,
        'clarity': 0.20,
        'speed': 0.10
    }

    score = (
        accuracy * weights['accuracy'] +
        relevance * weights['relevance'] +
        clarity * weights['clarity'] +
        speed * weights['speed']
    )

    return score


model_score = calculate_score(
    accuracy=5,
    relevance=4,
    clarity=5,
    speed=3
)

print("Overall score:", model_score)`,M="Overall score: 4.5",I=`import ollama
import time
import statistics

def benchmark_model(model, prompt, repetitions=3):
    response_times = []

    for _ in range(repetitions):
        start = time.perf_counter()

        ollama.chat(
            model=model,
            messages=[
                {
                    'role': 'user',
                    'content': prompt
                }
            ]
        )

        elapsed = time.perf_counter() - start
        response_times.append(elapsed)

    return statistics.mean(response_times)


prompt = "Explain the role of a CPU."

models = ['llama3.2', 'qwen2.5:3b']

for model in models:
    average_time = benchmark_model(model, prompt)

    print(model)
    print(f"Average time: {average_time:.2f} seconds")`,O=`llama3.2
Average time: 2.91 seconds

qwen2.5:3b
Average time: 2.47 seconds`,N=g({__name:"ModelComparisonAndEvaluationCriteria",setup(R){const u=[{label:"Accuracy",values:["Does the response provide correct and relevant information?"]},{label:"Relevance",values:["Does the response directly address the given question?"]},{label:"Clarity",values:["Is the response understandable and well-organized?"]},{label:"Response time",values:["How long does the model take to generate an answer?"]},{label:"Resource usage",values:["How much memory and processing power does the model require?"]},{label:"Consistency",values:["Does the model produce reasonably similar results for repeated tests?"]}];return(E,e)=>(v(),h(c,null,{default:o(()=>[s("div",b,[e[53]||(e[53]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:p,alt:"Model Comparison and Evaluation",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[54]||(e[54]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Model Comparison and Evaluation ")],-1)),t(l,null,{default:o(()=>[e[2]||(e[2]=a(" There are many AI models available for developers. Some are designed to generate text, others are optimized for programming, and some focus on reasoning or handling complex instructions. However, choosing a model is not simply about selecting the largest or most popular one. Developers need to determine whether a model can perform the application's tasks effectively while meeting its performance requirements. ",-1)),t(r,null,{default:o(()=>[...e[0]||(e[0]=[a("Model comparison",-1)])]),_:1}),e[3]||(e[3]=a(" is the process of examining two or more AI models to identify their differences in capabilities and performance. ",-1)),t(r,null,{default:o(()=>[...e[1]||(e[1]=[a("Model evaluation",-1)])]),_:1}),e[4]||(e[4]=a(" is the process of measuring how well a model performs based on defined criteria. ",-1))]),_:1}),t(n,null,{default:o(()=>[...e[5]||(e[5]=[a("Why Compare AI Models?",-1)])]),_:1}),t(l,null,{default:o(()=>[...e[6]||(e[6]=[a(" Different models can produce different results even when given exactly the same instructions. For example, imagine developing an educational chatbot that explains programming concepts. One model might provide more accurate explanations, while another might respond faster but give less detailed answers. Comparing models helps developers determine which one is more appropriate for their intended application. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[7]||(e[7]=[a("Comparing Models Using the Same Prompt",-1)])]),_:1}),t(l,null,{default:o(()=>[e[12]||(e[12]=a(" One simple way to compare models is to send them the same prompt and examine their responses. In this example, we will use two locally available Ollama models: ",-1)),s("ul",y,[s("li",null,[t(r,null,{default:o(()=>[...e[8]||(e[8]=[a("Llama 3.2",-1)])]),_:1}),e[9]||(e[9]=a(" – a family of language models developed by Meta. ",-1))]),s("li",null,[t(r,null,{default:o(()=>[...e[10]||(e[10]=[a("Qwen 2.5",-1)])]),_:1}),e[11]||(e[11]=a(" – a family of language models developed by Alibaba. ",-1))])]),e[13]||(e[13]=a(" Both models must be downloaded and available in Ollama before running the example. You can use other installed models by changing their names. ",-1))]),_:1}),t(i,{language:"bash",code:`ollama pull llama3.2
ollama pull qwen2.5:3b`}),t(l,null,{default:o(()=>[...e[14]||(e[14]=[a(" We can now send the same question to both models using Python. ",-1)])]),_:1}),t(i,{language:"python",code:w}),t(m,{output:x}),t(l,null,{default:o(()=>[...e[15]||(e[15]=[a(" The responses shown above are illustrative examples. Actual answers will vary depending on the model version, configuration, and hardware. Notice that both models explain the same concept, but their wording and level of detail may differ. This allows developers to examine how each model handles the same task. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[16]||(e[16]=[a("Importance of Using the Same Test Conditions",-1)])]),_:1}),t(l,null,{default:o(()=>[...e[17]||(e[17]=[a(" A fair comparison requires consistent testing conditions. If one model receives a detailed prompt while another receives a vague instruction, the results may not provide a meaningful comparison. Developers should try to keep the following conditions consistent: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Use the same prompt and instructions."),s("li",null,"Use the same input data."),s("li",null,"Apply comparable generation settings."),s("li",null,"Use the same evaluation criteria."),s("li",null,"Repeat tests when results may vary.")],-1)])]),_:1}),t(i,{language:"python",code:q}),t(l,null,{default:o(()=>[e[19]||(e[19]=a(" The example uses the same instructions and sets the temperature to zero for both models. ",-1)),t(r,null,{default:o(()=>[...e[18]||(e[18]=[a("Temperature",-1)])]),_:1}),e[20]||(e[20]=a(" is a generation setting that influences the randomness of model responses. Lower values generally make responses more predictable, while higher values allow more variation. A temperature of zero does not guarantee identical outputs across different models, but it helps reduce randomness when comparing their behavior. ",-1))]),_:1}),t(n,null,{default:o(()=>[...e[21]||(e[21]=[a("Important Model Evaluation Criteria",-1)])]),_:1}),t(l,null,{default:o(()=>[...e[22]||(e[22]=[a(" A model should be evaluated based on several factors rather than relying on a single measurement. ",-1)])]),_:1}),t(d,{headers:["Evaluation Criteria","What to Examine"],rows:u}),t(l,null,{default:o(()=>[...e[23]||(e[23]=[a(" For example, a chatbot used for answering technical questions may prioritize accuracy and relevance. A chatbot used in a real-time customer support system may also require fast response times. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[24]||(e[24]=[a("Measuring Response Time",-1)])]),_:1}),t(l,null,{default:o(()=>[e[26]||(e[26]=a(" One of the easiest performance measurements is response time. ",-1)),t(r,null,{default:o(()=>[...e[25]||(e[25]=[a("Response time",-1)])]),_:1}),e[27]||(e[27]=a(" refers to the amount of time the application waits for the model to complete a request and return its response. Python's ",-1)),e[28]||(e[28]=s("code",null,"time",-1)),e[29]||(e[29]=a(" module provides ",-1)),e[30]||(e[30]=s("code",null,"perf_counter()",-1)),e[31]||(e[31]=a(", which can be used to measure elapsed time. ",-1))]),_:1}),t(i,{language:"python",code:C}),t(m,{output:A}),t(l,null,{default:o(()=>[...e[32]||(e[32]=[a(" The output values are illustrative and will vary depending on the computer's hardware, model size, available memory, and whether the model is already loaded. A faster response does not automatically mean that a model is better. Developers must also examine the quality of the generated answer. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[33]||(e[33]=[a("Building a Simple Evaluation Function",-1)])]),_:1}),t(l,null,{default:o(()=>[...e[34]||(e[34]=[a(" Instead of manually writing the same evaluation code repeatedly, developers can create a reusable function that measures a model's response time and retrieves its generated answer. ",-1)])]),_:1}),t(i,{language:"python",code:T}),t(l,null,{default:o(()=>[...e[35]||(e[35]=[a(" The ",-1),s("code",null,"evaluate_model()",-1),a(" function accepts a model name and a prompt. It records the time before and after the request, then returns the model name, generated answer, and elapsed time. This makes it easier to collect results from multiple models and examine their performance. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[36]||(e[36]=[a("Evaluating Response Quality",-1)])]),_:1}),t(l,null,{default:o(()=>[...e[37]||(e[37]=[a(" Response time can be measured automatically, but qualities such as accuracy, clarity, and relevance require additional evaluation. One practical approach is to prepare a scoring rubric. A human evaluator can rate each model's response using a consistent scale, such as 1 to 5. ",-1)])]),_:1}),t(d,{headers:["Score","Description"],rows:[{label:"5",values:["Excellent"]},{label:"4",values:["Good"]},{label:"3",values:["Acceptable"]},{label:"2",values:["Needs improvement"]},{label:"1",values:["Poor"]}]}),t(l,null,{default:o(()=>[...e[38]||(e[38]=[a(" For example, a developer may assign a score of 5 when an answer is accurate, relevant, and easy to understand. A score of 1 may indicate that the answer is incorrect or does not address the question. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[39]||(e[39]=[a("Calculating an Overall Evaluation Score",-1)])]),_:1}),t(l,null,{default:o(()=>[e[41]||(e[41]=a(" Developers can combine multiple evaluation criteria into one overall score using a weighted average. ",-1)),t(r,null,{default:o(()=>[...e[40]||(e[40]=[a("Weighted average",-1)])]),_:1}),e[42]||(e[42]=a(" is a calculation in which some criteria contribute more to the final result than others. Consider an application where accuracy is more important than response speed. The developer can assign a higher weight to accuracy. ",-1))]),_:1}),t(i,{language:"python",code:k}),t(m,{output:M}),t(l,null,{default:o(()=>[...e[43]||(e[43]=[a(" In this example, accuracy contributes 40% of the total score, relevance contributes 30%, clarity contributes 20%, and speed contributes 10%. The resulting score is 4.5 out of 5. These weights are only an example. In an actual application, developers should choose weights based on the application's requirements. The scores themselves also need to come from a consistent evaluation process. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[44]||(e[44]=[a("Understanding Benchmark Testing",-1)])]),_:1}),t(l,null,{default:o(()=>[t(r,null,{default:o(()=>[...e[45]||(e[45]=[a("Benchmark testing",-1)])]),_:1}),e[46]||(e[46]=a(" is the process of measuring and comparing system or model performance using a consistent set of tests. Instead of relying on a single request, developers can run the same test multiple times and calculate the average response time. This helps reduce the influence of unusually fast or slow individual requests. ",-1))]),_:1}),t(i,{language:"python",code:I}),t(m,{output:O}),t(l,null,{default:o(()=>[...e[47]||(e[47]=[a(" The displayed times are sample values, not guaranteed results. The ",-1),s("code",null,"statistics.mean()",-1),a(" function calculates the average response time from the recorded measurements. For more reliable benchmarking, developers should also consider model loading time, warm-up requests, hardware utilization, and the number of generated tokens. ",-1)])]),_:1}),t(n,null,{default:o(()=>[...e[48]||(e[48]=[a("Choosing the Right Model for an Application",-1)])]),_:1}),t(l,null,{default:o(()=>[...e[49]||(e[49]=[a(" The best model depends on what the application needs to accomplish. A model that performs well for one task may not be the best choice for another. ",-1)])]),_:1}),t(d,{headers:["Application Requirement","What to Prioritize"],rows:[{label:"Educational chatbot",values:["Accuracy, clarity, and relevance"]},{label:"Real-time assistant",values:["Response time and consistency"]},{label:"Code assistant",values:["Programming accuracy and instruction following"]},{label:"Low-resource computer",values:["Memory usage and model size"]},{label:"Document analysis",values:["Context handling and information accuracy"]}]}),t(l,null,{default:o(()=>[...e[50]||(e[50]=[a(" A practical model selection process should consider the following: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Identify the main task the application needs to perform."),s("li",null,"Select candidate models that can handle the task."),s("li",null,"Prepare a consistent set of test prompts."),s("li",null,"Measure response time and evaluate response quality."),s("li",null,"Compare resource requirements and deployment constraints."),s("li",null,"Select the model that best meets the application's needs.")],-1)])]),_:1}),t(n,null,{default:o(()=>[...e[51]||(e[51]=[a("Summary",-1)])]),_:1}),t(l,null,{default:o(()=>[...e[52]||(e[52]=[a(" In this topic, you learned that: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Model comparison examines the differences between AI models."),s("li",null,"Model evaluation measures how well a model performs specific tasks."),s("li",null,"Using the same prompts and test conditions helps make comparisons fairer."),s("li",null,"Accuracy, relevance, clarity, response time, and resource usage are important evaluation criteria."),s("li",null,[a("Python's "),s("code",null,"time.perf_counter()"),a(" can measure response time.")]),s("li",null,"Scoring rubrics and weighted averages can help organize evaluation results."),s("li",null,"Benchmark testing uses repeated and consistent tests to measure performance."),s("li",null,"The most suitable model depends on the application's requirements.")],-1)])]),_:1}),t(f,{to:"/academia/student/classes/elective3",text:"Finish"})])]),_:1}))}});export{N as default};

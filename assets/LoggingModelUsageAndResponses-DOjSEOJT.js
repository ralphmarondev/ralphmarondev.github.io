import{_ as p}from"./logo-C9ImmdpX.js";import{_ as c}from"./MainLayout.vue_vue_type_script_setup_true_lang-CDCZL-bD.js";import{T as a,a as l,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-ByHyYtG_.js";import{T as d}from"./TopicTerm-Bt_DEisM.js";import{C as i}from"./CodeBlock-bZN1puOf.js";import{O as r}from"./OutputBlock-Cz3Nj6CK.js";import{_ as u}from"./TableBlock.vue_vue_type_script_setup_true_lang-Cxw-iObO.js";import{d as h,h as v,i as n,o as y,a as o,q as s,g as t}from"./index-DJwcHVGb.js";const b={class:"max-w-4xl mx-auto"},w=`from django.db import models

class AIUsageLog(models.Model):
    STATUS_CHOICES = [
        ('success', 'Success'),
        ('failed', 'Failed'),
    ]

    conversation = models.ForeignKey(
        'Conversation',
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='usage_logs'
    )

    model_name = models.CharField(max_length=100)
    operation = models.CharField(max_length=50)

    prompt_tokens = models.PositiveIntegerField(default=0)
    response_tokens = models.PositiveIntegerField(default=0)

    duration_ms = models.PositiveIntegerField(default=0)

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES
    )

    error_message = models.TextField(blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.model_name} - {self.operation}'`,k=`python manage.py makemigrations
python manage.py migrate`,_=`from chatbot.models import AIUsageLog

AIUsageLog.objects.create(
    conversation=conversation,
    model_name='llama3.2',
    operation='chat',
    prompt_tokens=25,
    response_tokens=80,
    duration_ms=1200,
    status='success'
)`,A=`AIUsageLog object (1)

model_name: llama3.2
operation: chat
prompt_tokens: 25
response_tokens: 80
duration_ms: 1200
status: success`,I=`logs = AIUsageLog.objects.all().order_by('-created_at')

for log in logs:
    print(
        log.model_name,
        log.operation,
        log.status,
        log.duration_ms
    )`,T=`llama3.2 chat success 1200
llama3.2 summarize success 850
llama3.2 chat failed 5000`,x=`from django.contrib import admin
from .models import AIUsageLog

@admin.register(AIUsageLog)
class AIUsageLogAdmin(admin.ModelAdmin):
    list_display = (
        'model_name',
        'operation',
        'status',
        'duration_ms',
        'created_at'
    )

    list_filter = ('model_name', 'operation', 'status')
    search_fields = ('model_name', 'error_message')`,L=`import time

start_time = time.perf_counter()

# Perform the AI operation here
reply = "Artificial intelligence is..."

end_time = time.perf_counter()

duration_ms = int(
    (end_time - start_time) * 1000
)

print(duration_ms)`,U=`{
    "model": "llama3.2",
    "created_at": "2026-11-12T10:00:00Z",
    "response": "Artificial intelligence is...",
    "done": true,
    "prompt_eval_count": 25,
    "eval_count": 80,
    "total_duration": 1500000000
}`,S=`prompt_tokens = result.get('prompt_eval_count', 0)
response_tokens = result.get('eval_count', 0)

duration_ms = (
    result.get('total_duration', 0) // 1_000_000
)`,q=`import time

from chatbot.models import AIUsageLog

class AIService:

    @staticmethod
    def generate_reply(conversation, message):
        start_time = time.perf_counter()

        try:
            # Placeholder for actual AI model processing
            reply = f'You asked: {message}'

            duration_ms = int(
                (time.perf_counter() - start_time) * 1000
            )

            AIUsageLog.objects.create(
                conversation=conversation,
                model_name='sample-model',
                operation='chat',
                prompt_tokens=0,
                response_tokens=0,
                duration_ms=duration_ms,
                status='success'
            )

            return reply

        except Exception as error:
            duration_ms = int(
                (time.perf_counter() - start_time) * 1000
            )

            AIUsageLog.objects.create(
                conversation=conversation,
                model_name='sample-model',
                operation='chat',
                duration_ms=duration_ms,
                status='failed',
                error_message=str(error)
            )

            raise`,C=`total_tokens = prompt_tokens + response_tokens

print(total_tokens)`,P=`from django.db.models import Sum

total_usage = AIUsageLog.objects.aggregate(
    total_prompt_tokens=Sum('prompt_tokens'),
    total_response_tokens=Sum('response_tokens')
)

print(total_usage)`,R=`{
    'total_prompt_tokens': 500,
    'total_response_tokens': 1200
}`,j=`User Request
     |
     v
Django REST Framework View
     |
     v
AI Service
     |
     v
Process AI Request
     |
     +---- Success
     |       |
     |       v
     |   Save Usage Log
     |
     +---- Failure
             |
             v
         Save Error Log
             |
             v
      Return Result to View`,V=h({__name:"LoggingModelUsageAndResponses",setup(M){const m=[{label:"Model Name",values:["Identifies the AI model used to process the request."]},{label:"Operation",values:["Identifies the task performed, such as chat or summarization."]},{label:"Token Usage",values:["Records the number of tokens processed by the model."]},{label:"Processing Time",values:["Records how long the AI operation took."]},{label:"Request Status",values:["Indicates whether the operation succeeded or failed."]},{label:"Timestamp",values:["Records when the AI operation occurred."]}],g=[{label:"Privacy",values:["Avoid storing sensitive prompts or personal information unnecessarily."]},{label:"Accuracy",values:["Use actual model usage metadata instead of estimating token counts."]},{label:"Performance",values:["Keep logging operations lightweight so they do not significantly slow down requests."]},{label:"Security",values:["Do not expose internal error messages or credentials to frontend users."]},{label:"Retention",values:["Define how long usage logs should be retained."]}];return(F,e)=>(y(),v(c,null,{default:n(()=>[o("div",b,[e[53]||(e[53]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:p,alt:"Logging Model Usage and Responses",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[54]||(e[54]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Logging Model Usage and Responses ")],-1)),s(a,null,{default:n(()=>[e[1]||(e[1]=t(" An AI-powered application may receive hundreds or even thousands of requests. As the number of users increases, developers need a way to monitor how the application uses its AI models. For example, they may want to know which model processed a request, how many tokens were generated, how long the operation took, and whether the request succeeded. These details can be recorded using ",-1)),s(d,null,{default:n(()=>[...e[0]||(e[0]=[t("Logging",-1)])]),_:1}),e[2]||(e[2]=t(" . Logging allows developers to keep a record of important application events and activities. In AI applications, it is particularly useful for monitoring model usage, investigating errors, and understanding system performance. ",-1))]),_:1}),s(l,null,{default:n(()=>[...e[3]||(e[3]=[t("Understanding AI Usage Logging",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[4]||(e[4]=[t(" Consider a chatbot that uses an AI model to answer questions. Every time a user submits a message, the backend sends a request to the AI model and receives a response. Aside from saving the conversation itself, the application can also record information about the AI operation. ",-1)])]),_:1}),s(u,{headers:["Information","Purpose"],rows:m}),s(a,null,{default:n(()=>[...e[5]||(e[5]=[t(" These records allow developers to answer questions such as: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,"Which AI model is being used most frequently?"),o("li",null,"How many tokens are being processed?"),o("li",null,"How long does the model take to generate a response?"),o("li",null,"How many requests are failing?"),o("li",null,"Which AI operations consume the most resources?")],-1)])]),_:1}),s(l,null,{default:n(()=>[...e[6]||(e[6]=[t("Understanding Tokens and Token Usage",-1)])]),_:1}),s(a,null,{default:n(()=>[e[8]||(e[8]=t(" Before recording model usage, we need to understand ",-1)),s(d,null,{default:n(()=>[...e[7]||(e[7]=[t("Tokens",-1)])]),_:1}),e[9]||(e[9]=t(" . Tokens are units of text that language models process. A token can represent a complete word, part of a word, punctuation, or another text segment. For example, a sentence containing several words may be divided into multiple tokens before being processed by an AI model. ",-1))]),_:1}),s(a,null,{default:n(()=>[...e[10]||(e[10]=[t(" AI usage information commonly distinguishes between two types of tokens: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,[o("strong",null,"Prompt tokens:"),t(" Tokens contained in the input sent to the model.")]),o("li",null,[o("strong",null,"Response tokens:"),t(" Tokens generated by the model as output.")])],-1),t(" The total token usage is the sum of these two values. ",-1)])]),_:1}),s(i,{language:"python",code:C}),s(a,null,{default:n(()=>[...e[11]||(e[11]=[t(" Tracking token usage helps developers understand how much information is being processed and estimate resource consumption. However, token counts are model-dependent. The same text may produce different token counts when processed by different models. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[12]||(e[12]=[t("Creating an AI Usage Log Model",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[13]||(e[13]=[t(" We can use Django models to store AI usage information in PostgreSQL. Inside the chatbot application's ",-1),o("code",null,"models.py",-1),t(" file, create a new model named ",-1),o("code",null,"AIUsageLog",-1),t(". ",-1)])]),_:1}),s(i,{language:"python",code:w}),s(a,null,{default:n(()=>[...e[14]||(e[14]=[t(" The model contains several fields: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,[o("code",null,"conversation"),t(" optionally connects the log to a conversation.")]),o("li",null,[o("code",null,"model_name"),t(" identifies the AI model used.")]),o("li",null,[o("code",null,"operation"),t(" identifies the AI task performed.")]),o("li",null,[o("code",null,"prompt_tokens"),t(" stores the number of input tokens.")]),o("li",null,[o("code",null,"response_tokens"),t(" stores the number of generated tokens.")]),o("li",null,[o("code",null,"duration_ms"),t(" stores the processing time in milliseconds.")]),o("li",null,[o("code",null,"status"),t(" indicates whether the operation succeeded or failed.")]),o("li",null,[o("code",null,"error_message"),t(" stores an error description when applicable.")]),o("li",null,[o("code",null,"created_at"),t(" records when the log was created.")])],-1)])]),_:1}),s(a,null,{default:n(()=>[...e[15]||(e[15]=[t(" Notice that the conversation field uses ",-1),o("code",null,"on_delete=models.SET_NULL",-1),t(". This means that if a conversation is deleted, its usage logs remain in the database, but their conversation reference becomes empty. This can be useful when usage records need to be retained even after a chat session is removed. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[16]||(e[16]=[t("Applying Database Migrations",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[17]||(e[17]=[t(" After adding the model, we need to update the PostgreSQL database schema. Run the following commands from the directory containing ",-1),o("code",null,"manage.py",-1),t(". ",-1)])]),_:1}),s(i,{language:"bash",code:k}),s(a,null,{default:n(()=>[...e[18]||(e[18]=[t(" Django generates a migration for the new model and applies it to PostgreSQL. After migration, the database will contain an additional table for AI usage logs. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[19]||(e[19]=[t("Creating a Usage Log",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[20]||(e[20]=[t(" We can create a usage log using Django ORM, just like we created conversation and message records. ",-1)])]),_:1}),s(i,{language:"python",code:_}),s(a,null,{default:n(()=>[...e[21]||(e[21]=[t(" This example creates a successful chatbot usage record. It indicates that the model named ",-1),o("code",null,"llama3.2",-1),t(" processed a chat request using 25 prompt tokens and generated 80 response tokens. The operation took 1,200 milliseconds, equivalent to 1.2 seconds. ",-1)])]),_:1}),s(r,{output:A}),s(a,null,{default:n(()=>[...e[22]||(e[22]=[t(" The values in this example are sample data. In an actual application, they should come from the AI model's response metadata and the measured processing time. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[23]||(e[23]=[t("Measuring Processing Time",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[24]||(e[24]=[t(" Developers often need to know how long an AI operation takes. Python provides the ",-1),o("code",null,"time",-1),t(" module, which includes ",-1),o("code",null,"perf_counter()",-1),t(", a high-resolution timer suitable for measuring elapsed time. ",-1)])]),_:1}),s(i,{language:"python",code:L}),s(a,null,{default:n(()=>[...e[25]||(e[25]=[t(" The application records the time immediately before and after the operation. Subtracting the start time from the end time gives the elapsed duration in seconds. Multiplying by 1,000 converts it into milliseconds. Measuring processing time helps identify slow operations and compare the performance of different AI models. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[26]||(e[26]=[t("Understanding AI Model Usage Metadata",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[27]||(e[27]=[t(" AI models may provide additional information alongside their generated responses. For example, Ollama's response metadata can include the number of prompt tokens, the number of generated tokens, and the total processing duration. ",-1)])]),_:1}),s(i,{language:"json",code:U}),s(a,null,{default:n(()=>[...e[28]||(e[28]=[t(" Some important fields in this example are: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,[o("code",null,"model"),t(" identifies the model that generated the response.")]),o("li",null,[o("code",null,"prompt_eval_count"),t(" represents the number of prompt tokens evaluated.")]),o("li",null,[o("code",null,"eval_count"),t(" represents the number of tokens generated.")]),o("li",null,[o("code",null,"total_duration"),t(" represents the total processing duration in nanoseconds.")])],-1)])]),_:1}),s(a,null,{default:n(()=>[...e[29]||(e[29]=[t(" Since Ollama reports duration in nanoseconds, we can convert it into milliseconds by dividing it by 1,000,000. ",-1)])]),_:1}),s(i,{language:"python",code:S}),s(a,null,{default:n(()=>[...e[30]||(e[30]=[t(" This demonstrates how model metadata can be mapped to the fields of our usage log model. If the AI provider does not return token information, the application should treat those values as unavailable rather than inventing token counts. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[31]||(e[31]=[t("Integrating Logging into the Service Layer",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[32]||(e[32]=[t(" We can now combine our service layer with the usage log model. Instead of logging AI operations directly inside every API view, we can place the logging logic inside the service that performs the AI operation. ",-1)])]),_:1}),s(i,{language:"python",code:q}),s(a,null,{default:n(()=>[...e[33]||(e[33]=[t(" The service follows this process: ",-1),o("ol",{class:"list-decimal pl-8 mt-3 space-y-2"},[o("li",null,"Record the start time."),o("li",null,"Perform the AI operation."),o("li",null,"Measure the elapsed processing time."),o("li",null,"Create a usage log if the operation succeeds."),o("li",null,"If an exception occurs, record a failed operation."),o("li",null,"Raise the exception again so the calling view can handle it.")],-1),t(" This example uses a placeholder response, so its token counts remain zero. When connected to Ollama, the service can use the actual metadata returned by the model. ",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[34]||(e[34]=[t(" The ",-1),o("code",null,"try-except",-1),t(" block is important because it allows the application to record failed operations instead of recording only successful requests. In a production system, logging failures should also be handled carefully so that a database logging problem does not accidentally hide the original AI processing error. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[35]||(e[35]=[t("Retrieving Usage Logs",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[36]||(e[36]=[t(" Once usage records are stored, developers can retrieve them using Django ORM. For example, the following query retrieves all usage logs, starting with the most recent. ",-1)])]),_:1}),s(i,{language:"python",code:I}),s(a,null,{default:n(()=>[...e[37]||(e[37]=[t(" The application can use these records to inspect model usage, identify failed operations, and investigate slow requests. ",-1)])]),_:1}),s(r,{output:T}),s(l,null,{default:n(()=>[...e[38]||(e[38]=[t("Calculating Total Token Usage",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[39]||(e[39]=[t(" Usage logs become even more useful when we summarize their information. Django ORM provides aggregation functions such as ",-1),o("code",null,"Sum()",-1),t(" that allow us to calculate totals directly from database records. ",-1)])]),_:1}),s(i,{language:"python",code:P}),s(a,null,{default:n(()=>[...e[40]||(e[40]=[t(" The query calculates the total prompt tokens and response tokens across all usage records. ",-1)])]),_:1}),s(r,{output:R}),s(a,null,{default:n(()=>[...e[41]||(e[41]=[t(" This information can be used to build monitoring dashboards that display how much AI processing has occurred over a selected period. Additional aggregation can also be used to compare usage across different models or operations. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[42]||(e[42]=[t("Viewing Logs in Django Admin",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[43]||(e[43]=[t(" Django Admin provides a convenient interface for inspecting database records. We can register our new model and customize the displayed information. ",-1)])]),_:1}),s(i,{language:"python",code:x}),s(a,null,{default:n(()=>[...e[44]||(e[44]=[t(" The ",-1),o("code",null,"list_display",-1),t(" option specifies which fields appear in the administration list. The ",-1),o("code",null,"list_filter",-1),t(" option adds filters, while ",-1),o("code",null,"search_fields",-1),t(" allows administrators to search selected fields. This makes it easier to inspect AI activity without writing database queries manually. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[45]||(e[45]=[t("Understanding the Logging Workflow",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[46]||(e[46]=[t(" The following diagram summarizes how usage logging works inside an AI-powered application. ",-1)])]),_:1}),s(i,{language:"text",code:j}),s(a,null,{default:n(()=>[...e[47]||(e[47]=[t(" Logging happens as part of the service operation. Whether the request succeeds or fails, the application attempts to record what happened. The view remains responsible for handling the HTTP response, while the service handles AI processing and its associated usage information. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[48]||(e[48]=[t("Important Considerations When Logging AI Activity",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[49]||(e[49]=[t(" Although logging is useful, developers must consider how usage information is collected and stored. ",-1)])]),_:1}),s(u,{headers:["Consideration","Description"],rows:g}),s(a,null,{default:n(()=>[...e[50]||(e[50]=[t(" In particular, avoid storing complete user prompts and AI responses unless the application genuinely needs them. Such information may contain personal or confidential data. For many monitoring purposes, recording metadata such as model name, token counts, processing time, and request status is sufficient. ",-1)])]),_:1}),s(l,null,{default:n(()=>[...e[51]||(e[51]=[t("Summary",-1)])]),_:1}),s(a,null,{default:n(()=>[...e[52]||(e[52]=[t(" In this topic, you learned that: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,"Logging records important application events and AI operations."),o("li",null,"AI usage logs can store model names, operation types, token counts, processing time, and request status. "),o("li",null,"Prompt tokens represent input processed by the model."),o("li",null,"Response tokens represent tokens generated by the model."),o("li",null,[t("Python's "),o("code",null,"perf_counter()"),t(" can measure elapsed processing time.")]),o("li",null,"Ollama provides metadata that can be used to record actual model usage."),o("li",null,"Django ORM can retrieve and aggregate usage records."),o("li",null,"Usage logs help developers monitor performance, investigate failures, and understand resource consumption. "),o("li",null,"Privacy and data retention must be considered when recording AI activity.")],-1)])]),_:1}),s(f,{to:"/academia/student/classes/elective3",text:"Finish"})])]),_:1}))}});export{V as default};

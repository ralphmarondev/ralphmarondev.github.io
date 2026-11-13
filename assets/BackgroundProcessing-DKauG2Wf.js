import{_ as c}from"./logo-C9ImmdpX.js";import{_ as h}from"./MainLayout.vue_vue_type_script_setup_true_lang-GBq8Y1gq.js";import{T as o,a as r,_ as y}from"./TopicNext.vue_vue_type_script_setup_true_lang-Ck0YDR9Z.js";import{T as u}from"./TopicTerm-8Gsj2bko.js";import{C as l}from"./CodeBlock-CB31lEux.js";import{O as d}from"./OutputBlock-BeV5bNCQ.js";import{_ as i}from"./TableBlock.vue_vue_type_script_setup_true_lang-DQk5hU4S.js";import{d as b,h as w,i as a,o as T,a as n,q as s,g as t}from"./index-CTOJ-Nsm.js";const v={class:"max-w-4xl mx-auto"},x=`User
 |
 v
Django View
 |
 v
Perform Long Task
 |
 | (Wait)
 |
 v
Task Completed
 |
 v
Return HTTP Response
 |
 v
User Receives Result`,C=`User
 |
 v
Django View
 |
 v
Create Background Task
 |
 v
Add Task to Queue
 |
 v
Return Task ID Immediately
 |
 v
User Receives Response

        Task Queue
             |
             v
        Worker Process
             |
             v
        Perform Long Task
             |
             v
        Save Result`,R="pip install celery redis",I=`import os
from celery import Celery

os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE',
    'config.settings'
)

app = Celery('config')

app.config_from_object(
    'django.conf:settings',
    namespace='CELERY'
)

app.autodiscover_tasks()`,P=`CELERY_BROKER_URL = 'redis://localhost:6379/0'

CELERY_RESULT_BACKEND = 'redis://localhost:6379/1'

CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'`,S=`from .celery import app as celery_app

__all__ = ('celery_app',)`,j=`from celery import shared_task
import time

@shared_task
def generate_report(user_id):
    time.sleep(5)

    return {
        'user_id': user_id,
        'status': 'Report generated'
    }`,E=`from django.http import JsonResponse
from .tasks import generate_report

def start_report(request):
    task = generate_report.delay(user_id=1)

    return JsonResponse({
        'task_id': task.id,
        'status': 'Task submitted'
    })`,D=`{
    "task_id": "f3b8c2a1-...",
    "status": "Task submitted"
}`,A="celery -A config worker --loglevel=info",q=`[INFO/MainProcess] Connected to redis://localhost:6379/0
[INFO/MainProcess] celery@computer ready.
[INFO/MainProcess] Task received: chatbot.tasks.generate_report
[INFO/MainProcess] Task succeeded: chatbot.tasks.generate_report`,B=`from celery.result import AsyncResult
from django.http import JsonResponse

def check_task(request, task_id):
    task = AsyncResult(task_id)

    return JsonResponse({
        'task_id': task_id,
        'status': task.status,
        'result': task.result if task.successful() else None
    })`,L=`from django.urls import path
from .views import start_report, check_task

urlpatterns = [
    path('reports/start/', start_report),
    path('tasks/<str:task_id>/', check_task),
]`,N=`from celery import shared_task

@shared_task(
    bind=True,
    max_retries=3,
    default_retry_delay=10
)
def generate_report(self, user_id):
    try:
        # Perform the report generation
        return {
            'user_id': user_id,
            'status': 'Report generated'
        }

    except Exception as error:
        raise self.retry(exc=error)`,U=`Vue Frontend
     |
     | POST /reports/start/
     v
Django REST API
     |
     | Submit task
     v
Redis Broker
     |
     | Task message
     v
Celery Worker
     |
     | Process task
     v
PostgreSQL
     |
     | Save result
     v
Vue Frontend
     |
     | GET /tasks/{task_id}/
     v
Django REST API
     |
     v
Display Task Status`,z=b({__name:"BackgroundProcessing",setup(_){const p=[{label:"Synchronous Processing",values:["The task runs during the HTTP request.","The client waits until processing finishes."]},{label:"Background Processing",values:["The task is submitted to a separate worker.","The client can receive an immediate acknowledgment while processing continues."]}],m=[{label:"Document Processing",values:["Extracting text from uploaded files and preparing documents."]},{label:"AI Content Generation",values:["Generating lengthy reports or processing large amounts of content."]},{label:"Email Notifications",values:["Sending confirmation emails after a user performs an action."]},{label:"Data Processing",values:["Processing large datasets or performing complex calculations."]},{label:"Scheduled Tasks",values:["Running recurring jobs such as cleanup and periodic maintenance."]}],g=[{label:"Task Producer",values:["The application component that creates and submits a task."]},{label:"Task Queue",values:["Stores tasks until a worker is ready to process them."]},{label:"Worker",values:["A separate process that retrieves and executes tasks."]},{label:"Result Backend",values:["Stores task results and execution states when result tracking is configured."]},{label:"Message Broker",values:["Allows the application and workers to exchange task messages."]}],k=[{label:"PENDING",values:["The task is waiting to be executed or its state is not yet known."]},{label:"STARTED",values:["The worker has started executing the task, if task-start tracking is enabled."]},{label:"SUCCESS",values:["The task completed successfully."]},{label:"FAILURE",values:["The task raised an exception and failed."]},{label:"RETRY",values:["The task is scheduled for another execution attempt."]}],f=[{label:"Task Duration",values:["Long-running tasks should be designed with suitable execution limits and monitoring."]},{label:"Retries",values:["Temporary failures may be handled through controlled retry attempts."]},{label:"Duplicate Execution",values:["Tasks may be executed more than once, so important operations should be designed to be safe to repeat."]},{label:"Task Results",values:["Store important results in the application database when they must be retained."]},{label:"Security",values:["Validate task inputs and restrict access to task status and result endpoints."]}];return(F,e)=>(T(),w(h,null,{default:a(()=>[n("div",v,[e[65]||(e[65]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:c,alt:"Background Processing",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[66]||(e[66]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Background Processing ")],-1)),s(o,null,{default:a(()=>[e[1]||(e[1]=t(" Some operations in a web application take longer to complete than ordinary requests. For example, generating a lengthy AI report, processing an uploaded document, or analyzing a large dataset may require several seconds or even minutes. If the backend performs these operations directly inside an HTTP request, the user must wait until the operation finishes before receiving the final response. To handle these situations more efficiently, applications can use ",-1)),s(u,null,{default:a(()=>[...e[0]||(e[0]=[t("Background Processing",-1)])]),_:1}),e[2]||(e[2]=t(" . ",-1))]),_:1}),s(o,null,{default:a(()=>[...e[3]||(e[3]=[t(" Background processing allows an application to execute tasks independently of the main request-response workflow. Instead of making the user wait for the entire operation, the backend can submit a task to a separate process and return an acknowledgment immediately. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[4]||(e[4]=[t("Understanding Synchronous Processing",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[5]||(e[5]=[t(" In synchronous processing, the application performs an operation and waits for it to finish before continuing. Consider a user requesting a report from a web application. The backend generates the report before returning the HTTP response. ",-1)])]),_:1}),s(l,{language:"text",code:x}),s(o,null,{default:a(()=>[...e[6]||(e[6]=[t(" If report generation takes 20 seconds, the user may need to wait approximately that long before receiving the response. This approach is suitable for operations that finish quickly, but it may become problematic for lengthy tasks. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[7]||(e[7]=[t("Understanding Background Processing",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[8]||(e[8]=[t(" With background processing, the application submits the task to a separate worker instead of executing it directly inside the request. ",-1)])]),_:1}),s(l,{language:"text",code:C}),s(o,null,{default:a(()=>[...e[9]||(e[9]=[t(" The backend can return a task identifier immediately. The worker continues processing the task independently. The frontend can then check the task's status or retrieve its result when processing is complete. ",-1)])]),_:1}),s(i,{headers:["Approach","Behavior"],rows:p}),s(r,null,{default:a(()=>[...e[10]||(e[10]=[t("Common Uses of Background Processing",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[11]||(e[11]=[t(" Background processing is useful whenever an operation does not need to finish before the application can acknowledge the user's request. ",-1)])]),_:1}),s(i,{headers:["Use Case","Example"],rows:m}),s(o,null,{default:a(()=>[...e[12]||(e[12]=[t(" In an AI-powered application, background processing can be useful for generating lengthy reports, analyzing uploaded documents, processing batches of prompts, or performing other tasks that may take a significant amount of time. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[13]||(e[13]=[t("Understanding Task Queues",-1)])]),_:1}),s(o,null,{default:a(()=>[e[15]||(e[15]=t(" A ",-1)),s(u,null,{default:a(()=>[...e[14]||(e[14]=[t("Task Queue",-1)])]),_:1}),e[16]||(e[16]=t(" is a system that stores tasks waiting to be processed. Imagine a restaurant kitchen. Customers place orders, and the kitchen receives those orders in a queue. Cooks process the orders as they become available. A task queue works similarly. The application submits tasks, and workers retrieve them when they are ready to execute them. ",-1))]),_:1}),s(o,null,{default:a(()=>[...e[17]||(e[17]=[t(" A typical background processing system contains several components: ",-1)])]),_:1}),s(i,{headers:["Component","Purpose"],rows:g}),s(o,null,{default:a(()=>[...e[18]||(e[18]=[t(" These components work together to separate task submission from task execution. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[19]||(e[19]=[t("Introduction to Celery",-1)])]),_:1}),s(o,null,{default:a(()=>[s(u,null,{default:a(()=>[...e[20]||(e[20]=[t("Celery",-1)])]),_:1}),e[21]||(e[21]=t(" is a distributed task queue that allows Python applications to execute tasks outside the main request-response process. It is commonly used with Django for background jobs, scheduled tasks, and other operations that should run independently. ",-1))]),_:1}),s(o,null,{default:a(()=>[...e[22]||(e[22]=[t(" Celery commonly works with a message broker such as Redis or RabbitMQ. The broker stores task messages until a Celery worker retrieves and executes them. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[23]||(e[23]=[t("Installing Celery and Redis",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[24]||(e[24]=[t(" For our example, we will use Celery with Redis as the message broker. Install the required Python packages inside the project's virtual environment. ",-1)])]),_:1}),s(l,{language:"bash",code:R}),s(o,null,{default:a(()=>[...e[25]||(e[25]=[t(" Celery is responsible for task management and execution, while Redis acts as the message broker. Redis must also be installed and running as a separate service. Installing the Python package does not automatically install or start the Redis server. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[26]||(e[26]=[t("Configuring Celery in Django",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[27]||(e[27]=[t(" Inside the Django project package, create a file named ",-1),n("code",null,"celery.py",-1),t(". This file initializes Celery and connects it to the Django settings. ",-1)])]),_:1}),s(l,{language:"python",code:I}),s(o,null,{default:a(()=>[...e[28]||(e[28]=[t(" Replace ",-1),n("code",null,"config",-1),t(" with the actual name of your Django project package if it is different. The ",-1),n("code",null,"autodiscover_tasks()",-1),t(" method allows Celery to discover task modules inside installed Django applications. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[29]||(e[29]=[t(" Next, configure the broker and result backend in Django's ",-1),n("code",null,"settings.py",-1),t(". ",-1)])]),_:1}),s(l,{language:"python",code:P}),s(o,null,{default:a(()=>[...e[30]||(e[30]=[t(" Redis database 0 is used for task messages, while Redis database 1 is used for task results. These are separate logical databases within the same Redis server. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[31]||(e[31]=[t(" Finally, import the Celery application inside the project's ",-1),n("code",null,"__init__.py",-1),t(" file. ",-1)])]),_:1}),s(l,{language:"python",code:S}),s(o,null,{default:a(()=>[...e[32]||(e[32]=[t(" This makes the Celery application available when Django initializes the project package. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[33]||(e[33]=[t("Creating a Background Task",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[34]||(e[34]=[t(" Celery tasks are commonly defined in a file named ",-1),n("code",null,"tasks.py",-1),t(" inside a Django application. Let's create a simple task that simulates generating a report. ",-1)])]),_:1}),s(l,{language:"python",code:j}),s(o,null,{default:a(()=>[...e[35]||(e[35]=[t(" The ",-1),n("code",null,"@shared_task",-1),t(" decorator marks the function as a Celery task. The ",-1),n("code",null,"time.sleep(5)",-1),t(" statement simulates a task that takes five seconds to complete. It is included only for demonstration purposes. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[36]||(e[36]=[t(" Unlike an ordinary function call, the task can be submitted to a worker through Celery without executing it directly in the Django view. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[37]||(e[37]=[t("Submitting a Task from a Django View",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[38]||(e[38]=[t(" To submit a background task, import the task into a Django view and call its ",-1),n("code",null,"delay()",-1),t(" method. ",-1)])]),_:1}),s(l,{language:"python",code:E}),s(o,null,{default:a(()=>[...e[39]||(e[39]=[t(" The ",-1),n("code",null,"delay()",-1),t(" method sends the task to the configured message broker. Instead of waiting for the report to finish, the view immediately returns a task identifier and a submission status. ",-1)])]),_:1}),s(d,{output:D}),s(o,null,{default:a(()=>[...e[40]||(e[40]=[t(" The task identifier can be used later to check the task's execution status. Notice that the response only confirms that the task was submitted. It does not mean that the report has already been generated. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[41]||(e[41]=[t("Running a Celery Worker",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[42]||(e[42]=[t(" Submitting tasks is only one part of the process. A worker must also be running to retrieve and execute tasks from the queue. Open another terminal in the Django project directory and execute the following command. ",-1)])]),_:1}),s(l,{language:"bash",code:A}),s(o,null,{default:a(()=>[...e[43]||(e[43]=[t(" The ",-1),n("code",null,"-A",-1),t(" option identifies the Celery application, while ",-1),n("code",null,"--loglevel=info",-1),t(" controls the amount of information displayed in the terminal. The worker remains active and waits for incoming tasks. ",-1)])]),_:1}),s(d,{output:q}),s(o,null,{default:a(()=>[...e[44]||(e[44]=[t(" The output is an example of what a worker log may look like. It shows that the worker connected to Redis, received a task, and completed its execution. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[45]||(e[45]=[t("Understanding Task States",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[46]||(e[46]=[t(" Background tasks do not always finish immediately. An application needs a way to determine whether a task is waiting, running, completed, or failed. Celery provides task states that represent different stages of execution. ",-1)])]),_:1}),s(i,{headers:["State","Description"],rows:k}),s(o,null,{default:a(()=>[...e[47]||(e[47]=[t(" These states help the frontend determine what message or interface to display to the user. For example, the application may display a loading indicator while a task is pending or running, then display the result when the task succeeds. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[48]||(e[48]=[t("Checking Task Status",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[49]||(e[49]=[t(" We can create another Django view that receives a task identifier and retrieves its current state using Celery's ",-1),n("code",null,"AsyncResult",-1),t(". ",-1)])]),_:1}),s(l,{language:"python",code:B}),s(o,null,{default:a(()=>[...e[50]||(e[50]=[t(" The ",-1),n("code",null,"AsyncResult",-1),t(" class allows the application to inspect a task using its identifier. The example returns the result only when the task has completed successfully. In a production application, task status endpoints should verify that the requesting user is authorized to access the requested task. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[51]||(e[51]=[t("Registering Task Endpoints",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[52]||(e[52]=[t(" We can register both the task submission endpoint and the task status endpoint inside the application's ",-1),n("code",null,"urls.py",-1),t(". ",-1)])]),_:1}),s(l,{language:"python",code:L}),s(o,null,{default:a(()=>[...e[53]||(e[53]=[t(" The frontend can submit a report request through ",-1),n("code",null,"/reports/start/",-1),t(" and check its status through ",-1),n("code",null,"/tasks/{'{task_id}'}/",-1),t(". ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[54]||(e[54]=[t("Handling Task Failures and Retries",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[55]||(e[55]=[t(" Background tasks may fail because of temporary network problems, unavailable services, or unexpected errors. Celery provides retry functionality that allows a task to attempt execution again when a failure occurs. ",-1)])]),_:1}),s(l,{language:"python",code:N}),s(o,null,{default:a(()=>[...e[56]||(e[56]=[t(" In this example: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("code",null,"bind=True"),t(" gives the task access to its task instance through "),n("code",null,"self"),t(".")]),n("li",null,[n("code",null,"max_retries=3"),t(" allows up to three retry attempts.")]),n("li",null,[n("code",null,"default_retry_delay=10"),t(" sets the default delay between retries to ten seconds.")]),n("li",null,[n("code",null,"self.retry()"),t(" requests another execution attempt.")])],-1),t(" Retries should be used for errors that may be temporary. Repeating an operation that will always fail does not solve the underlying problem. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[57]||(e[57]=[t(" Also, tasks should be designed to handle duplicate execution safely. For example, a task that sends an email should avoid sending the same notification multiple times if it is retried after an uncertain failure. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[58]||(e[58]=[t("Background Processing in an AI Application",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[59]||(e[59]=[t(" We can now combine the concepts into a simplified architecture for an AI-powered web application. ",-1)])]),_:1}),s(l,{language:"text",code:U}),s(o,null,{default:a(()=>[...e[60]||(e[60]=[t(" The Vue frontend submits a task through Django. Django places the task in Redis, and a Celery worker retrieves and processes it. When the operation finishes, the application stores the result in PostgreSQL. The frontend can periodically check the task status to determine whether the result is ready. ",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[61]||(e[61]=[t(" For long-running AI generation, background processing is not automatically a replacement for response streaming. Streaming is useful when users should see generated content as it arrives. Background processing is useful when a task should continue independently of the original HTTP request. Depending on the application, both techniques can also be combined. ",-1)])]),_:1}),s(r,null,{default:a(()=>[...e[62]||(e[62]=[t("Important Considerations",-1)])]),_:1}),s(i,{headers:["Consideration","Description"],rows:f}),s(r,null,{default:a(()=>[...e[63]||(e[63]=[t("Summary",-1)])]),_:1}),s(o,null,{default:a(()=>[...e[64]||(e[64]=[t(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Background processing executes tasks independently of the main HTTP request."),n("li",null,"Synchronous processing requires the client to wait for the operation to finish."),n("li",null,"Task queues store tasks until workers are ready to execute them."),n("li",null,"Celery is a distributed task queue commonly used with Django."),n("li",null,"Redis can act as a message broker for Celery."),n("li",null,[t("The "),n("code",null,"@shared_task"),t(" decorator defines a background task.")]),n("li",null,[t("The "),n("code",null,"delay()"),t(" method submits a task to the broker.")]),n("li",null,"Task identifiers allow applications to check execution status."),n("li",null,"Celery supports task retries for handling certain failures."),n("li",null,"Background processing is useful for lengthy AI operations and other time-consuming tasks.")],-1)])]),_:1}),s(y,{to:"/academia/student/classes/elective3-timeouts-and-rate-limiting"})])]),_:1}))}});export{z as default};

import{_ as m}from"./logo-C9ImmdpX.js";import{_ as d}from"./MainLayout.vue_vue_type_script_setup_true_lang-CDCZL-bD.js";import{T as o,a as s,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-ByHyYtG_.js";import{T as u}from"./TopicTerm-Bt_DEisM.js";import{C as i}from"./CodeBlock-bZN1puOf.js";import{O as a}from"./OutputBlock-Cz3Nj6CK.js";import{_ as p}from"./TableBlock.vue_vue_type_script_setup_true_lang-Cxw-iObO.js";import{d as g,h as c,i as l,o as y,a as n,q as r,g as t}from"./index-DJwcHVGb.js";const h={class:"max-w-4xl mx-auto"},b=`import ollama

try:
    response = ollama.chat(
        model='llama3.2',
        messages=[
            {
                'role': 'user',
                'content': 'What is Python?'
            }
        ]
    )

    print(response.message.content)

except ollama.ResponseError as error:
    print("Ollama error:", error.error)`,x="Ollama error: model 'llama3.2' not found",T=`try:
    number = int("hello")
    print(number)

except ValueError:
    print("Invalid number entered.")`,w="Invalid number entered.",v=`import ollama

try:
    response = ollama.chat(
        model='unknown-model',
        messages=[
            {
                'role': 'user',
                'content': 'Hello!'
            }
        ]
    )

except ollama.ResponseError as error:
    print("Status code:", error.status_code)
    print("Error message:", error.error)`,q=`Status code: 404
Error message: model 'unknown-model' not found`,E=`import requests

url = "http://localhost:11434/api/generate"

try:
    response = requests.post(
        url,
        json={
            "model": "llama3.2",
            "prompt": "What is Python?",
            "stream": False
        },
        timeout=60
    )

    response.raise_for_status()

    result = response.json()
    print(result["response"])

except requests.exceptions.ConnectionError:
    print("Cannot connect to Ollama.")

except requests.exceptions.Timeout:
    print("The request took too long.")

except requests.exceptions.HTTPError as error:
    print("HTTP error:", error)`,R="Cannot connect to Ollama.",O=`import requests

url = "http://localhost:11434/api/generate"

try:
    response = requests.post(
        url,
        json={
            "model": "llama3.2",
            "prompt": "Explain artificial intelligence.",
            "stream": False
        },
        timeout=60
    )

    response.raise_for_status()

    print(response.json()["response"])

except requests.exceptions.Timeout:
    print("The AI model did not respond within 60 seconds.")`,P="The AI model did not respond within 60 seconds.",k=`import requests
import time

url = "http://localhost:11434/api/generate"

for attempt in range(3):
    try:
        response = requests.post(
            url,
            json={
                "model": "llama3.2",
                "prompt": "What is machine learning?",
                "stream": False
            },
            timeout=60
        )

        response.raise_for_status()

        print(response.json()["response"])
        break

    except requests.exceptions.RequestException as error:
        print("Attempt", attempt + 1, "failed:", error)

        if attempt < 2:
            time.sleep(2)
        else:
            print("Unable to get a response after 3 attempts.")`,I=`Attempt 1 failed: Connection error
Attempt 2 failed: Connection error
Attempt 3 failed: Connection error
Unable to get a response after 3 attempts.`,A=`import time

for attempt in range(4):
    try:
        print("Sending request...")
        # Place the Ollama request here.
        break

    except Exception:
        wait_time = 2 ** attempt

        print("Request failed.")
        print("Retrying in", wait_time, "seconds...")

        time.sleep(wait_time)`,H=`Request failed.
Retrying in 1 seconds...

Request failed.
Retrying in 2 seconds...

Request failed.
Retrying in 4 seconds...`,C=`import requests
import time

url = "http://localhost:11434/api/generate"

def ask_ai(prompt):
    data = {
        "model": "llama3.2",
        "prompt": prompt,
        "stream": False
    }

    for attempt in range(3):
        try:
            response = requests.post(
                url,
                json=data,
                timeout=60
            )

            response.raise_for_status()

            return response.json()["response"]

        except requests.exceptions.Timeout:
            print("Request timed out.")

        except requests.exceptions.ConnectionError:
            print("Cannot connect to Ollama.")

        except requests.exceptions.HTTPError as error:
            print("HTTP error:", error)
            return None

        if attempt < 2:
            print("Retrying...")
            time.sleep(2)

    print("Request failed after 3 attempts.")
    return None


answer = ask_ai("What is artificial intelligence?")

if answer is not None:
    print("AI:", answer)`,W=`AI: Artificial intelligence is a field of computer science
that focuses on creating systems capable of performing
tasks that normally require human intelligence.`,G=g({__name:"ErrorHandlingTimeOutRetries",setup(j){return(S,e)=>(y(),c(d,null,{default:l(()=>[n("div",h,[e[59]||(e[59]=n("div",{class:"w-full flex justify-center mb-6"},[n("img",{src:m,alt:"Error Handling, Timeouts, and Retries",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[60]||(e[60]=n("div",{class:"text-center mb-4"},[n("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),n("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Error Handling, Timeouts, and Retries ")],-1)),r(o,null,{default:l(()=>[...e[0]||(e[0]=[t(" When developing applications that communicate with AI models, not every request will succeed. The Ollama server might be unavailable, a requested model might not exist, or generating a response might take longer than expected. Developers need to anticipate these situations and make sure their applications can handle errors without unexpectedly terminating. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[1]||(e[1]=[t("1. Understanding Errors in AI Applications",-1)])]),_:1}),r(o,null,{default:l(()=>[e[3]||(e[3]=t(" An ",-1)),r(u,null,{default:l(()=>[...e[2]||(e[2]=[t("error",-1)])]),_:1}),e[4]||(e[4]=t(" occurs when an operation cannot complete as expected. In an AI application, errors may happen while sending a request, processing the request, or receiving a response from Ollama. ",-1))]),_:1}),r(o,null,{default:l(()=>[...e[5]||(e[5]=[t(" Some common problems include: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Ollama is not running."),n("li",null,"The requested model is not installed."),n("li",null,"The server returns an unsuccessful HTTP status code."),n("li",null,"The request takes too long to complete."),n("li",null,"The network connection is interrupted."),n("li",null,"The application sends invalid request data.")],-1)])]),_:1}),r(o,null,{default:l(()=>[...e[6]||(e[6]=[t(" If these situations are not handled properly, the application may stop running or fail to provide a useful response to the user. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[7]||(e[7]=[t("2. Introduction to Exception Handling",-1)])]),_:1}),r(o,null,{default:l(()=>[r(u,null,{default:l(()=>[...e[8]||(e[8]=[t("Exception handling",-1)])]),_:1}),e[9]||(e[9]=t(" is a programming technique used to detect and manage errors while a program is running. Python provides ",-1)),e[10]||(e[10]=n("b",null,"try",-1)),e[11]||(e[11]=t(" and ",-1)),e[12]||(e[12]=n("b",null,"except",-1)),e[13]||(e[13]=t(" blocks to handle exceptions without immediately terminating the application. ",-1))]),_:1}),r(i,{language:"python",code:T}),r(a,{output:w}),r(o,null,{default:l(()=>[...e[14]||(e[14]=[t(" In this example: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("b",null,"try"),t(" contains the code that might produce an error.")]),n("li",null,[n("b",null,"except"),t(" specifies how the application should respond when a particular exception occurs.")]),n("li",null,[n("b",null,"ValueError"),t(' occurs because the text "hello" cannot be converted into an integer.')])],-1)])]),_:1}),r(o,null,{default:l(()=>[...e[15]||(e[15]=[t(" Instead of terminating unexpectedly, the program catches the exception and displays a message. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[16]||(e[16]=[t("3. Handling Errors from the Ollama Python Library",-1)])]),_:1}),r(o,null,{default:l(()=>[e[18]||(e[18]=t(" The Ollama Python library provides ",-1)),r(u,null,{default:l(()=>[...e[17]||(e[17]=[t("ResponseError",-1)])]),_:1}),e[19]||(e[19]=t(" for handling errors returned by the Ollama server. For example, a request may fail if the specified model does not exist. ",-1))]),_:1}),r(i,{language:"python",code:b}),r(a,{output:x}),r(o,null,{default:l(()=>[...e[20]||(e[20]=[t(" The ",-1),n("b",null,"except ollama.ResponseError",-1),t(" block catches an error returned by the server. The ",-1),n("b",null,"error.error",-1),t(" property provides the error message. ",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[21]||(e[21]=[t(" You can also inspect the HTTP status code: ",-1)])]),_:1}),r(i,{language:"python",code:v}),r(a,{output:q}),r(o,null,{default:l(()=>[...e[22]||(e[22]=[t(" In this example, status code 404 indicates that the requested model could not be found. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[23]||(e[23]=[t("4. Handling HTTP Request Errors",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[24]||(e[24]=[t(" When using the Requests library, different exception types are available for handling HTTP communication problems. ",-1)])]),_:1}),r(p,{headers:["Exception","Description"],rows:[{label:"ConnectionError",values:["The application cannot establish a connection to the server."]},{label:"Timeout",values:["The server does not respond within the configured time limit."]},{label:"HTTPError",values:["The server returns an unsuccessful HTTP status code when raise_for_status() is used."]},{label:"RequestException",values:["The base exception class for Requests-related errors."]}]}),r(o,null,{default:l(()=>[...e[25]||(e[25]=[t(" The following example demonstrates how to handle common request errors when communicating with Ollama: ",-1)])]),_:1}),r(i,{language:"python",code:E}),r(a,{output:R}),r(o,null,{default:l(()=>[...e[26]||(e[26]=[t(" The application handles connection problems, timeouts, and HTTP errors separately. This makes it easier to identify what went wrong and provide an appropriate message. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[27]||(e[27]=[t("5. Understanding Request Timeouts",-1)])]),_:1}),r(o,null,{default:l(()=>[e[29]||(e[29]=t(" A ",-1)),r(u,null,{default:l(()=>[...e[28]||(e[28]=[t("timeout",-1)])]),_:1}),e[30]||(e[30]=t(" specifies how long an application should wait for a response before considering the request unsuccessful. AI models can take time to generate responses, especially when using larger models or computers with limited resources. Without a timeout, an application may wait longer than intended. ",-1))]),_:1}),r(o,null,{default:l(()=>[...e[31]||(e[31]=[t(" When using Requests, a timeout can be specified through the ",-1),n("b",null,"timeout",-1),t(" parameter. ",-1)])]),_:1}),r(i,{language:"python",code:O}),r(a,{output:P}),r(o,null,{default:l(()=>[...e[32]||(e[32]=[t(" In this example, Python waits for up to 60 seconds. If the request exceeds the configured timeout, a ",-1),n("b",null,"requests.exceptions.Timeout",-1),t(" exception is raised. ",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[33]||(e[33]=[t(" The timeout value should depend on the application. A simple question may require only a short wait, while a large model generating a long response may need more time. ",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[34]||(e[34]=[t(" In Requests, a single numeric timeout applies to connection and read operations. It is not necessarily a strict overall deadline for the entire operation. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[35]||(e[35]=[t("6. What Are Retries?",-1)])]),_:1}),r(o,null,{default:l(()=>[r(u,null,{default:l(()=>[...e[36]||(e[36]=[t("Retry",-1)])]),_:1}),e[37]||(e[37]=t(" is the process of attempting an operation again after it fails. For example, if Python cannot connect to Ollama because the server is temporarily unavailable, the application can wait for a few seconds and try again. ",-1))]),_:1}),r(o,null,{default:l(()=>[...e[38]||(e[38]=[t(" Retries are useful when errors are temporary, such as: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Temporary network interruptions."),n("li",null,"Short-lived server availability problems."),n("li",null,"Temporary service overload."),n("li",null,"Unexpected connection failures.")],-1)])]),_:1}),r(o,null,{default:l(()=>[...e[39]||(e[39]=[t(" However, retrying will not automatically solve every error. For example, repeatedly requesting a model that does not exist will continue to fail until the model name or installation is corrected. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[40]||(e[40]=[t("7. Implementing a Simple Retry Mechanism",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[41]||(e[41]=[t(" Python can use a loop to repeat a failed request a limited number of times. The following example attempts to send a request up to three times before giving up. ",-1)])]),_:1}),r(i,{language:"python",code:k}),r(a,{output:I}),r(o,null,{default:l(()=>[...e[42]||(e[42]=[t(" The program works as follows: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("b",null,"range(3)"),t(" allows a maximum of three attempts.")]),n("li",null,[n("b",null,"try"),t(" attempts to send the request.")]),n("li",null,[n("b",null,"except"),t(" catches request-related errors.")]),n("li",null,[n("b",null,"time.sleep(2)"),t(" waits two seconds before another attempt.")]),n("li",null,"After the final failure, the application displays an error message.")],-1)])]),_:1}),r(o,null,{default:l(()=>[...e[43]||(e[43]=[t(" This example is useful for understanding retry logic. In production applications, retries should be limited to appropriate temporary errors rather than every possible failure. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[44]||(e[44]=[t("8. Understanding Exponential Backoff",-1)])]),_:1}),r(o,null,{default:l(()=>[e[46]||(e[46]=t(" When a server is temporarily overloaded, immediately repeating requests can make the problem worse. ",-1)),r(u,null,{default:l(()=>[...e[45]||(e[45]=[t("Exponential backoff",-1)])]),_:1}),e[47]||(e[47]=t(" is a retry strategy that gradually increases the waiting time between attempts. ",-1))]),_:1}),r(o,null,{default:l(()=>[e[48]||(e[48]=t(" For example, the application may wait: ",-1)),r(p,{headers:["Attempt","Waiting Time"],rows:[{label:"1st retry",values:["1 second"]},{label:"2nd retry",values:["2 seconds"]},{label:"3rd retry",values:["4 seconds"]},{label:"4th retry",values:["8 seconds"]}]})]),_:1}),r(o,null,{default:l(()=>[...e[49]||(e[49]=[t(" This approach gives the server more time to recover before receiving another request. ",-1)])]),_:1}),r(i,{language:"python",code:A}),r(a,{output:H}),r(o,null,{default:l(()=>[...e[50]||(e[50]=[t(" The expression ",-1),n("b",null,"2 ** attempt",-1),t(" calculates the waiting time by raising 2 to the current attempt number. Real applications often add random variation, called jitter, to avoid multiple clients retrying at exactly the same time. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[51]||(e[51]=[t("9. Combining Error Handling, Timeouts, and Retries",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[52]||(e[52]=[t(" These techniques can be combined to make a Python application more reliable. The following example creates an ",-1),n("b",null,"ask_ai()",-1),t(" function that communicates with Ollama, handles common errors, and retries temporary failures. ",-1)])]),_:1}),r(i,{language:"python",code:C}),r(a,{output:W}),r(o,null,{default:l(()=>[...e[53]||(e[53]=[t(" Let's examine the important parts: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"The function accepts a prompt from the user."),n("li",null,"The application sends a POST request to Ollama."),n("li",null,"The timeout limits how long it waits for the request."),n("li",null,[n("b",null,"raise_for_status()"),t(" detects unsuccessful HTTP responses.")]),n("li",null,"Connection and timeout errors are handled separately."),n("li",null,"The application retries failed requests up to three times."),n("li",null,"If all attempts fail, the function returns None.")],-1)])]),_:1}),r(o,null,{default:l(()=>[...e[54]||(e[54]=[t(" Notice that HTTP errors are not retried in this example. Some errors require correcting the request or model configuration instead of simply trying again. ",-1)])]),_:1}),r(s,null,{default:l(()=>[...e[55]||(e[55]=[t("10. Best Practices for Reliable AI Applications",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[56]||(e[56]=[t(" When developing applications that communicate with Ollama, consider the following practices: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,[n("b",null,"Handle exceptions:"),t(" Anticipate possible errors instead of allowing the application to terminate unexpectedly. ")]),n("li",null,[n("b",null,"Set appropriate timeouts:"),t(" Avoid waiting indefinitely for a response.")]),n("li",null,[n("b",null,"Limit retries:"),t(" Avoid repeating failed requests without a stopping condition.")]),n("li",null,[n("b",null,"Use backoff:"),t(" Give temporarily unavailable services time to recover.")]),n("li",null,[n("b",null,"Provide useful messages:"),t(" Inform users when an operation fails.")]),n("li",null,[n("b",null,"Log errors:"),t(" Keep records that help developers identify and investigate problems.")]),n("li",null,[n("b",null,"Avoid unnecessary retries:"),t(" Correct invalid requests and missing model configurations instead of repeatedly sending them. ")])],-1)])]),_:1}),r(s,null,{default:l(()=>[...e[57]||(e[57]=[t("Summary",-1)])]),_:1}),r(o,null,{default:l(()=>[...e[58]||(e[58]=[t(" In this topic, you learned that: ",-1),n("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[n("li",null,"Errors can occur when Python communicates with Ollama."),n("li",null,"Python uses try and except blocks for exception handling."),n("li",null,"Ollama's Python library provides ResponseError for server errors."),n("li",null,"Requests provides exceptions for connection, timeout, and HTTP errors."),n("li",null,"Timeouts limit how long an application waits for a response."),n("li",null,"Retries allow applications to attempt failed operations again."),n("li",null,"Exponential backoff gradually increases the waiting time between retries."),n("li",null,"Combining error handling, timeouts, and retries improves application reliability.")],-1)])]),_:1}),r(f,{to:"/academia/student/classes/elective3",text:"Finish"})])]),_:1}))}});export{G as default};

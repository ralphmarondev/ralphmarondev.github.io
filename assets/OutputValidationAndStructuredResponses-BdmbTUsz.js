import{_ as p}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-CDCZL-bD.js";import{T as o,a as i,_ as c}from"./TopicNext.vue_vue_type_script_setup_true_lang-ByHyYtG_.js";import{T as u}from"./TopicTerm-Bt_DEisM.js";import{C as l}from"./CodeBlock-bZN1puOf.js";import{O as r}from"./OutputBlock-Cz3Nj6CK.js";import{_ as f}from"./TableBlock.vue_vue_type_script_setup_true_lang-Cxw-iObO.js";import{d as h,h as g,i as a,o as v,a as s,q as n,g as t}from"./index-DJwcHVGb.js";const y={class:"max-w-4xl mx-auto"},N=`import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': 'Classify this message: The application is easy to use.'
        }
    ]
)

print(response['message']['content'])`,b=`The customer seems satisfied with the application.
They find it easy to use, which suggests a positive
experience.`,O=`import ollama

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': """
            Classify this customer message as Positive,
            Negative, or Neutral.

            Return the result as JSON with these fields:
            sentiment and reason.

            Message: The application is easy to use.
            """
        }
    ],
    format='json'
)

print(response['message']['content'])`,w=`{
  "sentiment": "Positive",
  "reason": "The customer finds the application easy to use."
}`,x=`import json

json_response = """
{
    "sentiment": "Positive",
    "reason": "The customer finds the application easy to use."
}
"""

data = json.loads(json_response)

print(data['sentiment'])
print(data['reason'])`,S=`Positive
The customer finds the application easy to use.`,J=`import ollama

response_schema = {
    "type": "object",
    "properties": {
        "sentiment": {
            "type": "string",
            "enum": ["Positive", "Negative", "Neutral"]
        },
        "reason": {
            "type": "string"
        }
    },
    "required": ["sentiment", "reason"],
    "additionalProperties": False
}

response = ollama.chat(
    model='llama3.2',
    messages=[
        {
            'role': 'user',
            'content': """
            Classify this customer message.

            Message: The application is easy to use.
            """
        }
    ],
    format=response_schema
)

print(response['message']['content'])`,T=`import json

def validate_response(content):
    try:
        data = json.loads(content)
    except json.JSONDecodeError:
        return None

    if not isinstance(data, dict):
        return None

    if 'sentiment' not in data or 'reason' not in data:
        return None

    if data['sentiment'] not in [
        'Positive',
        'Negative',
        'Neutral'
    ]:
        return None

    if not isinstance(data['reason'], str):
        return None

    return data


result = validate_response(
    response['message']['content']
)

if result is not None:
    print('Valid response')
    print(result['sentiment'])
    print(result['reason'])
else:
    print('Invalid AI response')`,P=`Valid response
Positive
The customer finds the application easy to use.`,j=`import json
import ollama

def classify_message(message):
    try:
        response = ollama.chat(
            model='llama3.2',
            messages=[
                {
                    'role': 'user',
                    'content': f"""
                    Classify this message as Positive,
                    Negative, or Neutral.

                    Return JSON with sentiment and reason.

                    Message: {message}
                    """
                }
            ],
            format='json'
        )

        content = response['message']['content']
        data = json.loads(content)

        allowed_labels = [
            'Positive',
            'Negative',
            'Neutral'
        ]

        if not isinstance(data, dict):
            return None

        if data.get('sentiment') not in allowed_labels:
            return None

        if not isinstance(data.get('reason'), str):
            return None

        return data

    except json.JSONDecodeError:
        print('The model returned invalid JSON.')
        return None

    except ollama.ResponseError as error:
        print(f'Ollama error: {error.error}')
        return None


result = classify_message(
    'The application is easy to use.'
)

if result:
    print(result)`,I=`{
    'sentiment': 'Positive',
    'reason': 'The customer finds the application easy to use.'
}`,k=`
{
	"sentiment": "Positive",
	"reason": "The customer finds the application easy to use."
}`,M=h({__name:"OutputValidationAndStructuredResponses",setup(C){const d=[{label:"JSON parsing",values:["Check whether the response contains valid JSON."]},{label:"Required fields",values:["Check whether all expected properties are present."]},{label:"Data types",values:["Check whether values have the expected types."]},{label:"Allowed values",values:["Check whether values belong to an accepted set of options."]},{label:"Business rules",values:["Check whether the response makes sense for the application."]}];return(A,e)=>(v(),g(m,null,{default:a(()=>[s("div",y,[e[43]||(e[43]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:p,alt:"Output Validation and Structured Responses",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),e[44]||(e[44]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Output Validation and Structured Responses ")],-1)),n(o,null,{default:a(()=>[...e[0]||(e[0]=[t(" AI models generate responses based on the instructions they receive. However, their answers are not always returned in a format that an application can immediately use. Imagine a website that uses AI to classify customer feedback. The application expects a simple result containing a sentiment label and an explanation. Instead, the model might return a long paragraph with additional information. Although the answer may be understandable to a person, the application may have difficulty processing it automatically. To address this problem, developers use structured responses and output validation. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[1]||(e[1]=[t("Understanding Structured Responses",-1)])]),_:1}),n(o,null,{default:a(()=>[n(u,null,{default:a(()=>[...e[2]||(e[2]=[t("Structured response",-1)])]),_:1}),e[3]||(e[3]=t(" refers to an AI-generated answer that follows a predefined format, making it easier for an application to process and use the information. One common format is JSON (JavaScript Object Notation). JSON organizes information into properties and values that can be accessed programmatically. ",-1))]),_:1}),n(o,null,{default:a(()=>[...e[4]||(e[4]=[t(" Consider an application that classifies customer feedback. Instead of returning a paragraph, the model can provide a response containing two properties: ",-1),s("code",null,"sentiment",-1),t(" and ",-1),s("code",null,"reason",-1),t(". ",-1)])]),_:1}),n(l,{language:"json",code:k}),n(o,null,{default:a(()=>[...e[5]||(e[5]=[t(" The application can now access each property separately. For example, it can display the sentiment as a label and show the reason below it. This is particularly useful when integrating AI into websites, dashboards, chatbots, and other software applications. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[6]||(e[6]=[t("Why Output Formatting Matters",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[7]||(e[7]=[t(" Without a defined output format, the same request may produce different response structures. ",-1)])]),_:1}),n(l,{language:"python",code:N}),n(r,{output:b}),n(o,null,{default:a(()=>[...e[8]||(e[8]=[t(" The response is understandable, but extracting a specific classification from the paragraph may require additional processing. A structured response provides a more predictable format that the application can work with. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[9]||(e[9]=[t("Requesting JSON Responses from Ollama",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[10]||(e[10]=[t(" Ollama supports JSON output formatting through the ",-1),s("code",null,"format",-1),t(" parameter. Setting it to ",-1),s("code",null,"'json'",-1),t(" instructs the model to return its response in JSON format. The prompt should also clearly describe the information expected from the model. ",-1)])]),_:1}),n(l,{language:"python",code:O}),n(o,null,{default:a(()=>[...e[11]||(e[11]=[t(" Instead of receiving a paragraph, the model is asked to return a JSON object containing the sentiment and its explanation. ",-1)])]),_:1}),n(r,{output:w}),n(o,null,{default:a(()=>[...e[12]||(e[12]=[t(" The response is now organized into properties. However, requesting JSON does not automatically guarantee that every required field contains the correct value. The application must still validate the response. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[13]||(e[13]=[t("Parsing JSON Responses in Python",-1)])]),_:1}),n(o,null,{default:a(()=>[n(u,null,{default:a(()=>[...e[14]||(e[14]=[t("JSON parsing",-1)])]),_:1}),e[15]||(e[15]=t(" is the process of converting JSON-formatted text into a data structure that a programming language can understand and manipulate. Python provides the built-in ",-1)),e[16]||(e[16]=s("code",null,"json",-1)),e[17]||(e[17]=t(" module for working with JSON data. Its ",-1)),e[18]||(e[18]=s("code",null,"loads()",-1)),e[19]||(e[19]=t(" function converts a JSON string into Python objects, such as dictionaries and lists. ",-1))]),_:1}),n(l,{language:"python",code:x}),n(r,{output:S}),n(o,null,{default:a(()=>[...e[20]||(e[20]=[t(" Once parsed, the response becomes a Python dictionary. The application can access its values using their corresponding keys. For example, ",-1),s("code",null,"data['sentiment']",-1),t(" retrieves the sentiment, while ",-1),s("code",null,"data['reason']",-1),t(" retrieves the explanation. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[21]||(e[21]=[t("Using JSON Schema for Structured Output",-1)])]),_:1}),n(o,null,{default:a(()=>[e[23]||(e[23]=t(" Basic JSON formatting helps ensure that the model returns JSON, but an application may require a more specific structure. ",-1)),n(u,null,{default:a(()=>[...e[22]||(e[22]=[t("JSON Schema",-1)])]),_:1}),e[24]||(e[24]=t(" is a way to describe the expected structure of a JSON object, including its properties, data types, and allowed values. Ollama supports supplying a JSON Schema through the ",-1)),e[25]||(e[25]=s("code",null,"format",-1)),e[26]||(e[26]=t(" parameter in supported models and versions. ",-1))]),_:1}),n(l,{language:"python",code:J}),n(o,null,{default:a(()=>[...e[27]||(e[27]=[t(" Examine the schema used in the example: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,[s("code",null,"type"),t(" specifies that the response must be an object.")]),s("li",null,[s("code",null,"properties"),t(" defines the expected fields.")]),s("li",null,[s("code",null,"sentiment"),t(" must be one of three specified values.")]),s("li",null,[s("code",null,"reason"),t(" must contain a string.")]),s("li",null,[s("code",null,"required"),t(" identifies the fields that must be included.")]),s("li",null,[s("code",null,"additionalProperties: False"),t(" disallows extra fields.")])],-1)])]),_:1}),n(o,null,{default:a(()=>[...e[28]||(e[28]=[t(" By providing a schema, developers give the model a more specific structure to follow. This reduces the need to handle unexpected response formats. Keep in mind that structured output support can vary depending on the model and Ollama version. Applications should still validate the returned data. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[29]||(e[29]=[t("Validating AI-Generated Responses",-1)])]),_:1}),n(o,null,{default:a(()=>[n(u,null,{default:a(()=>[...e[30]||(e[30]=[t("Output validation",-1)])]),_:1}),e[31]||(e[31]=t(` is the process of checking whether an AI-generated response meets the application's requirements before it is accepted or used. A response may be valid JSON but still contain missing fields, incorrect data types, or values that the application does not recognize. For example, a sentiment classification application may only accept Positive, Negative, or Neutral. A response containing "Satisfied" may be understandable, but it does not follow the application's expected set of labels. `,-1))]),_:1}),n(o,null,{default:a(()=>[...e[32]||(e[32]=[t(" Common validation checks include: ",-1)])]),_:1}),n(f,{headers:["Validation Method","Purpose"],rows:d}),n(i,null,{default:a(()=>[...e[33]||(e[33]=[t("Validating a JSON Response in Python",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[34]||(e[34]=[t(" Python's ",-1),s("code",null,"json.loads()",-1),t(" can raise a ",-1),s("code",null,"JSONDecodeError",-1),t(" when the response is not valid JSON. Developers can use exception handling to prevent the application from crashing. After parsing, the application should also inspect the returned dictionary and verify its contents. ",-1)])]),_:1}),n(l,{language:"python",code:T}),n(r,{output:P}),n(o,null,{default:a(()=>[...e[35]||(e[35]=[t(" The function first attempts to parse the response. It then checks whether the result is a dictionary, whether the required fields exist, and whether their values meet the expected requirements. If any check fails, the function returns ",-1),s("code",null,"None",-1),t(" instead of accepting an invalid response. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[36]||(e[36]=[t("Handling Invalid Responses in Applications",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[37]||(e[37]=[t(" Validation should be part of the application's normal request process. It should not be treated as an optional step. Consider a customer feedback system. Before displaying a classification or saving it to a database, the application should verify that the model returned the expected data. ",-1)])]),_:1}),n(l,{language:"python",code:j}),n(r,{output:I}),n(o,null,{default:a(()=>[...e[38]||(e[38]=[t(" This example combines an Ollama request, JSON parsing, validation, and exception handling. If the response is invalid, the application does not proceed as if it were correct. It returns ",-1),s("code",null,"None",-1),t(", allowing the calling code to decide what to do next. In a real application, the developer may also log the error, request a corrected response, or display an appropriate message to the user. ",-1)])]),_:1}),n(i,null,{default:a(()=>[...e[39]||(e[39]=[t("Best Practices for Output Validation",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[40]||(e[40]=[t(" When integrating AI-generated data into an application, consider the following practices: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Define the expected response structure before sending a request."),s("li",null,"Use JSON formatting or JSON Schema when structured data is needed."),s("li",null,"Parse the response before accessing its properties."),s("li",null,"Check required fields and expected data types."),s("li",null,"Restrict values to the options accepted by the application."),s("li",null,"Handle parsing errors and invalid responses safely."),s("li",null,"Never assume that an AI-generated response is automatically correct.")],-1)])]),_:1}),n(i,null,{default:a(()=>[...e[41]||(e[41]=[t("Summary",-1)])]),_:1}),n(o,null,{default:a(()=>[...e[42]||(e[42]=[t(" In this topic, you learned that: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Structured responses organize AI-generated information into predictable formats such as JSON."),s("li",null,[t("Ollama supports JSON output through the "),s("code",null,"format"),t(" parameter.")]),s("li",null,"JSON Schema defines the expected properties, data types, and allowed values of a response."),s("li",null,[t("Python's "),s("code",null,"json.loads()"),t(" converts JSON text into Python objects.")]),s("li",null,"Output validation checks whether a response meets the application's requirements."),s("li",null,"Exception handling helps prevent invalid responses from crashing an application."),s("li",null,"AI-generated data should be validated before being displayed, processed, or stored.")],-1)])]),_:1}),n(c,{to:"/academia/student/classes/elective3-model-comparison-and-evaluation"})])]),_:1}))}});export{M as default};

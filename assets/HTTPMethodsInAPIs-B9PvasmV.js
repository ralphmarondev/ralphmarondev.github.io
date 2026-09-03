import{_ as p}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{_ as o}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-DdbMjyuT.js";import{C as r}from"./CodeBlock-CjPs9I9U.js";import{_ as d}from"./ImageBlock.vue_vue_type_script_setup_true_lang-BSHFhPQK.js";import{u as i}from"./djangoRestStore-GpspCYWa.js";import{d as g,p as u,l as a,m as x,o as m,a as t,t as y,k as s,b as l}from"./index-IauxWRt0.js";const b="July 26, 2026",T=`
GET /api/students/

Response:

[
    {
        "id": 1,
        "name": "Ralph",
        "age": 22
    }
]
`,P=`
POST /api/students/

Request Body:

{
    "name": "Maria",
    "age": 21
}


Response:

{
    "message": "Student created"
}
`,f=`
PUT /api/students/1/

Request Body:

{
    "name": "Ralph",
    "age": 23
}


Response:

{
    "message": "Student updated"
}
`,E=`
PATCH /api/students/1/

Request Body:

{
    "age": 24
}
`,R=`
DELETE /api/students/1/


Response:

{
    "message": "Student deleted"
}
`,h=g({__name:"HTTPMethodsInAPIs",setup(c){const n=i();return(w,e)=>(m(),u(p,{title:"Django REST Framework",navigation:x(n).sections},{default:a(()=>[e[2]||(e[2]=t("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," HTTP Methods in APIs ",-1)),t("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+y(b)),e[3]||(e[3]=t("p",{class:"text-gray-600 text-lg mb-6"}," HTTP methods define the type of operation a client wants to perform when communicating with an API. ",-1)),e[4]||(e[4]=t("p",{class:"text-gray-600 text-lg mb-6"}," Every API request contains an HTTP method that tells the server whether the client wants to retrieve, create, update, or delete data. ",-1)),s(o,null,{default:a(()=>[...e[0]||(e[0]=[l(" HTTP methods represent the actions that can be performed on resources in a REST API. ",-1)])]),_:1}),s(d,{src:"/tutorials/django/http-api-request-flow.png",alt:"HTTP API Request Flow",caption:"Figure 19.1 HTTP methods define communication between clients and APIs."}),e[5]||(e[5]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," REST API and CRUD Operations ",-1)),e[6]||(e[6]=t("p",{class:"text-gray-600 text-lg mb-4"}," Most REST APIs follow CRUD operations: ",-1)),e[7]||(e[7]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border px-4 py-2"}," CRUD Operation "),t("th",{class:"border px-4 py-2"}," HTTP Method "),t("th",{class:"border px-4 py-2"}," Purpose ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border px-4 py-2"}," Create "),t("td",{class:"border px-4 py-2"}," POST "),t("td",{class:"border px-4 py-2"}," Add new data ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," Read "),t("td",{class:"border px-4 py-2"}," GET "),t("td",{class:"border px-4 py-2"}," Retrieve data ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," Update "),t("td",{class:"border px-4 py-2"}," PUT / PATCH "),t("td",{class:"border px-4 py-2"}," Modify existing data ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," Delete "),t("td",{class:"border px-4 py-2"}," DELETE "),t("td",{class:"border px-4 py-2"}," Remove data ")])])])],-1)),e[8]||(e[8]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," GET Method ",-1)),e[9]||(e[9]=t("p",{class:"text-gray-600 text-lg mb-4"}," GET is used to retrieve data from an API. ",-1)),e[10]||(e[10]=t("p",{class:"text-gray-600 text-lg mb-4"}," It does not modify data on the server. ",-1)),s(r,{code:T,language:"http"}),e[11]||(e[11]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," POST Method ",-1)),e[12]||(e[12]=t("p",{class:"text-gray-600 text-lg mb-4"}," POST is used to send new data to the server and create a resource. ",-1)),s(r,{code:P,language:"http"}),e[13]||(e[13]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," PUT Method ",-1)),e[14]||(e[14]=t("p",{class:"text-gray-600 text-lg mb-4"}," PUT updates an existing resource by replacing the complete object. ",-1)),e[15]||(e[15]=t("p",{class:"text-gray-600 text-lg mb-4"}," When using PUT, clients usually send all fields of the resource. ",-1)),s(r,{code:f,language:"http"}),e[16]||(e[16]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," PATCH Method ",-1)),e[17]||(e[17]=t("p",{class:"text-gray-600 text-lg mb-4"}," PATCH updates only specific fields of an existing resource. ",-1)),e[18]||(e[18]=t("p",{class:"text-gray-600 text-lg mb-6"}," Unlike PUT, PATCH does not require sending the entire object. ",-1)),s(r,{code:E,language:"http"}),e[19]||(e[19]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," DELETE Method ",-1)),e[20]||(e[20]=t("p",{class:"text-gray-600 text-lg mb-4"}," DELETE removes a resource from the server. ",-1)),s(r,{code:R,language:"http"}),s(d,{src:"/tutorials/django/crud-http-methods.png",alt:"CRUD HTTP Methods",caption:"Figure 19.2 HTTP methods map directly to CRUD operations."}),e[21]||(e[21]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," HTTP Methods in Django REST Framework ",-1)),e[22]||(e[22]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`APIView

GET      → get()

POST     → post()

PUT      → put()

PATCH    → patch()

DELETE   → delete()


ViewSet

GET      → list()

GET ID   → retrieve()

POST     → create()

PUT      → update()

DELETE   → destroy()
`)],-1)),e[23]||(e[23]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," HTTP Response Status Codes ",-1)),e[24]||(e[24]=t("p",{class:"text-gray-600 text-lg mb-4"}," APIs return status codes to indicate whether a request succeeded or failed. ",-1)),e[25]||(e[25]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border px-4 py-2"}," Status Code "),t("th",{class:"border px-4 py-2"}," Meaning ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border px-4 py-2"}," 200 OK "),t("td",{class:"border px-4 py-2"}," Request successful. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," 201 Created "),t("td",{class:"border px-4 py-2"}," Resource created successfully. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," 400 Bad Request "),t("td",{class:"border px-4 py-2"}," Invalid request data. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," 404 Not Found "),t("td",{class:"border px-4 py-2"}," Resource does not exist. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," 500 Server Error "),t("td",{class:"border px-4 py-2"}," Server problem. ")])])])],-1)),s(o,null,{default:a(()=>[...e[1]||(e[1]=[l(" A good REST API uses HTTP methods correctly so clients can clearly communicate what action they want the server to perform. ",-1)])]),_:1}),e[26]||(e[26]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),e[27]||(e[27]=t("p",{class:"text-gray-600 text-lg"}," HTTP methods define how clients interact with REST APIs. GET retrieves data, POST creates resources, PUT and PATCH update resources, and DELETE removes resources. Understanding these methods is essential when building APIs using Django REST Framework. ",-1))]),_:1},8,["navigation"]))}});export{h as default};

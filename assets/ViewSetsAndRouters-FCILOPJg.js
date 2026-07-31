import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-rmfghmAq.js";import{_ as n}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-Dgnb2M-y.js";import{C as l}from"./CodeBlock-D8jROP2n.js";import{_ as i}from"./ImageBlock.vue_vue_type_script_setup_true_lang-CgBnHqpC.js";import{u as y}from"./djangoRestStore-J_RKQmxt.js";import{d as b,r as a,p as f,l as o,m as w,o as S,a as t,t as R,k as r,b as s}from"./index-BMgOVC93.js";const v="July 26, 2026",I=b({__name:"ViewSetsAndRouters",setup(V){const d=y(),u=a(`
from rest_framework.viewsets import ModelViewSet


class StudentViewSet(ModelViewSet):

    queryset = Student.objects.all()

    serializer_class = StudentSerializer
`),p=a(`
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet


router = DefaultRouter()

router.register(
    'students',
    StudentViewSet
)


urlpatterns = router.urls
`),g=a(`
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response


class StudentViewSet(ViewSet):

    def list(self, request):

        return Response({
            "message": "Student list"
        })


    def create(self, request):

        return Response({
            "message": "Student created"
        })
`),m=a(`
GET     /students/
POST    /students/

GET     /students/{id}/
PUT     /students/{id}/
PATCH   /students/{id}/
DELETE  /students/{id}/
`);return(c,e)=>(S(),f(x,{title:"Django REST Framework",navigation:w(d).sections},{default:o(()=>[e[2]||(e[2]=t("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," ViewSets and Routers ",-1)),t("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+R(v)),e[3]||(e[3]=t("p",{class:"text-gray-600 text-lg mb-6"}," ViewSets and Routers are advanced Django REST Framework features that simplify API development by combining multiple CRUD operations into a single class. ",-1)),e[4]||(e[4]=t("p",{class:"text-gray-600 text-lg mb-6"}," Instead of manually creating separate API views and URL patterns, ViewSets allow developers to define the behavior of an entire resource in one place. ",-1)),r(n,null,{default:o(()=>[...e[0]||(e[0]=[s(" ViewSets handle API operations while Routers automatically generate the required URL patterns. ",-1)])]),_:1}),r(i,{src:"/tutorials/django/viewset-router-flow.png",alt:"Django ViewSet Router Flow",caption:"Figure 18.1 Routers connect URLs automatically to ViewSets."}),e[5]||(e[5]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," What is a ViewSet? ",-1)),e[6]||(e[6]=t("p",{class:"text-gray-600 text-lg mb-4"}," A ViewSet is a class that groups related API operations together. ",-1)),e[7]||(e[7]=t("p",{class:"text-gray-600 text-lg mb-6"}," Instead of creating separate methods for every endpoint, DRF provides standard actions such as: ",-1)),e[8]||(e[8]=t("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[t("li",null,[t("strong",null,"list()"),s(" - retrieve multiple objects. ")]),t("li",null,[t("strong",null,"retrieve()"),s(" - retrieve a single object. ")]),t("li",null,[t("strong",null,"create()"),s(" - create a new object. ")]),t("li",null,[t("strong",null,"update()"),s(" - update an object. ")]),t("li",null,[t("strong",null,"destroy()"),s(" - delete an object. ")])],-1)),e[9]||(e[9]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," ViewSet vs APIView ",-1)),e[10]||(e[10]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border px-4 py-2"}," APIView "),t("th",{class:"border px-4 py-2"}," ViewSet ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border px-4 py-2"}," Define HTTP methods manually. "),t("td",{class:"border px-4 py-2"}," Uses predefined actions. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," Requires manual URL configuration. "),t("td",{class:"border px-4 py-2"}," Uses routers. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," More control. "),t("td",{class:"border px-4 py-2"}," Faster CRUD development. ")])])])],-1)),e[11]||(e[11]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating a ViewSet ",-1)),e[12]||(e[12]=t("p",{class:"text-gray-600 text-lg mb-4"},[s(" The "),t("code",null,"ModelViewSet"),s(" automatically provides complete CRUD operations for a model. ")],-1)),r(l,{code:u.value,language:"python"},null,8,["code"]),e[13]||(e[13]=t("p",{class:"text-gray-600 text-lg mb-6"}," This single class can handle listing, creating, updating, and deleting students. ",-1)),e[14]||(e[14]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Understanding ModelViewSet ",-1)),e[15]||(e[15]=t("p",{class:"text-gray-600 text-lg mb-4"},[t("code",null,"ModelViewSet"),s(" combines several DRF features: ")],-1)),e[16]||(e[16]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`ModelViewSet

      |

      +-- list()

      +-- retrieve()

      +-- create()

      +-- update()

      +-- destroy()

`)],-1)),e[17]||(e[17]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," What are Routers? ",-1)),e[18]||(e[18]=t("p",{class:"text-gray-600 text-lg mb-4"}," Routers automatically create URL patterns for ViewSets. ",-1)),e[19]||(e[19]=t("p",{class:"text-gray-600 text-lg mb-6"}," Without routers, developers need to manually connect every API endpoint. ",-1)),r(l,{code:p.value,language:"python"},null,8,["code"]),r(i,{src:"/tutorials/django/router-url-generation.png",alt:"Router URL Generation",caption:"Figure 18.2 Routers automatically generate API routes."}),e[20]||(e[20]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Automatically Generated Routes ",-1)),e[21]||(e[21]=t("p",{class:"text-gray-600 text-lg mb-4"}," A router automatically creates standard REST endpoints. ",-1)),r(l,{code:m.value,language:"text"},null,8,["code"]),e[22]||(e[22]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating a Custom ViewSet ",-1)),e[23]||(e[23]=t("p",{class:"text-gray-600 text-lg mb-4"},[s(" Developers can also create a ViewSet manually using "),t("code",null,"ViewSet"),s(". ")],-1)),r(l,{code:g.value,language:"python"},null,8,["code"]),e[24]||(e[24]=t("p",{class:"text-gray-600 text-lg mb-6"},[s(" This provides more control compared to using "),t("code",null,"ModelViewSet"),s(". ")],-1)),e[25]||(e[25]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," DefaultRouter vs SimpleRouter ",-1)),e[26]||(e[26]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border px-4 py-2"}," Router "),t("th",{class:"border px-4 py-2"}," Description ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border px-4 py-2"}," SimpleRouter "),t("td",{class:"border px-4 py-2"}," Creates basic API routes. ")]),t("tr",null,[t("td",{class:"border px-4 py-2"}," DefaultRouter "),t("td",{class:"border px-4 py-2"}," Adds an API root endpoint. ")])])])],-1)),e[27]||(e[27]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Advantages of ViewSets ",-1)),e[28]||(e[28]=t("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[t("li",null," Reduces repeated CRUD code. "),t("li",null," Automatically creates routes. "),t("li",null," Keeps APIs organized. "),t("li",null," Works perfectly with serializers. "),t("li",null," Commonly used in production DRF applications. ")],-1)),r(n,null,{default:o(()=>[...e[1]||(e[1]=[s(" ViewSets and Routers are the preferred approach when building standard CRUD APIs because they reduce development time and keep projects organized. ",-1)])]),_:1}),e[29]||(e[29]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),e[30]||(e[30]=t("p",{class:"text-gray-600 text-lg"}," ViewSets combine multiple API operations into a single class, while Routers automatically generate URL patterns. Together, they provide a fast and organized way to create REST APIs using Django REST Framework. ",-1))]),_:1},8,["navigation"]))}});export{I as default};

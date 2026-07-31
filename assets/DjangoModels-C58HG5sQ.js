import{_ as p}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-rmfghmAq.js";import{_ as d}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-Dgnb2M-y.js";import{C as s}from"./CodeBlock-D8jROP2n.js";import{_ as n}from"./ImageBlock.vue_vue_type_script_setup_true_lang-CgBnHqpC.js";import{u as y}from"./djangoRestStore-J_RKQmxt.js";import{d as x,r as o,p as u,l as r,m as f,o as D,a as e,t as M,k as l,b as a}from"./index-BMgOVC93.js";const v="July 26, 2026",E=x({__name:"DjangoModels",setup(j){const i=y(),g=o(`
from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    email = models.EmailField()

    def __str__(self):
        return self.name
`),m=o(`
class Product(models.Model):

    name = models.CharField(max_length=100)

    price = models.DecimalField(
        max_digits=8,
        decimal_places=2
    )

    quantity = models.IntegerField()

    available = models.BooleanField(
        default=True
    )
`),b=o(`
class Course(models.Model):
    title = models.CharField(max_length=100)


class Student(models.Model):
    name = models.CharField(max_length=100)

    course = models.ForeignKey(
        Course,
        on_delete=models.CASCADE
    )
`);return(F,t)=>(D(),u(p,{title:"Django REST Framework",navigation:f(i).sections},{default:r(()=>[t[2]||(t[2]=e("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Django Models ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+M(v)),t[3]||(t[3]=e("p",{class:"text-gray-600 text-lg mb-6"}," Django models define the structure of application data. A model is a Python class that represents a database table. ",-1)),t[4]||(t[4]=e("p",{class:"text-gray-600 text-lg mb-6"}," Instead of manually writing SQL statements to create tables, Django allows developers to define database structures using Python code. ",-1)),l(d,null,{default:r(()=>[...t[0]||(t[0]=[a(" A Django model is a Python representation of a database table. Each model class becomes a table, and each model attribute becomes a column. ",-1)])]),_:1}),l(n,{src:"/tutorials/django/django-model-overview.png",alt:"Django Model Database Mapping",caption:"Figure 13.1 Django models map Python classes to database tables."}),t[5]||(t[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Models and Databases ",-1)),t[6]||(t[6]=e("p",{class:"text-gray-600 text-lg mb-4"}," In traditional database development, developers manually create tables using SQL. ",-1)),t[7]||(t[7]=e("p",{class:"text-gray-600 text-lg mb-4"}," Django uses an Object Relational Mapping system called ORM that allows developers to work with databases using Python objects. ",-1)),t[8]||(t[8]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`Python Class

     |
     |
     v

Django Model

     |
     |
     v

Database Table

     |
     |
     v

Database Records
`)],-1)),t[9]||(t[9]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," The models.py File ",-1)),t[10]||(t[10]=e("p",{class:"text-gray-600 text-lg mb-6"},[a(" Django applications store their database models inside the "),e("code",null,"models.py"),a(" file. ")],-1)),t[11]||(t[11]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`students/

│── models.py
│── views.py
│── urls.py
└── serializers.py
`)],-1)),t[12]||(t[12]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating a Django Model ",-1)),t[13]||(t[13]=e("p",{class:"text-gray-600 text-lg mb-4"},[a(" A model is created by defining a class that inherits from "),e("code",null,"models.Model"),a(". ")],-1)),l(s,{code:g.value,language:"python"},null,8,["code"]),t[14]||(t[14]=e("p",{class:"text-gray-600 text-lg mb-6"},[a(" This model creates a database table named "),e("code",null,"Student"),a(" with fields for name, age, and email. ")],-1)),l(n,{src:"/tutorials/django/student-model.png",alt:"Student Django Model",caption:"Figure 13.2 Example Django model definition."}),t[15]||(t[15]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Django Model Fields ",-1)),t[16]||(t[16]=e("p",{class:"text-gray-600 text-lg mb-4"}," Model fields define the type of data stored in each database column. ",-1)),t[17]||(t[17]=e("div",{class:"overflow-x-auto mb-6"},[e("table",{class:"min-w-full border border-gray-300 text-lg"},[e("thead",{class:"bg-gray-100 dark:bg-gray-800"},[e("tr",null,[e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Field "),e("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Usage ")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," CharField "),e("td",{class:"border border-gray-300 px-4 py-2"}," Stores short text values. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," TextField "),e("td",{class:"border border-gray-300 px-4 py-2"}," Stores long text. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," IntegerField "),e("td",{class:"border border-gray-300 px-4 py-2"}," Stores whole numbers. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," BooleanField "),e("td",{class:"border border-gray-300 px-4 py-2"}," Stores True or False values. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," DateTimeField "),e("td",{class:"border border-gray-300 px-4 py-2"}," Stores dates and timestamps. ")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"}," DecimalField "),e("td",{class:"border border-gray-300 px-4 py-2"}," Stores decimal values. ")])])])],-1)),t[18]||(t[18]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Model Field Example ",-1)),l(s,{code:m.value,language:"python"},null,8,["code"]),t[19]||(t[19]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Automatic Primary Keys ",-1)),t[20]||(t[20]=e("p",{class:"text-gray-600 text-lg mb-6"}," Django automatically adds an ID field as the primary key when no primary key is specified. ",-1)),t[21]||(t[21]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`Student Table

id      name        age

1       Ralph       22
2       Maria       21
3       John        23
`)],-1)),t[22]||(t[22]=e("p",{class:"text-gray-600 text-lg mb-6"}," The ID value uniquely identifies every record in the database. ",-1)),t[23]||(t[23]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Model Relationships ",-1)),t[24]||(t[24]=e("p",{class:"text-gray-600 text-lg mb-4"}," Django supports database relationships using special relationship fields. ",-1)),t[25]||(t[25]=e("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[e("li",null,[e("strong",null,"One-to-One"),a(" - one record is connected to one record. ")]),e("li",null,[e("strong",null,"One-to-Many"),a(" - one record has many related records. ")]),e("li",null,[e("strong",null,"Many-to-Many"),a(" - multiple records relate to multiple records. ")])],-1)),t[26]||(t[26]=e("h3",{class:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3"}," Foreign Key Example ",-1)),l(s,{code:b.value,language:"python"},null,8,["code"]),t[27]||(t[27]=e("p",{class:"text-gray-600 text-lg mb-6"}," This example creates a relationship where many students can belong to one course. ",-1)),t[28]||(t[28]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Model Metadata ",-1)),t[29]||(t[29]=e("p",{class:"text-gray-600 text-lg mb-4"},[a(" Django models can contain additional configuration using the "),e("code",null,"Meta"),a(" class. ")],-1)),t[30]||(t[30]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`class Student(models.Model):

    name = models.CharField(max_length=100)


    class Meta:
        ordering = ['name']
`)],-1)),l(d,null,{default:r(()=>[...t[1]||(t[1]=[a(" Models describe what data your application stores. Later, Django REST Framework serializers will use these models to convert database data into JSON responses. ",-1)])]),_:1}),t[31]||(t[31]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),t[32]||(t[32]=e("p",{class:"text-gray-600 text-lg"}," Django models define database structures using Python classes. Each model represents a database table, while fields represent columns. Models allow developers to manage data using Django's ORM instead of writing SQL manually. They serve as the foundation for building REST APIs with Django REST Framework. ",-1))]),_:1},8,["navigation"]))}});export{E as default};

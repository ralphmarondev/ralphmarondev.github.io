import{_ as p}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{_ as r}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-DdbMjyuT.js";import{C as o}from"./CodeBlock-CjPs9I9U.js";import{u}from"./djangoRestStore-GpspCYWa.js";import{d as y,r as a,p as x,l,m as b,o as f,a as e,t as j,b as s,k as n}from"./index-IauxWRt0.js";const D="July 26, 2026",w=y({__name:"DjangoSettings",setup(S){const i=u(),g=a(`
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'students',
    'rest_framework',
]
`),d=a(`
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
`),m=a(`
DEBUG = True

ALLOWED_HOSTS = []
`);return(A,t)=>(f(),x(p,{title:"Django REST Framework",navigation:b(i).sections},{default:l(()=>[t[2]||(t[2]=e("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Django Settings ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+j(D)),t[3]||(t[3]=e("p",{class:"text-gray-600 text-lg mb-6"},[s(" The "),e("code",null,"settings.py"),s(" file is one of the most important files in a Django project. It contains the global configuration of the application. ")],-1)),t[4]||(t[4]=e("p",{class:"text-gray-600 text-lg mb-6"}," Django uses this file to determine installed applications, database connection, security options, static files, and many other project behaviors. ",-1)),n(r,null,{default:l(()=>[...t[0]||(t[0]=[s(" The ",-1),e("code",null,"settings.py",-1),s(" file acts as the control center of a Django project. ",-1)])]),_:1}),t[5]||(t[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Location of settings.py ",-1)),t[6]||(t[6]=e("p",{class:"text-gray-600 text-lg mb-4"},[s(" When creating a Django project, Django automatically generates a configuration folder containing "),e("code",null,"settings.py"),s(". ")],-1)),t[7]||(t[7]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`myproject/

│── manage.py

└── myproject/
    │── settings.py
    │── urls.py
    │── asgi.py
    └── wsgi.py
`)],-1)),t[8]||(t[8]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Important Django Settings ",-1)),t[9]||(t[9]=e("p",{class:"text-gray-600 text-lg mb-6"}," A Django project contains many configuration options. The most commonly used settings are: ",-1)),t[10]||(t[10]=e("h3",{class:"text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3"}," INSTALLED_APPS ",-1)),t[11]||(t[11]=e("p",{class:"text-gray-600 text-lg mb-4"},[e("code",null,"INSTALLED_APPS"),s(" contains all Django applications enabled inside the project. ")],-1)),t[12]||(t[12]=e("p",{class:"text-gray-600 text-lg mb-4"}," Whenever a new application is created, it must be added here before Django can use it. ",-1)),n(o,{code:g.value,language:"python"},null,8,["code"]),t[13]||(t[13]=e("h3",{class:"text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-3"}," DATABASES ",-1)),t[14]||(t[14]=e("p",{class:"text-gray-600 text-lg mb-4"},[s(" The "),e("code",null,"DATABASES"),s(" setting defines how Django connects to the database. ")],-1)),t[15]||(t[15]=e("p",{class:"text-gray-600 text-lg mb-4"}," By default, Django uses SQLite for development projects. ",-1)),n(o,{code:d.value,language:"python"},null,8,["code"]),t[16]||(t[16]=e("p",{class:"text-gray-600 text-lg mb-6"}," In production systems, databases such as PostgreSQL, MySQL, or MariaDB are commonly used. ",-1)),t[17]||(t[17]=e("h3",{class:"text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-3"}," DEBUG ",-1)),t[18]||(t[18]=e("p",{class:"text-gray-600 text-lg mb-4"},[s(" The "),e("code",null,"DEBUG"),s(" option controls whether Django runs in development mode. ")],-1)),n(o,{code:m.value,language:"python"},null,8,["code"]),t[19]||(t[19]=e("ul",{class:"list-disc list-inside space-y-2 text-gray-600 text-lg mb-6"},[e("li",null,[e("strong",null,"True"),s(" - shows detailed error information during development. ")]),e("li",null,[e("strong",null,"False"),s(" - hides detailed errors for production security. ")])],-1)),t[20]||(t[20]=e("h3",{class:"text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-3"}," URL Configuration ",-1)),t[21]||(t[21]=e("p",{class:"text-gray-600 text-lg mb-6"},[s(" The "),e("code",null,"ROOT_URLCONF"),s(" setting tells Django where the main URL configuration file is located. ")],-1)),t[22]||(t[22]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`ROOT_URLCONF = 'myproject.urls'
`)],-1)),t[23]||(t[23]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Django REST Framework Settings ",-1)),t[24]||(t[24]=e("p",{class:"text-gray-600 text-lg mb-4"},[s(" Django REST Framework can also be configured inside "),e("code",null,"settings.py"),s(". ")],-1)),t[25]||(t[25]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
    ]
}
`)],-1)),t[26]||(t[26]=e("p",{class:"text-gray-600 text-lg mb-6"}," These settings control API behavior such as authentication, permissions, pagination, and rendering formats. ",-1)),n(r,null,{default:l(()=>[...t[1]||(t[1]=[s(" Always check settings.py when adding new Django features. Many Django components require configuration before they can be used. ",-1)])]),_:1}),t[27]||(t[27]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),t[28]||(t[28]=e("p",{class:"text-gray-600 text-lg"},[s(" The "),e("code",null,"settings.py"),s(" file controls the behavior of a Django project. It manages installed applications, databases, security, static files, and Django REST Framework configuration. Understanding settings is essential before creating models, views, and APIs. ")],-1))]),_:1},8,["navigation"]))}});export{w as default};

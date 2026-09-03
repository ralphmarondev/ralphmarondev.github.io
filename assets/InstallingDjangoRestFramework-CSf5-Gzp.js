import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{_ as i}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-DdbMjyuT.js";import{C as n}from"./CodeBlock-CjPs9I9U.js";import{_ as r}from"./ImageBlock.vue_vue_type_script_setup_true_lang-BSHFhPQK.js";import{u as y}from"./djangoRestStore-GpspCYWa.js";import{d as f,r as o,p as b,l,m as k,o as j,a as e,t as D,k as s,b as a}from"./index-IauxWRt0.js";const w="July 26, 2026",I=f({__name:"InstallingDjangoRestFramework",setup(v){const g=y(),d=o(`
pip install djangorestframework
`),m=o(`
pip list
`),p=o(`
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',
]
`),u=o(`
pip freeze > requirements.txt
`);return(c,t)=>(j(),b(x,{title:"Django REST Framework",navigation:k(g).sections},{default:l(()=>[t[2]||(t[2]=e("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Installing Django REST Framework ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+D(w)),t[3]||(t[3]=e("p",{class:"text-gray-600 text-lg mb-6"}," Django REST Framework (DRF) is a powerful toolkit that extends Django and provides features for building REST APIs. ",-1)),t[4]||(t[4]=e("p",{class:"text-gray-600 text-lg mb-6"}," Before installing DRF, make sure that Django is already installed and that the virtual environment is activated. ",-1)),s(i,null,{default:l(()=>[...t[0]||(t[0]=[a(" Django provides tools for building web applications, while Django REST Framework provides additional tools for creating APIs that return data in formats such as JSON. ",-1)])]),_:1}),t[5]||(t[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Installing Django REST Framework ",-1)),t[6]||(t[6]=e("p",{class:"text-gray-600 text-lg mb-4"},[a(" Install Django REST Framework using Python's package manager, "),e("code",null,"pip"),a(". ")],-1)),s(n,{code:d.value,language:"bash"},null,8,["code"]),t[7]||(t[7]=e("p",{class:"text-gray-600 text-lg mb-6"}," This downloads and installs Django REST Framework inside the active virtual environment. ",-1)),s(r,{src:"/tutorials/django/08-install-drf.png",alt:"Installing Django REST Framework",caption:"Figure 8.1 Installing Django REST Framework using pip."}),t[8]||(t[8]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Checking Installed Packages ",-1)),t[9]||(t[9]=e("p",{class:"text-gray-600 text-lg mb-4"}," To verify that DRF was installed, display all installed Python packages. ",-1)),s(n,{code:m.value,language:"bash"},null,8,["code"]),t[10]||(t[10]=e("p",{class:"text-gray-600 text-lg mb-6"}," The package list should include: ",-1)),t[11]||(t[11]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("ul",{class:"list-disc list-inside text-lg text-gray-700 dark:text-gray-200"},[e("li",null,"Django"),e("li",null,"djangorestframework")])],-1)),s(r,{src:"/tutorials/django/08-drf-package-list.png",alt:"DRF Package List",caption:"Figure 8.2 Django REST Framework appears in the installed packages."}),t[12]||(t[12]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Adding DRF to Django Settings ",-1)),t[13]||(t[13]=e("p",{class:"text-gray-600 text-lg mb-4"}," Installing DRF is not enough. Django must also be informed that the framework is part of the project. ",-1)),t[14]||(t[14]=e("p",{class:"text-gray-600 text-lg mb-4"},[a(" Open "),e("code",null,"settings.py"),a(" and add "),e("code",null,"rest_framework"),a(" inside the "),e("code",null,"INSTALLED_APPS"),a(" list. ")],-1)),s(n,{code:p.value,language:"python"},null,8,["code"]),t[15]||(t[15]=e("p",{class:"text-gray-600 text-lg mb-6"},[a(" The "),e("code",null,"rest_framework"),a(" application provides the components required for creating API views, serializers, authentication, and other REST features. ")],-1)),t[16]||(t[16]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Saving Project Dependencies ",-1)),t[17]||(t[17]=e("p",{class:"text-gray-600 text-lg mb-4"}," When working with Python projects, it is recommended to save installed packages in a requirements file. ",-1)),s(n,{code:u.value,language:"bash"},null,8,["code"]),t[18]||(t[18]=e("p",{class:"text-gray-600 text-lg mb-6"},[a(" The generated "),e("code",null,"requirements.txt"),a(" file allows other developers or deployment environments to install the same packages. ")],-1)),s(r,{src:"/tutorials/django/08-requirements-file.png",alt:"Requirements File",caption:"Figure 8.4 Saving Python project dependencies."}),t[19]||(t[19]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Basic DRF Project Structure ",-1)),t[20]||(t[20]=e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[e("pre",{class:"text-lg"},`myproject/

│── manage.py
│── requirements.txt
│
├── myproject/
│   ├── settings.py
│   └── urls.py
│
└── students/
    ├── models.py
    ├── views.py
    └── serializers.py
`)],-1)),t[21]||(t[21]=e("p",{class:"text-gray-600 text-lg mb-6"}," DRF introduces additional components such as serializers and API views, which will be discussed in the following lessons. ",-1)),s(i,null,{default:l(()=>[...t[1]||(t[1]=[a(" Django REST Framework does not replace Django. Instead, it extends Django by adding tools specifically designed for creating REST APIs. ",-1)])]),_:1}),t[22]||(t[22]=e("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),t[23]||(t[23]=e("p",{class:"text-gray-600 text-lg"},[a(" Django REST Framework can be installed using pip inside a virtual environment. After installation, it must be added to Django's configuration through "),e("code",null,"INSTALLED_APPS"),a(". Once configured, Django becomes ready for developing REST APIs using serializers, views, and API endpoints. ")],-1))]),_:1},8,["navigation"]))}});export{I as default};

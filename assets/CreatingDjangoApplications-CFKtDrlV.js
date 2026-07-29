import{_ as u}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-D7ikJtJE.js";import{_ as i}from"./TutorialCallout.vue_vue_type_script_setup_true_lang-Ca5_d8z1.js";import{C as r}from"./CodeBlock-BmaIm1zG.js";import{_ as n}from"./ImageBlock.vue_vue_type_script_setup_true_lang-wAb2lTsJ.js";import{u as m}from"./djangoRestStore-evRa4N2v.js";import{d as b,r as o,p as c,l,m as x,o as f,a as t,t as j,b as e,k as s}from"./index-BZPLMLwK.js";const D="July 26, 2026",T=b({__name:"CreatingDjangoApplications",setup(v){const p=m(),d=o(`
python manage.py startapp students
`),g=o(`
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'students',
]
`),y=o(`
students/

│── migrations/
│   └── __init__.py
│
│── admin.py
│── apps.py
│── models.py
│── tests.py
│── views.py
└── __init__.py
`);return(A,a)=>(f(),c(u,{title:"Django REST Framework",navigation:x(p).sections},{default:l(()=>[a[2]||(a[2]=t("h2",{class:"text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2"}," Creating Django Applications ",-1)),t("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+j(D)),a[3]||(a[3]=t("p",{class:"text-gray-600 text-lg mb-6"},[e(" In Django, a project is divided into smaller components called "),t("strong",null,"applications"),e(" or "),t("strong",null,"apps"),e(". An app represents a specific feature or functionality of the system. ")],-1)),a[4]||(a[4]=t("p",{class:"text-gray-600 text-lg mb-6"}," Instead of placing all code in one large project, Django encourages developers to organize features into separate apps. This makes applications easier to develop, maintain, and reuse. ",-1)),s(i,null,{default:l(()=>[...a[0]||(a[0]=[e(" A Django project contains the entire website or system, while Django apps contain individual features inside that project. ",-1)])]),_:1}),s(n,{src:"/tutorials/django/project-vs-app.png",alt:"Django Project vs App",caption:"Figure 7.1 A Django project contains multiple Django applications."}),a[5]||(a[5]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Django Project vs Django App ",-1)),a[6]||(a[6]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Django Project "),t("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Django App ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," Represents the complete application. "),t("td",{class:"border border-gray-300 px-4 py-2"}," Represents a specific feature. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," Contains global configuration. "),t("td",{class:"border border-gray-300 px-4 py-2"}," Contains models, views, and logic. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"},[e(" Created using "),t("code",null,"django-admin startproject"),e(". ")]),t("td",{class:"border border-gray-300 px-4 py-2"},[e(" Created using "),t("code",null,"python manage.py startapp"),e(". ")])]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," Usually only one per system. "),t("td",{class:"border border-gray-300 px-4 py-2"}," Can have many inside one project. ")])])])],-1)),a[7]||(a[7]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Examples of Django Applications ",-1)),a[8]||(a[8]=t("p",{class:"text-gray-600 text-lg mb-4"}," A large system can be divided into multiple Django apps based on functionality. ",-1)),a[9]||(a[9]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("ul",{class:"list-disc list-inside text-lg text-gray-700 dark:text-gray-200 space-y-2"},[t("li",null,[t("strong",null,"accounts"),e(" - Handles user registration and authentication. ")]),t("li",null,[t("strong",null,"students"),e(" - Manages student records. ")]),t("li",null,[t("strong",null,"products"),e(" - Handles products in an e-commerce system. ")]),t("li",null,[t("strong",null,"orders"),e(" - Manages customer orders. ")]),t("li",null,[t("strong",null,"api"),e(" - Contains REST API functionality. ")])])],-1)),a[10]||(a[10]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Creating a Django Application ",-1)),a[11]||(a[11]=t("p",{class:"text-gray-600 text-lg mb-4"},[e(" Inside the Django project directory, create a new application using the "),t("code",null,"startapp"),e(" command. ")],-1)),s(r,{code:d.value,language:"bash"},null,8,["code"]),a[12]||(a[12]=t("p",{class:"text-gray-600 text-lg mb-6"},[e(" This command creates a new folder named "),t("code",null,"students"),e(" containing the default Django app files. ")],-1)),s(n,{src:"/tutorials/django/create-app.png",alt:"Creating Django Application",caption:"Figure 7.2 Creating a Django application using startapp."}),a[13]||(a[13]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Django Application Structure ",-1)),s(r,{code:y.value,language:"text"},null,8,["code"]),a[14]||(a[14]=t("div",{class:"overflow-x-auto mb-6"},[t("table",{class:"min-w-full border border-gray-300 text-lg"},[t("thead",{class:"bg-gray-100 dark:bg-gray-800"},[t("tr",null,[t("th",{class:"border border-gray-300 px-4 py-2 text-left"}," File "),t("th",{class:"border border-gray-300 px-4 py-2 text-left"}," Purpose ")])]),t("tbody",null,[t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," models.py "),t("td",{class:"border border-gray-300 px-4 py-2"}," Defines database models and data structure. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," views.py "),t("td",{class:"border border-gray-300 px-4 py-2"}," Handles requests and application logic. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," admin.py "),t("td",{class:"border border-gray-300 px-4 py-2"}," Registers models in Django admin. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," apps.py "),t("td",{class:"border border-gray-300 px-4 py-2"}," Contains application configuration. ")]),t("tr",null,[t("td",{class:"border border-gray-300 px-4 py-2"}," migrations/ "),t("td",{class:"border border-gray-300 px-4 py-2"}," Stores database migration files. ")])])])],-1)),a[15]||(a[15]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Registering the Application ",-1)),a[16]||(a[16]=t("p",{class:"text-gray-600 text-lg mb-4"},[e(" After creating an app, Django needs to know that the application exists. This is done by adding it to the "),t("code",null,"INSTALLED_APPS"),e(" list inside "),t("code",null,"settings.py"),e(". ")],-1)),s(r,{code:g.value,language:"python"},null,8,["code"]),a[17]||(a[17]=t("p",{class:"text-gray-600 text-lg mb-6"}," Once registered, Django can load the application's models, administration settings, and other components. ",-1)),s(n,{src:"/tutorials/django/installed-apps.png",alt:"Django Installed Apps",caption:"Figure 7.3 Registering a Django application in settings.py."}),a[18]||(a[18]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-4"}," Example Project Organization ",-1)),a[19]||(a[19]=t("div",{class:"bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-6"},[t("pre",{class:"text-lg"},`school_system/

│── manage.py
│
├── school_system/
│   └── settings.py
│
├── students/
│   ├── models.py
│   ├── views.py
│   └── urls.py
│
├── teachers/
│   ├── models.py
│   └── views.py
│
└── courses/
    ├── models.py
    └── views.py
`)],-1)),s(i,null,{default:l(()=>[...a[1]||(a[1]=[e(" Good Django projects are usually organized into multiple apps instead of putting all features inside one large application. ",-1)])]),_:1}),a[20]||(a[20]=t("h2",{class:"text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-10 mb-3"}," Summary ",-1)),a[21]||(a[21]=t("p",{class:"text-gray-600 text-lg"}," Django applications allow developers to organize a project into smaller, reusable components. A project contains the overall system configuration, while apps contain specific features. Understanding this structure is essential before building APIs with Django REST Framework. ",-1))]),_:1},8,["navigation"]))}});export{T as default};

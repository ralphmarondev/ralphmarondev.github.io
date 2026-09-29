import{_ as f}from"./logo-C9ImmdpX.js";import{a as i,T as l,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-DDUXdY-4.js";import{T as n,C as d,O as o}from"./CodeBlock-DIhZalJZ.js";import{_ as a}from"./FernInfo.vue_vue_type_script_setup_true_lang-BsSGgAE1.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-DWicuDYA.js";import{d as g,h as b,i as r,o as y,a as s,q as e,g as u}from"./index-fUs2VaN6.js";const v={class:"max-w-4xl mx-auto"},S={class:"list-disc pl-6 space-y-2"},x=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student student = {"Ralph", 21, 94.5};

    printf("Name: %s\\n", student.name);
    printf("Age: %d\\n", student.age);
    printf("Grade: %.1f\\n", student.grade);
    return 0;
}`,w=`
Name: Ralph
Age: 21
Grade: 94.5`,T=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student student;
    student.age = 21;

    printf("Age: %d\\n", student.age);
    return 0;
}`,C=`
Age: 21`,P=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
};

int main() {
    struct Student first = {"Ralph", 21};
    struct Student second = {"Mika", 20};

    printf("%s is %d years old.\\n", first.name, first.age);
    printf("%s is %d years old.\\n", second.name, second.age);
    return 0;
}`,k=`
Ralph is 21 years old.
Mika is 20 years old.`,A=`
#include <stdio.h>

struct Product {
    char name[50];
    int quantity;
    float price;
};

int main() {
    struct Product product = {"Notebook", 5, 45.50};

    printf("Product: %s\\n", product.name);
    printf("Quantity: %d\\n", product.quantity);
    printf("Price: %.2f\\n", product.price);
    return 0;
}`,O=`
Product: Notebook
Quantity: 5
Price: 45.50`,N=`
#include <stdio.h>

struct Course {
    char name[50];
    int units;
    float grade;
};

int main() {
    struct Course course = {"Computer Programming", 3, 95.0};

    printf("Course: %s\\n", course.name);
    printf("Units: %d\\n", course.units);
    printf("Grade: %.1f\\n", course.grade);
    return 0;
}`,D=`
Course: Computer Programming
Units: 3
Grade: 95.0`,E=g({__name:"Structures",setup(I){return(M,t)=>(y(),b(p,null,{default:r(()=>[s("div",v,[t[83]||(t[83]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[84]||(t[84]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Structures ")],-1)),e(i,null,{default:r(()=>[...t[0]||(t[0]=[u("What Is a Structure?",-1)])]),_:1}),e(l,null,{default:r(()=>[t[2]||(t[2]=u(" A ",-1)),e(n,null,{default:r(()=>[...t[1]||(t[1]=[u("structure",-1)])]),_:1}),t[3]||(t[3]=u(" is a user-defined data type that allows related values of different data types to be grouped together. ",-1))]),_:1}),e(l,null,{default:r(()=>[t[5]||(t[5]=u(" For example, a student may have a name, age, and grade. Instead of keeping these values as completely separate variables, they can be grouped into one ",-1)),e(n,null,{default:r(()=>[...t[4]||(t[4]=[u("struct",-1)])]),_:1}),t[6]||(t[6]=u(" . ",-1))]),_:1}),e(a,{title:"Think of It This Way"},{default:r(()=>[...t[7]||(t[7]=[u(" A structure is like a container that keeps related pieces of information together. ",-1)])]),_:1}),e(i,null,{default:r(()=>[...t[8]||(t[8]=[u("Defining a Structure",-1)])]),_:1}),e(l,null,{default:r(()=>[t[10]||(t[10]=u(" A structure is defined using the ",-1)),e(n,null,{default:r(()=>[...t[9]||(t[9]=[u("struct",-1)])]),_:1}),t[11]||(t[11]=u(" keyword. ",-1)),e(d,{language:"c",code:x}),t[12]||(t[12]=u(" Output ",-1)),e(o,{output:w})]),_:1}),e(l,null,{default:r(()=>[t[17]||(t[17]=u(" The ",-1)),e(n,null,{default:r(()=>[...t[13]||(t[13]=[u("Student",-1)])]),_:1}),t[18]||(t[18]=u(" structure contains three members: ",-1)),e(n,null,{default:r(()=>[...t[14]||(t[14]=[u("name",-1)])]),_:1}),t[19]||(t[19]=u(" , ",-1)),e(n,null,{default:r(()=>[...t[15]||(t[15]=[u("age",-1)])]),_:1}),t[20]||(t[20]=u(" , and ",-1)),e(n,null,{default:r(()=>[...t[16]||(t[16]=[u("grade",-1)])]),_:1}),t[21]||(t[21]=u(" . ",-1))]),_:1}),e(i,null,{default:r(()=>[...t[22]||(t[22]=[u("Declaring a Structure Variable",-1)])]),_:1}),e(l,null,{default:r(()=>[t[23]||(t[23]=u(" Defining a structure creates the structure type. We can then declare variables using that structure type. ",-1)),e(d,{language:"c",code:T}),t[24]||(t[24]=u(" Output ",-1)),e(o,{output:C})]),_:1}),e(l,null,{default:r(()=>[t[28]||(t[28]=u(" The statement ",-1)),e(n,null,{default:r(()=>[...t[25]||(t[25]=[u("struct Student student;",-1)])]),_:1}),t[29]||(t[29]=u(" creates a variable named ",-1)),e(n,null,{default:r(()=>[...t[26]||(t[26]=[u("student",-1)])]),_:1}),t[30]||(t[30]=u(" using the ",-1)),e(n,null,{default:r(()=>[...t[27]||(t[27]=[u("Student",-1)])]),_:1}),t[31]||(t[31]=u(" structure. ",-1))]),_:1}),e(i,null,{default:r(()=>[...t[32]||(t[32]=[u("Initializing a Structure",-1)])]),_:1}),e(l,null,{default:r(()=>[t[33]||(t[33]=u(" A structure variable can be initialized when it is declared by providing values for its members in their declared order. ",-1)),e(d,{language:"c",code:P}),t[34]||(t[34]=u(" Output ",-1)),e(o,{output:k})]),_:1}),e(l,null,{default:r(()=>[t[37]||(t[37]=u(" The first value is assigned to ",-1)),e(n,null,{default:r(()=>[...t[35]||(t[35]=[u("name",-1)])]),_:1}),t[38]||(t[38]=u(" , the second to ",-1)),e(n,null,{default:r(()=>[...t[36]||(t[36]=[u("age",-1)])]),_:1}),t[39]||(t[39]=u(" , and so on. ",-1))]),_:1}),e(i,null,{default:r(()=>[...t[40]||(t[40]=[u("Structures Can Contain Different Data Types",-1)])]),_:1}),e(l,null,{default:r(()=>[t[41]||(t[41]=u(" One of the main advantages of a structure is that its members do not have to use the same data type. ",-1)),e(d,{language:"c",code:A}),t[42]||(t[42]=u(" Output ",-1)),e(o,{output:O})]),_:1}),e(l,null,{default:r(()=>[t[44]||(t[44]=u(" The ",-1)),e(n,null,{default:r(()=>[...t[43]||(t[43]=[u("Product",-1)])]),_:1}),t[45]||(t[45]=u(" structure contains a character array, an integer, and a floating-point value. ",-1))]),_:1}),e(i,null,{default:r(()=>[...t[46]||(t[46]=[u("Creating Multiple Structure Variables",-1)])]),_:1}),e(l,null,{default:r(()=>[...t[47]||(t[47]=[u(" Multiple variables can use the same structure definition. Each variable has its own set of members. ",-1)])]),_:1}),e(l,null,{default:r(()=>[t[49]||(t[49]=u(" For example, several students can be represented using the same ",-1)),e(n,null,{default:r(()=>[...t[48]||(t[48]=[u("Student",-1)])]),_:1}),t[50]||(t[50]=u(" structure while storing different information for each student. ",-1))]),_:1}),e(a,{title:"Remember"},{default:r(()=>[...t[51]||(t[51]=[u(" The structure definition describes what information each structure variable contains. Each structure variable then stores its own values. ",-1)])]),_:1}),e(i,null,{default:r(()=>[...t[52]||(t[52]=[u("A Practical Example",-1)])]),_:1}),e(l,null,{default:r(()=>[t[53]||(t[53]=u(" Structures are useful when several related pieces of information describe one thing. ",-1)),e(d,{language:"c",code:N}),t[54]||(t[54]=u(" Output ",-1)),e(o,{output:D})]),_:1}),e(l,null,{default:r(()=>[t[56]||(t[56]=u(" Here, the ",-1)),e(n,null,{default:r(()=>[...t[55]||(t[55]=[u("Course",-1)])]),_:1}),t[57]||(t[57]=u(" structure groups the course name, number of units, and grade into one structure variable. ",-1))]),_:1}),e(i,null,{default:r(()=>[...t[58]||(t[58]=[u("Accessing Structure Members",-1)])]),_:1}),e(l,null,{default:r(()=>[t[60]||(t[60]=u(" Individual members of a structure are accessed using the dot ",-1)),e(n,null,{default:r(()=>[...t[59]||(t[59]=[u(".",-1)])]),_:1}),t[61]||(t[61]=u(" operator. ",-1))]),_:1}),e(l,null,{default:r(()=>[t[66]||(t[66]=u(" For example, ",-1)),e(n,null,{default:r(()=>[...t[62]||(t[62]=[u("course.name",-1)])]),_:1}),t[67]||(t[67]=u(" accesses the ",-1)),e(n,null,{default:r(()=>[...t[63]||(t[63]=[u("name",-1)])]),_:1}),t[68]||(t[68]=u(" member, while ",-1)),e(n,null,{default:r(()=>[...t[64]||(t[64]=[u("course.grade",-1)])]),_:1}),t[69]||(t[69]=u(" accesses the ",-1)),e(n,null,{default:r(()=>[...t[65]||(t[65]=[u("grade",-1)])]),_:1}),t[70]||(t[70]=u(" member. ",-1))]),_:1}),e(a,{title:"Coming Next"},{default:r(()=>[...t[71]||(t[71]=[u(" Structures become much more useful when you work directly with their individual members. Next, we will look more closely at how structure members are accessed and modified. ",-1)])]),_:1}),e(i,null,{default:r(()=>[...t[72]||(t[72]=[u("Summary",-1)])]),_:1}),e(l,null,{default:r(()=>[...t[73]||(t[73]=[u(" A structure groups related values of different data types into one user-defined data type. ",-1)])]),_:1}),e(l,null,{default:r(()=>[s("ul",S,[s("li",null,[e(n,null,{default:r(()=>[...t[74]||(t[74]=[u("struct",-1)])]),_:1}),t[75]||(t[75]=u(" is used to define a structure. ",-1))]),t[79]||(t[79]=s("li",null,"A structure can contain members with different data types.",-1)),t[80]||(t[80]=s("li",null,"A structure variable is declared using the structure type.",-1)),t[81]||(t[81]=s("li",null,"A structure can be initialized when it is declared.",-1)),t[82]||(t[82]=s("li",null,"Multiple variables can use the same structure definition.",-1)),s("li",null,[t[77]||(t[77]=u("The dot ",-1)),e(n,null,{default:r(()=>[...t[76]||(t[76]=[u(".",-1)])]),_:1}),t[78]||(t[78]=u(" operator is used to access structure members. ",-1))])])]),_:1}),t[85]||(t[85]=s("br",null,null,-1)),e(m,{to:"/academia/student/classes/c-structure-member"})])]),_:1}))}});export{E as default};

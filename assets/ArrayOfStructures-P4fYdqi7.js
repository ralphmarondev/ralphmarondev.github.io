import{_ as i}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-B3G-GaUa.js";import{T as n,a as d,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-C0JJmNPf.js";import{T as u}from"./TopicTerm-DFxx4A6I.js";import{C as l}from"./CodeBlock-BTW9CWle.js";import{O as o}from"./OutputBlock-1tVxatZn.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-BiF_AWI8.js";import{d as g,h as b,i as s,o as y,a,q as r,g as e}from"./index-DxySYCEn.js";const x={class:"max-w-4xl mx-auto"},A=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student students[3] = {
        {"Alice", 18, 92.5},
        {"Bob", 19, 88.0},
        {"Charlie", 18, 95.5}
    };

    printf("%s\\n", students[0].name);
    printf("%s\\n", students[1].name);
    printf("%s\\n", students[2].name);
    return 0;
}`,S=`
Alice
Bob
Charlie`,C=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student students[3] = {
        {"Alice", 18, 92.5},
        {"Bob", 19, 88.0},
        {"Charlie", 18, 95.5}
    };

    printf("Name: %s\\n", students[0].name);
    printf("Age: %d\\n", students[0].age);
    printf("Grade: %.1f\\n", students[0].grade);
    return 0;
}`,T=`
Name: Alice
Age: 18
Grade: 92.5`,B=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student students[3] = {
        {"Alice", 18, 92.5},
        {"Bob", 19, 88.0},
        {"Charlie", 18, 95.5}
    };

    for (int i = 0; i < 3; i++) {
        printf("Name: %s, Age: %d, Grade: %.1f\\n",
               students[i].name,
               students[i].age,
               students[i].grade);
    }
    return 0;
}`,N=`
Name: Alice, Age: 18, Grade: 92.5
Name: Bob, Age: 19, Grade: 88.0
Name: Charlie, Age: 18, Grade: 95.5`,v=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student students[2] = {
        {"Alice", 18, 92.5},
        {"Bob", 19, 88.0}
    };

    students[1].age = 20;
    students[1].grade = 91.0;

    printf("Name: %s\\n", students[1].name);
    printf("Age: %d\\n", students[1].age);
    printf("Grade: %.1f\\n", students[1].grade);
    return 0;
}`,O=`
Name: Bob
Age: 20
Grade: 91.0`,q=g({__name:"ArrayOfStructures",setup(G){return(w,t)=>(y(),b(f,null,{default:s(()=>[a("div",x,[t[42]||(t[42]=a("div",{class:"w-full flex justify-center mb-6"},[a("img",{src:i,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[43]||(t[43]=a("div",{class:"text-center mb-4"},[a("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),a("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Array of Structures ")],-1)),r(n,null,{default:s(()=>[...t[0]||(t[0]=[e(" An array of structures allows you to store multiple structure variables of the same type in a single collection. ",-1)])]),_:1}),r(n,null,{default:s(()=>[t[4]||(t[4]=e(" Instead of declaring several variables such as ",-1)),r(u,null,{default:s(()=>[...t[1]||(t[1]=[e("student1",-1)])]),_:1}),t[5]||(t[5]=e(" , ",-1)),r(u,null,{default:s(()=>[...t[2]||(t[2]=[e("student2",-1)])]),_:1}),t[6]||(t[6]=e(" , and ",-1)),r(u,null,{default:s(()=>[...t[3]||(t[3]=[e("student3",-1)])]),_:1}),t[7]||(t[7]=e(" , you can create an array of structures and access each structure using an index. ",-1))]),_:1}),r(d,null,{default:s(()=>[...t[8]||(t[8]=[e("Declaring an Array of Structures",-1)])]),_:1}),r(n,null,{default:s(()=>[t[9]||(t[9]=e(" To create an array of structures, place the array size after the structure variable name. ",-1)),r(l,{language:"c",code:A})]),_:1}),r(n,null,{default:s(()=>[t[12]||(t[12]=e(" Here, ",-1)),r(u,null,{default:s(()=>[...t[10]||(t[10]=[e("students",-1)])]),_:1}),t[13]||(t[13]=e(" is an array that contains three ",-1)),r(u,null,{default:s(()=>[...t[11]||(t[11]=[e("struct Student",-1)])]),_:1}),t[14]||(t[14]=e(" variables. ",-1)),r(o,{output:S})]),_:1}),r(p,{title:"Think of It This Way"},{default:s(()=>[...t[15]||(t[15]=[e(" A structure represents one record, while an array of structures represents multiple records of the same type. ",-1)])]),_:1}),r(d,null,{default:s(()=>[...t[16]||(t[16]=[e("Accessing Structure Members",-1)])]),_:1}),r(n,null,{default:s(()=>[t[17]||(t[17]=e(" You can access a member of a specific structure in the array using its index followed by the dot operator. ",-1)),r(l,{language:"c",code:C})]),_:1}),r(n,null,{default:s(()=>[r(u,null,{default:s(()=>[...t[18]||(t[18]=[e("students[0]",-1)])]),_:1}),t[19]||(t[19]=e(" refers to the first structure in the array. The dot operator is then used to access one of its members. ",-1)),r(o,{output:T})]),_:1}),r(d,null,{default:s(()=>[...t[20]||(t[20]=[e("Using a Loop",-1)])]),_:1}),r(n,null,{default:s(()=>[t[21]||(t[21]=e(" Since an array can contain many structures, a loop can be used to process each structure one at a time. ",-1)),r(l,{language:"c",code:B}),t[22]||(t[22]=e(" Output ",-1)),r(o,{output:N})]),_:1}),r(n,null,{default:s(()=>[t[25]||(t[25]=e(" The variable ",-1)),r(u,null,{default:s(()=>[...t[23]||(t[23]=[e("i",-1)])]),_:1}),t[26]||(t[26]=e(" represents the current array index. As the loop runs, ",-1)),r(u,null,{default:s(()=>[...t[24]||(t[24]=[e("students[i]",-1)])]),_:1}),t[27]||(t[27]=e(" refers to a different structure. ",-1))]),_:1}),r(d,null,{default:s(()=>[...t[28]||(t[28]=[e("Modifying Structure Members",-1)])]),_:1}),r(n,null,{default:s(()=>[t[29]||(t[29]=e(" Members of a structure inside an array can also be modified using its index and the dot operator. ",-1)),r(l,{language:"c",code:v}),t[30]||(t[30]=e(" Output ",-1)),r(o,{output:O})]),_:1}),r(n,null,{default:s(()=>[t[34]||(t[34]=e(" In this example, ",-1)),r(u,null,{default:s(()=>[...t[31]||(t[31]=[e("students[1]",-1)])]),_:1}),t[35]||(t[35]=e(" refers to the second structure in the array. Its ",-1)),r(u,null,{default:s(()=>[...t[32]||(t[32]=[e("age",-1)])]),_:1}),t[36]||(t[36]=e(" and ",-1)),r(u,null,{default:s(()=>[...t[33]||(t[33]=[e("grade",-1)])]),_:1}),t[37]||(t[37]=e(" members are then updated. ",-1))]),_:1}),r(d,null,{default:s(()=>[...t[38]||(t[38]=[e("Summary",-1)])]),_:1}),r(n,null,{default:s(()=>[...t[39]||(t[39]=[e(" An array of structures stores multiple structures of the same type. Each structure is accessed using an array index, and its members are accessed using the dot operator. ",-1)])]),_:1}),r(n,null,{default:s(()=>[t[40]||(t[40]=e(" The general form is: ",-1)),r(l,{language:"c",code:`
						struct StructureName variable[size];`})]),_:1}),r(n,null,{default:s(()=>[t[41]||(t[41]=e(" A specific member can then be accessed using: ",-1)),r(l,{language:"c",code:`
						variable[index].member;`})]),_:1}),t[44]||(t[44]=a("br",null,null,-1)),r(m,{to:"/academia/student/classes/c-structures-and-functions"})])]),_:1}))}});export{q as default};

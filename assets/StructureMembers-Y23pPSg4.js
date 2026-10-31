import{_ as o}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{T as u,a as d,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as s}from"./TopicTerm-Djs_QcTu.js";import{C as a}from"./CodeBlock-DmHkNxFS.js";import{O as i}from"./OutputBlock-C3xonGgx.js";import{_ as g}from"./FernInfo.vue_vue_type_script_setup_true_lang-DcinX2pd.js";import{d as p,h as b,i as r,o as x,a as l,q as n,g as e}from"./index-CCexFS6P.js";const y={class:"max-w-4xl mx-auto"},A=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student student = {"Alice", 18, 92.5};

    printf("Name: %s\\n", student.name);
    printf("Age: %d\\n", student.age);
    printf("Grade: %.1f\\n", student.grade);

    return 0;
}`,T=`
Name: Alice
Age: 18
Grade: 92.5`,S=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student student = {"Alice", 18, 92.5};

    student.age = 19;
    student.grade = 95.0;

    printf("Name: %s\\n", student.name);
    printf("Age: %d\\n", student.age);
    printf("Grade: %.1f\\n", student.grade);

    return 0;
}`,v=`
Name: Alice
Age: 19
Grade: 95.0`,w=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student student = {"Alice", 18, 92.5};

    float finalGrade = student.grade + 2.5;

    printf("Name: %s\\n", student.name);
    printf("Final Grade: %.1f\\n", finalGrade);

    return 0;
}`,C=`
Name: Alice
Final Grade: 95.0`,G=`
#include <stdio.h>
#include <string.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student student = {"Alice", 18, 92.5};

    strcpy(student.name, "Maria");

    printf("Name: %s\\n", student.name);
    printf("Age: %d\\n", student.age);
    printf("Grade: %.1f\\n", student.grade);

    return 0;
}`,M=`
Name: Maria
Age: 18
Grade: 92.5`,N=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

int main() {
    struct Student student;

    printf("Enter age: ");
    scanf("%d", &student.age);

    printf("Enter grade: ");
    scanf("%f", &student.grade);

    printf("\\nAge: %d\\n", student.age);
    printf("Grade: %.1f\\n", student.grade);

    return 0;
}`,k=`
Enter age: 19
Enter grade: 91.5

Age: 19
Grade: 91.5`,R=p({__name:"StructureMembers",setup(O){return(E,t)=>(x(),b(m,null,{default:r(()=>[l("div",y,[t[53]||(t[53]=l("div",{class:"w-full flex justify-center mb-6"},[l("img",{src:o,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[54]||(t[54]=l("div",{class:"text-center mb-4"},[l("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),l("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Structure Members ")],-1)),n(u,null,{default:r(()=>[t[1]||(t[1]=e(" A structure is made up of individual ",-1)),n(s,null,{default:r(()=>[...t[0]||(t[0]=[e("members",-1)])]),_:1}),t[2]||(t[2]=e(" . Each member stores a specific piece of information about the structure. ",-1))]),_:1}),n(u,null,{default:r(()=>[t[7]||(t[7]=e(" For example, a ",-1)),n(s,null,{default:r(()=>[...t[3]||(t[3]=[e("Student",-1)])]),_:1}),t[8]||(t[8]=e(" structure can have members such as ",-1)),n(s,null,{default:r(()=>[...t[4]||(t[4]=[e("name",-1)])]),_:1}),t[9]||(t[9]=e(" , ",-1)),n(s,null,{default:r(()=>[...t[5]||(t[5]=[e("age",-1)])]),_:1}),t[10]||(t[10]=e(" , and ",-1)),n(s,null,{default:r(()=>[...t[6]||(t[6]=[e("grade",-1)])]),_:1}),t[11]||(t[11]=e(" . Each member can be accessed separately. ",-1))]),_:1}),n(d,null,{default:r(()=>[...t[12]||(t[12]=[e("Accessing Members",-1)])]),_:1}),n(u,null,{default:r(()=>[t[14]||(t[14]=e(" The dot operator ",-1)),n(s,null,{default:r(()=>[...t[13]||(t[13]=[e(".",-1)])]),_:1}),t[15]||(t[15]=e(" is used to access a member of a structure variable. ",-1)),n(a,{language:"c",code:A})]),_:1}),n(u,null,{default:r(()=>[t[16]||(t[16]=e(" The structure variable is written first, followed by the dot operator and the name of the member. ",-1)),n(i,{output:T})]),_:1}),n(g,{title:"Remember"},{default:r(()=>[...t[17]||(t[17]=[e(" Think of the dot operator as saying, “access this member from this structure.” ",-1)])]),_:1}),n(d,null,{default:r(()=>[...t[18]||(t[18]=[e("Modifying Members",-1)])]),_:1}),n(u,null,{default:r(()=>[t[19]||(t[19]=e(" Structure members can also be changed after the structure variable has been declared. ",-1)),n(a,{language:"c",code:S})]),_:1}),n(u,null,{default:r(()=>[t[22]||(t[22]=e(" Here, the ",-1)),n(s,null,{default:r(()=>[...t[20]||(t[20]=[e("age",-1)])]),_:1}),t[23]||(t[23]=e(" and ",-1)),n(s,null,{default:r(()=>[...t[21]||(t[21]=[e("grade",-1)])]),_:1}),t[24]||(t[24]=e(" members are assigned new values. The other members remain unchanged. ",-1)),n(i,{output:v})]),_:1}),n(d,null,{default:r(()=>[...t[25]||(t[25]=[e("Using Members in Expressions",-1)])]),_:1}),n(u,null,{default:r(()=>[t[26]||(t[26]=e(" A structure member can be used anywhere its data type can normally be used. For example, a numeric member can be used in a calculation. ",-1)),n(a,{language:"c",code:w}),t[27]||(t[27]=e(" Output ",-1)),n(i,{output:C})]),_:1}),n(u,null,{default:r(()=>[t[30]||(t[30]=e(" The value stored in ",-1)),n(s,null,{default:r(()=>[...t[28]||(t[28]=[e("student.grade",-1)])]),_:1}),t[31]||(t[31]=e(" is used in the calculation just like any other ",-1)),n(s,null,{default:r(()=>[...t[29]||(t[29]=[e("float",-1)])]),_:1}),t[32]||(t[32]=e(" value. ",-1))]),_:1}),n(d,null,{default:r(()=>[...t[33]||(t[33]=[e("Working with String Members",-1)])]),_:1}),n(u,null,{default:r(()=>[t[35]||(t[35]=e(" A character array member can store a string. To replace the string stored in the member, the ",-1)),n(s,null,{default:r(()=>[...t[34]||(t[34]=[e("strcpy()",-1)])]),_:1}),t[36]||(t[36]=e(" function can be used. ",-1)),n(a,{language:"c",code:G})]),_:1}),n(u,null,{default:r(()=>[t[40]||(t[40]=e(" The ",-1)),n(s,null,{default:r(()=>[...t[37]||(t[37]=[e("strcpy()",-1)])]),_:1}),t[41]||(t[41]=e(" function copies the new string into ",-1)),n(s,null,{default:r(()=>[...t[38]||(t[38]=[e("student.name",-1)])]),_:1}),t[42]||(t[42]=e(" . The ",-1)),n(s,null,{default:r(()=>[...t[39]||(t[39]=[e("string.h",-1)])]),_:1}),t[43]||(t[43]=e(" header is required to use this function. ",-1)),n(i,{output:M})]),_:1}),n(d,null,{default:r(()=>[...t[44]||(t[44]=[e("Reading Individual Members",-1)])]),_:1}),n(u,null,{default:r(()=>[t[45]||(t[45]=e(" Input can also be stored directly in individual structure members. ",-1)),n(a,{language:"c",code:N})]),_:1}),n(u,null,{default:r(()=>[t[47]||(t[47]=e(" The address of each member is passed to ",-1)),n(s,null,{default:r(()=>[...t[46]||(t[46]=[e("scanf()",-1)])]),_:1}),t[48]||(t[48]=e(" just like a regular variable. ",-1)),n(i,{output:k})]),_:1}),n(d,null,{default:r(()=>[...t[49]||(t[49]=[e("Summary",-1)])]),_:1}),n(u,null,{default:r(()=>[...t[50]||(t[50]=[e(" Structure members represent the individual pieces of data stored inside a structure. ",-1)])]),_:1}),n(u,null,{default:r(()=>[t[51]||(t[51]=e(" Use the dot operator to access a member: ",-1)),n(a,{language:"c",code:`
						structureVariable.member;`})]),_:1}),n(u,null,{default:r(()=>[...t[52]||(t[52]=[e(" Members can be read, modified, used in expressions, and used with functions that work with their respective data types. ",-1)])]),_:1}),t[55]||(t[55]=l("br",null,null,-1)),n(f,{to:"/academia/student/classes/c-array-of-structures"})])]),_:1}))}});export{R as default};

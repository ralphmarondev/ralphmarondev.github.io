import{_ as l}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{T as s,a,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{C as o,T as r}from"./CodeBlock-Ayh7J4dk.js";import{O as i}from"./OutputBlock-CjsXuZMe.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-CYGdZlbx.js";import{d as g,h as S,i as u,o as b,a as d,q as e,g as n}from"./index-DSMoD1xp.js";const x={class:"max-w-4xl mx-auto"},y=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

void displayStudent(struct Student student) {
    printf("Name: %s\\n", student.name);
    printf("Age: %d\\n", student.age);
    printf("Grade: %.1f\\n", student.grade);
}

int main() {
    struct Student student = {"Alice", 18, 92.5};

    displayStudent(student);
    return 0;
}`,A=`
Name: Alice
Age: 18
Grade: 92.5`,w=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

void displayStudent(struct Student student) {
    printf("%s - %d - %.1f\\n",
           student.name,
           student.age,
           student.grade);
}

int main() {
    struct Student students[3] = {
        {"Alice", 18, 92.5},
        {"Bob", 19, 88.0},
        {"Charlie", 18, 95.5}
    };

    for (int i = 0; i < 3; i++) {
        displayStudent(students[i]);
    }
    return 0;
}`,T=`
Alice - 18 - 92.5
Bob - 19 - 88.0
Charlie - 18 - 95.5`,C=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

void updateGrade(struct Student *student) {
    student->grade = 95.0;
}

int main() {
    struct Student student = {"Alice", 18, 92.5};
    updateGrade(&student);

    printf("Name: %s\\n", student.name);
    printf("Grade: %.1f\\n", student.grade);
    return 0;
}`,k=`
Name: Alice
Grade: 95.0`,v=`
#include <stdio.h>

struct Student {
    char name[50];
    int age;
    float grade;
};

struct Student createStudent() {
    struct Student student = {"Alice", 18, 92.5};
    return student;
}

int main() {
    struct Student student = createStudent();

    printf("Name: %s\\n", student.name);
    printf("Age: %d\\n", student.age);
    printf("Grade: %.1f\\n", student.grade);
    return 0;
}`,N=`
Name: Alice
Age: 18
Grade: 92.5`,z=g({__name:"StructuresAndFunctions",setup(G){return(O,t)=>(b(),S(f,null,{default:u(()=>[d("div",x,[t[35]||(t[35]=d("div",{class:"w-full flex justify-center mb-6"},[d("img",{src:l,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[36]||(t[36]=d("div",{class:"text-center mb-4"},[d("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),d("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Structures and Functions ")],-1)),e(s,null,{default:u(()=>[...t[0]||(t[0]=[n(" A structure can be used together with functions to organize and process related data. ",-1)])]),_:1}),e(s,null,{default:u(()=>[...t[1]||(t[1]=[n(" A structure variable can be passed to a function just like other values. This allows a function to work with all the members of a structure. ",-1)])]),_:1}),e(a,null,{default:u(()=>[...t[2]||(t[2]=[n("Passing a Structure to a Function",-1)])]),_:1}),e(s,null,{default:u(()=>[t[3]||(t[3]=n(" To pass a structure to a function, include the structure type in the function's parameter. ",-1)),e(o,{language:"c",code:y})]),_:1}),e(s,null,{default:u(()=>[t[6]||(t[6]=n(" Here, ",-1)),e(r,null,{default:u(()=>[...t[4]||(t[4]=[n("student",-1)])]),_:1}),t[7]||(t[7]=n(" is passed to ",-1)),e(r,null,{default:u(()=>[...t[5]||(t[5]=[n("displayStudent()",-1)])]),_:1}),t[8]||(t[8]=n(" . The function can then access the structure's members using the dot operator. ",-1)),e(i,{output:A})]),_:1}),e(p,{title:"Remember"},{default:u(()=>[...t[9]||(t[9]=[n(" Passing a structure to a function allows the function to work with the structure's data without declaring another structure type. ",-1)])]),_:1}),e(a,null,{default:u(()=>[...t[10]||(t[10]=[n("Passing Structures from an Array",-1)])]),_:1}),e(s,null,{default:u(()=>[t[11]||(t[11]=n(" Structures stored in an array can also be passed to a function. A loop can be used to pass each structure one at a time. ",-1)),e(o,{language:"c",code:w}),t[12]||(t[12]=n(" Output ",-1)),e(i,{output:T})]),_:1}),e(s,null,{default:u(()=>[t[14]||(t[14]=n(" In each iteration, ",-1)),e(r,null,{default:u(()=>[...t[13]||(t[13]=[n("students[i]",-1)])]),_:1}),t[15]||(t[15]=n(" represents one structure from the array and is passed to the function. ",-1))]),_:1}),e(a,null,{default:u(()=>[...t[16]||(t[16]=[n("Modifying a Structure in a Function",-1)])]),_:1}),e(s,null,{default:u(()=>[t[17]||(t[17]=n(" When a structure needs to be modified inside a function, a pointer to the structure can be passed instead. ",-1)),e(o,{language:"c",code:C})]),_:1}),e(s,null,{default:u(()=>[t[21]||(t[21]=n(" The address of ",-1)),e(r,null,{default:u(()=>[...t[18]||(t[18]=[n("student",-1)])]),_:1}),t[22]||(t[22]=n(" is passed using ",-1)),e(r,null,{default:u(()=>[...t[19]||(t[19]=[n("&",-1)])]),_:1}),t[23]||(t[23]=n(" . Inside the function, the ",-1)),e(r,null,{default:u(()=>[...t[20]||(t[20]=[n("->",-1)])]),_:1}),t[24]||(t[24]=n(" operator is used to access the structure members through the pointer. ",-1)),e(i,{output:k})]),_:1}),e(a,null,{default:u(()=>[...t[25]||(t[25]=[n("Returning a Structure from a Function",-1)])]),_:1}),e(s,null,{default:u(()=>[t[26]||(t[26]=n(" A function can also return a structure. The structure type is written before the function name as its return type. ",-1)),e(o,{language:"c",code:v})]),_:1}),e(s,null,{default:u(()=>[t[29]||(t[29]=n(" The ",-1)),e(r,null,{default:u(()=>[...t[27]||(t[27]=[n("createStudent()",-1)])]),_:1}),t[30]||(t[30]=n(" function creates a structure and returns it to ",-1)),e(r,null,{default:u(()=>[...t[28]||(t[28]=[n("main()",-1)])]),_:1}),t[31]||(t[31]=n(" . ",-1)),e(i,{output:N})]),_:1}),e(a,null,{default:u(()=>[...t[32]||(t[32]=[n("Summary",-1)])]),_:1}),e(s,null,{default:u(()=>[...t[33]||(t[33]=[n(" Structures and functions can work together in several ways. A structure can be passed to a function, modified through a pointer, or returned from a function. ",-1)])]),_:1}),e(s,null,{default:u(()=>[...t[34]||(t[34]=[n(" This makes structures useful for organizing related data while functions handle the operations performed on that data. ",-1)])]),_:1}),t[37]||(t[37]=d("br",null,null,-1)),e(m,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{z as default};

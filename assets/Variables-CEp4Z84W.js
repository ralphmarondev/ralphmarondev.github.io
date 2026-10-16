import{_ as g}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as a,a as u,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as i,C as s}from"./CodeBlock-CSdrTDFH.js";import{O as o}from"./OutputBlock-BPpR2jjy.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-TzdiyR-Q.js";import{d as b,h as v,i as n,o as w,a as r,q as e,g as l}from"./index-D3WOnH5O.js";const x={class:"max-w-4xl mx-auto"},V=`
int age;
`,T=`
int age = 20;
`,C=`
#include <stdio.h>

int main() {
    int age = 20;

    printf("%d\\n", age);
    return 0;
}
`,y=`
#include <stdio.h>

int main() {
    int age;
    age = 20;

    printf("%d\\n", age);
    return 0;
}
`,A=`
#include <stdio.h>

int main() {
    int age = 20;

    printf("%d\\n", age);

    age = 21;
    printf("%d\\n", age);
    return 0;
}
`,k=`
#include <stdio.h>

int main() {
    int score = 95;

    printf("Score: %d\\n", score);
    return 0;
}
`,O=`
#include <stdio.h>

int main() {
    int age = 20;
    int score = 95;

    printf("Age: %d\\n", age);
    printf("Score: %d\\n", score);
    return 0;
}
`,N=`
int age;
int student_age;
int score1;
`,d=`
int 2score;
`,P=`
#include <stdio.h>

int main() {
    int age = 20;
    int Age = 25;

    printf("%d\\n", age);
    printf("%d\\n", Age);
    return 0;
}
`,B=`
int age = 20;
int student_score = 95;
`,z=`
printf("%d\\n", age);
`,G=b({__name:"Variables",setup(S){return(I,t)=>(w(),v(f,null,{default:n(()=>[r("div",x,[t[83]||(t[83]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:g,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[84]||(t[84]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Variables ")],-1)),e(a,null,{default:n(()=>[...t[0]||(t[0]=[l(" A variable is a named location in memory used to store a value while a program is running. Variables allow a program to store data and work with that data throughout its execution. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[2]||(t[2]=l(" Unlike the previous lessons where values were written directly inside ",-1)),e(i,null,{default:n(()=>[...t[1]||(t[1]=[l("printf()",-1)])]),_:1}),t[3]||(t[3]=l(" , variables allow us to store values and refer to them using a name. ",-1))]),_:1}),e(u,null,{default:n(()=>[...t[4]||(t[4]=[l("Declaring a Variable",-1)])]),_:1}),e(a,null,{default:n(()=>[t[5]||(t[5]=l(" Before using a variable, we need to declare it. A variable declaration specifies the type of data it will store and the name that will be used to identify it. ",-1)),e(s,{language:"c",code:V})]),_:1}),e(a,null,{default:n(()=>[t[8]||(t[8]=l(" In this example, ",-1)),e(i,null,{default:n(()=>[...t[6]||(t[6]=[l("age",-1)])]),_:1}),t[9]||(t[9]=l(" is the variable name, while ",-1)),e(i,null,{default:n(()=>[...t[7]||(t[7]=[l("int",-1)])]),_:1}),t[10]||(t[10]=l(" specifies that the variable will store an integer. ",-1))]),_:1}),e(u,null,{default:n(()=>[...t[11]||(t[11]=[l("Initializing a Variable",-1)])]),_:1}),e(a,null,{default:n(()=>[t[12]||(t[12]=l(" A variable can be given an initial value when it is declared. This is called initialization. ",-1)),e(s,{language:"c",code:T})]),_:1}),e(a,null,{default:n(()=>[t[15]||(t[15]=l(" The variable ",-1)),e(i,null,{default:n(()=>[...t[13]||(t[13]=[l("age",-1)])]),_:1}),t[16]||(t[16]=l(" is declared and initialized with the value ",-1)),e(i,null,{default:n(()=>[...t[14]||(t[14]=[l("20",-1)])]),_:1}),t[17]||(t[17]=l(" . ",-1)),e(s,{language:"c",code:C}),t[18]||(t[18]=l(" Output ",-1)),e(o,{output:"20"})]),_:1}),e(u,null,{default:n(()=>[...t[19]||(t[19]=[l("Assigning a Value",-1)])]),_:1}),e(a,null,{default:n(()=>[t[21]||(t[21]=l(" A variable can also be declared first and assigned a value later using the assignment operator ",-1)),e(i,null,{default:n(()=>[...t[20]||(t[20]=[l("=",-1)])]),_:1}),t[22]||(t[22]=l(" . ",-1)),e(s,{language:"c",code:y}),t[23]||(t[23]=l(" Output ",-1)),e(o,{output:"20"})]),_:1}),e(a,null,{default:n(()=>[...t[24]||(t[24]=[l(" The assignment operator places the value on its right into the variable on its left. ",-1)])]),_:1}),e(u,null,{default:n(()=>[...t[25]||(t[25]=[l("Changing a Variable's Value",-1)])]),_:1}),e(a,null,{default:n(()=>[t[26]||(t[26]=l(" The value stored in a variable can be changed while the program is running. This is one of the main purposes of using variables. ",-1)),e(s,{language:"c",code:A}),t[27]||(t[27]=l(" Output ",-1)),e(o,{output:`20
21`})]),_:1}),e(a,null,{default:n(()=>[t[32]||(t[32]=l(" The variable ",-1)),e(i,null,{default:n(()=>[...t[28]||(t[28]=[l("age",-1)])]),_:1}),t[33]||(t[33]=l(" first contains ",-1)),e(i,null,{default:n(()=>[...t[29]||(t[29]=[l("20",-1)])]),_:1}),t[34]||(t[34]=l(" . After the assignment ",-1)),e(i,null,{default:n(()=>[...t[30]||(t[30]=[l("age = 21",-1)])]),_:1}),t[35]||(t[35]=l(" , its stored value becomes ",-1)),e(i,null,{default:n(()=>[...t[31]||(t[31]=[l("21",-1)])]),_:1}),t[36]||(t[36]=l(" . ",-1))]),_:1}),e(u,null,{default:n(()=>[...t[37]||(t[37]=[l("Using Variables in Output",-1)])]),_:1}),e(a,null,{default:n(()=>[t[39]||(t[39]=l(" Variables can be used with the format specifiers introduced in the previous lesson. The format specifier tells ",-1)),e(i,null,{default:n(()=>[...t[38]||(t[38]=[l("printf()",-1)])]),_:1}),t[40]||(t[40]=l(" how the value stored in the variable should be displayed. ",-1)),e(s,{language:"c",code:k}),t[41]||(t[41]=l(" Output ",-1)),e(o,{output:"Score: 95"})]),_:1}),e(a,null,{default:n(()=>[t[45]||(t[45]=l(" Here, ",-1)),e(i,null,{default:n(()=>[...t[42]||(t[42]=[l("%d",-1)])]),_:1}),t[46]||(t[46]=l(" tells ",-1)),e(i,null,{default:n(()=>[...t[43]||(t[43]=[l("printf()",-1)])]),_:1}),t[47]||(t[47]=l(" to display an integer, while ",-1)),e(i,null,{default:n(()=>[...t[44]||(t[44]=[l("score",-1)])]),_:1}),t[48]||(t[48]=l(" provides the value to display. ",-1))]),_:1}),e(u,null,{default:n(()=>[...t[49]||(t[49]=[l("Declaring Multiple Variables",-1)])]),_:1}),e(a,null,{default:n(()=>[t[50]||(t[50]=l(" Multiple variables can be declared in the same program. Each variable can store its own value. ",-1)),e(s,{language:"c",code:O}),t[51]||(t[51]=l(" Output ",-1)),e(o,{output:`Age: 20
Score: 95`})]),_:1}),e(a,null,{default:n(()=>[...t[52]||(t[52]=[l(" Each variable has its own name and stored value. Changing one variable does not automatically change another. ",-1)])]),_:1}),e(p,{title:"Think of a Variable as a Box"},{default:n(()=>[...t[53]||(t[53]=[l(" You can think of a variable as a labeled box in memory. The label is the variable name, and the value inside the box can change while the program runs. ",-1)])]),_:1}),e(u,null,{default:n(()=>[...t[54]||(t[54]=[l("Variable Naming Rules",-1)])]),_:1}),e(a,null,{default:n(()=>[t[55]||(t[55]=l(" C follows specific rules when creating variable names. A variable name can contain letters, digits, and underscores. ",-1)),e(s,{language:"c",code:N})]),_:1}),e(a,null,{default:n(()=>[t[56]||(t[56]=l(" A variable name cannot begin with a digit, and spaces are not allowed. ",-1)),e(s,{language:"c",code:d})]),_:1}),e(a,null,{default:n(()=>[...t[57]||(t[57]=[l(" The example above is invalid because the variable name begins with a digit. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[60]||(t[60]=l(" Variable names are also case-sensitive. This means ",-1)),e(i,null,{default:n(()=>[...t[58]||(t[58]=[l("age",-1)])]),_:1}),t[61]||(t[61]=l(" and ",-1)),e(i,null,{default:n(()=>[...t[59]||(t[59]=[l("Age",-1)])]),_:1}),t[62]||(t[62]=l(" are treated as different variable names. ",-1)),e(s,{language:"c",code:P}),t[63]||(t[63]=l(" Output ",-1)),e(o,{output:`20
25`})]),_:1}),e(u,null,{default:n(()=>[...t[64]||(t[64]=[l("Choosing Good Variable Names",-1)])]),_:1}),e(a,null,{default:n(()=>[t[65]||(t[65]=l(" Variable names should describe the data they represent. Clear names make a program easier to read and understand. ",-1)),e(s,{language:"c",code:B})]),_:1}),e(a,null,{default:n(()=>[t[68]||(t[68]=l(" Names such as ",-1)),e(i,null,{default:n(()=>[...t[66]||(t[66]=[l("age",-1)])]),_:1}),t[69]||(t[69]=l(" and ",-1)),e(i,null,{default:n(()=>[...t[67]||(t[67]=[l("student_score",-1)])]),_:1}),t[70]||(t[70]=l(" make the purpose of the stored values easier to understand. ",-1))]),_:1}),e(u,null,{default:n(()=>[...t[71]||(t[71]=[l("Common Mistakes",-1)])]),_:1}),e(a,null,{default:n(()=>[t[72]||(t[72]=l(" A variable must be declared before it is used. ",-1)),e(s,{language:"c",code:z})]),_:1}),e(a,null,{default:n(()=>[t[74]||(t[74]=l(" The example above is incorrect because ",-1)),e(i,null,{default:n(()=>[...t[73]||(t[73]=[l("age",-1)])]),_:1}),t[75]||(t[75]=l(" has not been declared. ",-1))]),_:1}),e(a,null,{default:n(()=>[t[76]||(t[76]=l(" Another common mistake is using a variable name that starts with a number. ",-1)),e(s,{language:"c",code:d})]),_:1}),e(a,null,{default:n(()=>[...t[77]||(t[77]=[l(" This is invalid because a variable name cannot begin with a digit. ",-1)])]),_:1}),e(u,null,{default:n(()=>[...t[78]||(t[78]=[l("Summary",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[79]||(t[79]=[l(" Variables allow programs to store and work with values during execution. A variable has a name and a data type, and its stored value can be changed while the program runs. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[81]||(t[81]=l(" In this topic, you learned how to declare variables, initialize them, assign values, change stored values, use variables with ",-1)),e(i,null,{default:n(()=>[...t[80]||(t[80]=[l("printf()",-1)])]),_:1}),t[82]||(t[82]=l(" , and follow basic variable naming rules. ",-1))]),_:1}),t[85]||(t[85]=r("br",null,null,-1)),e(m,{to:"/academia/student/classes/c-data-types"})])]),_:1}))}});export{G as default};

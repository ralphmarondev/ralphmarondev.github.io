import{_ as a}from"./logo-C9ImmdpX.js";import{T as o,a as s,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-DDUXdY-4.js";import{T as u,C as r,O as d}from"./CodeBlock-DIhZalJZ.js";import{_ as f}from"./FernInfo.vue_vue_type_script_setup_true_lang-BsSGgAE1.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-DWicuDYA.js";import{d as g,h as b,i as e,o as w,a as i,q as l,g as n}from"./index-fUs2VaN6.js";const y={class:"max-w-4xl mx-auto"},x={class:"list-disc pl-6 space-y-2"},v=`
#include <stdio.h>

void greet() {
    printf("Hello, World!\\n");
}

int main() {
    greet();

    return 0;
}`,F=`
Hello, World!`,T=`
returnType functionName() {
    // statements
}`,k=`
#include <stdio.h>

void greet() {
    printf("Hello!\\n");
}

int main() {
    greet();
    greet();
    greet();

    return 0;
}`,C=`
Hello!
Hello!
Hello!`,O=`
#include <stdio.h>

void showMessage() {
    printf("Welcome to Academia!\\n");
    printf("Let's learn C programming.\\n");
}

int main() {
    showMessage();
    return 0;
}`,P=`
Welcome to Academia!
Let's learn C programming.`,A=`
#include <stdio.h>

void startProgram() {
    printf("Program started.\\n");
}

void showMessage() {
    printf("Welcome!\\n");
}

void endProgram() {
    printf("Program ended.\\n");
}

int main() {
    startProgram();
    showMessage();
    endProgram();

    return 0;
}`,H=`
Program started.
Welcome!
Program ended.`,I=`
#include <stdio.h>

void greet() {
    printf("Hello!\\n");
}

void goodbye() {
    printf("Goodbye!\\n");
}

int main() {
    greet();
    goodbye();

    return 0;
}`,N=`
Hello!
Goodbye!`,W=`
#include <stdio.h>

void displayNumber() {
    int number = 10;

    printf("Number: %d\\n", number);
}

int main() {
    displayNumber();

    return 0;
}`,M=`
Number: 10`,B=`
#include <stdio.h>

void greet() {
    printf("Inside the function.\\n");
}

int main() {
    printf("Before function call.\\n");

    greet();

    printf("After function call.\\n");

    return 0;
}`,S=`
Before function call.
Inside the function.
After function call.`,R=g({__name:"Functions",setup(V){return($,t)=>(w(),b(p,null,{default:e(()=>[i("div",y,[t[104]||(t[104]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[105]||(t[105]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Functions ")],-1)),l(o,null,{default:e(()=>[t[1]||(t[1]=n(" A ",-1)),l(u,null,{default:e(()=>[...t[0]||(t[0]=[n("function",-1)])]),_:1}),t[2]||(t[2]=n(" is a named block of code that performs a specific task. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[3]||(t[3]=[n(" Instead of writing the same statements repeatedly, we can place them inside a function and call that function whenever we need it. ",-1)])]),_:1}),l(f,{title:"Think of It This Way"},{default:e(()=>[t[5]||(t[5]=n(" A ",-1)),l(u,null,{default:e(()=>[...t[4]||(t[4]=[n("function",-1)])]),_:1}),t[6]||(t[6]=n(" is like a small task that we can ask the program to perform whenever we need it. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[7]||(t[7]=[n("Defining a Function",-1)])]),_:1}),l(o,null,{default:e(()=>[t[8]||(t[8]=n(" Before we can use a function, we need to define it. A function definition contains the function's return type, name, and body. ",-1)),l(r,{language:"c",code:T})]),_:1}),l(o,null,{default:e(()=>[t[11]||(t[11]=n(" In this example, ",-1)),l(u,null,{default:e(()=>[...t[9]||(t[9]=[n("returnType",-1)])]),_:1}),t[12]||(t[12]=n(" specifies what the function returns, ",-1)),l(u,null,{default:e(()=>[...t[10]||(t[10]=[n("functionName",-1)])]),_:1}),t[13]||(t[13]=n(" is the name of the function, and the statements inside the braces make up the function body. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[14]||(t[14]=[n("Creating a Simple Function",-1)])]),_:1}),l(o,null,{default:e(()=>[t[16]||(t[16]=n(" Here is a simple function named ",-1)),l(u,null,{default:e(()=>[...t[15]||(t[15]=[n("greet",-1)])]),_:1}),t[17]||(t[17]=n(" that displays a message. ",-1)),l(r,{language:"c",code:v}),t[18]||(t[18]=n(" Output ",-1)),l(d,{output:F})]),_:1}),l(o,null,{default:e(()=>[t[20]||(t[20]=n(" The function is defined before ",-1)),l(u,null,{default:e(()=>[...t[19]||(t[19]=[n("main()",-1)])]),_:1}),t[21]||(t[21]=n(" . However, defining a function does not automatically execute it. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[22]||(t[22]=[n("Calling a Function",-1)])]),_:1}),l(o,null,{default:e(()=>[t[24]||(t[24]=n(" To execute a function, we need to ",-1)),l(u,null,{default:e(()=>[...t[23]||(t[23]=[n("call",-1)])]),_:1}),t[25]||(t[25]=n(" it. ",-1))]),_:1}),l(o,null,{default:e(()=>[t[26]||(t[26]=n(" In the previous example, the function is called using: ",-1)),l(r,{language:"c",code:`
						greet();`})]),_:1}),l(o,null,{default:e(()=>[t[29]||(t[29]=n(" When C reaches ",-1)),l(u,null,{default:e(()=>[...t[27]||(t[27]=[n("greet();",-1)])]),_:1}),t[30]||(t[30]=n(" , it executes the statements inside the ",-1)),l(u,null,{default:e(()=>[...t[28]||(t[28]=[n("greet",-1)])]),_:1}),t[31]||(t[31]=n(" function. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[32]||(t[32]=[n("Calling a Function Multiple Times",-1)])]),_:1}),l(o,null,{default:e(()=>[t[33]||(t[33]=n(" A function can be called more than once. Each call executes the function again. ",-1)),l(r,{language:"c",code:k}),t[34]||(t[34]=n(" Output ",-1)),l(d,{output:C})]),_:1}),l(o,null,{default:e(()=>[t[36]||(t[36]=n(" The same function is reused three times without having to write the ",-1)),l(u,null,{default:e(()=>[...t[35]||(t[35]=[n("printf",-1)])]),_:1}),t[37]||(t[37]=n(" statement three times. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[38]||(t[38]=[n("Making Code Reusable",-1)])]),_:1}),l(o,null,{default:e(()=>[t[39]||(t[39]=n(" Functions are useful because they allow us to group related statements into one reusable block. ",-1)),l(r,{language:"c",code:O}),t[40]||(t[40]=n(" Output ",-1)),l(d,{output:P})]),_:1}),l(o,null,{default:e(()=>[t[43]||(t[43]=n(" Instead of placing these messages directly inside ",-1)),l(u,null,{default:e(()=>[...t[41]||(t[41]=[n("main()",-1)])]),_:1}),t[44]||(t[44]=n(" , they are grouped inside ",-1)),l(u,null,{default:e(()=>[...t[42]||(t[42]=[n("showMessage()",-1)])]),_:1}),t[45]||(t[45]=n(" . ",-1))]),_:1}),l(f,{title:"Why Use Functions?"},{default:e(()=>[...t[46]||(t[46]=[n(" Functions help make programs ",-1),i("strong",null,"organized, reusable, and easier to understand.",-1)])]),_:1}),l(s,null,{default:e(()=>[...t[47]||(t[47]=[n("Using Multiple Functions",-1)])]),_:1}),l(o,null,{default:e(()=>[t[48]||(t[48]=n(" A program can contain many functions. Each function can be responsible for a different task. ",-1)),l(r,{language:"c",code:A}),t[49]||(t[49]=n(" Output ",-1)),l(d,{output:H})]),_:1}),l(o,null,{default:e(()=>[t[53]||(t[53]=n(" Here, the program has three separate functions: ",-1)),l(u,null,{default:e(()=>[...t[50]||(t[50]=[n("startProgram()",-1)])]),_:1}),t[54]||(t[54]=n(" , ",-1)),l(u,null,{default:e(()=>[...t[51]||(t[51]=[n("showMessage()",-1)])]),_:1}),t[55]||(t[55]=n(" , and ",-1)),l(u,null,{default:e(()=>[...t[52]||(t[52]=[n("endProgram()",-1)])]),_:1}),t[56]||(t[56]=n(" . ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[57]||(t[57]=[n("The Order of Function Calls",-1)])]),_:1}),l(o,null,{default:e(()=>[t[58]||(t[58]=n(" Functions execute in the order in which they are called. ",-1)),l(r,{language:"c",code:I}),t[59]||(t[59]=n(" Output ",-1)),l(d,{output:N})]),_:1}),l(o,null,{default:e(()=>[t[62]||(t[62]=n(" The program first calls ",-1)),l(u,null,{default:e(()=>[...t[60]||(t[60]=[n("greet()",-1)])]),_:1}),t[63]||(t[63]=n(" , then calls ",-1)),l(u,null,{default:e(()=>[...t[61]||(t[61]=[n("goodbye()",-1)])]),_:1}),t[64]||(t[64]=n(" . Therefore, the messages appear in that same order. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[65]||(t[65]=[n("void Functions",-1)])]),_:1}),l(o,null,{default:e(()=>[t[67]||(t[67]=n(" A function that does not return a value can use the ",-1)),l(u,null,{default:e(()=>[...t[66]||(t[66]=[n("void",-1)])]),_:1}),t[68]||(t[68]=n(" return type. ",-1)),l(r,{language:"c",code:W}),t[69]||(t[69]=n(" Output ",-1)),l(d,{output:M})]),_:1}),l(o,null,{default:e(()=>[t[71]||(t[71]=n(" The ",-1)),l(u,null,{default:e(()=>[...t[70]||(t[70]=[n("displayNumber()",-1)])]),_:1}),t[72]||(t[72]=n(" function performs an action but does not return a value to the code that called it. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[73]||(t[73]=[n("Following the Function Flow",-1)])]),_:1}),l(o,null,{default:e(()=>[t[74]||(t[74]=n(" When a function is called, C temporarily moves into that function, executes its statements, and then continues from where the function was called. ",-1)),l(r,{language:"c",code:B}),t[75]||(t[75]=n(" Output ",-1)),l(d,{output:S})]),_:1}),l(o,null,{default:e(()=>[t[79]||(t[79]=n(" The program starts inside ",-1)),l(u,null,{default:e(()=>[...t[76]||(t[76]=[n("main()",-1)])]),_:1}),t[80]||(t[80]=n(" . It prints the first message, calls ",-1)),l(u,null,{default:e(()=>[...t[77]||(t[77]=[n("greet()",-1)])]),_:1}),t[81]||(t[81]=n(" , executes the function, and then returns to ",-1)),l(u,null,{default:e(()=>[...t[78]||(t[78]=[n("main()",-1)])]),_:1}),t[82]||(t[82]=n(" to print the final message. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[83]||(t[83]=[n("Functions and main()",-1)])]),_:1}),l(o,null,{default:e(()=>[t[85]||(t[85]=n(" The ",-1)),l(u,null,{default:e(()=>[...t[84]||(t[84]=[n("main()",-1)])]),_:1}),t[86]||(t[86]=n(" function is also a function. It is the function where program execution begins. ",-1))]),_:1}),l(o,null,{default:e(()=>[t[88]||(t[88]=n(" Other functions can be created outside ",-1)),l(u,null,{default:e(()=>[...t[87]||(t[87]=[n("main()",-1)])]),_:1}),t[89]||(t[89]=n(" and called from it whenever their tasks are needed. ",-1))]),_:1}),l(f,{title:"Remember"},{default:e(()=>[...t[90]||(t[90]=[n(" Defining a function creates the task. ",-1),i("br",null,null,-1),n(" Calling a function tells the program to perform the task. ",-1)])]),_:1}),l(s,null,{default:e(()=>[...t[91]||(t[91]=[n("Summary",-1)])]),_:1}),l(o,null,{default:e(()=>[t[93]||(t[93]=n(" A ",-1)),l(u,null,{default:e(()=>[...t[92]||(t[92]=[n("function",-1)])]),_:1}),t[94]||(t[94]=n(" is a reusable block of code designed to perform a specific task. ",-1))]),_:1}),l(o,null,{default:e(()=>[t[103]||(t[103]=n(" Functions help organize programs by separating different tasks into smaller and reusable blocks. ",-1)),i("ul",x,[t[99]||(t[99]=i("li",null,"A function has a return type, name, and body.",-1)),t[100]||(t[100]=i("li",null,"A function must be called to execute its statements.",-1)),t[101]||(t[101]=i("li",null,"A function can be called multiple times.",-1)),t[102]||(t[102]=i("li",null,"A program can contain multiple functions.",-1)),i("li",null,[l(u,null,{default:e(()=>[...t[95]||(t[95]=[n("void",-1)])]),_:1}),t[96]||(t[96]=n(" can be used when a function does not return a value. ",-1))]),i("li",null,[l(u,null,{default:e(()=>[...t[97]||(t[97]=[n("main()",-1)])]),_:1}),t[98]||(t[98]=n(" is the starting point of a C program. ",-1))])])]),_:1}),t[106]||(t[106]=i("br",null,null,-1)),l(m,{to:"/academia/student/classes/c-parameters-and-arguments"})])]),_:1}))}});export{R as default};

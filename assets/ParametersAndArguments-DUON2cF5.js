import{_ as m}from"./logo-C9ImmdpX.js";import{T as r,a,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-C0JJmNPf.js";import{T as u}from"./TopicTerm-DFxx4A6I.js";import{C as s}from"./CodeBlock-BTW9CWle.js";import{O as o}from"./OutputBlock-1tVxatZn.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-BiF_AWI8.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-B3G-GaUa.js";import{d as g,h as b,i as l,o as v,a as i,q as e,g as n}from"./index-DxySYCEn.js";const P={class:"max-w-4xl mx-auto"},w=`
#include <stdio.h>

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    greet("Ralph");

    return 0;
}`,x=`
greet(" Ralph");`,A=`
Hello, Ralph!`,T=`
void functionName(dataType parameter) {
    // statements
}`,y=`
#include <stdio.h>

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    greet("Ralph");

    return 0;
}`,O=`
Hello, Ralph!`,C=`
#include <stdio.h>

void introduce(char name[], int age) {
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
}

int main() {
    introduce("Ralph", 25);

    return 0;
}`,N=`
Name: Ralph
Age: 25`,I=`
#include <stdio.h>

void displayInfo(char name[], int age, float height) {
    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("Height: %.2f\\n", height);
}

int main() {
    displayInfo("Ralph", 25, 1.75);

    return 0;
}`,H=`
Name: Ralph
Age: 25
Height: 1.75`,R=`
#include <stdio.h>

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    greet("Alice");
    greet("Bob");
    greet("Charlie");

    return 0;
}`,k=`
Hello, Alice!
Hello, Bob!
Hello, Charlie!`,B=`
#include <stdio.h>

void doubleNumber(int number) {
    number = number * 2;
    printf("Inside function: %d\\n", number);
}

int main() {
    int number = 5;

    doubleNumber(number);

    printf("Inside main: %d\\n", number);

    return 0;
}`,V=`
Inside function: 10
Inside main: 5`,E=`
#include <stdio.h>

void showNumber(int number) {
    printf("Number: %d\\n", number);
}

int main() {
    int first = 5;
    int second = 3;

    showNumber(first + second);

    return 0;
}`,S=`
Number: 8`,D=`
#include <stdio.h>

void checkNumber(int number) {
    if (number > 0) {
        printf("Positive number\\n");
    } else {
        printf("Not a positive number\\n");
    }
}

int main() {
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    checkNumber(number);

    return 0;
}`,F=`
Enter a number: 8
Positive number`,U=`
#include <stdio.h>

void display(int first, int second) {
    printf("First: %d\\n", first);
    printf("Second: %d\\n", second);
}

int main() {
    display(10, 20);

    return 0;
}`,W=`
First: 10
Second: 20`,X=g({__name:"ParametersAndArguments",setup($){return(j,t)=>(v(),b(p,null,{default:l(()=>[i("div",P,[t[98]||(t[98]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[99]||(t[99]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Parameters and Arguments ")],-1)),e(r,null,{default:l(()=>[t[1]||(t[1]=n(" A ",-1)),e(u,null,{default:l(()=>[...t[0]||(t[0]=[n("parameter",-1)])]),_:1}),t[2]||(t[2]=n(" is a variable listed in a function's definition. It allows a function to receive data when it is called. ",-1))]),_:1}),e(r,null,{default:l(()=>[t[3]||(t[3]=n(" Parameters make functions more flexible because the same function can work with different values. ",-1)),e(s,{language:"c",code:T})]),_:1}),e(d,{title:"Think of It This Way"},{default:l(()=>[t[5]||(t[5]=n(" A ",-1)),e(u,null,{default:l(()=>[...t[4]||(t[4]=[n("parameter",-1)])]),_:1}),t[6]||(t[6]=n(" is a placeholder for the value that the function will receive. ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[7]||(t[7]=[n("Using a Parameter",-1)])]),_:1}),e(r,null,{default:l(()=>[t[9]||(t[9]=n(" In this example, the ",-1)),e(u,null,{default:l(()=>[...t[8]||(t[8]=[n("name",-1)])]),_:1}),t[10]||(t[10]=n(" parameter allows the function to greet different people. ",-1)),e(s,{language:"c",code:w}),t[11]||(t[11]=n(" Output ",-1)),e(o,{output:A})]),_:1}),e(r,null,{default:l(()=>[t[13]||(t[13]=n(" The function does not have a specific name stored in it. Instead, ",-1)),e(u,null,{default:l(()=>[...t[12]||(t[12]=[n("name",-1)])]),_:1}),t[14]||(t[14]=n(" receives its value when the function is called. ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[15]||(t[15]=[n("What Is an Argument?",-1)])]),_:1}),e(r,null,{default:l(()=>[t[17]||(t[17]=n(" An ",-1)),e(u,null,{default:l(()=>[...t[16]||(t[16]=[n("argument",-1)])]),_:1}),t[18]||(t[18]=n(" is the actual value that is passed to a function when it is called. ",-1))]),_:1}),e(r,null,{default:l(()=>[t[21]||(t[21]=n(" In this function call: ",-1)),e(s,{language:"c",code:x}),e(u,null,{default:l(()=>[...t[19]||(t[19]=[n('"Ralph"',-1)])]),_:1}),t[22]||(t[22]=n(" is the argument that is passed to the ",-1)),e(u,null,{default:l(()=>[...t[20]||(t[20]=[n("name",-1)])]),_:1}),t[23]||(t[23]=n(" parameter. ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[24]||(t[24]=[n("Parameter vs Argument",-1)])]),_:1}),e(r,null,{default:l(()=>[t[25]||(t[25]=n(" Consider this example: ",-1)),e(s,{language:"c",code:y}),t[26]||(t[26]=n(" Output ",-1)),e(o,{output:O})]),_:1}),e(r,null,{default:l(()=>[e(u,null,{default:l(()=>[...t[27]||(t[27]=[n("name",-1)])]),_:1}),t[29]||(t[29]=n(" is the ",-1)),e(u,null,{default:l(()=>[...t[28]||(t[28]=[n("parameter",-1)])]),_:1}),t[30]||(t[30]=n(" because it appears in the function definition. ",-1))]),_:1}),e(r,null,{default:l(()=>[e(u,null,{default:l(()=>[...t[31]||(t[31]=[n('"Ralph"',-1)])]),_:1}),t[33]||(t[33]=n(" is the ",-1)),e(u,null,{default:l(()=>[...t[32]||(t[32]=[n("argument",-1)])]),_:1}),t[34]||(t[34]=n(" because it is the actual value supplied when the function is called. ",-1))]),_:1}),e(d,{title:"Remember"},{default:l(()=>[e(u,null,{default:l(()=>[...t[35]||(t[35]=[n("Parameter",-1)])]),_:1}),t[37]||(t[37]=n(" = the variable in the function definition. ",-1)),t[38]||(t[38]=i("br",null,null,-1)),e(u,null,{default:l(()=>[...t[36]||(t[36]=[n("Argument",-1)])]),_:1}),t[39]||(t[39]=n(" = the value passed when calling the function. ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[40]||(t[40]=[n("Multiple Parameters",-1)])]),_:1}),e(r,null,{default:l(()=>[t[41]||(t[41]=n(" A function can have more than one parameter. Each parameter is separated by a comma. ",-1)),e(s,{language:"c",code:C}),t[42]||(t[42]=n(" Output ",-1)),e(o,{output:N})]),_:1}),e(r,null,{default:l(()=>[t[45]||(t[45]=n(" This function has two parameters: ",-1)),e(u,null,{default:l(()=>[...t[43]||(t[43]=[n("name",-1)])]),_:1}),t[46]||(t[46]=n(" and ",-1)),e(u,null,{default:l(()=>[...t[44]||(t[44]=[n("age",-1)])]),_:1}),t[47]||(t[47]=n(" . The function call provides two corresponding arguments. ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[48]||(t[48]=[n("Parameters with Different Data Types",-1)])]),_:1}),e(r,null,{default:l(()=>[t[49]||(t[49]=n(" Parameters can have different data types depending on the kind of value the function needs. ",-1)),e(s,{language:"c",code:I}),t[50]||(t[50]=n(" Output ",-1)),e(o,{output:H})]),_:1}),e(r,null,{default:l(()=>[...t[51]||(t[51]=[n(" Here, the function receives a string, an integer, and a floating-point value. ",-1)])]),_:1}),e(a,null,{default:l(()=>[...t[52]||(t[52]=[n("Calling a Function with Different Arguments",-1)])]),_:1}),e(r,null,{default:l(()=>[t[53]||(t[53]=n(" The same function can be called multiple times with different arguments. ",-1)),e(s,{language:"c",code:R}),t[54]||(t[54]=n(" Output ",-1)),e(o,{output:k})]),_:1}),e(r,null,{default:l(()=>[t[56]||(t[56]=n(" The function stays the same, but the value received by ",-1)),e(u,null,{default:l(()=>[...t[55]||(t[55]=[n("name",-1)])]),_:1}),t[57]||(t[57]=n(" changes with every call. ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[58]||(t[58]=[n("Parameters Have Their Own Values",-1)])]),_:1}),e(r,null,{default:l(()=>[t[60]||(t[60]=n(" A parameter receives a value when the function is called. Changing the parameter inside the function does not automatically change the original variable in ",-1)),e(u,null,{default:l(()=>[...t[59]||(t[59]=[n("main()",-1)])]),_:1}),t[61]||(t[61]=n(" . ",-1)),e(s,{language:"c",code:B}),t[62]||(t[62]=n(" Output ",-1)),e(o,{output:V})]),_:1}),e(r,null,{default:l(()=>[t[68]||(t[68]=n(" The parameter ",-1)),e(u,null,{default:l(()=>[...t[63]||(t[63]=[n("number",-1)])]),_:1}),t[69]||(t[69]=n(" inside the function receives the value ",-1)),e(u,null,{default:l(()=>[...t[64]||(t[64]=[n("5",-1)])]),_:1}),t[70]||(t[70]=n(" . Changing that parameter to ",-1)),e(u,null,{default:l(()=>[...t[65]||(t[65]=[n("10",-1)])]),_:1}),t[71]||(t[71]=n(" does not change the ",-1)),e(u,null,{default:l(()=>[...t[66]||(t[66]=[n("number",-1)])]),_:1}),t[72]||(t[72]=n(" variable in ",-1)),e(u,null,{default:l(()=>[...t[67]||(t[67]=[n("main()",-1)])]),_:1}),t[73]||(t[73]=n(" . ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[74]||(t[74]=[n("Passing an Expression as an Argument",-1)])]),_:1}),e(r,null,{default:l(()=>[t[75]||(t[75]=n(" An argument does not always have to be a variable. An expression can also be passed to a function. ",-1)),e(s,{language:"c",code:E}),t[76]||(t[76]=n(" Output ",-1)),e(o,{output:S})]),_:1}),e(r,null,{default:l(()=>[t[79]||(t[79]=n(" The expression ",-1)),e(u,null,{default:l(()=>[...t[77]||(t[77]=[n("first + second",-1)])]),_:1}),t[80]||(t[80]=n(" is evaluated first. Its result, ",-1)),e(u,null,{default:l(()=>[...t[78]||(t[78]=[n("8",-1)])]),_:1}),t[81]||(t[81]=n(" , is then passed to the function. ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[82]||(t[82]=[n("Using User Input as an Argument",-1)])]),_:1}),e(r,null,{default:l(()=>[t[83]||(t[83]=n(" Values entered by the user can also be passed to a function. ",-1)),e(s,{language:"c",code:D}),t[84]||(t[84]=n(" Output ",-1)),e(o,{output:F})]),_:1}),e(r,null,{default:l(()=>[t[87]||(t[87]=n(" The value entered by the user is stored in ",-1)),e(u,null,{default:l(()=>[...t[85]||(t[85]=[n("number",-1)])]),_:1}),t[88]||(t[88]=n(" , and that value is then passed to ",-1)),e(u,null,{default:l(()=>[...t[86]||(t[86]=[n("checkNumber()",-1)])]),_:1}),t[89]||(t[89]=n(" . ",-1))]),_:1}),e(a,null,{default:l(()=>[...t[90]||(t[90]=[n("The Order of Arguments",-1)])]),_:1}),e(r,null,{default:l(()=>[t[91]||(t[91]=n(" When a function has multiple parameters, the order of the arguments matters. ",-1)),e(s,{language:"c",code:U}),t[92]||(t[92]=n(" Output ",-1)),e(o,{output:W})]),_:1}),e(r,null,{default:l(()=>[...t[93]||(t[93]=[n(" The first argument is assigned to the first parameter, while the second argument is assigned to the second parameter. ",-1)])]),_:1}),e(d,{title:"Keep the Order in Mind"},{default:l(()=>[...t[94]||(t[94]=[n(" The arguments are matched to parameters ",-1),i("strong",null,"from left to right.",-1)])]),_:1}),e(a,null,{default:l(()=>[...t[95]||(t[95]=[n("Summary",-1)])]),_:1}),e(r,null,{default:l(()=>[...t[96]||(t[96]=[n(" Parameters allow functions to receive values when they are called. Arguments are the actual values supplied to those parameters. ",-1)])]),_:1}),e(r,null,{default:l(()=>[...t[97]||(t[97]=[i("ul",{class:"list-disc pl-6 space-y-2"},[i("li",null,"A parameter is declared in the function definition."),i("li",null,"An argument is supplied when the function is called."),i("li",null,"A function can have one or multiple parameters."),i("li",null,"Parameters can have different data types."),i("li",null,"The order of arguments corresponds to the order of parameters."),i("li",null,"Variables, expressions, and user input can be used as arguments.")],-1)])]),_:1}),t[100]||(t[100]=i("br",null,null,-1)),e(f,{to:"/academia/student/classes/c-return-values"})])]),_:1}))}});export{X as default};

import{_ as m}from"./logo-C9ImmdpX.js";import{T as i,a,_ as b}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as u}from"./TopicTerm-Djs_QcTu.js";import{C as o}from"./CodeBlock-DmHkNxFS.js";import{O as s}from"./OutputBlock-C3xonGgx.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-DcinX2pd.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{d as p,h as g,i as e,o as v,a as r,q as t,g as n}from"./index-CCexFS6P.js";const N={class:"max-w-4xl mx-auto"},y=`
#include <stdio.h>

void displayNumber() {
    int number = 10;

    printf("Number: %d\\n", number);
}

int main() {
    displayNumber();

    return 0;
}`,w=`
Number: 10`,O=`
#include <stdio.h>

int main() {
    int number = 20;

    printf("Number: %d\\n", number);

    return 0;
}`,T=`
Number: 20`,x=`
#include <stdio.h>

void firstFunction() {
    int number = 10;

    printf("First: %d\\n", number);
}

void secondFunction() {
    int number = 20;

    printf("Second: %d\\n", number);
}

int main() {
    firstFunction();
    secondFunction();

    return 0;
}`,V=`
First: 10
Second: 20`,S=`
#include <stdio.h>

void displayNumber(int number) {
    printf("Number: %d\\n", number);
}

int main() {
    displayNumber(25);

    return 0;
}`,P=`
Number: 25`,k=`
#include <stdio.h>

void displayNumber() {
    int number = 10;

    printf("Function: %d\\n", number);
}

int main() {
    int number = 20;

    displayNumber();

    printf("Main: %d\\n", number);

    return 0;
}`,A=`
Function: 10
Main: 20`,F=`
#include <stdio.h>

int main() {
    int number = 10;

    if (number > 0) {
        int message = 20;

        printf("Number: %d\\n", number);
        printf("Message: %d\\n", message);
    }

    return 0;
}`,I=`
Number: 10
Message: 20`,L=`
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
}`,B=`
Inside function: 10
Inside main: 5`,C=`
#include <stdio.h>

int number = 50;

void displayNumber() {
    printf("Number: %d\\n", number);
}

int main() {
    displayNumber();

    printf("Number: %d\\n", number);

    return 0;
}`,M=`
Number: 50
Number: 50`,$=`
#include <stdio.h>

int number = 50;

void displayNumber() {
    int number = 10;

    printf("Function: %d\\n", number);
}

int main() {
    printf("Main: %d\\n", number);

    displayNumber();

    return 0;
}`,j=`
Main: 50
Function: 10`,J=p({__name:"Scope",setup(D){return(G,l)=>(v(),g(f,null,{default:e(()=>[r("div",N,[l[100]||(l[100]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[101]||(l[101]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Scope ")],-1)),t(i,null,{default:e(()=>[l[1]||(l[1]=n(" The ",-1)),t(u,null,{default:e(()=>[...l[0]||(l[0]=[n("scope",-1)])]),_:1}),l[2]||(l[2]=n(" of a variable determines where that variable can be accessed in a program. ",-1))]),_:1}),t(i,null,{default:e(()=>[...l[3]||(l[3]=[n(" Variables declared in different parts of a program may not be accessible everywhere. Understanding scope helps us know where a variable can be used. ",-1)])]),_:1}),t(d,{title:"Think of It This Way"},{default:e(()=>[...l[4]||(l[4]=[n(" Scope is like a boundary. A variable can be used inside the part of the program where it exists. ",-1)])]),_:1}),t(a,null,{default:e(()=>[...l[5]||(l[5]=[n("Local Variables",-1)])]),_:1}),t(i,null,{default:e(()=>[l[7]||(l[7]=n(" A variable declared inside a function is a ",-1)),t(u,null,{default:e(()=>[...l[6]||(l[6]=[n("local variable",-1)])]),_:1}),l[8]||(l[8]=n(". It can be accessed inside that function. ",-1)),t(o,{language:"c",code:y}),l[9]||(l[9]=n(" Output ",-1)),t(s,{output:w})]),_:1}),t(i,null,{default:e(()=>[l[12]||(l[12]=n(" The variable ",-1)),t(u,null,{default:e(()=>[...l[10]||(l[10]=[n("number",-1)])]),_:1}),l[13]||(l[13]=n(" is declared inside ",-1)),t(u,null,{default:e(()=>[...l[11]||(l[11]=[n("displayNumber()",-1)])]),_:1}),l[14]||(l[14]=n(", so it belongs to that function. ",-1))]),_:1}),t(a,null,{default:e(()=>[...l[15]||(l[15]=[n("Variables in main()",-1)])]),_:1}),t(i,null,{default:e(()=>[l[17]||(l[17]=n(" Variables declared inside ",-1)),t(u,null,{default:e(()=>[...l[16]||(l[16]=[n("main()",-1)])]),_:1}),l[18]||(l[18]=n(" are also local variables. ",-1)),t(o,{language:"c",code:O}),l[19]||(l[19]=n(" Output ",-1)),t(s,{output:T})]),_:1}),t(i,null,{default:e(()=>[l[22]||(l[22]=n(" The variable ",-1)),t(u,null,{default:e(()=>[...l[20]||(l[20]=[n("number",-1)])]),_:1}),l[23]||(l[23]=n(" can be used inside ",-1)),t(u,null,{default:e(()=>[...l[21]||(l[21]=[n("main()",-1)])]),_:1}),l[24]||(l[24]=n(" because that is where it was declared. ",-1))]),_:1}),t(a,null,{default:e(()=>[...l[25]||(l[25]=[n("Each Function Has Its Own Scope",-1)])]),_:1}),t(i,null,{default:e(()=>[l[26]||(l[26]=n(" Different functions can have local variables with the same name. ",-1)),t(o,{language:"c",code:x}),l[27]||(l[27]=n(" Output ",-1)),t(s,{output:V})]),_:1}),t(i,null,{default:e(()=>[l[31]||(l[31]=n(" Both functions have a variable named ",-1)),t(u,null,{default:e(()=>[...l[28]||(l[28]=[n("number",-1)])]),_:1}),l[32]||(l[32]=n(", but they are separate local variables. The ",-1)),t(u,null,{default:e(()=>[...l[29]||(l[29]=[n("number",-1)])]),_:1}),l[33]||(l[33]=n(" in one function does not become the ",-1)),t(u,null,{default:e(()=>[...l[30]||(l[30]=[n("number",-1)])]),_:1}),l[34]||(l[34]=n(" in another function. ",-1))]),_:1}),t(d,{title:"Remember"},{default:e(()=>[...l[35]||(l[35]=[n(" A local variable belongs to the function where it is declared. ",-1)])]),_:1}),t(a,null,{default:e(()=>[...l[36]||(l[36]=[n("Parameters Are Local to the Function",-1)])]),_:1}),t(i,null,{default:e(()=>[l[37]||(l[37]=n(" Function parameters also belong to the function where they are declared. ",-1)),t(o,{language:"c",code:S}),l[38]||(l[38]=n(" Output ",-1)),t(s,{output:P})]),_:1}),t(i,null,{default:e(()=>[l[42]||(l[42]=n(" The parameter ",-1)),t(u,null,{default:e(()=>[...l[39]||(l[39]=[n("number",-1)])]),_:1}),l[43]||(l[43]=n(" can be used inside ",-1)),t(u,null,{default:e(()=>[...l[40]||(l[40]=[n("displayNumber()",-1)])]),_:1}),l[44]||(l[44]=n(". It is not automatically available as a parameter in ",-1)),t(u,null,{default:e(()=>[...l[41]||(l[41]=[n("main()",-1)])]),_:1}),l[45]||(l[45]=n(". ",-1))]),_:1}),t(a,null,{default:e(()=>[...l[46]||(l[46]=[n("Variables with the Same Name",-1)])]),_:1}),t(i,null,{default:e(()=>[l[48]||(l[48]=n(" A function and ",-1)),t(u,null,{default:e(()=>[...l[47]||(l[47]=[n("main()",-1)])]),_:1}),l[49]||(l[49]=n(" can have local variables with the same name. ",-1)),t(o,{language:"c",code:k}),l[50]||(l[50]=n(" Output ",-1)),t(s,{output:A})]),_:1}),t(i,null,{default:e(()=>[l[52]||(l[52]=n(" The two ",-1)),t(u,null,{default:e(()=>[...l[51]||(l[51]=[n("number",-1)])]),_:1}),l[53]||(l[53]=n(" variables are separate because they belong to different functions. ",-1))]),_:1}),t(a,null,{default:e(()=>[...l[54]||(l[54]=[n("Scope Inside a Block",-1)])]),_:1}),t(i,null,{default:e(()=>[l[56]||(l[56]=n(" Variables can also be declared inside a block, such as an ",-1)),t(u,null,{default:e(()=>[...l[55]||(l[55]=[n("if",-1)])]),_:1}),l[57]||(l[57]=n(" statement. ",-1)),t(o,{language:"c",code:F}),l[58]||(l[58]=n(" Output ",-1)),t(s,{output:I})]),_:1}),t(i,null,{default:e(()=>[l[61]||(l[61]=n(" The variable ",-1)),t(u,null,{default:e(()=>[...l[59]||(l[59]=[n("message",-1)])]),_:1}),l[62]||(l[62]=n(" is declared inside the ",-1)),t(u,null,{default:e(()=>[...l[60]||(l[60]=[n("if",-1)])]),_:1}),l[63]||(l[63]=n(" block, so it can be used inside that block. ",-1))]),_:1}),t(a,null,{default:e(()=>[...l[64]||(l[64]=[n("A Parameter and a Local Variable",-1)])]),_:1}),t(i,null,{default:e(()=>[l[65]||(l[65]=n(" Parameters and local variables both belong to the function where they are declared. ",-1)),t(o,{language:"c",code:L}),l[66]||(l[66]=n(" Output ",-1)),t(s,{output:B})]),_:1}),t(i,null,{default:e(()=>[l[70]||(l[70]=n(" The parameter ",-1)),t(u,null,{default:e(()=>[...l[67]||(l[67]=[n("number",-1)])]),_:1}),l[71]||(l[71]=n(" inside the function is separate from the ",-1)),t(u,null,{default:e(()=>[...l[68]||(l[68]=[n("number",-1)])]),_:1}),l[72]||(l[72]=n(" declared in ",-1)),t(u,null,{default:e(()=>[...l[69]||(l[69]=[n("main()",-1)])]),_:1}),l[73]||(l[73]=n(". ",-1))]),_:1}),t(a,null,{default:e(()=>[...l[74]||(l[74]=[n("Global Variables",-1)])]),_:1}),t(i,null,{default:e(()=>[l[76]||(l[76]=n(" A variable declared outside of all functions is called a ",-1)),t(u,null,{default:e(()=>[...l[75]||(l[75]=[n("global variable",-1)])]),_:1}),l[77]||(l[77]=n(". ",-1)),t(o,{language:"c",code:C}),l[78]||(l[78]=n(" Output ",-1)),t(s,{output:M})]),_:1}),t(i,null,{default:e(()=>[l[82]||(l[82]=n(" The variable ",-1)),t(u,null,{default:e(()=>[...l[79]||(l[79]=[n("number",-1)])]),_:1}),l[83]||(l[83]=n(" is declared outside ",-1)),t(u,null,{default:e(()=>[...l[80]||(l[80]=[n("main()",-1)])]),_:1}),l[84]||(l[84]=n(" and ",-1)),t(u,null,{default:e(()=>[...l[81]||(l[81]=[n("displayNumber()",-1)])]),_:1}),l[85]||(l[85]=n(". It can therefore be accessed by both functions. ",-1))]),_:1}),t(a,null,{default:e(()=>[...l[86]||(l[86]=[n("Local and Global Variables with the Same Name",-1)])]),_:1}),t(i,null,{default:e(()=>[l[87]||(l[87]=n(" A local variable can have the same name as a global variable. ",-1)),t(o,{language:"c",code:$}),l[88]||(l[88]=n(" Output ",-1)),t(s,{output:j})]),_:1}),t(i,null,{default:e(()=>[l[92]||(l[92]=n(" Inside ",-1)),t(u,null,{default:e(()=>[...l[89]||(l[89]=[n("displayNumber()",-1)])]),_:1}),l[93]||(l[93]=n(", the local ",-1)),t(u,null,{default:e(()=>[...l[90]||(l[90]=[n("number",-1)])]),_:1}),l[94]||(l[94]=n(" is used instead of the global ",-1)),t(u,null,{default:e(()=>[...l[91]||(l[91]=[n("number",-1)])]),_:1}),l[95]||(l[95]=n(". ",-1))]),_:1}),t(d,{title:"Keep This in Mind"},{default:e(()=>[...l[96]||(l[96]=[n(" When a local and global variable have the same name, the local variable takes precedence within its scope. ",-1)])]),_:1}),t(a,null,{default:e(()=>[...l[97]||(l[97]=[n("Summary",-1)])]),_:1}),t(i,null,{default:e(()=>[...l[98]||(l[98]=[n(" Scope determines where a variable can be accessed in a program. Variables declared inside functions are local to those functions, while variables declared outside functions can be accessed from multiple functions. ",-1)])]),_:1}),t(i,null,{default:e(()=>[...l[99]||(l[99]=[r("ul",{class:"list-disc pl-6 space-y-2"},[r("li",null,"A variable declared inside a function is local to that function."),r("li",null,"Parameters are local to the function that receives them."),r("li",null,"Different functions can have local variables with the same name."),r("li",null,"Variables can also have a smaller scope inside a block."),r("li",null,"A variable declared outside functions can be a global variable."),r("li",null,"A local variable can have the same name as a global variable.")],-1)])]),_:1}),l[102]||(l[102]=r("br",null,null,-1)),t(b,{to:"/academia/student/classes/c-recursion"})])]),_:1}))}});export{J as default};

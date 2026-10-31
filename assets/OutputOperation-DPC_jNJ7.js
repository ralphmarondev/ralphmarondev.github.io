import{_ as m}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{T as e,a as s,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as o}from"./TopicTerm-Djs_QcTu.js";import{C as r}from"./CodeBlock-DmHkNxFS.js";import{O as d}from"./OutputBlock-C3xonGgx.js";import{d as a,h as g,i as u,o as x,a as i,q as n,g as l}from"./index-CCexFS6P.js";const b={class:"max-w-4xl mx-auto"},C={class:"list-disc pl-8 space-y-2"},y={class:"list-disc pl-8 mt-3 space-y-2"},T=`
#include <stdio.h>
`,w=`
printf("Welcome to Academia!");
`,O=`
#include <stdio.h>

int main() {
    printf("Welcome to Academia!");
    return 0;
}
`,k=`
#include <stdio.h>

int main() {
    printf("Hello!");
    printf("Welcome to C programming.");
    return 0;
}
`,W=`
#include <stdio.h>

int main() {
    printf("Hello!\\n");
    printf("Welcome to C programming.");
    return 0;
}
`,v=`
#include <stdio.h>

int main() {
    printf("C programming ");
    printf("is fun!");
    return 0;
}
`,A=`
#include <stdio.h>

int main() {
    printf("Name: Fern\\n");
    printf("Course: C Programming\\n");
    printf("Welcome to Academia!");
    return 0;
}
`,L=a({__name:"OutputOperation",setup(F){return(M,t)=>(x(),g(p,null,{default:u(()=>[i("div",b,[t[77]||(t[77]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[78]||(t[78]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Output Operations ")],-1)),n(e,null,{default:u(()=>[t[1]||(t[1]=l(" Output operations allow a program to display information to the user. In C, the most common function used to display output is ",-1)),n(o,null,{default:u(()=>[...t[0]||(t[0]=[l("printf()",-1)])]),_:1}),t[2]||(t[2]=l(" . ",-1))]),_:1}),n(e,null,{default:u(()=>[t[5]||(t[5]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[3]||(t[3]=[l("printf()",-1)])]),_:1}),t[6]||(t[6]=l(" function is part of the standard input and output library. To use it, we include the ",-1)),n(o,null,{default:u(()=>[...t[4]||(t[4]=[l("stdio.h",-1)])]),_:1}),t[7]||(t[7]=l(" header file at the beginning of the program. ",-1)),n(r,{code:T,language:"c"})]),_:1}),n(s,null,{default:u(()=>[...t[8]||(t[8]=[l("The printf() Function",-1)])]),_:1}),n(e,null,{default:u(()=>[t[11]||(t[11]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[9]||(t[9]=[l("printf()",-1)])]),_:1}),t[12]||(t[12]=l(" function is used to send text and other output to the screen. A basic ",-1)),n(o,null,{default:u(()=>[...t[10]||(t[10]=[l("printf()",-1)])]),_:1}),t[13]||(t[13]=l(" statement looks like this: ",-1)),n(r,{code:w,language:"c"})]),_:1}),n(e,null,{default:u(()=>[...t[14]||(t[14]=[l(" Text written inside the parentheses must be enclosed in double quotation marks. This text is displayed exactly as it is written. ",-1)])]),_:1}),n(s,null,{default:u(()=>[...t[15]||(t[15]=[l("Displaying Text",-1)])]),_:1}),n(e,null,{default:u(()=>[t[16]||(t[16]=l(" Let's look at a complete program that displays a message on the screen. ",-1)),n(r,{code:O,language:"c"})]),_:1}),n(e,null,{default:u(()=>[t[18]||(t[18]=l(" When the program runs, ",-1)),n(o,null,{default:u(()=>[...t[17]||(t[17]=[l("printf()",-1)])]),_:1}),t[19]||(t[19]=l(" displays the message inside the quotation marks. ",-1)),n(d,{output:"Welcome to Academia!"})]),_:1}),n(s,null,{default:u(()=>[...t[20]||(t[20]=[l("Using Multiple printf() Statements",-1)])]),_:1}),n(e,null,{default:u(()=>[t[22]||(t[22]=l(" A program can use ",-1)),n(o,null,{default:u(()=>[...t[21]||(t[21]=[l("printf()",-1)])]),_:1}),t[23]||(t[23]=l(" more than once. Each function call produces output. ",-1)),n(r,{code:k,language:"c"})]),_:1}),n(e,null,{default:u(()=>[t[24]||(t[24]=l(" Since both statements produce output on the same line, the messages appear directly beside each other. ",-1)),n(d,{output:"Hello!Welcome to C programming."})]),_:1}),n(s,null,{default:u(()=>[...t[25]||(t[25]=[l("Moving to a New Line",-1)])]),_:1}),n(e,null,{default:u(()=>[t[27]||(t[27]=l(" Sometimes, we want each message to appear on a separate line. We can use ",-1)),n(o,null,{default:u(()=>[...t[26]||(t[26]=[l("\\n",-1)])]),_:1}),t[28]||(t[28]=l(" inside a string to move the output to the next line. ",-1)),n(r,{code:W,language:"c"}),t[29]||(t[29]=l(" Output ",-1)),n(d,{output:`Hello!
Welcome to C programming.`})]),_:1}),n(e,null,{default:u(()=>[t[31]||(t[31]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[30]||(t[30]=[l("\\n",-1)])]),_:1}),t[32]||(t[32]=l(" tells the program to continue the output from the beginning of the next line. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[33]||(t[33]=[l("Combining Output",-1)])]),_:1}),n(e,null,{default:u(()=>[t[35]||(t[35]=l(" Multiple ",-1)),n(o,null,{default:u(()=>[...t[34]||(t[34]=[l("printf()",-1)])]),_:1}),t[36]||(t[36]=l(" statements can also be used to build a single message. ",-1)),n(r,{code:v,language:"c"}),t[37]||(t[37]=l(" Output ",-1)),n(d,{output:"C programming is fun!"})]),_:1}),n(e,null,{default:u(()=>[t[39]||(t[39]=l(" The output from each ",-1)),n(o,null,{default:u(()=>[...t[38]||(t[38]=[l("printf()",-1)])]),_:1}),t[40]||(t[40]=l(" call is placed immediately after the previous output because no new line was added. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[41]||(t[41]=[l("Creating Readable Output",-1)])]),_:1}),n(e,null,{default:u(()=>[t[44]||(t[44]=l(" We can use multiple ",-1)),n(o,null,{default:u(()=>[...t[42]||(t[42]=[l("printf()",-1)])]),_:1}),t[45]||(t[45]=l(" statements and ",-1)),n(o,null,{default:u(()=>[...t[43]||(t[43]=[l("\\n",-1)])]),_:1}),t[46]||(t[46]=l(" to organize information and make the output easier to read. ",-1)),n(r,{code:A,language:"c"}),t[47]||(t[47]=l(" Output ",-1)),n(d,{output:`Name: Fern
Course: C Programming
Welcome to Academia!`})]),_:1}),n(s,null,{default:u(()=>[...t[48]||(t[48]=[l("Common Mistakes",-1)])]),_:1}),n(e,null,{default:u(()=>[t[50]||(t[50]=l(" When using ",-1)),n(o,null,{default:u(()=>[...t[49]||(t[49]=[l("printf()",-1)])]),_:1}),t[51]||(t[51]=l(" , beginners commonly make a few simple mistakes: ",-1))]),_:1}),n(e,null,{default:u(()=>[i("ul",C,[i("li",null,[t[53]||(t[53]=l(" Forgetting to include ",-1)),n(o,null,{default:u(()=>[...t[52]||(t[52]=[l("stdio.h",-1)])]),_:1}),t[54]||(t[54]=l(" . ",-1))]),t[58]||(t[58]=i("li",null," Forgetting the quotation marks around text. ",-1)),t[59]||(t[59]=i("li",null," Forgetting the semicolon at the end of the statement. ",-1)),i("li",null,[t[56]||(t[56]=l(" Misspelling ",-1)),n(o,null,{default:u(()=>[...t[55]||(t[55]=[l("printf()",-1)])]),_:1}),t[57]||(t[57]=l(" . ",-1))])])]),_:1}),n(s,null,{default:u(()=>[...t[60]||(t[60]=[l("Summary",-1)])]),_:1}),n(e,null,{default:u(()=>[...t[61]||(t[61]=[l(" Output operations allow a C program to communicate information to the user through the screen. ",-1)])]),_:1}),n(e,null,{default:u(()=>[t[76]||(t[76]=l(" In this topic, you learned that: ",-1)),i("ul",y,[i("li",null,[n(o,null,{default:u(()=>[...t[62]||(t[62]=[l("printf()",-1)])]),_:1}),t[63]||(t[63]=l(" is used to display output. ",-1))]),i("li",null,[n(o,null,{default:u(()=>[...t[64]||(t[64]=[l("stdio.h",-1)])]),_:1}),t[66]||(t[66]=l(" provides the ",-1)),n(o,null,{default:u(()=>[...t[65]||(t[65]=[l("printf()",-1)])]),_:1}),t[67]||(t[67]=l(" function. ",-1))]),i("li",null,[t[69]||(t[69]=l(" Text displayed by ",-1)),n(o,null,{default:u(()=>[...t[68]||(t[68]=[l("printf()",-1)])]),_:1}),t[70]||(t[70]=l(" is placed inside double quotation marks. ",-1))]),i("li",null,[t[72]||(t[72]=l(" Multiple ",-1)),n(o,null,{default:u(()=>[...t[71]||(t[71]=[l("printf()",-1)])]),_:1}),t[73]||(t[73]=l(" statements can be used in one program. ",-1))]),i("li",null,[n(o,null,{default:u(()=>[...t[74]||(t[74]=[l("\\n",-1)])]),_:1}),t[75]||(t[75]=l(" can be used to move output to a new line. ",-1))])])]),_:1}),t[79]||(t[79]=i("br",null,null,-1)),n(f,{to:"/academia/student/classes/c-format-specifiers"})])]),_:1}))}});export{L as default};

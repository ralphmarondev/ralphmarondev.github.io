import{_ as a}from"./logo-C9ImmdpX.js";import{_ as d}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{T as r,a as i,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as u}from"./TopicTerm-Djs_QcTu.js";import{C as s}from"./CodeBlock-DmHkNxFS.js";import{O as p}from"./OutputBlock-C3xonGgx.js";import{d as m,h as g,i as l,o as w,a as o,q as n,g as e}from"./index-CCexFS6P.js";const y={class:"max-w-4xl mx-auto"},v={class:"list-disc pl-8 mt-3 space-y-2"},x=`
#include <stdio.h>

int main() {
    getchar();
    return 0;
}
`,b=`
#include <stdio.h>

int main() {
    printf("Press Enter to continue...");
    getchar();
    return 0;
}
`,I=`
#include <stdio.h>

int main() {
    printf("Press a key: ");
    getchar();

    printf("\\nPress another key: ");
    getchar();
    return 0;
}
`,T=`
#include <stdio.h>

int main() {
    printf("Type something and press Enter: ");
    getchar();

    printf("Input received!");
    return 0;
}
`,q=m({__name:"InputOperations",setup(C){return(k,t)=>(w(),g(d,null,{default:l(()=>[o("div",y,[t[53]||(t[53]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[54]||(t[54]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Input Operations ")],-1)),n(r,null,{default:l(()=>[t[1]||(t[1]=e(" So far, we have learned how a C program can display information using ",-1)),n(u,null,{default:l(()=>[...t[0]||(t[0]=[e("printf()",-1)])]),_:1}),t[2]||(t[2]=e(" . However, programs often need to receive information from the user as well. ",-1))]),_:1}),n(r,null,{default:l(()=>[n(u,null,{default:l(()=>[...t[3]||(t[3]=[e("Input",-1)])]),_:1}),t[4]||(t[4]=e(" is the process of receiving data from an external source, such as the keyboard. In C, several functions can be used to receive input. ",-1))]),_:1}),n(i,null,{default:l(()=>[...t[5]||(t[5]=[e("The getchar() Function",-1)])]),_:1}),n(r,null,{default:l(()=>[t[7]||(t[7]=e(" One of the simplest input functions in C is ",-1)),n(u,null,{default:l(()=>[...t[6]||(t[6]=[e("getchar()",-1)])]),_:1}),t[8]||(t[8]=e(" . It reads a single character from the keyboard. ",-1))]),_:1}),n(r,null,{default:l(()=>[t[11]||(t[11]=e(" The function is provided by the ",-1)),n(u,null,{default:l(()=>[...t[9]||(t[9]=[e("stdio.h",-1)])]),_:1}),t[12]||(t[12]=e(" header file, which we have already used with ",-1)),n(u,null,{default:l(()=>[...t[10]||(t[10]=[e("printf()",-1)])]),_:1}),t[13]||(t[13]=e(" . ",-1)),n(s,{code:x,language:"c"})]),_:1}),n(r,null,{default:l(()=>[t[15]||(t[15]=e(" When the program reaches ",-1)),n(u,null,{default:l(()=>[...t[14]||(t[14]=[e("getchar()",-1)])]),_:1}),t[16]||(t[16]=e(" , it waits for the user to enter a character. The program then continues after the input is received. ",-1))]),_:1}),n(i,null,{default:l(()=>[...t[17]||(t[17]=[e("Waiting for User Input",-1)])]),_:1}),n(r,null,{default:l(()=>[n(u,null,{default:l(()=>[...t[18]||(t[18]=[e("getchar()",-1)])]),_:1}),t[19]||(t[19]=e(" is often useful when a program needs to pause and wait for the user. ",-1)),n(s,{code:b,language:"c"})]),_:1}),n(r,null,{default:l(()=>[t[20]||(t[20]=e(" When the program runs, it displays a message and waits for input. After the user presses a key and the input is received, the program continues executing. ",-1)),n(p,{output:"Press Enter to continue..."})]),_:1}),n(r,null,{default:l(()=>[...t[21]||(t[21]=[e(" In this example, we are not storing the character anywhere yet. The purpose is simply to demonstrate how a program can wait for keyboard input. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...t[22]||(t[22]=[e("Reading More Than One Character",-1)])]),_:1}),n(r,null,{default:l(()=>[n(u,null,{default:l(()=>[...t[23]||(t[23]=[e("getchar()",-1)])]),_:1}),t[24]||(t[24]=e(" reads one character at a time. Therefore, calling it multiple times allows a program to wait for multiple inputs. ",-1)),n(s,{code:I,language:"c"})]),_:1}),n(r,null,{default:l(()=>[t[26]||(t[26]=e(" Each call to ",-1)),n(u,null,{default:l(()=>[...t[25]||(t[25]=[e("getchar()",-1)])]),_:1}),t[27]||(t[27]=e(" waits for another character to be entered. ",-1))]),_:1}),n(i,null,{default:l(()=>[...t[28]||(t[28]=[e("Input and Program Flow",-1)])]),_:1}),n(r,null,{default:l(()=>[t[29]||(t[29]=e(" Input operations can affect when a program continues executing. When an input function waits for user input, the program pauses at that point until the required input is received. ",-1)),n(s,{code:T,language:"c"})]),_:1}),n(r,null,{default:l(()=>[...t[30]||(t[30]=[e(" The program first displays a message, waits for the user to enter input, and then continues to the next statement. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...t[31]||(t[31]=[e("Where Is the Input Stored?",-1)])]),_:1}),n(r,null,{default:l(()=>[...t[32]||(t[32]=[e(" At this point, we are only learning how a program can receive input. To actually store input so that we can use it later, we need a place in memory to hold the value. ",-1)])]),_:1}),n(r,null,{default:l(()=>[t[34]||(t[34]=e(" In the next lesson, we will learn about ",-1)),n(u,null,{default:l(()=>[...t[33]||(t[33]=[e("variables",-1)])]),_:1}),t[35]||(t[35]=e(" . Variables allow programs to store values such as numbers, characters, and other data. ",-1))]),_:1}),n(i,null,{default:l(()=>[...t[36]||(t[36]=[e("Other Input Functions",-1)])]),_:1}),n(r,null,{default:l(()=>[t[38]||(t[38]=e(" C provides other functions for receiving different kinds of input. One commonly used function is ",-1)),n(u,null,{default:l(()=>[...t[37]||(t[37]=[e("scanf()",-1)])]),_:1}),t[39]||(t[39]=e(" . ",-1))]),_:1}),n(r,null,{default:l(()=>[t[41]||(t[41]=e(" However, using ",-1)),n(u,null,{default:l(()=>[...t[40]||(t[40]=[e("scanf()",-1)])]),_:1}),t[42]||(t[42]=e(" effectively requires understanding variables and memory addresses. We will introduce those concepts before using it in detail. ",-1))]),_:1}),n(i,null,{default:l(()=>[...t[43]||(t[43]=[e("Summary",-1)])]),_:1}),n(r,null,{default:l(()=>[...t[44]||(t[44]=[e(" Input operations allow a C program to receive information from outside the program, such as input from the keyboard. ",-1)])]),_:1}),n(r,null,{default:l(()=>[t[52]||(t[52]=e(" In this topic, you learned that: ",-1)),o("ul",v,[t[49]||(t[49]=o("li",null," Input allows a program to receive information from the user. ",-1)),o("li",null,[n(u,null,{default:l(()=>[...t[45]||(t[45]=[e("getchar()",-1)])]),_:1}),t[46]||(t[46]=e(" reads a single character. ",-1))]),t[50]||(t[50]=o("li",null," Input functions can cause a program to wait for user input. ",-1)),o("li",null,[n(u,null,{default:l(()=>[...t[47]||(t[47]=[e("getchar()",-1)])]),_:1}),t[48]||(t[48]=e(" can be called multiple times to receive multiple characters. ",-1))]),t[51]||(t[51]=o("li",null," Variables will allow us to store and use input in later programs. ",-1))])]),_:1}),t[55]||(t[55]=o("br",null,null,-1)),n(f,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{q as default};

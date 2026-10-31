import{_ as m}from"./logo-C9ImmdpX.js";import{T as o,a as i,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-Do3NQ57y.js";import{T as l}from"./TopicTerm-Wsy3IcMW.js";import{C as d}from"./CodeBlock-YTzl4NkG.js";import{O as u}from"./OutputBlock-BsSWLsEy.js";import{_ as a}from"./FernInfo.vue_vue_type_script_setup_true_lang-BvXcjq5z.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-rzR0vzcF.js";import{d as b,h as y,i as r,o as g,a as s,q as n,g as e}from"./index-8Z-dxxHw.js";const v={class:"max-w-4xl mx-auto"},x={class:"list-disc pl-6 mt-2 space-y-2"},A={class:"list-disc pl-6 space-y-2"},w=`
#include <stdio.h>

int main() {
    int number = 42;

    printf("Value: %d\\n", number);
    printf("Address: %p\\n", (void *)&number);
    return 0;
}`,T=`
#include <stdio.h>

int main() {
    int number = 42;
    int *pointer = &number;

    printf("Variable address: %p\\n", (void *)&number);
    printf("Pointer value:    %p\\n", (void *)pointer);
    return 0;
}`,P=`
Variable address: 0x7ffd12345678
Pointer value:    0x7ffd12345678`,C=`
#include <stdio.h>

int main() {
    int number = 100;
    int *pointer = &number;

    printf("Number: %d\\n", number);
    printf("Address of number: %p\\n", (void *)&number);
    printf("Pointer stores:    %p\\n", (void *)pointer);
    printf("Value through pointer: %d\\n", *pointer);
    return 0;
}`,V=`
Number: 100
Address of number: 0x7ffd12345678
Pointer stores:    0x7ffd12345678
Value through pointer: 100`,k=`
#include <stdio.h>

int main() {
    int first = 10;
    int second = 20;

    printf("First address:  %p\\n", (void *)&first);
    printf("Second address: %p\\n", (void *)&second);
    return 0;
}`,O=`
#include <stdio.h>

int main() {
    int score = 85;
    int *scorePointer = &score;

    printf("Address: %p\\n", (void *)scorePointer);
    printf("Before: %d\\n", score);

    *scorePointer = 95;

    printf("After: %d\\n", score);
    return 0;
}`,B=`
Address: 0x7ffd12345678
Before: 85
After: 95`,q=b({__name:"MemoryAddresses",setup(W){return(D,t)=>(g(),y(p,null,{default:r(()=>[s("div",v,[t[72]||(t[72]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[73]||(t[73]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Memory Addresses ")],-1)),n(o,null,{default:r(()=>[t[1]||(t[1]=e(" When a variable is created, the computer stores its value somewhere in memory. That location has a ",-1)),n(l,null,{default:r(()=>[...t[0]||(t[0]=[e("memory address",-1)])]),_:1}),t[2]||(t[2]=e(" . ",-1))]),_:1}),n(o,null,{default:r(()=>[...t[3]||(t[3]=[e(" You can think of a memory address as the location where a variable is stored. ",-1)])]),_:1}),n(a,{title:"Think of It This Way"},{default:r(()=>[...t[4]||(t[4]=[e(" A variable has a ",-1),s("strong",null,"value",-1),e(" and a ",-1),s("strong",null,"location",-1),e(" in memory. A pointer allows us to work with that location. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[5]||(t[5]=[e("Getting the Address of a Variable",-1)])]),_:1}),n(o,null,{default:r(()=>[t[7]||(t[7]=e(" The address operator ",-1)),n(l,null,{default:r(()=>[...t[6]||(t[6]=[e("&",-1)])]),_:1}),t[8]||(t[8]=e(" can be used to obtain the memory address of a variable. ",-1)),n(d,{language:"c",code:w})]),_:1}),n(o,null,{default:r(()=>[t[10]||(t[10]=e(" The ",-1)),n(l,null,{default:r(()=>[...t[9]||(t[9]=[e("%p",-1)])]),_:1}),t[11]||(t[11]=e(" format specifier is used to print a pointer or memory address. Addresses are commonly displayed in hexadecimal notation. ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[12]||(t[12]=[e("Why Does the Address Look Different?",-1)])]),_:1}),n(o,null,{default:r(()=>[t[15]||(t[15]=e(" Unlike an integer such as ",-1)),n(l,null,{default:r(()=>[...t[13]||(t[13]=[e("42",-1)])]),_:1}),t[16]||(t[16]=e(" , a memory address is not normally displayed as a regular decimal number. It is commonly written using hexadecimal notation, such as ",-1)),n(l,null,{default:r(()=>[...t[14]||(t[14]=[e("0x7ffd12345678",-1)])]),_:1}),t[17]||(t[17]=e(" . ",-1))]),_:1}),n(o,null,{default:r(()=>[...t[18]||(t[18]=[e(" The exact address will usually be different every time the program is executed and may also be different from one computer to another. ",-1)])]),_:1}),n(a,{title:"Important"},{default:r(()=>[...t[19]||(t[19]=[e(" Do not memorize the actual address printed by your program. What matters is understanding that the address identifies a location in memory. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[20]||(t[20]=[e("A Pointer Stores an Address",-1)])]),_:1}),n(o,null,{default:r(()=>[t[21]||(t[21]=e(" When the address of a variable is assigned to a pointer, the pointer stores that address. ",-1)),n(d,{language:"c",code:T}),t[22]||(t[22]=e(" Output ",-1)),n(u,{output:P})]),_:1}),n(o,null,{default:r(()=>[t[25]||(t[25]=e(" The address printed by ",-1)),n(l,null,{default:r(()=>[...t[23]||(t[23]=[e("&number",-1)])]),_:1}),t[26]||(t[26]=e(" and the value stored in ",-1)),n(l,null,{default:r(()=>[...t[24]||(t[24]=[e("pointer",-1)])]),_:1}),t[27]||(t[27]=e(" represent the same memory location. ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[28]||(t[28]=[e("Connecting the Variable, Address, and Pointer",-1)])]),_:1}),n(o,null,{default:r(()=>[t[29]||(t[29]=e(" A single example can show the relationship between a variable, its address, and a pointer. ",-1)),n(d,{language:"c",code:C}),t[30]||(t[30]=e(" Output ",-1)),n(u,{output:V})]),_:1}),n(o,null,{default:r(()=>[t[43]||(t[43]=e(" In this example: ",-1)),s("ul",x,[s("li",null,[n(l,null,{default:r(()=>[...t[31]||(t[31]=[e("number",-1)])]),_:1}),t[33]||(t[33]=e(" stores the value ",-1)),n(l,null,{default:r(()=>[...t[32]||(t[32]=[e("100",-1)])]),_:1}),t[34]||(t[34]=e(" . ",-1))]),s("li",null,[n(l,null,{default:r(()=>[...t[35]||(t[35]=[e("&number",-1)])]),_:1}),t[37]||(t[37]=e(" gives the address of ",-1)),n(l,null,{default:r(()=>[...t[36]||(t[36]=[e("number",-1)])]),_:1}),t[38]||(t[38]=e(" . ",-1))]),s("li",null,[n(l,null,{default:r(()=>[...t[39]||(t[39]=[e("pointer",-1)])]),_:1}),t[40]||(t[40]=e(" stores that address. ",-1))]),s("li",null,[n(l,null,{default:r(()=>[...t[41]||(t[41]=[e("*pointer",-1)])]),_:1}),t[42]||(t[42]=e(" accesses the value stored at that address. ",-1))])])]),_:1}),n(i,null,{default:r(()=>[...t[44]||(t[44]=[e("Different Variables Have Different Addresses",-1)])]),_:1}),n(o,null,{default:r(()=>[t[45]||(t[45]=e(" Different variables are stored in different locations in memory, so their addresses can be different. ",-1)),n(d,{language:"c",code:k})]),_:1}),n(o,null,{default:r(()=>[...t[46]||(t[46]=[e(" The exact addresses depend on how the program is executed and where the operating system places the variables in memory. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[47]||(t[47]=[e("Using a Pointer to Access a Memory Location",-1)])]),_:1}),n(o,null,{default:r(()=>[t[48]||(t[48]=e(" Once a pointer contains the address of a variable, it can be dereferenced to access the value stored at that location. ",-1)),n(d,{language:"c",code:O}),t[49]||(t[49]=e(" Output ",-1)),n(u,{output:B})]),_:1}),n(o,null,{default:r(()=>[t[51]||(t[51]=e(" The statement ",-1)),n(l,null,{default:r(()=>[...t[50]||(t[50]=[e("*scorePointer = 95;",-1)])]),_:1}),t[52]||(t[52]=e(" accesses the memory location represented by the pointer and changes the value stored there. ",-1))]),_:1}),n(a,{title:"The Connection"},{default:r(()=>[n(l,null,{default:r(()=>[...t[53]||(t[53]=[e("&",-1)])]),_:1}),t[55]||(t[55]=e(" answers ",-1)),t[56]||(t[56]=s("strong",null,"“Where is the variable?”",-1)),t[57]||(t[57]=e(", while ",-1)),n(l,null,{default:r(()=>[...t[54]||(t[54]=[e("*",-1)])]),_:1}),t[58]||(t[58]=e(" answers ",-1)),t[59]||(t[59]=s("strong",null,"“What value is stored there?”",-1)),t[60]||(t[60]=e(" when used with a pointer. ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[61]||(t[61]=[e("Summary",-1)])]),_:1}),n(o,null,{default:r(()=>[...t[62]||(t[62]=[e(" A memory address identifies the location of data in memory. Pointers allow programs to store and work with these addresses. ",-1)])]),_:1}),n(o,null,{default:r(()=>[s("ul",A,[t[69]||(t[69]=s("li",null,"Every variable is stored at a location in memory.",-1)),s("li",null,[n(l,null,{default:r(()=>[...t[63]||(t[63]=[e("&",-1)])]),_:1}),t[64]||(t[64]=e(" obtains the address of a variable. ",-1))]),s("li",null,[n(l,null,{default:r(()=>[...t[65]||(t[65]=[e("%p",-1)])]),_:1}),t[66]||(t[66]=e(" is used to display a pointer or address. ",-1))]),t[70]||(t[70]=s("li",null,"A pointer stores a memory address.",-1)),t[71]||(t[71]=s("li",null,"The exact memory address can change between executions.",-1)),s("li",null,[n(l,null,{default:r(()=>[...t[67]||(t[67]=[e("*",-1)])]),_:1}),t[68]||(t[68]=e(" can access the value stored at the address held by a pointer. ",-1))])])]),_:1}),t[74]||(t[74]=s("br",null,null,-1)),n(f,{to:"/academia/student/classes/c-address-and-dereference-operator"})])]),_:1}))}});export{q as default};

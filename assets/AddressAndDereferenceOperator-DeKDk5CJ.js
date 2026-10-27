import{_ as p}from"./logo-C9ImmdpX.js";import{T as u,a as s,_ as a}from"./TopicNext.vue_vue_type_script_setup_true_lang-C0JJmNPf.js";import{T as l}from"./TopicTerm-DFxx4A6I.js";import{C as i}from"./CodeBlock-BTW9CWle.js";import{O as d}from"./OutputBlock-1tVxatZn.js";import{_ as f}from"./FernInfo.vue_vue_type_script_setup_true_lang-BiF_AWI8.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-B3G-GaUa.js";import{d as g,h as b,i as r,o as v,a as o,q as e,g as n}from"./index-DxySYCEn.js";const w={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-6 space-y-2"},x=`
#include <stdio.h>

int main() {
    int number = 50;

    printf("Value: %d\\n", number);
    printf("Address: %p\\n", (void *)&number);
    return 0;
}`,y=`
#include <stdio.h>

int main() {
    int number = 50;
    int *pointer = &number;

    printf("Value: %d\\n", *pointer);
    return 0;
}`,O=`
#include <stdio.h>

int main() {
    int number = 50;
    int *pointer = &number;

    printf("Address: %p\\n", (void *)&number);
    printf("Pointer: %p\\n", (void *)pointer);
    printf("Value: %d\\n", *pointer);
    return 0;
}`,P=`
Address: 0x7ffd12345678
Pointer: 0x7ffd12345678
Value: 50`,A=`
#include <stdio.h>

int main() {
    int number = 50;
    int *pointer = &number;

    printf("Before: %d\\n", number);
    *pointer = 100;

    printf("After: %d\\n", number);
    return 0;
}`,C=`
Before: 50
After: 100`,B=`
#include <stdio.h>

int main() {
    int score = 75;
    int *pointer = &score;

    printf("Original score: %d\\n", *pointer);
    *pointer = *pointer + 10;

    printf("Updated score: %d\\n", score);
    return 0;
}`,k=`
Original score: 75
Updated score: 85`,D=`
#include <stdio.h>

int main() {
    int number = 25;
    int *pointer = &number;

    if (pointer == &number) {
        printf("The pointer stores the address of number.\\n");
    }
    return 0;
}`,V=`
The pointer stores the address of number.`,I=`
#include <stdio.h>

int main() {
    int balance = 1000;
    int *balancePointer = &balance;

    printf("Balance: %d\\n", *balancePointer);
    *balancePointer -= 250;

    printf("After withdrawal: %d\\n", balance);
    return 0;
}`,S=`
Balance: 1000
After withdrawal: 750`,K=g({__name:"AddressAndDereferenceOperator",setup(M){return(N,t)=>(v(),b(m,null,{default:r(()=>[o("div",w,[t[109]||(t[109]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:p,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[110]||(t[110]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Address and Dereference Operators ")],-1)),e(u,null,{default:r(()=>[t[2]||(t[2]=n(" The ",-1)),e(l,null,{default:r(()=>[...t[0]||(t[0]=[n("&",-1)])]),_:1}),t[3]||(t[3]=n(" symbol is called the ",-1)),e(l,null,{default:r(()=>[...t[1]||(t[1]=[n("address operator",-1)])]),_:1}),t[4]||(t[4]=n(" when it is placed before a variable. ",-1))]),_:1}),e(u,null,{default:r(()=>[t[5]||(t[5]=n(" It obtains the memory address of that variable. ",-1)),e(i,{language:"c",code:x})]),_:1}),e(u,null,{default:r(()=>[t[7]||(t[7]=n(" Since the address is stored by the computer as a pointer value, it is commonly displayed using the ",-1)),e(l,null,{default:r(()=>[...t[6]||(t[6]=[n("%p",-1)])]),_:1}),t[8]||(t[8]=n(" format specifier. ",-1))]),_:1}),e(f,{title:"Remember"},{default:r(()=>[t[10]||(t[10]=n(" The address operator ",-1)),e(l,null,{default:r(()=>[...t[9]||(t[9]=[n("&",-1)])]),_:1}),t[11]||(t[11]=n(" asks: ",-1)),t[12]||(t[12]=o("strong",null,"“Where is this variable stored?”",-1))]),_:1}),e(s,null,{default:r(()=>[...t[13]||(t[13]=[n("The Dereference Operator",-1)])]),_:1}),e(u,null,{default:r(()=>[t[16]||(t[16]=n(" The ",-1)),e(l,null,{default:r(()=>[...t[14]||(t[14]=[n("*",-1)])]),_:1}),t[17]||(t[17]=n(" symbol is called the ",-1)),e(l,null,{default:r(()=>[...t[15]||(t[15]=[n("dereference operator",-1)])]),_:1}),t[18]||(t[18]=n(" when it is used with a pointer expression. ",-1))]),_:1}),e(u,null,{default:r(()=>[t[19]||(t[19]=n(" Dereferencing a pointer accesses the value stored at the memory address contained in that pointer. ",-1)),e(i,{language:"c",code:y}),t[20]||(t[20]=n(" Output ",-1)),e(d,{output:"Value: 50"})]),_:1}),e(u,null,{default:r(()=>[t[25]||(t[25]=n(" In this example, ",-1)),e(l,null,{default:r(()=>[...t[21]||(t[21]=[n("pointer",-1)])]),_:1}),t[26]||(t[26]=n(" contains the address of ",-1)),e(l,null,{default:r(()=>[...t[22]||(t[22]=[n("number",-1)])]),_:1}),t[27]||(t[27]=n(". Therefore, ",-1)),e(l,null,{default:r(()=>[...t[23]||(t[23]=[n("*pointer",-1)])]),_:1}),t[28]||(t[28]=n(" accesses the value stored in ",-1)),e(l,null,{default:r(()=>[...t[24]||(t[24]=[n("number",-1)])]),_:1}),t[29]||(t[29]=n(". ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[30]||(t[30]=[n("Using Both Operators Together",-1)])]),_:1}),e(u,null,{default:r(()=>[t[31]||(t[31]=n(" The address and dereference operators are often used together when working with pointers. ",-1)),e(i,{language:"c",code:O}),t[32]||(t[32]=n(" Output ",-1)),e(d,{output:P})]),_:1}),e(u,null,{default:r(()=>[t[37]||(t[37]=n(" The expression ",-1)),e(l,null,{default:r(()=>[...t[33]||(t[33]=[n("&number",-1)])]),_:1}),t[38]||(t[38]=n(" obtains the address of ",-1)),e(l,null,{default:r(()=>[...t[34]||(t[34]=[n("number",-1)])]),_:1}),t[39]||(t[39]=n(", while ",-1)),e(l,null,{default:r(()=>[...t[35]||(t[35]=[n("*pointer",-1)])]),_:1}),t[40]||(t[40]=n(" accesses the value stored at the address contained in ",-1)),e(l,null,{default:r(()=>[...t[36]||(t[36]=[n("pointer",-1)])]),_:1}),t[41]||(t[41]=n(". ",-1))]),_:1}),e(f,{title:"The Easy Way to Remember"},{default:r(()=>[e(l,null,{default:r(()=>[...t[42]||(t[42]=[n("&",-1)])]),_:1}),t[44]||(t[44]=n(" means ",-1)),t[45]||(t[45]=o("strong",null,"“get the address”",-1)),t[46]||(t[46]=n(", while ",-1)),e(l,null,{default:r(()=>[...t[43]||(t[43]=[n("*",-1)])]),_:1}),t[47]||(t[47]=n(" means ",-1)),t[48]||(t[48]=o("strong",null,"“get the value at that address”",-1)),t[49]||(t[49]=n(" when used for dereferencing. ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[50]||(t[50]=[n("Changing a Value Through Dereferencing",-1)])]),_:1}),e(u,null,{default:r(()=>[t[51]||(t[51]=n(" Dereferencing is not limited to reading a value. It can also be used to change the value stored at the pointed-to address. ",-1)),e(i,{language:"c",code:A}),t[52]||(t[52]=n(" Output ",-1)),e(d,{output:C})]),_:1}),e(u,null,{default:r(()=>[t[56]||(t[56]=n(" The statement ",-1)),e(l,null,{default:r(()=>[...t[53]||(t[53]=[n("*pointer = 100;",-1)])]),_:1}),t[57]||(t[57]=n(" changes the value of ",-1)),e(l,null,{default:r(()=>[...t[54]||(t[54]=[n("number",-1)])]),_:1}),t[58]||(t[58]=n(" because the pointer refers to the memory location where ",-1)),e(l,null,{default:r(()=>[...t[55]||(t[55]=[n("number",-1)])]),_:1}),t[59]||(t[59]=n(" is stored. ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[60]||(t[60]=[n("Reading and Modifying Through a Pointer",-1)])]),_:1}),e(u,null,{default:r(()=>[t[61]||(t[61]=n(" A dereferenced pointer can also be used as part of an expression. ",-1)),e(i,{language:"c",code:B}),t[62]||(t[62]=n(" Output ",-1)),e(d,{output:k})]),_:1}),e(u,null,{default:r(()=>[t[65]||(t[65]=n(" The expression ",-1)),e(l,null,{default:r(()=>[...t[63]||(t[63]=[n("*pointer + 10",-1)])]),_:1}),t[66]||(t[66]=n(" reads the value through the pointer, adds ",-1)),e(l,null,{default:r(()=>[...t[64]||(t[64]=[n("10",-1)])]),_:1}),t[67]||(t[67]=n(", and assigns the result back through the pointer. ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[68]||(t[68]=[n("Comparing an Address",-1)])]),_:1}),e(u,null,{default:r(()=>[t[69]||(t[69]=n(" Since a pointer stores an address, it can be compared with another pointer or address expression. ",-1)),e(i,{language:"c",code:D}),t[70]||(t[70]=n(" Output ",-1)),e(d,{output:V})]),_:1}),e(u,null,{default:r(()=>[t[73]||(t[73]=n(" Here, ",-1)),e(l,null,{default:r(()=>[...t[71]||(t[71]=[n("pointer",-1)])]),_:1}),t[74]||(t[74]=n(" and ",-1)),e(l,null,{default:r(()=>[...t[72]||(t[72]=[n("&number",-1)])]),_:1}),t[75]||(t[75]=n(" refer to the same memory location, so the comparison is true. ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[76]||(t[76]=[n("A Practical Example",-1)])]),_:1}),e(u,null,{default:r(()=>[t[77]||(t[77]=n(" Pointers can provide another way to update a variable without directly using the variable name. ",-1)),e(i,{language:"c",code:I}),t[78]||(t[78]=n(" Output ",-1)),e(d,{output:S})]),_:1}),e(u,null,{default:r(()=>[t[81]||(t[81]=n(" The statement ",-1)),e(l,null,{default:r(()=>[...t[79]||(t[79]=[n("*balancePointer -= 250;",-1)])]),_:1}),t[82]||(t[82]=n(" accesses the value through the pointer and subtracts ",-1)),e(l,null,{default:r(()=>[...t[80]||(t[80]=[n("250",-1)])]),_:1}),t[83]||(t[83]=n(" from it. ",-1))]),_:1}),e(f,{title:"Keep These Two Straight"},{default:r(()=>[e(l,null,{default:r(()=>[...t[84]||(t[84]=[n("&variable",-1)])]),_:1}),t[86]||(t[86]=n(" gives you the variable's ",-1)),t[87]||(t[87]=o("strong",null,"address",-1)),t[88]||(t[88]=n(". ",-1)),t[89]||(t[89]=o("br",null,null,-1)),t[90]||(t[90]=o("br",null,null,-1)),e(l,null,{default:r(()=>[...t[85]||(t[85]=[n("*pointer",-1)])]),_:1}),t[91]||(t[91]=n(" gives you the ",-1)),t[92]||(t[92]=o("strong",null,"value stored at that address",-1)),t[93]||(t[93]=n(". ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[94]||(t[94]=[n("Summary",-1)])]),_:1}),e(u,null,{default:r(()=>[...t[95]||(t[95]=[n(" The address and dereference operators are fundamental when working with pointers in C. ",-1)])]),_:1}),e(u,null,{default:r(()=>[o("ul",T,[o("li",null,[e(l,null,{default:r(()=>[...t[96]||(t[96]=[n("&",-1)])]),_:1}),t[97]||(t[97]=n(" is the address operator.",-1))]),o("li",null,[e(l,null,{default:r(()=>[...t[98]||(t[98]=[n("&variable",-1)])]),_:1}),t[99]||(t[99]=n(" obtains the address of a variable.",-1))]),o("li",null,[e(l,null,{default:r(()=>[...t[100]||(t[100]=[n("*",-1)])]),_:1}),t[101]||(t[101]=n(" is the dereference operator when used with a pointer.",-1))]),o("li",null,[e(l,null,{default:r(()=>[...t[102]||(t[102]=[n("*pointer",-1)])]),_:1}),t[103]||(t[103]=n(" accesses the value stored at the pointer's address.",-1))]),t[108]||(t[108]=o("li",null,"Dereferencing can be used to read or modify a value.",-1)),o("li",null,[e(l,null,{default:r(()=>[...t[104]||(t[104]=[n("&",-1)])]),_:1}),t[106]||(t[106]=n(" and ",-1)),e(l,null,{default:r(()=>[...t[105]||(t[105]=[n("*",-1)])]),_:1}),t[107]||(t[107]=n(" are closely connected when working with pointers.",-1))])])]),_:1}),t[111]||(t[111]=o("br",null,null,-1)),e(a,{to:"/academia/student/classes/c-pointers-and-arrays"})])]),_:1}))}});export{K as default};

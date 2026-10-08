import{_ as f}from"./logo-C9ImmdpX.js";import{T as e,a as u,_ as a}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{T as r,C as s}from"./CodeBlock-Z3HAVLif.js";import{O as d}from"./OutputBlock-B9VPajdJ.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-CMwsacWG.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{d as g,h as b,i as o,o as v,a as i,q as l,g as n}from"./index-BRxoWVJY.js";const y={class:"max-w-4xl mx-auto"},P={class:"list-disc pl-6 space-y-2"},T=`
#include <stdio.h>

int main() {
    int age = 20;
    int *pointer = &age;

    printf("Age: %d\\n", age);
    printf("Value through pointer: %d\\n", *pointer);

    return 0;
}`,x=`
Age: 20
Value through pointer: 20`,A=`
#include <stdio.h>

int main() {
    int number = 42;
    int *pointer;

    pointer = &number;

    printf("Number: %d\\n", number);
    printf("Value through pointer: %d\\n", *pointer)
    return 0;
}`,w=`
Number: 42
Value through pointer: 42`,O=`
#include <stdio.h>

int main() {
    int number = 10;
    int *pointer = &number;

    printf("Before: %d\\n", *pointer);
    *pointer = 25;

    printf("After: %d\\n", number);
    return 0;
}`,C=`
Before: 10
After: 25`,V=`
#include <stdio.h>

int main() {
    int first = 10;
    int second = 20;
    int *pointer = &first;

    printf("First: %d\\n", *pointer);
    pointer = &second;

    printf("Second: %d\\n", *pointer);
    return 0;
}`,k=`
First: 10
Second: 20`,I=`
#include <stdio.h>

int main() {
    int number = 42;
    int *pointer = &number;

    printf("Number: %d\\n", number);
    printf("Through pointer: %d\\n", *pointer);
    return 0;
}`,B=`
Number: 42
Through pointer: 42`,N=`
#include <stdio.h>

int main() {
    int score = 85;
    int *scorePointer = &score;

    printf("Score: %d\\n", score);
    *scorePointer = 95;

    printf("Updated score: %d\\n", score);
    return 0;
}`,S=`
Score: 85
Updated score: 95`,W=g({__name:"Pointers",setup(D){return(U,t)=>(v(),b(m,null,{default:o(()=>[i("div",y,[t[97]||(t[97]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[98]||(t[98]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Pointers ")],-1)),l(e,null,{default:o(()=>[t[1]||(t[1]=n(" A ",-1)),l(r,null,{default:o(()=>[...t[0]||(t[0]=[n("pointer",-1)])]),_:1}),t[2]||(t[2]=n(" is a variable that stores the memory address of another variable. ",-1))]),_:1}),l(e,null,{default:o(()=>[t[4]||(t[4]=n(" Instead of directly storing a value such as ",-1)),l(r,null,{default:o(()=>[...t[3]||(t[3]=[n("20",-1)])]),_:1}),t[5]||(t[5]=n(" , a pointer stores where that value is located in memory. ",-1))]),_:1}),l(p,{title:"Think of It This Way"},{default:o(()=>[...t[6]||(t[6]=[n(" A normal variable stores a ",-1),i("strong",null,"value",-1),n(". A pointer stores the ",-1),i("strong",null,"address of a value",-1),n(". ",-1)])]),_:1}),l(u,null,{default:o(()=>[...t[7]||(t[7]=[n("Declaring a Pointer",-1)])]),_:1}),l(e,null,{default:o(()=>[t[9]||(t[9]=n(" A pointer is declared by placing an asterisk ",-1)),l(r,null,{default:o(()=>[...t[8]||(t[8]=[n("*",-1)])]),_:1}),t[10]||(t[10]=n(" before its name. ",-1)),l(s,{language:"c",code:A}),t[11]||(t[11]=n(" Output ",-1)),l(d,{output:w})]),_:1}),l(e,null,{default:o(()=>[t[15]||(t[15]=n(" The declaration ",-1)),l(r,null,{default:o(()=>[...t[12]||(t[12]=[n("int *pointer",-1)])]),_:1}),t[16]||(t[16]=n(" means that ",-1)),l(r,null,{default:o(()=>[...t[13]||(t[13]=[n("pointer",-1)])]),_:1}),t[17]||(t[17]=n(" is a pointer that is intended to point to an ",-1)),l(r,null,{default:o(()=>[...t[14]||(t[14]=[n("int",-1)])]),_:1}),t[18]||(t[18]=n(" . ",-1))]),_:1}),l(u,null,{default:o(()=>[...t[19]||(t[19]=[n("Assigning an Address to a Pointer",-1)])]),_:1}),l(e,null,{default:o(()=>[t[21]||(t[21]=n(" A pointer can store the address of a variable using the address operator ",-1)),l(r,null,{default:o(()=>[...t[20]||(t[20]=[n("&",-1)])]),_:1}),t[22]||(t[22]=n(" . ",-1)),l(s,{language:"c",code:T}),t[23]||(t[23]=n(" Output ",-1)),l(d,{output:x})]),_:1}),l(e,null,{default:o(()=>[t[27]||(t[27]=n(" Here, ",-1)),l(r,null,{default:o(()=>[...t[24]||(t[24]=[n("&age",-1)])]),_:1}),t[28]||(t[28]=n(" represents the address of ",-1)),l(r,null,{default:o(()=>[...t[25]||(t[25]=[n("age",-1)])]),_:1}),t[29]||(t[29]=n(" , and that address is stored in ",-1)),l(r,null,{default:o(()=>[...t[26]||(t[26]=[n("pointer",-1)])]),_:1}),t[30]||(t[30]=n(" . ",-1))]),_:1}),l(u,null,{default:o(()=>[...t[31]||(t[31]=[n("Accessing a Value Through a Pointer",-1)])]),_:1}),l(e,null,{default:o(()=>[t[34]||(t[34]=n(" The asterisk ",-1)),l(r,null,{default:o(()=>[...t[32]||(t[32]=[n("*",-1)])]),_:1}),t[35]||(t[35]=n(" can also be used to access the value stored at the address held by a pointer. This is called ",-1)),l(r,null,{default:o(()=>[...t[33]||(t[33]=[n("dereferencing",-1)])]),_:1}),t[36]||(t[36]=n(" . ",-1))]),_:1}),l(e,null,{default:o(()=>[t[39]||(t[39]=n(" In the previous example, ",-1)),l(r,null,{default:o(()=>[...t[37]||(t[37]=[n("*pointer",-1)])]),_:1}),t[40]||(t[40]=n(" accesses the value stored in ",-1)),l(r,null,{default:o(()=>[...t[38]||(t[38]=[n("age",-1)])]),_:1}),t[41]||(t[41]=n(" . ",-1))]),_:1}),l(p,{title:"Two Uses of *"},{default:o(()=>[t[45]||(t[45]=n(" The ",-1)),l(r,null,{default:o(()=>[...t[42]||(t[42]=[n("*",-1)])]),_:1}),t[46]||(t[46]=n(" symbol has different uses depending on where it appears. In a declaration such as ",-1)),l(r,null,{default:o(()=>[...t[43]||(t[43]=[n("int *pointer",-1)])]),_:1}),t[47]||(t[47]=n(" , it declares a pointer. In an expression such as ",-1)),l(r,null,{default:o(()=>[...t[44]||(t[44]=[n("*pointer",-1)])]),_:1}),t[48]||(t[48]=n(" , it accesses the value being pointed to. ",-1))]),_:1}),l(u,null,{default:o(()=>[...t[49]||(t[49]=[n("Changing a Value Through a Pointer",-1)])]),_:1}),l(e,null,{default:o(()=>[t[50]||(t[50]=n(" A pointer can also be used to modify the value of the variable it points to. ",-1)),l(s,{language:"c",code:O}),t[51]||(t[51]=n(" Output ",-1)),l(d,{output:C})]),_:1}),l(e,null,{default:o(()=>[t[56]||(t[56]=n(" The statement ",-1)),l(r,null,{default:o(()=>[...t[52]||(t[52]=[n("*pointer = 25;",-1)])]),_:1}),t[57]||(t[57]=n(" changes the value of ",-1)),l(r,null,{default:o(()=>[...t[53]||(t[53]=[n("number",-1)])]),_:1}),t[58]||(t[58]=n(" because ",-1)),l(r,null,{default:o(()=>[...t[54]||(t[54]=[n("pointer",-1)])]),_:1}),t[59]||(t[59]=n(" points to ",-1)),l(r,null,{default:o(()=>[...t[55]||(t[55]=[n("number",-1)])]),_:1}),t[60]||(t[60]=n(" . ",-1))]),_:1}),l(u,null,{default:o(()=>[...t[61]||(t[61]=[n("A Pointer Can Point to Different Variables",-1)])]),_:1}),l(e,null,{default:o(()=>[t[62]||(t[62]=n(" A pointer can be assigned the address of another variable of the appropriate type. ",-1)),l(s,{language:"c",code:V}),t[63]||(t[63]=n(" Output ",-1)),l(d,{output:k})]),_:1}),l(e,null,{default:o(()=>[t[66]||(t[66]=n(" The pointer first points to ",-1)),l(r,null,{default:o(()=>[...t[64]||(t[64]=[n("first",-1)])]),_:1}),t[67]||(t[67]=n(" . It is then assigned the address of ",-1)),l(r,null,{default:o(()=>[...t[65]||(t[65]=[n("second",-1)])]),_:1}),t[68]||(t[68]=n(" . ",-1))]),_:1}),l(u,null,{default:o(()=>[...t[69]||(t[69]=[n("Pointer Types",-1)])]),_:1}),l(e,null,{default:o(()=>[t[70]||(t[70]=n(" A pointer type should match the type of data it is intended to point to. ",-1)),l(s,{language:"c",code:I}),t[71]||(t[71]=n(" Output ",-1)),l(d,{output:B})]),_:1}),l(e,null,{default:o(()=>[t[75]||(t[75]=n(" Since ",-1)),l(r,null,{default:o(()=>[...t[72]||(t[72]=[n("number",-1)])]),_:1}),t[76]||(t[76]=n(" is an ",-1)),l(r,null,{default:o(()=>[...t[73]||(t[73]=[n("int",-1)])]),_:1}),t[77]||(t[77]=n(" , the pointer is declared as ",-1)),l(r,null,{default:o(()=>[...t[74]||(t[74]=[n("int *",-1)])]),_:1}),t[78]||(t[78]=n(" . ",-1))]),_:1}),l(u,null,{default:o(()=>[...t[79]||(t[79]=[n("A Practical Example",-1)])]),_:1}),l(e,null,{default:o(()=>[t[80]||(t[80]=n(" Pointers become useful when you need to work with a variable through its address. ",-1)),l(s,{language:"c",code:N}),t[81]||(t[81]=n(" Output ",-1)),l(d,{output:S})]),_:1}),l(e,null,{default:o(()=>[t[83]||(t[83]=n(" The pointer provides another way to access and modify the ",-1)),l(r,null,{default:o(()=>[...t[82]||(t[82]=[n("score",-1)])]),_:1}),t[84]||(t[84]=n(" variable. ",-1))]),_:1}),l(p,{title:"Remember"},{default:o(()=>[...t[85]||(t[85]=[n(" A pointer does not normally store the actual value you want to work with. It stores the ",-1),i("strong",null,"address",-1),n(" where that value is located. ",-1)])]),_:1}),l(u,null,{default:o(()=>[...t[86]||(t[86]=[n("Summary",-1)])]),_:1}),l(e,null,{default:o(()=>[...t[87]||(t[87]=[n(" A pointer is a variable that stores the memory address of another variable. ",-1)])]),_:1}),l(e,null,{default:o(()=>[i("ul",P,[t[94]||(t[94]=i("li",null,"A pointer stores the address of another variable.",-1)),i("li",null,[l(r,null,{default:o(()=>[...t[88]||(t[88]=[n("*",-1)])]),_:1}),t[89]||(t[89]=n(" is used when declaring a pointer. ",-1))]),i("li",null,[l(r,null,{default:o(()=>[...t[90]||(t[90]=[n("&",-1)])]),_:1}),t[91]||(t[91]=n(" obtains the address of a variable. ",-1))]),i("li",null,[l(r,null,{default:o(()=>[...t[92]||(t[92]=[n("*",-1)])]),_:1}),t[93]||(t[93]=n(" can dereference a pointer to access its value. ",-1))]),t[95]||(t[95]=i("li",null,"A pointer can be used to modify the value it points to.",-1)),t[96]||(t[96]=i("li",null,"Pointer types should match the type of data they point to.",-1))])]),_:1}),t[99]||(t[99]=i("br",null,null,-1)),l(a,{to:"/academia/student/classes/c-memory-addresses"})])]),_:1}))}});export{W as default};

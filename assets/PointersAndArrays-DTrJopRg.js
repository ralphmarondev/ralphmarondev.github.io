import{_ as m}from"./logo-C9ImmdpX.js";import{T as i,a as s,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-Do3NQ57y.js";import{T as o}from"./TopicTerm-Wsy3IcMW.js";import{C as u}from"./CodeBlock-YTzl4NkG.js";import{O as a}from"./OutputBlock-BsSWLsEy.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-BvXcjq5z.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-rzR0vzcF.js";import{d as y,h as g,i as r,o as b,a as l,q as e,g as n}from"./index-8Z-dxxHw.js";const x={class:"max-w-4xl mx-auto"},v={class:"list-disc pl-6 space-y-2"},T=`
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30, 40};
    int *pointer = numbers;

    printf("First element: %d\\n", *pointer);
    return 0;
}`,A=`
First element: 10`,P=`
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30};

    printf("Array address: %p\\n", (void *)numbers);
    printf("First element: %p\\n", (void *)&numbers[0]);
    return 0;
}`,w=`
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30, 40};
    int *pointer = numbers;

    printf("First: %d\\n", *pointer);
    printf("Second: %d\\n", *(pointer + 1));
    printf("Third: %d\\n", *(pointer + 2));
    printf("Fourth: %d\\n", *(pointer + 3));
    return 0;
}`,O=`
First: 10
Second: 20
Third: 30
Fourth: 40`,F=`
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    int *pointer = numbers;

    for (int i = 0; i < 5; i++) {
        printf("%d\\n", *(pointer + i));
    }
    return 0;
}`,S=`
10
20
30
40
50`,C=`
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30};
    int *pointer = numbers;

    printf("%d\\n", *pointer);

    pointer++;
    printf("%d\\n", *pointer);

    pointer++;
    printf("%d\\n", *pointer);
    return 0;
}`,B=`
10
20
30`,k=`
#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30};
    int *pointer = numbers;
    *pointer = 100;

    printf("First element: %d\\n", numbers[0]);
    return 0;
}`,I=`
First element: 100`,E=`
#include <stdio.h>

int main() {
    int scores[] = {85, 90, 78, 92, 88};
    int *pointer = scores;

    for (int i = 0; i < 5; i++) {
        printf("Score %d: %d\\n", i + 1, *(pointer + i));
    }
    return 0;
}`,M=`
Score 1: 85
Score 2: 90
Score 3: 78
Score 4: 92
Score 5: 88`,Y=y({__name:"PointersAndArrays",setup(N){return(V,t)=>(b(),g(f,null,{default:r(()=>[l("div",x,[t[73]||(t[73]=l("div",{class:"w-full flex justify-center mb-6"},[l("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[74]||(t[74]=l("div",{class:"text-center mb-4"},[l("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),l("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Pointers and Arrays ")],-1)),e(i,null,{default:r(()=>[...t[0]||(t[0]=[n(" An array stores its elements in consecutive memory locations. Because the elements are stored next to each other, pointers can be used to access and move through an array. ",-1)])]),_:1}),e(i,null,{default:r(()=>[t[1]||(t[1]=n(" The name of an array can be used as an expression that represents the address of its first element. ",-1)),e(u,{language:"c",code:P})]),_:1}),e(i,null,{default:r(()=>[t[4]||(t[4]=n(" The array name ",-1)),e(o,null,{default:r(()=>[...t[2]||(t[2]=[n("numbers",-1)])]),_:1}),t[5]||(t[5]=n(" refers to the location of its first element in this context. ",-1)),e(o,null,{default:r(()=>[...t[3]||(t[3]=[n("&numbers[0]",-1)])]),_:1}),t[6]||(t[6]=n(" also gives the address of the first element. ",-1))]),_:1}),e(d,{title:"Think of It This Way"},{default:r(()=>[t[10]||(t[10]=n(" For an array named ",-1)),e(o,null,{default:r(()=>[...t[7]||(t[7]=[n("numbers",-1)])]),_:1}),t[11]||(t[11]=n(" , ",-1)),e(o,null,{default:r(()=>[...t[8]||(t[8]=[n("numbers",-1)])]),_:1}),t[12]||(t[12]=n(" points to the first element when used in an expression, which is ",-1)),e(o,null,{default:r(()=>[...t[9]||(t[9]=[n("numbers[0]",-1)])]),_:1}),t[13]||(t[13]=n(" . ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[14]||(t[14]=[n("Using a Pointer with an Array",-1)])]),_:1}),e(i,null,{default:r(()=>[t[15]||(t[15]=n(" A pointer can be initialized with the array name to point to its first element. ",-1)),e(u,{language:"c",code:T}),t[16]||(t[16]=n(" Output ",-1)),e(a,{output:A})]),_:1}),e(i,null,{default:r(()=>[...t[17]||(t[17]=[n(" The pointer now stores the address of the first element of the array. Dereferencing it accesses that first element. ",-1)])]),_:1}),e(s,null,{default:r(()=>[...t[18]||(t[18]=[n("Accessing Array Elements Through a Pointer",-1)])]),_:1}),e(i,null,{default:r(()=>[t[19]||(t[19]=n(" Pointer arithmetic can be used to access other elements of an array. ",-1)),e(u,{language:"c",code:w}),t[20]||(t[20]=n(" Output ",-1)),e(a,{output:O})]),_:1}),e(i,null,{default:r(()=>[t[24]||(t[24]=n(" The expressions ",-1)),e(o,null,{default:r(()=>[...t[21]||(t[21]=[n("*(pointer + 1)",-1)])]),_:1}),t[25]||(t[25]=n(" , ",-1)),e(o,null,{default:r(()=>[...t[22]||(t[22]=[n("*(pointer + 2)",-1)])]),_:1}),t[26]||(t[26]=n(" , and ",-1)),e(o,null,{default:r(()=>[...t[23]||(t[23]=[n("*(pointer + 3)",-1)])]),_:1}),t[27]||(t[27]=n(" access the second, third, and fourth elements respectively. ",-1))]),_:1}),e(d,{title:"Important"},{default:r(()=>[t[31]||(t[31]=n(" Adding ",-1)),e(o,null,{default:r(()=>[...t[28]||(t[28]=[n("1",-1)])]),_:1}),t[32]||(t[32]=n(" to an ",-1)),e(o,null,{default:r(()=>[...t[29]||(t[29]=[n("int",-1)])]),_:1}),t[33]||(t[33]=n(" pointer moves it to the next ",-1)),e(o,null,{default:r(()=>[...t[30]||(t[30]=[n("int",-1)])]),_:1}),t[34]||(t[34]=n(" element. You do not need to manually calculate the number of bytes. ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[35]||(t[35]=[n("Traversing an Array with a Pointer",-1)])]),_:1}),e(i,null,{default:r(()=>[t[36]||(t[36]=n(" A pointer and a loop can be combined to traverse every element of an array. ",-1)),e(u,{language:"c",code:F}),t[37]||(t[37]=n(" Output ",-1)),e(a,{output:S})]),_:1}),e(i,null,{default:r(()=>[...t[38]||(t[38]=[n(" Each iteration changes the offset used with the pointer, allowing the program to access the next array element. ",-1)])]),_:1}),e(s,null,{default:r(()=>[...t[39]||(t[39]=[n("Moving a Pointer with ++",-1)])]),_:1}),e(i,null,{default:r(()=>[t[41]||(t[41]=n(" A pointer can also be incremented using the ",-1)),e(o,null,{default:r(()=>[...t[40]||(t[40]=[n("++",-1)])]),_:1}),t[42]||(t[42]=n(" operator. ",-1)),e(u,{language:"c",code:C}),t[43]||(t[43]=n(" Output ",-1)),e(a,{output:B})]),_:1}),e(i,null,{default:r(()=>[t[45]||(t[45]=n(" Each ",-1)),e(o,null,{default:r(()=>[...t[44]||(t[44]=[n("pointer++",-1)])]),_:1}),t[46]||(t[46]=n(" moves the pointer to the next element of the array. ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[47]||(t[47]=[n("Modifying an Array Through a Pointer",-1)])]),_:1}),e(i,null,{default:r(()=>[t[48]||(t[48]=n(" Since a pointer can be dereferenced, it can also be used to modify an array element. ",-1)),e(u,{language:"c",code:k}),t[49]||(t[49]=n(" Output ",-1)),e(a,{output:I})]),_:1}),e(i,null,{default:r(()=>[t[52]||(t[52]=n(" The statement ",-1)),e(o,null,{default:r(()=>[...t[50]||(t[50]=[n("*pointer = 100;",-1)])]),_:1}),t[53]||(t[53]=n(" changes the first element of the array because the pointer currently points to ",-1)),e(o,null,{default:r(()=>[...t[51]||(t[51]=[n("numbers[0]",-1)])]),_:1}),t[54]||(t[54]=n(" . ",-1))]),_:1}),e(s,null,{default:r(()=>[...t[55]||(t[55]=[n("A Practical Example",-1)])]),_:1}),e(i,null,{default:r(()=>[t[56]||(t[56]=n(" Pointers can be useful when processing every element of an array. ",-1)),e(u,{language:"c",code:E}),t[57]||(t[57]=n(" Output ",-1)),e(a,{output:M})]),_:1}),e(i,null,{default:r(()=>[t[60]||(t[60]=n(" The expression ",-1)),e(o,null,{default:r(()=>[...t[58]||(t[58]=[n("*(pointer + i)",-1)])]),_:1}),t[61]||(t[61]=n(" accesses the element at position ",-1)),e(o,null,{default:r(()=>[...t[59]||(t[59]=[n("i",-1)])]),_:1}),t[62]||(t[62]=n(" through the pointer. ",-1))]),_:1}),e(d,{title:"Remember the Connection"},{default:r(()=>[...t[63]||(t[63]=[n(" An array gives you a collection of elements, while a pointer gives you a way to work with their memory locations. Because array elements are stored consecutively, a pointer can move from one element to the next. ",-1)])]),_:1}),e(s,null,{default:r(()=>[...t[64]||(t[64]=[n("Summary",-1)])]),_:1}),e(i,null,{default:r(()=>[...t[65]||(t[65]=[n(" Pointers and arrays are closely related in C. A pointer can be used to access, traverse, and modify array elements. ",-1)])]),_:1}),e(i,null,{default:r(()=>[l("ul",v,[t[68]||(t[68]=l("li",null,"An array stores its elements in consecutive memory locations.",-1)),t[69]||(t[69]=l("li",null,"The array name represents the address of its first element in most expressions.",-1)),t[70]||(t[70]=l("li",null,"A pointer can point to the first element of an array.",-1)),t[71]||(t[71]=l("li",null,"Pointer arithmetic can be used to access other array elements.",-1)),l("li",null,[e(o,null,{default:r(()=>[...t[66]||(t[66]=[n("pointer++",-1)])]),_:1}),t[67]||(t[67]=n(" moves a pointer to the next element. ",-1))]),t[72]||(t[72]=l("li",null,"A dereferenced pointer can be used to modify an array element.",-1))])]),_:1}),t[75]||(t[75]=l("br",null,null,-1)),e(p,{to:"/academia/student/classes/c-pointers-and-functions"})])]),_:1}))}});export{Y as default};

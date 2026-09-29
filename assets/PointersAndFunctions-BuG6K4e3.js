import{_ as f}from"./logo-C9ImmdpX.js";import{T as o,a as s,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-DDUXdY-4.js";import{C as r,O as a,T as i}from"./CodeBlock-DIhZalJZ.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-BsSGgAE1.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-DWicuDYA.js";import{d as b,h as g,i as l,o as y,a as u,q as e,g as n}from"./index-fUs2VaN6.js";const v={class:"max-w-4xl mx-auto"},w={class:"list-disc pl-6 space-y-2"},V=`
#include <stdio.h>

void displayValue(int *number) {
    printf("Value: %d\\n", *number);
}

int main() {
    int number = 50;

    displayValue(&number);
    return 0;
}`,T=`
Value: 50`,x=`
#include <stdio.h>

void updateScore(int *score) {
    *score = 100;
}

int main() {
    int score = 75;

    printf("Before: %d\\n", score);
    updateScore(&score);

    printf("After: %d\\n", score);
    return 0;
}`,P=`
Before: 75
After: 100`,A=`
#include <stdio.h>

void swap(int *first, int *second) {
    int temporary = *first;
    *first = *second;
    *second = temporary;
}

int main() {
    int a = 10;
    int b = 20;

    printf("Before: a = %d, b = %d\\n", a, b);
    swap(&a, &b);

    printf("After: a = %d, b = %d\\n", a, b);
    return 0;
}`,O=`
Before: a = 10, b = 20
After: a = 20, b = 10`,F=`
#include <stdio.h>

void calculate(int number, int *doubleValue, int *tripleValue) {
    *doubleValue = number * 2;
    *tripleValue = number * 3;
}

int main() {
    int number = 10;
    int doubleValue;
    int tripleValue;

    calculate(number, &doubleValue, &tripleValue);

    printf("Double: %d\\n", doubleValue);
    printf("Triple: %d\\n", tripleValue);
    return 0;
}`,B=`
Double: 20
Triple: 30`,k=`
#include <stdio.h>

void displayArray(int numbers[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }
}

int main() {
    int numbers[] = {10, 20, 30, 40, 50};
    displayArray(numbers, 5);

    return 0;
}`,C=`
10 20 30 40 50`,M=`
#include <stdio.h>

void doubleValues(int numbers[], int size) {
    for (int i = 0; i < size; i++) {
        numbers[i] *= 2;
    }
}

int main() {
    int numbers[] = {5, 10, 15};
    doubleValues(numbers, 3);

    for (int i = 0; i < 3; i++) {
        printf("%d ", numbers[i]);
    }
    return 0;
}`,z=`
10 20 30`,H=b({__name:"PointersAndFunctions",setup(I){return(S,t)=>(y(),g(p,null,{default:l(()=>[u("div",v,[t[66]||(t[66]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[67]||(t[67]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 5 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Pointers and Functions ")],-1)),e(o,null,{default:l(()=>[...t[0]||(t[0]=[n(" A pointer can be passed to a function as an argument. This allows the function to work with the memory address of a variable. ",-1)])]),_:1}),e(o,null,{default:l(()=>[t[1]||(t[1]=n(" Instead of passing only a copy of a value, we can pass its address and let the function access the original variable through a pointer. ",-1)),e(r,{language:"c",code:V}),t[2]||(t[2]=n(" Output ",-1)),e(a,{output:T})]),_:1}),e(o,null,{default:l(()=>[t[6]||(t[6]=n(" The expression ",-1)),e(i,null,{default:l(()=>[...t[3]||(t[3]=[n("&number",-1)])]),_:1}),t[7]||(t[7]=n(" passes the address of ",-1)),e(i,null,{default:l(()=>[...t[4]||(t[4]=[n("number",-1)])]),_:1}),t[8]||(t[8]=n(" to the function. The parameter ",-1)),e(i,null,{default:l(()=>[...t[5]||(t[5]=[n("int *number",-1)])]),_:1}),t[9]||(t[9]=n(" receives that address. ",-1))]),_:1}),e(d,{title:"Remember"},{default:l(()=>[...t[10]||(t[10]=[n(" The function receives an ",-1),u("strong",null,"address",-1),n(", while dereferencing the pointer gives access to the original variable's ",-1),u("strong",null,"value",-1),n(". ",-1)])]),_:1}),e(s,null,{default:l(()=>[...t[11]||(t[11]=[n("Modifying a Variable Through a Function",-1)])]),_:1}),e(o,null,{default:l(()=>[t[12]||(t[12]=n(" One of the most useful applications of pointers with functions is modifying the original variable. ",-1)),e(r,{language:"c",code:x}),t[13]||(t[13]=n(" Output ",-1)),e(a,{output:P})]),_:1}),e(o,null,{default:l(()=>[t[16]||(t[16]=n(" Inside ",-1)),e(i,null,{default:l(()=>[...t[14]||(t[14]=[n("updateScore()",-1)])]),_:1}),t[17]||(t[17]=n(" , the statement ",-1)),e(i,null,{default:l(()=>[...t[15]||(t[15]=[n("*score = 100;",-1)])]),_:1}),t[18]||(t[18]=n(" changes the value stored at the address received by the function. ",-1))]),_:1}),e(s,null,{default:l(()=>[...t[19]||(t[19]=[n("Swapping Two Variables",-1)])]),_:1}),e(o,null,{default:l(()=>[t[20]||(t[20]=n(" Pointers allow a function to modify multiple variables. A common example is swapping two values. ",-1)),e(r,{language:"c",code:A}),t[21]||(t[21]=n(" Output ",-1)),e(a,{output:O})]),_:1}),e(o,null,{default:l(()=>[t[24]||(t[24]=n(" The function receives the addresses of ",-1)),e(i,null,{default:l(()=>[...t[22]||(t[22]=[n("a",-1)])]),_:1}),t[25]||(t[25]=n(" and ",-1)),e(i,null,{default:l(()=>[...t[23]||(t[23]=[n("b",-1)])]),_:1}),t[26]||(t[26]=n(" . It then uses dereferencing to exchange their values. ",-1))]),_:1}),e(d,{title:"Why Pointers Matter Here"},{default:l(()=>[t[29]||(t[29]=n(" Without pointers, the function would only work with copies of ",-1)),e(i,null,{default:l(()=>[...t[27]||(t[27]=[n("a",-1)])]),_:1}),t[30]||(t[30]=n(" and ",-1)),e(i,null,{default:l(()=>[...t[28]||(t[28]=[n("b",-1)])]),_:1}),t[31]||(t[31]=n(" . With pointers, it can modify the original variables. ",-1))]),_:1}),e(s,null,{default:l(()=>[...t[32]||(t[32]=[n("Using Multiple Pointer Parameters",-1)])]),_:1}),e(o,null,{default:l(()=>[t[33]||(t[33]=n(" A function can have more than one pointer parameter. This is useful when a function needs to produce multiple results. ",-1)),e(r,{language:"c",code:F}),t[34]||(t[34]=n(" Output ",-1)),e(a,{output:B})]),_:1}),e(o,null,{default:l(()=>[t[37]||(t[37]=n(" The function writes the calculated values directly into ",-1)),e(i,null,{default:l(()=>[...t[35]||(t[35]=[n("doubleValue",-1)])]),_:1}),t[38]||(t[38]=n(" and ",-1)),e(i,null,{default:l(()=>[...t[36]||(t[36]=[n("tripleValue",-1)])]),_:1}),t[39]||(t[39]=n(" through their addresses. ",-1))]),_:1}),e(s,null,{default:l(()=>[...t[40]||(t[40]=[n("Pointers and Array Parameters",-1)])]),_:1}),e(o,null,{default:l(()=>[t[41]||(t[41]=n(" Arrays can also be passed to functions. When an array is passed to a function, the function can access its elements. ",-1)),e(r,{language:"c",code:k}),t[42]||(t[42]=n(" Output ",-1)),e(a,{output:C})]),_:1}),e(o,null,{default:l(()=>[t[45]||(t[45]=n(" The ",-1)),e(i,null,{default:l(()=>[...t[43]||(t[43]=[n("numbers",-1)])]),_:1}),t[46]||(t[46]=n(" parameter allows the function to access the elements of the array. The ",-1)),e(i,null,{default:l(()=>[...t[44]||(t[44]=[n("size",-1)])]),_:1}),t[47]||(t[47]=n(" parameter tells the function how many elements it should process. ",-1))]),_:1}),e(s,null,{default:l(()=>[...t[48]||(t[48]=[n("Modifying an Array in a Function",-1)])]),_:1}),e(o,null,{default:l(()=>[t[49]||(t[49]=n(" Because the function can access the original array elements, it can also modify them. ",-1)),e(r,{language:"c",code:M}),t[50]||(t[50]=n(" Output ",-1)),e(a,{output:z})]),_:1}),e(o,null,{default:l(()=>[t[53]||(t[53]=n(" The changes made inside ",-1)),e(i,null,{default:l(()=>[...t[51]||(t[51]=[n("doubleValues()",-1)])]),_:1}),t[54]||(t[54]=n(" are reflected in the original ",-1)),e(i,null,{default:l(()=>[...t[52]||(t[52]=[n("numbers",-1)])]),_:1}),t[55]||(t[55]=n(" array. ",-1))]),_:1}),e(d,{title:"The Main Idea"},{default:l(()=>[...t[56]||(t[56]=[n(" Pointers let functions work with the original variables by giving the function their memory addresses. ",-1)])]),_:1}),e(s,null,{default:l(()=>[...t[57]||(t[57]=[n("Summary",-1)])]),_:1}),e(o,null,{default:l(()=>[...t[58]||(t[58]=[n(" Pointers and functions work together when a function needs to access or modify variables outside its own local scope. ",-1)])]),_:1}),e(o,null,{default:l(()=>[u("ul",w,[t[61]||(t[61]=u("li",null,"A pointer can be passed to a function as an argument.",-1)),u("li",null,[e(i,null,{default:l(()=>[...t[59]||(t[59]=[n("&variable",-1)])]),_:1}),t[60]||(t[60]=n(" can be used to pass a variable's address. ",-1))]),t[62]||(t[62]=u("li",null,"A pointer parameter can access the original variable through dereferencing.",-1)),t[63]||(t[63]=u("li",null,"Functions can modify original variables through pointers.",-1)),t[64]||(t[64]=u("li",null,"Pointers can allow functions to work with multiple output values.",-1)),t[65]||(t[65]=u("li",null,"Arrays can be passed to functions and modified inside them.",-1))])]),_:1}),t[68]||(t[68]=u("br",null,null,-1)),e(m,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{H as default};

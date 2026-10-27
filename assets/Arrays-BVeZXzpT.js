import{_ as m}from"./logo-C9ImmdpX.js";import{T as l,a,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-C0JJmNPf.js";import{T as s}from"./TopicTerm-DFxx4A6I.js";import{C as i}from"./CodeBlock-BTW9CWle.js";import{O as o}from"./OutputBlock-1tVxatZn.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-BiF_AWI8.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-B3G-GaUa.js";import{d as g,h as y,i as r,o as b,a as u,q as e,g as n}from"./index-DxySYCEn.js";const x={class:"max-w-4xl mx-auto"},A={class:"list-disc pl-6 space-y-2"},v=`
#include <stdio.h>

int main() {
    int numbers[5];

    numbers[0] = 10;
    numbers[1] = 20;
    numbers[2] = 30;
    numbers[3] = 40;
    numbers[4] = 50;

    printf("%d\\n", numbers[0]);
    printf("%d\\n", numbers[1]);
    printf("%d\\n", numbers[2]);
    return 0;
}`,T=`
10
20
30`,O=`
dataType arrayName[size];`,z=`
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    printf("%d\\n", numbers[0]);
    printf("%d\\n", numbers[1]);
    printf("%d\\n", numbers[2]);
    return 0;
}`,w=`
10
20
30`,I=`
#include <stdio.h>

int main() {
    int scores[4] = {85, 90, 78, 92};

    printf("Number of scores: %zu\\n", sizeof(scores) / sizeof(scores[0]));
    return 0;
}`,P=`
Number of scores: 4`,C=`
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    printf("First: %d\\n", numbers[0]);
    printf("Third: %d\\n", numbers[2]);
    printf("Fifth: %d\\n", numbers[4]);
    return 0;
}`,S=`
First: 10
Third: 30
Fifth: 50`,E=`
#include <stdio.h>

int main() {
    int numbers[3] = {10, 20, 30};

    numbers[1] = 99;

    printf("%d\\n", numbers[0]);
    printf("%d\\n", numbers[1]);
    printf("%d\\n", numbers[2]);
    return 0;
}`,k=`
10
99
30`,B=`
#include <stdio.h>

int main() {
    char vowels[5] = {'a', 'e', 'i', 'o', 'u'};

    printf("%c\\n", vowels[0]);
    printf("%c\\n", vowels[2]);
    printf("%c\\n", vowels[4]);
    return 0;
}`,N=`
a
i
u`,F=`
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20};

    printf("%d\\n", numbers[0]);
    printf("%d\\n", numbers[1]);
    printf("%d\\n", numbers[2]);
    return 0;
}`,V=`
10
20
0`,$=`
#include <stdio.h>

int main() {
    int scores[3];

    printf("Enter three scores: ");
    scanf("%d %d %d", &scores[0], &scores[1], &scores[2]);

    printf("Scores: %d %d %d\\n", scores[0], scores[1], scores[2]);
    return 0;
}`,j=`
Enter three scores: 85 90 95
Scores: 85 90 95`,D=`
#include <stdio.h>

int main() {
    int ages[4] = {18, 19, 20, 21};

    printf("Age 1: %d\\n", ages[0]);
    printf("Age 2: %d\\n", ages[1]);
    printf("Age 3: %d\\n", ages[2]);
    printf("Age 4: %d\\n", ages[3]);
    return 0;
}`,q=`
Age 1: 18
Age 2: 19
Age 3: 20
Age 4: 21`,G=`
printf(" %d\\n", numbers[2]);`,Y=g({__name:"Arrays",setup(H){return(R,t)=>(b(),y(p,null,{default:r(()=>[u("div",x,[t[82]||(t[82]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[83]||(t[83]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Arrays ")],-1)),e(l,null,{default:r(()=>[t[1]||(t[1]=n(" An ",-1)),e(s,null,{default:r(()=>[...t[0]||(t[0]=[n("array",-1)])]),_:1}),t[2]||(t[2]=n(" is a collection of multiple values of the same data type stored under one variable name. ",-1))]),_:1}),e(l,null,{default:r(()=>[...t[3]||(t[3]=[n(" Instead of creating separate variables for related values, an array allows them to be grouped together. ",-1)])]),_:1}),e(d,{title:"Think of It This Way"},{default:r(()=>[...t[4]||(t[4]=[n(" Think of an array as a row of boxes. Each box stores one value, and each box has its own position. ",-1)])]),_:1}),e(a,null,{default:r(()=>[...t[5]||(t[5]=[n("Declaring an Array",-1)])]),_:1}),e(l,null,{default:r(()=>[t[6]||(t[6]=n(" An array is declared by specifying its data type, name, and size. ",-1)),e(i,{language:"c",code:O})]),_:1}),e(l,null,{default:r(()=>[t[8]||(t[8]=n(" For example: ",-1)),e(i,{language:"c",code:`
						int numbers[5];`}),t[9]||(t[9]=n(" creates an array named ",-1)),e(s,null,{default:r(()=>[...t[7]||(t[7]=[n("numbers",-1)])]),_:1}),t[10]||(t[10]=n(" that can hold five integer values. ",-1))]),_:1}),e(a,null,{default:r(()=>[...t[11]||(t[11]=[n("Storing Values in an Array",-1)])]),_:1}),e(l,null,{default:r(()=>[t[12]||(t[12]=n(" Individual elements can be assigned values using their index. ",-1)),e(i,{language:"c",code:v}),t[13]||(t[13]=n(" Output ",-1)),e(o,{output:T})]),_:1}),e(l,null,{default:r(()=>[...t[14]||(t[14]=[n(" The array contains five values, but only the first three are printed in this example. ",-1)])]),_:1}),e(a,null,{default:r(()=>[...t[15]||(t[15]=[n("Initializing an Array",-1)])]),_:1}),e(l,null,{default:r(()=>[t[16]||(t[16]=n(" An array can be initialized when it is declared. ",-1)),e(i,{language:"c",code:z}),t[17]||(t[17]=n(" Output ",-1)),e(o,{output:w})]),_:1}),e(l,null,{default:r(()=>[...t[18]||(t[18]=[n(" The values are placed into the array from left to right. ",-1)])]),_:1}),e(a,null,{default:r(()=>[...t[19]||(t[19]=[n("Array Size",-1)])]),_:1}),e(l,null,{default:r(()=>[t[20]||(t[20]=n(" The size of an array determines how many elements it can contain. ",-1)),e(i,{language:"c",code:I}),t[21]||(t[21]=n(" Output ",-1)),e(o,{output:P})]),_:1}),e(l,null,{default:r(()=>[t[23]||(t[23]=n(" The expression ",-1)),e(s,null,{default:r(()=>[...t[22]||(t[22]=[n("sizeof(scores) / sizeof(scores[0])",-1)])]),_:1}),t[24]||(t[24]=n(" calculates the number of elements in the array. ",-1))]),_:1}),e(a,null,{default:r(()=>[...t[25]||(t[25]=[n("Array Indexes",-1)])]),_:1}),e(l,null,{default:r(()=>[t[27]||(t[27]=n(" Each element in an array has an ",-1)),e(s,null,{default:r(()=>[...t[26]||(t[26]=[n("index",-1)])]),_:1}),t[28]||(t[28]=n(" that identifies its position. ",-1)),e(i,{language:"c",code:C}),t[29]||(t[29]=n(" Output ",-1)),e(o,{output:S})]),_:1}),e(l,null,{default:r(()=>[t[33]||(t[33]=n(" C arrays use ",-1)),e(s,null,{default:r(()=>[...t[30]||(t[30]=[n("zero-based indexing",-1)])]),_:1}),t[34]||(t[34]=n(" . This means the first element has index ",-1)),e(s,null,{default:r(()=>[...t[31]||(t[31]=[n("0",-1)])]),_:1}),t[35]||(t[35]=n(" , not ",-1)),e(s,null,{default:r(()=>[...t[32]||(t[32]=[n("1",-1)])]),_:1}),t[36]||(t[36]=n(" . ",-1))]),_:1}),e(d,{title:"Remember the Index"},{default:r(()=>[t[38]||(t[38]=n(" If an array has five elements, its indexes are ",-1)),e(s,null,{default:r(()=>[...t[37]||(t[37]=[n("0, 1, 2, 3, 4",-1)])]),_:1}),t[39]||(t[39]=n(" . ",-1))]),_:1}),e(a,null,{default:r(()=>[...t[40]||(t[40]=[n("Accessing an Element",-1)])]),_:1}),e(l,null,{default:r(()=>[t[41]||(t[41]=n(" An individual element can be accessed by using the array name followed by its index. ",-1)),e(i,{language:"c",code:G})]),_:1}),e(l,null,{default:r(()=>[t[43]||(t[43]=n(" In this example, ",-1)),e(s,null,{default:r(()=>[...t[42]||(t[42]=[n("numbers[2]",-1)])]),_:1}),t[44]||(t[44]=n(" refers to the third element of the array. ",-1))]),_:1}),e(a,null,{default:r(()=>[...t[45]||(t[45]=[n("Changing an Array Element",-1)])]),_:1}),e(l,null,{default:r(()=>[t[46]||(t[46]=n(" An existing element can be changed by assigning it a new value. ",-1)),e(i,{language:"c",code:E}),t[47]||(t[47]=n(" Output ",-1)),e(o,{output:k})]),_:1}),e(l,null,{default:r(()=>[t[49]||(t[49]=n(" Only the element at index ",-1)),e(s,null,{default:r(()=>[...t[48]||(t[48]=[n("1",-1)])]),_:1}),t[50]||(t[50]=n(" is changed. The other elements remain the same. ",-1))]),_:1}),e(a,null,{default:r(()=>[...t[51]||(t[51]=[n("Arrays Can Store Other Data Types",-1)])]),_:1}),e(l,null,{default:r(()=>[t[52]||(t[52]=n(" Arrays are not limited to integers. They can store values of other data types as long as all elements have the same type. ",-1)),e(i,{language:"c",code:B}),t[53]||(t[53]=n(" Output ",-1)),e(o,{output:N})]),_:1}),e(l,null,{default:r(()=>[t[55]||(t[55]=n(" Here, the array stores five ",-1)),e(s,null,{default:r(()=>[...t[54]||(t[54]=[n("char",-1)])]),_:1}),t[56]||(t[56]=n(" values. ",-1))]),_:1}),e(a,null,{default:r(()=>[...t[57]||(t[57]=[n("Partially Initializing an Array",-1)])]),_:1}),e(l,null,{default:r(()=>[t[58]||(t[58]=n(" An array can be declared with a size larger than the number of values provided during initialization. ",-1)),e(i,{language:"c",code:F}),t[59]||(t[59]=n(" Output ",-1)),e(o,{output:V})]),_:1}),e(l,null,{default:r(()=>[t[61]||(t[61]=n(" The first two elements receive the provided values. The remaining elements are initialized to ",-1)),e(s,null,{default:r(()=>[...t[60]||(t[60]=[n("0",-1)])]),_:1}),t[62]||(t[62]=n(" for an integer array. ",-1))]),_:1}),e(a,null,{default:r(()=>[...t[63]||(t[63]=[n("Getting Values from the User",-1)])]),_:1}),e(l,null,{default:r(()=>[t[64]||(t[64]=n(" Array elements can also receive values through user input. ",-1)),e(i,{language:"c",code:$}),t[65]||(t[65]=n(" Output ",-1)),e(o,{output:j})]),_:1}),e(l,null,{default:r(()=>[...t[66]||(t[66]=[n(" Each input value is stored in a specific element using its index. ",-1)])]),_:1}),e(a,null,{default:r(()=>[...t[67]||(t[67]=[n("Summary",-1)])]),_:1}),e(l,null,{default:r(()=>[...t[68]||(t[68]=[n(" An array allows multiple values of the same data type to be stored under one variable name. Each value is accessed using its index. ",-1)])]),_:1}),e(l,null,{default:r(()=>[e(i,{language:"c",code:D}),t[69]||(t[69]=n(" Output ",-1)),e(o,{output:q})]),_:1}),e(l,null,{default:r(()=>[u("ul",A,[t[78]||(t[78]=u("li",null,"An array stores multiple values of the same data type.",-1)),t[79]||(t[79]=u("li",null,"The array size determines how many elements it can contain.",-1)),u("li",null,[t[71]||(t[71]=n("Array indexes start at ",-1)),e(s,null,{default:r(()=>[...t[70]||(t[70]=[n("0",-1)])]),_:1}),t[72]||(t[72]=n(" . ",-1))]),t[80]||(t[80]=u("li",null,"An individual element can be accessed using its index.",-1)),t[81]||(t[81]=u("li",null,"Array elements can be changed after initialization.",-1)),u("li",null,[t[75]||(t[75]=n("Arrays can store different data types such as ",-1)),e(s,null,{default:r(()=>[...t[73]||(t[73]=[n("int",-1)])]),_:1}),t[76]||(t[76]=n(" and ",-1)),e(s,null,{default:r(()=>[...t[74]||(t[74]=[n("char",-1)])]),_:1}),t[77]||(t[77]=n(" . ",-1))])])]),_:1}),t[84]||(t[84]=u("br",null,null,-1)),e(f,{to:"/academia/student/classes/c-one-dimensional-arrays"})])]),_:1}))}});export{Y as default};

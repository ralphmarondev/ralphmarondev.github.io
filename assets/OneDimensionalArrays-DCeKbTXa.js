import{_ as m}from"./logo-C9ImmdpX.js";import{T as l,a as i,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-DDUXdY-4.js";import{T as r,C as a,O as o}from"./CodeBlock-DIhZalJZ.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-BsSGgAE1.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-DWicuDYA.js";import{d as g,h as y,i as s,o as b,a as u,q as e,g as t}from"./index-fUs2VaN6.js";const v={class:"max-w-4xl mx-auto"},x={class:"list-disc pl-6 space-y-2"},O=`
#include <stdio.h>

int main() {
    int scores[5] = {85, 90, 78, 92, 88};

    printf("%d\\n", scores[0]);
    printf("%d\\n", scores[1]);
    printf("%d\\n", scores[2]);
    printf("%d\\n", scores[3]);
    printf("%d\\n", scores[4]);
    return 0;
}`,A=`
85
90
78
92
88`,T=`
int scores[5] = {85, 90, 78, 92, 88};`,C=`
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    printf("First: %d\\n", numbers[0]);
    printf("Last: %d\\n", numbers[4]);
    return 0;
}`,E=`
First: 10
Last: 50`,P=`
#include <stdio.h>

int main() {
    int scores[4] = {70, 80, 90, 100};

    scores[1] = 85;
    scores[3] = 95;

    printf("%d\\n", scores[0]);
    printf("%d\\n", scores[1]);
    printf("%d\\n", scores[2]);
    printf("%d\\n", scores[3]);
    return 0;
}`,w=`
70
85
90
95`,k=`
#include <stdio.h>

int main() {
    int numbers[3];

    printf("Enter three numbers: ");
    scanf("%d", &numbers[0]);
    scanf("%d", &numbers[1]);
    scanf("%d", &numbers[2]);

    printf("Numbers: %d %d %d\\n",
           numbers[0], numbers[1], numbers[2]);
    return 0;
}`,I=`
Enter three numbers: 10 20 30
Numbers: 10 20 30`,S=`
#include <stdio.h>

int main() {
    int numbers[4] = {10, 20, 30, 40};
    int sum;

    sum = numbers[0] + numbers[1] + numbers[2] + numbers[3];

    printf("Sum: %d\\n", sum);
    return 0;
}`,F=`
Sum: 100`,B=`
#include <stdio.h>

int main() {
    int scores[4] = {80, 90, 70, 100};
    int sum;
    float average;

    sum = scores[0] + scores[1] + scores[2] + scores[3];
    average = sum / 4.0;

    printf("Average: %.2f\\n", average);
    return 0;
}`,D=`
Average: 85.00`,N=`
#include <stdio.h>

int main() {
    int numbers[3] = {10, 20, 30};

    if (numbers[0] < numbers[1]) {
        printf("First number is smaller.\\n");
    }
    return 0;
}`,V=`
First number is smaller.`,q=`
#include <stdio.h>

int main() {
    int first[3] = {10, 20, 30};
    int second[3];

    second[0] = first[0];
    second[1] = first[1];
    second[2] = first[2];

    printf("%d %d %d\\n",
           second[0], second[1], second[2]);
    return 0;
}`,j=`
10 20 30`,z=`
#include <stdio.h>

int main() {
    int scores[5] = {85, 90, 78, 92, 88};
    int total;

    total = scores[0] + scores[1] + scores[2] + scores[3] + scores[4];

    printf("Total Score: %d\\n", total);
    return 0;
}`,L=`
Total Score: 433`,M=g({__name:"OneDimensionalArrays",setup(U){return($,n)=>(b(),y(p,null,{default:s(()=>[u("div",v,[n[77]||(n[77]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),n[78]||(n[78]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," One-Dimensional Arrays ")],-1)),e(l,null,{default:s(()=>[n[1]||(n[1]=t(" A ",-1)),e(r,null,{default:s(()=>[...n[0]||(n[0]=[t("one-dimensional array",-1)])]),_:1}),n[2]||(n[2]=t(" stores values in a single sequence. Each value can be accessed using its index. ",-1))]),_:1}),e(l,null,{default:s(()=>[n[3]||(n[3]=t(" A simple integer array can be declared and initialized like this: ",-1)),e(a,{language:"c",code:T})]),_:1}),e(d,{title:"Think of It This Way"},{default:s(()=>[...n[4]||(n[4]=[t(" A one-dimensional array is like a single row of boxes. Each box has one position and stores one value. ",-1)])]),_:1}),e(i,null,{default:s(()=>[...n[5]||(n[5]=[t("Accessing the Elements",-1)])]),_:1}),e(l,null,{default:s(()=>[n[6]||(n[6]=t(" Each element is accessed using the array name and its index. ",-1)),e(a,{language:"c",code:O}),n[7]||(n[7]=t(" Output ",-1)),e(o,{output:A})]),_:1}),e(l,null,{default:s(()=>[n[10]||(n[10]=t(" The five values are stored in five different positions, from index ",-1)),e(r,null,{default:s(()=>[...n[8]||(n[8]=[t("0",-1)])]),_:1}),n[11]||(n[11]=t(" through index ",-1)),e(r,null,{default:s(()=>[...n[9]||(n[9]=[t("4",-1)])]),_:1}),n[12]||(n[12]=t(". ",-1))]),_:1}),e(i,null,{default:s(()=>[...n[13]||(n[13]=[t("First and Last Elements",-1)])]),_:1}),e(l,null,{default:s(()=>[n[15]||(n[15]=t(" The first element is always at index ",-1)),e(r,null,{default:s(()=>[...n[14]||(n[14]=[t("0",-1)])]),_:1}),n[16]||(n[16]=t(". The last element is at an index one less than the array's size. ",-1)),e(a,{language:"c",code:C}),n[17]||(n[17]=t(" Output ",-1)),e(o,{output:E})]),_:1}),e(d,{title:"Remember"},{default:s(()=>[n[20]||(n[20]=t(" If an array contains ",-1)),e(r,null,{default:s(()=>[...n[18]||(n[18]=[t("n",-1)])]),_:1}),n[21]||(n[21]=t(" elements, its last index is ",-1)),e(r,null,{default:s(()=>[...n[19]||(n[19]=[t("n - 1",-1)])]),_:1}),n[22]||(n[22]=t(". ",-1))]),_:1}),e(i,null,{default:s(()=>[...n[23]||(n[23]=[t("Changing Elements",-1)])]),_:1}),e(l,null,{default:s(()=>[n[24]||(n[24]=t(" An element in a one-dimensional array can be changed by assigning a new value to its index. ",-1)),e(a,{language:"c",code:P}),n[25]||(n[25]=t(" Output ",-1)),e(o,{output:w})]),_:1}),e(l,null,{default:s(()=>[n[28]||(n[28]=t(" Only the elements at indexes ",-1)),e(r,null,{default:s(()=>[...n[26]||(n[26]=[t("1",-1)])]),_:1}),n[29]||(n[29]=t(" and ",-1)),e(r,null,{default:s(()=>[...n[27]||(n[27]=[t("3",-1)])]),_:1}),n[30]||(n[30]=t(" are changed in this example. ",-1))]),_:1}),e(i,null,{default:s(()=>[...n[31]||(n[31]=[t("Getting Array Values from the User",-1)])]),_:1}),e(l,null,{default:s(()=>[n[33]||(n[33]=t(" Individual elements can receive values using ",-1)),e(r,null,{default:s(()=>[...n[32]||(n[32]=[t("scanf()",-1)])]),_:1}),n[34]||(n[34]=t(". ",-1)),e(a,{language:"c",code:k}),n[35]||(n[35]=t(" Output ",-1)),e(o,{output:I})]),_:1}),e(l,null,{default:s(()=>[n[37]||(n[37]=t(" Each ",-1)),e(r,null,{default:s(()=>[...n[36]||(n[36]=[t("scanf()",-1)])]),_:1}),n[38]||(n[38]=t(" stores the entered value in a different array element. ",-1))]),_:1}),e(i,null,{default:s(()=>[...n[39]||(n[39]=[t("Calculating with Array Elements",-1)])]),_:1}),e(l,null,{default:s(()=>[n[40]||(n[40]=t(" Array elements can be used in calculations just like ordinary variables. ",-1)),e(a,{language:"c",code:S}),n[41]||(n[41]=t(" Output ",-1)),e(o,{output:F})]),_:1}),e(l,null,{default:s(()=>[n[43]||(n[43]=t(" The four elements are added together and the result is stored in ",-1)),e(r,null,{default:s(()=>[...n[42]||(n[42]=[t("sum",-1)])]),_:1}),n[44]||(n[44]=t(". ",-1))]),_:1}),e(i,null,{default:s(()=>[...n[45]||(n[45]=[t("Calculating an Average",-1)])]),_:1}),e(l,null,{default:s(()=>[n[46]||(n[46]=t(" Array elements can also be used to calculate an average. ",-1)),e(a,{language:"c",code:B}),n[47]||(n[47]=t(" Output ",-1)),e(o,{output:D})]),_:1}),e(l,null,{default:s(()=>[...n[48]||(n[48]=[t(" The values are added together first. The total is then divided by the number of elements. ",-1)])]),_:1}),e(i,null,{default:s(()=>[...n[49]||(n[49]=[t("Comparing Array Elements",-1)])]),_:1}),e(l,null,{default:s(()=>[n[50]||(n[50]=t(" Individual elements can be compared using relational operators. ",-1)),e(a,{language:"c",code:N}),n[51]||(n[51]=t(" Output ",-1)),e(o,{output:V})]),_:1}),e(l,null,{default:s(()=>[n[54]||(n[54]=t(" In this example, ",-1)),e(r,null,{default:s(()=>[...n[52]||(n[52]=[t("numbers[0]",-1)])]),_:1}),n[55]||(n[55]=t(" is compared with ",-1)),e(r,null,{default:s(()=>[...n[53]||(n[53]=[t("numbers[1]",-1)])]),_:1}),n[56]||(n[56]=t(". ",-1))]),_:1}),e(i,null,{default:s(()=>[...n[57]||(n[57]=[t("Copying Array Elements",-1)])]),_:1}),e(l,null,{default:s(()=>[n[58]||(n[58]=t(" Individual elements can be copied from one array to another. ",-1)),e(a,{language:"c",code:q}),n[59]||(n[59]=t(" Output ",-1)),e(o,{output:j})]),_:1}),e(l,null,{default:s(()=>[...n[60]||(n[60]=[t(" Each element is copied separately using its corresponding index. ",-1)])]),_:1}),e(i,null,{default:s(()=>[...n[61]||(n[61]=[t("A Practical Example",-1)])]),_:1}),e(l,null,{default:s(()=>[n[62]||(n[62]=t(" One-dimensional arrays are useful when several related values need to be stored together. For example, an array can store the scores of several students. ",-1)),e(a,{language:"c",code:z}),n[63]||(n[63]=t(" Output ",-1)),e(o,{output:L})]),_:1}),e(l,null,{default:s(()=>[...n[64]||(n[64]=[t(" The scores are grouped into one array, making them easier to work with as a collection of related values. ",-1)])]),_:1}),e(i,null,{default:s(()=>[...n[65]||(n[65]=[t("Summary",-1)])]),_:1}),e(l,null,{default:s(()=>[...n[66]||(n[66]=[t(" A one-dimensional array stores multiple values in a single sequence. Each value is identified by an index. ",-1)])]),_:1}),e(l,null,{default:s(()=>[u("ul",x,[n[73]||(n[73]=u("li",null,"A one-dimensional array stores values in a single sequence.",-1)),u("li",null,[n[68]||(n[68]=t("The first element is at index ",-1)),e(r,null,{default:s(()=>[...n[67]||(n[67]=[t("0",-1)])]),_:1}),n[69]||(n[69]=t(".",-1))]),n[74]||(n[74]=u("li",null,"The last index is one less than the array size.",-1)),n[75]||(n[75]=u("li",null,"Individual elements can be changed after declaration.",-1)),n[76]||(n[76]=u("li",null,"Array elements can be used in calculations and comparisons.",-1)),u("li",null,[n[71]||(n[71]=t("Values can be entered into individual array elements using ",-1)),e(r,null,{default:s(()=>[...n[70]||(n[70]=[t("scanf()",-1)])]),_:1}),n[72]||(n[72]=t(".",-1))])])]),_:1}),n[79]||(n[79]=u("br",null,null,-1)),e(f,{to:"/academia/student/classes/c-array-traversal"})])]),_:1}))}});export{M as default};

import{_ as r}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-BHqqVcAK.js";import{T as a,a as u,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-JDRukrMl.js";import{T as s,C as o}from"./CodeBlock-BE2lyL2C.js";import{O as d}from"./OutputBlock-CZmA96mX.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-lDLc7df2.js";import{d as g,h as v,i as e,o as y,a as i,q as l,g as n}from"./index-DfAF0zN8.js";const b={class:"max-w-4xl mx-auto"},C=`
int age = 20;
age = 21;
`,w=`
const int days = 7;
`,x=`
#include <stdio.h>

int main() {
    const int days = 7;

    printf("Days in a week: %d\\n", days);

    return 0;
}
`,k=`
#include <stdio.h>

int main() {
    const double pi = 3.1415926535;

    printf("Pi: %.10f\\n", pi);

    return 0;
}
`,T=`
const int days = 7;
days = 10;
`,P=`
#include <stdio.h>

int main() {
    const int days = 7;
    const int months = 12;
    const double pi = 3.1415926535;

    printf("Days: %d\\n", days);
    printf("Months: %d\\n", months);
    printf("Pi: %.10f\\n", pi);

    return 0;
}
`,D=`
Days: 7
Months: 12
Pi: 3.1415926535
`,O=`
const int days_in_week = 7;
const int months_in_year = 12;
const double pi = 3.1415926535;
`,$=g({__name:"Constants",setup(B){return(I,t)=>(y(),v(f,null,{default:e(()=>[i("div",b,[t[59]||(t[59]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:r,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[60]||(t[60]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Constants ")],-1)),l(a,null,{default:e(()=>[...t[0]||(t[0]=[n(" A constant is a value that should not change while a program is running. Constants are useful when a value represents something that should remain the same throughout the program. ",-1)])]),_:1}),l(a,null,{default:e(()=>[t[2]||(t[2]=n(" In C, the ",-1)),l(s,null,{default:e(()=>[...t[1]||(t[1]=[n("const",-1)])]),_:1}),t[3]||(t[3]=n(" keyword can be used when declaring a variable whose value should not be changed after it is initialized. ",-1))]),_:1}),l(u,null,{default:e(()=>[...t[4]||(t[4]=[n("Variables vs Constants",-1)])]),_:1}),l(a,null,{default:e(()=>[t[5]||(t[5]=n(" A regular variable can be assigned a different value after it has been initialized. ",-1)),l(o,{language:"c",code:C})]),_:1}),l(a,null,{default:e(()=>[t[9]||(t[9]=n(" In this example, the value of ",-1)),l(s,null,{default:e(()=>[...t[6]||(t[6]=[n("age",-1)])]),_:1}),t[10]||(t[10]=n(" changes from ",-1)),l(s,null,{default:e(()=>[...t[7]||(t[7]=[n("20",-1)])]),_:1}),t[11]||(t[11]=n(" to ",-1)),l(s,null,{default:e(()=>[...t[8]||(t[8]=[n("21",-1)])]),_:1}),t[12]||(t[12]=n(" . ",-1))]),_:1}),l(a,null,{default:e(()=>[...t[13]||(t[13]=[n(" A constant, on the other hand, is intended to keep the same value throughout the program. ",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[14]||(t[14]=[n("Declaring a Constant",-1)])]),_:1}),l(a,null,{default:e(()=>[t[16]||(t[16]=n(" To declare a constant using ",-1)),l(s,null,{default:e(()=>[...t[15]||(t[15]=[n("const",-1)])]),_:1}),t[17]||(t[17]=n(" , place the keyword before the data type. ",-1)),l(o,{language:"c",code:w})]),_:1}),l(a,null,{default:e(()=>[t[21]||(t[21]=n(" The variable ",-1)),l(s,null,{default:e(()=>[...t[18]||(t[18]=[n("days",-1)])]),_:1}),t[22]||(t[22]=n(" is initialized with the value ",-1)),l(s,null,{default:e(()=>[...t[19]||(t[19]=[n("7",-1)])]),_:1}),t[23]||(t[23]=n(" . Because it is declared with ",-1)),l(s,null,{default:e(()=>[...t[20]||(t[20]=[n("const",-1)])]),_:1}),t[24]||(t[24]=n(" , its value should not be changed afterward. ",-1)),l(o,{language:"c",code:x}),t[25]||(t[25]=n(" Output ",-1)),l(d,{output:"Days in a week: 7"})]),_:1}),l(u,null,{default:e(()=>[...t[26]||(t[26]=[n("Constants with Different Data Types",-1)])]),_:1}),l(a,null,{default:e(()=>[t[28]||(t[28]=n(" Constants can use different data types just like regular variables. For example, a constant can store a decimal value using ",-1)),l(s,null,{default:e(()=>[...t[27]||(t[27]=[n("double",-1)])]),_:1}),t[29]||(t[29]=n(" . ",-1)),l(o,{language:"c",code:k}),t[30]||(t[30]=n(" Output ",-1)),l(d,{output:"Pi: 3.1415926535"})]),_:1}),l(u,null,{default:e(()=>[...t[31]||(t[31]=[n("Changing a Constant",-1)])]),_:1}),l(a,null,{default:e(()=>[t[32]||(t[32]=n(" Once a constant has been initialized, attempting to assign a new value to it is not allowed. ",-1)),l(o,{language:"c",code:T})]),_:1}),l(a,null,{default:e(()=>[t[35]||(t[35]=n(" The assignment ",-1)),l(s,null,{default:e(()=>[...t[33]||(t[33]=[n("days = 10",-1)])]),_:1}),t[36]||(t[36]=n(" is invalid because ",-1)),l(s,null,{default:e(()=>[...t[34]||(t[34]=[n("days",-1)])]),_:1}),t[37]||(t[37]=n(" was declared as a constant. ",-1))]),_:1}),l(p,{title:"Keep Important Values Safe"},{default:e(()=>[t[39]||(t[39]=n(" If a value represents something that should remain unchanged, using ",-1)),l(s,null,{default:e(()=>[...t[38]||(t[38]=[n("const",-1)])]),_:1}),t[40]||(t[40]=n(" helps communicate that intention and prevents accidental changes to the value. ",-1))]),_:1}),l(u,null,{default:e(()=>[...t[41]||(t[41]=[n("Using Multiple Constants",-1)])]),_:1}),l(a,null,{default:e(()=>[t[42]||(t[42]=n(" A program can contain multiple constants. Each constant can represent a different fixed value. ",-1)),l(o,{language:"c",code:P}),t[43]||(t[43]=n(" Output ",-1)),l(d,{output:D})]),_:1}),l(u,null,{default:e(()=>[...t[44]||(t[44]=[n("Meaningful Constant Names",-1)])]),_:1}),l(a,null,{default:e(()=>[t[45]||(t[45]=n(" Constants should have names that clearly describe what their values represent. Meaningful names make programs easier to understand. ",-1)),l(o,{language:"c",code:O})]),_:1}),l(a,null,{default:e(()=>[t[48]||(t[48]=n(" Names such as ",-1)),l(s,null,{default:e(()=>[...t[46]||(t[46]=[n("days_in_week",-1)])]),_:1}),t[49]||(t[49]=n(" and ",-1)),l(s,null,{default:e(()=>[...t[47]||(t[47]=[n("months_in_year",-1)])]),_:1}),t[50]||(t[50]=n(" make the purpose of each constant clear. ",-1))]),_:1}),l(u,null,{default:e(()=>[...t[51]||(t[51]=[n("When to Use Constants",-1)])]),_:1}),l(a,null,{default:e(()=>[...t[52]||(t[52]=[n(" Constants are useful for values that have a fixed meaning in a program. Examples include the number of days in a week, the number of months in a year, or a mathematical value such as pi. ",-1)])]),_:1}),l(a,null,{default:e(()=>[...t[53]||(t[53]=[n(" Using a named constant also makes a program easier to maintain because the value can be defined in one place and referenced wherever it is needed. ",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[54]||(t[54]=[n("Summary",-1)])]),_:1}),l(a,null,{default:e(()=>[t[56]||(t[56]=n(" Constants represent values that should remain unchanged during program execution. In C, the ",-1)),l(s,null,{default:e(()=>[...t[55]||(t[55]=[n("const",-1)])]),_:1}),t[57]||(t[57]=n(" keyword can be used to declare a variable whose value should not be modified after initialization. ",-1))]),_:1}),l(a,null,{default:e(()=>[...t[58]||(t[58]=[n(" You learned how to declare constants, use them with different data types, display their values, and understand why constants are useful in a program. ",-1)])]),_:1}),t[61]||(t[61]=i("br",null,null,-1)),l(m,{to:"/academia/student/classes/c-type-casting"})])]),_:1}))}});export{$ as default};

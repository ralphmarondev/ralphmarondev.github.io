import{_ as d}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{T as i,a as r,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{C as o,T as u}from"./CodeBlock-Z3HAVLif.js";import{O as a}from"./OutputBlock-B9VPajdJ.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-CMwsacWG.js";import{d as g,h as v,i as e,o as y,a as s,q as n,g as l}from"./index-BRxoWVJY.js";const b={class:"max-w-4xl mx-auto"},x=`
int number = 10;
double value = number;
`,w=`
#include <stdio.h>

int main() {
    int number = 10;
    double value = number;

    printf("Number: %d\\n", number);
    printf("Value: %.1f\\n", value);

    return 0;
}
`,C=`
Number: 10
Value: 10.0
`,T=`
double value = 10.5;
int number = (int) value;
`,O=`
#include <stdio.h>

int main() {
    double value = 10.5;
    int number = (int) value;

    printf("Value: %.1f\\n", value);
    printf("Number: %d\\n", number);

    return 0;
}
`,D=`
Value: 10.5
Number: 10
`,P=`
#include <stdio.h>

int main() {
    double price = 99.99;
    int whole_price = (int) price;

    printf("Price: %.2f\\n", price);
    printf("Whole price: %d\\n", whole_price);

    return 0;
}
`,I=`
Price: 99.99
Whole price: 99
`,N=`
#include <stdio.h>

int main() {
    int a = 5;
    int b = 2;

    double result = a / b;

    printf("Result: %.1f\\n", result);

    return 0;
}
`,V=`
Result: 2.0
`,k=`
#include <stdio.h>

int main() {
    int a = 5;
    int b = 2;

    double result = (double) a / b;

    printf("Result: %.1f\\n", result);

    return 0;
}
`,B=`
Result: 2.5
`,W=`
(data_type) value
`,R=`
#include <stdio.h>

int main() {
    int number = 7;

    double decimal = (double) number;
    float value = (float) number;

    printf("Double: %.1f\\n", decimal);
    printf("Float: %.1f\\n", value);

    return 0;
}
`,q=`
Double: 7.0
Float: 7.0
`,G=g({__name:"TypeCasting",setup(E){return(F,t)=>(y(),v(p,null,{default:e(()=>[s("div",b,[t[77]||(t[77]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:d,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[78]||(t[78]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Type Casting ")],-1)),n(i,null,{default:e(()=>[...t[0]||(t[0]=[l(" Type casting is the process of converting a value from one data type to another. It is useful when a program needs to work with values of different data types. ",-1)])]),_:1}),n(i,null,{default:e(()=>[...t[1]||(t[1]=[l(" C can perform type conversions automatically in some situations, or the programmer can explicitly request a conversion. ",-1)])]),_:1}),n(r,null,{default:e(()=>[...t[2]||(t[2]=[l("Implicit Type Conversion",-1)])]),_:1}),n(i,null,{default:e(()=>[t[3]||(t[3]=l(" Implicit type conversion happens automatically when C converts a value from one data type to another without an explicit instruction from the programmer. ",-1)),n(o,{language:"c",code:x})]),_:1}),n(i,null,{default:e(()=>[t[7]||(t[7]=l(" In this example, the integer value ",-1)),n(u,null,{default:e(()=>[...t[4]||(t[4]=[l("10",-1)])]),_:1}),t[8]||(t[8]=l(" is automatically converted to a ",-1)),n(u,null,{default:e(()=>[...t[5]||(t[5]=[l("double",-1)])]),_:1}),t[9]||(t[9]=l(" when it is assigned to ",-1)),n(u,null,{default:e(()=>[...t[6]||(t[6]=[l("value",-1)])]),_:1}),t[10]||(t[10]=l(" . ",-1)),n(o,{language:"c",code:w}),t[11]||(t[11]=l(" Output ",-1)),n(a,{output:C})]),_:1}),n(r,null,{default:e(()=>[...t[12]||(t[12]=[l("Explicit Type Casting",-1)])]),_:1}),n(i,null,{default:e(()=>[...t[13]||(t[13]=[l(" Explicit type casting happens when the programmer directly tells C to convert a value to a specific data type. ",-1)])]),_:1}),n(i,null,{default:e(()=>[t[14]||(t[14]=l(" The basic syntax for explicit type casting is: ",-1)),n(o,{language:"c",code:T})]),_:1}),n(i,null,{default:e(()=>[t[18]||(t[18]=l(" The ",-1)),n(u,null,{default:e(()=>[...t[15]||(t[15]=[l("(int)",-1)])]),_:1}),t[19]||(t[19]=l(" tells C to convert the value of ",-1)),n(u,null,{default:e(()=>[...t[16]||(t[16]=[l("value",-1)])]),_:1}),t[20]||(t[20]=l(" into an integer before storing it in ",-1)),n(u,null,{default:e(()=>[...t[17]||(t[17]=[l("number",-1)])]),_:1}),t[21]||(t[21]=l(" . ",-1)),n(o,{language:"c",code:O}),t[22]||(t[22]=l(" Output ",-1)),n(a,{output:D})]),_:1}),n(i,null,{default:e(()=>[t[26]||(t[26]=l(" Notice that the decimal part ",-1)),n(u,null,{default:e(()=>[...t[23]||(t[23]=[l(".5",-1)])]),_:1}),t[27]||(t[27]=l(" is removed when the value is converted from ",-1)),n(u,null,{default:e(()=>[...t[24]||(t[24]=[l("double",-1)])]),_:1}),t[28]||(t[28]=l(" to ",-1)),n(u,null,{default:e(()=>[...t[25]||(t[25]=[l("int",-1)])]),_:1}),t[29]||(t[29]=l(" . ",-1))]),_:1}),n(m,{title:"Casting Does Not Change the Original"},{default:e(()=>[...t[30]||(t[30]=[l(" Type casting creates a converted value for the operation or assignment. It does not automatically change the original variable's data type. ",-1)])]),_:1}),n(r,null,{default:e(()=>[...t[31]||(t[31]=[l("Converting Decimal Values",-1)])]),_:1}),n(i,null,{default:e(()=>[t[32]||(t[32]=l(" When a floating-point value is explicitly converted to an integer, the decimal portion is discarded. ",-1)),n(o,{language:"c",code:P}),t[33]||(t[33]=l(" Output ",-1)),n(a,{output:I})]),_:1}),n(i,null,{default:e(()=>[t[36]||(t[36]=l(" The value ",-1)),n(u,null,{default:e(()=>[...t[34]||(t[34]=[l("99.99",-1)])]),_:1}),t[37]||(t[37]=l(" becomes ",-1)),n(u,null,{default:e(()=>[...t[35]||(t[35]=[l("99",-1)])]),_:1}),t[38]||(t[38]=l(" . Type casting does not round the value; it removes the fractional part. ",-1))]),_:1}),n(r,null,{default:e(()=>[...t[39]||(t[39]=[l("Type Casting in Division",-1)])]),_:1}),n(i,null,{default:e(()=>[...t[40]||(t[40]=[l(" Type casting becomes especially useful when performing calculations involving different data types. ",-1)])]),_:1}),n(i,null,{default:e(()=>[t[41]||(t[41]=l(" When two integers are divided, C performs integer division. The decimal portion is discarded before the result is assigned to another type. ",-1)),n(o,{language:"c",code:N}),t[42]||(t[42]=l(" Output ",-1)),n(a,{output:V})]),_:1}),n(i,null,{default:e(()=>[t[47]||(t[47]=l(" Even though ",-1)),n(u,null,{default:e(()=>[...t[43]||(t[43]=[l("result",-1)])]),_:1}),t[48]||(t[48]=l(" is a ",-1)),n(u,null,{default:e(()=>[...t[44]||(t[44]=[l("double",-1)])]),_:1}),t[49]||(t[49]=l(" , the division is performed between two integers first. Therefore, ",-1)),n(u,null,{default:e(()=>[...t[45]||(t[45]=[l("5 / 2",-1)])]),_:1}),t[50]||(t[50]=l(" produces ",-1)),n(u,null,{default:e(()=>[...t[46]||(t[46]=[l("2",-1)])]),_:1}),t[51]||(t[51]=l(" . ",-1))]),_:1}),n(i,null,{default:e(()=>[t[52]||(t[52]=l(" We can use type casting to make the division produce a decimal result. ",-1)),n(o,{language:"c",code:k}),t[53]||(t[53]=l(" Output ",-1)),n(a,{output:B})]),_:1}),n(i,null,{default:e(()=>[t[57]||(t[57]=l(" By converting ",-1)),n(u,null,{default:e(()=>[...t[54]||(t[54]=[l("a",-1)])]),_:1}),t[58]||(t[58]=l(" to ",-1)),n(u,null,{default:e(()=>[...t[55]||(t[55]=[l("double",-1)])]),_:1}),t[59]||(t[59]=l(" before the division, C performs floating-point division and produces ",-1)),n(u,null,{default:e(()=>[...t[56]||(t[56]=[l("2.5",-1)])]),_:1}),t[60]||(t[60]=l(" . ",-1))]),_:1}),n(r,null,{default:e(()=>[...t[61]||(t[61]=[l("Basic Casting Syntax",-1)])]),_:1}),n(i,null,{default:e(()=>[t[62]||(t[62]=l(" Explicit type casting follows a simple pattern: ",-1)),n(o,{language:"c",code:W})]),_:1}),n(i,null,{default:e(()=>[t[65]||(t[65]=l(" Replace ",-1)),n(u,null,{default:e(()=>[...t[63]||(t[63]=[l("data_type",-1)])]),_:1}),t[66]||(t[66]=l(" with the type you want and ",-1)),n(u,null,{default:e(()=>[...t[64]||(t[64]=[l("value",-1)])]),_:1}),t[67]||(t[67]=l(" with the value you want to convert. ",-1))]),_:1}),n(r,null,{default:e(()=>[...t[68]||(t[68]=[l("Casting to Different Types",-1)])]),_:1}),n(i,null,{default:e(()=>[t[69]||(t[69]=l(" A value can be explicitly converted to different compatible data types when necessary. ",-1)),n(o,{language:"c",code:R}),t[70]||(t[70]=l(" Output ",-1)),n(a,{output:q})]),_:1}),n(r,null,{default:e(()=>[...t[71]||(t[71]=[l("When to Use Type Casting",-1)])]),_:1}),n(i,null,{default:e(()=>[...t[72]||(t[72]=[l(" Type casting is useful when a calculation requires a specific data type or when a value needs to be represented in a different form. ",-1)])]),_:1}),n(i,null,{default:e(()=>[...t[73]||(t[73]=[l(" It is especially important when working with calculations that involve integers and floating-point values, such as division. ",-1)])]),_:1}),n(r,null,{default:e(()=>[...t[74]||(t[74]=[l("Summary",-1)])]),_:1}),n(i,null,{default:e(()=>[...t[75]||(t[75]=[l(" Type casting converts a value from one data type to another. C can perform conversions automatically through implicit conversion, or the programmer can explicitly request a conversion using the casting syntax. ",-1)])]),_:1}),n(i,null,{default:e(()=>[...t[76]||(t[76]=[l(" You learned how to perform explicit type casting, convert decimal values to integers, and use type casting to obtain decimal results from integer division. ",-1)])]),_:1}),t[79]||(t[79]=s("br",null,null,-1)),n(f,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{G as default};

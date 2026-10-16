import{_ as a}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as o,a as s,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as u,C as e}from"./CodeBlock-CSdrTDFH.js";import{O as d}from"./OutputBlock-BPpR2jjy.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-TzdiyR-Q.js";import{d as g,h as b,i,o as v,a as r,q as n,g as l}from"./index-D3WOnH5O.js";const x={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-8 mt-3 space-y-2"},O=`
int a = 10;
int b = 5;

int result = a + b;
`,R=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int result = a + b;

    printf("Result: %d\\n", result);
    return 0;
}
`,P=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int result = a - b;

    printf("Result: %d\\n", result);
    return 0;
}
`,w=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int result = a * b;

    printf("Result: %d\\n", result);
    return 0;
}
`,y=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int result = a / b;

    printf("Result: %d\\n", result);
    return 0;
}
`,C=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 3;

    int result = a % b;

    printf("Remainder: %d\\n", result);
    return 0;
}
`,A=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int sum = a + b;
    int difference = a - b;
    int product = a * b;
    int quotient = a / b;

    printf("Sum: %d\\n", sum);
    printf("Difference: %d\\n", difference);
    printf("Product: %d\\n", product);
    printf("Quotient: %d\\n", quotient);
    return 0;
}
`,D=`
#include <stdio.h>

int main() {
    double a = 10.0;
    double b = 4.0;

    double result = a / b;

    printf("Result: %.2f\\n", result);
    return 0;
}
`,M=`
#include <stdio.h>

int main() {
    int result = 10 + 5 * 2;

    printf("Result: %d\\n", result);
    return 0;
}
`,B=`
#include <stdio.h>

int main() {
    int result = (10 + 5) * 2;

    printf("Result: %d\\n", result);
    return 0;
}
`,Q=g({__name:"ArithmeticOperators",setup(S){return(k,t)=>(v(),b(f,null,{default:i(()=>[r("div",x,[t[93]||(t[93]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[94]||(t[94]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Arithmetic Operators ")],-1)),n(o,null,{default:i(()=>[...t[0]||(t[0]=[l(" Arithmetic operators are used to perform mathematical calculations on values. C provides operators for addition, subtraction, multiplication, division, and finding the remainder of a division. ",-1)])]),_:1}),n(o,null,{default:i(()=>[...t[1]||(t[1]=[l(" Arithmetic operators can be used with variables, constants, and other expressions. ",-1)])]),_:1}),n(s,null,{default:i(()=>[...t[2]||(t[2]=[l("Addition",-1)])]),_:1}),n(o,null,{default:i(()=>[t[4]||(t[4]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[3]||(t[3]=[l("+",-1)])]),_:1}),t[5]||(t[5]=l(" operator adds two values together. ",-1)),n(e,{language:"c",code:O})]),_:1}),n(o,null,{default:i(()=>[t[9]||(t[9]=l(" The values of ",-1)),n(u,null,{default:i(()=>[...t[6]||(t[6]=[l("a",-1)])]),_:1}),t[10]||(t[10]=l(" and ",-1)),n(u,null,{default:i(()=>[...t[7]||(t[7]=[l("b",-1)])]),_:1}),t[11]||(t[11]=l(" are added together, and the result is stored in ",-1)),n(u,null,{default:i(()=>[...t[8]||(t[8]=[l("result",-1)])]),_:1}),t[12]||(t[12]=l(" . ",-1)),n(e,{language:"c",code:R}),t[13]||(t[13]=l(" Output ",-1)),n(d,{output:"Result: 15"})]),_:1}),n(s,null,{default:i(()=>[...t[14]||(t[14]=[l("Subtraction",-1)])]),_:1}),n(o,null,{default:i(()=>[t[16]||(t[16]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[15]||(t[15]=[l("-",-1)])]),_:1}),t[17]||(t[17]=l(" operator subtracts the second value from the first value. ",-1)),n(e,{language:"c",code:P}),t[18]||(t[18]=l(" Output ",-1)),n(d,{output:"Result: 5"})]),_:1}),n(s,null,{default:i(()=>[...t[19]||(t[19]=[l("Multiplication",-1)])]),_:1}),n(o,null,{default:i(()=>[t[21]||(t[21]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[20]||(t[20]=[l("*",-1)])]),_:1}),t[22]||(t[22]=l(" operator multiplies two values. ",-1)),n(e,{language:"c",code:w}),t[23]||(t[23]=l(" Output ",-1)),n(d,{output:"Result: 50"})]),_:1}),n(s,null,{default:i(()=>[...t[24]||(t[24]=[l("Division",-1)])]),_:1}),n(o,null,{default:i(()=>[t[26]||(t[26]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[25]||(t[25]=[l("/",-1)])]),_:1}),t[27]||(t[27]=l(" operator divides one value by another. ",-1)),n(e,{language:"c",code:y}),t[28]||(t[28]=l(" Output ",-1)),n(d,{output:"Result: 2"})]),_:1}),n(o,null,{default:i(()=>[...t[29]||(t[29]=[l(" When two integer values are divided, C performs integer division. Any fractional part is discarded. ",-1)])]),_:1}),n(s,null,{default:i(()=>[...t[30]||(t[30]=[l("Modulus",-1)])]),_:1}),n(o,null,{default:i(()=>[t[32]||(t[32]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[31]||(t[31]=[l("%",-1)])]),_:1}),t[33]||(t[33]=l(" operator returns the remainder after integer division. ",-1)),n(e,{language:"c",code:C}),t[34]||(t[34]=l(" Output ",-1)),n(d,{output:"Remainder: 1"})]),_:1}),n(o,null,{default:i(()=>[t[40]||(t[40]=l(" Since ",-1)),n(u,null,{default:i(()=>[...t[35]||(t[35]=[l("10",-1)])]),_:1}),t[41]||(t[41]=l(" divided by ",-1)),n(u,null,{default:i(()=>[...t[36]||(t[36]=[l("3",-1)])]),_:1}),t[42]||(t[42]=l(" gives a remainder of ",-1)),n(u,null,{default:i(()=>[...t[37]||(t[37]=[l("1",-1)])]),_:1}),t[43]||(t[43]=l(" , the result of ",-1)),n(u,null,{default:i(()=>[...t[38]||(t[38]=[l("10 % 3",-1)])]),_:1}),t[44]||(t[44]=l(" is ",-1)),n(u,null,{default:i(()=>[...t[39]||(t[39]=[l("1",-1)])]),_:1}),t[45]||(t[45]=l(" . ",-1))]),_:1}),n(m,{title:"Think About the Remainder"},{default:i(()=>[...t[46]||(t[46]=[l(" The modulus operator does not give you the quotient. It gives you what is left over after the division. For example, 10 divided by 3 leaves 1. ",-1)])]),_:1}),n(s,null,{default:i(()=>[...t[47]||(t[47]=[l("Using Multiple Operators",-1)])]),_:1}),n(o,null,{default:i(()=>[t[48]||(t[48]=l(" Multiple arithmetic operations can be performed in the same program. ",-1)),n(e,{language:"c",code:A}),t[49]||(t[49]=l(" Output ",-1)),n(d,{output:`Sum: 15\r
Difference: 5\r
Product: 50\r
Quotient: 2`})]),_:1}),n(s,null,{default:i(()=>[...t[50]||(t[50]=[l("Decimal Division",-1)])]),_:1}),n(o,null,{default:i(()=>[t[51]||(t[51]=l(" The result of division depends on the data types being used. When floating-point values are divided, the result can contain a decimal portion. ",-1)),n(e,{language:"c",code:D}),t[52]||(t[52]=l(" Output ",-1)),n(d,{output:"Result: 2.50"})]),_:1}),n(o,null,{default:i(()=>[t[56]||(t[56]=l(" Because both operands are ",-1)),n(u,null,{default:i(()=>[...t[53]||(t[53]=[l("double",-1)])]),_:1}),t[57]||(t[57]=l(" values, ",-1)),n(u,null,{default:i(()=>[...t[54]||(t[54]=[l("10.0 / 4.0",-1)])]),_:1}),t[58]||(t[58]=l(" produces ",-1)),n(u,null,{default:i(()=>[...t[55]||(t[55]=[l("2.5",-1)])]),_:1}),t[59]||(t[59]=l(" . ",-1))]),_:1}),n(s,null,{default:i(()=>[...t[60]||(t[60]=[l("Order of Operations",-1)])]),_:1}),n(o,null,{default:i(()=>[t[61]||(t[61]=l(" When an expression contains multiple arithmetic operators, C follows an order of operations. Multiplication and division are performed before addition and subtraction. ",-1)),n(e,{language:"c",code:M}),t[62]||(t[62]=l(" Output ",-1)),n(d,{output:"Result: 20"})]),_:1}),n(o,null,{default:i(()=>[t[65]||(t[65]=l(" The multiplication is performed first, so the expression is evaluated as ",-1)),n(u,null,{default:i(()=>[...t[63]||(t[63]=[l("10 + (5 * 2)",-1)])]),_:1}),t[66]||(t[66]=l(" , resulting in ",-1)),n(u,null,{default:i(()=>[...t[64]||(t[64]=[l("20",-1)])]),_:1}),t[67]||(t[67]=l(" . ",-1))]),_:1}),n(s,null,{default:i(()=>[...t[68]||(t[68]=[l("Using Parentheses",-1)])]),_:1}),n(o,null,{default:i(()=>[t[69]||(t[69]=l(" Parentheses can be used when a specific operation needs to be performed first. ",-1)),n(e,{language:"c",code:B}),t[70]||(t[70]=l(" Output ",-1)),n(d,{output:"Result: 30"})]),_:1}),n(o,null,{default:i(()=>[t[74]||(t[74]=l(" The parentheses cause ",-1)),n(u,null,{default:i(()=>[...t[71]||(t[71]=[l("10 + 5",-1)])]),_:1}),t[75]||(t[75]=l(" to be evaluated first, producing ",-1)),n(u,null,{default:i(()=>[...t[72]||(t[72]=[l("15",-1)])]),_:1}),t[76]||(t[76]=l(" . The result is then multiplied by ",-1)),n(u,null,{default:i(()=>[...t[73]||(t[73]=[l("2",-1)])]),_:1}),t[77]||(t[77]=l(" . ",-1))]),_:1}),n(s,null,{default:i(()=>[...t[78]||(t[78]=[l("Arithmetic Operators",-1)])]),_:1}),n(o,null,{default:i(()=>[t[89]||(t[89]=l(" The basic arithmetic operators in C are: ",-1)),r("ul",T,[r("li",null,[n(u,null,{default:i(()=>[...t[79]||(t[79]=[l("+",-1)])]),_:1}),t[80]||(t[80]=l(" → Addition ",-1))]),r("li",null,[n(u,null,{default:i(()=>[...t[81]||(t[81]=[l("-",-1)])]),_:1}),t[82]||(t[82]=l(" → Subtraction ",-1))]),r("li",null,[n(u,null,{default:i(()=>[...t[83]||(t[83]=[l("*",-1)])]),_:1}),t[84]||(t[84]=l(" → Multiplication ",-1))]),r("li",null,[n(u,null,{default:i(()=>[...t[85]||(t[85]=[l("/",-1)])]),_:1}),t[86]||(t[86]=l(" → Division ",-1))]),r("li",null,[n(u,null,{default:i(()=>[...t[87]||(t[87]=[l("%",-1)])]),_:1}),t[88]||(t[88]=l(" → Modulus ",-1))])])]),_:1}),n(s,null,{default:i(()=>[...t[90]||(t[90]=[l("Summary",-1)])]),_:1}),n(o,null,{default:i(()=>[...t[91]||(t[91]=[l(" Arithmetic operators allow a C program to perform mathematical calculations. The basic operators are addition, subtraction, multiplication, division, and modulus. ",-1)])]),_:1}),n(o,null,{default:i(()=>[...t[92]||(t[92]=[l(" You also learned that integer division discards the fractional part, floating-point division can produce decimal results, and parentheses can be used to control the order in which operations are performed. ",-1)])]),_:1}),t[95]||(t[95]=r("br",null,null,-1)),n(p,{to:"/academia/student/classes/c-assignment-operators"})])]),_:1}))}});export{Q as default};

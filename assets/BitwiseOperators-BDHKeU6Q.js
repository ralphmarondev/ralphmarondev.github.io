import{_ as f}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BHqqVcAK.js";import{T as s,a as e,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-JDRukrMl.js";import{T as u,C as r}from"./CodeBlock-BE2lyL2C.js";import{O as d}from"./OutputBlock-CZmA96mX.js";import{_ as g}from"./FernInfo.vue_vue_type_script_setup_true_lang-lDLc7df2.js";import{d as a,h as b,i,o as w,a as o,q as n,g as l}from"./index-DfAF0zN8.js";const O={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-8 mt-3 space-y-2"},v=`
#include <stdio.h>

int main() {
    int a = 12;
    int b = 10;

    int result = a & b;

    printf("Result: %d\\n", result);
    return 0;
}
`,x=`
#include <stdio.h>

int main() {
    int a = 12;
    int b = 10;

    int result = a | b;

    printf("Result: %d\\n", result);
    return 0;
}
`,y=`
#include <stdio.h>

int main() {
    int a = 12;
    int b = 10;

    int result = a ^ b;

    printf("Result: %d\\n", result);
    return 0;
}
`,R=`
#include <stdio.h>

int main() {
    unsigned int a = 12;
    unsigned int result = ~a;

    printf("%u\\n", result);
    return 0;
}
`,B=`
#include <stdio.h>

int main() {
    int number = 5;
    int result = number << 1;

    printf("Result: %d\\n", result);
    return 0;
}
`,N=`
#include <stdio.h>

int main() {
    int number = 20;
    int result = number >> 1;

    printf("Result: %d\\n", result);
    return 0;
}
`,k=`
12 = 1100
10 = 1010

1100
1010
----
1000

1000 = 8
`,C=`
12 = 1100
10 = 1010

1100
1010
----
1110

1110 = 14
`,P=`
12 = 1100
10 = 1010

1100
1010
----
0110

0110 = 6
`,A=`
5 = 0101

0101 << 1
1010

1010 = 10
`,S=`
#include <stdio.h>

int main() {
    unsigned int a = 12;
    unsigned int b = 10;

    printf("AND: %u\\n", a & b);
    printf("OR: %u\\n", a | b);
    printf("XOR: %u\\n", a ^ b);
    printf("NOT: %u\\n", ~a);
    return 0;
}
`,L=`
AND: 8
OR: 14
XOR: 6
NOT: 4294967283
`,D=`
#include <stdio.h>

int main() {
    int number = 5;

    printf("Left shift: %d\\n", number << 1);
    printf("Right shift: %d\\n", number >> 1);
    return 0;
}
`,X=`
Left shift: 10
Right shift: 2
`,G=a({__name:"BitwiseOperators",setup(V){return($,t)=>(w(),b(p,null,{default:i(()=>[o("div",O,[t[109]||(t[109]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[110]||(t[110]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 5 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Bitwise Operators ")],-1)),n(s,null,{default:i(()=>[...t[0]||(t[0]=[l(" Bitwise operators work directly with the individual bits that make up an integer value. Instead of treating a value as a single number, these operators examine or modify its binary representation. ",-1)])]),_:1}),n(s,null,{default:i(()=>[t[5]||(t[5]=l(" For example, the decimal value ",-1)),n(u,null,{default:i(()=>[...t[1]||(t[1]=[l("12",-1)])]),_:1}),t[6]||(t[6]=l(" is represented as ",-1)),n(u,null,{default:i(()=>[...t[2]||(t[2]=[l("1100",-1)])]),_:1}),t[7]||(t[7]=l(" in binary, while ",-1)),n(u,null,{default:i(()=>[...t[3]||(t[3]=[l("10",-1)])]),_:1}),t[8]||(t[8]=l(" is represented as ",-1)),n(u,null,{default:i(()=>[...t[4]||(t[4]=[l("1010",-1)])]),_:1}),t[9]||(t[9]=l(" . ",-1))]),_:1}),n(e,null,{default:i(()=>[...t[10]||(t[10]=[l("Bitwise AND",-1)])]),_:1}),n(s,null,{default:i(()=>[t[14]||(t[14]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[11]||(t[11]=[l("&",-1)])]),_:1}),t[15]||(t[15]=l(" operator compares the corresponding bits of two values. A resulting bit is ",-1)),n(u,null,{default:i(()=>[...t[12]||(t[12]=[l("1",-1)])]),_:1}),t[16]||(t[16]=l(" only when both input bits are ",-1)),n(u,null,{default:i(()=>[...t[13]||(t[13]=[l("1",-1)])]),_:1}),t[17]||(t[17]=l(" . ",-1)),n(r,{language:"c",code:k}),n(r,{language:"c",code:v}),t[18]||(t[18]=l(" Output ",-1)),n(d,{output:"Result: 8"})]),_:1}),n(s,null,{default:i(()=>[t[22]||(t[22]=l(" Only the first bit position contains ",-1)),n(u,null,{default:i(()=>[...t[19]||(t[19]=[l("1",-1)])]),_:1}),t[23]||(t[23]=l(" in both values, so the result is ",-1)),n(u,null,{default:i(()=>[...t[20]||(t[20]=[l("1000",-1)])]),_:1}),t[24]||(t[24]=l(" , which is ",-1)),n(u,null,{default:i(()=>[...t[21]||(t[21]=[l("8",-1)])]),_:1}),t[25]||(t[25]=l(" in decimal. ",-1))]),_:1}),n(e,null,{default:i(()=>[...t[26]||(t[26]=[l("Bitwise OR",-1)])]),_:1}),n(s,null,{default:i(()=>[t[30]||(t[30]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[27]||(t[27]=[l("|",-1)])]),_:1}),t[31]||(t[31]=l(" operator compares the corresponding bits of two values. A resulting bit is ",-1)),n(u,null,{default:i(()=>[...t[28]||(t[28]=[l("1",-1)])]),_:1}),t[32]||(t[32]=l(" when at least one of the input bits is ",-1)),n(u,null,{default:i(()=>[...t[29]||(t[29]=[l("1",-1)])]),_:1}),t[33]||(t[33]=l(" . ",-1)),n(r,{language:"c",code:C}),n(r,{language:"c",code:x}),t[34]||(t[34]=l(" Output ",-1)),n(d,{output:"Result: 14"})]),_:1}),n(s,null,{default:i(()=>[t[37]||(t[37]=l(" The resulting binary value is ",-1)),n(u,null,{default:i(()=>[...t[35]||(t[35]=[l("1110",-1)])]),_:1}),t[38]||(t[38]=l(" , which is ",-1)),n(u,null,{default:i(()=>[...t[36]||(t[36]=[l("14",-1)])]),_:1}),t[39]||(t[39]=l(" in decimal. ",-1))]),_:1}),n(e,null,{default:i(()=>[...t[40]||(t[40]=[l("Bitwise XOR",-1)])]),_:1}),n(s,null,{default:i(()=>[t[43]||(t[43]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[41]||(t[41]=[l("^",-1)])]),_:1}),t[44]||(t[44]=l(" operator is called exclusive OR, or XOR. A resulting bit is ",-1)),n(u,null,{default:i(()=>[...t[42]||(t[42]=[l("1",-1)])]),_:1}),t[45]||(t[45]=l(" when the two input bits are different. ",-1)),n(r,{language:"c",code:P}),n(r,{language:"c",code:y}),t[46]||(t[46]=l(" Output ",-1)),n(d,{output:"Result: 6"})]),_:1}),n(s,null,{default:i(()=>[t[49]||(t[49]=l(" The resulting binary value is ",-1)),n(u,null,{default:i(()=>[...t[47]||(t[47]=[l("0110",-1)])]),_:1}),t[50]||(t[50]=l(" , which is ",-1)),n(u,null,{default:i(()=>[...t[48]||(t[48]=[l("6",-1)])]),_:1}),t[51]||(t[51]=l(" in decimal. ",-1))]),_:1}),n(e,null,{default:i(()=>[...t[52]||(t[52]=[l("Bitwise NOT",-1)])]),_:1}),n(s,null,{default:i(()=>[t[58]||(t[58]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[53]||(t[53]=[l("~",-1)])]),_:1}),t[59]||(t[59]=l(" operator reverses every bit in a value. Each ",-1)),n(u,null,{default:i(()=>[...t[54]||(t[54]=[l("0",-1)])]),_:1}),t[60]||(t[60]=l(" becomes ",-1)),n(u,null,{default:i(()=>[...t[55]||(t[55]=[l("1",-1)])]),_:1}),t[61]||(t[61]=l(" , and each ",-1)),n(u,null,{default:i(()=>[...t[56]||(t[56]=[l("1",-1)])]),_:1}),t[62]||(t[62]=l(" becomes ",-1)),n(u,null,{default:i(()=>[...t[57]||(t[57]=[l("0",-1)])]),_:1}),t[63]||(t[63]=l(" . ",-1))]),_:1}),n(s,null,{default:i(()=>[t[64]||(t[64]=l(" Unlike the other basic bitwise operators, NOT uses only one operand. ",-1)),n(r,{language:"c",code:R}),t[65]||(t[65]=l(" Output ",-1)),n(d,{output:"4294967283"})]),_:1}),n(s,null,{default:i(()=>[...t[66]||(t[66]=[l(" The exact decimal result of a bitwise NOT depends on the integer type and its width. Using an unsigned integer makes the result easier to observe because the bits are interpreted without a sign. ",-1)])]),_:1}),n(g,{title:"Bits Are the Real Data"},{default:i(()=>[...t[67]||(t[67]=[l(" Bitwise operators work below the usual level of arithmetic. They operate on the individual 0s and 1s that make up an integer value. ",-1)])]),_:1}),n(e,null,{default:i(()=>[...t[68]||(t[68]=[l("Left Shift",-1)])]),_:1}),n(s,null,{default:i(()=>[t[70]||(t[70]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[69]||(t[69]=[l("<<",-1)])]),_:1}),t[71]||(t[71]=l(" operator shifts the bits of a value to the left by a specified number of positions. ",-1)),n(r,{language:"c",code:A}),n(r,{language:"c",code:B}),t[72]||(t[72]=l(" Output ",-1)),n(d,{output:"Result: 10"})]),_:1}),n(s,null,{default:i(()=>[t[75]||(t[75]=l(" Shifting ",-1)),n(u,null,{default:i(()=>[...t[73]||(t[73]=[l("5",-1)])]),_:1}),t[76]||(t[76]=l(" one position to the left produces ",-1)),n(u,null,{default:i(()=>[...t[74]||(t[74]=[l("10",-1)])]),_:1}),t[77]||(t[77]=l(" in this example. ",-1))]),_:1}),n(e,null,{default:i(()=>[...t[78]||(t[78]=[l("Right Shift",-1)])]),_:1}),n(s,null,{default:i(()=>[t[80]||(t[80]=l(" The ",-1)),n(u,null,{default:i(()=>[...t[79]||(t[79]=[l(">>",-1)])]),_:1}),t[81]||(t[81]=l(" operator shifts the bits of a value to the right by a specified number of positions. ",-1)),n(r,{language:"c",code:N}),t[82]||(t[82]=l(" Output ",-1)),n(d,{output:"Result: 10"})]),_:1}),n(s,null,{default:i(()=>[t[85]||(t[85]=l(" Shifting ",-1)),n(u,null,{default:i(()=>[...t[83]||(t[83]=[l("20",-1)])]),_:1}),t[86]||(t[86]=l(" one position to the right produces ",-1)),n(u,null,{default:i(()=>[...t[84]||(t[84]=[l("10",-1)])]),_:1}),t[87]||(t[87]=l(" in this example. ",-1))]),_:1}),n(e,null,{default:i(()=>[...t[88]||(t[88]=[l("Bitwise Operators",-1)])]),_:1}),n(s,null,{default:i(()=>[t[101]||(t[101]=l(" The basic bitwise operators in C are: ",-1)),o("ul",T,[o("li",null,[n(u,null,{default:i(()=>[...t[89]||(t[89]=[l("&",-1)])]),_:1}),t[90]||(t[90]=l(" → Bitwise AND ",-1))]),o("li",null,[n(u,null,{default:i(()=>[...t[91]||(t[91]=[l("|",-1)])]),_:1}),t[92]||(t[92]=l(" → Bitwise OR ",-1))]),o("li",null,[n(u,null,{default:i(()=>[...t[93]||(t[93]=[l("^",-1)])]),_:1}),t[94]||(t[94]=l(" → Bitwise XOR ",-1))]),o("li",null,[n(u,null,{default:i(()=>[...t[95]||(t[95]=[l("~",-1)])]),_:1}),t[96]||(t[96]=l(" → Bitwise NOT ",-1))]),o("li",null,[n(u,null,{default:i(()=>[...t[97]||(t[97]=[l("<<",-1)])]),_:1}),t[98]||(t[98]=l(" → Left shift ",-1))]),o("li",null,[n(u,null,{default:i(()=>[...t[99]||(t[99]=[l(">>",-1)])]),_:1}),t[100]||(t[100]=l(" → Right shift ",-1))])]),n(r,{language:"c",code:S}),t[102]||(t[102]=l(" Output ",-1)),n(d,{output:L})]),_:1}),n(e,null,{default:i(()=>[...t[103]||(t[103]=[l("Shift Operators",-1)])]),_:1}),n(s,null,{default:i(()=>[t[104]||(t[104]=l(" Shift operators move the bits of a value left or right. They are commonly used in low-level programming and situations where individual bits need to be manipulated. ",-1)),n(r,{language:"c",code:D}),t[105]||(t[105]=l(" Output ",-1)),n(d,{output:X})]),_:1}),n(e,null,{default:i(()=>[...t[106]||(t[106]=[l("Summary",-1)])]),_:1}),n(s,null,{default:i(()=>[...t[107]||(t[107]=[l(" Bitwise operators work directly with the bits of integer values. They include AND, OR, XOR, NOT, left shift, and right shift. ",-1)])]),_:1}),n(s,null,{default:i(()=>[...t[108]||(t[108]=[l(" These operators are especially useful when working with low-level data, hardware, flags, and other situations where individual bits need to be controlled. ",-1)])]),_:1}),t[111]||(t[111]=o("br",null,null,-1)),n(m,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{G as default};

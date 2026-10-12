import{_ as a}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{T as o,a as d,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as u,C as r}from"./CodeBlock-Ayh7J4dk.js";import{O as s}from"./OutputBlock-CjsXuZMe.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-CYGdZlbx.js";import{d as g,h as b,i as e,o as y,a as i,q as n,g as l}from"./index-DSMoD1xp.js";const v={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-8 mt-3 space-y-2"},x=`
int age = 20;
`,C=`
#include <stdio.h>

int main() {
    int age = 20;

    printf("Age: %d\\n", age);
    return 0;
}`,w=`
float temperature = 36.5f;
`,z=`
#include <stdio.h>

int main() {
    float temperature = 36.5f;

    printf("Temperature: %.1f\\n", temperature);
    return 0;
}
`,P=`
double pi = 3.1415926535;
`,A=`
#include <stdio.h>

int main() {
    double pi = 3.1415926535;

    printf("Pi: %.10f\\n", pi);
    return 0;
}
`,k=`
char grade = 'A';
`,O=`
#include <stdio.h>

int main() {
    char grade = 'A';

    printf("Grade: %c\\n", grade);
    return 0;
}
`,D=`
#include <stdio.h>

int main() {
    int age = 20;
    float height = 1.75f;
    double pi = 3.1415926535;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Height: %.2f\\n", height);
    printf("Pi: %.10f\\n", pi);
    printf("Grade: %c\\n", grade);
    return 0;
}
`,S=`
Age: 20
Height: 1.75
Pi: 3.1415926535
Grade: A
`,B=`
int age = 20;

printf("%f\\n", age);
`,U=`
#include <stdio.h>

int main() {
    printf("int: %zu bytes\\n", sizeof(int));
    printf("float: %zu bytes\\n", sizeof(float));
    printf("double: %zu bytes\\n", sizeof(double));
    printf("char: %zu byte\\n", sizeof(char));
    return 0;
}
`,F=`
int: 4 bytes
float: 4 bytes
double: 8 bytes
char: 1 byte
`,G=`
int age = 20;
float height = 1.75f;
double price = 99.99;
char grade = 'A';
`,M=g({__name:"DataTypes",setup(N){return(W,t)=>(y(),b(f,null,{default:e(()=>[i("div",v,[t[115]||(t[115]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[116]||(t[116]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Data Types ")],-1)),n(o,null,{default:e(()=>[...t[0]||(t[0]=[l(" A data type specifies what kind of value a variable can store. When declaring a variable, the data type tells C how the stored value should be handled. ",-1)])]),_:1}),n(o,null,{default:e(()=>[t[5]||(t[5]=l(" C provides several data types for representing different kinds of information. The basic types you will commonly use are ",-1)),n(u,null,{default:e(()=>[...t[1]||(t[1]=[l("int",-1)])]),_:1}),t[6]||(t[6]=l(" , ",-1)),n(u,null,{default:e(()=>[...t[2]||(t[2]=[l("float",-1)])]),_:1}),t[7]||(t[7]=l(" , ",-1)),n(u,null,{default:e(()=>[...t[3]||(t[3]=[l("double",-1)])]),_:1}),t[8]||(t[8]=l(" , and ",-1)),n(u,null,{default:e(()=>[...t[4]||(t[4]=[l("char",-1)])]),_:1}),t[9]||(t[9]=l(" . ",-1))]),_:1}),n(d,null,{default:e(()=>[...t[10]||(t[10]=[l("Integer",-1)])]),_:1}),n(o,null,{default:e(()=>[t[12]||(t[12]=l(" The ",-1)),n(u,null,{default:e(()=>[...t[11]||(t[11]=[l("int",-1)])]),_:1}),t[13]||(t[13]=l(" data type is used to store whole numbers. Whole numbers do not contain a decimal part. ",-1)),n(r,{language:"c",code:x})]),_:1}),n(o,null,{default:e(()=>[t[18]||(t[18]=l(" The variable ",-1)),n(u,null,{default:e(()=>[...t[14]||(t[14]=[l("age",-1)])]),_:1}),t[19]||(t[19]=l(" stores the whole number ",-1)),n(u,null,{default:e(()=>[...t[15]||(t[15]=[l("20",-1)])]),_:1}),t[20]||(t[20]=l(" . The ",-1)),n(u,null,{default:e(()=>[...t[16]||(t[16]=[l("%d",-1)])]),_:1}),t[21]||(t[21]=l(" format specifier is used to display an integer with ",-1)),n(u,null,{default:e(()=>[...t[17]||(t[17]=[l("printf()",-1)])]),_:1}),t[22]||(t[22]=l(" . ",-1)),n(r,{language:"c",code:C}),t[23]||(t[23]=l(" Output ",-1)),n(s,{output:"Age: 20"})]),_:1}),n(d,null,{default:e(()=>[...t[24]||(t[24]=[l("Floating-Point Numbers",-1)])]),_:1}),n(o,null,{default:e(()=>[t[27]||(t[27]=l(" Floating-point data types are used to store numbers that can contain a decimal part. C provides both ",-1)),n(u,null,{default:e(()=>[...t[25]||(t[25]=[l("float",-1)])]),_:1}),t[28]||(t[28]=l(" and ",-1)),n(u,null,{default:e(()=>[...t[26]||(t[26]=[l("double",-1)])]),_:1}),t[29]||(t[29]=l(" for floating-point values. ",-1))]),_:1}),n(d,null,{default:e(()=>[...t[30]||(t[30]=[l("Float",-1)])]),_:1}),n(o,null,{default:e(()=>[t[32]||(t[32]=l(" The ",-1)),n(u,null,{default:e(()=>[...t[31]||(t[31]=[l("float",-1)])]),_:1}),t[33]||(t[33]=l(" data type is used to store floating-point values with single precision. ",-1)),n(r,{language:"c",code:w})]),_:1}),n(o,null,{default:e(()=>[t[37]||(t[37]=l(" The ",-1)),n(u,null,{default:e(()=>[...t[34]||(t[34]=[l("f",-1)])]),_:1}),t[38]||(t[38]=l(" suffix indicates that ",-1)),n(u,null,{default:e(()=>[...t[35]||(t[35]=[l("36.5",-1)])]),_:1}),t[39]||(t[39]=l(" is a floating-point constant of type ",-1)),n(u,null,{default:e(()=>[...t[36]||(t[36]=[l("float",-1)])]),_:1}),t[40]||(t[40]=l(" . ",-1)),n(r,{language:"c",code:z}),t[41]||(t[41]=l(" Output ",-1)),n(s,{output:"Temperature: 36.5"})]),_:1}),n(d,null,{default:e(()=>[...t[42]||(t[42]=[l("Double",-1)])]),_:1}),n(o,null,{default:e(()=>[t[45]||(t[45]=l(" The ",-1)),n(u,null,{default:e(()=>[...t[43]||(t[43]=[l("double",-1)])]),_:1}),t[46]||(t[46]=l(" data type is also used for floating-point values. It provides more precision than ",-1)),n(u,null,{default:e(()=>[...t[44]||(t[44]=[l("float",-1)])]),_:1}),t[47]||(t[47]=l(" and is commonly used when more precise decimal values are needed. ",-1)),n(r,{language:"c",code:P}),n(r,{language:"c",code:A}),t[48]||(t[48]=l(" Output ",-1)),n(s,{output:"Pi: 3.1415926535"})]),_:1}),n(d,null,{default:e(()=>[...t[49]||(t[49]=[l("Character",-1)])]),_:1}),n(o,null,{default:e(()=>[t[51]||(t[51]=l(" The ",-1)),n(u,null,{default:e(()=>[...t[50]||(t[50]=[l("char",-1)])]),_:1}),t[52]||(t[52]=l(" data type is used to store a single character. Character values are written inside single quotes. ",-1)),n(r,{language:"c",code:k})]),_:1}),n(o,null,{default:e(()=>[t[56]||(t[56]=l(" The variable ",-1)),n(u,null,{default:e(()=>[...t[53]||(t[53]=[l("grade",-1)])]),_:1}),t[57]||(t[57]=l(" stores the character ",-1)),n(u,null,{default:e(()=>[...t[54]||(t[54]=[l("'A'",-1)])]),_:1}),t[58]||(t[58]=l(" . The ",-1)),n(u,null,{default:e(()=>[...t[55]||(t[55]=[l("%c",-1)])]),_:1}),t[59]||(t[59]=l(" format specifier is used to display a character. ",-1)),n(r,{language:"c",code:O}),t[60]||(t[60]=l(" Output ",-1)),n(s,{output:"Grade: A"})]),_:1}),n(m,{title:"Choose the Right Type"},{default:e(()=>[t[65]||(t[65]=l(" Think about what kind of value you need to store. Whole number? Use ",-1)),n(u,null,{default:e(()=>[...t[61]||(t[61]=[l("int",-1)])]),_:1}),t[66]||(t[66]=l(" . Decimal value? Use ",-1)),n(u,null,{default:e(()=>[...t[62]||(t[62]=[l("float",-1)])]),_:1}),t[67]||(t[67]=l(" or ",-1)),n(u,null,{default:e(()=>[...t[63]||(t[63]=[l("double",-1)])]),_:1}),t[68]||(t[68]=l(" . Single character? Use ",-1)),n(u,null,{default:e(()=>[...t[64]||(t[64]=[l("char",-1)])]),_:1}),t[69]||(t[69]=l(" . ",-1))]),_:1}),n(d,null,{default:e(()=>[...t[70]||(t[70]=[l("Using Different Data Types",-1)])]),_:1}),n(o,null,{default:e(()=>[t[71]||(t[71]=l(" A program can use different data types at the same time. Each variable should use a data type that matches the kind of value it needs to store. ",-1)),n(r,{language:"c",code:D}),t[72]||(t[72]=l(" Output ",-1)),n(s,{output:S})]),_:1}),n(d,null,{default:e(()=>[...t[73]||(t[73]=[l("Matching Format Specifiers",-1)])]),_:1}),n(o,null,{default:e(()=>[t[74]||(t[74]=l(" When displaying a variable, the format specifier should match the variable's data type. Using the wrong format specifier can produce incorrect results or unexpected behavior. ",-1)),n(r,{language:"c",code:B})]),_:1}),n(o,null,{default:e(()=>[t[77]||(t[77]=l(" The example above uses ",-1)),n(u,null,{default:e(()=>[...t[75]||(t[75]=[l("%f",-1)])]),_:1}),t[78]||(t[78]=l(" for an ",-1)),n(u,null,{default:e(()=>[...t[76]||(t[76]=[l("int",-1)])]),_:1}),t[79]||(t[79]=l(" variable. This is not the correct format specifier for an integer. ",-1))]),_:1}),n(o,null,{default:e(()=>[t[92]||(t[92]=l(" Some commonly used combinations are: ",-1)),i("ul",T,[i("li",null,[n(u,null,{default:e(()=>[...t[80]||(t[80]=[l("int",-1)])]),_:1}),t[82]||(t[82]=l(" → ",-1)),n(u,null,{default:e(()=>[...t[81]||(t[81]=[l("%d",-1)])]),_:1})]),i("li",null,[n(u,null,{default:e(()=>[...t[83]||(t[83]=[l("float",-1)])]),_:1}),t[85]||(t[85]=l(" → ",-1)),n(u,null,{default:e(()=>[...t[84]||(t[84]=[l("%f",-1)])]),_:1})]),i("li",null,[n(u,null,{default:e(()=>[...t[86]||(t[86]=[l("double",-1)])]),_:1}),t[88]||(t[88]=l(" → ",-1)),n(u,null,{default:e(()=>[...t[87]||(t[87]=[l("%f",-1)])]),_:1})]),i("li",null,[n(u,null,{default:e(()=>[...t[89]||(t[89]=[l("char",-1)])]),_:1}),t[91]||(t[91]=l(" → ",-1)),n(u,null,{default:e(()=>[...t[90]||(t[90]=[l("%c",-1)])]),_:1})])])]),_:1}),n(d,null,{default:e(()=>[...t[93]||(t[93]=[l("Size of Data Types",-1)])]),_:1}),n(o,null,{default:e(()=>[t[95]||(t[95]=l(" Different data types can occupy different amounts of memory. The ",-1)),n(u,null,{default:e(()=>[...t[94]||(t[94]=[l("sizeof",-1)])]),_:1}),t[96]||(t[96]=l(" operator can be used to determine the amount of memory occupied by a data type or variable. ",-1)),n(r,{language:"c",code:U}),t[97]||(t[97]=l(" Output ",-1)),n(s,{output:F})]),_:1}),n(o,null,{default:e(()=>[...t[98]||(t[98]=[l(" The exact size of some data types can depend on the compiler and system. The values shown above are common on modern systems. ",-1)])]),_:1}),n(d,null,{default:e(()=>[...t[99]||(t[99]=[l("Choosing a Data Type",-1)])]),_:1}),n(o,null,{default:e(()=>[t[100]||(t[100]=l(" Choosing the appropriate data type helps make your programs clear and predictable. The type should match the kind of value the variable needs to represent. ",-1)),n(r,{language:"c",code:G})]),_:1}),n(o,null,{default:e(()=>[...t[101]||(t[101]=[l(" Here, each variable uses a data type appropriate for the value it stores. ",-1)])]),_:1}),n(d,null,{default:e(()=>[...t[102]||(t[102]=[l("Summary",-1)])]),_:1}),n(o,null,{default:e(()=>[t[107]||(t[107]=l(" Data types tell C what kind of value a variable can store. The basic data types introduced in this topic are ",-1)),n(u,null,{default:e(()=>[...t[103]||(t[103]=[l("int",-1)])]),_:1}),t[108]||(t[108]=l(" , ",-1)),n(u,null,{default:e(()=>[...t[104]||(t[104]=[l("float",-1)])]),_:1}),t[109]||(t[109]=l(" , ",-1)),n(u,null,{default:e(()=>[...t[105]||(t[105]=[l("double",-1)])]),_:1}),t[110]||(t[110]=l(" , and ",-1)),n(u,null,{default:e(()=>[...t[106]||(t[106]=[l("char",-1)])]),_:1}),t[111]||(t[111]=l(" . ",-1))]),_:1}),n(o,null,{default:e(()=>[t[113]||(t[113]=l(" You also learned how to use the appropriate format specifier when displaying different types of variables and how ",-1)),n(u,null,{default:e(()=>[...t[112]||(t[112]=[l("sizeof",-1)])]),_:1}),t[114]||(t[114]=l(" can be used to determine their memory size. ",-1))]),_:1}),t[117]||(t[117]=i("br",null,null,-1)),n(p,{to:"/academia/student/classes/c-constants"})])]),_:1}))}});export{M as default};

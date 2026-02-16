import{_ as z}from"./MainLayout.vue_vue_type_style_index_0_lang-DDe6TEwJ.js";import{C as e,_ as E}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-ZT46AHsq.js";import{O as o}from"./OutputBlock-4pXDZ-3T.js";import{d as w,r as i,z as D,j as O,b as t,i as n,t as S,e as s,o as A}from"./index-D8FYJz_l.js";const I={class:"text-gray-500 mb-2 text-lg"},L={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},F={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},H={class:"text-gray-500 mb-2 text-lg"},P={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},M={class:"text-gray-500 mb-2 text-lg"},V={class:"text-gray-500 mb-2 text-lg"},R={class:"text-gray-500 mb-2 text-lg"},G="February 6, 2026",Q=w({__name:"DataTypeIndex",setup(W){const r=i(`
int x = 10;   // valid
int x = 5;    // valid
int x = 3.14; // not recommended (data loss)
`),a=i(`
unsigned int count;
long double value;
`),u=i(`
int x = 10;     // integer literal
float y = 3.14; // floating-point literal
char c = 'A';   // character literal
`),p=i(`
int a = 5;
float b = a;  // implicit conversion
`),d=i(`
#include <stdio.h>

int main() {
	int age = 20;
	float height = 5.7;
	double pi = 3.14159;
	char grade = 'A';

	printf("Age: %d\\n", age);
	printf("Height: %.1f\\n", height);
	printf("Pi: %.5lf\\n", pi);
	printf("Grade: %c\\n", grade);

	return 0;
}
`),g=i(`
Age: 20
Height: 5.7
Pi: 3.14159
Grade: A
`),m=i(`
#include <stdio.h>

int main() {
	int var = 22;
	printf("var = %d", var);
	return 0;
}
`),x=i(`
#include <stdio.h>

int main() {
	char c = 'A';
	printf("ch = %c", ch);
	return 0;
}
`),b=i(`
#include <stdio.h>

int main() {
	float val = 12.45;
	printf("val = %f", val);
	return 0;
}
`),y=i(`
#include <stdio.h>

int main() {
	double val = 1.4521;
	printf("val = %f", val);
	return 0;
}
`),f=i(`
#include <stdio.h>

void greet() {
	printf("Hello, welcome!\\n");
	printf("Learning C programming is fun!\\n");
}

int main() {
	greet();
	return 0;
}
`),v=i(`
Hello, welcome!
Learning C programming is fun!
`),T=i(`
#include <stdio.h>

int main() {
	printf("The size of int: %d\\n", sizeof(int));
	printf("The size of char: %d\\n", sizeof(char));
	printf("The size of float: %d\\n", sizeof(float));
	printf("The size of double: %d\\n", sizeof(double));

	return 0;
}
`),k=i(`
The size of int: 4
The size of char: 1
The size of float: 4
The size of double: 8
`),C=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Identifiers",route:"/blog/c-identifiers"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditional-statements"},{title:"Loops",route:"/blog/c-loops"}];return(j,l)=>(A(),D(z,null,{default:O(()=>[l[90]||(l[90]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Data Types in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+S(G)),l[91]||(l[91]=t("p",{class:"text-gray-600 mb-4 text-lg"},[s(" Every variable in C has an associated data type."),t("br"),s(" A data type tells the compiler:"),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"What kind of data a variable can store."),t("li",null,"How much memory to allocate."),t("li",null,"How the data should be interpreted.")]),s(" For example: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Numbers without decimals: integers"),t("li",null,"Numbers with decimals: floating-point"),t("li",null,"Single characters: character type")])],-1)),l[92]||(l[92]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," C Is a Statically Typed Language ",-1)),t("p",I,[l[0]||(l[0]=s(" C is a statically typed language, which means: ",-1)),l[1]||(l[1]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"The data type of a variable must be specified at declaration."),t("li",null,"Once declared, the type cannot be changed.")],-1)),n(e,{code:r.value,language:"c"},null,8,["code"]),l[2]||(l[2]=s(" The compiler strictly enforces data types to ensure correctness and efficiency. ",-1))]),l[93]||(l[93]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic (Primary) Data Types in C ",-1)),l[94]||(l[94]=t("p",{class:"text-gray-500 mb-2 text-lg"},[s(" C provides several basic data types that are used to build programs. The most commonly used ones are: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"char")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"float")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"double")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"void")])])],-1)),l[95]||(l[95]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Example Using Multiple Data Types ",-1)),t("p",L,[n(e,{code:d.value,language:"c"},null,8,["code"]),l[3]||(l[3]=s(" Output: ",-1)),n(o,{output:g.value},null,8,["output"])]),l[96]||(l[96]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Integer Data Type (int) ",-1)),t("p",N,[l[4]||(l[4]=s(" The ",-1)),l[5]||(l[5]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int",-1)),l[6]||(l[6]=s(" data type is used to store whole numbers. ",-1)),l[7]||(l[7]=t("br",null,null,-1)),l[8]||(l[8]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[9]||(l[9]=s()),l[10]||(l[10]=t("br",null,null,-1)),l[11]||(l[11]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Stores positive, negative, or zero values."),t("li",null,"Size: typically 4 bytes."),t("li",null,"Range: -2,147,483,648 to 2,147,483,647"),t("li",null,[s("Format specifier: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d")])],-1)),l[12]||(l[12]=s(" Example: ",-1)),l[13]||(l[13]=t("br",null,null,-1)),n(e,{code:m.value,language:"c"},null,8,["code"]),l[14]||(l[14]=s(" Output: ",-1)),n(o,{output:"var = 22"})]),l[97]||(l[97]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Character Data Type (int) ",-1)),t("p",F,[l[15]||(l[15]=s(" The ",-1)),l[16]||(l[16]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"char",-1)),l[17]||(l[17]=s(" data type stores a single character. ",-1)),l[18]||(l[18]=t("br",null,null,-1)),l[19]||(l[19]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[20]||(l[20]=s()),l[21]||(l[21]=t("br",null,null,-1)),l[22]||(l[22]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[s(" Stores one character like "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"'A'"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"'b'"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"'5'")]),t("li",null,"Size: 1 byte."),t("li",null,"Range: -128 to 127 (signed by default)"),t("li",null,[s("Format specifier: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%c")])],-1)),l[23]||(l[23]=s(" Example: ",-1)),l[24]||(l[24]=t("br",null,null,-1)),n(e,{code:x.value,language:"c"},null,8,["code"]),l[25]||(l[25]=s(" Output: ",-1)),n(o,{output:"ch = A"}),l[26]||(l[26]=t("span",{class:"text-pink-700"},"Note: ",-1)),l[27]||(l[27]=s(" Internally, characters are stored using ASCII values. ",-1))]),l[98]||(l[98]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Floating-Point Data Type (float) ",-1)),t("p",B,[l[28]||(l[28]=s(" The ",-1)),l[29]||(l[29]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"float",-1)),l[30]||(l[30]=s(" data type stores decimal numbers with limited precision. ",-1)),l[31]||(l[31]=t("br",null,null,-1)),l[32]||(l[32]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[33]||(l[33]=s()),l[34]||(l[34]=t("br",null,null,-1)),l[35]||(l[35]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Used for numbers with fractional parts."),t("li",null,"Size: 4 bytes."),t("li",null,"Approximate range: 3.4e-38 to 3.4e+38"),t("li",null,[s("Format specifier: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%f")])],-1)),l[36]||(l[36]=s(" Example: ",-1)),l[37]||(l[37]=t("br",null,null,-1)),n(e,{code:b.value,language:"c"},null,8,["code"]),l[38]||(l[38]=s(" Output: ",-1)),n(o,{output:"val = 12.450000"}),l[39]||(l[39]=t("span",{class:"text-pink-700"},"Note: ",-1)),l[40]||(l[40]=s(" Use ",-1)),l[41]||(l[41]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"double",-1)),l[42]||(l[42]=s(" when precision matters (scientific calculations, finance, physics). ",-1))]),l[99]||(l[99]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Double Data Type (double) ",-1)),t("p",H,[l[43]||(l[43]=s(" The ",-1)),l[44]||(l[44]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"double",-1)),l[45]||(l[45]=s(" data type stores decimal numbers with higher precision than float. ",-1)),l[46]||(l[46]=t("br",null,null,-1)),l[47]||(l[47]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[48]||(l[48]=s()),l[49]||(l[49]=t("br",null,null,-1)),l[50]||(l[50]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[s("More precise than "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"float")]),t("li",null,"Size: 8 bytes."),t("li",null,"Approximate range: 1.7e-308 to 1.7e+308"),t("li",null,[s("Format specifier: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%lf")])],-1)),l[51]||(l[51]=s(" Example: ",-1)),l[52]||(l[52]=t("br",null,null,-1)),n(e,{code:y.value,language:"c"},null,8,["code"]),l[53]||(l[53]=s(" Output: ",-1)),n(o,{output:"val = 1.452100"})]),l[100]||(l[100]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Void Data Type (void) ",-1)),t("p",P,[l[54]||(l[54]=s(" The ",-1)),l[55]||(l[55]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"void",-1)),l[56]||(l[56]=s(" data type represent no value. ",-1)),l[57]||(l[57]=t("br",null,null,-1)),l[58]||(l[58]=t("span",{class:"text-gray-700 text-xl"},"Common Uses of ",-1)),l[59]||(l[59]=s()),l[60]||(l[60]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"void",-1)),l[61]||(l[61]=t("br",null,null,-1)),l[62]||(l[62]=t("ol",{class:"list-decimal list-inside space-y-1"},[t("li",null,"Functions that return nothing."),t("li",null,[s("Generic pointers "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"(void*)")])],-1)),l[63]||(l[63]=s(" Example: ",-1)),l[64]||(l[64]=t("br",null,null,-1)),n(e,{code:f.value,language:"c"},null,8,["code"]),l[65]||(l[65]=s(" Output: ",-1)),n(o,{output:v.value},null,8,["output"])]),l[101]||(l[101]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Size of Data Type in C ",-1)),t("p",U,[l[66]||(l[66]=s(" The size of data types depends on the system architecture and compiler. ",-1)),l[67]||(l[67]=t("br",null,null,-1)),l[68]||(l[68]=s(" To determine sizes, C provides the ",-1)),l[69]||(l[69]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"sizeof()",-1)),l[70]||(l[70]=s(" operator. ",-1)),l[71]||(l[71]=t("br",null,null,-1)),l[72]||(l[72]=s(" Example: ",-1)),l[73]||(l[73]=t("br",null,null,-1)),n(e,{code:T.value,language:"c"},null,8,["code"]),l[74]||(l[74]=s(" Output (Typical 64-bit System): ",-1)),n(o,{output:k.value},null,8,["output"])]),l[102]||(l[102]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Data Type Modifiers ",-1)),t("p",M,[l[75]||(l[75]=s(" C provides modifiers that can change the size or range of data types: ",-1)),l[76]||(l[76]=t("br",null,null,-1)),l[77]||(l[77]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"short"),t("li",null,"long"),t("li",null,"signed"),t("li",null,"unsigned")],-1)),l[78]||(l[78]=s(" Example: ",-1)),n(e,{code:a.value,language:"c"},null,8,["code"]),l[79]||(l[79]=s(" These modifiers help optimize memory and control ranges. ",-1))]),l[103]||(l[103]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Literals in C ",-1)),t("p",V,[l[80]||(l[80]=s(" Literals are fixed constant values assigned directly to variables. ",-1)),l[81]||(l[81]=t("br",null,null,-1)),l[82]||(l[82]=s(" Example: ",-1)),n(e,{code:u.value,language:"c"},null,8,["code"]),l[83]||(l[83]=s(" Literals: ",-1)),l[84]||(l[84]=t("br",null,null,-1)),l[85]||(l[85]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Occupy memory"),t("li",null,"Do not have names"),t("li",null,"Cannot be modified")],-1))]),l[104]||(l[104]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Type Conversion in C ",-1)),t("p",R,[l[86]||(l[86]=s(" Type conversion is the process of converting one data type into another. ",-1)),l[87]||(l[87]=t("ol",{class:"list-decimal list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Implicit (Automatic)"),s(": done by compiler.")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Explicit (Type Casting)"),s(": done by programmer.")])],-1)),l[88]||(l[88]=s(" Example: ",-1)),n(e,{code:p.value,language:"c"},null,8,["code"]),l[89]||(l[89]=s(" More advanced type conversion will be discussed later with operators. ",-1))]),l[105]||(l[105]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l[106]||(l[106]=t("p",{class:"text-gray-500 mb-2 text-lg"},[t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Data types define what kind of data a variable can store."),t("li",null,"C is statically typed."),t("li",null,[s(" Common data types: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"char"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"float"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"double"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"void")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"sizeof()"),s(" helps determine memory usage.")]),t("li",null,"Modifiers adjust size and range."),t("li",null,"Literals represent fixed values."),t("li",null,"Type conversion allows flexibility in operations.")])],-1)),n(E,{links:C})]),_:1}))}});export{Q as default};

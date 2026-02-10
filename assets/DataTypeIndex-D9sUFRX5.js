import{_ as f}from"./MainLayout.vue_vue_type_style_index_0_lang-9gUT_XFJ.js";import{C as n}from"./CodeBlock-CdVZTHbd.js";import{d as v,r as i,y as k,j as T,b as s,t as C,e as t,i as o,o as z}from"./index-CwgypZy3.js";const E={class:"text-gray-500 mb-2 text-lg"},w={class:"text-gray-500 mb-2 text-lg"},D={class:"text-gray-500 mb-2 text-lg"},A={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},O={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},F={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},M={class:"text-gray-500 mb-2 text-lg"},H={class:"text-gray-500 mb-2 text-lg"},L="February 6, 2026",R=v({__name:"DataTypeIndex",setup(U){const e=i(`
int x = 10;   // valid
int x = 5;    // valid
int x = 3.14; // not recommended (data loss)
`),r=i(`
unsigned int count;
long double value;
`),p=i(`
int x = 10;     // integer literal
float y = 3.14; // floating-point literal
char c = 'A';   // character literal
`),d=i(`
int a = 5;
float b = a;  // implicit conversion
`),u=i(`
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
`),a=i(`
#include <stdio.h>

int main() {
	int var = 22;
	printf("var = %d", var);
	return 0;
}
`),g=i(`
#include <stdio.h>

int main() {
	char c = 'A';
	printf("ch = %c", ch);
	return 0;
}
`),x=i(`
#include <stdio.h>

int main() {
	float val = 12.45;
	printf("val = %f", val);
	return 0;
}
`),b=i(`
#include <stdio.h>

int main() {
	double val = 1.4521;
	printf("val = %f", val);
	return 0;
}
`),m=i(`
#include <stdio.h>

void greet() {
	printf("Hello, welcome!\\n");
	printf("My Instructor is cute :)\\n");
}

int main() {
	greet();
	return 0;
}
`),y=i(`
#include <stdio.h>

int main() {
	printf("The size of int: %d\\n", sizeof(int));
	printf("The size of char: %d\\n", sizeof(char));
	printf("The size of float: %d\\n", sizeof(float));
	printf("The size of double: %d\\n", sizeof(double));

	return 0;
}
`);return(B,l)=>(z(),k(f,null,{default:T(()=>[l[131]||(l[131]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Data Types in C",-1)),s("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+C(L)),l[132]||(l[132]=s("p",{class:"text-gray-600 mb-4 text-lg"},[t(" Every variable in C has an associated data type."),s("br"),t(" A data type tells the compiler:"),s("br"),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"What kind of data a variable can store."),s("li",null,"How much memory to allocate."),s("li",null,"How the data should be interpreted.")]),t(" For example: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Numbers without decimals: integers"),s("li",null,"Numbers with decimals: floating-point"),s("li",null,"Single characters: character type")])],-1)),l[133]||(l[133]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," C Is a Statically Typed Language ",-1)),s("p",E,[l[0]||(l[0]=t(" C is a statically typed language, which means: ",-1)),l[1]||(l[1]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"The data type of a variable must be specified at declaration."),s("li",null,"Once declared, the type cannot be changed.")],-1)),o(n,{code:e.value,language:"c"},null,8,["code"]),l[2]||(l[2]=t(" The compiler strictly enforces data types to ensure correctness and efficiency. ",-1))]),l[134]||(l[134]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic (Primary) Data Types in C ",-1)),l[135]||(l[135]=s("p",{class:"text-gray-500 mb-2 text-lg"},[t(" C provides several basic data types that are used to build programs. The most commonly used ones are: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"int")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"char")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"float")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"double")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"void")])])],-1)),l[136]||(l[136]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Example Using Multiple Data Types ",-1)),s("p",w,[o(n,{code:u.value,language:"c"},null,8,["code"]),l[3]||(l[3]=t(" Output: ",-1)),l[4]||(l[4]=s("br",null,null,-1)),l[5]||(l[5]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"Age: 20",-1)),l[6]||(l[6]=t()),l[7]||(l[7]=s("br",null,null,-1)),l[8]||(l[8]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"Height: 5.7",-1)),l[9]||(l[9]=t()),l[10]||(l[10]=s("br",null,null,-1)),l[11]||(l[11]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"Pi: 3.14159",-1)),l[12]||(l[12]=t()),l[13]||(l[13]=s("br",null,null,-1)),l[14]||(l[14]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"Grade: A",-1)),l[15]||(l[15]=t()),l[16]||(l[16]=s("br",null,null,-1))]),l[137]||(l[137]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Integer Data Type (int) ",-1)),s("p",D,[l[17]||(l[17]=t(" The ",-1)),l[18]||(l[18]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"int",-1)),l[19]||(l[19]=t(" data type is used to store whole numbers. ",-1)),l[20]||(l[20]=s("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[21]||(l[21]=t()),l[22]||(l[22]=s("br",null,null,-1)),l[23]||(l[23]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Stores positive, negative, or zero values."),s("li",null,"Size: typically 4 bytes."),s("li",null,"Range: -2,147,483,648 to 2,147,483,647"),s("li",null,[t("Format specifier: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d")])],-1)),l[24]||(l[24]=t(" Example: ",-1)),l[25]||(l[25]=s("br",null,null,-1)),o(n,{code:a.value,language:"c"},null,8,["code"]),l[26]||(l[26]=t(" Output: ",-1)),l[27]||(l[27]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"var = 22",-1)),l[28]||(l[28]=t()),l[29]||(l[29]=s("br",null,null,-1))]),l[138]||(l[138]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Character Data Type (int) ",-1)),s("p",A,[l[30]||(l[30]=t(" The ",-1)),l[31]||(l[31]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"char",-1)),l[32]||(l[32]=t(" data type stores a single character. ",-1)),l[33]||(l[33]=s("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[34]||(l[34]=t()),l[35]||(l[35]=s("br",null,null,-1)),l[36]||(l[36]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[t(" Stores one character like "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"'A'"),t(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"'b'"),t(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"'5'")]),s("li",null,"Size: 1 byte."),s("li",null,"Range: -128 to 127 (signed by default)"),s("li",null,[t("Format specifier: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%c")])],-1)),l[37]||(l[37]=t(" Example: ",-1)),l[38]||(l[38]=s("br",null,null,-1)),o(n,{code:g.value,language:"c"},null,8,["code"]),l[39]||(l[39]=t(" Output: ",-1)),l[40]||(l[40]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"ch = A",-1)),l[41]||(l[41]=t()),l[42]||(l[42]=s("br",null,null,-1)),l[43]||(l[43]=s("span",{class:"text-pink-700"},"Note: ",-1)),l[44]||(l[44]=t(" Internally, characters are stored using ASCII values. ",-1))]),l[139]||(l[139]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Floating-Point Data Type (float) ",-1)),s("p",S,[l[45]||(l[45]=t(" The ",-1)),l[46]||(l[46]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"float",-1)),l[47]||(l[47]=t(" data type stores decimal numbers with limited precision. ",-1)),l[48]||(l[48]=s("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[49]||(l[49]=t()),l[50]||(l[50]=s("br",null,null,-1)),l[51]||(l[51]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Used for numbers with fractional parts."),s("li",null,"Size: 4 bytes."),s("li",null,"Approximate range: 3.4e-38 to 3.4e+38"),s("li",null,[t("Format specifier: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%f")])],-1)),l[52]||(l[52]=t(" Example: ",-1)),l[53]||(l[53]=s("br",null,null,-1)),o(n,{code:x.value,language:"c"},null,8,["code"]),l[54]||(l[54]=t(" Output: ",-1)),l[55]||(l[55]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"val = 12.450000",-1)),l[56]||(l[56]=t()),l[57]||(l[57]=s("br",null,null,-1)),l[58]||(l[58]=s("span",{class:"text-pink-700"},"Note: ",-1)),l[59]||(l[59]=t(" Use ",-1)),l[60]||(l[60]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"double",-1)),l[61]||(l[61]=t(" when precision matters (scientific calculations, finance, physics). ",-1))]),l[140]||(l[140]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Double Data Type (double) ",-1)),s("p",O,[l[62]||(l[62]=t(" The ",-1)),l[63]||(l[63]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"double",-1)),l[64]||(l[64]=t(" data type stores decimal numbers with higher precision than float. ",-1)),l[65]||(l[65]=s("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[66]||(l[66]=t()),l[67]||(l[67]=s("br",null,null,-1)),l[68]||(l[68]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[t("More precise than "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"float")]),s("li",null,"Size: 8 bytes."),s("li",null,"Approximate range: 1.7e-308 to 1.7e+308"),s("li",null,[t("Format specifier: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%lf")])],-1)),l[69]||(l[69]=t(" Example: ",-1)),l[70]||(l[70]=s("br",null,null,-1)),o(n,{code:b.value,language:"c"},null,8,["code"]),l[71]||(l[71]=t(" Output: ",-1)),l[72]||(l[72]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"val = 1.452100",-1)),l[73]||(l[73]=t()),l[74]||(l[74]=s("br",null,null,-1))]),l[141]||(l[141]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Void Data Type (void) ",-1)),s("p",I,[l[75]||(l[75]=t(" The ",-1)),l[76]||(l[76]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"void",-1)),l[77]||(l[77]=t(" data type represent no value. ",-1)),l[78]||(l[78]=s("br",null,null,-1)),l[79]||(l[79]=s("span",{class:"text-gray-700 text-xl"},"Common Uses of ",-1)),l[80]||(l[80]=t()),l[81]||(l[81]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"void",-1)),l[82]||(l[82]=s("br",null,null,-1)),l[83]||(l[83]=s("ol",{class:"list-decimal list-inside space-y-1"},[s("li",null,"Functions that return nothing."),s("li",null,[t("Generic pointers "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"(void*)")])],-1)),l[84]||(l[84]=t(" Example: ",-1)),l[85]||(l[85]=s("br",null,null,-1)),o(n,{code:m.value,language:"c"},null,8,["code"]),l[86]||(l[86]=t(" Output: ",-1)),l[87]||(l[87]=s("br",null,null,-1)),l[88]||(l[88]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"Hello, welcome!",-1)),l[89]||(l[89]=t()),l[90]||(l[90]=s("br",null,null,-1)),l[91]||(l[91]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"My Instructor is cute :)",-1)),l[92]||(l[92]=t()),l[93]||(l[93]=s("br",null,null,-1))]),l[142]||(l[142]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Size of Data Type in C ",-1)),s("p",F,[l[94]||(l[94]=t(" The size of data types depends on the system architecture and compiler. ",-1)),l[95]||(l[95]=s("br",null,null,-1)),l[96]||(l[96]=t(" To determine sizes, C provides the ",-1)),l[97]||(l[97]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"sizeof()",-1)),l[98]||(l[98]=t(" operator. ",-1)),l[99]||(l[99]=s("br",null,null,-1)),l[100]||(l[100]=t(" Example: ",-1)),l[101]||(l[101]=s("br",null,null,-1)),o(n,{code:y.value,language:"c"},null,8,["code"]),l[102]||(l[102]=t(" Output (Typical 64-bit System): ",-1)),l[103]||(l[103]=s("br",null,null,-1)),l[104]||(l[104]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"The size of int: 4",-1)),l[105]||(l[105]=t()),l[106]||(l[106]=s("br",null,null,-1)),l[107]||(l[107]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"The size of char: 1",-1)),l[108]||(l[108]=t()),l[109]||(l[109]=s("br",null,null,-1)),l[110]||(l[110]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"The size of float: 4",-1)),l[111]||(l[111]=t()),l[112]||(l[112]=s("br",null,null,-1)),l[113]||(l[113]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"The size of double: 8",-1)),l[114]||(l[114]=t()),l[115]||(l[115]=s("br",null,null,-1))]),l[143]||(l[143]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Data Type Modifiers ",-1)),s("p",N,[l[116]||(l[116]=t(" C provides modifiers that can change the size or range of data types: ",-1)),l[117]||(l[117]=s("br",null,null,-1)),l[118]||(l[118]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"short"),s("li",null,"long"),s("li",null,"signed"),s("li",null,"unsigned")],-1)),l[119]||(l[119]=t(" Example: ",-1)),o(n,{code:r.value,language:"c"},null,8,["code"]),l[120]||(l[120]=t(" These modifiers help optimize memory and control ranges. ",-1))]),l[144]||(l[144]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Literals in C ",-1)),s("p",M,[l[121]||(l[121]=t(" Literals are fixed constant values assigned directly to variables. ",-1)),l[122]||(l[122]=s("br",null,null,-1)),l[123]||(l[123]=t(" Example: ",-1)),o(n,{code:p.value,language:"c"},null,8,["code"]),l[124]||(l[124]=t(" Literals: ",-1)),l[125]||(l[125]=s("br",null,null,-1)),l[126]||(l[126]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Occupy memory"),s("li",null,"Do not have names"),s("li",null,"Cannot be modified")],-1))]),l[145]||(l[145]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Type Conversion in C ",-1)),s("p",H,[l[127]||(l[127]=t(" Type conversion is the process of converting one data type into another. ",-1)),l[128]||(l[128]=s("ol",{class:"list-decimal list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"Implicit (Automatic)"),t(": done by compiler.")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"Explicit (Type Casting)"),t(": done by programmer.")])],-1)),l[129]||(l[129]=t(" Example: ",-1)),o(n,{code:d.value,language:"c"},null,8,["code"]),l[130]||(l[130]=t(" More advanced type conversion will be discussed later with operators. ",-1))]),l[146]||(l[146]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l[147]||(l[147]=s("p",{class:"text-gray-500 mb-2 text-lg"},[s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Data types define what kind of data a variable can store."),s("li",null,"C is statically typed."),s("li",null,[t(" Common data types: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"int"),t(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"char"),t(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"float"),t(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"double"),t(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"void")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"sizeof()"),t(" helps determine memory usage.")]),s("li",null,"Modifiers adjust size and range."),s("li",null,"Literals represent fixed values."),s("li",null,"Type conversion allows flexibility in operations.")])],-1))]),_:1}))}});export{R as default};

import{_ as I}from"./MainLayout.vue_vue_type_style_index_0_lang-BnMcHLIP.js";import{C as n,_ as A}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-BGxgIw6C.js";import{O as i}from"./OutputBlock-BJ7RIbr6.js";import{d as C,r as s,z as E,j as T,b as l,i as a,t as z,e,o as O}from"./index-Bk0_C35p.js";const D={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},W={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},M={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},L={class:"text-gray-500 mb-2 text-lg"},H={class:"text-gray-500 mb-2 text-lg"},K="February 6, 2026",F=C({__name:"VariablesIndex",setup(G){const r=s(`
int age;
float height;
char grade;
`),o=s(`
#include <stdio.h>

int main() {
	int age = 20; // integer variable
	float height = 5.7; // floating-point variable
	char grade = 'A'; // character variable

	printf("Age %d\\n", age);
	printf("Height: %.1f\\n", height);
	printf("Grade: %c\\n", grade);

	return 0;
}
`),u=s(`
Age: 20
Height: 5.7
Grade: A
`),d=s(`
	int a, b, c;
	float x, y;
	int cutenessLevel, stressLevel;
`),g=s(`
int total;
float average_score;
char _grade;
`),p=s(`
int 1number;        // starts with digit
float total marks;  // space not allowed
char return;        // keyword
`),b=s(`
int age = 20;
float height = 5.7;
`),m=s(`
char grade;
grade = 'A';
`),x=s(`
#include <stdio.h>
int main() {
	int num = 3;
	printf("%d", num);
	return 0;
}
`),y=s(`
#include <stdio.h>

int main() {
	int number  = 10;
	printf("Initial value: %d\\n", number);

	number = 25;
	printf("Updated value: %d\\n", number);

	number = number + 5;
	printf("After adding 5: %d\\n", number);

	return 0;
}
`),f=s(`
Initial value: 10
Updated value: 25
After adding 5: 30
`),v=s(`
#include <stdio.h>

int main() {
	int sum1 = 20 + 40;

	int a = 20, b = 40;
	int sum2 = a + b;

	printf("%d\\n%d", sum1, sum2);
	return 0;
}
`),V=s(`
60
60
`),w=s(`
#include <stdio.h>

int main() {
	int num = 22;
	printf("%d bytes", sizeof(num));
	return 0;
}
`),k=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Identifiers",route:"/blog/c-identifiers"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditional-statements"},{title:"Loops",route:"/blog/c-loops"}];return(P,t)=>(O(),E(I,null,{default:T(()=>[t[52]||(t[52]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Variables in C",-1)),l("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+z(K)),t[53]||(t[53]=l("p",{class:"text-gray-600 mb-4 text-lg"},[e(" A variable in C is a "),l("i",{class:"bg-pink-50 px-2 rounded-lg"},"named memory location"),e(" used to store data that can change while the program is running. Instead of remembering complex memory addresses, we use meaningful names to access and manipulate data easily. "),l("br"),e(" Think of a variable as a container: "),l("br"),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,[e("The "),l("i",{class:"bg-pink-50 px-2 rounded-lg"},"name"),e(" is the label on the container.")]),l("li",null,[e("The "),l("i",{class:"bg-pink-50 px-2 rounded-lg"},"data type"),e(" defines what kind of data it can store.")]),l("li",null,[e("The "),l("i",{class:"bg-pink-50 px-2 rounded-lg"},"value"),e(" is the actual data inside it.")])])],-1)),t[54]||(t[54]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Do We Need Variables? ",-1)),t[55]||(t[55]=l("p",{class:"text-gray-500 mb-2 text-lg"},[e(" Without variables, programming would be extremely difficult because: "),l("br"),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"We would have to remember exact memory addresses."),l("li",null,"We could not reuse values easily."),l("li",null,"Programs would be unreadable and error-prone.")]),e(" Variables allow us to: "),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Store data"),l("li",null,"Reuse data"),l("li",null,"Modify data during program execution")])],-1)),t[56]||(t[56]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Variables in C ",-1)),l("p",D,[t[0]||(t[0]=e(" To create a variable in C, we must specify: ",-1)),t[1]||(t[1]=l("ul",{class:"list-decimal list-inside space-y-1"},[l("li",null,"Data type"),l("li",null,"Variable name")],-1)),t[2]||(t[2]=e(" Syntax: ",-1)),t[3]||(t[3]=l("br",null,null,-1)),t[4]||(t[4]=l("span",{class:"bg-pink-50 px-4 rounded-lg"}," data_type variable_name; ",-1)),t[5]||(t[5]=e()),t[6]||(t[6]=l("br",null,null,-1)),t[7]||(t[7]=e(" Example: ",-1)),a(n,{code:r.value,language:"c"},null,8,["code"]),t[8]||(t[8]=e(" Here: ",-1)),t[9]||(t[9]=l("br",null,null,-1)),t[10]||(t[10]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"int"),e(", "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"float"),e(", and "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"char"),e(" are data types. ")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"age"),e(", "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"height"),e(", and "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"grade"),e(" are variable names ")])],-1)),t[11]||(t[11]=e(" Important: ",-1)),t[12]||(t[12]=l("br",null,null,-1)),t[13]||(t[13]=e(" Every variable must be declared before it is used. ",-1))]),t[57]||(t[57]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring and Initializing Variables ",-1)),l("p",N,[t[14]||(t[14]=e(" Initialization means assigning an initial value to a variable. ",-1)),t[15]||(t[15]=l("br",null,null,-1)),t[16]||(t[16]=l("span",{class:"text-gray-700 text-xl"},"Example:",-1)),t[17]||(t[17]=e()),t[18]||(t[18]=l("br",null,null,-1)),a(n,{code:o.value,language:"c"},null,8,["code"]),t[19]||(t[19]=l("span",{class:"text-gray-700 text-xl"},"Output:",-1)),a(i,{output:u.value},null,8,["output"])]),t[58]||(t[58]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Multiple Variables ",-1)),l("p",S,[t[20]||(t[20]=e(" We can declare multiple variables of the same data type in a single statement using commas. ",-1)),a(n,{code:d.value,language:"c"},null,8,["code"])]),t[59]||(t[59]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules for Naming Variables in C ",-1)),l("p",W,[t[21]||(t[21]=e(" A variable name must follow these rules: ",-1)),t[22]||(t[22]=l("ol",{class:"list-decimal list-inside space-y-1"},[l("li",null,"It can contain letters, digits, and underscores."),l("li",null,"It must start with a letter or underscore."),l("li",null,"It cannot start with a digit."),l("li",null,"No spaces are allowed."),l("li",null,"It must not be a C keyword."),l("li",null,"It must be unique within its scope.")],-1)),t[23]||(t[23]=l("span",{class:"text-gray-700 text-xl"},"Valid Variable Names",-1)),a(n,{code:g.value,language:"c"},null,8,["code"]),t[24]||(t[24]=l("span",{class:"text-gray-700 text-xl"},"Invalid Variable Names",-1)),a(n,{code:p.value,language:"c"},null,8,["code"])]),t[60]||(t[60]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Initialization ",-1)),l("p",B,[t[25]||(t[25]=e(" When a variable is declared without initialization, it contains a garbage value. ",-1)),t[26]||(t[26]=l("br",null,null,-1)),t[27]||(t[27]=e(" That is why initialization is important. ",-1)),t[28]||(t[28]=l("br",null,null,-1)),t[29]||(t[29]=l("span",{class:"text-gray-700 text-xl"},"Initialization at Declaration",-1)),a(n,{code:b.value,language:"c"},null,8,["code"]),t[30]||(t[30]=l("span",{class:"text-gray-700 text-xl"},"Initialization After Declaration",-1)),t[31]||(t[31]=e()),t[32]||(t[32]=l("br",null,null,-1)),a(n,{code:m.value,language:"c"},null,8,["code"]),t[33]||(t[33]=e(" Both approaches are valid. ",-1)),t[34]||(t[34]=l("br",null,null,-1)),t[35]||(t[35]=l("span",{class:"text-pink-700"},"Note:",-1)),t[36]||(t[36]=e(" The value assigned must match the declared data type. ",-1))]),t[61]||(t[61]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing Variables ",-1)),l("p",M,[t[37]||(t[37]=e(" To access the value stored in a variable, we simply use its name. ",-1)),a(n,{code:x.value,language:"c"},null,8,["code"]),t[38]||(t[38]=e(" Output: ",-1)),a(i,{output:"3"})]),t[62]||(t[62]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Changing Stored Values ",-1)),l("p",U,[t[39]||(t[39]=e(" The value of a variable can be updated anytime using the assignment operator (=). ",-1)),a(n,{code:y.value,language:"c"},null,8,["code"]),t[40]||(t[40]=e(" Output: ",-1)),a(i,{output:f.value},null,8,["output"])]),t[63]||(t[63]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Using Variables in Expressions ",-1)),l("p",L,[t[41]||(t[41]=e(" Variables can be used anywhere a value is expected.",-1)),t[42]||(t[42]=l("br",null,null,-1)),a(n,{code:v.value,language:"c"},null,8,["code"]),t[43]||(t[43]=e(" Output: ",-1)),a(i,{output:V.value},null,8,["output"]),t[44]||(t[44]=e(" This shows that variables act as substitutes for values. ",-1))]),t[64]||(t[64]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Memory Allocation of variables ",-1)),l("p",H,[t[45]||(t[45]=e(" When a variable is declared, the compiler: ",-1)),t[46]||(t[46]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Knows the variable name."),l("li",null,"Knows the data type.")],-1)),t[47]||(t[47]=e(" Memory is allocated when the variable is defined (usually at declaration in C). ",-1)),t[48]||(t[48]=l("br",null,null,-1)),t[49]||(t[49]=e(" The amount of memory depends on the data type. ",-1)),t[50]||(t[50]=l("br",null,null,-1)),a(n,{code:w.value,language:"c"},null,8,["code"]),t[51]||(t[51]=e(" Output: ",-1)),a(i,{output:"4 bytes"})]),t[65]||(t[65]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Where Are Variables Stored in Memory? ",-1)),t[66]||(t[66]=l("p",{class:"text-gray-500 mb-2 text-lg"},[e(" Variables are stored in different memory locations depending on their storage class, such as: "),l("br"),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"auto")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"static")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"extern")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"register")])]),e(" You'll usually start with automatic variables, and later topics will explain storage classes in detail. ")],-1)),t[67]||(t[67]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[68]||(t[68]=l("p",{class:"text-gray-500 mb-2 text-lg"},[l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Variables are named memory locations."),l("li",null,"They store data that can change during execution."),l("li",null,"Every variable needs a data type."),l("li",null,"Variables must be declared before use."),l("li",null,"Initialization prevents garbage values."),l("li",null,"Variables make programs readable and reusable.")])],-1)),a(A,{links:k})]),_:1}))}});export{F as default};

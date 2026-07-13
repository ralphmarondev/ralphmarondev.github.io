import{_ as I}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BX7JLS4I.js";import{C as n}from"./CodeBlock-Du5Y_F6b.js";import{O as i}from"./OutputBlock-CIA53ZQ5.js";import{u as A}from"./cProgramming-CqS8EQI1.js";import{d as E,r as s,p as C,l as T,m as z,o as D,a as t,t as O,b as a,k as e}from"./index-BPX1bKrC.js";const N={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},W={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},M={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},H={class:"text-gray-500 mb-2 text-lg"},L={class:"text-gray-500 mb-2 text-lg"},P={class:"text-gray-500 mb-2 text-lg"},G="February 6, 2026",J=E({__name:"VariablesIndex",setup(K){const r=A(),o=s(`
int age;
float height;
char grade;
`),u=s(`
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
`),d=s(`
Age: 20
Height: 5.7
Grade: A
`),g=s(`
	int a, b, c;
	float x, y;
	int cutenessLevel, stressLevel;
`),p=s(`
int total;
float average_score;
char _grade;
`),m=s(`
int 1number;        // starts with digit
float total marks;  // space not allowed
char return;        // keyword
`),b=s(`
int age = 20;
float height = 5.7;
`),x=s(`
char grade;
grade = 'A';
`),y=s(`
#include <stdio.h>
int main() {
	int num = 3;
	printf("%d", num);
	return 0;
}
`),f=s(`
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
`),v=s(`
Initial value: 10
Updated value: 25
After adding 5: 30
`),V=s(`
#include <stdio.h>

int main() {
	int sum1 = 20 + 40;

	int a = 20, b = 40;
	int sum2 = a + b;

	printf("%d\\n%d", sum1, sum2);
	return 0;
}
`),w=s(`
60
60
`),k=s(`
#include <stdio.h>

int main() {
	int num = 22;
	printf("%d bytes", sizeof(num));
	return 0;
}
`);return(R,l)=>(D(),C(I,{title:"C Programming",navigation:z(r).sections},{default:T(()=>[l[52]||(l[52]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Variables in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+O(G)),l[53]||(l[53]=t("p",{class:"text-gray-600 mb-4 text-lg"},[a(" A variable in C is a "),t("i",{class:"bg-pink-50 px-2 rounded-lg"},"named memory location"),a(" used to store data that can change while the program is running. Instead of remembering complex memory addresses, we use meaningful names to access and manipulate data easily. "),t("br"),a(" Think of a variable as a container: "),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[a("The "),t("i",{class:"bg-pink-50 px-2 rounded-lg"},"name"),a(" is the label on the container.")]),t("li",null,[a("The "),t("i",{class:"bg-pink-50 px-2 rounded-lg"},"data type"),a(" defines what kind of data it can store.")]),t("li",null,[a("The "),t("i",{class:"bg-pink-50 px-2 rounded-lg"},"value"),a(" is the actual data inside it.")])])],-1)),l[54]||(l[54]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Do We Need Variables? ",-1)),l[55]||(l[55]=t("p",{class:"text-gray-500 mb-2 text-lg"},[a(" Without variables, programming would be extremely difficult because: "),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"We would have to remember exact memory addresses."),t("li",null,"We could not reuse values easily."),t("li",null,"Programs would be unreadable and error-prone.")]),a(" Variables allow us to: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Store data"),t("li",null,"Reuse data"),t("li",null,"Modify data during program execution")])],-1)),l[56]||(l[56]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Variables in C ",-1)),t("p",N,[l[0]||(l[0]=a(" To create a variable in C, we must specify: ",-1)),l[1]||(l[1]=t("ul",{class:"list-decimal list-inside space-y-1"},[t("li",null,"Data type"),t("li",null,"Variable name")],-1)),l[2]||(l[2]=a(" Syntax: ",-1)),l[3]||(l[3]=t("br",null,null,-1)),l[4]||(l[4]=t("span",{class:"bg-pink-50 px-4 rounded-lg"}," data_type variable_name; ",-1)),l[5]||(l[5]=a()),l[6]||(l[6]=t("br",null,null,-1)),l[7]||(l[7]=a(" Example: ",-1)),e(n,{code:o.value,language:"c"},null,8,["code"]),l[8]||(l[8]=a(" Here: ",-1)),l[9]||(l[9]=t("br",null,null,-1)),l[10]||(l[10]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int"),a(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"float"),a(", and "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"char"),a(" are data types. ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"age"),a(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"height"),a(", and "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"grade"),a(" are variable names ")])],-1)),l[11]||(l[11]=a(" Important: ",-1)),l[12]||(l[12]=t("br",null,null,-1)),l[13]||(l[13]=a(" Every variable must be declared before it is used. ",-1))]),l[57]||(l[57]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring and Initializing Variables ",-1)),t("p",S,[l[14]||(l[14]=a(" Initialization means assigning an initial value to a variable. ",-1)),l[15]||(l[15]=t("br",null,null,-1)),l[16]||(l[16]=t("span",{class:"text-gray-700 text-xl"},"Example:",-1)),l[17]||(l[17]=a()),l[18]||(l[18]=t("br",null,null,-1)),e(n,{code:u.value,language:"c"},null,8,["code"]),l[19]||(l[19]=t("span",{class:"text-gray-700 text-xl"},"Output:",-1)),e(i,{output:d.value},null,8,["output"])]),l[58]||(l[58]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Multiple Variables ",-1)),t("p",W,[l[20]||(l[20]=a(" We can declare multiple variables of the same data type in a single statement using commas. ",-1)),e(n,{code:g.value,language:"c"},null,8,["code"])]),l[59]||(l[59]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules for Naming Variables in C ",-1)),t("p",B,[l[21]||(l[21]=a(" A variable name must follow these rules: ",-1)),l[22]||(l[22]=t("ol",{class:"list-decimal list-inside space-y-1"},[t("li",null,"It can contain letters, digits, and underscores."),t("li",null,"It must start with a letter or underscore."),t("li",null,"It cannot start with a digit."),t("li",null,"No spaces are allowed."),t("li",null,"It must not be a C keyword."),t("li",null,"It must be unique within its scope.")],-1)),l[23]||(l[23]=t("span",{class:"text-gray-700 text-xl"},"Valid Variable Names",-1)),e(n,{code:p.value,language:"c"},null,8,["code"]),l[24]||(l[24]=t("span",{class:"text-gray-700 text-xl"},"Invalid Variable Names",-1)),e(n,{code:m.value,language:"c"},null,8,["code"])]),l[60]||(l[60]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Initialization ",-1)),t("p",M,[l[25]||(l[25]=a(" When a variable is declared without initialization, it contains a garbage value. ",-1)),l[26]||(l[26]=t("br",null,null,-1)),l[27]||(l[27]=a(" That is why initialization is important. ",-1)),l[28]||(l[28]=t("br",null,null,-1)),l[29]||(l[29]=t("span",{class:"text-gray-700 text-xl"},"Initialization at Declaration",-1)),e(n,{code:b.value,language:"c"},null,8,["code"]),l[30]||(l[30]=t("span",{class:"text-gray-700 text-xl"},"Initialization After Declaration",-1)),l[31]||(l[31]=a()),l[32]||(l[32]=t("br",null,null,-1)),e(n,{code:x.value,language:"c"},null,8,["code"]),l[33]||(l[33]=a(" Both approaches are valid. ",-1)),l[34]||(l[34]=t("br",null,null,-1)),l[35]||(l[35]=t("span",{class:"text-pink-700"},"Note:",-1)),l[36]||(l[36]=a(" The value assigned must match the declared data type. ",-1))]),l[61]||(l[61]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing Variables ",-1)),t("p",U,[l[37]||(l[37]=a(" To access the value stored in a variable, we simply use its name. ",-1)),e(n,{code:y.value,language:"c"},null,8,["code"]),l[38]||(l[38]=a(" Output: ",-1)),e(i,{output:"3"})]),l[62]||(l[62]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Changing Stored Values ",-1)),t("p",H,[l[39]||(l[39]=a(" The value of a variable can be updated anytime using the assignment operator (=). ",-1)),e(n,{code:f.value,language:"c"},null,8,["code"]),l[40]||(l[40]=a(" Output: ",-1)),e(i,{output:v.value},null,8,["output"])]),l[63]||(l[63]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Using Variables in Expressions ",-1)),t("p",L,[l[41]||(l[41]=a(" Variables can be used anywhere a value is expected.",-1)),l[42]||(l[42]=t("br",null,null,-1)),e(n,{code:V.value,language:"c"},null,8,["code"]),l[43]||(l[43]=a(" Output: ",-1)),e(i,{output:w.value},null,8,["output"]),l[44]||(l[44]=a(" This shows that variables act as substitutes for values. ",-1))]),l[64]||(l[64]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Memory Allocation of variables ",-1)),t("p",P,[l[45]||(l[45]=a(" When a variable is declared, the compiler: ",-1)),l[46]||(l[46]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Knows the variable name."),t("li",null,"Knows the data type.")],-1)),l[47]||(l[47]=a(" Memory is allocated when the variable is defined (usually at declaration in C). ",-1)),l[48]||(l[48]=t("br",null,null,-1)),l[49]||(l[49]=a(" The amount of memory depends on the data type. ",-1)),l[50]||(l[50]=t("br",null,null,-1)),e(n,{code:k.value,language:"c"},null,8,["code"]),l[51]||(l[51]=a(" Output: ",-1)),e(i,{output:"4 bytes"})]),l[65]||(l[65]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Where Are Variables Stored in Memory? ",-1)),l[66]||(l[66]=t("p",{class:"text-gray-500 mb-2 text-lg"},[a(" Variables are stored in different memory locations depending on their storage class, such as: "),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"auto")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"static")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"extern")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"register")])]),a(" You'll usually start with automatic variables, and later topics will explain storage classes in detail. ")],-1)),l[67]||(l[67]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l[68]||(l[68]=t("p",{class:"text-gray-500 mb-2 text-lg"},[t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Variables are named memory locations."),t("li",null,"They store data that can change during execution."),t("li",null,"Every variable needs a data type."),t("li",null,"Variables must be declared before use."),t("li",null,"Initialization prevents garbage values."),t("li",null,"Variables make programs readable and reusable.")])],-1))]),_:1},8,["navigation"]))}});export{J as default};

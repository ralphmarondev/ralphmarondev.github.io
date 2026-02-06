import{_ as b}from"./MainLayout.vue_vue_type_style_index_0_lang-CSSDpK-H.js";import{_ as n}from"./CodeBlock.vue_vue_type_script_setup_true_lang-BWVkeT2n.js";import{d as g,r as a,x as m,j as x,b as l,t as y,e as s,i as e,o as f}from"./index-BRvjeYh0.js";const v={class:"text-gray-500 mb-2 text-lg"},k={class:"text-gray-500 mb-2 text-lg"},V={class:"text-gray-500 mb-2 text-lg"},w={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},A={class:"text-gray-500 mb-2 text-lg"},T="February 6, 2026",D=g({__name:"VariablesIndex",setup(E){const i=a(`
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
`),r=a(`
	int a, b, c;
	float x, y;
	int cutenessLevel, stressLevel;
`),d=a(`
#include <stdio.h>
int main() {
	int num = 3;
	printf("%d", num);
	return 0;
}
`),o=a(`
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
`),u=a(`
#include <stdio.h>

int main() {
	int sum1 = 20 + 40;

	int a = 20, b = 40;
	int sum2 = a + b;

	printf("%d\\n%d", sum1, sum2);
	return 0;
}
`),p=a(`
#include <stdio.h>

int main() {
	int num = 22;
	printf("%d bytes", sizeof(num));
	return 0;
}
`);return(C,t)=>(f(),m(b,null,{default:x(()=>[t[54]||(t[54]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Variables in C",-1)),l("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+y(T)),t[55]||(t[55]=l("p",{class:"text-gray-600 mb-4 text-lg"},[s(" A variable in C is a "),l("i",null,"named memory location"),s(" used to store data that can change while the program is running. Instead of remembering complex memory addresses, we use meaningful names to access and manipulate data easily. "),l("br"),s(" Think of a variable as a container: "),l("br"),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,[s("The "),l("i",null,"name"),s(" is the label on the container.")]),l("li",null,[s("The "),l("i",null,"data type"),s(" defines what kind of data it can store.")]),l("li",null,[s("The "),l("i",null,"value"),s(" is the actual data inside it.")])])],-1)),t[56]||(t[56]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Do We Need Variables? ",-1)),t[57]||(t[57]=l("p",{class:"text-gray-500 mb-2 text-lg"},[s(" Without variables, programming would be extremely difficult because: "),l("br"),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"We would have to remember exact memory addresses."),l("li",null,"We could not reuse values easily."),l("li",null,"Programs would be unreadable and error-prone.")]),s(" Variables allow us to: "),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Store data"),l("li",null,"Reuse data"),l("li",null,"Modify data during program execution")])],-1)),t[58]||(t[58]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Variables in C ",-1)),t[59]||(t[59]=l("p",{class:"text-gray-500 mb-2 text-lg"},[s(" To create a variable in C, we must specify: "),l("ul",{class:"list-decimal list-inside space-y-1"},[l("li",null,"Data type"),l("li",null,"Variable name")]),s(" Syntax: "),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"}," data_type variable_name; "),s(),l("br"),s(" Example: "),l("br"),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"int age;"),s(),l("br"),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"float height;"),s(),l("br"),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"char grade;"),s(),l("br"),s(" Here: "),l("br"),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"int"),s(", "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"float"),s(", and "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"char"),s(" are data types. ")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"age"),s(", "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"height"),s(", and "),l("span",{class:"bg-pink-50 px-2 rounded-lg"},"grade"),s(" are variable names ")])]),s(" Important: "),l("br"),s(" Every variable must be declared before it is used. ")],-1)),t[60]||(t[60]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring and Initializing Variables ",-1)),l("p",v,[t[0]||(t[0]=s(" Initialization means assigning an initial value to a variable. ",-1)),t[1]||(t[1]=l("span",{class:"text-gray-700 text-xl"},"Example:",-1)),t[2]||(t[2]=s()),t[3]||(t[3]=l("br",null,null,-1)),e(n,{code:i.value,language:"c"},null,8,["code"]),t[4]||(t[4]=l("span",{class:"text-gray-700 text-xl"},"Output:",-1)),t[5]||(t[5]=s()),t[6]||(t[6]=l("br",null,null,-1)),t[7]||(t[7]=l("span",{class:"bg-pink-50 px-2 rounded-lg"},"Age: 20",-1)),t[8]||(t[8]=s()),t[9]||(t[9]=l("br",null,null,-1)),t[10]||(t[10]=l("span",{class:"bg-pink-50 px-2 rounded-lg"},"Height: 5.7",-1)),t[11]||(t[11]=s()),t[12]||(t[12]=l("br",null,null,-1)),t[13]||(t[13]=l("span",{class:"bg-pink-50 px-2 rounded-lg"},"Grade: A",-1)),t[14]||(t[14]=s()),t[15]||(t[15]=l("br",null,null,-1))]),t[61]||(t[61]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Multiple Variables ",-1)),l("p",k,[t[16]||(t[16]=s(" We can declare multiple variables of the same data type in a single statement using commas. ",-1)),e(n,{code:r.value,language:"c"},null,8,["code"])]),t[62]||(t[62]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules for Naming Variables in C ",-1)),t[63]||(t[63]=l("p",{class:"text-gray-500 mb-2 text-lg"},[s(" A variable name must follow these rules: "),l("ol",{class:"list-decimal list-inside space-y-1"},[l("li",null,"It can contain letters, digits, and underscores."),l("li",null,"It must start with a letter or underscore."),l("li",null,"It cannot start with a digit."),l("li",null,"No spaces are allowed."),l("li",null,"It must not be a C keyword."),l("li",null,"It must be unique within its scope.")]),l("span",{class:"text-gray-700 text-xl"},"Valid Variable Names"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"int total;"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"float average_score;"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"char _grade;"),s(),l("br"),l("span",{class:"text-gray-700 text-xl"},"Invalid Variable Names"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"int 1number; // starts with digit"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"float total marks; // space not allowed"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"char return; // keyword"),s(),l("br")],-1)),t[64]||(t[64]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Initialization ",-1)),t[65]||(t[65]=l("p",{class:"text-gray-500 mb-2 text-lg"},[s(" When a variable is declared without initialization, it contains a garbage value. "),l("br"),s(" That is why initialization is important. "),l("br"),l("span",{class:"text-gray-700 text-xl"},"Initialization at Declaration"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"int age = 20;"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"float height = 5.7;"),s(),l("br"),l("span",{class:"text-gray-700 text-xl"},"Initialization After Declaration"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"char grade;"),s(),l("br"),l("span",{class:"bg-pink-50 px-4 rounded-lg"},"grade = 'A';"),s(),l("br"),s(" Both approaches are valid. "),l("br"),l("span",{class:"text-pink-700"},"Note:"),s(" The value assigned must match the declared data type. ")],-1)),t[66]||(t[66]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing Variables ",-1)),l("p",V,[t[17]||(t[17]=s(" To access the value stored in a variable, we simply use its name. ",-1)),e(n,{code:d.value,language:"c"},null,8,["code"]),t[18]||(t[18]=s(" Output: ",-1)),t[19]||(t[19]=l("span",{class:"bg-pink-50 px-4 rounded-lg"},"3",-1)),t[20]||(t[20]=s()),t[21]||(t[21]=l("br",null,null,-1))]),t[67]||(t[67]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Changing Stored Values ",-1)),l("p",w,[t[22]||(t[22]=s(" The value of a variable can be updated anytime using the assignment operator (=). ",-1)),e(n,{code:o.value,language:"c"},null,8,["code"]),t[23]||(t[23]=s(" Output: ",-1)),t[24]||(t[24]=l("br",null,null,-1)),t[25]||(t[25]=l("span",{class:"bg-pink-50 px-4 rounded-lg"},"Initial value: 10",-1)),t[26]||(t[26]=s()),t[27]||(t[27]=l("br",null,null,-1)),t[28]||(t[28]=l("span",{class:"bg-pink-50 px-4 rounded-lg"},"Update value: 25",-1)),t[29]||(t[29]=s()),t[30]||(t[30]=l("br",null,null,-1)),t[31]||(t[31]=l("span",{class:"bg-pink-50 px-4 rounded-lg"},"After adding 5: 30",-1)),t[32]||(t[32]=s()),t[33]||(t[33]=l("br",null,null,-1))]),t[68]||(t[68]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Using Variables in Expressions ",-1)),l("p",I,[t[34]||(t[34]=s(" Variables can be used anywhere a value is expected.",-1)),t[35]||(t[35]=l("br",null,null,-1)),e(n,{code:u.value,language:"c"},null,8,["code"]),t[36]||(t[36]=s(" Output: ",-1)),t[37]||(t[37]=l("br",null,null,-1)),t[38]||(t[38]=l("span",{class:"bg-pink-50 px-4 rounded-lg"},"60",-1)),t[39]||(t[39]=s()),t[40]||(t[40]=l("br",null,null,-1)),t[41]||(t[41]=l("span",{class:"bg-pink-50 px-4 rounded-lg"},"60",-1)),t[42]||(t[42]=s()),t[43]||(t[43]=l("br",null,null,-1)),t[44]||(t[44]=s(" This shows that variables act as substitutes for values. ",-1))]),t[69]||(t[69]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Memory Allocation of variables ",-1)),l("p",A,[t[45]||(t[45]=s(" When a variable is declared, the compiler: ",-1)),t[46]||(t[46]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Knows the variable name."),l("li",null,"Knows the data type.")],-1)),t[47]||(t[47]=s(" Memory is allocated when the variable is defined (usually at declaration in C). ",-1)),t[48]||(t[48]=l("br",null,null,-1)),t[49]||(t[49]=s(" The amount of memory depends on the data type. ",-1)),t[50]||(t[50]=l("br",null,null,-1)),e(n,{code:p.value,language:"c"},null,8,["code"]),t[51]||(t[51]=s(" Output: ",-1)),t[52]||(t[52]=l("span",{class:"bg-pink-50 px-4 rounded-lg"},"4 bytes",-1)),t[53]||(t[53]=l("br",null,null,-1))]),t[70]||(t[70]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Where Are Variables Stored in Memory? ",-1)),t[71]||(t[71]=l("p",{class:"text-gray-500 mb-2 text-lg"},[s(" Variables are stored in different memory locations depending on their storage class, such as: "),l("br"),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"auto")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"static")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"extern")]),l("li",null,[l("span",{class:"bg-pink-50 px-2 rounded-lg"},"register")])]),s(" You'll usually start with automatic variables, and later topics will explain storage classes in detail. ")],-1)),t[72]||(t[72]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[73]||(t[73]=l("p",{class:"text-gray-500 mb-2 text-lg"},[l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Variables are named memory locations."),l("li",null,"They store data that can change during execution."),l("li",null,"Every variable needs a data type."),l("li",null,"Variables must be declared before use."),l("li",null,"Initialization prevents garbage values."),l("li",null,"Variables make programs readable and reusable.")])],-1))]),_:1}))}});export{D as default};

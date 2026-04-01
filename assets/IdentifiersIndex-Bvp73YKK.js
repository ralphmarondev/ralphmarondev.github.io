import{C as l}from"./CodeBlock-Dd1mP4ad.js";import{O as r}from"./OutputBlock-CDn1Z-J2.js";import{_ as p}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-lkP72EWw.js";import{_ as f}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-BBZabq2u.js";import{d as b,r as s,p as y,l as c,a as t,k as i,t as x,e as n,o as v,_ as w}from"./index-CHxIOmuf.js";import"./Footer.vue_vue_type_script_setup_true_lang-DA2rbS9c.js";const C={class:"text-gray-600 mb-4 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},k={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},F="February 5, 2026",P=b({__name:"IdentifiersIndex",setup(h){const a=s(`
// Defining a variable
int val = 10;

// Defining a function
void func() { }
`),o=s(`
#include <stdio.h>

int main()
{
	// Creating a variable with identifier 'var'
	int var;

	// Assigning a value
	var = 10;

	// Using the variable in a printf statement
	printf("%d", var);

	return 0;
}
`),u=s(`
#include <stdio.h>

// Function named 'sum'
int sum(int a, int b)
{
	return a + b;
}

int main()
{
	// Calling the function using its identifier
	printf("%d", sum(10, 20));
	return 0;
}
`),d=s(`
#include <stdio.h>

int main()
{
	int const = 90;
	return 0;
}
`),m=s(`
./main.c: 5:14: error: expected identifier or '(' before '=' token
int const = 90;`),g=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditional-statements"},{title:"Loops",route:"/blog/c-loops"}];return(A,e)=>(v(),y(f,{title:"C Programming",link:"/c-programming-language"},{default:c(()=>[e[18]||(e[18]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Identifiers in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(F)),t("p",C,[e[0]||(e[0]=n(" In C programming, an identifier is a name that you assign to various program elements, such as variables, functions, arrays, structures, or other user-defined items. Essentially, an identifier allows you to refer to a program element later in the code in a clear and meaningful way. ",-1)),e[1]||(e[1]=t("br",null,null,-1)),e[2]||(e[2]=n(" For Example: ",-1)),i(l,{code:a.value,language:"c"},null,8,["code"]),e[3]||(e[3]=n(" In the above snippet, ",-1)),e[4]||(e[4]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"val",-1)),e[5]||(e[5]=n(" and ",-1)),e[6]||(e[6]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"func",-1)),e[7]||(e[7]=n(" are identifiers - unique names chosen by the programmer to refer to a variable and a function, respectively. ",-1))]),e[19]||(e[19]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules for Naming Identifiers ",-1)),e[20]||(e[20]=t("p",{class:"text-gray-500 mb-2 text-lg"},[n(" When creating identifiers in C, there are specific rules you must follow: "),t("br"),t("ol",{class:"list-decimal list-inside space-y-1 text-gray-500 mb-2"},[t("li",null,[t("span",{class:"text-gray-600"},"Allowed characters: "),t("br"),t("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[t("li",null,"Uppercase letters: A-Z"),t("li",null,"Lowercase letters: a-z"),t("li",null,"Digits: 0-9"),t("li",null,"Underscore: _")])]),t("li",null,[t("span",{class:"text-gray-600"},"Starting character:"),n(" The first character of an identifier must be a letter or an underscore. It cannot be a digit. ")]),t("li",null,[t("span",{class:"text-gray-600"},"Case sensitivity:"),n(" Identifiers are case-sensitive, meaning Value and value would be treated as two different identifiers. ")]),t("li",null,[t("span",{class:"text-gray-600"},"No keywords:"),n(" Identifiers cannot be C keywords like int, return, if, while, etc. ")])]),n(" Following these rules ensures that your identifiers are valid and won't cause compilation errors. ")],-1)),e[21]||(e[21]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Identifier ",-1)),t("p",I,[i(l,{code:o.value,language:"c"},null,8,["code"]),e[8]||(e[8]=n(" Output: ",-1)),i(r,{output:"10"}),e[9]||(e[9]=n(" Here, var is the identifier for the integer variable, which we can use throughout the program to store and access the value 10. ",-1)),e[10]||(e[10]=t("br",null,null,-1))]),e[22]||(e[22]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Function Identifier ",-1)),t("p",k,[i(l,{code:u.value,language:"c"},null,8,["code"]),e[11]||(e[11]=n(" Output: ",-1)),i(r,{output:"30"}),e[12]||(e[12]=n(" In this example, sum is an identifier for a user-defined function. Using meaningful names like this helps make the program readable and understandable. ",-1))]),e[23]||(e[23]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Naming Conventions ",-1)),e[24]||(e[24]=t("p",{class:"text-gray-500 mb-2 text-lg"},[n(" Although C doesn’t enforce strict naming conventions, following widely accepted guidelines can improve readability and make your code easier to maintain. Common conventions include: "),t("br"),t("span",{class:"text-gray-600"},"For Variables:"),t("br"),t("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[t("li",null,"Use camelCase: frequencyCount, personName, isCute"),t("li",null,"Constants are often written in UPPER_SNAKE_CASE: MAX_SIZE, PI, SUPER_CUTE"),t("li",null,"Begin variable names with a lowercase letter."),t("li",null,"Use descriptive names that indicate the variable's purpose.")]),t("span",{class:"text-gray-600"},"For Functions:"),t("br"),t("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[t("li",null,"Use camelcase: getName(), countFrequency(), cutenessLevel()"),t("li",null,"Function names should typically be verbs or verb phrases describing an action.")]),t("span",{class:"text-gray-600"},"For Structures:"),t("br"),t("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[t("li",null,"Use PascalCase: Car, Person"),t("li",null,"Structure names should usually be nouns or noun phrases.")])],-1)),e[25]||(e[25]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Keywords vs Identifiers ",-1)),e[26]||(e[26]=t("p",{class:"text-gray-500 mb-2 text-lg"},[n(" It is important to understand the difference between keywords and identifiers: "),t("table",null,[t("tr",null,[t("th",null,"Feature"),t("th",null,"Keyword"),t("th",null,"Identifier")]),t("tr",null,[t("td",null,"Definition"),t("td",null,"Reserved word in C with a predefined meaning."),t("td",null,"User-defined name for variables, functions, etc.")]),t("tr",null,[t("td",null,"Usage"),t("td",null,"Controls program structure and flow (int, return, if)."),t("td",null,"Refers to programmer-defined elements (age, sum, totalAmount, cutenessLevel).")]),t("tr",null,[t("td",null,"Modifiability"),t("td",null,"Cannot be changed or reused."),t("td",null,"Can be freely created and used.")]),t("tr",null,[t("td",null,"Case sensitivity"),t("td",null,"Keywords are case-sensitive (int != Int)"),t("td",null,"Identifiers are also case-sensitive (age != Age)")])])],-1)),e[27]||(e[27]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What Happens if You Use a Keyword as an Identifier? ",-1)),t("p",U,[e[13]||(e[13]=n(" Using a C keyword as an identifier will result in a compilation error. For example: ",-1)),e[14]||(e[14]=t("br",null,null,-1)),i(l,{code:d.value,language:"c"},null,8,["code"]),e[15]||(e[15]=n(" Output: ",-1)),e[16]||(e[16]=t("br",null,null,-1)),i(r,{output:m.value},null,8,["output"]),e[17]||(e[17]=n(" This demonstrate why it's important to avoid keywords when naming your identifiers. ",-1))]),i(p,{links:g})]),_:1}))}}),D=w(P,[["__scopeId","data-v-2536a695"]]);export{D as default};

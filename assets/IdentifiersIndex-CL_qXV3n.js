import{_ as p}from"./MainLayout.vue_vue_type_style_index_0_lang-COkVKPSQ.js";import{C as l,_ as f}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-vUkPcjSL.js";import{O as r}from"./OutputBlock-DtI5Zloi.js";import{d as b,r as s,z as y,j as c,b as e,i,t as x,e as n,o as v,_ as w}from"./index-C9kXZoCP.js";const C={class:"text-gray-600 mb-4 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},k={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},F="February 5, 2026",h=b({__name:"IdentifiersIndex",setup(P){const a=s(`
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
int const = 90;`),g=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditional-statements"},{title:"Loops",route:"/blog/c-loops"}];return(A,t)=>(v(),y(p,null,{default:c(()=>[t[18]||(t[18]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Identifiers in C",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(F)),e("p",C,[t[0]||(t[0]=n(" In C programming, an identifier is a name that you assign to various program elements, such as variables, functions, arrays, structures, or other user-defined items. Essentially, an identifier allows you to refer to a program element later in the code in a clear and meaningful way. ",-1)),t[1]||(t[1]=e("br",null,null,-1)),t[2]||(t[2]=n(" For Example: ",-1)),i(l,{code:a.value,language:"c"},null,8,["code"]),t[3]||(t[3]=n(" In the above snippet, ",-1)),t[4]||(t[4]=e("span",{class:"bg-pink-50 px-2 rounded-lg"},"val",-1)),t[5]||(t[5]=n(" and ",-1)),t[6]||(t[6]=e("span",{class:"bg-pink-50 px-2 rounded-lg"},"func",-1)),t[7]||(t[7]=n(" are identifiers - unique names chosen by the programmer to refer to a variable and a function, respectively. ",-1))]),t[19]||(t[19]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules for Naming Identifiers ",-1)),t[20]||(t[20]=e("p",{class:"text-gray-500 mb-2 text-lg"},[n(" When creating identifiers in C, there are specific rules you must follow: "),e("br"),e("ol",{class:"list-decimal list-inside space-y-1 text-gray-500 mb-2"},[e("li",null,[e("span",{class:"text-gray-600"},"Allowed characters: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Uppercase letters: A-Z"),e("li",null,"Lowercase letters: a-z"),e("li",null,"Digits: 0-9"),e("li",null,"Underscore: _")])]),e("li",null,[e("span",{class:"text-gray-600"},"Starting character:"),n(" The first character of an identifier must be a letter or an underscore. It cannot be a digit. ")]),e("li",null,[e("span",{class:"text-gray-600"},"Case sensitivity:"),n(" Identifiers are case-sensitive, meaning Value and value would be treated as two different identifiers. ")]),e("li",null,[e("span",{class:"text-gray-600"},"No keywords:"),n(" Identifiers cannot be C keywords like int, return, if, while, etc. ")])]),n(" Following these rules ensures that your identifiers are valid and won't cause compilation errors. ")],-1)),t[21]||(t[21]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Identifier ",-1)),e("p",I,[i(l,{code:o.value,language:"c"},null,8,["code"]),t[8]||(t[8]=n(" Output: ",-1)),i(r,{output:"10"}),t[9]||(t[9]=n(" Here, var is the identifier for the integer variable, which we can use throughout the program to store and access the value 10. ",-1)),t[10]||(t[10]=e("br",null,null,-1))]),t[22]||(t[22]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Function Identifier ",-1)),e("p",k,[i(l,{code:u.value,language:"c"},null,8,["code"]),t[11]||(t[11]=n(" Output: ",-1)),i(r,{output:"30"}),t[12]||(t[12]=n(" In this example, sum is an identifier for a user-defined function. Using meaningful names like this helps make the program readable and understandable. ",-1))]),t[23]||(t[23]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Naming Conventions ",-1)),t[24]||(t[24]=e("p",{class:"text-gray-500 mb-2 text-lg"},[n(" Although C doesn’t enforce strict naming conventions, following widely accepted guidelines can improve readability and make your code easier to maintain. Common conventions include: "),e("br"),e("span",{class:"text-gray-600"},"For Variables:"),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Use camelCase: frequencyCount, personName, isCute"),e("li",null,"Constants are often written in UPPER_SNAKE_CASE: MAX_SIZE, PI, SUPER_CUTE"),e("li",null,"Begin variable names with a lowercase letter."),e("li",null,"Use descriptive names that indicate the variable's purpose.")]),e("span",{class:"text-gray-600"},"For Functions:"),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Use camelcase: getName(), countFrequency(), cutenessLevel()"),e("li",null,"Function names should typically be verbs or verb phrases describing an action.")]),e("span",{class:"text-gray-600"},"For Structures:"),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Use PascalCase: Car, Person"),e("li",null,"Structure names should usually be nouns or noun phrases.")])],-1)),t[25]||(t[25]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Keywords vs Identifiers ",-1)),t[26]||(t[26]=e("p",{class:"text-gray-500 mb-2 text-lg"},[n(" It is important to understand the difference between keywords and identifiers: "),e("table",null,[e("tr",null,[e("th",null,"Feature"),e("th",null,"Keyword"),e("th",null,"Identifier")]),e("tr",null,[e("td",null,"Definition"),e("td",null,"Reserved word in C with a predefined meaning."),e("td",null,"User-defined name for variables, functions, etc.")]),e("tr",null,[e("td",null,"Usage"),e("td",null,"Controls program structure and flow (int, return, if)."),e("td",null,"Refers to programmer-defined elements (age, sum, totalAmount, cutenessLevel).")]),e("tr",null,[e("td",null,"Modifiability"),e("td",null,"Cannot be changed or reused."),e("td",null,"Can be freely created and used.")]),e("tr",null,[e("td",null,"Case sensitivity"),e("td",null,"Keywords are case-sensitive (int != Int)"),e("td",null,"Identifiers are also case-sensitive (age != Age)")])])],-1)),t[27]||(t[27]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What Happens if You Use a Keyword as an Identifier? ",-1)),e("p",U,[t[13]||(t[13]=n(" Using a C keyword as an identifier will result in a compilation error. For example: ",-1)),t[14]||(t[14]=e("br",null,null,-1)),i(l,{code:d.value,language:"c"},null,8,["code"]),t[15]||(t[15]=n(" Output: ",-1)),t[16]||(t[16]=e("br",null,null,-1)),i(r,{output:m.value},null,8,["output"]),t[17]||(t[17]=n(" This demonstrate why it's important to avoid keywords when naming your identifiers. ",-1))]),i(f,{links:g})]),_:1}))}}),V=w(h,[["__scopeId","data-v-af6e1182"]]);export{V as default};

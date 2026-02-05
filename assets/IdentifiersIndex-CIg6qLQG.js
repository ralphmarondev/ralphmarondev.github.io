import{_ as y}from"./MainLayout.vue_vue_type_style_index_0_lang-CKsHTWoP.js";import{d as p,A as x,c as v,e as n,b as e,o as b,r,x as w,j as c,t as a,i as g,_ as C}from"./index-BficZJSQ.js";const I={class:"bg-gray-50 text-gray-900 p-4 rounded-lg border-2 border-pink-400 overflow-x-auto leading-snug"},k=["innerHTML"],f=p({__name:"CodeBlock",props:{code:{},language:{}},setup(m){const s=m,o=["int","return","if","else","while","for","void","char","float","double","struct","union","const","sizeof","switch","case","break","continue"],u=x(()=>{let i=s.code.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");return s.language==="c"&&(o.forEach(l=>{const d=new RegExp(`\\b${l}\\b`,"g");i=i.replace(d,`<span class="text-pink-600 font-bold">${l}</span>`)}),i=i.replace(/(\/\/.*)/g,'<span class="text-green-600 italic">$1</span>')),i});return(i,l)=>(b(),v("pre",I,[l[0]||(l[0]=n("    ",-1)),e("code",{innerHTML:u.value},null,8,k),l[1]||(l[1]=n(`
  `,-1))]))}}),U={class:"text-gray-500 mb-2 text-lg"},F={class:"bg-gray-50 text-gray-900 p-4 rounded-lg border-2 border-pink-400 overflow-x-auto leading-snug"},E={class:"text-gray-500 mb-2 text-lg"},A="February 5, 2026",N=p({__name:"IdentifiersIndex",setup(m){const s=r(`
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
`),o=r("10"),u=r(`
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
`),i=r("30"),l=r(`
#include <stdio.h>

int main()
{
	int const = 90;
	return 0;
}
`),d=r(`./main.c:5:14: error: expected identifier or '(' before '=' token
    int const = 90;`);return(P,t)=>(b(),w(y,null,{default:c(()=>[t[25]||(t[25]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Identifiers in C",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+a(A)),t[26]||(t[26]=e("p",{class:"text-gray-600 mb-4 text-lg"},[n(" In C programming, an identifier is a name that you assign to various program elements, such as variables, functions, arrays, structures, or other user-defined items. Essentially, an identifier allows you to refer to a program element later in the code in a clear and meaningful way. "),e("br"),n(" For Example: "),e("br"),n(" // Defining a variable "),e("br"),n(" int val = 10; "),e("br"),n(" // Defining a function "),e("br"),n(" void func() {} "),e("br"),n(" In the above snippet, val and func are identifiers - unique names chosen by the programmer to refer to a variable and a function, respectively. ")],-1)),t[27]||(t[27]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules for Naming Identifiers ",-1)),t[28]||(t[28]=e("p",{class:"text-gray-500 mb-2 text-lg"},[n(" When creating identifiers in C, there are specific rules you must follow: "),e("br"),e("ol",{class:"list-decimal list-inside space-y-1 text-gray-500 mb-2"},[e("li",null,[n(" Allowed characters: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Uppercase letters: A-Z"),e("li",null,"Lowercase letters: a-z"),e("li",null,"Digits: 0-9"),e("li",null,"Underscore: _")])]),e("li",null," Starting character: The first character of an identifier must be a letter or an underscore. It cannot be a digit. "),e("li",null," Case sensitivity: Identifiers are case-sensitive, meaning Value and value would be treated as two different identifiers. "),e("li",null," No keywords: Identifiers cannot be C keywords like int, return, if, while, etc. ")]),n(" Following these rules ensures that your identifiers are valid and won't cause compilation errors. ")],-1)),t[29]||(t[29]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Identifier ",-1)),e("p",U,[t[0]||(t[0]=n(" Variable Identifier: ",-1)),t[1]||(t[1]=e("br",null,null,-1)),g(f,{code:s.value,language:"c"},null,8,["code"]),t[2]||(t[2]=e("br",null,null,-1)),t[3]||(t[3]=n(" Output: ",-1)),t[4]||(t[4]=e("br",null,null,-1)),t[5]||(t[5]=n()),t[6]||(t[6]=e("br",null,null,-1)),e("span",F,a(o.value),1),t[7]||(t[7]=e("br",null,null,-1)),t[8]||(t[8]=e("br",null,null,-1)),t[9]||(t[9]=n(" Here, var is the identifier for the integer variable, which we can use throughout the program to store and access the value 10. ",-1)),t[10]||(t[10]=e("br",null,null,-1)),t[11]||(t[11]=n(" Function Identifier: ",-1)),t[12]||(t[12]=e("br",null,null,-1)),g(f,{code:u.value,language:"c"},null,8,["code"]),t[13]||(t[13]=n(" Output: ",-1)),t[14]||(t[14]=e("br",null,null,-1)),e("span",null,a(i.value),1),t[15]||(t[15]=n()),t[16]||(t[16]=e("br",null,null,-1)),t[17]||(t[17]=n(" In this example, sum is an identifier for a user-defined function. Using meaningful names like this helps make the program readable and understandable. ",-1))]),t[30]||(t[30]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Naming Conventions ",-1)),t[31]||(t[31]=e("p",{class:"text-gray-500 mb-2 text-lg"},[n(" Although C doesn’t enforce strict naming conventions, following widely accepted guidelines can improve readability and make your code easier to maintain. Common conventions include: "),e("br"),n(" For Variables: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Use camelCase: frequencyCount, personName, isCute"),e("li",null,"Constants are often written in UPPER_SNAKE_CASE: MAX_SIZE, PI, SUPER_CUTE"),e("li",null,"Begin variable names with a lowercase letter."),e("li",null,"Use descriptive names that indicate the variable's purpose.")]),n(" For Functions: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Use camelcase: getName(), countFrequency(), cutenessLevel()"),e("li",null,"Function names should typically be verbs or verb phrases describing an action.")]),n(" For Structures: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1 text-gray-500"},[e("li",null,"Use PascalCase: Car, Person"),e("li",null,"Structure names should usually be nouns or noun phrases.")])],-1)),t[32]||(t[32]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Keywords vs Identifiers ",-1)),t[33]||(t[33]=e("p",{class:"text-gray-500 mb-2 text-lg"},[n(" It is important to understand the difference between keywords and identifiers: "),e("table",null,[e("tr",null,[e("th",null,"Feature"),e("th",null,"Keyword"),e("th",null,"Identifier")]),e("tr",null,[e("td",null,"Definition"),e("td",null,"Reserved word in C with a predefined meaning."),e("td",null,"User-defined name for variables, functions, etc.")]),e("tr",null,[e("td",null,"Usage"),e("td",null,"Controls program structure and flow (int, return, if)."),e("td",null,"Refers to programmer-defined elements (age, sum, totalAmount, cutenessLevel).")]),e("tr",null,[e("td",null,"Modifiability"),e("td",null,"Cannot be changed or reused."),e("td",null,"Can be freely created and used.")]),e("tr",null,[e("td",null,"Case sensitivity"),e("td",null,"Keywords are case-sensitive (int != Int)"),e("td",null,"Identifiers are also case-sensitive (age != Age)")])])],-1)),t[34]||(t[34]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What Happens if You Use a Keyword as an Identifier? ",-1)),e("p",E,[t[18]||(t[18]=n(" Using a C keyword as an identifier will result in a compilation error. For example: ",-1)),t[19]||(t[19]=e("br",null,null,-1)),g(f,{code:l.value,language:"c"},null,8,["code"]),t[20]||(t[20]=n(" Output (example): ",-1)),t[21]||(t[21]=e("br",null,null,-1)),e("span",null,a(d.value),1),t[22]||(t[22]=n()),t[23]||(t[23]=e("br",null,null,-1)),t[24]||(t[24]=n(" This demonstrate why it's important to avoid keywords when naming your identifiers. ",-1))])]),_:1}))}}),$=C(N,[["__scopeId","data-v-9175935c"]]);export{$ as default};

import{_ as c}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-BBZabq2u.js";import{C as s}from"./CodeBlock-Dd1mP4ad.js";import{O as o}from"./OutputBlock-CDn1Z-J2.js";import{d as v,r as i,p as F,l as k,a as t,t as w,e as n,k as e,o as D}from"./index-CHxIOmuf.js";import"./Footer.vue_vue_type_script_setup_true_lang-DA2rbS9c.js";const T={class:"text-gray-500 mb-2 text-lg"},C={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},V={class:"text-gray-500 mb-2 text-lg"},A={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},W="March 30, 2026",L=v({__name:"IntroductionIndex",setup(R){const a=i(`
#include <stdio.h>

// Function definition
int square (int x) {
	return x * x;
}

int main() {
	// Function call
	int result = square(5);

	printf("Square of 5 is: %d!\\n", result);
	return 0;
}
`),u=i(`
return_type function_name(parameters) {
	// function body
	return value;
}
`),r=i(`
int add(int a, int b);
`),d=i(`
int add(int a, int b) {
	return a + b;
}
`),m=i(`
int result = add(5, 3);
`),g=i(`
#include <stdio.h>

int add(int a, int b)
{
	return a + b;
}

int main()
{
	int result = add(5, 3);

	printf("The sum is: %d\\n", result);
	return 0;
}
`),f=i(`
#include <stdio.h>
#include <math.h>
`),x=i(`
void greet()
{
	printf("Hello!\\n");
}
`),p=i(`
void greet(char name[])
{
	printf("Hello %s!\\n", name);
}
`),y=i(`
void getCutenessLevel()
{
	return 100;
}
`),b=i(`
void add(int a, int b)
{
	return a + b;
}
`);return(I,l)=>(D(),F(c,{title:"C Programming",link:"/c-programming-language"},{default:k(()=>[l[22]||(l[22]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Functions in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+w(W)),l[23]||(l[23]=t("p",{class:"text-gray-600 mb-2 text-lg"},[n(" A function is a named block of code that performs a specific task. "),t("br"),n(" It can: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Take input called parameters."),t("li",null,"Process same logic."),t("li",null,"Return a result (optional).")]),n(" Instead of writing the same code multiple times, you can reuse a function whenever needed. ")],-1)),l[24]||(l[24]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What use functions? ",-1)),l[25]||(l[25]=t("p",{class:"text-gray-500 mb-2 text-lg"},[n(" Functions help you: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Avoid repeating code."),t("li",null,"Keep programs clean and organized."),t("li",null,"Make logic easier to understand."),t("li",null,"Make logic easier to understand."),t("li",null,"Break complex problems into smaller parts.")]),n(" Think of a function like a tool, you build it once, then use it anytime. ")],-1)),l[26]||(l[26]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," How functions work? ",-1)),t("p",T,[e(s,{code:a.value,language:"c"},null,8,["code"]),l[0]||(l[0]=n(" Output: ",-1)),e(o,{output:"Square of 5 is: 25"})]),l[27]||(l[27]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," How functions work? ",-1)),l[28]||(l[28]=t("p",{class:"text-gray-500 mb-2 text-lg"},[t("ol",{class:"list-decimal list-inside space-y-1"},[t("li",null,"You define the function."),t("li",null,"You call the function."),t("li",null,"The program jumps to that function."),t("li",null,"It executes the code."),t("li",null,"It returns a value (if needed)."),t("li",null,"Program continues where it left off.")])],-1)),l[29]||(l[29]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Function Syntax ",-1)),t("p",C,[e(s,{code:u.value,language:"c"},null,8,["code"]),l[1]||(l[1]=n(" Breakdown: ",-1)),l[2]||(l[2]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Return type: type of value returned (int, float, void)."),t("li",null,"Function name: identifier of the function."),t("li",null,"Parameters: inputs to the function."),t("li",null,"Function body: code insdie {}."),t("li",null,"Return statement: sends value back.")],-1))]),l[30]||(l[30]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Function Declaration (Prototype) ",-1)),t("p",B,[l[3]||(l[3]=n(" Tells the compiler that a function exists: ",-1)),e(s,{code:r.value,language:"c"},null,8,["code"]),l[4]||(l[4]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"No body."),t("li",null,"Usually placed before main().")],-1))]),l[31]||(l[31]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Function Definition ",-1)),t("p",N,[l[5]||(l[5]=n(" Contains the actual logic. ",-1)),e(s,{code:d.value,language:"c"},null,8,["code"])]),l[32]||(l[32]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Do We Need Declaration? ",-1)),l[33]||(l[33]=t("p",{class:"text-gray-500 mb-2 text-lg"},[n(" if the function is written below main(), the compiler needs to know about it first. "),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Declaration = This function exists."),t("li",null,"Definition = This is what it does.")])],-1)),l[34]||(l[34]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Calling a Function ",-1)),t("p",V,[l[6]||(l[6]=n(" To use a function, just write its name followed by parentheses. ",-1)),e(s,{code:m.value,language:"c"},null,8,["code"]),l[7]||(l[7]=n(" Example: ",-1)),e(s,{code:g.value,language:"c"},null,8,["code"]),l[8]||(l[8]=n(" Output: ",-1)),e(o,{output:"The sum is: 8"})]),l[35]||(l[35]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Types of Functions in C ",-1)),l[36]||(l[36]=t("p",{class:"text-gray-500 mb-2 text-lg"},[t("ol",{class:"list-decimal list-inside space-y-1"},[t("li",null,"Library Functions"),t("li",null,"User-defined Functions")])],-1)),l[37]||(l[37]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Library Functions ",-1)),t("p",A,[l[9]||(l[9]=n(" Built-in functions provided by C. ",-1)),l[10]||(l[10]=t("br",null,null,-1)),l[11]||(l[11]=n(" Examples: ",-1)),l[12]||(l[12]=t("ol",{class:"list-decimal list-inside space-y-1"},[t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"printf()"),t("li",null,"scanf()"),t("li",null,"sqrt()")])],-1)),l[13]||(l[13]=n(" You just included the needed header file: ",-1)),e(s,{code:f.value,language:"c"},null,8,["code"])]),l[38]||(l[38]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," User-Defined Functions ",-1)),t("p",S,[l[14]||(l[14]=n(" Functions that you create.",-1)),l[15]||(l[15]=t("br",null,null,-1)),l[16]||(l[16]=n(" They come in 4 types: ",-1)),l[17]||(l[17]=t("br",null,null,-1)),l[18]||(l[18]=t("span",{class:"text-gray-900"},"1. No Arguments, No Return Value",-1)),e(s,{code:x.value,language:"c"},null,8,["code"]),l[19]||(l[19]=t("span",{class:"text-gray-900"},"2. With Arguments, No Return Value",-1)),e(s,{code:p.value,language:"c"},null,8,["code"]),l[20]||(l[20]=t("span",{class:"text-gray-900"},"3. No Arguments, With Return Value",-1)),e(s,{code:y.value,language:"c"},null,8,["code"]),l[21]||(l[21]=t("span",{class:"text-gray-900"},"2. With Arguments, With Return Value",-1)),e(s,{code:b.value,language:"c"},null,8,["code"])]),l[39]||(l[39]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Behind the Scenes: Memory ",-1)),l[40]||(l[40]=t("p",{class:"text-gray-500 mb-2 text-lg"},[n(" When a function is called: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"A new memory space is created (called a stack frame)."),t("li",null,"Variables inside the function are stored there."),t("li",null,"After execution, the memory is automatically removed.")]),n(" This is why variables inside functions are "),t("b",null,"temporary"),n(" and "),t("b",null,"independent"),n(". ")],-1)),l[41]||(l[41]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Disadvantages of Functions ",-1)),l[42]||(l[42]=t("p",{class:"text-gray-500 mb-2 text-lg"},[t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Slight performance overhead due to function calls."),t("li",null,"Too many small functions can be confusing."),t("li",null,"Harder to trace if poorly organized."),t("li",null,"Variables are local (not shared easily).")])],-1)),l[43]||(l[43]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Key Takeaways ",-1)),l[44]||(l[44]=t("p",{class:"text-gray-500 mb-2 text-lg"},[t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[n("Functions make code "),t("b",null,"reusable and organized.")]),t("li",null,"Most real programmers rely heavily on functions.")])],-1))]),_:1}))}});export{L as default};

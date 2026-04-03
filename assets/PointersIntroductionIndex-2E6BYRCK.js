import{_ as f}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as n}from"./CodeBlock-v8De0bNZ.js";import{d as y,r as l,p as b,l as v,a as s,t as P,e,k as i,o as k}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const T={class:"text-gray-500 mb-2 text-lg"},A={class:"text-gray-500 mb-2 text-lg"},C={class:"text-gray-500 mb-2 text-lg"},w={class:"text-gray-500 mb-2 text-lg"},V={class:"text-gray-500 mb-2 text-lg"},O={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},D={class:"text-gray-500 mb-2 text-lg"},M="March 30, 2026",I=y({__name:"PointersIntroductionIndex",setup(B){const r=l(`
#include <stdio.h>

int main()
{
	int x = 10;
	int *ptr = &x;

	printf("Value of x: %d\\n", x);
	printf("Address of x: %p\\n", &x);
	printf("Pointer value (address): %p\\n", ptr);
	return 0;
`),o=l(`
int *ptr;
`),a=l(`
int x = 5;
int *ptr = &x;
`),d=l(`
#include <stdio.h>

int main()
{
	int x = 5;
	int *ptr = &x;

	printf("%d\\n", *ptr);
	return 0;
}
`),u=l(`
#include <stdio.h>

int main()
{
	int x = 10;
	int *ptr = &x;

	*ptr = 20;
	printf("x = %d\\n", x);
	return 0;
}
`),x=l(`
#include <stdio.h>

void changeValue(int *n)
{
	*n = 50;
}

int main()
{
	int x = 10;

	changeValue(&x);
	printf("x = %d\\n", x);
	return 0;
}
`),g=l(`
#include <stdio.h>

int main()
{
	int arr[3] = {1, 2, 3};
	int *ptr = arr;

	printf("%d\\n", *ptr);			 // 1
	printf("%d\\n", *(ptr + 1)); // 2
	printf("%d\\n", *(ptr + 2)); // 3

	return 0;
}
`),p=l(`
int *ptr;
*ptr = 10; // dangerous (random memory)
`),m=l(`
int x = 10;
int *ptr = x; // wrong
`);return(W,t)=>(k(),b(f,{title:"C Programming",link:"/c-programming-language"},{default:v(()=>[t[20]||(t[20]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Pointers in C",-1)),s("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+P(M)),t[21]||(t[21]=s("p",{class:"text-gray-500 mb-2 text-lg"}," Pointers are one of the most powerful features in C. They allow you to work directly with memory by storing the address of variables instead of just their values. ",-1)),t[22]||(t[22]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What is a Pointer? ",-1)),s("p",T,[t[0]||(t[0]=e(" A pointer is a variable that stores the memory address of another variable. ",-1)),i(n,{code:r.value,language:"c"},null,8,["code"]),t[1]||(t[1]=e(" Think of it like: ",-1)),t[2]||(t[2]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"x = the actual value (10)"),s("li",null,"&x = the address of x"),s("li",null,"ptr = stores that address")],-1))]),t[23]||(t[23]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Pointer Declaration ",-1)),s("p",A,[t[3]||(t[3]=e(" To declare a pointer, use *. ",-1)),i(n,{code:o.value,language:"c"},null,8,["code"]),t[4]||(t[4]=e(" This means: ",-1)),t[5]||(t[5]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"ptr is a pointer to an integer.")],-1))]),t[24]||(t[24]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Address of Operator (&) ",-1)),s("p",C,[t[6]||(t[6]=e(" The & operator gives the address of a variable. ",-1)),i(n,{code:a.value,language:"c"},null,8,["code"]),t[7]||(t[7]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,'&x = "Where is x stored in memory?"')],-1))]),t[25]||(t[25]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Dereferencing Operator (*) ",-1)),s("p",w,[t[8]||(t[8]=e(" The * operator is used to access the value stored at an address. ",-1)),i(n,{code:d.value,language:"c"},null,8,["code"]),t[9]||(t[9]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,'*ptr = "Go to that address and get the value"')],-1))]),t[26]||(t[26]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Modifying Values Using Pointers ",-1)),s("p",V,[t[10]||(t[10]=e(" Pointers can change the value of a variable directly. ",-1)),i(n,{code:u.value,language:"c"},null,8,["code"]),t[11]||(t[11]=e(" This is very useful in functions later. ",-1))]),t[27]||(t[27]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Pointers and Functions ",-1)),s("p",O,[t[12]||(t[12]=e(" Pointers allow functions to modify original variables. ",-1)),i(n,{code:x.value,language:"c"},null,8,["code"]),t[13]||(t[13]=e(" This is called pass by reference. ",-1))]),t[28]||(t[28]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Pointers and Arrays ",-1)),s("p",U,[t[14]||(t[14]=e(" Arrays and pointers are closely related. ",-1)),i(n,{code:g.value,language:"c"},null,8,["code"]),t[15]||(t[15]=e(" This array name ",-1)),t[16]||(t[16]=s("i",null,"arr",-1)),t[17]||(t[17]=e(" acts like a pointer to the first element. ",-1))]),t[29]||(t[29]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Pointers Matter ",-1)),t[30]||(t[30]=s("p",{class:"text-gray-500 mb-2 text-lg"},[e(" Pointers are used for: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Modifying variables inside functions."),s("li",null,"Working with arrays efficiently."),s("li",null,"Dynamic memory allocation (malloc)."),s("li",null,"Handling large data efficiently.")])],-1)),t[31]||(t[31]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Common Mistakes ",-1)),s("p",D,[t[18]||(t[18]=s("span",{class:"text-gray-800"},"Uninitialized pointers",-1)),i(n,{code:p.value,language:"c"},null,8,["code"]),t[19]||(t[19]=s("span",{class:"text-gray-800"},"Forgetting &",-1)),i(n,{code:m.value,language:"c"},null,8,["code"])]),t[32]||(t[32]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[33]||(t[33]=s("p",{class:"text-gray-500 mb-2 text-lg"},[s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Pointer = variable that stores an address"),s("li",null,"& = gets address"),s("li",null,"* = gets value at address"),s("li",null,"Can modify original variables."),s("li",null,"Useful for arrays and functions.")])],-1))]),_:1}))}});export{I as default};

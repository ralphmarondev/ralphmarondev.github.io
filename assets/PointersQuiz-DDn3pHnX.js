import{_ as T}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-jVFum5Vs.js";import{C as s}from"./CodeBlock-0PUBvTWf.js";import{O as i}from"./OutputBlock-CS2VfiLX.js";import{d as U,r as o,p as V,l as N,a as t,k as r,c as d,f as m,t as l,e as n,o as a}from"./index-DKpDr1dj.js";import"./Footer.vue_vue_type_script_setup_true_lang-DivT-Fsh.js";const O={class:"mt-3"},B={key:0,class:"mt-3"},R={class:"mt-3"},$={key:1,class:"mt-3"},q={class:"mt-3"},H={key:2,class:"mt-3"},j={class:"mt-3"},z={key:3,class:"mt-3"},Y={class:"mt-3"},M={key:4,class:"mt-3"},G="March 31, 2026",W=U({__name:"PointersQuiz",setup(I){const u=o(`
// Your code goes here
`),x=o(`
Enter a number: 10
Value of n: 10
Address of n: 0x....
Value using pointer: 10
`),p=o(!1),y=o(`
#include <stdio.h>

int main()
{
	int n;
	int *ptr;

	printf("Enter a number: ");
	scanf("%d", &n);

	ptr = &n;
	printf("Value of n: %d\\n", n);
	printf("Address of n: %p\\n", &n);
	printf("Value using pointer: %d\\n", *ptr);
	return 0;
}
`),b=o(!1),h=o(`
Enter a number: 5
Updated value: 15
`),w=o(`
#include <stdio.h>

int main()
{
	int n;
	int *ptr;

	printf("Enter a number: ");
	scanf("%d", &n);

	ptr = &n;
	*ptr = *ptr + 10;

	printf("Updated value: %d\\n", n);
	return 0;
}
`),g=o(!1),S=o(`
Enter two numbers: 3 7
After swap:
a = 7, b = 3
`),k=o(`
#include <stdio.h>

void swap(int *a, int *b)
{
	int temp = *a;
	*a = *b;
	*b = temp;
}

int main()
{
	int a, b;

	printf("Enter two numbers: ");
	scanf("%d %d", &a, &b);

	swap(&a, &b);

	printf("After swap:\\n");
	printf("a = %d, b = %d\\n", a, b);
	return 0;
}
`),v=o(!1),C=o(`
Enter number of elements: 3
Enter value 1: 5
Enter value 2: 10
Enter value 3: 15
Sum = 30
`),E=o(`
#include <stdio.h>

int main()
{
	int n, sum = 0;

	printf("Enter number of elements: ");
	scanf("%d", &n);

	int arr[n];
	int *ptr = arr;

	for(int i = 0; i < n; i++)
	{
		printf("Enter value %d: ", i + 1);
		scanf("%d", ptr + i);
	}

	for (int i = 0; i < n; i++)
	{
		sum += *(ptr + i);
	}

	printf("Sum = %d\\n", sum);
	return 0;
}
`),f=o(!1),A=o(`
Enter a number: 4
Square of 4 is 16
`),P=o(`
#include <stdio.h>

void square(int *n)
{
	*n = (*n) * (*n);
}

int main()
{
	int n, oldN;

	printf("Enter a number: ");
	scanf("%d", &n);

	oldN = n;
	square(&n);
	printf("Square of %d is %d\\n", oldN, n);
}
`);return(Q,e)=>(a(),V(T,{title:"C Programming",link:"/c-programming-language"},{default:N(()=>[e[5]||(e[5]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Programming Quiz: Pointers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated: "+l(G)),e[6]||(e[6]=t("p",{class:"text-gray-600 mb-6 text-lg"},[n(" In a hidden academy of programmers, students are finally introduced to one of the most powerful (and mysterious) tools in C - pointers! "),t("br"),n(" Unlike normal variables, pointers don't just store values... they store "),t("b",null,"where values live in memory."),n(),t("br"),n(" Mastering them means you can control data directly, efficiently, and like a true engineer. "),t("br"),n(" Your mission is to complete each task and prove that you think like a memory wizard. ")],-1)),e[7]||(e[7]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 1: The Memory Seer",-1)),e[8]||(e[8]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" A young apprentice has just discovered that every variable lives somewhere in memory. Curios, they ask you: "),t("br"),n(' "Can you show me not just the value... but where it lives?" '),t("br"),n(" Ask the user for a number and store it in "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),n(". "),t("br"),n(" Create a pointer that stores its address. "),t("br"),n(" Print: "),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[n("the value of "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"n")]),t("li",null,[n("the address of "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"n")]),t("li",null,"the value using the pointer")])],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[9]||(e[9]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:x.value},null,8,["output"]),t("div",O,[t("button",{onClick:e[0]||(e[0]=c=>p.value=!p.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},l(p.value?"Hide Solution":"Show Solution"),1)]),p.value?(a(),d("div",B,[r(s,{code:y.value,language:"c"},null,8,["code"])])):m("",!0),e[10]||(e[10]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 2: The Invisible Touch",-1)),e[11]||(e[11]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" A wizard challenges you: "),t("br"),n(' "Change the value... without touching the variable directly." '),t("br"),n(" Ask the user for a number. "),t("br"),n(" Use a pointer to add 10 to the value. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[12]||(e[12]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:h.value},null,8,["output"]),t("div",R,[t("button",{onClick:e[1]||(e[1]=c=>b.value=!b.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},l(b.value?"Hide Solution":"Show Solution"),1)]),b.value?(a(),d("div",$,[r(s,{code:w.value,language:"c"},null,8,["code"])])):m("",!0),e[13]||(e[13]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 3: The Great Swap Spell",-1)),e[14]||(e[14]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" Two enchanted numbers have been mixed up, and only a proper spell can swap them back. "),t("br"),n(" The catch? "),t("br"),n(' "You must swap them using a function... without returning anything." '),t("br"),n(" Ask the user for two numbers. "),t("br"),n(" Use a function with pointers to swap their values. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[15]||(e[15]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:S.value},null,8,["output"]),t("div",q,[t("button",{onClick:e[2]||(e[2]=c=>g.value=!g.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},l(g.value?"Hide Solution":"Show Solution"),1)]),g.value?(a(),d("div",H,[r(s,{code:k.value,language:"c"},null,8,["code"])])):m("",!0),e[16]||(e[16]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 4: The Array Gatekeeper",-1)),e[17]||(e[17]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" You are guarding a vault of numbers. Each value must be stored and accessed carefully. "),t("br"),n(" A senior mage tells you: "),t("br"),n(' "Use pointers... not just arrays." '),t("br"),n(" Ask the user for the number of elements. "),t("br"),n(" Use a pointer to input values into an array and compute the total sum. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[18]||(e[18]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:C.value},null,8,["output"]),t("div",j,[t("button",{onClick:e[3]||(e[3]=c=>v.value=!v.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},l(v.value?"Hide Solution":"Show Solution"),1)]),v.value?(a(),d("div",z,[r(s,{code:E.value,language:"c"},null,8,["code"])])):m("",!0),e[19]||(e[19]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 5: The Power of Reference",-1)),e[20]||(e[20]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" A master programmer gives you a final challenge: "),t("br"),n(` "Create a function that doesn't return anything... yes still changes everything." `),t("br"),n(" Aks the user for a number. "),t("br"),n(" Create a function that squares the number using a pointer. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[21]||(e[21]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:A.value},null,8,["output"]),t("div",Y,[t("button",{onClick:e[4]||(e[4]=c=>f.value=!f.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},l(f.value?"Hide Solution":"Show Solution"),1)]),f.value?(a(),d("div",M,[r(s,{code:P.value,language:"c"},null,8,["code"])])):m("",!0)]),_:1}))}});export{W as default};

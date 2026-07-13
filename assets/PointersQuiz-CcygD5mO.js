import{_ as U}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BX7JLS4I.js";import{C as s}from"./CodeBlock-Du5Y_F6b.js";import{O as i}from"./OutputBlock-CIA53ZQ5.js";import{u as V}from"./cProgramming-CqS8EQI1.js";import{d as N,r as o,p as O,l as B,m as R,o as l,a as t,t as a,b as n,k as r,c as d,e as m}from"./index-BPX1bKrC.js";const $={class:"mt-3"},q={key:0,class:"mt-3"},H={class:"mt-3"},j={key:1,class:"mt-3"},z={class:"mt-3"},Y={key:2,class:"mt-3"},M={class:"mt-3"},G={key:3,class:"mt-3"},I={class:"mt-3"},Q={key:4,class:"mt-3"},D="March 31, 2026",_=N({__name:"PointersQuiz",setup(L){const x=V(),u=o(`
// Your code goes here
`),y=o(`
Enter a number: 10
Value of n: 10
Address of n: 0x....
Value using pointer: 10
`),p=o(!1),h=o(`
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
`),b=o(!1),w=o(`
Enter a number: 5
Updated value: 15
`),S=o(`
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
`),g=o(!1),k=o(`
Enter two numbers: 3 7
After swap:
a = 7, b = 3
`),C=o(`
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
`),v=o(!1),E=o(`
Enter number of elements: 3
Enter value 1: 5
Enter value 2: 10
Enter value 3: 15
Sum = 30
`),A=o(`
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
`),f=o(!1),P=o(`
Enter a number: 4
Square of 4 is 16
`),T=o(`
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
`);return(F,e)=>(l(),O(U,{title:"C Programming",navigation:R(x).sections},{default:B(()=>[e[5]||(e[5]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Programming Quiz: Pointers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated: "+a(D)),e[6]||(e[6]=t("p",{class:"text-gray-600 mb-6 text-lg"},[n(" In a hidden academy of programmers, students are finally introduced to one of the most powerful (and mysterious) tools in C - pointers! "),t("br"),n(" Unlike normal variables, pointers don't just store values... they store "),t("b",null,"where values live in memory."),n(),t("br"),n(" Mastering them means you can control data directly, efficiently, and like a true engineer. "),t("br"),n(" Your mission is to complete each task and prove that you think like a memory wizard. ")],-1)),e[7]||(e[7]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 1: The Memory Seer",-1)),e[8]||(e[8]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" A young apprentice has just discovered that every variable lives somewhere in memory. Curios, they ask you: "),t("br"),n(' "Can you show me not just the value... but where it lives?" '),t("br"),n(" Ask the user for a number and store it in "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),n(". "),t("br"),n(" Create a pointer that stores its address. "),t("br"),n(" Print: "),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[n("the value of "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"n")]),t("li",null,[n("the address of "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"n")]),t("li",null,"the value using the pointer")])],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[9]||(e[9]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:y.value},null,8,["output"]),t("div",$,[t("button",{onClick:e[0]||(e[0]=c=>p.value=!p.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(p.value?"Hide Solution":"Show Solution"),1)]),p.value?(l(),d("div",q,[r(s,{code:h.value,language:"c"},null,8,["code"])])):m("",!0),e[10]||(e[10]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 2: The Invisible Touch",-1)),e[11]||(e[11]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" A wizard challenges you: "),t("br"),n(' "Change the value... without touching the variable directly." '),t("br"),n(" Ask the user for a number. "),t("br"),n(" Use a pointer to add 10 to the value. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[12]||(e[12]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:w.value},null,8,["output"]),t("div",H,[t("button",{onClick:e[1]||(e[1]=c=>b.value=!b.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(b.value?"Hide Solution":"Show Solution"),1)]),b.value?(l(),d("div",j,[r(s,{code:S.value,language:"c"},null,8,["code"])])):m("",!0),e[13]||(e[13]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 3: The Great Swap Spell",-1)),e[14]||(e[14]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" Two enchanted numbers have been mixed up, and only a proper spell can swap them back. "),t("br"),n(" The catch? "),t("br"),n(' "You must swap them using a function... without returning anything." '),t("br"),n(" Ask the user for two numbers. "),t("br"),n(" Use a function with pointers to swap their values. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[15]||(e[15]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:k.value},null,8,["output"]),t("div",z,[t("button",{onClick:e[2]||(e[2]=c=>g.value=!g.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(g.value?"Hide Solution":"Show Solution"),1)]),g.value?(l(),d("div",Y,[r(s,{code:C.value,language:"c"},null,8,["code"])])):m("",!0),e[16]||(e[16]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 4: The Array Gatekeeper",-1)),e[17]||(e[17]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" You are guarding a vault of numbers. Each value must be stored and accessed carefully. "),t("br"),n(" A senior mage tells you: "),t("br"),n(' "Use pointers... not just arrays." '),t("br"),n(" Ask the user for the number of elements. "),t("br"),n(" Use a pointer to input values into an array and compute the total sum. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[18]||(e[18]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:E.value},null,8,["output"]),t("div",M,[t("button",{onClick:e[3]||(e[3]=c=>v.value=!v.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(v.value?"Hide Solution":"Show Solution"),1)]),v.value?(l(),d("div",G,[r(s,{code:A.value,language:"c"},null,8,["code"])])):m("",!0),e[19]||(e[19]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 5: The Power of Reference",-1)),e[20]||(e[20]=t("p",{class:"text-gray-500 mb-4 text-lg"},[n(" A master programmer gives you a final challenge: "),t("br"),n(` "Create a function that doesn't return anything... yes still changes everything." `),t("br"),n(" Aks the user for a number. "),t("br"),n(" Create a function that squares the number using a pointer. ")],-1)),r(s,{code:u.value,language:"c"},null,8,["code"]),e[21]||(e[21]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),r(i,{output:P.value},null,8,["output"]),t("div",I,[t("button",{onClick:e[4]||(e[4]=c=>f.value=!f.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(f.value?"Hide Solution":"Show Solution"),1)]),f.value?(l(),d("div",Q,[r(s,{code:T.value,language:"c"},null,8,["code"])])):m("",!0)]),_:1},8,["navigation"]))}});export{_ as default};

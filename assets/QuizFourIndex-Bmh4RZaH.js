import{_ as B}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-BBZabq2u.js";import{_ as F}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-lkP72EWw.js";import{C as r}from"./CodeBlock-Dd1mP4ad.js";import{O as i}from"./OutputBlock-CDn1Z-J2.js";import{d as z,r as o,p as H,l as R,a as e,k as n,c as u,f as d,t as s,e as l,o as a}from"./index-CHxIOmuf.js";import"./Footer.vue_vue_type_script_setup_true_lang-DA2rbS9c.js";const U={class:"mt-3"},V={key:0,class:"mt-3"},N={class:"mt-3"},q={key:1,class:"mt-3"},L={class:"mt-3"},M={key:2,class:"mt-3"},D={class:"mt-3"},Q={key:3,class:"mt-3"},j={class:"mt-3"},K={key:4,class:"mt-3"},G="February 16, 2026",nt=z({__name:"QuizFourIndex",setup(J){const x=o(`
// Your code goes here
`),v=o(`
Enter a number: 5
Counting up to 5:
1
2
3
4
5
`),p=o(!1),h=o(`
#include <stdio.h>

int main()
{
	int n;

	printf("Enter a number: ");
	scanf("%d", &n);

	printf("Counting up to %d:\\n", n);

	for(int i = 1; i <= n; i++)
	{
		printf("%d\\n", i);
	}
	return 0;
}
`),y=o(`
// Your code goes here
`),k=o(`
Enter a number: 4
Factorial of 4 is 24
`),c=o(!1),S=o(`
#include <stdio.h>

int main()
{
	int n;
	long long factorial = 1;

	printf("Enter a number: ");
	scanf("%d", &n);

	for(int i = 1; i <= n; i++)
	{
		factorial *= i;
	}
	printf("Factorial of %d is %lld", n, factorial);
	return 0;
}
`),w=o(`
// Your code goes here
`),C=o(`
Enter number of students: 3
Enter score for student 1: 80
Enter score for student 2: 90
Enter score for student 3: 75
Average score = 81.666667
`),g=o(!1),E=o(`
#include <stdio.h>

int main()
{
	int n, score;
	float total = 0, average;

	printf("Enter number of students: ");
	scanf("%d", &n);

	for(int i = 1; i <= n; i++)
	{
		printf("Enter score for student %d: ", i);
		scanf("%d", &score);
		total += score;
	}
	average = total / n;
	printf("Average score = %f", average);
	return 0;
}
`),A=o(`
// Your code goes here
`),T=o(`
Enter a number: 7
7 Multiplication Table:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
`),m=o(!1),O=o(`
#include <stdio.h>

int main()
{
	int n;

	printf("Enter a number: ");
	scanf("%d", &n);

	printf("%d Multiplication Table:\\n", n);
	for(int i = 1; i <= 10; i++)
	{
		printf("%d x %d\\n", n, i, n * i);
	}
	return 0;
}
`),P=o(`
// Your code goes here
`),Y=o(`
Enter n: 5
You are checking the first 5 numbers for even or odd:
1 is odd
2 is even
3 is odd
4 is even
5 is odd
`),b=o(!1),I=o(`
#include <stdio.h>

int main()
{
	int n;

	printf("Enter n: ");
	scanf("%d", &n);

	printf("You are checking the first %d numbers for even or odd:\\n", n);

	for(int i = 1; i <= n; i++)
	{
		if(i % 2 == 0)
			printf("%d is even\\n", i);
		else
			printf("%d is odd\\n", i);
	}
	retur n0;
}
`),$=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Identifiers",route:"/blog/c-identifiers"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditionals"},{title:"Loops",route:"/blog/c-loops"}];return(W,t)=>(a(),H(B,{title:"C Programming",link:"/c-programming-language"},{default:R(()=>[t[5]||(t[5]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Programming Quiz: Loops",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated: "+s(G)),t[6]||(t[6]=e("p",{class:"text-gray-600 mb-6 text-lg"}," In this quiz, you will use loops to automate repetitive tasks. Each problem is presented as a short story where you must repeat actions, calculate totals, or generate sequences. Follow the instructions carefully and print the output exactly as shown. ",-1)),t[7]||(t[7]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 1: Counting Up",-1)),t[8]||(t[8]=e("p",{class:"text-gray-500 mb-4 text-lg"},[l(" You are helping a young wizard apprentice practice counting spells. The master asks you to count up to a certain number provided by the apprentice. Use a "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"for loop"),l(" and a variable "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(" to read the number. Print each number on a new line until you reach the target. The apprentice will learn faster if the numbers are displayed one by one in order. ")],-1)),n(r,{code:x.value,language:"c"},null,8,["code"]),t[9]||(t[9]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:v.value},null,8,["output"]),e("div",U,[e("button",{onClick:t[0]||(t[0]=f=>p.value=!p.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},s(p.value?"Hide Solution":"Show Solution"),1)]),p.value?(a(),u("div",V,[n(r,{code:h.value,language:"c"},null,8,["code"])])):d("",!0),t[10]||(t[10]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 2: Factorial Calculator",-1)),t[11]||(t[11]=e("p",{class:"text-gray-500 mb-4 text-lg"},[l(" In the kingdom's math guild, scribes calculate factorials for magical rituals. Ask the user for a number "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(" and use a "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"for loop"),l(" to calculate the factorial. Print the result. The higher the factorial, the stronger the ritual! ")],-1)),n(r,{code:y.value,language:"c"},null,8,["code"]),t[12]||(t[12]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:k.value},null,8,["output"]),e("div",N,[e("button",{onClick:t[1]||(t[1]=f=>c.value=!c.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},s(c.value?"Hide Solution":"Show Solution"),1)]),c.value?(a(),u("div",q,[n(r,{code:S.value,language:"c"},null,8,["code"])])):d("",!0),t[13]||(t[13]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 3: Average Student Score",-1)),t[14]||(t[14]=e("p",{class:"text-gray-500 mb-4 text-lg"},[l(" You are a teacher in a school with a row of eager students. Ask for the number of students using "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(". Then, for each student, read their score into a variable "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"int score"),l(" and accumulate the total using a loop. After all inputs, calculate and print the average score. Your job is to encourage students by reporting their performance in a neat summary. ")],-1)),n(r,{code:w.value,language:"c"},null,8,["code"]),t[15]||(t[15]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:C.value},null,8,["output"]),e("div",L,[e("button",{onClick:t[2]||(t[2]=f=>g.value=!g.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},s(g.value?"Hide Solution":"Show Solution"),1)]),g.value?(a(),u("div",M,[n(r,{code:E.value,language:"c"},null,8,["code"])])):d("",!0),t[16]||(t[16]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 4: Multiplication Table",-1)),t[17]||(t[17]=e("p",{class:"text-gray-500 mb-4 text-lg"},[l(" A traveling merchant needs to prepare multiplication tables to teach apprentices. Ask the user for a number "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(" and print the multiplication table from 1 to 10 using a loop. Each line should clearly show the multiplier, multiplicand, and the result. The apprentices will use this table to memorize numbers quickly. ")],-1)),n(r,{code:A.value,language:"c"},null,8,["code"]),t[18]||(t[18]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:T.value},null,8,["output"]),e("div",D,[e("button",{onClick:t[3]||(t[3]=f=>m.value=!m.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},s(m.value?"Hide Solution":"Show Solution"),1)]),m.value?(a(),u("div",Q,[n(r,{code:O.value,language:"c"},null,8,["code"])])):d("",!0),t[19]||(t[19]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 5: Even-Odd Checker",-1)),t[20]||(t[20]=e("p",{class:"text-gray-500 mb-4 text-lg"},[l(" In a small village, a sage asks you to check whether the first few numbers are even or odd. Use a "),e("span",{class:"bg-pink-50 px-2 rounded-lg"},"for loop"),l(" and print each number with its type (even or odd). This will help young villagers learn patterns in numbers and prepare them for larger mathematical challenges. ")],-1)),n(r,{code:P.value,language:"c"},null,8,["code"]),t[21]||(t[21]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:Y.value},null,8,["output"]),e("div",j,[e("button",{onClick:t[4]||(t[4]=f=>b.value=!b.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},s(b.value?"Hide Solution":"Show Solution"),1)]),b.value?(a(),u("div",K,[n(r,{code:I.value,language:"c"},null,8,["code"])])):d("",!0),n(F,{links:$})]),_:1}))}});export{nt as default};

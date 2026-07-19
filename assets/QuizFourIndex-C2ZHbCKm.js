import{_ as $}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as r}from"./CodeBlock-Dq1Y_ZOo.js";import{O as i}from"./OutputBlock-3JjA_7_X.js";import{u as z}from"./cProgramming-MNohmiCX.js";import{d as H,r as o,p as R,l as U,m as I,o as s,a as t,t as a,b as l,k as n,c as u,e as d}from"./index-DzB2MRah.js";const N={class:"mt-3"},V={key:0,class:"mt-3"},q={class:"mt-3"},M={key:1,class:"mt-3"},L={class:"mt-3"},Q={key:2,class:"mt-3"},j={class:"mt-3"},D={key:3,class:"mt-3"},G={class:"mt-3"},J={key:4,class:"mt-3"},K="February 16, 2026",ne=H({__name:"QuizFourIndex",setup(W){const x=z(),v=o(`
// Your code goes here
`),h=o(`
Enter a number: 5
Counting up to 5:
1
2
3
4
5
`),p=o(!1),y=o(`
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
`),k=o(`
// Your code goes here
`),S=o(`
Enter a number: 4
Factorial of 4 is 24
`),m=o(!1),w=o(`
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
`),C=o(`
// Your code goes here
`),E=o(`
Enter number of students: 3
Enter score for student 1: 80
Enter score for student 2: 90
Enter score for student 3: 75
Average score = 81.666667
`),g=o(!1),A=o(`
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
`),P=o(`
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
`),c=o(!1),Y=o(`
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
`),O=o(`
// Your code goes here
`),B=o(`
Enter n: 5
You are checking the first 5 numbers for even or odd:
1 is odd
2 is even
3 is odd
4 is even
5 is odd
`),b=o(!1),F=o(`
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
`);return(X,e)=>(s(),R($,{title:"C Programming",navigation:I(x).sections},{default:U(()=>[e[5]||(e[5]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Programming Quiz: Loops",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated: "+a(K)),e[6]||(e[6]=t("p",{class:"text-gray-600 mb-6 text-lg"}," In this quiz, you will use loops to automate repetitive tasks. Each problem is presented as a short story where you must repeat actions, calculate totals, or generate sequences. Follow the instructions carefully and print the output exactly as shown. ",-1)),e[7]||(e[7]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 1: Counting Up",-1)),e[8]||(e[8]=t("p",{class:"text-gray-500 mb-4 text-lg"},[l(" You are helping a young wizard apprentice practice counting spells. The master asks you to count up to a certain number provided by the apprentice. Use a "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"for loop"),l(" and a variable "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(" to read the number. Print each number on a new line until you reach the target. The apprentice will learn faster if the numbers are displayed one by one in order. ")],-1)),n(r,{code:v.value,language:"c"},null,8,["code"]),e[9]||(e[9]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:h.value},null,8,["output"]),t("div",N,[t("button",{onClick:e[0]||(e[0]=f=>p.value=!p.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(p.value?"Hide Solution":"Show Solution"),1)]),p.value?(s(),u("div",V,[n(r,{code:y.value,language:"c"},null,8,["code"])])):d("",!0),e[10]||(e[10]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 2: Factorial Calculator",-1)),e[11]||(e[11]=t("p",{class:"text-gray-500 mb-4 text-lg"},[l(" In the kingdom's math guild, scribes calculate factorials for magical rituals. Ask the user for a number "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(" and use a "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"for loop"),l(" to calculate the factorial. Print the result. The higher the factorial, the stronger the ritual! ")],-1)),n(r,{code:k.value,language:"c"},null,8,["code"]),e[12]||(e[12]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:S.value},null,8,["output"]),t("div",q,[t("button",{onClick:e[1]||(e[1]=f=>m.value=!m.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(m.value?"Hide Solution":"Show Solution"),1)]),m.value?(s(),u("div",M,[n(r,{code:w.value,language:"c"},null,8,["code"])])):d("",!0),e[13]||(e[13]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 3: Average Student Score",-1)),e[14]||(e[14]=t("p",{class:"text-gray-500 mb-4 text-lg"},[l(" You are a teacher in a school with a row of eager students. Ask for the number of students using "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(". Then, for each student, read their score into a variable "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int score"),l(" and accumulate the total using a loop. After all inputs, calculate and print the average score. Your job is to encourage students by reporting their performance in a neat summary. ")],-1)),n(r,{code:C.value,language:"c"},null,8,["code"]),e[15]||(e[15]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:E.value},null,8,["output"]),t("div",L,[t("button",{onClick:e[2]||(e[2]=f=>g.value=!g.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(g.value?"Hide Solution":"Show Solution"),1)]),g.value?(s(),u("div",Q,[n(r,{code:A.value,language:"c"},null,8,["code"])])):d("",!0),e[16]||(e[16]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 4: Multiplication Table",-1)),e[17]||(e[17]=t("p",{class:"text-gray-500 mb-4 text-lg"},[l(" A traveling merchant needs to prepare multiplication tables to teach apprentices. Ask the user for a number "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"int n"),l(" and print the multiplication table from 1 to 10 using a loop. Each line should clearly show the multiplier, multiplicand, and the result. The apprentices will use this table to memorize numbers quickly. ")],-1)),n(r,{code:P.value,language:"c"},null,8,["code"]),e[18]||(e[18]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:T.value},null,8,["output"]),t("div",j,[t("button",{onClick:e[3]||(e[3]=f=>c.value=!c.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(c.value?"Hide Solution":"Show Solution"),1)]),c.value?(s(),u("div",D,[n(r,{code:Y.value,language:"c"},null,8,["code"])])):d("",!0),e[19]||(e[19]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 5: Even-Odd Checker",-1)),e[20]||(e[20]=t("p",{class:"text-gray-500 mb-4 text-lg"},[l(" In a small village, a sage asks you to check whether the first few numbers are even or odd. Use a "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"for loop"),l(" and print each number with its type (even or odd). This will help young villagers learn patterns in numbers and prepare them for larger mathematical challenges. ")],-1)),n(r,{code:O.value,language:"c"},null,8,["code"]),e[21]||(e[21]=t("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),n(i,{output:B.value},null,8,["output"]),t("div",G,[t("button",{onClick:e[4]||(e[4]=f=>b.value=!b.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(b.value?"Hide Solution":"Show Solution"),1)]),b.value?(s(),u("div",J,[n(r,{code:F.value,language:"c"},null,8,["code"])])):d("",!0)]),_:1},8,["navigation"]))}});export{ne as default};

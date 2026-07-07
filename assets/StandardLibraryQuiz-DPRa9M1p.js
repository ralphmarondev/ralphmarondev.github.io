import{_ as k}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-Iid74Gt7.js";import{C as r}from"./CodeBlock-EK9_wzx3.js";import{O as b}from"./OutputBlock-Bt5idpCC.js";import{u as C}from"./cProgramming-CgDASWC3.js";import{d as T,r as o,p as E,l as A,m as P,o as u,a as e,t as m,b as n,k as l,c as p,e as g}from"./index-COhN-orq.js";const R={class:"mt-3"},B={key:0,class:"mt-3"},q={class:"mt-3"},L={key:1,class:"mt-3"},O={class:"mt-3"},I={key:2,class:"mt-3"},M="March 31, 2026",F=T({__name:"StandardLibraryQuiz",setup(N){const c=C(),d=o(`
// Your code goes here
`),x=o(`
Enter an integer: -10
Enter a float: -5.75
Absolute integer: 10
Absolute float: 5.75
`),s=o(!1),h=o(`
#include <stdio.h>

int main()
{
	int a;
	float b;

	printf("Enter an integer: ");
	scanf("%d", &a);

	printf("Enter a float: ");
	scanf("%f", &b);

	printf("Absolute integer: %d\\n", abs(a));
	printf("Absolute float: %.2f\\n", fabs(b));

	return 0;
}
`),a=o(!1),v=o(`
Enter base: 2
Enter exponent: 3
2 raised to 3 = 8.00
Enter a number for square root: 16
Square root: 4.00
`),y=o(`
#include <stdio.h>
#include <math.h>

int main()
{
	double base, result;
	int exponent;
	double num;

	printf("Enter base: ");
	scanf("%lf", &base);

	printf("Enter exponent: ");
	scanf("%d", &exponent);

	result = pow(base, exponent);
	printf("%.0lf raised to %d = %.2lf\\n", base, exponent, result);

	printf("Enter a number for square root: ");
	scanf("%lf", &num);

	printf("Square root: %.2lf
", sqrt(num));
	return 0;
}
`),i=o(!1),S=o(`
Enter a number: 5.7
Ceil: 6
Floor: 5
Round: 6
`),w=o(`
#include <stdio.h>
#include <math.h>

int main()
{
	double num;

	printf("Enter a number: ");
	scanf("%lf", &num);

	printf("Ceil: %.0lf\\n", ceil(num));
	printf("Floor: %.0lf\\n", floor(num));
	printf("Round: %.0lf\\n", round(num));

	return 0;
}
`);return(U,t)=>(u(),E(k,{title:"C Programming",navigation:P(c).sections},{default:A(()=>[t[3]||(t[3]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Programming Quest: The Standard Library Awakens",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated: "+m(M)),t[4]||(t[4]=e("p",{class:"text-gray-600 mb-6 text-lg"},[n(" Deep within the world of C programming lies a powerful collection of tools known as the "),e("b",null,"Standard Library"),n(". "),e("br"),n(" Unlike basic syntax, these are ancient utilities crafted by master programmers long ago, designed to make computation faster, easier, and more powerful. "),e("br"),n(" But something has gone wrong... "),e("br"),n(" The Standard Library has been scattered across three regions: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"The Math Temple (<math.h>"),e("li",null,"The String Archives (<string.h>"),e("li",null,"The Utility Core (<stdlib.h>, <ctype.h>")]),n(" To restore balance, you must recover each ability and prove your mastery. ")],-1)),t[5]||(t[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 1: The Math Temple",-1)),t[6]||(t[6]=e("p",{class:"text-gray-500 mb-4 text-lg"},[n(" You enter the Math Temple where numbers float mysteriously. A guardian asks you: "),e("br"),n(' "Show me the true form of negative numbers!" Instructions: '),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Ask the user for a negative integer and a negative float."),e("li",null,"Print their absolute values.")])],-1)),l(r,{code:d.value,language:"c"},null,8,["code"]),t[7]||(t[7]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),l(b,{output:x.value},null,8,["output"]),e("div",R,[e("button",{onClick:t[0]||(t[0]=f=>s.value=!s.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},m(s.value?"Hide Solution":"Show Solution"),1)]),s.value?(u(),p("div",B,[l(r,{code:h.value,language:"c"},null,8,["code"])])):g("",!0),t[8]||(t[8]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 2: The Power Chamber",-1)),t[9]||(t[9]=e("p",{class:"text-gray-500 mb-4 text-lg"},[n(" In a chamber of energy, a voice tells you: "),e("br"),n(' "Raise numbers... and find their roots!" '),e("br"),n(" Instructions: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Ask the user for a base and exponent. Print the result of base ^ exponent."),e("li",null,"Ask the user for a number to compute its square root.")])],-1)),l(r,{code:d.value,language:"c"},null,8,["code"]),t[10]||(t[10]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),l(b,{output:v.value},null,8,["output"]),e("div",q,[e("button",{onClick:t[1]||(t[1]=f=>a.value=!a.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},m(a.value?"Hide Solution":"Show Solution"),1)]),a.value?(u(),p("div",L,[l(r,{code:y.value,language:"c"},null,8,["code"])])):g("",!0),t[11]||(t[11]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 3: The Rounding Trial",-1)),t[12]||(t[12]=e("p",{class:"text-gray-500 mb-4 text-lg"},[n(" You step into a hall where numbers are floating... but not whole "),e("br"),n(' "Round them wisely!" whispers a spirit. '),e("br"),n(" Instructions: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Ask the user for a floating-point number."),e("li",null,"Print its ceil, floor, and round.")])],-1)),l(r,{code:d.value,language:"c"},null,8,["code"]),t[13]||(t[13]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),l(b,{output:S.value},null,8,["output"]),e("div",O,[e("button",{onClick:t[2]||(t[2]=f=>i.value=!i.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},m(i.value?"Hide Solution":"Show Solution"),1)]),i.value?(u(),p("div",I,[l(r,{code:w.value,language:"c"},null,8,["code"])])):g("",!0)]),_:1},8,["navigation"]))}});export{F as default};

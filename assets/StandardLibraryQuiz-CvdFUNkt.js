import{_ as w}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-T_F0xssW.js";import{C as r}from"./CodeBlock-BawFMjar.js";import{O as b}from"./OutputBlock-X97pfRco.js";import{d as k,r as o,s as C,j as T,a as e,h as l,c as p,f as g,t as u,e as n,o as m}from"./index-V7ZTurBu.js";import"./Footer.vue_vue_type_script_setup_true_lang-X364togL.js";const E={class:"mt-3"},A={key:0,class:"mt-3"},P={class:"mt-3"},R={key:1,class:"mt-3"},B={class:"mt-3"},q={key:2,class:"mt-3"},L="March 31, 2026",H=k({__name:"StandardLibraryQuiz",setup(O){const d=o(`
// Your code goes here
`),c=o(`
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
`),a=o(!1),x=o(`
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
`),i=o(!1),v=o(`
Enter a number: 5.7
Ceil: 6
Floor: 5
Round: 6
`),S=o(`
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
`);return(I,t)=>(m(),C(w,{title:"C Programming",link:"/c-programming-language"},{default:T(()=>[t[3]||(t[3]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Programming Quest: The Standard Library Awakens",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated: "+u(L)),t[4]||(t[4]=e("p",{class:"text-gray-600 mb-6 text-lg"},[n(" Deep within the world of C programming lies a powerful collection of tools known as the "),e("b",null,"Standard Library"),n(". "),e("br"),n(" Unlike basic syntax, these are ancient utilities crafted by master programmers long ago, designed to make computation faster, easier, and more powerful. "),e("br"),n(" But something has gone wrong... "),e("br"),n(" The Standard Library has been scattered across three regions: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"The Math Temple (<math.h>"),e("li",null,"The String Archives (<string.h>"),e("li",null,"The Utility Core (<stdlib.h>, <ctype.h>")]),n(" To restore balance, you must recover each ability and prove your mastery. ")],-1)),t[5]||(t[5]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 1: The Math Temple",-1)),t[6]||(t[6]=e("p",{class:"text-gray-500 mb-4 text-lg"},[n(" You enter the Math Temple where numbers float mysteriously. A guardian asks you: "),e("br"),n(' "Show me the true form of negative numbers!" Instructions: '),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Ask the user for a negative integer and a negative float."),e("li",null,"Print their absolute values.")])],-1)),l(r,{code:d.value,language:"c"},null,8,["code"]),t[7]||(t[7]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),l(b,{output:c.value},null,8,["output"]),e("div",E,[e("button",{onClick:t[0]||(t[0]=f=>s.value=!s.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},u(s.value?"Hide Solution":"Show Solution"),1)]),s.value?(m(),p("div",A,[l(r,{code:h.value,language:"c"},null,8,["code"])])):g("",!0),t[8]||(t[8]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 2: The Power Chamber",-1)),t[9]||(t[9]=e("p",{class:"text-gray-500 mb-4 text-lg"},[n(" In a chamber of energy, a voice tells you: "),e("br"),n(' "Raise numbers... and find their roots!" '),e("br"),n(" Instructions: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Ask the user for a base and exponent. Print the result of base ^ exponent."),e("li",null,"Ask the user for a number to compute its square root.")])],-1)),l(r,{code:d.value,language:"c"},null,8,["code"]),t[10]||(t[10]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),l(b,{output:x.value},null,8,["output"]),e("div",P,[e("button",{onClick:t[1]||(t[1]=f=>a.value=!a.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},u(a.value?"Hide Solution":"Show Solution"),1)]),a.value?(m(),p("div",R,[l(r,{code:y.value,language:"c"},null,8,["code"])])):g("",!0),t[11]||(t[11]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"Problem 3: The Rounding Trial",-1)),t[12]||(t[12]=e("p",{class:"text-gray-500 mb-4 text-lg"},[n(" You step into a hall where numbers are floating... but not whole "),e("br"),n(' "Round them wisely!" whispers a spirit. '),e("br"),n(" Instructions: "),e("br"),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Ask the user for a floating-point number."),e("li",null,"Print its ceil, floor, and round.")])],-1)),l(r,{code:d.value,language:"c"},null,8,["code"]),t[13]||(t[13]=e("p",{class:"text-gray-500 mb-2 text-lg"},"Sample Run:",-1)),l(b,{output:v.value},null,8,["output"]),e("div",B,[e("button",{onClick:t[2]||(t[2]=f=>i.value=!i.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},u(i.value?"Hide Solution":"Show Solution"),1)]),i.value?(m(),p("div",q,[l(r,{code:S.value,language:"c"},null,8,["code"])])):g("",!0)]),_:1}))}});export{H as default};

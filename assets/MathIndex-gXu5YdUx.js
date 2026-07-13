import{_ as y}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BX7JLS4I.js";import{C as s}from"./CodeBlock-Du5Y_F6b.js";import{O as u}from"./OutputBlock-CIA53ZQ5.js";import{u as h}from"./cProgramming-CqS8EQI1.js";import{d as v,r as o,p as w,l as O,m as C,o as F,a as n,t as q,b as l,k as e}from"./index-BPX1bKrC.js";const R={class:"text-gray-500 mb-2 text-lg"},k={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},A={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},P="March 30, 2026",E=v({__name:"MathIndex",setup(T){const i=h(),a=o(`
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
	int num = - 10;
	double decimal = -5.75;

	printf("Absolute value of %d: %d\\n", num, abs(num));
	printf("Absolute value of %.2f: %.2f\\n", decimal, fabs(decimal));

	return 0;
}
`),r=o(`
Absolute value of -10: 10
Absolute value of -5.75 = 5.75
`),d=o(`
#include <stdio.h>
#include <math.h>

int main()
{
	double base = 2, exponent = 3;
	double number = 16;

	printf("%.0f raised to %.0f is %.0f\\n", base, exponent, pow(base, exponent));
	printf("Square root of %.0f is %.0f\\n", number, sqrt(number));

	return 0;
}
`),f=o(`
2 raised to 3 is 8
Square root of 16 is 4
`),m=o(`
#include <stdio.h>
#include <math.h>

int main()
{
	double num1 = 5.3, num2 = 5.7;

	printf("Ceil of %.1f: %.0f\\n", num1, ceil(num1));
	printf("Floor of %.1f: %.0f\\n", floor(num2));
	printf("Round of %.1f: %.0f\\n", round(num2));

	return 0;
}
`),p=o(`
Ceil of 5.3: 6
Floor of 5.7: 5
Round of 5.7: 6
`),g=o(`
#include <stdio.h>
#include <math.h>
#define PI 3.14159265

int main()
{
	double angleDeg = 30;
	double angleRad = angleDeg * PI / 180;

	printf("sin(%.0f) = %.2f\\n", angleDeg, sin(angleRad));
	printf("cos(%.0f) = %.2f\\n", angleDeg, cos(angleRad));
	printf("tan(%.0f) = %.2f\\n", angleDeg, tan(angleRad));

	return 0;
}
`),x=o(`
sin(30) = 0.50
cos(30) = 0.87
tan(30) = 0.58
`),b=o(`
#include <stdio.h>
#include <math.h>

int main()
{
	double num = 10;

	printf("Natural log of %.0f: %.2f\\n", num, log(num));
	printf("Base-10 log of %.0f: %.2f\\n", num, log10(num));
	printf("Exponential of 2: %.2f\\n", exp(2));
	return 0;
}
`),c=o(`
Natural log of 10: 2.30
Base-10 log of 10: 1.00
Exponential of 2: 7.39
`);return(D,t)=>(F(),w(y,{title:"C Programming",navigation:C(i).sections},{default:O(()=>[t[11]||(t[11]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Math Functions",-1)),n("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+q(P)),t[12]||(t[12]=n("p",{class:"text-gray-500 mb-2 text-lg"}," C provides a powerful set of mathematical functions in the <math.h> library. These functions help perform common operations like finding powers, roots, rounding, and trigonometry. In this tutorial, we will cover the most commonly used math functions with examples. ",-1)),t[13]||(t[13]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Absolute Value - abs() and fabs() ",-1)),n("p",R,[t[0]||(t[0]=l(" The abs() function returns the absolute value of an integer, while fabs() works for floating-point numbers. ",-1)),e(s,{code:a.value,language:"c"},null,8,["code"]),t[1]||(t[1]=l(" Output: ",-1)),e(u,{output:r.value},null,8,["output"])]),t[14]||(t[14]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Power and Square Root - pow() and sqrt() ",-1)),n("p",k,[t[2]||(t[2]=n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"pow(x, y) returns x^y (x raised to the power of y)"),n("li",null,"sqrt(x) returns the square root of x")],-1)),e(s,{code:d.value,language:"c"},null,8,["code"]),t[3]||(t[3]=l(" Output: ",-1)),e(u,{output:f.value},null,8,["output"])]),t[15]||(t[15]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rounding Functions - ceil(), floor(), round() ",-1)),n("p",S,[t[4]||(t[4]=n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"ceil(x) = rounds x up to the nearest integer."),n("li",null,"floor(x) = rounds x down to the nearest integer."),n("li",null,"round(x) = rounds x to the nearest integer.")],-1)),e(s,{code:m.value,language:"c"},null,8,["code"]),t[5]||(t[5]=l(" Output: ",-1)),e(u,{output:p.value},null,8,["output"])]),t[16]||(t[16]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Trigonometric Functions - sin(), cos(), tan() ",-1)),n("p",A,[t[6]||(t[6]=l(" Trigonometric functions in C work with radians, not degrees. You can convert degrees to radians by muliplying with pi/180. ",-1)),e(s,{code:g.value,language:"c"},null,8,["code"]),t[7]||(t[7]=l(" Output: ",-1)),e(u,{output:x.value},null,8,["output"]),t[8]||(t[8]=l(" Tip: Use M_PI from <math.h> if your compiler supports it instead of defining PI manually. ",-1))]),t[17]||(t[17]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Other Useful Functions ",-1)),n("p",B,[t[9]||(t[9]=n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"log(x) = natural logarithm (lnx)"),n("li",null,"log10(x) = base-10 logarithm"),n("li",null,"exp(x) = e^x (exponential function"),n("li",null,"fabs(x) = absolute value for floats/doubles")],-1)),e(s,{code:b.value,language:"c"},null,8,["code"]),t[10]||(t[10]=l(" Output: ",-1)),e(u,{output:c.value},null,8,["output"])]),t[18]||(t[18]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[19]||(t[19]=n("p",{class:"text-gray-500 mb-2 text-lg"},[n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"Math functions in C are available through <math.h>."),n("li",null,"Key functions include: abs(), fabs(), pow(), sqrt(), ceil(), floor(), round(), sin(), cos(), tan(), log(), and exp(). "),n("li",null,"Trigonometric functions require radians.")])],-1))]),_:1},8,["navigation"]))}});export{E as default};

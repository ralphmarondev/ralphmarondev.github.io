import{_ as f}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as l}from"./CodeBlock-v8De0bNZ.js";import{O as r}from"./OutputBlock-BXue0EeJ.js";import{d as b,r as e,p as x,l as v,a as n,t as T,e as i,k as s,o as C}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const w={class:"text-gray-500 mb-2 text-lg"},O={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},k="March 30, 2026",R=b({__name:"TypeCastingAndUtilityIndex",setup(P){const o=e(`
#include <stdio.h>

int main()
{
	int a = 5;
	double b = 2.0;

	double result = a / b; // int is automatically promoted to double
	printf("Result: %.2f\\n", result);
	return 0;
}
`),u=e(`
#include <stdio.h>

int main()
{
	double num = 9.78;
	int integerPart;

	integerPart = (int)num; // explicitly convert double to int
	printf("Double: %.2f, After casting to int: %d\\n", num, integerPart);
	return 0;
}
`),a=e(`
#include <stdio.h>
#include <stdlib.h>

int main()
{
	printf("Hello, before exit!\\n");
	exit(0);
	printf("This will not be printed.\\n"); // won't execute
	return 0;
}
`),d=e(`
#include <stdio.h>
#include <stdlib.h>

int main()
{
	printf("Listing files in the directory:\\n");
	system("dir"); // On Windows, use "ls" on Linux/macOS
	return 0;
}
`),p=e(`
Listing files in the directory:
(file/folder list)
`),m=e(`
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
	srand(time(0)); // seed for random numbers
	printf("Random number: %d\\n", rand() % 100); // 0 - 99
	return 0;
}
`),g=e(`
#include <stdio.h>
#include <ctype.h>

int main()
{
	char ch = 'a';

	printf("Is '%c' a digit? %d\\n", ch, isdigit(ch));
	printf("Is '%c' a letter? %d\\n", ch, isalpha(ch));
	printf("Uppercase of '%c': %c\\n", ch, toupper(ch));
	printf("Lowercase of '%c': %c\\n", ch, tolower(ch));

	return 0;
}
`),y=e(`
Is 'a' a digit? 0
Is 'a' a letter? 1
Uppercase of 'a': A
Lowercase of 'Z': z
`);return(I,t)=>(C(),x(f,{title:"C Programming",link:"/c-programming-language"},{default:v(()=>[t[39]||(t[39]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C Typecasting and Utility Functions",-1)),n("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+T(k)),t[40]||(t[40]=n("p",{class:"text-gray-500 mb-2 text-lg"}," C provides tools for converting data types (typecasting) and utility functions to manage your program or process character. This tutorial explains how to use them effectively. ",-1)),t[41]||(t[41]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Typecasting in C ",-1)),n("p",w,[t[0]||(t[0]=i(" Typecasting is converting a value from one data type to another. It is useful when you want precise control over operations between different data types. ",-1)),t[1]||(t[1]=n("br",null,null,-1)),t[2]||(t[2]=n("span",{class:"text-gray-800"},"Implicit Typecasting",-1)),t[3]||(t[3]=i()),t[4]||(t[4]=n("br",null,null,-1)),t[5]||(t[5]=i(" C automatically converts a smaller type to a larger type (link int to float) during operations. ",-1)),s(l,{code:o.value,language:"c"},null,8,["code"]),t[6]||(t[6]=i(" Output: ",-1)),s(r,{output:"Result: 2.50"}),t[7]||(t[7]=n("span",{class:"text-gray-800"},"Explicit Typecasting",-1)),t[8]||(t[8]=i()),t[9]||(t[9]=n("br",null,null,-1)),t[10]||(t[10]=i(" You can manually convert a value using parentheses. ",-1)),s(l,{code:u.value,language:"c"},null,8,["code"]),t[11]||(t[11]=i(" Output: ",-1)),s(r,{output:"Double: 9.78, After casting to int: 9"}),t[12]||(t[12]=i(" Tip: Typecasting can also be used for operations like dividing integers but wanting floating-point result (float)a/b; ",-1))]),t[42]||(t[42]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Utility Functions - <stdlib.h> ",-1)),n("p",O,[t[13]||(t[13]=i(" C provides many handy functions for program control, random numbers, and memory. ",-1)),t[14]||(t[14]=n("br",null,null,-1)),t[15]||(t[15]=i(" Here are some common ones: ",-1)),t[16]||(t[16]=n("br",null,null,-1)),t[17]||(t[17]=n("span",{class:"text-gray-800"},"exit() - Terminate Program",-1)),t[18]||(t[18]=i()),t[19]||(t[19]=n("br",null,null,-1)),t[20]||(t[20]=i(" exit(status) terminates program immediately. ",-1)),t[21]||(t[21]=n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"0 usually means successful termination."),n("li",null,"Non-zero indicates an error.")],-1)),s(l,{code:a.value,language:"c"},null,8,["code"]),t[22]||(t[22]=i(" Output: ",-1)),s(r,{output:"Hello, before exit!"}),t[23]||(t[23]=n("span",{class:"text-gray-800"},"system() - Execute Shell Commands",-1)),t[24]||(t[24]=i()),t[25]||(t[25]=n("br",null,null,-1)),t[26]||(t[26]=i(" You can run system commands from C using system(). ",-1)),s(l,{code:d.value,language:"c"},null,8,["code"]),t[27]||(t[27]=i(" Output: ",-1)),s(r,{output:p.value},null,8,["output"]),t[28]||(t[28]=i(" Use system() carefully; it can be risky if user input is passed directly. ",-1)),t[29]||(t[29]=n("br",null,null,-1)),t[30]||(t[30]=n("span",{class:"text-gray-800"},"rand() and srand() - Random Numbers",-1)),t[31]||(t[31]=i()),t[32]||(t[32]=n("br",null,null,-1)),t[33]||(t[33]=i(" Generate pseudo-random numbers. ",-1)),s(l,{code:m.value,language:"c"},null,8,["code"]),t[34]||(t[34]=i(" Output: ",-1)),s(r,{output:"Random number: 67"}),t[35]||(t[35]=i(" Tip: srand(time(0)) ensures you get different random numbers each time program runs. ",-1))]),t[43]||(t[43]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Character Utility Functions - <ctype.h> ",-1)),n("p",U,[t[36]||(t[36]=i(" The <ctype.h> library provides functions for checking and transforming characters: ",-1)),s(l,{code:g.value,language:"c"},null,8,["code"]),t[37]||(t[37]=i(" Output: ",-1)),s(r,{output:y.value},null,8,["output"]),t[38]||(t[38]=i(" Tip: isalpha(), isdigit(), isspace(), isalnum() are all super useful when validating input. ",-1))]),t[44]||(t[44]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[45]||(t[45]=n("p",{class:"text-gray-500 mb-2 text-lg"},[n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"Typecasting: Convert values explicitly (int)num or rely on automatic conversions."),n("li",null,"Utility Fucntions: exit(), system(), rand(), srand() help control the program, generate random numbers, or run system commands. "),n("li",null,"Character Functions: <ctype.h> functions like isalpha(), isdigit(), toupper(), and tolower() help process and validate character data. ")])],-1))]),_:1}))}});export{R as default};

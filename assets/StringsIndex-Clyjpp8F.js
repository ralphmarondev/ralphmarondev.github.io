import{_ as m}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as e}from"./CodeBlock-Dq1Y_ZOo.js";import{O as i}from"./OutputBlock-3JjA_7_X.js";import{u as c}from"./cProgramming-MNohmiCX.js";import{d as f,r as o,p as x,l as y,m as h,o as b,a as n,t as S,b as s,k as r}from"./index-DzB2MRah.js";const C={class:"text-gray-500 mb-2 text-lg"},v={class:"text-gray-500 mb-2 text-lg"},k={class:"text-gray-500 mb-2 text-lg"},w={class:"text-gray-500 mb-2 text-lg"},O={class:"text-gray-500 mb-2 text-lg"},T="March 30, 2026",D=f({__name:"StringsIndex",setup(B){const a=c(),l=o(`
#include <stdio.h>
#include <string.h>

int main()
{
	char str[] = "Hello World";

	printf("Length: %d\\n", strlen(str));
	return 0;
`),u=o(`
#include <stdio.h>
#include <string.h>

int main()
{
	char source[] = "Ralph";
	char destination[20];

	strcpy(destination, source);
	printf("Destination string: %s\\n", destination);
	return 0;
}
`),g=o(`
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[] = "Apple";
	char str2[] = "Orange";

	int result = strcmp(str1, str2);

	if(result == 0)
		printf("Both strings are equal.\\n");
	else if(result < 0)
		printf("%s comes before %s\\n", str1, str2);
	else
		printf("%s comes after %s\\n", str1, str2);

	return 0;
}
`),p=o(`
#include <stdio.h>
#include <string.h>

int main()
{
	char first[20] = "Hello";
	char second[20] = "World!";

	strcat(first, second);
	printf("Concatenated string: %s\\n", first);
	return 0;
}
`),d=o(`
#include <stdio.h>

void printString(char str[])
{
	printf("String: %s\\n", str);
}

int main()
{
	char myStr[] = "Hello Functions!";
	printString(myStr);
	return 0;
}
`);return(F,t)=>(b(),x(m,{title:"C Programming",navigation:h(a).sections},{default:y(()=>[t[15]||(t[15]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C String Functions",-1)),n("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+S(T)),t[16]||(t[16]=n("p",{class:"text-gray-500 mb-2 text-lg"}," Strings in C are arrays of characters ending with a null character '\\0'. The C Standard Library provides many functions to make working with strings easier. In this tutorial, we will cover the most important functions like length, copy, compare, and concatenation, plus a few extras to manipulate strings efficiently. ",-1)),t[17]||(t[17]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Length - strlen() ",-1)),n("p",C,[t[0]||(t[0]=s(" The strlen() function returns the number of characters in a string excluding the null character. ",-1)),r(e,{code:l.value,language:"c"},null,8,["code"]),t[1]||(t[1]=s(" Output: ",-1)),r(i,{output:"Length: 11"}),t[2]||(t[2]=s(" Note: strlen() counts only actual characters, not the '\\0' terminator. ",-1))]),t[18]||(t[18]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Copying Strings - strcpy() ",-1)),n("p",v,[t[3]||(t[3]=s(" The strcpy() function copies one string into another. Make sure the destination array is large enough to hold the copies string plus the null character. ",-1)),r(e,{code:u.value,language:"c"},null,8,["code"]),t[4]||(t[4]=s(" Output: ",-1)),r(i,{output:"Destination string: Ralph"}),t[5]||(t[5]=s(" Note: strlen() counts only actual characters, not the '\\0' terminator. ",-1))]),t[19]||(t[19]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Comparing Strings - strcmp() ",-1)),n("p",k,[t[6]||(t[6]=s(" The strcmp() function compares two strings lexicographically. ",-1)),t[7]||(t[7]=n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"Returns 0 if both strings are equal."),n("li",null,"Returns a positive value if the first string is greater."),n("li",null,"Returns a negative value if the first string is smaller.")],-1)),r(e,{code:g.value,language:"c"},null,8,["code"]),t[8]||(t[8]=s(" Output: ",-1)),r(i,{output:"Apple comes before Orange"})]),t[20]||(t[20]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Concatenating Strings - strcat() ",-1)),n("p",w,[t[9]||(t[9]=s(" The strcat() function appends one string to the end of another. ",-1)),t[10]||(t[10]=n("br",null,null,-1)),t[11]||(t[11]=s(" Make sure the destination array has enough space to hold the final combined string. ",-1)),r(e,{code:p.value,language:"c"},null,8,["code"]),t[12]||(t[12]=s(" Output: ",-1)),r(i,{output:"Concatenated string: Hello, World!"})]),t[21]||(t[21]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Passing Strings to Functions ",-1)),n("p",O,[t[13]||(t[13]=s(" You can pass strings to functions as you would pass arrays: ",-1)),r(e,{code:d.value,language:"c"},null,8,["code"]),t[14]||(t[14]=s(" Output: ",-1)),r(i,{output:"String: Hello Functions!"})]),t[22]||(t[22]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[23]||(t[23]=n("p",{class:"text-gray-500 mb-2 text-lg"},[n("ul",{class:"list-disc list-inside space-y-1"},[n("li",null,"Strings in C are arrays of characters terminated with '\\0'."),n("li",null,"Use <string.h> for string functions and <ctype.h> for character functions."),n("li",null,"Always ensure the destination arrays are large enough."),n("li",null,"Standard library functions make string manipulation easier: strlen(), strcpy(), strcmp(), strcat()")])],-1))]),_:1},8,["navigation"]))}});export{D as default};

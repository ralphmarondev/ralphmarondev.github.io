import{_ as r}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as u}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as d}from"./cSolvedProblems-CjgUliVp.js";import{d as c,r as s,p as g,l as o,m as f,o as b,a as t,t as x,k as n}from"./index-DzB2MRah.js";const y="March 31, 2026",N=c({__name:"CountDigits",setup(v){const i=d(),l=s(`
#include <stdio.h>

int main()
{
	int n, count = 0;

	printf("Enter n: ");
	scanf("%d", &n);

	while (n != 0)
	{
		n /= 10;
		count++;
	}

	printf("Number of digits: %d\\n", count);
	return 0;
}
`),a=s(`
Enter n: 12345
Number of digits: 5
`);return(C,e)=>(b(),g(r,{title:"C Programming",navigation:f(i).sections},{default:o(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Count Digits",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(y)),n(m,null,{default:o(()=>[...e[0]||(e[0]=[t("p",null," A number can be reduced step by step by removing its last digit. Each step represents one digit until the number becomes zero. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer value"),t("li",null,"Repeat while the number is not equal to 0"),t("li",null,"Remove the last digit using division by 10"),t("li",null,"Increase the digit counter each step"),t("li",null,"Display the total count")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),n(u,{code:l.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(p,{output:a.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{N as default};

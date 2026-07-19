import{_ as r}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as i}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as d}from"./cSolvedProblems-CjgUliVp.js";import{d as f,r as a,p as c,l as s,m as g,o as b,a as t,t as x,k as n}from"./index-DzB2MRah.js";const v="March 31, 2026",N=f({__name:"SumOfnNumbers",setup(y){const l=d(),o=a(`
#include <stdio.h>

int main()
{
	int n, temp, sum = 0;

	printf("Enter n: ");
	scanf("%d", &n);

	for (int i = 0; i < n; i++)
	{
		printf("Enter number %d: ", i + 1);
		scanf("%d", &temp);
		sum += temp;
	}
	printf("Sum of %d number: %d\\n", n, sum);
	return 0;
}
`),u=a(`
Enter n: 3
Enter number 1: 5
Enter number 2: 10
Enter number 3: 2
Sum of 3 number: 17
`);return(E,e)=>(b(),c(r,{title:"C Programming",navigation:g(l).sections},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of N Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(v)),n(m,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," Multiple values can be processed one at a time using repetition. Each value is added to a running total until all inputs are handled. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read the total count of numbers"),t("li",null,"Repeat input for each value using a loop"),t("li",null,"Add each value to the running sum"),t("li",null,"After the loop, display the total sum")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),n(i,{code:o.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(p,{output:u.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{N as default};

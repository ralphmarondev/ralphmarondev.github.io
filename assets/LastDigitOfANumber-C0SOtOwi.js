import{_ as r}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as d}from"./OutputBlock-3JjA_7_X.js";import{u as p}from"./cSolvedProblems-CjgUliVp.js";import{d as f,r as s,p as g,l as i,m as c,o as b,a as t,t as x,k as a}from"./index-DzB2MRah.js";const y="March 31, 2026",S=f({__name:"LastDigitOfANumber",setup(v){const l=p(),n=s(`
#include <stdio.h>

int main()
{
	int n, lastDigit;

	printf("Enter n: ");
	scanf("%d", &n);

	lastDigit = n % 10;
	printf("The last digit of %d is %d\\n", n, lastDigit);
	return 0;
}
`),o=s(`
Enter n: 12345
The last digit of 12345 is 5
`);return(_,e)=>(b(),g(r,{title:"C Programming",navigation:c(l).sections},{default:i(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Last Digit of a Number",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(y)),a(u,null,{default:i(()=>[...e[0]||(e[0]=[t("p",null," A number can be broken down into parts. The last digit can be obtained by isolating the remainder after division by 10. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer value"),t("li",null,"Compute the remainder when divided by 10"),t("li",null,"Store the result as the last digit"),t("li",null,"Display the result")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(m,{code:n.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(d,{output:o.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};

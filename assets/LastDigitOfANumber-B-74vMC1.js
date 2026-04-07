import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as r}from"./CodeBlock-D8cbajus.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as u}from"./OutputBlock-DBUi5rzu.js";import{d,r as s,p,l as i,a as t,k as a,t as f,o as g}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const c="March 31, 2026",v=d({__name:"LastDigitOfANumber",setup(b){const l=s(`
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
`),n=s(`
Enter n: 12345
The last digit of 12345 is 5
`);return(x,e)=>(g(),p(o,{title:"C Programming",link:"/c-common-programs"},{default:i(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Last Digit of a Number",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(c)),a(m,null,{default:i(()=>[...e[0]||(e[0]=[t("p",null," A number can be broken down into parts. The last digit can be obtained by isolating the remainder after division by 10. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read an integer value"),t("li",null,"Compute the remainder when divided by 10"),t("li",null,"Store the result as the last digit"),t("li",null,"Display the result")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Example Solution",-1)),a(r,{code:l.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),a(u,{output:n.value},null,8,["output"])]),_:1}))}});export{v as default};

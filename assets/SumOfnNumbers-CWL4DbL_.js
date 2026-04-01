import{_ as a}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-BBZabq2u.js";import{C as r}from"./CodeBlock-Dd1mP4ad.js";import{d as s,r as o,p as m,l as i,a as t,t as p,k as c,o as d}from"./index-CHxIOmuf.js";import"./Footer.vue_vue_type_script_setup_true_lang-DA2rbS9c.js";const l={class:"text-gray-500 mb-2 text-lg"},u="March 31, 2026",C=s({__name:"SumOfnNumbers",setup(f){const n=o(`
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
`);return(_,e)=>(d(),m(a,{title:"C Programming",link:"/c-common-programs"},{default:i(()=>[e[0]||(e[0]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of N Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+p(u)),t("p",l,[c(r,{code:n.value,language:"c"},null,8,["code"])])]),_:1}))}});export{C as default};

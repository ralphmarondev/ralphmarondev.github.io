import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-BBZabq2u.js";import{C as r}from"./CodeBlock-Dd1mP4ad.js";import{d as s,r as n,p as i,l,a as t,t as m,k as p,o as c}from"./index-CHxIOmuf.js";import"./Footer.vue_vue_type_script_setup_true_lang-DA2rbS9c.js";const d={class:"text-gray-500 mb-2 text-lg"},f="March 31, 2026",B=s({__name:"ComputeAOverB",setup(u){const e=n(`
#include <stdio.h>

int main()
{
	int a, b;

	printf("Enter a: ");
	scanf("%d", &a);

	printf("Enter b: ");
	scanf("%d", &b);

	if (b != 0)
		printf("Result: %d\\n", a / b);
	else
		printf("Invalid, division by 0\\n");
	return 0;
}
`);return(_,a)=>(c(),i(o,{title:"C Programming",link:"/c-common-programs"},{default:l(()=>[a[0]||(a[0]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Compute A / B",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+m(f)),t("p",d,[p(r,{code:e.value,language:"c"},null,8,["code"])])]),_:1}))}});export{B as default};

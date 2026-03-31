import{_ as s}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-T_F0xssW.js";import{C as o}from"./CodeBlock-BawFMjar.js";import{d as r,r as n,s as i,j as m,a as t,t as c,h as l,o as p}from"./index-V7ZTurBu.js";import"./Footer.vue_vue_type_script_setup_true_lang-X364togL.js";const d={class:"text-gray-500 mb-2 text-lg"},f="March 31, 2026",B=r({__name:"ComputeAOverB",setup(u){const e=n(`
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
`);return(_,a)=>(p(),i(s,{title:"C Programming",link:"/c-common-programs"},{default:m(()=>[a[0]||(a[0]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Compute A / B",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(f)),t("p",d,[l(o,{code:e.value,language:"c"},null,8,["code"])])]),_:1}))}});export{B as default};

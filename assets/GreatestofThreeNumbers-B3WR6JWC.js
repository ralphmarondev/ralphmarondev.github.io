import{_ as r}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-T_F0xssW.js";import{C as s}from"./CodeBlock-BawFMjar.js";import{d as n,r as o,s as m,j as i,a as t,t as c,h as d,o as f}from"./index-V7ZTurBu.js";import"./Footer.vue_vue_type_script_setup_true_lang-X364togL.js";const p={class:"text-gray-500 mb-2 text-lg"},l="March 31, 2026",y=n({__name:"GreatestofThreeNumbers",setup(x){const a=o(`
#include <stdio.h>

int main()
{
	int x, y, z, max;

	printf("Enter first number: ");
	scanf("%d", &x);

	printf("Enter second number: ");
	scanf("%d", &y);

	printf("Enter third number: ");
	scanf("%d", &z);

	max = x;
	if (y > max)
		max = y;
	if (z > max)
		max = z;

	printf("Greatest: %d\\n", max);
	return 0;
}
`);return(u,e)=>(f(),m(r,{title:"C Programming",link:"/c-common-programs"},{default:i(()=>[e[0]||(e[0]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Greatest of Three Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(l)),t("p",p,[d(s,{code:a.value,language:"c"},null,8,["code"])])]),_:1}))}});export{y as default};

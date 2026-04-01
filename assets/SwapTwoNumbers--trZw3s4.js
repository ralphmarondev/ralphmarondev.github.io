import{_ as r}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-jVFum5Vs.js";import{C as o}from"./CodeBlock-0PUBvTWf.js";import{d as s,r as n,p as m,l as p,a as t,t as i,k as c,o as d}from"./index-DKpDr1dj.js";import"./Footer.vue_vue_type_script_setup_true_lang-DivT-Fsh.js";const l={class:"text-gray-500 mb-2 text-lg"},x="March 31, 2026",k=s({__name:"SwapTwoNumbers",setup(f){const e=n(`
#include <stdio.h>

int main()
{
	int x, y;

	printf("Enter x: ");
	scanf("%d", &x);

	printf("Enter y: ");
	scanf("%d", &y);

	int temp = y;
	y = x;
	x = temp;

	printf("x: %d\\n", x);
	printf("y: %d\\n", y);
	return 0;
}
`);return(u,a)=>(d(),m(r,{title:"C Programming",link:"/c-common-programs"},{default:p(()=>[a[0]||(a[0]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Swap Two Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+i(x)),t("p",l,[c(o,{code:e.value,language:"c"},null,8,["code"])])]),_:1}))}});export{k as default};

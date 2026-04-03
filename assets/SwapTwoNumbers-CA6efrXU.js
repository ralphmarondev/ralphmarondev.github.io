import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as r}from"./CodeBlock-v8De0bNZ.js";import{_ as n}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{d as i,r as p,p as m,l as a,a as t,k as s,t as d,o as u}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const c="March 31, 2026",w=i({__name:"SwapTwoNumbers",setup(f){const l=p(`
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
`);return(x,e)=>(u(),m(o,{title:"C Programming",link:"/c-common-programs"},{default:a(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Swap Two Numbers",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(c)),s(n,null,{default:a(()=>[...e[0]||(e[0]=[t("p",null," Two values need to exchange places. To do this safely, we temporarily store one value so it won’t be lost during the swap. ",-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Process:",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Read two integer values"),t("li",null,"Store the second value in a temporary variable"),t("li",null,"Assign the first value to the second variable"),t("li",null,"Assign the temporary value to the first variable"),t("li",null,"Display the updated values")],-1)])]),_:1}),s(r,{code:l.value,language:"c"},null,8,["code"])]),_:1}))}});export{w as default};

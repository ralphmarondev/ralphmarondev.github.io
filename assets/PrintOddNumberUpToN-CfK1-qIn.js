import{_ as b}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as i}from"./CodeBlock-D8cbajus.js";import{O as g}from"./OutputBlock-DBUi5rzu.js";import{_ as x}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{_ as s}from"./Pill.vue_vue_type_script_setup_true_lang-BnUhuj3B.js";import{d as y,r,p as v,l as e,a as l,k as n,c as N,f as k,t as d,e as o,o as m}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const S={class:"mt-2 font-medium"},O={class:"list-inside space-y-1 mt-1"},w={class:"mt-3"},C={key:0,class:"mt-3"},B="April 3, 2026",D=y({__name:"PrintOddNumberUpToN",setup(P){const a=r(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),u=r(!1),p=r(`
#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Odd numbers up to %d:\\n", n);
    for(int i = 1; i <= n; i += 2) {
        printf("%d\\n", i);
    }

    return 0;
}
`),f=r(`
Enter a number: 10
Odd numbers up to 10:
1
3
5
7
9
`);return(T,t)=>(m(),v(b,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:e(()=>[t[23]||(t[23]=l("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Odd Numbers up to N",-1)),l("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(B)),n(x,null,{default:e(()=>[l("p",null,[t[2]||(t[2]=o(" The wizard wants to collect only the ",-1)),n(s,null,{default:e(()=>[...t[1]||(t[1]=[o("odd",-1)])]),_:1}),t[3]||(t[3]=o(" magical stones for a special potion. He must list all the odd numbers up to the number he chooses. ",-1))]),l("p",S,[t[7]||(t[7]=l("strong",null,"Task:",-1)),t[8]||(t[8]=o(" Print all ",-1)),n(s,null,{default:e(()=>[...t[4]||(t[4]=[o("odd numbers",-1)])]),_:1}),t[9]||(t[9]=o(" from ",-1)),n(s,null,{default:e(()=>[...t[5]||(t[5]=[o("1",-1)])]),_:1}),t[10]||(t[10]=o(" up to a number ",-1)),n(s,null,{default:e(()=>[...t[6]||(t[6]=[o("N",-1)])]),_:1}),t[11]||(t[11]=o(" entered by the user. ",-1))]),t[22]||(t[22]=l("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1)),l("ul",O,[l("li",null,[n(s,null,{default:e(()=>[...t[12]||(t[12]=[o("Input",-1)])]),_:1}),t[14]||(t[14]=o(" the maximum number ",-1)),n(s,null,{default:e(()=>[...t[13]||(t[13]=[o("N",-1)])]),_:1})]),l("li",null,[n(s,null,{default:e(()=>[...t[15]||(t[15]=[o("Start",-1)])]),_:1}),t[16]||(t[16]=o(" a loop from 1, incrementing by 2 each iteration",-1))]),l("li",null,[n(s,null,{default:e(()=>[...t[17]||(t[17]=[o("Print",-1)])]),_:1}),t[18]||(t[18]=o(" each number in the loop",-1))]),l("li",null,[t[20]||(t[20]=o("Stop the loop when you reach ",-1)),n(s,null,{default:e(()=>[...t[19]||(t[19]=[o("N",-1)])]),_:1}),t[21]||(t[21]=o(" or the last odd number before it",-1))])])]),_:1}),t[24]||(t[24]=l("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),n(i,{code:a.value,language:"c"},null,8,["code"]),t[25]||(t[25]=l("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),n(g,{output:f.value},null,8,["output"]),l("div",w,[l("button",{onClick:t[0]||(t[0]=V=>u.value=!u.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},d(u.value?"Hide Solution":"Show Solution"),1)]),u.value?(m(),N("div",C,[n(i,{code:p.value,language:"c"},null,8,["code"])])):k("",!0)]),_:1}))}});export{D as default};

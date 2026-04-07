import{_ as g}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as i}from"./CodeBlock-D8cbajus.js";import{O as b}from"./OutputBlock-DBUi5rzu.js";import{_ as x}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{_ as s}from"./Pill.vue_vue_type_script_setup_true_lang-BnUhuj3B.js";import{d as v,r,p as k,l as u,a as o,k as n,c as N,f as S,t as m,e as l,o as d}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const y={class:"mt-2 font-medium"},C={class:"list-inside space-y-1 mt-1"},w={class:"mt-3"},B={key:0,class:"mt-3"},O="April 3, 2026",Y=v({__name:"SumOfFirstNNumbers",setup(V){const f=r(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),e=r(!1),a=r(`
#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter a number: ");
    scanf("%d", &n);

    for(int i = 1; i <= n; i++) {
        sum += i;
    }

    printf("Sum of first %d numbers is %d\\n", n, sum);

    return 0;
}
`),p=r(`
Enter a number: 5
Sum of first 5 numbers is 15
`);return($,t)=>(d(),k(g,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:u(()=>[t[30]||(t[30]=o("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of First N Numbers",-1)),o("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+m(O)),n(x,null,{default:u(()=>[o("p",null,[t[3]||(t[3]=l(" Imagine a wizard counting magical coins to fill his treasure chest. He wants to know the total number of coins from ",-1)),n(s,null,{default:u(()=>[...t[1]||(t[1]=[l("1",-1)])]),_:1}),t[4]||(t[4]=l(" up to a number ",-1)),n(s,null,{default:u(()=>[...t[2]||(t[2]=[l("N",-1)])]),_:1}),t[5]||(t[5]=l(" he has found. ",-1))]),o("p",y,[t[8]||(t[8]=o("strong",null,"Task:",-1)),t[9]||(t[9]=l(" Calculate the ",-1)),n(s,null,{default:u(()=>[...t[6]||(t[6]=[l("sum",-1)])]),_:1}),t[10]||(t[10]=l(" of the first ",-1)),n(s,null,{default:u(()=>[...t[7]||(t[7]=[l("N",-1)])]),_:1}),t[11]||(t[11]=l(" natural numbers entered by the user. ",-1))]),t[29]||(t[29]=o("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1)),o("ul",C,[o("li",null,[n(s,null,{default:u(()=>[...t[12]||(t[12]=[l("Input",-1)])]),_:1}),t[14]||(t[14]=l(" the maximum number ",-1)),n(s,null,{default:u(()=>[...t[13]||(t[13]=[l("N",-1)])]),_:1})]),o("li",null,[t[17]||(t[17]=l("Initialize a ",-1)),n(s,null,{default:u(()=>[...t[15]||(t[15]=[l("sum",-1)])]),_:1}),t[18]||(t[18]=l(" variable to ",-1)),n(s,null,{default:u(()=>[...t[16]||(t[16]=[l("0",-1)])]),_:1})]),o("li",null,[t[22]||(t[22]=l("Use a ",-1)),n(s,null,{default:u(()=>[...t[19]||(t[19]=[l("loop",-1)])]),_:1}),t[23]||(t[23]=l(" from 1 to ",-1)),n(s,null,{default:u(()=>[...t[20]||(t[20]=[l("N",-1)])]),_:1}),t[24]||(t[24]=l(" and keep adding each number to ",-1)),n(s,null,{default:u(()=>[...t[21]||(t[21]=[l("sum",-1)])]),_:1})]),o("li",null,[t[27]||(t[27]=l("After the loop ends, ",-1)),n(s,null,{default:u(()=>[...t[25]||(t[25]=[l("print",-1)])]),_:1}),t[28]||(t[28]=l(" the final ",-1)),n(s,null,{default:u(()=>[...t[26]||(t[26]=[l("sum",-1)])]),_:1})])])]),_:1}),t[31]||(t[31]=o("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),n(i,{code:f.value,language:"c"},null,8,["code"]),t[32]||(t[32]=o("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),n(b,{output:p.value},null,8,["output"]),o("div",w,[o("button",{onClick:t[0]||(t[0]=E=>e.value=!e.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},m(e.value?"Hide Solution":"Show Solution"),1)]),e.value?(d(),N("div",B,[n(i,{code:a.value,language:"c"},null,8,["code"])])):S("",!0)]),_:1}))}});export{Y as default};

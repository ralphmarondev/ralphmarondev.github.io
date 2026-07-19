import{_ as b}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as x}from"./cSolvedProblems-CjgUliVp.js";import{C as i}from"./CodeBlock-Dq1Y_ZOo.js";import{O as v}from"./OutputBlock-3JjA_7_X.js";import{_ as S}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{_ as s}from"./Pill.vue_vue_type_script_setup_true_lang-CplrmR22.js";import{d as N,r,p as k,l as o,m as y,o as m,a as u,t as d,k as n,b as l,c as C,e as w}from"./index-DzB2MRah.js";const B={class:"mt-2 font-medium"},O={class:"list-inside space-y-1 mt-1"},V={class:"mt-3"},$={key:0,class:"mt-3"},E="April 3, 2026",G=N({__name:"SumOfFirstNNumbers",setup(H){const a=x(),f=r(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),e=r(!1),p=r(`
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
`),g=r(`
Enter a number: 5
Sum of first 5 numbers is 15
`);return(I,t)=>(m(),k(b,{title:"C Programming",navigation:y(a).sections},{default:o(()=>[t[30]||(t[30]=u("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of First N Numbers",-1)),u("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(E)),n(S,null,{default:o(()=>[u("p",null,[t[3]||(t[3]=l(" Imagine a wizard counting magical coins to fill his treasure chest. He wants to know the total number of coins from ",-1)),n(s,null,{default:o(()=>[...t[1]||(t[1]=[l("1",-1)])]),_:1}),t[4]||(t[4]=l(" up to a number ",-1)),n(s,null,{default:o(()=>[...t[2]||(t[2]=[l("N",-1)])]),_:1}),t[5]||(t[5]=l(" he has found. ",-1))]),u("p",B,[t[8]||(t[8]=u("strong",null,"Task:",-1)),t[9]||(t[9]=l(" Calculate the ",-1)),n(s,null,{default:o(()=>[...t[6]||(t[6]=[l("sum",-1)])]),_:1}),t[10]||(t[10]=l(" of the first ",-1)),n(s,null,{default:o(()=>[...t[7]||(t[7]=[l("N",-1)])]),_:1}),t[11]||(t[11]=l(" natural numbers entered by the user. ",-1))]),t[29]||(t[29]=u("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1)),u("ul",O,[u("li",null,[n(s,null,{default:o(()=>[...t[12]||(t[12]=[l("Input",-1)])]),_:1}),t[14]||(t[14]=l(" the maximum number ",-1)),n(s,null,{default:o(()=>[...t[13]||(t[13]=[l("N",-1)])]),_:1})]),u("li",null,[t[17]||(t[17]=l("Initialize a ",-1)),n(s,null,{default:o(()=>[...t[15]||(t[15]=[l("sum",-1)])]),_:1}),t[18]||(t[18]=l(" variable to ",-1)),n(s,null,{default:o(()=>[...t[16]||(t[16]=[l("0",-1)])]),_:1})]),u("li",null,[t[22]||(t[22]=l("Use a ",-1)),n(s,null,{default:o(()=>[...t[19]||(t[19]=[l("loop",-1)])]),_:1}),t[23]||(t[23]=l(" from 1 to ",-1)),n(s,null,{default:o(()=>[...t[20]||(t[20]=[l("N",-1)])]),_:1}),t[24]||(t[24]=l(" and keep adding each number to ",-1)),n(s,null,{default:o(()=>[...t[21]||(t[21]=[l("sum",-1)])]),_:1})]),u("li",null,[t[27]||(t[27]=l("After the loop ends, ",-1)),n(s,null,{default:o(()=>[...t[25]||(t[25]=[l("print",-1)])]),_:1}),t[28]||(t[28]=l(" the final ",-1)),n(s,null,{default:o(()=>[...t[26]||(t[26]=[l("sum",-1)])]),_:1})])])]),_:1}),t[31]||(t[31]=u("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),n(i,{code:f.value,language:"c"},null,8,["code"]),t[32]||(t[32]=u("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),n(v,{output:g.value},null,8,["output"]),u("div",V,[u("button",{onClick:t[0]||(t[0]=U=>e.value=!e.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},d(e.value?"Hide Solution":"Show Solution"),1)]),e.value?(m(),C("div",$,[n(i,{code:p.value,language:"c"},null,8,["code"])])):w("",!0)]),_:1},8,["navigation"]))}});export{G as default};

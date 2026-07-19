import{_ as g}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as b}from"./cSolvedProblems-CjgUliVp.js";import{C as r}from"./CodeBlock-Dq1Y_ZOo.js";import{O as v}from"./OutputBlock-3JjA_7_X.js";import{_ as y}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{_ as u}from"./Pill.vue_vue_type_script_setup_true_lang-CplrmR22.js";import{d as k,r as s,p as w,l as i,m as S,o as a,a as n,t as m,k as o,b as l,c as C,e as N}from"./index-DzB2MRah.js";const B={class:"mt-2 font-medium"},P={class:"list-inside space-y-1 mt-1"},M={class:"mt-3"},O={key:0,class:"mt-3"},T="April 3, 2026",G=k({__name:"MultiplicationTable",setup(V){const d=b(),p=s(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),e=s(!1),f=s(`
#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Multiplication table of %d:\\n", n);
    for(int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", n, i, n * i);
    }

    return 0;
}
`),x=s(`
Enter a number: 5
Multiplication table of 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
`);return($,t)=>(a(),w(g,{title:"C Programming",navigation:S(d).sections},{default:i(()=>[t[25]||(t[25]=n("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Multiplication Table",-1)),n("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+m(T)),o(y,null,{default:i(()=>[n("p",null,[t[4]||(t[4]=l(" Imagine a wizard teaching young apprentices how to cast **magic multiplications**. He wants to show the powers of a number ",-1)),o(u,null,{default:i(()=>[...t[1]||(t[1]=[l("N",-1)])]),_:1}),t[5]||(t[5]=l(" from ",-1)),o(u,null,{default:i(()=>[...t[2]||(t[2]=[l("1",-1)])]),_:1}),t[6]||(t[6]=l(" to ",-1)),o(u,null,{default:i(()=>[...t[3]||(t[3]=[l("10",-1)])]),_:1}),t[7]||(t[7]=l(" . ",-1))]),n("p",B,[t[9]||(t[9]=n("strong",null,"Task:",-1)),t[10]||(t[10]=l(" Print the ",-1)),o(u,null,{default:i(()=>[...t[8]||(t[8]=[l("multiplication table",-1)])]),_:1}),t[11]||(t[11]=l(" of a number entered by the user. ",-1))]),t[24]||(t[24]=n("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1)),n("ul",P,[n("li",null,[o(u,null,{default:i(()=>[...t[12]||(t[12]=[l("Input",-1)])]),_:1}),t[14]||(t[14]=l(" the number ",-1)),o(u,null,{default:i(()=>[...t[13]||(t[13]=[l("N",-1)])]),_:1})]),n("li",null,[t[16]||(t[16]=l("Use a ",-1)),o(u,null,{default:i(()=>[...t[15]||(t[15]=[l("loop",-1)])]),_:1}),t[17]||(t[17]=l(" from 1 to 10 ",-1))]),n("li",null,[t[19]||(t[19]=l("In each iteration, multiply ",-1)),o(u,null,{default:i(()=>[...t[18]||(t[18]=[l("N",-1)])]),_:1}),t[20]||(t[20]=l(" by the loop variable ",-1))]),n("li",null,[o(u,null,{default:i(()=>[...t[21]||(t[21]=[l("Print",-1)])]),_:1}),t[23]||(t[23]=l(" the result in the format: ",-1)),o(u,null,{default:i(()=>[...t[22]||(t[22]=[l("N x i = product",-1)])]),_:1})])])]),_:1}),t[26]||(t[26]=n("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),o(r,{code:p.value,language:"c"},null,8,["code"]),t[27]||(t[27]=n("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),o(v,{output:x.value},null,8,["output"]),n("div",M,[n("button",{onClick:t[0]||(t[0]=E=>e.value=!e.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},m(e.value?"Hide Solution":"Show Solution"),1)]),e.value?(a(),C("div",O,[o(r,{code:f.value,language:"c"},null,8,["code"])])):N("",!0)]),_:1},8,["navigation"]))}});export{G as default};

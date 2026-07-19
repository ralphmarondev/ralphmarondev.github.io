import{_ as x}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as b}from"./cSolvedProblems-CjgUliVp.js";import{C as i}from"./CodeBlock-Dq1Y_ZOo.js";import{O as v}from"./OutputBlock-3JjA_7_X.js";import{_ as y}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{_ as s}from"./Pill.vue_vue_type_script_setup_true_lang-CplrmR22.js";import{d as S,r as u,p as k,l as e,m as C,o as a,a as o,t as m,k as l,b as n,c as w,e as P}from"./index-DzB2MRah.js";const B={class:"mt-2 font-medium"},N={class:"list-inside space-y-1 mt-1"},O={class:"mt-3"},T={key:0,class:"mt-3"},V="April 3, 2026",L=S({__name:"PrintNumbersOneToTen",setup($){const d=b(),p=u(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),r=u(!1),f=u(`
#include <stdio.h>

int main()
{
    // Print numbers from 1 to 10
    for(int i = 1; i <= 10; i++)
    {
        printf("%d\\n", i);
    }
    return 0;
}
`),g=u(`
1
2
3
4
5
6
7
8
9
10
`);return(H,t)=>(a(),k(x,{title:"C Programming",navigation:C(d).sections},{default:e(()=>[t[19]||(t[19]=o("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Numbers 1 to 10",-1)),o("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+m(V)),l(y,null,{default:e(()=>[t[17]||(t[17]=o("p",null," Imagine a wizard counting magical crystals to power his spell. He wants to see each crystal number from 1 to 10 appear one by one. ",-1)),o("p",B,[t[4]||(t[4]=o("strong",null,"Task:",-1)),t[5]||(t[5]=n(" Print numbers from ",-1)),l(s,null,{default:e(()=>[...t[1]||(t[1]=[n("1",-1)])]),_:1}),t[6]||(t[6]=n(" to ",-1)),l(s,null,{default:e(()=>[...t[2]||(t[2]=[n("10",-1)])]),_:1}),t[7]||(t[7]=n(" using a ",-1)),l(s,null,{default:e(()=>[...t[3]||(t[3]=[n("for",-1)])]),_:1}),t[8]||(t[8]=n(" loop in C. ",-1))]),t[18]||(t[18]=o("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1)),o("ul",N,[o("li",null,[l(s,null,{default:e(()=>[...t[9]||(t[9]=[n("Initialize",-1)])]),_:1}),t[10]||(t[10]=n(" a loop counter starting at 1 ",-1))]),o("li",null,[l(s,null,{default:e(()=>[...t[11]||(t[11]=[n("Set",-1)])]),_:1}),t[12]||(t[12]=n(" the loop to run until the counter is 10 ",-1))]),o("li",null,[l(s,null,{default:e(()=>[...t[13]||(t[13]=[n("Print",-1)])]),_:1}),t[14]||(t[14]=n(" the counter in each iteration ",-1))]),o("li",null,[l(s,null,{default:e(()=>[...t[15]||(t[15]=[n("Increment",-1)])]),_:1}),t[16]||(t[16]=n(" the counter each time the loop runs ",-1))])])]),_:1}),t[20]||(t[20]=o("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),l(i,{code:p.value,language:"c"},null,8,["code"]),t[21]||(t[21]=o("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),l(v,{output:g.value},null,8,["output"]),o("div",O,[o("button",{onClick:t[0]||(t[0]=I=>r.value=!r.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},m(r.value?"Hide Solution":"Show Solution"),1)]),r.value?(a(),w("div",T,[l(i,{code:f.value,language:"c"},null,8,["code"])])):P("",!0)]),_:1},8,["navigation"]))}});export{L as default};

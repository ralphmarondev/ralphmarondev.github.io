import{_ as g}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as x}from"./cSolvedProblems-CjgUliVp.js";import{C as i}from"./CodeBlock-Dq1Y_ZOo.js";import{O as v}from"./OutputBlock-3JjA_7_X.js";import{_ as y}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{_ as s}from"./Pill.vue_vue_type_script_setup_true_lang-CplrmR22.js";import{d as N,r,p as S,l as e,m as k,o as m,a as n,t as d,k as l,b as o,c as C,e as O}from"./index-DzB2MRah.js";const w={class:"mt-2 font-medium"},B={class:"list-inside space-y-1 mt-1"},P={class:"mt-3"},T={key:0,class:"mt-3"},V="April 3, 2026",L=N({__name:"PrintOddNumberUpToN",setup($){const a=x(),p=r(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),u=r(!1),f=r(`
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
`),b=r(`
Enter a number: 10
Odd numbers up to 10:
1
3
5
7
9
`);return(E,t)=>(m(),S(g,{title:"C Programming",navigation:k(a).sections},{default:e(()=>[t[23]||(t[23]=n("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Odd Numbers up to N",-1)),n("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(V)),l(y,null,{default:e(()=>[n("p",null,[t[2]||(t[2]=o(" The wizard wants to collect only the ",-1)),l(s,null,{default:e(()=>[...t[1]||(t[1]=[o("odd",-1)])]),_:1}),t[3]||(t[3]=o(" magical stones for a special potion. He must list all the odd numbers up to the number he chooses. ",-1))]),n("p",w,[t[7]||(t[7]=n("strong",null,"Task:",-1)),t[8]||(t[8]=o(" Print all ",-1)),l(s,null,{default:e(()=>[...t[4]||(t[4]=[o("odd numbers",-1)])]),_:1}),t[9]||(t[9]=o(" from ",-1)),l(s,null,{default:e(()=>[...t[5]||(t[5]=[o("1",-1)])]),_:1}),t[10]||(t[10]=o(" up to a number ",-1)),l(s,null,{default:e(()=>[...t[6]||(t[6]=[o("N",-1)])]),_:1}),t[11]||(t[11]=o(" entered by the user. ",-1))]),t[22]||(t[22]=n("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1)),n("ul",B,[n("li",null,[l(s,null,{default:e(()=>[...t[12]||(t[12]=[o("Input",-1)])]),_:1}),t[14]||(t[14]=o(" the maximum number ",-1)),l(s,null,{default:e(()=>[...t[13]||(t[13]=[o("N",-1)])]),_:1})]),n("li",null,[l(s,null,{default:e(()=>[...t[15]||(t[15]=[o("Start",-1)])]),_:1}),t[16]||(t[16]=o(" a loop from 1, incrementing by 2 each iteration",-1))]),n("li",null,[l(s,null,{default:e(()=>[...t[17]||(t[17]=[o("Print",-1)])]),_:1}),t[18]||(t[18]=o(" each number in the loop",-1))]),n("li",null,[t[20]||(t[20]=o("Stop the loop when you reach ",-1)),l(s,null,{default:e(()=>[...t[19]||(t[19]=[o("N",-1)])]),_:1}),t[21]||(t[21]=o(" or the last odd number before it",-1))])])]),_:1}),t[24]||(t[24]=n("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),l(i,{code:p.value,language:"c"},null,8,["code"]),t[25]||(t[25]=n("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),l(v,{output:b.value},null,8,["output"]),n("div",P,[n("button",{onClick:t[0]||(t[0]=H=>u.value=!u.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},d(u.value?"Hide Solution":"Show Solution"),1)]),u.value?(m(),C("div",T,[l(i,{code:f.value,language:"c"},null,8,["code"])])):O("",!0)]),_:1},8,["navigation"]))}});export{L as default};

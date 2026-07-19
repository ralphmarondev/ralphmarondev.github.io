import{_ as g}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as v}from"./cSolvedProblems-CjgUliVp.js";import{C as i}from"./CodeBlock-Dq1Y_ZOo.js";import{O as x}from"./OutputBlock-3JjA_7_X.js";import{_ as y}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{_ as s}from"./Pill.vue_vue_type_script_setup_true_lang-CplrmR22.js";import{d as N,r,p as S,l,m as k,o as m,a as e,t as a,k as o,b as n,c as C,e as w}from"./index-DzB2MRah.js";const E={class:"mt-2 font-medium"},B={class:"list-inside space-y-1 mt-1"},P={class:"mt-3"},O={key:0,class:"mt-3"},T="April 3, 2026",L=N({__name:"PrintEvenNumbersUpToN",setup(V){const d=v(),p=r(`
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

	printf("Even numbers up to %d:\\n", n);
	for(int i = 2; i <= n; i += 2) {
	    printf("%d\\n", i);
	}
	return 0;
}
`),b=r(`
Enter a number: 10
Even numbers up to 10:
2
4
6
8
10
`);return($,t)=>(m(),S(g,{title:"C Programming",navigation:k(d).sections},{default:l(()=>[t[23]||(t[23]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Even Numbers up to N",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+a(T)),o(y,null,{default:l(()=>[e("p",null,[t[2]||(t[2]=n(" The wizard wants to collect only the ",-1)),o(s,null,{default:l(()=>[...t[1]||(t[1]=[n("even",-1)])]),_:1}),t[3]||(t[3]=n(" magical stones to fuel his potion. He needs to see all the even numbers up to the number he chooses. ",-1))]),e("p",E,[t[7]||(t[7]=e("strong",null,"Task:",-1)),t[8]||(t[8]=n(" Print all ",-1)),o(s,null,{default:l(()=>[...t[4]||(t[4]=[n("even numbers",-1)])]),_:1}),t[9]||(t[9]=n(" from ",-1)),o(s,null,{default:l(()=>[...t[5]||(t[5]=[n("1",-1)])]),_:1}),t[10]||(t[10]=n(" up to a number ",-1)),o(s,null,{default:l(()=>[...t[6]||(t[6]=[n("N",-1)])]),_:1}),t[11]||(t[11]=n(" entered by the user. ",-1))]),t[22]||(t[22]=e("p",{class:"mt-2 font-medium text-gray-700"},"Steps:",-1)),e("ul",B,[e("li",null,[o(s,null,{default:l(()=>[...t[12]||(t[12]=[n("Input",-1)])]),_:1}),t[14]||(t[14]=n(" the maximum number ",-1)),o(s,null,{default:l(()=>[...t[13]||(t[13]=[n("N",-1)])]),_:1})]),e("li",null,[o(s,null,{default:l(()=>[...t[15]||(t[15]=[n("Start",-1)])]),_:1}),t[16]||(t[16]=n(" a loop from 2, incrementing by 2 each iteration ",-1))]),e("li",null,[o(s,null,{default:l(()=>[...t[17]||(t[17]=[n("Print",-1)])]),_:1}),t[18]||(t[18]=n(" each number in the loop ",-1))]),e("li",null,[t[20]||(t[20]=n("Stop the loop when you reach ",-1)),o(s,null,{default:l(()=>[...t[19]||(t[19]=[n("N",-1)])]),_:1}),t[21]||(t[21]=n(" or the last even number before it ",-1))])])]),_:1}),t[24]||(t[24]=e("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),o(i,{code:p.value,language:"c"},null,8,["code"]),t[25]||(t[25]=e("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),o(x,{output:b.value},null,8,["output"]),e("div",P,[e("button",{onClick:t[0]||(t[0]=H=>u.value=!u.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(u.value?"Hide Solution":"Show Solution"),1)]),u.value?(m(),C("div",O,[o(i,{code:f.value,language:"c"},null,8,["code"])])):w("",!0)]),_:1},8,["navigation"]))}});export{L as default};

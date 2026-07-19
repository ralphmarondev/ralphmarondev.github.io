import{_ as v}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as b}from"./cSolvedProblems-CjgUliVp.js";import{C as u}from"./CodeBlock-Dq1Y_ZOo.js";import{O as y}from"./OutputBlock-3JjA_7_X.js";import{_ as x}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{_ as r}from"./Pill.vue_vue_type_script_setup_true_lang-CplrmR22.js";import{d as w,r as i,p as k,l as n,m as C,o as a,a as o,t as m,k as e,b as l,c as S,e as B}from"./index-DzB2MRah.js";const N={class:"mt-2 font-medium"},F={class:"list-inside space-y-1 mt-1"},O={class:"mt-3"},V={key:0,class:"mt-3"},$="April 3, 2026",I=w({__name:"FactorialOfANumber",setup(A){const d=b(),f=i(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),s=i(!1),p=i(`
#include <stdio.h>

int main()
{
    int n, factorial = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    if(n < 0)
    {
        printf("Factorial is not defined for negative numbers.\\n");
    }
    else
    {
        for(int i = 1; i <= n; i++)
        {
            factorial *= i;
        }
        printf("Factorial of %d is %d\\n", n, factorial);
    }
    return 0;
}
`),g=i(`
Enter a number: 5
Factorial of 5 is 120
`);return(E,t)=>(a(),k(v,{title:"C Programming",navigation:C(d).sections},{default:n(()=>[t[24]||(t[24]=o("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Factorial of a Number",-1)),o("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+m($)),e(x,null,{default:n(()=>[o("p",null,[t[2]||(t[2]=l(" A young wizard wants to create a magical tower that grows by multiplying levels. To calculate how many levels a tower will have after ",-1)),e(r,null,{default:n(()=>[...t[1]||(t[1]=[l("n",-1)])]),_:1}),t[3]||(t[3]=l(" spells, he needs your help. ",-1))]),o("p",N,[t[5]||(t[5]=o("strong",null,"Task:",-1)),t[6]||(t[6]=l(" Write a program to calculate the ",-1)),e(r,null,{default:n(()=>[...t[4]||(t[4]=[l("factorial",-1)])]),_:1}),t[7]||(t[7]=l(" of a number entered by the user. ",-1))]),t[23]||(t[23]=o("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1)),o("ul",F,[o("li",null,[e(r,null,{default:n(()=>[...t[8]||(t[8]=[l("Read",-1)])]),_:1}),t[9]||(t[9]=l(" the number from the user ",-1))]),o("li",null,[e(r,null,{default:n(()=>[...t[10]||(t[10]=[l("Check",-1)])]),_:1}),t[11]||(t[11]=l(" if the number is negative — factorial is not defined for negatives ",-1))]),o("li",null,[e(r,null,{default:n(()=>[...t[12]||(t[12]=[l("Initialize",-1)])]),_:1}),t[14]||(t[14]=l(" a variable ",-1)),e(r,null,{default:n(()=>[...t[13]||(t[13]=[l("factorial",-1)])]),_:1}),t[15]||(t[15]=l(" to 1 ",-1))]),o("li",null,[e(r,null,{default:n(()=>[...t[16]||(t[16]=[l("Use a loop",-1)])]),_:1}),t[19]||(t[19]=l(" from 1 to ",-1)),e(r,null,{default:n(()=>[...t[17]||(t[17]=[l("n",-1)])]),_:1}),t[20]||(t[20]=l(" and multiply each number to ",-1)),e(r,null,{default:n(()=>[...t[18]||(t[18]=[l("factorial",-1)])]),_:1})]),o("li",null,[e(r,null,{default:n(()=>[...t[21]||(t[21]=[l("Print",-1)])]),_:1}),t[22]||(t[22]=l(" the result ",-1))])])]),_:1}),t[25]||(t[25]=o("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),e(u,{code:f.value,language:"c"},null,8,["code"]),t[26]||(t[26]=o("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),e(y,{output:g.value},null,8,["output"]),o("div",O,[o("button",{onClick:t[0]||(t[0]=P=>s.value=!s.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},m(s.value?"Hide Solution":"Show Solution"),1)]),s.value?(a(),S("div",V,[e(u,{code:p.value,language:"c"},null,8,["code"])])):B("",!0)]),_:1},8,["navigation"]))}});export{I as default};

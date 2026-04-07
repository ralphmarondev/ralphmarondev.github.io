import{_ as g}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as u}from"./CodeBlock-D8cbajus.js";import{O as v}from"./OutputBlock-DBUi5rzu.js";import{_ as b}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{_ as r}from"./Pill.vue_vue_type_script_setup_true_lang-BnUhuj3B.js";import{d as y,r as i,p as x,l as n,a as o,k as e,c as w,f as k,t as a,e as l,o as m}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const C={class:"mt-2 font-medium"},S={class:"list-inside space-y-1 mt-1"},B={class:"mt-3"},N={key:0,class:"mt-3"},F="April 3, 2026",Y=y({__name:"FactorialOfANumber",setup(O){const d=i(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`),s=i(!1),f=i(`
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
`),p=i(`
Enter a number: 5
Factorial of 5 is 120
`);return(V,t)=>(m(),x(g,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:n(()=>[t[24]||(t[24]=o("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Factorial of a Number",-1)),o("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+a(F)),e(b,null,{default:n(()=>[o("p",null,[t[2]||(t[2]=l(" A young wizard wants to create a magical tower that grows by multiplying levels. To calculate how many levels a tower will have after ",-1)),e(r,null,{default:n(()=>[...t[1]||(t[1]=[l("n",-1)])]),_:1}),t[3]||(t[3]=l(" spells, he needs your help. ",-1))]),o("p",C,[t[5]||(t[5]=o("strong",null,"Task:",-1)),t[6]||(t[6]=l(" Write a program to calculate the ",-1)),e(r,null,{default:n(()=>[...t[4]||(t[4]=[l("factorial",-1)])]),_:1}),t[7]||(t[7]=l(" of a number entered by the user. ",-1))]),t[23]||(t[23]=o("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1)),o("ul",S,[o("li",null,[e(r,null,{default:n(()=>[...t[8]||(t[8]=[l("Read",-1)])]),_:1}),t[9]||(t[9]=l(" the number from the user ",-1))]),o("li",null,[e(r,null,{default:n(()=>[...t[10]||(t[10]=[l("Check",-1)])]),_:1}),t[11]||(t[11]=l(" if the number is negative — factorial is not defined for negatives ",-1))]),o("li",null,[e(r,null,{default:n(()=>[...t[12]||(t[12]=[l("Initialize",-1)])]),_:1}),t[14]||(t[14]=l(" a variable ",-1)),e(r,null,{default:n(()=>[...t[13]||(t[13]=[l("factorial",-1)])]),_:1}),t[15]||(t[15]=l(" to 1 ",-1))]),o("li",null,[e(r,null,{default:n(()=>[...t[16]||(t[16]=[l("Use a loop",-1)])]),_:1}),t[19]||(t[19]=l(" from 1 to ",-1)),e(r,null,{default:n(()=>[...t[17]||(t[17]=[l("n",-1)])]),_:1}),t[20]||(t[20]=l(" and multiply each number to ",-1)),e(r,null,{default:n(()=>[...t[18]||(t[18]=[l("factorial",-1)])]),_:1})]),o("li",null,[e(r,null,{default:n(()=>[...t[21]||(t[21]=[l("Print",-1)])]),_:1}),t[22]||(t[22]=l(" the result ",-1))])])]),_:1}),t[25]||(t[25]=o("p",{class:"mt-2 font-medium text-gray-700"},"Your Solution:",-1)),e(u,{code:d.value,language:"c"},null,8,["code"]),t[26]||(t[26]=o("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),e(v,{output:p.value},null,8,["output"]),o("div",B,[o("button",{onClick:t[0]||(t[0]=$=>s.value=!s.value),class:"px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},a(s.value?"Hide Solution":"Show Solution"),1)]),s.value?(m(),w("div",N,[e(u,{code:f.value,language:"c"},null,8,["code"])])):k("",!0)]),_:1}))}});export{Y as default};

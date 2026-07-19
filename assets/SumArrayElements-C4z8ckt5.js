import{_ as u}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as m}from"./cSolvedProblems-CjgUliVp.js";import{C as p}from"./CodeBlock-Dq1Y_ZOo.js";import{O as d}from"./OutputBlock-3JjA_7_X.js";import{_ as f}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{d as c,r as s,p as g,l,m as x,o as y,a as t,t as b,k as a,b as n}from"./index-DzB2MRah.js";const k="April 3, 2026",A=c({__name:"SumArrayElements",setup(h){const o=m(),r=s(`
#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    printf("Sum of array elements: %d\\n", sum);

    return 0;
}
`),i=s(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Sum of array elements: 150
`);return(_,e)=>(y(),g(u,{title:"C Programming",navigation:x(o).sections},{default:l(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of Array Elements",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+b(k)),a(f,null,{default:l(()=>[...e[0]||(e[0]=[t("p",null," A treasure hunter collects coins from different rooms in a dungeon. He wants to know the total amount he has gathered before leaving. ",-1),t("p",{class:"mt-2 font-medium"},[t("strong",null,"Task:"),n(" Read "),t("strong",null,"N numbers"),n(" into an array and calculate the "),t("strong",null,"sum of all elements"),n(". ")],-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),t("ul",{class:"list-inside space-y-1 mt-1"},[t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Read the number of coins "),t("code",null,"n")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Store the coin values in an array")]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Use a loop to add each coin to a "),t("code",null,"sum"),n(" variable")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Print the total sum at the end")])],-1)])]),_:1}),a(p,{code:r.value,language:"c"},null,8,["code"]),e[2]||(e[2]=t("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),a(d,{output:i.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{A as default};

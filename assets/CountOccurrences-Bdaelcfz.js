import{_ as i}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as m}from"./cSolvedProblems-CjgUliVp.js";import{C as p}from"./CodeBlock-Dq1Y_ZOo.js";import{O as c}from"./OutputBlock-3JjA_7_X.js";import{_ as d}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{d as f,r as a,p as g,l as s,m as b,o as x,a as t,t as y,k as r,b as n}from"./index-DzB2MRah.js";const k="April 3, 2026",S=f({__name:"CountOccurrences",setup(h){const o=m(),u=a(`
#include <stdio.h>

int main() {
    int n, target, count = 0;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the number to count occurrences: ");
    scanf("%d", &target);

    for(int i = 0; i < n; i++) {
        if(arr[i] == target) count++;
    }

    printf("Number %d occurs %d times in the array.\\n", target, count);

    return 0;
}
`),l=a(`
Enter the number of elements: 6
Enter 6 elements:
4 2 4 6 4 7
Enter the number to count occurrences: 4
Number 4 occurs 3 times in the array.
`);return(_,e)=>(x(),g(i,{title:"C Programming",navigation:b(o).sections},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Count Occurrences of a Number in Array",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+y(k)),r(d,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," You are keeping track of numbers entered by your friends in a game. Sometimes, the same number might appear multiple times. ",-1),t("p",{class:"mt-2 font-medium"},[t("strong",null,"Task:"),n(" Read "),t("strong",null,"N numbers"),n(" into an array and count how many times a "),t("strong",null,"specific number"),n(" occurs. ")],-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Inputs / Notes:",-1),t("ul",{class:"list-inside space-y-1 mt-1"},[t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Read the total number of elements "),t("code",null,"n")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Store "),t("code",null,"n"),n(" elements in an array")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Read the number to count occurrences")]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Use a loop to traverse the array and a counter variable to keep track")])],-1)])]),_:1}),r(p,{code:u.value,language:"c"},null,8,["code"]),e[2]||(e[2]=t("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),r(c,{output:l.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};

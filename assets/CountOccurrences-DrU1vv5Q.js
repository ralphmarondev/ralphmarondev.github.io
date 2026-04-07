import{_ as u}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as i}from"./CodeBlock-D8cbajus.js";import{O as m}from"./OutputBlock-DBUi5rzu.js";import{_ as p}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{d as c,r as a,p as d,l as s,a as t,k as r,t as f,e as n,o as g}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const b="April 3, 2026",O=c({__name:"CountOccurrences",setup(y){const o=a(`
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
`);return(k,e)=>(g(),d(u,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Count Occurrences of a Number in Array",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(b)),r(p,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," You are keeping track of numbers entered by your friends in a game. Sometimes, the same number might appear multiple times. ",-1),t("p",{class:"mt-2 font-medium"},[t("strong",null,"Task:"),n(" Read "),t("strong",null,"N numbers"),n(" into an array and count how many times a "),t("strong",null,"specific number"),n(" occurs. ")],-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Inputs / Notes:",-1),t("ul",{class:"list-inside space-y-1 mt-1"},[t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Read the total number of elements "),t("code",null,"n")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Store "),t("code",null,"n"),n(" elements in an array")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Read the number to count occurrences")]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Use a loop to traverse the array and a counter variable to keep track")])],-1)])]),_:1}),r(i,{code:o.value,language:"c"},null,8,["code"]),e[2]||(e[2]=t("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),r(m,{output:l.value},null,8,["output"])]),_:1}))}});export{O as default};

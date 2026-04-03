import{_ as u}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as i}from"./CodeBlock-v8De0bNZ.js";import{O as m}from"./OutputBlock-BXue0EeJ.js";import{_ as p}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{d,r as l,p as c,l as s,a as t,k as a,t as f,e as n,o as g}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const x="April 3, 2026",B=d({__name:"SumArrayElements",setup(y){const o=l(`
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
`),r=l(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Sum of array elements: 150
`);return(k,e)=>(g(),c(u,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:s(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of Array Elements",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(x)),a(p,null,{default:s(()=>[...e[0]||(e[0]=[t("p",null," A treasure hunter collects coins from different rooms in a dungeon. He wants to know the total amount he has gathered before leaving. ",-1),t("p",{class:"mt-2 font-medium"},[t("strong",null,"Task:"),n(" Read "),t("strong",null,"N numbers"),n(" into an array and calculate the "),t("strong",null,"sum of all elements"),n(". ")],-1),t("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),t("ul",{class:"list-inside space-y-1 mt-1"},[t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Read the number of coins "),t("code",null,"n")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Store the coin values in an array")]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Use a loop to add each coin to a "),t("code",null,"sum"),n(" variable")])]),t("li",null,[t("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Print the total sum at the end")])],-1)])]),_:1}),a(i,{code:o.value,language:"c"},null,8,["code"]),e[2]||(e[2]=t("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),a(m,{output:r.value},null,8,["output"])]),_:1}))}});export{B as default};

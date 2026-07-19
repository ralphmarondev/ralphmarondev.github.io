import{_ as p}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u}from"./cSolvedProblems-CjgUliVp.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{O as d}from"./OutputBlock-3JjA_7_X.js";import{_ as c}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{d as f,r as a,p as g,l as s,m as x,o as y,a as e,t as b,k as r,b as n}from"./index-DzB2MRah.js";const k="April 3, 2026",S=f({__name:"PrintArrayReverse",setup(v){const o=u(),l=a(`
#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Array elements in reverse order:\\n");
    for(int i = n - 1; i >= 0; i--) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
`),i=a(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Array elements in reverse order:
50 40 30 20 10
`);return(_,t)=>(y(),g(p,{title:"C Programming",navigation:x(o).sections},{default:s(()=>[t[1]||(t[1]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Array in Reverse",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+b(k)),r(c,null,{default:s(()=>[...t[0]||(t[0]=[e("p",null," A mischievous wizard wants to display the list of magical potions he collected, but in reverse order to confuse a rival apprentice. ",-1),e("p",{class:"mt-2 font-medium"},[e("strong",null,"Task:"),n(" Read "),e("strong",null,"N numbers"),n(" into an array and print all elements in "),e("strong",null,"reverse order"),n(". ")],-1),e("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),e("ul",{class:"list-inside space-y-1 mt-1"},[e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Read the number of potions "),e("code",null,"n")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Store the "),e("code",null,"n"),n(" potion powers in an array")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Use a loop to traverse the array backward")]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Print each element as you go")])],-1)])]),_:1}),r(m,{code:l.value,language:"c"},null,8,["code"]),t[2]||(t[2]=e("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),r(d,{output:i.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};

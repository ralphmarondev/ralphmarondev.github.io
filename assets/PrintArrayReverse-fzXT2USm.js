import{_ as i}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as p}from"./CodeBlock-v8De0bNZ.js";import{O as u}from"./OutputBlock-BXue0EeJ.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{d,r as a,p as c,l as s,a as e,k as r,t as f,e as n,o as g}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const y="April 3, 2026",B=d({__name:"PrintArrayReverse",setup(x){const l=a(`
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
`),o=a(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Array elements in reverse order:
50 40 30 20 10
`);return(k,t)=>(g(),c(i,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:s(()=>[t[1]||(t[1]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Print Array in Reverse",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(y)),r(m,null,{default:s(()=>[...t[0]||(t[0]=[e("p",null," A mischievous wizard wants to display the list of magical potions he collected, but in reverse order to confuse a rival apprentice. ",-1),e("p",{class:"mt-2 font-medium"},[e("strong",null,"Task:"),n(" Read "),e("strong",null,"N numbers"),n(" into an array and print all elements in "),e("strong",null,"reverse order"),n(". ")],-1),e("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),e("ul",{class:"list-inside space-y-1 mt-1"},[e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Read the number of potions "),e("code",null,"n")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[n("Store the "),e("code",null,"n"),n(" potion powers in an array")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Use a loop to traverse the array backward")]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Print each element as you go")])],-1)])]),_:1}),r(p,{code:l.value,language:"c"},null,8,["code"]),t[2]||(t[2]=e("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),r(u,{output:o.value},null,8,["output"])]),_:1}))}});export{B as default};

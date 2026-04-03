import{_ as i}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as p}from"./CodeBlock-v8De0bNZ.js";import{O as m}from"./OutputBlock-BXue0EeJ.js";import{_ as u}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{d,r as l,p as c,l as r,a as e,k as a,t as g,e as t,o as f}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const x="April 3, 2026",A=d({__name:"PrintArrayElements",setup(y){const s=l(`
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

    double average = (double)sum / n;
    printf("Average of array elements: %.2f\\n", average);

    return 0;
}
`),o=l(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Average of array elements: 30.00
`);return(k,n)=>(f(),c(i,{title:"C Programming",link:"/c-solved-loops-arrays"},{default:r(()=>[n[1]||(n[1]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Average of Array Elements",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+g(x)),a(u,null,{default:r(()=>[...n[0]||(n[0]=[e("p",null," The wizard Merlin is keeping track of magical gems he collects every day. Each gem has a power value, and he wants to know the overall strength of his collection. ",-1),e("p",{class:"mt-2 font-medium"},[e("strong",null,"Task:"),t(" Read "),e("strong",null,"N numbers"),t(" into an array representing the power of each gem and calculate the "),e("strong",null,"average of all elements"),t(". ")],-1),e("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),e("ul",{class:"list-inside space-y-1 mt-1"},[e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[t("Read the total number of gems "),e("code",null,"n")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[t("Store "),e("code",null,"n"),t(" power values in an array")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Sum all elements using a loop")]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[t("Use "),e("code",null,"type casting"),t(" to get an accurate decimal average")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Print the average with 2 decimal precision")])],-1)])]),_:1}),a(p,{code:s.value,language:"c"},null,8,["code"]),n[2]||(n[2]=e("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),a(m,{output:o.value},null,8,["output"])]),_:1}))}});export{A as default};

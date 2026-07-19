import{_ as p}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u}from"./cSolvedProblems-CjgUliVp.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{O as d}from"./OutputBlock-3JjA_7_X.js";import{_ as c}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{d as f,r,p as g,l as s,m as y,o as x,a as e,t as b,k as n,b as t}from"./index-DzB2MRah.js";const k="April 3, 2026",S=f({__name:"AverageArrayElements",setup(v){const l=u(),o=r(`
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
`),i=r(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Average of array elements: 30.00
`);return(h,a)=>(x(),g(p,{title:"C Programming",navigation:y(l).sections},{default:s(()=>[a[1]||(a[1]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Average of Array Elements",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+b(k)),n(c,null,{default:s(()=>[...a[0]||(a[0]=[e("p",null,[t(" A wizard collects magical crystals in different rooms of his tower. Before brewing a potion, he wants to know the "),e("b",null,"average power"),t(" of the crystals he has gathered. ")],-1),e("p",{class:"mt-2 font-medium"},[e("strong",null,"Task:"),t(" Read "),e("strong",null,"N numbers"),t(" into an array and calculate the "),e("strong",null,"average of all elements"),t(". ")],-1),e("p",{class:"mt-2 font-medium text-gray-700"},"Steps to follow:",-1),e("ul",{class:"list-inside space-y-1 mt-1"},[e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[t("Read the number of crystals "),e("code",null,"n")])]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Store the power of each crystal in an array")]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},"Sum all crystal powers using a loop")]),e("li",null,[e("span",{class:"bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg"},[t("Divide the total by "),e("code",null,"n"),t(" using type casting to get a precise average")])])],-1)])]),_:1}),n(m,{code:o.value,language:"c"},null,8,["code"]),a[2]||(a[2]=e("p",{class:"mt-2 font-medium text-gray-700"},"Sample Output:",-1)),n(d,{output:i.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{S as default};

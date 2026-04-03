import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as u}from"./CodeBlock-v8De0bNZ.js";import{_ as a}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{O as m}from"./OutputBlock-BXue0EeJ.js";import{d as p,r as n,p as f,l as s,a as t,k as e,t as d,e as l,o as g}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const b="March 31, 2026",v=p({__name:"FizzBuzzChallenge",setup(B){const r=n(`
#include <stdio.h>

int main() {
    for(int i = 1; i <= 30; i++) {
        if(i % 3 == 0 && i % 5 == 0)
            printf("FizzBuzz\\n");
        else if(i % 3 == 0)
            printf("Fizz\\n");
        else if(i % 5 == 0)
            printf("Buzz\\n");
        else
            printf("%d\\n", i);
    }
    return 0;
}
`),z=n(`
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
`);return(c,i)=>(g(),f(o,{title:"C Programming",link:"/c-common-programs"},{default:s(()=>[i[1]||(i[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"FizzBuzz Challenge",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(b)),e(a,null,{default:s(()=>[...i[0]||(i[0]=[t("p",null," The FizzBuzz challenge prints numbers from 1 to 30 (or any range) but: ",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,[l("Print "),t("strong",null,"Fizz"),l(" for numbers divisible by 3")]),t("li",null,[l("Print "),t("strong",null,"Buzz"),l(" for numbers divisible by 5")]),t("li",null,[l("Print "),t("strong",null,"FizzBuzz"),l(" for numbers divisible by both 3 and 5")]),t("li",null,"Otherwise, print the number itself")],-1)])]),_:1}),i[2]||(i[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),e(u,{code:r.value,language:"c"},null,8,["code"]),i[3]||(i[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),e(m,{output:z.value},null,8,["output"])]),_:1}))}});export{v as default};

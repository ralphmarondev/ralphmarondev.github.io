import{_ as a}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as u}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as p}from"./OutputBlock-3JjA_7_X.js";import{u as f}from"./cSolvedProblems-CjgUliVp.js";import{d,r as n,p as g,l as s,m as b,o as B,a as t,t as c,k as l,b as e}from"./index-DzB2MRah.js";const F="March 31, 2026",h=d({__name:"FizzBuzzChallenge",setup(x){const o=f(),r=n(`
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
`);return(y,i)=>(B(),g(a,{title:"C Programming",navigation:b(o).sections},{default:s(()=>[i[1]||(i[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"FizzBuzz Challenge",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(F)),l(m,null,{default:s(()=>[...i[0]||(i[0]=[t("p",null," The FizzBuzz challenge prints numbers from 1 to 30 (or any range) but: ",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,[e("Print "),t("strong",null,"Fizz"),e(" for numbers divisible by 3")]),t("li",null,[e("Print "),t("strong",null,"Buzz"),e(" for numbers divisible by 5")]),t("li",null,[e("Print "),t("strong",null,"FizzBuzz"),e(" for numbers divisible by both 3 and 5")]),t("li",null,"Otherwise, print the number itself")],-1)])]),_:1}),i[2]||(i[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),l(u,{code:r.value,language:"c"},null,8,["code"]),i[3]||(i[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),l(p,{output:z.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{h as default};

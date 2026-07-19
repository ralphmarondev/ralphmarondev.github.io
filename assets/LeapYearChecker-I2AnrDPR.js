import{_ as p}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as u}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as d}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as m}from"./OutputBlock-3JjA_7_X.js";import{u as y}from"./cSolvedProblems-CjgUliVp.js";import{d as c,r,p as f,l as s,m as g,o as h,a as e,t as b,k as t,b as l}from"./index-DzB2MRah.js";const x="March 31, 2026",E=c({__name:"LeapYearChecker",setup(k){const i=y(),n=r(`
#include <stdio.h>

int main()
{
    int year;
    printf("Enter a year: ");
    scanf("%d", &year);

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        printf("%d is a leap year\\n", year);
    else
        printf("%d is not a leap year\\n", year);

    return 0;
}
`),o=r(`
Enter a year: 2024
2024 is a leap year
`);return(C,a)=>(h(),f(p,{title:"C Programming",navigation:g(i).sections},{default:s(()=>[a[1]||(a[1]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Leap Year Checker",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+b(x)),t(d,null,{default:s(()=>[...a[0]||(a[0]=[e("p",null,[l(" Once upon a time, in a kingdom where calendars ruled the days, a wise programmer was asked by the king to find which years had an extra day in February. This magical day only appeared in "),e("strong",null,"leap years"),l(". Your task is to help the kingdom by writing a program that: ")],-1),e("ul",{class:"list-disc list-inside space-y-1 mt-1"},[e("li",null,"Prompts the user to enter a year"),e("li",null,"Checks the leap year rules:"),e("ul",{class:"list-disc list-inside ml-6 space-y-1"},[e("li",null,"A year divisible by 4 is a leap year"),e("li",null,"Except years divisible by 100 are not leap years"),e("li",null,"Unless the year is divisible by 400, then it is a leap year")]),e("li",null,"Displays whether the year has the magical extra day or not")],-1)])]),_:1}),a[2]||(a[2]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),t(u,{code:n.value,language:"c"},null,8,["code"]),a[3]||(a[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),t(m,{output:o.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{E as default};

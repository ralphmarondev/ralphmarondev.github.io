import{_ as o}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as p}from"./CodeBlock-D8cbajus.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-BME11E4-.js";import{O as d}from"./OutputBlock-DBUi5rzu.js";import{d as y,r,p as u,l as s,a as e,k as t,t as c,e as l,o as f}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const g="March 31, 2026",B=y({__name:"LeapYearChecker",setup(h){const i=r(`
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
`),n=r(`
Enter a year: 2024
2024 is a leap year
`);return(x,a)=>(f(),u(o,{title:"C Programming",link:"/c-common-programs"},{default:s(()=>[a[1]||(a[1]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Leap Year Checker",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+c(g)),t(m,null,{default:s(()=>[...a[0]||(a[0]=[e("p",null,[l(" Once upon a time, in a kingdom where calendars ruled the days, a wise programmer was asked by the king to find which years had an extra day in February. This magical day only appeared in "),e("strong",null,"leap years"),l(". Your task is to help the kingdom by writing a program that: ")],-1),e("ul",{class:"list-disc list-inside space-y-1 mt-1"},[e("li",null,"Prompts the user to enter a year"),e("li",null,"Checks the leap year rules:"),e("ul",{class:"list-disc list-inside ml-6 space-y-1"},[e("li",null,"A year divisible by 4 is a leap year"),e("li",null,"Except years divisible by 100 are not leap years"),e("li",null,"Unless the year is divisible by 400, then it is a leap year")]),e("li",null,"Displays whether the year has the magical extra day or not")],-1)])]),_:1}),a[2]||(a[2]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),t(p,{code:i.value,language:"c"},null,8,["code"]),a[3]||(a[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),t(d,{output:n.value},null,8,["output"])]),_:1}))}});export{B as default};

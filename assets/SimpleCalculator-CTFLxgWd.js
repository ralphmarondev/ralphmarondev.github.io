import{_ as i}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{_ as p}from"./TaskCard.vue_vue_type_script_setup_true_lang-BIBY6CMo.js";import{O as c}from"./OutputBlock-3JjA_7_X.js";import{u as f}from"./cSolvedProblems-CjgUliVp.js";import{d,r as l,p as g,l as a,m as b,o as x,a as t,t as k,k as r,b as n}from"./index-DzB2MRah.js";const y="March 31, 2026",P=d({__name:"SimpleCalculator",setup(v){const s=f(),o=l(`
#include <stdio.h>

int main()
{
    double num1, num2, result;
    char op;

    printf("Enter first number: ");
    scanf("%lf", &num1);

    printf("Enter an operator (+, -, *, /): ");
    scanf(" %c", &op);

    printf("Enter second number: ");
    scanf("%lf", &num2);

    switch(op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
            if(num2 != 0)
                result = num1 / num2;
            else {
                printf("Cannot divide by zero!\\n");
                return 0;
            }
            break;
        default:
            printf("Invalid operator!\\n");
            return 0;
    }

    printf("Result: %.2lf\\n", result);
    return 0;
}
`),u=l(`
Enter first number: 12
Enter an operator (+, -, *, /): *
Enter second number: 3
Result: 36.00
`);return(C,e)=>(x(),g(i,{title:"C Programming",navigation:b(s).sections},{default:a(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Simple Calculator",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+k(y)),r(p,null,{default:a(()=>[...e[0]||(e[0]=[t("p",null," Imagine a little wizard who wants to calculate magic potions' quantities quickly. Your task is to create a simple calculator that: ",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Prompts the user to input the first number"),t("li",null,[n("Asks for the operator: "),t("strong",null,"+"),n(", "),t("strong",null,"-"),n(", "),t("strong",null,"*"),n(", or "),t("strong",null,"/")]),t("li",null,"Prompts for the second number"),t("li",null,"Performs the calculation and prints the result"),t("li",null,"Handles division by zero gracefully and invalid operators")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),r(m,{code:o.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(c,{output:u.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{P as default};

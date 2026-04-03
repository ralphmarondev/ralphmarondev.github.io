import{_ as u}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-H05dFO26.js";import{C as i}from"./CodeBlock-v8De0bNZ.js";import{_ as m}from"./TaskCard.vue_vue_type_script_setup_true_lang-ArSqQYBk.js";import{O as p}from"./OutputBlock-BXue0EeJ.js";import{d as c,r as l,p as f,l as a,a as t,k as n,t as d,e as r,o as g}from"./index-wsbNYnid.js";import"./Footer.vue_vue_type_script_setup_true_lang-DH4TUafw.js";const b="March 31, 2026",w=c({__name:"SimpleCalculator",setup(k){const s=l(`
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
`),o=l(`
Enter first number: 12
Enter an operator (+, -, *, /): *
Enter second number: 3
Result: 36.00
`);return(x,e)=>(g(),f(u,{title:"C Programming",link:"/c-common-programs"},{default:a(()=>[e[1]||(e[1]=t("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Simple Calculator",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(b)),n(m,null,{default:a(()=>[...e[0]||(e[0]=[t("p",null," Imagine a little wizard who wants to calculate magic potions' quantities quickly. Your task is to create a simple calculator that: ",-1),t("ul",{class:"list-disc list-inside space-y-1 mt-1"},[t("li",null,"Prompts the user to input the first number"),t("li",null,[r("Asks for the operator: "),t("strong",null,"+"),r(", "),t("strong",null,"-"),r(", "),t("strong",null,"*"),r(", or "),t("strong",null,"/")]),t("li",null,"Prompts for the second number"),t("li",null,"Performs the calculation and prints the result"),t("li",null,"Handles division by zero gracefully and invalid operators")],-1)])]),_:1}),e[2]||(e[2]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Solution",-1)),n(i,{code:s.value,language:"c"},null,8,["code"]),e[3]||(e[3]=t("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(p,{output:o.value},null,8,["output"])]),_:1}))}});export{w as default};

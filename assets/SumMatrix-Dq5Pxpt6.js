import{_ as l}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as i}from"./cSolvedProblems-CjgUliVp.js";import{C as m}from"./CodeBlock-Dq1Y_ZOo.js";import{O as u}from"./OutputBlock-3JjA_7_X.js";import{d as p,r as n,p as d,l as f,m as c,o as g,a as e,t as x,k as r}from"./index-DzB2MRah.js";const b="April 3, 2026",j=p({__name:"SumMatrix",setup(y){const o=i(),a=n(`
#include <stdio.h>

int main() {
    int rows, cols;

    printf("Enter number of rows: ");
    scanf("%d", &rows);
    printf("Enter number of columns: ");
    scanf("%d", &cols);

    int matrix[rows][cols];
    int sum = 0;

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
            sum += matrix[i][j];
        }
    }

    printf("Sum of all elements: %d\\n", sum);
    return 0;
}
`),s=n(`
Enter number of rows: 2
Enter number of columns: 3
Enter element [0][0]: 1
Enter element [0][1]: 2
Enter element [0][2]: 3
Enter element [1][0]: 4
Enter element [1][1]: 5
Enter element [1][2]: 6
Sum of all elements: 21
`);return(E,t)=>(g(),d(l,{title:"C Programming",navigation:c(o).sections},{default:f(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of 2D Array (Matrix)",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+x(b)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"}," Imagine a magical grid in a fairyland 🏰, where each cell holds a treasure. Our hero, the brave coder, wants to find the total treasure in the kingdom. This program lets you input values into a 2D array (matrix) and calculates the sum of all elements. Along the way, you’ll practice nested loops and indexing in C! ",-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),r(m,{code:a.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),r(u,{output:s.value},null,8,["output"])]),_:1},8,["navigation"]))}});export{j as default};

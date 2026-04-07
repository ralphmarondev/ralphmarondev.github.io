import{_ as s}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as l}from"./CodeBlock-D8cbajus.js";import{O as m}from"./OutputBlock-DBUi5rzu.js";import{d as i,r,p as u,l as p,a as e,k as n,t as d,o as f}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const c="April 3, 2026",S=i({__name:"SumMatrix",setup(g){const a=r(`
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
`),o=r(`
Enter number of rows: 2
Enter number of columns: 3
Enter element [0][0]: 1
Enter element [0][1]: 2
Enter element [0][2]: 3
Enter element [1][0]: 4
Enter element [1][1]: 5
Enter element [1][2]: 6
Sum of all elements: 21
`);return(x,t)=>(f(),u(s,{title:"C Programming",link:"/c/arrays/sum-2d-array"},{default:p(()=>[t[0]||(t[0]=e("h1",{class:"text-4xl font-bold text-gray-800 mb-2"},"Sum of 2D Array (Matrix)",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+d(c)),t[1]||(t[1]=e("p",{class:"text-gray-600 mb-4 text-lg"}," Imagine a magical grid in a fairyland 🏰, where each cell holds a treasure. Our hero, the brave coder, wants to find the total treasure in the kingdom. This program lets you input values into a 2D array (matrix) and calculates the sum of all elements. Along the way, you’ll practice nested loops and indexing in C! ",-1)),t[2]||(t[2]=e("p",{class:"mt-4 text-lg font-semibold text-gray-800"},"Solution",-1)),n(l,{code:a.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e("p",{class:"mt-6 text-lg font-semibold text-gray-800"},"Sample Output",-1)),n(m,{output:o.value},null,8,["output"])]),_:1}))}});export{S as default};

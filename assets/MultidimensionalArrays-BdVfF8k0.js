import{_ as m}from"./logo-C9ImmdpX.js";import{T as l,a as e,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as s,C as i}from"./CodeBlock-Ayh7J4dk.js";import{O as d}from"./OutputBlock-CjsXuZMe.js";import{_ as a}from"./FernInfo.vue_vue_type_script_setup_true_lang-CYGdZlbx.js";import{_ as w}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{d as p,h as b,i as r,o as g,a as u,q as o,g as t}from"./index-DSMoD1xp.js";const y={class:"max-w-4xl mx-auto"},x=`
#include <stdio.h>

int main() {
    int numbers[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printf("%d\\n", numbers[0][0]);
    printf("%d\\n", numbers[1][2]);
    return 0;
}`,T=`
10
60`,A=`
#include <stdio.h>

int main() {
    int numbers[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    printf("%d %d %d\\n", numbers[0][0], numbers[0][1], numbers[0][2]);
    printf("%d %d %d\\n", numbers[1][0], numbers[1][1], numbers[1][2]);
    return 0;
}`,v=`
10 20 30
40 50 60`,O=`
#include <stdio.h>

int main() {
    int numbers[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    for (int row = 0; row < 2; row++) {
        for (int column = 0; column < 3; column++) {
            printf("%d ", numbers[row][column]);
        }
        printf("\\n");
    }
    return 0;
}`,S=`
10 20 30
40 50 60`,C=`
#include <stdio.h>

int main() {
    int scores[3][3] = {
        {85, 90, 88},
        {75, 82, 80},
        {92, 95, 90}
    };

    for (int row = 0; row < 3; row++) {
        printf("Student %d: ", row + 1);
        for (int column = 0; column < 3; column++) {
            printf("%d ", scores[row][column]);
        }
        printf("\\n");
    }
    return 0;
}`,k=`
Student 1: 85 90 88
Student 2: 75 82 80
Student 3: 92 95 90`,D=`
#include <stdio.h>

int main() {
    int numbers[2][3] = {
        {10, 20, 30},
        {40, 50, 60}
    };

    for (int row = 0; row < 2; row++) {
        int sum = 0;
        for (int column = 0; column < 3; column++) {
            sum += numbers[row][column];
        }
        printf("Row %d sum: %d\\n", row + 1, sum);
    }
    return 0;
}`,E=`
Row 1 sum: 60
Row 2 sum: 150`,P=`
#include <stdio.h>

int main() {
    int numbers[2][2];

    for (int row = 0; row < 2; row++) {
        for (int column = 0; column < 2; column++) {
            printf("Enter value for [%d][%d]: ", row, column);
            scanf("%d", &numbers[row][column]);
        }
    }
    printf("\\nArray:\\n");

    for (int row = 0; row < 2; row++) {
        for (int column = 0; column < 2; column++) {
            printf("%d ", numbers[row][column]);
        }
        printf("\\n");
    }
    return 0;
}`,N=`
Enter value for [0][0]: 10
Enter value for [0][1]: 20
Enter value for [1][0]: 30
Enter value for [1][1]: 40

Array:
10 20
30 40`,R=`
#include <stdio.h>

int main() {
    int first[2][2] = {
        {1, 2},
        {3, 4}
    };

    int second[2][2] = {
        {5, 6},
        {7, 8}
    };

    int sum[2][2];

    for (int row = 0; row < 2; row++) {
        for (int column = 0; column < 2; column++) {
            sum[row][column] =
                first[row][column] + second[row][column];
        }
    }

    for (int row = 0; row < 2; row++) {
        for (int column = 0; column < 2; column++) {
            printf("%d ", sum[row][column]);
        }
        printf("\\n");
    }
    return 0;
}`,B=`
6 8
10 12`,q=p({__name:"MultidimensionalArrays",setup(F){return(z,n)=>(g(),b(w,null,{default:r(()=>[u("div",y,[n[64]||(n[64]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),n[65]||(n[65]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Multidimensional Arrays ")],-1)),o(l,null,{default:r(()=>[n[1]||(n[1]=t(" A ",-1)),o(s,null,{default:r(()=>[...n[0]||(n[0]=[t("multidimensional array",-1)])]),_:1}),n[2]||(n[2]=t(" is an array that has more than one dimension. ",-1))]),_:1}),o(l,null,{default:r(()=>[n[5]||(n[5]=t(" A two-dimensional array can be visualized as a table with ",-1)),o(s,null,{default:r(()=>[...n[3]||(n[3]=[t("rows",-1)])]),_:1}),n[6]||(n[6]=t(" and ",-1)),o(s,null,{default:r(()=>[...n[4]||(n[4]=[t("columns",-1)])]),_:1}),n[7]||(n[7]=t(" . ",-1))]),_:1}),o(a,{title:"Think of It as a Table"},{default:r(()=>[...n[8]||(n[8]=[t(" A one-dimensional array is like a single row of boxes. A two-dimensional array adds more rows, creating a table. ",-1)])]),_:1}),o(e,null,{default:r(()=>[...n[9]||(n[9]=[t("Declaring a Two-Dimensional Array",-1)])]),_:1}),o(l,null,{default:r(()=>[n[10]||(n[10]=t(" A two-dimensional array can be declared by specifying the number of rows and columns. ",-1)),o(i,{language:"c",code:x}),n[11]||(n[11]=t(" Output ",-1)),o(d,{output:T})]),_:1}),o(l,null,{default:r(()=>[n[15]||(n[15]=t(" The declaration ",-1)),o(s,null,{default:r(()=>[...n[12]||(n[12]=[t("int numbers[2][3]",-1)])]),_:1}),n[16]||(n[16]=t(" creates an array with ",-1)),o(s,null,{default:r(()=>[...n[13]||(n[13]=[t("2 rows",-1)])]),_:1}),n[17]||(n[17]=t(" and ",-1)),o(s,null,{default:r(()=>[...n[14]||(n[14]=[t("3 columns",-1)])]),_:1}),n[18]||(n[18]=t(" . ",-1))]),_:1}),o(e,null,{default:r(()=>[...n[19]||(n[19]=[t("Understanding Rows and Columns",-1)])]),_:1}),o(l,null,{default:r(()=>[n[20]||(n[20]=t(" Consider this array: ",-1)),o(i,{language:"c",code:A}),n[21]||(n[21]=t(" Output ",-1)),o(d,{output:v})]),_:1}),o(l,null,{default:r(()=>[n[24]||(n[24]=t(" The first index identifies the ",-1)),o(s,null,{default:r(()=>[...n[22]||(n[22]=[t("row",-1)])]),_:1}),n[25]||(n[25]=t(" . The second index identifies the ",-1)),o(s,null,{default:r(()=>[...n[23]||(n[23]=[t("column",-1)])]),_:1}),n[26]||(n[26]=t(" . ",-1))]),_:1}),o(a,{title:"Remember the Order"},{default:r(()=>[...n[27]||(n[27]=[t(" For a two-dimensional array, think ",-1),u("strong",null,"row first, column second",-1),t(". ",-1)])]),_:1}),o(e,null,{default:r(()=>[...n[28]||(n[28]=[t("Accessing Elements",-1)])]),_:1}),o(l,null,{default:r(()=>[n[30]||(n[30]=t(" Each element is accessed using two indexes. ",-1)),o(s,null,{default:r(()=>[...n[29]||(n[29]=[t("numbers[0][0]",-1)])]),_:1}),n[31]||(n[31]=t(" refers to the first row and first column. ",-1))]),_:1}),o(l,null,{default:r(()=>[n[33]||(n[33]=t(" For example, ",-1)),o(s,null,{default:r(()=>[...n[32]||(n[32]=[t("numbers[1][2]",-1)])]),_:1}),n[34]||(n[34]=t(" refers to the second row and third column because array indexes start at zero. ",-1))]),_:1}),o(e,null,{default:r(()=>[...n[35]||(n[35]=[t("Traversing a Two-Dimensional Array",-1)])]),_:1}),o(l,null,{default:r(()=>[n[36]||(n[36]=t(" A nested loop can be used to visit every element of a two-dimensional array. ",-1)),o(i,{language:"c",code:O}),n[37]||(n[37]=t(" Output ",-1)),o(d,{output:S})]),_:1}),o(l,null,{default:r(()=>[...n[38]||(n[38]=[t(" The outer loop moves through the rows. The inner loop moves through the columns of the current row. ",-1)])]),_:1}),o(a,{title:"Nested Loops"},{default:r(()=>[...n[39]||(n[39]=[t(" The outer loop handles the rows, while the inner loop handles the columns. ",-1)])]),_:1}),o(e,null,{default:r(()=>[...n[40]||(n[40]=[t("Working with Student Scores",-1)])]),_:1}),o(l,null,{default:r(()=>[n[41]||(n[41]=t(" A two-dimensional array can be useful when data naturally belongs to rows and columns. For example, each row can represent a student while each column represents a score. ",-1)),o(i,{language:"c",code:C}),n[42]||(n[42]=t(" Output ",-1)),o(d,{output:k})]),_:1}),o(l,null,{default:r(()=>[...n[43]||(n[43]=[t(" Here, each student has three scores stored in one row. ",-1)])]),_:1}),o(e,null,{default:r(()=>[...n[44]||(n[44]=[t("Calculating the Sum of Each Row",-1)])]),_:1}),o(l,null,{default:r(()=>[n[45]||(n[45]=t(" Nested loops can also be used to perform calculations on each row. ",-1)),o(i,{language:"c",code:D}),n[46]||(n[46]=t(" Output ",-1)),o(d,{output:E})]),_:1}),o(l,null,{default:r(()=>[n[48]||(n[48]=t(" The sum is reset to ",-1)),o(s,null,{default:r(()=>[...n[47]||(n[47]=[t("0",-1)])]),_:1}),n[49]||(n[49]=t(" whenever the program starts processing a new row. ",-1))]),_:1}),o(e,null,{default:r(()=>[...n[50]||(n[50]=[t("Getting User Input",-1)])]),_:1}),o(l,null,{default:r(()=>[n[52]||(n[52]=t(" A two-dimensional array can be filled using nested loops and ",-1)),o(s,null,{default:r(()=>[...n[51]||(n[51]=[t("scanf()",-1)])]),_:1}),n[53]||(n[53]=t(" . ",-1)),o(i,{language:"c",code:P}),n[54]||(n[54]=t(" Output ",-1)),o(d,{output:N})]),_:1}),o(l,null,{default:r(()=>[...n[55]||(n[55]=[t(" Each iteration stores the entered value at the current row and column. ",-1)])]),_:1}),o(e,null,{default:r(()=>[...n[56]||(n[56]=[t("Adding Two Arrays",-1)])]),_:1}),o(l,null,{default:r(()=>[n[57]||(n[57]=t(" Two arrays with the same number of rows and columns can be combined by adding their corresponding elements. ",-1)),o(i,{language:"c",code:R}),n[58]||(n[58]=t(" Output ",-1)),o(d,{output:B})]),_:1}),o(l,null,{default:r(()=>[...n[59]||(n[59]=[t(" For each position, the value from the first array is added to the value at the same position in the second array. ",-1)])]),_:1}),o(a,{title:"The Main Idea"},{default:r(()=>[...n[60]||(n[60]=[t(" A two-dimensional array organizes data into rows and columns. Nested loops make it possible to visit and process each element. ",-1)])]),_:1}),o(e,null,{default:r(()=>[...n[61]||(n[61]=[t("Summary",-1)])]),_:1}),o(l,null,{default:r(()=>[...n[62]||(n[62]=[t(" Multidimensional arrays allow related data to be organized across multiple dimensions. The most common example is a two-dimensional array, which stores data in rows and columns. ",-1)])]),_:1}),o(l,null,{default:r(()=>[...n[63]||(n[63]=[u("ul",{class:"list-disc pl-6 space-y-2"},[u("li",null,"A two-dimensional array has rows and columns."),u("li",null,"The first index represents the row."),u("li",null,"The second index represents the column."),u("li",null,"Array indexes start at 0."),u("li",null,"Nested loops are commonly used to traverse 2D arrays."),u("li",null,"2D arrays are useful for tables and other structured data.")],-1)])]),_:1}),n[66]||(n[66]=u("br",null,null,-1)),o(f,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{q as default};

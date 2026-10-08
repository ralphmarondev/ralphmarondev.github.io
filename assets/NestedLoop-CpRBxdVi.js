import{_ as m}from"./logo-C9ImmdpX.js";import{T as u,a as i,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{T as e,C as s}from"./CodeBlock-Z3HAVLif.js";import{O as d}from"./OutputBlock-B9VPajdJ.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-CMwsacWG.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{d as w,h as g,i as l,o as x,a as r,q as n,g as t}from"./index-BRxoWVJY.js";const b={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-6 space-y-2"},O=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 3; column++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`,C=`
* * *
* * *
* * *`,v=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 3; column++) {
            printf("%d ", column);
        }
        printf("\\n");
    }
    return 0;
}`,y=`
1 2 3
1 2 3
1 2 3`,N=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 3; column++) {
            printf("(%d,%d) ", row, column);
        }
        printf("\\n");
    }
    return 0;
}`,P=`
(1,1) (1,2) (1,3)
(2,1) (2,2) (2,3)
(3,1) (3,2) (3,3)`,k=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 5; row++) {
        for (int column = 1; column <= row; column++) {
            printf("* ");
        }
        printf("\\n");
    }
    return 0;
}`,B=`
*
* *
* * *
* * * *
* * * * *`,L=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 5; row++) {
        for (int column = 1; column <= row; column++) {
            printf("%d ", column);
        }
        printf("\\n");
    }
    return 0;
}`,R=`
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5`,A=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 5; column++) {
            printf("%d x %d = %d\\n", row, column, row * column);
        }
        printf("\\n");
    }
    return 0;
}`,F=`
1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5

2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10

3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15`,E=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 4; column++) {
            printf("%d ", row * column);
        }
        printf("\\n");
    }
    return 0;
}`,H=`
1 2 3 4
2 4 6 8
3 6 9 12`,I=`
#include <stdio.h>

int main() {
    int row = 1;

    while (row <= 3) {
        int column = 1;
        while (column <= 3) {
            printf("* ");
            column++;
        }
        printf("\\n");
        row++;
    }
    return 0;
}`,U=`
* * *
* * *
* * *`,V=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        printf("Row %d\\n", row);
        for (int column = 1; column <= 3; column++) {
            printf("  Column %d\\n", column);
        }
    }
    return 0;
}`,W=`
Row 1
  Column 1
  Column 2
  Column 3
Row 2
  Column 1
  Column 2
  Column 3
Row 3
  Column 1
  Column 2
  Column 3`,G=w({__name:"NestedLoop",setup($){return(j,o)=>(x(),g(a,null,{default:l(()=>[r("div",b,[o[84]||(o[84]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),o[85]||(o[85]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Nested Loop ")],-1)),n(u,null,{default:l(()=>[o[1]||(o[1]=t(" A ",-1)),n(e,null,{default:l(()=>[...o[0]||(o[0]=[t("nested loop",-1)])]),_:1}),o[2]||(o[2]=t(" is a loop placed inside another loop. The outer loop controls the larger repetition, while the inner loop performs a repeated action for each iteration of the outer loop. ",-1))]),_:1}),n(u,null,{default:l(()=>[...o[3]||(o[3]=[t(" Nested loops are commonly used when working with rows and columns, patterns, tables, and other repeated structures. ",-1)])]),_:1}),n(p,{title:"How Nested Loops Work"},{default:l(()=>[...o[4]||(o[4]=[t(" Think of it as: ",-1),r("strong",null," the inner loop finishes completely before the outer loop moves to its next iteration. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...o[5]||(o[5]=[t("Basic Nested Loop",-1)])]),_:1}),n(u,null,{default:l(()=>[o[6]||(o[6]=t(" Here, the outer loop represents the rows and the inner loop represents the columns. ",-1)),n(s,{language:"c",code:O}),o[7]||(o[7]=t(" Output ",-1)),n(d,{output:C})]),_:1}),n(u,null,{default:l(()=>[...o[8]||(o[8]=[t(" The outer loop runs three times. For every outer-loop iteration, the inner loop also runs three times. ",-1)])]),_:1}),n(i,{title:"Understanding the Execution"}),n(u,null,{default:l(()=>[o[9]||(o[9]=t(" The inner loop runs completely for each value of the outer loop. Consider this example: ",-1)),n(s,{language:"c",code:v}),o[10]||(o[10]=t(" Output ",-1)),n(d,{output:y})]),_:1}),n(u,null,{default:l(()=>[o[16]||(o[16]=t(" When ",-1)),n(e,null,{default:l(()=>[...o[11]||(o[11]=[t("row",-1)])]),_:1}),o[17]||(o[17]=t(" is ",-1)),n(e,null,{default:l(()=>[...o[12]||(o[12]=[t("1",-1)])]),_:1}),o[18]||(o[18]=t(" , the inner loop prints ",-1)),n(e,null,{default:l(()=>[...o[13]||(o[13]=[t("1 2 3",-1)])]),_:1}),o[19]||(o[19]=t(" . Only after that does ",-1)),n(e,null,{default:l(()=>[...o[14]||(o[14]=[t("row",-1)])]),_:1}),o[20]||(o[20]=t(" become ",-1)),n(e,null,{default:l(()=>[...o[15]||(o[15]=[t("2",-1)])]),_:1}),o[21]||(o[21]=t(" . ",-1))]),_:1}),n(u,null,{default:l(()=>[o[24]||(o[24]=t(" This happens again for ",-1)),n(e,null,{default:l(()=>[...o[22]||(o[22]=[t("row",-1)])]),_:1}),o[25]||(o[25]=t(" equal to ",-1)),n(e,null,{default:l(()=>[...o[23]||(o[23]=[t("3",-1)])]),_:1}),o[26]||(o[26]=t(" . ",-1))]),_:1}),n(i,{title:"Rows and Columns"}),n(u,null,{default:l(()=>[o[27]||(o[27]=t(" Using separate variables for the row and column makes the behavior of a nested loop easier to understand. ",-1)),n(s,{language:"c",code:N}),o[28]||(o[28]=t(" Output ",-1)),n(d,{output:P})]),_:1}),n(u,null,{default:l(()=>[o[31]||(o[31]=t(" Each pair represents the current ",-1)),n(e,null,{default:l(()=>[...o[29]||(o[29]=[t("row",-1)])]),_:1}),o[32]||(o[32]=t(" and ",-1)),n(e,null,{default:l(()=>[...o[30]||(o[30]=[t("column",-1)])]),_:1}),o[33]||(o[33]=t(" . ",-1))]),_:1}),n(p,{title:"A Helpful Question"},{default:l(()=>[...o[34]||(o[34]=[t(" For many nested-loop problems, it helps to ask: ",-1),r("strong",null," “What does the outer loop represent, and what does the inner loop represent?” ",-1)])]),_:1}),n(i,null,{default:l(()=>[...o[35]||(o[35]=[t("Creating a Triangle Pattern",-1)])]),_:1}),n(u,null,{default:l(()=>[o[36]||(o[36]=t(" The inner loop does not always need to run the same number of times. Its condition can depend on the outer loop. ",-1)),n(s,{language:"c",code:k}),o[37]||(o[37]=t(" Output ",-1)),n(d,{output:B})]),_:1}),n(u,null,{default:l(()=>[...o[38]||(o[38]=[t(" On the first row, the inner loop runs once. On the second row, it runs twice, and so on. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...o[39]||(o[39]=[t("Number Triangle",-1)])]),_:1}),n(u,null,{default:l(()=>[o[40]||(o[40]=t(" Nested loops can also generate number patterns. ",-1)),n(s,{language:"c",code:L}),o[41]||(o[41]=t(" Output ",-1)),n(d,{output:R})]),_:1}),n(u,null,{default:l(()=>[o[44]||(o[44]=t(" The value of ",-1)),n(e,null,{default:l(()=>[...o[42]||(o[42]=[t("column",-1)])]),_:1}),o[45]||(o[45]=t(" determines which number is printed, while ",-1)),n(e,null,{default:l(()=>[...o[43]||(o[43]=[t("row",-1)])]),_:1}),o[46]||(o[46]=t(" determines how many numbers appear on each line. ",-1))]),_:1}),n(i,null,{default:l(()=>[...o[47]||(o[47]=[t("Nested Loops for Tables",-1)])]),_:1}),n(u,null,{default:l(()=>[o[48]||(o[48]=t(" Nested loops are useful for generating combinations of values. For example, we can generate several multiplication tables. ",-1)),n(s,{language:"c",code:A}),o[49]||(o[49]=t(" Output ",-1)),n(d,{output:F})]),_:1}),n(u,null,{default:l(()=>[...o[50]||(o[50]=[t(" The outer loop selects the number being multiplied, while the inner loop goes through its multipliers. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...o[51]||(o[51]=[t("Using Calculations",-1)])]),_:1}),n(u,null,{default:l(()=>[o[52]||(o[52]=t(" The values from both loops can also be used in calculations. ",-1)),n(s,{language:"c",code:E}),o[53]||(o[53]=t(" Output ",-1)),n(d,{output:H})]),_:1}),n(u,null,{default:l(()=>[o[55]||(o[55]=t(" Each value is calculated using ",-1)),n(e,null,{default:l(()=>[...o[54]||(o[54]=[t("row * column",-1)])]),_:1}),o[56]||(o[56]=t(" . ",-1))]),_:1}),n(i,null,{default:l(()=>[...o[57]||(o[57]=[t("Nested while Loops",-1)])]),_:1}),n(u,null,{default:l(()=>[o[61]||(o[61]=t(" Nested loops are not limited to ",-1)),n(e,null,{default:l(()=>[...o[58]||(o[58]=[t("for",-1)])]),_:1}),o[62]||(o[62]=t(" loops. A ",-1)),n(e,null,{default:l(()=>[...o[59]||(o[59]=[t("while",-1)])]),_:1}),o[63]||(o[63]=t(" loop can also contain another ",-1)),n(e,null,{default:l(()=>[...o[60]||(o[60]=[t("while",-1)])]),_:1}),o[64]||(o[64]=t(" loop. ",-1)),n(s,{language:"c",code:I}),o[65]||(o[65]=t(" Output ",-1)),n(d,{output:U})]),_:1}),n(u,null,{default:l(()=>[...o[66]||(o[66]=[t(" The same nested-loop concept applies: the inner loop completes its repetitions before the outer loop continues. ",-1)])]),_:1}),n(i,{title:"Following the Flow"}),n(u,null,{default:l(()=>[o[67]||(o[67]=t(" One of the easiest ways to understand a nested loop is to follow the order in which the statements execute. ",-1)),n(s,{language:"c",code:V}),o[68]||(o[68]=t(" Output ",-1)),n(d,{output:W})]),_:1}),n(u,null,{default:l(()=>[...o[69]||(o[69]=[t(" The outer loop prints one row, then the inner loop prints all three columns for that row. After the inner loop finishes, the outer loop moves to the next row. ",-1)])]),_:1}),n(p,{title:"Keep This in Mind"},{default:l(()=>[...o[70]||(o[70]=[t(" Remember: ",-1),r("strong",null," one outer iteration can contain many inner iterations. ",-1)])]),_:1}),n(i,null,{default:l(()=>[...o[71]||(o[71]=[t("Summary",-1)])]),_:1}),n(u,null,{default:l(()=>[o[82]||(o[82]=t(" A ",-1)),n(e,null,{default:l(()=>[...o[72]||(o[72]=[t("nested loop",-1)])]),_:1}),o[83]||(o[83]=t(" is a loop inside another loop. It is useful when a problem involves multiple levels of repetition. ",-1)),r("ul",T,[o[78]||(o[78]=r("li",null,"The outer loop controls the larger repetition.",-1)),o[79]||(o[79]=r("li",null,"The inner loop runs completely for each outer-loop iteration.",-1)),r("li",null,[o[75]||(o[75]=t("Nested loops can be used with ",-1)),n(e,null,{default:l(()=>[...o[73]||(o[73]=[t("for",-1)])]),_:1}),o[76]||(o[76]=t(" or ",-1)),n(e,null,{default:l(()=>[...o[74]||(o[74]=[t("while",-1)])]),_:1}),o[77]||(o[77]=t(" loops. ",-1))]),o[80]||(o[80]=r("li",null,"They are useful for rows, columns, patterns, and tables.",-1)),o[81]||(o[81]=r("li",null,"The inner loop can use the outer loop's value in its calculations.",-1))])]),_:1}),o[86]||(o[86]=r("br",null,null,-1)),n(f,{to:"/academia/student/classes/c-break-and-continue"})])]),_:1}))}});export{G as default};

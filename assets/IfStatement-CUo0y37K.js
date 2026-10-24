import{_ as f}from"./logo-C9ImmdpX.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-BHqqVcAK.js";import{T as i,a as s,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-JDRukrMl.js";import{T as u,C as o}from"./CodeBlock-BE2lyL2C.js";import{O as r}from"./OutputBlock-CZmA96mX.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-lDLc7df2.js";import{d as g,h as b,i as e,o as x,a as d,q as l,g as n}from"./index-DfAF0zN8.js";const O={class:"max-w-4xl mx-auto"},k=`
if (condition) {
    // statements
}`,T=`
#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("You are an adult.\\n");
    }

    return 0;
}`,P="You are an adult.",w=`
#include <stdio.h>

int main() {
    int age = 16;

    if (age >= 18) {
        printf("You are an adult.\\n");
    }

    return 0;
}`,y=`
#include <stdio.h>

int main() {
    int score = 90;

    if (score >= 75) {
        printf("Passed!\\n");
    }

    return 0;
}`,v="Passed!",C=`
#include <stdio.h>

int main() {
    int number = 10;

    if (number == 10) {
        printf("The number is 10.\\n");
    }

    return 0;
}`,S="The number is 10.",I=`
#include <stdio.h>

int main() {
    int score = 95;

    if (score > 90) {
        printf("Excellent score!\\n");
    }

    return 0;
}`,B="Excellent score!",q=`
#include <stdio.h>

int main() {
    int age = 20;
    int score = 85;

    if (age >= 18 && score >= 75) {
        printf("Requirements satisfied.\\n");
    }

    return 0;
}`,A="Requirements satisfied.",N=`
#include <stdio.h>

int main() {
    int score = 95;

    if (score >= 75) {
        printf("Passed!\\n");
        printf("Good job!\\n");
    }

    return 0;
}`,R=`
Passed!
Good job!`,U=`
#include <stdio.h>

int main() {
    int score = 50;

    if (score < 75) {
        score = 75;
    }

    printf("Score: %d\\n", score);

    return 0;
}`,j="Score: 75",V=`
#include <stdio.h>

int main() {
    int age = 20;
    int score = 85;

    if (age >= 18) {
        if (score >= 75) {
            printf("Requirements satisfied.\\n");
        }
    }

    return 0;
}`,Y="Requirements satisfied.",E=`
#include <stdio.h>

int main() {
    int score = 90;

    if (score >= 75) {
        printf("Passed!\\n");
    }

    return 0;
}`,J=g({__name:"IfStatement",setup(G){return(M,t)=>(x(),b(a,null,{default:e(()=>[d("div",O,[t[110]||(t[110]=d("div",{class:"w-full flex justify-center mb-6"},[d("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[111]||(t[111]=d("div",{class:"text-center mb-4"},[d("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),d("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," if Statement ")],-1)),l(i,null,{default:e(()=>[t[1]||(t[1]=n(" Programs often need to make decisions. An ",-1)),l(u,null,{default:e(()=>[...t[0]||(t[0]=[n("if",-1)])]),_:1}),t[2]||(t[2]=n(" statement allows a program to execute a block of code only when a specified condition is true. ",-1))]),_:1}),l(i,null,{default:e(()=>[t[4]||(t[4]=n(" The condition is placed inside parentheses after the ",-1)),l(u,null,{default:e(()=>[...t[3]||(t[3]=[n("if",-1)])]),_:1}),t[5]||(t[5]=n(" keyword. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[6]||(t[6]=[n("Basic if Statement",-1)])]),_:1}),l(i,null,{default:e(()=>[t[8]||(t[8]=n(" The basic syntax of an ",-1)),l(u,null,{default:e(()=>[...t[7]||(t[7]=[n("if",-1)])]),_:1}),t[9]||(t[9]=n(" statement is: ",-1)),l(o,{language:"c",code:k})]),_:1}),l(i,null,{default:e(()=>[t[10]||(t[10]=n(" If the condition evaluates to true, the statements inside the braces are executed. If the condition is false, they are skipped. ",-1)),l(o,{language:"c",code:T}),t[11]||(t[11]=n(" Output ",-1)),l(r,{output:P})]),_:1}),l(i,null,{default:e(()=>[t[15]||(t[15]=n(" Since ",-1)),l(u,null,{default:e(()=>[...t[12]||(t[12]=[n("age >= 18",-1)])]),_:1}),t[16]||(t[16]=n(" is true, the ",-1)),l(u,null,{default:e(()=>[...t[13]||(t[13]=[n("printf()",-1)])]),_:1}),t[17]||(t[17]=n(" statement inside the ",-1)),l(u,null,{default:e(()=>[...t[14]||(t[14]=[n("if",-1)])]),_:1}),t[18]||(t[18]=n(" block is executed. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[19]||(t[19]=[n("When the Condition Is False",-1)])]),_:1}),l(i,null,{default:e(()=>[t[21]||(t[21]=n(" If the condition is false, the statements inside the ",-1)),l(u,null,{default:e(()=>[...t[20]||(t[20]=[n("if",-1)])]),_:1}),t[22]||(t[22]=n(" block are skipped. ",-1)),l(o,{language:"c",code:w}),t[23]||(t[23]=n(" Output ",-1)),l(r,{output:"No output"})]),_:1}),l(i,null,{default:e(()=>[t[28]||(t[28]=n(" The value of ",-1)),l(u,null,{default:e(()=>[...t[24]||(t[24]=[n("age",-1)])]),_:1}),t[29]||(t[29]=n(" is ",-1)),l(u,null,{default:e(()=>[...t[25]||(t[25]=[n("16",-1)])]),_:1}),t[30]||(t[30]=n(" , so ",-1)),l(u,null,{default:e(()=>[...t[26]||(t[26]=[n("age >= 18",-1)])]),_:1}),t[31]||(t[31]=n(" is false. The program simply continues after the ",-1)),l(u,null,{default:e(()=>[...t[27]||(t[27]=[n("if",-1)])]),_:1}),t[32]||(t[32]=n(" statement. ",-1))]),_:1}),l(p,{title:"Think of if as a Gate"},{default:e(()=>[...t[33]||(t[33]=[n(" An if statement acts like a gate. When the condition is true, the gate opens and the code inside runs. When the condition is false, the code is skipped. ",-1)])]),_:1}),l(s,null,{default:e(()=>[...t[34]||(t[34]=[n("Using Relational Operators",-1)])]),_:1}),l(i,null,{default:e(()=>[t[36]||(t[36]=n(" Relational operators can be used as conditions. For example, a program can check whether a score is at least ",-1)),l(u,null,{default:e(()=>[...t[35]||(t[35]=[n("75",-1)])]),_:1}),t[37]||(t[37]=n(" . ",-1)),l(o,{language:"c",code:y}),t[38]||(t[38]=n(" Output ",-1)),l(r,{output:v})]),_:1}),l(i,null,{default:e(()=>[t[41]||(t[41]=n(" The condition ",-1)),l(u,null,{default:e(()=>[...t[39]||(t[39]=[n("score >= 75",-1)])]),_:1}),t[42]||(t[42]=n(" is true because the score is ",-1)),l(u,null,{default:e(()=>[...t[40]||(t[40]=[n("90",-1)])]),_:1}),t[43]||(t[43]=n(" . ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[44]||(t[44]=[n("Checking Equality",-1)])]),_:1}),l(i,null,{default:e(()=>[t[46]||(t[46]=n(" The equality operator ",-1)),l(u,null,{default:e(()=>[...t[45]||(t[45]=[n("==",-1)])]),_:1}),t[47]||(t[47]=n(" can be used to check whether a value is exactly equal to another value. ",-1)),l(o,{language:"c",code:C}),t[48]||(t[48]=n(" Output ",-1)),l(r,{output:S})]),_:1}),l(s,null,{default:e(()=>[...t[49]||(t[49]=[n("Using Other Comparisons",-1)])]),_:1}),l(i,null,{default:e(()=>[t[51]||(t[51]=n(" Any relational operator can be used as the condition of an ",-1)),l(u,null,{default:e(()=>[...t[50]||(t[50]=[n("if",-1)])]),_:1}),t[52]||(t[52]=n(" statement. ",-1)),l(o,{language:"c",code:I}),t[53]||(t[53]=n(" Output ",-1)),l(r,{output:B})]),_:1}),l(s,null,{default:e(()=>[...t[54]||(t[54]=[n("Using Logical Operators",-1)])]),_:1}),l(i,null,{default:e(()=>[t[55]||(t[55]=n(" Logical operators can be used when a decision depends on more than one condition. ",-1)),l(o,{language:"c",code:q}),t[56]||(t[56]=n(" Output ",-1)),l(r,{output:A})]),_:1}),l(i,null,{default:e(()=>[t[58]||(t[58]=n(" Both conditions must be true because the program uses the logical AND operator ",-1)),l(u,null,{default:e(()=>[...t[57]||(t[57]=[n("&&",-1)])]),_:1}),t[59]||(t[59]=n(" . ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[60]||(t[60]=[n("Multiple Statements",-1)])]),_:1}),l(i,null,{default:e(()=>[t[62]||(t[62]=n(" An ",-1)),l(u,null,{default:e(()=>[...t[61]||(t[61]=[n("if",-1)])]),_:1}),t[63]||(t[63]=n(" statement can contain multiple statements inside its braces. All of them are executed when the condition is true. ",-1)),l(o,{language:"c",code:N}),t[64]||(t[64]=n(" Output ",-1)),l(r,{output:R})]),_:1}),l(s,null,{default:e(()=>[...t[65]||(t[65]=[n("Changing a Variable",-1)])]),_:1}),l(i,null,{default:e(()=>[t[67]||(t[67]=n(" An ",-1)),l(u,null,{default:e(()=>[...t[66]||(t[66]=[n("if",-1)])]),_:1}),t[68]||(t[68]=n(" statement can also be used to change a variable when a condition is satisfied. ",-1)),l(o,{language:"c",code:U}),t[69]||(t[69]=n(" Output ",-1)),l(r,{output:j})]),_:1}),l(i,null,{default:e(()=>[t[74]||(t[74]=n(" Since ",-1)),l(u,null,{default:e(()=>[...t[70]||(t[70]=[n("score < 75",-1)])]),_:1}),t[75]||(t[75]=n(" is true, the value of ",-1)),l(u,null,{default:e(()=>[...t[71]||(t[71]=[n("score",-1)])]),_:1}),t[76]||(t[76]=n(" is changed from ",-1)),l(u,null,{default:e(()=>[...t[72]||(t[72]=[n("50",-1)])]),_:1}),t[77]||(t[77]=n(" to ",-1)),l(u,null,{default:e(()=>[...t[73]||(t[73]=[n("75",-1)])]),_:1}),t[78]||(t[78]=n(" . ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[79]||(t[79]=[n("Nested if Statements",-1)])]),_:1}),l(i,null,{default:e(()=>[t[83]||(t[83]=n(" An ",-1)),l(u,null,{default:e(()=>[...t[80]||(t[80]=[n("if",-1)])]),_:1}),t[84]||(t[84]=n(" statement can also be placed inside another ",-1)),l(u,null,{default:e(()=>[...t[81]||(t[81]=[n("if",-1)])]),_:1}),t[85]||(t[85]=n(" statement. This is called a nested ",-1)),l(u,null,{default:e(()=>[...t[82]||(t[82]=[n("if",-1)])]),_:1}),t[86]||(t[86]=n(" . ",-1)),l(o,{language:"c",code:V}),t[87]||(t[87]=n(" Output ",-1)),l(r,{output:Y})]),_:1}),l(i,null,{default:e(()=>[t[89]||(t[89]=n(" The inner ",-1)),l(u,null,{default:e(()=>[...t[88]||(t[88]=[n("if",-1)])]),_:1}),t[90]||(t[90]=n(" statement is checked only after the outer condition is true. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[91]||(t[91]=[n("Braces Matter",-1)])]),_:1}),l(i,null,{default:e(()=>[t[94]||(t[94]=n(" Braces ",-1)),l(u,null,{default:e(()=>[...t[92]||(t[92]=[n("{ }",-1)])]),_:1}),t[95]||(t[95]=n(" define the block of statements controlled by the ",-1)),l(u,null,{default:e(()=>[...t[93]||(t[93]=[n("if",-1)])]),_:1}),t[96]||(t[96]=n(" statement. Using braces makes the intended block clear and helps prevent mistakes when adding more statements later. ",-1)),l(o,{language:"c",code:E}),t[97]||(t[97]=n(" Output ",-1)),l(r,{output:"Passed!"})]),_:1}),l(i,null,{default:e(()=>[t[99]||(t[99]=n(" The statement inside the braces belongs to the ",-1)),l(u,null,{default:e(()=>[...t[98]||(t[98]=[n("if",-1)])]),_:1}),t[100]||(t[100]=n(" statement and runs only when the condition is true. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[101]||(t[101]=[n("Summary",-1)])]),_:1}),l(i,null,{default:e(()=>[t[103]||(t[103]=n(" The ",-1)),l(u,null,{default:e(()=>[...t[102]||(t[102]=[n("if",-1)])]),_:1}),t[104]||(t[104]=n(" statement allows a program to execute code only when a condition is true. The condition can use relational and logical operators. ",-1))]),_:1}),l(i,null,{default:e(()=>[t[107]||(t[107]=n(" You learned how to create basic ",-1)),l(u,null,{default:e(()=>[...t[105]||(t[105]=[n("if",-1)])]),_:1}),t[108]||(t[108]=n(" statements, use comparisons as conditions, execute multiple statements, update variables, and create nested ",-1)),l(u,null,{default:e(()=>[...t[106]||(t[106]=[n("if",-1)])]),_:1}),t[109]||(t[109]=n(" statements. ",-1))]),_:1}),t[112]||(t[112]=d("br",null,null,-1)),l(m,{to:"/academia/student/classes/c-if-else-statement"})])]),_:1}))}});export{J as default};

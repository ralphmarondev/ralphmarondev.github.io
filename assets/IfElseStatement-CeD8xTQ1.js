import{_ as f}from"./logo-C9ImmdpX.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-DWicuDYA.js";import{T as s,a as i,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-DDUXdY-4.js";import{T as u,C as o,O as r}from"./CodeBlock-DIhZalJZ.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-BsSGgAE1.js";import{d as g,h as b,i as e,o as w,a as d,q as l,g as n}from"./index-fUs2VaN6.js";const O={class:"max-w-4xl mx-auto"},k=`
#include <stdio.h>

int main() {
    int age = 20;

    if (age >= 18) {
        printf("You are an adult.\\n");
    } else {
        printf("You are a minor.\\n");
    }

    return 0;
}`,x="You are an adult.",v=`
#include <stdio.h>

int main() {
    int age = 16;

    if (age >= 18) {
        printf("You are an adult.\\n");
    } else {
        printf("You are a minor.\\n");
    }

    return 0;
}`,P="You are a minor.",T=`
if (condition) {
    // statements when true
} else {
    // statements when false
}`,C=`
#include <stdio.h>

int main() {
    int score = 80;

    if (score >= 75) {
        printf("Passed!\\n");
    } else {
        printf("Failed.\\n");
    }

    return 0;
}`,S="Passed!",y=`
#include <stdio.h>

int main() {
    int score = 60;

    if (score >= 75) {
        printf("Passed!\\n");
    } else {
        printf("Failed.\\n");
    }

    return 0;
}`,F="Failed.",I=`
#include <stdio.h>

int main() {
    int number = 10;

    if (number == 10) {
        printf("The number is 10.\\n");
    } else {
        printf("The number is not 10.\\n");
    }

    return 0;
}`,B="The number is 10.",Y=`
#include <stdio.h>

int main() {
    int a = 15;
    int b = 10;

    if (a > b) {
        printf("a is greater than b.\\n");
    } else {
        printf("a is not greater than b.\\n");
    }

    return 0;
}`,E="a is greater than b.",q=`
#include <stdio.h>

int main() {
    int age = 16;
    int score = 85;

    if (age >= 18 && score >= 75) {
        printf("Requirements satisfied.\\n");
    } else {
        printf("Requirements not satisfied.\\n");
    }

    return 0;
}`,A="Requirements not satisfied.",N=`
#include <stdio.h>

int main() {
    int score = 60;

    if (score >= 75) {
        printf("Passed!\\n");
        printf("You may continue.\\n");
    } else {
        printf("Failed.\\n");
        printf("Please review the lesson.\\n");
    }

    return 0;
}`,R=`
Failed.
Please review the lesson.`,V=`
#include <stdio.h>

int main() {
    int number = 10;

    if (number > 0) {
        number = 20;
    } else {
        number = 0;
    }

    printf("Number: %d\\n", number);

    return 0;
}`,L="Number: 20",U=`
#include <stdio.h>

int main() {
    int number = 7;

    if (number % 2 == 0) {
        printf("Even\\n");
    } else {
        printf("Odd\\n");
    }

    return 0;
}`,$="Odd",j=`
#include <stdio.h>

int main() {
    int score = 90;

    if (score >= 75) {
        printf("Passed!\\n");
    } else {
        printf("Failed.\\n");
    }

    return 0;
}`,H="Passed!",X=g({__name:"IfElseStatement",setup(W){return(G,t)=>(w(),b(a,null,{default:e(()=>[d("div",O,[t[118]||(t[118]=d("div",{class:"w-full flex justify-center mb-6"},[d("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[119]||(t[119]=d("div",{class:"text-center mb-4"},[d("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),d("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," if...else Statement ")],-1)),l(s,null,{default:e(()=>[t[1]||(t[1]=n(" An ",-1)),l(u,null,{default:e(()=>[...t[0]||(t[0]=[n("if...else",-1)])]),_:1}),t[2]||(t[2]=n(" statement allows a program to choose between two possible paths. One block runs when the condition is true, while another block runs when the condition is false. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[3]||(t[3]=[n(" This is useful when a program must do something different depending on the result of a condition. ",-1)])]),_:1}),l(i,null,{default:e(()=>[...t[4]||(t[4]=[n("Basic if...else Statement",-1)])]),_:1}),l(s,null,{default:e(()=>[t[6]||(t[6]=n(" The basic syntax of an ",-1)),l(u,null,{default:e(()=>[...t[5]||(t[5]=[n("if...else",-1)])]),_:1}),t[7]||(t[7]=n(" statement is: ",-1)),l(o,{language:"c",code:T})]),_:1}),l(s,null,{default:e(()=>[t[9]||(t[9]=n(" If the condition is true, the first block is executed. Otherwise, the ",-1)),l(u,null,{default:e(()=>[...t[8]||(t[8]=[n("else",-1)])]),_:1}),t[10]||(t[10]=n(" block is executed. ",-1)),l(o,{language:"c",code:k}),t[11]||(t[11]=n(" Output ",-1)),l(r,{output:x})]),_:1}),l(s,null,{default:e(()=>[t[15]||(t[15]=n(" Since ",-1)),l(u,null,{default:e(()=>[...t[12]||(t[12]=[n("age",-1)])]),_:1}),t[16]||(t[16]=n(" is ",-1)),l(u,null,{default:e(()=>[...t[13]||(t[13]=[n("20",-1)])]),_:1}),t[17]||(t[17]=n(" , the condition ",-1)),l(u,null,{default:e(()=>[...t[14]||(t[14]=[n("age >= 18",-1)])]),_:1}),t[18]||(t[18]=n(" is true, so the first block runs. ",-1))]),_:1}),l(i,null,{default:e(()=>[...t[19]||(t[19]=[n("When the Condition Is False",-1)])]),_:1}),l(s,null,{default:e(()=>[t[22]||(t[22]=n(" When the condition is false, the code inside the ",-1)),l(u,null,{default:e(()=>[...t[20]||(t[20]=[n("if",-1)])]),_:1}),t[23]||(t[23]=n(" block is skipped and the ",-1)),l(u,null,{default:e(()=>[...t[21]||(t[21]=[n("else",-1)])]),_:1}),t[24]||(t[24]=n(" block runs instead. ",-1)),l(o,{language:"c",code:v}),t[25]||(t[25]=n(" Output ",-1)),l(r,{output:P})]),_:1}),l(s,null,{default:e(()=>[t[30]||(t[30]=n(" This time, ",-1)),l(u,null,{default:e(()=>[...t[26]||(t[26]=[n("age >= 18",-1)])]),_:1}),t[31]||(t[31]=n(" is false because ",-1)),l(u,null,{default:e(()=>[...t[27]||(t[27]=[n("age",-1)])]),_:1}),t[32]||(t[32]=n(" is ",-1)),l(u,null,{default:e(()=>[...t[28]||(t[28]=[n("16",-1)])]),_:1}),t[33]||(t[33]=n(" . Therefore, the ",-1)),l(u,null,{default:e(()=>[...t[29]||(t[29]=[n("else",-1)])]),_:1}),t[34]||(t[34]=n(" block is executed. ",-1))]),_:1}),l(p,{title:"Two Possible Paths"},{default:e(()=>[...t[35]||(t[35]=[n(" An if...else statement gives the program two paths to choose from. One path is used when the condition is true, and the other is used when it is false. ",-1)])]),_:1}),l(i,null,{default:e(()=>[...t[36]||(t[36]=[n("Checking a Passing Score",-1)])]),_:1}),l(s,null,{default:e(()=>[t[38]||(t[38]=n(" An ",-1)),l(u,null,{default:e(()=>[...t[37]||(t[37]=[n("if...else",-1)])]),_:1}),t[39]||(t[39]=n(" statement can be used to perform a simple pass-or-fail decision. ",-1)),l(o,{language:"c",code:C}),t[40]||(t[40]=n(" Output ",-1)),l(r,{output:S})]),_:1}),l(s,null,{default:e(()=>[t[42]||(t[42]=n(" Since the score is at least ",-1)),l(u,null,{default:e(()=>[...t[41]||(t[41]=[n("75",-1)])]),_:1}),t[43]||(t[43]=n(" , the program reports that the student passed. ",-1))]),_:1}),l(i,null,{default:e(()=>[...t[44]||(t[44]=[n("Handling the Other Result",-1)])]),_:1}),l(s,null,{default:e(()=>[t[46]||(t[46]=n(" If the score does not satisfy the condition, the ",-1)),l(u,null,{default:e(()=>[...t[45]||(t[45]=[n("else",-1)])]),_:1}),t[47]||(t[47]=n(" block handles the other result. ",-1)),l(o,{language:"c",code:y}),t[48]||(t[48]=n(" Output ",-1)),l(r,{output:F})]),_:1}),l(i,null,{default:e(()=>[...t[49]||(t[49]=[n("Comparing Values",-1)])]),_:1}),l(s,null,{default:e(()=>[t[50]||(t[50]=n(" Relational operators can be used to determine which block should be executed. ",-1)),l(o,{language:"c",code:I}),t[51]||(t[51]=n(" Output ",-1)),l(r,{output:B})]),_:1}),l(i,null,{default:e(()=>[...t[52]||(t[52]=[n("Using Greater Than",-1)])]),_:1}),l(s,null,{default:e(()=>[t[54]||(t[54]=n(" Other relational operators work in the same way. For example, a program can compare two values using ",-1)),l(u,null,{default:e(()=>[...t[53]||(t[53]=[n(">",-1)])]),_:1}),t[55]||(t[55]=n(" . ",-1)),l(o,{language:"c",code:Y}),t[56]||(t[56]=n(" Output ",-1)),l(r,{output:E})]),_:1}),l(i,null,{default:e(()=>[...t[57]||(t[57]=[n("Using Logical Operators",-1)])]),_:1}),l(s,null,{default:e(()=>[t[58]||(t[58]=n(" Logical operators can also be used when the decision depends on multiple conditions. ",-1)),l(o,{language:"c",code:q}),t[59]||(t[59]=n(" Output ",-1)),l(r,{output:A})]),_:1}),l(s,null,{default:e(()=>[t[62]||(t[62]=n(" The condition requires both requirements to be true. Since the age is below ",-1)),l(u,null,{default:e(()=>[...t[60]||(t[60]=[n("18",-1)])]),_:1}),t[63]||(t[63]=n(" , the condition is false and the ",-1)),l(u,null,{default:e(()=>[...t[61]||(t[61]=[n("else",-1)])]),_:1}),t[64]||(t[64]=n(" block runs. ",-1))]),_:1}),l(i,null,{default:e(()=>[...t[65]||(t[65]=[n("Multiple Statements",-1)])]),_:1}),l(s,null,{default:e(()=>[t[68]||(t[68]=n(" Both the ",-1)),l(u,null,{default:e(()=>[...t[66]||(t[66]=[n("if",-1)])]),_:1}),t[69]||(t[69]=n(" and ",-1)),l(u,null,{default:e(()=>[...t[67]||(t[67]=[n("else",-1)])]),_:1}),t[70]||(t[70]=n(" blocks can contain multiple statements. ",-1)),l(o,{language:"c",code:N}),t[71]||(t[71]=n(" Output ",-1)),l(r,{output:R})]),_:1}),l(i,null,{default:e(()=>[...t[72]||(t[72]=[n("Changing a Variable",-1)])]),_:1}),l(s,null,{default:e(()=>[t[74]||(t[74]=n(" An ",-1)),l(u,null,{default:e(()=>[...t[73]||(t[73]=[n("if...else",-1)])]),_:1}),t[75]||(t[75]=n(" statement can also assign different values depending on the condition. ",-1)),l(o,{language:"c",code:V}),t[76]||(t[76]=n(" Output ",-1)),l(r,{output:L})]),_:1}),l(s,null,{default:e(()=>[t[80]||(t[80]=n(" Since ",-1)),l(u,null,{default:e(()=>[...t[77]||(t[77]=[n("number > 0",-1)])]),_:1}),t[81]||(t[81]=n(" is true, the value of ",-1)),l(u,null,{default:e(()=>[...t[78]||(t[78]=[n("number",-1)])]),_:1}),t[82]||(t[82]=n(" is changed to ",-1)),l(u,null,{default:e(()=>[...t[79]||(t[79]=[n("20",-1)])]),_:1}),t[83]||(t[83]=n(" . ",-1))]),_:1}),l(i,null,{default:e(()=>[...t[84]||(t[84]=[n("Checking Even or Odd",-1)])]),_:1}),l(s,null,{default:e(()=>[t[86]||(t[86]=n(" The modulus operator can be combined with ",-1)),l(u,null,{default:e(()=>[...t[85]||(t[85]=[n("if...else",-1)])]),_:1}),t[87]||(t[87]=n(" to determine whether a number is even or odd. ",-1)),l(o,{language:"c",code:U}),t[88]||(t[88]=n(" Output ",-1)),l(r,{output:$})]),_:1}),l(s,null,{default:e(()=>[t[91]||(t[91]=n(" If the remainder after dividing by ",-1)),l(u,null,{default:e(()=>[...t[89]||(t[89]=[n("2",-1)])]),_:1}),t[92]||(t[92]=n(" is ",-1)),l(u,null,{default:e(()=>[...t[90]||(t[90]=[n("0",-1)])]),_:1}),t[93]||(t[93]=n(" , the number is even. Otherwise, it is odd. ",-1))]),_:1}),l(i,null,{default:e(()=>[...t[94]||(t[94]=[n("The else Block Has No Condition",-1)])]),_:1}),l(s,null,{default:e(()=>[t[97]||(t[97]=n(" The ",-1)),l(u,null,{default:e(()=>[...t[95]||(t[95]=[n("else",-1)])]),_:1}),t[98]||(t[98]=n(" block does not have its own condition. It runs whenever the condition of the ",-1)),l(u,null,{default:e(()=>[...t[96]||(t[96]=[n("if",-1)])]),_:1}),t[99]||(t[99]=n(" statement is false. ",-1)),l(o,{language:"c",code:j}),t[100]||(t[100]=n(" Output ",-1)),l(r,{output:H})]),_:1}),l(i,null,{default:e(()=>[...t[101]||(t[101]=[n("if vs if...else",-1)])]),_:1}),l(s,null,{default:e(()=>[t[104]||(t[104]=n(" An ",-1)),l(u,null,{default:e(()=>[...t[102]||(t[102]=[n("if",-1)])]),_:1}),t[105]||(t[105]=n(" statement provides code for the true case only. An ",-1)),l(u,null,{default:e(()=>[...t[103]||(t[103]=[n("if...else",-1)])]),_:1}),t[106]||(t[106]=n(" statement provides code for both the true and false cases. ",-1))]),_:1}),l(i,null,{default:e(()=>[...t[107]||(t[107]=[n("Summary",-1)])]),_:1}),l(s,null,{default:e(()=>[t[111]||(t[111]=n(" The ",-1)),l(u,null,{default:e(()=>[...t[108]||(t[108]=[n("if...else",-1)])]),_:1}),t[112]||(t[112]=n(" statement allows a program to choose between two blocks of code. The ",-1)),l(u,null,{default:e(()=>[...t[109]||(t[109]=[n("if",-1)])]),_:1}),t[113]||(t[113]=n(" block runs when its condition is true, while the ",-1)),l(u,null,{default:e(()=>[...t[110]||(t[110]=[n("else",-1)])]),_:1}),t[114]||(t[114]=n(" block runs when the condition is false. ",-1))]),_:1}),l(s,null,{default:e(()=>[t[116]||(t[116]=n(" You learned how to use relational and logical operators with ",-1)),l(u,null,{default:e(()=>[...t[115]||(t[115]=[n("if...else",-1)])]),_:1}),t[117]||(t[117]=n(" , handle two possible outcomes, update variables, and perform simple decisions such as checking whether a number is even or odd. ",-1))]),_:1}),t[120]||(t[120]=d("br",null,null,-1)),l(m,{to:"/academia/student/classes/c-if-else-if-else-statement"})])]),_:1}))}});export{X as default};

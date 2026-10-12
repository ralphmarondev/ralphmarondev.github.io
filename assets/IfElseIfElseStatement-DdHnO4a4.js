import{_ as p}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{T as i,a as o,_ as a}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as s,C as u}from"./CodeBlock-Ayh7J4dk.js";import{O as r}from"./OutputBlock-CjsXuZMe.js";import{_ as f}from"./FernInfo.vue_vue_type_script_setup_true_lang-CYGdZlbx.js";import{d as g,h as b,i as e,o as k,a as d,q as l,g as n}from"./index-DSMoD1xp.js";const x={class:"max-w-4xl mx-auto"},w=`
#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("Excellent!\\n");
    } else if (score >= 75) {
        printf("Passed!\\n");
    } else {
        printf("Failed.\\n");
    }

    return 0;
}`,T="Passed!",v=`
#include <stdio.h>

int main() {
    int score = 95;

    if (score >= 90) {
        printf("Excellent!\\n");
    } else if (score >= 75) {
        printf("Passed!\\n");
    } else {
        printf("Failed.\\n");
    }

    return 0;
}`,O="Excellent!",P=`
#include <stdio.h>

int main() {
    int score = 60;

    if (score >= 90) {
        printf("Excellent!\\n");
    } else if (score >= 75) {
        printf("Passed!\\n");
    } else {
        printf("Failed.\\n");
    }

    return 0;
}`,C="Failed.",y=`
if (condition1) {
    // statements when condition1 is true
} else if (condition2) {
    // statements when condition2 is true
} else {
    // statements when all conditions are false
}`,I=`
#include <stdio.h>

int main() {
    int score = 82;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 75) {
        printf("Grade: C\\n");
    } else {
        printf("Grade: F\\n");
    }

    return 0;
}`,A="Grade: B",S=`
#include <stdio.h>

int main() {
    int age = 20;

    if (age < 13) {
        printf("Child\\n");
    } else if (age < 18) {
        printf("Teenager\\n");
    } else {
        printf("Adult\\n");
    }

    return 0;
}`,E="Adult",B=`
#include <stdio.h>

int main() {
    int number = -5;

    if (number > 0) {
        printf("Positive\\n");
    } else if (number < 0) {
        printf("Negative\\n");
    } else {
        printf("Zero\\n");
    }

    return 0;
}`,F="Negative",G=`
#include <stdio.h>

int main() {
    int temperature = 30;

    if (temperature >= 35) {
        printf("Very hot\\n");
    } else if (temperature >= 30) {
        printf("Hot\\n");
    } else if (temperature >= 20) {
        printf("Warm\\n");
    } else {
        printf("Cold\\n");
    }

    return 0;
}`,M="Hot",N=`
#include <stdio.h>

int main() {
    int score = 95;

    if (score >= 75) {
        printf("Passed\\n");
    } else if (score >= 90) {
        printf("Excellent\\n");
    } else {
        printf("Failed\\n");
    }

    return 0;
}`,W="Passed",V=`
#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("Excellent\\n");
    } else if (score >= 75) {
        printf("Passed\\n");
    }

    return 0;
}`,z="Passed",H=`
#include <stdio.h>

int main() {
    int score = 85;
    int attendance = 90;

    if (score >= 75) {
        if (attendance >= 80) {
            printf("Passed\\n");
        } else {
            printf("Attendance too low\\n");
        }
    } else {
        printf("Score too low\\n");
    }

    return 0;
}`,U="Passed",L=g({__name:"IfElseIfElseStatement",setup($){return(j,t)=>(k(),b(m,null,{default:e(()=>[d("div",x,[t[145]||(t[145]=d("div",{class:"w-full flex justify-center mb-6"},[d("img",{src:p,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[146]||(t[146]=d("div",{class:"text-center mb-4"},[d("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),d("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," if...else if...else Statement ")],-1)),l(i,null,{default:e(()=>[t[1]||(t[1]=n(" An ",-1)),l(s,null,{default:e(()=>[...t[0]||(t[0]=[n("if...else if...else",-1)])]),_:1}),t[2]||(t[2]=n(" statement allows a program to choose between multiple possible paths. It checks conditions from top to bottom and executes the first block whose condition is true. ",-1))]),_:1}),l(i,null,{default:e(()=>[...t[3]||(t[3]=[n(" This is useful when a program needs to handle more than two possible outcomes. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[4]||(t[4]=[n("Basic if...else if...else Statement",-1)])]),_:1}),l(i,null,{default:e(()=>[t[6]||(t[6]=n(" The basic syntax of an ",-1)),l(s,null,{default:e(()=>[...t[5]||(t[5]=[n("if...else if...else",-1)])]),_:1}),t[7]||(t[7]=n(" statement is: ",-1)),l(u,{language:"c",code:y})]),_:1}),l(i,null,{default:e(()=>[t[11]||(t[11]=n(" The program first checks the ",-1)),l(s,null,{default:e(()=>[...t[8]||(t[8]=[n("if",-1)])]),_:1}),t[12]||(t[12]=n(" condition. If it is false, it checks the ",-1)),l(s,null,{default:e(()=>[...t[9]||(t[9]=[n("else if",-1)])]),_:1}),t[13]||(t[13]=n(" condition. If all conditions are false, the ",-1)),l(s,null,{default:e(()=>[...t[10]||(t[10]=[n("else",-1)])]),_:1}),t[14]||(t[14]=n(" block runs. ",-1))]),_:1}),l(i,null,{default:e(()=>[t[15]||(t[15]=n(" For example: ",-1)),l(u,{language:"c",code:w}),t[16]||(t[16]=n(" Output ",-1)),l(r,{output:T})]),_:1}),l(i,null,{default:e(()=>[t[20]||(t[20]=n(" The score is ",-1)),l(s,null,{default:e(()=>[...t[17]||(t[17]=[n("85",-1)])]),_:1}),t[21]||(t[21]=n(" . The first condition, ",-1)),l(s,null,{default:e(()=>[...t[18]||(t[18]=[n("score >= 90",-1)])]),_:1}),t[22]||(t[22]=n(" , is false, so C checks the next condition. Since ",-1)),l(s,null,{default:e(()=>[...t[19]||(t[19]=[n("score >= 75",-1)])]),_:1}),t[23]||(t[23]=n(" is true, the second block runs. ",-1))]),_:1}),l(f,{title:"One Path Is Chosen"},{default:e(()=>[...t[24]||(t[24]=[n(" An if...else if...else statement does not execute every matching block. Once C finds a true condition, it executes that block and skips the remaining conditions. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[25]||(t[25]=[n("When the First Condition Is True",-1)])]),_:1}),l(i,null,{default:e(()=>[t[28]||(t[28]=n(" If the first condition is true, the remaining ",-1)),l(s,null,{default:e(()=>[...t[26]||(t[26]=[n("else if",-1)])]),_:1}),t[29]||(t[29]=n(" and ",-1)),l(s,null,{default:e(()=>[...t[27]||(t[27]=[n("else",-1)])]),_:1}),t[30]||(t[30]=n(" blocks are skipped. ",-1)),l(u,{language:"c",code:v}),t[31]||(t[31]=n(" Output ",-1)),l(r,{output:O})]),_:1}),l(i,null,{default:e(()=>[t[33]||(t[33]=n(" Since ",-1)),l(s,null,{default:e(()=>[...t[32]||(t[32]=[n("95 >= 90",-1)])]),_:1}),t[34]||(t[34]=n(" is true, the first block runs immediately. C does not check the remaining conditions. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[35]||(t[35]=[n("When All Conditions Are False",-1)])]),_:1}),l(i,null,{default:e(()=>[t[39]||(t[39]=n(" If none of the ",-1)),l(s,null,{default:e(()=>[...t[36]||(t[36]=[n("if",-1)])]),_:1}),t[40]||(t[40]=n(" or ",-1)),l(s,null,{default:e(()=>[...t[37]||(t[37]=[n("else if",-1)])]),_:1}),t[41]||(t[41]=n(" conditions are true, the ",-1)),l(s,null,{default:e(()=>[...t[38]||(t[38]=[n("else",-1)])]),_:1}),t[42]||(t[42]=n(" block handles the remaining case. ",-1)),l(u,{language:"c",code:P}),t[43]||(t[43]=n(" Output ",-1)),l(r,{output:C})]),_:1}),l(i,null,{default:e(()=>[t[48]||(t[48]=n(" Both conditions are false because ",-1)),l(s,null,{default:e(()=>[...t[44]||(t[44]=[n("60",-1)])]),_:1}),t[49]||(t[49]=n(" is less than ",-1)),l(s,null,{default:e(()=>[...t[45]||(t[45]=[n("90",-1)])]),_:1}),t[50]||(t[50]=n(" and ",-1)),l(s,null,{default:e(()=>[...t[46]||(t[46]=[n("75",-1)])]),_:1}),t[51]||(t[51]=n(" . Therefore, the ",-1)),l(s,null,{default:e(()=>[...t[47]||(t[47]=[n("else",-1)])]),_:1}),t[52]||(t[52]=n(" block runs. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[53]||(t[53]=[n("Checking Multiple Score Ranges",-1)])]),_:1}),l(i,null,{default:e(()=>[t[55]||(t[55]=n(" Multiple ",-1)),l(s,null,{default:e(()=>[...t[54]||(t[54]=[n("else if",-1)])]),_:1}),t[56]||(t[56]=n(" statements can be used when there are several possible ranges. ",-1)),l(u,{language:"c",code:I}),t[57]||(t[57]=n(" Output ",-1)),l(r,{output:A})]),_:1}),l(i,null,{default:e(()=>[t[61]||(t[61]=n(" The score is ",-1)),l(s,null,{default:e(()=>[...t[58]||(t[58]=[n("82",-1)])]),_:1}),t[62]||(t[62]=n(" . It does not satisfy the first condition, but it satisfies ",-1)),l(s,null,{default:e(()=>[...t[59]||(t[59]=[n("score >= 80",-1)])]),_:1}),t[63]||(t[63]=n(" , so the program prints ",-1)),l(s,null,{default:e(()=>[...t[60]||(t[60]=[n("Grade: B",-1)])]),_:1}),t[64]||(t[64]=n(" . ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[65]||(t[65]=[n("Checking Age Groups",-1)])]),_:1}),l(i,null,{default:e(()=>[t[67]||(t[67]=n(" An ",-1)),l(s,null,{default:e(()=>[...t[66]||(t[66]=[n("if...else if...else",-1)])]),_:1}),t[68]||(t[68]=n(" statement can also classify values into different groups. ",-1)),l(u,{language:"c",code:S}),t[69]||(t[69]=n(" Output ",-1)),l(r,{output:E})]),_:1}),l(i,null,{default:e(()=>[t[74]||(t[74]=n(" Since the age is ",-1)),l(s,null,{default:e(()=>[...t[70]||(t[70]=[n("20",-1)])]),_:1}),t[75]||(t[75]=n(" , it is not less than ",-1)),l(s,null,{default:e(()=>[...t[71]||(t[71]=[n("13",-1)])]),_:1}),t[76]||(t[76]=n(" and not less than ",-1)),l(s,null,{default:e(()=>[...t[72]||(t[72]=[n("18",-1)])]),_:1}),t[77]||(t[77]=n(" . Therefore, the ",-1)),l(s,null,{default:e(()=>[...t[73]||(t[73]=[n("else",-1)])]),_:1}),t[78]||(t[78]=n(" block runs. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[79]||(t[79]=[n("Checking Positive, Negative, or Zero",-1)])]),_:1}),l(i,null,{default:e(()=>[t[80]||(t[80]=n(" Multiple conditions can also be used to determine whether a number is positive, negative, or zero. ",-1)),l(u,{language:"c",code:B}),t[81]||(t[81]=n(" Output ",-1)),l(r,{output:F})]),_:1}),l(i,null,{default:e(()=>[t[83]||(t[83]=n(" The number is ",-1)),l(s,null,{default:e(()=>[...t[82]||(t[82]=[n("-5",-1)])]),_:1}),t[84]||(t[84]=n(" . It is not greater than zero, but it is less than zero, so the second condition is true. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[85]||(t[85]=[n("Using Multiple else if Statements",-1)])]),_:1}),l(i,null,{default:e(()=>[t[87]||(t[87]=n(" There is no fixed limit to the number of ",-1)),l(s,null,{default:e(()=>[...t[86]||(t[86]=[n("else if",-1)])]),_:1}),t[88]||(t[88]=n(" conditions that can be used. Multiple conditions can be added when a program has several possible outcomes. ",-1)),l(u,{language:"c",code:G}),t[89]||(t[89]=n(" Output ",-1)),l(r,{output:M})]),_:1}),l(i,null,{default:e(()=>[t[92]||(t[92]=n(" The temperature is ",-1)),l(s,null,{default:e(()=>[...t[90]||(t[90]=[n("30",-1)])]),_:1}),t[93]||(t[93]=n(" . The first condition is false, while the second condition is true. Therefore, the program prints ",-1)),l(s,null,{default:e(()=>[...t[91]||(t[91]=[n("Hot",-1)])]),_:1}),t[94]||(t[94]=n(" and stops checking the remaining conditions. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[95]||(t[95]=[n("The Order of Conditions Matters",-1)])]),_:1}),l(i,null,{default:e(()=>[t[96]||(t[96]=n(" Conditions are checked from top to bottom. Because of this, the order of the conditions can affect which block is executed. ",-1)),l(u,{language:"c",code:N}),t[97]||(t[97]=n(" Output ",-1)),l(r,{output:W})]),_:1}),l(i,null,{default:e(()=>[t[100]||(t[100]=n(" Even though ",-1)),l(s,null,{default:e(()=>[...t[98]||(t[98]=[n("score >= 90",-1)])]),_:1}),t[101]||(t[101]=n(" is also true, it is never reached. The first condition, ",-1)),l(s,null,{default:e(()=>[...t[99]||(t[99]=[n("score >= 75",-1)])]),_:1}),t[102]||(t[102]=n(" , is already true, so its block is executed. ",-1))]),_:1}),l(f,{title:"Check From Specific to General"},{default:e(()=>[...t[103]||(t[103]=[n(" When using several ranges, arrange your conditions carefully. A broad condition placed too early can prevent later conditions from ever being checked. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[104]||(t[104]=[n("Using if...else if Without else",-1)])]),_:1}),l(i,null,{default:e(()=>[t[108]||(t[108]=n(" The final ",-1)),l(s,null,{default:e(()=>[...t[105]||(t[105]=[n("else",-1)])]),_:1}),t[109]||(t[109]=n(" is optional. A program can use ",-1)),l(s,null,{default:e(()=>[...t[106]||(t[106]=[n("if",-1)])]),_:1}),t[110]||(t[110]=n(" and ",-1)),l(s,null,{default:e(()=>[...t[107]||(t[107]=[n("else if",-1)])]),_:1}),t[111]||(t[111]=n(" without providing a block for the remaining cases. ",-1)),l(u,{language:"c",code:V}),t[112]||(t[112]=n(" Output ",-1)),l(r,{output:z})]),_:1}),l(i,null,{default:e(()=>[t[114]||(t[114]=n(" If none of the conditions are true, the program simply continues after the entire ",-1)),l(s,null,{default:e(()=>[...t[113]||(t[113]=[n("if...else if",-1)])]),_:1}),t[115]||(t[115]=n(" structure. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[116]||(t[116]=[n("Using if...else Inside Another if",-1)])]),_:1}),l(i,null,{default:e(()=>[t[118]||(t[118]=n(" An ",-1)),l(s,null,{default:e(()=>[...t[117]||(t[117]=[n("if...else",-1)])]),_:1}),t[119]||(t[119]=n(" structure can also be placed inside another decision structure. This is called a nested conditional. ",-1)),l(u,{language:"c",code:H}),t[120]||(t[120]=n(" Output ",-1)),l(r,{output:U})]),_:1}),l(i,null,{default:e(()=>[t[123]||(t[123]=n(" First, the program checks whether the score is at least ",-1)),l(s,null,{default:e(()=>[...t[121]||(t[121]=[n("75",-1)])]),_:1}),t[124]||(t[124]=n(" . Since it is, the nested ",-1)),l(s,null,{default:e(()=>[...t[122]||(t[122]=[n("if",-1)])]),_:1}),t[125]||(t[125]=n(" checks the attendance before deciding what to print. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[126]||(t[126]=[n("if vs if...else vs if...else if...else",-1)])]),_:1}),l(i,null,{default:e(()=>[t[128]||(t[128]=n(" An ",-1)),l(s,null,{default:e(()=>[...t[127]||(t[127]=[n("if",-1)])]),_:1}),t[129]||(t[129]=n(" statement handles a condition when it is true. ",-1))]),_:1}),l(i,null,{default:e(()=>[t[131]||(t[131]=n(" An ",-1)),l(s,null,{default:e(()=>[...t[130]||(t[130]=[n("if...else",-1)])]),_:1}),t[132]||(t[132]=n(" statement provides two possible paths: one for true and one for false. ",-1))]),_:1}),l(i,null,{default:e(()=>[t[134]||(t[134]=n(" An ",-1)),l(s,null,{default:e(()=>[...t[133]||(t[133]=[n("if...else if...else",-1)])]),_:1}),t[135]||(t[135]=n(" statement provides multiple possible paths by checking several conditions in order. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[136]||(t[136]=[n("Summary",-1)])]),_:1}),l(i,null,{default:e(()=>[t[138]||(t[138]=n(" The ",-1)),l(s,null,{default:e(()=>[...t[137]||(t[137]=[n("if...else if...else",-1)])]),_:1}),t[139]||(t[139]=n(" statement allows a program to choose between multiple possible outcomes. Conditions are checked from top to bottom, and only the first true condition is executed. ",-1))]),_:1}),l(i,null,{default:e(()=>[t[142]||(t[142]=n(" You learned how to use multiple ",-1)),l(s,null,{default:e(()=>[...t[140]||(t[140]=[n("else if",-1)])]),_:1}),t[143]||(t[143]=n(" conditions, handle the final ",-1)),l(s,null,{default:e(()=>[...t[141]||(t[141]=[n("else",-1)])]),_:1}),t[144]||(t[144]=n(" case, classify values, work with ranges, and understand why the order of conditions matters. ",-1))]),_:1}),t[147]||(t[147]=d("br",null,null,-1)),l(a,{to:"/academia/student/classes/c-switch-statement"})])]),_:1}))}});export{L as default};

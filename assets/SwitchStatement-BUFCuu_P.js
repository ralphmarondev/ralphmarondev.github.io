import{_ as f}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-B3G-GaUa.js";import{T as s,a as i,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-C0JJmNPf.js";import{C as r}from"./CodeBlock-BTW9CWle.js";import{O as o}from"./OutputBlock-1tVxatZn.js";import{T as e}from"./TopicTerm-DFxx4A6I.js";import{_ as a}from"./FernInfo.vue_vue_type_script_setup_true_lang-BiF_AWI8.js";import{d as b,h as g,i as u,o as w,a as d,q as n,g as l}from"./index-DxySYCEn.js";const k={class:"max-w-4xl mx-auto"},x=`
#include <stdio.h>

int main() {
    int day = 2;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
    }

    return 0;
}`,v="Tuesday",T=`
switch (expression) {
    case value1:
        // statements
        break;
    case value2:
        // statements
        break;
    default:
        // statements
}`,O=`
#include <stdio.h>

int main() {
    int number = 3;

    switch (number) {
        case 1:
            printf("One\\n");
            break;
        case 2:
            printf("Two\\n");
            break;
        case 3:
            printf("Three\\n");
            break;
    }

    return 0;
}`,y="Three",C=`
#include <stdio.h>

int main() {
    int choice = 2;

    switch (choice) {
        case 1:
            printf("Option 1\\n");
            break;
        case 2:
            printf("Option 2\\n");
            break;
        case 3:
            printf("Option 3\\n");
            break;
    }

    return 0;
}`,S="Option 2",B=`
#include <stdio.h>

int main() {
    int number = 2;

    switch (number) {
        case 1:
            printf("One\\n");
        case 2:
            printf("Two\\n");
        case 3:
            printf("Three\\n");
    }

    return 0;
}`,P=`
Two
Three`,A=`
#include <stdio.h>

int main() {
    int choice = 5;

    switch (choice) {
        case 1:
            printf("Start\\n");
            break;
        case 2:
            printf("Settings\\n");
            break;
        case 3:
            printf("Exit\\n");
            break;
        default:
            printf("Invalid choice\\n");
    }

    return 0;
}`,I="Invalid choice",W=`
#include <stdio.h>

int main() {
    int choice = 2;

    switch (choice) {
        case 1:
            printf("New Game\\n");
            break;
        case 2:
            printf("Load Game\\n");
            break;
        case 3:
            printf("Exit\\n");
            break;
        default:
            printf("Invalid choice\\n");
    }

    return 0;
}`,N="Load Game",E=`
#include <stdio.h>

int main() {
    char grade = 'B';

    switch (grade) {
        case 'A':
            printf("Excellent\\n");
            break;
        case 'B':
            printf("Good\\n");
            break;
        case 'C':
            printf("Fair\\n");
            break;
        case 'D':
            printf("Needs improvement\\n");
            break;
        default:
            printf("Invalid grade\\n");
    }

    return 0;
}`,G="Good",F=`
#include <stdio.h>

int main() {
    int day = 6;

    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            printf("Weekday\\n");
            break;
        case 6:
        case 7:
            printf("Weekend\\n");
            break;
        default:
            printf("Invalid day\\n");
    }

    return 0;
}`,V="Weekend",L=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;
    char operator = '+';

    switch (operator) {
        case '+':
            printf("%d\\n", a + b);
            break;
        case '-':
            printf("%d\\n", a - b);
            break;
        case '*':
            printf("%d\\n", a * b);
            break;
        case '/':
            printf("%d\\n", a / b);
            break;
        default:
            printf("Invalid operator\\n");
    }

    return 0;
}`,M="15",$=`
#include <stdio.h>

int main() {
    int choice = 1;
    int number = 10;

    switch (choice) {
        case 1:
            number = 20;
            break;
        case 2:
            number = 30;
            break;
        default:
            number = 0;
    }

    printf("Number: %d\\n", number);

    return 0;
}`,j="Number: 20",D=`
#include <stdio.h>

int main() {
    int number = 2;

    if (number == 1) {
        printf("One\\n");
    } else if (number == 2) {
        printf("Two\\n");
    } else if (number == 3) {
        printf("Three\\n");
    } else {
        printf("Other\\n");
    }

    return 0;
}`,U="Two",h=b({__name:"SwitchStatement",setup(q){return(H,t)=>(w(),g(p,null,{default:u(()=>[d("div",k,[t[159]||(t[159]=d("div",{class:"w-full flex justify-center mb-6"},[d("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[160]||(t[160]=d("div",{class:"text-center mb-4"},[d("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),d("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Switch Statement ")],-1)),n(s,null,{default:u(()=>[t[1]||(t[1]=l(" A ",-1)),n(e,null,{default:u(()=>[...t[0]||(t[0]=[l("switch",-1)])]),_:1}),t[2]||(t[2]=l(" statement allows a program to choose one block of code from several possible options based on the value of an expression. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[3]||(t[3]=[l(" It is especially useful when a program needs to compare one value against several specific values. ",-1)])]),_:1}),n(i,null,{default:u(()=>[...t[4]||(t[4]=[l("Basic switch Statement",-1)])]),_:1}),n(s,null,{default:u(()=>[t[6]||(t[6]=l(" The basic syntax of a ",-1)),n(e,null,{default:u(()=>[...t[5]||(t[5]=[l("switch",-1)])]),_:1}),t[7]||(t[7]=l(" statement is: ",-1)),n(r,{language:"c",code:T})]),_:1}),n(s,null,{default:u(()=>[t[10]||(t[10]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[8]||(t[8]=[l("expression",-1)])]),_:1}),t[11]||(t[11]=l(" is evaluated, and C looks for a ",-1)),n(e,null,{default:u(()=>[...t[9]||(t[9]=[l("case",-1)])]),_:1}),t[12]||(t[12]=l(" with a matching value. ",-1))]),_:1}),n(s,null,{default:u(()=>[t[13]||(t[13]=l(" For example: ",-1)),n(r,{language:"c",code:x}),t[14]||(t[14]=l(" Output ",-1)),n(o,{output:v})]),_:1}),n(s,null,{default:u(()=>[t[18]||(t[18]=l(" The value of ",-1)),n(e,null,{default:u(()=>[...t[15]||(t[15]=[l("day",-1)])]),_:1}),t[19]||(t[19]=l(" is ",-1)),n(e,null,{default:u(()=>[...t[16]||(t[16]=[l("2",-1)])]),_:1}),t[20]||(t[20]=l(" , so the program finds ",-1)),n(e,null,{default:u(()=>[...t[17]||(t[17]=[l("case 2",-1)])]),_:1}),t[21]||(t[21]=l(" and executes its statements. ",-1))]),_:1}),n(a,{title:"Think of Cases as Choices"},{default:u(()=>[...t[22]||(t[22]=[l(" Each case represents a possible value that the switch can match. The program chooses the case that matches the value being checked. ",-1)])]),_:1}),n(i,null,{default:u(()=>[...t[23]||(t[23]=[l("The case Statement",-1)])]),_:1}),n(s,null,{default:u(()=>[t[25]||(t[25]=l(" A ",-1)),n(e,null,{default:u(()=>[...t[24]||(t[24]=[l("case",-1)])]),_:1}),t[26]||(t[26]=l(" defines a value that the switch expression can match. ",-1)),n(r,{language:"c",code:O}),t[27]||(t[27]=l(" Output ",-1)),n(o,{output:y})]),_:1}),n(s,null,{default:u(()=>[t[31]||(t[31]=l(" Since ",-1)),n(e,null,{default:u(()=>[...t[28]||(t[28]=[l("number",-1)])]),_:1}),t[32]||(t[32]=l(" contains ",-1)),n(e,null,{default:u(()=>[...t[29]||(t[29]=[l("3",-1)])]),_:1}),t[33]||(t[33]=l(" , the program executes ",-1)),n(e,null,{default:u(()=>[...t[30]||(t[30]=[l("case 3",-1)])]),_:1}),t[34]||(t[34]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[35]||(t[35]=[l("The break Statement",-1)])]),_:1}),n(s,null,{default:u(()=>[t[37]||(t[37]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[36]||(t[36]=[l("break",-1)])]),_:1}),t[38]||(t[38]=l(" statement stops the switch after the matching case has been executed. ",-1)),n(r,{language:"c",code:C}),t[39]||(t[39]=l(" Output ",-1)),n(o,{output:S})]),_:1}),n(s,null,{default:u(()=>[t[42]||(t[42]=l(" After printing ",-1)),n(e,null,{default:u(()=>[...t[40]||(t[40]=[l("Option 2",-1)])]),_:1}),t[43]||(t[43]=l(" , the ",-1)),n(e,null,{default:u(()=>[...t[41]||(t[41]=[l("break",-1)])]),_:1}),t[44]||(t[44]=l(" statement exits the switch. The remaining cases are not executed. ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[45]||(t[45]=[l("What Happens Without break?",-1)])]),_:1}),n(s,null,{default:u(()=>[t[47]||(t[47]=l(" If a matching case does not contain a ",-1)),n(e,null,{default:u(()=>[...t[46]||(t[46]=[l("break",-1)])]),_:1}),t[48]||(t[48]=l(" , execution continues into the following cases. ",-1)),n(r,{language:"c",code:B}),t[49]||(t[49]=l(" Output ",-1)),n(o,{output:P})]),_:1}),n(s,null,{default:u(()=>[t[53]||(t[53]=l(" The program starts at ",-1)),n(e,null,{default:u(()=>[...t[50]||(t[50]=[l("case 2",-1)])]),_:1}),t[54]||(t[54]=l(" , but there is no ",-1)),n(e,null,{default:u(()=>[...t[51]||(t[51]=[l("break",-1)])]),_:1}),t[55]||(t[55]=l(" . Therefore, it continues into ",-1)),n(e,null,{default:u(()=>[...t[52]||(t[52]=[l("case 3",-1)])]),_:1}),t[56]||(t[56]=l(" as well. ",-1))]),_:1}),n(a,{title:"Don't Forget break"},{default:u(()=>[...t[57]||(t[57]=[l(" In most switch statements, each case should end with break when you want the program to stop after that case. Without it, execution can continue into the next case. ",-1)])]),_:1}),n(i,null,{default:u(()=>[...t[58]||(t[58]=[l("The default Case",-1)])]),_:1}),n(s,null,{default:u(()=>[t[60]||(t[60]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[59]||(t[59]=[l("default",-1)])]),_:1}),t[61]||(t[61]=l(" case handles situations where none of the cases match the switch expression. ",-1)),n(r,{language:"c",code:A}),t[62]||(t[62]=l(" Output ",-1)),n(o,{output:I})]),_:1}),n(s,null,{default:u(()=>[t[65]||(t[65]=l(" Since ",-1)),n(e,null,{default:u(()=>[...t[63]||(t[63]=[l("5",-1)])]),_:1}),t[66]||(t[66]=l(" does not match any of the available cases, the ",-1)),n(e,null,{default:u(()=>[...t[64]||(t[64]=[l("default",-1)])]),_:1}),t[67]||(t[67]=l(" block runs. ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[68]||(t[68]=[l("Creating a Simple Menu",-1)])]),_:1}),n(s,null,{default:u(()=>[t[70]||(t[70]=l(" A ",-1)),n(e,null,{default:u(()=>[...t[69]||(t[69]=[l("switch",-1)])]),_:1}),t[71]||(t[71]=l(" statement works well for menu-based programs where each option has a specific value. ",-1)),n(r,{language:"c",code:W}),t[72]||(t[72]=l(" Output ",-1)),n(o,{output:N})]),_:1}),n(s,null,{default:u(()=>[t[76]||(t[76]=l(" The user choice is represented by ",-1)),n(e,null,{default:u(()=>[...t[73]||(t[73]=[l("choice",-1)])]),_:1}),t[77]||(t[77]=l(" . Since its value is ",-1)),n(e,null,{default:u(()=>[...t[74]||(t[74]=[l("2",-1)])]),_:1}),t[78]||(t[78]=l(" , the program selects the ",-1)),n(e,null,{default:u(()=>[...t[75]||(t[75]=[l("Load Game",-1)])]),_:1}),t[79]||(t[79]=l(" option. ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[80]||(t[80]=[l("Using Characters with switch",-1)])]),_:1}),n(s,null,{default:u(()=>[t[82]||(t[82]=l(" A ",-1)),n(e,null,{default:u(()=>[...t[81]||(t[81]=[l("switch",-1)])]),_:1}),t[83]||(t[83]=l(" can also compare character values. ",-1)),n(r,{language:"c",code:E}),t[84]||(t[84]=l(" Output ",-1)),n(o,{output:G})]),_:1}),n(s,null,{default:u(()=>[t[88]||(t[88]=l(" The value of ",-1)),n(e,null,{default:u(()=>[...t[85]||(t[85]=[l("grade",-1)])]),_:1}),t[89]||(t[89]=l(" is ",-1)),n(e,null,{default:u(()=>[...t[86]||(t[86]=[l("'B'",-1)])]),_:1}),t[90]||(t[90]=l(" , so ",-1)),n(e,null,{default:u(()=>[...t[87]||(t[87]=[l("case 'B'",-1)])]),_:1}),t[91]||(t[91]=l(" is selected. ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[92]||(t[92]=[l("Multiple Cases for One Result",-1)])]),_:1}),n(s,null,{default:u(()=>[t[93]||(t[93]=l(" Several cases can be used together when different values should produce the same result. ",-1)),n(r,{language:"c",code:F}),t[94]||(t[94]=l(" Output ",-1)),n(o,{output:V})]),_:1}),n(s,null,{default:u(()=>[t[101]||(t[101]=l(" Cases ",-1)),n(e,null,{default:u(()=>[...t[95]||(t[95]=[l("1",-1)])]),_:1}),t[102]||(t[102]=l(" through ",-1)),n(e,null,{default:u(()=>[...t[96]||(t[96]=[l("5",-1)])]),_:1}),t[103]||(t[103]=l(" all lead to the same ",-1)),n(e,null,{default:u(()=>[...t[97]||(t[97]=[l("Weekday",-1)])]),_:1}),t[104]||(t[104]=l(" message. Cases ",-1)),n(e,null,{default:u(()=>[...t[98]||(t[98]=[l("6",-1)])]),_:1}),t[105]||(t[105]=l(" and ",-1)),n(e,null,{default:u(()=>[...t[99]||(t[99]=[l("7",-1)])]),_:1}),t[106]||(t[106]=l(" both lead to ",-1)),n(e,null,{default:u(()=>[...t[100]||(t[100]=[l("Weekend",-1)])]),_:1}),t[107]||(t[107]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[108]||(t[108]=[l("Using switch for a Calculator",-1)])]),_:1}),n(s,null,{default:u(()=>[t[110]||(t[110]=l(" A ",-1)),n(e,null,{default:u(()=>[...t[109]||(t[109]=[l("switch",-1)])]),_:1}),t[111]||(t[111]=l(" can also select an operation based on a character. ",-1)),n(r,{language:"c",code:L}),t[112]||(t[112]=l(" Output ",-1)),n(o,{output:M})]),_:1}),n(s,null,{default:u(()=>[t[116]||(t[116]=l(" The operator is ",-1)),n(e,null,{default:u(()=>[...t[113]||(t[113]=[l("'+'",-1)])]),_:1}),t[117]||(t[117]=l(" , so the addition case is selected and ",-1)),n(e,null,{default:u(()=>[...t[114]||(t[114]=[l("10 + 5",-1)])]),_:1}),t[118]||(t[118]=l(" produces ",-1)),n(e,null,{default:u(()=>[...t[115]||(t[115]=[l("15",-1)])]),_:1}),t[119]||(t[119]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[120]||(t[120]=[l("Changing a Variable",-1)])]),_:1}),n(s,null,{default:u(()=>[t[121]||(t[121]=l(" A switch case can also perform assignments or other statements. ",-1)),n(r,{language:"c",code:$}),t[122]||(t[122]=l(" Output ",-1)),n(o,{output:j})]),_:1}),n(s,null,{default:u(()=>[t[128]||(t[128]=l(" Because ",-1)),n(e,null,{default:u(()=>[...t[123]||(t[123]=[l("choice",-1)])]),_:1}),t[129]||(t[129]=l(" is ",-1)),n(e,null,{default:u(()=>[...t[124]||(t[124]=[l("1",-1)])]),_:1}),t[130]||(t[130]=l(" , the program changes ",-1)),n(e,null,{default:u(()=>[...t[125]||(t[125]=[l("number",-1)])]),_:1}),t[131]||(t[131]=l(" from ",-1)),n(e,null,{default:u(()=>[...t[126]||(t[126]=[l("10",-1)])]),_:1}),t[132]||(t[132]=l(" to ",-1)),n(e,null,{default:u(()=>[...t[127]||(t[127]=[l("20",-1)])]),_:1}),t[133]||(t[133]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[134]||(t[134]=[l("switch vs if...else if...else",-1)])]),_:1}),n(s,null,{default:u(()=>[t[136]||(t[136]=l(" A ",-1)),n(e,null,{default:u(()=>[...t[135]||(t[135]=[l("switch",-1)])]),_:1}),t[137]||(t[137]=l(" is useful when one expression needs to be compared with several specific values. ",-1))]),_:1}),n(s,null,{default:u(()=>[t[139]||(t[139]=l(" An ",-1)),n(e,null,{default:u(()=>[...t[138]||(t[138]=[l("if...else if...else",-1)])]),_:1}),t[140]||(t[140]=l(" structure is more flexible because its conditions can use relational and logical operators. ",-1))]),_:1}),n(s,null,{default:u(()=>[t[142]||(t[142]=l(" For example, this ",-1)),n(e,null,{default:u(()=>[...t[141]||(t[141]=[l("if...else if...else",-1)])]),_:1}),t[143]||(t[143]=l(" structure checks different values: ",-1)),n(r,{language:"c",code:D}),t[144]||(t[144]=l(" Output ",-1)),n(o,{output:U})]),_:1}),n(s,null,{default:u(()=>[t[146]||(t[146]=l(" The two structures can sometimes solve similar problems, but ",-1)),n(e,null,{default:u(()=>[...t[145]||(t[145]=[l("switch",-1)])]),_:1}),t[147]||(t[147]=l(" is designed around matching specific case values. ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[148]||(t[148]=[l("Summary",-1)])]),_:1}),n(s,null,{default:u(()=>[t[150]||(t[150]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[149]||(t[149]=[l("switch",-1)])]),_:1}),t[151]||(t[151]=l(" statement allows a program to select one block of code based on the value of an expression. ",-1))]),_:1}),n(s,null,{default:u(()=>[t[155]||(t[155]=l(" You learned how to use ",-1)),n(e,null,{default:u(()=>[...t[152]||(t[152]=[l("case",-1)])]),_:1}),t[156]||(t[156]=l(" , ",-1)),n(e,null,{default:u(()=>[...t[153]||(t[153]=[l("break",-1)])]),_:1}),t[157]||(t[157]=l(" , and ",-1)),n(e,null,{default:u(()=>[...t[154]||(t[154]=[l("default",-1)])]),_:1}),t[158]||(t[158]=l(" , handle multiple cases with the same result, and use switch statements for menus, characters, and simple calculations. ",-1))]),_:1}),t[161]||(t[161]=d("br",null,null,-1)),n(m,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{h as default};

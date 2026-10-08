import{_ as m}from"./logo-C9ImmdpX.js";import{T as e,a as r,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{T as o,C as s}from"./CodeBlock-Z3HAVLif.js";import{O as d}from"./OutputBlock-B9VPajdJ.js";import{_ as f}from"./FernInfo.vue_vue_type_script_setup_true_lang-CMwsacWG.js";import{_ as b}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{d as g,h as a,i as u,o as k,a as i,q as l,g as n}from"./index-BRxoWVJY.js";const x={class:"max-w-4xl mx-auto"},v={class:"list-disc pl-6 space-y-2"},w={class:"list-disc pl-6 space-y-2"},O=`
for (initialization; condition; update) {
    if (condition) {
        break;
    }
}`,y=`
for (initialization; condition; update) {
    if (condition) {
        continue;
    }
}`,T=`
#include <stdio.h>

int main() {
    for (int number = 1; number <= 10; number++) {
        if (number == 6) {
            break;
        }
        printf("%d\\n", number);
    }
    return 0;
}`,S=`
1
2
3
4
5`,C=`
#include <stdio.h>

int main() {
    int number = 1;

    while (number <= 10) {
        if (number == 6) {
            break;
        }
        printf("%d\\n", number);
        number++;
    }
    return 0;
}`,B=`
1
2
3
4
5`,P=`
#include <stdio.h>

int main() {
    int numbers[] = {4, 8, 12, 16, 20};
    int target = 12;

    for (int index = 0; index < 5; index++) {
        if (numbers[index] == target) {
            printf("Found %d\\n", target);
            break;
        }
    }
    return 0;
}`,I="Found 12",W=`
#include <stdio.h>

int main() {
    for (int number = 1; number <= 5; number++) {
        if (number == 3) {
            continue;
        }
        printf("%d\\n", number);
    }
    return 0;
}`,E=`
1
2
4
5`,N=`
#include <stdio.h>

int main() {
    for (int number = 1; number <= 10; number++) {
        if (number % 2 != 0) {
            continue;
        }
        printf("%d\\n", number);
    }
    return 0;
}`,A=`
2
4
6
8
10`,V=`
#include <stdio.h>

int main() {
    int sum = 0;

    for (int number = 1; number <= 10; number++) {
        if (number % 2 != 0) {
            continue;
        }
        sum += number;
    }
    printf("Sum: %d\\n", sum);
    return 0;
}`,F="Sum: 30",L=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 5; column++) {
            if (column == 3) {
                break;
            }
            printf("%d ", column);
        }
        printf("\\n");
    }
    return 0;
}`,$=`
1 2
1 2
1 2`,j=`
#include <stdio.h>

int main() {
    for (int row = 1; row <= 3; row++) {
        for (int column = 1; column <= 5; column++) {
            if (column == 3) {
                continue;
            }
            printf("%d ", column);
        }
        printf("\\n");
    }
    return 0;
}`,z=`
1 2 4 5
1 2 4 5
1 2 4 5`,D=`
#include <stdio.h>

int main() {
    int number;

    while (1) {
        printf("Enter a positive number: ");
        scanf("%d", &number);

        if (number > 0) {
            break;
        }
    }
    printf("Accepted: %d\\n", number);
    return 0;
}`,H=`
Enter a positive number: -4
Enter a positive number: 0
Enter a positive number: 7
Accepted: 7`,Y=g({__name:"BreakAndContinue",setup(U){return(q,t)=>(k(),a(b,null,{default:u(()=>[i("div",x,[t[151]||(t[151]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[152]||(t[152]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 5 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," break and continue ")],-1)),l(e,null,{default:u(()=>[t[2]||(t[2]=n(" Normally, a loop continues until its condition becomes false. C provides two statements that can change this behavior: ",-1)),l(o,null,{default:u(()=>[...t[0]||(t[0]=[n("break",-1)])]),_:1}),t[3]||(t[3]=n(" and ",-1)),l(o,null,{default:u(()=>[...t[1]||(t[1]=[n("continue",-1)])]),_:1}),t[4]||(t[4]=n(" . ",-1))]),_:1}),l(e,null,{default:u(()=>[l(o,null,{default:u(()=>[...t[5]||(t[5]=[n("break",-1)])]),_:1}),t[7]||(t[7]=n(" stops the loop completely, while ",-1)),l(o,null,{default:u(()=>[...t[6]||(t[6]=[n("continue",-1)])]),_:1}),t[8]||(t[8]=n(" skips the rest of the current iteration and moves to the next one. ",-1))]),_:1}),l(f,{title:"The Simple Difference"},{default:u(()=>[t[11]||(t[11]=n(" Think of ",-1)),l(o,null,{default:u(()=>[...t[9]||(t[9]=[n("break",-1)])]),_:1}),t[12]||(t[12]=n(" as ",-1)),t[13]||(t[13]=i("strong",null,"“stop the loop”",-1)),t[14]||(t[14]=n(" and ",-1)),l(o,null,{default:u(()=>[...t[10]||(t[10]=[n("continue",-1)])]),_:1}),t[15]||(t[15]=n(" as ",-1)),t[16]||(t[16]=i("strong",null,"“skip this iteration.”",-1))]),_:1}),l(r,null,{default:u(()=>[...t[17]||(t[17]=[n("The break Statement",-1)])]),_:1}),l(e,null,{default:u(()=>[t[19]||(t[19]=n(" The ",-1)),l(o,null,{default:u(()=>[...t[18]||(t[18]=[n("break",-1)])]),_:1}),t[20]||(t[20]=n(" statement immediately terminates the loop in which it appears. ",-1)),l(s,{language:"c",code:O})]),_:1}),l(e,null,{default:u(()=>[t[23]||(t[23]=n(" When the condition inside the ",-1)),l(o,null,{default:u(()=>[...t[21]||(t[21]=[n("if",-1)])]),_:1}),t[24]||(t[24]=n(" statement becomes true, the ",-1)),l(o,null,{default:u(()=>[...t[22]||(t[22]=[n("break",-1)])]),_:1}),t[25]||(t[25]=n(" statement is executed and the loop stops. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[26]||(t[26]=[n("Basic break Example",-1)])]),_:1}),l(e,null,{default:u(()=>[t[30]||(t[30]=n(" In this example, the loop normally counts from ",-1)),l(o,null,{default:u(()=>[...t[27]||(t[27]=[n("1",-1)])]),_:1}),t[31]||(t[31]=n(" to ",-1)),l(o,null,{default:u(()=>[...t[28]||(t[28]=[n("10",-1)])]),_:1}),t[32]||(t[32]=n(" . However, it stops when the number reaches ",-1)),l(o,null,{default:u(()=>[...t[29]||(t[29]=[n("6",-1)])]),_:1}),t[33]||(t[33]=n(" . ",-1)),l(s,{language:"c",code:T}),t[34]||(t[34]=n(" Output ",-1)),l(d,{output:S})]),_:1}),l(e,null,{default:u(()=>[t[38]||(t[38]=n(" The number ",-1)),l(o,null,{default:u(()=>[...t[35]||(t[35]=[n("6",-1)])]),_:1}),t[39]||(t[39]=n(" is never printed because ",-1)),l(o,null,{default:u(()=>[...t[36]||(t[36]=[n("break",-1)])]),_:1}),t[40]||(t[40]=n(" stops the loop before the ",-1)),l(o,null,{default:u(()=>[...t[37]||(t[37]=[n("printf",-1)])]),_:1}),t[41]||(t[41]=n(" statement is reached. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[42]||(t[42]=[n("break with while",-1)])]),_:1}),l(e,null,{default:u(()=>[t[45]||(t[45]=n(" The ",-1)),l(o,null,{default:u(()=>[...t[43]||(t[43]=[n("break",-1)])]),_:1}),t[46]||(t[46]=n(" statement can also be used with a ",-1)),l(o,null,{default:u(()=>[...t[44]||(t[44]=[n("while",-1)])]),_:1}),t[47]||(t[47]=n(" loop. ",-1)),l(s,{language:"c",code:C}),t[48]||(t[48]=n(" Output ",-1)),l(d,{output:B})]),_:1}),l(e,null,{default:u(()=>[t[51]||(t[51]=n(" When ",-1)),l(o,null,{default:u(()=>[...t[49]||(t[49]=[n("number",-1)])]),_:1}),t[52]||(t[52]=n(" becomes ",-1)),l(o,null,{default:u(()=>[...t[50]||(t[50]=[n("6",-1)])]),_:1}),t[53]||(t[53]=n(" , the loop immediately ends. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[54]||(t[54]=[n("Stopping a Search",-1)])]),_:1}),l(e,null,{default:u(()=>[t[56]||(t[56]=n(" One practical use of ",-1)),l(o,null,{default:u(()=>[...t[55]||(t[55]=[n("break",-1)])]),_:1}),t[57]||(t[57]=n(" is stopping a loop once the value being searched for has been found. ",-1)),l(s,{language:"c",code:P}),t[58]||(t[58]=n(" Output ",-1)),l(d,{output:I})]),_:1}),l(e,null,{default:u(()=>[t[60]||(t[60]=n(" Once the target is found, there is no need to continue checking the remaining values, so ",-1)),l(o,null,{default:u(()=>[...t[59]||(t[59]=[n("break",-1)])]),_:1}),t[61]||(t[61]=n(" ends the loop. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[62]||(t[62]=[n("The continue Statement",-1)])]),_:1}),l(e,null,{default:u(()=>[t[64]||(t[64]=n(" The ",-1)),l(o,null,{default:u(()=>[...t[63]||(t[63]=[n("continue",-1)])]),_:1}),t[65]||(t[65]=n(" statement does not stop the loop. Instead, it skips the remaining statements in the current iteration. ",-1)),l(s,{language:"c",code:y})]),_:1}),l(e,null,{default:u(()=>[t[67]||(t[67]=n(" After ",-1)),l(o,null,{default:u(()=>[...t[66]||(t[66]=[n("continue",-1)])]),_:1}),t[68]||(t[68]=n(" is executed, the loop proceeds to its next iteration. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[69]||(t[69]=[n("Basic continue Example",-1)])]),_:1}),l(e,null,{default:u(()=>[t[71]||(t[71]=n(" Here, the number ",-1)),l(o,null,{default:u(()=>[...t[70]||(t[70]=[n("3",-1)])]),_:1}),t[72]||(t[72]=n(" is skipped. ",-1)),l(s,{language:"c",code:W}),t[73]||(t[73]=n(" Output ",-1)),l(d,{output:E})]),_:1}),l(e,null,{default:u(()=>[t[79]||(t[79]=n(" When ",-1)),l(o,null,{default:u(()=>[...t[74]||(t[74]=[n("number",-1)])]),_:1}),t[80]||(t[80]=n(" is ",-1)),l(o,null,{default:u(()=>[...t[75]||(t[75]=[n("3",-1)])]),_:1}),t[81]||(t[81]=n(" , ",-1)),l(o,null,{default:u(()=>[...t[76]||(t[76]=[n("continue",-1)])]),_:1}),t[82]||(t[82]=n(" skips the ",-1)),l(o,null,{default:u(()=>[...t[77]||(t[77]=[n("printf",-1)])]),_:1}),t[83]||(t[83]=n(" statement. The loop then continues with ",-1)),l(o,null,{default:u(()=>[...t[78]||(t[78]=[n("4",-1)])]),_:1}),t[84]||(t[84]=n(" . ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[85]||(t[85]=[n("Skipping Odd Numbers",-1)])]),_:1}),l(e,null,{default:u(()=>[t[87]||(t[87]=n(" We can use ",-1)),l(o,null,{default:u(()=>[...t[86]||(t[86]=[n("continue",-1)])]),_:1}),t[88]||(t[88]=n(" to skip values that do not meet a condition. ",-1)),l(s,{language:"c",code:N}),t[89]||(t[89]=n(" Output ",-1)),l(d,{output:A})]),_:1}),l(e,null,{default:u(()=>[t[91]||(t[91]=n(" When a number is odd, the ",-1)),l(o,null,{default:u(()=>[...t[90]||(t[90]=[n("continue",-1)])]),_:1}),t[92]||(t[92]=n(" statement skips the rest of that iteration. Only even numbers are printed. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[93]||(t[93]=[n("Using continue in Calculations",-1)])]),_:1}),l(e,null,{default:u(()=>[l(o,null,{default:u(()=>[...t[94]||(t[94]=[n("continue",-1)])]),_:1}),t[95]||(t[95]=n(" can also be used to ignore certain values while performing a calculation. ",-1)),l(s,{language:"c",code:V}),t[96]||(t[96]=n(" Output ",-1)),l(d,{output:F})]),_:1}),l(e,null,{default:u(()=>[t[98]||(t[98]=n(" Odd numbers are skipped, so only the even numbers are added to ",-1)),l(o,null,{default:u(()=>[...t[97]||(t[97]=[n("sum",-1)])]),_:1}),t[99]||(t[99]=n(" . ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[100]||(t[100]=[n("break in a Nested Loop",-1)])]),_:1}),l(e,null,{default:u(()=>[t[102]||(t[102]=n(" When ",-1)),l(o,null,{default:u(()=>[...t[101]||(t[101]=[n("break",-1)])]),_:1}),t[103]||(t[103]=n(" is used inside a nested loop, it stops the innermost loop containing it. ",-1)),l(s,{language:"c",code:L}),t[104]||(t[104]=n(" Output ",-1)),l(d,{output:$})]),_:1}),l(e,null,{default:u(()=>[t[107]||(t[107]=n(" The inner loop stops when ",-1)),l(o,null,{default:u(()=>[...t[105]||(t[105]=[n("column",-1)])]),_:1}),t[108]||(t[108]=n(" reaches ",-1)),l(o,null,{default:u(()=>[...t[106]||(t[106]=[n("3",-1)])]),_:1}),t[109]||(t[109]=n(" , but the outer loop continues to its next row. ",-1))]),_:1}),l(f,{title:"Which Loop Does It Stop?"},{default:u(()=>[t[111]||(t[111]=n(" A ",-1)),l(o,null,{default:u(()=>[...t[110]||(t[110]=[n("break",-1)])]),_:1}),t[112]||(t[112]=n(" does not automatically stop every loop. It only exits the loop it belongs to. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[113]||(t[113]=[n("continue in a Nested Loop",-1)])]),_:1}),l(e,null,{default:u(()=>[t[115]||(t[115]=n(" Similarly, ",-1)),l(o,null,{default:u(()=>[...t[114]||(t[114]=[n("continue",-1)])]),_:1}),t[116]||(t[116]=n(" affects the current iteration of the innermost loop where it is used. ",-1)),l(s,{language:"c",code:j}),t[117]||(t[117]=n(" Output ",-1)),l(d,{output:z})]),_:1}),l(e,null,{default:u(()=>[t[119]||(t[119]=n(" The value ",-1)),l(o,null,{default:u(()=>[...t[118]||(t[118]=[n("3",-1)])]),_:1}),t[120]||(t[120]=n(" is skipped in every row, but the inner loop continues with the next column. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[121]||(t[121]=[n("Using break for Input Validation",-1)])]),_:1}),l(e,null,{default:u(()=>[t[123]||(t[123]=n(" A ",-1)),l(o,null,{default:u(()=>[...t[122]||(t[122]=[n("break",-1)])]),_:1}),t[124]||(t[124]=n(" statement can also be useful when the program needs to keep asking for input until a valid value is entered. ",-1)),l(s,{language:"c",code:D}),t[125]||(t[125]=n(" Output ",-1)),l(d,{output:H})]),_:1}),l(e,null,{default:u(()=>[t[127]||(t[127]=n(" The loop continues asking for input until the user enters a positive number. Once a valid value is entered, ",-1)),l(o,null,{default:u(()=>[...t[126]||(t[126]=[n("break",-1)])]),_:1}),t[128]||(t[128]=n(" exits the loop. ",-1))]),_:1}),l(r,null,{default:u(()=>[...t[129]||(t[129]=[n("break vs continue",-1)])]),_:1}),l(e,null,{default:u(()=>[i("ul",v,[i("li",null,[l(o,null,{default:u(()=>[...t[130]||(t[130]=[n("break",-1)])]),_:1}),t[131]||(t[131]=n(" completely stops the loop. ",-1))]),i("li",null,[l(o,null,{default:u(()=>[...t[132]||(t[132]=[n("continue",-1)])]),_:1}),t[133]||(t[133]=n(" skips the current iteration. ",-1))]),i("li",null,[l(o,null,{default:u(()=>[...t[134]||(t[134]=[n("break",-1)])]),_:1}),t[135]||(t[135]=n(" moves execution outside the loop. ",-1))]),i("li",null,[l(o,null,{default:u(()=>[...t[136]||(t[136]=[n("continue",-1)])]),_:1}),t[137]||(t[137]=n(" moves execution to the next iteration. ",-1))])])]),_:1}),l(r,null,{default:u(()=>[...t[138]||(t[138]=[n("Summary",-1)])]),_:1}),l(e,null,{default:u(()=>[t[141]||(t[141]=n(" The ",-1)),l(o,null,{default:u(()=>[...t[139]||(t[139]=[n("break",-1)])]),_:1}),t[142]||(t[142]=n(" and ",-1)),l(o,null,{default:u(()=>[...t[140]||(t[140]=[n("continue",-1)])]),_:1}),t[143]||(t[143]=n(" statements give a program more control over how loops execute. ",-1))]),_:1}),l(e,null,{default:u(()=>[i("ul",w,[i("li",null,[l(o,null,{default:u(()=>[...t[144]||(t[144]=[n("break",-1)])]),_:1}),t[145]||(t[145]=n(" stops the loop completely. ",-1))]),i("li",null,[l(o,null,{default:u(()=>[...t[146]||(t[146]=[n("continue",-1)])]),_:1}),t[147]||(t[147]=n(" skips the current iteration. ",-1))]),t[148]||(t[148]=i("li",null,"Both can be used with different types of loops.",-1)),t[149]||(t[149]=i("li",null,"Inside nested loops, they affect the innermost loop containing them.",-1)),t[150]||(t[150]=i("li",null,"They are useful for searches, validation, filtering, and repeated processing.",-1))])]),_:1}),t[153]||(t[153]=i("br",null,null,-1)),l(p,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{Y as default};

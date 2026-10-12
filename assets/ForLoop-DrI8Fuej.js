import{_ as f}from"./logo-C9ImmdpX.js";import{T as i,a as s,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as o,C as e}from"./CodeBlock-Ayh7J4dk.js";import{O as d}from"./OutputBlock-CjsXuZMe.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-CYGdZlbx.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{d as b,h as g,i as u,o as y,a as r,q as l,g as n}from"./index-DSMoD1xp.js";const x={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-6 space-y-2"},w={class:"list-disc pl-6 space-y-2"},O=`
for (initialization; condition; update) {
    // statements
}`,v=`
#include <stdio.h>

int main() {
    for (int number = 1; number <= 5; number++) {
        printf("%d\\n", number);
    }
    return 0;
}`,P=`
1
2
3
4
5`,k=`
#include <stdio.h>

int main() {
    int number;

    for (number = 1; number <= 5; number++) {
        printf("%d\\n", number);
    }
    return 0;
}`,q=`
1
2
3
4
5`,C=`
#include <stdio.h>

int main() {
    for (int number = 2; number <= 10; number += 2) {
        printf("%d\\n", number);
    }
    return 0;
}`,z=`
2
4
6
8
10`,B=`
#include <stdio.h>

int main() {
    for (int number = 5; number >= 1; number--) {
        printf("%d\\n", number);
    }
    return 0;
}`,I=`
5
4
3
2
1`,S=`
#include <stdio.h>

int main() {
    int sum = 0;

    for (int number = 1; number <= 5; number++) {
        sum += number;
    }

    printf("Sum: %d\\n", sum);
    return 0;
}`,A="Sum: 15",L=`
#include <stdio.h>

int main() {
    int number = 5;

    for (int multiplier = 1; multiplier <= 10; multiplier++) {
        printf("%d x %d = %d\\n", number, multiplier, number * multiplier);
    }
    return 0;
}`,E=`
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,F=`
#include <stdio.h>

int main() {
    for (int number = 1; number <= 5; number++) {
        int square = number * number;
        printf("%d squared is %d\\n", number, square);
    }
    return 0;
}`,M=`
1 squared is 1
2 squared is 4
3 squared is 9
4 squared is 16
5 squared is 25`,N=`
#include <stdio.h>

int main() {
    for (int number = 10; number <= 5; number++) {
        printf("%d\\n", number);
    }

    printf("Loop finished.\\n");
    return 0;
}`,V="Loop finished.",$=`
#include <stdio.h>

int main() {
    int limit;

    printf("Enter a limit: ");
    scanf("%d", &limit);

    for (int number = 1; number <= limit; number++) {
        printf("%d\\n", number);
    }
    return 0;
}`,j=`
Enter a limit: 5
1
2
3
4
5`,D=`
#include <stdio.h>

int main() {
    int number = 1;

    while (number <= 5) {
        printf("%d\\n", number);
        number++;
    }
    return 0;
}`,U=`
1
2
3
4
5`,W=`
#include <stdio.h>

int main() {
    for (int number = 1; number <= 5; number++) {
        printf("%d\\n", number);
    }
    return 0;
}`,h=b({__name:"ForLoop",setup(H){return(K,t)=>(y(),g(a,null,{default:u(()=>[r("div",x,[t[121]||(t[121]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[122]||(t[122]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," for Loop ")],-1)),l(i,null,{default:u(()=>[t[1]||(t[1]=n(" A ",-1)),l(o,null,{default:u(()=>[...t[0]||(t[0]=[n("for",-1)])]),_:1}),t[2]||(t[2]=n(" loop is used to repeatedly execute a block of statements while a condition is true. ",-1))]),_:1}),l(i,null,{default:u(()=>[t[3]||(t[3]=n(" It is commonly used when the number of repetitions or the way the loop progresses is known. ",-1)),l(e,{language:"c",code:O})]),_:1}),l(i,null,{default:u(()=>[t[14]||(t[14]=n(" The ",-1)),l(o,null,{default:u(()=>[...t[4]||(t[4]=[n("for",-1)])]),_:1}),t[15]||(t[15]=n(" loop has three parts: ",-1)),l(o,null,{default:u(()=>[...t[5]||(t[5]=[n("initialization",-1)])]),_:1}),t[16]||(t[16]=n(" , ",-1)),l(o,null,{default:u(()=>[...t[6]||(t[6]=[n("condition",-1)])]),_:1}),t[17]||(t[17]=n(" , and ",-1)),l(o,null,{default:u(()=>[...t[7]||(t[7]=[n("update",-1)])]),_:1}),t[18]||(t[18]=n(" . ",-1)),r("ul",T,[r("li",null,[l(o,null,{default:u(()=>[...t[8]||(t[8]=[n("initialization",-1)])]),_:1}),t[9]||(t[9]=n(" sets the starting value. ",-1))]),r("li",null,[l(o,null,{default:u(()=>[...t[10]||(t[10]=[n("condition",-1)])]),_:1}),t[11]||(t[11]=n(" determines whether the loop continues. ",-1))]),r("li",null,[l(o,null,{default:u(()=>[...t[12]||(t[12]=[n("update",-1)])]),_:1}),t[13]||(t[13]=n(" changes the loop variable after each iteration. ",-1))])])]),_:1}),l(m,{title:"The Three Parts"},{default:u(()=>[...t[19]||(t[19]=[n(" A useful way to remember the three parts is: ",-1),r("strong",null,"start → check → update",-1),n(". ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[20]||(t[20]=[n("Basic Example",-1)])]),_:1}),l(i,null,{default:u(()=>[t[23]||(t[23]=n(" This example prints the numbers from ",-1)),l(o,null,{default:u(()=>[...t[21]||(t[21]=[n("1",-1)])]),_:1}),t[24]||(t[24]=n(" to ",-1)),l(o,null,{default:u(()=>[...t[22]||(t[22]=[n("5",-1)])]),_:1}),t[25]||(t[25]=n(" . ",-1)),l(e,{language:"c",code:v}),t[26]||(t[26]=n(" Output ",-1)),l(d,{output:P})]),_:1}),l(i,null,{default:u(()=>[t[30]||(t[30]=n(" The loop starts with ",-1)),l(o,null,{default:u(()=>[...t[27]||(t[27]=[n("number",-1)])]),_:1}),t[31]||(t[31]=n(" equal to ",-1)),l(o,null,{default:u(()=>[...t[28]||(t[28]=[n("1",-1)])]),_:1}),t[32]||(t[32]=n(" . After each iteration, it increases by ",-1)),l(o,null,{default:u(()=>[...t[29]||(t[29]=[n("1",-1)])]),_:1}),t[33]||(t[33]=n(" . ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[34]||(t[34]=[n("The Initialization",-1)])]),_:1}),l(i,null,{default:u(()=>[t[36]||(t[36]=n(" The first part of the ",-1)),l(o,null,{default:u(()=>[...t[35]||(t[35]=[n("for",-1)])]),_:1}),t[37]||(t[37]=n(" loop initializes the loop variable. ",-1)),l(e,{language:"c",code:k}),t[38]||(t[38]=n(" Output ",-1)),l(d,{output:q})]),_:1}),l(i,null,{default:u(()=>[...t[39]||(t[39]=[n(" The variable can be declared directly inside the loop, or it can be declared before the loop. ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[40]||(t[40]=[n("Counting by More Than One",-1)])]),_:1}),l(i,null,{default:u(()=>[t[42]||(t[42]=n(" The update does not have to increase the value by exactly ",-1)),l(o,null,{default:u(()=>[...t[41]||(t[41]=[n("1",-1)])]),_:1}),t[43]||(t[43]=n(" . We can change it by any amount we need. ",-1)),l(e,{language:"c",code:C}),t[44]||(t[44]=n(" Output ",-1)),l(d,{output:z})]),_:1}),l(i,null,{default:u(()=>[t[47]||(t[47]=n(" Here, ",-1)),l(o,null,{default:u(()=>[...t[45]||(t[45]=[n("number",-1)])]),_:1}),t[48]||(t[48]=n(" increases by ",-1)),l(o,null,{default:u(()=>[...t[46]||(t[46]=[n("2",-1)])]),_:1}),t[49]||(t[49]=n(" after every iteration. ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[50]||(t[50]=[n("Counting Down",-1)])]),_:1}),l(i,null,{default:u(()=>[t[52]||(t[52]=n(" A ",-1)),l(o,null,{default:u(()=>[...t[51]||(t[51]=[n("for",-1)])]),_:1}),t[53]||(t[53]=n(" loop can also count backwards by using the decrement operator. ",-1)),l(e,{language:"c",code:B}),t[54]||(t[54]=n(" Output ",-1)),l(d,{output:I})]),_:1}),l(i,null,{default:u(()=>[t[58]||(t[58]=n(" The loop starts at ",-1)),l(o,null,{default:u(()=>[...t[55]||(t[55]=[n("5",-1)])]),_:1}),t[59]||(t[59]=n(" and decreases ",-1)),l(o,null,{default:u(()=>[...t[56]||(t[56]=[n("number",-1)])]),_:1}),t[60]||(t[60]=n(" by ",-1)),l(o,null,{default:u(()=>[...t[57]||(t[57]=[n("1",-1)])]),_:1}),t[61]||(t[61]=n(" after every iteration. ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[62]||(t[62]=[n("Calculating a Sum",-1)])]),_:1}),l(i,null,{default:u(()=>[t[64]||(t[64]=n(" A ",-1)),l(o,null,{default:u(()=>[...t[63]||(t[63]=[n("for",-1)])]),_:1}),t[65]||(t[65]=n(" loop can be used to perform calculations repeatedly. ",-1)),l(e,{language:"c",code:S}),t[66]||(t[66]=n(" Output ",-1)),l(d,{output:A})]),_:1}),l(i,null,{default:u(()=>[t[70]||(t[70]=n(" Each value of ",-1)),l(o,null,{default:u(()=>[...t[67]||(t[67]=[n("number",-1)])]),_:1}),t[71]||(t[71]=n(" is added to ",-1)),l(o,null,{default:u(()=>[...t[68]||(t[68]=[n("sum",-1)])]),_:1}),t[72]||(t[72]=n(" until the loop reaches ",-1)),l(o,null,{default:u(()=>[...t[69]||(t[69]=[n("5",-1)])]),_:1}),t[73]||(t[73]=n(" . ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[74]||(t[74]=[n("Multiplication Table",-1)])]),_:1}),l(i,null,{default:u(()=>[t[75]||(t[75]=n(" Loops are useful for generating repeated calculations, such as a multiplication table. ",-1)),l(e,{language:"c",code:L}),t[76]||(t[76]=n(" Output ",-1)),l(d,{output:E})]),_:1}),l(s,null,{default:u(()=>[...t[77]||(t[77]=[n("Multiple Statements",-1)])]),_:1}),l(i,null,{default:u(()=>[t[79]||(t[79]=n(" The body of a ",-1)),l(o,null,{default:u(()=>[...t[78]||(t[78]=[n("for",-1)])]),_:1}),t[80]||(t[80]=n(" loop can contain multiple statements. ",-1)),l(e,{language:"c",code:F}),t[81]||(t[81]=n(" Output ",-1)),l(d,{output:M})]),_:1}),l(i,null,{default:u(()=>[...t[82]||(t[82]=[n(" In every iteration, the program calculates the square and then prints the result. ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[83]||(t[83]=[n("When the Condition Is False",-1)])]),_:1}),l(i,null,{default:u(()=>[t[84]||(t[84]=n(" The condition is checked before the loop body executes. If the condition is already false, the loop does not execute. ",-1)),l(e,{language:"c",code:N}),t[85]||(t[85]=n(" Output ",-1)),l(d,{output:V})]),_:1}),l(i,null,{default:u(()=>[t[87]||(t[87]=n(" Since ",-1)),l(o,null,{default:u(()=>[...t[86]||(t[86]=[n("10 <= 5",-1)])]),_:1}),t[88]||(t[88]=n(" is false, the loop body is skipped completely. ",-1))]),_:1}),l(m,{title:"The Key Difference"},{default:u(()=>[t[91]||(t[91]=n(" This is one of the main differences between a ",-1)),l(o,null,{default:u(()=>[...t[89]||(t[89]=[n("for",-1)])]),_:1}),t[92]||(t[92]=n(" loop and a ",-1)),l(o,null,{default:u(()=>[...t[90]||(t[90]=[n("do...while",-1)])]),_:1}),t[93]||(t[93]=n(" loop. ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[94]||(t[94]=[n("Using Input",-1)])]),_:1}),l(i,null,{default:u(()=>[t[95]||(t[95]=n(" The loop limit can also come from the user. ",-1)),l(e,{language:"c",code:$}),t[96]||(t[96]=n(" Output ",-1)),l(d,{output:j})]),_:1}),l(i,null,{default:u(()=>[...t[97]||(t[97]=[n(" The value entered by the user determines how many numbers will be printed. ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[98]||(t[98]=[n("for Loop vs while Loop",-1)])]),_:1}),l(i,null,{default:u(()=>[t[101]||(t[101]=n(" A ",-1)),l(o,null,{default:u(()=>[...t[99]||(t[99]=[n("for",-1)])]),_:1}),t[102]||(t[102]=n(" loop and a ",-1)),l(o,null,{default:u(()=>[...t[100]||(t[100]=[n("while",-1)])]),_:1}),t[103]||(t[103]=n(" loop can perform the same kind of repetition. ",-1)),l(e,{language:"c",code:D}),t[104]||(t[104]=n(" Output ",-1)),l(d,{output:U})]),_:1}),l(i,null,{default:u(()=>[t[106]||(t[106]=n(" The same logic can be written using a ",-1)),l(o,null,{default:u(()=>[...t[105]||(t[105]=[n("for",-1)])]),_:1}),t[107]||(t[107]=n(" loop: ",-1)),l(e,{language:"c",code:W})]),_:1}),l(i,null,{default:u(()=>[...t[108]||(t[108]=[n(" Both programs produce the same output. The difference is mainly how the loop's initialization, condition, and update are organized. ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[109]||(t[109]=[n("Summary",-1)])]),_:1}),l(i,null,{default:u(()=>[t[119]||(t[119]=n(" The ",-1)),l(o,null,{default:u(()=>[...t[110]||(t[110]=[n("for",-1)])]),_:1}),t[120]||(t[120]=n(" loop is useful for controlled repetition, especially when the initialization, condition, and update can be clearly defined. ",-1)),r("ul",w,[t[114]||(t[114]=r("li",null,"Initialization sets the starting value.",-1)),t[115]||(t[115]=r("li",null,"The condition determines whether the loop continues.",-1)),t[116]||(t[116]=r("li",null,"Update changes the loop variable after each iteration.",-1)),t[117]||(t[117]=r("li",null,"The condition is checked before each iteration.",-1)),r("li",null,[t[112]||(t[112]=n("A ",-1)),l(o,null,{default:u(()=>[...t[111]||(t[111]=[n("for",-1)])]),_:1}),t[113]||(t[113]=n(" loop can count up or down. ",-1))]),t[118]||(t[118]=r("li",null,"It can be used for calculations, tables, and repeated processing.",-1))])]),_:1}),t[123]||(t[123]=r("br",null,null,-1)),l(p,{to:"/academia/student/classes/c-nested-loop"})])]),_:1}))}});export{h as default};

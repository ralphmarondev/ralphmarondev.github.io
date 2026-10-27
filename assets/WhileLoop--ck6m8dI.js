import{_ as f}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{T as o,a as i,_ as a}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{C as r}from"./CodeBlock-BgBdQh_Q.js";import{O as d}from"./OutputBlock-CUGk6WXg.js";import{T as e}from"./TopicTerm-Dw7PNqTI.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-BEAyXMsa.js";import{d as b,h as g,i as u,o as w,a as s,q as l,g as n}from"./index-BX2gTDPs.js";const x={class:"max-w-4xl mx-auto"},v=`
while (condition) {
    // statements
}`,y=`
#include <stdio.h>

int main() {
    int number = 1;

    while (number <= 5) {
        printf("%d\\n", number);
        number++;
    }
    return 0;
}`,O=`
1
2
3
4
5`,T=`
#include <stdio.h>

int main() {
    int number = 10;

    while (number > 0) {
        printf("%d\\n", number);
        number--;
    }
    return 0;
}`,k=`
10
9
8
7
6
5
4
3
2
1`,C=`
#include <stdio.h>

int main() {
    int number = 1;

    while (number <= 3) {
        printf("Number: %d\\n", number);
        number++;
    }
    return 0;
}`,A=`
Number: 1
Number: 2
Number: 3`,S=`
#include <stdio.h>

int main() {
    int number = 2;

    while (number <= 10) {
        printf("%d\\n", number);
        number += 2;
    }
    return 0;
}`,L=`
2
4
6
8
10`,P=`
#include <stdio.h>

int main() {
    int number = 1;
    int sum = 0;

    while (number <= 5) {
        sum += number;
        number++;
    }

    printf("Sum: %d\\n", sum);
    return 0;
}`,N="Sum: 15",I=`
#include <stdio.h>

int main() {
    int count = 5;
    while (count >= 1) {
        printf("%d\\n", count);
        count--;
    }

    printf("Go!\\n");
    return 0;
}`,q=`
5
4
3
2
1
Go!`,B=`
#include <stdio.h>

int main() {
    int number = 10;
    while (number < 10) {
        printf("This will not print.\\n");
        number++;
    }

    printf("Loop finished.\\n");
    return 0;
}`,E="Loop finished.",W=`
#include <stdio.h>

int main() {
    int number = 1;

    while (number <= 3) {
        printf("Number: %d\\n", number);
        printf("Square: %d\\n", number * number);
        number++;
    }
    return 0;
}`,U=`
Number: 1
Square: 1
Number: 2
Square: 4
Number: 3
Square: 9`,Y=`
#include <stdio.h>

int main() {
    int number = 5;
    int multiplier = 1;

    while (multiplier <= 10) {
        printf("%d x %d = %d\\n",
               number, multiplier, number * multiplier);
        multiplier++;
    }
    return 0;
}`,F=`
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50`,M=`
#include <stdio.h>

int main() {
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    while (number != 0) {
        printf("You entered %d\\n", number);

        printf("Enter another number: ");
        scanf("%d", &number);
    }

    printf("Loop ended.\\n");
    return 0;
}`,V=`
Enter a number: 5
You entered 5
Enter another number: 3
You entered 3
Enter another number: 0
Loop ended.`,X=b({__name:"WhileLoop",setup(G){return($,t)=>(w(),g(p,null,{default:u(()=>[s("div",x,[t[134]||(t[134]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[135]||(t[135]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," while Loop ")],-1)),l(o,null,{default:u(()=>[t[1]||(t[1]=n(" A ",-1)),l(e,null,{default:u(()=>[...t[0]||(t[0]=[n("while",-1)])]),_:1}),t[2]||(t[2]=n(" loop repeatedly executes a block of code as long as a condition is true. ",-1))]),_:1}),l(o,null,{default:u(()=>[...t[3]||(t[3]=[n(" Unlike a selection statement, which usually chooses a block of code once, a loop can execute the same block multiple times. ",-1)])]),_:1}),l(i,null,{default:u(()=>[...t[4]||(t[4]=[n("Basic while Loop",-1)])]),_:1}),l(o,null,{default:u(()=>[t[6]||(t[6]=n(" The basic syntax of a ",-1)),l(e,null,{default:u(()=>[...t[5]||(t[5]=[n("while",-1)])]),_:1}),t[7]||(t[7]=n(" loop is: ",-1)),l(r,{language:"c",code:v})]),_:1}),l(o,null,{default:u(()=>[...t[8]||(t[8]=[n(" C checks the condition before each iteration. If the condition is true, the statements inside the loop are executed. After that, the condition is checked again. ",-1)])]),_:1}),l(o,null,{default:u(()=>[t[9]||(t[9]=n(" For example: ",-1)),l(r,{language:"c",code:y}),t[10]||(t[10]=n(" Output ",-1)),l(d,{output:O})]),_:1}),l(o,null,{default:u(()=>[t[14]||(t[14]=n(" The loop starts with ",-1)),l(e,null,{default:u(()=>[...t[11]||(t[11]=[n("number",-1)])]),_:1}),t[15]||(t[15]=n(" equal to ",-1)),l(e,null,{default:u(()=>[...t[12]||(t[12]=[n("1",-1)])]),_:1}),t[16]||(t[16]=n(" . It continues running while ",-1)),l(e,null,{default:u(()=>[...t[13]||(t[13]=[n("number <= 5",-1)])]),_:1}),t[17]||(t[17]=n(" is true. ",-1))]),_:1}),l(m,{title:"Think Before Repeating"},{default:u(()=>[...t[18]||(t[18]=[n(" A while loop asks the same question before every repetition: ",-1),s("strong",null,"Is the condition still true?",-1),n(" If the answer is yes, the loop runs again. ",-1)])]),_:1}),l(i,null,{default:u(()=>[...t[19]||(t[19]=[n("Checking the Condition",-1)])]),_:1}),l(o,null,{default:u(()=>[t[22]||(t[22]=n(" The condition determines whether another iteration should happen. In this example, the loop counts down from ",-1)),l(e,null,{default:u(()=>[...t[20]||(t[20]=[n("10",-1)])]),_:1}),t[23]||(t[23]=n(" to ",-1)),l(e,null,{default:u(()=>[...t[21]||(t[21]=[n("1",-1)])]),_:1}),t[24]||(t[24]=n(" . ",-1)),l(r,{language:"c",code:T}),t[25]||(t[25]=n(" Output ",-1)),l(d,{output:k})]),_:1}),l(o,null,{default:u(()=>[t[29]||(t[29]=n(" The loop continues while ",-1)),l(e,null,{default:u(()=>[...t[26]||(t[26]=[n("number > 0",-1)])]),_:1}),t[30]||(t[30]=n(" . Once ",-1)),l(e,null,{default:u(()=>[...t[27]||(t[27]=[n("number",-1)])]),_:1}),t[31]||(t[31]=n(" becomes ",-1)),l(e,null,{default:u(()=>[...t[28]||(t[28]=[n("0",-1)])]),_:1}),t[32]||(t[32]=n(" , the condition becomes false and the loop stops. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[33]||(t[33]=[n("Updating the Loop Variable",-1)])]),_:1}),l(o,null,{default:u(()=>[t[34]||(t[34]=n(" A loop variable usually needs to be changed inside the loop so that the condition eventually becomes false. ",-1)),l(r,{language:"c",code:C}),t[35]||(t[35]=n(" Output ",-1)),l(d,{output:A})]),_:1}),l(o,null,{default:u(()=>[t[38]||(t[38]=n(" The statement ",-1)),l(e,null,{default:u(()=>[...t[36]||(t[36]=[n("number++",-1)])]),_:1}),t[39]||(t[39]=n(" increases the value of ",-1)),l(e,null,{default:u(()=>[...t[37]||(t[37]=[n("number",-1)])]),_:1}),t[40]||(t[40]=n(" after each iteration. Without this update, the value would remain unchanged. ",-1))]),_:1}),l(m,{title:"Don't Forget the Update"},{default:u(()=>[...t[41]||(t[41]=[n(" If the condition never becomes false, the loop can continue indefinitely. Make sure the statements inside the loop can eventually change the condition's result. ",-1)])]),_:1}),l(i,null,{default:u(()=>[...t[42]||(t[42]=[n("Counting by More Than One",-1)])]),_:1}),l(o,null,{default:u(()=>[t[44]||(t[44]=n(" The loop variable does not have to increase by ",-1)),l(e,null,{default:u(()=>[...t[43]||(t[43]=[n("1",-1)])]),_:1}),t[45]||(t[45]=n(" . You can use other increments when needed. ",-1)),l(r,{language:"c",code:S}),t[46]||(t[46]=n(" Output ",-1)),l(d,{output:L})]),_:1}),l(o,null,{default:u(()=>[t[49]||(t[49]=n(" Here, ",-1)),l(e,null,{default:u(()=>[...t[47]||(t[47]=[n("number += 2",-1)])]),_:1}),t[50]||(t[50]=n(" increases the value by ",-1)),l(e,null,{default:u(()=>[...t[48]||(t[48]=[n("2",-1)])]),_:1}),t[51]||(t[51]=n(" each time, so only even numbers are printed. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[52]||(t[52]=[n("Using a while Loop for a Sum",-1)])]),_:1}),l(o,null,{default:u(()=>[t[54]||(t[54]=n(" A ",-1)),l(e,null,{default:u(()=>[...t[53]||(t[53]=[n("while",-1)])]),_:1}),t[55]||(t[55]=n(" loop can repeat an operation while also keeping track of a result. ",-1)),l(r,{language:"c",code:P}),t[56]||(t[56]=n(" Output ",-1)),l(d,{output:N})]),_:1}),l(o,null,{default:u(()=>[t[62]||(t[62]=n(" Each iteration adds the current value of ",-1)),l(e,null,{default:u(()=>[...t[57]||(t[57]=[n("number",-1)])]),_:1}),t[63]||(t[63]=n(" to ",-1)),l(e,null,{default:u(()=>[...t[58]||(t[58]=[n("sum",-1)])]),_:1}),t[64]||(t[64]=n(" . After the loop finishes, ",-1)),l(e,null,{default:u(()=>[...t[59]||(t[59]=[n("sum",-1)])]),_:1}),t[65]||(t[65]=n(" contains the total from ",-1)),l(e,null,{default:u(()=>[...t[60]||(t[60]=[n("1",-1)])]),_:1}),t[66]||(t[66]=n(" through ",-1)),l(e,null,{default:u(()=>[...t[61]||(t[61]=[n("5",-1)])]),_:1}),t[67]||(t[67]=n(" . ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[68]||(t[68]=[n("Counting Down",-1)])]),_:1}),l(o,null,{default:u(()=>[t[70]||(t[70]=n(" A ",-1)),l(e,null,{default:u(()=>[...t[69]||(t[69]=[n("while",-1)])]),_:1}),t[71]||(t[71]=n(" loop can also count backwards. ",-1)),l(r,{language:"c",code:I}),t[72]||(t[72]=n(" Output ",-1)),l(d,{output:q})]),_:1}),l(o,null,{default:u(()=>[t[75]||(t[75]=n(" The value decreases using ",-1)),l(e,null,{default:u(()=>[...t[73]||(t[73]=[n("count--",-1)])]),_:1}),t[76]||(t[76]=n(" . Once the value becomes less than ",-1)),l(e,null,{default:u(()=>[...t[74]||(t[74]=[n("1",-1)])]),_:1}),t[77]||(t[77]=n(" , the condition becomes false and the loop ends. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[78]||(t[78]=[n("When the Condition Is False at the Start",-1)])]),_:1}),l(o,null,{default:u(()=>[t[80]||(t[80]=n(" A ",-1)),l(e,null,{default:u(()=>[...t[79]||(t[79]=[n("while",-1)])]),_:1}),t[81]||(t[81]=n(" loop may execute zero times if its condition is already false before the first iteration. ",-1)),l(r,{language:"c",code:B}),t[82]||(t[82]=n(" Output ",-1)),l(d,{output:E})]),_:1}),l(o,null,{default:u(()=>[t[85]||(t[85]=n(" The initial value is ",-1)),l(e,null,{default:u(()=>[...t[83]||(t[83]=[n("10",-1)])]),_:1}),t[86]||(t[86]=n(" , but the condition requires ",-1)),l(e,null,{default:u(()=>[...t[84]||(t[84]=[n("number < 10",-1)])]),_:1}),t[87]||(t[87]=n(" . Since that condition is false immediately, the loop body is never executed. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[88]||(t[88]=[n("Multiple Statements Inside a Loop",-1)])]),_:1}),l(o,null,{default:u(()=>[t[90]||(t[90]=n(" A ",-1)),l(e,null,{default:u(()=>[...t[89]||(t[89]=[n("while",-1)])]),_:1}),t[91]||(t[91]=n(" loop can contain multiple statements. All of them are executed during each iteration. ",-1)),l(r,{language:"c",code:W}),t[92]||(t[92]=n(" Output ",-1)),l(d,{output:U})]),_:1}),l(o,null,{default:u(()=>[t[95]||(t[95]=n(" Both ",-1)),l(e,null,{default:u(()=>[...t[93]||(t[93]=[n("printf",-1)])]),_:1}),t[96]||(t[96]=n(" statements execute once for every value of ",-1)),l(e,null,{default:u(()=>[...t[94]||(t[94]=[n("number",-1)])]),_:1}),t[97]||(t[97]=n(" . ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[98]||(t[98]=[n("Generating a Multiplication Table",-1)])]),_:1}),l(o,null,{default:u(()=>[t[100]||(t[100]=n(" A loop can also be used to repeat calculations. For example, a multiplication table can be generated with a ",-1)),l(e,null,{default:u(()=>[...t[99]||(t[99]=[n("while",-1)])]),_:1}),t[101]||(t[101]=n(" loop. ",-1)),l(r,{language:"c",code:Y}),t[102]||(t[102]=n(" Output ",-1)),l(d,{output:F})]),_:1}),l(o,null,{default:u(()=>[t[106]||(t[106]=n(" The ",-1)),l(e,null,{default:u(()=>[...t[103]||(t[103]=[n("multiplier",-1)])]),_:1}),t[107]||(t[107]=n(" starts at ",-1)),l(e,null,{default:u(()=>[...t[104]||(t[104]=[n("1",-1)])]),_:1}),t[108]||(t[108]=n(" and increases until it reaches ",-1)),l(e,null,{default:u(()=>[...t[105]||(t[105]=[n("10",-1)])]),_:1}),t[109]||(t[109]=n(" . Each iteration calculates the next multiplication result. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[110]||(t[110]=[n("Using Input with a while Loop",-1)])]),_:1}),l(o,null,{default:u(()=>[t[112]||(t[112]=n(" A ",-1)),l(e,null,{default:u(()=>[...t[111]||(t[111]=[n("while",-1)])]),_:1}),t[113]||(t[113]=n(" loop can also continue based on values entered by the user. ",-1)),l(r,{language:"c",code:M}),t[114]||(t[114]=n(" Output ",-1)),l(d,{output:V})]),_:1}),l(o,null,{default:u(()=>[t[117]||(t[117]=n(" The loop continues while the entered number is not ",-1)),l(e,null,{default:u(()=>[...t[115]||(t[115]=[n("0",-1)])]),_:1}),t[118]||(t[118]=n(" . When ",-1)),l(e,null,{default:u(()=>[...t[116]||(t[116]=[n("0",-1)])]),_:1}),t[119]||(t[119]=n(" is entered, the condition becomes false and the loop ends. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[120]||(t[120]=[n("while Loop vs if Statement",-1)])]),_:1}),l(o,null,{default:u(()=>[t[122]||(t[122]=n(" An ",-1)),l(e,null,{default:u(()=>[...t[121]||(t[121]=[n("if",-1)])]),_:1}),t[123]||(t[123]=n(" statement checks a condition and executes its block at most once when the condition is true. ",-1))]),_:1}),l(o,null,{default:u(()=>[t[125]||(t[125]=n(" A ",-1)),l(e,null,{default:u(()=>[...t[124]||(t[124]=[n("while",-1)])]),_:1}),t[126]||(t[126]=n(" loop checks its condition repeatedly and can execute its block many times as long as the condition remains true. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[127]||(t[127]=[n("Summary",-1)])]),_:1}),l(o,null,{default:u(()=>[t[129]||(t[129]=n(" The ",-1)),l(e,null,{default:u(()=>[...t[128]||(t[128]=[n("while",-1)])]),_:1}),t[130]||(t[130]=n(" loop repeatedly executes a block of code while its condition is true. The condition is checked before every iteration. ",-1))]),_:1}),l(o,null,{default:u(()=>[t[132]||(t[132]=n(" You learned how to create a ",-1)),l(e,null,{default:u(()=>[...t[131]||(t[131]=[n("while",-1)])]),_:1}),t[133]||(t[133]=n(" loop, update its control variable, count forward and backward, accumulate values, generate repeated calculations, and use input to control when a loop ends. ",-1))]),_:1}),t[136]||(t[136]=s("br",null,null,-1)),l(a,{to:"/academia/student/classes/c-do-while-loop"})])]),_:1}))}});export{X as default};

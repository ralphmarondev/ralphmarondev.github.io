import{_ as a}from"./logo-C9ImmdpX.js";import{T as e,a as s,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{T as i}from"./TopicTerm-Dw7PNqTI.js";import{C as o}from"./CodeBlock-BgBdQh_Q.js";import{O as d}from"./OutputBlock-CUGk6WXg.js";import{_ as f}from"./FernInfo.vue_vue_type_script_setup_true_lang-BEAyXMsa.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{d as b,h as v,i as u,o as g,a as r,q as l,g as n}from"./index-BX2gTDPs.js";const w={class:"max-w-4xl mx-auto"},x={class:"list-decimal pl-6 space-y-2 mt-2"},T=`
#include <stdio.h>

void countDown(int number) {
    if (number == 0) {
        return;
    }

    printf("%d\\n", number);
    countDown(number - 1);
}

int main() {
    countDown(5);

    return 0;
}`,y=`
5
4
3
2
1`,O=`
void function(int value) {
    if (condition) {
        return;
    }

    function(nextValue);
}`,R=`
#include <stdio.h>

void countDown(int number) {
    if (number == 0) {
        return;
    }

    printf("%d\\n", number);
    countDown(number - 1);
}

int main() {
    countDown(3);

    return 0;
}`,C=`
3
2
1`,F=`
#include <stdio.h>

void countUp(int number) {
    if (number == 5) {
        return;
    }

    printf("%d\\n", number);
    countUp(number + 1);
}

int main() {
    countUp(1);

    return 0;
}`,k=`
1
2
3
4`,I=`
#include <stdio.h>

void printNumber(int number) {
    if (number == 0) {
        return;
    }

    printf("%d\\n", number);
    printNumber(number - 1);
}

int main() {
    printNumber(3);

    return 0;
}`,N=`
3
2
1`,P=`
#include <stdio.h>

int sum(int number) {
    if (number == 1) {
        return 1;
    }

    return number + sum(number - 1);
}

int main() {
    int result = sum(5);

    printf("Sum: %d\\n", result);

    return 0;
}`,S=`
Sum: 15`,A=`
#include <stdio.h>

int factorial(int number) {
    if (number == 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

int main() {
    int result = factorial(5);

    printf("Factorial: %d\\n", result);

    return 0;
}`,B=`
Factorial: 120`,D=`
#include <stdio.h>

int fibonacci(int number) {
    if (number <= 1) {
        return number;
    }

    return fibonacci(number - 1) + fibonacci(number - 2);
}

int main() {
    int result = fibonacci(6);

    printf("Result: %d\\n", result);

    return 0;
}`,E=`
Result: 8`,V=`
#include <stdio.h>

void display(int number) {
    if (number == 0) {
        return;
    }

    display(number - 1);

    printf("%d\\n", number);
}

int main() {
    display(3);

    return 0;
}`,q=`
1
2
3`,L=b({__name:"Recursion",setup(U){return(W,t)=>(g(),v(p,null,{default:u(()=>[r("div",w,[t[103]||(t[103]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[104]||(t[104]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 5 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Recursion ")],-1)),l(e,null,{default:u(()=>[l(i,null,{default:u(()=>[...t[0]||(t[0]=[n("Recursion",-1)])]),_:1}),t[1]||(t[1]=n(" is a technique where a function calls itself to solve a problem. ",-1))]),_:1}),l(e,null,{default:u(()=>[...t[2]||(t[2]=[n(" Instead of repeatedly writing the same operation, a recursive function can call itself with a smaller or simpler value until it reaches a stopping condition. ",-1)])]),_:1}),l(f,{title:"Think of It This Way"},{default:u(()=>[...t[3]||(t[3]=[n(" A recursive function says, ",-1),r("strong",null,'"I can solve this by solving a smaller version of the same problem."',-1)])]),_:1}),l(s,null,{default:u(()=>[...t[4]||(t[4]=[n("A Simple Recursive Function",-1)])]),_:1}),l(e,null,{default:u(()=>[t[5]||(t[5]=n(" Here, the function calls itself with a smaller number each time. ",-1)),l(o,{language:"c",code:T}),t[6]||(t[6]=n(" Output ",-1)),l(d,{output:y})]),_:1}),l(e,null,{default:u(()=>[t[10]||(t[10]=n(" When ",-1)),l(i,null,{default:u(()=>[...t[7]||(t[7]=[n("countDown()",-1)])]),_:1}),t[11]||(t[11]=n(" receives ",-1)),l(i,null,{default:u(()=>[...t[8]||(t[8]=[n("5",-1)])]),_:1}),t[12]||(t[12]=n(" , it prints the number and calls itself with ",-1)),l(i,null,{default:u(()=>[...t[9]||(t[9]=[n("4",-1)])]),_:1}),t[13]||(t[13]=n(" . This continues until the stopping condition is reached. ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[14]||(t[14]=[n("The Structure of Recursion",-1)])]),_:1}),l(e,null,{default:u(()=>[t[17]||(t[17]=n(" A recursive function generally needs a ",-1)),l(i,null,{default:u(()=>[...t[15]||(t[15]=[n("base case",-1)])]),_:1}),t[18]||(t[18]=n(" and a ",-1)),l(i,null,{default:u(()=>[...t[16]||(t[16]=[n("recursive case",-1)])]),_:1}),t[19]||(t[19]=n(" . ",-1)),l(o,{language:"c",code:O})]),_:1}),l(s,null,{default:u(()=>[...t[20]||(t[20]=[n("The Base Case",-1)])]),_:1}),l(e,null,{default:u(()=>[t[22]||(t[22]=n(" The ",-1)),l(i,null,{default:u(()=>[...t[21]||(t[21]=[n("base case",-1)])]),_:1}),t[23]||(t[23]=n(" is the condition that stops the recursion. ",-1))]),_:1}),l(e,null,{default:u(()=>[t[26]||(t[26]=n(" In this example, recursion stops when ",-1)),l(i,null,{default:u(()=>[...t[24]||(t[24]=[n("number",-1)])]),_:1}),t[27]||(t[27]=n(" becomes ",-1)),l(i,null,{default:u(()=>[...t[25]||(t[25]=[n("0",-1)])]),_:1}),t[28]||(t[28]=n(" . ",-1)),l(o,{language:"c",code:R}),t[29]||(t[29]=n(" Output ",-1)),l(d,{output:C})]),_:1}),l(f,{title:"Remember the Base Case"},{default:u(()=>[...t[30]||(t[30]=[n(" Every recursive function needs a condition that eventually stops it. Without a proper stopping condition, the function can keep calling itself indefinitely. ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[31]||(t[31]=[n("The Recursive Case",-1)])]),_:1}),l(e,null,{default:u(()=>[t[33]||(t[33]=n(" The ",-1)),l(i,null,{default:u(()=>[...t[32]||(t[32]=[n("recursive case",-1)])]),_:1}),t[34]||(t[34]=n(" is the part where the function calls itself again. ",-1)),l(o,{language:"c",code:F}),t[35]||(t[35]=n(" Output ",-1)),l(d,{output:k})]),_:1}),l(e,null,{default:u(()=>[t[38]||(t[38]=n(" Each call changes the value passed to the function. Here, ",-1)),l(i,null,{default:u(()=>[...t[36]||(t[36]=[n("number + 1",-1)])]),_:1}),t[39]||(t[39]=n(" moves the value closer to the base case of ",-1)),l(i,null,{default:u(()=>[...t[37]||(t[37]=[n("5",-1)])]),_:1}),t[40]||(t[40]=n(" . ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[41]||(t[41]=[n("Following Recursive Calls",-1)])]),_:1}),l(e,null,{default:u(()=>[t[42]||(t[42]=n(" It can help to trace each function call step by step. ",-1)),l(o,{language:"c",code:I}),t[43]||(t[43]=n(" Output ",-1)),l(d,{output:N})]),_:1}),l(e,null,{default:u(()=>[t[62]||(t[62]=n(" The calls happen like this: ",-1)),r("ol",x,[r("li",null,[l(i,null,{default:u(()=>[...t[44]||(t[44]=[n("printNumber(3)",-1)])]),_:1}),t[45]||(t[45]=n(" is called. ",-1))]),r("li",null,[t[48]||(t[48]=n("It prints ",-1)),l(i,null,{default:u(()=>[...t[46]||(t[46]=[n("3",-1)])]),_:1}),t[49]||(t[49]=n(" and calls ",-1)),l(i,null,{default:u(()=>[...t[47]||(t[47]=[n("printNumber(2)",-1)])]),_:1}),t[50]||(t[50]=n(" . ",-1))]),r("li",null,[t[53]||(t[53]=n("It prints ",-1)),l(i,null,{default:u(()=>[...t[51]||(t[51]=[n("2",-1)])]),_:1}),t[54]||(t[54]=n(" and calls ",-1)),l(i,null,{default:u(()=>[...t[52]||(t[52]=[n("printNumber(1)",-1)])]),_:1}),t[55]||(t[55]=n(" . ",-1))]),r("li",null,[t[58]||(t[58]=n("It prints ",-1)),l(i,null,{default:u(()=>[...t[56]||(t[56]=[n("1",-1)])]),_:1}),t[59]||(t[59]=n(" and calls ",-1)),l(i,null,{default:u(()=>[...t[57]||(t[57]=[n("printNumber(0)",-1)])]),_:1}),t[60]||(t[60]=n(" . ",-1))]),t[61]||(t[61]=r("li",null,"The base case is reached, so the recursion stops.",-1))])]),_:1}),l(s,null,{default:u(()=>[...t[63]||(t[63]=[n("Recursion with Return Values",-1)])]),_:1}),l(e,null,{default:u(()=>[t[66]||(t[66]=n(" Recursive functions can also return values. In this example, the function calculates the sum of numbers from ",-1)),l(i,null,{default:u(()=>[...t[64]||(t[64]=[n("1",-1)])]),_:1}),t[67]||(t[67]=n(" to ",-1)),l(i,null,{default:u(()=>[...t[65]||(t[65]=[n("5",-1)])]),_:1}),t[68]||(t[68]=n(" . ",-1)),l(o,{language:"c",code:P}),t[69]||(t[69]=n(" Output ",-1)),l(d,{output:S})]),_:1}),l(e,null,{default:u(()=>[...t[70]||(t[70]=[n(" The function keeps reducing the number until it reaches the base case. The returned values are then combined as the recursive calls finish. ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[71]||(t[71]=[n("Calculating a Factorial",-1)])]),_:1}),l(e,null,{default:u(()=>[t[73]||(t[73]=n(" A common example of recursion is calculating a ",-1)),l(i,null,{default:u(()=>[...t[72]||(t[72]=[n("factorial",-1)])]),_:1}),t[74]||(t[74]=n(" . ",-1)),l(o,{language:"c",code:A}),t[75]||(t[75]=n(" Output ",-1)),l(d,{output:B})]),_:1}),l(e,null,{default:u(()=>[t[79]||(t[79]=n(" The factorial of ",-1)),l(i,null,{default:u(()=>[...t[76]||(t[76]=[n("5",-1)])]),_:1}),t[80]||(t[80]=n(" is calculated as: ",-1)),l(i,null,{default:u(()=>[...t[77]||(t[77]=[n("5 × 4 × 3 × 2 × 1",-1)])]),_:1}),t[81]||(t[81]=n(" , which gives ",-1)),l(i,null,{default:u(()=>[...t[78]||(t[78]=[n("120",-1)])]),_:1}),t[82]||(t[82]=n(" . ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[83]||(t[83]=[n("Fibonacci Sequence",-1)])]),_:1}),l(e,null,{default:u(()=>[t[85]||(t[85]=n(" Recursion can also be used to calculate values in the ",-1)),l(i,null,{default:u(()=>[...t[84]||(t[84]=[n("Fibonacci sequence",-1)])]),_:1}),t[86]||(t[86]=n(" . ",-1)),l(o,{language:"c",code:D}),t[87]||(t[87]=n(" Output ",-1)),l(d,{output:E})]),_:1}),l(e,null,{default:u(()=>[...t[88]||(t[88]=[n(" Each Fibonacci value is calculated from the two preceding values. This causes the function to make multiple recursive calls. ",-1)])]),_:1}),l(s,null,{default:u(()=>[...t[89]||(t[89]=[n("The Order of Execution",-1)])]),_:1}),l(e,null,{default:u(()=>[t[90]||(t[90]=n(" A recursive call does not always produce its output immediately. Code placed after the recursive call executes when the recursive calls begin returning. ",-1)),l(o,{language:"c",code:V}),t[91]||(t[91]=n(" Output ",-1)),l(d,{output:q})]),_:1}),l(e,null,{default:u(()=>[t[93]||(t[93]=n(" The function first reaches the base case. As the calls return, the ",-1)),l(i,null,{default:u(()=>[...t[92]||(t[92]=[n("printf()",-1)])]),_:1}),t[94]||(t[94]=n(" statements execute in reverse order of the recursive calls. ",-1))]),_:1}),l(f,{title:"Keep This in Mind"},{default:u(()=>[t[97]||(t[97]=n(" Recursion has two important parts: ",-1)),l(i,null,{default:u(()=>[...t[95]||(t[95]=[n("base case",-1)])]),_:1}),t[98]||(t[98]=n(" to stop the recursion and ",-1)),l(i,null,{default:u(()=>[...t[96]||(t[96]=[n("recursive case",-1)])]),_:1}),t[99]||(t[99]=n(" to continue it. ",-1))]),_:1}),l(s,null,{default:u(()=>[...t[100]||(t[100]=[n("Summary",-1)])]),_:1}),l(e,null,{default:u(()=>[...t[101]||(t[101]=[n(" Recursion allows a function to call itself to solve a problem by working with smaller or simpler versions of that problem. ",-1)])]),_:1}),l(e,null,{default:u(()=>[...t[102]||(t[102]=[r("ul",{class:"list-disc pl-6 space-y-2"},[r("li",null,"Recursion happens when a function calls itself."),r("li",null,"A base case provides the stopping condition."),r("li",null,"A recursive case makes another call to the function."),r("li",null,"Each recursive call should move toward the base case."),r("li",null,"Recursive functions can return values."),r("li",null,"Factorials and Fibonacci calculations are common examples of recursion.")],-1)])]),_:1}),t[105]||(t[105]=r("br",null,null,-1)),l(m,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{L as default};

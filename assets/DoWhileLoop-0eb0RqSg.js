import{_ as p}from"./logo-C9ImmdpX.js";import{T as o,a as s,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as u,C as r}from"./CodeBlock-CSdrTDFH.js";import{O as d}from"./OutputBlock-BPpR2jjy.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-TzdiyR-Q.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{d as b,h as g,i as l,o as w,a as i,q as e,g as n}from"./index-D3WOnH5O.js";const x={class:"max-w-4xl mx-auto"},y=`
do {
    // statements
} while (condition);`,k=`
#include <stdio.h>

int main() {
    int number = 1;

    do {
        printf("%d\\n", number);
        number++;
    } while (number <= 5);
    return 0;
}`,v=`
1
2
3
4
5`,O=`
#include <stdio.h>

int main() {
    int number = 10;

    do {
        printf("%d\\n", number);
        number++;
    } while (number <= 5);
    return 0;
}`,T="10",P=`
#include <stdio.h>

int main() {
    int number = 1;

    do {
        printf("%d\\n", number);
        number += 2;
    } while (number <= 10);
    return 0;
}`,q=`
1
3
5
7
9`,C=`
#include <stdio.h>

int main() {
    int number = 5;

    do {
        printf("%d\\n", number);
        number--;
    } while (number >= 1);
    return 0;
}`,E=`
5
4
3
2
1`,S=`
#include <stdio.h>

int main() {
    int number = 2;

    do {
        printf("%d\\n", number);
        number += 2;
    } while (number <= 10);
    return 0;
}`,B=`
2
4
6
8
10`,I=`
#include <stdio.h>

int main() {
    int number = 1;
    int sum = 0;

    do {
        sum += number;
        number++;
    } while (number <= 5);

    printf("Sum: %d\\n", sum);
    return 0;
}`,A="Sum: 15",W=`
#include <stdio.h>

int main() {
    int number = 1;
    int square;

    do {
        square = number * number;
        printf("%d squared is %d\\n", number, square);
        number++;
    } while (number <= 5);
    return 0;
}`,N=`
1 squared is 1
2 squared is 4
3 squared is 9
4 squared is 16
5 squared is 25`,U=`
#include <stdio.h>

int main() {
    int number;

    do {
        printf("Enter a positive number: ");
        scanf("%d", &number);
    } while (number <= 0);

    printf("You entered: %d\\n", number);
    return 0;
}`,D=`
Enter a positive number: -3
Enter a positive number: 0
Enter a positive number: 8
You entered: 8`,L=`
#include <stdio.h>

int main() {
    int choice;

    do {
        printf("1. Start\\n");
        printf("2. Exit\\n");
        printf("Enter choice: ");
        scanf("%d", &choice);
    } while (choice != 2);

    printf("Program ended.\\n");
    return 0;
}`,V=`
1. Start
2. Exit
Enter choice: 1
1. Start
2. Exit
Enter choice: 2
Program ended.`,M=`
#include <stdio.h>

int main() {
    int number = 10;

    do {
        printf("do...while executed\\n");
    } while (number < 5);
    return 0;
}`,$="do...while executed",Q=b({__name:"DoWhileLoop",setup(j){return(H,t)=>(w(),g(a,null,{default:l(()=>[i("div",x,[t[101]||(t[101]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:p,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[102]||(t[102]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," do...while Loop ")],-1)),e(o,null,{default:l(()=>[t[1]||(t[1]=n(" A ",-1)),e(u,null,{default:l(()=>[...t[0]||(t[0]=[n("do...while",-1)])]),_:1}),t[2]||(t[2]=n(" loop repeatedly executes a block of statements while a condition is true. ",-1))]),_:1}),e(o,null,{default:l(()=>[t[5]||(t[5]=n(" Unlike a ",-1)),e(u,null,{default:l(()=>[...t[3]||(t[3]=[n("while",-1)])]),_:1}),t[6]||(t[6]=n(" loop, the statements inside a ",-1)),e(u,null,{default:l(()=>[...t[4]||(t[4]=[n("do...while",-1)])]),_:1}),t[7]||(t[7]=n(" loop are executed ",-1)),t[8]||(t[8]=i("strong",null,"before",-1)),t[9]||(t[9]=n(" the condition is checked. ",-1)),e(r,{language:"c",code:y})]),_:1}),e(o,null,{default:l(()=>[...t[10]||(t[10]=[n(" Notice that the condition comes ",-1),i("strong",null,"after",-1),n(" the closing brace. Because of this, the loop always executes at least once. ",-1)])]),_:1}),e(m,{title:"Remember the Order"},{default:l(()=>[t[12]||(t[12]=n(" Think of ",-1)),e(u,null,{default:l(()=>[...t[11]||(t[11]=[n("do...while",-1)])]),_:1}),t[13]||(t[13]=n(" as: ",-1)),t[14]||(t[14]=i("strong",null,"“Do this first, then check if I should repeat.”",-1))]),_:1}),e(s,{title:"Basic Example"}),e(o,null,{default:l(()=>[t[17]||(t[17]=n(" Here, the loop starts with ",-1)),e(u,null,{default:l(()=>[...t[15]||(t[15]=[n("number",-1)])]),_:1}),t[18]||(t[18]=n(" equal to ",-1)),e(u,null,{default:l(()=>[...t[16]||(t[16]=[n("1",-1)])]),_:1}),t[19]||(t[19]=n(" . After each iteration, the number is increased by one. ",-1)),e(r,{language:"c",code:k}),t[20]||(t[20]=n(" Output ",-1)),e(d,{output:v})]),_:1}),e(o,null,{default:l(()=>[t[23]||(t[23]=n(" The loop continues as long as ",-1)),e(u,null,{default:l(()=>[...t[21]||(t[21]=[n("number",-1)])]),_:1}),t[24]||(t[24]=n(" is less than or equal to ",-1)),e(u,null,{default:l(()=>[...t[22]||(t[22]=[n("5",-1)])]),_:1}),t[25]||(t[25]=n(" . ",-1))]),_:1}),e(s,{title:"The Condition Is Checked After the Loop"}),e(o,null,{default:l(()=>[t[27]||(t[27]=n(" The most important feature of a ",-1)),e(u,null,{default:l(()=>[...t[26]||(t[26]=[n("do...while",-1)])]),_:1}),t[28]||(t[28]=n(" loop is that its condition is checked only after the loop body has executed. ",-1)),e(r,{language:"c",code:O}),t[29]||(t[29]=n(" Output ",-1)),e(d,{output:T})]),_:1}),e(o,null,{default:l(()=>[t[33]||(t[33]=n(" Even though ",-1)),e(u,null,{default:l(()=>[...t[30]||(t[30]=[n("number",-1)])]),_:1}),t[34]||(t[34]=n(" starts at ",-1)),e(u,null,{default:l(()=>[...t[31]||(t[31]=[n("10",-1)])]),_:1}),t[35]||(t[35]=n(" , the message is still printed once. Only after that does C check whether ",-1)),e(u,null,{default:l(()=>[...t[32]||(t[32]=[n("number <= 5",-1)])]),_:1}),t[36]||(t[36]=n(" is true. ",-1))]),_:1}),e(m,{title:"What Makes It Different"},{default:l(()=>[t[39]||(t[39]=n(" With ",-1)),e(u,null,{default:l(()=>[...t[37]||(t[37]=[n("while",-1)])]),_:1}),t[40]||(t[40]=n(" , a false condition can prevent the loop from running. With ",-1)),e(u,null,{default:l(()=>[...t[38]||(t[38]=[n("do...while",-1)])]),_:1}),t[41]||(t[41]=n(" , the first execution always happens. ",-1))]),_:1}),e(s,{title:"Updating the Loop Variable"}),e(o,null,{default:l(()=>[t[43]||(t[43]=n(" Just like other loops, a ",-1)),e(u,null,{default:l(()=>[...t[42]||(t[42]=[n("do...while",-1)])]),_:1}),t[44]||(t[44]=n(" loop usually needs an update to eventually make its condition false. ",-1)),e(r,{language:"c",code:P}),t[45]||(t[45]=n(" Output ",-1)),e(d,{output:q})]),_:1}),e(o,null,{default:l(()=>[t[49]||(t[49]=n(" The value increases by ",-1)),e(u,null,{default:l(()=>[...t[46]||(t[46]=[n("2",-1)])]),_:1}),t[50]||(t[50]=n(" after every iteration, producing only the odd numbers from ",-1)),e(u,null,{default:l(()=>[...t[47]||(t[47]=[n("1",-1)])]),_:1}),t[51]||(t[51]=n(" to ",-1)),e(u,null,{default:l(()=>[...t[48]||(t[48]=[n("9",-1)])]),_:1}),t[52]||(t[52]=n(" . ",-1))]),_:1}),e(s,{title:"Counting Down"}),e(o,null,{default:l(()=>[t[54]||(t[54]=n(" A ",-1)),e(u,null,{default:l(()=>[...t[53]||(t[53]=[n("do...while",-1)])]),_:1}),t[55]||(t[55]=n(" loop can also count backwards by decreasing the loop variable. ",-1)),e(r,{language:"c",code:C}),t[56]||(t[56]=n(" Output ",-1)),e(d,{output:E})]),_:1}),e(s,{title:"Printing Even Numbers"}),e(o,null,{default:l(()=>[t[58]||(t[58]=n(" By increasing the value by ",-1)),e(u,null,{default:l(()=>[...t[57]||(t[57]=[n("2",-1)])]),_:1}),t[59]||(t[59]=n(" each time, we can easily generate a sequence of even numbers. ",-1)),e(r,{language:"c",code:S}),t[60]||(t[60]=n(" Output ",-1)),e(d,{output:B})]),_:1}),e(s,{title:"Calculating a Sum"}),e(o,null,{default:l(()=>[t[64]||(t[64]=n(" A loop can perform calculations while it repeats. In this example, ",-1)),e(u,null,{default:l(()=>[...t[61]||(t[61]=[n("sum",-1)])]),_:1}),t[65]||(t[65]=n(" stores the total of the numbers from ",-1)),e(u,null,{default:l(()=>[...t[62]||(t[62]=[n("1",-1)])]),_:1}),t[66]||(t[66]=n(" to ",-1)),e(u,null,{default:l(()=>[...t[63]||(t[63]=[n("5",-1)])]),_:1}),t[67]||(t[67]=n(" . ",-1)),e(r,{language:"c",code:I}),t[68]||(t[68]=n(" Output ",-1)),e(d,{output:A})]),_:1}),e(s,{title:"Multiple Statements"}),e(o,null,{default:l(()=>[t[70]||(t[70]=n(" The body of a ",-1)),e(u,null,{default:l(()=>[...t[69]||(t[69]=[n("do...while",-1)])]),_:1}),t[71]||(t[71]=n(" loop can contain multiple statements. They all execute during every iteration. ",-1)),e(r,{language:"c",code:W}),t[72]||(t[72]=n(" Output ",-1)),e(d,{output:N})]),_:1}),e(s,{title:"Using Input with do...while"}),e(o,null,{default:l(()=>[t[74]||(t[74]=n(" One common use of ",-1)),e(u,null,{default:l(()=>[...t[73]||(t[73]=[n("do...while",-1)])]),_:1}),t[75]||(t[75]=n(" is validating user input. We can repeatedly ask the user for a value until a valid value is entered. ",-1)),e(r,{language:"c",code:U}),t[76]||(t[76]=n(" Output ",-1)),e(d,{output:D})]),_:1}),e(o,null,{default:l(()=>[...t[77]||(t[77]=[n(" The user is asked for a number at least once. If the entered value is not positive, the loop asks again. ",-1)])]),_:1}),e(m,{title:"When to Use It"},{default:l(()=>[...t[78]||(t[78]=[n(" This pattern is useful when an action must happen at least once, such as asking for input or displaying a menu. ",-1)])]),_:1}),e(s,{title:"Using do...while for Menus"}),e(o,null,{default:l(()=>[t[79]||(t[79]=n(" A menu is another practical example. The menu needs to be displayed before the program can check what the user wants to do. ",-1)),e(r,{language:"c",code:L}),t[80]||(t[80]=n(" Output ",-1)),e(d,{output:V})]),_:1}),e(o,null,{default:l(()=>[t[82]||(t[82]=n(" The menu keeps appearing until the user selects ",-1)),e(u,null,{default:l(()=>[...t[81]||(t[81]=[n("2",-1)])]),_:1}),t[83]||(t[83]=n(" . ",-1))]),_:1}),e(s,{title:"do...while vs while"}),e(o,null,{default:l(()=>[t[84]||(t[84]=n(" Both loops repeat statements while a condition controls the repetition, but they check the condition at different times. ",-1)),e(r,{language:"c",code:M}),t[85]||(t[85]=n(" Output ",-1)),e(d,{output:$})]),_:1}),e(o,null,{default:l(()=>[...t[86]||(t[86]=[n(" Here, the condition is already false, but the message still appears once because the loop body executes before the condition is checked. ",-1)])]),_:1}),e(s,null,{default:l(()=>[...t[87]||(t[87]=[n("Summary",-1)])]),_:1}),e(o,null,{default:l(()=>[t[90]||(t[90]=n(" A ",-1)),e(u,null,{default:l(()=>[...t[88]||(t[88]=[n("while",-1)])]),_:1}),t[91]||(t[91]=n(" loop checks its condition ",-1)),t[92]||(t[92]=i("strong",null,"before",-1)),t[93]||(t[93]=n(" executing the body. A ",-1)),e(u,null,{default:l(()=>[...t[89]||(t[89]=[n("do...while",-1)])]),_:1}),t[94]||(t[94]=n(" loop checks its condition ",-1)),t[95]||(t[95]=i("strong",null,"after",-1)),t[96]||(t[96]=n(" executing the body. ",-1))]),_:1}),e(o,null,{default:l(()=>[t[98]||(t[98]=n(" The ",-1)),e(u,null,{default:l(()=>[...t[97]||(t[97]=[n("do...while",-1)])]),_:1}),t[99]||(t[99]=n(" loop is useful when a block of code needs to execute at least once before deciding whether it should repeat. ",-1)),t[100]||(t[100]=i("ul",{class:"list-disc pl-6 space-y-2"},[i("li",null,"The loop body executes before the condition is checked."),i("li",null,"The loop always executes at least once."),i("li",null,"The condition is placed after the loop body."),i("li",null,"The loop can count up, count down, or perform calculations."),i("li",null,"It is useful for input validation and menu-driven programs.")],-1))]),_:1}),t[103]||(t[103]=i("br",null,null,-1)),e(f,{to:"/academia/student/classes/c-for-loop"})])]),_:1}))}});export{Q as default};

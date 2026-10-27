import{_ as f}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{T as u,a as d,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{T as e}from"./TopicTerm-Dw7PNqTI.js";import{C as s}from"./CodeBlock-BgBdQh_Q.js";import{O as r}from"./OutputBlock-CUGk6WXg.js";import{d as a,h as b,i as n,o as w,a as i,q as o,g as t}from"./index-BX2gTDPs.js";const x={class:"max-w-4xl mx-auto"},y={class:"list-disc pl-8 mt-3 space-y-2"},g=`
int number = 1;

do {
    System.out.println(number);
    number++;
} while (number <= 5);`,T=`1
2
3
4
5`,v=`
int number = 10;

do {
    System.out.println(number);
    number++;
} while (number < 5);`,k="10",O=`
int number = 5;

do {
    System.out.println(number);
    number--;
} while (number >= 1);`,A=`5
4
3
2
1`,C=`
int choice = 1;

do {
    System.out.println("Menu displayed");
    choice++;
} while (choice <= 3);`,j=`
Menu displayed
Menu displayed
Menu displayed`,S=`
int number = 1;
int sum = 0;

do {
    sum += number;
    number++;
} while (number <= 5);

System.out.println(sum);`,B="15",E=`
int number = 1;

do {
    System.out.println(number);
} while (number <= 5);`,J=a({__name:"DoWhileLoop",setup(L){return(F,l)=>(w(),b(p,null,{default:n(()=>[i("div",x,[l[103]||(l[103]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:f,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[104]||(l[104]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," do...while Loop ")],-1)),o(u,null,{default:n(()=>[l[2]||(l[2]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[0]||(l[0]=[t("do...while",-1)])]),_:1}),l[3]||(l[3]=t(" loop is another type of loop in Java. It is similar to a ",-1)),o(e,null,{default:n(()=>[...l[1]||(l[1]=[t("while",-1)])]),_:1}),l[4]||(l[4]=t(" loop, but there is an important difference in when the condition is checked. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[6]||(l[6]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[5]||(l[5]=[t("do...while",-1)])]),_:1}),l[7]||(l[7]=t(" loop executes its block of code first and checks the condition afterward. This means the loop body always executes at least once. ",-1))]),_:1}),o(d,null,{default:n(()=>[...l[8]||(l[8]=[t("Basic Syntax",-1)])]),_:1}),o(u,null,{default:n(()=>[l[10]||(l[10]=t(" The basic structure of a ",-1)),o(e,null,{default:n(()=>[...l[9]||(l[9]=[t("do...while",-1)])]),_:1}),l[11]||(l[11]=t(" loop is: ",-1)),o(s,{code:`
						do {
						    // code to repeat
						} while (condition);`,language:"java"})]),_:1}),o(u,null,{default:n(()=>[l[13]||(l[13]=t(" Notice that the condition appears after the loop body. The semicolon after the ",-1)),o(e,null,{default:n(()=>[...l[12]||(l[12]=[t("while",-1)])]),_:1}),l[14]||(l[14]=t(" condition is required. ",-1))]),_:1}),o(d,null,{default:n(()=>[...l[15]||(l[15]=[t("Basic Example",-1)])]),_:1}),o(u,null,{default:n(()=>[l[16]||(l[16]=t(" For example: ",-1)),o(s,{code:g,language:"java"})]),_:1}),o(u,null,{default:n(()=>[l[19]||(l[19]=t(" The loop displays the numbers from ",-1)),o(e,null,{default:n(()=>[...l[17]||(l[17]=[t("1",-1)])]),_:1}),l[20]||(l[20]=t(" to ",-1)),o(e,null,{default:n(()=>[...l[18]||(l[18]=[t("5",-1)])]),_:1}),l[21]||(l[21]=t(" . ",-1))]),_:1}),o(u,null,{default:n(()=>[l[22]||(l[22]=t(" Output: ",-1)),o(r,{output:T})]),_:1}),o(d,null,{default:n(()=>[...l[23]||(l[23]=[t("The Loop Executes Before the Condition",-1)])]),_:1}),o(u,null,{default:n(()=>[l[25]||(l[25]=t(" The most important characteristic of a ",-1)),o(e,null,{default:n(()=>[...l[24]||(l[24]=[t("do...while",-1)])]),_:1}),l[26]||(l[26]=t(" loop is that the loop body executes before the condition is checked. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[27]||(l[27]=t(" Consider this example: ",-1)),o(s,{code:v,language:"java"})]),_:1}),o(u,null,{default:n(()=>[l[29]||(l[29]=t(" Although ",-1)),o(e,null,{default:n(()=>[...l[28]||(l[28]=[t("10 < 5",-1)])]),_:1}),l[30]||(l[30]=t(" is false, the message is still displayed once because the loop body executes before the condition is checked. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[31]||(l[31]=t(" Output: ",-1)),o(r,{output:k})]),_:1}),o(d,null,{default:n(()=>[...l[32]||(l[32]=[t("Counting Down",-1)])]),_:1}),o(u,null,{default:n(()=>[l[34]||(l[34]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[33]||(l[33]=[t("do...while",-1)])]),_:1}),l[35]||(l[35]=t(" loop can also be used to count downward. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[36]||(l[36]=t(" For example: ",-1)),o(s,{code:O,language:"java"})]),_:1}),o(u,null,{default:n(()=>[l[37]||(l[37]=t(" Output: ",-1)),o(r,{output:A})]),_:1}),o(u,null,{default:n(()=>[l[39]||(l[39]=t(" The variable is decreased after every iteration using the ",-1)),o(e,null,{default:n(()=>[...l[38]||(l[38]=[t("--",-1)])]),_:1}),l[40]||(l[40]=t(" operator. ",-1))]),_:1}),o(d,null,{default:n(()=>[...l[41]||(l[41]=[t("Repeating a Menu",-1)])]),_:1}),o(u,null,{default:n(()=>[l[43]||(l[43]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[42]||(l[42]=[t("do...while",-1)])]),_:1}),l[44]||(l[44]=t(" loop is useful when an action should happen at least once before deciding whether it should happen again. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[45]||(l[45]=t(" For example: ",-1)),o(s,{code:C,language:"java"})]),_:1}),o(u,null,{default:n(()=>[l[46]||(l[46]=t(" Output: ",-1)),o(r,{output:j})]),_:1}),o(u,null,{default:n(()=>[...l[47]||(l[47]=[t(" The menu is displayed first, and then the condition determines whether another iteration should occur. ",-1)])]),_:1}),o(d,null,{default:n(()=>[...l[48]||(l[48]=[t("Calculating a Sum",-1)])]),_:1}),o(u,null,{default:n(()=>[l[50]||(l[50]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[49]||(l[49]=[t("do...while",-1)])]),_:1}),l[51]||(l[51]=t(" loop can also perform calculations repeatedly. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[52]||(l[52]=t(" For example: ",-1)),o(s,{code:S,language:"java"})]),_:1}),o(u,null,{default:n(()=>[l[53]||(l[53]=t(" Output: ",-1)),o(r,{output:B})]),_:1}),o(u,null,{default:n(()=>[l[55]||(l[55]=t(" The loop continues while ",-1)),o(e,null,{default:n(()=>[...l[54]||(l[54]=[t("number <= 5",-1)])]),_:1}),l[56]||(l[56]=t(" is true. ",-1))]),_:1}),o(d,null,{default:n(()=>[...l[57]||(l[57]=[t("Updating the Loop Variable",-1)])]),_:1}),o(u,null,{default:n(()=>[l[60]||(l[60]=t(" Like a ",-1)),o(e,null,{default:n(()=>[...l[58]||(l[58]=[t("while",-1)])]),_:1}),l[61]||(l[61]=t(" loop, a ",-1)),o(e,null,{default:n(()=>[...l[59]||(l[59]=[t("do...while",-1)])]),_:1}),l[62]||(l[62]=t(" loop should usually update a variable that affects its condition. ",-1))]),_:1}),o(u,null,{default:n(()=>[...l[63]||(l[63]=[t(" Without an update, the condition may remain true forever. ",-1)])]),_:1}),o(u,null,{default:n(()=>[l[64]||(l[64]=t(" For example: ",-1)),o(s,{code:E,language:"java"})]),_:1}),o(u,null,{default:n(()=>[l[67]||(l[67]=t(" Since ",-1)),o(e,null,{default:n(()=>[...l[65]||(l[65]=[t("number",-1)])]),_:1}),l[68]||(l[68]=t(" never changes, the condition remains true. This creates an ",-1)),o(e,null,{default:n(()=>[...l[66]||(l[66]=[t("infinite loop",-1)])]),_:1}),l[69]||(l[69]=t(" . ",-1))]),_:1}),o(d,null,{default:n(()=>[...l[70]||(l[70]=[t("while vs do...while",-1)])]),_:1}),o(u,null,{default:n(()=>[...l[71]||(l[71]=[t(" The main difference between the two loops is when the condition is checked. ",-1)])]),_:1}),o(u,null,{default:n(()=>[l[74]||(l[74]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[72]||(l[72]=[t("while",-1)])]),_:1}),l[75]||(l[75]=t(" loop checks the condition before executing the loop body. A ",-1)),o(e,null,{default:n(()=>[...l[73]||(l[73]=[t("do...while",-1)])]),_:1}),l[76]||(l[76]=t(" loop executes the body first and checks the condition afterward. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[79]||(l[79]=t(" Therefore, a ",-1)),o(e,null,{default:n(()=>[...l[77]||(l[77]=[t("while",-1)])]),_:1}),l[80]||(l[80]=t(" loop can execute zero times, while a ",-1)),o(e,null,{default:n(()=>[...l[78]||(l[78]=[t("do...while",-1)])]),_:1}),l[81]||(l[81]=t(" loop always executes at least once. ",-1))]),_:1}),o(d,null,{default:n(()=>[...l[82]||(l[82]=[t("When to Use do...while",-1)])]),_:1}),o(u,null,{default:n(()=>[l[84]||(l[84]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[83]||(l[83]=[t("do...while",-1)])]),_:1}),l[85]||(l[85]=t(" loop is useful when an action must happen at least once before checking whether it should be repeated. ",-1))]),_:1}),o(u,null,{default:n(()=>[...l[86]||(l[86]=[t(" Common examples include displaying a menu, asking for input, or repeating an operation until the user chooses to stop. ",-1)])]),_:1}),o(d,null,{default:n(()=>[...l[87]||(l[87]=[t("Summary",-1)])]),_:1}),o(u,null,{default:n(()=>[l[89]||(l[89]=t(" The ",-1)),o(e,null,{default:n(()=>[...l[88]||(l[88]=[t("do...while",-1)])]),_:1}),l[90]||(l[90]=t(" loop executes a block of code and then checks whether the loop should continue. ",-1))]),_:1}),o(u,null,{default:n(()=>[l[102]||(l[102]=t(" In this topic, you learned that: ",-1)),i("ul",y,[i("li",null,[l[92]||(l[92]=t(" A ",-1)),o(e,null,{default:n(()=>[...l[91]||(l[91]=[t("do...while",-1)])]),_:1}),l[93]||(l[93]=t(" loop executes its body before checking the condition. ",-1))]),l[100]||(l[100]=i("li",null," The loop body always executes at least once. ",-1)),i("li",null,[l[95]||(l[95]=t(" The ",-1)),o(e,null,{default:n(()=>[...l[94]||(l[94]=[t("while",-1)])]),_:1}),l[96]||(l[96]=t(" condition appears after the loop body. ",-1))]),i("li",null,[l[98]||(l[98]=t(" A semicolon is required after the ",-1)),o(e,null,{default:n(()=>[...l[97]||(l[97]=[t("while",-1)])]),_:1}),l[99]||(l[99]=t(" condition. ",-1))]),l[101]||(l[101]=i("li",null," The loop variable should usually be updated to avoid an infinite loop. ",-1))])]),_:1}),l[105]||(l[105]=i("br",null,null,-1)),o(m,{to:"/academia/student/classes/java-for-loop"})])]),_:1}))}});export{J as default};

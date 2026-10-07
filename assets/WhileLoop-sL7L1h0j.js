import{_ as f}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-DJnrRoKO.js";import{T as e,a as s,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-CFdx1hyn.js";import{T as o,C as d}from"./CodeBlock-C71vZ0rQ.js";import{O as r}from"./OutputBlock-D-Mb7HUv.js";import{d as a,h as b,i as u,o as y,a as i,q as n,g as t}from"./index-BD6qp2iQ.js";const g={class:"max-w-4xl mx-auto"},w={class:"list-disc pl-8 mt-3 space-y-2"},v={class:"list-disc pl-8 mt-3 space-y-2"},x=`
int count = 1;

while (count <= 5) {
    System.out.println(count);
    count++;
}`,T=`1
2
3
4
5`,k=`
int number = 1;

while (number <= 3) {
    System.out.println("Hello");
    number++;
}`,O=`Hello
Hello
Hello`,C=`
int number = 5;

while (number >= 1) {
    System.out.println(number);
    number--;
}`,S=`5
4
3
2
1`,j=`
int number = 1;
int sum = 0;

while (number <= 5) {
    sum += number;
    number++;
}

System.out.println(sum);`,A="15",F=`
int number = 2;

while (number <= 10) {
    System.out.println(number);
    number += 2;
}`,B=`2
4
6
8
10`,I=`
int number = 10;

while (number < 5) {
    System.out.println(number);
}`,H=`
int number = 1;

while (number <= 5) {
    System.out.println(number);
}`,P=a({__name:"WhileLoop",setup(L){return(E,l)=>(y(),b(m,null,{default:u(()=>[i("div",g,[l[121]||(l[121]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:f,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[122]||(l[122]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," while Loop ")],-1)),n(e,null,{default:u(()=>[l[1]||(l[1]=t(" Programs often need to repeat the same instructions several times. Instead of writing the same code repeatedly, Java provides ",-1)),n(o,null,{default:u(()=>[...l[0]||(l[0]=[t("loops",-1)])]),_:1}),l[2]||(l[2]=t(" to execute a block of code multiple times. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[5]||(l[5]=t(" A ",-1)),n(o,null,{default:u(()=>[...l[3]||(l[3]=[t("while",-1)])]),_:1}),l[6]||(l[6]=t(" loop repeatedly executes a block of code as long as its condition remains ",-1)),n(o,null,{default:u(()=>[...l[4]||(l[4]=[t("true",-1)])]),_:1}),l[7]||(l[7]=t(" . ",-1))]),_:1}),n(s,null,{default:u(()=>[...l[8]||(l[8]=[t("Basic Syntax",-1)])]),_:1}),n(e,null,{default:u(()=>[l[10]||(l[10]=t(" The basic structure of a ",-1)),n(o,null,{default:u(()=>[...l[9]||(l[9]=[t("while",-1)])]),_:1}),l[11]||(l[11]=t(" loop is: ",-1)),n(d,{code:`
						while (condition) {
						    // code to repeat
						}`,language:"java"})]),_:1}),n(e,null,{default:u(()=>[...l[12]||(l[12]=[t(" Java checks the condition before each iteration. If the condition is true, the statements inside the loop execute. After the statements finish, the condition is checked again. ",-1)])]),_:1}),n(s,null,{default:u(()=>[...l[13]||(l[13]=[t("Basic Example",-1)])]),_:1}),n(e,null,{default:u(()=>[l[14]||(l[14]=t(" For example: ",-1)),n(d,{code:x,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[18]||(l[18]=t(" The loop starts with ",-1)),n(o,null,{default:u(()=>[...l[15]||(l[15]=[t("count",-1)])]),_:1}),l[19]||(l[19]=t(" equal to ",-1)),n(o,null,{default:u(()=>[...l[16]||(l[16]=[t("1",-1)])]),_:1}),l[20]||(l[20]=t(" and continues while the value is less than or equal to ",-1)),n(o,null,{default:u(()=>[...l[17]||(l[17]=[t("5",-1)])]),_:1}),l[21]||(l[21]=t(" . ",-1))]),_:1}),n(e,null,{default:u(()=>[l[22]||(l[22]=t(" Output: ",-1)),n(r,{output:T})]),_:1}),n(s,null,{default:u(()=>[...l[23]||(l[23]=[t("How the Loop Works",-1)])]),_:1}),n(e,null,{default:u(()=>[l[34]||(l[34]=t(" In the previous example, the loop follows these steps: ",-1)),i("ul",w,[i("li",null,[l[25]||(l[25]=t(" Check whether ",-1)),n(o,null,{default:u(()=>[...l[24]||(l[24]=[t("count <= 5",-1)])]),_:1}),l[26]||(l[26]=t(" is true. ",-1))]),i("li",null,[l[28]||(l[28]=t(" Display the current value of ",-1)),n(o,null,{default:u(()=>[...l[27]||(l[27]=[t("count",-1)])]),_:1}),l[29]||(l[29]=t(" . ",-1))]),i("li",null,[l[31]||(l[31]=t(" Increase ",-1)),n(o,null,{default:u(()=>[...l[30]||(l[30]=[t("count",-1)])]),_:1}),l[32]||(l[32]=t(" by one. ",-1))]),l[33]||(l[33]=i("li",null," Check the condition again. ",-1))])]),_:1}),n(e,null,{default:u(()=>[l[37]||(l[37]=t(" When ",-1)),n(o,null,{default:u(()=>[...l[35]||(l[35]=[t("count",-1)])]),_:1}),l[38]||(l[38]=t(" becomes ",-1)),n(o,null,{default:u(()=>[...l[36]||(l[36]=[t("6",-1)])]),_:1}),l[39]||(l[39]=t(" , the condition becomes false and the loop stops. ",-1))]),_:1}),n(s,null,{default:u(()=>[...l[40]||(l[40]=[t("Repeating Text",-1)])]),_:1}),n(e,null,{default:u(()=>[l[42]||(l[42]=t(" A ",-1)),n(o,null,{default:u(()=>[...l[41]||(l[41]=[t("while",-1)])]),_:1}),l[43]||(l[43]=t(" loop can repeat any valid Java statements. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[44]||(l[44]=t(" For example: ",-1)),n(d,{code:k,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[45]||(l[45]=t(" Output: ",-1)),n(r,{output:O})]),_:1}),n(s,null,{default:u(()=>[...l[46]||(l[46]=[t("Counting Down",-1)])]),_:1}),n(e,null,{default:u(()=>[l[48]||(l[48]=t(" A ",-1)),n(o,null,{default:u(()=>[...l[47]||(l[47]=[t("while",-1)])]),_:1}),l[49]||(l[49]=t(" loop can also count downward by decreasing a variable on every iteration. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[50]||(l[50]=t(" For example: ",-1)),n(d,{code:C,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[51]||(l[51]=t(" Output: ",-1)),n(r,{output:S})]),_:1}),n(e,null,{default:u(()=>[l[54]||(l[54]=t(" The ",-1)),n(o,null,{default:u(()=>[...l[52]||(l[52]=[t("--",-1)])]),_:1}),l[55]||(l[55]=t(" operator decreases the value of ",-1)),n(o,null,{default:u(()=>[...l[53]||(l[53]=[t("number",-1)])]),_:1}),l[56]||(l[56]=t(" by one after each iteration. ",-1))]),_:1}),n(s,null,{default:u(()=>[...l[57]||(l[57]=[t("Calculating a Sum",-1)])]),_:1}),n(e,null,{default:u(()=>[...l[58]||(l[58]=[t(" A loop can also be used to perform calculations repeatedly. ",-1)])]),_:1}),n(e,null,{default:u(()=>[l[61]||(l[61]=t(" For example, we can calculate the sum of the numbers from ",-1)),n(o,null,{default:u(()=>[...l[59]||(l[59]=[t("1",-1)])]),_:1}),l[62]||(l[62]=t(" to ",-1)),n(o,null,{default:u(()=>[...l[60]||(l[60]=[t("5",-1)])]),_:1}),l[63]||(l[63]=t(" : ",-1)),n(d,{code:j,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[64]||(l[64]=t(" Output: ",-1)),n(r,{output:A})]),_:1}),n(e,null,{default:u(()=>[l[66]||(l[66]=t(" During each iteration, the current number is added to ",-1)),n(o,null,{default:u(()=>[...l[65]||(l[65]=[t("sum",-1)])]),_:1}),l[67]||(l[67]=t(" . ",-1))]),_:1}),n(s,null,{default:u(()=>[...l[68]||(l[68]=[t("Counting by More Than One",-1)])]),_:1}),n(e,null,{default:u(()=>[l[70]||(l[70]=t(" The update inside a ",-1)),n(o,null,{default:u(()=>[...l[69]||(l[69]=[t("while",-1)])]),_:1}),l[71]||(l[71]=t(" loop does not have to increase the value by exactly one. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[72]||(l[72]=t(" For example, we can display even numbers by increasing the value by two: ",-1)),n(d,{code:F,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[73]||(l[73]=t(" Output: ",-1)),n(r,{output:B})]),_:1}),n(s,null,{default:u(()=>[...l[74]||(l[74]=[t("When the Condition is Initially False",-1)])]),_:1}),n(e,null,{default:u(()=>[l[76]||(l[76]=t(" A ",-1)),n(o,null,{default:u(()=>[...l[75]||(l[75]=[t("while",-1)])]),_:1}),l[77]||(l[77]=t(" loop checks its condition before executing the loop body. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[78]||(l[78]=t(" For example: ",-1)),n(d,{code:I,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[80]||(l[80]=t(" Here, ",-1)),n(o,null,{default:u(()=>[...l[79]||(l[79]=[t("10 < 5",-1)])]),_:1}),l[81]||(l[81]=t(" is already false. Therefore, the loop body does not execute even once. ",-1))]),_:1}),n(s,null,{default:u(()=>[...l[82]||(l[82]=[t("Updating the Loop Variable",-1)])]),_:1}),n(e,null,{default:u(()=>[l[84]||(l[84]=t(" The condition of a ",-1)),n(o,null,{default:u(()=>[...l[83]||(l[83]=[t("while",-1)])]),_:1}),l[85]||(l[85]=t(" loop should eventually become false. This usually requires changing a variable used by the condition. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[87]||(l[87]=t(" For example, the following loop has a condition involving ",-1)),n(o,null,{default:u(()=>[...l[86]||(l[86]=[t("number",-1)])]),_:1}),l[88]||(l[88]=t(" , but the value is never changed: ",-1)),n(d,{code:H,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[92]||(l[92]=t(" Since ",-1)),n(o,null,{default:u(()=>[...l[89]||(l[89]=[t("number",-1)])]),_:1}),l[93]||(l[93]=t(" remains ",-1)),n(o,null,{default:u(()=>[...l[90]||(l[90]=[t("1",-1)])]),_:1}),l[94]||(l[94]=t(" , the condition remains true. This creates an ",-1)),n(o,null,{default:u(()=>[...l[91]||(l[91]=[t("infinite loop",-1)])]),_:1}),l[95]||(l[95]=t(" . ",-1))]),_:1}),n(s,null,{default:u(()=>[...l[96]||(l[96]=[t("while Loop and if Statement",-1)])]),_:1}),n(e,null,{default:u(()=>[l[100]||(l[100]=t(" A ",-1)),n(o,null,{default:u(()=>[...l[97]||(l[97]=[t("while",-1)])]),_:1}),l[101]||(l[101]=t(" loop can contain an ",-1)),n(o,null,{default:u(()=>[...l[98]||(l[98]=[t("if",-1)])]),_:1}),l[102]||(l[102]=t(" statement, and an ",-1)),n(o,null,{default:u(()=>[...l[99]||(l[99]=[t("if",-1)])]),_:1}),l[103]||(l[103]=t(" statement can contain a loop. They serve different purposes. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[106]||(l[106]=t(" An ",-1)),n(o,null,{default:u(()=>[...l[104]||(l[104]=[t("if",-1)])]),_:1}),l[107]||(l[107]=t(" statement makes a decision once when it is reached, while a ",-1)),n(o,null,{default:u(()=>[...l[105]||(l[105]=[t("while",-1)])]),_:1}),l[108]||(l[108]=t(" loop repeats code while its condition remains true. ",-1))]),_:1}),n(s,null,{default:u(()=>[...l[109]||(l[109]=[t("Summary",-1)])]),_:1}),n(e,null,{default:u(()=>[l[111]||(l[111]=t(" The ",-1)),n(o,null,{default:u(()=>[...l[110]||(l[110]=[t("while",-1)])]),_:1}),l[112]||(l[112]=t(" loop repeatedly executes a block of code while its condition is true. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[120]||(l[120]=t(" In this topic, you learned that: ",-1)),i("ul",v,[i("li",null,[l[114]||(l[114]=t(" A ",-1)),n(o,null,{default:u(()=>[...l[113]||(l[113]=[t("while",-1)])]),_:1}),l[115]||(l[115]=t(" loop repeats a block of code. ",-1))]),l[116]||(l[116]=i("li",null," The condition is checked before every iteration. ",-1)),l[117]||(l[117]=i("li",null," The loop body may execute zero or more times. ",-1)),l[118]||(l[118]=i("li",null," A loop variable should usually be updated so the condition can eventually become false. ",-1)),l[119]||(l[119]=i("li",null," Failing to update the loop condition can create an infinite loop. ",-1))])]),_:1}),l[123]||(l[123]=i("br",null,null,-1)),n(p,{to:"/academia/student/classes/java-do-while-loop"})])]),_:1}))}});export{P as default};

import{_ as f}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{T as s,a as i,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as u}from"./TopicTerm-Djs_QcTu.js";import{C as r}from"./CodeBlock-DmHkNxFS.js";import{O as d}from"./OutputBlock-C3xonGgx.js";import{d as a,h as g,i as n,o as b,a as o,q as e,g as l}from"./index-CCexFS6P.js";const x={class:"max-w-4xl mx-auto"},v={class:"list-disc pl-8 mt-3 space-y-2"},y=`
int score = 85;

if (score >= 90) {
    System.out.println("Excellent");
} else if (score >= 75) {
    System.out.println("Passed");
} else {
    System.out.println("Failed");
}`,T="Passed",k=`
int score = 92;

if (score >= 90) {
    System.out.println("A");
} else if (score >= 80) {
    System.out.println("B");
} else if (score >= 75) {
    System.out.println("C");
} else {
    System.out.println("F");
}`,S="A",w=`
int age = 16;

if (age < 13) {
    System.out.println("Child");
} else if (age < 18) {
    System.out.println("Teenager");
} else {
    System.out.println("Adult");
}`,O="Teenager",C=`
int temperature = 25;

if (temperature >= 35) {
    System.out.println("Hot");
} else if (temperature >= 25) {
    System.out.println("Warm");
} else {
    System.out.println("Cool");
}`,j="Warm",B=`
int number = 0;

if (number > 0) {
    System.out.println("Positive");
} else if (number < 0) {
    System.out.println("Negative");
} else {
    System.out.println("Zero");
}`,A="Zero",M=`
int score = 95;

if (score >= 75) {
    System.out.println("Passed");
} else if (score >= 90) {
    System.out.println("Excellent");
}`,E="Passed",W=a({__name:"IfElseIfElseStatement",setup(F){return(P,t)=>(b(),g(m,null,{default:n(()=>[o("div",x,[t[103]||(t[103]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:f,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[104]||(t[104]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," if...else if...else Statement ")],-1)),e(s,null,{default:n(()=>[t[1]||(t[1]=l(" An ",-1)),e(u,null,{default:n(()=>[...t[0]||(t[0]=[l("if...else",-1)])]),_:1}),t[2]||(t[2]=l(" statement provides two possible paths. However, some decisions require more than two possible outcomes. ",-1))]),_:1}),e(s,null,{default:n(()=>[t[4]||(t[4]=l(" The ",-1)),e(u,null,{default:n(()=>[...t[3]||(t[3]=[l("if...else if...else",-1)])]),_:1}),t[5]||(t[5]=l(" statement allows a program to check multiple conditions in sequence. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[6]||(t[6]=[l("Basic Syntax",-1)])]),_:1}),e(s,null,{default:n(()=>[t[7]||(t[7]=l(" The basic structure is: ",-1)),e(r,{code:`
						if (condition1) {
						    // code
						} else if (condition2) {
						    // code
						} else {
						    // code
						}`,language:"java"})]),_:1}),e(s,null,{default:n(()=>[t[9]||(t[9]=l(" Java checks the conditions from top to bottom. The first condition that evaluates to ",-1)),e(u,null,{default:n(()=>[...t[8]||(t[8]=[l("true",-1)])]),_:1}),t[10]||(t[10]=l(" determines which block executes. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[11]||(t[11]=[l("Basic Example",-1)])]),_:1}),e(s,null,{default:n(()=>[t[12]||(t[12]=l(" For example: ",-1)),e(r,{code:y,language:"java"})]),_:1}),e(s,null,{default:n(()=>[t[15]||(t[15]=l(" The first condition, ",-1)),e(u,null,{default:n(()=>[...t[13]||(t[13]=[l("score >= 90",-1)])]),_:1}),t[16]||(t[16]=l(" , is false. The second condition, ",-1)),e(u,null,{default:n(()=>[...t[14]||(t[14]=[l("score >= 75",-1)])]),_:1}),t[17]||(t[17]=l(" , is true. ",-1))]),_:1}),e(s,null,{default:n(()=>[t[18]||(t[18]=l(" Output: ",-1)),e(d,{output:T})]),_:1}),e(i,null,{default:n(()=>[...t[19]||(t[19]=[l("Checking Multiple Grade Ranges",-1)])]),_:1}),e(s,null,{default:n(()=>[t[21]||(t[21]=l(" Multiple ",-1)),e(u,null,{default:n(()=>[...t[20]||(t[20]=[l("else if",-1)])]),_:1}),t[22]||(t[22]=l(" branches can be used to create several possible grade ranges. ",-1))]),_:1}),e(s,null,{default:n(()=>[t[23]||(t[23]=l(" For example: ",-1)),e(r,{code:k,language:"java"})]),_:1}),e(s,null,{default:n(()=>[t[24]||(t[24]=l(" Output: ",-1)),e(d,{output:S})]),_:1}),e(s,null,{default:n(()=>[t[27]||(t[27]=l(" Since ",-1)),e(u,null,{default:n(()=>[...t[25]||(t[25]=[l("92",-1)])]),_:1}),t[28]||(t[28]=l(" is greater than or equal to ",-1)),e(u,null,{default:n(()=>[...t[26]||(t[26]=[l("90",-1)])]),_:1}),t[29]||(t[29]=l(" , the first block executes. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[30]||(t[30]=[l("Checking Age Categories",-1)])]),_:1}),e(s,null,{default:n(()=>[t[32]||(t[32]=l(" An ",-1)),e(u,null,{default:n(()=>[...t[31]||(t[31]=[l("if...else if...else",-1)])]),_:1}),t[33]||(t[33]=l(" statement can also classify values into different categories. ",-1))]),_:1}),e(s,null,{default:n(()=>[t[34]||(t[34]=l(" For example: ",-1)),e(r,{code:w,language:"java"})]),_:1}),e(s,null,{default:n(()=>[t[35]||(t[35]=l(" Output: ",-1)),e(d,{output:O})]),_:1}),e(s,null,{default:n(()=>[t[39]||(t[39]=l(" The program first checks whether the age is below ",-1)),e(u,null,{default:n(()=>[...t[36]||(t[36]=[l("13",-1)])]),_:1}),t[40]||(t[40]=l(" . Since ",-1)),e(u,null,{default:n(()=>[...t[37]||(t[37]=[l("16",-1)])]),_:1}),t[41]||(t[41]=l(" is not, it checks the next condition. Because ",-1)),e(u,null,{default:n(()=>[...t[38]||(t[38]=[l("16 < 18",-1)])]),_:1}),t[42]||(t[42]=l(" is true, the second block executes. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[43]||(t[43]=[l("Checking Temperature Ranges",-1)])]),_:1}),e(s,null,{default:n(()=>[...t[44]||(t[44]=[l(" Multiple conditions are also useful when working with ranges of values. ",-1)])]),_:1}),e(s,null,{default:n(()=>[t[45]||(t[45]=l(" For example: ",-1)),e(r,{code:C,language:"java"})]),_:1}),e(s,null,{default:n(()=>[t[46]||(t[46]=l(" Output: ",-1)),e(d,{output:j})]),_:1}),e(s,null,{default:n(()=>[t[48]||(t[48]=l(" The temperature is ",-1)),e(u,null,{default:n(()=>[...t[47]||(t[47]=[l("25",-1)])]),_:1}),t[49]||(t[49]=l(" , so the first condition is false and the second condition is true. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[50]||(t[50]=[l("Handling Three Possible Outcomes",-1)])]),_:1}),e(s,null,{default:n(()=>[t[52]||(t[52]=l(" An ",-1)),e(u,null,{default:n(()=>[...t[51]||(t[51]=[l("if...else if...else",-1)])]),_:1}),t[53]||(t[53]=l(" structure can also handle positive, negative, and zero values. ",-1))]),_:1}),e(s,null,{default:n(()=>[t[54]||(t[54]=l(" For example: ",-1)),e(r,{code:B,language:"java"})]),_:1}),e(s,null,{default:n(()=>[t[55]||(t[55]=l(" Output: ",-1)),e(d,{output:A})]),_:1}),e(s,null,{default:n(()=>[t[58]||(t[58]=l(" The first two conditions are false because ",-1)),e(u,null,{default:n(()=>[...t[56]||(t[56]=[l("0",-1)])]),_:1}),t[59]||(t[59]=l(" is neither positive nor negative. Therefore, the ",-1)),e(u,null,{default:n(()=>[...t[57]||(t[57]=[l("else",-1)])]),_:1}),t[60]||(t[60]=l(" block executes. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[61]||(t[61]=[l("The First Matching Condition",-1)])]),_:1}),e(s,null,{default:n(()=>[...t[62]||(t[62]=[l(" Java stops checking the remaining conditions once it finds a condition that is true. ",-1)])]),_:1}),e(s,null,{default:n(()=>[t[63]||(t[63]=l(" Consider this example: ",-1)),e(r,{code:M,language:"java"})]),_:1}),e(s,null,{default:n(()=>[t[64]||(t[64]=l(" Output: ",-1)),e(d,{output:E})]),_:1}),e(s,null,{default:n(()=>[t[68]||(t[68]=l(" Although ",-1)),e(u,null,{default:n(()=>[...t[65]||(t[65]=[l("95",-1)])]),_:1}),t[69]||(t[69]=l(" also satisfies ",-1)),e(u,null,{default:n(()=>[...t[66]||(t[66]=[l("score >= 90",-1)])]),_:1}),t[70]||(t[70]=l(" , the first condition is already true. Therefore, the later ",-1)),e(u,null,{default:n(()=>[...t[67]||(t[67]=[l("else if",-1)])]),_:1}),t[71]||(t[71]=l(" condition is never reached. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[72]||(t[72]=[l("The else Block is Optional",-1)])]),_:1}),e(s,null,{default:n(()=>[t[76]||(t[76]=l(" The final ",-1)),e(u,null,{default:n(()=>[...t[73]||(t[73]=[l("else",-1)])]),_:1}),t[77]||(t[77]=l(" block is optional. A structure can contain only ",-1)),e(u,null,{default:n(()=>[...t[74]||(t[74]=[l("if",-1)])]),_:1}),t[78]||(t[78]=l(" and ",-1)),e(u,null,{default:n(()=>[...t[75]||(t[75]=[l("else if",-1)])]),_:1}),t[79]||(t[79]=l(" conditions. ",-1))]),_:1}),e(s,null,{default:n(()=>[t[81]||(t[81]=l(" If none of the conditions is true and there is no ",-1)),e(u,null,{default:n(()=>[...t[80]||(t[80]=[l("else",-1)])]),_:1}),t[82]||(t[82]=l(" block, nothing inside the structure is executed. ",-1))]),_:1}),e(i,null,{default:n(()=>[...t[83]||(t[83]=[l("Order Matters",-1)])]),_:1}),e(s,null,{default:n(()=>[...t[84]||(t[84]=[l(" The order of the conditions is important because Java evaluates them from top to bottom. ",-1)])]),_:1}),e(s,null,{default:n(()=>[...t[85]||(t[85]=[l(" More specific conditions should generally be checked before broader conditions so that the intended branch can be reached. ",-1)])]),_:1}),e(i,null,{default:n(()=>[...t[86]||(t[86]=[l("Summary",-1)])]),_:1}),e(s,null,{default:n(()=>[t[88]||(t[88]=l(" The ",-1)),e(u,null,{default:n(()=>[...t[87]||(t[87]=[l("if...else if...else",-1)])]),_:1}),t[89]||(t[89]=l(" statement allows a Java program to choose between multiple possible paths. ",-1))]),_:1}),e(s,null,{default:n(()=>[t[102]||(t[102]=l(" In this topic, you learned that: ",-1)),o("ul",v,[o("li",null,[t[91]||(t[91]=l(" Multiple conditions can be checked using ",-1)),e(u,null,{default:n(()=>[...t[90]||(t[90]=[l("else if",-1)])]),_:1}),t[92]||(t[92]=l(" . ",-1))]),t[99]||(t[99]=o("li",null," Conditions are evaluated from top to bottom. ",-1)),t[100]||(t[100]=o("li",null," Only the first matching condition executes. ",-1)),o("li",null,[t[94]||(t[94]=l(" The final ",-1)),e(u,null,{default:n(()=>[...t[93]||(t[93]=[l("else",-1)])]),_:1}),t[95]||(t[95]=l(" block handles cases where no condition is true. ",-1))]),o("li",null,[t[97]||(t[97]=l(" The ",-1)),e(u,null,{default:n(()=>[...t[96]||(t[96]=[l("else",-1)])]),_:1}),t[98]||(t[98]=l(" block is optional. ",-1))]),t[101]||(t[101]=o("li",null," The order of conditions affects the result. ",-1))])]),_:1}),t[105]||(t[105]=o("br",null,null,-1)),e(p,{to:"/academia/student/classes/java-switch-statement"})])]),_:1}))}});export{W as default};

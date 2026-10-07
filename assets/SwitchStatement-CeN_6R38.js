import{_ as f}from"./logo-C9ImmdpX.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-DJnrRoKO.js";import{T as e,a as i,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-CFdx1hyn.js";import{T as s,C as r}from"./CodeBlock-C71vZ0rQ.js";import{O as d}from"./OutputBlock-D-Mb7HUv.js";import{d as p,h as b,i as n,o as g,a as o,q as u,g as l}from"./index-BD6qp2iQ.js";const x={class:"max-w-4xl mx-auto"},w={class:"list-disc pl-8 mt-3 space-y-2"},v=`
int day = 2;

switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Invalid day");
}`,y="Tuesday",S=`
int choice = 2;

switch (choice) {
    case 1:
        System.out.println("Start Game");
        break;
    case 2:
        System.out.println("Settings");
        break;
    case 3:
        System.out.println("Exit");
        break;
    default:
        System.out.println("Invalid choice");
}`,k="Settings",T=`
char grade = 'A';

switch (grade) {
    case 'A':
        System.out.println("Excellent");
        break;
    case 'B':
        System.out.println("Good");
        break;
    case 'C':
        System.out.println("Fair");
        break;
    default:
        System.out.println("Invalid grade");
}`,O="Excellent",A=`
int number = 5;

switch (number) {
    case 1:
        System.out.println("One");
        break;
    case 2:
        System.out.println("Two");
        break;
    default:
        System.out.println("Other number");
}`,j="Other number",B=`
int number = 1;

switch (number) {
    case 1:
        System.out.println("One");
        break;
    case 2:
        System.out.println("Two");
        break;
}`,C="One",E=`
int number = 1;

switch (number) {
    case 1:
        System.out.println("One");
    case 2:
        System.out.println("Two");
        break;
}`,F=`One
Two`,I=`
String color = "red";

switch (color) {
    case "red":
        System.out.println("Stop");
        break;
    case "green":
        System.out.println("Go");
        break;
    default:
        System.out.println("Unknown color");
}`,W="Stop",q=p({__name:"SwitchStatement",setup(J){return(U,t)=>(g(),b(a,null,{default:n(()=>[o("div",x,[t[149]||(t[149]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:f,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[150]||(t[150]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," switch Statement ")],-1)),u(e,null,{default:n(()=>[t[1]||(t[1]=l(" When a program needs to compare one value against several possible values, a ",-1)),u(s,null,{default:n(()=>[...t[0]||(t[0]=[l("switch",-1)])]),_:1}),t[2]||(t[2]=l(" statement can provide a clear way to choose which block of code should execute. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[5]||(t[5]=l(" A ",-1)),u(s,null,{default:n(()=>[...t[3]||(t[3]=[l("switch",-1)])]),_:1}),t[6]||(t[6]=l(" statement evaluates an expression and compares its value with different ",-1)),u(s,null,{default:n(()=>[...t[4]||(t[4]=[l("case",-1)])]),_:1}),t[7]||(t[7]=l(" values. ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[8]||(t[8]=[l("Basic Syntax",-1)])]),_:1}),u(e,null,{default:n(()=>[t[10]||(t[10]=l(" The basic structure of a ",-1)),u(s,null,{default:n(()=>[...t[9]||(t[9]=[l("switch",-1)])]),_:1}),t[11]||(t[11]=l(" statement is: ",-1)),u(r,{code:`
						switch (expression) {
					    case value1:
					        // code
					        break;
					    case value2:
					        // code
					        break;
					    default:
					        // code
						}`,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[14]||(t[14]=l(" The ",-1)),u(s,null,{default:n(()=>[...t[12]||(t[12]=[l("switch",-1)])]),_:1}),t[15]||(t[15]=l(" expression is evaluated and compared with each ",-1)),u(s,null,{default:n(()=>[...t[13]||(t[13]=[l("case",-1)])]),_:1}),t[16]||(t[16]=l(" . When a matching case is found, its statements execute. ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[17]||(t[17]=[l("Basic Example",-1)])]),_:1}),u(e,null,{default:n(()=>[t[18]||(t[18]=l(" For example, a number can represent a day: ",-1)),u(r,{code:v,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[21]||(t[21]=l(" Since ",-1)),u(s,null,{default:n(()=>[...t[19]||(t[19]=[l("day",-1)])]),_:1}),t[22]||(t[22]=l(" contains ",-1)),u(s,null,{default:n(()=>[...t[20]||(t[20]=[l("2",-1)])]),_:1}),t[23]||(t[23]=l(" , the second case matches. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[24]||(t[24]=l(" Output: ",-1)),u(d,{output:y})]),_:1}),u(i,null,{default:n(()=>[...t[25]||(t[25]=[l("case",-1)])]),_:1}),u(e,null,{default:n(()=>[t[28]||(t[28]=l(" A ",-1)),u(s,null,{default:n(()=>[...t[26]||(t[26]=[l("case",-1)])]),_:1}),t[29]||(t[29]=l(" defines a possible value that can be matched by the ",-1)),u(s,null,{default:n(()=>[...t[27]||(t[27]=[l("switch",-1)])]),_:1}),t[30]||(t[30]=l(" expression. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[34]||(t[34]=l(" In the previous example, ",-1)),u(s,null,{default:n(()=>[...t[31]||(t[31]=[l("case 1",-1)])]),_:1}),t[35]||(t[35]=l(" represents Monday, ",-1)),u(s,null,{default:n(()=>[...t[32]||(t[32]=[l("case 2",-1)])]),_:1}),t[36]||(t[36]=l(" represents Tuesday, and ",-1)),u(s,null,{default:n(()=>[...t[33]||(t[33]=[l("case 3",-1)])]),_:1}),t[37]||(t[37]=l(" represents Wednesday. ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[38]||(t[38]=[l("Using switch for Menu Choices",-1)])]),_:1}),u(e,null,{default:n(()=>[t[40]||(t[40]=l(" A ",-1)),u(s,null,{default:n(()=>[...t[39]||(t[39]=[l("switch",-1)])]),_:1}),t[41]||(t[41]=l(" statement is useful when a program has several fixed choices. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[42]||(t[42]=l(" For example: ",-1)),u(r,{code:S,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[43]||(t[43]=l(" Output: ",-1)),u(d,{output:k})]),_:1}),u(e,null,{default:n(()=>[t[46]||(t[46]=l(" The value ",-1)),u(s,null,{default:n(()=>[...t[44]||(t[44]=[l("2",-1)])]),_:1}),t[47]||(t[47]=l(" matches ",-1)),u(s,null,{default:n(()=>[...t[45]||(t[45]=[l("case 2",-1)])]),_:1}),t[48]||(t[48]=l(" , so the Settings message is displayed. ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[49]||(t[49]=[l("Using Characters",-1)])]),_:1}),u(e,null,{default:n(()=>[t[51]||(t[51]=l(" A ",-1)),u(s,null,{default:n(()=>[...t[50]||(t[50]=[l("switch",-1)])]),_:1}),t[52]||(t[52]=l(" statement can also compare character values. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[53]||(t[53]=l(" For example: ",-1)),u(r,{code:T,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[54]||(t[54]=l(" Output: ",-1)),u(d,{output:O})]),_:1}),u(e,null,{default:n(()=>[t[57]||(t[57]=l(" The character ",-1)),u(s,null,{default:n(()=>[...t[55]||(t[55]=[l("'A'",-1)])]),_:1}),t[58]||(t[58]=l(" matches ",-1)),u(s,null,{default:n(()=>[...t[56]||(t[56]=[l("case 'A'",-1)])]),_:1}),t[59]||(t[59]=l(" . ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[60]||(t[60]=[l("default",-1)])]),_:1}),u(e,null,{default:n(()=>[t[62]||(t[62]=l(" The ",-1)),u(s,null,{default:n(()=>[...t[61]||(t[61]=[l("default",-1)])]),_:1}),t[63]||(t[63]=l(" block is executed when none of the cases matches the value. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[64]||(t[64]=l(" For example: ",-1)),u(r,{code:A,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[67]||(t[67]=l(" Since ",-1)),u(s,null,{default:n(()=>[...t[65]||(t[65]=[l("5",-1)])]),_:1}),t[68]||(t[68]=l(" does not match either case, the ",-1)),u(s,null,{default:n(()=>[...t[66]||(t[66]=[l("default",-1)])]),_:1}),t[69]||(t[69]=l(" block executes. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[70]||(t[70]=l(" Output: ",-1)),u(d,{output:j})]),_:1}),u(i,null,{default:n(()=>[...t[71]||(t[71]=[l("break",-1)])]),_:1}),u(e,null,{default:n(()=>[t[74]||(t[74]=l(" The ",-1)),u(s,null,{default:n(()=>[...t[72]||(t[72]=[l("break",-1)])]),_:1}),t[75]||(t[75]=l(" statement stops the ",-1)),u(s,null,{default:n(()=>[...t[73]||(t[73]=[l("switch",-1)])]),_:1}),t[76]||(t[76]=l(" after the matching case has finished. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[77]||(t[77]=l(" For example: ",-1)),u(r,{code:B,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[78]||(t[78]=l(" Output: ",-1)),u(d,{output:C})]),_:1}),u(e,null,{default:n(()=>[t[82]||(t[82]=l(" After printing ",-1)),u(s,null,{default:n(()=>[...t[79]||(t[79]=[l("One",-1)])]),_:1}),t[83]||(t[83]=l(" , the ",-1)),u(s,null,{default:n(()=>[...t[80]||(t[80]=[l("break",-1)])]),_:1}),t[84]||(t[84]=l(" statement exits the ",-1)),u(s,null,{default:n(()=>[...t[81]||(t[81]=[l("switch",-1)])]),_:1}),t[85]||(t[85]=l(" . ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[86]||(t[86]=[l("What Happens Without break?",-1)])]),_:1}),u(e,null,{default:n(()=>[t[89]||(t[89]=l(" If a matching case does not contain ",-1)),u(s,null,{default:n(()=>[...t[87]||(t[87]=[l("break",-1)])]),_:1}),t[90]||(t[90]=l(" , Java continues executing the statements in the following cases. This behavior is called ",-1)),u(s,null,{default:n(()=>[...t[88]||(t[88]=[l("fall-through",-1)])]),_:1}),t[91]||(t[91]=l(" . ",-1))]),_:1}),u(e,null,{default:n(()=>[t[92]||(t[92]=l(" For example: ",-1)),u(r,{code:E,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[93]||(t[93]=l(" Output: ",-1)),u(d,{output:F})]),_:1}),u(e,null,{default:n(()=>[t[97]||(t[97]=l(" The program starts at ",-1)),u(s,null,{default:n(()=>[...t[94]||(t[94]=[l("case 1",-1)])]),_:1}),t[98]||(t[98]=l(" and continues into ",-1)),u(s,null,{default:n(()=>[...t[95]||(t[95]=[l("case 2",-1)])]),_:1}),t[99]||(t[99]=l(" because there is no ",-1)),u(s,null,{default:n(()=>[...t[96]||(t[96]=[l("break",-1)])]),_:1}),t[100]||(t[100]=l(" after the first case. ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[101]||(t[101]=[l("Using Strings",-1)])]),_:1}),u(e,null,{default:n(()=>[t[104]||(t[104]=l(" Java also allows a ",-1)),u(s,null,{default:n(()=>[...t[102]||(t[102]=[l("switch",-1)])]),_:1}),t[105]||(t[105]=l(" statement to compare ",-1)),u(s,null,{default:n(()=>[...t[103]||(t[103]=[l("String",-1)])]),_:1}),t[106]||(t[106]=l(" values. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[107]||(t[107]=l(" For example: ",-1)),u(r,{code:I,language:"java"})]),_:1}),u(e,null,{default:n(()=>[t[108]||(t[108]=l(" Output: ",-1)),u(d,{output:W})]),_:1}),u(e,null,{default:n(()=>[t[112]||(t[112]=l(" The value of ",-1)),u(s,null,{default:n(()=>[...t[109]||(t[109]=[l("color",-1)])]),_:1}),t[113]||(t[113]=l(" is ",-1)),u(s,null,{default:n(()=>[...t[110]||(t[110]=[l('"red"',-1)])]),_:1}),t[114]||(t[114]=l(" , so ",-1)),u(s,null,{default:n(()=>[...t[111]||(t[111]=[l('case "red"',-1)])]),_:1}),t[115]||(t[115]=l(" executes. ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[116]||(t[116]=[l("switch vs if...else if",-1)])]),_:1}),u(e,null,{default:n(()=>[t[119]||(t[119]=l(" Both ",-1)),u(s,null,{default:n(()=>[...t[117]||(t[117]=[l("switch",-1)])]),_:1}),t[120]||(t[120]=l(" and ",-1)),u(s,null,{default:n(()=>[...t[118]||(t[118]=[l("if...else if...else",-1)])]),_:1}),t[121]||(t[121]=l(" can be used when there are multiple possible outcomes. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[123]||(t[123]=l(" A ",-1)),u(s,null,{default:n(()=>[...t[122]||(t[122]=[l("switch",-1)])]),_:1}),t[124]||(t[124]=l(" is particularly convenient when comparing one expression against several fixed values. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[126]||(t[126]=l(" An ",-1)),u(s,null,{default:n(()=>[...t[125]||(t[125]=[l("if...else if...else",-1)])]),_:1}),t[127]||(t[127]=l(" structure is more flexible when the conditions involve ranges, combinations of expressions, or more complex comparisons. ",-1))]),_:1}),u(i,null,{default:n(()=>[...t[128]||(t[128]=[l("Summary",-1)])]),_:1}),u(e,null,{default:n(()=>[t[130]||(t[130]=l(" The ",-1)),u(s,null,{default:n(()=>[...t[129]||(t[129]=[l("switch",-1)])]),_:1}),t[131]||(t[131]=l(" statement allows Java programs to select a block of code based on the value of an expression. ",-1))]),_:1}),u(e,null,{default:n(()=>[t[148]||(t[148]=l(" In this topic, you learned that: ",-1)),o("ul",w,[o("li",null,[t[133]||(t[133]=l(" A ",-1)),u(s,null,{default:n(()=>[...t[132]||(t[132]=[l("switch",-1)])]),_:1}),t[134]||(t[134]=l(" compares an expression against multiple cases. ",-1))]),o("li",null,[t[136]||(t[136]=l(" A ",-1)),u(s,null,{default:n(()=>[...t[135]||(t[135]=[l("case",-1)])]),_:1}),t[137]||(t[137]=l(" represents a possible matching value. ",-1))]),o("li",null,[u(s,null,{default:n(()=>[...t[138]||(t[138]=[l("break",-1)])]),_:1}),t[139]||(t[139]=l(" exits the switch after a matching case. ",-1))]),o("li",null,[t[141]||(t[141]=l(" Omitting ",-1)),u(s,null,{default:n(()=>[...t[140]||(t[140]=[l("break",-1)])]),_:1}),t[142]||(t[142]=l(" can cause fall-through. ",-1))]),o("li",null,[t[144]||(t[144]=l(" The ",-1)),u(s,null,{default:n(()=>[...t[143]||(t[143]=[l("default",-1)])]),_:1}),t[145]||(t[145]=l(" block handles unmatched values. ",-1))]),o("li",null,[u(s,null,{default:n(()=>[...t[146]||(t[146]=[l("switch",-1)])]),_:1}),t[147]||(t[147]=l(" can be used with values such as integers, characters, and strings. ",-1))])])]),_:1}),t[151]||(t[151]=o("br",null,null,-1)),u(m,{to:"/academia/student/classes/java",text:"Finish"})])]),_:1}))}});export{q as default};

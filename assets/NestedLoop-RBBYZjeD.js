import{_ as d}from"./logo-C9ImmdpX.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as e,a as s,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as u,C as i}from"./CodeBlock-CSdrTDFH.js";import{O as p}from"./OutputBlock-BPpR2jjy.js";import{d as m,h as w,i as n,o as g,a as r,q as t,g as l}from"./index-D3WOnH5O.js";const v={class:"max-w-4xl mx-auto"},x=`
for (int row = 1; row <= 3; row++) {
    for (int column = 1; column <= 3; column++) {
        System.out.println("Row " + row + ", Column " + column);
    }
}`,y=`
Row 1, Column 1
Row 1, Column 2
Row 1, Column 3
Row 2, Column 1
Row 2, Column 2
Row 2, Column 3
Row 3, Column 1
Row 3, Column 2
Row 3, Column 3`,b=`
for (int row = 1; row <= 3; row++) {
    for (int column = 1; column <= 3; column++) {
        System.out.print(row * column + " ");
    }
    System.out.println();
}`,T=`
1 2 3
2 4 6
3 6 9`,C=`
for (int row = 1; row <= 3; row++) {
    for (int column = 1; column <= row; column++) {
        System.out.print("* ");
    }
    System.out.println();
}`,N=`* 
* * 
* * *`,O=`
for (int outer = 1; outer <= 2; outer++) {
    System.out.println("Outer: " + outer);

    for (int inner = 1; inner <= 3; inner++) {
        System.out.println("  Inner: " + inner);
    }
}`,I=`
Outer: 1
  Inner: 1
  Inner: 2
  Inner: 3
Outer: 2
  Inner: 1
  Inner: 2
  Inner: 3`,P=m({__name:"NestedLoop",setup(k){return(L,o)=>(g(),w(a,null,{default:n(()=>[r("div",v,[o[73]||(o[73]=r("div",{class:"w-full flex justify-center mb-6"},[r("img",{src:d,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),o[74]||(o[74]=r("div",{class:"text-center mb-4"},[r("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),r("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Nested Loop ")],-1)),t(e,null,{default:n(()=>[o[1]||(o[1]=l(" A loop can contain another loop. When one loop is placed inside another loop, it is called a ",-1)),t(u,null,{default:n(()=>[...o[0]||(o[0]=[l("nested loop",-1)])]),_:1}),o[2]||(o[2]=l(" . ",-1))]),_:1}),t(e,null,{default:n(()=>[...o[3]||(o[3]=[l(" Nested loops are useful when working with repeated groups of data, tables, grids, patterns, and other structures that have multiple levels of repetition. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[4]||(o[4]=[l("Basic Structure",-1)])]),_:1}),t(e,null,{default:n(()=>[o[5]||(o[5]=l(" A nested loop can be created by placing one loop inside the body of another loop. For example: ",-1)),t(i,{code:`
						for (int outer = 1; outer <= 3; outer++) {
						    for (int inner = 1; inner <= 3; inner++) {
						        // code to repeat
						    }
						}`,language:"java"})]),_:1}),t(e,null,{default:n(()=>[...o[6]||(o[6]=[l(" The outer loop controls the larger repetition, while the inner loop performs its repetitions for every iteration of the outer loop. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[7]||(o[7]=[l("Basic Example",-1)])]),_:1}),t(e,null,{default:n(()=>[o[8]||(o[8]=l(" Consider this example: ",-1)),t(i,{code:x,language:"java"})]),_:1}),t(e,null,{default:n(()=>[o[9]||(o[9]=l(" Output: ",-1)),t(p,{output:y})]),_:1}),t(e,null,{default:n(()=>[...o[10]||(o[10]=[l(" The inner loop runs completely for each iteration of the outer loop. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[11]||(o[11]=[l("How Nested Loops Work",-1)])]),_:1}),t(e,null,{default:n(()=>[o[13]||(o[13]=l(" In the previous example, the outer loop starts with ",-1)),t(u,null,{default:n(()=>[...o[12]||(o[12]=[l("row = 1",-1)])]),_:1}),o[14]||(o[14]=l(" . ",-1))]),_:1}),t(e,null,{default:n(()=>[o[19]||(o[19]=l(" While the outer loop is at ",-1)),t(u,null,{default:n(()=>[...o[15]||(o[15]=[l("1",-1)])]),_:1}),o[20]||(o[20]=l(" , the inner loop runs from ",-1)),t(u,null,{default:n(()=>[...o[16]||(o[16]=[l("1",-1)])]),_:1}),o[21]||(o[21]=l(" to ",-1)),t(u,null,{default:n(()=>[...o[17]||(o[17]=[l("3",-1)])]),_:1}),o[22]||(o[22]=l(" . After the inner loop finishes, the outer loop moves to ",-1)),t(u,null,{default:n(()=>[...o[18]||(o[18]=[l("2",-1)])]),_:1}),o[23]||(o[23]=l(" . ",-1))]),_:1}),t(e,null,{default:n(()=>[...o[24]||(o[24]=[l(" The inner loop then starts again from its initial value. This continues until the outer loop finishes. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[25]||(o[25]=[l("Nested Loop with Multiplication",-1)])]),_:1}),t(e,null,{default:n(()=>[o[26]||(o[26]=l(" Nested loops can be used to create tables. For example, the following code displays a small multiplication table: ",-1)),t(i,{code:b,language:"java"})]),_:1}),t(e,null,{default:n(()=>[o[27]||(o[27]=l(" Output: ",-1)),t(p,{output:T})]),_:1}),t(e,null,{default:n(()=>[...o[28]||(o[28]=[l(" The outer loop represents the rows, while the inner loop represents the values within each row. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[29]||(o[29]=[l("Nested Loop with Patterns",-1)])]),_:1}),t(e,null,{default:n(()=>[...o[30]||(o[30]=[l(" Nested loops can also be used to create patterns. ",-1)])]),_:1}),t(e,null,{default:n(()=>[o[31]||(o[31]=l(" For example: ",-1)),t(i,{code:C,language:"java"})]),_:1}),t(e,null,{default:n(()=>[o[32]||(o[32]=l(" Output: ",-1)),t(p,{output:N})]),_:1}),t(e,null,{default:n(()=>[...o[33]||(o[33]=[l(" The outer loop controls the number of rows. The inner loop controls how many stars are printed in each row. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[34]||(o[34]=[l("Outer and Inner Loops",-1)])]),_:1}),t(e,null,{default:n(()=>[...o[35]||(o[35]=[l(" It is useful to think of a nested loop as two separate levels of repetition. ",-1)])]),_:1}),t(e,null,{default:n(()=>[o[36]||(o[36]=l(" For example: ",-1)),t(i,{code:O,language:"java"})]),_:1}),t(e,null,{default:n(()=>[o[37]||(o[37]=l(" Output: ",-1)),t(p,{output:I})]),_:1}),t(e,null,{default:n(()=>[...o[38]||(o[38]=[l(" The inner loop starts over whenever the outer loop begins a new iteration. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[39]||(o[39]=[l("Nested while Loops",-1)])]),_:1}),t(e,null,{default:n(()=>[o[43]||(o[43]=l(" Nested loops are not limited to ",-1)),t(u,null,{default:n(()=>[...o[40]||(o[40]=[l("for",-1)])]),_:1}),o[44]||(o[44]=l(" loops. A ",-1)),t(u,null,{default:n(()=>[...o[41]||(o[41]=[l("while",-1)])]),_:1}),o[45]||(o[45]=l(" loop can also contain another ",-1)),t(u,null,{default:n(()=>[...o[42]||(o[42]=[l("while",-1)])]),_:1}),o[46]||(o[46]=l(" loop. ",-1))]),_:1}),t(e,null,{default:n(()=>[...o[47]||(o[47]=[l(" The same principle applies: the inner loop completes its repetitions for every iteration of the outer loop. ",-1)])]),_:1}),t(s,null,{default:n(()=>[...o[48]||(o[48]=[l("Nested do...while Loops",-1)])]),_:1}),t(e,null,{default:n(()=>[o[50]||(o[50]=l(" A ",-1)),t(u,null,{default:n(()=>[...o[49]||(o[49]=[l("do...while",-1)])]),_:1}),o[51]||(o[51]=l(" loop can also contain another loop. The type of loop used inside does not have to match the outer loop. ",-1))]),_:1}),t(e,null,{default:n(()=>[o[56]||(o[56]=l(" For example, a ",-1)),t(u,null,{default:n(()=>[...o[52]||(o[52]=[l("for",-1)])]),_:1}),o[57]||(o[57]=l(" loop can contain a ",-1)),t(u,null,{default:n(()=>[...o[53]||(o[53]=[l("while",-1)])]),_:1}),o[58]||(o[58]=l(" loop, or a ",-1)),t(u,null,{default:n(()=>[...o[54]||(o[54]=[l("while",-1)])]),_:1}),o[59]||(o[59]=l(" loop can contain a ",-1)),t(u,null,{default:n(()=>[...o[55]||(o[55]=[l("for",-1)])]),_:1}),o[60]||(o[60]=l(" loop. ",-1))]),_:1}),t(s,null,{default:n(()=>[...o[61]||(o[61]=[l("More Than Two Levels",-1)])]),_:1}),t(e,null,{default:n(()=>[...o[62]||(o[62]=[l(" Java also allows a loop to contain another nested loop, which can contain another loop. However, deeply nested loops can make code harder to understand. ",-1)])]),_:1}),t(e,null,{default:n(()=>[o[65]||(o[65]=l(" When using nested loops, keep each level simple and use clear variable names such as ",-1)),t(u,null,{default:n(()=>[...o[63]||(o[63]=[l("row",-1)])]),_:1}),o[66]||(o[66]=l(" and ",-1)),t(u,null,{default:n(()=>[...o[64]||(o[64]=[l("column",-1)])]),_:1}),o[67]||(o[67]=l(" when appropriate. ",-1))]),_:1}),t(s,null,{default:n(()=>[...o[68]||(o[68]=[l("Summary",-1)])]),_:1}),t(e,null,{default:n(()=>[o[70]||(o[70]=l(" A ",-1)),t(u,null,{default:n(()=>[...o[69]||(o[69]=[l("nested loop",-1)])]),_:1}),o[71]||(o[71]=l(" is a loop placed inside another loop. The inner loop executes completely for every iteration of the outer loop. ",-1))]),_:1}),t(e,null,{default:n(()=>[...o[72]||(o[72]=[l(" In this topic, you learned that: ",-1),r("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[r("li",null," A loop can be placed inside another loop. "),r("li",null," The outer loop controls the larger repetition. "),r("li",null," The inner loop runs completely for each outer-loop iteration. "),r("li",null," Nested loops can be used to create tables and patterns. "),r("li",null," Different types of loops can be nested together. "),r("li",null," Too many levels of nesting can make code harder to understand. ")],-1)])]),_:1}),o[75]||(o[75]=r("br",null,null,-1)),t(f,{to:"/academia/student/classes/java-break-and-continue"})])]),_:1}))}});export{P as default};

import{_ as f}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{T as i,a as s,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as o}from"./TopicTerm-Djs_QcTu.js";import{C as r}from"./CodeBlock-DmHkNxFS.js";import{O as d}from"./OutputBlock-C3xonGgx.js";import{d as b,h as k,i as u,o as w,a as e,q as n,g as l}from"./index-CCexFS6P.js";const x={class:"max-w-4xl mx-auto"},g={class:"list-disc pl-8 mt-3 space-y-2"},a={class:"list-disc pl-8 mt-3 space-y-2"},y=`
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        break;
    }
    System.out.println(i);
}`,v=`1
2`,T=`f
or (int i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    System.out.println(i);
}`,O=`
1
2
4
5`,S=`
int number = 1;

while (number <= 5) {
    if (number == 4) {
        break;
    }
    System.out.println(number);
    number++;
}`,C=`
1
2
3`,j=`
int number = 0;

while (number < 5) {
    number++;
    if (number == 3) {
        continue;
    }
    System.out.println(number);
}`,B=`1
2
4
5`,W=`
for (int i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
        continue;
    }
    System.out.println(i);
}`,F=`
2
4
6
8
10`,N=`
for (int row = 1; row <= 3; row++) {
    for (int column = 1; column <= 3; column++) {
        if (column == 2) {
            break;
        }
        System.out.println(
            "Row " + row + ", Column " + column
        );
    }
}`,L=`
Row 1, Column 1
Row 2, Column 1
Row 3, Column 1`,q=b({__name:"BreakAndContinue",setup(R){return(V,t)=>(w(),k(m,null,{default:u(()=>[e("div",x,[t[121]||(t[121]=e("div",{class:"w-full flex justify-center mb-6"},[e("img",{src:f,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[122]||(t[122]=e("div",{class:"text-center mb-4"},[e("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 5 "),e("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," break and continue ")],-1)),n(i,null,{default:u(()=>[t[2]||(t[2]=l(" Loops normally continue executing while their conditions remain true. However, Java provides two statements that allow us to change the normal flow of a loop: ",-1)),n(o,null,{default:u(()=>[...t[0]||(t[0]=[l("break",-1)])]),_:1}),t[3]||(t[3]=l(" and ",-1)),n(o,null,{default:u(()=>[...t[1]||(t[1]=[l("continue",-1)])]),_:1}),t[4]||(t[4]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[t[7]||(t[7]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[5]||(t[5]=[l("break",-1)])]),_:1}),t[8]||(t[8]=l(" statement stops the loop completely, while ",-1)),n(o,null,{default:u(()=>[...t[6]||(t[6]=[l("continue",-1)])]),_:1}),t[9]||(t[9]=l(" skips the current iteration and moves to the next one. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[10]||(t[10]=[l("break Statement",-1)])]),_:1}),n(i,null,{default:u(()=>[t[12]||(t[12]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[11]||(t[11]=[l("break",-1)])]),_:1}),t[13]||(t[13]=l(" statement immediately terminates the loop in which it is used. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[14]||(t[14]=l(" For example: ",-1)),n(r,{code:y,language:"java"})]),_:1}),n(i,null,{default:u(()=>[t[15]||(t[15]=l(" Output: ",-1)),n(d,{output:v})]),_:1}),n(i,null,{default:u(()=>[t[22]||(t[22]=l(" When ",-1)),n(o,null,{default:u(()=>[...t[16]||(t[16]=[l("i",-1)])]),_:1}),t[23]||(t[23]=l(" becomes ",-1)),n(o,null,{default:u(()=>[...t[17]||(t[17]=[l("3",-1)])]),_:1}),t[24]||(t[24]=l(" , the ",-1)),n(o,null,{default:u(()=>[...t[18]||(t[18]=[l("break",-1)])]),_:1}),t[25]||(t[25]=l(" statement executes. The loop stops immediately, so ",-1)),n(o,null,{default:u(()=>[...t[19]||(t[19]=[l("3",-1)])]),_:1}),t[26]||(t[26]=l(" , ",-1)),n(o,null,{default:u(()=>[...t[20]||(t[20]=[l("4",-1)])]),_:1}),t[27]||(t[27]=l(" , and ",-1)),n(o,null,{default:u(()=>[...t[21]||(t[21]=[l("5",-1)])]),_:1}),t[28]||(t[28]=l(" are never printed. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[29]||(t[29]=[l("Using break with a while Loop",-1)])]),_:1}),n(i,null,{default:u(()=>[t[32]||(t[32]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[30]||(t[30]=[l("break",-1)])]),_:1}),t[33]||(t[33]=l(" statement can also be used inside a ",-1)),n(o,null,{default:u(()=>[...t[31]||(t[31]=[l("while",-1)])]),_:1}),t[34]||(t[34]=l(" loop. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[35]||(t[35]=l(" For example: ",-1)),n(r,{code:S,language:"java"})]),_:1}),n(i,null,{default:u(()=>[t[36]||(t[36]=l(" Output: ",-1)),n(d,{output:C})]),_:1}),n(i,null,{default:u(()=>[t[39]||(t[39]=l(" When ",-1)),n(o,null,{default:u(()=>[...t[37]||(t[37]=[l("number",-1)])]),_:1}),t[40]||(t[40]=l(" reaches ",-1)),n(o,null,{default:u(()=>[...t[38]||(t[38]=[l("4",-1)])]),_:1}),t[41]||(t[41]=l(" , the loop stops immediately. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[42]||(t[42]=[l("continue Statement",-1)])]),_:1}),n(i,null,{default:u(()=>[t[44]||(t[44]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[43]||(t[43]=[l("continue",-1)])]),_:1}),t[45]||(t[45]=l(" statement does not terminate the loop. Instead, it skips the remaining statements in the current iteration and continues with the next iteration. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[46]||(t[46]=l(" For example: ",-1)),n(r,{code:T,language:"java"})]),_:1}),n(i,null,{default:u(()=>[t[47]||(t[47]=l(" Output: ",-1)),n(d,{output:O})]),_:1}),n(i,null,{default:u(()=>[t[52]||(t[52]=l(" When ",-1)),n(o,null,{default:u(()=>[...t[48]||(t[48]=[l("i",-1)])]),_:1}),t[53]||(t[53]=l(" is ",-1)),n(o,null,{default:u(()=>[...t[49]||(t[49]=[l("3",-1)])]),_:1}),t[54]||(t[54]=l(" , the ",-1)),n(o,null,{default:u(()=>[...t[50]||(t[50]=[l("continue",-1)])]),_:1}),t[55]||(t[55]=l(" statement skips the ",-1)),n(o,null,{default:u(()=>[...t[51]||(t[51]=[l("System.out.println()",-1)])]),_:1}),t[56]||(t[56]=l(" statement. The loop then continues with the next iteration. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[57]||(t[57]=[l("Using continue with a while Loop",-1)])]),_:1}),n(i,null,{default:u(()=>[t[60]||(t[60]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[58]||(t[58]=[l("continue",-1)])]),_:1}),t[61]||(t[61]=l(" statement can also be used with a ",-1)),n(o,null,{default:u(()=>[...t[59]||(t[59]=[l("while",-1)])]),_:1}),t[62]||(t[62]=l(" loop. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[63]||(t[63]=l(" For example: ",-1)),n(r,{code:j,language:"java"})]),_:1}),n(i,null,{default:u(()=>[t[64]||(t[64]=l(" Output: ",-1)),n(d,{output:B})]),_:1}),n(i,null,{default:u(()=>[t[68]||(t[68]=l(" The value ",-1)),n(o,null,{default:u(()=>[...t[65]||(t[65]=[l("3",-1)])]),_:1}),t[69]||(t[69]=l(" is skipped, but the loop continues with ",-1)),n(o,null,{default:u(()=>[...t[66]||(t[66]=[l("4",-1)])]),_:1}),t[70]||(t[70]=l(" and ",-1)),n(o,null,{default:u(()=>[...t[67]||(t[67]=[l("5",-1)])]),_:1}),t[71]||(t[71]=l(" . ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[72]||(t[72]=[l("Skipping Specific Values",-1)])]),_:1}),n(i,null,{default:u(()=>[t[74]||(t[74]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[73]||(t[73]=[l("continue",-1)])]),_:1}),t[75]||(t[75]=l(" statement is useful when certain values should be ignored while the rest of the loop continues normally. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[76]||(t[76]=l(" For example, we can display only even numbers: ",-1)),n(r,{code:W,language:"java"})]),_:1}),n(i,null,{default:u(()=>[t[77]||(t[77]=l(" Output: ",-1)),n(d,{output:F})]),_:1}),n(i,null,{default:u(()=>[t[79]||(t[79]=l(" When a number is odd, the ",-1)),n(o,null,{default:u(()=>[...t[78]||(t[78]=[l("continue",-1)])]),_:1}),t[80]||(t[80]=l(" statement skips that iteration. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[81]||(t[81]=[l("break in a Nested Loop",-1)])]),_:1}),n(i,null,{default:u(()=>[t[83]||(t[83]=l(" When ",-1)),n(o,null,{default:u(()=>[...t[82]||(t[82]=[l("break",-1)])]),_:1}),t[84]||(t[84]=l(" is used inside nested loops, it terminates only the loop it belongs to. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[85]||(t[85]=l(" For example: ",-1)),n(r,{code:N,language:"java"})]),_:1}),n(i,null,{default:u(()=>[t[86]||(t[86]=l(" Output: ",-1)),n(d,{output:L})]),_:1}),n(i,null,{default:u(()=>[t[88]||(t[88]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[87]||(t[87]=[l("break",-1)])]),_:1}),t[89]||(t[89]=l(" belongs to the inner loop. Therefore, it stops the inner loop but allows the outer loop to continue. ",-1))]),_:1}),n(s,null,{default:u(()=>[...t[90]||(t[90]=[l("break vs continue",-1)])]),_:1}),n(i,null,{default:u(()=>[t[95]||(t[95]=l(" The two statements have different effects: ",-1)),e("ul",g,[e("li",null,[n(o,null,{default:u(()=>[...t[91]||(t[91]=[l("break",-1)])]),_:1}),t[92]||(t[92]=l(" → completely stops the loop. ",-1))]),e("li",null,[n(o,null,{default:u(()=>[...t[93]||(t[93]=[l("continue",-1)])]),_:1}),t[94]||(t[94]=l(" → skips the current iteration and continues the loop. ",-1))])])]),_:1}),n(i,null,{default:u(()=>[t[98]||(t[98]=l(" Think of ",-1)),n(o,null,{default:u(()=>[...t[96]||(t[96]=[l("break",-1)])]),_:1}),t[99]||(t[99]=l(" as ",-1)),t[100]||(t[100]=e("strong",null,"“stop the loop”",-1)),t[101]||(t[101]=l(" and ",-1)),n(o,null,{default:u(()=>[...t[97]||(t[97]=[l("continue",-1)])]),_:1}),t[102]||(t[102]=l(" as ",-1)),t[103]||(t[103]=e("strong",null,"“skip this iteration.”",-1))]),_:1}),n(s,null,{default:u(()=>[...t[104]||(t[104]=[l("Summary",-1)])]),_:1}),n(i,null,{default:u(()=>[t[107]||(t[107]=l(" The ",-1)),n(o,null,{default:u(()=>[...t[105]||(t[105]=[l("break",-1)])]),_:1}),t[108]||(t[108]=l(" and ",-1)),n(o,null,{default:u(()=>[...t[106]||(t[106]=[l("continue",-1)])]),_:1}),t[109]||(t[109]=l(" statements give more control over how loops execute. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[120]||(t[120]=l(" In this topic, you learned that: ",-1)),e("ul",a,[e("li",null,[n(o,null,{default:u(()=>[...t[110]||(t[110]=[l("break",-1)])]),_:1}),t[111]||(t[111]=l(" immediately stops the loop. ",-1))]),e("li",null,[n(o,null,{default:u(()=>[...t[112]||(t[112]=[l("continue",-1)])]),_:1}),t[113]||(t[113]=l(" skips the current iteration. ",-1))]),t[119]||(t[119]=e("li",null," Both statements can be used with different types of loops. ",-1)),e("li",null,[t[115]||(t[115]=l(" A ",-1)),n(o,null,{default:u(()=>[...t[114]||(t[114]=[l("break",-1)])]),_:1}),t[116]||(t[116]=l(" inside a nested loop only exits the loop it belongs to. ",-1))]),e("li",null,[n(o,null,{default:u(()=>[...t[117]||(t[117]=[l("continue",-1)])]),_:1}),t[118]||(t[118]=l(" allows the loop to continue with its next iteration. ",-1))])])]),_:1}),t[123]||(t[123]=e("br",null,null,-1)),n(p,{to:"/academia/student/classes/java",text:"Finish"})])]),_:1}))}});export{q as default};

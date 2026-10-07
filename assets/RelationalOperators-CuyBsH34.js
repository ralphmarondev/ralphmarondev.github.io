import{_ as a}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-DJnrRoKO.js";import{T as o,a as i,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-CFdx1hyn.js";import{T as r,C as e}from"./CodeBlock-C71vZ0rQ.js";import{O as d}from"./OutputBlock-D-Mb7HUv.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-CQFkx-9v.js";import{d as g,h as b,i as u,o as w,a as s,q as n,g as l}from"./index-BD6qp2iQ.js";const T={class:"max-w-4xl mx-auto"},v={class:"list-disc pl-8 mt-3 space-y-2"},x=`
int a = 10;
int b = 10;

int result = a == b;
`,q=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 10;

    int result = a == b;

    printf("%d\\n", result);
    return 0;
}
`,O=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int result = a != b;

    printf("%d\\n", result);
    return 0;
}
`,C=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    int result = a > b;

    printf("%d\\n", result);
    return 0;
}
`,k=`
#include <stdio.h>

int main() {
    int a = 5;
    int b = 10;

    int result = a < b;

    printf("%d\\n", result);
    return 0;
}
`,P=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 10;

    int result = a >= b;

    printf("%d\\n", result);
    return 0;
}
`,y=`
#include <stdio.h>

int main() {
    int a = 5;
    int b = 10;

    int result = a <= b;

    printf("%d\\n", result);
    return 0;
}
`,E=`
#include <stdio.h>

int main() {
    int age = 20;

    printf("Age: %d\\n", age);
    printf("Is 20? %d\\n", age == 20);
    printf("Is not 18? %d\\n", age != 18);
    printf("Greater than 18? %d\\n", age > 18);
    return 0;
}
`,I=`
Age: 20
Is 20? 1
Is not 18? 1
Greater than 18? 1
`,G=`
#include <stdio.h>

int main() {
    int age = 20;

    printf("Is 18? %d\\n", age == 18);
    printf("Less than 18? %d\\n", age < 18);
    printf("Greater than 20? %d\\n", age > 20);
    return 0;
}
`,A=`
Is 18? 0
Less than 18? 0
Greater than 20? 0
`,B=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    printf("a == b: %d\\n", a == b);
    printf("a != b: %d\\n", a != b);
    printf("a > b: %d\\n", a > b);
    printf("a < b: %d\\n", a < b);
    printf("a >= b: %d\\n", a >= b);
    printf("a <= b: %d\\n", a <= b);
    return 0;
}
`,L=`
a == b: 0
a != b: 1
a > b: 1
a < b: 0
a >= b: 1
a <= b: 0
`,R=`
int score = 100;
int result = score == 100;
`,z=g({__name:"RelationalOperators",setup(N){return(S,t)=>(w(),b(f,null,{default:u(()=>[s("div",T,[t[116]||(t[116]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[117]||(t[117]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Relational Operators ")],-1)),n(o,null,{default:u(()=>[...t[0]||(t[0]=[l(" Relational operators are used to compare two values. A comparison produces a result that indicates whether the relationship between the two values is true or false. ",-1)])]),_:1}),n(o,null,{default:u(()=>[t[3]||(t[3]=l(" In C, a true comparison produces ",-1)),n(r,null,{default:u(()=>[...t[1]||(t[1]=[l("1",-1)])]),_:1}),t[4]||(t[4]=l(" , while a false comparison produces ",-1)),n(r,null,{default:u(()=>[...t[2]||(t[2]=[l("0",-1)])]),_:1}),t[5]||(t[5]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[6]||(t[6]=[l("Equal To",-1)])]),_:1}),n(o,null,{default:u(()=>[t[8]||(t[8]=l(" The ",-1)),n(r,null,{default:u(()=>[...t[7]||(t[7]=[l("==",-1)])]),_:1}),t[9]||(t[9]=l(" operator checks whether two values are equal. ",-1)),n(e,{language:"c",code:x})]),_:1}),n(o,null,{default:u(()=>[t[13]||(t[13]=l(" Since both ",-1)),n(r,null,{default:u(()=>[...t[10]||(t[10]=[l("a",-1)])]),_:1}),t[14]||(t[14]=l(" and ",-1)),n(r,null,{default:u(()=>[...t[11]||(t[11]=[l("b",-1)])]),_:1}),t[15]||(t[15]=l(" contain ",-1)),n(r,null,{default:u(()=>[...t[12]||(t[12]=[l("10",-1)])]),_:1}),t[16]||(t[16]=l(" , the comparison is true. ",-1)),n(e,{language:"c",code:q}),t[17]||(t[17]=l(" Output ",-1)),n(d,{output:"1"})]),_:1}),n(o,null,{default:u(()=>[t[20]||(t[20]=l(" The double equals sign ",-1)),n(r,null,{default:u(()=>[...t[18]||(t[18]=[l("==",-1)])]),_:1}),t[21]||(t[21]=l(" is used for comparison. It is different from the assignment operator ",-1)),n(r,null,{default:u(()=>[...t[19]||(t[19]=[l("=",-1)])]),_:1}),t[22]||(t[22]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[23]||(t[23]=[l("Not Equal To",-1)])]),_:1}),n(o,null,{default:u(()=>[t[25]||(t[25]=l(" The ",-1)),n(r,null,{default:u(()=>[...t[24]||(t[24]=[l("!=",-1)])]),_:1}),t[26]||(t[26]=l(" operator checks whether two values are different. ",-1)),n(e,{language:"c",code:O}),t[27]||(t[27]=l(" Output ",-1)),n(d,{output:"1"})]),_:1}),n(i,null,{default:u(()=>[...t[28]||(t[28]=[l("Greater Than",-1)])]),_:1}),n(o,null,{default:u(()=>[t[30]||(t[30]=l(" The ",-1)),n(r,null,{default:u(()=>[...t[29]||(t[29]=[l(">",-1)])]),_:1}),t[31]||(t[31]=l(" operator checks whether the value on the left is greater than the value on the right. ",-1)),n(e,{language:"c",code:C}),t[32]||(t[32]=l(" Output ",-1)),n(d,{output:"1"})]),_:1}),n(i,null,{default:u(()=>[...t[33]||(t[33]=[l("Less Than",-1)])]),_:1}),n(o,null,{default:u(()=>[t[35]||(t[35]=l(" The ",-1)),n(r,null,{default:u(()=>[...t[34]||(t[34]=[l("<",-1)])]),_:1}),t[36]||(t[36]=l(" operator checks whether the value on the left is less than the value on the right. ",-1)),n(e,{language:"c",code:k}),t[37]||(t[37]=l(" Output ",-1)),n(d,{output:"1"})]),_:1}),n(i,null,{default:u(()=>[...t[38]||(t[38]=[l("Greater Than or Equal To",-1)])]),_:1}),n(o,null,{default:u(()=>[t[40]||(t[40]=l(" The ",-1)),n(r,null,{default:u(()=>[...t[39]||(t[39]=[l(">=",-1)])]),_:1}),t[41]||(t[41]=l(" operator checks whether the value on the left is greater than or equal to the value on the right. ",-1)),n(e,{language:"c",code:P}),t[42]||(t[42]=l(" Output ",-1)),n(d,{output:"1"})]),_:1}),n(i,null,{default:u(()=>[...t[43]||(t[43]=[l("Less Than or Equal To",-1)])]),_:1}),n(o,null,{default:u(()=>[t[45]||(t[45]=l(" The ",-1)),n(r,null,{default:u(()=>[...t[44]||(t[44]=[l("<=",-1)])]),_:1}),t[46]||(t[46]=l(" operator checks whether the value on the left is less than or equal to the value on the right. ",-1)),n(e,{language:"c",code:y}),t[47]||(t[47]=l(" Output ",-1)),n(d,{output:"1"})]),_:1}),n(m,{title:"Comparison Gives an Answer"},{default:u(()=>[...t[48]||(t[48]=[l(" A relational operator asks a question about two values. C represents a true answer with 1 and a false answer with 0. ",-1)])]),_:1}),n(i,null,{default:u(()=>[...t[49]||(t[49]=[l("True and False Results",-1)])]),_:1}),n(o,null,{default:u(()=>[t[51]||(t[51]=l(" A comparison can be used directly in an expression. The result can then be displayed using ",-1)),n(r,null,{default:u(()=>[...t[50]||(t[50]=[l("printf()",-1)])]),_:1}),t[52]||(t[52]=l(" . ",-1)),n(e,{language:"c",code:E}),t[53]||(t[53]=l(" Output ",-1)),n(d,{output:I})]),_:1}),n(o,null,{default:u(()=>[t[56]||(t[56]=l(" Each comparison is evaluated independently. Since ",-1)),n(r,null,{default:u(()=>[...t[54]||(t[54]=[l("age",-1)])]),_:1}),t[57]||(t[57]=l(" is ",-1)),n(r,null,{default:u(()=>[...t[55]||(t[55]=[l("20",-1)])]),_:1}),t[58]||(t[58]=l(" , all three comparisons above are true. ",-1))]),_:1}),n(o,null,{default:u(()=>[t[60]||(t[60]=l(" When a comparison is false, the result is ",-1)),n(r,null,{default:u(()=>[...t[59]||(t[59]=[l("0",-1)])]),_:1}),t[61]||(t[61]=l(" . ",-1)),n(e,{language:"c",code:G}),t[62]||(t[62]=l(" Output ",-1)),n(d,{output:A})]),_:1}),n(i,null,{default:u(()=>[...t[63]||(t[63]=[l("All Relational Operators",-1)])]),_:1}),n(o,null,{default:u(()=>[t[76]||(t[76]=l(" C provides six commonly used relational operators: ",-1)),s("ul",v,[s("li",null,[n(r,null,{default:u(()=>[...t[64]||(t[64]=[l("==",-1)])]),_:1}),t[65]||(t[65]=l(" → Equal to ",-1))]),s("li",null,[n(r,null,{default:u(()=>[...t[66]||(t[66]=[l("!=",-1)])]),_:1}),t[67]||(t[67]=l(" → Not equal to ",-1))]),s("li",null,[n(r,null,{default:u(()=>[...t[68]||(t[68]=[l(">",-1)])]),_:1}),t[69]||(t[69]=l(" → Greater than ",-1))]),s("li",null,[n(r,null,{default:u(()=>[...t[70]||(t[70]=[l("<",-1)])]),_:1}),t[71]||(t[71]=l(" → Less than ",-1))]),s("li",null,[n(r,null,{default:u(()=>[...t[72]||(t[72]=[l(">=",-1)])]),_:1}),t[73]||(t[73]=l(" → Greater than or equal to ",-1))]),s("li",null,[n(r,null,{default:u(()=>[...t[74]||(t[74]=[l("<=",-1)])]),_:1}),t[75]||(t[75]=l(" → Less than or equal to ",-1))])]),n(e,{language:"c",code:B}),t[77]||(t[77]=l(" Output ",-1)),n(d,{output:L})]),_:1}),n(i,null,{default:u(()=>[...t[78]||(t[78]=[l("Assignment vs Comparison",-1)])]),_:1}),n(o,null,{default:u(()=>[t[81]||(t[81]=l(" Be careful not to confuse ",-1)),n(r,null,{default:u(()=>[...t[79]||(t[79]=[l("=",-1)])]),_:1}),t[82]||(t[82]=l(" with ",-1)),n(r,null,{default:u(()=>[...t[80]||(t[80]=[l("==",-1)])]),_:1}),t[83]||(t[83]=l(" . The single equals sign assigns a value, while the double equals sign compares two values. ",-1)),n(e,{language:"c",code:R})]),_:1}),n(o,null,{default:u(()=>[t[90]||(t[90]=l(" Here, ",-1)),n(r,null,{default:u(()=>[...t[84]||(t[84]=[l("score = 100",-1)])]),_:1}),t[91]||(t[91]=l(" assigns ",-1)),n(r,null,{default:u(()=>[...t[85]||(t[85]=[l("100",-1)])]),_:1}),t[92]||(t[92]=l(" to ",-1)),n(r,null,{default:u(()=>[...t[86]||(t[86]=[l("score",-1)])]),_:1}),t[93]||(t[93]=l(" , while ",-1)),n(r,null,{default:u(()=>[...t[87]||(t[87]=[l("score == 100",-1)])]),_:1}),t[94]||(t[94]=l(" checks whether the value of ",-1)),n(r,null,{default:u(()=>[...t[88]||(t[88]=[l("score",-1)])]),_:1}),t[95]||(t[95]=l(" is equal to ",-1)),n(r,null,{default:u(()=>[...t[89]||(t[89]=[l("100",-1)])]),_:1}),t[96]||(t[96]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[...t[97]||(t[97]=[l("Summary",-1)])]),_:1}),n(o,null,{default:u(()=>[t[100]||(t[100]=l(" Relational operators compare values and produce either a true or false result. In C, these results are represented by ",-1)),n(r,null,{default:u(()=>[...t[98]||(t[98]=[l("1",-1)])]),_:1}),t[101]||(t[101]=l(" for true and ",-1)),n(r,null,{default:u(()=>[...t[99]||(t[99]=[l("0",-1)])]),_:1}),t[102]||(t[102]=l(" for false. ",-1))]),_:1}),n(o,null,{default:u(()=>[t[109]||(t[109]=l(" You learned the six relational operators: ",-1)),n(r,null,{default:u(()=>[...t[103]||(t[103]=[l("==",-1)])]),_:1}),t[110]||(t[110]=l(" , ",-1)),n(r,null,{default:u(()=>[...t[104]||(t[104]=[l("!=",-1)])]),_:1}),t[111]||(t[111]=l(" , ",-1)),n(r,null,{default:u(()=>[...t[105]||(t[105]=[l(">",-1)])]),_:1}),t[112]||(t[112]=l(" , ",-1)),n(r,null,{default:u(()=>[...t[106]||(t[106]=[l("<",-1)])]),_:1}),t[113]||(t[113]=l(" , ",-1)),n(r,null,{default:u(()=>[...t[107]||(t[107]=[l(">=",-1)])]),_:1}),t[114]||(t[114]=l(" , and ",-1)),n(r,null,{default:u(()=>[...t[108]||(t[108]=[l("<=",-1)])]),_:1}),t[115]||(t[115]=l(" . ",-1))]),_:1}),t[118]||(t[118]=s("br",null,null,-1)),n(p,{to:"/academia/student/classes/c-logical-operators"})])]),_:1}))}});export{z as default};

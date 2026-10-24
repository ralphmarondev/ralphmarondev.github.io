import{_ as a}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BHqqVcAK.js";import{T as o,a as d,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-JDRukrMl.js";import{T as r,C as s}from"./CodeBlock-BE2lyL2C.js";import{O as u}from"./OutputBlock-CZmA96mX.js";import{_ as g}from"./FernInfo.vue_vue_type_script_setup_true_lang-lDLc7df2.js";import{d as m,h as b,i as n,o as O,a as i,q as e,g as l}from"./index-DfAF0zN8.js";const x={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-8 mt-3 space-y-2"},N=`
int age = 20;
int score = 85;

int result = age >= 18 && score >= 75;
`,w=`
#include <stdio.h>

int main() {
    int age = 20;
    int score = 85;

    int result = age >= 18 && score >= 75;

    printf("%d\\n", result);
    return 0;
}
`,y=`
#include <stdio.h>

int main() {
    int age = 16;
    int score = 85;

    int result = age >= 18 && score >= 75;

    printf("%d\\n", result);
    return 0;
}
`,L=`
int age = 16;
int score = 85;

int result = age >= 18 || score >= 75;
`,P=`
#include <stdio.h>

int main() {
    int age = 16;
    int score = 85;

    int result = age >= 18 || score >= 75;

    printf("%d\\n", result);
    return 0;
}
`,v=`
#include <stdio.h>

int main() {
    int age = 16;
    int score = 60;

    int result = age >= 18 || score >= 75;

    printf("%d\\n", result);
    return 0;
}
`,C=`
int age = 20;

int result = !(age >= 18);
`,k=`
#include <stdio.h>

int main() {
    int age = 20;

    int result = !(age >= 18);

    printf("%d\\n", result);
    return 0;
}
`,A=`
#include <stdio.h>

int main() {
    int age = 16;

    int result = !(age >= 18);

    printf("%d\\n", result);
    return 0;
}
`,R=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    printf("%d\\n", a > 5 && b < 10);
    return 0;
}
`,D=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    printf("%d\\n", a > 5 && b > 10);
    return 0;
}
`,B=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    printf("%d\\n", a > 5 || b > 10);
    return 0;
}
`,I=`
#include <stdio.h>

int main() {
    int number = 10;

    printf("%d\\n", !(number == 10));
    return 0;
}
`,S=`
#include <stdio.h>

int main() {
    int age = 20;
    int score = 85;

    int result = (age >= 18 && score >= 75) || score == 100;

    printf("%d\\n", result);
    return 0;
}
`,q=`
1
`,F=`
#include <stdio.h>

int main() {
    int a = 10;
    int b = 5;

    printf("AND: %d\\n", a > 5 && b < 10);
    printf("OR: %d\\n", a < 5 || b < 10);
    printf("NOT: %d\\n", !(a == 10));

    return 0;
}
`,U=`
AND: 1
OR: 1
NOT: 0
`,K=m({__name:"LogicalOperators",setup(V){return($,t)=>(O(),b(p,null,{default:n(()=>[i("div",x,[t[85]||(t[85]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[86]||(t[86]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Logical Operators ")],-1)),e(o,null,{default:n(()=>[...t[0]||(t[0]=[l(" Logical operators are used to combine or reverse logical expressions. They are commonly used when a program needs to evaluate more than one condition. ",-1)])]),_:1}),e(o,null,{default:n(()=>[t[4]||(t[4]=l(" C provides three logical operators: ",-1)),e(r,null,{default:n(()=>[...t[1]||(t[1]=[l("&&",-1)])]),_:1}),t[5]||(t[5]=l(" , ",-1)),e(r,null,{default:n(()=>[...t[2]||(t[2]=[l("||",-1)])]),_:1}),t[6]||(t[6]=l(" , and ",-1)),e(r,null,{default:n(()=>[...t[3]||(t[3]=[l("!",-1)])]),_:1}),t[7]||(t[7]=l(" . ",-1))]),_:1}),e(d,null,{default:n(()=>[...t[8]||(t[8]=[l("Logical AND",-1)])]),_:1}),e(o,null,{default:n(()=>[t[10]||(t[10]=l(" The ",-1)),e(r,null,{default:n(()=>[...t[9]||(t[9]=[l("&&",-1)])]),_:1}),t[11]||(t[11]=l(" operator produces true only when both expressions are true. ",-1)),e(s,{language:"c",code:N})]),_:1}),e(o,null,{default:n(()=>[t[15]||(t[15]=l(" Here, ",-1)),e(r,null,{default:n(()=>[...t[12]||(t[12]=[l("age >= 18",-1)])]),_:1}),t[16]||(t[16]=l(" is true and ",-1)),e(r,null,{default:n(()=>[...t[13]||(t[13]=[l("score >= 75",-1)])]),_:1}),t[17]||(t[17]=l(" is also true. Since both expressions are true, the result is ",-1)),e(r,null,{default:n(()=>[...t[14]||(t[14]=[l("1",-1)])]),_:1}),t[18]||(t[18]=l(" . ",-1)),e(s,{language:"c",code:w}),t[19]||(t[19]=l(" Output ",-1)),e(u,{output:"1"})]),_:1}),e(o,null,{default:n(()=>[t[20]||(t[20]=l(" If either expression is false, the entire AND expression becomes false. ",-1)),e(s,{language:"c",code:y}),t[21]||(t[21]=l(" Output ",-1)),e(u,{output:"0"})]),_:1}),e(d,null,{default:n(()=>[...t[22]||(t[22]=[l("Logical OR",-1)])]),_:1}),e(o,null,{default:n(()=>[t[24]||(t[24]=l(" The ",-1)),e(r,null,{default:n(()=>[...t[23]||(t[23]=[l("||",-1)])]),_:1}),t[25]||(t[25]=l(" operator produces true when at least one of the expressions is true. ",-1)),e(s,{language:"c",code:L})]),_:1}),e(o,null,{default:n(()=>[t[27]||(t[27]=l(" The age comparison is false, but the score comparison is true. Since at least one expression is true, the result is ",-1)),e(r,null,{default:n(()=>[...t[26]||(t[26]=[l("1",-1)])]),_:1}),t[28]||(t[28]=l(" . ",-1)),e(s,{language:"c",code:P}),t[29]||(t[29]=l(" Output ",-1)),e(u,{output:"1"})]),_:1}),e(o,null,{default:n(()=>[t[30]||(t[30]=l(" If both expressions are false, the OR expression becomes false. ",-1)),e(s,{language:"c",code:v}),t[31]||(t[31]=l(" Output ",-1)),e(u,{output:"0"})]),_:1}),e(d,null,{default:n(()=>[...t[32]||(t[32]=[l("Logical NOT",-1)])]),_:1}),e(o,null,{default:n(()=>[t[34]||(t[34]=l(" The ",-1)),e(r,null,{default:n(()=>[...t[33]||(t[33]=[l("!",-1)])]),_:1}),t[35]||(t[35]=l(" operator reverses a logical result. A true result becomes false, and a false result becomes true. ",-1)),e(s,{language:"c",code:C})]),_:1}),e(o,null,{default:n(()=>[t[38]||(t[38]=l(" Since ",-1)),e(r,null,{default:n(()=>[...t[36]||(t[36]=[l("age >= 18",-1)])]),_:1}),t[39]||(t[39]=l(" is true, applying ",-1)),e(r,null,{default:n(()=>[...t[37]||(t[37]=[l("!",-1)])]),_:1}),t[40]||(t[40]=l(" changes the result to false. ",-1)),e(s,{language:"c",code:k}),t[41]||(t[41]=l(" Output ",-1)),e(u,{output:"0"})]),_:1}),e(o,null,{default:n(()=>[t[42]||(t[42]=l(" If the original comparison is false, the NOT operator changes it to true. ",-1)),e(s,{language:"c",code:A}),t[43]||(t[43]=l(" Output ",-1)),e(u,{output:"1"})]),_:1}),e(g,{title:"Think of Logical Operators as Questions"},{default:n(()=>[...t[44]||(t[44]=[l(" AND asks whether everything is true. OR asks whether at least one thing is true. NOT simply reverses the answer. ",-1)])]),_:1}),e(d,null,{default:n(()=>[...t[45]||(t[45]=[l("Using AND",-1)])]),_:1}),e(o,null,{default:n(()=>[t[47]||(t[47]=l(" Both comparisons must be true for the AND operator to produce ",-1)),e(r,null,{default:n(()=>[...t[46]||(t[46]=[l("1",-1)])]),_:1}),t[48]||(t[48]=l(" . ",-1)),e(s,{language:"c",code:R}),t[49]||(t[49]=l(" Output ",-1)),e(u,{output:"1"})]),_:1}),e(o,null,{default:n(()=>[t[51]||(t[51]=l(" If one comparison is false, the entire expression becomes ",-1)),e(r,null,{default:n(()=>[...t[50]||(t[50]=[l("0",-1)])]),_:1}),t[52]||(t[52]=l(" . ",-1)),e(s,{language:"c",code:D}),t[53]||(t[53]=l(" Output ",-1)),e(u,{output:"0"})]),_:1}),e(d,null,{default:n(()=>[...t[54]||(t[54]=[l("Using OR",-1)])]),_:1}),e(o,null,{default:n(()=>[t[56]||(t[56]=l(" Only one comparison needs to be true for the OR operator to produce ",-1)),e(r,null,{default:n(()=>[...t[55]||(t[55]=[l("1",-1)])]),_:1}),t[57]||(t[57]=l(" . ",-1)),e(s,{language:"c",code:B}),t[58]||(t[58]=l(" Output ",-1)),e(u,{output:"1"})]),_:1}),e(d,null,{default:n(()=>[...t[59]||(t[59]=[l("Using NOT",-1)])]),_:1}),e(o,null,{default:n(()=>[t[60]||(t[60]=l(" The NOT operator reverses the result of an expression. ",-1)),e(s,{language:"c",code:I}),t[61]||(t[61]=l(" Output ",-1)),e(u,{output:"0"})]),_:1}),e(o,null,{default:n(()=>[t[64]||(t[64]=l(" The comparison ",-1)),e(r,null,{default:n(()=>[...t[62]||(t[62]=[l("number == 10",-1)])]),_:1}),t[65]||(t[65]=l(" is true, so applying ",-1)),e(r,null,{default:n(()=>[...t[63]||(t[63]=[l("!",-1)])]),_:1}),t[66]||(t[66]=l(" changes the result to false. ",-1))]),_:1}),e(d,null,{default:n(()=>[...t[67]||(t[67]=[l("Combining Logical Operators",-1)])]),_:1}),e(o,null,{default:n(()=>[t[68]||(t[68]=l(" Logical operators can also be combined to create more complex expressions. Parentheses can be used to make the intended order of evaluation clear. ",-1)),e(s,{language:"c",code:S}),t[69]||(t[69]=l(" Output ",-1)),e(u,{output:q})]),_:1}),e(o,null,{default:n(()=>[t[71]||(t[71]=l(" The expression first checks whether both the age and score requirements are satisfied. If that result is false, the OR operator also checks whether the score is exactly ",-1)),e(r,null,{default:n(()=>[...t[70]||(t[70]=[l("100",-1)])]),_:1}),t[72]||(t[72]=l(" . ",-1))]),_:1}),e(d,null,{default:n(()=>[...t[73]||(t[73]=[l("Logical Operators",-1)])]),_:1}),e(o,null,{default:n(()=>[t[80]||(t[80]=l(" The three logical operators in C are: ",-1)),i("ul",T,[i("li",null,[e(r,null,{default:n(()=>[...t[74]||(t[74]=[l("&&",-1)])]),_:1}),t[75]||(t[75]=l(" → Logical AND ",-1))]),i("li",null,[e(r,null,{default:n(()=>[...t[76]||(t[76]=[l("||",-1)])]),_:1}),t[77]||(t[77]=l(" → Logical OR ",-1))]),i("li",null,[e(r,null,{default:n(()=>[...t[78]||(t[78]=[l("!",-1)])]),_:1}),t[79]||(t[79]=l(" → Logical NOT ",-1))])]),e(s,{language:"c",code:F}),t[81]||(t[81]=l(" Output ",-1)),e(u,{output:U})]),_:1}),e(d,null,{default:n(()=>[...t[82]||(t[82]=[l("Summary",-1)])]),_:1}),e(o,null,{default:n(()=>[...t[83]||(t[83]=[l(" Logical operators allow multiple logical expressions to be combined or reversed. AND requires both expressions to be true, OR requires at least one expression to be true, and NOT reverses the result. ",-1)])]),_:1}),e(o,null,{default:n(()=>[...t[84]||(t[84]=[l(" These operators are commonly used together with relational operators and will become especially useful when controlling the flow of a program. ",-1)])]),_:1}),t[87]||(t[87]=i("br",null,null,-1)),e(f,{to:"/academia/student/classes/c-bitwise-operators"})])]),_:1}))}});export{K as default};

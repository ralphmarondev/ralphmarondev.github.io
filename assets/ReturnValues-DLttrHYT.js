import{_ as a}from"./logo-C9ImmdpX.js";import{T as e,a as s,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-Do3NQ57y.js";import{T as r}from"./TopicTerm-Wsy3IcMW.js";import{C as o}from"./CodeBlock-YTzl4NkG.js";import{O as d}from"./OutputBlock-BsSWLsEy.js";import{_ as f}from"./FernInfo.vue_vue_type_script_setup_true_lang-BvXcjq5z.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-rzR0vzcF.js";import{d as g,h as b,i as l,o as v,a as i,q as u,g as n}from"./index-8Z-dxxHw.js";const T={class:"max-w-4xl mx-auto"},R={class:"list-decimal pl-6 space-y-2 mt-2"},x={class:"list-disc pl-6 space-y-2"},O=`
#include <stdio.h>

int getNumber() {
    return 10;
}

int main() {
    printf("%d\\n", getNumber());

    return 0;
}`,y=`
10`,A=`
return value;`,C=`
#include <stdio.h>

int getNumber() {
    int number = 25;

    return number;
}

int main() {
    int result = getNumber();

    printf("Result: %d\\n", result);

    return 0;
}`,P=`
Result: 25`,k=`
#include <stdio.h>

int square(int number) {
    return number * number;
}

int main() {
    int result = square(5);

    printf("Square: %d\\n", result);

    return 0;
}`,w=`
Square: 25`,V=`
#include <stdio.h>

int add(int first, int second) {
    return first + second;
}

int main() {
    printf("Sum: %d\\n", add(10, 20));

    return 0;
}`,q=`
Sum: 30`,S=`
#include <stdio.h>

int multiply(int first, int second) {
    return first * second;
}

int main() {
    int result = multiply(4, 5);

    printf("Result: %d\\n", result);

    return 0;
}`,N=`
Result: 20`,B=`
#include <stdio.h>

int square(int number) {
    return number * number;
}

int main() {
    int first = square(3);
    int second = square(5);

    printf("First: %d\\n", first);
    printf("Second: %d\\n", second);

    return 0;
}`,I=`
First: 9
Second: 25`,E=`
#include <stdio.h>

int isPositive(int number) {
    if (number > 0) {
        return 1;
    }

    return 0;
}

int main() {
    int result = isPositive(8);

    printf("Result: %d\\n", result);

    return 0;
}`,M=`
Result: 1`,W=`
#include <stdio.h>

float calculateAverage(float first, float second) {
    return (first + second) / 2;
}

int main() {
    float average = calculateAverage(80, 90);

    printf("Average: %.2f\\n", average);

    return 0;
}`,$=`
Average: 85.00`,j=`
#include <stdio.h>

int add(int first, int second) {
    return first + second;
}

int main() {
    int result;

    result = add(15, 25);

    printf("Result: %d\\n", result);

    return 0;
}`,F=`
Result: 40`,Y=g({__name:"ReturnValues",setup(D){return(U,t)=>(v(),b(p,null,{default:l(()=>[i("div",T,[t[113]||(t[113]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[114]||(t[114]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Return Values ")],-1)),u(e,null,{default:l(()=>[t[1]||(t[1]=n(" A function can send a result back to the code that called it. This result is called a ",-1)),u(r,null,{default:l(()=>[...t[0]||(t[0]=[n("return value",-1)])]),_:1}),t[2]||(t[2]=n(" . ",-1))]),_:1}),u(e,null,{default:l(()=>[t[4]||(t[4]=n(" The ",-1)),u(r,null,{default:l(()=>[...t[3]||(t[3]=[n("return",-1)])]),_:1}),t[5]||(t[5]=n(" statement is used to send a value back from a function. ",-1)),u(o,{language:"c",code:A})]),_:1}),u(f,{title:"Think of It This Way"},{default:l(()=>[t[7]||(t[7]=n(" A function can receive information through parameters and send a result back using ",-1)),u(r,null,{default:l(()=>[...t[6]||(t[6]=[n("return",-1)])]),_:1}),t[8]||(t[8]=n(" . ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[9]||(t[9]=[n("Returning a Value",-1)])]),_:1}),u(e,null,{default:l(()=>[t[10]||(t[10]=n(" A function can directly return a value. ",-1)),u(o,{language:"c",code:O}),t[11]||(t[11]=n(" Output ",-1)),u(d,{output:y})]),_:1}),u(e,null,{default:l(()=>[t[14]||(t[14]=n(" The ",-1)),u(r,null,{default:l(()=>[...t[12]||(t[12]=[n("getNumber()",-1)])]),_:1}),t[15]||(t[15]=n(" function returns ",-1)),u(r,null,{default:l(()=>[...t[13]||(t[13]=[n("10",-1)])]),_:1}),t[16]||(t[16]=n(" . When the function is called, that value becomes the result of the function call. ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[17]||(t[17]=[n("Returning a Variable",-1)])]),_:1}),u(e,null,{default:l(()=>[t[18]||(t[18]=n(" A function can also return the value stored in a variable. ",-1)),u(o,{language:"c",code:C}),t[19]||(t[19]=n(" Output ",-1)),u(d,{output:P})]),_:1}),u(e,null,{default:l(()=>[t[22]||(t[22]=n(" The value stored in ",-1)),u(r,null,{default:l(()=>[...t[20]||(t[20]=[n("number",-1)])]),_:1}),t[23]||(t[23]=n(" is returned to ",-1)),u(r,null,{default:l(()=>[...t[21]||(t[21]=[n("main()",-1)])]),_:1}),t[24]||(t[24]=n(" . ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[25]||(t[25]=[n("Returning a Calculation",-1)])]),_:1}),u(e,null,{default:l(()=>[t[26]||(t[26]=n(" A function can return the result of an expression or calculation. ",-1)),u(o,{language:"c",code:k}),t[27]||(t[27]=n(" Output ",-1)),u(d,{output:w})]),_:1}),u(e,null,{default:l(()=>[t[32]||(t[32]=n(" The parameter ",-1)),u(r,null,{default:l(()=>[...t[28]||(t[28]=[n("number",-1)])]),_:1}),t[33]||(t[33]=n(" receives ",-1)),u(r,null,{default:l(()=>[...t[29]||(t[29]=[n("5",-1)])]),_:1}),t[34]||(t[34]=n(" . The function calculates ",-1)),u(r,null,{default:l(()=>[...t[30]||(t[30]=[n("5 * 5",-1)])]),_:1}),t[35]||(t[35]=n(" and returns the result, ",-1)),u(r,null,{default:l(()=>[...t[31]||(t[31]=[n("25",-1)])]),_:1}),t[36]||(t[36]=n(" . ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[37]||(t[37]=[n("Returning an Expression",-1)])]),_:1}),u(e,null,{default:l(()=>[t[39]||(t[39]=n(" The expression itself can be placed after ",-1)),u(r,null,{default:l(()=>[...t[38]||(t[38]=[n("return",-1)])]),_:1}),t[40]||(t[40]=n(" . ",-1)),u(o,{language:"c",code:V}),t[41]||(t[41]=n(" Output ",-1)),u(d,{output:q})]),_:1}),u(e,null,{default:l(()=>[t[43]||(t[43]=n(" The expression ",-1)),u(r,null,{default:l(()=>[...t[42]||(t[42]=[n("first + second",-1)])]),_:1}),t[44]||(t[44]=n(" is evaluated first. Its result is then returned by the function. ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[45]||(t[45]=[n("Storing a Return Value",-1)])]),_:1}),u(e,null,{default:l(()=>[t[46]||(t[46]=n(" A returned value can be stored in a variable. ",-1)),u(o,{language:"c",code:S}),t[47]||(t[47]=n(" Output ",-1)),u(d,{output:N})]),_:1}),u(e,null,{default:l(()=>[t[50]||(t[50]=n(" The value returned by ",-1)),u(r,null,{default:l(()=>[...t[48]||(t[48]=[n("multiply()",-1)])]),_:1}),t[51]||(t[51]=n(" is assigned to ",-1)),u(r,null,{default:l(()=>[...t[49]||(t[49]=[n("result",-1)])]),_:1}),t[52]||(t[52]=n(" . ",-1))]),_:1}),u(f,{title:"Remember"},{default:l(()=>[...t[53]||(t[53]=[n(" The function call can be treated like a value when the function returns something. ",-1)])]),_:1}),u(s,null,{default:l(()=>[...t[54]||(t[54]=[n("Using a Return Value Multiple Times",-1)])]),_:1}),u(e,null,{default:l(()=>[t[55]||(t[55]=n(" A function can be called multiple times, with each call producing its own return value. ",-1)),u(o,{language:"c",code:B}),t[56]||(t[56]=n(" Output ",-1)),u(d,{output:I})]),_:1}),u(e,null,{default:l(()=>[t[58]||(t[58]=n(" Each call to ",-1)),u(r,null,{default:l(()=>[...t[57]||(t[57]=[n("square()",-1)])]),_:1}),t[59]||(t[59]=n(" receives a different argument, so each call produces a different result. ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[60]||(t[60]=[n("Returning from a Condition",-1)])]),_:1}),u(e,null,{default:l(()=>[t[61]||(t[61]=n(" A function can return different values depending on a condition. ",-1)),u(o,{language:"c",code:E}),t[62]||(t[62]=n(" Output ",-1)),u(d,{output:M})]),_:1}),u(e,null,{default:l(()=>[t[67]||(t[67]=n(" When ",-1)),u(r,null,{default:l(()=>[...t[63]||(t[63]=[n("number",-1)])]),_:1}),t[68]||(t[68]=n(" is greater than ",-1)),u(r,null,{default:l(()=>[...t[64]||(t[64]=[n("0",-1)])]),_:1}),t[69]||(t[69]=n(" , the function returns ",-1)),u(r,null,{default:l(()=>[...t[65]||(t[65]=[n("1",-1)])]),_:1}),t[70]||(t[70]=n(" . Otherwise, it returns ",-1)),u(r,null,{default:l(()=>[...t[66]||(t[66]=[n("0",-1)])]),_:1}),t[71]||(t[71]=n(" . ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[72]||(t[72]=[n("Returning Other Data Types",-1)])]),_:1}),u(e,null,{default:l(()=>[t[74]||(t[74]=n(" The return value can use a data type other than ",-1)),u(r,null,{default:l(()=>[...t[73]||(t[73]=[n("int",-1)])]),_:1}),t[75]||(t[75]=n(" . The function's return type must match the type of value it returns. ",-1)),u(o,{language:"c",code:W}),t[76]||(t[76]=n(" Output ",-1)),u(d,{output:$})]),_:1}),u(e,null,{default:l(()=>[t[78]||(t[78]=n(" Because the function returns a decimal value, its return type is ",-1)),u(r,null,{default:l(()=>[...t[77]||(t[77]=[n("float",-1)])]),_:1}),t[79]||(t[79]=n(" . ",-1))]),_:1}),u(s,null,{default:l(()=>[...t[80]||(t[80]=[n("Returning a Value to main()",-1)])]),_:1}),u(e,null,{default:l(()=>[t[82]||(t[82]=n(" A common pattern is for ",-1)),u(r,null,{default:l(()=>[...t[81]||(t[81]=[n("main()",-1)])]),_:1}),t[83]||(t[83]=n(" to call a function and store the returned result. ",-1)),u(o,{language:"c",code:j}),t[84]||(t[84]=n(" Output ",-1)),u(d,{output:F})]),_:1}),u(e,null,{default:l(()=>[t[102]||(t[102]=n(" The flow is: ",-1)),i("ol",R,[i("li",null,[u(r,null,{default:l(()=>[...t[85]||(t[85]=[n("main()",-1)])]),_:1}),t[87]||(t[87]=n(" calls ",-1)),u(r,null,{default:l(()=>[...t[86]||(t[86]=[n("add()",-1)])]),_:1}),t[88]||(t[88]=n(" . ",-1))]),i("li",null,[t[91]||(t[91]=n("The arguments ",-1)),u(r,null,{default:l(()=>[...t[89]||(t[89]=[n("15",-1)])]),_:1}),t[92]||(t[92]=n(" and ",-1)),u(r,null,{default:l(()=>[...t[90]||(t[90]=[n("25",-1)])]),_:1}),t[93]||(t[93]=n(" are passed to the function. ",-1))]),i("li",null,[u(r,null,{default:l(()=>[...t[94]||(t[94]=[n("add()",-1)])]),_:1}),t[95]||(t[95]=n(" calculates their sum. ",-1))]),i("li",null,[t[97]||(t[97]=n("The function returns ",-1)),u(r,null,{default:l(()=>[...t[96]||(t[96]=[n("40",-1)])]),_:1}),t[98]||(t[98]=n(" . ",-1))]),i("li",null,[t[100]||(t[100]=n("The returned value is stored in ",-1)),u(r,null,{default:l(()=>[...t[99]||(t[99]=[n("result",-1)])]),_:1}),t[101]||(t[101]=n(" . ",-1))])])]),_:1}),u(s,null,{default:l(()=>[...t[103]||(t[103]=[n("Summary",-1)])]),_:1}),u(e,null,{default:l(()=>[...t[104]||(t[104]=[n(" A return value allows a function to send a result back to the code that called it. ",-1)])]),_:1}),u(e,null,{default:l(()=>[i("ul",x,[i("li",null,[t[106]||(t[106]=n("The ",-1)),u(r,null,{default:l(()=>[...t[105]||(t[105]=[n("return",-1)])]),_:1}),t[107]||(t[107]=n(" statement sends a value back. ",-1))]),t[108]||(t[108]=i("li",null,"A function can return a direct value, variable, or expression.",-1)),t[109]||(t[109]=i("li",null,"A return value can be stored in a variable.",-1)),t[110]||(t[110]=i("li",null,"A function can return different values based on conditions.",-1)),t[111]||(t[111]=i("li",null,"The return type should match the type of value being returned.",-1)),t[112]||(t[112]=i("li",null,"A returned value can be used in calculations or other expressions.",-1))])]),_:1}),t[115]||(t[115]=i("br",null,null,-1)),u(m,{to:"/academia/student/classes/c-function-scope"})])]),_:1}))}});export{Y as default};

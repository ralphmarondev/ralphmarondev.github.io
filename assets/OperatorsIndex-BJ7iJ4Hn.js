import{_ as L}from"./MainLayout.vue_vue_type_style_index_0_lang-DDe6TEwJ.js";import{C as s,_ as k}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-ZT46AHsq.js";import{O as u}from"./OutputBlock-4pXDZ-3T.js";import{d as R,r,z as w,j as A,b as t,i as e,t as E,e as n,o as B,_ as C}from"./index-D8FYJz_l.js";const D={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},M={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},T={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},q={class:"text-gray-500 mb-2 text-lg"},z="February 16, 2026",P=R({__name:"OperatorsIndex",setup(S){const i=r(`
#include <stdio.h>

int main() {
    int x = 15, y = 4;

    printf("x + y = %d\\n", x + y);
    printf("x - y = %d\\n", x - y);
    printf("x * y = %d\\n", x * y);
    printf("x / y = %d\\n", x / y);
    printf("x %% y = %d\\n", x % y);
    printf("++x = %d\\n", ++x);
    printf("--y = %d\\n", --y);

    return 0;
}
`),a=r(`
x + y = 19
x - y = 11
x * y = 60
x / y = 3
x % y = 3
++x = 16
--y = 3
`),o=r(`
#include <stdio.h>

int main() {
    int a = 10, b = 20;

    printf("a < b : %d\\n", a < b);
    printf("a > b : %d\\n", a > b);
    printf("a == b: %d\\n", a == b);
    printf("a != b: %d\\n", a != b);

    return 0;
}
`),d=r(`
a < b : 1
a > b : 0
a == b: 0
a != b: 1
`),p=r(`
#include <stdio.h>

int main() {
    int x = 1, y = 0;

    printf("x && y = %d\\n", x && y);
    printf("x || y = %d\\n", x || y);
    printf("!x = %d\\n", !x);

    return 0;
}
`),g=r(`
x && y = 0
x || y = 1
!x = 0
`),x=r(`
#include <stdio.h>

int main() {
    int x = 5, y = 3;

    printf("x & y = %d\\n", x & y);
    printf("x | y = %d\\n", x | y);
    printf("x ^ y = %d\\n", x ^ y);
    printf("~x = %d\\n", ~x);
    printf("x << 1 = %d\\n", x << 1);
    printf("x >> 1 = %d\\n", x >> 1);

    return 0;
}
`),m=r(`
x & y = 1
x | y = 7
x ^ y = 6
~x = -6
x << 1 = 10
x >> 1 = 2
`),f=r(`
#include <stdio.h>

int main() {
    int x = 10, y = 3;

    x += y;  // x = x + y
    printf("x += y : %d\\n", x);

    x *= y;  // x = x * y
    printf("x *= y : %d\\n", x);

    return 0;
}
`),y=r(`
x += y : 13
x *= y : 39
`),b=r(`
#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;

    printf("sizeof(num) = %zu bytes\\n", sizeof(num));
    printf("&num = %p\\n", &num);
    printf("*ptr = %d\\n", *ptr);
    printf("(num > 5) ? 100 : 200 = %d\\n", (num > 5) ? 100 : 200);
    printf("(float)num = %f\\n", (float)num);

    return 0;
}
`),c=r(`
sizeof(num) = 4 bytes
&num = 0x7ffeea123abc
*ptr = 10
(num > 5) ? 100 : 200 = 100
(float)num = 10.000000
`),O=r(`
#include <stdio.h>

int main() {
    int result;

    result = 10 + 20 * 3;  // multiplication has higher precedence
    printf("%d\\n", result); // prints 70

    result = (10 + 20) * 3;  // parentheses change the order
    printf("%d\\n", result); // prints 90

    return 0;
}
`),v=r(`
70
90
`),h=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Identifiers",route:"/blog/c-identifiers"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditional-statements"},{title:"Loops",route:"/blog/c-loops"}];return(G,l)=>(B(),w(L,null,{default:A(()=>[l[28]||(l[28]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Operators in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+E(z)),l[29]||(l[29]=t("p",{class:"text-gray-600 mb-4 text-lg"},[n(" Operators are symbols that perform specific operations on data. In C programming, they are fundamental building blocks used to manipulate values stored in variables. "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Operands"),n(" are the values or variables that operators act upon. ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Operators"),n(" are the symbols that specify what kind of operation is performed on the operands. ")])]),n(" C provides a wide range of operators, including: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Arithmetic operators"),n(" for mathematical calculations. ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Relational operators"),n(" for comparing values. ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Logical operators"),n(" for evaluating conditions. ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Bitwise operators"),n(" for working at the binary level. ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Assignment operators"),n(" for storing values in variables. ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"Miscellaneous operators"),n(" like sizeof, cast, comma, and ternary operators. ")])]),n(" Understanding operators and how they interact is crucial because they define the logic and calculations in a program. ")],-1)),l[30]||(l[30]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 1. Unary, Binary, and Ternary Operators ",-1)),l[31]||(l[31]=t("p",{class:"text-gray-500 mb-2 text-lg"},[n(" Operators can be classified based on the number of operands they use: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"text-pink-800"},"Unary operators"),n(": operate on a single operand. Example: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"++"),n(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"--"),n(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"!")]),t("li",null,[t("span",{class:"text-pink-800"},"Binary operators"),n(": operate on a two operand. Example: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"+"),n(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"-"),n(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"*"),n(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"/")]),t("li",null,[t("span",{class:"text-pink-800"},"Ternary operators"),n(": operate on a three operand. Example: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"condition ? value_if_true : value_if_false")])])],-1)),l[32]||(l[32]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 2. Arithmetic Operators ",-1)),t("p",D,[l[0]||(l[0]=n(" Arithmetic operators perform mathematical operations on numbers. ",-1)),l[1]||(l[1]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"+"),n(": means Addition. ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"-"),n(": means Subtraction. ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"*"),n(": means Multiplication. ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"/"),n(": means Division. ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%"),n(": means Modulus (remainder). ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"++"),n(": means Increment by 1. ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"--"),n(": means Decrement by 1. ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"+"),n(" unary: Unary plus. ")]),t("li",null,[n(" Operator "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"-"),n(" unary: Unary minus. ")])],-1)),e(s,{code:i.value,language:"c"},null,8,["code"]),l[2]||(l[2]=n(" Output: ",-1)),e(u,{output:a.value},null,8,["output"])]),l[33]||(l[33]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 3. Relational Operators ",-1)),t("p",I,[l[3]||(l[3]=n(" Relational operators are used to compare two values. They return 1 (true) if the condition is met and 0 (false) otherwise. ",-1)),l[4]||(l[4]=t("table",{class:"my-2"},[t("tr",null,[t("th",null,"Operator"),t("th",null,"Meaning")]),t("tr",null,[t("td",null,"<"),t("td",null,"Less than")]),t("tr",null,[t("td",null,">"),t("td",null,"Greater than")]),t("tr",null,[t("td",null,"<="),t("td",null,"Less than or equal to")]),t("tr",null,[t("td",null,">="),t("td",null,"Greater than or equal to")]),t("tr",null,[t("td",null,"=="),t("td",null,"Equal to")]),t("tr",null,[t("td",null,"!="),t("td",null,"Not equal to")])],-1)),l[5]||(l[5]=n(" Example: ",-1)),e(s,{code:o.value,language:"c"},null,8,["code"]),l[6]||(l[6]=n(" Output: ",-1)),e(u,{output:d.value},null,8,["output"])]),l[34]||(l[34]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 4. Logical Operators ",-1)),t("p",M,[l[7]||(l[7]=n(" Logical operators combine or negate conditions. ",-1)),l[8]||(l[8]=t("table",{class:"my-2"},[t("tr",null,[t("th",null,"Operator"),t("th",null,"Meaning")]),t("tr",null,[t("td",null,"&&"),t("td",null,"Logical AND")]),t("tr",null,[t("td",null,"||"),t("td",null,"Logical OR")]),t("tr",null,[t("td",null,"!"),t("td",null,"Logical NOT")])],-1)),l[9]||(l[9]=n(" Example: ",-1)),e(s,{code:p.value,language:"c"},null,8,["code"]),l[10]||(l[10]=n(" Output: ",-1)),e(u,{output:g.value},null,8,["output"])]),l[35]||(l[35]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 5. Bitwise Operators ",-1)),t("p",N,[l[11]||(l[11]=n(" Bitwise operators perform operations on the binary representation of integers. ",-1)),l[12]||(l[12]=t("table",{class:"my-2"},[t("tr",null,[t("th",null,"Operator"),t("th",null,"Meaning")]),t("tr",null,[t("td",null,"&"),t("td",null,"Bitwise AND")]),t("tr",null,[t("td",null,"|"),t("td",null,"Bitwise OR")]),t("tr",null,[t("td",null,"^"),t("td",null,"Bitwise XOR")]),t("tr",null,[t("td",null,"~"),t("td",null,"Bitwise NOT")]),t("tr",null,[t("td",null,"<<"),t("td",null,"Left shift")]),t("tr",null,[t("td",null,">>"),t("td",null,"Right shift")])],-1)),l[13]||(l[13]=n(" Example: ",-1)),e(s,{code:x.value,language:"c"},null,8,["code"]),l[14]||(l[14]=n(" Output: ",-1)),e(u,{output:m.value},null,8,["output"])]),l[36]||(l[36]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 6. Assignment Operators ",-1)),t("p",T,[l[15]||(l[15]=n(" Assignment operators store or update the value of a variable. ",-1)),l[16]||(l[16]=t("table",{class:"my-2"},[t("tr",null,[t("th",null,"Operator"),t("th",null,"Meaning")]),t("tr",null,[t("td",null,"="),t("td",null,"Simple assignment")]),t("tr",null,[t("td",null,"+="),t("td",null,"Add and assign")]),t("tr",null,[t("td",null,"-="),t("td",null,"Subtract and assign")]),t("tr",null,[t("td",null,"*="),t("td",null,"Multiply and assign")]),t("tr",null,[t("td",null,"/="),t("td",null,"Divide and assign")])],-1)),l[17]||(l[17]=n(" Example: ",-1)),e(s,{code:f.value,language:"c"},null,8,["code"]),l[18]||(l[18]=n(" Output: ",-1)),e(u,{output:y.value},null,8,["output"])]),l[37]||(l[37]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 7. Miscellaneous Operators ",-1)),t("p",U,[l[19]||(l[19]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"sizeof - returns the size of a variable or data type in bytes."),t("li",null,"& - returns the address of a variable."),t("li",null,"* - dereferences a pointer."),t("li",null,"(type) - cast a variable to another data type."),t("li",null,"?: - ternary conditional operator.")],-1)),l[20]||(l[20]=n(" Example: ",-1)),e(s,{code:b.value,language:"c"},null,8,["code"]),l[21]||(l[21]=n(" Output: ",-1)),e(u,{output:c.value},null,8,["output"])]),l[38]||(l[38]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 8. Operator Precedence and Associativity ",-1)),t("p",q,[l[22]||(l[22]=n(" When expressions contain multiple operators, precedence and associativity decide the order of evaluation. ",-1)),l[23]||(l[23]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Precedence: determines which operator is evaluated first."),t("li",null,"Associativity: determines the direction of evaluation when operators have the same precedence (left-to-right) or right-to-left). ")],-1)),l[24]||(l[24]=n(" Example: ",-1)),e(s,{code:O.value,language:"c"},null,8,["code"]),l[25]||(l[25]=n(" Output: ",-1)),e(u,{output:v.value},null,8,["output"]),l[26]||(l[26]=t("span",null,"Quick Reference Table: Precedence and Associativity",-1)),l[27]||(l[27]=t("table",{class:"my-2"},[t("tr",null,[t("th",null,"Precedence"),t("th",null,"Operators"),t("th",null,"Associativity")]),t("tr",null,[t("td",null,"++ (postfix)"),t("td",null,"Increment"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"-- (postfix)"),t("td",null,"Decrement"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"++ (prefix)"),t("td",null,"Increment"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,"-- (prefix)"),t("td",null,"Decrement"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,"+ (unary)"),t("td",null,"Unary plus"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,"- (unary)"),t("td",null,"Unary minus"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,"!"),t("td",null,"Logical NOT"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,"~"),t("td",null,"Bitwise NOT"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,"*"),t("td",null,"Multiplication"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"/"),t("td",null,"Division"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"%"),t("td",null,"Modulus"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"+"),t("td",null,"Addition"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"-"),t("td",null,"Subtraction"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"<<"),t("td",null,"Left shift"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,">>"),t("td",null,"Right shift"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"<, <="),t("td",null,"Less than / Less than or equal to"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,">, >="),t("td",null,"Greater than / Greater than or equal to"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"==, !="),t("td",null,"Equality / Inequality"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"&&"),t("td",null,"Logical AND"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"="),t("td",null,"Assignment"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,"+=, -=, *=, /=, %="),t("td",null,"Compound Assignment"),t("td",null,"Right to Left")]),t("tr",null,[t("td",null,","),t("td",null,"Comma"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"()"),t("td",null,"Parentheses / function call"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"[]"),t("td",null,"Array subscript"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"."),t("td",null,"Structure member access"),t("td",null,"Left to Right")]),t("tr",null,[t("td",null,"->"),t("td",null,"Structure pointer access"),t("td",null,"Left to Right")])],-1))]),e(k,{links:h})]),_:1}))}}),K=C(P,[["__scopeId","data-v-a0665248"]]);export{K as default};

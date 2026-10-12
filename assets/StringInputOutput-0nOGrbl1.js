import{_ as f}from"./logo-C9ImmdpX.js";import{T as r,a as i,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as s,C as o}from"./CodeBlock-Ayh7J4dk.js";import{O as d}from"./OutputBlock-CjsXuZMe.js";import{_ as a}from"./FernInfo.vue_vue_type_script_setup_true_lang-CYGdZlbx.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{d as g,h as w,i as u,o as y,a as e,q as l,g as n}from"./index-DSMoD1xp.js";const b={class:"max-w-4xl mx-auto"},x={class:"list-disc pl-6 space-y-2"},S={class:"list-disc pl-6 space-y-2"},O=`
#include <stdio.h>

int main() {
    char name[] = "Ralph";

    printf("Name: %s\\n", name);
    return 0;
}`,C=`
Name: Ralph`,E=`
#include <stdio.h>

int main() {
    char firstName[] = "Ralph";
    char course[] = "Computer Engineering";

    printf("Name: %s\\n", firstName);
    printf("Course: %s\\n", course);
    return 0;
}`,R=`
Name: Ralph
Course: Computer Engineering`,T=`
#include <stdio.h>

int main() {
    char name[20];

    printf("Enter your name: ");
    scanf("%19s", name);

    printf("Hello, %s!\\n", name);
    return 0;
}`,v=`
Enter your name: Ralph
Hello, Ralph!`,N=`
#include <stdio.h>

int main() {
    char word[20];

    printf("Enter a word: ");
    scanf("%19s", word);

    printf("You entered: %s\\n", word);
    return 0;
}`,A=`
Enter a word: Computer
You entered: Computer`,I=`
#include <stdio.h>

int main() {
    char name[50];

    printf("Enter your full name: ");
    fgets(name, sizeof(name), stdin);

    printf("Hello, %s", name);
    return 0;
}`,M=`
Enter your full name: Ralph Maron
Hello, Ralph Maron`,P=`
#include <stdio.h>

int main() {
    char message[100];

    printf("Enter a message: ");
    fgets(message, sizeof(message), stdin);

    printf("Message: %s", message);
    return 0;
}`,B=`
Enter a message: Hello, welcome to Academia!
Message: Hello, welcome to Academia!`,k=`
#include <stdio.h>

int main() {
    char name[50];
    char course[50];

    printf("Enter your name: ");
    fgets(name, sizeof(name), stdin);

    printf("Enter your course: ");
    fgets(course, sizeof(course), stdin);

    printf("\\nStudent Information\\n");
    printf("Name: %s", name);
    printf("Course: %s", course);
    return 0;
}`,z=`
Enter your name: Ralph Maron
Enter your course: Computer Engineering

Student Information
Name: Ralph Maron
Course: Computer Engineering`,D=g({__name:"StringInputOutput",setup(H){return(W,t)=>(y(),w(m,null,{default:u(()=>[e("div",b,[t[98]||(t[98]=e("div",{class:"w-full flex justify-center mb-6"},[e("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[99]||(t[99]=e("div",{class:"text-center mb-4"},[e("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),e("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," String Input and Output ")],-1)),l(r,null,{default:u(()=>[t[2]||(t[2]=n(" The ",-1)),l(s,null,{default:u(()=>[...t[0]||(t[0]=[n("printf()",-1)])]),_:1}),t[3]||(t[3]=n(" function can display a string using the ",-1)),l(s,null,{default:u(()=>[...t[1]||(t[1]=[n("%s",-1)])]),_:1}),t[4]||(t[4]=n(" format specifier. ",-1)),l(o,{language:"c",code:O}),t[5]||(t[5]=n(" Output ",-1)),l(d,{output:C})]),_:1}),l(r,null,{default:u(()=>[t[8]||(t[8]=n(" The ",-1)),l(s,null,{default:u(()=>[...t[6]||(t[6]=[n("%s",-1)])]),_:1}),t[9]||(t[9]=n(" tells ",-1)),l(s,null,{default:u(()=>[...t[7]||(t[7]=[n("printf()",-1)])]),_:1}),t[10]||(t[10]=n(" that the value being displayed is a string. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[11]||(t[11]=[n("Displaying Multiple Strings",-1)])]),_:1}),l(r,null,{default:u(()=>[t[13]||(t[13]=n(" A program can display multiple string variables using separate ",-1)),l(s,null,{default:u(()=>[...t[12]||(t[12]=[n("printf()",-1)])]),_:1}),t[14]||(t[14]=n(" statements. ",-1)),l(o,{language:"c",code:E}),t[15]||(t[15]=n(" Output ",-1)),l(d,{output:R})]),_:1}),l(i,null,{default:u(()=>[...t[16]||(t[16]=[n("Reading a String with scanf()",-1)])]),_:1}),l(r,null,{default:u(()=>[t[18]||(t[18]=n(" The ",-1)),l(s,null,{default:u(()=>[...t[17]||(t[17]=[n("scanf()",-1)])]),_:1}),t[19]||(t[19]=n(" function can be used to read a string from the keyboard. ",-1)),l(o,{language:"c",code:T}),t[20]||(t[20]=n(" Output ",-1)),l(d,{output:v})]),_:1}),l(r,null,{default:u(()=>[t[23]||(t[23]=n(" When using ",-1)),l(s,null,{default:u(()=>[...t[21]||(t[21]=[n("scanf()",-1)])]),_:1}),t[24]||(t[24]=n(" with ",-1)),l(s,null,{default:u(()=>[...t[22]||(t[22]=[n("%s",-1)])]),_:1}),t[25]||(t[25]=n(" , the input stops when whitespace is encountered. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[26]||(t[26]=[n("Reading a Single Word",-1)])]),_:1}),l(r,null,{default:u(()=>[t[28]||(t[28]=n(" Because ",-1)),l(s,null,{default:u(()=>[...t[27]||(t[27]=[n("%s",-1)])]),_:1}),t[29]||(t[29]=n(" stops at whitespace, it works well when the input is a single word. ",-1)),l(o,{language:"c",code:N}),t[30]||(t[30]=n(" Output ",-1)),l(d,{output:A})]),_:1}),l(a,{title:"Important"},{default:u(()=>[t[33]||(t[33]=n(" Using ",-1)),l(s,null,{default:u(()=>[...t[31]||(t[31]=[n("%s",-1)])]),_:1}),t[34]||(t[34]=n(" with ",-1)),l(s,null,{default:u(()=>[...t[32]||(t[32]=[n("scanf()",-1)])]),_:1}),t[35]||(t[35]=n(" reads only up to the first space. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[36]||(t[36]=[n("Reading a Full Line with fgets()",-1)])]),_:1}),l(r,null,{default:u(()=>[t[38]||(t[38]=n(" The ",-1)),l(s,null,{default:u(()=>[...t[37]||(t[37]=[n("fgets()",-1)])]),_:1}),t[39]||(t[39]=n(" function can read a complete line of text, including spaces. ",-1)),l(o,{language:"c",code:I}),t[40]||(t[40]=n(" Output ",-1)),l(d,{output:M})]),_:1}),l(r,null,{default:u(()=>[t[42]||(t[42]=n(" In this example, ",-1)),l(s,null,{default:u(()=>[...t[41]||(t[41]=[n("fgets()",-1)])]),_:1}),t[43]||(t[43]=n(" can read both the first and last name because spaces are included in the input. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[44]||(t[44]=[n("Reading a Sentence",-1)])]),_:1}),l(r,null,{default:u(()=>[t[45]||(t[45]=n(" The same approach can be used when the input contains multiple words. ",-1)),l(o,{language:"c",code:P}),t[46]||(t[46]=n(" Output ",-1)),l(d,{output:B})]),_:1}),l(i,null,{default:u(()=>[...t[47]||(t[47]=[n("Choosing Between scanf() and fgets()",-1)])]),_:1}),l(r,null,{default:u(()=>[...t[48]||(t[48]=[n(" Both functions can be used for string input, but they behave differently. ",-1)])]),_:1}),l(r,null,{default:u(()=>[e("ul",x,[e("li",null,[l(s,null,{default:u(()=>[...t[49]||(t[49]=[n('scanf("%s", ...)',-1)])]),_:1}),t[50]||(t[50]=n(" reads a word until whitespace. ",-1))]),e("li",null,[l(s,null,{default:u(()=>[...t[51]||(t[51]=[n("fgets()",-1)])]),_:1}),t[52]||(t[52]=n(" can read a complete line containing spaces. ",-1))]),e("li",null,[l(s,null,{default:u(()=>[...t[53]||(t[53]=[n("fgets()",-1)])]),_:1}),t[54]||(t[54]=n(" requires the size of the character array. ",-1))])])]),_:1}),l(a,{title:"A Simple Rule"},{default:u(()=>[t[58]||(t[58]=n(" Use ",-1)),l(s,null,{default:u(()=>[...t[55]||(t[55]=[n("scanf()",-1)])]),_:1}),t[59]||(t[59]=n(" with ",-1)),l(s,null,{default:u(()=>[...t[56]||(t[56]=[n("%s",-1)])]),_:1}),t[60]||(t[60]=n(" when you need a single word. Use ",-1)),l(s,null,{default:u(()=>[...t[57]||(t[57]=[n("fgets()",-1)])]),_:1}),t[61]||(t[61]=n(" when you need to read a line that may contain spaces. ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[62]||(t[62]=[n("Reading Multiple Strings",-1)])]),_:1}),l(r,null,{default:u(()=>[t[64]||(t[64]=n(" A program can use multiple ",-1)),l(s,null,{default:u(()=>[...t[63]||(t[63]=[n("fgets()",-1)])]),_:1}),t[65]||(t[65]=n(" calls to collect different pieces of information. ",-1)),l(o,{language:"c",code:k}),t[66]||(t[66]=n(" Output ",-1)),l(d,{output:z})]),_:1}),l(r,null,{default:u(()=>[t[68]||(t[68]=n(" Each input is stored in its own character array and can then be displayed using ",-1)),l(s,null,{default:u(()=>[...t[67]||(t[67]=[n("printf()",-1)])]),_:1}),t[69]||(t[69]=n(" . ",-1))]),_:1}),l(i,null,{default:u(()=>[...t[70]||(t[70]=[n("Why the Array Size Matters",-1)])]),_:1}),l(r,null,{default:u(()=>[...t[71]||(t[71]=[n(" A character array must have enough space to store the input string, including its terminating null character. ",-1)])]),_:1}),l(r,null,{default:u(()=>[t[74]||(t[74]=n(" For example, ",-1)),l(s,null,{default:u(()=>[...t[72]||(t[72]=[n("char name[50]",-1)])]),_:1}),t[75]||(t[75]=n(" provides space for up to 49 characters followed by ",-1)),l(s,null,{default:u(()=>[...t[73]||(t[73]=[n("'\\0'",-1)])]),_:1}),t[76]||(t[76]=n(" . ",-1))]),_:1}),l(a,{title:"Remember"},{default:u(()=>[...t[77]||(t[77]=[n(" The array size determines how much text can be stored. Always provide enough space for the characters and the null character. ",-1)])]),_:1}),l(i,null,{default:u(()=>[...t[78]||(t[78]=[n("Summary",-1)])]),_:1}),l(r,null,{default:u(()=>[t[82]||(t[82]=n(" Strings can be displayed using ",-1)),l(s,null,{default:u(()=>[...t[79]||(t[79]=[n("printf()",-1)])]),_:1}),t[83]||(t[83]=n(" and read from the keyboard using functions such as ",-1)),l(s,null,{default:u(()=>[...t[80]||(t[80]=[n("scanf()",-1)])]),_:1}),t[84]||(t[84]=n(" and ",-1)),l(s,null,{default:u(()=>[...t[81]||(t[81]=[n("fgets()",-1)])]),_:1}),t[85]||(t[85]=n(" . ",-1))]),_:1}),l(r,null,{default:u(()=>[e("ul",S,[e("li",null,[l(s,null,{default:u(()=>[...t[86]||(t[86]=[n("%s",-1)])]),_:1}),t[88]||(t[88]=n(" is used to display a string with ",-1)),l(s,null,{default:u(()=>[...t[87]||(t[87]=[n("printf()",-1)])]),_:1}),t[89]||(t[89]=n(" . ",-1))]),e("li",null,[l(s,null,{default:u(()=>[...t[90]||(t[90]=[n("scanf()",-1)])]),_:1}),t[92]||(t[92]=n(" with ",-1)),l(s,null,{default:u(()=>[...t[91]||(t[91]=[n("%s",-1)])]),_:1}),t[93]||(t[93]=n(" reads a single word. ",-1))]),e("li",null,[l(s,null,{default:u(()=>[...t[94]||(t[94]=[n("fgets()",-1)])]),_:1}),t[95]||(t[95]=n(" can read a complete line containing spaces. ",-1))]),t[96]||(t[96]=e("li",null,"The character array must have enough space for the input.",-1)),t[97]||(t[97]=e("li",null,"A string must have space for its null character.",-1))])]),_:1}),t[100]||(t[100]=e("br",null,null,-1)),l(p,{to:"/academia/student/classes/c-string-manipulation"})])]),_:1}))}});export{D as default};

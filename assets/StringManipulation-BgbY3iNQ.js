import{_ as p}from"./logo-C9ImmdpX.js";import{T as a,a as l,_ as g}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{T as u}from"./TopicTerm-Dw7PNqTI.js";import{C as s}from"./CodeBlock-BgBdQh_Q.js";import{O as o}from"./OutputBlock-CUGk6WXg.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-BEAyXMsa.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{d as m,h as w,i as e,o as c,a as i,q as r,g as n}from"./index-BX2gTDPs.js";const b={class:"max-w-4xl mx-auto"},h=`
#include <stdio.h>

int main() {
    char word[] = "Hello";
    word[0] = 'Y';

    printf("%s\\n", word);
    return 0;
}`,C=`
Yello`,v=`
#include <stdio.h>

int main() {
    char word[] = "Hello";

    word[0] = 'J';
    word[1] = 'a';
    word[2] = 'v';
    word[3] = 'a';

    printf("%s\\n", word);
    return 0;
}`,x=`
Java`,y=`
#include <stdio.h>

int main() {
    char word[] = "hello";

    for (int i = 0; word[i] != '\\0'; i++) {
        if (word[i] >= 'a' && word[i] <= 'z') {
            word[i] = word[i] - 32;
        }
    }
    printf("%s\\n", word);
    return 0;
}`,O=`
HELLO`,T=`
#include <stdio.h>

int main() {
    char word[] = "HELLO";

    for (int i = 0; word[i] != '\\0'; i++) {
        if (word[i] >= 'A' && word[i] <= 'Z') {
            word[i] = word[i] + 32;
        }
    }
    printf("%s\\n", word);
    return 0;
}`,k=`
hello`,S=`
#include <stdio.h>

int main() {
    char word[] = "banana";

    for (int i = 0; word[i] != '\\0'; i++) {
        if (word[i] == 'a') {
            word[i] = 'o';
        }
    }
    printf("%s\\n", word);
    return 0;
}`,P=`
bonono`,H=`
#include <stdio.h>

int main() {
    char word[] = "banana";
    int count = 0;

    for (int i = 0; word[i] != '\\0'; i++) {
        if (word[i] == 'a') {
            count++;
        }
    }
    printf("Number of 'a': %d\\n", count);
    return 0;
}`,M=`
Number of 'a': 3`,A=`
#include <stdio.h>

int main() {
    char word[] = "Hello";
    int length = 0;

    while (word[length] != '\\0') {
        length++;
    }
    for (int i = length - 1; i >= 0; i--) {
        printf("%c", word[i]);
    }
    printf("\\n");
    return 0;
}`,N=`
olleH`,B=`
#include <stdio.h>

int main() {
    char first[] = "Hello";
    char second[] = "Hello";
    int same = 1;
    int i = 0;

    while (first[i] != '\\0' || second[i] != '\\0') {
        if (first[i] != second[i]) {
            same = 0;
            break;
        }
        i++;
    }

    if (same) {
        printf("The strings are the same.\\n");
    } else {
        printf("The strings are different.\\n");
    }
    return 0;
}`,I=`
The strings are the same.`,L=`
#include <stdio.h>

int main() {
    char name[] = "ralph";
    
    for (int i = 0; name[i] != '\\0'; i++) {
        if (name[i] >= 'a' && name[i] <= 'z') {
            name[i] = name[i] - 32;
        }
    }
    printf("Name: %s\\n", name);
    return 0;
}`,E=`
Name: RALPH`,Z=m({__name:"StringManipulation",setup(R){return(V,t)=>(c(),w(f,null,{default:e(()=>[i("div",b,[t[55]||(t[55]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:p,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[56]||(t[56]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," String Manipulation ")],-1)),r(a,null,{default:e(()=>[r(u,null,{default:e(()=>[...t[0]||(t[0]=[n("String manipulation",-1)])]),_:1}),t[1]||(t[1]=n(" means working with the characters stored inside a string. ",-1))]),_:1}),r(a,null,{default:e(()=>[...t[2]||(t[2]=[n(" Since a string is a character array, its individual characters can be accessed and changed using indexes. ",-1)])]),_:1}),r(l,null,{default:e(()=>[...t[3]||(t[3]=[n("Changing a Character",-1)])]),_:1}),r(a,null,{default:e(()=>[t[4]||(t[4]=n(" A character in a string can be changed by assigning a new character to its index. ",-1)),r(s,{language:"c",code:h}),t[5]||(t[5]=n(" Output ",-1)),r(o,{output:C})]),_:1}),r(a,null,{default:e(()=>[t[9]||(t[9]=n(" The character at index ",-1)),r(u,null,{default:e(()=>[...t[6]||(t[6]=[n("0",-1)])]),_:1}),t[10]||(t[10]=n(" is changed from ",-1)),r(u,null,{default:e(()=>[...t[7]||(t[7]=[n("'H'",-1)])]),_:1}),t[11]||(t[11]=n(" to ",-1)),r(u,null,{default:e(()=>[...t[8]||(t[8]=[n("'Y'",-1)])]),_:1}),t[12]||(t[12]=n(" . ",-1))]),_:1}),r(l,null,{default:e(()=>[...t[13]||(t[13]=[n("Changing Multiple Characters",-1)])]),_:1}),r(a,null,{default:e(()=>[t[14]||(t[14]=n(" Multiple characters can be changed by accessing their individual indexes. ",-1)),r(s,{language:"c",code:v}),t[15]||(t[15]=n(" Output ",-1)),r(o,{output:x})]),_:1}),r(d,{title:"Remember"},{default:e(()=>[...t[16]||(t[16]=[n(" A string is still an array of characters. The same indexing rules used with arrays can be used to access its individual characters. ",-1)])]),_:1}),r(l,null,{default:e(()=>[...t[17]||(t[17]=[n("Converting Characters to Uppercase",-1)])]),_:1}),r(a,null,{default:e(()=>[t[18]||(t[18]=n(" Characters can be checked and changed while traversing a string. ",-1)),r(s,{language:"c",code:y}),t[19]||(t[19]=n(" Output ",-1)),r(o,{output:O})]),_:1}),r(a,null,{default:e(()=>[...t[20]||(t[20]=[n(" In this example, lowercase letters are converted to uppercase by changing their character values. ",-1)])]),_:1}),r(l,null,{default:e(()=>[...t[21]||(t[21]=[n("Converting Characters to Lowercase",-1)])]),_:1}),r(a,null,{default:e(()=>[t[22]||(t[22]=n(" The same approach can be used to convert uppercase letters to lowercase. ",-1)),r(s,{language:"c",code:T}),t[23]||(t[23]=n(" Output ",-1)),r(o,{output:k})]),_:1}),r(a,null,{default:e(()=>[...t[24]||(t[24]=[n(" The program checks whether each character is an uppercase letter before changing it. ",-1)])]),_:1}),r(l,null,{default:e(()=>[...t[25]||(t[25]=[n("Replacing Characters",-1)])]),_:1}),r(a,null,{default:e(()=>[t[26]||(t[26]=n(" A particular character can be replaced whenever it appears in a string. ",-1)),r(s,{language:"c",code:S}),t[27]||(t[27]=n(" Output ",-1)),r(o,{output:P})]),_:1}),r(a,null,{default:e(()=>[t[30]||(t[30]=n(" Every ",-1)),r(u,null,{default:e(()=>[...t[28]||(t[28]=[n("'a'",-1)])]),_:1}),t[31]||(t[31]=n(" in the string is replaced with ",-1)),r(u,null,{default:e(()=>[...t[29]||(t[29]=[n("'o'",-1)])]),_:1}),t[32]||(t[32]=n(" . ",-1))]),_:1}),r(l,null,{default:e(()=>[...t[33]||(t[33]=[n("Counting Characters",-1)])]),_:1}),r(a,null,{default:e(()=>[t[34]||(t[34]=n(" Traversal can also be used to count how many times a character appears in a string. ",-1)),r(s,{language:"c",code:H}),t[35]||(t[35]=n(" Output ",-1)),r(o,{output:M})]),_:1}),r(a,null,{default:e(()=>[...t[36]||(t[36]=[n(" Each character is checked, and the counter increases whenever the target character is found. ",-1)])]),_:1}),r(l,null,{default:e(()=>[...t[37]||(t[37]=[n("Reversing a String",-1)])]),_:1}),r(a,null,{default:e(()=>[t[38]||(t[38]=n(" A string can be displayed in reverse by starting from its last character and moving toward the first. ",-1)),r(s,{language:"c",code:A}),t[39]||(t[39]=n(" Output ",-1)),r(o,{output:N})]),_:1}),r(a,null,{default:e(()=>[...t[40]||(t[40]=[n(" The program first finds the length of the string, then traverses the characters backward. ",-1)])]),_:1}),r(l,null,{default:e(()=>[...t[41]||(t[41]=[n("Comparing Strings Character by Character",-1)])]),_:1}),r(a,null,{default:e(()=>[t[42]||(t[42]=n(" Strings can be compared by checking their characters one at a time. ",-1)),r(s,{language:"c",code:B}),t[43]||(t[43]=n(" Output ",-1)),r(o,{output:I})]),_:1}),r(a,null,{default:e(()=>[...t[44]||(t[44]=[n(" If a character differs at the same position, the strings are considered different. ",-1)])]),_:1}),r(d,{title:"Important"},{default:e(()=>[t[46]||(t[46]=n(" Comparing strings with ",-1)),r(u,null,{default:e(()=>[...t[45]||(t[45]=[n("==",-1)])]),_:1}),t[47]||(t[47]=n(" is not the way to compare their contents. String comparison requires checking the characters or using an appropriate string function. ",-1))]),_:1}),r(l,null,{default:e(()=>[...t[48]||(t[48]=[n("Practical Example",-1)])]),_:1}),r(a,null,{default:e(()=>[t[49]||(t[49]=n(" String manipulation can be useful when preparing text for display. For example, a name can be converted to uppercase before it is shown. ",-1)),r(s,{language:"c",code:L}),t[50]||(t[50]=n(" Output ",-1)),r(o,{output:E})]),_:1}),r(d,{title:"The Main Idea"},{default:e(()=>[...t[51]||(t[51]=[n(" Because C strings are character arrays, many basic string operations can be performed by traversing the string and working with each character. ",-1)])]),_:1}),r(l,null,{default:e(()=>[...t[52]||(t[52]=[n("Summary",-1)])]),_:1}),r(a,null,{default:e(()=>[...t[53]||(t[53]=[n(" String manipulation involves accessing, checking, and changing the characters stored in a string. ",-1)])]),_:1}),r(a,null,{default:e(()=>[...t[54]||(t[54]=[i("ul",{class:"list-disc pl-6 space-y-2"},[i("li",null,"Individual string characters can be accessed using indexes."),i("li",null,"Characters can be changed by assigning new values."),i("li",null,"Strings can be traversed to modify or check their characters."),i("li",null,"Characters can be counted or replaced."),i("li",null,"A string can be displayed in reverse order."),i("li",null,"Strings can be compared character by character.")],-1)])]),_:1}),t[57]||(t[57]=i("br",null,null,-1)),r(g,{to:"/academia/student/classes/c-string-functions"})])]),_:1}))}});export{Z as default};

import{_ as g}from"./logo-C9ImmdpX.js";import{T as i,a,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as s}from"./TopicTerm-Djs_QcTu.js";import{C as u}from"./CodeBlock-DmHkNxFS.js";import{O as o}from"./OutputBlock-C3xonGgx.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-DcinX2pd.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{d as f,h as x,i as l,o as y,a as e,q as r,g as n}from"./index-CCexFS6P.js";const w={class:"max-w-4xl mx-auto"},b={class:"list-disc pl-6 space-y-2"},v=`
#include <stdio.h>

int main() {
    char name[] = "Ralph";

    printf("%s\\n", name);
    return 0;
}`,S=`
Ralph`,C=`
#include <stdio.h>

int main() {
    char name[] = {'R', 'a', 'l', 'p', 'h', '\\0'};

    printf("%s\\n", name);
    return 0;
}`,O=`
Ralph`,T=`
#include <stdio.h>

int main() {
    char name[] = "Ralph";

    printf("%c\\n", name[0]);
    printf("%c\\n", name[2]);
    printf("%c\\n", name[4]);
    return 0;
}`,A=`
R
l
h`,R=`
#include <stdio.h>

int main() {
    char name[] = "Ralph";

    for (int i = 0; name[i] != '\\0'; i++) {
        printf("%c\\n", name[i]);
    }
    return 0;
}`,P=`
R
a
l
p
h`,k=`
#include <stdio.h>

int main() {
    char word[] = "Hello";
    int length = 0;

    for (int i = 0; word[i] != '\\0'; i++) {
        length++;
    }
    printf("Length: %d\\n", length);
    return 0;
}`,I=`
Length: 5`,N=`
#include <stdio.h>

int main() {
    char firstName[] = "Ralph";
    char course[] = "Computer Engineering";

    printf("Name: %s\\n", firstName);
    printf("Course: %s\\n", course);
    return 0;
}`,B=`
Name: Ralph
Course: Computer Engineering`,E=`
#include <stdio.h>

int main() {
    char fruits[3][10] = {
        "Apple",
        "Mango",
        "Orange"
    };

    for (int i = 0; i < 3; i++) {
        printf("%s\\n", fruits[i]);
    }
    return 0;
}`,M=`
Apple
Mango
Orange`,L=`
#include <stdio.h>

int main() {
    char name[] = "Ralph";
    int vowels = 0;

    for (int i = 0; name[i] != '\\0'; i++) {
        if (
            name[i] == 'a' ||
            name[i] == 'e' ||
            name[i] == 'i' ||
            name[i] == 'o' ||
            name[i] == 'u'
        ) {
            vowels++;
        }
    }
    printf("Vowels: %d\\n", vowels);
    return 0;
}`,V=`
Vowels: 1`,K=f({__name:"Strings",setup(q){return(W,t)=>(y(),x(p,null,{default:l(()=>[e("div",w,[t[71]||(t[71]=e("div",{class:"w-full flex justify-center mb-6"},[e("img",{src:g,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[72]||(t[72]=e("div",{class:"text-center mb-4"},[e("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),e("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Strings ")],-1)),r(i,null,{default:l(()=>[t[1]||(t[1]=n(" A ",-1)),r(s,null,{default:l(()=>[...t[0]||(t[0]=[n("string",-1)])]),_:1}),t[2]||(t[2]=n(" is a sequence of characters used to represent text. ",-1))]),_:1}),r(i,null,{default:l(()=>[t[5]||(t[5]=n(" Examples of strings include names, words, sentences, and other text such as ",-1)),r(s,null,{default:l(()=>[...t[3]||(t[3]=[n('"Hello"',-1)])]),_:1}),t[6]||(t[6]=n(" or ",-1)),r(s,null,{default:l(()=>[...t[4]||(t[4]=[n('"Computer Engineering"',-1)])]),_:1}),t[7]||(t[7]=n(" . ",-1))]),_:1}),r(d,{title:"Strings in C"},{default:l(()=>[...t[8]||(t[8]=[n(" C does not have a separate built-in string data type. Strings are stored as arrays of characters. ",-1)])]),_:1}),r(a,null,{default:l(()=>[...t[9]||(t[9]=[n("Declaring a String",-1)])]),_:1}),r(i,null,{default:l(()=>[t[11]||(t[11]=n(" A string can be declared using a ",-1)),r(s,null,{default:l(()=>[...t[10]||(t[10]=[n("char",-1)])]),_:1}),t[12]||(t[12]=n(" array. ",-1)),r(u,{language:"c",code:v}),t[13]||(t[13]=n(" Output ",-1)),r(o,{output:S})]),_:1}),r(i,null,{default:l(()=>[t[15]||(t[15]=n(" The declaration ",-1)),r(s,null,{default:l(()=>[...t[14]||(t[14]=[n("char name[]",-1)])]),_:1}),t[16]||(t[16]=n(" creates a character array large enough to store the string and its terminating character. ",-1))]),_:1}),r(a,null,{default:l(()=>[...t[17]||(t[17]=[n("The Null Character",-1)])]),_:1}),r(i,null,{default:l(()=>[t[20]||(t[20]=n(" Every C string ends with a special character called the ",-1)),r(s,null,{default:l(()=>[...t[18]||(t[18]=[n("null character",-1)])]),_:1}),t[21]||(t[21]=n(" , written as ",-1)),r(s,null,{default:l(()=>[...t[19]||(t[19]=[n("'\\0'",-1)])]),_:1}),t[22]||(t[22]=n(" . ",-1))]),_:1}),r(i,null,{default:l(()=>[...t[23]||(t[23]=[n(" The null character tells C where the string ends. ",-1)])]),_:1}),r(i,null,{default:l(()=>[t[24]||(t[24]=n(" We can also create a string by explicitly writing each character. ",-1)),r(u,{language:"c",code:C}),t[25]||(t[25]=n(" Output ",-1)),r(o,{output:O})]),_:1}),r(d,{title:"Remember"},{default:l(()=>[t[27]||(t[27]=n(" The ",-1)),r(s,null,{default:l(()=>[...t[26]||(t[26]=[n("'\\0'",-1)])]),_:1}),t[28]||(t[28]=n(" is not normally visible when a string is printed, but it marks the end of the string. ",-1))]),_:1}),r(a,null,{default:l(()=>[...t[29]||(t[29]=[n("String Indexing",-1)])]),_:1}),r(i,null,{default:l(()=>[t[30]||(t[30]=n(" Because a string is stored as an array of characters, each character can be accessed using an index. ",-1)),r(u,{language:"c",code:T}),t[31]||(t[31]=n(" Output ",-1)),r(o,{output:A})]),_:1}),r(i,null,{default:l(()=>[t[33]||(t[33]=n(" Just like other arrays, string indexes start at ",-1)),r(s,null,{default:l(()=>[...t[32]||(t[32]=[n("0",-1)])]),_:1}),t[34]||(t[34]=n(" . ",-1))]),_:1}),r(a,null,{default:l(()=>[...t[35]||(t[35]=[n("Traversing a String",-1)])]),_:1}),r(i,null,{default:l(()=>[t[36]||(t[36]=n(" A string can be traversed character by character using a loop. ",-1)),r(u,{language:"c",code:R}),t[37]||(t[37]=n(" Output ",-1)),r(o,{output:P})]),_:1}),r(i,null,{default:l(()=>[t[39]||(t[39]=n(" The loop continues until it reaches the ",-1)),r(s,null,{default:l(()=>[...t[38]||(t[38]=[n("'\\0'",-1)])]),_:1}),t[40]||(t[40]=n(" character. ",-1))]),_:1}),r(d,{title:"Important"},{default:l(()=>[t[42]||(t[42]=n(" When traversing a C string manually, checking for ",-1)),r(s,null,{default:l(()=>[...t[41]||(t[41]=[n("'\\0'",-1)])]),_:1}),t[43]||(t[43]=n(" lets the program know when the string has ended. ",-1))]),_:1}),r(a,null,{default:l(()=>[...t[44]||(t[44]=[n("Finding the Length of a String",-1)])]),_:1}),r(i,null,{default:l(()=>[t[45]||(t[45]=n(" We can traverse a string and count its characters to determine its length. ",-1)),r(u,{language:"c",code:k}),t[46]||(t[46]=n(" Output ",-1)),r(o,{output:I})]),_:1}),r(i,null,{default:l(()=>[...t[47]||(t[47]=[n(" The null character is not counted as part of the string's length. ",-1)])]),_:1}),r(a,null,{default:l(()=>[...t[48]||(t[48]=[n("Storing Multiple Strings",-1)])]),_:1}),r(i,null,{default:l(()=>[t[49]||(t[49]=n(" A program can have multiple string variables for storing different pieces of text. ",-1)),r(u,{language:"c",code:N}),t[50]||(t[50]=n(" Output ",-1)),r(o,{output:B})]),_:1}),r(a,null,{default:l(()=>[...t[51]||(t[51]=[n("An Array of Strings",-1)])]),_:1}),r(i,null,{default:l(()=>[t[52]||(t[52]=n(" Multiple strings can also be organized using a two-dimensional character array. ",-1)),r(u,{language:"c",code:E}),t[53]||(t[53]=n(" Output ",-1)),r(o,{output:M})]),_:1}),r(i,null,{default:l(()=>[...t[54]||(t[54]=[n(" Each row stores one string. The second dimension determines the maximum space available for each string. ",-1)])]),_:1}),r(a,null,{default:l(()=>[...t[55]||(t[55]=[n("Processing Characters in a String",-1)])]),_:1}),r(i,null,{default:l(()=>[t[56]||(t[56]=n(" Since a string is an array of characters, each character can be checked individually while traversing the string. ",-1)),r(u,{language:"c",code:L}),t[57]||(t[57]=n(" Output ",-1)),r(o,{output:V})]),_:1}),r(i,null,{default:l(()=>[...t[58]||(t[58]=[n(" In this example, every character is checked to determine whether it is a vowel. ",-1)])]),_:1}),r(d,{title:"The Main Idea"},{default:l(()=>[...t[59]||(t[59]=[n(" A C string is a character array that ends with a null character. Because of this, the same indexing and traversal ideas used with arrays also apply to strings. ",-1)])]),_:1}),r(a,null,{default:l(()=>[...t[60]||(t[60]=[n("Summary",-1)])]),_:1}),r(i,null,{default:l(()=>[...t[61]||(t[61]=[n(" Strings are used to store text in C. They are represented using character arrays and end with a null character. ",-1)])]),_:1}),r(i,null,{default:l(()=>[e("ul",b,[t[65]||(t[65]=e("li",null,"A string is a sequence of characters.",-1)),t[66]||(t[66]=e("li",null,"C strings are stored in character arrays.",-1)),e("li",null,[t[63]||(t[63]=n("Strings end with the null character ",-1)),r(s,null,{default:l(()=>[...t[62]||(t[62]=[n("'\\0'",-1)])]),_:1}),t[64]||(t[64]=n(" . ",-1))]),t[67]||(t[67]=e("li",null,"String indexes start at 0.",-1)),t[68]||(t[68]=e("li",null,"Individual characters can be accessed using indexes.",-1)),t[69]||(t[69]=e("li",null,"Strings can be traversed using loops.",-1)),t[70]||(t[70]=e("li",null,"Multiple strings can be stored using a two-dimensional character array.",-1))])]),_:1}),t[73]||(t[73]=e("br",null,null,-1)),r(m,{to:"/academia/student/classes/c-string-input-output"})])]),_:1}))}});export{K as default};

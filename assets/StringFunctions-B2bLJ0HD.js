import{_ as f}from"./logo-C9ImmdpX.js";import{T as u,a as e,_ as g}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{T as s,C as o}from"./CodeBlock-Z3HAVLif.js";import{O as d}from"./OutputBlock-B9VPajdJ.js";import{_ as a}from"./FernInfo.vue_vue_type_script_setup_true_lang-CMwsacWG.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{d as p,h as T,i as r,o as y,a as i,q as l,g as n}from"./index-BRxoWVJY.js";const N={class:"max-w-4xl mx-auto"},b={class:"list-disc pl-6 space-y-2"},O=`
#include <stdio.h>
#include <string.h>

int main() {
    char name[] = "Ralph";

    printf("Name: %s\\n", name);
    return 0;
}`,x=`
Name: Ralph`,w=`
#include <stdio.h>
#include <string.h>

int main() {
    char word[] = "Hello";
    int length = strlen(word);

    printf("Length: %d\\n", length);
    return 0;
}`,S=`
Length: 5`,v=`
#include <stdio.h>
#include <string.h>

int main() {
    char message[] = "Hello, C Programming!";
    int length = strlen(message);

    printf("Length: %d\\n", length);
    return 0;
}`,R=`
Length: 21`,P=`
#include <stdio.h>
#include <string.h>

int main() {
    char source[] = "Academia";
    char destination[20];

    strcpy(destination, source);

    printf("Source: %s\\n", source);
    printf("Destination: %s\\n", destination);
    return 0;
}`,C=`
Source: Academia
Destination: Academia`,F=`
#include <stdio.h>
#include <string.h>

int main() {
    char name[20] = "Ralph";

    strcpy(name, "Maron");

    printf("Name: %s\\n", name);
    return 0;
}`,H=`
Name: Maron`,k=`
#include <stdio.h>
#include <string.h>

int main() {
    char firstName[30] = "Ralph ";
    char lastName[] = "Eda";

    strcat(firstName, lastName);

    printf("Full Name: %s\\n", firstName);
    return 0;
}`,E=`
Full Name: Ralph Eda`,M=`
#include <stdio.h>
#include <string.h>

int main() {
    char message[50] = "Hello, ";
    char name[] = "Ralph";

    strcat(message, name);
    strcat(message, "!");

    printf("%s\\n", message);
    return 0;
}`,D=`
Hello, Ralph!`,I=`
#include <stdio.h>
#include <string.h>

int main() {
    char first[] = "Hello";
    char second[] = "Hello";

    if (strcmp(first, second) == 0) {
        printf("The strings are equal.\\n");
    } else {
        printf("The strings are different.\\n");
    }
    return 0;
}`,L=`
The strings are equal.`,B=`
#include <stdio.h>
#include <string.h>

int main() {
    char first[] = "Hello";
    char second[] = "World";

    if (strcmp(first, second) == 0) {
        printf("The strings are equal.\\n");
    } else {
        printf("The strings are different.\\n");
    }
    return 0;
}`,j=`
The strings are different.`,q=`
#include <stdio.h>
#include <string.h>

int main() {
    char firstName[30];
    char lastName[30];
    char fullName[70];

    printf("Enter first name: ");
    scanf("%29s", firstName);

    printf("Enter last name: ");
    scanf("%29s", lastName);

    strcpy(fullName, firstName);
    strcat(fullName, " ");
    strcat(fullName, lastName);

    printf("\\nFull Name: %s\\n", fullName);
    printf("Number of characters: %d\\n", (int)strlen(fullName));
    return 0;
}`,A=`
Enter first name: Ralph
Enter last name: Eda

Full Name: Ralph Eda
Number of characters: 9`,X=p({__name:"StringFunctions",setup(V){return(W,t)=>(y(),T(m,null,{default:r(()=>[i("div",N,[t[101]||(t[101]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:f,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[102]||(t[102]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," String Functions ")],-1)),l(u,null,{default:r(()=>[t[1]||(t[1]=n(" C provides several functions for working with strings. These functions are available through the ",-1)),l(s,null,{default:r(()=>[...t[0]||(t[0]=[n("<string.h>",-1)])]),_:1}),t[2]||(t[2]=n(" header file. ",-1))]),_:1}),l(u,null,{default:r(()=>[...t[3]||(t[3]=[n(" String functions can perform common operations such as finding the length of a string, copying strings, joining strings, and comparing strings. ",-1)])]),_:1}),l(a,{title:"Remember"},{default:r(()=>[t[5]||(t[5]=n(" Include ",-1)),l(s,null,{default:r(()=>[...t[4]||(t[4]=[n("<string.h>",-1)])]),_:1}),t[6]||(t[6]=n(" before using the standard string functions introduced in this topic. ",-1))]),_:1}),l(e,null,{default:r(()=>[...t[7]||(t[7]=[n("Including string.h",-1)])]),_:1}),l(u,null,{default:r(()=>[t[9]||(t[9]=n(" The ",-1)),l(s,null,{default:r(()=>[...t[8]||(t[8]=[n("<string.h>",-1)])]),_:1}),t[10]||(t[10]=n(" header provides the declarations for the standard string functions. ",-1)),l(o,{language:"c",code:O}),t[11]||(t[11]=n(" Output ",-1)),l(d,{output:x})]),_:1}),l(e,null,{default:r(()=>[...t[12]||(t[12]=[n("strlen()",-1)])]),_:1}),l(u,null,{default:r(()=>[t[14]||(t[14]=n(" The ",-1)),l(s,null,{default:r(()=>[...t[13]||(t[13]=[n("strlen()",-1)])]),_:1}),t[15]||(t[15]=n(" function returns the number of characters in a string. ",-1)),l(o,{language:"c",code:w}),t[16]||(t[16]=n(" Output ",-1)),l(d,{output:S})]),_:1}),l(u,null,{default:r(()=>[t[19]||(t[19]=n(" The null character ",-1)),l(s,null,{default:r(()=>[...t[17]||(t[17]=[n("'\\0'",-1)])]),_:1}),t[20]||(t[20]=n(" is not included in the length returned by ",-1)),l(s,null,{default:r(()=>[...t[18]||(t[18]=[n("strlen()",-1)])]),_:1}),t[21]||(t[21]=n(" . ",-1))]),_:1}),l(e,null,{default:r(()=>[...t[22]||(t[22]=[n("Finding the Length of Longer Text",-1)])]),_:1}),l(u,null,{default:r(()=>[l(s,null,{default:r(()=>[...t[23]||(t[23]=[n("strlen()",-1)])]),_:1}),t[24]||(t[24]=n(" can also be used with strings containing spaces and punctuation. ",-1)),l(o,{language:"c",code:v}),t[25]||(t[25]=n(" Output ",-1)),l(d,{output:R})]),_:1}),l(e,null,{default:r(()=>[...t[26]||(t[26]=[n("strcpy()",-1)])]),_:1}),l(u,null,{default:r(()=>[t[28]||(t[28]=n(" The ",-1)),l(s,null,{default:r(()=>[...t[27]||(t[27]=[n("strcpy()",-1)])]),_:1}),t[29]||(t[29]=n(" function copies one string into another character array. ",-1)),l(o,{language:"c",code:P}),t[30]||(t[30]=n(" Output ",-1)),l(d,{output:C})]),_:1}),l(u,null,{default:r(()=>[...t[31]||(t[31]=[n(" The first argument is the destination where the string will be copied. The second argument is the source string. ",-1)])]),_:1}),l(a,{title:"Remember the Order"},{default:r(()=>[t[33]||(t[33]=n(" With ",-1)),l(s,null,{default:r(()=>[...t[32]||(t[32]=[n("strcpy()",-1)])]),_:1}),t[34]||(t[34]=n(" , think ",-1)),t[35]||(t[35]=i("strong",null,"destination first, source second",-1)),t[36]||(t[36]=n(". ",-1))]),_:1}),l(e,null,{default:r(()=>[...t[37]||(t[37]=[n("Replacing a String with strcpy()",-1)])]),_:1}),l(u,null,{default:r(()=>[l(s,null,{default:r(()=>[...t[38]||(t[38]=[n("strcpy()",-1)])]),_:1}),t[39]||(t[39]=n(" can also replace the current contents of a character array. ",-1)),l(o,{language:"c",code:F}),t[40]||(t[40]=n(" Output ",-1)),l(d,{output:H})]),_:1}),l(e,null,{default:r(()=>[...t[41]||(t[41]=[n("strcat()",-1)])]),_:1}),l(u,null,{default:r(()=>[t[43]||(t[43]=n(" The ",-1)),l(s,null,{default:r(()=>[...t[42]||(t[42]=[n("strcat()",-1)])]),_:1}),t[44]||(t[44]=n(" function appends one string to the end of another string. ",-1)),l(o,{language:"c",code:k}),t[45]||(t[45]=n(" Output ",-1)),l(d,{output:E})]),_:1}),l(u,null,{default:r(()=>[...t[46]||(t[46]=[n(" The destination array must have enough space to hold both the original string and the appended string. ",-1)])]),_:1}),l(e,null,{default:r(()=>[...t[47]||(t[47]=[n("Joining Multiple Strings",-1)])]),_:1}),l(u,null,{default:r(()=>[t[49]||(t[49]=n(" Multiple ",-1)),l(s,null,{default:r(()=>[...t[48]||(t[48]=[n("strcat()",-1)])]),_:1}),t[50]||(t[50]=n(" calls can be used to build a longer string. ",-1)),l(o,{language:"c",code:M}),t[51]||(t[51]=n(" Output ",-1)),l(d,{output:D})]),_:1}),l(e,null,{default:r(()=>[...t[52]||(t[52]=[n("strcmp()",-1)])]),_:1}),l(u,null,{default:r(()=>[t[54]||(t[54]=n(" The ",-1)),l(s,null,{default:r(()=>[...t[53]||(t[53]=[n("strcmp()",-1)])]),_:1}),t[55]||(t[55]=n(" function compares two strings. ",-1)),l(o,{language:"c",code:I}),t[56]||(t[56]=n(" Output ",-1)),l(d,{output:L})]),_:1}),l(u,null,{default:r(()=>[t[59]||(t[59]=n(" When ",-1)),l(s,null,{default:r(()=>[...t[57]||(t[57]=[n("strcmp()",-1)])]),_:1}),t[60]||(t[60]=n(" returns ",-1)),l(s,null,{default:r(()=>[...t[58]||(t[58]=[n("0",-1)])]),_:1}),t[61]||(t[61]=n(" , the two strings have the same contents. ",-1))]),_:1}),l(e,null,{default:r(()=>[...t[62]||(t[62]=[n("Comparing Different Strings",-1)])]),_:1}),l(u,null,{default:r(()=>[t[65]||(t[65]=n(" If the strings contain different characters, ",-1)),l(s,null,{default:r(()=>[...t[63]||(t[63]=[n("strcmp()",-1)])]),_:1}),t[66]||(t[66]=n(" returns a value other than ",-1)),l(s,null,{default:r(()=>[...t[64]||(t[64]=[n("0",-1)])]),_:1}),t[67]||(t[67]=n(" . ",-1)),l(o,{language:"c",code:B}),t[68]||(t[68]=n(" Output ",-1)),l(d,{output:j})]),_:1}),l(a,{title:"Important"},{default:r(()=>[t[71]||(t[71]=n(" Do not use ",-1)),l(s,null,{default:r(()=>[...t[69]||(t[69]=[n("==",-1)])]),_:1}),t[72]||(t[72]=n(" to compare the contents of two C strings. Use ",-1)),l(s,null,{default:r(()=>[...t[70]||(t[70]=[n("strcmp()",-1)])]),_:1}),t[73]||(t[73]=n(" instead. ",-1))]),_:1}),l(e,null,{default:r(()=>[...t[74]||(t[74]=[n("Using Multiple String Functions",-1)])]),_:1}),l(u,null,{default:r(()=>[t[75]||(t[75]=n(" String functions can be combined to solve practical problems. ",-1)),l(o,{language:"c",code:q}),t[76]||(t[76]=n(" Output ",-1)),l(d,{output:A})]),_:1}),l(u,null,{default:r(()=>[t[80]||(t[80]=n(" This example uses ",-1)),l(s,null,{default:r(()=>[...t[77]||(t[77]=[n("strcpy()",-1)])]),_:1}),t[81]||(t[81]=n(" to create the full name, ",-1)),l(s,null,{default:r(()=>[...t[78]||(t[78]=[n("strcat()",-1)])]),_:1}),t[82]||(t[82]=n(" to join the parts, and ",-1)),l(s,null,{default:r(()=>[...t[79]||(t[79]=[n("strlen()",-1)])]),_:1}),t[83]||(t[83]=n(" to determine its length. ",-1))]),_:1}),l(a,{title:"The Main Idea"},{default:r(()=>[...t[84]||(t[84]=[n(" String functions save you from manually performing common operations on character arrays. They provide ready-made tools for working with strings. ",-1)])]),_:1}),l(e,null,{default:r(()=>[...t[85]||(t[85]=[n("Summary",-1)])]),_:1}),l(u,null,{default:r(()=>[t[87]||(t[87]=n(" The ",-1)),l(s,null,{default:r(()=>[...t[86]||(t[86]=[n("<string.h>",-1)])]),_:1}),t[88]||(t[88]=n(" header provides standard functions for working with C strings. ",-1))]),_:1}),l(u,null,{default:r(()=>[i("ul",b,[i("li",null,[l(s,null,{default:r(()=>[...t[89]||(t[89]=[n("strlen()",-1)])]),_:1}),t[90]||(t[90]=n(" finds the length of a string. ",-1))]),i("li",null,[l(s,null,{default:r(()=>[...t[91]||(t[91]=[n("strcpy()",-1)])]),_:1}),t[92]||(t[92]=n(" copies one string into another. ",-1))]),i("li",null,[l(s,null,{default:r(()=>[...t[93]||(t[93]=[n("strcat()",-1)])]),_:1}),t[94]||(t[94]=n(" appends one string to another. ",-1))]),i("li",null,[l(s,null,{default:r(()=>[...t[95]||(t[95]=[n("strcmp()",-1)])]),_:1}),t[96]||(t[96]=n(" compares two strings. ",-1))]),t[100]||(t[100]=i("li",null,"The destination array must have enough space for copied or combined strings.",-1)),i("li",null,[t[98]||(t[98]=n("String functions are provided through ",-1)),l(s,null,{default:r(()=>[...t[97]||(t[97]=[n("<string.h>",-1)])]),_:1}),t[99]||(t[99]=n(" . ",-1))])])]),_:1}),t[103]||(t[103]=i("br",null,null,-1)),l(g,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{X as default};

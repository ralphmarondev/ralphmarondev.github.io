import{_ as m}from"./MainLayout.vue_vue_type_style_index_0_lang-BnMcHLIP.js";import{C as l,_ as x}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-BGxgIw6C.js";import{d as b,r as e,z as c,j as y,b as t,i,t as k,e as n,o as w}from"./index-Bk0_C35p.js";const v={class:"text-gray-500 mb-2 text-lg"},h={class:"text-gray-500 mb-2 text-lg"},T={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},C={class:"text-gray-500 mb-2 text-lg"},E={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},S="February 16, 2026",L=b({__name:"InputAndOutputIndex",setup(V){const a=e(`
#include <stdio.h>

int main() {
    // Display a simple message
    printf("Welcome to C programming!\\n");
    return 0;
}
`),o=e(`
#include <stdio.h>

int main() {
    int age = 20;

    // Print an integer variable
    printf("The value of age is %d.\\n", age);

    return 0;
}
`),r=e(`
#include <stdio.h>

int main() {
    char name[100] = "Student";
    int age = 20;

    printf("%s is %d years old.\\n", name, age);

    return 0;
}
`),p=e(`
#include <stdio.h>

int main() {
    fputs("This is printed using fputs()\\n", stdout);
    return 0;
}
`),d=e(`
#include <stdio.h>

int main() {
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("You entered: %d\\n", age);

    return 0;
}
`),u=e(`
#include <stdio.h>

int main() {
    char initial;

    printf("Enter a character: ");
    scanf(" %c", &initial);

    printf("The character entered is: %c\\n", initial);

    return 0;
}
`);e(`
#include <stdio.h>

int main() {
    char word[50];

    printf("Enter a word: ");
    scanf("%s", word);

    printf("You entered: %s\\n", word);

    return 0;
}
`);const g=e(`
#include <stdio.h>

int main() {
    char line[100];

    printf("Enter a full line: ");
    fgets(line, sizeof(line), stdin);

    printf("You entered: %s", line);

    return 0;
}
`),f=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Identifiers",route:"/blog/c-identifiers"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditional-statements"},{title:"Loops",route:"/blog/c-loops"}];return(F,s)=>(w(),c(m,null,{default:y(()=>[s[26]||(s[26]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Input and Output in C",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+k(S)),s[27]||(s[27]=t("p",{class:"text-gray-600 mb-4 text-lg"},[n(" In programming, input and output (I/O) are essential concepts. Input allows a program to receive data from the user or another source, while output allows a program to display information to the user. In C, most I/O operations are handled using functions from the standard input/output library "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"<stdio.h>"),n(". "),t("br"),n(" Among these, the most common functions are: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"printf()"),n(" - for displaying output to the console.")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()"),n(" - for reading input from the user.")])]),n(" Understanding these functions is fundamental because almost every program interacts with the user in some way. This module will provide examples of basic I/O operations, covering text output, variable output, formatted output, and reading input for different data types. ")],-1)),s[28]||(s[28]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 1. Printing Simple Text ",-1)),t("p",v,[s[0]||(s[0]=n(" The simplest form of output is printing a message or text to the console. This is done using the ",-1)),s[1]||(s[1]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"printf()",-1)),s[2]||(s[2]=n(" function. ",-1)),i(l,{code:a.value,language:"c"},null,8,["code"]),s[3]||(s[3]=n(" Explanation: ",-1)),s[4]||(s[4]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[n("The text inside the quotes "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},'" "'),n(" is called a string.")]),t("li",null,[n("The "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"\\n"),n(" at the end is an escape sequence for a newline, which moves the cursor to the next line. ")])],-1))]),s[29]||(s[29]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 2. Printing Variables ",-1)),t("p",h,[s[5]||(s[5]=n(" Variables store data that can be displayed on the screen. To print the value of a variable, format specifiers are used as placeholders. ",-1)),i(l,{code:o.value,language:"c"},null,8,["code"]),s[6]||(s[6]=n(" Explanation: ",-1)),s[7]||(s[7]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" is the format specifier for integer.")]),t("li",null,[n("The variable "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"age"),n(" replaces the placeholder "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" in the output. ")])],-1))]),s[30]||(s[30]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 3. Printing Variables with Text ",-1)),t("p",T,[s[8]||(s[8]=n(" Combining variables with descriptive text makes output more readable. ",-1)),i(l,{code:r.value,language:"c"},null,8,["code"]),s[9]||(s[9]=n(" Explanation: ",-1)),s[10]||(s[10]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%s"),n(" is the format specifier for strings.")]),t("li",null,"Format specifiers allow multiple variables of different types to be displayed in a single message.")],-1))]),s[31]||(s[31]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 4. Using "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()"),n(" for Strings ")],-1)),t("p",I,[s[11]||(s[11]=n(" The ",-1)),s[12]||(s[12]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()",-1)),s[13]||(s[13]=n(" function can print a string to the console without formatting. ",-1)),i(l,{code:p.value,language:"c"},null,8,["code"]),s[14]||(s[14]=n(" Explanation: ",-1)),s[15]||(s[15]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"stdout"),n(" refers to the standard output (usually the console) ")]),t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()"),n(" is useful when formatting is not required.")])],-1))]),s[32]||(s[32]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 5. Reading an Integer Using "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()")],-1)),t("p",C,[s[16]||(s[16]=n(" Input allows the program to accept data from the user. To read an integer: ",-1)),i(l,{code:d.value,language:"c"},null,8,["code"]),s[17]||(s[17]=n(" Explanation: ",-1)),s[18]||(s[18]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" indicates that an integer is expected.")]),t("li",null,[n("The "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"&"),n(" operator provides the memory address of the variable, so "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()"),n(" knows where to store the input. ")])],-1))]),s[33]||(s[33]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 6. Reading a Character Using "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()")],-1)),t("p",E,[i(l,{code:u.value,language:"c"},null,8,["code"]),s[19]||(s[19]=n(" Explanation: ",-1)),s[20]||(s[20]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%s"),n(" reads a string until the first space.")]),t("li",null,"It cannot read sentences or words with spaces.")],-1))]),s[34]||(s[34]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 8. Reading a Full Line Using "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()")],-1)),t("p",U,[s[21]||(s[21]=n(" To read multiple words or full lines, ",-1)),s[22]||(s[22]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()",-1)),s[23]||(s[23]=n(" is preferred. ",-1)),i(l,{code:g.value,language:"c"},null,8,["code"]),s[24]||(s[24]=n(" Explanation: ",-1)),s[25]||(s[25]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()"),n(" reads up to "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"n - 1"),n(" characters to prevent overflow. ")]),t("li",null,"It includes spaces, making it suitable for full names, sentences, or phrases.")],-1))]),s[35]||(s[35]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),s[36]||(s[36]=t("p",{class:"text-gray-500 mb-2 text-lg"},[t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[n("Output functions: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"printf()"),n(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()")]),t("li",null,[n("Input functions: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()"),n(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()")]),t("li",null,[n("Format specifiers: "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" (integer), "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%c"),n(" (character), "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"%s"),n(" (string) ")]),t("li",null,[n(" Tips: "),t("ul",{class:"list-disc list-inside space-y-1 ml-6"},[t("li",null,"Always handle spaces and newlines carefully."),t("li",null,[n("Use "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()"),n(" for reading multiple words to avoid input issues. ")])])])])],-1)),i(x,{links:f})]),_:1}))}});export{L as default};

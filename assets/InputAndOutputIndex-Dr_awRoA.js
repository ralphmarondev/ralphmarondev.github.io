import{_ as m}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BX7JLS4I.js";import{C as i}from"./CodeBlock-Du5Y_F6b.js";import{u as x}from"./cProgramming-CqS8EQI1.js";import{d as b,r as e,p as c,l as y,m as k,o as v,a as s,t as w,b as n,k as l}from"./index-BPX1bKrC.js";const h={class:"text-gray-500 mb-2 text-lg"},T={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},C={class:"text-gray-500 mb-2 text-lg"},E={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},F="February 16, 2026",L=b({__name:"InputAndOutputIndex",setup(V){const a=x(),r=e(`
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
`),p=e(`
#include <stdio.h>

int main() {
    char name[100] = "Student";
    int age = 20;

    printf("%s is %d years old.\\n", name, age);

    return 0;
}
`),d=e(`
#include <stdio.h>

int main() {
    fputs("This is printed using fputs()\\n", stdout);
    return 0;
}
`),u=e(`
#include <stdio.h>

int main() {
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("You entered: %d\\n", age);

    return 0;
}
`),g=e(`
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
`);const f=e(`
#include <stdio.h>

int main() {
    char line[100];

    printf("Enter a full line: ");
    fgets(line, sizeof(line), stdin);

    printf("You entered: %s", line);

    return 0;
}
`);return(O,t)=>(v(),c(m,{title:"C Programming",navigation:k(a).sections},{default:y(()=>[t[26]||(t[26]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Input and Output in C",-1)),s("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+w(F)),t[27]||(t[27]=s("p",{class:"text-gray-600 mb-4 text-lg"},[n(" In programming, input and output (I/O) are essential concepts. Input allows a program to receive data from the user or another source, while output allows a program to display information to the user. In C, most I/O operations are handled using functions from the standard input/output library "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"<stdio.h>"),n(". "),s("br"),n(" Among these, the most common functions are: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"printf()"),n(" - for displaying output to the console.")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()"),n(" - for reading input from the user.")])]),n(" Understanding these functions is fundamental because almost every program interacts with the user in some way. This module will provide examples of basic I/O operations, covering text output, variable output, formatted output, and reading input for different data types. ")],-1)),t[28]||(t[28]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 1. Printing Simple Text ",-1)),s("p",h,[t[0]||(t[0]=n(" The simplest form of output is printing a message or text to the console. This is done using the ",-1)),t[1]||(t[1]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"printf()",-1)),t[2]||(t[2]=n(" function. ",-1)),l(i,{code:r.value,language:"c"},null,8,["code"]),t[3]||(t[3]=n(" Explanation: ",-1)),t[4]||(t[4]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[n("The text inside the quotes "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},'" "'),n(" is called a string.")]),s("li",null,[n("The "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"\\n"),n(" at the end is an escape sequence for a newline, which moves the cursor to the next line. ")])],-1))]),t[29]||(t[29]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 2. Printing Variables ",-1)),s("p",T,[t[5]||(t[5]=n(" Variables store data that can be displayed on the screen. To print the value of a variable, format specifiers are used as placeholders. ",-1)),l(i,{code:o.value,language:"c"},null,8,["code"]),t[6]||(t[6]=n(" Explanation: ",-1)),t[7]||(t[7]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" is the format specifier for integer.")]),s("li",null,[n("The variable "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"age"),n(" replaces the placeholder "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" in the output. ")])],-1))]),t[30]||(t[30]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 3. Printing Variables with Text ",-1)),s("p",I,[t[8]||(t[8]=n(" Combining variables with descriptive text makes output more readable. ",-1)),l(i,{code:p.value,language:"c"},null,8,["code"]),t[9]||(t[9]=n(" Explanation: ",-1)),t[10]||(t[10]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%s"),n(" is the format specifier for strings.")]),s("li",null,"Format specifiers allow multiple variables of different types to be displayed in a single message.")],-1))]),t[31]||(t[31]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 4. Using "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()"),n(" for Strings ")],-1)),s("p",C,[t[11]||(t[11]=n(" The ",-1)),t[12]||(t[12]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()",-1)),t[13]||(t[13]=n(" function can print a string to the console without formatting. ",-1)),l(i,{code:d.value,language:"c"},null,8,["code"]),t[14]||(t[14]=n(" Explanation: ",-1)),t[15]||(t[15]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"stdout"),n(" refers to the standard output (usually the console) ")]),s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()"),n(" is useful when formatting is not required.")])],-1))]),t[32]||(t[32]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 5. Reading an Integer Using "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()")],-1)),s("p",E,[t[16]||(t[16]=n(" Input allows the program to accept data from the user. To read an integer: ",-1)),l(i,{code:u.value,language:"c"},null,8,["code"]),t[17]||(t[17]=n(" Explanation: ",-1)),t[18]||(t[18]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" indicates that an integer is expected.")]),s("li",null,[n("The "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"&"),n(" operator provides the memory address of the variable, so "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()"),n(" knows where to store the input. ")])],-1))]),t[33]||(t[33]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 6. Reading a Character Using "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()")],-1)),s("p",U,[l(i,{code:g.value,language:"c"},null,8,["code"]),t[19]||(t[19]=n(" Explanation: ",-1)),t[20]||(t[20]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%s"),n(" reads a string until the first space.")]),s("li",null,"It cannot read sentences or words with spaces.")],-1))]),t[34]||(t[34]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},[n(" 8. Reading a Full Line Using "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()")],-1)),s("p",S,[t[21]||(t[21]=n(" To read multiple words or full lines, ",-1)),t[22]||(t[22]=s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()",-1)),t[23]||(t[23]=n(" is preferred. ",-1)),l(i,{code:f.value,language:"c"},null,8,["code"]),t[24]||(t[24]=n(" Explanation: ",-1)),t[25]||(t[25]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()"),n(" reads up to "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"n - 1"),n(" characters to prevent overflow. ")]),s("li",null,"It includes spaces, making it suitable for full names, sentences, or phrases.")],-1))]),t[35]||(t[35]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[36]||(t[36]=s("p",{class:"text-gray-500 mb-2 text-lg"},[s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,[n("Output functions: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"printf()"),n(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fputs()")]),s("li",null,[n("Input functions: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"scanf()"),n(", "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()")]),s("li",null,[n("Format specifiers: "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%d"),n(" (integer), "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%c"),n(" (character), "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"%s"),n(" (string) ")]),s("li",null,[n(" Tips: "),s("ul",{class:"list-disc list-inside space-y-1 ml-6"},[s("li",null,"Always handle spaces and newlines carefully."),s("li",null,[n("Use "),s("span",{class:"bg-pink-50 px-2 rounded-lg"},"fgets()"),n(" for reading multiple words to avoid input issues. ")])])])])],-1))]),_:1},8,["navigation"]))}});export{L as default};

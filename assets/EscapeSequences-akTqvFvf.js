import{_ as a}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{T as i,a as o,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as e,C as r}from"./CodeBlock-Ayh7J4dk.js";import{O as d}from"./OutputBlock-CjsXuZMe.js";import{d as m,h as g,i as u,o as b,a as s,q as n,g as l}from"./index-DSMoD1xp.js";const q={class:"max-w-4xl mx-auto"},k={class:"list-disc pl-8 space-y-2"},y={class:"list-disc pl-8 mt-3 space-y-2"},w=`
#include <stdio.h>

int main() {
    printf("Hello!\\nWelcome to C programming.");

    return 0;
}
`,x=`
#include <stdio.h>

int main() {
    printf("First line\\n");
    printf("Second line\\n");
    printf("Third line");

    return 0;
}
`,T=`
#include <stdio.h>

int main() {
    printf("Name:\\tFern");

    return 0;
}
`,C=`
#include <stdio.h>

int main() {
    printf("She said, \\"Hello!\\"");

    return 0;
}
`,v=`
#include <stdio.h>

int main() {
    printf("This is a single quote: \\'");

    return 0;
}
`,S=`
#include <stdio.h>

int main() {
    printf("C:\\\\Program Files\\\\Academia");

    return 0;
}
`,O=`
#include <stdio.h>

int main() {
    printf("Helloo\\b!");

    return 0;
}
`,E=`
#include <stdio.h>

int main() {
    printf("Hello\\rWorld");
    return 0;
}
`,F=`
#include <stdio.h>

int main() {
    printf("Name:\\tFern\\n");
    printf("Course:\\tC Programming\\n");
    printf("School:\\tCSU");
    return 0;
}
`,L=m({__name:"EscapeSequences",setup(N){return(B,t)=>(b(),g(p,null,{default:u(()=>[s("div",q,[t[101]||(t[101]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:a,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[102]||(t[102]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Escape Sequences ")],-1)),n(i,null,{default:u(()=>[t[1]||(t[1]=l(" When displaying output, we sometimes need to include special characters or control how the text appears on the screen. In C, this can be done using ",-1)),n(e,null,{default:u(()=>[...t[0]||(t[0]=[l("escape sequences",-1)])]),_:1}),t[2]||(t[2]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[t[4]||(t[4]=l(" An escape sequence is a combination of characters that begins with a backslash ",-1)),n(e,null,{default:u(()=>[...t[3]||(t[3]=[l("\\",-1)])]),_:1}),t[5]||(t[5]=l(" and represents a special character or action. ",-1))]),_:1}),n(i,null,{default:u(()=>[t[7]||(t[7]=l(" Escape sequences are commonly used inside the strings passed to ",-1)),n(e,null,{default:u(()=>[...t[6]||(t[6]=[l("printf()",-1)])]),_:1}),t[8]||(t[8]=l(" . ",-1))]),_:1}),n(o,null,{default:u(()=>[...t[9]||(t[9]=[l("New Line: \\n",-1)])]),_:1}),n(i,null,{default:u(()=>[t[11]||(t[11]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[10]||(t[10]=[l("\\n",-1)])]),_:1}),t[12]||(t[12]=l(" escape sequence moves the output to the beginning of the next line. ",-1)),n(r,{code:w,language:"c"}),t[13]||(t[13]=l(" Output ",-1)),n(d,{output:`Hello!
Welcome to C programming.`})]),_:1}),n(i,null,{default:u(()=>[t[15]||(t[15]=l(" You can also use ",-1)),n(e,null,{default:u(()=>[...t[14]||(t[14]=[l("\\n",-1)])]),_:1}),t[16]||(t[16]=l(" multiple times to create several lines of output. ",-1)),n(r,{code:x,language:"c"}),t[17]||(t[17]=l(" Output ",-1)),n(d,{output:`First line
Second line
Third line`})]),_:1}),n(o,null,{default:u(()=>[...t[18]||(t[18]=[l("Horizontal Tab: \\t",-1)])]),_:1}),n(i,null,{default:u(()=>[t[20]||(t[20]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[19]||(t[19]=[l("\\t",-1)])]),_:1}),t[21]||(t[21]=l(" escape sequence inserts a horizontal tab. It is useful for creating spacing between pieces of output. ",-1)),n(r,{code:T,language:"c"}),t[22]||(t[22]=l(" Output ",-1)),n(d,{output:"Name:	Fern"})]),_:1}),n(i,null,{default:u(()=>[...t[23]||(t[23]=[l(" Tabs can be especially useful when displaying information in columns. ",-1)])]),_:1}),n(o,null,{default:u(()=>[...t[24]||(t[24]=[l('Double Quote: \\"',-1)])]),_:1}),n(i,null,{default:u(()=>[t[26]||(t[26]=l(" Double quotation marks normally indicate the beginning and end of a string. If you want to display a quotation mark inside a string, you can use ",-1)),n(e,null,{default:u(()=>[...t[25]||(t[25]=[l('\\"',-1)])]),_:1}),t[27]||(t[27]=l(" . ",-1)),n(r,{code:C,language:"c"}),t[28]||(t[28]=l(" Output ",-1)),n(d,{output:'She said, "Hello!"'})]),_:1}),n(i,null,{default:u(()=>[...t[29]||(t[29]=[l(" The backslash tells C that the quotation mark is part of the text instead of marking the end of the string. ",-1)])]),_:1}),n(o,null,{default:u(()=>[...t[30]||(t[30]=[l("Single Quote: \\'",-1)])]),_:1}),n(i,null,{default:u(()=>[t[32]||(t[32]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[31]||(t[31]=[l("\\'",-1)])]),_:1}),t[33]||(t[33]=l(" escape sequence represents a single quotation mark. ",-1)),n(r,{code:v,language:"c"}),t[34]||(t[34]=l(" Output ",-1)),n(d,{output:"This is a single quote: '"})]),_:1}),n(o,null,{default:u(()=>[...t[35]||(t[35]=[l("Backslash: \\\\",-1)])]),_:1}),n(i,null,{default:u(()=>[t[37]||(t[37]=l(" Since the backslash is used to begin an escape sequence, a backslash itself can be displayed using ",-1)),n(e,null,{default:u(()=>[...t[36]||(t[36]=[l("\\\\",-1)])]),_:1}),t[38]||(t[38]=l(" . ",-1)),n(r,{code:S,language:"c"}),t[39]||(t[39]=l(" Output ",-1)),n(d,{output:"C:\\Program Files\\Academia"})]),_:1}),n(o,null,{default:u(()=>[...t[40]||(t[40]=[l("Backspace: \\b",-1)])]),_:1}),n(i,null,{default:u(()=>[t[42]||(t[42]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[41]||(t[41]=[l("\\b",-1)])]),_:1}),t[43]||(t[43]=l(" escape sequence moves the cursor one position backward. ",-1)),n(r,{code:O,language:"c"}),t[44]||(t[44]=l(" Output ",-1)),n(d,{output:"Hell!"})]),_:1}),n(i,null,{default:u(()=>[t[46]||(t[46]=l(" The exact visual result of ",-1)),n(e,null,{default:u(()=>[...t[45]||(t[45]=[l("\\b",-1)])]),_:1}),t[47]||(t[47]=l(" can depend on the environment where the program is executed. It is therefore less commonly used for normal formatted output. ",-1))]),_:1}),n(o,null,{default:u(()=>[...t[48]||(t[48]=[l("Carriage Return: \\r",-1)])]),_:1}),n(i,null,{default:u(()=>[t[50]||(t[50]=l(" The ",-1)),n(e,null,{default:u(()=>[...t[49]||(t[49]=[l("\\r",-1)])]),_:1}),t[51]||(t[51]=l(" escape sequence moves the cursor to the beginning of the current line without moving to a new line. ",-1)),n(r,{code:E,language:"c"})]),_:1}),n(i,null,{default:u(()=>[...t[52]||(t[52]=[l(" Because the cursor returns to the beginning of the line, later output can overwrite characters that were already displayed. The exact result can depend on the environment. ",-1)])]),_:1}),n(o,null,{default:u(()=>[...t[53]||(t[53]=[l("Combining Escape Sequences",-1)])]),_:1}),n(i,null,{default:u(()=>[t[54]||(t[54]=l(" Multiple escape sequences can be used in the same program to create organized output. ",-1)),n(r,{code:F,language:"c"}),t[55]||(t[55]=l(" Output ",-1)),n(d,{output:`Name:	Fern
Course:	C Programming
School:	CSU`})]),_:1}),n(o,null,{default:u(()=>[...t[56]||(t[56]=[l("Common Escape Sequences",-1)])]),_:1}),n(i,null,{default:u(()=>[...t[57]||(t[57]=[l(" Some commonly used escape sequences in C are: ",-1)])]),_:1}),n(i,null,{default:u(()=>[s("ul",k,[s("li",null,[n(e,null,{default:u(()=>[...t[58]||(t[58]=[l("\\n",-1)])]),_:1}),t[59]||(t[59]=l(" — new line ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[60]||(t[60]=[l("\\t",-1)])]),_:1}),t[61]||(t[61]=l(" — horizontal tab ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[62]||(t[62]=[l('\\"',-1)])]),_:1}),t[63]||(t[63]=l(" — double quotation mark ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[64]||(t[64]=[l("\\'",-1)])]),_:1}),t[65]||(t[65]=l(" — single quotation mark ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[66]||(t[66]=[l("\\\\",-1)])]),_:1}),t[67]||(t[67]=l(" — backslash ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[68]||(t[68]=[l("\\b",-1)])]),_:1}),t[69]||(t[69]=l(" — backspace ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[70]||(t[70]=[l("\\r",-1)])]),_:1}),t[71]||(t[71]=l(" — carriage return ",-1))])])]),_:1}),n(o,null,{default:u(()=>[...t[72]||(t[72]=[l("Why Use Escape Sequences?",-1)])]),_:1}),n(i,null,{default:u(()=>[...t[73]||(t[73]=[l(" Escape sequences give us more control over how text is displayed. Instead of displaying everything as one continuous line, we can organize output, add spacing, and include special characters. ",-1)])]),_:1}),n(i,null,{default:u(()=>[t[77]||(t[77]=l(" For example, ",-1)),n(e,null,{default:u(()=>[...t[74]||(t[74]=[l("\\n",-1)])]),_:1}),t[78]||(t[78]=l(" can separate lines, ",-1)),n(e,null,{default:u(()=>[...t[75]||(t[75]=[l("\\t",-1)])]),_:1}),t[79]||(t[79]=l(" can create spacing, and ",-1)),n(e,null,{default:u(()=>[...t[76]||(t[76]=[l('\\"',-1)])]),_:1}),t[80]||(t[80]=l(" allows quotation marks to appear inside a string. ",-1))]),_:1}),n(o,null,{default:u(()=>[...t[81]||(t[81]=[l("Summary",-1)])]),_:1}),n(i,null,{default:u(()=>[t[83]||(t[83]=l(" Escape sequences are special character combinations that begin with a backslash. They are commonly used inside strings passed to ",-1)),n(e,null,{default:u(()=>[...t[82]||(t[82]=[l("printf()",-1)])]),_:1}),t[84]||(t[84]=l(" . ",-1))]),_:1}),n(i,null,{default:u(()=>[t[100]||(t[100]=l(" In this topic, you learned that: ",-1)),s("ul",y,[t[99]||(t[99]=s("li",null," Escape sequences begin with a backslash. ",-1)),s("li",null,[n(e,null,{default:u(()=>[...t[85]||(t[85]=[l("\\n",-1)])]),_:1}),t[86]||(t[86]=l(" moves the output to a new line. ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[87]||(t[87]=[l("\\t",-1)])]),_:1}),t[88]||(t[88]=l(" inserts a horizontal tab. ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[89]||(t[89]=[l('\\"',-1)])]),_:1}),t[90]||(t[90]=l(" displays a double quotation mark. ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[91]||(t[91]=[l("\\'",-1)])]),_:1}),t[92]||(t[92]=l(" displays a single quotation mark. ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[93]||(t[93]=[l("\\\\",-1)])]),_:1}),t[94]||(t[94]=l(" displays a backslash. ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[95]||(t[95]=[l("\\b",-1)])]),_:1}),t[96]||(t[96]=l(" moves the cursor backward. ",-1))]),s("li",null,[n(e,null,{default:u(()=>[...t[97]||(t[97]=[l("\\r",-1)])]),_:1}),t[98]||(t[98]=l(" returns the cursor to the beginning of the current line. ",-1))])])]),_:1}),t[103]||(t[103]=s("br",null,null,-1)),n(f,{to:"/academia/student/classes/c-input-operations"})])]),_:1}))}});export{L as default};

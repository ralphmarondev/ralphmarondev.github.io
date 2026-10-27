import{_ as r}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{T as f,a as o,_ as a}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{T as i}from"./TopicTerm-Dw7PNqTI.js";import{C as s}from"./CodeBlock-BgBdQh_Q.js";import{O as d}from"./OutputBlock-CUGk6WXg.js";import{_ as m}from"./FernInfo.vue_vue_type_script_setup_true_lang-BEAyXMsa.js";import{d as g,h as w,i as n,o as x,a as u,q as e,g as l}from"./index-BX2gTDPs.js";const L={class:"max-w-4xl mx-auto"},C={class:"list-disc pl-6 space-y-2"},F=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("message.txt", "w");

    if (file != NULL) {
        fprintf(file, "Hello, Academia!");
        fclose(file);
        printf("File written successfully.");
    }
    return 0;
}`,T="File written successfully.",b=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("student.txt", "w");

    if (file != NULL) {
        fprintf(file, "Name: Alice\\n");
        fprintf(file, "Age: 18\\n");
        fprintf(file, "Grade: 92.5\\n");
        fclose(file);
        printf("Student information saved.");
    }
    return 0;
}`,y="Student information saved.",v=`
#include <stdio.h>

int main() {
    FILE *file;
    char name[] = "Alice";
    int age = 18;
    float grade = 92.5;

    file = fopen("student.txt", "w");

    if (file != NULL) {
        fprintf(file, "Name: %s\\n", name);
        fprintf(file, "Age: %d\\n", age);
        fprintf(file, "Grade: %.1f\\n", grade);
        fclose(file);
        printf("Data saved successfully.");
    }
    return 0;
}`,N="Data saved successfully.",O=`
#include <stdio.h>

int main() {
    FILE *file;

    file = fopen("message.txt", "a");

    if (file != NULL) {
        fprintf(file, "\\nWelcome to C programming.");
        fclose(file);
        printf("Data appended successfully.");
    }
    return 0;
}`,k="Data appended successfully.",A=`
#include <stdio.h>

int main() {
    FILE *file;

    file = fopen("message.txt", "w");

    if (file == NULL) {
        printf("Unable to open the file.");
    } else {
        fprintf(file, "File handling in C.");
        fclose(file);
        printf("Data written successfully.");
    }
    return 0;
}`,I="Data written successfully.",U=`
FILE *file = fopen("data.txt", "w");

if (file != NULL) {
	fprintf(file, "Hello, C!");
	fclose(file);
}`,E=`
FILE *file = fopen("data.txt", "w");

if (file != NULL) {
	fprintf(file, "Some data");
	fclose(file);
}`,G=g({__name:"WritingFiles",setup(D){return(W,t)=>(x(),w(p,null,{default:n(()=>[u("div",L,[t[73]||(t[73]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:r,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[74]||(t[74]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Writing Files ")],-1)),e(f,null,{default:n(()=>[...t[0]||(t[0]=[l(" After opening a file in write or append mode, a C program can store data inside the file. ",-1)])]),_:1}),e(f,null,{default:n(()=>[t[2]||(t[2]=l(" The ",-1)),e(i,null,{default:n(()=>[...t[1]||(t[1]=[l("fprintf()",-1)])]),_:1}),t[3]||(t[3]=l(" function is commonly used to write formatted text and values to a file. ",-1))]),_:1}),e(o,null,{default:n(()=>[...t[4]||(t[4]=[l("Writing Text to a File",-1)])]),_:1}),e(f,null,{default:n(()=>[t[7]||(t[7]=l(" A file can be opened using the ",-1)),e(i,null,{default:n(()=>[...t[5]||(t[5]=[l('"w"',-1)])]),_:1}),t[8]||(t[8]=l(" mode and text can then be written using ",-1)),e(i,null,{default:n(()=>[...t[6]||(t[6]=[l("fprintf()",-1)])]),_:1}),t[9]||(t[9]=l(" . ",-1)),e(s,{language:"c",code:F}),t[10]||(t[10]=l(" Output ",-1)),e(d,{output:T})]),_:1}),e(f,null,{default:n(()=>[t[13]||(t[13]=l(" The first argument of ",-1)),e(i,null,{default:n(()=>[...t[11]||(t[11]=[l("fprintf()",-1)])]),_:1}),t[14]||(t[14]=l(" is the ",-1)),e(i,null,{default:n(()=>[...t[12]||(t[12]=[l("FILE",-1)])]),_:1}),t[15]||(t[15]=l(" pointer. The text that follows is written into the file. ",-1))]),_:1}),e(m,{title:"Remember"},{default:n(()=>[...t[16]||(t[16]=[l(' The "w" mode creates a file if it does not exist. If the file already exists, its previous contents are replaced. ',-1)])]),_:1}),e(o,null,{default:n(()=>[...t[17]||(t[17]=[l("Writing Multiple Lines",-1)])]),_:1}),e(f,null,{default:n(()=>[t[19]||(t[19]=l(" Multiple calls to ",-1)),e(i,null,{default:n(()=>[...t[18]||(t[18]=[l("fprintf()",-1)])]),_:1}),t[20]||(t[20]=l(" can be used to write multiple lines to a file. ",-1)),e(s,{language:"c",code:b}),t[21]||(t[21]=l(" Output ",-1)),e(d,{output:y})]),_:1}),e(f,null,{default:n(()=>[t[23]||(t[23]=l(" The ",-1)),e(i,null,{default:n(()=>[...t[22]||(t[22]=[l("\\n",-1)])]),_:1}),t[24]||(t[24]=l(" escape sequence moves the file position to the next line. ",-1))]),_:1}),e(o,null,{default:n(()=>[...t[25]||(t[25]=[l("Writing Formatted Data",-1)])]),_:1}),e(f,null,{default:n(()=>[t[28]||(t[28]=l(" Just like ",-1)),e(i,null,{default:n(()=>[...t[26]||(t[26]=[l("printf()",-1)])]),_:1}),t[29]||(t[29]=l(" , ",-1)),e(i,null,{default:n(()=>[...t[27]||(t[27]=[l("fprintf()",-1)])]),_:1}),t[30]||(t[30]=l(" can use format specifiers to write different types of data. ",-1)),e(s,{language:"c",code:v})]),_:1}),e(f,null,{default:n(()=>[t[34]||(t[34]=l(" The format specifier determines how each value is written to the file. Here, ",-1)),e(i,null,{default:n(()=>[...t[31]||(t[31]=[l("%s",-1)])]),_:1}),t[35]||(t[35]=l(" is used for a string, ",-1)),e(i,null,{default:n(()=>[...t[32]||(t[32]=[l("%d",-1)])]),_:1}),t[36]||(t[36]=l(" for an integer, and ",-1)),e(i,null,{default:n(()=>[...t[33]||(t[33]=[l("%.1f",-1)])]),_:1}),t[37]||(t[37]=l(" for a floating-point value. ",-1)),e(d,{output:N})]),_:1}),e(o,null,{default:n(()=>[...t[38]||(t[38]=[l("Appending Data",-1)])]),_:1}),e(f,null,{default:n(()=>[t[40]||(t[40]=l(" The ",-1)),e(i,null,{default:n(()=>[...t[39]||(t[39]=[l('"a"',-1)])]),_:1}),t[41]||(t[41]=l(" mode can be used when new data should be added to the end of an existing file. ",-1)),e(s,{language:"c",code:O}),t[42]||(t[42]=l(" Output ",-1)),e(d,{output:k})]),_:1}),e(f,null,{default:n(()=>[t[45]||(t[45]=l(" Unlike ",-1)),e(i,null,{default:n(()=>[...t[43]||(t[43]=[l('"w"',-1)])]),_:1}),t[46]||(t[46]=l(" , the ",-1)),e(i,null,{default:n(()=>[...t[44]||(t[44]=[l('"a"',-1)])]),_:1}),t[47]||(t[47]=l(" mode keeps the existing contents and adds new data after them. ",-1))]),_:1}),e(o,null,{default:n(()=>[...t[48]||(t[48]=[l("Checking the File",-1)])]),_:1}),e(f,null,{default:n(()=>[t[50]||(t[50]=l(" As with other file operations, the return value of ",-1)),e(i,null,{default:n(()=>[...t[49]||(t[49]=[l("fopen()",-1)])]),_:1}),t[51]||(t[51]=l(" should be checked before writing. ",-1)),e(s,{language:"c",code:A}),t[52]||(t[52]=l(" Output ",-1)),e(d,{output:I})]),_:1}),e(f,null,{default:n(()=>[t[55]||(t[55]=l(" If ",-1)),e(i,null,{default:n(()=>[...t[53]||(t[53]=[l("fopen()",-1)])]),_:1}),t[56]||(t[56]=l(" returns ",-1)),e(i,null,{default:n(()=>[...t[54]||(t[54]=[l("NULL",-1)])]),_:1}),t[57]||(t[57]=l(" , the program should not attempt to write to the file. ",-1))]),_:1}),e(o,null,{default:n(()=>[...t[58]||(t[58]=[l("Writing and Closing",-1)])]),_:1}),e(f,null,{default:n(()=>[t[60]||(t[60]=l(" After writing the required data, the file should be closed using ",-1)),e(i,null,{default:n(()=>[...t[59]||(t[59]=[l("fclose()",-1)])]),_:1}),t[61]||(t[61]=l(" . ",-1)),e(s,{language:"c",code:U})]),_:1}),e(f,null,{default:n(()=>[...t[62]||(t[62]=[l(" Closing the file completes the operation and releases the resources associated with the file stream. ",-1)])]),_:1}),e(o,null,{default:n(()=>[...t[63]||(t[63]=[l("Summary",-1)])]),_:1}),e(f,null,{default:n(()=>[...t[64]||(t[64]=[l(" Writing files allows a C program to store information so that it can be accessed later. ",-1)])]),_:1}),e(f,null,{default:n(()=>[t[70]||(t[70]=l(" The ",-1)),e(i,null,{default:n(()=>[...t[65]||(t[65]=[l("fprintf()",-1)])]),_:1}),t[71]||(t[71]=l(" function can write text and formatted data, while the file mode determines how existing contents are handled. ",-1)),u("ul",C,[u("li",null,[e(i,null,{default:n(()=>[...t[66]||(t[66]=[l("w",-1)])]),_:1}),t[67]||(t[67]=l(" → write and replace existing contents ",-1))]),u("li",null,[e(i,null,{default:n(()=>[...t[68]||(t[68]=[l("a",-1)])]),_:1}),t[69]||(t[69]=l(" → append to existing contents ",-1))])])]),_:1}),e(f,null,{default:n(()=>[t[72]||(t[72]=l(" A typical writing operation follows this sequence: ",-1)),e(s,{language:"c",code:E})]),_:1}),t[75]||(t[75]=u("br",null,null,-1)),e(a,{to:"/academia/student/classes/c",text:"Finish"})])]),_:1}))}});export{G as default};

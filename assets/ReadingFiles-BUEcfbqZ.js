import{_ as d}from"./logo-C9ImmdpX.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as r,a as o,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as i,C as u}from"./CodeBlock-CSdrTDFH.js";import{O as s}from"./OutputBlock-BPpR2jjy.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-TzdiyR-Q.js";import{d as g,h as x,i as n,o as L,a as f,q as l,g as e}from"./index-D3WOnH5O.js";const C={class:"max-w-4xl mx-auto"},T={class:"list-disc pl-6 space-y-2"},b=`
#include <stdio.h>

int main() {
    FILE *file;
    char character;
    file = fopen("message.txt", "r");

    if (file != NULL) {
        character = fgetc(file);
        printf("Character: %c\\n", character);
        fclose(file);
    }
    return 0;
}`,w="Character: H",N=`
#include <stdio.h>

int main() {
    FILE *file;
    char text[100];
    file = fopen("message.txt", "r");

    if (file != NULL) {
        fgets(text, sizeof(text), file);
        printf("Content: %s", text);
        fclose(file);
    }
    return 0;
}`,y="Content: Hello, Academia!",F=`
#include <stdio.h>

int main() {
    FILE *file;
    char text[100];
    file = fopen("message.txt", "r");

    if (file != NULL) {
        while (fgets(text, sizeof(text), file) != NULL) {
            printf("%s", text);
        }
        fclose(file);
    }
    return 0;
}`,U=`
Hello, Academia!
Welcome to C programming.
File handling is useful.`,k=`
#include <stdio.h>

int main() {
    FILE *file;
    char name[50];
    int age;

    file = fopen("student.txt", "r");

    if (file != NULL) {
        fscanf(file, "%s %d", name, &age);
        printf("Name: %s\\n", name);
        printf("Age: %d\\n", age);
        fclose(file);
    }
    return 0;
}`,v=`
Name: Alice
Age: 18`,I=`
#include <stdio.h>

int main() {
    FILE *file;
    char text[100];

    file = fopen("message.txt", "r");

    if (file == NULL) {
        printf("Unable to open the file.");
    } else {
        while (fgets(text, sizeof(text), file) != NULL) {
            printf("%s", text);
        }
        fclose(file);
    }
    return 0;
}`,O=`
Hello, Academia!
Welcome to C programming.
File handling is useful.`,$=g({__name:"ReadingFiles",setup(R){return(A,t)=>(L(),x(a,null,{default:n(()=>[f("div",C,[t[64]||(t[64]=f("div",{class:"w-full flex justify-center mb-6"},[f("img",{src:d,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[65]||(t[65]=f("div",{class:"text-center mb-4"},[f("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),f("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Reading Files ")],-1)),l(r,null,{default:n(()=>[...t[0]||(t[0]=[e(" After opening a file in read mode, a C program can retrieve the data stored inside it. ",-1)])]),_:1}),l(r,null,{default:n(()=>[t[5]||(t[5]=e(" The ",-1)),l(i,null,{default:n(()=>[...t[1]||(t[1]=[e("stdio.h",-1)])]),_:1}),t[6]||(t[6]=e(" library provides several functions for reading data from a file, including ",-1)),l(i,null,{default:n(()=>[...t[2]||(t[2]=[e("fgetc()",-1)])]),_:1}),t[7]||(t[7]=e(" , ",-1)),l(i,null,{default:n(()=>[...t[3]||(t[3]=[e("fgets()",-1)])]),_:1}),t[8]||(t[8]=e(" , and ",-1)),l(i,null,{default:n(()=>[...t[4]||(t[4]=[e("fscanf()",-1)])]),_:1}),t[9]||(t[9]=e(" . ",-1))]),_:1}),l(o,null,{default:n(()=>[...t[10]||(t[10]=[e("Reading a Character",-1)])]),_:1}),l(r,null,{default:n(()=>[t[12]||(t[12]=e(" The ",-1)),l(i,null,{default:n(()=>[...t[11]||(t[11]=[e("fgetc()",-1)])]),_:1}),t[13]||(t[13]=e(" function reads one character from a file. ",-1)),l(u,{language:"c",code:b})]),_:1}),l(r,null,{default:n(()=>[t[16]||(t[16]=e(" In this example, ",-1)),l(i,null,{default:n(()=>[...t[14]||(t[14]=[e("fgetc()",-1)])]),_:1}),t[17]||(t[17]=e(" reads the next character from the file and stores it in ",-1)),l(i,null,{default:n(()=>[...t[15]||(t[15]=[e("character",-1)])]),_:1}),t[18]||(t[18]=e(" . ",-1)),l(s,{output:w})]),_:1}),l(p,{title:"Remember"},{default:n(()=>[...t[19]||(t[19]=[e(" fgetc() reads one character at a time. To read more characters, the function can be called repeatedly. ",-1)])]),_:1}),l(o,null,{default:n(()=>[...t[20]||(t[20]=[e("Reading a Line",-1)])]),_:1}),l(r,null,{default:n(()=>[t[22]||(t[22]=e(" The ",-1)),l(i,null,{default:n(()=>[...t[21]||(t[21]=[e("fgets()",-1)])]),_:1}),t[23]||(t[23]=e(" function can be used to read a line of text from a file. ",-1)),l(u,{language:"c",code:N})]),_:1}),l(r,null,{default:n(()=>[t[24]||(t[24]=e(" The second argument specifies the maximum number of characters to store, while the third argument specifies the file to read from. ",-1)),l(s,{output:y})]),_:1}),l(o,null,{default:n(()=>[...t[25]||(t[25]=[e("Reading Multiple Lines",-1)])]),_:1}),l(r,null,{default:n(()=>[t[27]||(t[27]=e(" To read an entire file, a loop can repeatedly call ",-1)),l(i,null,{default:n(()=>[...t[26]||(t[26]=[e("fgets()",-1)])]),_:1}),t[28]||(t[28]=e(" until there is no more data to read. ",-1)),l(u,{language:"c",code:F})]),_:1}),l(r,null,{default:n(()=>[t[30]||(t[30]=e(" The loop continues while ",-1)),l(i,null,{default:n(()=>[...t[29]||(t[29]=[e("fgets()",-1)])]),_:1}),t[31]||(t[31]=e(" successfully reads another line. ",-1)),l(s,{output:U})]),_:1}),l(o,null,{default:n(()=>[...t[32]||(t[32]=[e("Reading Formatted Data",-1)])]),_:1}),l(r,null,{default:n(()=>[t[35]||(t[35]=e(" The ",-1)),l(i,null,{default:n(()=>[...t[33]||(t[33]=[e("fscanf()",-1)])]),_:1}),t[36]||(t[36]=e(" function can read formatted data from a file. It works similarly to ",-1)),l(i,null,{default:n(()=>[...t[34]||(t[34]=[e("scanf()",-1)])]),_:1}),t[37]||(t[37]=e(" , except that the file pointer is provided as the first argument. ",-1)),l(u,{language:"c",code:k})]),_:1}),l(r,null,{default:n(()=>[t[40]||(t[40]=e(" In this example, ",-1)),l(i,null,{default:n(()=>[...t[38]||(t[38]=[e("fscanf()",-1)])]),_:1}),t[41]||(t[41]=e(" reads a string and an integer from ",-1)),l(i,null,{default:n(()=>[...t[39]||(t[39]=[e("student.txt",-1)])]),_:1}),t[42]||(t[42]=e(" . ",-1)),l(s,{output:v})]),_:1}),l(o,null,{default:n(()=>[...t[43]||(t[43]=[e("Checking for Reading Errors",-1)])]),_:1}),l(r,null,{default:n(()=>[t[44]||(t[44]=e(" Before reading a file, always make sure that the file was opened successfully. ",-1)),l(u,{language:"c",code:I}),t[45]||(t[45]=e(" Output ",-1)),l(s,{output:O})]),_:1}),l(r,null,{default:n(()=>[t[48]||(t[48]=e(" The loop stops when ",-1)),l(i,null,{default:n(()=>[...t[46]||(t[46]=[e("fgets()",-1)])]),_:1}),t[49]||(t[49]=e(" returns ",-1)),l(i,null,{default:n(()=>[...t[47]||(t[47]=[e("NULL",-1)])]),_:1}),t[50]||(t[50]=e(" , which indicates that there is no more line available to read. ",-1))]),_:1}),l(o,null,{default:n(()=>[...t[51]||(t[51]=[e("Summary",-1)])]),_:1}),l(r,null,{default:n(()=>[t[58]||(t[58]=e(" C provides different functions for reading different types of data from a file. ",-1)),f("ul",T,[f("li",null,[l(i,null,{default:n(()=>[...t[52]||(t[52]=[e("fgetc()",-1)])]),_:1}),t[53]||(t[53]=e(" → reads one character ",-1))]),f("li",null,[l(i,null,{default:n(()=>[...t[54]||(t[54]=[e("fgets()",-1)])]),_:1}),t[55]||(t[55]=e(" → reads a line of text ",-1))]),f("li",null,[l(i,null,{default:n(()=>[...t[56]||(t[56]=[e("fscanf()",-1)])]),_:1}),t[57]||(t[57]=e(" → reads formatted data ",-1))])])]),_:1}),l(r,null,{default:n(()=>[t[61]||(t[61]=e(" When reading multiple lines, a loop can be used to continue reading until ",-1)),l(i,null,{default:n(()=>[...t[59]||(t[59]=[e("fgets()",-1)])]),_:1}),t[62]||(t[62]=e(" returns ",-1)),l(i,null,{default:n(()=>[...t[60]||(t[60]=[e("NULL",-1)])]),_:1}),t[63]||(t[63]=e(" . ",-1))]),_:1}),t[66]||(t[66]=f("br",null,null,-1)),l(m,{to:"/academia/student/classes/c-writing-files"})])]),_:1}))}});export{$ as default};

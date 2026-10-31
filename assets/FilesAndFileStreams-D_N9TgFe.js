import{_ as d}from"./logo-C9ImmdpX.js";import{_ as a}from"./MainLayout.vue_vue_type_script_setup_true_lang-DQho8YLT.js";import{T as o,a as f,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-C58oflyL.js";import{T as i}from"./TopicTerm-Djs_QcTu.js";import{C as s}from"./CodeBlock-DmHkNxFS.js";import{O as r}from"./OutputBlock-C3xonGgx.js";import{_ as p}from"./FernInfo.vue_vue_type_script_setup_true_lang-DcinX2pd.js";import{d as g,h as x,i as n,o as w,a as u,q as e,g as l}from"./index-CCexFS6P.js";const F={class:"max-w-4xl mx-auto"},L=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("student.txt", "w");

    if (file != NULL) {
        printf("File opened successfully.");
        fclose(file);
    }
    return 0;
}`,b="File opened successfully.",I=`
FILE *file;

file = fopen("student.txt", "w");`,T=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("student.txt", "w");

    if (file != NULL) {
        fprintf(file, "Alice\\n");
        fprintf(file, "18\\n");
        fprintf(file, "92.5\\n");
        fclose(file);
    }
    return 0;
}`,y=`
student.txt

Alice
18
92.5`,C=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("message.txt", "w");

    if (file != NULL) {
        fprintf(file, "Hello, Academia!");
        fclose(file);
        printf("Data written to the file.");
    }
    return 0;
}`,v="Data written to the file.",E=`
#include <stdio.h>

int main() {
    FILE *file;
    char text[100];
    file = fopen("message.txt", "r");

    if (file != NULL) {
        fgets(text, sizeof(text), file);
        printf("File content: %s", text);
        fclose(file);
    }
    return 0;
}`,k="File content: Hello, Academia!",A=`
FILE *file;
file = fopen("example.txt", "r");
/* Perform file operations */
fclose(file);`,$=g({__name:"FilesAndFileStreams",setup(O){return(N,t)=>(w(),x(a,null,{default:n(()=>[u("div",F,[t[78]||(t[78]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:d,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[79]||(t[79]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Files and File Streams ")],-1)),e(o,null,{default:n(()=>[...t[0]||(t[0]=[l(" So far, the programs we have written have mainly worked with data stored temporarily while the program is running. ",-1)])]),_:1}),e(o,null,{default:n(()=>[e(i,null,{default:n(()=>[...t[1]||(t[1]=[l("File handling",-1)])]),_:1}),t[2]||(t[2]=l(" allows a C program to store and retrieve data from files. This makes data available even after the program has finished running. ",-1))]),_:1}),e(f,null,{default:n(()=>[...t[3]||(t[3]=[l("What is a File?",-1)])]),_:1}),e(o,null,{default:n(()=>[t[5]||(t[5]=l(" A ",-1)),e(i,null,{default:n(()=>[...t[4]||(t[4]=[l("file",-1)])]),_:1}),t[6]||(t[6]=l(" is a collection of data stored on a storage device. A file can contain text, numbers, or other information that a program can read or write. ",-1))]),_:1}),e(o,null,{default:n(()=>[t[8]||(t[8]=l(" For example, a program could store student information in a file called ",-1)),e(i,null,{default:n(()=>[...t[7]||(t[7]=[l("student.txt",-1)])]),_:1}),t[9]||(t[9]=l(" . ",-1))]),_:1}),e(f,null,{default:n(()=>[...t[10]||(t[10]=[l("The FILE Type",-1)])]),_:1}),e(o,null,{default:n(()=>[t[13]||(t[13]=l(" C provides the ",-1)),e(i,null,{default:n(()=>[...t[11]||(t[11]=[l("FILE",-1)])]),_:1}),t[14]||(t[14]=l(" type for working with files. It is defined in the ",-1)),e(i,null,{default:n(()=>[...t[12]||(t[12]=[l("stdio.h",-1)])]),_:1}),t[15]||(t[15]=l(" header. ",-1)),e(s,{language:"c",code:L}),t[16]||(t[16]=l(" Output ",-1)),e(r,{output:b})]),_:1}),e(o,null,{default:n(()=>[t[19]||(t[19]=l(" The variable ",-1)),e(i,null,{default:n(()=>[...t[17]||(t[17]=[l("file",-1)])]),_:1}),t[20]||(t[20]=l(" is a pointer to a ",-1)),e(i,null,{default:n(()=>[...t[18]||(t[18]=[l("FILE",-1)])]),_:1}),t[21]||(t[21]=l(" object. It is used by C to keep track of the file being accessed. ",-1))]),_:1}),e(p,{title:"Remember"},{default:n(()=>[...t[22]||(t[22]=[l(" A FILE pointer represents a connection between your program and a file. It is commonly used with functions such as fopen(), fclose(), fprintf(), and fgets(). ",-1)])]),_:1}),e(f,null,{default:n(()=>[...t[23]||(t[23]=[l("Opening a File",-1)])]),_:1}),e(o,null,{default:n(()=>[t[25]||(t[25]=l(" The ",-1)),e(i,null,{default:n(()=>[...t[24]||(t[24]=[l("fopen()",-1)])]),_:1}),t[26]||(t[26]=l(" function is used to open a file. It takes the file name and the mode in which the file should be opened. ",-1)),e(s,{language:"c",code:I})]),_:1}),e(o,null,{default:n(()=>[t[29]||(t[29]=l(" The ",-1)),e(i,null,{default:n(()=>[...t[27]||(t[27]=[l('"student.txt"',-1)])]),_:1}),t[30]||(t[30]=l(" argument specifies the file name, while ",-1)),e(i,null,{default:n(()=>[...t[28]||(t[28]=[l('"w"',-1)])]),_:1}),t[31]||(t[31]=l(" specifies that the file is opened for writing. ",-1))]),_:1}),e(o,null,{default:n(()=>[t[35]||(t[35]=l(" The ",-1)),e(i,null,{default:n(()=>[...t[32]||(t[32]=[l("fopen()",-1)])]),_:1}),t[36]||(t[36]=l(" function returns a ",-1)),e(i,null,{default:n(()=>[...t[33]||(t[33]=[l("FILE",-1)])]),_:1}),t[37]||(t[37]=l(" pointer when the file is successfully opened. If the file cannot be opened, it returns ",-1)),e(i,null,{default:n(()=>[...t[34]||(t[34]=[l("NULL",-1)])]),_:1}),t[38]||(t[38]=l(" . ",-1))]),_:1}),e(f,null,{default:n(()=>[...t[39]||(t[39]=[l("Using a File Stream",-1)])]),_:1}),e(o,null,{default:n(()=>[t[42]||(t[42]=l(" A ",-1)),e(i,null,{default:n(()=>[...t[40]||(t[40]=[l("file stream",-1)])]),_:1}),t[43]||(t[43]=l(" provides a way for the program to communicate with a file. Functions can use the ",-1)),e(i,null,{default:n(()=>[...t[41]||(t[41]=[l("FILE",-1)])]),_:1}),t[44]||(t[44]=l(" pointer to send data to or receive data from the file. ",-1)),e(s,{language:"c",code:T})]),_:1}),e(o,null,{default:n(()=>[t[47]||(t[47]=l(" In this example, ",-1)),e(i,null,{default:n(()=>[...t[45]||(t[45]=[l("fprintf()",-1)])]),_:1}),t[48]||(t[48]=l(" sends data through the file stream and stores it in ",-1)),e(i,null,{default:n(()=>[...t[46]||(t[46]=[l("student.txt",-1)])]),_:1}),t[49]||(t[49]=l(" . ",-1)),e(r,{output:y})]),_:1}),e(f,null,{default:n(()=>[...t[50]||(t[50]=[l("Writing Data to a File",-1)])]),_:1}),e(o,null,{default:n(()=>[t[52]||(t[52]=l(" Data can be written to a file using functions such as ",-1)),e(i,null,{default:n(()=>[...t[51]||(t[51]=[l("fprintf()",-1)])]),_:1}),t[53]||(t[53]=l(" . ",-1)),e(s,{language:"c",code:C})]),_:1}),e(o,null,{default:n(()=>[t[56]||(t[56]=l(" The first argument of ",-1)),e(i,null,{default:n(()=>[...t[54]||(t[54]=[l("fprintf()",-1)])]),_:1}),t[57]||(t[57]=l(" is the file pointer. The remaining arguments work similarly to ",-1)),e(i,null,{default:n(()=>[...t[55]||(t[55]=[l("printf()",-1)])]),_:1}),t[58]||(t[58]=l(" . ",-1)),e(r,{output:v})]),_:1}),e(f,null,{default:n(()=>[...t[59]||(t[59]=[l("Reading Data from a File",-1)])]),_:1}),e(o,null,{default:n(()=>[t[61]||(t[61]=l(" A program can also retrieve data from a file. Functions such as ",-1)),e(i,null,{default:n(()=>[...t[60]||(t[60]=[l("fgets()",-1)])]),_:1}),t[62]||(t[62]=l(" can be used to read text from a file. ",-1)),e(s,{language:"c",code:E})]),_:1}),e(o,null,{default:n(()=>[t[65]||(t[65]=l(" Here, ",-1)),e(i,null,{default:n(()=>[...t[63]||(t[63]=[l("fgets()",-1)])]),_:1}),t[66]||(t[66]=l(" reads a line from the file and stores it in the ",-1)),e(i,null,{default:n(()=>[...t[64]||(t[64]=[l("text",-1)])]),_:1}),t[67]||(t[67]=l(" array. ",-1))]),_:1}),e(r,{output:k}),e(f,null,{default:n(()=>[...t[68]||(t[68]=[l("Closing a File",-1)])]),_:1}),e(o,null,{default:n(()=>[t[70]||(t[70]=l(" After finishing with a file, it should be closed using ",-1)),e(i,null,{default:n(()=>[...t[69]||(t[69]=[l("fclose()",-1)])]),_:1}),t[71]||(t[71]=l(" . ",-1)),e(s,{language:"c",code:`
				fclose(file);`})]),_:1}),e(o,null,{default:n(()=>[...t[72]||(t[72]=[l(" Closing the file releases the resources associated with the file stream and completes the file operation. ",-1)])]),_:1}),e(f,null,{default:n(()=>[...t[73]||(t[73]=[l("Summary",-1)])]),_:1}),e(o,null,{default:n(()=>[t[75]||(t[75]=l(" File handling allows a C program to store and retrieve data using files. The ",-1)),e(i,null,{default:n(()=>[...t[74]||(t[74]=[l("FILE",-1)])]),_:1}),t[76]||(t[76]=l(" type and file streams provide the connection between the program and the file. ",-1))]),_:1}),e(o,null,{default:n(()=>[t[77]||(t[77]=l(" The basic file-handling process is to open a file, perform an operation, and close the file. ",-1)),e(s,{language:"c",code:A})]),_:1}),t[80]||(t[80]=u("br",null,null,-1)),e(m,{to:"/academia/student/classes/c-opening-and-closing-files"})])]),_:1}))}});export{$ as default};

import{_ as r}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{T as o,a as f,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as i,C as s}from"./CodeBlock-Ayh7J4dk.js";import{O as d}from"./OutputBlock-CjsXuZMe.js";import{_ as a}from"./FernInfo.vue_vue_type_script_setup_true_lang-CYGdZlbx.js";import{d as g,h as x,i as n,o as w,a as u,q as e,g as t}from"./index-DSMoD1xp.js";const F={class:"max-w-4xl mx-auto"},y={class:"list-disc pl-6 space-y-2"},L=`
FILE *file;

file = fopen("filename", "mode");`,O=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("student.txt", "r");

    if (file != NULL) {
        printf("File opened successfully.");
        fclose(file);
    }
    return 0;
}`,b="File opened successfully.",T=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("student.txt", "w");

    if (file != NULL) {
        fprintf(file, "Alice\\n");
        fprintf(file, "18\\n");
        fclose(file);
        printf("File created successfully.");
    }
    return 0;
}`,C="File created successfully.",I=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("student.txt", "a");

    if (file != NULL) {
        fprintf(file, "92.5\\n");
        fclose(file);
        printf("Data added successfully.");
    }
    return 0;
}`,k="Data added successfully.",N=`
#include <stdio.h>

int main() {
    FILE *file;

    file = fopen("student.txt", "r");

    if (file != NULL) {
        printf("File is open.\\n");
        fclose(file);
        printf("File is now closed.");
    }
    return 0;
}`,U=`File is open.
File is now closed.`,A=`
#include <stdio.h>

int main() {
    FILE *file;
    file = fopen("student.txt", "r");

    if (file == NULL) {
        printf("Unable to open the file.");
    } else {
        printf("File opened successfully.");
        fclose(file);
    }
    return 0;
}`,E="File opened successfully.",S=g({__name:"OpeningAndClosingFiles",setup(B){return(v,l)=>(w(),x(p,null,{default:n(()=>[u("div",F,[l[74]||(l[74]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:r,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[75]||(l[75]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Opening and Closing Files ")],-1)),e(o,null,{default:n(()=>[...l[0]||(l[0]=[t(" Before a C program can work with a file, the file must first be opened. After the operation is finished, the file should be closed. ",-1)])]),_:1}),e(o,null,{default:n(()=>[l[3]||(l[3]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[1]||(l[1]=[t("fopen()",-1)])]),_:1}),l[4]||(l[4]=t(" function opens a file and returns a ",-1)),e(i,null,{default:n(()=>[...l[2]||(l[2]=[t("FILE",-1)])]),_:1}),l[5]||(l[5]=t(" pointer that can be used to work with the file. ",-1))]),_:1}),e(f,null,{default:n(()=>[...l[6]||(l[6]=[t("Opening a File",-1)])]),_:1}),e(o,null,{default:n(()=>[l[7]||(l[7]=t(" The basic syntax for opening a file is: ",-1)),e(s,{language:"c",code:L})]),_:1}),e(o,null,{default:n(()=>[l[8]||(l[8]=t(" The first argument specifies the file name, while the second argument specifies how the file will be opened. ",-1)),e(s,{language:"c",code:O}),l[9]||(l[9]=t(" Output ",-1)),e(d,{output:b})]),_:1}),e(a,{title:"Remember"},{default:n(()=>[...l[10]||(l[10]=[t(" Always check whether fopen() returned NULL before performing operations on the file. ",-1)])]),_:1}),e(f,null,{default:n(()=>[...l[11]||(l[11]=[t("File Opening Modes",-1)])]),_:1}),e(o,null,{default:n(()=>[...l[12]||(l[12]=[t(" The mode determines what the program can do with the file. ",-1)])]),_:1}),e(o,null,{default:n(()=>[l[14]||(l[14]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[13]||(l[13]=[t('"r"',-1)])]),_:1}),l[15]||(l[15]=t(" mode opens a file for reading. The file should already exist. ",-1))]),_:1}),e(o,null,{default:n(()=>[l[17]||(l[17]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[16]||(l[16]=[t('"w"',-1)])]),_:1}),l[18]||(l[18]=t(" mode opens a file for writing. If the file does not exist, it is created. If it already exists, its previous contents are replaced. ",-1))]),_:1}),e(o,null,{default:n(()=>[l[20]||(l[20]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[19]||(l[19]=[t('"a"',-1)])]),_:1}),l[21]||(l[21]=t(" mode opens a file for appending. New data is added to the end of the file. ",-1))]),_:1}),e(f,null,{default:n(()=>[...l[22]||(l[22]=[t("Opening a File for Writing",-1)])]),_:1}),e(o,null,{default:n(()=>[l[24]||(l[24]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[23]||(l[23]=[t('"w"',-1)])]),_:1}),l[25]||(l[25]=t(" mode can be used to create a file and write data into it. ",-1)),e(s,{language:"c",code:T}),l[26]||(l[26]=t(" Output ",-1)),e(d,{output:C})]),_:1}),e(o,null,{default:n(()=>[l[28]||(l[28]=t(" If ",-1)),e(i,null,{default:n(()=>[...l[27]||(l[27]=[t("student.txt",-1)])]),_:1}),l[29]||(l[29]=t(" does not exist, it will be created. If it already exists, its previous contents will be replaced. ",-1))]),_:1}),e(f,null,{default:n(()=>[...l[30]||(l[30]=[t("Opening a File for Appending",-1)])]),_:1}),e(o,null,{default:n(()=>[l[32]||(l[32]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[31]||(l[31]=[t('"a"',-1)])]),_:1}),l[33]||(l[33]=t(" mode adds new data to the end of an existing file. ",-1)),e(s,{language:"c",code:I}),l[34]||(l[34]=t(" Output ",-1)),e(d,{output:k})]),_:1}),e(o,null,{default:n(()=>[l[36]||(l[36]=t(" Unlike the ",-1)),e(i,null,{default:n(()=>[...l[35]||(l[35]=[t('"w"',-1)])]),_:1}),l[37]||(l[37]=t(" mode, appending does not replace the existing contents of the file. ",-1))]),_:1}),e(f,null,{default:n(()=>[...l[38]||(l[38]=[t("Closing a File",-1)])]),_:1}),e(o,null,{default:n(()=>[l[40]||(l[40]=t(" After finishing with a file, use ",-1)),e(i,null,{default:n(()=>[...l[39]||(l[39]=[t("fclose()",-1)])]),_:1}),l[41]||(l[41]=t(" to close it. ",-1)),e(s,{language:"c",code:N}),l[42]||(l[42]=t(" Output ",-1)),e(d,{output:U})]),_:1}),e(o,null,{default:n(()=>[l[45]||(l[45]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[43]||(l[43]=[t("fclose()",-1)])]),_:1}),l[46]||(l[46]=t(" function takes the ",-1)),e(i,null,{default:n(()=>[...l[44]||(l[44]=[t("FILE",-1)])]),_:1}),l[47]||(l[47]=t(" pointer as its argument. ",-1))]),_:1}),e(f,null,{default:n(()=>[...l[48]||(l[48]=[t("Checking if a File Opened",-1)])]),_:1}),e(o,null,{default:n(()=>[l[50]||(l[50]=t(" A file may fail to open. For example, a file opened with ",-1)),e(i,null,{default:n(()=>[...l[49]||(l[49]=[t('"r"',-1)])]),_:1}),l[51]||(l[51]=t(" may not exist. ",-1)),e(s,{language:"c",code:A}),l[52]||(l[52]=t(" Output ",-1)),e(d,{output:E})]),_:1}),e(o,null,{default:n(()=>[l[55]||(l[55]=t(" If ",-1)),e(i,null,{default:n(()=>[...l[53]||(l[53]=[t("fopen()",-1)])]),_:1}),l[56]||(l[56]=t(" returns ",-1)),e(i,null,{default:n(()=>[...l[54]||(l[54]=[t("NULL",-1)])]),_:1}),l[57]||(l[57]=t(" , the file could not be opened. Otherwise, the file is ready to use. ",-1))]),_:1}),e(f,null,{default:n(()=>[...l[58]||(l[58]=[t("Summary",-1)])]),_:1}),e(o,null,{default:n(()=>[l[61]||(l[61]=t(" Opening and closing files are essential parts of file handling in C. Use ",-1)),e(i,null,{default:n(()=>[...l[59]||(l[59]=[t("fopen()",-1)])]),_:1}),l[62]||(l[62]=t(" to open a file and ",-1)),e(i,null,{default:n(()=>[...l[60]||(l[60]=[t("fclose()",-1)])]),_:1}),l[63]||(l[63]=t(" when the file is no longer needed. ",-1))]),_:1}),e(o,null,{default:n(()=>[l[70]||(l[70]=t(" Common modes include: ",-1)),u("ul",y,[u("li",null,[e(i,null,{default:n(()=>[...l[64]||(l[64]=[t("r",-1)])]),_:1}),l[65]||(l[65]=t(" → Read ",-1))]),u("li",null,[e(i,null,{default:n(()=>[...l[66]||(l[66]=[t("w",-1)])]),_:1}),l[67]||(l[67]=t(" → Write ",-1))]),u("li",null,[e(i,null,{default:n(()=>[...l[68]||(l[68]=[t("a",-1)])]),_:1}),l[69]||(l[69]=t(" → Append ",-1))])])]),_:1}),e(o,null,{default:n(()=>[l[72]||(l[72]=t(" Always check the returned ",-1)),e(i,null,{default:n(()=>[...l[71]||(l[71]=[t("FILE",-1)])]),_:1}),l[73]||(l[73]=t(" pointer before performing file operations. ",-1))]),_:1}),l[76]||(l[76]=u("br",null,null,-1)),e(m,{to:"/academia/student/classes/c-reading-files"})])]),_:1}))}});export{S as default};

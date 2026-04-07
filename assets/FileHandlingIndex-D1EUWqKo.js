import{_ as y}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-wnLsKI1e.js";import{C as s}from"./CodeBlock-D8cbajus.js";import{O as o}from"./OutputBlock-DBUi5rzu.js";import{d as F,r as i,p as w,l as L,a as l,t as v,e,k as n,o as C}from"./index-BoiLWSy3.js";import"./Footer.vue_vue_type_script_setup_true_lang-CUCs2pT8.js";const U={class:"text-gray-500 mb-2 text-lg"},k={class:"text-gray-500 mb-2 text-lg"},E={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},O={class:"text-gray-500 mb-2 text-lg"},R={class:"text-gray-500 mb-2 text-lg"},W="March 30, 2026",V=F({__name:"FileHandlingIndex",setup(A){const r=i(`
#include <stdio.h>

int main()
{
	FILE *fp; // declare a file pointer
	fp = NULL; // initialize it

	return 0;
}
`),f=i(`
#include <stdio.h>

int main()
{
	FILE *fp;

	// open file for writing
	fp = fopen("myfile.txt", "w");

	if (fp == NULL)
	{
		printf("Error opening file!\\n");
		return 1;
	}

	printf("Filed opened successfully!\\n");
	fclose(fp);
	return 0;
}
`),a=i(`
#include <stdio.h>

int main()
{
	FILE *fp = fopen("myfile.txt", "w");
	if (fp == NULL) return 1;

	fprintf(fp, "Hello, C File Handling!\\n);
	fprintf(fp, "Writing numbers: %d, %f\\n", 100, 3.14);

	fclose(fp);
	printf("Data written to file.\\n");
	return 0;
}
`),u=i(`
Hello, C File Handling!
Writing numbers: 100, 3.140000
`),d=i(`
fputs("Welcome to C Files!\\n", fp);
`),p=i(`
#include <stdio.h>

int main()
{
	FILE *fp = fopen("myfile.txt", "r");
	char str[50];
	int num;
	float fnum;

	if (fp == NULL) return 1;

	fscanf(fp, "%[^\\n]\\n%d, %f", str, &num, &fnum);
	printf("Read from file: \\n%s\\n%d\\n%f\\n", str, num, fnum);

	fclose(fp);
	return 0;
}
`),g=i(`
fgets(str, 50, fp);
`),m=i(`
char ch;

while ((ch == fgetc(fp)) != EOF)
{
	putchar(ch);
}
`),x=i(`
fclose(fp);
`),b=i(`
while(!feof(fp))
{
	char ch = fgetc(fp);
	putchar(ch);
}
`);return(N,t)=>(C(),w(y,{title:"C Programming",link:"/c-programming-language"},{default:L(()=>[t[35]||(t[35]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"C File Handling Tutorial",-1)),l("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+v(W)),t[36]||(t[36]=l("p",{class:"text-gray-500 mb-2 text-lg"},[e(" C provides a set of "),l("b",null,"standard library functions"),e(" to read from and write to files using the <stdio.h> library. This tutorial introduces the fundamentals of file handling: opening, reading, writing, and closing files. ")],-1)),t[37]||(t[37]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," File Pointers and FILE ",-1)),l("p",U,[t[0]||(t[0]=e(" In C, files are accessed through ",-1)),t[1]||(t[1]=l("b",null,"file pointers",-1)),t[2]||(t[2]=e(" of type FILE*. Think of a file pointer as a handle to a file that allows you to perform operations on it. ",-1)),n(s,{code:r.value,language:"c"},null,8,["code"]),t[3]||(t[3]=e(" Always initialize your file pointer to NULL before opening a file to avoid undefined behavior. ",-1))]),t[38]||(t[38]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Opening a File - fopen() ",-1)),l("p",k,[t[4]||(t[4]=e(" Use fopen() to open a file. It requires two parameters: filename and mode. ",-1)),t[5]||(t[5]=l("br",null,null,-1)),t[6]||(t[6]=l("span",{class:"text-gray-800"},"File Modes",-1)),t[7]||(t[7]=e()),t[8]||(t[8]=l("br",null,null,-1)),t[9]||(t[9]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"r = Read: file must exists"),l("li",null,"w = Write: create a new file or overwrite existing"),l("li",null,"a = Append: add to the end of the file"),l("li",null,"r+ = Read/Write: file must exist"),l("li",null,"w+ = Read/Write: create new or overwrite"),l("li",null,"a+ = Read/Append: file created if not exist")],-1)),n(s,{code:f.value,language:"c"},null,8,["code"]),t[10]||(t[10]=e(" Output: ",-1)),n(o,{output:"File opened successfully!"})]),t[39]||(t[39]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Writing to a File - fprintf() and fputs() ",-1)),l("p",E,[t[11]||(t[11]=l("span",{class:"text-gray-800"},"Using fprintf()",-1)),t[12]||(t[12]=e()),t[13]||(t[13]=l("br",null,null,-1)),t[14]||(t[14]=e(" Works like printf(), but writes to a file instead of console. ",-1)),n(s,{code:a.value,language:"c"},null,8,["code"]),t[15]||(t[15]=e(" Output: ",-1)),n(o,{output:u.value},null,8,["output"]),t[16]||(t[16]=l("span",{class:"text-gray-800"},"Using fputs()",-1)),t[17]||(t[17]=e()),t[18]||(t[18]=l("br",null,null,-1)),t[19]||(t[19]=e(" Writes a string only. ",-1)),n(s,{code:d.value,language:"c"},null,8,["code"])]),t[40]||(t[40]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Reading from a File - fscanf() and fgets(), fgetc() ",-1)),l("p",I,[t[20]||(t[20]=l("span",{class:"text-gray-800"},"Using fscanf()",-1)),t[21]||(t[21]=e()),t[22]||(t[22]=l("br",null,null,-1)),t[23]||(t[23]=e(" Similar to scanf() but reads from a file. ",-1)),n(s,{code:p.value,language:"c"},null,8,["code"]),t[24]||(t[24]=l("span",{class:"text-gray-800"},"Using fgets()",-1)),t[25]||(t[25]=e()),t[26]||(t[26]=l("br",null,null,-1)),t[27]||(t[27]=e(" Reads one line at a time including spaces. ",-1)),n(s,{code:g.value,language:"c"},null,8,["code"]),t[28]||(t[28]=l("span",{class:"text-gray-800"},"Using fgetc()",-1)),t[29]||(t[29]=e()),t[30]||(t[30]=l("br",null,null,-1)),t[31]||(t[31]=e(" Reads one character at a time. Useful for character processing. ",-1)),n(s,{code:m.value,language:"c"},null,8,["code"])]),t[41]||(t[41]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Closing a File - fclose() ",-1)),l("p",O,[t[32]||(t[32]=e(" Always close a file when done to release resources. ",-1)),n(s,{code:x.value,language:"c"},null,8,["code"]),t[33]||(t[33]=e(" Forgetting to close files can lead to memory leaks or data not being written properly. ",-1))]),t[42]||(t[42]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Checking for End of File - feof() ",-1)),l("p",R,[t[34]||(t[34]=e(" feof() checks if the end of the file has been reached. ",-1)),n(s,{code:b.value,language:"c"},null,8,["code"])]),t[43]||(t[43]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t[44]||(t[44]=l("p",{class:"text-gray-500 mb-2 text-lg"},[l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Use FILE* to handle files in C."),l("li",null,"Open files with fopen() and close with fclose()."),l("li",null,"Read/write using fscanf(), fprintf(), fgets(), fputs(), fgetc()."),l("li",null,"Check end-of-file with eof().")])],-1))]),_:1}))}});export{V as default};

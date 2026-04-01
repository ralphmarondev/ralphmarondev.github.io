import{_ as b}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-Dtemp0fG.js";import{C as e}from"./CodeBlock-BhaNVmu6.js";import{O as r}from"./OutputBlock-D4xOf4Qu.js";import{d as v,r as o,p as w,l as C,a as l,e as n,t as k,k as s,o as F}from"./index-Y8rI04PW.js";import"./Footer.vue_vue_type_script_setup_true_lang-BWs5lFgs.js";const H={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},T={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},W={class:"text-gray-500 mb-2 text-lg"},E="March 30, 2026",q=v({__name:"MainFunctionIndex",setup(O){const a=o(`
#include <stdio.h>

int main()
{
	printf("Hello world!\\n");
	return 0;
}
`),u=o(`
#include <stdio.h>

int func()
{
	printf("Hello world!\\n");
	return 0;
}
`),d=o(`
int main()
{
	// code here
	return 0;
}
`),m=o(`
int main(void)
`),g=o(`
void main()
`),i=o(`
int main()
`),p=o(`
return 0;
`),x=o(`
void main()
{
	printf("Hello!\\n");
}
`),y=o(`
int main()
{
	printf("Hello!\\n");
	return 0;
}
`),f=o(`
int main(int argc, char *argv[])
{
	printf("Hello!\\n");
	return 0;
}
`);return(R,t)=>(F(),w(b,{title:"C Programming",link:"/c-programming-language"},{default:C(()=>[t[33]||(t[33]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},[n("The "),l("b",null,"main()"),n(" Function in C")],-1)),l("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+k(E)),t[34]||(t[34]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What is main()? ",-1)),t[35]||(t[35]=l("p",{class:"text-gray-500 mb-2 text-lg"},[n(" The main() function is the starting point of every C program. "),l("br"),n(" When your program runs, execution always begin in main(). "),l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"It is required in every C program."),l("li",null,"It controls where the program starts and end.")])],-1)),t[36]||(t[36]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Example ",-1)),l("p",H,[s(e,{code:a.value,language:"c"},null,8,["code"]),t[0]||(t[0]=n(" Output: ",-1)),s(r,{output:"Hello world!"})]),t[37]||(t[37]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," How main() Works ",-1)),t[38]||(t[38]=l("p",{class:"text-gray-500 mb-2 text-lg"},[l("ol",{class:"list-decimal list-inside space-y-1"},[l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Program starts"),l("li",null,"OS calls main()"),l("li",null,"Code inside main() executes"),l("li",null,"return 0; sends result back to OS"),l("li",null,"Program ends")])])],-1)),t[39]||(t[39]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why main() is Required? ",-1)),l("p",N,[t[1]||(t[1]=n(" If your program does not have main(), it will not run. ",-1)),t[2]||(t[2]=l("br",null,null,-1)),t[3]||(t[3]=n(" Example (Wrong): ",-1)),s(e,{code:u.value,language:"c"},null,8,["code"]),t[4]||(t[4]=n(" Error: ",-1)),s(r,{output:"undefined reference to 'main'"}),t[5]||(t[5]=n(" The compiler looks specifically for main(). ",-1)),t[6]||(t[6]=l("br",null,null,-1)),t[7]||(t[7]=n(" No main() = no entry point = no execution. ",-1))]),t[40]||(t[40]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Syntax of main() ",-1)),l("p",T,[t[8]||(t[8]=l("span",{class:"text-gray-800"},"Standard Form (Recommended)",-1)),s(e,{code:d.value,language:"c"},null,8,["code"]),t[9]||(t[9]=n(" This is the most commonly used and recommended version. ",-1)),t[10]||(t[10]=l("br",null,null,-1)),t[11]||(t[11]=l("span",{class:"text-gray-800"},"Alternative Forms",-1)),s(e,{code:m.value,language:"c"},null,8,["code"]),t[12]||(t[12]=n(" Means: no parameter ",-1)),t[13]||(t[13]=l("br",null,null,-1)),s(e,{code:g.value,language:"c"},null,8,["code"]),t[14]||(t[14]=n(" Not recommended (non-standard) ",-1))]),t[41]||(t[41]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Note ",-1)),l("p",B,[t[15]||(t[15]=n(" Even if void main() works in some compilers: ",-1)),t[16]||(t[16]=l("br",null,null,-1)),t[17]||(t[17]=n(" Always use: ",-1)),s(e,{code:i.value,language:"c"},null,8,["code"]),t[18]||(t[18]=n(" Because: ",-1)),t[19]||(t[19]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"It follows the C standard."),l("li",null,"It properly communicates with the operating system.")],-1))]),t[42]||(t[42]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Return Value of main() ",-1)),l("p",I,[s(e,{code:p.value,language:"c"},null,8,["code"]),t[20]||(t[20]=n(" This tells the operating system: ",-1)),t[21]||(t[21]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"0 = Program executed successfully."),l("li",null,"non-zero = Error occurred.")],-1))]),t[43]||(t[43]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Types of main() in C ",-1)),l("p",S,[t[22]||(t[22]=l("span",{class:"text-gray-900"},"1. void main() (Not Recommended)",-1)),s(e,{code:x.value,language:"c"},null,8,["code"]),t[23]||(t[23]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Avoid using this!")],-1)),t[24]||(t[24]=l("span",{class:"text-gray-900"},"2. int main() (Recommended)",-1)),s(e,{code:y.value,language:"c"},null,8,["code"]),t[25]||(t[25]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Standard"),l("li",null,"Safe"),l("li",null,"Portable")],-1)),t[26]||(t[26]=l("span",{class:"text-gray-900"},"3. main() with Arguments",-1)),s(e,{code:f.value,language:"c"},null,8,["code"]),t[27]||(t[27]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Used for advanced programs."),l("li",null,"Handles external input.")],-1))]),t[44]||(t[44]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Key Takeaways ",-1)),l("p",W,[t[28]||(t[28]=n(" 1. main() is the entry point of every C program. ",-1)),t[29]||(t[29]=l("br",null,null,-1)),t[30]||(t[30]=n(" 2. Without it, your program will not run. ",-1)),t[31]||(t[31]=l("br",null,null,-1)),t[32]||(t[32]=n(" 3. return 0; means successful execution. 4. Always use: ",-1)),s(e,{code:i.value,language:"c"},null,8,["code"])])]),_:1}))}});export{q as default};

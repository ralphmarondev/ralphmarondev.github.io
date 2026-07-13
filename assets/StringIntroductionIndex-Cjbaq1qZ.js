import{_ as v}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BX7JLS4I.js";import{C as i}from"./CodeBlock-Du5Y_F6b.js";import{O as e}from"./OutputBlock-CIA53ZQ5.js";import{u as C}from"./cProgramming-CqS8EQI1.js";import{d as w,r,p as R,l as k,m as I,o as T,a as s,t as A,b as n,k as l}from"./index-BPX1bKrC.js";const B={class:"text-gray-500 mb-2 text-lg"},L={class:"text-gray-500 mb-2 text-lg"},O={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},F={class:"text-gray-500 mb-2 text-lg"},H={class:"text-gray-500 mb-2 text-lg"},M={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},h={class:"text-gray-500 mb-2 text-lg"},P="March 30, 2026",G=w({__name:"StringIntroductionIndex",setup(V){const a=C(),o=r(`
'\\0' // null character (marks the end)
`),u=r(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";

	printf("The string is: %s\\n", str);
	return 0;
}
`),d=r(`
char str[] = "Ralph";
`),g=r(`
{ 'R', 'a', 'l', 'p', 'h', '\\0' )
`),p=r(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";

	printf("%c", str[0]); // First character
	return 0;
}
`),m=r(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";
	str[0] = 'M';

	printf("%s", str);
	return 0;
}
`),x=r(`
#include <stdio.h>
#include <string.h>

int main()
{
	char str[] = "Ralph";

	printf("%d", strlen(str));
	return 0;
}
`),y=r(`
#include <stdio.h>

int main()
{
	char str[20];

	scanf("%s", str);
	printf("%s", str);

	return 0;
}
`),f=r(`
scanf("%[^\\n]s", str);
`),b=r(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";

	fgets(str, 20, stdin);
	printf("%s", str);
	return 0;
}
`),c=r(`
#include <stdio.h>

void printStr(char str[])
{
	printf("%s", str);
}

int main()
{
	char str[] = "Ralph";
	printStr(str);
	return 0;
}
`),S=r(`
#include <stdio.h>

int main()
{
	const char str[] = "Ralph Maron";

	printf("%s\\n", str);
	return 0;
}
}
`);return(W,t)=>(T(),R(v,{title:"C Programming",navigation:I(a).sections},{default:k(()=>[t[32]||(t[32]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Strings in C",-1)),s("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+A(P)),s("p",B,[t[0]||(t[0]=n(" A ",-1)),t[1]||(t[1]=s("b",null,"string in C",-1)),t[2]||(t[2]=n(" is simply a collection of characters stored in an array and ending with a special character: ",-1)),l(i,{code:o.value,language:"c"},null,8,["code"]),t[3]||(t[3]=n(" C does not have a built-in string type. ",-1)),t[4]||(t[4]=s("br",null,null,-1)),t[5]||(t[5]=n(" Instead, we use char arrays. ",-1))]),t[33]||(t[33]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Creating a String ",-1)),s("p",L,[l(i,{code:u.value,language:"c"},null,8,["code"])]),t[34]||(t[34]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What's happening? ",-1)),s("p",O,[l(i,{code:d.value,language:"c"},null,8,["code"]),t[6]||(t[6]=n(" This actually becomes: ",-1)),l(i,{code:g.value,language:"c"},null,8,["code"]),t[7]||(t[7]=n(" This is added automatically. ",-1)),t[8]||(t[8]=s("br",null,null,-1)),t[9]||(t[9]=n(" It tells C where the string ends. ",-1))]),t[35]||(t[35]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing Characters ",-1)),s("p",U,[t[10]||(t[10]=n(" Since a string is an array, you can access characters using an index: ",-1)),l(i,{code:p.value,language:"c"},null,8,["code"]),t[11]||(t[11]=n(" Output: ",-1)),l(e,{output:"R"})]),t[36]||(t[36]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Updating a String ",-1)),s("p",F,[t[12]||(t[12]=n(" You can modify characters using their index: ",-1)),l(i,{code:m.value,language:"c"},null,8,["code"]),t[13]||(t[13]=n(" Output: ",-1)),l(e,{output:"Malph"}),t[14]||(t[14]=n(" Just make sure: ",-1)),t[15]||(t[15]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"You don't go out of bounds."),s("li",null,"The array is large enough if replacing content.")],-1))]),t[37]||(t[37]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Length ",-1)),s("p",H,[t[16]||(t[16]=n(" To find the length of string, use strlen(): ",-1)),l(i,{code:x.value,language:"c"},null,8,["code"]),t[17]||(t[17]=n(" Output: ",-1)),l(e,{output:"5"}),t[18]||(t[18]=n(" The null character '\\0' is not counted. ",-1))]),t[38]||(t[38]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Taking String Input ",-1)),s("p",M,[t[19]||(t[19]=s("span",{class:"text-gray-600"},"1. Using scanf() (basic)",-1)),l(i,{code:y.value,language:"c"},null,8,["code"]),t[20]||(t[20]=n(" Stops reading at space. ",-1)),t[21]||(t[21]=s("br",null,null,-1)),t[22]||(t[22]=n(" Input: ",-1)),l(e,{output:"Hello World Goodbye"}),t[23]||(t[23]=n(" Output: ",-1)),l(e,{output:"Hello"}),t[24]||(t[24]=s("span",{class:"text-gray-600"},"2. Using scanf() with scanset",-1)),l(i,{code:f.value,language:"c"},null,8,["code"]),t[25]||(t[25]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Reads until newline"),s("li",null,"Allows spaces")],-1)),t[26]||(t[26]=s("span",{class:"text-gray-600"},"3. Using fgets() (recommended)",-1)),l(i,{code:b.value,language:"c"},null,8,["code"]),t[27]||(t[27]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Reads full line (including spaces)"),s("li",null,"Safer for input")],-1))]),t[39]||(t[39]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Passing Strings to Functions ",-1)),s("p",N,[l(i,{code:c.value,language:"c"},null,8,["code"]),t[28]||(t[28]=n(" Strings can be passed just like arrays. ",-1))]),t[40]||(t[40]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Literals ",-1)),s("p",h,[t[29]||(t[29]=n(" A string literal is just text inside quotes: ",-1)),l(i,{code:S.value,language:"c"},null,8,["code"]),t[30]||(t[30]=s("span",{class:"text-gray-600"},"Key Notes",-1)),t[31]||(t[31]=s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Automatically ends with '\\0'."),s("li",null,"Should not be modified."),s("li",null,"Best practice: use const.")],-1))]),t[41]||(t[41]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Key Takeways ",-1)),t[42]||(t[42]=s("p",{class:"text-gray-500 mb-2 text-lg"},[n(" Strings in C are: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Arrays of char"),s("li",null,"Always end with '\\0'")]),n(" Common operations: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Access = str[index]"),s("li",null,"Length = strlen()"),s("li",null,"Input = fgets() (best choice)")])],-1))]),_:1},8,["navigation"]))}});export{G as default};

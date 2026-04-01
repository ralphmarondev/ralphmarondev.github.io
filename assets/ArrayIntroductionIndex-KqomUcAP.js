import{_ as C}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-Dtemp0fG.js";import{C as e}from"./CodeBlock-BhaNVmu6.js";import{O as i}from"./OutputBlock-D4xOf4Qu.js";import{d as I,r,p as k,l as E,a as l,t as O,e as s,k as n,o as T}from"./index-Y8rI04PW.js";import"./Footer.vue_vue_type_script_setup_true_lang-BWs5lFgs.js";const U={class:"text-gray-500 mb-2 text-lg"},w={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},V={class:"text-gray-500 mb-2 text-lg"},D={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},F={class:"text-gray-500 mb-2 text-lg"},M="March 30, 2026",j=I({__name:"ArrayIntroductionIndex",setup(P){const a=r(`
int c = 2;
int u = 4;
int t = 8;
int e = 16;
`),o=r(`
int arr[] = {2, 4, 8, 16};
`),u=r(`
#include <stdio.h>

int main()
{
	int arr[] = {2, 4, 8, 12, 16, 18};
	int n = sizeof(arr) / sizeof(arr[0]);

	for (int i = 0; i < n; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
`),d=r(`
int arr[5];
`),g=r(`
int arr[5] = {2, 4, 8, 12, 16};
`),m=r(`
int arr[] = {2, 4, 8, 12, 16};
`),x=r(`
int arr[5] = {1, 2};
`),y=r(`
int arr[5] = {2, 4, 8, 12, 16};

printf("%d\\n", arr[0]);
printf("%d\\n", arr[2]);
printf("%d\\n", arr[4]);
`),p=r(`
2
8
16
`),b=r(`
int arr[5] = {2, 4, 8, 12, 16};
arr[0] = 1;
printf("%d", arr[0]);
`),f=r(`
for (int i = 0; i < 5; i++)
{
	printf("%d ", arr[i]);
}
`),v=r(`
for (int i = 4; i >= 0; i--)
{
	printf("%d ", arr[i]);
}
`),A=r(`
int size = sizeof(arr) / sizeof(arr[0]);
`),z=r(`
Index: 	0	1	2	3	4
Value: 	2	4	4	8	12
`);return(R,t)=>(T(),k(C,{title:"C Programming",link:"/c-programming-language"},{default:E(()=>[t[40]||(t[40]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Arrays in C",-1)),l("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+O(M)),t[41]||(t[41]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What is an Array? ",-1)),t[42]||(t[42]=l("p",{class:"text-gray-500 mb-2 text-lg"},[s(" An "),l("b",null,"array"),s(" is a collection of elements of the "),l("b",null,"same data type"),s(" stored in "),l("b",null,"contiguous memory locations."),l("br"),s(" In simple terms: "),l("br"),s(" An array lets you store "),l("b",null,"multiple values in a single variable.")],-1)),t[43]||(t[43]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Use Arrays? ",-1)),l("p",U,[t[0]||(t[0]=s(" Instead of doing this: ",-1)),t[1]||(t[1]=l("br",null,null,-1)),n(e,{code:a.value,language:"c"},null,8,["code"]),t[2]||(t[2]=s(" You can do this: ",-1)),n(e,{code:o.value,language:"c"},null,8,["code"]),t[3]||(t[3]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Cleaner"),l("li",null,"Easier to manage"),l("li",null,"Perfect for loops")],-1))]),t[44]||(t[44]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Example: Basic Array ",-1)),l("p",w,[n(e,{code:u.value,language:"c"},null,8,["code"]),t[4]||(t[4]=s(" Output: ",-1)),n(i,{output:"2 4 8 12 16 18"}),t[5]||(t[5]=l("span",{class:"text-gray-600"},"Key Characteristics:",-1)),t[6]||(t[6]=l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Fixed Size: cannot grow/shrink after creation."),l("li",null,"Contiguous Memory: stored next to each other."),l("li",null,"Fast Access: direct access using index.")],-1))]),t[45]||(t[45]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Creating an Array ",-1)),l("p",B,[t[7]||(t[7]=l("span",{class:"text-gray-600"},"1. Declaration",-1)),n(e,{code:d.value,language:"c"},null,8,["code"]),t[8]||(t[8]=s(" Creates an array of size 5 ",-1)),t[9]||(t[9]=l("br",null,null,-1)),t[10]||(t[10]=s(" Values are initially garbage ",-1)),t[11]||(t[11]=l("br",null,null,-1)),t[12]||(t[12]=l("span",{class:"text-gray-600"},"2. Initialization",-1)),n(e,{code:g.value,language:"c"},null,8,["code"]),t[13]||(t[13]=s(" Assign values during declaration. ",-1)),t[14]||(t[14]=l("br",null,null,-1)),t[15]||(t[15]=l("span",{class:"text-gray-600"},"3. Shortcut (Recommended)",-1)),n(e,{code:m.value,language:"c"},null,8,["code"]),t[16]||(t[16]=s(" Compiler automatically determines size. ",-1)),t[17]||(t[17]=l("br",null,null,-1)),t[18]||(t[18]=l("span",{class:"text-gray-600"},"4. Partial Initialization",-1)),n(e,{code:x.value,language:"c"},null,8,["code"]),t[19]||(t[19]=s(" Remaining elements become 0.",-1)),t[20]||(t[20]=l("br",null,null,-1))]),t[46]||(t[46]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing Array Elements ",-1)),l("p",S,[t[21]||(t[21]=s(" Arrays use indexing (starts at 0!) ",-1)),n(e,{code:y.value,language:"c"},null,8,["code"]),t[22]||(t[22]=s(" Output: ",-1)),n(i,{output:p.value},null,8,["output"])]),t[47]||(t[47]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Updating Array Elements ",-1)),l("p",V,[n(e,{code:b.value,language:"c"},null,8,["code"]),t[23]||(t[23]=s(" Output: ",-1)),n(i,{output:"1"})]),t[48]||(t[48]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Array Traversal ",-1)),l("p",D,[t[24]||(t[24]=s(" Traversal means visiting each element. ",-1)),t[25]||(t[25]=l("br",null,null,-1)),t[26]||(t[26]=l("span",{class:"text-gray-600"},"Forward Traversal",-1)),n(e,{code:f.value,language:"c"},null,8,["code"]),t[27]||(t[27]=s(" Output: ",-1)),n(i,{output:"2 4 8 12 16"}),t[28]||(t[28]=l("span",{class:"text-gray-600"},"Reverse Traversal",-1)),n(e,{code:v.value,language:"c"},null,8,["code"]),t[29]||(t[29]=s(" Output: ",-1)),n(i,{output:"16, 12, 8, 4, 2"})]),t[49]||(t[49]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Size of an Array ",-1)),l("p",N,[t[30]||(t[30]=s(" C does not automatically store array size, but you can compute it: ",-1)),n(e,{code:A.value,language:"c"},null,8,["code"]),t[31]||(t[31]=s(" Explanation: ",-1)),t[32]||(t[32]=l("br",null,null,-1)),t[33]||(t[33]=s(" > sizeof(arr) = total bytes ",-1)),t[34]||(t[34]=l("br",null,null,-1)),t[35]||(t[35]=s(" > sizeof(arr[0]) = size of one elements ",-1)),t[36]||(t[36]=l("br",null,null,-1)),t[37]||(t[37]=s(" > Divide to get number of elements. ",-1))]),t[50]||(t[50]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes ",-1)),t[51]||(t[51]=l("p",{class:"text-gray-500 mb-2 text-lg"},[l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Index starts at 0."),l("li",null,"Accessing invalid index = undefined behavior."),l("li",null,"Array size is fixed.")])],-1)),t[52]||(t[52]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Behind the Scenes ",-1)),l("p",F,[t[38]||(t[38]=s(" Memory looks like this: ",-1)),n(e,{code:z.value,language:"c"},null,8,["code"]),t[39]||(t[39]=s(" Each element is stored next to each other. ",-1))]),t[53]||(t[53]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Key Takeaways ",-1)),t[54]||(t[54]=l("p",{class:"text-gray-500 mb-2 text-lg"},[l("ul",{class:"list-disc list-inside space-y-1"},[l("li",null,"Arrays store multiple values in one variable."),l("li",null,"Elements must be of the same data type."),l("li",null,"Access elements using index."),l("li",null,"Use loops to traverse arrays."),l("li",null,"Use sizeof() to compute size.")])],-1))]),_:1}))}});export{j as default};

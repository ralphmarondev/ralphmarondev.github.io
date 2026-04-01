import{_ as p}from"./TutorialMainLayout.vue_vue_type_style_index_0_lang-jVFum5Vs.js";import{C as r}from"./CodeBlock-0PUBvTWf.js";import{O as u}from"./OutputBlock-CS2VfiLX.js";import{d as y,r as a,p as c,l as b,a as e,t as f,e as s,k as l,o as S}from"./index-DKpDr1dj.js";import"./Footer.vue_vue_type_script_setup_true_lang-DivT-Fsh.js";const v={class:"text-gray-500 mb-2 text-lg"},C={class:"text-gray-500 mb-2 text-lg"},k={class:"text-gray-500 mb-2 text-lg"},U={class:"text-gray-500 mb-2 text-lg"},w={class:"text-gray-500 mb-2 text-lg"},B={class:"text-gray-500 mb-2 text-lg"},N="March 30, 2026",I=y({__name:"StructuresIntroductionIndex",setup(A){const n=a(`
char name[50];
int age;
float grade;
`),i=a(`
struct Student
{
	char name[50];
	int age;
	float grade;
};
`),o=a(`
#include <stdio.h>

struct A
{
	int x;
}

int main()
{
	struct A a; // create variable
	a.x = 11; // assign value

	printf("%d", a.x);
	return 0;
}
`),d=a(`
struct StructureName
{
	datatype member1;
	datatype member2;
};
`),g=a(`
s1.age = 20;
`),x=a(`
typedef struct
{
	int x;
} Point;

Point p1 = {10};
`),m=a(`
struct Child
{
	int x;
};

struct Parent
{
	int a;
	struct Child b;
};
`);return(W,t)=>(S(),c(p,{title:"C Programming",link:"/c-programming-language"},{default:b(()=>[t[8]||(t[8]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Structures in C",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(N)),t[9]||(t[9]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," What is a Structure? ",-1)),t[10]||(t[10]=e("p",{class:"text-gray-500 mb-2 text-lg"},[s(" A "),e("b",null,"structure"),s(" is a user-defined data type that allows you to group different types of data into one unit. "),e("br"),s(" Unlike arrays (same type), structures can store mixed data types. ")],-1)),t[11]||(t[11]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Use Structures? ",-1)),e("p",v,[t[0]||(t[0]=s(" Without structures: ",-1)),l(r,{code:n.value,language:"c"},null,8,["code"]),t[1]||(t[1]=s(" With structures: ",-1)),l(r,{code:i.value,language:"c"},null,8,["code"]),t[2]||(t[2]=e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Cleaner"),e("li",null,"Organized"),e("li",null,"Represent real-world objects")],-1))]),t[12]||(t[12]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Example ",-1)),e("p",C,[l(r,{code:o.value,language:"c"},null,8,["code"]),t[3]||(t[3]=s(" Output: ",-1)),l(u,{output:"11"})]),t[13]||(t[13]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Structure Syntax ",-1)),e("p",k,[l(r,{code:d.value,language:"c"},null,8,["code"])]),t[14]||(t[14]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing Structure Member ",-1)),e("p",U,[t[4]||(t[4]=s(" Use the dot operator (.) ",-1)),l(r,{code:g.value,language:"c"},null,8,["code"])]),t[15]||(t[15]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Initializing Structures using typedef ",-1)),e("p",w,[l(r,{code:x.value,language:"c"},null,8,["code"]),t[5]||(t[5]=s(" No need to write struct everytime. ",-1))]),t[16]||(t[16]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Nested Structures ",-1)),e("p",B,[t[6]||(t[6]=s(" Structures inside structures: ",-1)),l(r,{code:m.value,language:"c"},null,8,["code"]),t[7]||(t[7]=s(" Access: ",-1)),l(u,{output:"p.b.x = 5"})]),t[17]||(t[17]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Structure Memory ",-1)),t[18]||(t[18]=e("p",{class:"text-gray-500 mb-2 text-lg"},[e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Structures may have extra unused space."),e("li",null,"This is called padding.")]),s(" Helps improve performance. ")],-1)),t[19]||(t[19]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Real World Use Cases ",-1)),t[20]||(t[20]=e("p",{class:"text-gray-500 mb-2 text-lg"},[s(" Structures are used for: "),e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Students (name, age, grade)"),e("li",null,"Engineering data (length, width, material)"),e("li",null,"Data structures (linked list, trees)"),e("li",null,"Grouping related data.")])],-1)),t[21]||(t[21]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Key Takeaways ",-1)),t[22]||(t[22]=e("p",{class:"text-gray-500 mb-2 text-lg"},[e("ul",{class:"list-disc list-inside space-y-1"},[e("li",null,"Structures group different data types."),e("li",null,"Use typedef for cleaner code.")])],-1))]),_:1}))}});export{I as default};

import{_ as f}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{C as a}from"./CodeBlock-Dq1Y_ZOo.js";import{O as e}from"./OutputBlock-3JjA_7_X.js";import{u as S}from"./javaProgramming-qhw1dUpK.js";import{S as r}from"./SpanHighlight--pKwlohn.js";import{d as T,r as n,p as k,l as o,m as D,o as C,a as t,t as J,b as s,k as i}from"./index-DzB2MRah.js";const P={class:"text-gray-500 mb-2 text-lg"},O={class:"text-gray-500 mb-4 text-lg"},j={class:"text-gray-500 mb-4 text-lg"},E={class:"text-gray-500 mb-4 text-lg"},w={class:"text-gray-500 mb-4 text-lg"},M={class:"text-gray-500 mb-4 text-lg"},B={class:"text-gray-500 mb-4 text-lg"},U={class:"text-gray-500 mb-4 text-lg"},A={class:"list-disc list-inside space-y-1"},H="July 11, 2026",R=T({__name:"DataTypesIndex",setup(W){const u=S(),d=n(`
int age = 20;
double grade = 95.5;
String name = "Ralph";
`),p=n(`
public class Main {
	public static void main(String[] args) {
		System.out.println(20);
		System.out.println(5.75);
		System.out.println('A');
		System.out.println(true);
		System.out.println("Hello World");
	}
}
`),m=n(`
20
5.75
A
true
Hello World
`),g=n(`
public class Main {
	public static void main(String[] args) {
		System.out.println(22);
	}
}
`),b=n(`
public class Main {
	public static void main(String[] args) {
		System.out.println('C');
	}
}
`),y=n(`
public class Main {
	public static void main(String[] args) {
		System.out.println(95.75);
	}
}
`),x=n(`
public class Main {
	public static void main(String[] args) {
		System.out.println(true);
	}
}
`),v=n(`
public class Main {
	public static void main(String[] args) {
		System.out.println("Hello Java");
	}
}
`);return(z,l)=>(C(),k(f,{title:"Java Programming",navigation:D(u).sections},{default:o(()=>[l[66]||(l[66]=t("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Data Types in Java",-1)),t("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+J(H)),l[67]||(l[67]=t("div",{class:"text-gray-600 mb-4 text-lg"},[s(" Every variable in Java has an associated data type."),t("br"),s(" A data type tells Java:"),t("br"),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"What kind of value can be stored."),t("li",null,"How much memory is typically used."),t("li",null,"What operations can be performed on the value.")]),s(" For example: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Whole numbers"),t("li",null,"Decimal numbers"),t("li",null,"Single characters"),t("li",null,"True or false values"),t("li",null,"Text")])],-1)),l[68]||(l[68]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Java is a Statically Typed Language ",-1)),t("div",P,[l[0]||(l[0]=s(" Java is a statically typed language, which means: ",-1)),l[1]||(l[1]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Every variable must have a declared data type."),t("li",null,"Once declared, the variable's type cannot be changed.")],-1)),i(a,{code:d.value,language:"java"},null,8,["code"]),l[2]||(l[2]=s(" The Java compiler checks data types before the program is executed. ",-1))]),l[69]||(l[69]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Primitive Data Types ",-1)),l[70]||(l[70]=t("div",{class:"text-gray-500 mb-2 text-lg"},[s(" Java provides eight primitive data types. "),t("br"),s(" The most commonly used are: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"byte"),t("li",null,"short"),t("li",null,"int"),t("li",null,"long"),t("li",null,"float"),t("li",null,"double"),t("li",null,"char"),t("li",null,"boolean")])],-1)),l[71]||(l[71]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Non-Primitive Data Types ",-1)),l[72]||(l[72]=t("div",{class:"text-gray-500 mb-2 text-lg"},[s(" Besides primitive data types, Java also provides reference (non-primitive) types. "),t("br"),s(" Some common examples are: "),t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"String"),t("li",null,"Array"),t("li",null,"Classes"),t("li",null,"Objects")]),s(" In this tutorial, we will mainly use String. ")],-1)),l[73]||(l[73]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Example Using Multiple Data Types ",-1)),t("p",O,[i(a,{code:p.value,language:"java"},null,8,["code"]),l[3]||(l[3]=s(" Output: ",-1)),i(e,{output:m.value},null,8,["output"])]),l[74]||(l[74]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Integer Data Type (int) ",-1)),t("div",j,[l[5]||(l[5]=s(" The ",-1)),i(r,null,{default:o(()=>[...l[4]||(l[4]=[s("int",-1)])]),_:1}),l[6]||(l[6]=s(" data type is used to store whole numbers. ",-1)),l[7]||(l[7]=t("br",null,null,-1)),l[8]||(l[8]=s(" Characteristics ",-1)),l[9]||(l[9]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Stores positive, negative, and zero values."),t("li",null,"Size: 4 bytes."),t("li",null,"Default value: 0 (for fields).")],-1)),l[10]||(l[10]=t("br",null,null,-1)),l[11]||(l[11]=s(" Sample Program ",-1)),i(a,{code:g.value,language:"java"},null,8,["code"]),l[12]||(l[12]=s(" Output ",-1)),i(e,{output:"22"})]),l[75]||(l[75]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Character Data Type (char) ",-1)),t("div",E,[l[14]||(l[14]=s(" The ",-1)),i(r,null,{default:o(()=>[...l[13]||(l[13]=[s("char",-1)])]),_:1}),l[15]||(l[15]=s(" data type stores a single character. ",-1)),l[16]||(l[16]=t("br",null,null,-1)),l[17]||(l[17]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[18]||(l[18]=s()),l[19]||(l[19]=t("br",null,null,-1)),l[20]||(l[20]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,[s(" Stores one character like "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"'A'"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"'b'"),s(", "),t("span",{class:"bg-pink-50 px-2 rounded-lg"},"'5'")]),t("li",null,"Uses single quotation marks."),t("li",null,"Size: 2 byte.")],-1)),l[21]||(l[21]=t("br",null,null,-1)),l[22]||(l[22]=s(" Sample Program ",-1)),i(a,{code:b.value,language:"java"},null,8,["code"]),l[23]||(l[23]=s(" Output ",-1)),i(e,{output:"C"})]),l[76]||(l[76]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Floating-Point Data Type (double) ",-1)),t("div",w,[l[24]||(l[24]=s(" The ",-1)),l[25]||(l[25]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"double",-1)),l[26]||(l[26]=s(" data type stores decimal numbers. ",-1)),l[27]||(l[27]=t("br",null,null,-1)),l[28]||(l[28]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[29]||(l[29]=s()),l[30]||(l[30]=t("br",null,null,-1)),l[31]||(l[31]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"More precise than float."),t("li",null,"Size: 8 bytes."),t("li",null,"Used for most decimal calculations.")],-1)),l[32]||(l[32]=t("br",null,null,-1)),l[33]||(l[33]=s(" Sample Program ",-1)),i(a,{code:y.value,language:"java"},null,8,["code"]),l[34]||(l[34]=s(" Output ",-1)),i(e,{output:"95.75"})]),l[77]||(l[77]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Boolean Data Type (boolean) ",-1)),t("div",M,[l[35]||(l[35]=s(" The ",-1)),l[36]||(l[36]=t("span",{class:"bg-pink-50 px-2 rounded-lg"},"boolean",-1)),l[37]||(l[37]=s(" data type stores one of two values. ",-1)),l[38]||(l[38]=t("br",null,null,-1)),l[39]||(l[39]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[40]||(l[40]=s()),l[41]||(l[41]=t("br",null,null,-1)),l[42]||(l[42]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"true"),t("li",null,"false")],-1)),l[43]||(l[43]=s(" Commonly used in conditions and decision making. ",-1)),l[44]||(l[44]=t("br",null,null,-1)),l[45]||(l[45]=s(" Sample Program ",-1)),i(a,{code:x.value,language:"java"},null,8,["code"]),l[46]||(l[46]=s(" Output ",-1)),i(e,{output:"true"})]),l[78]||(l[78]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Data Type ",-1)),t("div",B,[l[47]||(l[47]=s(" A String stores a sequence of characters (text). ",-1)),l[48]||(l[48]=t("br",null,null,-1)),l[49]||(l[49]=s(" Unlike primitive data types, String is a class in java. ",-1)),l[50]||(l[50]=t("br",null,null,-1)),l[51]||(l[51]=t("span",{class:"text-gray-700 text-xl"},"Characteristics",-1)),l[52]||(l[52]=s()),l[53]||(l[53]=t("br",null,null,-1)),l[54]||(l[54]=t("ul",{class:"list-disc list-inside space-y-1"},[t("li",null,"Uses double quotation marks."),t("li",null,"Can contain letters, numbers, symbols and spaces.")],-1)),l[55]||(l[55]=t("br",null,null,-1)),l[56]||(l[56]=s(" Sample Program ",-1)),i(a,{code:v.value,language:"java"},null,8,["code"]),l[57]||(l[57]=s(" Output ",-1)),i(e,{output:"Hello Java"})]),l[79]||(l[79]=t("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),t("div",U,[t("ul",A,[l[62]||(l[62]=t("li",null,"Data types determine what kind of values Java can store.",-1)),l[63]||(l[63]=t("li",null,"Java is statically typed.",-1)),l[64]||(l[64]=t("li",null,"Primitive data types store simple values.",-1)),t("li",null,[i(r,null,{default:o(()=>[...l[58]||(l[58]=[s("String",-1)])]),_:1}),l[59]||(l[59]=s(" stores text. ",-1))]),t("li",null,[i(r,null,{default:o(()=>[...l[60]||(l[60]=[s("printf()",-1)])]),_:1}),l[61]||(l[61]=s(" provides formatted output. ",-1))]),l[65]||(l[65]=t("li",null,"Different format specifiers are used for different data types.",-1))])])]),_:1},8,["navigation"]))}});export{R as default};

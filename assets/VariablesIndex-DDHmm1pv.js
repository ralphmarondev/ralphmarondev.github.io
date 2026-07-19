import{_ as M}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{u as k}from"./javaProgramming-qhw1dUpK.js";import{S as a}from"./SpanHighlight--pKwlohn.js";import{O as u}from"./OutputBlock-3JjA_7_X.js";import{C as o}from"./CodeBlock-Dq1Y_ZOo.js";import{d as P,r as e,p as O,l as s,m as B,o as D,a as i,t as U,b as t,k as n}from"./index-DzB2MRah.js";const L={class:"text-gray-600 mb-4 text-lg"},R={class:"text-gray-500 mb-4 text-lg"},W={class:"list-disc list-inside space-y-1"},$={class:"text-gray-500 mb-2 text-lg"},q={class:"list-disc list-inside space-y-1"},F={class:"text-gray-500 mb-2 text-lg"},H={class:"text-gray-500 mb-2 text-lg"},G={class:"text-gray-500 mb-2 text-lg"},K={class:"text-gray-500 mb-2 text-lg"},Q={class:"list-disc list-inside space-y-1"},X={class:"text-gray-500 mb-2 text-lg"},Y={class:"text-gray-500 mb-2 text-lg"},Z={class:"text-gray-500 mb-2 text-lg"},h={class:"text-gray-500 mb-2 text-lg"},_={class:"text-gray-500 mb-2 text-lg"},c={class:"text-gray-500 mb-2 text-lg"},ll={class:"text-gray-500 mb-2 text-lg"},tl={class:"text-gray-500 mb-2 text-lg"},il={class:"text-gray-500 mb-2 text-lg"},nl={class:"text-gray-500 mb-2 text-lg"},sl={class:"text-2xl font-semibold text-gray-800 mb-2"},al={class:"text-gray-500 mb-2 text-lg"},el={class:"text-gray-500 mb-2 text-lg"},ol={class:"list-disc list-inside space-y-1"},ul={class:"text-gray-500 mb-2 text-lg"},rl={class:"list-disc list-inside space-y-1"},dl="July 11, 2026",Vl=P({__name:"VariablesIndex",setup(gl){const r=k(),d=e(`
int age;
double salary;
String firstName;
boolean isCute;
`),g=e(`
public class Main {
	public static void main(String[] args) {
		int age = 20;
		double height = 5.7;
		char grade = 'A';
		String name = "Ralph";
		boolean isCute = true;

		System.out.println(age);
		System.out.println(height);
		System.out.println(grade);
		System.out.println(name);
		System.out.println(isCute);
	}
}
`),b=e(`
20
5.7
A
Ralph
true
`),m=e(`
int x, y, z;
double length, width;
String firstName, lastName;
`),p=e(`
int age;
double averageScore;
String firstName;
boolean isCute;
char _grade;
`),v=e(`
int 1age;
double total marks;
String class;
boolean public;
`),x=e(`
int age = 20;
`),y=e(`
int age;

age = 20;
`),f=e(`
public class Main {
	public static void main(String[] args) {
		int age;

		System.out.println(age);
	}
}
`),V=e(`
Variable 'age' might not have been initialized.
`),S=e(`
int number = 3;

System.out.println(number);
`),w=e(`
int score = 10;
System.out.println(score);

score = 25;
System.out.println(score);

score = score + 5;
System.out.println(score);
`),C=e(`
10
25
30
`),z=e(`
int a = 20;
int b = 40;

int sum = a + b;
System.out.println(sum);
`),I=e(`
double radius = 7;
double area = 3.14159 * radius * radius;

System.out.println(area);
`),j=e(`
int first = 10;
int second = first;

System.out.println(second);
`),A=e(`
int age = 20;
`),E=e(`
int age = "Twenty";
`),N=e(`
int score = 95;
double grade = score;

System.out.println(grade);
`),T=e(`
final double PI = 3.14159;

System.out.println(PI);
`),J=e(`
PI = 5;
`);return(bl,l)=>(D(),O(M,{title:"Java Programming",navigation:B(r).sections},{default:s(()=>[l[140]||(l[140]=i("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Variables in Java",-1)),i("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+U(dl)),i("p",L,[l[1]||(l[1]=t(" A variable is a ",-1)),n(a,null,{default:s(()=>[...l[0]||(l[0]=[t("named storage location",-1)])]),_:1}),l[2]||(l[2]=t(" used to hold data while a program is running. Instead of writing the same value repeatedly, we can store it in a variable and use it whenever it is needed. ",-1))]),i("div",R,[l[12]||(l[12]=t(" Think of a variable as a labeled container: ",-1)),i("ul",W,[i("li",null,[l[4]||(l[4]=t(" The ",-1)),n(a,null,{default:s(()=>[...l[3]||(l[3]=[t("name",-1)])]),_:1}),l[5]||(l[5]=t(" identifies the variable. ",-1))]),i("li",null,[l[7]||(l[7]=t(" The ",-1)),n(a,null,{default:s(()=>[...l[6]||(l[6]=[t("data type",-1)])]),_:1}),l[8]||(l[8]=t(" determines what kind of value it can store. ",-1))]),i("li",null,[l[10]||(l[10]=t(" The ",-1)),n(a,null,{default:s(()=>[...l[9]||(l[9]=[t("value",-1)])]),_:1}),l[11]||(l[11]=t(" is the information stored inside the variable. ",-1))])])]),l[141]||(l[141]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Do We Need Variables? ",-1)),l[142]||(l[142]=i("div",{class:"text-gray-500 mb-2 text-lg"},[t(" Without variables, programs would become difficult to write and maintain because: "),i("ul",{class:"list-disc list-inside space-y-1"},[i("li",null,"Values would need to be typed repeatedly."),i("li",null,"Updating a value would require changing it everywhere."),i("li",null,"Programs would be harder to read.")]),t(" Variables allows us to: "),i("ul",{class:"list-disc list-inside space-y-1"},[i("li",null,"Store information"),i("li",null,"Reuse values"),i("li",null,"Update values"),i("li",null,"Write cleaner programs")])],-1)),l[143]||(l[143]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Variables ",-1)),i("div",$,[l[33]||(l[33]=t(" Explanation ",-1)),i("ul",q,[i("li",null,[n(a,null,{default:s(()=>[...l[13]||(l[13]=[t("int",-1)])]),_:1}),l[18]||(l[18]=t(" , ",-1)),n(a,null,{default:s(()=>[...l[14]||(l[14]=[t("double",-1)])]),_:1}),l[19]||(l[19]=t(" , ",-1)),n(a,null,{default:s(()=>[...l[15]||(l[15]=[t("char",-1)])]),_:1}),l[20]||(l[20]=t(" , ",-1)),n(a,null,{default:s(()=>[...l[16]||(l[16]=[t("String",-1)])]),_:1}),l[21]||(l[21]=t(" , and ",-1)),n(a,null,{default:s(()=>[...l[17]||(l[17]=[t("boolean",-1)])]),_:1}),l[22]||(l[22]=t(" are data types. ",-1))]),i("li",null,[n(a,null,{default:s(()=>[...l[23]||(l[23]=[t("age",-1)])]),_:1}),l[28]||(l[28]=t(" , ",-1)),n(a,null,{default:s(()=>[...l[24]||(l[24]=[t("height",-1)])]),_:1}),l[29]||(l[29]=t(" , ",-1)),n(a,null,{default:s(()=>[...l[25]||(l[25]=[t("grade",-1)])]),_:1}),l[30]||(l[30]=t(" , ",-1)),n(a,null,{default:s(()=>[...l[26]||(l[26]=[t("name",-1)])]),_:1}),l[31]||(l[31]=t(" , and ",-1)),n(a,null,{default:s(()=>[...l[27]||(l[27]=[t("passed",-1)])]),_:1}),l[32]||(l[32]=t(" are variable names. ",-1))])])]),l[144]||(l[144]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Declaration Syntax ",-1)),i("div",F,[n(u,{output:"dataType variableName"}),l[34]||(l[34]=t(" Examples ",-1)),n(u,{output:d.value},null,8,["output"])]),l[145]||(l[145]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring and Initializing Variables ",-1)),i("div",H,[l[35]||(l[35]=t(" Initialization means assigning the first value to a variable. ",-1)),l[36]||(l[36]=i("br",null,null,-1)),l[37]||(l[37]=t(" A variable can be initialized at the same time it is declared. ",-1)),l[38]||(l[38]=i("br",null,null,-1)),l[39]||(l[39]=t()),l[40]||(l[40]=i("br",null,null,-1)),l[41]||(l[41]=t(" Sample Program ",-1)),n(o,{code:g.value,language:"java"},null,8,["code"]),l[42]||(l[42]=t(" Output ",-1)),n(u,{output:b.value,language:"java"},null,8,["output"])]),l[146]||(l[146]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Multiple Variables ",-1)),i("div",G,[l[43]||(l[43]=t(" Variables of the same data type may be declared in one statement by separating them with commas. ",-1)),n(u,{output:m.value},null,8,["output"])]),l[147]||(l[147]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules for Naming Variables ",-1)),i("div",K,[l[58]||(l[58]=t(" A variable name must follow Java's identifier rules. ",-1)),l[59]||(l[59]=i("br",null,null,-1)),i("ul",Q,[i("li",null,[l[46]||(l[46]=t("Can contain letters, digits, ",-1)),n(a,null,{default:s(()=>[...l[44]||(l[44]=[t("_",-1)])]),_:1}),l[47]||(l[47]=t(" , and ",-1)),n(a,null,{default:s(()=>[...l[45]||(l[45]=[t("$",-1)])]),_:1}),l[48]||(l[48]=t(" . ",-1))]),i("li",null,[l[51]||(l[51]=t("Must begin with a letter, ",-1)),n(a,null,{default:s(()=>[...l[49]||(l[49]=[t("_",-1)])]),_:1}),l[52]||(l[52]=t(" , or, ",-1)),n(a,null,{default:s(()=>[...l[50]||(l[50]=[t("$",-1)])]),_:1}),l[53]||(l[53]=t(" . ",-1))]),l[54]||(l[54]=i("li",null,"Cannot begin with a digit.",-1)),l[55]||(l[55]=i("li",null,"Cannot contain spaces.",-1)),l[56]||(l[56]=i("li",null,"Cannot be a Java keyword.",-1)),l[57]||(l[57]=i("li",null,"Java is case-sensitive.",-1))])]),l[148]||(l[148]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Valid Variable Names ",-1)),i("div",X,[n(u,{output:p.value},null,8,["output"])]),l[149]||(l[149]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Invalid Variable Names ",-1)),i("div",Y,[n(u,{output:v.value},null,8,["output"])]),l[150]||(l[150]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Initialization ",-1)),i("div",Z,[l[60]||(l[60]=t(" A variable may be initialized immediately. ",-1)),n(o,{code:x.value,language:"java"},null,8,["code"]),l[61]||(l[61]=t(" or later. ",-1)),n(o,{code:y.value,language:"java"},null,8,["code"]),l[62]||(l[62]=t(" Both approaches are valid. ",-1))]),l[151]||(l[151]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Local Variables Must Be Initialized ",-1)),i("div",h,[l[63]||(l[63]=t(" This is an important Java concept. ",-1)),n(o,{code:f.value,language:"java"},null,8,["code"]),l[64]||(l[64]=t(" Compile Error ",-1)),n(u,{output:V.value},null,8,["output"]),l[65]||(l[65]=t(" Explanation: ",-1)),l[66]||(l[66]=i("br",null,null,-1)),l[67]||(l[67]=i("i",null," Local variables do not receive a default value. Java requires them to be initialized before they are used. ",-1))]),l[152]||(l[152]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing Variables ",-1)),i("div",_,[l[68]||(l[68]=t(" Once a variable has been assigned a value, its name can be used anywhere that value is needed. ",-1)),l[69]||(l[69]=i("br",null,null,-1)),l[70]||(l[70]=i("br",null,null,-1)),l[71]||(l[71]=t(" Sample Program ",-1)),n(o,{code:S.value,language:"java"},null,8,["code"]),l[72]||(l[72]=t(" Output ",-1)),n(u,{output:"3"})]),l[153]||(l[153]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Updating Variable Values ",-1)),i("div",c,[l[73]||(l[73]=t(" Variables are called variables because their value may change while the program is running. ",-1)),l[74]||(l[74]=i("br",null,null,-1)),l[75]||(l[75]=i("br",null,null,-1)),l[76]||(l[76]=t(" Sample Program ",-1)),n(o,{code:w.value,language:"java"},null,8,["code"]),l[77]||(l[77]=t(" Output ",-1)),n(u,{output:C.value},null,8,["output"])]),l[154]||(l[154]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variables in Expressions ",-1)),i("div",ll,[l[78]||(l[78]=t(" Variables may be used in expressions just like literal values. ",-1)),l[79]||(l[79]=i("br",null,null,-1)),l[80]||(l[80]=i("br",null,null,-1)),l[81]||(l[81]=t(" Sample Program ",-1)),n(o,{code:z.value,language:"java"},null,8,["code"]),l[82]||(l[82]=t(" Output ",-1)),n(u,{output:"60"}),l[83]||(l[83]=t(" Another example ",-1)),n(o,{code:I.value,language:"java"},null,8,["code"]),l[84]||(l[84]=t(" This shows that variables can participate in calculations. ",-1))]),l[155]||(l[155]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Assigning Values Between Variables ",-1)),i("div",tl,[l[85]||(l[85]=t(" Sample Program ",-1)),n(o,{code:j.value,language:"java"},null,8,["code"]),l[86]||(l[86]=t(" Output ",-1)),n(u,{output:"10"})]),l[156]||(l[156]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Type Must Match ",-1)),i("div",il,[l[92]||(l[92]=t(" The assigned value must be compatible with the variable's data type. ",-1)),l[93]||(l[93]=i("br",null,null,-1)),l[94]||(l[94]=t(" Correct ",-1)),n(o,{code:A.value,language:"java"},null,8,["code"]),l[95]||(l[95]=t(" Incorrect ",-1)),n(o,{code:E.value,language:"java"},null,8,["code"]),l[96]||(l[96]=t(" Explanation ",-1)),l[97]||(l[97]=i("br",null,null,-1)),i("i",null,[l[89]||(l[89]=t("Java reports a compile-time error because a ",-1)),n(a,null,{default:s(()=>[...l[87]||(l[87]=[t("String",-1)])]),_:1}),l[90]||(l[90]=t(" cannot be stored in an ",-1)),n(a,null,{default:s(()=>[...l[88]||(l[88]=[t("int",-1)])]),_:1}),l[91]||(l[91]=t(" .",-1))])]),l[157]||(l[157]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Automatic Type Conversion ",-1)),i("div",nl,[l[103]||(l[103]=t(" Java can automatically convert some values. ",-1)),l[104]||(l[104]=i("br",null,null,-1)),l[105]||(l[105]=i("br",null,null,-1)),l[106]||(l[106]=t(" Sample Program ",-1)),n(o,{code:N.value,language:"java"},null,8,["code"]),l[107]||(l[107]=t(" Output ",-1)),n(u,{output:"95.0"}),l[108]||(l[108]=t(" Explanation ",-1)),l[109]||(l[109]=i("br",null,null,-1)),i("i",null,[l[100]||(l[100]=t("Java automatically converts the integer into a decimal because ",-1)),n(a,null,{default:s(()=>[...l[98]||(l[98]=[t("double",-1)])]),_:1}),l[101]||(l[101]=t(" can store all ",-1)),n(a,null,{default:s(()=>[...l[99]||(l[99]=[t("int",-1)])]),_:1}),l[102]||(l[102]=t(" values. ",-1))])]),i("h2",sl,[l[111]||(l[111]=t(" Constants ( ",-1)),n(a,null,{default:s(()=>[...l[110]||(l[110]=[t("final",-1)])]),_:1}),l[112]||(l[112]=t(" ) ",-1))]),i("div",al,[l[114]||(l[114]=t(" Sometimes a value should never change. ",-1)),n(o,{code:T.value,language:"java"},null,8,["code"]),l[115]||(l[115]=t(" Attempting to modify it ",-1)),n(o,{code:J.value,language:"java"},null,8,["code"]),l[116]||(l[116]=t(" produces a compile-time error because ",-1)),n(a,null,{default:s(()=>[...l[113]||(l[113]=[t("final",-1)])]),_:1}),l[117]||(l[117]=t(" variables are constants. ",-1))]),l[158]||(l[158]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Common Beginner Mistakes ",-1)),i("div",el,[i("ul",ol,[l[128]||(l[128]=i("li",null,"Forgetting to declare a variable before using it.",-1)),l[129]||(l[129]=i("li",null,"Using a variable before initializing it.",-1)),l[130]||(l[130]=i("li",null,"Assigning the wrong data type to a variable.",-1)),i("li",null,[l[120]||(l[120]=t("Forgetting that Java is case-sensitive ( ",-1)),n(a,null,{default:s(()=>[...l[118]||(l[118]=[t("age",-1)])]),_:1}),l[121]||(l[121]=t(" and ",-1)),n(a,null,{default:s(()=>[...l[119]||(l[119]=[t("Age",-1)])]),_:1}),l[122]||(l[122]=t(" are different). ",-1))]),i("li",null,[l[125]||(l[125]=t("Using Java keywords such as ",-1)),n(a,null,{default:s(()=>[...l[123]||(l[123]=[t("class",-1)])]),_:1}),l[126]||(l[126]=t(" or ",-1)),n(a,null,{default:s(()=>[...l[124]||(l[124]=[t("public",-1)])]),_:1}),l[127]||(l[127]=t(" are variable names. ",-1))])])]),l[159]||(l[159]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),i("div",ul,[i("ul",rl,[l[133]||(l[133]=i("li",null,"Variables store values used by a program.",-1)),l[134]||(l[134]=i("li",null,"Every variable has a data type and a name.",-1)),l[135]||(l[135]=i("li",null,"Variables must be declared before they are used.",-1)),l[136]||(l[136]=i("li",null,"Variables may be initialized during declaration or afterward.",-1)),l[137]||(l[137]=i("li",null,"Local variables must be initialized before use.",-1)),l[138]||(l[138]=i("li",null,"Variables can participate in expressions and calculations.",-1)),l[139]||(l[139]=i("li",null,"Variables can change their values during program execution.",-1)),i("li",null,[n(a,null,{default:s(()=>[...l[131]||(l[131]=[t("final",-1)])]),_:1}),l[132]||(l[132]=t(" used to create constants whose values cannot be modified. ",-1))])])])]),_:1},8,["navigation"]))}});export{Vl as default};

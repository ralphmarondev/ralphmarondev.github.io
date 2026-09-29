import{_ as w}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as i}from"./SpanHighlight-D5QJRDV8.js";import{C as r}from"./CodeBlock-DZMpBSrv.js";import{O as o}from"./OutputBlock-DUAjxao7.js";import{u as k}from"./javaProgramming-DvM3X4gn.js";import{d as O,h as T,i as e,s as C,o as P,a as s,t as E,g as l,q as n,r as u}from"./index-fUs2VaN6.js";const I={class:"text-gray-600 mb-4 text-lg"},M={class:"text-gray-500 mb-4 text-lg"},B={class:"list-disc list-inside"},J={class:"text-gray-500 mb-4 text-lg"},j={class:"text-gray-500 mb-4 text-lg"},N={class:"text-gray-500 mb-4 text-lg"},U={class:"text-gray-500 mb-4 text-lg"},V={class:"text-gray-500 mb-4 text-lg"},A={class:"text-gray-500 mb-4 text-lg"},L={class:"text-gray-500 mb-4 text-lg"},W={class:"list-disc list-inside"},F="July 15, 2026",R=O({__name:"SwitchCase",setup(q){const a=k(),d=u(`
public class Main{
	public static void main(String[] args) {
		int day = 3;

		switch(day){
			case 1:
				System.out.println("Monday");
				break;
			case 2:
				System.out.println("Tuesday");
				break;
			case 3:
				System.out.println("Wednesday");
				break;
			default:
				System.out.println("Invalid day");
		}
	}
}
`),m=u(`
Wednesday
`),p=u(`
public class Main{
	public static void main(String[] args) {
		int number = 2;

		switch(number){
			case 1:
				System.out.println("One");
			case 2:
				System.out.println("Two");
			case 3:
				System.out.println("Three");
		}
	}
}
`),g=u(`
Two
Three
`),b=u(`
public class Main{
	public static void main(String[] args) {
		char grade = 'A';

		switch(grade){
			case 'A':
			case 'B':
				System.out.println("Excellent");
				break;
			case 'C':
				System.out.println("Good");
				break;
			default:
				System.out.println("Needs improvement");
		}
	}
}
`),x=u(`
Excellent
`),f=u(`
public class Main{
	public static void main(String[] args) {
		String role = "admin";

		switch(role){
			case "admin":
				System.out.println("Full access");
				break;
			case "user":
				System.out.println("Limited access");
				break;
			default:
				System.out.println("Unknown role");
		}
	}
}
`),v=u(`
Full access
`),y=u(`
public class Main{
	public static void main(String[] args) {
		int category = 1;
		int item = 2;

		switch(category){
			case 1:
				switch(item){
					case 1:
						System.out.println("Laptop");
						break;
					case 2:
						System.out.println("Phone");
						break;
				}
				break;
			default:
				System.out.println("Invalid category");
		}
	}
}
`),S=u(`
Phone
`);return(D,t)=>(P(),T(w,{title:"Java Programming",navigation:C(a).sections},{default:e(()=>[t[68]||(t[68]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Java Switch Case ",-1)),s("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+E(F)),s("p",I,[t[3]||(t[3]=l(" The ",-1)),n(i,null,{default:e(()=>[...t[0]||(t[0]=[l("switch",-1)])]),_:1}),t[4]||(t[4]=l(" statement is used to execute different blocks of code depending on the value of a variable. It is commonly used when comparing one value against multiple possible choices. ",-1)),t[5]||(t[5]=s("br",null,null,-1)),t[6]||(t[6]=l(" Instead of writing many ",-1)),n(i,null,{default:e(()=>[...t[1]||(t[1]=[l("if-else",-1)])]),_:1}),t[7]||(t[7]=l(" statements, a ",-1)),n(i,null,{default:e(()=>[...t[2]||(t[2]=[l("switch",-1)])]),_:1}),t[8]||(t[8]=l(" statement provides a cleaner and easier-to-read solution. ",-1))]),t[69]||(t[69]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Switch Syntax ",-1)),s("div",M,[t[17]||(t[17]=l(" The basic structure of a switch statement is: ",-1)),n(o,{output:`\r
switch(expression){\r
	case value1:\r
		// code\r
		break;\r
	case value2:\r
		// code\r
		break;\r
	default:\r
		// code\r
}\r
			`}),t[18]||(t[18]=l(" Important parts: ",-1)),s("ul",B,[s("li",null,[n(i,null,{default:e(()=>[...t[9]||(t[9]=[l("switch",-1)])]),_:1}),t[10]||(t[10]=l(" contains the value being tested. ",-1))]),s("li",null,[n(i,null,{default:e(()=>[...t[11]||(t[11]=[l("case",-1)])]),_:1}),t[12]||(t[12]=l(" represents possible values. ",-1))]),s("li",null,[n(i,null,{default:e(()=>[...t[13]||(t[13]=[l("break",-1)])]),_:1}),t[14]||(t[14]=l(" stops the switch execution. ",-1))]),s("li",null,[n(i,null,{default:e(()=>[...t[15]||(t[15]=[l("default",-1)])]),_:1}),t[16]||(t[16]=l(" runs when no case matches. ",-1))])])]),t[70]||(t[70]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Switch Case ",-1)),s("div",J,[t[19]||(t[19]=l(" Sample Program ",-1)),n(r,{code:d.value,language:"java"},null,8,["code"]),t[20]||(t[20]=l(" Output ",-1)),n(o,{output:m.value},null,8,["output"])]),t[71]||(t[71]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The break Statement ",-1)),s("div",j,[t[24]||(t[24]=l(" The ",-1)),n(i,null,{default:e(()=>[...t[21]||(t[21]=[l("break",-1)])]),_:1}),t[25]||(t[25]=l(" statement is used to stop the switch after a matching case is found. ",-1)),t[26]||(t[26]=s("br",null,null,-1)),t[27]||(t[27]=l(" Without ",-1)),n(i,null,{default:e(()=>[...t[22]||(t[22]=[l("break",-1)])]),_:1}),t[28]||(t[28]=l(" , Java continues executing the following cases. ",-1)),t[29]||(t[29]=s("br",null,null,-1)),t[30]||(t[30]=s("br",null,null,-1)),t[31]||(t[31]=l(" Sample Program ",-1)),n(r,{code:p.value,language:"java"},null,8,["code"]),t[32]||(t[32]=l(" Output ",-1)),n(o,{output:g.value},null,8,["output"]),t[33]||(t[33]=l(" This behavior is called ",-1)),n(i,null,{default:e(()=>[...t[23]||(t[23]=[l("fall-through",-1)])]),_:1}),t[34]||(t[34]=l(" . ",-1))]),t[72]||(t[72]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The default Case ",-1)),s("div",N,[t[38]||(t[38]=l(" The ",-1)),n(i,null,{default:e(()=>[...t[35]||(t[35]=[l("default",-1)])]),_:1}),t[39]||(t[39]=l(" case executes when none of the cases match the given value. ",-1)),t[40]||(t[40]=s("br",null,null,-1)),t[41]||(t[41]=l(" It works similar to the ",-1)),n(i,null,{default:e(()=>[...t[36]||(t[36]=[l("else",-1)])]),_:1}),t[42]||(t[42]=l(" statement in an ",-1)),n(i,null,{default:e(()=>[...t[37]||(t[37]=[l("if-else",-1)])]),_:1}),t[43]||(t[43]=l(" condition. ",-1))]),t[73]||(t[73]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Multiple Cases ",-1)),s("div",U,[t[44]||(t[44]=l(" Multiple cases can execute the same block of code. ",-1)),t[45]||(t[45]=s("br",null,null,-1)),t[46]||(t[46]=s("br",null,null,-1)),t[47]||(t[47]=l(" Sample Program ",-1)),n(r,{code:b.value,language:"java"},null,8,["code"]),t[48]||(t[48]=l(" Output ",-1)),n(o,{output:x.value},null,8,["output"])]),t[74]||(t[74]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Switch with String Values ",-1)),s("div",V,[t[50]||(t[50]=l(" Java also allows ",-1)),n(i,null,{default:e(()=>[...t[49]||(t[49]=[l("String",-1)])]),_:1}),t[51]||(t[51]=l(" values inside switch statements. ",-1)),t[52]||(t[52]=s("br",null,null,-1)),t[53]||(t[53]=s("br",null,null,-1)),t[54]||(t[54]=l(" Sample Program ",-1)),n(r,{code:f.value,language:"java"},null,8,["code"]),t[55]||(t[55]=l(" Output ",-1)),n(o,{output:v.value},null,8,["output"])]),t[75]||(t[75]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Nested Switch ",-1)),s("div",A,[t[56]||(t[56]=l(" A nested switch is a switch statement placed inside another switch statement. It is useful when decisions depend on multiple categories. ",-1)),t[57]||(t[57]=s("br",null,null,-1)),t[58]||(t[58]=s("br",null,null,-1)),t[59]||(t[59]=l(" Sample Program ",-1)),n(r,{code:y.value,language:"java"},null,8,["code"]),t[60]||(t[60]=l(" Output ",-1)),n(o,{output:S.value},null,8,["output"])]),t[76]||(t[76]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Switch vs If-Else ",-1)),s("div",L,[s("ul",W,[s("li",null,[t[62]||(t[62]=l(" Use ",-1)),n(i,null,{default:e(()=>[...t[61]||(t[61]=[l("switch",-1)])]),_:1}),t[63]||(t[63]=l(" when checking one variable against many fixed values. ",-1))]),s("li",null,[t[65]||(t[65]=l(" Use ",-1)),n(i,null,{default:e(()=>[...t[64]||(t[64]=[l("if-else",-1)])]),_:1}),t[66]||(t[66]=l(" when using complex conditions. ",-1))]),t[67]||(t[67]=s("li",null," Switch statements are usually easier to read for menu systems. ",-1))])])]),_:1},8,["navigation"]))}});export{R as default};

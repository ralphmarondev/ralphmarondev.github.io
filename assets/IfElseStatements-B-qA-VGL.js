import{_ as k}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as i}from"./SpanHighlight-D5QJRDV8.js";import{C as r}from"./CodeBlock-DZMpBSrv.js";import{O as e}from"./OutputBlock-DUAjxao7.js";import{u as w}from"./javaProgramming-DvM3X4gn.js";import{d as O,h as C,i as o,s as E,o as I,a as n,t as T,g as l,q as s,r as u}from"./index-fUs2VaN6.js";const Y={class:"text-gray-600 mb-4 text-lg"},P={class:"list-disc list-inside space-y-1"},J={class:"text-gray-500 mb-4 text-lg"},M={class:"text-gray-500 mb-4 text-lg"},N={class:"text-gray-500 mb-4 text-lg"},j={class:"text-gray-500 mb-4 text-lg"},B={class:"text-gray-500 mb-4 text-lg"},L={class:"list-disc list-inside"},V={class:"text-gray-500 mb-4 text-lg"},A={class:"list-disc list-inside space-y-1"},q="July 14, 2026",K=O({__name:"IfElseStatements",setup(D){const d=w(),m=u(`
public class Main{
	public static void main(String[] args) {
		int age = 20;

		if(age >= 18){
			System.out.println("You are allowed to vote.");
		}
	}
}
`),a=u(`
You are allowed to vote.
`),p=u(`
public class Main{
	public static void main(String[] args) {
		int age = 15;

		if(age >= 18){
			System.out.println("You are an adult.");
		}
		else{
			System.out.println("You are a minor.");
		}
	}
}
`),f=u(`
You are a minor.
`),g=u(`
public class Main{
	public static void main(String[] args) {
		int score = 85;

		if(score >= 90){
			System.out.println("Excellent");
		}
		else if(score >= 80){
			System.out.println("Very Good");
		}
		else if(score >= 70){
			System.out.println("Good");
		}
		else{
			System.out.println("Needs Improvement");
		}
	}
}
`),b=u(`
Very Good
`),x=u(`
public class Main{
	public static void main(String[] args) {
		int age = 20;
		boolean hasLicense = true;

		if(age >= 18){
			if(hasLicense){
				System.out.println("You can drive.");
			}
			else{
				System.out.println("You need a license.");
			}
		}
		else{
			System.out.println("You are too young to drive.");
		}
	}
}
`),v=u(`
You can drive.
`),y=u(`
public class Main{
	public static void main(String[] args) {
		int age = 25;
		boolean hasID = true;

		if(age >= 18 && hasID){
			System.out.println("Access granted.");
		}
		else{
			System.out.println("Access denied.");
		}
	}
}
`),S=u(`
Access granted.
`);return(G,t)=>(I(),C(k,{title:"Java Programming",navigation:E(d).sections},{default:o(()=>[t[82]||(t[82]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Java If Else Statements ",-1)),n("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+T(q)),n("div",Y,[t[11]||(t[11]=l(" Programs often need to make decisions depending on certain conditions. Java uses conditional statements to execute different blocks of code based on whether a condition is ",-1)),s(i,null,{default:o(()=>[...t[0]||(t[0]=[l("true",-1)])]),_:1}),t[12]||(t[12]=l(" or ",-1)),s(i,null,{default:o(()=>[...t[1]||(t[1]=[l("false",-1)])]),_:1}),t[13]||(t[13]=l(" . ",-1)),t[14]||(t[14]=n("br",null,null,-1)),t[15]||(t[15]=n("br",null,null,-1)),t[16]||(t[16]=l(" The most common decision-making statements in Java are: ",-1)),n("ul",P,[n("li",null,[s(i,null,{default:o(()=>[...t[2]||(t[2]=[l("if",-1)])]),_:1}),t[3]||(t[3]=l(" statement ",-1))]),n("li",null,[s(i,null,{default:o(()=>[...t[4]||(t[4]=[l("if-else",-1)])]),_:1}),t[5]||(t[5]=l(" statement ",-1))]),n("li",null,[s(i,null,{default:o(()=>[...t[6]||(t[6]=[l("else-if",-1)])]),_:1}),t[7]||(t[7]=l(" ladder ",-1))]),n("li",null,[t[9]||(t[9]=l("Nested ",-1)),s(i,null,{default:o(()=>[...t[8]||(t[8]=[l("if",-1)])]),_:1}),t[10]||(t[10]=l(" statements ",-1))])])]),t[83]||(t[83]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The if Statement ",-1)),n("div",J,[t[18]||(t[18]=l(" The ",-1)),s(i,null,{default:o(()=>[...t[17]||(t[17]=[l("if",-1)])]),_:1}),t[19]||(t[19]=l(" statement executes a block of code only when its condition is true. ",-1)),t[20]||(t[20]=n("br",null,null,-1)),t[21]||(t[21]=n("br",null,null,-1)),t[22]||(t[22]=l(" Syntax: ",-1)),s(e,{output:`\r
if(condition){\r
	// code executes when condition is true\r
}`}),t[23]||(t[23]=n("br",null,null,-1)),t[24]||(t[24]=l(" Sample Program ",-1)),s(r,{code:m.value,language:"java"},null,8,["code"]),t[25]||(t[25]=l(" Output ",-1)),s(e,{output:a.value},null,8,["output"])]),t[84]||(t[84]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The if-else Statement ",-1)),n("div",M,[t[29]||(t[29]=l(" The ",-1)),s(i,null,{default:o(()=>[...t[26]||(t[26]=[l("if-else",-1)])]),_:1}),t[30]||(t[30]=l(" statement provides two possible paths. ",-1)),t[31]||(t[31]=n("br",null,null,-1)),t[32]||(t[32]=l(" If the condition is true, the ",-1)),s(i,null,{default:o(()=>[...t[27]||(t[27]=[l("if",-1)])]),_:1}),t[33]||(t[33]=l(" block runs. Otherwise, the ",-1)),s(i,null,{default:o(()=>[...t[28]||(t[28]=[l("else",-1)])]),_:1}),t[34]||(t[34]=l(" block runs. ",-1)),t[35]||(t[35]=n("br",null,null,-1)),t[36]||(t[36]=n("br",null,null,-1)),t[37]||(t[37]=l(" Syntax: ",-1)),s(e,{output:`\r
if(condition){\r
	// true block\r
}\r
else{\r
	// false block\r
}`}),t[38]||(t[38]=n("br",null,null,-1)),t[39]||(t[39]=l(" Sample Program ",-1)),s(r,{code:p.value,language:"java"},null,8,["code"]),t[40]||(t[40]=l(" Output ",-1)),s(e,{output:f.value},null,8,["output"])]),t[85]||(t[85]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The else-if Ladder ",-1)),n("div",N,[t[42]||(t[42]=l(" The ",-1)),s(i,null,{default:o(()=>[...t[41]||(t[41]=[l("else-if",-1)])]),_:1}),t[43]||(t[43]=l(" statement allows a program to test multiple conditions. Java checks conditions from top to bottom. The first condition that becomes true will execute. ",-1)),t[44]||(t[44]=n("br",null,null,-1)),t[45]||(t[45]=n("br",null,null,-1)),t[46]||(t[46]=l(" Sample Program ",-1)),s(r,{code:g.value,language:"java"},null,8,["code"]),t[47]||(t[47]=l(" Output ",-1)),s(e,{output:b.value},null,8,["output"])]),t[86]||(t[86]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Nested if Statements ",-1)),n("div",j,[t[51]||(t[51]=l(" A nested ",-1)),s(i,null,{default:o(()=>[...t[48]||(t[48]=[l("if",-1)])]),_:1}),t[52]||(t[52]=l(" statement is an ",-1)),s(i,null,{default:o(()=>[...t[49]||(t[49]=[l("if",-1)])]),_:1}),t[53]||(t[53]=l(" statement placed inside another ",-1)),s(i,null,{default:o(()=>[...t[50]||(t[50]=[l("if",-1)])]),_:1}),t[54]||(t[54]=l(" statement. It is useful when a second condition depends on the first condition being true. ",-1)),t[55]||(t[55]=n("br",null,null,-1)),t[56]||(t[56]=n("br",null,null,-1)),t[57]||(t[57]=l(" Sample Program ",-1)),s(r,{code:x.value,language:"java"},null,8,["code"]),t[58]||(t[58]=l(" Output ",-1)),s(e,{output:v.value},null,8,["output"])]),t[87]||(t[87]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," using Logical Operators with Conditions ",-1)),n("div",B,[t[65]||(t[65]=l(" Conditions can be combined using logical operators. ",-1)),t[66]||(t[66]=n("br",null,null,-1)),t[67]||(t[67]=n("br",null,null,-1)),t[68]||(t[68]=l(" Common examples: ",-1)),n("ul",L,[n("li",null,[s(i,null,{default:o(()=>[...t[59]||(t[59]=[l("&&",-1)])]),_:1}),t[60]||(t[60]=l(" requires all conditions to be true ",-1))]),n("li",null,[s(i,null,{default:o(()=>[...t[61]||(t[61]=[l("||",-1)])]),_:1}),t[62]||(t[62]=l(" requires at least one condition to be true ",-1))]),n("li",null,[s(i,null,{default:o(()=>[...t[63]||(t[63]=[l("!",-1)])]),_:1}),t[64]||(t[64]=l(" reverses a condition ",-1))])]),t[69]||(t[69]=n("br",null,null,-1)),t[70]||(t[70]=l(" Sample Program ",-1)),s(r,{code:y.value,language:"java"},null,8,["code"]),t[71]||(t[71]=l(" Output ",-1)),s(e,{output:S.value},null,8,["output"])]),t[88]||(t[88]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Common Mistakes ",-1)),n("div",V,[t[81]||(t[81]=l(" Common beginner mistakes when using conditional statements: ",-1)),n("ul",A,[n("li",null,[t[74]||(t[74]=l("Using ",-1)),s(i,null,{default:o(()=>[...t[72]||(t[72]=[l("=",-1)])]),_:1}),t[75]||(t[75]=l(" instead of ",-1)),s(i,null,{default:o(()=>[...t[73]||(t[73]=[l("==",-1)])]),_:1}),t[76]||(t[76]=l(" for comparison ",-1))]),n("li",null,[t[78]||(t[78]=l("Forgetting curly braces ",-1)),s(i,null,{default:o(()=>[...t[77]||(t[77]=[l("{ }",-1)])]),_:1})]),t[79]||(t[79]=n("li",null,"Writing conditions in the wrong order",-1)),t[80]||(t[80]=n("li",null,"Creating unnecessary nested conditions",-1))])])]),_:1},8,["navigation"]))}});export{K as default};

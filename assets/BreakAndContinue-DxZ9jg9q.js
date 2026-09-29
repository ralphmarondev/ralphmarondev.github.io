import{_ as k}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as s}from"./SpanHighlight-D5QJRDV8.js";import{C as e}from"./CodeBlock-DZMpBSrv.js";import{O as i}from"./OutputBlock-DUAjxao7.js";import{u as w}from"./javaProgramming-DvM3X4gn.js";import{d as O,h as P,i as u,s as T,o as B,a as n,t as C,g as l,q as o,r}from"./index-fUs2VaN6.js";const E={class:"text-gray-600 mb-4 text-lg"},J={class:"list-disc list-inside"},L={class:"text-gray-500 mb-4 text-lg"},j={class:"text-gray-500 mb-4 text-lg"},M={class:"text-gray-500 mb-4 text-lg"},N={class:"text-gray-500 mb-4 text-lg"},W={class:"text-gray-500 mb-4 text-lg"},U="July 17, 2026",F=O({__name:"BreakAndContinue",setup(V){const p=w(),m=r(`
public class Main{
	public static void main(String[] args) {
		for(int i = 1; i <= 10; i++){
			if(i == 6){
				break;
			}
			System.out.println(i);
		}
	}
}
`),d=r(`
1
2
3
4
5
`),a=r(`
public class Main{
	public static void main(String[] args) {
		int number = 1;

		while(true){
			System.out.println(number);
			if(number == 5){
				break;
			}
			number++;
		}
	}
}
`),b=r(`
1
2
3
4
5
`),g=r(`
public class Main{
	public static void main(String[] args) {
		for(int i = 1; i <= 5; i++){
			if(i == 3){
				continue;
			}
			System.out.println(i);
		}
	}
}
`),x=r(`
1
2
4
5
`),f=r(`
public class Main{
	public static void main(String[] args) {
		int number = 0;

		while(number < 5){
			number++;
			if(number == 3){
				continue;
			}
			System.out.println(number);
		}
	}
}
`),y=r(`
1
2
4
5
`),v=r(`
public class Main{
	public static void main(String[] args) {
		int[] numbers = {10, 20, 30, 40, 50};

		for(int number : numbers){
			if(number == 30){
				System.out.println("Number found!");
				break;
			}
			System.out.println(number);
		}
	}
}
`),S=r(`
10
20
Number found!
`);return(q,t)=>(B(),P(k,{title:"Java Programming",navigation:T(p).sections},{default:u(()=>[t[64]||(t[64]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Java Break and Continue ",-1)),n("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+C(U)),n("div",E,[t[5]||(t[5]=l(" Loop control statements allow programmers to change the normal execution flow of loops. ",-1)),t[6]||(t[6]=n("br",null,null,-1)),t[7]||(t[7]=l(" Java provides two important loop control statements: ",-1)),n("ul",J,[n("li",null,[o(s,null,{default:u(()=>[...t[0]||(t[0]=[l("break",-1)])]),_:1})]),n("li",null,[o(s,null,{default:u(()=>[...t[1]||(t[1]=[l("continue",-1)])]),_:1})])]),t[8]||(t[8]=n("br",null,null,-1)),t[9]||(t[9]=l(" These statements are commonly used inside ",-1)),o(s,null,{default:u(()=>[...t[2]||(t[2]=[l("for",-1)])]),_:1}),t[10]||(t[10]=l(" , ",-1)),o(s,null,{default:u(()=>[...t[3]||(t[3]=[l("while",-1)])]),_:1}),t[11]||(t[11]=l(" , and ",-1)),o(s,null,{default:u(()=>[...t[4]||(t[4]=[l("do-while",-1)])]),_:1}),t[12]||(t[12]=l(" loops. ",-1))]),t[65]||(t[65]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The break Statement ",-1)),n("div",L,[t[15]||(t[15]=l(" The ",-1)),o(s,null,{default:u(()=>[...t[13]||(t[13]=[l("break",-1)])]),_:1}),t[16]||(t[16]=l(" statement immediately terminates the loop. ",-1)),t[17]||(t[17]=n("br",null,null,-1)),t[18]||(t[18]=l(" Once Java encounters a ",-1)),o(s,null,{default:u(()=>[...t[14]||(t[14]=[l("break",-1)])]),_:1}),t[19]||(t[19]=l(" , the program exits the loop and continues executing the code after the loop. ",-1)),t[20]||(t[20]=n("br",null,null,-1)),t[21]||(t[21]=n("br",null,null,-1)),t[22]||(t[22]=l(" Syntax: ",-1)),o(i,{output:`\r
break;\r
`}),t[23]||(t[23]=n("br",null,null,-1)),t[24]||(t[24]=l(" Sample Program ",-1)),o(e,{code:m.value,language:"java"},null,8,["code"]),t[25]||(t[25]=l(" Output ",-1)),o(i,{output:d.value},null,8,["output"])]),t[66]||(t[66]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," break with while Loop ",-1)),n("div",j,[t[27]||(t[27]=l(" The ",-1)),o(s,null,{default:u(()=>[...t[26]||(t[26]=[l("break",-1)])]),_:1}),t[28]||(t[28]=l(" statement is useful when the stopping condition is inside the loop. ",-1)),t[29]||(t[29]=n("br",null,null,-1)),t[30]||(t[30]=n("br",null,null,-1)),t[31]||(t[31]=l(" Sample Program ",-1)),o(e,{code:a.value,language:"java"},null,8,["code"]),t[32]||(t[32]=l(" Output ",-1)),o(i,{output:b.value},null,8,["output"])]),t[67]||(t[67]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The continue Statement ",-1)),n("div",M,[t[36]||(t[36]=l(" The ",-1)),o(s,null,{default:u(()=>[...t[33]||(t[33]=[l("continue",-1)])]),_:1}),t[37]||(t[37]=l(" statement skips the current iteration of a loop. ",-1)),t[38]||(t[38]=n("br",null,null,-1)),t[39]||(t[39]=l(" Unlike ",-1)),o(s,null,{default:u(()=>[...t[34]||(t[34]=[l("break",-1)])]),_:1}),t[40]||(t[40]=l(" , ",-1)),o(s,null,{default:u(()=>[...t[35]||(t[35]=[l("continue",-1)])]),_:1}),t[41]||(t[41]=l(" does not stop the loop. The loop simply moves to the next iteration. ",-1)),t[42]||(t[42]=n("br",null,null,-1)),t[43]||(t[43]=n("br",null,null,-1)),t[44]||(t[44]=l(" Syntax: ",-1)),o(i,{output:`\r
continue;\r
`}),t[45]||(t[45]=n("br",null,null,-1)),t[46]||(t[46]=l(" Sample Program ",-1)),o(e,{code:g.value,language:"java"},null,8,["code"]),t[47]||(t[47]=l(" Output ",-1)),o(i,{output:x.value},null,8,["output"])]),t[68]||(t[68]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," continue with while Loop ",-1)),n("div",N,[t[50]||(t[50]=l(" The ",-1)),o(s,null,{default:u(()=>[...t[48]||(t[48]=[l("continue",-1)])]),_:1}),t[51]||(t[51]=l(" statement can also be used inside a ",-1)),o(s,null,{default:u(()=>[...t[49]||(t[49]=[l("while",-1)])]),_:1}),t[52]||(t[52]=l(" loop. ",-1)),t[53]||(t[53]=n("br",null,null,-1)),t[54]||(t[54]=n("br",null,null,-1)),t[55]||(t[55]=l(" Sample Program ",-1)),o(e,{code:f.value,language:"java"},null,8,["code"]),t[56]||(t[56]=l(" Output ",-1)),o(i,{output:y.value},null,8,["output"])]),t[69]||(t[69]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Practical Example: Searching Data ",-1)),n("div",W,[t[58]||(t[58]=l(" A common use of ",-1)),o(s,null,{default:u(()=>[...t[57]||(t[57]=[l("break",-1)])]),_:1}),t[59]||(t[59]=l(" is stopping a search once the required value is found. ",-1)),t[60]||(t[60]=n("br",null,null,-1)),t[61]||(t[61]=n("br",null,null,-1)),t[62]||(t[62]=l(" Sample Program ",-1)),o(e,{code:v.value,language:"java"},null,8,["code"]),t[63]||(t[63]=l(" Output ",-1)),o(i,{output:S.value},null,8,["output"])]),t[70]||(t[70]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," break vs continue ",-1)),t[71]||(t[71]=n("div",{class:"text-gray-500 mb-4 text-lg"},[n("table",{class:"table-auto border-collapse border border-gray-300"},[n("tr",null,[n("th",{class:"border px-4 py-2"}," Statement "),n("th",{class:"border px-4 py-2"}," Purpose "),n("th",{class:"border px-4 py-2"}," Result ")]),n("tr",null,[n("td",{class:"border px-4 py-2"}," break "),n("td",{class:"border px-4 py-2"}," Stops the loop "),n("td",{class:"border px-4 py-2"}," Loop ends immediately ")]),n("tr",null,[n("td",{class:"border px-4 py-2"}," continue "),n("td",{class:"border px-4 py-2"}," Skips current iteration "),n("td",{class:"border px-4 py-2"}," Loop continues ")])])],-1))]),_:1},8,["navigation"]))}});export{F as default};

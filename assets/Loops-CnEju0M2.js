import{_ as M}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{S as i}from"./SpanHighlight-C0NIfFE-.js";import{C as e}from"./CodeBlock-CjPs9I9U.js";import{O as r}from"./OutputBlock-BzLqeAqJ.js";import{u as P}from"./javaProgramming-3VCcq7Z_.js";import{d as E,r as s,p as T,l as u,m as j,o as J,a as o,t as U,b as l,k as n}from"./index-IauxWRt0.js";const B={class:"text-gray-600 mb-4 text-lg"},C={class:"list-disc list-inside"},N={class:"text-gray-500 mb-4 text-lg"},R={class:"text-gray-500 mb-4 text-lg"},V={class:"text-gray-500 mb-4 text-lg"},F={class:"text-gray-500 mb-4 text-lg"},I={class:"text-gray-500 mb-4 text-lg"},W={class:"text-gray-500 mb-4 text-lg"},z={class:"text-gray-500 mb-4 text-lg"},A={class:"text-gray-500 mb-4 text-lg"},D={class:"list-disc list-inside"},H="July 16, 2026",h=E({__name:"Loops",setup($){const d=P(),p=s(`
public class Main{
	public static void main(String[] args) {
		int number = 1;

		while(number <= 5){
			System.out.println(number);
			number++;
		}
	}
}
`),m=s(`
1
2
3
4
5
`),a=s(`
public class Main{
	public static void main(String[] args) {
		int number = 1;

		do{
			System.out.println(number);
			number++;
		}while(number <= 5);

	}
}
`),b=s(`
1
2
3
4
5
`),g=s(`
public class Main{
	public static void main(String[] args) {
		for(int i = 1; i <= 5; i++){
			System.out.println(i);
		}
	}
}
`),x=s(`
1
2
3
4
5
`),f=s(`
public class Main{
	public static void main(String[] args) {
		for(int row = 1; row <= 3; row++){
			for(int col = 1; col <= 3; col++){
				System.out.print("* ");
			}
			System.out.println();
		}
	}
}
`),v=s(`
* * *
* * *
* * *
`),y=s(`
public class Main{
	public static void main(String[] args) {
		String[] names = {
			"Ralph",
			"John",
			"Maria"
		};

		for(String name : names){
			System.out.println(name);
		}
	}
}
`),S=s(`
Ralph
John
Maria
`),w=s(`
public class Main{
	public static void main(String[] args) {
		for(int i = 1; i <= 10; i++){
			if(i == 5){
				break;
			}
			System.out.println(i);
		}
	}
}
`),k=s(`
1
2
3
4
`),O=s(`
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
`),L=s(`
1
2
4
5
`);return(q,t)=>(J(),T(M,{title:"Java Programming",navigation:j(d).sections},{default:u(()=>[t[81]||(t[81]=o("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Java Loops ",-1)),o("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+U(H)),o("div",B,[t[8]||(t[8]=l(" Loops are used to repeatedly execute a block of code while a condition is true. ",-1)),t[9]||(t[9]=o("br",null,null,-1)),t[10]||(t[10]=l(" Instead of writing the same code multiple times, programmers use loops to make programs shorter, cleaner, and easier to maintain. ",-1)),t[11]||(t[11]=o("br",null,null,-1)),t[12]||(t[12]=o("br",null,null,-1)),t[13]||(t[13]=l(" Java provides several types of loops: ",-1)),o("ul",C,[o("li",null,[n(i,null,{default:u(()=>[...t[0]||(t[0]=[l("while",-1)])]),_:1}),t[1]||(t[1]=l(" loop ",-1))]),o("li",null,[n(i,null,{default:u(()=>[...t[2]||(t[2]=[l("do-while",-1)])]),_:1}),t[3]||(t[3]=l(" loop ",-1))]),o("li",null,[n(i,null,{default:u(()=>[...t[4]||(t[4]=[l("for",-1)])]),_:1}),t[5]||(t[5]=l(" loop ",-1))]),o("li",null,[n(i,null,{default:u(()=>[...t[6]||(t[6]=[l("enhanced for",-1)])]),_:1}),t[7]||(t[7]=l(" loop ",-1))])])]),t[82]||(t[82]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," while Loop ",-1)),o("div",N,[t[15]||(t[15]=l(" The ",-1)),n(i,null,{default:u(()=>[...t[14]||(t[14]=[l("while",-1)])]),_:1}),t[16]||(t[16]=l(" loop executes a block of code as long as its condition remains true. ",-1)),t[17]||(t[17]=o("br",null,null,-1)),t[18]||(t[18]=o("br",null,null,-1)),t[19]||(t[19]=l(" Syntax: ",-1)),n(r,{output:`\r
while(condition){\r
	// code\r
}\r
`}),t[20]||(t[20]=o("br",null,null,-1)),t[21]||(t[21]=l(" Sample Program ",-1)),n(e,{code:p.value,language:"java"},null,8,["code"]),t[22]||(t[22]=l(" Output ",-1)),n(r,{output:m.value},null,8,["output"])]),t[83]||(t[83]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," do-while Loop ",-1)),o("div",R,[t[24]||(t[24]=l(" The ",-1)),n(i,null,{default:u(()=>[...t[23]||(t[23]=[l("do-while",-1)])]),_:1}),t[25]||(t[25]=l(" loop is similar to a while loop, but it always executes the code at least once before checking the condition. ",-1)),t[26]||(t[26]=o("br",null,null,-1)),t[27]||(t[27]=o("br",null,null,-1)),t[28]||(t[28]=l(" Syntax: ",-1)),n(r,{output:`\r
do {\r
	// code\r
} while(condition);\r
`}),t[29]||(t[29]=o("br",null,null,-1)),t[30]||(t[30]=l(" Sample Program ",-1)),n(e,{code:a.value,language:"java"},null,8,["code"]),t[31]||(t[31]=l(" Output ",-1)),n(r,{output:b.value},null,8,["output"])]),t[84]||(t[84]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," for Loop ",-1)),o("div",V,[t[33]||(t[33]=l(" The ",-1)),n(i,null,{default:u(()=>[...t[32]||(t[32]=[l("for",-1)])]),_:1}),t[34]||(t[34]=l(" loop is commonly used when the number of repetitions is known. ",-1)),t[35]||(t[35]=o("br",null,null,-1)),t[36]||(t[36]=o("br",null,null,-1)),t[37]||(t[37]=l(" Syntax: ",-1)),n(r,{output:`\r
for(initialization; condition; update){\r
	// code\r
}\r
`}),t[38]||(t[38]=o("br",null,null,-1)),t[39]||(t[39]=l(" Sample Program ",-1)),n(e,{code:g.value,language:"java"},null,8,["code"]),t[40]||(t[40]=l(" Output ",-1)),n(r,{output:x.value},null,8,["output"])]),t[85]||(t[85]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Nested Loops ",-1)),o("div",F,[t[41]||(t[41]=l(" A nested loop is a loop placed inside another loop. ",-1)),t[42]||(t[42]=o("br",null,null,-1)),t[43]||(t[43]=l(" The inner loop completes all iterations before the outer loop moves to the next iteration. ",-1)),t[44]||(t[44]=o("br",null,null,-1)),t[45]||(t[45]=o("br",null,null,-1)),t[46]||(t[46]=l(" Sample Program ",-1)),n(e,{code:f.value,language:"java"},null,8,["code"]),t[47]||(t[47]=l(" Output ",-1)),n(r,{output:v.value},null,8,["output"])]),t[86]||(t[86]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Enhanced for Loop ",-1)),o("div",I,[t[49]||(t[49]=l(" The enhanced ",-1)),n(i,null,{default:u(()=>[...t[48]||(t[48]=[l("for",-1)])]),_:1}),t[50]||(t[50]=l(" loop is commonly used for arrays and collections. It automatically gets each element without needing an index. ",-1)),t[51]||(t[51]=o("br",null,null,-1)),t[52]||(t[52]=o("br",null,null,-1)),t[53]||(t[53]=l(" Sample Program ",-1)),n(e,{code:y.value,language:"java"},null,8,["code"]),t[54]||(t[54]=l(" Output ",-1)),n(r,{output:S.value},null,8,["output"])]),t[87]||(t[87]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," break Statement ",-1)),o("div",W,[t[56]||(t[56]=l(" The ",-1)),n(i,null,{default:u(()=>[...t[55]||(t[55]=[l("break",-1)])]),_:1}),t[57]||(t[57]=l(" statement immediately stops the loop. ",-1)),t[58]||(t[58]=o("br",null,null,-1)),t[59]||(t[59]=o("br",null,null,-1)),t[60]||(t[60]=l(" Sample Program ",-1)),n(e,{code:w.value,language:"java"},null,8,["code"]),t[61]||(t[61]=l(" Output ",-1)),n(r,{output:k.value},null,8,["output"])]),t[88]||(t[88]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," continue Statement ",-1)),o("div",z,[t[63]||(t[63]=l(" The ",-1)),n(i,null,{default:u(()=>[...t[62]||(t[62]=[l("continue",-1)])]),_:1}),t[64]||(t[64]=l(" statement skips the current iteration and moves to the next one. ",-1)),t[65]||(t[65]=o("br",null,null,-1)),t[66]||(t[66]=o("br",null,null,-1)),t[67]||(t[67]=l(" Sample Program ",-1)),n(e,{code:O.value,language:"java"},null,8,["code"]),t[68]||(t[68]=l(" Output ",-1)),n(r,{output:L.value},null,8,["output"])]),t[89]||(t[89]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Choosing the Right Loop ",-1)),o("div",A,[o("ul",D,[o("li",null,[t[70]||(t[70]=l(" Use ",-1)),n(i,null,{default:u(()=>[...t[69]||(t[69]=[l("for",-1)])]),_:1}),t[71]||(t[71]=l(" when the number of repetitions is known. ",-1))]),o("li",null,[t[73]||(t[73]=l(" Use ",-1)),n(i,null,{default:u(()=>[...t[72]||(t[72]=[l("while",-1)])]),_:1}),t[74]||(t[74]=l(" when the repetition depends on a condition. ",-1))]),o("li",null,[t[76]||(t[76]=l(" Use ",-1)),n(i,null,{default:u(()=>[...t[75]||(t[75]=[l("do-while",-1)])]),_:1}),t[77]||(t[77]=l(" when the code must execute at least once. ",-1))]),o("li",null,[t[79]||(t[79]=l(" Use enhanced ",-1)),n(i,null,{default:u(()=>[...t[78]||(t[78]=[l("for",-1)])]),_:1}),t[80]||(t[80]=l(" for arrays and collections. ",-1))])])])]),_:1},8,["navigation"]))}});export{h as default};

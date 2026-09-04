import{_ as P}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as o}from"./SpanHighlight-C-B7JT-9.js";import{C as e}from"./CodeBlock-DXevIYip.js";import{O as i}from"./OutputBlock-DW4hv_11.js";import{u as w}from"./javaProgramming-Pq2XLaCP.js";import{d as T,r as u,p as C,l as r,m as E,o as I,a as l,t as j,b as s,k as n}from"./index-DaKFBQPl.js";const k={class:"text-gray-500 mb-4 text-lg"},J={class:"text-gray-500 mb-4 text-lg"},L={class:"list-disc list-inside"},N={class:"text-gray-500 mb-4 text-lg"},R={class:"list-disc list-inside"},B={class:"text-gray-500 mb-4 text-lg"},U={class:"list-disc list-inside"},q={class:"text-gray-500 mb-4 text-lg"},V={class:"list-disc list-inside"},G={class:"text-gray-500 mb-4 text-lg"},F={class:"text-gray-500 mb-4 text-lg"},H="July 13, 2026",_=T({__name:"OperatorsIndex",setup($){const a=w(),p=u(`
public class Main{
	public static void main(String[] args) {
		int a = 10;
		int b = 3;

		System.out.println("Addition: " + (a + b));
		System.out.println("Subtraction: " + (a - b));
		System.out.println("Multiplication: " + (a * b));
		System.out.println("Division: " + (a / b));
		System.out.println("Modulus: " + (a % b));
	}
}
`),d=u(`
Addition: 13
Subtraction: 7
Multiplication: 30
Division: 3
Modulus: 1
`),m=u(`
public class Main{
	public static void main(String[] args) {
		int score = 10;

		score += 5;
		System.out.println(score);

		score -= 3;
		System.out.println(score);
	}
}
`),g=u(`
15
12
`),b=u(`
public class Main{
	public static void main(String[] args) {
		int number = 5;
		System.out.println(number);

		number++;
		System.out.println(number);

		number--;
		System.out.println(number);
	}
}
`),y=u(`
5
6
5
`),x=u(`
public class Main{
	public static void main(String[] args) {

		int age = 20;

		System.out.println(age >= 18);
		System.out.println(age == 15);
		System.out.println(age != 10);
	}
}
`),v=u(`
true
false
true
`),f=u(`
public class Main{
	public static void main(String[] args) {

		int age = 20;
		boolean hasID = true;

		System.out.println(age >= 18 && hasID);
		System.out.println(age < 18 || hasID);
		System.out.println(!hasID);
	}
}
`),S=u(`
true
true
false
`),O=u(`
public class Main{
	public static void main(String[] args) {
		int age = 20;
		String result = age >= 18 ? "Adult" : "Minor";

		System.out.println(result);
	}
}
`),A=u(`
Adult
`),M=u(`
public class Main{
	public static void main(String[] args) {
		int result = 5 + 3 * 2;

		System.out.println(result);
	}
}
`),D=u(`
11
`);return(z,t)=>(I(),C(P,{title:"Java Programming",navigation:E(a).sections},{default:r(()=>[t[82]||(t[82]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Java Operators ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+j(H)),t[83]||(t[83]=l("div",{class:"text-gray-600 mb-4 text-lg"},[s(" Operators are special symbols used to perform operations on variables and values. They allow programs to perform calculations, compare values, and create logical decisions. "),l("br"),l("br"),s(" Java provides different types of operators: "),l("ul",{class:"list-disc list-inside space-y-1 mt-2"},[l("li",null,"Arithmetic Operators"),l("li",null,"Assignment Operators"),l("li",null,"Unary Operators"),l("li",null,"Relational Operators"),l("li",null,"Logical Operators"),l("li",null,"Ternary Operator")])],-1)),t[84]||(t[84]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Arithmetic Operators ",-1)),l("div",k,[t[0]||(t[0]=s(" Arithmetic operators are used to perform mathematical calculations. ",-1)),t[1]||(t[1]=l("br",null,null,-1)),t[2]||(t[2]=l("br",null,null,-1)),t[3]||(t[3]=l("table",{class:"table-auto border-collapse border border-gray-300"},[l("tr",null,[l("th",{class:"border px-4 py-2"},"Operator"),l("th",{class:"border px-4 py-2"},"Description")]),l("tr",null,[l("td",{class:"border px-4 py-2"},"+"),l("td",{class:"border px-4 py-2"},"Addition")]),l("tr",null,[l("td",{class:"border px-4 py-2"},"-"),l("td",{class:"border px-4 py-2"},"Subtraction")]),l("tr",null,[l("td",{class:"border px-4 py-2"},"*"),l("td",{class:"border px-4 py-2"},"Multiplication")]),l("tr",null,[l("td",{class:"border px-4 py-2"},"/"),l("td",{class:"border px-4 py-2"},"Division")]),l("tr",null,[l("td",{class:"border px-4 py-2"},"%"),l("td",{class:"border px-4 py-2"},"Remainder")])],-1)),t[4]||(t[4]=l("br",null,null,-1)),t[5]||(t[5]=s(" Sample Program ",-1)),n(e,{code:p.value,language:"java"},null,8,["code"]),t[6]||(t[6]=s(" Output ",-1)),n(i,{output:d.value},null,8,["output"])]),t[85]||(t[85]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Assignment Operators ",-1)),l("div",J,[t[17]||(t[17]=s(" Assignment operators are used to assign or update values stored inside variables. ",-1)),t[18]||(t[18]=l("br",null,null,-1)),t[19]||(t[19]=s(" Common assignment operators: ",-1)),l("ul",L,[l("li",null,[n(o,null,{default:r(()=>[...t[7]||(t[7]=[s("=",-1)])]),_:1}),t[8]||(t[8]=s(" Assign value ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[9]||(t[9]=[s("+=",-1)])]),_:1}),t[10]||(t[10]=s(" Add and assign ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[11]||(t[11]=[s("-=",-1)])]),_:1}),t[12]||(t[12]=s(" Subtract and assign ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[13]||(t[13]=[s("*=",-1)])]),_:1}),t[14]||(t[14]=s(" Multiply and assign ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[15]||(t[15]=[s("/=",-1)])]),_:1}),t[16]||(t[16]=s(" Divide and assign ",-1))])]),t[20]||(t[20]=l("br",null,null,-1)),t[21]||(t[21]=s(" Sample Program ",-1)),n(e,{code:m.value,language:"java"},null,8,["code"]),t[22]||(t[22]=s(" Output ",-1)),n(i,{output:g.value},null,8,["output"])]),t[86]||(t[86]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Unary Operators ",-1)),l("div",N,[t[29]||(t[29]=s(" Unary operators work with only one operand. They are commonly used for increasing, decreasing, or reversing values. ",-1)),t[30]||(t[30]=l("br",null,null,-1)),t[31]||(t[31]=s(" Common unary operators: ",-1)),l("ul",R,[l("li",null,[n(o,null,{default:r(()=>[...t[23]||(t[23]=[s("++",-1)])]),_:1}),t[24]||(t[24]=s(" Increase value by 1 ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[25]||(t[25]=[s("--",-1)])]),_:1}),t[26]||(t[26]=s(" Decrease value by 1 ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[27]||(t[27]=[s("!",-1)])]),_:1}),t[28]||(t[28]=s(" Reverse boolean value ",-1))])]),t[32]||(t[32]=l("br",null,null,-1)),t[33]||(t[33]=s(" Sample Program ",-1)),n(e,{code:b.value,language:"java"},null,8,["code"]),t[34]||(t[34]=s(" Output ",-1)),n(i,{output:y.value},null,8,["output"])]),t[87]||(t[87]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Relational Operators ",-1)),l("div",B,[t[49]||(t[49]=s(" Relational operators are used to compare two values. The result of a comparison is always a ",-1)),n(o,null,{default:r(()=>[...t[35]||(t[35]=[s("true",-1)])]),_:1}),t[50]||(t[50]=s(" or ",-1)),n(o,null,{default:r(()=>[...t[36]||(t[36]=[s("false",-1)])]),_:1}),t[51]||(t[51]=s(" value. ",-1)),t[52]||(t[52]=l("br",null,null,-1)),t[53]||(t[53]=s(" Common relational operators: ",-1)),l("ul",U,[l("li",null,[n(o,null,{default:r(()=>[...t[37]||(t[37]=[s("==",-1)])]),_:1}),t[38]||(t[38]=s(" Equal to ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[39]||(t[39]=[s("!=",-1)])]),_:1}),t[40]||(t[40]=s(" Not equal to ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[41]||(t[41]=[s(">",-1)])]),_:1}),t[42]||(t[42]=s(" Greater than ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[43]||(t[43]=[s("<",-1)])]),_:1}),t[44]||(t[44]=s(" Less than ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[45]||(t[45]=[s(">=",-1)])]),_:1}),t[46]||(t[46]=s(" Greater than or equal ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[47]||(t[47]=[s("<=",-1)])]),_:1}),t[48]||(t[48]=s(" Less than or equal ",-1))])]),t[54]||(t[54]=l("br",null,null,-1)),t[55]||(t[55]=s(" Sample Program ",-1)),n(e,{code:x.value,language:"java"},null,8,["code"]),t[56]||(t[56]=s(" Output ",-1)),n(i,{output:v.value},null,8,["output"])]),t[88]||(t[88]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Logical Operators ",-1)),l("div",q,[t[63]||(t[63]=s(" Logical operators are used to combine multiple conditions. ",-1)),t[64]||(t[64]=l("br",null,null,-1)),t[65]||(t[65]=s(" Common logical operators: ",-1)),l("ul",V,[l("li",null,[n(o,null,{default:r(()=>[...t[57]||(t[57]=[s("&&",-1)])]),_:1}),t[58]||(t[58]=s(" AND - both conditions must be true ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[59]||(t[59]=[s("||",-1)])]),_:1}),t[60]||(t[60]=s(" OR - at least one condition must be true ",-1))]),l("li",null,[n(o,null,{default:r(()=>[...t[61]||(t[61]=[s("!",-1)])]),_:1}),t[62]||(t[62]=s(" NOT - reverses the result ",-1))])]),t[66]||(t[66]=l("br",null,null,-1)),t[67]||(t[67]=s(" Sample Program ",-1)),n(e,{code:f.value,language:"java"},null,8,["code"]),t[68]||(t[68]=s(" Output ",-1)),n(i,{output:S.value},null,8,["output"])]),t[89]||(t[89]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Ternary Operator ",-1)),l("div",G,[t[70]||(t[70]=s(" The ternary operator is a shorter way of writing a simple ",-1)),n(o,null,{default:r(()=>[...t[69]||(t[69]=[s("if-else",-1)])]),_:1}),t[71]||(t[71]=s(" statement. ",-1)),t[72]||(t[72]=l("br",null,null,-1)),t[73]||(t[73]=s(" Syntax: ",-1)),n(i,{output:"condition ? valueIfTrue : valueIfFalse;"}),t[74]||(t[74]=l("br",null,null,-1)),t[75]||(t[75]=s(" Sample Program ",-1)),n(e,{code:O.value,language:"java"},null,8,["code"]),t[76]||(t[76]=s(" Output ",-1)),n(i,{output:A.value},null,8,["output"])]),t[90]||(t[90]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Operator Precedence ",-1)),l("div",F,[t[77]||(t[77]=s(" Operator precedence determines the order in which Java evaluates expressions. ",-1)),t[78]||(t[78]=l("br",null,null,-1)),t[79]||(t[79]=l("br",null,null,-1)),t[80]||(t[80]=s(" Sample Program ",-1)),n(e,{code:M.value,language:"java"},null,8,["code"]),t[81]||(t[81]=s(" Output ",-1)),n(i,{output:D.value},null,8,["output"])])]),_:1},8,["navigation"]))}});export{_ as default};

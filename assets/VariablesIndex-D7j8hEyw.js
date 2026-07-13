import{_ as d}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BX7JLS4I.js";import{u as m}from"./javaProgramming-CiZirN6J.js";import{S as n}from"./SpanHighlight-DcFtzQdB.js";import{O as r}from"./OutputBlock-CIA53ZQ5.js";import{d as g,r as a,p,l as e,m as b,o as x,a as s,t as f,b as l,k as i,_ as y}from"./index-BPX1bKrC.js";const v={class:"text-gray-600 mb-4 text-lg"},S={class:"text-gray-500 mb-4 text-lg"},w={class:"list-disc list-inside space-y-1"},V={class:"text-gray-500 mb-2 text-lg"},N={class:"list-disc list-inside space-y-1"},k={class:"text-gray-500 mb-2 text-lg"},T="July 11, 2026",C=g({__name:"VariablesIndex",setup(D){const o=m(),u=a(`
int age;
double salary;
String firstName;
boolean isCute;
`);return a(`
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
`),a(`
20
5.7
A
Ralph
true
`),a(`
int x, y, z;
double length, width;
String firstName, lastName;
`),(B,t)=>(x(),p(d,{title:"Java Programming",navigation:b(o).sections},{default:e(()=>[t[35]||(t[35]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Variables in Java",-1)),s("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+f(T)),s("p",v,[t[1]||(t[1]=l(" A variable is a ",-1)),i(n,null,{default:e(()=>[...t[0]||(t[0]=[l("named storage location",-1)])]),_:1}),t[2]||(t[2]=l(" used to hold data while a program is running. Instead of writing the same value repeatedly, we can store it in a variable and use it whenever it is needed. ",-1))]),s("div",S,[t[12]||(t[12]=l(" Think of a variable as a labeled container: ",-1)),s("ul",w,[s("li",null,[t[4]||(t[4]=l(" The ",-1)),i(n,null,{default:e(()=>[...t[3]||(t[3]=[l("name",-1)])]),_:1}),t[5]||(t[5]=l(" identifies the variable. ",-1))]),s("li",null,[t[7]||(t[7]=l(" The ",-1)),i(n,null,{default:e(()=>[...t[6]||(t[6]=[l("data type",-1)])]),_:1}),t[8]||(t[8]=l(" determines what kind of value it can store. ",-1))]),s("li",null,[t[10]||(t[10]=l(" The ",-1)),i(n,null,{default:e(()=>[...t[9]||(t[9]=[l("value",-1)])]),_:1}),t[11]||(t[11]=l(" is the information stored inside the variable. ",-1))])])]),t[36]||(t[36]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Why Do We Need Variables? ",-1)),t[37]||(t[37]=s("div",{class:"text-gray-500 mb-2 text-lg"},[l(" Without variables, programs would become difficult to write and maintain because: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Values would need to be typed repeatedly."),s("li",null,"Updating a value would require changing it everywhere."),s("li",null,"Programs would be harder to read.")]),l(" Variables allows us to: "),s("ul",{class:"list-disc list-inside space-y-1"},[s("li",null,"Store information"),s("li",null,"Reuse values"),s("li",null,"Update values"),s("li",null,"Write cleaner programs")])],-1)),t[38]||(t[38]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring Variables ",-1)),s("div",V,[t[33]||(t[33]=l(" Explanation ",-1)),s("ul",N,[s("li",null,[i(n,null,{default:e(()=>[...t[13]||(t[13]=[l("int",-1)])]),_:1}),t[18]||(t[18]=l(" , ",-1)),i(n,null,{default:e(()=>[...t[14]||(t[14]=[l("double",-1)])]),_:1}),t[19]||(t[19]=l(" , ",-1)),i(n,null,{default:e(()=>[...t[15]||(t[15]=[l("char",-1)])]),_:1}),t[20]||(t[20]=l(" , ",-1)),i(n,null,{default:e(()=>[...t[16]||(t[16]=[l("String",-1)])]),_:1}),t[21]||(t[21]=l(" , and ",-1)),i(n,null,{default:e(()=>[...t[17]||(t[17]=[l("boolean",-1)])]),_:1}),t[22]||(t[22]=l(" are data types. ",-1))]),s("li",null,[i(n,null,{default:e(()=>[...t[23]||(t[23]=[l("age",-1)])]),_:1}),t[28]||(t[28]=l(" , ",-1)),i(n,null,{default:e(()=>[...t[24]||(t[24]=[l("height",-1)])]),_:1}),t[29]||(t[29]=l(" , ",-1)),i(n,null,{default:e(()=>[...t[25]||(t[25]=[l("grade",-1)])]),_:1}),t[30]||(t[30]=l(" , ",-1)),i(n,null,{default:e(()=>[...t[26]||(t[26]=[l("name",-1)])]),_:1}),t[31]||(t[31]=l(" , and ",-1)),i(n,null,{default:e(()=>[...t[27]||(t[27]=[l("passed",-1)])]),_:1}),t[32]||(t[32]=l(" are variable names. ",-1))])])]),t[39]||(t[39]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Declaration Syntax ",-1)),s("div",k,[i(r,{output:"dataType variableName"}),t[34]||(t[34]=l(" Examples ",-1)),i(r,{output:u.value},null,8,["output"])]),t[40]||(t[40]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[41]||(t[41]=s("div",{class:"text-gray-500 mb-2 text-lg"},null,-1)),t[42]||(t[42]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[43]||(t[43]=s("div",{class:"text-gray-500 mb-2 text-lg"},null,-1))]),_:1},8,["navigation"]))}}),E=y(C,[["__scopeId","data-v-033f786d"]]);export{E as default};

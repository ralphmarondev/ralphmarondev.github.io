import{_ as O}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-pHU7Iykn.js";import{S as o}from"./SpanHighlight--pKwlohn.js";import{u as k}from"./javaProgramming-qhw1dUpK.js";import{O as r}from"./OutputBlock-3JjA_7_X.js";import{C as i}from"./CodeBlock-Dq1Y_ZOo.js";import{d as B,r as u,p as L,l as s,m as P,o as R,a as l,t as T,b as n,k as e}from"./index-DzB2MRah.js";const D={class:"text-gray-600 mb-4 text-lg"},M={class:"text-gray-500 mb-4 text-lg"},C={class:"text-gray-500 mb-4 text-lg"},N={class:"list-disc list-inside space-y-1"},F={class:"text-2xl font-semibold text-gray-800 mb-2"},H={class:"text-gray-500 mb-4 text-lg"},J={class:"list-disc list-inside space-y-1"},Y={class:"text-2xl font-semibold text-gray-800 mb-2"},V={class:"text-gray-500 mb-4 text-lg"},A={class:"text-2xl font-semibold text-gray-800 mb-2"},G={class:"text-gray-500 mb-4 text-lg"},U={class:"text-2xl font-semibold text-gray-800 mb-2"},q={class:"text-gray-500 mb-4 text-lg"},W={class:"text-2xl font-semibold text-gray-800 mb-2"},$={class:"text-gray-500 mb-4 text-lg"},z={class:"text-2xl font-semibold text-gray-800 mb-2"},K={class:"text-gray-500 mb-4 text-lg"},Q={class:"text-2xl font-semibold text-gray-800 mb-2"},X={class:"text-gray-500 mb-4 text-lg"},Z="July 11, 2026",ot=B({__name:"InputIndex",setup(h){const a=k(),m=u(`
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your name: ");
		String name = scanner.nextLine();

		System.out.println("Hello there, " + name + "!");
	}
}
`),d=u(`
Enter your name: Ralph Maron Eda
Hello there, Ralph Maron Eda!
`),g=u(`
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your age: ");
		int age = scanner.nextInt();

		System.out.println("Your age is " + age);
	}
}
`),x=u(`
Enter your age: 20
Your age is 20
`),p=u(`
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your population count: ");
		long population = scanner.nextLong();

		System.out.println("Population: " + population);
	}
}
`),b=u(`
Enter your population count: 1234567890
Population: 1234567890
`),y=u(`
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your grade: ");
		double grade = scanner.nextDouble();

		System.out.println("Grade: " + grade);
	}
}
`),f=u(`
Enter your grade: 95.75
Grade: 95.75
`),S=u(`
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your height (in meters): ");
		float height = scanner.nextFloat();

		System.out.println("Your height is " + height + " meters.");
	}
}
`),v=u(`
Enter your height (in meters): 1.75
Your height is 1.75 meters.
`),E=u(`
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Enter your first name: ");
		String firstName = scanner.next();

		System.out.println("Hello, " + firstName);
	}
}
`),w=u(`
Enter your first name: Ralph
Hello, Ralph
`),I=u(`
import java.util.Scanner;

public class Main{
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		System.out.print("Are you cute? [true/false]: ");
		boolean isCute = scanner.nextBoolean();

		System.out.println(isCute);
	}
}
`),j=u(`
Are you cute? [true/false]: true
true
`);return(_,t)=>(R(),L(O,{title:"Java Programming",navigation:P(a).sections},{default:s(()=>[t[116]||(t[116]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Java Input ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+T(Z)),l("p",D,[t[1]||(t[1]=n(" Programming become more interactive when they can receive information from the user. ",-1)),t[2]||(t[2]=l("br",null,null,-1)),t[3]||(t[3]=n(" In Java, keyboard input is commonly handled using the ",-1)),e(o,null,{default:s(()=>[...t[0]||(t[0]=[n("Scanner",-1)])]),_:1}),t[4]||(t[4]=n(" class. In this lesson, you will learn how to read input from the keyboard and understand the most commonly used Scanner methods. ",-1))]),t[117]||(t[117]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Importing Scanner ",-1)),l("div",M,[t[6]||(t[6]=n(" Before using the ",-1)),e(o,null,{default:s(()=>[...t[5]||(t[5]=[n("Scanner",-1)])]),_:1}),t[7]||(t[7]=n(" class, it must first be imported. ",-1)),e(r,{output:"import java.util.Scanner;"})]),t[118]||(t[118]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Creating a Scanner Object ",-1)),l("div",C,[t[16]||(t[16]=n(" Create a Scanner object to read input from the keyboard. ",-1)),e(r,{output:"Scanner scanner = new Scanner(System.in);"}),t[17]||(t[17]=n(" Explanation ",-1)),l("ul",N,[l("li",null,[e(o,null,{default:s(()=>[...t[8]||(t[8]=[n("Scanner",-1)])]),_:1}),t[9]||(t[9]=n(" is the class. ",-1))]),l("li",null,[e(o,null,{default:s(()=>[...t[10]||(t[10]=[n("scanner",-1)])]),_:1}),t[11]||(t[11]=n(" is the object name. ",-1))]),l("li",null,[e(o,null,{default:s(()=>[...t[12]||(t[12]=[n("new",-1)])]),_:1}),t[13]||(t[13]=n(" creates a new object. ",-1))]),l("li",null,[e(o,null,{default:s(()=>[...t[14]||(t[14]=[n("System.in",-1)])]),_:1}),t[15]||(t[15]=n(" represents keyboard input. ",-1))])])]),l("h2",F,[t[19]||(t[19]=n(" Reading a String ( ",-1)),e(o,null,{default:s(()=>[...t[18]||(t[18]=[n("nextLine()",-1)])]),_:1}),t[20]||(t[20]=n(" ) ",-1))]),l("div",H,[t[28]||(t[28]=n(" The ",-1)),e(o,null,{default:s(()=>[...t[21]||(t[21]=[n("nextLine()",-1)])]),_:1}),t[29]||(t[29]=n(" method reads an entire line of text entered by the user, including spaces. It is commonly used when asking for information such as a person's full name, address, or any sentence. ",-1)),t[30]||(t[30]=l("br",null,null,-1)),t[31]||(t[31]=l("br",null,null,-1)),t[32]||(t[32]=n(" Sample Program ",-1)),e(i,{code:m.value,language:"java"},null,8,["code"]),t[33]||(t[33]=n(" Output ",-1)),e(r,{output:d.value},null,8,["output"]),t[34]||(t[34]=n(" Explanation ",-1)),t[35]||(t[35]=l("br",null,null,-1)),l("ul",J,[l("li",null,[e(o,null,{default:s(()=>[...t[22]||(t[22]=[n("nextLine()",-1)])]),_:1}),t[23]||(t[23]=n(" reads the entire line of text. ",-1))]),l("li",null,[t[25]||(t[25]=n("The value is stored inside the variable ",-1)),e(o,null,{default:s(()=>[...t[24]||(t[24]=[n("name",-1)])]),_:1}),t[26]||(t[26]=n(" . ",-1))]),t[27]||(t[27]=l("li",null,"The variable is then used later in the program.",-1))])]),l("h2",Y,[t[37]||(t[37]=n(" Reading a Single Word ( ",-1)),e(o,null,{default:s(()=>[...t[36]||(t[36]=[n("next()",-1)])]),_:1}),t[38]||(t[38]=n(" ) ",-1))]),l("div",V,[t[40]||(t[40]=n(" The ",-1)),e(o,null,{default:s(()=>[...t[39]||(t[39]=[n("next()",-1)])]),_:1}),t[41]||(t[41]=n(" method reads only one word from the keyboard. Reading stops when a space or the Enter key is encountered. It is useful for inputs such as first name, username, or country. ",-1)),t[42]||(t[42]=l("br",null,null,-1)),t[43]||(t[43]=l("br",null,null,-1)),t[44]||(t[44]=n(" Sample Program ",-1)),e(i,{code:E.value,language:"java"},null,8,["code"]),t[45]||(t[45]=n(" Output ",-1)),e(r,{output:w.value},null,8,["output"])]),l("h2",A,[t[47]||(t[47]=n(" Reading an Integer ( ",-1)),e(o,null,{default:s(()=>[...t[46]||(t[46]=[n("nextInt()",-1)])]),_:1}),t[48]||(t[48]=n(" ) ",-1))]),l("div",G,[t[51]||(t[51]=n(" The ",-1)),e(o,null,{default:s(()=>[...t[49]||(t[49]=[n("nextInt()",-1)])]),_:1}),t[52]||(t[52]=n(" method reads a whole number entered by the user and stores it in an ",-1)),e(o,null,{default:s(()=>[...t[50]||(t[50]=[n("int",-1)])]),_:1}),t[53]||(t[53]=n(" variable. It is commonly used for values such as age, quantity, or the number of students. The entered value can then be used anywhere in the program. ",-1)),t[54]||(t[54]=l("br",null,null,-1)),t[55]||(t[55]=l("br",null,null,-1)),t[56]||(t[56]=n(" Sample Program ",-1)),e(i,{code:g.value,language:"java"},null,8,["code"]),t[57]||(t[57]=n(" Output ",-1)),e(r,{output:x.value},null,8,["output"])]),l("h2",U,[t[59]||(t[59]=n(" Reading a Decimal Number ( ",-1)),e(o,null,{default:s(()=>[...t[58]||(t[58]=[n("nextDouble()",-1)])]),_:1}),t[60]||(t[60]=n(" ) ",-1))]),l("div",q,[t[63]||(t[63]=n(" The ",-1)),e(o,null,{default:s(()=>[...t[61]||(t[61]=[n("nextDouble()",-1)])]),_:1}),t[64]||(t[64]=n(" method reads a decimal number from the keyboard and stores it in a ",-1)),e(o,null,{default:s(()=>[...t[62]||(t[62]=[n("double",-1)])]),_:1}),t[65]||(t[65]=n(" variable. It is commonly used for values such as grades, prices, temperatures, and measurements. ",-1)),t[66]||(t[66]=l("br",null,null,-1)),t[67]||(t[67]=l("br",null,null,-1)),t[68]||(t[68]=n(" Sample Program ",-1)),e(i,{code:y.value,language:"java"},null,8,["code"]),t[69]||(t[69]=n(" Output ",-1)),e(r,{output:f.value},null,8,["output"])]),l("h2",W,[t[71]||(t[71]=n(" Reading a Decimal Number ( ",-1)),e(o,null,{default:s(()=>[...t[70]||(t[70]=[n("nextFloat()",-1)])]),_:1}),t[72]||(t[72]=n(" ) ",-1))]),l("div",$,[t[77]||(t[77]=n(" The ",-1)),e(o,null,{default:s(()=>[...t[73]||(t[73]=[n("nextFloat()",-1)])]),_:1}),t[78]||(t[78]=n(" method reads a decimal number and stores it in a ",-1)),e(o,null,{default:s(()=>[...t[74]||(t[74]=[n("float",-1)])]),_:1}),t[79]||(t[79]=n(" variable. It is similar to ",-1)),e(o,null,{default:s(()=>[...t[75]||(t[75]=[n("nextDouble()",-1)])]),_:1}),t[80]||(t[80]=n(" , but ",-1)),e(o,null,{default:s(()=>[...t[76]||(t[76]=[n("float",-1)])]),_:1}),t[81]||(t[81]=n(" uses less memory and has lower precision. ",-1)),t[82]||(t[82]=l("br",null,null,-1)),t[83]||(t[83]=l("br",null,null,-1)),t[84]||(t[84]=n(" Sample Program ",-1)),e(i,{code:S.value,language:"java"},null,8,["code"]),t[85]||(t[85]=n(" Output ",-1)),e(r,{output:v.value},null,8,["output"])]),l("h2",z,[t[87]||(t[87]=n(" Reading a Long Integer ( ",-1)),e(o,null,{default:s(()=>[...t[86]||(t[86]=[n("nextLong()",-1)])]),_:1}),t[88]||(t[88]=n(" ) ",-1))]),l("div",K,[t[92]||(t[92]=n(" The ",-1)),e(o,null,{default:s(()=>[...t[89]||(t[89]=[n("nextLong()",-1)])]),_:1}),t[93]||(t[93]=n(" method reads a large whole number and stores it in a ",-1)),e(o,null,{default:s(()=>[...t[90]||(t[90]=[n("long",-1)])]),_:1}),t[94]||(t[94]=n(" variable. It is useful when the value is too large to be stored in an ",-1)),e(o,null,{default:s(()=>[...t[91]||(t[91]=[n("int",-1)])]),_:1}),t[95]||(t[95]=n(" . ",-1)),t[96]||(t[96]=l("br",null,null,-1)),t[97]||(t[97]=l("br",null,null,-1)),t[98]||(t[98]=n(" Sample Program ",-1)),e(i,{code:p.value,language:"java"},null,8,["code"]),t[99]||(t[99]=n(" Output ",-1)),e(r,{output:b.value},null,8,["output"])]),l("h2",Q,[t[101]||(t[101]=n(" Reading a Boolean ( ",-1)),e(o,null,{default:s(()=>[...t[100]||(t[100]=[n("nextBoolean()",-1)])]),_:1}),t[102]||(t[102]=n(" ) ",-1))]),l("div",X,[t[107]||(t[107]=n(" The ",-1)),e(o,null,{default:s(()=>[...t[103]||(t[103]=[n("nextBoolean()",-1)])]),_:1}),t[108]||(t[108]=n(" method reads a Boolean value from the keyboard. It only accepts the value ",-1)),e(o,null,{default:s(()=>[...t[104]||(t[104]=[n("true",-1)])]),_:1}),t[109]||(t[109]=n(" or ",-1)),e(o,null,{default:s(()=>[...t[105]||(t[105]=[n("false",-1)])]),_:1}),t[110]||(t[110]=n(" and stores the result in a ",-1)),e(o,null,{default:s(()=>[...t[106]||(t[106]=[n("boolean",-1)])]),_:1}),t[111]||(t[111]=n(" variable. It is commonly used for yes or no conditions in a program. ",-1)),t[112]||(t[112]=l("br",null,null,-1)),t[113]||(t[113]=l("br",null,null,-1)),t[114]||(t[114]=n(" Sample Program ",-1)),e(i,{code:I.value,language:"java"},null,8,["code"]),t[115]||(t[115]=n(" Output ",-1)),e(r,{output:j.value},null,8,["output"])]),t[119]||(t[119]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[120]||(t[120]=l("div",{class:"text-gray-500 mb-4 text-lg"},null,-1)),t[121]||(t[121]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[122]||(t[122]=l("div",{class:"text-gray-500 mb-4 text-lg"},null,-1)),t[123]||(t[123]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[124]||(t[124]=l("div",{class:"text-gray-500 mb-4 text-lg"},null,-1)),t[125]||(t[125]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[126]||(t[126]=l("div",{class:"text-gray-500 mb-4 text-lg"},null,-1)),t[127]||(t[127]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[128]||(t[128]=l("div",{class:"text-gray-500 mb-4 text-lg"},null,-1)),t[129]||(t[129]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[130]||(t[130]=l("div",{class:"text-gray-500 mb-4 text-lg"},null,-1)),t[131]||(t[131]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},null,-1)),t[132]||(t[132]=l("div",{class:"text-gray-500 mb-4 text-lg"},null,-1))]),_:1},8,["navigation"]))}});export{ot as default};

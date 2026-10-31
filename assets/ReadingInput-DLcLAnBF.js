import{_ as d}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-rzR0vzcF.js";import{T as u,a as i,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-Do3NQ57y.js";import{T as r}from"./TopicTerm-Wsy3IcMW.js";import{C as o}from"./CodeBlock-YTzl4NkG.js";import{O as a}from"./OutputBlock-BsSWLsEy.js";import{d as f,h as g,i as e,o as x,a as s,q as l,g as t}from"./index-8Z-dxxHw.js";const y={class:"max-w-4xl mx-auto"},S={class:"list-disc pl-8 space-y-2"},v={class:"list-disc pl-8 space-y-2"},w={class:"list-disc pl-8 mt-3 space-y-2"},b=`
String name = scanner.nextLine();`,L=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your name:");
        String name = scanner.nextLine();

        System.out.println("Hello, " + name);

        scanner.close();
    }
}`,T=`
Enter your name:
Fern
Hello, Fern`,F=`
String name = scanner.next();`,N=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your first name:");
        String name = scanner.next();

        System.out.println("Welcome, " + name);

        scanner.close();
    }
}`,W=`
Enter your first name:
Fern
Welcome, Fern`,j=`
System.out.println("Enter your full name:");
String firstName = scanner.next();
String lastName = scanner.next();

System.out.println("Name: " + firstName + " " + lastName);`,E=`
Enter your full name:
Fern Falter
Name: Fern Falter`,k=`
System.out.println("Enter your full name:");
String fullName = scanner.nextLine();

System.out.println("Name: " + fullName);`,I=`
Enter your full name:
Fern Falter
Name: Fern Falter`,M=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your favorite programming language: ");
        String language = scanner.nextLine();

        System.out.println("You chose " + language + ".");

        scanner.close();
    }
}`,O=`
Enter your favorite programming language: Java
You chose Java.`,Y=f({__name:"ReadingInput",setup(R){return(C,n)=>(x(),g(m,null,{default:e(()=>[s("div",y,[n[92]||(n[92]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:d,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),n[93]||(n[93]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Reading Input ")],-1)),l(u,null,{default:e(()=>[n[2]||(n[2]=t(" In the previous lesson, we learned how to create a ",-1)),l(r,null,{default:e(()=>[...n[0]||(n[0]=[t("Scanner",-1)])]),_:1}),n[3]||(n[3]=t(" and connect it to ",-1)),l(r,null,{default:e(()=>[...n[1]||(n[1]=[t("System.in",-1)])]),_:1}),n[4]||(n[4]=t(" . ",-1))]),_:1}),l(u,null,{default:e(()=>[...n[5]||(n[5]=[t(" Now we can use the scanner to actually read values entered by the user. ",-1)])]),_:1}),l(i,null,{default:e(()=>[...n[6]||(n[6]=[t("Reading a Line of Text",-1)])]),_:1}),l(u,null,{default:e(()=>[n[8]||(n[8]=t(" The ",-1)),l(r,null,{default:e(()=>[...n[7]||(n[7]=[t("nextLine()",-1)])]),_:1}),n[9]||(n[9]=t(" method reads an entire line of text entered by the user. ",-1))]),_:1}),l(u,null,{default:e(()=>[n[10]||(n[10]=t(" The basic syntax is: ",-1)),l(o,{code:b,language:"java"})]),_:1}),l(u,null,{default:e(()=>[n[12]||(n[12]=t(" The value entered by the user is stored in the ",-1)),l(r,null,{default:e(()=>[...n[11]||(n[11]=[t("name",-1)])]),_:1}),n[13]||(n[13]=t(" variable. ",-1))]),_:1}),l(i,null,{default:e(()=>[...n[14]||(n[14]=[t("Using nextLine()",-1)])]),_:1}),l(u,null,{default:e(()=>[n[15]||(n[15]=t(" Here is a complete example: ",-1)),l(o,{code:L,language:"java"})]),_:1}),l(u,null,{default:e(()=>[n[16]||(n[16]=t(" Sample interaction: ",-1)),l(a,{output:T})]),_:1}),l(u,null,{default:e(()=>[n[18]||(n[18]=t(" Notice that ",-1)),l(r,null,{default:e(()=>[...n[17]||(n[17]=[t("nextLine()",-1)])]),_:1}),n[19]||(n[19]=t(" reads everything the user enters on that line, including spaces. ",-1))]),_:1}),l(i,null,{default:e(()=>[...n[20]||(n[20]=[t("Reading a Single Word",-1)])]),_:1}),l(u,null,{default:e(()=>[n[22]||(n[22]=t(" The ",-1)),l(r,null,{default:e(()=>[...n[21]||(n[21]=[t("next()",-1)])]),_:1}),n[23]||(n[23]=t(" method reads the next token from the input. A token is generally separated from the next token by whitespace, such as a space. ",-1))]),_:1}),l(u,null,{default:e(()=>[n[24]||(n[24]=t(" For example: ",-1)),l(o,{code:F,language:"java"})]),_:1}),l(u,null,{default:e(()=>[n[25]||(n[25]=t(" A complete example: ",-1)),l(o,{code:N,language:"java"})]),_:1}),l(u,null,{default:e(()=>[n[26]||(n[26]=t(" Sample interaction: ",-1)),l(a,{output:W})]),_:1}),l(u,null,{default:e(()=>[n[28]||(n[28]=t(" If the user enters multiple words, each word can be read separately using ",-1)),l(r,null,{default:e(()=>[...n[27]||(n[27]=[t("next()",-1)])]),_:1}),n[29]||(n[29]=t(" . ",-1))]),_:1}),l(i,null,{default:e(()=>[...n[30]||(n[30]=[t("Reading Multiple Words",-1)])]),_:1}),l(u,null,{default:e(()=>[n[32]||(n[32]=t(" We can call ",-1)),l(r,null,{default:e(()=>[...n[31]||(n[31]=[t("next()",-1)])]),_:1}),n[33]||(n[33]=t(" multiple times to read multiple words. ",-1))]),_:1}),l(u,null,{default:e(()=>[n[34]||(n[34]=t(" For example: ",-1)),l(o,{code:j,language:"java"})]),_:1}),l(u,null,{default:e(()=>[n[35]||(n[35]=t(" Sample interaction: ",-1)),l(a,{output:E})]),_:1}),l(u,null,{default:e(()=>[n[39]||(n[39]=t(" The first call to ",-1)),l(r,null,{default:e(()=>[...n[36]||(n[36]=[t("next()",-1)])]),_:1}),n[40]||(n[40]=t(" reads ",-1)),l(r,null,{default:e(()=>[...n[37]||(n[37]=[t("Ralph",-1)])]),_:1}),n[41]||(n[41]=t(" , while the second reads ",-1)),l(r,null,{default:e(()=>[...n[38]||(n[38]=[t("Eda",-1)])]),_:1}),n[42]||(n[42]=t(" . ",-1))]),_:1}),l(i,null,{default:e(()=>[...n[43]||(n[43]=[t("next() vs nextLine()",-1)])]),_:1}),l(u,null,{default:e(()=>[n[46]||(n[46]=t(" The main difference between ",-1)),l(r,null,{default:e(()=>[...n[44]||(n[44]=[t("next()",-1)])]),_:1}),n[47]||(n[47]=t(" and ",-1)),l(r,null,{default:e(()=>[...n[45]||(n[45]=[t("nextLine()",-1)])]),_:1}),n[48]||(n[48]=t(" is how much input they read. ",-1))]),_:1}),l(u,null,{default:e(()=>[s("ul",S,[s("li",null,[l(r,null,{default:e(()=>[...n[49]||(n[49]=[t("next()",-1)])]),_:1}),n[50]||(n[50]=t(" reads the next token or word. ",-1))]),s("li",null,[l(r,null,{default:e(()=>[...n[51]||(n[51]=[t("nextLine()",-1)])]),_:1}),n[52]||(n[52]=t(" reads the entire line. ",-1))])])]),_:1}),l(i,null,{default:e(()=>[...n[53]||(n[53]=[t("Reading Input with Spaces",-1)])]),_:1}),l(u,null,{default:e(()=>[n[55]||(n[55]=t(" When the input may contain spaces, use ",-1)),l(r,null,{default:e(()=>[...n[54]||(n[54]=[t("nextLine()",-1)])]),_:1}),n[56]||(n[56]=t(" . ",-1))]),_:1}),l(u,null,{default:e(()=>[n[57]||(n[57]=t(" For example: ",-1)),l(o,{code:k,language:"java"})]),_:1}),l(u,null,{default:e(()=>[n[58]||(n[58]=t(" Sample interaction: ",-1)),l(a,{output:I})]),_:1}),l(u,null,{default:e(()=>[n[61]||(n[61]=t(" Unlike ",-1)),l(r,null,{default:e(()=>[...n[59]||(n[59]=[t("next()",-1)])]),_:1}),n[62]||(n[62]=t(" , ",-1)),l(r,null,{default:e(()=>[...n[60]||(n[60]=[t("nextLine()",-1)])]),_:1}),n[63]||(n[63]=t(" stores the complete line in the variable. ",-1))]),_:1}),l(i,null,{default:e(()=>[...n[64]||(n[64]=[t("Using Input in a Program",-1)])]),_:1}),l(u,null,{default:e(()=>[...n[65]||(n[65]=[t(" Input becomes useful when the value entered by the user is used somewhere else in the program. ",-1)])]),_:1}),l(u,null,{default:e(()=>[n[66]||(n[66]=t(" For example: ",-1)),l(o,{code:M,language:"java"})]),_:1}),l(u,null,{default:e(()=>[n[67]||(n[67]=t(" Sample interaction: ",-1)),l(a,{output:O})]),_:1}),l(u,null,{default:e(()=>[...n[68]||(n[68]=[t(" The program reads the user's input and then uses the stored value when displaying the result. ",-1)])]),_:1}),l(i,null,{default:e(()=>[...n[69]||(n[69]=[t("Choosing the Right Method",-1)])]),_:1}),l(u,null,{default:e(()=>[...n[70]||(n[70]=[t(" When reading text, choose the method based on the kind of input you expect. ",-1)])]),_:1}),l(u,null,{default:e(()=>[s("ul",v,[s("li",null,[n[72]||(n[72]=t(" Use ",-1)),l(r,null,{default:e(()=>[...n[71]||(n[71]=[t("next()",-1)])]),_:1}),n[73]||(n[73]=t(" when you need one word or token. ",-1))]),s("li",null,[n[75]||(n[75]=t(" Use ",-1)),l(r,null,{default:e(()=>[...n[74]||(n[74]=[t("nextLine()",-1)])]),_:1}),n[76]||(n[76]=t(" when you need an entire line of text. ",-1))])])]),_:1}),l(i,null,{default:e(()=>[...n[77]||(n[77]=[t("Summary",-1)])]),_:1}),l(u,null,{default:e(()=>[n[79]||(n[79]=t(" The ",-1)),l(r,null,{default:e(()=>[...n[78]||(n[78]=[t("Scanner",-1)])]),_:1}),n[80]||(n[80]=t(" class provides several methods for reading user input. ",-1))]),_:1}),l(u,null,{default:e(()=>[n[91]||(n[91]=t(" In this topic, you learned that: ",-1)),s("ul",w,[s("li",null,[l(r,null,{default:e(()=>[...n[81]||(n[81]=[t("nextLine()",-1)])]),_:1}),n[82]||(n[82]=t(" reads an entire line. ",-1))]),s("li",null,[l(r,null,{default:e(()=>[...n[83]||(n[83]=[t("next()",-1)])]),_:1}),n[84]||(n[84]=t(" reads the next token or word. ",-1))]),s("li",null,[n[86]||(n[86]=t(" Multiple calls to ",-1)),l(r,null,{default:e(()=>[...n[85]||(n[85]=[t("next()",-1)])]),_:1}),n[87]||(n[87]=t(" can read multiple words. ",-1))]),s("li",null,[l(r,null,{default:e(()=>[...n[88]||(n[88]=[t("nextLine()",-1)])]),_:1}),n[89]||(n[89]=t(" is useful when the input can contain spaces. ",-1))]),n[90]||(n[90]=s("li",null," Input values can be stored in variables and used elsewhere in the program. ",-1))])]),_:1}),n[94]||(n[94]=s("br",null,null,-1)),l(p,{to:"/academia/student/classes/java-reading-different-data-types"})])]),_:1}))}});export{Y as default};

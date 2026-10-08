import{_ as d}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{T as r,a,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{T as u,C as o}from"./CodeBlock-Z3HAVLif.js";import{O as i}from"./OutputBlock-B9VPajdJ.js";import{d as p,h as g,i as e,o as S,a as s,q as l,g as t}from"./index-BRxoWVJY.js";const y={class:"max-w-4xl mx-auto"},v={class:"list-disc pl-8 mt-3 space-y-2"},x={class:"list-disc pl-8 mt-3 space-y-2"},b=`
import java.util.Scanner;`,w=`
Scanner scanner = new Scanner(System.in);`,j=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your name:");
        String name = scanner.nextLine();

        System.out.println("Hello, " + name);
    }
}`,T=`
Enter your name:
Fern
Hello, Fern`,k=`
int age = scanner.nextInt();`,C=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your age:");
        int age = scanner.nextInt();

        System.out.println("You are " + age + " years old.");
    }
}`,I=`
Enter your age:
20
You are 20 years old.`,F=`
double grade = scanner.nextDouble();`,O=`
char grade = scanner.next().charAt(0);`,E=`
Scanner scanner = new Scanner(System.in);`,P=`
scanner.close();`,B=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter your name:");
        String name = scanner.nextLine();

        System.out.println("Hello, " + name);

        scanner.close();
    }
}`,H=`
Enter your name:
Fern
Hello, Fern`,R=p({__name:"ScannerClass",setup(A){return(J,n)=>(S(),g(m,null,{default:e(()=>[s("div",y,[n[104]||(n[104]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:d,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),n[105]||(n[105]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Scanner Class ")],-1)),l(r,null,{default:e(()=>[...n[0]||(n[0]=[t(" So far, our Java programs have worked with values that were already written directly inside the code. ",-1)])]),_:1}),l(r,null,{default:e(()=>[n[2]||(n[2]=t(" However, many programs need to receive information from the user while the program is running. Java provides the ",-1)),l(u,null,{default:e(()=>[...n[1]||(n[1]=[t("Scanner",-1)])]),_:1}),n[3]||(n[3]=t(" class to make reading user input easier. ",-1))]),_:1}),l(a,null,{default:e(()=>[...n[4]||(n[4]=[t("What Is Scanner?",-1)])]),_:1}),l(r,null,{default:e(()=>[n[6]||(n[6]=t(" The ",-1)),l(u,null,{default:e(()=>[...n[5]||(n[5]=[t("Scanner",-1)])]),_:1}),n[7]||(n[7]=t(" class is a Java class used to read input from different sources, including input typed through the keyboard. ",-1))]),_:1}),l(r,null,{default:e(()=>[n[9]||(n[9]=t(" When we use the keyboard as the input source, the scanner reads data from ",-1)),l(u,null,{default:e(()=>[...n[8]||(n[8]=[t("System.in",-1)])]),_:1}),n[10]||(n[10]=t(" . ",-1))]),_:1}),l(a,null,{default:e(()=>[...n[11]||(n[11]=[t("Importing Scanner",-1)])]),_:1}),l(r,null,{default:e(()=>[n[14]||(n[14]=t(" Before using ",-1)),l(u,null,{default:e(()=>[...n[12]||(n[12]=[t("Scanner",-1)])]),_:1}),n[15]||(n[15]=t(" , we need to import it from the ",-1)),l(u,null,{default:e(()=>[...n[13]||(n[13]=[t("java.util",-1)])]),_:1}),n[16]||(n[16]=t(" package. ",-1))]),_:1}),l(r,null,{default:e(()=>[n[17]||(n[17]=t(" The import statement is: ",-1)),l(o,{code:b,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[20]||(n[20]=t(" The ",-1)),l(u,null,{default:e(()=>[...n[18]||(n[18]=[t("import",-1)])]),_:1}),n[21]||(n[21]=t(" statement makes the ",-1)),l(u,null,{default:e(()=>[...n[19]||(n[19]=[t("Scanner",-1)])]),_:1}),n[22]||(n[22]=t(" class available to our program. ",-1))]),_:1}),l(a,null,{default:e(()=>[...n[23]||(n[23]=[t("Creating a Scanner",-1)])]),_:1}),l(r,null,{default:e(()=>[n[25]||(n[25]=t(" After importing the class, we create a ",-1)),l(u,null,{default:e(()=>[...n[24]||(n[24]=[t("Scanner",-1)])]),_:1}),n[26]||(n[26]=t(" object. ",-1))]),_:1}),l(r,null,{default:e(()=>[n[27]||(n[27]=t(" For keyboard input, we use: ",-1)),l(o,{code:w,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[30]||(n[30]=t(" Here, ",-1)),l(u,null,{default:e(()=>[...n[28]||(n[28]=[t("scanner",-1)])]),_:1}),n[31]||(n[31]=t(" is the variable that refers to our ",-1)),l(u,null,{default:e(()=>[...n[29]||(n[29]=[t("Scanner",-1)])]),_:1}),n[32]||(n[32]=t(" object. ",-1))]),_:1}),l(r,null,{default:e(()=>[l(u,null,{default:e(()=>[...n[33]||(n[33]=[t("System.in",-1)])]),_:1}),n[34]||(n[34]=t(" tells the scanner to read input from the standard input, which is normally the keyboard. ",-1))]),_:1}),l(a,null,{default:e(()=>[...n[35]||(n[35]=[t("Reading Text Input",-1)])]),_:1}),l(r,null,{default:e(()=>[n[37]||(n[37]=t(" One of the most common ways to use a scanner is to read a complete line of text using ",-1)),l(u,null,{default:e(()=>[...n[36]||(n[36]=[t("nextLine()",-1)])]),_:1}),n[38]||(n[38]=t(" . ",-1))]),_:1}),l(r,null,{default:e(()=>[n[39]||(n[39]=t(" For example: ",-1)),l(o,{code:j,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[40]||(n[40]=t(" Sample interaction: ",-1)),l(i,{output:T})]),_:1}),l(r,null,{default:e(()=>[n[42]||(n[42]=t(" The value entered by the user is stored in the ",-1)),l(u,null,{default:e(()=>[...n[41]||(n[41]=[t("name",-1)])]),_:1}),n[43]||(n[43]=t(" variable. ",-1))]),_:1}),l(a,null,{default:e(()=>[...n[44]||(n[44]=[t("Reading an Integer",-1)])]),_:1}),l(r,null,{default:e(()=>[n[46]||(n[46]=t(" The ",-1)),l(u,null,{default:e(()=>[...n[45]||(n[45]=[t("nextInt()",-1)])]),_:1}),n[47]||(n[47]=t(" method reads an integer from the user. ",-1))]),_:1}),l(r,null,{default:e(()=>[n[48]||(n[48]=t(" For example: ",-1)),l(o,{code:k,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[49]||(n[49]=t(" A complete example is: ",-1)),l(o,{code:C,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[50]||(n[50]=t(" Sample interaction: ",-1)),l(i,{output:I})]),_:1}),l(a,null,{default:e(()=>[...n[51]||(n[51]=[t("Reading Other Values",-1)])]),_:1}),l(r,null,{default:e(()=>[n[53]||(n[53]=t(" The ",-1)),l(u,null,{default:e(()=>[...n[52]||(n[52]=[t("Scanner",-1)])]),_:1}),n[54]||(n[54]=t(" class provides different methods for reading different types of input. ",-1))]),_:1}),l(r,null,{default:e(()=>[n[56]||(n[56]=t(" For example, to read a decimal value, we can use ",-1)),l(u,null,{default:e(()=>[...n[55]||(n[55]=[t("nextDouble()",-1)])]),_:1}),n[57]||(n[57]=t(" : ",-1)),l(o,{code:F,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[58]||(n[58]=t(" To read a single character, we can read the next token and then retrieve its first character: ",-1)),l(o,{code:O,language:"java"})]),_:1}),l(r,null,{default:e(()=>[...n[59]||(n[59]=[t(" We will explore these input methods in more detail in the next topics. ",-1)])]),_:1}),l(a,null,{default:e(()=>[...n[60]||(n[60]=[t("Understanding the Scanner Statement",-1)])]),_:1}),l(r,null,{default:e(()=>[n[61]||(n[61]=t(" Consider the following statement again: ",-1)),l(o,{code:E,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[68]||(n[68]=t(" There are three important parts: ",-1)),s("ul",v,[s("li",null,[l(u,null,{default:e(()=>[...n[62]||(n[62]=[t("Scanner",-1)])]),_:1}),n[63]||(n[63]=t(" is the class type. ",-1))]),s("li",null,[l(u,null,{default:e(()=>[...n[64]||(n[64]=[t("scanner",-1)])]),_:1}),n[65]||(n[65]=t(" is the variable name. ",-1))]),s("li",null,[l(u,null,{default:e(()=>[...n[66]||(n[66]=[t("new Scanner(System.in)",-1)])]),_:1}),n[67]||(n[67]=t(" creates a scanner that reads from standard input. ",-1))])])]),_:1}),l(a,null,{default:e(()=>[...n[69]||(n[69]=[t("Closing the Scanner",-1)])]),_:1}),l(r,null,{default:e(()=>[n[71]||(n[71]=t(" When we are finished using the scanner, we can close it using ",-1)),l(u,null,{default:e(()=>[...n[70]||(n[70]=[t("close()",-1)])]),_:1}),n[72]||(n[72]=t(" . ",-1))]),_:1}),l(r,null,{default:e(()=>[n[73]||(n[73]=t(" For example: ",-1)),l(o,{code:P,language:"java"})]),_:1}),l(r,null,{default:e(()=>[...n[74]||(n[74]=[t(" Closing the scanner releases the resources associated with it. ",-1)])]),_:1}),l(a,null,{default:e(()=>[...n[75]||(n[75]=[t("Complete Example",-1)])]),_:1}),l(r,null,{default:e(()=>[n[76]||(n[76]=t(" Putting the basic parts together: ",-1)),l(o,{code:B,language:"java"})]),_:1}),l(r,null,{default:e(()=>[n[77]||(n[77]=t(" Sample interaction: ",-1)),l(i,{output:H})]),_:1}),l(r,null,{default:e(()=>[n[80]||(n[80]=t(" The program imports ",-1)),l(u,null,{default:e(()=>[...n[78]||(n[78]=[t("Scanner",-1)])]),_:1}),n[81]||(n[81]=t(" , creates a scanner connected to ",-1)),l(u,null,{default:e(()=>[...n[79]||(n[79]=[t("System.in",-1)])]),_:1}),n[82]||(n[82]=t(" , reads the user's name, and then closes the scanner. ",-1))]),_:1}),l(a,null,{default:e(()=>[...n[83]||(n[83]=[t("Summary",-1)])]),_:1}),l(r,null,{default:e(()=>[n[85]||(n[85]=t(" The ",-1)),l(u,null,{default:e(()=>[...n[84]||(n[84]=[t("Scanner",-1)])]),_:1}),n[86]||(n[86]=t(" class provides a convenient way to receive input from the user. ",-1))]),_:1}),l(r,null,{default:e(()=>[n[103]||(n[103]=t(" In this topic, you learned that: ",-1)),s("ul",x,[s("li",null,[l(u,null,{default:e(()=>[...n[87]||(n[87]=[t("Scanner",-1)])]),_:1}),n[88]||(n[88]=t(" is used to read input. ",-1))]),s("li",null,[n[90]||(n[90]=t(" It is imported from the ",-1)),l(u,null,{default:e(()=>[...n[89]||(n[89]=[t("java.util",-1)])]),_:1}),n[91]||(n[91]=t(" package. ",-1))]),s("li",null,[l(u,null,{default:e(()=>[...n[92]||(n[92]=[t("System.in",-1)])]),_:1}),n[93]||(n[93]=t(" represents standard input. ",-1))]),s("li",null,[l(u,null,{default:e(()=>[...n[94]||(n[94]=[t("nextLine()",-1)])]),_:1}),n[95]||(n[95]=t(" can read a complete line of text. ",-1))]),s("li",null,[l(u,null,{default:e(()=>[...n[96]||(n[96]=[t("nextInt()",-1)])]),_:1}),n[97]||(n[97]=t(" can read an integer. ",-1))]),s("li",null,[l(u,null,{default:e(()=>[...n[98]||(n[98]=[t("nextDouble()",-1)])]),_:1}),n[99]||(n[99]=t(" can read a decimal value. ",-1))]),s("li",null,[n[101]||(n[101]=t(" A scanner can be closed using ",-1)),l(u,null,{default:e(()=>[...n[100]||(n[100]=[t("close()",-1)])]),_:1}),n[102]||(n[102]=t(" . ",-1))])])]),_:1}),n[106]||(n[106]=s("br",null,null,-1)),l(f,{to:"/academia/student/classes/java-reading-input"})])]),_:1}))}});export{R as default};

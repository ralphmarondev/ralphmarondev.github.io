import{_ as i}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BHqqVcAK.js";import{T as u,a as s,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-JDRukrMl.js";import{T as r,C as a}from"./CodeBlock-BE2lyL2C.js";import{O as d}from"./OutputBlock-CZmA96mX.js";import{d as f,h as g,i as e,o as x,a as o,q as l,g as n}from"./index-DfAF0zN8.js";const S={class:"max-w-4xl mx-auto"},y={class:"list-disc pl-8 mt-3 space-y-2"},v=`
int age = scanner.nextInt();`,b=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.println("Age: " + age);

        scanner.close();
    }
}`,T=`
Enter your age: 20
Age: 20`,j=`
double price = scanner.nextDouble();`,F=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the price: ");
        double price = scanner.nextDouble();

        System.out.println("Price: " + price);

        scanner.close();
    }
}`,w=`
Enter the price: 149.50
Price: 149.5`,D=`
float temperature = scanner.nextFloat();`,E=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the temperature: ");
        float temperature = scanner.nextFloat();

        System.out.println("Temperature: " + temperature);

        scanner.close();
    }
}`,A=`
Enter the temperature: 36.5
Temperature: 36.5`,C=`
long population = scanner.nextLong();`,I=`
boolean isStudent = scanner.nextBoolean();`,B=`
char grade = scanner.next().charAt(0);`,R=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your grade: ");
        char grade = scanner.next().charAt(0);

        System.out.println("Grade: " + grade);

        scanner.close();
    }
}`,O=`
Enter your grade: A
Grade: A`,P=`
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = scanner.nextLine();

        System.out.print("Enter your age: ");
        int age = scanner.nextInt();

        System.out.print("Enter your grade: ");
        double grade = scanner.nextDouble();

        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);

        scanner.close();
    }
}`,L=`
Enter your name: Fern
Enter your age: 20
Enter your grade: 95.5
Name: Fern
Age: 20
Grade: 95.5`,U=f({__name:"ReadingDifferentDataTypes",setup(M){return(V,t)=>(x(),g(p,null,{default:e(()=>[o("div",S,[t[99]||(t[99]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:i,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[100]||(t[100]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Reading Different Data Types ")],-1)),l(u,null,{default:e(()=>[t[2]||(t[2]=n(" In the previous topics, we learned how to use ",-1)),l(r,null,{default:e(()=>[...t[0]||(t[0]=[n("next()",-1)])]),_:1}),t[3]||(t[3]=n(" and ",-1)),l(r,null,{default:e(()=>[...t[1]||(t[1]=[n("nextLine()",-1)])]),_:1}),t[4]||(t[4]=n(" to read text input. ",-1))]),_:1}),l(u,null,{default:e(()=>[t[6]||(t[6]=n(" The ",-1)),l(r,null,{default:e(()=>[...t[5]||(t[5]=[n("Scanner",-1)])]),_:1}),t[7]||(t[7]=n(" class also provides methods for reading numbers, boolean values, and other types of input. ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[8]||(t[8]=[n("Reading Integers",-1)])]),_:1}),l(u,null,{default:e(()=>[t[10]||(t[10]=n(" To read an integer, use the ",-1)),l(r,null,{default:e(()=>[...t[9]||(t[9]=[n("nextInt()",-1)])]),_:1}),t[11]||(t[11]=n(" method. ",-1))]),_:1}),l(u,null,{default:e(()=>[t[12]||(t[12]=n(" The basic syntax is: ",-1)),l(a,{code:v,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[13]||(t[13]=n(" For example: ",-1)),l(a,{code:b,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[14]||(t[14]=n(" Sample interaction: ",-1)),l(d,{output:T})]),_:1}),l(s,null,{default:e(()=>[...t[15]||(t[15]=[n("Reading Double Values",-1)])]),_:1}),l(u,null,{default:e(()=>[t[18]||(t[18]=n(" To read a ",-1)),l(r,null,{default:e(()=>[...t[16]||(t[16]=[n("double",-1)])]),_:1}),t[19]||(t[19]=n(" value, use ",-1)),l(r,null,{default:e(()=>[...t[17]||(t[17]=[n("nextDouble()",-1)])]),_:1}),t[20]||(t[20]=n(" . ",-1))]),_:1}),l(u,null,{default:e(()=>[t[21]||(t[21]=n(" For example: ",-1)),l(a,{code:j,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[22]||(t[22]=n(" A complete example: ",-1)),l(a,{code:F,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[23]||(t[23]=n(" Sample interaction: ",-1)),l(d,{output:w})]),_:1}),l(s,null,{default:e(()=>[...t[24]||(t[24]=[n("Reading Float Values",-1)])]),_:1}),l(u,null,{default:e(()=>[t[27]||(t[27]=n(" To read a ",-1)),l(r,null,{default:e(()=>[...t[25]||(t[25]=[n("float",-1)])]),_:1}),t[28]||(t[28]=n(" value, use ",-1)),l(r,null,{default:e(()=>[...t[26]||(t[26]=[n("nextFloat()",-1)])]),_:1}),t[29]||(t[29]=n(" . ",-1))]),_:1}),l(u,null,{default:e(()=>[t[30]||(t[30]=n(" For example: ",-1)),l(a,{code:D,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[31]||(t[31]=n(" A complete example: ",-1)),l(a,{code:E,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[32]||(t[32]=n(" Sample interaction: ",-1)),l(d,{output:A})]),_:1}),l(s,null,{default:e(()=>[...t[33]||(t[33]=[n("Reading Long Values",-1)])]),_:1}),l(u,null,{default:e(()=>[t[36]||(t[36]=n(" To read a ",-1)),l(r,null,{default:e(()=>[...t[34]||(t[34]=[n("long",-1)])]),_:1}),t[37]||(t[37]=n(" value, use ",-1)),l(r,null,{default:e(()=>[...t[35]||(t[35]=[n("nextLong()",-1)])]),_:1}),t[38]||(t[38]=n(" . ",-1))]),_:1}),l(u,null,{default:e(()=>[t[39]||(t[39]=n(" For example: ",-1)),l(a,{code:C,language:"java"})]),_:1}),l(s,null,{default:e(()=>[...t[40]||(t[40]=[n("Reading Boolean Values",-1)])]),_:1}),l(u,null,{default:e(()=>[t[43]||(t[43]=n(" To read a ",-1)),l(r,null,{default:e(()=>[...t[41]||(t[41]=[n("boolean",-1)])]),_:1}),t[44]||(t[44]=n(" value, use ",-1)),l(r,null,{default:e(()=>[...t[42]||(t[42]=[n("nextBoolean()",-1)])]),_:1}),t[45]||(t[45]=n(" . ",-1))]),_:1}),l(u,null,{default:e(()=>[t[46]||(t[46]=n(" For example: ",-1)),l(a,{code:I,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[49]||(t[49]=n(" The input should be a valid boolean value such as ",-1)),l(r,null,{default:e(()=>[...t[47]||(t[47]=[n("true",-1)])]),_:1}),t[50]||(t[50]=n(" or ",-1)),l(r,null,{default:e(()=>[...t[48]||(t[48]=[n("false",-1)])]),_:1}),t[51]||(t[51]=n(" . ",-1))]),_:1}),l(s,null,{default:e(()=>[...t[52]||(t[52]=[n("Reading a Character",-1)])]),_:1}),l(u,null,{default:e(()=>[t[55]||(t[55]=n(" The ",-1)),l(r,null,{default:e(()=>[...t[53]||(t[53]=[n("Scanner",-1)])]),_:1}),t[56]||(t[56]=n(" class does not provide a ",-1)),l(r,null,{default:e(()=>[...t[54]||(t[54]=[n("nextChar()",-1)])]),_:1}),t[57]||(t[57]=n(" method. ",-1))]),_:1}),l(u,null,{default:e(()=>[t[60]||(t[60]=n(" To read a single character, we can use ",-1)),l(r,null,{default:e(()=>[...t[58]||(t[58]=[n("next()",-1)])]),_:1}),t[61]||(t[61]=n(" and then use ",-1)),l(r,null,{default:e(()=>[...t[59]||(t[59]=[n("charAt(0)",-1)])]),_:1}),t[62]||(t[62]=n(" to retrieve the first character. ",-1))]),_:1}),l(u,null,{default:e(()=>[t[63]||(t[63]=n(" For example: ",-1)),l(a,{code:B,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[64]||(t[64]=n(" A complete example: ",-1)),l(a,{code:R,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[65]||(t[65]=n(" Sample interaction: ",-1)),l(d,{output:O})]),_:1}),l(s,null,{default:e(()=>[...t[66]||(t[66]=[n("Reading Multiple Data Types",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[67]||(t[67]=[n(" A single program can read different types of input. ",-1)])]),_:1}),l(u,null,{default:e(()=>[t[68]||(t[68]=n(" For example: ",-1)),l(a,{code:P,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[69]||(t[69]=n(" Sample interaction: ",-1)),l(d,{output:L})]),_:1}),l(u,null,{default:e(()=>[...t[70]||(t[70]=[n(" Each scanner method stores the input in a variable of the corresponding data type. ",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[71]||(t[71]=[n(" The method you choose should match the type of value you expect the user to enter. ",-1)])]),_:1}),l(s,null,{default:e(()=>[...t[72]||(t[72]=[n("Choosing the Correct Method",-1)])]),_:1}),l(u,null,{default:e(()=>[t[75]||(t[75]=n(" For example, use ",-1)),l(r,null,{default:e(()=>[...t[73]||(t[73]=[n("nextInt()",-1)])]),_:1}),t[76]||(t[76]=n(" for whole numbers and ",-1)),l(r,null,{default:e(()=>[...t[74]||(t[74]=[n("nextDouble()",-1)])]),_:1}),t[77]||(t[77]=n(" for decimal values. ",-1))]),_:1}),l(u,null,{default:e(()=>[...t[78]||(t[78]=[n(" Using the wrong scanner method can cause an input mismatch error when the entered value does not match the expected data type. ",-1)])]),_:1}),l(s,null,{default:e(()=>[...t[79]||(t[79]=[n("Summary",-1)])]),_:1}),l(u,null,{default:e(()=>[t[81]||(t[81]=n(" The ",-1)),l(r,null,{default:e(()=>[...t[80]||(t[80]=[n("Scanner",-1)])]),_:1}),t[82]||(t[82]=n(" class provides different methods for reading different kinds of input. ",-1))]),_:1}),l(u,null,{default:e(()=>[t[98]||(t[98]=n(" In this topic, you learned that: ",-1)),o("ul",y,[o("li",null,[l(r,null,{default:e(()=>[...t[83]||(t[83]=[n("nextInt()",-1)])]),_:1}),t[84]||(t[84]=n(" reads integers. ",-1))]),o("li",null,[l(r,null,{default:e(()=>[...t[85]||(t[85]=[n("nextDouble()",-1)])]),_:1}),t[86]||(t[86]=n(" reads double values. ",-1))]),o("li",null,[l(r,null,{default:e(()=>[...t[87]||(t[87]=[n("nextFloat()",-1)])]),_:1}),t[88]||(t[88]=n(" reads float values. ",-1))]),o("li",null,[l(r,null,{default:e(()=>[...t[89]||(t[89]=[n("nextLong()",-1)])]),_:1}),t[90]||(t[90]=n(" reads long values. ",-1))]),o("li",null,[l(r,null,{default:e(()=>[...t[91]||(t[91]=[n("nextBoolean()",-1)])]),_:1}),t[92]||(t[92]=n(" reads boolean values. ",-1))]),o("li",null,[l(r,null,{default:e(()=>[...t[93]||(t[93]=[n("next()",-1)])]),_:1}),t[95]||(t[95]=n(" and ",-1)),l(r,null,{default:e(()=>[...t[94]||(t[94]=[n("charAt(0)",-1)])]),_:1}),t[96]||(t[96]=n(" can be used to read a character. ",-1))]),t[97]||(t[97]=o("li",null," The scanner method should match the expected input type. ",-1))])]),_:1}),t[101]||(t[101]=o("br",null,null,-1)),l(m,{to:"/academia/student/classes/java",text:"Finish"})])]),_:1}))}});export{U as default};

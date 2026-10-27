import{_ as a}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{T as i,a as o,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{T as u}from"./TopicTerm-Dw7PNqTI.js";import{C as d}from"./CodeBlock-BgBdQh_Q.js";import{O as r}from"./OutputBlock-CUGk6WXg.js";import{d as p,h as x,i as t,o as g,a as s,q as e,g as n}from"./index-BX2gTDPs.js";const w={class:"max-w-4xl mx-auto"},v={class:"list-disc pl-8 mt-3 space-y-2"},F={class:"list-disc pl-8 mt-3 space-y-2"},S=`
Hello, Java!
Welcome to Academia.
File handling is useful.`,y=`
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

File file = new File("example.txt");

try {
  Scanner scanner = new Scanner(file);

  while (scanner.hasNextLine()) {
    String line = scanner.nextLine();
    System.out.println(line);
  }

  scanner.close();
} catch (FileNotFoundException e) {
  System.out.println("File not found.");
}`,b=`
Hello, Java!
Welcome to Academia.
File handling is useful.`,T=`
Scanner scanner = new Scanner(file);

while (scanner.hasNextLine()) {
  String line = scanner.nextLine();
  System.out.println(line);
}

scanner.close();`,L=`
Scanner scanner = new Scanner(file);

if (scanner.hasNextLine()) {
  String line = scanner.nextLine();
  System.out.println(line);
}

scanner.close();`,k="Hello, Java!",N=`
Scanner scanner = new Scanner(file);

while (scanner.hasNext()) {
  String word = scanner.next();
  System.out.println(word);
}

scanner.close();`,O=`
Hello,
Java!
Welcome
to
Academia.
File
handling
is
useful.`,j=`
File file = new File("example.txt");

if (file.exists()) {
  Scanner scanner = new Scanner(file);

  while (scanner.hasNextLine()) {
    System.out.println(scanner.nextLine());
  }

  scanner.close();
} else {
  System.out.println("File does not exist.");
}`,C=`
Hello, Java!
Welcome to Academia.
File handling is useful.`,q=p({__name:"ReadingFiles",setup(J){return(E,l)=>(g(),x(f,null,{default:t(()=>[s("div",w,[l[102]||(l[102]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:a,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[103]||(l[103]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Reading Files ")],-1)),e(i,null,{default:t(()=>[l[1]||(l[1]=n(" In the previous topic, we learned how Java can represent files using the ",-1)),e(u,null,{default:t(()=>[...l[0]||(l[0]=[n("File",-1)])]),_:1}),l[2]||(l[2]=n(" class. However, representing a file does not allow us to read its contents. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[4]||(l[4]=n(" Java provides several ways to read data from files. One simple approach is to use the ",-1)),e(u,null,{default:t(()=>[...l[3]||(l[3]=[n("Scanner",-1)])]),_:1}),l[5]||(l[5]=n(" class. ",-1))]),_:1}),e(o,null,{default:t(()=>[...l[6]||(l[6]=[n("Example File",-1)])]),_:1}),e(i,null,{default:t(()=>[l[8]||(l[8]=n(" Suppose we have a file named ",-1)),e(u,null,{default:t(()=>[...l[7]||(l[7]=[n("example.txt",-1)])]),_:1}),l[9]||(l[9]=n(" containing: ",-1)),e(r,{output:S})]),_:1}),e(o,null,{default:t(()=>[...l[10]||(l[10]=[n("Reading a File with Scanner",-1)])]),_:1}),e(i,null,{default:t(()=>[l[12]||(l[12]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[11]||(l[11]=[n("Scanner",-1)])]),_:1}),l[13]||(l[13]=n(" class can read text from a file one line at a time. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[14]||(l[14]=n(" First, import the required classes: ",-1)),e(d,{code:y,language:"java"})]),_:1}),e(i,null,{default:t(()=>[l[15]||(l[15]=n(" Output: ",-1)),e(r,{output:b})]),_:1}),e(i,null,{default:t(()=>[l[17]||(l[17]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[16]||(l[16]=[n("Scanner",-1)])]),_:1}),l[18]||(l[18]=n(" reads the file until there are no more lines available. ",-1))]),_:1}),e(o,null,{default:t(()=>[...l[19]||(l[19]=[n("The hasNextLine() Method",-1)])]),_:1}),e(i,null,{default:t(()=>[l[21]||(l[21]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[20]||(l[20]=[n("hasNextLine()",-1)])]),_:1}),l[22]||(l[22]=n(" method checks whether another line is available in the file. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[25]||(l[25]=n(" It returns ",-1)),e(u,null,{default:t(()=>[...l[23]||(l[23]=[n("true",-1)])]),_:1}),l[26]||(l[26]=n(" when another line can be read and ",-1)),e(u,null,{default:t(()=>[...l[24]||(l[24]=[n("false",-1)])]),_:1}),l[27]||(l[27]=n(" when the end of the file has been reached. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[28]||(l[28]=n(" For example: ",-1)),e(d,{code:T,language:"java"})]),_:1}),e(o,null,{default:t(()=>[...l[29]||(l[29]=[n("The nextLine() Method",-1)])]),_:1}),e(i,null,{default:t(()=>[l[31]||(l[31]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[30]||(l[30]=[n("nextLine()",-1)])]),_:1}),l[32]||(l[32]=n(" method reads the next complete line from the file. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[33]||(l[33]=n(" For example: ",-1)),e(d,{code:L,language:"java"})]),_:1}),e(i,null,{default:t(()=>[l[34]||(l[34]=n(" Output: ",-1)),e(r,{output:k})]),_:1}),e(i,null,{default:t(()=>[l[36]||(l[36]=n(" Each time ",-1)),e(u,null,{default:t(()=>[...l[35]||(l[35]=[n("nextLine()",-1)])]),_:1}),l[37]||(l[37]=n(" is called, the scanner moves to the next line. ",-1))]),_:1}),e(o,null,{default:t(()=>[...l[38]||(l[38]=[n("Reading Word by Word",-1)])]),_:1}),e(i,null,{default:t(()=>[l[40]||(l[40]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[39]||(l[39]=[n("next()",-1)])]),_:1}),l[41]||(l[41]=n(" method can be used when the program needs to read individual words instead of complete lines. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[42]||(l[42]=n(" For example: ",-1)),e(d,{code:N,language:"java"})]),_:1}),e(i,null,{default:t(()=>[l[43]||(l[43]=n(" Output: ",-1)),e(r,{output:O})]),_:1}),e(i,null,{default:t(()=>[l[46]||(l[46]=n(" Unlike ",-1)),e(u,null,{default:t(()=>[...l[44]||(l[44]=[n("nextLine()",-1)])]),_:1}),l[47]||(l[47]=n(" , ",-1)),e(u,null,{default:t(()=>[...l[45]||(l[45]=[n("next()",-1)])]),_:1}),l[48]||(l[48]=n(" reads one token at a time. Whitespace such as spaces and line breaks separates the tokens. ",-1))]),_:1}),e(o,null,{default:t(()=>[...l[49]||(l[49]=[n("Checking if the File Exists",-1)])]),_:1}),e(i,null,{default:t(()=>[...l[50]||(l[50]=[n(" Before attempting to read a file, it is often useful to check whether the file actually exists. ",-1)])]),_:1}),e(i,null,{default:t(()=>[l[53]||(l[53]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[51]||(l[51]=[n("exists()",-1)])]),_:1}),l[54]||(l[54]=n(" method from the ",-1)),e(u,null,{default:t(()=>[...l[52]||(l[52]=[n("File",-1)])]),_:1}),l[55]||(l[55]=n(" class can be used for this. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[56]||(l[56]=n(" For example: ",-1)),e(d,{code:j,language:"java"})]),_:1}),e(i,null,{default:t(()=>[l[57]||(l[57]=n(" Output: ",-1)),e(r,{output:C})]),_:1}),e(o,null,{default:t(()=>[...l[58]||(l[58]=[n("Handling FileNotFoundException",-1)])]),_:1}),e(i,null,{default:t(()=>[l[61]||(l[61]=n(" Attempting to create a ",-1)),e(u,null,{default:t(()=>[...l[59]||(l[59]=[n("Scanner",-1)])]),_:1}),l[62]||(l[62]=n(" for a file that cannot be found may cause a ",-1)),e(u,null,{default:t(()=>[...l[60]||(l[60]=[n("FileNotFoundException",-1)])]),_:1}),l[63]||(l[63]=n(" . ",-1))]),_:1}),e(i,null,{default:t(()=>[l[65]||(l[65]=n(" This is why file-reading code is commonly placed inside a ",-1)),e(u,null,{default:t(()=>[...l[64]||(l[64]=[n("try...catch",-1)])]),_:1}),l[66]||(l[66]=n(" structure. ",-1))]),_:1}),e(i,null,{default:t(()=>[...l[67]||(l[67]=[n(" The exception can then be handled by displaying an appropriate message instead of allowing the program to terminate unexpectedly. ",-1)])]),_:1}),e(o,null,{default:t(()=>[...l[68]||(l[68]=[n("Closing the Scanner",-1)])]),_:1}),e(i,null,{default:t(()=>[l[71]||(l[71]=n(" After reading the file, the ",-1)),e(u,null,{default:t(()=>[...l[69]||(l[69]=[n("Scanner",-1)])]),_:1}),l[72]||(l[72]=n(" should be closed using ",-1)),e(u,null,{default:t(()=>[...l[70]||(l[70]=[n("close()",-1)])]),_:1}),l[73]||(l[73]=n(" . ",-1))]),_:1}),e(i,null,{default:t(()=>[...l[74]||(l[74]=[n(" Closing the scanner releases the resources associated with the file. ",-1)])]),_:1}),e(o,null,{default:t(()=>[...l[75]||(l[75]=[n("Reading Lines vs Words",-1)])]),_:1}),e(i,null,{default:t(()=>[l[80]||(l[80]=n(" The two commonly used methods have different purposes: ",-1)),s("ul",v,[s("li",null,[e(u,null,{default:t(()=>[...l[76]||(l[76]=[n("nextLine()",-1)])]),_:1}),l[77]||(l[77]=n(" → reads an entire line. ",-1))]),s("li",null,[e(u,null,{default:t(()=>[...l[78]||(l[78]=[n("next()",-1)])]),_:1}),l[79]||(l[79]=n(" → reads one word or token. ",-1))])])]),_:1}),e(o,null,{default:t(()=>[...l[81]||(l[81]=[n("Summary",-1)])]),_:1}),e(i,null,{default:t(()=>[l[83]||(l[83]=n(" Java's ",-1)),e(u,null,{default:t(()=>[...l[82]||(l[82]=[n("Scanner",-1)])]),_:1}),l[84]||(l[84]=n(" class provides a simple way to read text from a file. ",-1))]),_:1}),e(i,null,{default:t(()=>[l[101]||(l[101]=n(" In this topic, you learned that: ",-1)),s("ul",F,[s("li",null,[l[86]||(l[86]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[85]||(l[85]=[n("Scanner",-1)])]),_:1}),l[87]||(l[87]=n(" class can read data from a file. ",-1))]),s("li",null,[e(u,null,{default:t(()=>[...l[88]||(l[88]=[n("hasNextLine()",-1)])]),_:1}),l[89]||(l[89]=n(" checks whether another line is available. ",-1))]),s("li",null,[e(u,null,{default:t(()=>[...l[90]||(l[90]=[n("nextLine()",-1)])]),_:1}),l[91]||(l[91]=n(" reads a complete line. ",-1))]),s("li",null,[e(u,null,{default:t(()=>[...l[92]||(l[92]=[n("next()",-1)])]),_:1}),l[93]||(l[93]=n(" reads one token at a time. ",-1))]),s("li",null,[e(u,null,{default:t(()=>[...l[94]||(l[94]=[n("exists()",-1)])]),_:1}),l[95]||(l[95]=n(" can check whether a file exists before reading it. ",-1))]),s("li",null,[e(u,null,{default:t(()=>[...l[96]||(l[96]=[n("FileNotFoundException",-1)])]),_:1}),l[97]||(l[97]=n(" can occur when a file cannot be found. ",-1))]),s("li",null,[l[99]||(l[99]=n(" The ",-1)),e(u,null,{default:t(()=>[...l[98]||(l[98]=[n("Scanner",-1)])]),_:1}),l[100]||(l[100]=n(" should be closed after reading the file. ",-1))])])]),_:1}),l[104]||(l[104]=s("br",null,null,-1)),e(m,{to:"/academia/student/classes/java-writing-files"})])]),_:1}))}});export{q as default};

import{_ as r}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-B3G-GaUa.js";import{T as s,a as u,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-C0JJmNPf.js";import{T as i}from"./TopicTerm-DFxx4A6I.js";import{C as d}from"./CodeBlock-BTW9CWle.js";import{O as o}from"./OutputBlock-1tVxatZn.js";import{d as p,h as b,i as n,o as v,a,q as e,g as t}from"./index-DxySYCEn.js";const g={class:"max-w-4xl mx-auto"},y={class:"list-disc pl-8 space-y-2"},w=`
static void displayNumber() {
    int number = 10;

    System.out.println(number);
}

public static void main(String[] args) {
    displayNumber();
}`,S="10",x=`
static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

public static void main(String[] args) {
    greet("Ralph");
}`,k="Hello, Ralph!",O=`
static void firstMethod() {
    int number = 10;
    System.out.println(number);
}

static void secondMethod() {
    int number = 20;
    System.out.println(number);
}

public static void main(String[] args) {
    firstMethod();
    secondMethod();
}`,T=`10
20`,V=`
public static void main(String[] args) {
    if (true) {
        int number = 10;
        System.out.println(number);
    }
}`,j="10",A=`
public class Example {
    static int number = 10;

    static void displayNumber() {
        System.out.println(number);
    }

    public static void main(String[] args) {
        displayNumber();
        System.out.println(number);
    }
}`,M=`
10
10`,N=`
public class Example {
    static int number = 10;

    static void displayNumber() {
        int number = 20;

        System.out.println(number);
    }

    public static void main(String[] args) {
        displayNumber();
        System.out.println(number);
    }
}`,C=`20
10`,R=p({__name:"Scope",setup(F){return(B,l)=>(v(),b(m,null,{default:n(()=>[a("div",g,[l[95]||(l[95]=a("div",{class:"w-full flex justify-center mb-6"},[a("img",{src:r,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[96]||(l[96]=a("div",{class:"text-center mb-4"},[a("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 5 "),a("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Scope ")],-1)),e(s,null,{default:n(()=>[l[1]||(l[1]=t(" In Java, variables and other declarations are not accessible everywhere in a program. Their ",-1)),e(i,null,{default:n(()=>[...l[0]||(l[0]=[t("scope",-1)])]),_:1}),l[2]||(l[2]=t(" determines where they can be accessed. ",-1))]),_:1}),e(s,null,{default:n(()=>[...l[3]||(l[3]=[t(" Understanding scope helps prevent naming conflicts and makes it easier to control which parts of a program can use a variable. ",-1)])]),_:1}),e(u,null,{default:n(()=>[...l[4]||(l[4]=[t("What is Scope?",-1)])]),_:1}),e(s,null,{default:n(()=>[e(i,null,{default:n(()=>[...l[5]||(l[5]=[t("Scope",-1)])]),_:1}),l[6]||(l[6]=t(" refers to the part of a program where a variable, parameter, or other declaration can be accessed. ",-1))]),_:1}),e(s,null,{default:n(()=>[...l[7]||(l[7]=[t(" A variable declared inside a method generally belongs to that method and cannot be accessed directly from another method. ",-1)])]),_:1}),e(u,null,{default:n(()=>[...l[8]||(l[8]=[t("Local Variables",-1)])]),_:1}),e(s,null,{default:n(()=>[l[10]||(l[10]=t(" A variable declared inside a method is called a ",-1)),e(i,null,{default:n(()=>[...l[9]||(l[9]=[t("local variable",-1)])]),_:1}),l[11]||(l[11]=t(" . Its scope begins where it is declared and extends through the rest of the applicable block. ",-1))]),_:1}),e(s,null,{default:n(()=>[l[12]||(l[12]=t(" For example: ",-1)),e(d,{code:w,language:"java"})]),_:1}),e(s,null,{default:n(()=>[l[13]||(l[13]=t(" Output: ",-1)),e(o,{output:S})]),_:1}),e(s,null,{default:n(()=>[l[16]||(l[16]=t(" The variable ",-1)),e(i,null,{default:n(()=>[...l[14]||(l[14]=[t("number",-1)])]),_:1}),l[17]||(l[17]=t(" is declared inside ",-1)),e(i,null,{default:n(()=>[...l[15]||(l[15]=[t("displayNumber()",-1)])]),_:1}),l[18]||(l[18]=t(" . It can be used inside that method. ",-1))]),_:1}),e(u,null,{default:n(()=>[...l[19]||(l[19]=[t("Local Variables Cannot Be Used Everywhere",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[20]||(l[20]=[t(" A local variable cannot be accessed directly from another method because its scope is limited to the method where it was declared. ",-1)])]),_:1}),e(s,null,{default:n(()=>[l[23]||(l[23]=t(" For example, a variable declared inside ",-1)),e(i,null,{default:n(()=>[...l[21]||(l[21]=[t("firstMethod()",-1)])]),_:1}),l[24]||(l[24]=t(" is not directly available inside ",-1)),e(i,null,{default:n(()=>[...l[22]||(l[22]=[t("secondMethod()",-1)])]),_:1}),l[25]||(l[25]=t(" . ",-1))]),_:1}),e(u,null,{default:n(()=>[...l[26]||(l[26]=[t("Parameter Scope",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[27]||(l[27]=[t(" Method parameters also have a limited scope. A parameter can be accessed inside the method where it is declared. ",-1)])]),_:1}),e(s,null,{default:n(()=>[l[28]||(l[28]=t(" For example: ",-1)),e(d,{code:x,language:"java"})]),_:1}),e(s,null,{default:n(()=>[l[29]||(l[29]=t(" Output: ",-1)),e(o,{output:k})]),_:1}),e(s,null,{default:n(()=>[l[33]||(l[33]=t(" The parameter ",-1)),e(i,null,{default:n(()=>[...l[30]||(l[30]=[t("name",-1)])]),_:1}),l[34]||(l[34]=t(" can be used inside ",-1)),e(i,null,{default:n(()=>[...l[31]||(l[31]=[t("greet()",-1)])]),_:1}),l[35]||(l[35]=t(" . It is not directly accessible from ",-1)),e(i,null,{default:n(()=>[...l[32]||(l[32]=[t("main()",-1)])]),_:1}),l[36]||(l[36]=t(" . ",-1))]),_:1}),e(u,null,{default:n(()=>[...l[37]||(l[37]=[t("Variables in Different Methods",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[38]||(l[38]=[t(" Two different methods can have local variables with the same name. Each variable belongs to its own method. ",-1)])]),_:1}),e(s,null,{default:n(()=>[l[39]||(l[39]=t(" For example: ",-1)),e(d,{code:O,language:"java"})]),_:1}),e(s,null,{default:n(()=>[l[40]||(l[40]=t(" Output: ",-1)),e(o,{output:T})]),_:1}),e(s,null,{default:n(()=>[l[42]||(l[42]=t(" Both methods have a variable named ",-1)),e(i,null,{default:n(()=>[...l[41]||(l[41]=[t("number",-1)])]),_:1}),l[43]||(l[43]=t(" , but they are separate variables because they belong to different methods. ",-1))]),_:1}),e(u,null,{default:n(()=>[...l[44]||(l[44]=[t("Block Scope",-1)])]),_:1}),e(s,null,{default:n(()=>[l[46]||(l[46]=t(" Variables declared inside a block, such as an ",-1)),e(i,null,{default:n(()=>[...l[45]||(l[45]=[t("if",-1)])]),_:1}),l[47]||(l[47]=t(" statement, are generally accessible only within that block. ",-1))]),_:1}),e(s,null,{default:n(()=>[l[48]||(l[48]=t(" For example: ",-1)),e(d,{code:V,language:"java"})]),_:1}),e(s,null,{default:n(()=>[l[49]||(l[49]=t(" Output: ",-1)),e(o,{output:j})]),_:1}),e(s,null,{default:n(()=>[l[52]||(l[52]=t(" The variable ",-1)),e(i,null,{default:n(()=>[...l[50]||(l[50]=[t("number",-1)])]),_:1}),l[53]||(l[53]=t(" exists inside the ",-1)),e(i,null,{default:n(()=>[...l[51]||(l[51]=[t("if",-1)])]),_:1}),l[54]||(l[54]=t(" block. It cannot be directly accessed after that block ends. ",-1))]),_:1}),e(u,null,{default:n(()=>[...l[55]||(l[55]=[t("Class-Level Variables",-1)])]),_:1}),e(s,null,{default:n(()=>[l[57]||(l[57]=t(" A variable declared inside a class but outside a method can have a wider scope. Such a variable is commonly called a ",-1)),e(i,null,{default:n(()=>[...l[56]||(l[56]=[t("field",-1)])]),_:1}),l[58]||(l[58]=t(" . ",-1))]),_:1}),e(s,null,{default:n(()=>[l[59]||(l[59]=t(" For example: ",-1)),e(d,{code:A,language:"java"})]),_:1}),e(s,null,{default:n(()=>[l[60]||(l[60]=t(" Output: ",-1)),e(o,{output:M})]),_:1}),e(s,null,{default:n(()=>[l[62]||(l[62]=t(" The ",-1)),e(i,null,{default:n(()=>[...l[61]||(l[61]=[t("number",-1)])]),_:1}),l[63]||(l[63]=t(" field is declared at the class level, so both methods can access it. ",-1))]),_:1}),e(u,null,{default:n(()=>[...l[64]||(l[64]=[t("Local Variable vs Field",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[65]||(l[65]=[t(" Local variables and fields differ mainly in where they are declared and where they can be accessed. ",-1)])]),_:1}),e(s,null,{default:n(()=>[a("ul",y,[a("li",null,[l[67]||(l[67]=t(" A ",-1)),e(i,null,{default:n(()=>[...l[66]||(l[66]=[t("local variable",-1)])]),_:1}),l[68]||(l[68]=t(" is declared inside a method or block. ",-1))]),a("li",null,[l[70]||(l[70]=t(" A ",-1)),e(i,null,{default:n(()=>[...l[69]||(l[69]=[t("field",-1)])]),_:1}),l[71]||(l[71]=t(" is declared inside a class but outside methods. ",-1))]),l[72]||(l[72]=a("li",null," A local variable has a more limited scope. ",-1)),l[73]||(l[73]=a("li",null," A field can be accessed by methods of its class, subject to its access rules. ",-1))])]),_:1}),e(u,null,{default:n(()=>[...l[74]||(l[74]=[t("Variable Shadowing",-1)])]),_:1}),e(s,null,{default:n(()=>[l[76]||(l[76]=t(" A local variable can have the same name as a field. When this happens, the local variable can ",-1)),e(i,null,{default:n(()=>[...l[75]||(l[75]=[t("shadow",-1)])]),_:1}),l[77]||(l[77]=t(" the field within its scope. ",-1))]),_:1}),e(s,null,{default:n(()=>[l[78]||(l[78]=t(" For example: ",-1)),e(d,{code:N,language:"java"})]),_:1}),e(s,null,{default:n(()=>[l[79]||(l[79]=t(" Output: ",-1)),e(o,{output:C})]),_:1}),e(s,null,{default:n(()=>[l[84]||(l[84]=t(" Inside ",-1)),e(i,null,{default:n(()=>[...l[80]||(l[80]=[t("displayNumber()",-1)])]),_:1}),l[85]||(l[85]=t(" , the local ",-1)),e(i,null,{default:n(()=>[...l[81]||(l[81]=[t("number",-1)])]),_:1}),l[86]||(l[86]=t(" with the value ",-1)),e(i,null,{default:n(()=>[...l[82]||(l[82]=[t("20",-1)])]),_:1}),l[87]||(l[87]=t(" is used. Outside that method, the class field with the value ",-1)),e(i,null,{default:n(()=>[...l[83]||(l[83]=[t("10",-1)])]),_:1}),l[88]||(l[88]=t(" is used. ",-1))]),_:1}),e(u,null,{default:n(()=>[...l[89]||(l[89]=[t("Why Scope Matters",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[90]||(l[90]=[t(" Scope helps organize programs by limiting where variables can be accessed. This reduces accidental changes and makes code easier to understand. ",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[91]||(l[91]=[t(" When a variable is only needed inside one method or block, keeping it local prevents other parts of the program from accessing it unnecessarily. ",-1)])]),_:1}),e(u,null,{default:n(()=>[...l[92]||(l[92]=[t("Summary",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[93]||(l[93]=[t(" Scope determines where a variable or parameter can be accessed within a Java program. ",-1)])]),_:1}),e(s,null,{default:n(()=>[...l[94]||(l[94]=[t(" In this topic, you learned that: ",-1),a("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[a("li",null," Scope determines where a declaration can be accessed. "),a("li",null," Local variables are limited to their method or block. "),a("li",null," Method parameters are accessible within their method. "),a("li",null," Variables in different methods can have the same name. "),a("li",null," Class-level fields can be accessed by methods of the class, subject to their access rules. "),a("li",null," A local variable can shadow a field with the same name. ")],-1)])]),_:1}),l[97]||(l[97]=a("br",null,null,-1)),e(f,{to:"/academia/student/classes/java",text:"Finish"})])]),_:1}))}});export{R as default};

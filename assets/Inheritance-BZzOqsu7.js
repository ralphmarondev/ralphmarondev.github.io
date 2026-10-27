import{_ as a}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{T as i,a as o,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{T as e}from"./TopicTerm-Dw7PNqTI.js";import{C as d}from"./CodeBlock-BgBdQh_Q.js";import{O as r}from"./OutputBlock-CUGk6WXg.js";import{d as p,h as g,i as s,o as b,a as u,q as n,g as t}from"./index-BX2gTDPs.js";const v={class:"max-w-4xl mx-auto"},y={class:"list-disc pl-8 mt-3 space-y-2"},x={class:"list-disc pl-8 mt-3 space-y-2"},A=`
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();

        dog.eat();
        dog.bark();
    }
}`,w=`
Eating...
Barking...`,D=`
class Animal {
    String name = "Animal";
}

class Dog extends Animal {
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();

        System.out.println(dog.name);
    }
}`,T="Animal",k=`
class Animal {
    void eat() {
        System.out.println("Eating...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Barking...");
    }
}`,S=`
class Animal {
    void sound() {
        System.out.println("Animal makes a sound.");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();

        dog.sound();
    }
}`,I="Dog barks.",O=`
class Animal {
    void sound() {
        System.out.println("Animal makes a sound.");
    }
}

class Dog extends Animal {
    void sound() {
        super.sound();
        System.out.println("Dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();

        dog.sound();
    }
}`,C=`
Animal makes a sound.
Dog barks.`,j=`
class Animal {
    String name;

    Animal(String name) {
        this.name = name;
    }
}

class Dog extends Animal {
    Dog(String name) {
        super(name);
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy");

        System.out.println(dog.name);
    }
}`,B="Buddy",K=p({__name:"Inheritance",setup(F){return(M,l)=>(b(),g(m,null,{default:s(()=>[u("div",v,[l[117]||(l[117]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:a,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[118]||(l[118]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 6 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Inheritance ")],-1)),n(i,null,{default:s(()=>[...l[0]||(l[0]=[t(" In object-oriented programming, different classes may share common properties and behaviors. Instead of writing the same code repeatedly, Java allows one class to inherit members from another class. ",-1)])]),_:1}),n(i,null,{default:s(()=>[l[2]||(l[2]=t(" This concept is called ",-1)),n(e,null,{default:s(()=>[...l[1]||(l[1]=[t("inheritance",-1)])]),_:1}),l[3]||(l[3]=t(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[4]||(l[4]=[t("What is Inheritance?",-1)])]),_:1}),n(i,null,{default:s(()=>[...l[5]||(l[5]=[t(" Inheritance allows a class to acquire fields and methods from another class. ",-1)])]),_:1}),n(i,null,{default:s(()=>[l[10]||(l[10]=t(" The class being inherited from is called the ",-1)),n(e,null,{default:s(()=>[...l[6]||(l[6]=[t("parent class",-1)])]),_:1}),l[11]||(l[11]=t(" or ",-1)),n(e,null,{default:s(()=>[...l[7]||(l[7]=[t("superclass",-1)])]),_:1}),l[12]||(l[12]=t(" . The class that inherits from it is called the ",-1)),n(e,null,{default:s(()=>[...l[8]||(l[8]=[t("child class",-1)])]),_:1}),l[13]||(l[13]=t(" or ",-1)),n(e,null,{default:s(()=>[...l[9]||(l[9]=[t("subclass",-1)])]),_:1}),l[14]||(l[14]=t(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[15]||(l[15]=[t("Basic Inheritance",-1)])]),_:1}),n(i,null,{default:s(()=>[l[17]||(l[17]=t(" Java uses the ",-1)),n(e,null,{default:s(()=>[...l[16]||(l[16]=[t("extends",-1)])]),_:1}),l[18]||(l[18]=t(" keyword to create an inheritance relationship. ",-1))]),_:1}),n(i,null,{default:s(()=>[l[19]||(l[19]=t(" For example: ",-1)),n(d,{code:A,language:"java"})]),_:1}),n(i,null,{default:s(()=>[l[20]||(l[20]=t(" Output: ",-1)),n(r,{output:w})]),_:1}),n(i,null,{default:s(()=>[l[25]||(l[25]=t(" The ",-1)),n(e,null,{default:s(()=>[...l[21]||(l[21]=[t("Dog",-1)])]),_:1}),l[26]||(l[26]=t(" class inherits the ",-1)),n(e,null,{default:s(()=>[...l[22]||(l[22]=[t("eat()",-1)])]),_:1}),l[27]||(l[27]=t(" method from ",-1)),n(e,null,{default:s(()=>[...l[23]||(l[23]=[t("Animal",-1)])]),_:1}),l[28]||(l[28]=t(" . It can also define its own ",-1)),n(e,null,{default:s(()=>[...l[24]||(l[24]=[t("bark()",-1)])]),_:1}),l[29]||(l[29]=t(" method. ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[30]||(l[30]=[t("Parent and Child Classes",-1)])]),_:1}),n(i,null,{default:s(()=>[l[33]||(l[33]=t(" In the previous example, ",-1)),n(e,null,{default:s(()=>[...l[31]||(l[31]=[t("Animal",-1)])]),_:1}),l[34]||(l[34]=t(" is the parent class and ",-1)),n(e,null,{default:s(()=>[...l[32]||(l[32]=[t("Dog",-1)])]),_:1}),l[35]||(l[35]=t(" is the child class. ",-1))]),_:1}),n(i,null,{default:s(()=>[l[36]||(l[36]=t(" The relationship can be represented as: ",-1)),n(d,{code:k,language:"java"})]),_:1}),n(i,null,{default:s(()=>[...l[37]||(l[37]=[t(" A child class can use accessible members inherited from its parent class while also defining additional members of its own. ",-1)])]),_:1}),n(o,null,{default:s(()=>[...l[38]||(l[38]=[t("Inheriting Fields",-1)])]),_:1}),n(i,null,{default:s(()=>[...l[39]||(l[39]=[t(" A child class can access accessible fields inherited from its parent class. ",-1)])]),_:1}),n(i,null,{default:s(()=>[l[40]||(l[40]=t(" For example: ",-1)),n(d,{code:D,language:"java"})]),_:1}),n(i,null,{default:s(()=>[l[41]||(l[41]=t(" Output: ",-1)),n(r,{output:T})]),_:1}),n(i,null,{default:s(()=>[l[45]||(l[45]=t(" The ",-1)),n(e,null,{default:s(()=>[...l[42]||(l[42]=[t("Dog",-1)])]),_:1}),l[46]||(l[46]=t(" object can access ",-1)),n(e,null,{default:s(()=>[...l[43]||(l[43]=[t("name",-1)])]),_:1}),l[47]||(l[47]=t(" because it inherits that field from ",-1)),n(e,null,{default:s(()=>[...l[44]||(l[44]=[t("Animal",-1)])]),_:1}),l[48]||(l[48]=t(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[49]||(l[49]=[t("Method Overriding",-1)])]),_:1}),n(i,null,{default:s(()=>[l[51]||(l[51]=t(" A child class can provide its own implementation of a method inherited from its parent class. This is called ",-1)),n(e,null,{default:s(()=>[...l[50]||(l[50]=[t("method overriding",-1)])]),_:1}),l[52]||(l[52]=t(" . ",-1))]),_:1}),n(i,null,{default:s(()=>[l[53]||(l[53]=t(" For example: ",-1)),n(d,{code:S,language:"java"})]),_:1}),n(i,null,{default:s(()=>[l[54]||(l[54]=t(" Output: ",-1)),n(r,{output:I})]),_:1}),n(i,null,{default:s(()=>[l[56]||(l[56]=t(" The ",-1)),n(e,null,{default:s(()=>[...l[55]||(l[55]=[t("@Override",-1)])]),_:1}),l[57]||(l[57]=t(" annotation indicates that the child class is providing a new implementation of an inherited method. ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[58]||(l[58]=[t("The super Keyword",-1)])]),_:1}),n(i,null,{default:s(()=>[l[60]||(l[60]=t(" Java provides the ",-1)),n(e,null,{default:s(()=>[...l[59]||(l[59]=[t("super",-1)])]),_:1}),l[61]||(l[61]=t(" keyword to refer to the parent class. ",-1))]),_:1}),n(i,null,{default:s(()=>[...l[62]||(l[62]=[t(" One common use is calling a method from the parent class. ",-1)])]),_:1}),n(i,null,{default:s(()=>[l[63]||(l[63]=t(" For example: ",-1)),n(d,{code:O,language:"java"})]),_:1}),n(i,null,{default:s(()=>[l[64]||(l[64]=t(" Output: ",-1)),n(r,{output:C})]),_:1}),n(i,null,{default:s(()=>[l[67]||(l[67]=t(" The statement ",-1)),n(e,null,{default:s(()=>[...l[65]||(l[65]=[t("super.sound()",-1)])]),_:1}),l[68]||(l[68]=t(" calls the version of ",-1)),n(e,null,{default:s(()=>[...l[66]||(l[66]=[t("sound()",-1)])]),_:1}),l[69]||(l[69]=t(" defined in the parent class. ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[70]||(l[70]=[t("Calling a Parent Constructor",-1)])]),_:1}),n(i,null,{default:s(()=>[l[72]||(l[72]=t(" The ",-1)),n(e,null,{default:s(()=>[...l[71]||(l[71]=[t("super",-1)])]),_:1}),l[73]||(l[73]=t(" keyword can also be used to call a constructor from the parent class. ",-1))]),_:1}),n(i,null,{default:s(()=>[l[74]||(l[74]=t(" For example: ",-1)),n(d,{code:j,language:"java"})]),_:1}),n(i,null,{default:s(()=>[l[75]||(l[75]=t(" Output: ",-1)),n(r,{output:B})]),_:1}),n(i,null,{default:s(()=>[l[78]||(l[78]=t(" The statement ",-1)),n(e,null,{default:s(()=>[...l[76]||(l[76]=[t("super(name)",-1)])]),_:1}),l[79]||(l[79]=t(" calls the constructor of ",-1)),n(e,null,{default:s(()=>[...l[77]||(l[77]=[t("Animal",-1)])]),_:1}),l[80]||(l[80]=t(" and passes the value to it. ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[81]||(l[81]=[t("Types of Inheritance",-1)])]),_:1}),n(i,null,{default:s(()=>[...l[82]||(l[82]=[t(" Java classes commonly form a single inheritance relationship, where one child class extends one parent class. ",-1)])]),_:1}),n(i,null,{default:s(()=>[l[87]||(l[87]=t(" For example: ",-1)),u("ul",y,[u("li",null,[n(e,null,{default:s(()=>[...l[83]||(l[83]=[t("Animal",-1)])]),_:1}),l[84]||(l[84]=t(" → parent class ",-1))]),u("li",null,[n(e,null,{default:s(()=>[...l[85]||(l[85]=[t("Dog",-1)])]),_:1}),l[86]||(l[86]=t(" → child class ",-1))])])]),_:1}),n(i,null,{default:s(()=>[l[91]||(l[91]=t(" A class can also participate in a chain of inheritance. For example: ",-1)),n(e,null,{default:s(()=>[...l[88]||(l[88]=[t("Animal",-1)])]),_:1}),l[92]||(l[92]=t(" → ",-1)),n(e,null,{default:s(()=>[...l[89]||(l[89]=[t("Mammal",-1)])]),_:1}),l[93]||(l[93]=t(" → ",-1)),n(e,null,{default:s(()=>[...l[90]||(l[90]=[t("Dog",-1)])]),_:1}),l[94]||(l[94]=t(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[95]||(l[95]=[t("Benefits of Inheritance",-1)])]),_:1}),n(i,null,{default:s(()=>[...l[96]||(l[96]=[t(" Inheritance can help organize related classes and reduce duplicated code. ",-1)])]),_:1}),n(i,null,{default:s(()=>[...l[97]||(l[97]=[t(" Some benefits include: ",-1),u("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[u("li",null,"Reusing fields and methods."),u("li",null,"Reducing duplicated code."),u("li",null,"Creating relationships between related classes."),u("li",null,"Allowing child classes to specialize inherited behavior."),u("li",null,"Supporting other object-oriented programming concepts.")],-1)])]),_:1}),n(o,null,{default:s(()=>[...l[98]||(l[98]=[t("Important Points",-1)])]),_:1}),n(i,null,{default:s(()=>[...l[99]||(l[99]=[t(" Inheritance does not mean that every member of the parent class can always be accessed directly by the child class. Access depends on the member's access modifier. ",-1)])]),_:1}),n(i,null,{default:s(()=>[l[101]||(l[101]=t(" For example, a ",-1)),n(e,null,{default:s(()=>[...l[100]||(l[100]=[t("private",-1)])]),_:1}),l[102]||(l[102]=t(" member belongs to the parent class and cannot be accessed directly by the child class. ",-1))]),_:1}),n(o,null,{default:s(()=>[...l[103]||(l[103]=[t("Summary",-1)])]),_:1}),n(i,null,{default:s(()=>[...l[104]||(l[104]=[t(" Inheritance allows a class to reuse and extend functionality from another class. ",-1)])]),_:1}),n(i,null,{default:s(()=>[l[116]||(l[116]=t(" In this topic, you learned that: ",-1)),u("ul",x,[l[111]||(l[111]=u("li",null," Inheritance allows a class to inherit members from another class. ",-1)),u("li",null,[l[106]||(l[106]=t(" The ",-1)),n(e,null,{default:s(()=>[...l[105]||(l[105]=[t("extends",-1)])]),_:1}),l[107]||(l[107]=t(" keyword creates a class inheritance relationship. ",-1))]),l[112]||(l[112]=u("li",null," The parent class is also called the superclass. ",-1)),l[113]||(l[113]=u("li",null," The child class is also called the subclass. ",-1)),l[114]||(l[114]=u("li",null," A child class can override inherited methods. ",-1)),u("li",null,[l[109]||(l[109]=t(" The ",-1)),n(e,null,{default:s(()=>[...l[108]||(l[108]=[t("super",-1)])]),_:1}),l[110]||(l[110]=t(" keyword refers to the parent class. ",-1))]),l[115]||(l[115]=u("li",null," Inheritance helps reduce duplicated code and organize related classes. ",-1))])]),_:1}),l[119]||(l[119]=u("br",null,null,-1)),n(f,{to:"/academia/student/classes/java-polymorphism"})])]),_:1}))}});export{K as default};

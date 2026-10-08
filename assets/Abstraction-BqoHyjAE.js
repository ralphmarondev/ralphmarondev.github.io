import{_ as r}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{T as i,a as e,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{T as o,C as u}from"./CodeBlock-Z3HAVLif.js";import{O as d}from"./OutputBlock-B9VPajdJ.js";import{d as f,h as b,i as s,o as g,a,q as n,g as l}from"./index-BRxoWVJY.js";const v={class:"max-w-4xl mx-auto"},A={class:"list-disc pl-8 mt-3 space-y-2"},w={class:"list-disc pl-8 space-y-2"},x={class:"list-disc pl-8 mt-3 space-y-2"},y=`
abstract class Animal {
    abstract void sound();

    void sleep() {
        System.out.println("Sleeping...");
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
        dog.sleep();
    }
}`,D=`
Dog barks.
Sleeping...`,C=`
abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks.");
    }
}`,S=`
abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks.");
    }
}

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows.");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();

        animal1.sound();
        animal2.sound();
    }
}`,j=`
Dog barks.
Cat meows.`,k=`
abstract class Animal {
    abstract void sound();
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();

        animal.sound();
    }
}`,O="Dog barks.",T=`
abstract class Animal {
    abstract void sound();

    void sleep() {
        System.out.println("Sleeping...");
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
        dog.sleep();
    }
}`,M=`
Dog barks.
Sleeping...`,F=`
abstract class Animal {
    abstract void sound();
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Animal();
    }
}`,E=f({__name:"Abstraction",setup(B){return(R,t)=>(g(),b(m,null,{default:s(()=>[a("div",v,[t[98]||(t[98]=a("div",{class:"w-full flex justify-center mb-6"},[a("img",{src:r,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[99]||(t[99]=a("div",{class:"text-center mb-4"},[a("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 8 "),a("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Abstraction ")],-1)),n(i,null,{default:s(()=>[t[1]||(t[1]=l(" When designing classes, we sometimes want to describe what an object should do without defining exactly how it should do it. Java provides ",-1)),n(o,null,{default:s(()=>[...t[0]||(t[0]=[l("abstraction",-1)])]),_:1}),t[2]||(t[2]=l(" for this purpose. ",-1))]),_:1}),n(i,null,{default:s(()=>[...t[3]||(t[3]=[l(" Abstraction focuses on exposing the important behavior of an object while hiding unnecessary implementation details. ",-1)])]),_:1}),n(e,null,{default:s(()=>[...t[4]||(t[4]=[l("What is Abstraction?",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[5]||(t[5]=[l(" Abstraction means hiding implementation details and exposing only the essential features of an object. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[7]||(t[7]=l(" For example, when we use a car, we can call methods such as ",-1)),n(o,null,{default:s(()=>[...t[6]||(t[6]=[l("start()",-1)])]),_:1}),t[8]||(t[8]=l(" without needing to know every internal step performed by the engine. ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[9]||(t[9]=[l("Abstract Classes",-1)])]),_:1}),n(i,null,{default:s(()=>[t[12]||(t[12]=l(" Java supports abstraction using ",-1)),n(o,null,{default:s(()=>[...t[10]||(t[10]=[l("abstract classes",-1)])]),_:1}),t[13]||(t[13]=l(" . An abstract class is declared using the ",-1)),n(o,null,{default:s(()=>[...t[11]||(t[11]=[l("abstract",-1)])]),_:1}),t[14]||(t[14]=l(" keyword. ",-1))]),_:1}),n(i,null,{default:s(()=>[t[15]||(t[15]=l(" For example: ",-1)),n(u,{code:y,language:"java"})]),_:1}),n(i,null,{default:s(()=>[t[16]||(t[16]=l(" Output: ",-1)),n(d,{output:D})]),_:1}),n(i,null,{default:s(()=>[t[20]||(t[20]=l(" The ",-1)),n(o,null,{default:s(()=>[...t[17]||(t[17]=[l("Animal",-1)])]),_:1}),t[21]||(t[21]=l(" class provides a general structure for animals. The ",-1)),n(o,null,{default:s(()=>[...t[18]||(t[18]=[l("Dog",-1)])]),_:1}),t[22]||(t[22]=l(" class provides the actual implementation of ",-1)),n(o,null,{default:s(()=>[...t[19]||(t[19]=[l("sound()",-1)])]),_:1}),t[23]||(t[23]=l(" . ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[24]||(t[24]=[l("Abstract Methods",-1)])]),_:1}),n(i,null,{default:s(()=>[t[26]||(t[26]=l(" An ",-1)),n(o,null,{default:s(()=>[...t[25]||(t[25]=[l("abstract method",-1)])]),_:1}),t[27]||(t[27]=l(" is a method declared without an implementation. ",-1))]),_:1}),n(i,null,{default:s(()=>[...t[28]||(t[28]=[l(" An abstract method ends with a semicolon instead of containing a method body. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[29]||(t[29]=l(" For example: ",-1)),n(u,{code:C,language:"java"})]),_:1}),n(i,null,{default:s(()=>[t[31]||(t[31]=l(" The ",-1)),n(o,null,{default:s(()=>[...t[30]||(t[30]=[l("sound()",-1)])]),_:1}),t[32]||(t[32]=l(" method tells child classes that they must provide their own implementation. ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[33]||(t[33]=[l("Implementing an Abstract Method",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[34]||(t[34]=[l(" A concrete child class must provide an implementation for the abstract methods inherited from its abstract parent class. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[35]||(t[35]=l(" For example: ",-1)),n(u,{code:S,language:"java"})]),_:1}),n(i,null,{default:s(()=>[t[36]||(t[36]=l(" Output: ",-1)),n(d,{output:j})]),_:1}),n(i,null,{default:s(()=>[t[40]||(t[40]=l(" Both ",-1)),n(o,null,{default:s(()=>[...t[37]||(t[37]=[l("Dog",-1)])]),_:1}),t[41]||(t[41]=l(" and ",-1)),n(o,null,{default:s(()=>[...t[38]||(t[38]=[l("Cat",-1)])]),_:1}),t[42]||(t[42]=l(" provide their own implementation of ",-1)),n(o,null,{default:s(()=>[...t[39]||(t[39]=[l("sound()",-1)])]),_:1}),t[43]||(t[43]=l(" . ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[44]||(t[44]=[l("Cannot Create an Object of an Abstract Class",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[45]||(t[45]=[l(" An abstract class cannot be instantiated directly. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[46]||(t[46]=l(" For example, this is not allowed: ",-1)),n(u,{code:F,language:"java"})]),_:1}),n(i,null,{default:s(()=>[...t[47]||(t[47]=[l(" The abstract class provides a general design, but objects must be created from concrete child classes. ",-1)])]),_:1}),n(e,null,{default:s(()=>[...t[48]||(t[48]=[l("Abstract Class References",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[49]||(t[49]=[l(" Although an abstract class cannot be instantiated, a variable can still use an abstract class as its reference type. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[50]||(t[50]=l(" For example: ",-1)),n(u,{code:k,language:"java"})]),_:1}),n(i,null,{default:s(()=>[t[51]||(t[51]=l(" Output: ",-1)),n(d,{output:O})]),_:1}),n(i,null,{default:s(()=>[t[55]||(t[55]=l(" The variable ",-1)),n(o,null,{default:s(()=>[...t[52]||(t[52]=[l("animal",-1)])]),_:1}),t[56]||(t[56]=l(" uses ",-1)),n(o,null,{default:s(()=>[...t[53]||(t[53]=[l("Animal",-1)])]),_:1}),t[57]||(t[57]=l(" as its reference type, but it refers to an actual ",-1)),n(o,null,{default:s(()=>[...t[54]||(t[54]=[l("Dog",-1)])]),_:1}),t[58]||(t[58]=l(" object. ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[59]||(t[59]=[l("Abstract Classes Can Have Regular Methods",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[60]||(t[60]=[l(" An abstract class does not have to contain only abstract methods. It can also contain regular methods with implementations. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[61]||(t[61]=l(" For example: ",-1)),n(u,{code:T,language:"java"})]),_:1}),n(i,null,{default:s(()=>[t[62]||(t[62]=l(" Output: ",-1)),n(d,{output:M})]),_:1}),n(i,null,{default:s(()=>[t[65]||(t[65]=l(" The ",-1)),n(o,null,{default:s(()=>[...t[63]||(t[63]=[l("sound()",-1)])]),_:1}),t[66]||(t[66]=l(" method is abstract, while ",-1)),n(o,null,{default:s(()=>[...t[64]||(t[64]=[l("sleep()",-1)])]),_:1}),t[67]||(t[67]=l(" already has an implementation that can be inherited by child classes. ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[68]||(t[68]=[l("Abstraction and Inheritance",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[69]||(t[69]=[l(" Abstraction commonly works together with inheritance. An abstract class can define common behavior and require child classes to provide specific implementations. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[76]||(t[76]=l(" For example: ",-1)),a("ul",A,[a("li",null,[n(o,null,{default:s(()=>[...t[70]||(t[70]=[l("Animal",-1)])]),_:1}),t[71]||(t[71]=l(" → defines the general structure. ",-1))]),a("li",null,[n(o,null,{default:s(()=>[...t[72]||(t[72]=[l("Dog",-1)])]),_:1}),t[73]||(t[73]=l(" → provides a specific implementation. ",-1))]),a("li",null,[n(o,null,{default:s(()=>[...t[74]||(t[74]=[l("Cat",-1)])]),_:1}),t[75]||(t[75]=l(" → provides another specific implementation. ",-1))])])]),_:1}),n(e,null,{default:s(()=>[...t[77]||(t[77]=[l("Abstraction vs Encapsulation",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[78]||(t[78]=[l(" Abstraction and encapsulation are related but focus on different things. ",-1)])]),_:1}),n(i,null,{default:s(()=>[a("ul",w,[a("li",null,[n(o,null,{default:s(()=>[...t[79]||(t[79]=[l("Abstraction",-1)])]),_:1}),t[80]||(t[80]=l(" focuses on hiding unnecessary implementation details and showing essential behavior. ",-1))]),a("li",null,[n(o,null,{default:s(()=>[...t[81]||(t[81]=[l("Encapsulation",-1)])]),_:1}),t[82]||(t[82]=l(" focuses on controlling access to an object's data and implementation. ",-1))])])]),_:1}),n(e,null,{default:s(()=>[...t[83]||(t[83]=[l("Benefits of Abstraction",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[84]||(t[84]=[l(" Abstraction can make object-oriented programs easier to design and maintain. ",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[85]||(t[85]=[l(" Some benefits include: ",-1),a("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[a("li",null,"Hiding unnecessary implementation details."),a("li",null,"Providing a clear structure for related classes."),a("li",null,"Allowing child classes to provide their own behavior."),a("li",null,"Reducing complexity for code that uses the objects."),a("li",null,"Supporting flexible object-oriented designs.")],-1)])]),_:1}),n(e,null,{default:s(()=>[...t[86]||(t[86]=[l("Summary",-1)])]),_:1}),n(i,null,{default:s(()=>[...t[87]||(t[87]=[l(" Abstraction allows a class to define essential behavior while hiding implementation details. ",-1)])]),_:1}),n(i,null,{default:s(()=>[t[97]||(t[97]=l(" In this topic, you learned that: ",-1)),a("ul",x,[t[91]||(t[91]=a("li",null," Abstraction hides unnecessary implementation details. ",-1)),a("li",null,[t[89]||(t[89]=l(" Abstract classes are declared using the ",-1)),n(o,null,{default:s(()=>[...t[88]||(t[88]=[l("abstract",-1)])]),_:1}),t[90]||(t[90]=l(" keyword. ",-1))]),t[92]||(t[92]=a("li",null," Abstract methods do not have an implementation. ",-1)),t[93]||(t[93]=a("li",null," Child classes must implement inherited abstract methods. ",-1)),t[94]||(t[94]=a("li",null," Abstract classes cannot be instantiated directly. ",-1)),t[95]||(t[95]=a("li",null," Abstract classes can contain both abstract and regular methods. ",-1)),t[96]||(t[96]=a("li",null," Abstraction commonly works together with inheritance. ",-1))])]),_:1}),t[100]||(t[100]=a("br",null,null,-1)),n(p,{to:"/academia/student/classes/java",text:"Finish"})])]),_:1}))}});export{E as default};

import{_ as a}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-rzR0vzcF.js";import{T as e,a as s,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-Do3NQ57y.js";import{T as i}from"./TopicTerm-Wsy3IcMW.js";import{C as d}from"./CodeBlock-YTzl4NkG.js";import{O as r}from"./OutputBlock-BsSWLsEy.js";import{d as f,h as g,i as n,o as b,a as u,q as o,g as t}from"./index-8Z-dxxHw.js";const v={class:"max-w-4xl mx-auto"},y={class:"list-disc pl-8 mt-3 space-y-2"},w=`
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
}`,x="Dog barks.",A=`
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
        Animal animal = new Dog();

        animal.sound();
    }
}`,k="Dog barks.",j=`
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
}`,S=`
Dog barks.
Cat meows.`,D=`
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        System.out.println(calculator.add(5, 3));
        System.out.println(calculator.add(2.5, 1.5));
    }
}`,C=`
8
4.0`,O=`
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

class Cat extends Animal {
    @Override
    void sound() {
        System.out.println("Cat meows.");
    }
}

public class Main {
    static void makeSound(Animal animal) {
        animal.sound();
    }

    public static void main(String[] args) {
        makeSound(new Dog());
        makeSound(new Cat());
    }
}`,P=`
Dog barks.
Cat meows.`,W=f({__name:"Polymorphism",setup(M){return(T,l)=>(b(),g(m,null,{default:n(()=>[u("div",v,[l[96]||(l[96]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:a,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[97]||(l[97]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 7 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Polymorphism ")],-1)),o(e,null,{default:n(()=>[l[1]||(l[1]=t(" In object-oriented programming, the same method call can produce different behavior depending on the object involved. This concept is called ",-1)),o(i,null,{default:n(()=>[...l[0]||(l[0]=[t("polymorphism",-1)])]),_:1}),l[2]||(l[2]=t(" . ",-1))]),_:1}),o(e,null,{default:n(()=>[l[4]||(l[4]=t(" The word polymorphism means ",-1)),o(i,null,{default:n(()=>[...l[3]||(l[3]=[t('"many forms"',-1)])]),_:1}),l[5]||(l[5]=t(" . In Java, it allows a common interface or parent type to work with different types of objects. ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[6]||(l[6]=[t("What is Polymorphism?",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[7]||(l[7]=[t(" Polymorphism allows objects of different classes to be treated through a common parent type while still performing their own specific behavior. ",-1)])]),_:1}),o(e,null,{default:n(()=>[l[12]||(l[12]=t(" For example, a ",-1)),o(i,null,{default:n(()=>[...l[8]||(l[8]=[t("Dog",-1)])]),_:1}),l[13]||(l[13]=t(" and a ",-1)),o(i,null,{default:n(()=>[...l[9]||(l[9]=[t("Cat",-1)])]),_:1}),l[14]||(l[14]=t(" can both be treated as ",-1)),o(i,null,{default:n(()=>[...l[10]||(l[10]=[t("Animal",-1)])]),_:1}),l[15]||(l[15]=t(" objects, but each can provide its own implementation of ",-1)),o(i,null,{default:n(()=>[...l[11]||(l[11]=[t("sound()",-1)])]),_:1}),l[16]||(l[16]=t(" . ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[17]||(l[17]=[t("Method Overriding and Polymorphism",-1)])]),_:1}),o(e,null,{default:n(()=>[l[19]||(l[19]=t(" Polymorphism commonly works together with ",-1)),o(i,null,{default:n(()=>[...l[18]||(l[18]=[t("method overriding",-1)])]),_:1}),l[20]||(l[20]=t(" . ",-1))]),_:1}),o(e,null,{default:n(()=>[l[21]||(l[21]=t(" For example: ",-1)),o(d,{code:w,language:"java"})]),_:1}),o(e,null,{default:n(()=>[l[22]||(l[22]=t(" Output: ",-1)),o(r,{output:x})]),_:1}),o(e,null,{default:n(()=>[l[25]||(l[25]=t(" The ",-1)),o(i,null,{default:n(()=>[...l[23]||(l[23]=[t("Dog",-1)])]),_:1}),l[26]||(l[26]=t(" class provides its own implementation of ",-1)),o(i,null,{default:n(()=>[...l[24]||(l[24]=[t("sound()",-1)])]),_:1}),l[27]||(l[27]=t(" . ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[28]||(l[28]=[t("Parent References",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[29]||(l[29]=[t(" A parent class reference can refer to an object of a child class. ",-1)])]),_:1}),o(e,null,{default:n(()=>[l[30]||(l[30]=t(" For example: ",-1)),o(d,{code:A,language:"java"})]),_:1}),o(e,null,{default:n(()=>[l[31]||(l[31]=t(" Output: ",-1)),o(r,{output:k})]),_:1}),o(e,null,{default:n(()=>[l[35]||(l[35]=t(" Although the variable is declared as ",-1)),o(i,null,{default:n(()=>[...l[32]||(l[32]=[t("Animal",-1)])]),_:1}),l[36]||(l[36]=t(" , the actual object is a ",-1)),o(i,null,{default:n(()=>[...l[33]||(l[33]=[t("Dog",-1)])]),_:1}),l[37]||(l[37]=t(" . Java therefore executes the overridden ",-1)),o(i,null,{default:n(()=>[...l[34]||(l[34]=[t("Dog.sound()",-1)])]),_:1}),l[38]||(l[38]=t(" method. ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[39]||(l[39]=[t("Different Objects, Same Method",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[40]||(l[40]=[t(" Multiple child classes can provide different implementations of the same method. ",-1)])]),_:1}),o(e,null,{default:n(()=>[l[41]||(l[41]=t(" For example: ",-1)),o(d,{code:j,language:"java"})]),_:1}),o(e,null,{default:n(()=>[l[42]||(l[42]=t(" Output: ",-1)),o(r,{output:S})]),_:1}),o(e,null,{default:n(()=>[l[44]||(l[44]=t(" The same method call, ",-1)),o(i,null,{default:n(()=>[...l[43]||(l[43]=[t("sound()",-1)])]),_:1}),l[45]||(l[45]=t(" , produces different results depending on the actual object. ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[46]||(l[46]=[t("Compile-Time Polymorphism",-1)])]),_:1}),o(e,null,{default:n(()=>[l[48]||(l[48]=t(" Java also supports polymorphism through ",-1)),o(i,null,{default:n(()=>[...l[47]||(l[47]=[t("method overloading",-1)])]),_:1}),l[49]||(l[49]=t(" . ",-1))]),_:1}),o(e,null,{default:n(()=>[...l[50]||(l[50]=[t(" Method overloading occurs when multiple methods have the same name but different parameter lists. ",-1)])]),_:1}),o(e,null,{default:n(()=>[l[51]||(l[51]=t(" For example: ",-1)),o(d,{code:D,language:"java"})]),_:1}),o(e,null,{default:n(()=>[l[52]||(l[52]=t(" Output: ",-1)),o(r,{output:C})]),_:1}),o(e,null,{default:n(()=>[l[54]||(l[54]=t(" Java determines which ",-1)),o(i,null,{default:n(()=>[...l[53]||(l[53]=[t("add()",-1)])]),_:1}),l[55]||(l[55]=t(" method to use based on the arguments provided. ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[56]||(l[56]=[t("Runtime Polymorphism",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[57]||(l[57]=[t(" When a parent reference refers to a child object and an overridden method is called, Java determines which implementation to execute at runtime. ",-1)])]),_:1}),o(e,null,{default:n(()=>[l[60]||(l[60]=t(" This is commonly called ",-1)),o(i,null,{default:n(()=>[...l[58]||(l[58]=[t("runtime polymorphism",-1)])]),_:1}),l[61]||(l[61]=t(" or ",-1)),o(i,null,{default:n(()=>[...l[59]||(l[59]=[t("dynamic method dispatch",-1)])]),_:1}),l[62]||(l[62]=t(" . ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[63]||(l[63]=[t("Polymorphism with Methods",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[64]||(l[64]=[t(" A method can accept a parent type and work with objects of different child classes. ",-1)])]),_:1}),o(e,null,{default:n(()=>[l[65]||(l[65]=t(" For example: ",-1)),o(d,{code:O,language:"java"})]),_:1}),o(e,null,{default:n(()=>[l[66]||(l[66]=t(" Output: ",-1)),o(r,{output:P})]),_:1}),o(e,null,{default:n(()=>[l[71]||(l[71]=t(" The ",-1)),o(i,null,{default:n(()=>[...l[67]||(l[67]=[t("makeSound()",-1)])]),_:1}),l[72]||(l[72]=t(" method accepts an ",-1)),o(i,null,{default:n(()=>[...l[68]||(l[68]=[t("Animal",-1)])]),_:1}),l[73]||(l[73]=t(" reference, so it can work with both ",-1)),o(i,null,{default:n(()=>[...l[69]||(l[69]=[t("Dog",-1)])]),_:1}),l[74]||(l[74]=t(" and ",-1)),o(i,null,{default:n(()=>[...l[70]||(l[70]=[t("Cat",-1)])]),_:1}),l[75]||(l[75]=t(" objects. ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[76]||(l[76]=[t("Why Use Polymorphism?",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[77]||(l[77]=[t(" Polymorphism allows code to work with different object types through a common parent type. ",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[78]||(l[78]=[t(" Some benefits include: ",-1),u("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[u("li",null,"Making code more flexible."),u("li",null,"Reducing the need for repeated conditional logic."),u("li",null,"Allowing different classes to provide their own behavior."),u("li",null,"Making methods reusable with different object types."),u("li",null,"Supporting extensible object-oriented designs.")],-1)])]),_:1}),o(s,null,{default:n(()=>[...l[79]||(l[79]=[t("Polymorphism and Inheritance",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[80]||(l[80]=[t(" Polymorphism often depends on inheritance or another common type relationship. ",-1)])]),_:1}),o(e,null,{default:n(()=>[l[87]||(l[87]=t(" For example: ",-1)),u("ul",y,[u("li",null,[o(i,null,{default:n(()=>[...l[81]||(l[81]=[t("Animal",-1)])]),_:1}),l[82]||(l[82]=t(" → parent type ",-1))]),u("li",null,[o(i,null,{default:n(()=>[...l[83]||(l[83]=[t("Dog",-1)])]),_:1}),l[84]||(l[84]=t(" → child type ",-1))]),u("li",null,[o(i,null,{default:n(()=>[...l[85]||(l[85]=[t("Cat",-1)])]),_:1}),l[86]||(l[86]=t(" → child type ",-1))])])]),_:1}),o(e,null,{default:n(()=>[l[90]||(l[90]=t(" Both child classes can be handled through an ",-1)),o(i,null,{default:n(()=>[...l[88]||(l[88]=[t("Animal",-1)])]),_:1}),l[91]||(l[91]=t(" reference while providing their own implementations of ",-1)),o(i,null,{default:n(()=>[...l[89]||(l[89]=[t("sound()",-1)])]),_:1}),l[92]||(l[92]=t(" . ",-1))]),_:1}),o(s,null,{default:n(()=>[...l[93]||(l[93]=[t("Summary",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[94]||(l[94]=[t(" Polymorphism allows one common type or method interface to represent different forms of behavior. ",-1)])]),_:1}),o(e,null,{default:n(()=>[...l[95]||(l[95]=[t(" In this topic, you learned that: ",-1),u("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[u("li",null,' Polymorphism means "many forms." '),u("li",null," A parent reference can refer to a child object. "),u("li",null," Method overriding allows child classes to provide their own implementations. "),u("li",null," The actual object determines which overridden method runs at runtime. "),u("li",null," Method overloading provides another form of polymorphic behavior. "),u("li",null," Polymorphism allows methods to work with different object types through a common type. ")],-1)])]),_:1}),l[98]||(l[98]=u("br",null,null,-1)),o(p,{to:"/academia/student/classes/java-abstraction"})])]),_:1}))}});export{W as default};

import{_ as d}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as u,a as o,_ as p}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as a,C as r}from"./CodeBlock-CSdrTDFH.js";import{O as i}from"./OutputBlock-BPpR2jjy.js";import{d as f,h as g,i as e,o as v,a as s,q as l,g as n}from"./index-D3WOnH5O.js";const S={class:"max-w-4xl mx-auto"},b=`
class Student {
    String name;

    Student() {
        name = "Ralph";
    }
}`,y=`
class Student {
    String name;

    Student() {
        name = "Ralph";
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        System.out.println(student.name);
    }
}`,w="Ralph",j=`
class Student {
    String name;
    int age;

    Student(String studentName, int studentAge) {
        name = studentName;
        age = studentAge;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Ralph", 20);

        System.out.println(student.name);
        System.out.println(student.age);
    }
}`,C=`
Ralph
20`,x=`
class Student {
    String name;
    int age;

    Student(String studentName, int studentAge) {
        name = studentName;
        age = studentAge;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student1 = new Student("Ralph", 20);
        Student student2 = new Student("Fern", 21);

        System.out.println(student1.name);
        System.out.println(student2.name);
    }
}`,A=`
Ralph
Fern`,O=`class Student {
    String name;
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        System.out.println(student.name);
    }
}`,T="null",z=`
class Student {
    String name;
    int age;

    Student() {
        name = "Unknown";
        age = 0;
    }

    Student(String studentName, int studentAge) {
        name = studentName;
        age = studentAge;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student1 = new Student();
        Student student2 = new Student("Ralph", 20);

        System.out.println(student1.name);
        System.out.println(student2.name);
    }
}`,R=`
Unknown
Ralph`,W=f({__name:"Constructors",setup(k){return(N,t)=>(v(),g(m,null,{default:e(()=>[s("div",S,[t[69]||(t[69]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:d,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[70]||(t[70]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Constructors ")],-1)),l(u,null,{default:e(()=>[t[1]||(t[1]=n(" When an object is created, it is often useful to give its fields initial values. Java provides ",-1)),l(a,null,{default:e(()=>[...t[0]||(t[0]=[n("constructors",-1)])]),_:1}),t[2]||(t[2]=n(" for this purpose. ",-1))]),_:1}),l(u,null,{default:e(()=>[...t[3]||(t[3]=[n(" A constructor is a special member of a class that is automatically called when an object is created. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[4]||(t[4]=[n("What is a Constructor?",-1)])]),_:1}),l(u,null,{default:e(()=>[t[6]||(t[6]=n(" A ",-1)),l(a,null,{default:e(()=>[...t[5]||(t[5]=[n("constructor",-1)])]),_:1}),t[7]||(t[7]=n(" is a special method-like structure used to initialize a new object. ",-1))]),_:1}),l(u,null,{default:e(()=>[...t[8]||(t[8]=[n(" A constructor has the same name as its class and does not have a return type. ",-1)])]),_:1}),l(u,null,{default:e(()=>[t[9]||(t[9]=n(" For example: ",-1)),l(r,{code:b,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[12]||(t[12]=n(" The ",-1)),l(a,null,{default:e(()=>[...t[10]||(t[10]=[n("Student()",-1)])]),_:1}),t[13]||(t[13]=n(" constructor assigns an initial value to the ",-1)),l(a,null,{default:e(()=>[...t[11]||(t[11]=[n("name",-1)])]),_:1}),t[14]||(t[14]=n(" field. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[15]||(t[15]=[n("Calling a Constructor",-1)])]),_:1}),l(u,null,{default:e(()=>[t[17]||(t[17]=n(" A constructor is called automatically when an object is created using the ",-1)),l(a,null,{default:e(()=>[...t[16]||(t[16]=[n("new",-1)])]),_:1}),t[18]||(t[18]=n(" keyword. ",-1))]),_:1}),l(u,null,{default:e(()=>[t[19]||(t[19]=n(" For example: ",-1)),l(r,{code:y,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[20]||(t[20]=n(" Output: ",-1)),l(i,{output:w})]),_:1}),l(u,null,{default:e(()=>[t[23]||(t[23]=n(" The statement ",-1)),l(a,null,{default:e(()=>[...t[21]||(t[21]=[n("new Student()",-1)])]),_:1}),t[24]||(t[24]=n(" creates the object and automatically calls the ",-1)),l(a,null,{default:e(()=>[...t[22]||(t[22]=[n("Student()",-1)])]),_:1}),t[25]||(t[25]=n(" constructor. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[26]||(t[26]=[n("Parameterized Constructors",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[27]||(t[27]=[n(" A constructor can accept parameters. This allows different objects to be initialized with different values. ",-1)])]),_:1}),l(u,null,{default:e(()=>[t[28]||(t[28]=n(" For example: ",-1)),l(r,{code:j,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[29]||(t[29]=n(" Output: ",-1)),l(i,{output:C})]),_:1}),l(u,null,{default:e(()=>[t[32]||(t[32]=n(" The values ",-1)),l(a,null,{default:e(()=>[...t[30]||(t[30]=[n('"Ralph"',-1)])]),_:1}),t[33]||(t[33]=n(" and ",-1)),l(a,null,{default:e(()=>[...t[31]||(t[31]=[n("20",-1)])]),_:1}),t[34]||(t[34]=n(" are passed to the constructor when the object is created. ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[35]||(t[35]=[n("Creating Multiple Objects",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[36]||(t[36]=[n(" A parameterized constructor can be used to initialize multiple objects with different values. ",-1)])]),_:1}),l(u,null,{default:e(()=>[t[37]||(t[37]=n(" For example: ",-1)),l(r,{code:x,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[38]||(t[38]=n(" Output: ",-1)),l(i,{output:A})]),_:1}),l(u,null,{default:e(()=>[...t[39]||(t[39]=[n(" Both objects use the same constructor, but each object receives its own values. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[40]||(t[40]=[n("Constructor vs Method",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[41]||(t[41]=[n(" Constructors and methods may look similar, but they serve different purposes. ",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[42]||(t[42]=[n(" A constructor: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Has the same name as the class."),s("li",null,"Does not have a return type."),s("li",null,"Runs when an object is created."),s("li",null,"Is commonly used to initialize an object.")],-1)])]),_:1}),l(u,null,{default:e(()=>[...t[43]||(t[43]=[n(" A method: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Can have any valid name."),s("li",null,"Can have a return type."),s("li",null,"Runs when it is explicitly called."),s("li",null,"Usually performs an action or calculation.")],-1)])]),_:1}),l(o,null,{default:e(()=>[...t[44]||(t[44]=[n("Default Constructor",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[45]||(t[45]=[n(" If a class does not define any constructor, Java can provide a default constructor automatically. ",-1)])]),_:1}),l(u,null,{default:e(()=>[t[46]||(t[46]=n(" For example: ",-1)),l(r,{code:O,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[47]||(t[47]=n(" Output: ",-1)),l(i,{output:T})]),_:1}),l(u,null,{default:e(()=>[t[50]||(t[50]=n(" Because no value was assigned to ",-1)),l(a,null,{default:e(()=>[...t[48]||(t[48]=[n("name",-1)])]),_:1}),t[51]||(t[51]=n(" , its default value is ",-1)),l(a,null,{default:e(()=>[...t[49]||(t[49]=[n("null",-1)])]),_:1}),t[52]||(t[52]=n(" . ",-1))]),_:1}),l(o,null,{default:e(()=>[...t[53]||(t[53]=[n("Writing Your Own Constructor",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[54]||(t[54]=[n(" Once you define a constructor yourself, Java no longer provides the automatically generated default constructor for that class. ",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[55]||(t[55]=[n(" If you want both a no-argument constructor and a parameterized constructor, you can define both explicitly. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[56]||(t[56]=[n("Multiple Constructors",-1)])]),_:1}),l(u,null,{default:e(()=>[t[58]||(t[58]=n(" A class can have more than one constructor as long as their parameter lists are different. This is called ",-1)),l(a,null,{default:e(()=>[...t[57]||(t[57]=[n("constructor overloading",-1)])]),_:1}),t[59]||(t[59]=n(" . ",-1))]),_:1}),l(u,null,{default:e(()=>[t[60]||(t[60]=n(" For example: ",-1)),l(r,{code:z,language:"java"})]),_:1}),l(u,null,{default:e(()=>[t[61]||(t[61]=n(" Output: ",-1)),l(i,{output:R})]),_:1}),l(u,null,{default:e(()=>[...t[62]||(t[62]=[n(" Java chooses the appropriate constructor based on the arguments provided when the object is created. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[63]||(t[63]=[n("Why Use Constructors?",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[64]||(t[64]=[n(" Constructors make it easier to create objects with meaningful initial values. ",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[65]||(t[65]=[n(" Instead of creating an object and assigning every field separately, a constructor can initialize the object immediately. ",-1)])]),_:1}),l(o,null,{default:e(()=>[...t[66]||(t[66]=[n("Summary",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[67]||(t[67]=[n(" Constructors are used to initialize objects when they are created. ",-1)])]),_:1}),l(u,null,{default:e(()=>[...t[68]||(t[68]=[n(" In this topic, you learned that: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null," A constructor is used to initialize an object. "),s("li",null," A constructor has the same name as its class. "),s("li",null," Constructors do not have return types. "),s("li",null," Constructors are called automatically when an object is created. "),s("li",null," Constructors can receive parameters. "),s("li",null," A class can have multiple overloaded constructors. "),s("li",null," Java provides a default constructor when no constructor is explicitly defined. ")],-1)])]),_:1}),t[71]||(t[71]=s("br",null,null,-1)),l(p,{to:"/academia/student/classes/java-this-keyword"})])]),_:1}))}});export{W as default};

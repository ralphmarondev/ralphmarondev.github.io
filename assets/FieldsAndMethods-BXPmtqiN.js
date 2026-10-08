import{_ as r}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-r0drzrn4.js";import{T as u,a as o,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-nD8GM1v2.js";import{T as d,C as a}from"./CodeBlock-Z3HAVLif.js";import{O as i}from"./OutputBlock-B9VPajdJ.js";import{d as p,h as g,i as e,o as b,a as s,q as n,g as l}from"./index-BRxoWVJY.js";const v={class:"max-w-4xl mx-auto"},S={class:"list-disc pl-8 mt-3 space-y-2"},x=`
class Student {
    String name;
    int age;
}`,w=`
class Student {
    String name;
    int age;
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        student.name = "Ralph";
        student.age = 20;

        System.out.println(student.name);
        System.out.println(student.age);
    }
}`,j=`
Ralph
20`,y=`
class Student {
    String name;
    int age;
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        student.name = "Ralph";
        student.age = 20;

        student.age = 21;
        System.out.println(student.age);
    }
}`,F="21",M=`
class Student {
    String name;

    void introduce() {
        System.out.println("Hello, I am " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        student.name = "Ralph";
        student.introduce();
    }
}`,T="Hello, I am Ralph",C=`
class Student {
    String name;

    void introduce(String message) {
        System.out.println(message + ", " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        student.name = "Ralph";
        student.introduce("Hello");
    }
}`,O="Hello, Ralph",I=`
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    int multiply(int a, int b) {
        return a * b;
    }
}

public class Main {
    public static void main(String[] args) {
        Calculator calculator = new Calculator();

        System.out.println(calculator.add(5, 3));
        System.out.println(calculator.multiply(5, 3));
    }
}`,R=`
8
15`,k=`
class Car {
    String brand;
    int speed;

    void accelerate() {
        speed += 10;
    }

    void displaySpeed() {
        System.out.println(speed);
    }
}`,q=p({__name:"FieldsAndMethods",setup(A){return(B,t)=>(b(),g(f,null,{default:e(()=>[s("div",v,[t[115]||(t[115]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:r,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[116]||(t[116]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Fields and Methods ")],-1)),n(u,null,{default:e(()=>[t[2]||(t[2]=l(" In the previous topic, we learned that a class can contain data and behavior. In Java, these are commonly represented using ",-1)),n(d,null,{default:e(()=>[...t[0]||(t[0]=[l("fields",-1)])]),_:1}),t[3]||(t[3]=l(" and ",-1)),n(d,null,{default:e(()=>[...t[1]||(t[1]=[l("methods",-1)])]),_:1}),t[4]||(t[4]=l(" . ",-1))]),_:1}),n(u,null,{default:e(()=>[...t[5]||(t[5]=[l(" Fields describe what an object ",-1),s("strong",null,"has",-1),l(" , while methods describe what an object ",-1),s("strong",null,"does",-1),l(" . ",-1)])]),_:1}),n(o,null,{default:e(()=>[...t[6]||(t[6]=[l("Fields",-1)])]),_:1}),n(u,null,{default:e(()=>[t[8]||(t[8]=l(" A ",-1)),n(d,null,{default:e(()=>[...t[7]||(t[7]=[l("field",-1)])]),_:1}),t[9]||(t[9]=l(" is a variable declared inside a class. It represents data that belongs to an object. ",-1))]),_:1}),n(u,null,{default:e(()=>[t[10]||(t[10]=l(" For example: ",-1)),n(a,{code:x,language:"java"})]),_:1}),n(u,null,{default:e(()=>[t[15]||(t[15]=l(" The ",-1)),n(d,null,{default:e(()=>[...t[11]||(t[11]=[l("Student",-1)])]),_:1}),t[16]||(t[16]=l(" class has two fields: ",-1)),n(d,null,{default:e(()=>[...t[12]||(t[12]=[l("name",-1)])]),_:1}),t[17]||(t[17]=l(" and ",-1)),n(d,null,{default:e(()=>[...t[13]||(t[13]=[l("age",-1)])]),_:1}),t[18]||(t[18]=l(" . Each ",-1)),n(d,null,{default:e(()=>[...t[14]||(t[14]=[l("Student",-1)])]),_:1}),t[19]||(t[19]=l(" object can have its own values for these fields. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[20]||(t[20]=[l("Accessing Fields",-1)])]),_:1}),n(u,null,{default:e(()=>[t[22]||(t[22]=l(" Fields can be accessed through an object using the dot ",-1)),n(d,null,{default:e(()=>[...t[21]||(t[21]=[l(".",-1)])]),_:1}),t[23]||(t[23]=l(" operator. ",-1))]),_:1}),n(u,null,{default:e(()=>[t[24]||(t[24]=l(" For example: ",-1)),n(a,{code:w,language:"java"})]),_:1}),n(u,null,{default:e(()=>[t[25]||(t[25]=l(" Output: ",-1)),n(i,{output:j})]),_:1}),n(u,null,{default:e(()=>[t[29]||(t[29]=l(" The expression ",-1)),n(d,null,{default:e(()=>[...t[26]||(t[26]=[l("student.name",-1)])]),_:1}),t[30]||(t[30]=l(" accesses the ",-1)),n(d,null,{default:e(()=>[...t[27]||(t[27]=[l("name",-1)])]),_:1}),t[31]||(t[31]=l(" field belonging to the ",-1)),n(d,null,{default:e(()=>[...t[28]||(t[28]=[l("student",-1)])]),_:1}),t[32]||(t[32]=l(" object. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[33]||(t[33]=[l("Changing Field Values",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[34]||(t[34]=[l(" Field values can be changed after an object has been created. ",-1)])]),_:1}),n(u,null,{default:e(()=>[t[35]||(t[35]=l(" For example: ",-1)),n(a,{code:y,language:"java"})]),_:1}),n(u,null,{default:e(()=>[t[36]||(t[36]=l(" Output: ",-1)),n(i,{output:F})]),_:1}),n(u,null,{default:e(()=>[t[40]||(t[40]=l(" The ",-1)),n(d,null,{default:e(()=>[...t[37]||(t[37]=[l("age",-1)])]),_:1}),t[41]||(t[41]=l(" field initially contains ",-1)),n(d,null,{default:e(()=>[...t[38]||(t[38]=[l("20",-1)])]),_:1}),t[42]||(t[42]=l(" , but it is later changed to ",-1)),n(d,null,{default:e(()=>[...t[39]||(t[39]=[l("21",-1)])]),_:1}),t[43]||(t[43]=l(" . ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[44]||(t[44]=[l("Methods",-1)])]),_:1}),n(u,null,{default:e(()=>[t[46]||(t[46]=l(" A ",-1)),n(d,null,{default:e(()=>[...t[45]||(t[45]=[l("method",-1)])]),_:1}),t[47]||(t[47]=l(" is a block of code that performs an action. Methods represent the behavior of an object. ",-1))]),_:1}),n(u,null,{default:e(()=>[t[48]||(t[48]=l(" For example: ",-1)),n(a,{code:M,language:"java"})]),_:1}),n(u,null,{default:e(()=>[t[49]||(t[49]=l(" Output: ",-1)),n(i,{output:T})]),_:1}),n(u,null,{default:e(()=>[t[52]||(t[52]=l(" The ",-1)),n(d,null,{default:e(()=>[...t[50]||(t[50]=[l("introduce()",-1)])]),_:1}),t[53]||(t[53]=l(" method allows a ",-1)),n(d,null,{default:e(()=>[...t[51]||(t[51]=[l("Student",-1)])]),_:1}),t[54]||(t[54]=l(" object to introduce itself. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[55]||(t[55]=[l("Calling Methods",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[56]||(t[56]=[l(" Methods are called using the object followed by a dot and the method name. ",-1)])]),_:1}),n(u,null,{default:e(()=>[t[58]||(t[58]=l(" For example: ",-1)),n(d,null,{default:e(()=>[...t[57]||(t[57]=[l("student.introduce();",-1)])]),_:1})]),_:1}),n(u,null,{default:e(()=>[t[61]||(t[61]=l(" This tells Java to execute the ",-1)),n(d,null,{default:e(()=>[...t[59]||(t[59]=[l("introduce()",-1)])]),_:1}),t[62]||(t[62]=l(" method belonging to the ",-1)),n(d,null,{default:e(()=>[...t[60]||(t[60]=[l("student",-1)])]),_:1}),t[63]||(t[63]=l(" object. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[64]||(t[64]=[l("Methods with Parameters",-1)])]),_:1}),n(u,null,{default:e(()=>[t[66]||(t[66]=l(" Methods can accept ",-1)),n(d,null,{default:e(()=>[...t[65]||(t[65]=[l("parameters",-1)])]),_:1}),t[67]||(t[67]=l(" to receive additional information when they are called. ",-1))]),_:1}),n(u,null,{default:e(()=>[t[68]||(t[68]=l(" For example: ",-1)),n(a,{code:C,language:"java"})]),_:1}),n(u,null,{default:e(()=>[t[69]||(t[69]=l(" Output: ",-1)),n(i,{output:O})]),_:1}),n(u,null,{default:e(()=>[t[71]||(t[71]=l(" The ",-1)),n(d,null,{default:e(()=>[...t[70]||(t[70]=[l("message",-1)])]),_:1}),t[72]||(t[72]=l(" parameter allows the method to receive a value when it is called. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[73]||(t[73]=[l("Methods with Return Values",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[74]||(t[74]=[l(" A method can also calculate something and return a value to the code that called it. ",-1)])]),_:1}),n(u,null,{default:e(()=>[t[76]||(t[76]=l(" For example, a ",-1)),n(d,null,{default:e(()=>[...t[75]||(t[75]=[l("Calculator",-1)])]),_:1}),t[77]||(t[77]=l(" class can contain several methods: ",-1)),n(a,{code:I,language:"java"})]),_:1}),n(u,null,{default:e(()=>[t[78]||(t[78]=l(" Output: ",-1)),n(i,{output:R})]),_:1}),n(u,null,{default:e(()=>[t[81]||(t[81]=l(" The ",-1)),n(d,null,{default:e(()=>[...t[79]||(t[79]=[l("add()",-1)])]),_:1}),t[82]||(t[82]=l(" method returns the sum of two numbers, while ",-1)),n(d,null,{default:e(()=>[...t[80]||(t[80]=[l("multiply()",-1)])]),_:1}),t[83]||(t[83]=l(" returns their product. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[84]||(t[84]=[l("Fields and Methods Together",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[85]||(t[85]=[l(" Fields and methods often work together. A method can use or modify the fields belonging to its object. ",-1)])]),_:1}),n(u,null,{default:e(()=>[t[86]||(t[86]=l(" For example: ",-1)),n(a,{code:k,language:"java"})]),_:1}),n(u,null,{default:e(()=>[t[89]||(t[89]=l(" The ",-1)),n(d,null,{default:e(()=>[...t[87]||(t[87]=[l("speed",-1)])]),_:1}),t[90]||(t[90]=l(" field stores the car's current speed. The ",-1)),n(d,null,{default:e(()=>[...t[88]||(t[88]=[l("accelerate()",-1)])]),_:1}),t[91]||(t[91]=l(" method changes that value. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[92]||(t[92]=[l("State and Behavior",-1)])]),_:1}),n(u,null,{default:e(()=>[t[95]||(t[95]=l(" Fields and methods can be used to describe an object's ",-1)),n(d,null,{default:e(()=>[...t[93]||(t[93]=[l("state",-1)])]),_:1}),t[96]||(t[96]=l(" and ",-1)),n(d,null,{default:e(()=>[...t[94]||(t[94]=[l("behavior",-1)])]),_:1}),t[97]||(t[97]=l(" . ",-1))]),_:1}),n(u,null,{default:e(()=>[t[107]||(t[107]=l(" For a ",-1)),n(d,null,{default:e(()=>[...t[98]||(t[98]=[l("Car",-1)])]),_:1}),t[108]||(t[108]=l(" object, for example: ",-1)),s("ul",S,[s("li",null,[t[101]||(t[101]=l(" Fields such as ",-1)),n(d,null,{default:e(()=>[...t[99]||(t[99]=[l("brand",-1)])]),_:1}),t[102]||(t[102]=l(" and ",-1)),n(d,null,{default:e(()=>[...t[100]||(t[100]=[l("speed",-1)])]),_:1}),t[103]||(t[103]=l(" represent its state. ",-1))]),s("li",null,[t[105]||(t[105]=l(" Methods such as ",-1)),n(d,null,{default:e(()=>[...t[104]||(t[104]=[l("accelerate()",-1)])]),_:1}),t[106]||(t[106]=l(" represent its behavior. ",-1))])])]),_:1}),n(o,null,{default:e(()=>[...t[109]||(t[109]=[l("Why Use Methods?",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[110]||(t[110]=[l(" Methods allow related behavior to be grouped inside the class that owns it. This makes the code easier to organize and reuse. ",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[111]||(t[111]=[l(" Instead of repeatedly writing the same instructions, a method can be called whenever that behavior is needed. ",-1)])]),_:1}),n(o,null,{default:e(()=>[...t[112]||(t[112]=[l("Summary",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[113]||(t[113]=[l(" Fields and methods are fundamental parts of a Java class. ",-1)])]),_:1}),n(u,null,{default:e(()=>[...t[114]||(t[114]=[l(" In this topic, you learned that: ",-1),s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null," Fields are variables declared inside a class. "),s("li",null," Fields represent an object's data or state. "),s("li",null," Methods represent an object's behavior. "),s("li",null," Fields can be accessed using the dot operator. "),s("li",null," Methods can be called using an object. "),s("li",null," Methods can receive parameters and return values. "),s("li",null," Methods can access and modify an object's fields. ")],-1)])]),_:1}),t[117]||(t[117]=s("br",null,null,-1)),n(m,{to:"/academia/student/classes/java-constructors"})])]),_:1}))}});export{q as default};

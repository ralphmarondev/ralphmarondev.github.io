import{_ as i}from"./logo-C9ImmdpX.js";import{_ as f}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as e,a as o,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as u,C as a}from"./CodeBlock-CSdrTDFH.js";import{O as r}from"./OutputBlock-BPpR2jjy.js";import{d as p,h as b,i as s,o as g,a as d,q as n,g as l}from"./index-D3WOnH5O.js";const j={class:"max-w-4xl mx-auto"},S={class:"list-disc pl-8 mt-3 space-y-2"},v=`
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
}`,y=`
Ralph
20`,x=`
class Student {
    String name;
    int age;
}

public class Main {
    public static void main(String[] args) {
        Student student1 = new Student();
        Student student2 = new Student();

        student1.name = "Ralph";
        student1.age = 20;

        student2.name = "Fern";
        student2.age = 21;

        System.out.println(student1.name);
        System.out.println(student2.name);
    }
}`,T=`
Ralph
Fern`,O=`
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
}`,C="Hello, I am Ralph",A=`
class Car {
    String brand;
    int year;

    void displayInfo() {
        System.out.println(brand + " " + year);
    }
}`,F=`
class Student {
    String name = "Ralph";
    int age = 20;
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        System.out.println(student.name);
        System.out.println(student.age);
    }
}`,I=`
Ralph
20`,z=p({__name:"ClassesAndObjects",setup(k){return(M,t)=>(g(),b(f,null,{default:s(()=>[d("div",j,[t[142]||(t[142]=d("div",{class:"w-full flex justify-center mb-6"},[d("img",{src:i,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[143]||(t[143]=d("div",{class:"text-center mb-4"},[d("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 1 "),d("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Classes and Objects ")],-1)),n(e,null,{default:s(()=>[t[2]||(t[2]=l(" Java is an ",-1)),n(u,null,{default:s(()=>[...t[0]||(t[0]=[l("object-oriented programming",-1)])]),_:1}),t[3]||(t[3]=l(" language. Instead of organizing a program only around functions and variables, Java allows us to model things as ",-1)),n(u,null,{default:s(()=>[...t[1]||(t[1]=[l("objects",-1)])]),_:1}),t[4]||(t[4]=l(" . ",-1))]),_:1}),n(e,null,{default:s(()=>[t[7]||(t[7]=l(" Two of the most important concepts in object-oriented programming are ",-1)),n(u,null,{default:s(()=>[...t[5]||(t[5]=[l("classes",-1)])]),_:1}),t[8]||(t[8]=l(" and ",-1)),n(u,null,{default:s(()=>[...t[6]||(t[6]=[l("objects",-1)])]),_:1}),t[9]||(t[9]=l(" . A class defines what an object should contain, while an object represents an actual instance of that class. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[10]||(t[10]=[l("What is a Class?",-1)])]),_:1}),n(e,null,{default:s(()=>[t[12]||(t[12]=l(" A ",-1)),n(u,null,{default:s(()=>[...t[11]||(t[11]=[l("class",-1)])]),_:1}),t[13]||(t[13]=l(" is a blueprint or template used to create objects. It defines the data and behavior that objects of that class can have. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[15]||(t[15]=l(" For example, we can create a ",-1)),n(u,null,{default:s(()=>[...t[14]||(t[14]=[l("Student",-1)])]),_:1}),t[16]||(t[16]=l(" class: ",-1)),n(a,{code:v,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[19]||(t[19]=l(" This class describes a student using two pieces of data: ",-1)),n(u,null,{default:s(()=>[...t[17]||(t[17]=[l("name",-1)])]),_:1}),t[20]||(t[20]=l(" and ",-1)),n(u,null,{default:s(()=>[...t[18]||(t[18]=[l("age",-1)])]),_:1}),t[21]||(t[21]=l(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[22]||(t[22]=[l("What is an Object?",-1)])]),_:1}),n(e,null,{default:s(()=>[t[24]||(t[24]=l(" An ",-1)),n(u,null,{default:s(()=>[...t[23]||(t[23]=[l("object",-1)])]),_:1}),t[25]||(t[25]=l(" is an actual instance of a class. It is created from the blueprint provided by the class. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[28]||(t[28]=l(" For example, we can create a ",-1)),n(u,null,{default:s(()=>[...t[26]||(t[26]=[l("Student",-1)])]),_:1}),t[29]||(t[29]=l(" object using the ",-1)),n(u,null,{default:s(()=>[...t[27]||(t[27]=[l("new",-1)])]),_:1}),t[30]||(t[30]=l(" keyword: ",-1)),n(a,{code:w,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[31]||(t[31]=l(" Output: ",-1)),n(r,{output:y})]),_:1}),n(e,null,{default:s(()=>[t[34]||(t[34]=l(" The statement ",-1)),n(u,null,{default:s(()=>[...t[32]||(t[32]=[l("new Student()",-1)])]),_:1}),t[35]||(t[35]=l(" creates a new object from the ",-1)),n(u,null,{default:s(()=>[...t[33]||(t[33]=[l("Student",-1)])]),_:1}),t[36]||(t[36]=l(" class. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[37]||(t[37]=[l("Class vs Object",-1)])]),_:1}),n(e,null,{default:s(()=>[...t[38]||(t[38]=[l(" A class describes what an object should look like and what it can do. An object is the actual instance created from that class. ",-1)])]),_:1}),n(e,null,{default:s(()=>[t[41]||(t[41]=l(" A useful analogy is a house blueprint. The blueprint represents the ",-1)),n(u,null,{default:s(()=>[...t[39]||(t[39]=[l("class",-1)])]),_:1}),t[42]||(t[42]=l(" , while an actual house built from that blueprint represents an ",-1)),n(u,null,{default:s(()=>[...t[40]||(t[40]=[l("object",-1)])]),_:1}),t[43]||(t[43]=l(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[44]||(t[44]=[l("Creating Multiple Objects",-1)])]),_:1}),n(e,null,{default:s(()=>[...t[45]||(t[45]=[l(" A single class can be used to create many different objects. Each object has its own data. ",-1)])]),_:1}),n(e,null,{default:s(()=>[t[46]||(t[46]=l(" For example: ",-1)),n(a,{code:x,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[47]||(t[47]=l(" Output: ",-1)),n(r,{output:T})]),_:1}),n(e,null,{default:s(()=>[t[51]||(t[51]=l(" Both ",-1)),n(u,null,{default:s(()=>[...t[48]||(t[48]=[l("student1",-1)])]),_:1}),t[52]||(t[52]=l(" and ",-1)),n(u,null,{default:s(()=>[...t[49]||(t[49]=[l("student2",-1)])]),_:1}),t[53]||(t[53]=l(" are objects of the same ",-1)),n(u,null,{default:s(()=>[...t[50]||(t[50]=[l("Student",-1)])]),_:1}),t[54]||(t[54]=l(" class, but they contain different values. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[55]||(t[55]=[l("Fields",-1)])]),_:1}),n(e,null,{default:s(()=>[t[57]||(t[57]=l(" Variables declared inside a class are called ",-1)),n(u,null,{default:s(()=>[...t[56]||(t[56]=[l("fields",-1)])]),_:1}),t[58]||(t[58]=l(" . They represent the data or state that an object can have. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[62]||(t[62]=l(" In the ",-1)),n(u,null,{default:s(()=>[...t[59]||(t[59]=[l("Student",-1)])]),_:1}),t[63]||(t[63]=l(" class, both ",-1)),n(u,null,{default:s(()=>[...t[60]||(t[60]=[l("name",-1)])]),_:1}),t[64]||(t[64]=l(" and ",-1)),n(u,null,{default:s(()=>[...t[61]||(t[61]=[l("age",-1)])]),_:1}),t[65]||(t[65]=l(" are fields. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[66]||(t[66]=[l("Accessing Fields",-1)])]),_:1}),n(e,null,{default:s(()=>[t[68]||(t[68]=l(" An object's fields can be accessed using the dot ",-1)),n(u,null,{default:s(()=>[...t[67]||(t[67]=[l(".",-1)])]),_:1}),t[69]||(t[69]=l(" operator. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[73]||(t[73]=l(" For example: ",-1)),n(u,null,{default:s(()=>[...t[70]||(t[70]=[l("student.name",-1)])]),_:1}),t[74]||(t[74]=l(" accesses the ",-1)),n(u,null,{default:s(()=>[...t[71]||(t[71]=[l("name",-1)])]),_:1}),t[75]||(t[75]=l(" field of the ",-1)),n(u,null,{default:s(()=>[...t[72]||(t[72]=[l("student",-1)])]),_:1}),t[76]||(t[76]=l(" object. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[77]||(t[77]=[l("Methods in a Class",-1)])]),_:1}),n(e,null,{default:s(()=>[...t[78]||(t[78]=[l(" A class can also contain methods. Methods describe actions or behavior that an object can perform. ",-1)])]),_:1}),n(e,null,{default:s(()=>[t[79]||(t[79]=l(" For example: ",-1)),n(a,{code:O,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[80]||(t[80]=l(" Output: ",-1)),n(r,{output:C})]),_:1}),n(e,null,{default:s(()=>[t[83]||(t[83]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[81]||(t[81]=[l("introduce()",-1)])]),_:1}),t[84]||(t[84]=l(" method belongs to the ",-1)),n(u,null,{default:s(()=>[...t[82]||(t[82]=[l("Student",-1)])]),_:1}),t[85]||(t[85]=l(" class. An object can call the method using the dot operator. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[86]||(t[86]=[l("Class Structure",-1)])]),_:1}),n(e,null,{default:s(()=>[t[87]||(t[87]=l(" A class can contain both fields and methods. For example: ",-1)),n(a,{code:A,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[91]||(t[91]=l(" In this example, ",-1)),n(u,null,{default:s(()=>[...t[88]||(t[88]=[l("brand",-1)])]),_:1}),t[92]||(t[92]=l(" and ",-1)),n(u,null,{default:s(()=>[...t[89]||(t[89]=[l("year",-1)])]),_:1}),t[93]||(t[93]=l(" represent the object's data, while ",-1)),n(u,null,{default:s(()=>[...t[90]||(t[90]=[l("displayInfo()",-1)])]),_:1}),t[94]||(t[94]=l(" represents its behavior. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[95]||(t[95]=[l("Object State",-1)])]),_:1}),n(e,null,{default:s(()=>[t[97]||(t[97]=l(" The values stored in an object's fields represent its ",-1)),n(u,null,{default:s(()=>[...t[96]||(t[96]=[l("state",-1)])]),_:1}),t[98]||(t[98]=l(" . ",-1))]),_:1}),n(e,null,{default:s(()=>[t[99]||(t[99]=l(" For example: ",-1)),n(a,{code:F,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[100]||(t[100]=l(" Output: ",-1)),n(r,{output:I})]),_:1}),n(e,null,{default:s(()=>[t[103]||(t[103]=l(" The object's state consists of the values stored in its fields, such as its ",-1)),n(u,null,{default:s(()=>[...t[101]||(t[101]=[l("name",-1)])]),_:1}),t[104]||(t[104]=l(" and ",-1)),n(u,null,{default:s(()=>[...t[102]||(t[102]=[l("age",-1)])]),_:1}),t[105]||(t[105]=l(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[106]||(t[106]=[l("The new Keyword",-1)])]),_:1}),n(e,null,{default:s(()=>[t[108]||(t[108]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[107]||(t[107]=[l("new",-1)])]),_:1}),t[109]||(t[109]=l(" keyword is used to create an object from a class. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[111]||(t[111]=l(" For example: ",-1)),n(u,null,{default:s(()=>[...t[110]||(t[110]=[l("Student student = new Student();",-1)])]),_:1})]),_:1}),n(e,null,{default:s(()=>[t[114]||(t[114]=l(" The left side declares a variable that can reference a ",-1)),n(u,null,{default:s(()=>[...t[112]||(t[112]=[l("Student",-1)])]),_:1}),t[115]||(t[115]=l(" object, while the ",-1)),n(u,null,{default:s(()=>[...t[113]||(t[113]=[l("new",-1)])]),_:1}),t[116]||(t[116]=l(" expression creates the actual object. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[117]||(t[117]=[l("Why Use Classes and Objects?",-1)])]),_:1}),n(e,null,{default:s(()=>[...t[118]||(t[118]=[l(" Classes and objects allow programs to represent related data and behavior together. This makes larger programs easier to organize and understand. ",-1)])]),_:1}),n(e,null,{default:s(()=>[t[122]||(t[122]=l(" For example, a school system could have classes such as ",-1)),n(u,null,{default:s(()=>[...t[119]||(t[119]=[l("Student",-1)])]),_:1}),t[123]||(t[123]=l(" , ",-1)),n(u,null,{default:s(()=>[...t[120]||(t[120]=[l("Teacher",-1)])]),_:1}),t[124]||(t[124]=l(" , and ",-1)),n(u,null,{default:s(()=>[...t[121]||(t[121]=[l("Course",-1)])]),_:1}),t[125]||(t[125]=l(" . Each class can define the data and behavior appropriate for that type of object. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[126]||(t[126]=[l("Summary",-1)])]),_:1}),n(e,null,{default:s(()=>[...t[127]||(t[127]=[l(" Classes and objects are fundamental concepts in Java's object-oriented programming model. ",-1)])]),_:1}),n(e,null,{default:s(()=>[t[141]||(t[141]=l(" In this topic, you learned that: ",-1)),d("ul",S,[d("li",null,[t[129]||(t[129]=l(" A ",-1)),n(u,null,{default:s(()=>[...t[128]||(t[128]=[l("class",-1)])]),_:1}),t[130]||(t[130]=l(" is a blueprint for creating objects. ",-1))]),d("li",null,[t[132]||(t[132]=l(" An ",-1)),n(u,null,{default:s(()=>[...t[131]||(t[131]=[l("object",-1)])]),_:1}),t[133]||(t[133]=l(" is an instance of a class. ",-1))]),t[137]||(t[137]=d("li",null," Fields represent the data or state of an object. ",-1)),t[138]||(t[138]=d("li",null," Methods represent behavior that an object can perform. ",-1)),t[139]||(t[139]=d("li",null," The dot operator is used to access an object's fields and methods. ",-1)),d("li",null,[t[135]||(t[135]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[134]||(t[134]=[l("new",-1)])]),_:1}),t[136]||(t[136]=l(" keyword is used to create objects. ",-1))]),t[140]||(t[140]=d("li",null," One class can be used to create many different objects. ",-1))])]),_:1}),t[144]||(t[144]=d("br",null,null,-1)),n(m,{to:"/academia/student/classes/java-fields-and-methods"})])]),_:1}))}});export{z as default};

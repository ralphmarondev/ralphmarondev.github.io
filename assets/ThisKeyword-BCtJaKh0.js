import{_ as a}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-BeS9iuqN.js";import{T as e,a as o,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-D7U12mcf.js";import{T as u}from"./TopicTerm-Dw7PNqTI.js";import{C as r}from"./CodeBlock-BgBdQh_Q.js";import{O as d}from"./OutputBlock-CUGk6WXg.js";import{d as p,h as g,i as s,o as b,a as i,q as n,g as l}from"./index-BX2gTDPs.js";const S={class:"max-w-4xl mx-auto"},w={class:"list-disc pl-8 mt-3 space-y-2"},y={class:"list-disc pl-8 mt-3 space-y-2"},T={class:"list-disc pl-8 mt-3 space-y-2"},j=`
class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}`,x="Ralph",v=`
class Student {
    String name;

    Student(String studentName) {
        name = studentName;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Ralph");

        System.out.println(student.name);
    }
}`,k=`
class Student {
    String name;

    Student(String name) {
        this.name = name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student("Ralph");

        System.out.println(student.name);
    }
}`,C=`
class Student {
    String name;

    void displayName() {
        System.out.println(this.name);
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "Ralph";

        student.displayName();
    }
}`,O="Ralph",N=`
class Student {
    String name;

    void display(Student student) {
        System.out.println(student.name);
    }

    void show() {
        display(this);
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.name = "Ralph";

        student.show();
    }
}`,R="Ralph",M=`
class Student {
    String name;
    int age;

    Student() {
        this("Unknown", 0);
    }

    Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        System.out.println(student.name);
        System.out.println(student.age);
    }
}`,F=`
Unknown
0`,V=p({__name:"ThisKeyword",setup(I){return(U,t)=>(b(),g(m,null,{default:s(()=>[i("div",S,[t[112]||(t[112]=i("div",{class:"w-full flex justify-center mb-6"},[i("img",{src:a,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[113]||(t[113]=i("div",{class:"text-center mb-4"},[i("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),i("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," this Keyword ")],-1)),n(e,null,{default:s(()=>[t[1]||(t[1]=l(" When working with classes and objects, Java provides the ",-1)),n(u,null,{default:s(()=>[...t[0]||(t[0]=[l("this",-1)])]),_:1}),t[2]||(t[2]=l(" keyword to refer to the current object. ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[3]||(t[3]=[l(" It is especially useful when a method or constructor has a parameter with the same name as a field. ",-1)])]),_:1}),n(o,null,{default:s(()=>[...t[4]||(t[4]=[l("What is this?",-1)])]),_:1}),n(e,null,{default:s(()=>[t[7]||(t[7]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[5]||(t[5]=[l("this",-1)])]),_:1}),t[8]||(t[8]=l(" keyword refers to the ",-1)),n(u,null,{default:s(()=>[...t[6]||(t[6]=[l("current object",-1)])]),_:1}),t[9]||(t[9]=l(" . It allows code inside a class to refer specifically to the object whose method or constructor is currently being executed. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[10]||(t[10]=[l("Using this with Fields",-1)])]),_:1}),n(e,null,{default:s(()=>[t[12]||(t[12]=l(" One of the most common uses of ",-1)),n(u,null,{default:s(()=>[...t[11]||(t[11]=[l("this",-1)])]),_:1}),t[13]||(t[13]=l(" is distinguishing a field from a parameter with the same name. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[14]||(t[14]=l(" For example: ",-1)),n(r,{code:j,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[18]||(t[18]=l(" Here, ",-1)),n(u,null,{default:s(()=>[...t[15]||(t[15]=[l("this.name",-1)])]),_:1}),t[19]||(t[19]=l(" refers to the ",-1)),n(u,null,{default:s(()=>[...t[16]||(t[16]=[l("name",-1)])]),_:1}),t[20]||(t[20]=l(" field belonging to the current object. The ",-1)),n(u,null,{default:s(()=>[...t[17]||(t[17]=[l("name",-1)])]),_:1}),t[21]||(t[21]=l(" on the right side refers to the constructor parameter. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[22]||(t[22]=l(" The result is: ",-1)),n(d,{output:x})]),_:1}),n(o,null,{default:s(()=>[...t[23]||(t[23]=[l("Why Use this?",-1)])]),_:1}),n(e,null,{default:s(()=>[t[24]||(t[24]=l(" Consider a constructor that uses a different parameter name: ",-1)),n(r,{code:v,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[27]||(t[27]=l(" This works because ",-1)),n(u,null,{default:s(()=>[...t[25]||(t[25]=[l("studentName",-1)])]),_:1}),t[28]||(t[28]=l(" and ",-1)),n(u,null,{default:s(()=>[...t[26]||(t[26]=[l("name",-1)])]),_:1}),t[29]||(t[29]=l(" have different names. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[31]||(t[31]=l(" However, it is common to use the same name for the field and the parameter. In that case, ",-1)),n(u,null,{default:s(()=>[...t[30]||(t[30]=[l("this",-1)])]),_:1}),t[32]||(t[32]=l(" makes the distinction clear. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[33]||(t[33]=l(" For example: ",-1)),n(r,{code:k,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[39]||(t[39]=l(" The statement ",-1)),n(u,null,{default:s(()=>[...t[34]||(t[34]=[l("this.name = name;",-1)])]),_:1}),t[40]||(t[40]=l(" means: ",-1)),i("ul",w,[i("li",null,[n(u,null,{default:s(()=>[...t[35]||(t[35]=[l("this.name",-1)])]),_:1}),t[36]||(t[36]=l(" → the field of the current object ",-1))]),i("li",null,[n(u,null,{default:s(()=>[...t[37]||(t[37]=[l("name",-1)])]),_:1}),t[38]||(t[38]=l(" → the constructor parameter ",-1))])])]),_:1}),n(o,null,{default:s(()=>[...t[41]||(t[41]=[l("this in Methods",-1)])]),_:1}),n(e,null,{default:s(()=>[t[43]||(t[43]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[42]||(t[42]=[l("this",-1)])]),_:1}),t[44]||(t[44]=l(" keyword can also be used inside methods to refer to the current object's fields. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[45]||(t[45]=l(" For example: ",-1)),n(r,{code:C,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[46]||(t[46]=l(" Output: ",-1)),n(d,{output:O})]),_:1}),n(e,null,{default:s(()=>[t[50]||(t[50]=l(" Here, ",-1)),n(u,null,{default:s(()=>[...t[47]||(t[47]=[l("this.name",-1)])]),_:1}),t[51]||(t[51]=l(" refers to the ",-1)),n(u,null,{default:s(()=>[...t[48]||(t[48]=[l("name",-1)])]),_:1}),t[52]||(t[52]=l(" field of the object that called ",-1)),n(u,null,{default:s(()=>[...t[49]||(t[49]=[l("displayName()",-1)])]),_:1}),t[53]||(t[53]=l(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[54]||(t[54]=[l("this as an Argument",-1)])]),_:1}),n(e,null,{default:s(()=>[t[56]||(t[56]=l(" The current object can also be passed to another method using ",-1)),n(u,null,{default:s(()=>[...t[55]||(t[55]=[l("this",-1)])]),_:1}),t[57]||(t[57]=l(" . ",-1))]),_:1}),n(e,null,{default:s(()=>[t[58]||(t[58]=l(" For example: ",-1)),n(r,{code:N,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[59]||(t[59]=l(" Output: ",-1)),n(d,{output:R})]),_:1}),n(e,null,{default:s(()=>[t[63]||(t[63]=l(" The statement ",-1)),n(u,null,{default:s(()=>[...t[60]||(t[60]=[l("display(this)",-1)])]),_:1}),t[64]||(t[64]=l(" passes the current ",-1)),n(u,null,{default:s(()=>[...t[61]||(t[61]=[l("Student",-1)])]),_:1}),t[65]||(t[65]=l(" object to the ",-1)),n(u,null,{default:s(()=>[...t[62]||(t[62]=[l("display()",-1)])]),_:1}),t[66]||(t[66]=l(" method. ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[67]||(t[67]=[l("Calling Another Constructor with this()",-1)])]),_:1}),n(e,null,{default:s(()=>[t[69]||(t[69]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[68]||(t[68]=[l("this",-1)])]),_:1}),t[70]||(t[70]=l(" keyword can also be used with parentheses to call another constructor in the same class. ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[71]||(t[71]=[l(" This is useful when one constructor wants to reuse the initialization logic of another constructor. ",-1)])]),_:1}),n(e,null,{default:s(()=>[t[72]||(t[72]=l(" For example: ",-1)),n(r,{code:M,language:"java"})]),_:1}),n(e,null,{default:s(()=>[t[73]||(t[73]=l(" Output: ",-1)),n(d,{output:F})]),_:1}),n(e,null,{default:s(()=>[t[76]||(t[76]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[74]||(t[74]=[l('this("Unknown", 0)',-1)])]),_:1}),t[77]||(t[77]=l(" statement calls the parameterized constructor of the same class. This is called ",-1)),n(u,null,{default:s(()=>[...t[75]||(t[75]=[l("constructor chaining",-1)])]),_:1}),t[78]||(t[78]=l(" . ",-1))]),_:1}),n(o,null,{default:s(()=>[...t[79]||(t[79]=[l("Important Rule for this()",-1)])]),_:1}),n(e,null,{default:s(()=>[t[81]||(t[81]=l(" When ",-1)),n(u,null,{default:s(()=>[...t[80]||(t[80]=[l("this()",-1)])]),_:1}),t[82]||(t[82]=l(" is used to call another constructor, it must be the first statement inside the constructor. ",-1))]),_:1}),n(e,null,{default:s(()=>[...t[83]||(t[83]=[l(" This allows Java to initialize the object through the selected constructor before executing any other statements in that constructor. ",-1)])]),_:1}),n(o,null,{default:s(()=>[...t[84]||(t[84]=[l("Common Uses of this",-1)])]),_:1}),n(e,null,{default:s(()=>[t[93]||(t[93]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[85]||(t[85]=[l("this",-1)])]),_:1}),t[94]||(t[94]=l(" keyword is commonly used to: ",-1)),i("ul",y,[t[89]||(t[89]=i("li",null,"Refer to the current object's fields.",-1)),t[90]||(t[90]=i("li",null,"Distinguish fields from parameters with the same name.",-1)),t[91]||(t[91]=i("li",null,"Call another method using the current object.",-1)),t[92]||(t[92]=i("li",null,"Pass the current object as an argument.",-1)),i("li",null,[t[87]||(t[87]=l("Call another constructor in the same class using ",-1)),n(u,null,{default:s(()=>[...t[86]||(t[86]=[l("this()",-1)])]),_:1}),t[88]||(t[88]=l(" . ",-1))])])]),_:1}),n(o,null,{default:s(()=>[...t[95]||(t[95]=[l("Summary",-1)])]),_:1}),n(e,null,{default:s(()=>[t[97]||(t[97]=l(" The ",-1)),n(u,null,{default:s(()=>[...t[96]||(t[96]=[l("this",-1)])]),_:1}),t[98]||(t[98]=l(" keyword provides a way for an object to refer to itself. ",-1))]),_:1}),n(e,null,{default:s(()=>[t[111]||(t[111]=l(" In this topic, you learned that: ",-1)),i("ul",T,[i("li",null,[n(u,null,{default:s(()=>[...t[99]||(t[99]=[l("this",-1)])]),_:1}),t[100]||(t[100]=l(" refers to the current object. ",-1))]),i("li",null,[n(u,null,{default:s(()=>[...t[101]||(t[101]=[l("this.field",-1)])]),_:1}),t[102]||(t[102]=l(" refers to a field belonging to the current object. ",-1))]),i("li",null,[n(u,null,{default:s(()=>[...t[103]||(t[103]=[l("this",-1)])]),_:1}),t[104]||(t[104]=l(" can distinguish fields from parameters with the same name. ",-1))]),i("li",null,[n(u,null,{default:s(()=>[...t[105]||(t[105]=[l("this",-1)])]),_:1}),t[106]||(t[106]=l(" can be passed as an argument. ",-1))]),i("li",null,[n(u,null,{default:s(()=>[...t[107]||(t[107]=[l("this()",-1)])]),_:1}),t[108]||(t[108]=l(" can call another constructor in the same class. ",-1))]),i("li",null,[n(u,null,{default:s(()=>[...t[109]||(t[109]=[l("this()",-1)])]),_:1}),t[110]||(t[110]=l(" must be the first statement in a constructor. ",-1))])])]),_:1}),t[114]||(t[114]=i("br",null,null,-1)),n(f,{to:"/academia/student/classes/java-encapsulation"})])]),_:1}))}});export{V as default};

import{_ as r}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-DJnrRoKO.js";import{T as s,a as o,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-CFdx1hyn.js";import{T as i,C as a}from"./CodeBlock-C71vZ0rQ.js";import{O as d}from"./OutputBlock-D-Mb7HUv.js";import{d as m,h as g,i as e,o as v,a as u,q as n,g as l}from"./index-BD6qp2iQ.js";const b={class:"max-w-4xl mx-auto"},S={class:"list-disc pl-8 mt-3 space-y-2"},y={class:"list-disc pl-8 mt-3 space-y-2"},x={class:"list-disc pl-8 mt-3 space-y-2"},w=`
class Student {
    public String name;
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        student.name = "Ralph";

        System.out.println(student.name);
    }
}`,E="Ralph",T=`
class Student {
    private String name;

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();

        student.setName("Ralph");

        System.out.println(student.getName());
    }
}`,j="Ralph",O=`
class Student {
    private int age;

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }

    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setAge(20);

        System.out.println(student.getAge());
    }
}`,A="20",k=`
class Student {
    private int age;

    public void setAge(int age) {
        if (age >= 0) {
            this.age = age;
        }
    }
    public int getAge() {
        return age;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setAge(-5);

        System.out.println(student.getAge());
    }
}`,F="0",N=`
class Student {
    private boolean enrolled;

    public void setEnrolled(boolean enrolled) {
        this.enrolled = enrolled;
    }

    public boolean isEnrolled() {
        return enrolled;
    }
}

public class Main {
    public static void main(String[] args) {
        Student student = new Student();
        student.setEnrolled(true);

        System.out.println(student.isEnrolled());
    }
}`,B="true",W=m({__name:"Encapsulation",setup(C){return(M,t)=>(v(),g(p,null,{default:e(()=>[u("div",b,[t[101]||(t[101]=u("div",{class:"w-full flex justify-center mb-6"},[u("img",{src:r,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[102]||(t[102]=u("div",{class:"text-center mb-4"},[u("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 5 "),u("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Encapsulation ")],-1)),n(s,null,{default:e(()=>[t[1]||(t[1]=l(" In object-oriented programming, it is often useful to prevent other parts of a program from directly changing an object's data. Java provides ",-1)),n(i,null,{default:e(()=>[...t[0]||(t[0]=[l("encapsulation",-1)])]),_:1}),t[2]||(t[2]=l(" to help achieve this. ",-1))]),_:1}),n(s,null,{default:e(()=>[...t[3]||(t[3]=[l(" Encapsulation means keeping an object's data and the methods that operate on that data together inside a class while controlling how that data can be accessed. ",-1)])]),_:1}),n(o,null,{default:e(()=>[...t[4]||(t[4]=[l("Why Encapsulation?",-1)])]),_:1}),n(s,null,{default:e(()=>[...t[5]||(t[5]=[l(" Without encapsulation, fields can be exposed directly to other parts of the program. This allows values to be changed without any validation or control. ",-1)])]),_:1}),n(s,null,{default:e(()=>[t[6]||(t[6]=l(" For example: ",-1)),n(a,{code:w,language:"java"})]),_:1}),n(s,null,{default:e(()=>[t[7]||(t[7]=l(" Output: ",-1)),n(d,{output:E})]),_:1}),n(s,null,{default:e(()=>[t[9]||(t[9]=l(" The ",-1)),n(i,null,{default:e(()=>[...t[8]||(t[8]=[l("name",-1)])]),_:1}),t[10]||(t[10]=l(" field can be accessed and changed directly from outside the class. For simple programs this may work, but larger programs benefit from controlling how fields are accessed. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[11]||(t[11]=[l("Private Fields",-1)])]),_:1}),n(s,null,{default:e(()=>[t[13]||(t[13]=l(" Encapsulation commonly starts by making fields ",-1)),n(i,null,{default:e(()=>[...t[12]||(t[12]=[l("private",-1)])]),_:1}),t[14]||(t[14]=l(" . A private field cannot be accessed directly from outside its class. ",-1))]),_:1}),n(s,null,{default:e(()=>[...t[15]||(t[15]=[l(" Instead, the class provides methods that control access to the field. ",-1)])]),_:1}),n(s,null,{default:e(()=>[t[16]||(t[16]=l(" For example: ",-1)),n(a,{code:T,language:"java"})]),_:1}),n(s,null,{default:e(()=>[t[17]||(t[17]=l(" Output: ",-1)),n(d,{output:j})]),_:1}),n(s,null,{default:e(()=>[t[22]||(t[22]=l(" The ",-1)),n(i,null,{default:e(()=>[...t[18]||(t[18]=[l("name",-1)])]),_:1}),t[23]||(t[23]=l(" field is private, so the ",-1)),n(i,null,{default:e(()=>[...t[19]||(t[19]=[l("Main",-1)])]),_:1}),t[24]||(t[24]=l(" class cannot access it directly. Instead, it uses ",-1)),n(i,null,{default:e(()=>[...t[20]||(t[20]=[l("setName()",-1)])]),_:1}),t[25]||(t[25]=l(" and ",-1)),n(i,null,{default:e(()=>[...t[21]||(t[21]=[l("getName()",-1)])]),_:1}),t[26]||(t[26]=l(" . ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[27]||(t[27]=[l("Getters and Setters",-1)])]),_:1}),n(s,null,{default:e(()=>[t[29]||(t[29]=l(" A ",-1)),n(i,null,{default:e(()=>[...t[28]||(t[28]=[l("getter",-1)])]),_:1}),t[30]||(t[30]=l(" is a method used to retrieve the value of a private field. ",-1))]),_:1}),n(s,null,{default:e(()=>[t[32]||(t[32]=l(" A ",-1)),n(i,null,{default:e(()=>[...t[31]||(t[31]=[l("setter",-1)])]),_:1}),t[33]||(t[33]=l(" is a method used to change the value of a private field. ",-1))]),_:1}),n(s,null,{default:e(()=>[t[42]||(t[42]=l(" For example: ",-1)),u("ul",S,[u("li",null,[n(i,null,{default:e(()=>[...t[34]||(t[34]=[l("getName()",-1)])]),_:1}),t[36]||(t[36]=l(" retrieves the value of ",-1)),n(i,null,{default:e(()=>[...t[35]||(t[35]=[l("name",-1)])]),_:1}),t[37]||(t[37]=l(" . ",-1))]),u("li",null,[n(i,null,{default:e(()=>[...t[38]||(t[38]=[l("setName()",-1)])]),_:1}),t[40]||(t[40]=l(" changes the value of ",-1)),n(i,null,{default:e(()=>[...t[39]||(t[39]=[l("name",-1)])]),_:1}),t[41]||(t[41]=l(" . ",-1))])])]),_:1}),n(o,null,{default:e(()=>[...t[43]||(t[43]=[l("Controlling Data with Setters",-1)])]),_:1}),n(s,null,{default:e(()=>[...t[44]||(t[44]=[l(" One advantage of encapsulation is that a setter can validate a value before storing it. ",-1)])]),_:1}),n(s,null,{default:e(()=>[t[45]||(t[45]=l(" For example, a student's age should not normally be negative: ",-1)),n(a,{code:O,language:"java"})]),_:1}),n(s,null,{default:e(()=>[t[46]||(t[46]=l(" Output: ",-1)),n(d,{output:A})]),_:1}),n(s,null,{default:e(()=>[...t[47]||(t[47]=[l(" The setter checks the value before assigning it to the field. This gives the class control over how its data is changed. ",-1)])]),_:1}),n(o,null,{default:e(()=>[...t[48]||(t[48]=[l("Rejecting Invalid Values",-1)])]),_:1}),n(s,null,{default:e(()=>[...t[49]||(t[49]=[l(" If an invalid value is passed to the setter, the field remains unchanged. ",-1)])]),_:1}),n(s,null,{default:e(()=>[t[50]||(t[50]=l(" For example: ",-1)),n(a,{code:k,language:"java"})]),_:1}),n(s,null,{default:e(()=>[t[51]||(t[51]=l(" Output: ",-1)),n(d,{output:F})]),_:1}),n(s,null,{default:e(()=>[t[54]||(t[54]=l(" The value ",-1)),n(i,null,{default:e(()=>[...t[52]||(t[52]=[l("-5",-1)])]),_:1}),t[55]||(t[55]=l(" is rejected because it does not satisfy the condition inside ",-1)),n(i,null,{default:e(()=>[...t[53]||(t[53]=[l("setAge()",-1)])]),_:1}),t[56]||(t[56]=l(" . ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[57]||(t[57]=[l("Boolean Getters",-1)])]),_:1}),n(s,null,{default:e(()=>[t[60]||(t[60]=l(" Boolean fields commonly use a getter whose name begins with ",-1)),n(i,null,{default:e(()=>[...t[58]||(t[58]=[l("is",-1)])]),_:1}),t[61]||(t[61]=l(" instead of ",-1)),n(i,null,{default:e(()=>[...t[59]||(t[59]=[l("get",-1)])]),_:1}),t[62]||(t[62]=l(" . ",-1))]),_:1}),n(s,null,{default:e(()=>[t[63]||(t[63]=l(" For example: ",-1)),n(a,{code:N,language:"java"})]),_:1}),n(s,null,{default:e(()=>[t[64]||(t[64]=l(" Output: ",-1)),n(d,{output:B})]),_:1}),n(s,null,{default:e(()=>[t[67]||(t[67]=l(" The method ",-1)),n(i,null,{default:e(()=>[...t[65]||(t[65]=[l("isEnrolled()",-1)])]),_:1}),t[68]||(t[68]=l(" returns the current value of the ",-1)),n(i,null,{default:e(()=>[...t[66]||(t[66]=[l("enrolled",-1)])]),_:1}),t[69]||(t[69]=l(" field. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[70]||(t[70]=[l("Access Modifiers and Encapsulation",-1)])]),_:1}),n(s,null,{default:e(()=>[...t[71]||(t[71]=[l(" Java provides access modifiers that control where class members can be accessed. ",-1)])]),_:1}),n(s,null,{default:e(()=>[t[78]||(t[78]=l(" The most commonly used modifiers in this context are: ",-1)),u("ul",y,[u("li",null,[n(i,null,{default:e(()=>[...t[72]||(t[72]=[l("private",-1)])]),_:1}),t[73]||(t[73]=l(" → accessible only within the same class. ",-1))]),u("li",null,[n(i,null,{default:e(()=>[...t[74]||(t[74]=[l("public",-1)])]),_:1}),t[75]||(t[75]=l(" → accessible from other classes. ",-1))]),u("li",null,[n(i,null,{default:e(()=>[...t[76]||(t[76]=[l("protected",-1)])]),_:1}),t[77]||(t[77]=l(" → accessible within the same package and by subclasses. ",-1))])])]),_:1}),n(s,null,{default:e(()=>[t[81]||(t[81]=l(" Encapsulation commonly uses ",-1)),n(i,null,{default:e(()=>[...t[79]||(t[79]=[l("private",-1)])]),_:1}),t[82]||(t[82]=l(" fields together with controlled ",-1)),n(i,null,{default:e(()=>[...t[80]||(t[80]=[l("public",-1)])]),_:1}),t[83]||(t[83]=l(" methods. ",-1))]),_:1}),n(o,null,{default:e(()=>[...t[84]||(t[84]=[l("Benefits of Encapsulation",-1)])]),_:1}),n(s,null,{default:e(()=>[...t[85]||(t[85]=[l(" Encapsulation can help make programs easier to maintain and control. ",-1)])]),_:1}),n(s,null,{default:e(()=>[...t[86]||(t[86]=[l(" Some benefits include: ",-1),u("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[u("li",null,"Protecting an object's internal data."),u("li",null,"Controlling how data is modified."),u("li",null,"Validating values before storing them."),u("li",null,"Reducing direct dependencies on internal implementation."),u("li",null,"Making classes easier to maintain.")],-1)])]),_:1}),n(o,null,{default:e(()=>[...t[87]||(t[87]=[l("Summary",-1)])]),_:1}),n(s,null,{default:e(()=>[...t[88]||(t[88]=[l(" Encapsulation allows a class to control access to its internal data. ",-1)])]),_:1}),n(s,null,{default:e(()=>[t[100]||(t[100]=l(" In this topic, you learned that: ",-1)),u("ul",x,[t[95]||(t[95]=u("li",null," Encapsulation keeps data and related behavior together inside a class. ",-1)),u("li",null,[t[90]||(t[90]=l(" Fields are commonly declared ",-1)),n(i,null,{default:e(()=>[...t[89]||(t[89]=[l("private",-1)])]),_:1}),t[91]||(t[91]=l(" . ",-1))]),t[96]||(t[96]=u("li",null," Getters retrieve values from private fields. ",-1)),t[97]||(t[97]=u("li",null," Setters modify values in private fields. ",-1)),t[98]||(t[98]=u("li",null," Setters can validate data before assigning it. ",-1)),u("li",null,[t[93]||(t[93]=l(" Boolean getters commonly use the ",-1)),n(i,null,{default:e(()=>[...t[92]||(t[92]=[l("is",-1)])]),_:1}),t[94]||(t[94]=l(" prefix. ",-1))]),t[99]||(t[99]=u("li",null," Encapsulation helps protect and control an object's data. ",-1))])]),_:1}),t[103]||(t[103]=u("br",null,null,-1)),n(f,{to:"/academia/student/classes/java-inheritance"})])]),_:1}))}});export{W as default};

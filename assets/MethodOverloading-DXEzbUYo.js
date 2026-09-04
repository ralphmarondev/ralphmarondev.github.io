import{_ as A}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as a}from"./SpanHighlight-C-B7JT-9.js";import{C as o}from"./CodeBlock-DXevIYip.js";import{O as r}from"./OutputBlock-DW4hv_11.js";import{u as D}from"./javaProgramming-Pq2XLaCP.js";import{d as J,r as s,p as P,l as n,m as I,o as R,a as l,t as B,k as e,b as i}from"./index-DaKFBQPl.js";const C={class:"text-gray-600 mb-6 text-lg"},W={class:"mb-4"},k={class:"list-disc list-inside mb-4"},H={class:"text-gray-500 mb-6 text-lg"},U={class:"mb-4"},q={class:"text-gray-500 mb-6 text-lg"},V={class:"mb-4"},z={class:"text-gray-500 mb-6 text-lg"},G={class:"mb-4"},Y={class:"text-gray-500 mb-6 text-lg"},E={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},K={class:"text-gray-500 mb-6 text-lg"},L={class:"bg-red-50 border-l-4 border-red-500 p-4 mb-4"},$={class:"text-red-600"},Q={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Z={class:"text-gray-500 mb-6 text-lg"},h={class:"text-gray-500 mb-6 text-lg"},c={class:"list-disc list-inside mb-4"},_={class:"bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4"},tt={class:"text-gray-600"},lt={class:"text-gray-500 mb-6 text-lg"},it={class:"list-disc list-inside"},et="July 29, 2026",mt=J({__name:"MethodOverloading",setup(nt){const d=D(),u=s(`
public class Main {
    // Method with 1 parameter
    public static void display(String name) {
        System.out.println("Name: " + name);
    }

    // Method with 2 parameters (overloaded)
    public static void display(String name, int age) {
        System.out.println("Name: " + name + ", Age: " + age);
    }

    // Method with 3 parameters (overloaded)
    public static void display(String name, int age, String city) {
        System.out.println("Name: " + name + ", Age: " + age + ", City: " + city);
    }

    public static void main(String[] args) {
        display("Ralph");
        display("John", 25);
        display("Maria", 30, "New York");
    }
}
`),p=s(`
Name: Ralph
Name: John, Age: 25
Name: Maria, Age: 30, City: New York
`),m=s(`
public class Main {
    // Method with int parameter
    public static void print(int num) {
        System.out.println("Integer: " + num);
    }

    // Method with double parameter (overloaded)
    public static void print(double num) {
        System.out.println("Double: " + num);
    }

    // Method with String parameter (overloaded)
    public static void print(String text) {
        System.out.println("String: " + text);
    }

    public static void main(String[] args) {
        print(10);
        print(3.14);
        print("Hello");
    }
}
`),b=s(`
Integer: 10
Double: 3.14
String: Hello
`),g=s(`
public class Main {
    // Method with String then int
    public static void show(String name, int id) {
        System.out.println("Name: " + name + ", ID: " + id);
    }

    // Method with int then String (overloaded - different order)
    public static void show(int id, String name) {
        System.out.println("ID: " + id + ", Name: " + name);
    }

    public static void main(String[] args) {
        show("Ralph", 101);
        show(102, "John");
    }
}
`),f=s(`
Name: Ralph, ID: 101
ID: 102, Name: John
`),v=s(`
public class Main {
    // Add two integers
    public static int add(int a, int b) {
        return a + b;
    }

    // Add three integers (overloaded)
    public static int add(int a, int b, int c) {
        return a + b + c;
    }

    // Add two doubles (overloaded)
    public static double add(double a, double b) {
        return a + b;
    }

    // Add integer and double (overloaded)
    public static double add(int a, double b) {
        return a + b;
    }

    public static void main(String[] args) {
        System.out.println("add(5, 3): " + add(5, 3));
        System.out.println("add(5, 3, 2): " + add(5, 3, 2));
        System.out.println("add(2.5, 3.7): " + add(2.5, 3.7));
        System.out.println("add(5, 2.5): " + add(5, 2.5));
    }
}
`),y=s(`
add(5, 3): 8
add(5, 3, 2): 10
add(2.5, 3.7): 6.2
add(5, 2.5): 7.5
`),x=s(`
public class Main {
    // Area of square
    public static double area(double side) {
        return side * side;
    }

    // Area of rectangle (overloaded)
    public static double area(double length, double width) {
        return length * width;
    }

    // Area of circle (overloaded)
    public static double area(int radius) {
        return Math.PI * radius * radius;
    }

    // Area of triangle (overloaded)
    public static double area(double base, double height, boolean isTriangle) {
        return 0.5 * base * height;
    }

    public static void main(String[] args) {
        System.out.println("Square area (5): " + area(5.0));
        System.out.println("Rectangle area (4, 6): " + area(4.0, 6.0));
        System.out.println("Circle area (radius 3): " + area(3));
        System.out.println("Triangle area (4, 5): " + area(4.0, 5.0, true));
    }
}
`),S=s(`
Square area (5): 25.0
Rectangle area (4, 6): 24.0
Circle area (radius 3): 28.274333882308138
Triangle area (4, 5): 10.0
`),w=s(`
// This is NOT allowed - only return type differs
/*
public static int calculate(int a) {
    return a * 2;
}

public static double calculate(int a) {
    return a * 2.0;
}
*/

// This IS allowed - different parameter types
public class Main {
    public static int calculate(int a) {
        return a * 2;
    }

    public static double calculate(double a) {
        return a * 2.0;
    }

    public static void main(String[] args) {
        System.out.println(calculate(5));
        System.out.println(calculate(5.5));
    }
}
`),O=s(`
10
11.0
`),M=s(`
public class Main {
    // Join two strings
    public static String join(String a, String b) {
        return a + b;
    }

    // Join three strings (overloaded)
    public static String join(String a, String b, String c) {
        return a + b + c;
    }

    // Join strings with separator (overloaded)
    public static String join(String a, String b, String separator) {
        return a + separator + b;
    }

    // Join multiple strings with separator (overloaded)
    public static String join(String[] words, String separator) {
        StringBuilder result = new StringBuilder();
        for(int i = 0; i < words.length; i++) {
            result.append(words[i]);
            if(i < words.length - 1) {
                result.append(separator);
            }
        }
        return result.toString();
    }

    public static void main(String[] args) {
        System.out.println(join("Hello", "World"));
        System.out.println(join("Java", "is", "awesome"));
        System.out.println(join("Hello", "World", " - "));

        String[] words = {"Java", "is", "fun"};
        System.out.println(join(words, " "));
    }
}
`),j=s(`
HelloWorld
Javaisawesome
Hello - World
Java is fun
`),N=s(`
public class Main {
    // Different number of parameters
    public static void display(int a) { }
    public static void display(int a, int b) { }

    // Different types of parameters
    public static void display(int a) { }
    public static void display(double a) { }

    // Different order of parameters
    public static void display(int a, double b) { }
    public static void display(double a, int b) { }

    // Only return type differs - NOT allowed
    // public static int calculate(int a) { return a; }
    // public static double calculate(int a) { return a * 1.0; }

    // Only parameter names differ - NOT allowed
    // public static void show(int x) { }
    // public static void show(int y) { }
}
`),T=s(`
public class Main {
    // Bad practice - confusing
    public static void process(String data) { }
    public static void process(String data, boolean flag) { }

    // Good practice - clear intent
    public static void processData(String data) { }
    public static void processDataWithFlag(String data, boolean flag) { }

    // Good practice - natural overloading
    public static int max(int a, int b) {
        return (a > b) ? a : b;
    }

    public static int max(int a, int b, int c) {
        return max(max(a, b), c);
    }

    public static double max(double a, double b) {
        return (a > b) ? a : b;
    }
}
`);return(at,t)=>(R(),P(A,{title:"Java Programming",navigation:I(d).sections},{default:n(()=>[t[89]||(t[89]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Method Overloading ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+B(et)),l("div",C,[l("p",W,[e(a,null,{default:n(()=>[...t[0]||(t[0]=[i("Method Overloading",-1)])]),_:1}),t[3]||(t[3]=i(" allows a class to have multiple methods with the ",-1)),e(a,null,{default:n(()=>[...t[1]||(t[1]=[i("same name",-1)])]),_:1}),t[4]||(t[4]=i(" but ",-1)),e(a,null,{default:n(()=>[...t[2]||(t[2]=[i("different parameters",-1)])]),_:1}),t[5]||(t[5]=i(" . ",-1))]),t[17]||(t[17]=l("p",{class:"mb-4"}," Key benefits: ",-1)),l("ul",k,[l("li",null,[t[7]||(t[7]=i("Increases ",-1)),e(a,null,{default:n(()=>[...t[6]||(t[6]=[i("readability",-1)])]),_:1}),t[8]||(t[8]=i(" by using the same method name for similar operations ",-1))]),l("li",null,[t[10]||(t[10]=i("Provides ",-1)),e(a,null,{default:n(()=>[...t[9]||(t[9]=[i("flexibility",-1)])]),_:1}),t[11]||(t[11]=i(" to handle different types of inputs ",-1))]),l("li",null,[t[13]||(t[13]=i("Reduces the need for ",-1)),e(a,null,{default:n(()=>[...t[12]||(t[12]=[i("multiple method names",-1)])]),_:1})]),l("li",null,[t[15]||(t[15]=i("Makes the code ",-1)),e(a,null,{default:n(()=>[...t[14]||(t[14]=[i("cleaner",-1)])]),_:1}),t[16]||(t[16]=i(" and more intuitive ",-1))])])]),t[90]||(t[90]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Method Overloading ",-1)),l("div",H,[l("p",U,[t[20]||(t[20]=i(" The simplest form of overloading uses the ",-1)),e(a,null,{default:n(()=>[...t[18]||(t[18]=[i("same method name",-1)])]),_:1}),t[21]||(t[21]=i(" with a ",-1)),e(a,null,{default:n(()=>[...t[19]||(t[19]=[i("different number of parameters",-1)])]),_:1}),t[22]||(t[22]=i(" . ",-1))]),t[23]||(t[23]=l("p",{class:"mb-4"},"Sample Program:",-1)),e(o,{code:u.value,language:"java"},null,8,["code"]),t[24]||(t[24]=l("p",{class:"mt-4"},"Output:",-1)),e(r,{output:p.value},null,8,["output"])]),t[91]||(t[91]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Overloading by Different Data Types ",-1)),l("div",q,[l("p",V,[t[26]||(t[26]=i(" Methods can be overloaded by using ",-1)),e(a,null,{default:n(()=>[...t[25]||(t[25]=[i("different parameter types",-1)])]),_:1}),t[27]||(t[27]=i(" . ",-1))]),t[28]||(t[28]=l("p",{class:"mb-4"},"Sample Program:",-1)),e(o,{code:m.value,language:"java"},null,8,["code"]),t[29]||(t[29]=l("p",{class:"mt-4"},"Output:",-1)),e(r,{output:b.value},null,8,["output"])]),t[92]||(t[92]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Overloading by Order of Parameters ",-1)),l("div",z,[l("p",G,[t[31]||(t[31]=i(" Methods can also be overloaded by ",-1)),e(a,null,{default:n(()=>[...t[30]||(t[30]=[i("changing the order",-1)])]),_:1}),t[32]||(t[32]=i(" of parameters of different types. ",-1))]),t[33]||(t[33]=l("p",{class:"mb-4"},"Sample Program:",-1)),e(o,{code:g.value,language:"java"},null,8,["code"]),t[34]||(t[34]=l("p",{class:"mt-4"},"Output:",-1)),e(r,{output:f.value},null,8,["output"])]),t[93]||(t[93]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Math Operations with Overloading ",-1)),l("div",Y,[t[35]||(t[35]=l("p",{class:"mb-4"}," A practical example demonstrating how overloading can handle different mathematical operations. ",-1)),t[36]||(t[36]=l("p",{class:"mb-4"},"Sample Program:",-1)),e(o,{code:v.value,language:"java"},null,8,["code"]),t[37]||(t[37]=l("p",{class:"mt-4"},"Output:",-1)),e(r,{output:y.value},null,8,["output"])]),t[94]||(t[94]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Area Calculator using Overloading ",-1)),l("div",E,[l("p",F,[t[39]||(t[39]=i(" This example shows how overloading can be used to calculate areas for different shapes using the same method name ",-1)),e(a,null,{default:n(()=>[...t[38]||(t[38]=[i("area()",-1)])]),_:1}),t[40]||(t[40]=i(" . ",-1))]),t[41]||(t[41]=l("p",{class:"mb-4"},"Sample Program:",-1)),e(o,{code:x.value,language:"java"},null,8,["code"]),t[42]||(t[42]=l("p",{class:"mt-4"},"Output:",-1)),e(r,{output:S.value},null,8,["output"])]),t[95]||(t[95]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important: Return Type is NOT Enough ",-1)),l("div",K,[l("div",L,[t[46]||(t[46]=l("p",{class:"text-red-700 font-semibold"},"Important Rule:",-1)),l("p",$,[t[44]||(t[44]=i(" Methods ",-1)),e(a,null,{default:n(()=>[...t[43]||(t[43]=[i("cannot",-1)])]),_:1}),t[45]||(t[45]=i(" be overloaded by just changing the return type. The parameter list must be different. ",-1))])]),t[47]||(t[47]=l("p",{class:"mb-4"},"Sample Program:",-1)),e(o,{code:w.value,language:"java"},null,8,["code"]),t[48]||(t[48]=l("p",{class:"mt-4"},"Output:",-1)),e(r,{output:O.value},null,8,["output"])]),t[96]||(t[96]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Operations with Overloading ",-1)),l("div",Q,[l("p",X,[t[50]||(t[50]=i(" Overloading is particularly useful for string operations where you want to provide ",-1)),e(a,null,{default:n(()=>[...t[49]||(t[49]=[i("flexible ways",-1)])]),_:1}),t[51]||(t[51]=i(" to join or manipulate strings. ",-1))]),t[52]||(t[52]=l("p",{class:"mb-4"},"Sample Program:",-1)),e(o,{code:M.value,language:"java"},null,8,["code"]),t[53]||(t[53]=l("p",{class:"mt-4"},"Output:",-1)),e(r,{output:j.value},null,8,["output"])]),t[97]||(t[97]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Rules of Method Overloading ",-1)),l("div",Z,[t[54]||(t[54]=l("div",{class:"bg-green-50 border-l-4 border-green-500 p-4 mb-4"},[l("p",{class:"text-green-700 font-semibold"},"Allowed:"),l("ul",{class:"list-disc list-inside text-gray-600"},[l("li",null,"Different number of parameters"),l("li",null,"Different types of parameters"),l("li",null,"Different order of parameters")])],-1)),t[55]||(t[55]=l("div",{class:"bg-red-50 border-l-4 border-red-500 p-4 mb-4"},[l("p",{class:"text-red-700 font-semibold"},"Not Allowed:"),l("ul",{class:"list-disc list-inside text-gray-600"},[l("li",null,"Only changing the return type"),l("li",null,"Only changing parameter names")])],-1)),e(o,{code:N.value,language:"java"},null,8,["code"])]),t[98]||(t[98]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," When to Use Method Overloading ",-1)),l("div",h,[l("ul",c,[l("li",null,[t[57]||(t[57]=i("When you need to perform ",-1)),e(a,null,{default:n(()=>[...t[56]||(t[56]=[i("similar operations",-1)])]),_:1}),t[58]||(t[58]=i(" with different inputs ",-1))]),l("li",null,[t[60]||(t[60]=i("When you want to provide ",-1)),e(a,null,{default:n(()=>[...t[59]||(t[59]=[i("default values",-1)])]),_:1}),t[61]||(t[61]=i(" for optional parameters ",-1))]),l("li",null,[t[63]||(t[63]=i("When you need ",-1)),e(a,null,{default:n(()=>[...t[62]||(t[62]=[i("different ways",-1)])]),_:1}),t[64]||(t[64]=i(" to initialize an object ",-1))]),l("li",null,[t[66]||(t[66]=i("When the overloaded methods have ",-1)),e(a,null,{default:n(()=>[...t[65]||(t[65]=[i("logical consistency",-1)])]),_:1})])]),l("div",_,[t[72]||(t[72]=l("p",{class:"text-yellow-700 font-semibold"},"Best Practice:",-1)),l("p",tt,[t[69]||(t[69]=i(" Use overloading when methods perform essentially the ",-1)),e(a,null,{default:n(()=>[...t[67]||(t[67]=[i("same function",-1)])]),_:1}),t[70]||(t[70]=i(" but with different parameters. Avoid using it when methods do ",-1)),e(a,null,{default:n(()=>[...t[68]||(t[68]=[i("unrelated",-1)])]),_:1}),t[71]||(t[71]=i(" things. ",-1))])]),e(o,{code:T.value,language:"java"},null,8,["code"])]),t[99]||(t[99]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l("div",lt,[l("ul",it,[l("li",null,[e(a,null,{default:n(()=>[...t[73]||(t[73]=[i("Method Overloading",-1)])]),_:1}),t[74]||(t[74]=i(" allows multiple methods with the same name ",-1))]),l("li",null,[t[76]||(t[76]=i("Methods must have ",-1)),e(a,null,{default:n(()=>[...t[75]||(t[75]=[i("different parameter lists",-1)])]),_:1})]),l("li",null,[t[78]||(t[78]=i("Return type ",-1)),e(a,null,{default:n(()=>[...t[77]||(t[77]=[i("alone",-1)])]),_:1}),t[79]||(t[79]=i(" is not sufficient for overloading ",-1))]),l("li",null,[t[82]||(t[82]=i("Improves ",-1)),e(a,null,{default:n(()=>[...t[80]||(t[80]=[i("code readability",-1)])]),_:1}),t[83]||(t[83]=i(" and ",-1)),e(a,null,{default:n(()=>[...t[81]||(t[81]=[i("flexibility",-1)])]),_:1})]),l("li",null,[t[85]||(t[85]=i("Common in built-in Java methods like ",-1)),e(a,null,{default:n(()=>[...t[84]||(t[84]=[i("System.out.println()",-1)])]),_:1})]),l("li",null,[t[87]||(t[87]=i("Used in ",-1)),e(a,null,{default:n(()=>[...t[86]||(t[86]=[i("constructors",-1)])]),_:1}),t[88]||(t[88]=i(" for object initialization ",-1))])])])]),_:1},8,["navigation"]))}});export{mt as default};

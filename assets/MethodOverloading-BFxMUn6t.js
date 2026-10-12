import{_ as u}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{T as a,a as r,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as d,C as s}from"./CodeBlock-Ayh7J4dk.js";import{O as i}from"./OutputBlock-CjsXuZMe.js";import{d as p,h as g,i as n,o as v,a as o,q as e,g as l}from"./index-DSMoD1xp.js";const b={class:"max-w-4xl mx-auto"},y=`
static int add(int a, int b) {
    return a + b;
}

static double add(double a, double b) {
    return a + b;
}`,w=`15
15.5`,x=`
static void display(int number) {
    System.out.println("Integer: " + number);
}

static void display(String text) {
    System.out.println("String: " + text);
}

public static void main(String[] args) {
    display(10);
    display("Hello");
}`,h=`
Integer: 10
String: Hello`,T=`
static int add(int a, int b) {
    return a + b;
}

static int add(int a, int b, int c) {
    return a + b + c;
}

public static void main(String[] args) {
    System.out.println(add(2, 3));
    System.out.println(add(2, 3, 4));
}`,O=`
5
9`,S=`
static double calculate(double a, double b) {
    return a + b;
}

static int calculate(int a, int b) {
    return a * b;
}

public static void main(String[] args) {
    System.out.println(calculate(2, 3));
    System.out.println(calculate(2.5, 3.5));
}`,M=`6
6.0`,C=`
static void greet() {
    System.out.println("Hello!");
}

static void greet(String name) {
    System.out.println("Hello, " + name + "!");
}

public static void main(String[] args) {
    greet();
    greet("Ralph");
}`,k=`
Hello!
Hello, Ralph!`,R=p({__name:"MethodOverloading",setup(j){return(B,t)=>(v(),g(m,null,{default:n(()=>[o("div",b,[t[59]||(t[59]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:u,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[60]||(t[60]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Method Overloading ")],-1)),e(a,null,{default:n(()=>[t[1]||(t[1]=l(" Java allows multiple methods in the same class to have the same name as long as their parameter lists are different. This is called ",-1)),e(d,null,{default:n(()=>[...t[0]||(t[0]=[l("method overloading",-1)])]),_:1}),t[2]||(t[2]=l(" . ",-1))]),_:1}),e(a,null,{default:n(()=>[...t[3]||(t[3]=[l(" Method overloading allows one method name to represent related operations that work with different kinds or numbers of values. ",-1)])]),_:1}),e(r,null,{default:n(()=>[...t[4]||(t[4]=[l("Basic Example",-1)])]),_:1}),e(a,null,{default:n(()=>[t[6]||(t[6]=l(" Consider two methods named ",-1)),e(d,null,{default:n(()=>[...t[5]||(t[5]=[l("add()",-1)])]),_:1}),t[7]||(t[7]=l(" : ",-1)),e(s,{code:y,language:"java"})]),_:1}),e(a,null,{default:n(()=>[...t[8]||(t[8]=[l(" These methods have the same name but different parameter types. Java can determine which method to call based on the arguments provided. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[9]||(t[9]=l(" For example, calling the methods with integer and decimal values produces: ",-1)),e(i,{output:w})]),_:1}),e(r,null,{default:n(()=>[...t[10]||(t[10]=[l("How Overloading Works",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[11]||(t[11]=[l(" When a method is called, Java looks at the method name and the arguments provided. It then selects a matching overloaded method. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[12]||(t[12]=l(" For example: ",-1)),e(s,{code:x,language:"java"})]),_:1}),e(a,null,{default:n(()=>[t[13]||(t[13]=l(" Output: ",-1)),e(i,{output:h})]),_:1}),e(a,null,{default:n(()=>[t[18]||(t[18]=l(" The first call provides an ",-1)),e(d,null,{default:n(()=>[...t[14]||(t[14]=[l("int",-1)])]),_:1}),t[19]||(t[19]=l(" , so Java uses the method with an ",-1)),e(d,null,{default:n(()=>[...t[15]||(t[15]=[l("int",-1)])]),_:1}),t[20]||(t[20]=l(" parameter. The second call provides a ",-1)),e(d,null,{default:n(()=>[...t[16]||(t[16]=[l("String",-1)])]),_:1}),t[21]||(t[21]=l(" , so Java uses the method with a ",-1)),e(d,null,{default:n(()=>[...t[17]||(t[17]=[l("String",-1)])]),_:1}),t[22]||(t[22]=l(" parameter. ",-1))]),_:1}),e(r,null,{default:n(()=>[...t[23]||(t[23]=[l("Different Number of Parameters",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[24]||(t[24]=[l(" Methods can also be overloaded by changing the number of parameters. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[25]||(t[25]=l(" For example: ",-1)),e(s,{code:T,language:"java"})]),_:1}),e(a,null,{default:n(()=>[t[26]||(t[26]=l(" Output: ",-1)),e(i,{output:O})]),_:1}),e(a,null,{default:n(()=>[...t[27]||(t[27]=[l(" The first method accepts two parameters, while the second accepts three parameters. ",-1)])]),_:1}),e(r,null,{default:n(()=>[...t[28]||(t[28]=[l("Different Parameter Types",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[29]||(t[29]=[l(" Methods can be overloaded by changing the data types of their parameters. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[30]||(t[30]=l(" For example: ",-1)),e(s,{code:S,language:"java"})]),_:1}),e(a,null,{default:n(()=>[t[31]||(t[31]=l(" Output: ",-1)),e(i,{output:M})]),_:1}),e(a,null,{default:n(()=>[t[33]||(t[33]=l(" The arguments determine which version of ",-1)),e(d,null,{default:n(()=>[...t[32]||(t[32]=[l("calculate()",-1)])]),_:1}),t[34]||(t[34]=l(" is selected. ",-1))]),_:1}),e(r,null,{default:n(()=>[...t[35]||(t[35]=[l("Overloading with Different Parameter Counts",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[36]||(t[36]=[l(" Another common use of overloading is providing methods that perform the same general task with different amounts of information. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[38]||(t[38]=l(" For example, a ",-1)),e(d,null,{default:n(()=>[...t[37]||(t[37]=[l("greet()",-1)])]),_:1}),t[39]||(t[39]=l(" method can work without a name, while another version can accept a name. ",-1))]),_:1}),e(a,null,{default:n(()=>[t[40]||(t[40]=l(" Example: ",-1)),e(s,{code:C,language:"java"})]),_:1}),e(a,null,{default:n(()=>[t[41]||(t[41]=l(" Output: ",-1)),e(i,{output:k})]),_:1}),e(r,null,{default:n(()=>[...t[42]||(t[42]=[l("What Can Be Changed?",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[43]||(t[43]=[l(" To overload a method, the parameter list must be different. This can be done by changing: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,"The number of parameters."),o("li",null,"The data types of the parameters."),o("li",null,"The order of different parameter types.")],-1)])]),_:1}),e(r,null,{default:n(()=>[...t[44]||(t[44]=[l("Return Type Alone Is Not Enough",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[45]||(t[45]=[l(" Methods cannot be overloaded by changing only their return type. ",-1)])]),_:1}),e(a,null,{default:n(()=>[t[46]||(t[46]=l(" For example, these two methods would not be a valid overload: ",-1)),e(s,{code:`
						static int calculate(int a) {
						    return a;
						}

						static double calculate(int a) {
						    return a;
						}`,language:"java"})]),_:1}),e(a,null,{default:n(()=>[...t[47]||(t[47]=[l(" Both methods have the same name and the same parameter list. Their different return types are not enough to distinguish them. ",-1)])]),_:1}),e(r,null,{default:n(()=>[...t[48]||(t[48]=[l("Benefits of Method Overloading",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[49]||(t[49]=[l(" Method overloading can make related operations easier to use and organize. ",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[50]||(t[50]=[l(" It allows: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,"Related operations to share the same method name."),o("li",null,"Methods to work with different data types."),o("li",null,"Methods to accept different numbers of arguments."),o("li",null,"Code to remain easier to read when operations are related.")],-1)])]),_:1}),e(r,null,{default:n(()=>[...t[51]||(t[51]=[l("Overloading vs Calling a Method",-1)])]),_:1}),e(a,null,{default:n(()=>[t[53]||(t[53]=l(" Defining several methods with the same name is ",-1)),e(d,null,{default:n(()=>[...t[52]||(t[52]=[l("overloading",-1)])]),_:1}),t[54]||(t[54]=l(" . Choosing which overloaded method to execute happens when the method is called. ",-1))]),_:1}),e(a,null,{default:n(()=>[...t[55]||(t[55]=[l(" Java uses the arguments in the method call to determine which overloaded version matches. ",-1)])]),_:1}),e(r,null,{default:n(()=>[...t[56]||(t[56]=[l("Summary",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[57]||(t[57]=[l(" Method overloading allows multiple methods in the same class to share a name while having different parameter lists. ",-1)])]),_:1}),e(a,null,{default:n(()=>[...t[58]||(t[58]=[l(" In this topic, you learned that: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null," Method overloading allows methods to have the same name. "),o("li",null," Overloaded methods must have different parameter lists. "),o("li",null," Methods can be overloaded by changing the number of parameters. "),o("li",null," Methods can be overloaded by changing parameter types. "),o("li",null," Return type alone cannot overload a method. "),o("li",null," Java selects the appropriate overloaded method based on the arguments provided. ")],-1)])]),_:1}),t[61]||(t[61]=o("br",null,null,-1)),e(f,{to:"/academia/student/classes/java-scopes"})])]),_:1}))}});export{R as default};

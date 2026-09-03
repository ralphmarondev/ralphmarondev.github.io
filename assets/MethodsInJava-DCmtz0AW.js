import{_ as w}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{S as n}from"./SpanHighlight-C0NIfFE-.js";import{C as a}from"./CodeBlock-CjPs9I9U.js";import{O as u}from"./OutputBlock-BzLqeAqJ.js";import{u as k}from"./javaProgramming-3VCcq7Z_.js";import{d as R,r as o,p as C,l as e,m as j,o as E,a as l,t as H,b as s,k as i}from"./index-IauxWRt0.js";const J={class:"text-gray-600 mb-6 text-lg"},N={class:"mb-4"},B={class:"list-disc list-inside mb-4"},V={class:"text-gray-500 mb-6 text-lg"},A={class:"list-disc list-inside mb-4"},I={class:"text-gray-500 mb-6 text-lg"},U={class:"text-gray-500 mb-6 text-lg"},L={class:"mb-4"},W={class:"text-gray-500 mb-6 text-lg"},q={class:"text-gray-500 mb-6 text-lg"},D={class:"mb-4"},F={class:"text-gray-500 mb-6 text-lg"},K={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},z={class:"mt-4 italic"},G={class:"text-gray-500 mb-6 text-lg"},Q={class:"list-disc list-inside"},X={class:"text-gray-500 mb-6 text-lg"},Y={class:"list-disc list-inside"},Z="July 29, 2026",nt=R({__name:"MethodsInJava",setup(h){const r=k(),d=o(`
public class Main {
    // Method declaration
    public static void greet() {
        System.out.println("Hello, World!");
    }

    public static void main(String[] args) {
        // Calling the method
        greet();
    }
}
`),m=o(`
Hello, World!
`),p=o(`
public class Main {
    // Method with parameters
    public static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        greet("Ralph");
        greet("John");
        greet("Maria");
    }
}
`),g=o(`
Hello, Ralph!
Hello, John!
Hello, Maria!
`),b=o(`
public class Main {
    // Method with return value
    public static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Sum: " + result);
    }
}
`),f=o(`
Sum: 8
`),x=o(`
public class Main {
    // Method with multiple parameters
    public static void displayInfo(String name, int age, double height) {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Height: " + height + "m");
    }

    public static void main(String[] args) {
        displayInfo("Ralph", 25, 1.75);
    }
}
`),v=o(`
Name: Ralph
Age: 25
Height: 1.75m
`),y=o(`
public class Main {
    // Void method - doesn't return a value
    public static void printPattern() {
        for(int i = 1; i <= 3; i++) {
            for(int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        printPattern();
    }
}
`),S=o(`
*
* *
* * *
`),M=o(`
public class Main {
    public static int square(int num) {
        return num * num;
    }

    public static int addTen(int num) {
        return num + 10;
    }

    public static void main(String[] args) {
        // Method chaining
        int result = addTen(square(5));
        System.out.println("Result: " + result);
    }
}
`),O=o(`
Result: 35
`),P=o(`
public class Main {
    public static void main(String[] args) {
        int x = 10; // Local variable in main

        if(x > 5) {
            int y = 20; // Local variable in if block
            System.out.println("x: " + x);
            System.out.println("y: " + y);
        }

        // System.out.println(y); // ERROR! y is out of scope
    }
}
`),T=o(`
x: 10
y: 20
`);return(_,t)=>(E(),C(w,{title:"Java Programming",navigation:j(r).sections},{default:e(()=>[t[82]||(t[82]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Methods In Java ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+H(Z)),l("div",J,[l("p",N,[t[1]||(t[1]=s(" A ",-1)),i(n,null,{default:e(()=>[...t[0]||(t[0]=[s("method",-1)])]),_:1}),t[2]||(t[2]=s(" in Java is a block of code that performs a specific task. Methods help in: ",-1))]),l("ul",B,[l("li",null,[i(n,null,{default:e(()=>[...t[3]||(t[3]=[s("Reusability",-1)])]),_:1}),t[4]||(t[4]=s(" - Write once, use multiple times ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[5]||(t[5]=[s("Modularity",-1)])]),_:1}),t[6]||(t[6]=s(" - Break complex problems into smaller parts ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[7]||(t[7]=[s("Readability",-1)])]),_:1}),t[8]||(t[8]=s(" - Make code easier to understand ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[9]||(t[9]=[s("Maintainability",-1)])]),_:1}),t[10]||(t[10]=s(" - Easier to update and debug ",-1))])])]),t[83]||(t[83]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Method Syntax ",-1)),l("div",V,[t[21]||(t[21]=l("p",{class:"mb-4"}," The basic syntax of a method in Java: ",-1)),i(u,{output:`\r
accessModifier returnType methodName(parameters) {\r
    // method body\r
    // return statement (if not void)\r
}\r
`}),t[22]||(t[22]=l("p",{class:"mt-4 mb-4"}," Key components: ",-1)),l("ul",A,[l("li",null,[i(n,null,{default:e(()=>[...t[11]||(t[11]=[s("accessModifier",-1)])]),_:1}),t[12]||(t[12]=s(" - public, private, protected, or default ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[13]||(t[13]=[s("returnType",-1)])]),_:1}),t[15]||(t[15]=s(" - The data type of the value returned (use ",-1)),i(n,null,{default:e(()=>[...t[14]||(t[14]=[s("void",-1)])]),_:1}),t[16]||(t[16]=s(" if nothing is returned) ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[17]||(t[17]=[s("methodName",-1)])]),_:1}),t[18]||(t[18]=s(" - Should follow camelCase naming convention ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[19]||(t[19]=[s("parameters",-1)])]),_:1}),t[20]||(t[20]=s(" - Input values passed to the method (can be empty) ",-1))])]),t[23]||(t[23]=l("p",{class:"mb-4"},"Sample Program:",-1)),i(a,{code:d.value,language:"java"},null,8,["code"]),t[24]||(t[24]=l("p",{class:"mt-4"},"Output:",-1)),i(u,{output:m.value},null,8,["output"])]),t[84]||(t[84]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Methods with Parameters ",-1)),l("div",I,[t[25]||(t[25]=l("p",{class:"mb-4"}," Parameters allow methods to accept input values. They are declared inside the parentheses. ",-1)),t[26]||(t[26]=l("p",{class:"mb-4"},"Sample Program:",-1)),i(a,{code:p.value,language:"java"},null,8,["code"]),t[27]||(t[27]=l("p",{class:"mt-4"},"Output:",-1)),i(u,{output:g.value},null,8,["output"])]),t[85]||(t[85]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Methods with Return Values ",-1)),l("div",U,[l("p",L,[t[29]||(t[29]=s(" Methods can return values using the ",-1)),i(n,null,{default:e(()=>[...t[28]||(t[28]=[s("return",-1)])]),_:1}),t[30]||(t[30]=s(" keyword. The return type must match the declared type. ",-1))]),t[31]||(t[31]=l("p",{class:"mb-4"},"Sample Program:",-1)),i(a,{code:b.value,language:"java"},null,8,["code"]),t[32]||(t[32]=l("p",{class:"mt-4"},"Output:",-1)),i(u,{output:f.value},null,8,["output"])]),t[86]||(t[86]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Multiple Parameters ",-1)),l("div",W,[t[33]||(t[33]=l("p",{class:"mb-4"}," Methods can accept multiple parameters of different types. ",-1)),t[34]||(t[34]=l("p",{class:"mb-4"},"Sample Program:",-1)),i(a,{code:x.value,language:"java"},null,8,["code"]),t[35]||(t[35]=l("p",{class:"mt-4"},"Output:",-1)),i(u,{output:v.value},null,8,["output"])]),t[87]||(t[87]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Void Methods ",-1)),l("div",q,[l("p",D,[t[37]||(t[37]=s(" Methods declared with ",-1)),i(n,null,{default:e(()=>[...t[36]||(t[36]=[s("void",-1)])]),_:1}),t[38]||(t[38]=s(" don't return any value. They perform an action like printing or modifying data. ",-1))]),t[39]||(t[39]=l("p",{class:"mb-4"},"Sample Program:",-1)),i(a,{code:y.value,language:"java"},null,8,["code"]),t[40]||(t[40]=l("p",{class:"mt-4"},"Output:",-1)),i(u,{output:S.value},null,8,["output"])]),t[88]||(t[88]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Method Chaining ",-1)),l("div",F,[t[41]||(t[41]=l("p",{class:"mb-4"}," Methods can be called inside other methods or chained together when the return value is used as input for another method. ",-1)),t[42]||(t[42]=l("p",{class:"mb-4"},"Sample Program:",-1)),i(a,{code:M.value,language:"java"},null,8,["code"]),t[43]||(t[43]=l("p",{class:"mt-4"},"Output:",-1)),i(u,{output:O.value},null,8,["output"])]),t[89]||(t[89]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Variable Scope in Methods ",-1)),l("div",K,[l("p",$,[t[46]||(t[46]=s(" Variables declared inside a method are ",-1)),i(n,null,{default:e(()=>[...t[44]||(t[44]=[s("local variables",-1)])]),_:1}),t[47]||(t[47]=s(" . They are only accessible within that method. This is called ",-1)),i(n,null,{default:e(()=>[...t[45]||(t[45]=[s("scope",-1)])]),_:1}),t[48]||(t[48]=s(" . ",-1))]),t[52]||(t[52]=l("p",{class:"mb-4"},"Sample Program:",-1)),i(a,{code:P.value,language:"java"},null,8,["code"]),t[53]||(t[53]=l("p",{class:"mt-4"},"Output:",-1)),i(u,{output:T.value},null,8,["output"]),l("p",z,[t[50]||(t[50]=s(" Note: The commented line would cause an error because ",-1)),i(n,null,{default:e(()=>[...t[49]||(t[49]=[s("y",-1)])]),_:1}),t[51]||(t[51]=s(" is out of scope outside the if block. ",-1))])]),t[90]||(t[90]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Method Naming Conventions ",-1)),l("div",G,[l("ul",Q,[l("li",null,[t[55]||(t[55]=s("Use ",-1)),i(n,null,{default:e(()=>[...t[54]||(t[54]=[s("camelCase",-1)])]),_:1}),t[56]||(t[56]=s(" for method names ",-1))]),l("li",null,[t[58]||(t[58]=s("Method names should be ",-1)),i(n,null,{default:e(()=>[...t[57]||(t[57]=[s("verbs",-1)])]),_:1}),t[59]||(t[59]=s(" that describe the action ",-1))]),l("li",null,[t[61]||(t[61]=s("Should be ",-1)),i(n,null,{default:e(()=>[...t[60]||(t[60]=[s("meaningful",-1)])]),_:1}),t[62]||(t[62]=s(" and self-descriptive ",-1))]),l("li",null,[t[66]||(t[66]=s("Examples: ",-1)),i(n,null,{default:e(()=>[...t[63]||(t[63]=[s("calculateTotal()",-1)])]),_:1}),t[67]||(t[67]=s(" , ",-1)),i(n,null,{default:e(()=>[...t[64]||(t[64]=[s("printDetails()",-1)])]),_:1}),t[68]||(t[68]=s(" , ",-1)),i(n,null,{default:e(()=>[...t[65]||(t[65]=[s("getUserInput()",-1)])]),_:1})]),t[69]||(t[69]=l("li",null,"Avoid using single letters or vague names",-1))])]),t[91]||(t[91]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Benefits of Using Methods ",-1)),l("div",X,[l("ul",Y,[l("li",null,[i(n,null,{default:e(()=>[...t[70]||(t[70]=[s("Code Reusability",-1)])]),_:1}),t[71]||(t[71]=s(" - Avoid writing the same code multiple times ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[72]||(t[72]=[s("Modularity",-1)])]),_:1}),t[73]||(t[73]=s(" - Break complex programs into manageable pieces ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[74]||(t[74]=[s("Readability",-1)])]),_:1}),t[75]||(t[75]=s(" - Self-documenting code that's easy to understand ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[76]||(t[76]=[s("Testing",-1)])]),_:1}),t[77]||(t[77]=s(" - Test methods independently for easier debugging ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[78]||(t[78]=[s("Maintenance",-1)])]),_:1}),t[79]||(t[79]=s(" - Fix issues in one place instead of everywhere ",-1))]),l("li",null,[i(n,null,{default:e(()=>[...t[80]||(t[80]=[s("Abstraction",-1)])]),_:1}),t[81]||(t[81]=s(" - Hide implementation details from the user ",-1))])])])]),_:1},8,["navigation"]))}});export{nt as default};

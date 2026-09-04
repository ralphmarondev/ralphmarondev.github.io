import{_ as B}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as r}from"./SpanHighlight-C-B7JT-9.js";import{C as o}from"./CodeBlock-DXevIYip.js";import{O as u}from"./OutputBlock-DW4hv_11.js";import{u as C}from"./javaProgramming-Pq2XLaCP.js";import{d as J,r as e,p as U,l as i,m as O,o as T,a as s,t as k,k as n,b as l}from"./index-DaKFBQPl.js";const P={class:"text-gray-600 mb-6 text-lg"},M={class:"mb-4"},j={class:"list-disc list-inside mb-4"},q={class:"text-gray-500 mb-6 text-lg"},W={class:"list-disc list-inside mb-4"},I={class:"text-gray-500 mb-6 text-lg"},L={class:"mb-4"},A={class:"list-disc list-inside mb-4"},N={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},D={class:"list-disc list-inside mb-4"},E={class:"text-gray-500 mb-6 text-lg"},V={class:"mb-4"},G={class:"list-disc list-inside mb-4"},R={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},z={class:"list-disc list-inside mb-4"},K={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},Q={class:"list-disc list-inside mb-4"},Y={class:"text-gray-500 mb-6 text-lg"},Z={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},h={class:"list-disc list-inside text-gray-600"},_={class:"list-disc list-inside"},c={class:"text-gray-500 mb-6 text-lg"},tt={class:"list-disc list-inside"},lt="July 29, 2026",mt=J({__name:"StringsInJava",setup(st){const a=C(),m=e(`
public class Main {
    public static void main(String[] args) {
        // Method 1: String literal
        String str1 = "Hello World";

        // Method 2: Using new keyword
        String str2 = new String("Hello World");

        // Method 3: Character array
        char[] chars = {'J', 'a', 'v', 'a'};
        String str3 = new String(chars);

        // Method 4: Using String.valueOf()
        String str4 = String.valueOf(123);

        System.out.println("str1: " + str1);
        System.out.println("str2: " + str2);
        System.out.println("str3: " + str3);
        System.out.println("str4: " + str4);
    }
}
`),d=e(`
str1: Hello World
str2: Hello World
str3: Java
str4: 123
`),g=e(`
public class Main {
    public static void main(String[] args) {
        // String literals - stored in String Pool
        String s1 = "Hello";
        String s2 = "Hello";
        String s3 = "Hello";

        // Using new keyword - creates new object in heap
        String s4 = new String("Hello");
        String s5 = new String("Hello");

        // Comparing references
        System.out.println("s1 == s2: " + (s1 == s2)); // true (same pool reference)
        System.out.println("s2 == s3: " + (s2 == s3)); // true (same pool reference)
        System.out.println("s1 == s4: " + (s1 == s4)); // false (different objects)
        System.out.println("s4 == s5: " + (s4 == s5)); // false (different objects)

        // Comparing content
        System.out.println("s1.equals(s4): " + s1.equals(s4)); // true (same content)
        System.out.println("s4.equals(s5): " + s4.equals(s5)); // true (same content)

        // String Pool demonstration
        String str1 = "Java";
        String str2 = "Ja" + "va"; // Compile-time constant
        String str3 = "Ja";
        String str4 = str3 + "va"; // Runtime concatenation

        System.out.println("str1 == str2: " + (str1 == str2)); // true (compile-time constant)
        System.out.println("str1 == str4: " + (str1 == str4)); // false (runtime)

        // Using intern() to add to pool
        String str5 = str4.intern();
        System.out.println("str1 == str5: " + (str1 == str5)); // true (now in pool)
    }
}
`),p=e(`
s1 == s2: true
s2 == s3: true
s1 == s4: false
s4 == s5: false
s1.equals(s4): true
s4.equals(s5): true
str1 == str2: true
str1 == str4: false
str1 == str5: true
`),f=e(`
public class Main {
    public static void main(String[] args) {
        // Strings are immutable - once created, cannot be changed
        String str = "Hello";
        System.out.println("Original: " + str);
        System.out.println("HashCode: " + System.identityHashCode(str));

        // Any modification creates a new String object
        str = str + " World";
        System.out.println("After concatenation: " + str);
        System.out.println("New HashCode: " + System.identityHashCode(str));

        // String methods return new strings
        String upper = str.toUpperCase();
        System.out.println("Upper case: " + upper);
        System.out.println("Original unchanged: " + str);

        // Demonstrating immutability with multiple references
        String s1 = "Java";
        String s2 = s1;

        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        System.out.println("s1 == s2: " + (s1 == s2)); // true

        // Modifying s1 creates new object
        s1 = s1 + " Programming";
        System.out.println("After modification:");
        System.out.println("s1: " + s1);
        System.out.println("s2: " + s2);
        System.out.println("s1 == s2: " + (s1 == s2)); // false
    }
}
`),S=e(`
Original: Hello
HashCode: 123456
After concatenation: Hello World
New HashCode: 789012
Upper case: HELLO WORLD
Original unchanged: Hello World
s1: Java
s2: Java
s1 == s2: true
After modification:
s1: Java Programming
s2: Java
s1 == s2: false
`),b=e(`
public class Main {
    public static void main(String[] args) {
        // String - immutable
        String str = "Hello";
        System.out.println("String (immutable):");
        System.out.println("Initial: " + str);

        // Every modification creates new object
        str = str + " World";
        str = str + "!";
        System.out.println("Final: " + str);

        // StringBuilder - mutable
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("StringBuilder (mutable):");
        System.out.println("Initial: " + sb);

        // Modifications happen on same object
        sb.append(" World");
        sb.append("!");
        System.out.println("Final: " + sb);

        // Performance comparison
        long startTime, endTime;

        // String concatenation (slow)
        startTime = System.currentTimeMillis();
        String result = "";
        for(int i = 0; i < 10000; i++) {
            result += i;
        }
        endTime = System.currentTimeMillis();
        System.out.println("String concatenation time: " + (endTime - startTime) + "ms");

        // StringBuilder (fast)
        startTime = System.currentTimeMillis();
        StringBuilder sb2 = new StringBuilder();
        for(int i = 0; i < 10000; i++) {
            sb2.append(i);
        }
        endTime = System.currentTimeMillis();
        System.out.println("StringBuilder time: " + (endTime - startTime) + "ms");
    }
}
`),y=e(`
String (immutable):
Initial: Hello
Final: Hello World!
StringBuilder (mutable):
Initial: Hello
Final: Hello World!
String concatenation time: 15ms
StringBuilder time: 1ms
`),v=e(`
public class Main {
    public static void main(String[] args) {
        String text = "  Java Programming Language  ";

        // Basic string information
        System.out.println("Original: '" + text + "'");
        System.out.println("Length: " + text.length());
        System.out.println("Is empty: " + text.isEmpty());
        System.out.println("Is blank: " + text.isBlank()); // Java 11+

        // Character access
        System.out.println("First character: " + text.charAt(0));
        System.out.println("Last character: " + text.charAt(text.length() - 1));

        // Case conversion
        System.out.println("Upper case: " + text.toUpperCase());
        System.out.println("Lower case: " + text.toLowerCase());

        // Trimming whitespace
        System.out.println("Trimmed: '" + text.trim() + "'");

        // Substring (more methods covered in String Methods page)
        String trimmed = text.trim();
        System.out.println("First word: " + trimmed.substring(0, 4));
        System.out.println("Last word: " + trimmed.substring(trimmed.lastIndexOf(" ") + 1));
    }
}
`),x=e(`
Original: '  Java Programming Language  '
Length: 29
Is empty: false
Is blank: false
First character:
Last character:
Upper case:   JAVA PROGRAMMING LANGUAGE
Lower case:   java programming language
Trimmed: 'Java Programming Language'
First word: Java
Last word: Language
`),w=e(`
public class Main {
    public static void main(String[] args) {
        // Common escape sequences
        System.out.println("Tab: Hello\\tWorld");
        System.out.println("Newline: Hello\\nWorld");
        System.out.println("Backslash: C:\\\\Program Files");
        System.out.println("Double quote: \\"Hello World\\"");
        System.out.println("Single quote: \\'Hello World\\'");
        System.out.println("Unicode: \\u0048\\u0065\\u006C\\u006C\\u006F"); // Hello

        // Using escape in strings
        String path = "C:\\\\Users\\\\Documents\\\\file.txt";
        String json = "{\\"name\\":\\"John\\",\\"age\\":25}";

        System.out.println("Path: " + path);
        System.out.println("JSON: " + json);

        // Text block (Java 15+)
        String textBlock = """
                This is a multi-line
                string that preserves
                formatting and indentation
                """;
        System.out.println("Text block:");
        System.out.println(textBlock);
    }
}
`),H=e(`
Tab: Hello	World
Newline: Hello
World
Backslash: C:\\Program Files
Double quote: "Hello World"
Single quote: 'Hello World'
Unicode: Hello
Path: C:\\Users\\Documents\\file.txt
JSON: {"name":"John","age":25}
Text block:
This is a multi-line
string that preserves
formatting and indentation
`);return(nt,t)=>(T(),U(B,{title:"Java Programming",navigation:O(a).sections},{default:i(()=>[t[154]||(t[154]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Strings in Java ",-1)),s("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+k(lt)),s("div",P,[s("p",M,[n(r,null,{default:i(()=>[...t[0]||(t[0]=[l("Strings",-1)])]),_:1}),t[2]||(t[2]=l(" are one of the most commonly used classes in Java. A String represents a sequence of characters and is ",-1)),n(r,null,{default:i(()=>[...t[1]||(t[1]=[l("immutable",-1)])]),_:1}),t[3]||(t[3]=l(" (once created, it cannot be changed). ",-1))]),t[21]||(t[21]=s("p",{class:"mb-4"}," Key concepts: ",-1)),s("ul",j,[s("li",null,[t[5]||(t[5]=l("Strings are ",-1)),n(r,null,{default:i(()=>[...t[4]||(t[4]=[l("immutable",-1)])]),_:1}),t[6]||(t[6]=l(" objects ",-1))]),s("li",null,[t[8]||(t[8]=l("Stored in ",-1)),n(r,null,{default:i(()=>[...t[7]||(t[7]=[l("String Pool",-1)])]),_:1}),t[9]||(t[9]=l(" for efficiency ",-1))]),s("li",null,[t[12]||(t[12]=l("Can be created using ",-1)),n(r,null,{default:i(()=>[...t[10]||(t[10]=[l("string literals",-1)])]),_:1}),t[13]||(t[13]=l(" or ",-1)),n(r,null,{default:i(()=>[...t[11]||(t[11]=[l("new",-1)])]),_:1}),t[14]||(t[14]=l(" keyword ",-1))]),s("li",null,[t[16]||(t[16]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[15]||(t[15]=[l("StringBuilder",-1)])]),_:1}),t[17]||(t[17]=l(" for mutable strings ",-1))]),s("li",null,[t[19]||(t[19]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[18]||(t[18]=[l(".equals()",-1)])]),_:1}),t[20]||(t[20]=l(" for content comparison ",-1))])])]),t[155]||(t[155]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Creating Strings ",-1)),s("div",q,[t[30]||(t[30]=s("p",{class:"mb-4"}," There are multiple ways to create Strings in Java: ",-1)),s("ul",W,[s("li",null,[n(r,null,{default:i(()=>[...t[22]||(t[22]=[l("String literals",-1)])]),_:1}),t[23]||(t[23]=l(' - "Hello" (stored in String Pool) ',-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[24]||(t[24]=[l("new keyword",-1)])]),_:1}),t[25]||(t[25]=l(' - new String("Hello") (creates new object) ',-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[26]||(t[26]=[l("Character array",-1)])]),_:1}),t[27]||(t[27]=l(" - new String(char[]) ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[28]||(t[28]=[l("valueOf()",-1)])]),_:1}),t[29]||(t[29]=l(" - String.valueOf(123) ",-1))])]),n(o,{code:m.value,language:"java"},null,8,["code"]),t[31]||(t[31]=s("p",{class:"mt-4"},"Output:",-1)),n(u,{output:d.value},null,8,["output"])]),t[156]||(t[156]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Pool (String Internment) ",-1)),s("div",I,[s("p",L,[t[35]||(t[35]=l(" The ",-1)),n(r,null,{default:i(()=>[...t[32]||(t[32]=[l("String Pool",-1)])]),_:1}),t[36]||(t[36]=l(" (also known as String Intern Pool) is a special memory area where Java stores string literals for ",-1)),n(r,null,{default:i(()=>[...t[33]||(t[33]=[l("efficiency",-1)])]),_:1}),t[37]||(t[37]=l(" and ",-1)),n(r,null,{default:i(()=>[...t[34]||(t[34]=[l("memory optimization",-1)])]),_:1}),t[38]||(t[38]=l(" . ",-1))]),s("ul",A,[s("li",null,[n(r,null,{default:i(()=>[...t[39]||(t[39]=[l("String literals",-1)])]),_:1}),t[40]||(t[40]=l(" are automatically interned ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[41]||(t[41]=[l("new String()",-1)])]),_:1}),t[42]||(t[42]=l(" creates objects in heap memory ",-1))]),s("li",null,[t[44]||(t[44]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[43]||(t[43]=[l("intern()",-1)])]),_:1}),t[45]||(t[45]=l(" to manually add to pool ",-1))]),t[46]||(t[46]=s("li",null,"Compile-time constants are pooled",-1))]),n(o,{code:g.value,language:"java"},null,8,["code"]),t[47]||(t[47]=s("p",{class:"mt-4"},"Output:",-1)),n(u,{output:p.value},null,8,["output"])]),t[157]||(t[157]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Immutability ",-1)),s("div",N,[s("p",F,[n(r,null,{default:i(()=>[...t[48]||(t[48]=[l("Immutability",-1)])]),_:1}),t[50]||(t[50]=l(" means once a String is created, it cannot be changed. Any operation that modifies a String creates a ",-1)),n(r,null,{default:i(()=>[...t[49]||(t[49]=[l("new String object",-1)])]),_:1}),t[51]||(t[51]=l(" . ",-1))]),t[60]||(t[60]=s("p",{class:"mb-4"}," Benefits of immutability: ",-1)),s("ul",D,[s("li",null,[n(r,null,{default:i(()=>[...t[52]||(t[52]=[l("Thread-safe",-1)])]),_:1}),t[53]||(t[53]=l(" - can be shared across threads ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[54]||(t[54]=[l("Security",-1)])]),_:1}),t[55]||(t[55]=l(" - cannot be modified after creation ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[56]||(t[56]=[l("Caching",-1)])]),_:1}),t[57]||(t[57]=l(" - safe to cache hash codes ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[58]||(t[58]=[l("Performance",-1)])]),_:1}),t[59]||(t[59]=l(" - string pool optimization ",-1))])]),n(o,{code:f.value,language:"java"},null,8,["code"]),t[61]||(t[61]=s("p",{class:"mt-4"},"Output:",-1)),n(u,{output:S.value},null,8,["output"])]),t[158]||(t[158]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String vs StringBuilder ",-1)),s("div",E,[s("p",V,[n(r,null,{default:i(()=>[...t[62]||(t[62]=[l("StringBuilder",-1)])]),_:1}),t[64]||(t[64]=l(" is a ",-1)),n(r,null,{default:i(()=>[...t[63]||(t[63]=[l("mutable",-1)])]),_:1}),t[65]||(t[65]=l(" alternative to String. Use it when you need to modify strings frequently. ",-1))]),s("ul",G,[s("li",null,[n(r,null,{default:i(()=>[...t[66]||(t[66]=[l("String",-1)])]),_:1}),t[67]||(t[67]=l(" - Immutable, thread-safe, slower for modifications ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[68]||(t[68]=[l("StringBuilder",-1)])]),_:1}),t[69]||(t[69]=l(" - Mutable, not thread-safe, faster for modifications ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[70]||(t[70]=[l("StringBuffer",-1)])]),_:1}),t[71]||(t[71]=l(" - Mutable, thread-safe, slightly slower than StringBuilder ",-1))])]),n(o,{code:b.value,language:"java"},null,8,["code"]),t[72]||(t[72]=s("p",{class:"mt-4"},"Output:",-1)),n(u,{output:y.value},null,8,["output"])]),t[159]||(t[159]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic String Methods ",-1)),s("div",R,[s("p",X,[t[74]||(t[74]=l(" Strings have many useful methods. Here are some basic ones. For a complete list, see the ",-1)),n(r,null,{default:i(()=>[...t[73]||(t[73]=[l("String Methods",-1)])]),_:1}),t[75]||(t[75]=l(" page. ",-1))]),s("ul",z,[s("li",null,[n(r,null,{default:i(()=>[...t[76]||(t[76]=[l("length()",-1)])]),_:1}),t[77]||(t[77]=l(" - returns string length ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[78]||(t[78]=[l("charAt()",-1)])]),_:1}),t[79]||(t[79]=l(" - returns character at index ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[80]||(t[80]=[l("toUpperCase()",-1)])]),_:1}),t[81]||(t[81]=l(" - converts to uppercase ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[82]||(t[82]=[l("toLowerCase()",-1)])]),_:1}),t[83]||(t[83]=l(" - converts to lowercase ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[84]||(t[84]=[l("trim()",-1)])]),_:1}),t[85]||(t[85]=l(" - removes whitespace ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[86]||(t[86]=[l("isEmpty()",-1)])]),_:1}),t[87]||(t[87]=l(" - checks if empty ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[88]||(t[88]=[l("isBlank()",-1)])]),_:1}),t[89]||(t[89]=l(" - checks if blank (Java 11+) ",-1))])]),n(o,{code:v.value,language:"java"},null,8,["code"]),t[90]||(t[90]=s("p",{class:"mt-4"},"Output:",-1)),n(u,{output:x.value},null,8,["output"])]),t[160]||(t[160]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Escape Characters ",-1)),s("div",K,[s("p",$,[n(r,null,{default:i(()=>[...t[91]||(t[91]=[l("Escape sequences",-1)])]),_:1}),t[92]||(t[92]=l(" are used to represent special characters in strings. ",-1))]),s("ul",Q,[s("li",null,[n(r,null,{default:i(()=>[...t[93]||(t[93]=[l("\\\\n",-1)])]),_:1}),t[94]||(t[94]=l(" - Newline ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[95]||(t[95]=[l("\\\\t",-1)])]),_:1}),t[96]||(t[96]=l(" - Tab ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[97]||(t[97]=[l('\\\\"',-1)])]),_:1}),t[98]||(t[98]=l(" - Double quote ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[99]||(t[99]=[l("\\\\'",-1)])]),_:1}),t[100]||(t[100]=l(" - Single quote ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[101]||(t[101]=[l("\\\\\\\\",-1)])]),_:1}),t[102]||(t[102]=l(" - Backslash ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[103]||(t[103]=[l("\\\\uXXXX",-1)])]),_:1}),t[104]||(t[104]=l(" - Unicode character ",-1))])]),n(o,{code:w.value,language:"java"},null,8,["code"]),t[105]||(t[105]=s("p",{class:"mt-4"},"Output:",-1)),n(u,{output:H.value},null,8,["output"])]),t[161]||(t[161]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Strings ",-1)),s("div",Y,[s("div",Z,[t[121]||(t[121]=s("p",{class:"text-blue-700 font-semibold"},"Best Practices:",-1)),s("ul",h,[s("li",null,[t[107]||(t[107]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[106]||(t[106]=[l("String literals",-1)])]),_:1}),t[108]||(t[108]=l(" for better performance ",-1))]),s("li",null,[t[110]||(t[110]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[109]||(t[109]=[l(".equals()",-1)])]),_:1}),t[111]||(t[111]=l(" for content comparison, not == ",-1))]),s("li",null,[t[113]||(t[113]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[112]||(t[112]=[l("StringBuilder",-1)])]),_:1}),t[114]||(t[114]=l(" for multiple concatenations ",-1))]),s("li",null,[t[116]||(t[116]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[115]||(t[115]=[l("StringBuffer",-1)])]),_:1}),t[117]||(t[117]=l(" for thread-safe operations ",-1))]),s("li",null,[t[119]||(t[119]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[118]||(t[118]=[l("intern()",-1)])]),_:1}),t[120]||(t[120]=l(" carefully - can help memory but has overhead ",-1))])])]),s("ul",_,[s("li",null,[t[123]||(t[123]=l("Strings are ",-1)),n(r,null,{default:i(()=>[...t[122]||(t[122]=[l("immutable",-1)])]),_:1}),t[124]||(t[124]=l(" and thread-safe ",-1))]),s("li",null,[t[126]||(t[126]=l("String operations create ",-1)),n(r,null,{default:i(()=>[...t[125]||(t[125]=[l("new objects",-1)])]),_:1})]),s("li",null,[n(r,null,{default:i(()=>[...t[127]||(t[127]=[l("String Pool",-1)])]),_:1}),t[128]||(t[128]=l(" improves memory efficiency ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[129]||(t[129]=[l("StringBuilder",-1)])]),_:1}),t[130]||(t[130]=l(" is faster than String for concatenation ",-1))]),s("li",null,[t[132]||(t[132]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[131]||(t[131]=[l("text blocks",-1)])]),_:1}),t[133]||(t[133]=l(" (Java 15+) for multi-line strings ",-1))])])]),t[162]||(t[162]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),s("div",c,[s("ul",tt,[s("li",null,[t[135]||(t[135]=l("Strings are ",-1)),n(r,null,{default:i(()=>[...t[134]||(t[134]=[l("immutable",-1)])]),_:1}),t[136]||(t[136]=l(" character sequences ",-1))]),s("li",null,[t[138]||(t[138]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[137]||(t[137]=[l("String literals",-1)])]),_:1}),t[139]||(t[139]=l(" for efficiency (String Pool) ",-1))]),s("li",null,[t[141]||(t[141]=l("Use ",-1)),n(r,null,{default:i(()=>[...t[140]||(t[140]=[l(".equals()",-1)])]),_:1}),t[142]||(t[142]=l(" for content comparison ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[143]||(t[143]=[l("StringBuilder",-1)])]),_:1}),t[144]||(t[144]=l(" is mutable and efficient ",-1))]),s("li",null,[n(r,null,{default:i(()=>[...t[145]||(t[145]=[l("StringBuffer",-1)])]),_:1}),t[146]||(t[146]=l(" is mutable and thread-safe ",-1))]),s("li",null,[t[148]||(t[148]=l("Escape sequences represent ",-1)),n(r,null,{default:i(()=>[...t[147]||(t[147]=[l("special characters",-1)])]),_:1})]),s("li",null,[t[150]||(t[150]=l("Text blocks provide ",-1)),n(r,null,{default:i(()=>[...t[149]||(t[149]=[l("multi-line strings",-1)])]),_:1})]),s("li",null,[t[152]||(t[152]=l("Strings are ",-1)),n(r,null,{default:i(()=>[...t[151]||(t[151]=[l("fundamental",-1)])]),_:1}),t[153]||(t[153]=l(" in Java programming ",-1))])])])]),_:1},8,["navigation"]))}});export{mt as default};

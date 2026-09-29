import{_ as B}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as i}from"./SpanHighlight-D5QJRDV8.js";import{C as o}from"./CodeBlock-DZMpBSrv.js";import{O as u}from"./OutputBlock-DUAjxao7.js";import{u as W}from"./javaProgramming-DvM3X4gn.js";import{d as k,h as J,i as n,s as E,o as L,a as r,t as F,g as l,q as s,r as e}from"./index-fUs2VaN6.js";const U={class:"text-gray-600 mb-6 text-lg"},N={class:"mb-4"},P={class:"list-disc list-inside mb-4"},D={class:"text-gray-500 mb-6 text-lg"},R={class:"list-disc list-inside mb-4"},V={class:"text-gray-500 mb-6 text-lg"},G={class:"list-disc list-inside mb-4"},$={class:"text-gray-500 mb-6 text-lg"},z={class:"list-disc list-inside mb-4"},K={class:"text-gray-500 mb-6 text-lg"},Q={class:"list-disc list-inside mb-4"},X={class:"text-gray-500 mb-6 text-lg"},Y={class:"list-disc list-inside mb-4"},Z={class:"text-gray-500 mb-6 text-lg"},h={class:"list-disc list-inside mb-4"},_={class:"text-gray-500 mb-6 text-lg"},c={class:"list-disc list-inside mb-4"},tt={class:"text-gray-500 mb-6 text-lg"},rt={class:"list-disc list-inside mb-4"},lt={class:"text-gray-500 mb-6 text-lg"},st={class:"list-disc list-inside mb-4"},nt={class:"text-gray-500 mb-6 text-lg"},it={class:"mb-4"},et={class:"list-disc list-inside mb-4"},ot={class:"text-gray-500 mb-6 text-lg"},ut={class:"overflow-x-auto"},at={class:"min-w-full bg-white border border-gray-300 text-sm"},dt={class:"border border-gray-300 px-4 py-2"},pt={class:"border border-gray-300 px-4 py-2"},gt={class:"border border-gray-300 px-4 py-2"},mt={class:"border border-gray-300 px-4 py-2"},ft={class:"border border-gray-300 px-4 py-2"},bt={class:"border border-gray-300 px-4 py-2"},yt={class:"border border-gray-300 px-4 py-2"},xt={class:"border border-gray-300 px-4 py-2"},St={class:"border border-gray-300 px-4 py-2"},vt={class:"border border-gray-300 px-4 py-2"},Ot={class:"border border-gray-300 px-4 py-2"},Ct={class:"border border-gray-300 px-4 py-2"},wt={class:"border border-gray-300 px-4 py-2"},At={class:"border border-gray-300 px-4 py-2"},Ht={class:"border border-gray-300 px-4 py-2"},qt={class:"border border-gray-300 px-4 py-2"},Mt={class:"border border-gray-300 px-4 py-2"},jt={class:"text-gray-500 mb-6 text-lg"},Tt={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},It={class:"list-disc list-inside text-gray-600"},Bt={class:"list-disc list-inside"},Wt={class:"text-gray-500 mb-6 text-lg"},kt={class:"list-disc list-inside"},Jt="July 29, 2026",Vt=k({__name:"StringMethods",setup(Et){const a=W(),d=e(`
public class Main {
    public static void main(String[] args) {
        String text = "Java Programming";

        // length() - returns string length
        System.out.println("length(): " + text.length());

        // charAt() - returns character at index
        System.out.println("charAt(0): " + text.charAt(0));
        System.out.println("charAt(5): " + text.charAt(5));
        System.out.println("charAt(length-1): " + text.charAt(text.length() - 1));

        // Iterating through string
        System.out.print("Characters: ");
        for(int i = 0; i < text.length(); i++) {
            System.out.print(text.charAt(i) + " ");
        }
        System.out.println();

        // isEmpty() - checks if string is empty
        String empty = "";
        String notEmpty = "Hello";
        System.out.println("empty.isEmpty(): " + empty.isEmpty());
        System.out.println("notEmpty.isEmpty(): " + notEmpty.isEmpty());

        // isBlank() - checks if string is blank (Java 11+)
        String blank = "   ";
        System.out.println("blank.isBlank(): " + blank.isBlank());
    }
}
`),p=e(`
length(): 17
charAt(0): J
charAt(5): P
charAt(length-1): g
Characters: J a v a   P r o g r a m m i n g
empty.isEmpty(): true
notEmpty.isEmpty(): false
blank.isBlank(): true
`),g=e(`
public class Main {
    public static void main(String[] args) {
        String text = "Hello World from Java";
        System.out.println("Original: " + text);

        // substring(int beginIndex) - from index to end
        System.out.println("substring(6): " + text.substring(6));

        // substring(int beginIndex, int endIndex) - from begin to end (exclusive)
        System.out.println("substring(6, 11): " + text.substring(6, 11));
        System.out.println("substring(0, 5): " + text.substring(0, 5));

        // subSequence() - similar to substring but returns CharSequence
        CharSequence seq = text.subSequence(6, 11);
        System.out.println("subSequence(6, 11): " + seq);

        // Getting parts of string
        String[] words = text.split(" ");
        System.out.println("First word: " + words[0]);
        System.out.println("Last word: " + words[words.length - 1]);
    }
}
`),m=e(`
Original: Hello World from Java
substring(6): World from Java
substring(6, 11): World
substring(0, 5): Hello
subSequence(6, 11): World
First word: Hello
Last word: Java
`),f=e(`
public class Main {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "Hello";
        String str3 = "hello";
        String str4 = "World";

        // equals() - case-sensitive comparison
        System.out.println("equals() comparison:");
        System.out.println("str1.equals(str2): " + str1.equals(str2));
        System.out.println("str1.equals(str3): " + str1.equals(str3));
        System.out.println("str1.equals(str4): " + str1.equals(str4));

        // equalsIgnoreCase() - case-insensitive comparison
        System.out.println("equalsIgnoreCase() comparison:");
        System.out.println("str1.equalsIgnoreCase(str3): " + str1.equalsIgnoreCase(str3));

        // compareTo() - lexicographic comparison
        System.out.println("compareTo() comparison:");
        System.out.println("str1.compareTo(str2): " + str1.compareTo(str2)); // 0 (equal)
        System.out.println("str1.compareTo(str4): " + str1.compareTo(str4)); // negative (H < W)
        System.out.println("str4.compareTo(str1): " + str4.compareTo(str1)); // positive (W > H)

        // compareToIgnoreCase()
        System.out.println("compareToIgnoreCase(): " + str1.compareToIgnoreCase(str3));

        // contentEquals() - compare with CharSequence
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("contentEquals(sb): " + str1.contentEquals(sb));
    }
}
`),b=e(`
equals() comparison:
str1.equals(str2): true
str1.equals(str3): false
str1.equals(str4): false
equalsIgnoreCase() comparison:
str1.equalsIgnoreCase(str3): true
compareTo() comparison:
str1.compareTo(str2): 0
str1.compareTo(str4): -15
str4.compareTo(str1): 15
compareToIgnoreCase(): 0
contentEquals(sb): true
`),y=e(`
public class Main {
    public static void main(String[] args) {
        String text = "The quick brown fox jumps over the lazy dog";
        System.out.println("Text: " + text);

        // indexOf() - find first occurrence
        System.out.println("indexOf('o'): " + text.indexOf('o'));
        System.out.println("indexOf('o', 15): " + text.indexOf('o', 15));
        System.out.println("indexOf('fox'): " + text.indexOf("fox"));
        System.out.println("indexOf('cat'): " + text.indexOf("cat")); // -1

        // lastIndexOf() - find last occurrence
        System.out.println("lastIndexOf('o'): " + text.lastIndexOf('o'));
        System.out.println("lastIndexOf('the'): " + text.lastIndexOf("the"));
        System.out.println("lastIndexOf('e', 20): " + text.lastIndexOf('e', 20));

        // contains() - check if substring exists
        System.out.println("contains('fox'): " + text.contains("fox"));
        System.out.println("contains('cat'): " + text.contains("cat"));

        // startsWith() / endsWith()
        System.out.println("startsWith('The'): " + text.startsWith("The"));
        System.out.println("startsWith('the'): " + text.startsWith("the"));
        System.out.println("startsWith('quick', 4): " + text.startsWith("quick", 4));
        System.out.println("endsWith('dog'): " + text.endsWith("dog"));
        System.out.println("endsWith('cat'): " + text.endsWith("cat"));

        // matches() - regex matching
        System.out.println("matches('.*fox.*'): " + text.matches(".*fox.*"));
        System.out.println("matches('.*cat.*'): " + text.matches(".*cat.*"));
    }
}
`),x=e(`
Text: The quick brown fox jumps over the lazy dog
indexOf('o'): 12
indexOf('o', 15): 26
indexOf('fox'): 16
indexOf('cat'): -1
lastIndexOf('o'): 35
lastIndexOf('the'): 31
lastIndexOf('e', 20): 19
contains('fox'): true
contains('cat'): false
startsWith('The'): true
startsWith('the'): false
startsWith('quick', 4): true
endsWith('dog'): true
endsWith('cat'): false
matches('.*fox.*'): true
matches('.*cat.*'): false
`),S=e(`
public class Main {
    public static void main(String[] args) {
        String text = "The cat sat on the mat";
        System.out.println("Original: " + text);

        // replace() - replace all occurrences of char/CharSequence
        System.out.println("replace('a', 'o'): " + text.replace('a', 'o'));
        System.out.println("replace('cat', 'dog'): " + text.replace("cat", "dog"));

        // replaceAll() - replace using regex
        System.out.println("replaceAll('\\\\s+', '-'): " + text.replaceAll("\\\\s+", "-"));
        System.out.println("replaceAll('[aeiou]', '*'): " + text.replaceAll("[aeiou]", "*"));

        // replaceFirst() - replace first occurrence using regex
        System.out.println("replaceFirst('\\\\s+', '-'): " + text.replaceFirst("\\\\s+", "-"));
        System.out.println("replaceFirst('[aeiou]', '*'): " + text.replaceFirst("[aeiou]", "*"));

        // repeat() - repeat string (Java 11+)
        System.out.println("'Hi'.repeat(3): " + "Hi".repeat(3));
    }
}
`),v=e(`
Original: The cat sat on the mat
replace('a', 'o'): The cot sot on the mot
replace('cat', 'dog'): The dog sat on the mat
replaceAll('\\s+', '-'): The-cat-sat-on-the-mat
replaceAll('[aeiou]', '*'): Th* c*t s*t *n th* m*t
replaceFirst('\\s+', '-'): The-cat sat on the mat
replaceFirst('[aeiou]', '*'): Th* cat sat on the mat
'Hi'.repeat(3): HiHiHi
`),O=e(`
public class Main {
    public static void main(String[] args) {
        String text = "  Java Programming  ";
        System.out.println("Original: '" + text + "'");

        // trim() - remove whitespace
        System.out.println("trim(): '" + text.trim() + "'");

        // strip() - remove Unicode whitespace (Java 11+)
        String unicode = "\\u2000Hello\\u2000";
        System.out.println("strip(): '" + unicode.strip() + "'");
        System.out.println("stripLeading(): '" + unicode.stripLeading() + "'");
        System.out.println("stripTrailing(): '" + unicode.stripTrailing() + "'");

        // toUpperCase() / toLowerCase()
        System.out.println("toUpperCase(): " + text.toUpperCase());
        System.out.println("toLowerCase(): " + text.toLowerCase());

        // toCharArray() - convert to char array
        char[] chars = text.trim().toCharArray();
        System.out.print("toCharArray(): ");
        for(char c : chars) {
            System.out.print(c + " ");
        }
        System.out.println();

        // join() - join strings with delimiter
        String[] words = {"Java", "is", "fun"};
        System.out.println("join(' ', words): " + String.join(" ", words));
        System.out.println("join('-', words): " + String.join("-", words));
    }
}
`),C=e(`
Original: '  Java Programming  '
trim(): 'Java Programming'
strip(): 'Hello'
stripLeading(): 'Hello'
stripTrailing(): 'Hello'
toUpperCase():   JAVA PROGRAMMING
toLowerCase():   java programming
toCharArray(): J a v a   P r o g r a m m i n g
join(' ', words): Java is fun
join('-', words): Java-is-fun
`),w=e(`
public class Main {
    public static void main(String[] args) {
        // split() - split string into array
        String text = "apple,banana,orange,grape";
        System.out.println("Original: " + text);

        String[] fruits = text.split(",");
        System.out.println("split(','):");
        for(String fruit : fruits) {
            System.out.println("  " + fruit);
        }

        // split with limit
        String[] limited = text.split(",", 2);
        System.out.println("split(',', 2):");
        for(String part : limited) {
            System.out.println("  " + part);
        }

        // split with regex
        String sentence = "The  quick   brown   fox";
        String[] words = sentence.split("\\\\s+");
        System.out.println("split('\\\\s+'):");
        for(String word : words) {
            System.out.println("  " + word);
        }

        // join() - join array elements
        String joined = String.join(" - ", fruits);
        System.out.println("join(' - ', fruits): " + joined);

        // split with regex special characters
        String csv = "one|two|three";
        String[] parts = csv.split("\\\\|");
        System.out.println("split('\\\\|'):");
        for(String part : parts) {
            System.out.println("  " + part);
        }
    }
}
`),A=e(`
Original: apple,banana,orange,grape
split(','):
  apple
  banana
  orange
  grape
split(',', 2):
  apple
  banana,orange,grape
split('\\s+'):
  The
  quick
  brown
  fox
join(' - ', fruits): apple - banana - orange - grape
split('\\|'):
  one
  two
  three
`),H=e(`
public class Main {
    public static void main(String[] args) {
        // String.format() - formatted string
        String name = "John";
        int age = 25;
        double salary = 50000.50;

        String formatted = String.format("Name: %s, Age: %d, Salary: $%.2f", name, age, salary);
        System.out.println("String.format(): " + formatted);

        // format specifiers
        System.out.println("Number formatting:");
        System.out.printf("  %%d: %d\\n", 123);
        System.out.printf("  %%10d: %10d\\n", 123);
        System.out.printf("  %%-10d: %-10d\\n", 123);
        System.out.printf("  %%06d: %06d\\n", 123);

        System.out.println("Float formatting:");
        System.out.printf("  %%f: %f\\n", 3.14159);
        System.out.printf("  %%.2f: %.2f\\n", 3.14159);
        System.out.printf("  %%10.2f: %10.2f\\n", 3.14159);

        System.out.println("String formatting:");
        System.out.printf("  %%s: %s\\n", "Hello");
        System.out.printf("  %%10s: %10s\\n", "Hello");
        System.out.printf("  %%-10s: %-10s\\n", "Hello");

        // formatted() - Java 15+
        String message = "Hello %s".formatted("World");
        System.out.println("formatted(): " + message);

        // Building formatted string
        String table = String.format(
            "%-10s %10s %10s\\n" +
            "%-10s %10d %10.2f\\n" +
            "%-10s %10d %10.2f",
            "Name", "Age", "Salary",
            "John", 25, 50000.50,
            "Maria", 30, 60000.75
        );
        System.out.println("Table:");
        System.out.println(table);
    }
}
`),q=e(`
String.format(): Name: John, Age: 25, Salary: $50000.50
Number formatting:
  %d: 123
  %10d:        123
  %-10d: 123
  %06d: 000123
Float formatting:
  %f: 3.141590
  %.2f: 3.14
  %10.2f:       3.14
String formatting:
  %s: Hello
  %10s:      Hello
  %-10s: Hello
formatted(): Hello World
Table:
Name             Age     Salary
John              25   50000.50
Maria             30   60000.75
`),M=e(`
public class Main {
    public static void main(String[] args) {
        // valueOf() - convert to String
        int num = 123;
        double d = 45.67;
        boolean bool = true;
        char[] chars = {'A', 'B', 'C'};

        System.out.println("String.valueOf(123): " + String.valueOf(num));
        System.out.println("String.valueOf(45.67): " + String.valueOf(d));
        System.out.println("String.valueOf(true): " + String.valueOf(bool));
        System.out.println("String.valueOf(chars): " + String.valueOf(chars));

        // toString() - object to String
        Integer intObj = 456;
        System.out.println("intObj.toString(): " + intObj.toString());

        // Parsing String to other types
        String strNum = "456";
        String strDouble = "78.90";
        String strBool = "true";

        int parsedInt = Integer.parseInt(strNum);
        double parsedDouble = Double.parseDouble(strDouble);
        boolean parsedBool = Boolean.parseBoolean(strBool);

        System.out.println("Integer.parseInt('456'): " + parsedInt);
        System.out.println("Double.parseDouble('78.90'): " + parsedDouble);
        System.out.println("Boolean.parseBoolean('true'): " + parsedBool);

        // toString() for array
        int[] array = {1, 2, 3, 4, 5};
        System.out.println("Array as String: " + java.util.Arrays.toString(array));
    }
}
`),j=e(`
String.valueOf(123): 123
String.valueOf(45.67): 45.67
String.valueOf(true): true
String.valueOf(chars): ABC
intObj.toString(): 456
Integer.parseInt('456'): 456
Double.parseDouble('78.90'): 78.9
Boolean.parseBoolean('true'): true
Array as String: [1, 2, 3, 4, 5]
`),T=e(`
public class Main {
    public static void main(String[] args) {
        // StringBuilder methods
        StringBuilder sb = new StringBuilder("Hello");
        System.out.println("Initial: " + sb);

        // append() - add text
        sb.append(" World");
        sb.append("!");
        System.out.println("After append: " + sb);

        // insert() - insert at position
        sb.insert(6, "Java ");
        System.out.println("After insert: " + sb);

        // replace() - replace substring
        sb.replace(6, 10, "Python");
        System.out.println("After replace: " + sb);

        // delete() - delete substring
        sb.delete(6, 13);
        System.out.println("After delete: " + sb);

        // deleteCharAt() - delete character
        sb.deleteCharAt(11);
        System.out.println("After deleteCharAt: " + sb);

        // reverse() - reverse string
        sb.reverse();
        System.out.println("After reverse: " + sb);

        // capacity() - current capacity
        System.out.println("Capacity: " + sb.capacity());

        // ensureCapacity() - ensure minimum capacity
        sb.ensureCapacity(50);
        System.out.println("New capacity: " + sb.capacity());

        // substring() - get substring
        String sub = sb.substring(2, 6);
        System.out.println("substring(2, 6): " + sub);

        // toString() - convert to String
        String finalString = sb.toString();
        System.out.println("toString(): " + finalString);

        // StringBuffer - thread-safe version
        StringBuffer buffer = new StringBuffer("Hello");
        buffer.append(" World");
        System.out.println("StringBuffer: " + buffer);
    }
}
`),I=e(`
Initial: Hello
After append: Hello World!
After insert: Hello Java World!
After replace: Hello Python World!
After delete: Hello World!
After deleteCharAt: Hello World
After reverse: dlroW olleH
Capacity: 27
New capacity: 54
substring(2, 6): roW
toString(): dlroW olleH
StringBuffer: Hello World
`);return(Lt,t)=>(L(),J(B,{title:"Java Programming",navigation:E(a).sections},{default:n(()=>[t[244]||(t[244]=r("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," String Methods in Java ",-1)),r("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+F(Jt)),r("div",U,[r("p",N,[t[1]||(t[1]=l(" Java provides a rich set of ",-1)),s(i,null,{default:n(()=>[...t[0]||(t[0]=[l("String methods",-1)])]),_:1}),t[2]||(t[2]=l(" for manipulating and working with strings. These methods allow you to perform operations like searching, extracting, comparing, and transforming strings. ",-1))]),t[19]||(t[19]=r("p",{class:"mb-4"}," Key categories of String methods: ",-1)),r("ul",P,[r("li",null,[s(i,null,{default:n(()=>[...t[3]||(t[3]=[l("Length and character access",-1)])]),_:1}),t[4]||(t[4]=l(" - length(), charAt() ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[5]||(t[5]=[l("Substring extraction",-1)])]),_:1}),t[6]||(t[6]=l(" - substring(), subSequence() ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[7]||(t[7]=[l("Comparison",-1)])]),_:1}),t[8]||(t[8]=l(" - equals(), compareTo(), equalsIgnoreCase() ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[9]||(t[9]=[l("Searching",-1)])]),_:1}),t[10]||(t[10]=l(" - indexOf(), contains(), startsWith() ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[11]||(t[11]=[l("Replacement",-1)])]),_:1}),t[12]||(t[12]=l(" - replace(), replaceAll(), replaceFirst() ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[13]||(t[13]=[l("Transformation",-1)])]),_:1}),t[14]||(t[14]=l(" - trim(), toUpperCase(), toLowerCase() ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[15]||(t[15]=[l("Splitting and joining",-1)])]),_:1}),t[16]||(t[16]=l(" - split(), join() ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[17]||(t[17]=[l("Formatting and conversion",-1)])]),_:1}),t[18]||(t[18]=l(" - format(), valueOf() ",-1))])])]),t[245]||(t[245]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Length and Character Access ",-1)),r("div",D,[t[28]||(t[28]=r("p",{class:"mb-4"}," Methods for getting string length and accessing individual characters: ",-1)),r("ul",R,[r("li",null,[s(i,null,{default:n(()=>[...t[20]||(t[20]=[l("length()",-1)])]),_:1}),t[21]||(t[21]=l(" - returns the number of characters ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[22]||(t[22]=[l("charAt()",-1)])]),_:1}),t[23]||(t[23]=l(" - returns character at specified index ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[24]||(t[24]=[l("isEmpty()",-1)])]),_:1}),t[25]||(t[25]=l(" - checks if string is empty ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[26]||(t[26]=[l("isBlank()",-1)])]),_:1}),t[27]||(t[27]=l(" - checks if string is blank (Java 11+) ",-1))])]),s(o,{code:d.value,language:"java"},null,8,["code"]),t[29]||(t[29]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:p.value},null,8,["output"])]),t[246]||(t[246]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Substring Extraction ",-1)),r("div",V,[t[34]||(t[34]=r("p",{class:"mb-4"}," Methods for extracting parts of a string: ",-1)),r("ul",G,[r("li",null,[s(i,null,{default:n(()=>[...t[30]||(t[30]=[l("substring()",-1)])]),_:1}),t[31]||(t[31]=l(" - extracts a portion of the string ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[32]||(t[32]=[l("subSequence()",-1)])]),_:1}),t[33]||(t[33]=l(" - similar to substring but returns CharSequence ",-1))])]),s(o,{code:g.value,language:"java"},null,8,["code"]),t[35]||(t[35]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:m.value},null,8,["output"])]),t[247]||(t[247]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Comparison ",-1)),r("div",$,[t[46]||(t[46]=r("p",{class:"mb-4"}," Methods for comparing strings: ",-1)),r("ul",z,[r("li",null,[s(i,null,{default:n(()=>[...t[36]||(t[36]=[l("equals()",-1)])]),_:1}),t[37]||(t[37]=l(" - case-sensitive comparison ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[38]||(t[38]=[l("equalsIgnoreCase()",-1)])]),_:1}),t[39]||(t[39]=l(" - case-insensitive comparison ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[40]||(t[40]=[l("compareTo()",-1)])]),_:1}),t[41]||(t[41]=l(" - lexicographic comparison ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[42]||(t[42]=[l("compareToIgnoreCase()",-1)])]),_:1}),t[43]||(t[43]=l(" - case-insensitive lexicographic comparison ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[44]||(t[44]=[l("contentEquals()",-1)])]),_:1}),t[45]||(t[45]=l(" - compare with CharSequence ",-1))])]),s(o,{code:f.value,language:"java"},null,8,["code"]),t[47]||(t[47]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:b.value},null,8,["output"])]),t[248]||(t[248]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Searching in Strings ",-1)),r("div",K,[t[60]||(t[60]=r("p",{class:"mb-4"}," Methods for searching within strings: ",-1)),r("ul",Q,[r("li",null,[s(i,null,{default:n(()=>[...t[48]||(t[48]=[l("indexOf()",-1)])]),_:1}),t[49]||(t[49]=l(" - finds first occurrence ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[50]||(t[50]=[l("lastIndexOf()",-1)])]),_:1}),t[51]||(t[51]=l(" - finds last occurrence ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[52]||(t[52]=[l("contains()",-1)])]),_:1}),t[53]||(t[53]=l(" - checks if substring exists ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[54]||(t[54]=[l("startsWith()",-1)])]),_:1}),t[55]||(t[55]=l(" - checks prefix ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[56]||(t[56]=[l("endsWith()",-1)])]),_:1}),t[57]||(t[57]=l(" - checks suffix ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[58]||(t[58]=[l("matches()",-1)])]),_:1}),t[59]||(t[59]=l(" - regex matching ",-1))])]),s(o,{code:y.value,language:"java"},null,8,["code"]),t[61]||(t[61]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:x.value},null,8,["output"])]),t[249]||(t[249]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Replacement ",-1)),r("div",X,[t[70]||(t[70]=r("p",{class:"mb-4"}," Methods for replacing characters or substrings: ",-1)),r("ul",Y,[r("li",null,[s(i,null,{default:n(()=>[...t[62]||(t[62]=[l("replace()",-1)])]),_:1}),t[63]||(t[63]=l(" - replace all occurrences ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[64]||(t[64]=[l("replaceAll()",-1)])]),_:1}),t[65]||(t[65]=l(" - replace using regex ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[66]||(t[66]=[l("replaceFirst()",-1)])]),_:1}),t[67]||(t[67]=l(" - replace first occurrence using regex ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[68]||(t[68]=[l("repeat()",-1)])]),_:1}),t[69]||(t[69]=l(" - repeat string n times (Java 11+) ",-1))])]),s(o,{code:S.value,language:"java"},null,8,["code"]),t[71]||(t[71]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:v.value},null,8,["output"])]),t[250]||(t[250]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Transformation ",-1)),r("div",Z,[t[84]||(t[84]=r("p",{class:"mb-4"}," Methods for transforming strings: ",-1)),r("ul",h,[r("li",null,[s(i,null,{default:n(()=>[...t[72]||(t[72]=[l("trim()",-1)])]),_:1}),t[73]||(t[73]=l(" - remove whitespace ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[74]||(t[74]=[l("strip()",-1)])]),_:1}),t[75]||(t[75]=l(" - remove Unicode whitespace (Java 11+) ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[76]||(t[76]=[l("toUpperCase()",-1)])]),_:1}),t[77]||(t[77]=l(" - convert to uppercase ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[78]||(t[78]=[l("toLowerCase()",-1)])]),_:1}),t[79]||(t[79]=l(" - convert to lowercase ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[80]||(t[80]=[l("toCharArray()",-1)])]),_:1}),t[81]||(t[81]=l(" - convert to char array ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[82]||(t[82]=[l("join()",-1)])]),_:1}),t[83]||(t[83]=l(" - join strings with delimiter ",-1))])]),s(o,{code:O.value,language:"java"},null,8,["code"]),t[85]||(t[85]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:C.value},null,8,["output"])]),t[251]||(t[251]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Splitting and Joining ",-1)),r("div",_,[t[90]||(t[90]=r("p",{class:"mb-4"}," Methods for splitting and joining strings: ",-1)),r("ul",c,[r("li",null,[s(i,null,{default:n(()=>[...t[86]||(t[86]=[l("split()",-1)])]),_:1}),t[87]||(t[87]=l(" - split string into array ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[88]||(t[88]=[l("join()",-1)])]),_:1}),t[89]||(t[89]=l(" - join array elements with delimiter ",-1))])]),s(o,{code:w.value,language:"java"},null,8,["code"]),t[91]||(t[91]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:A.value},null,8,["output"])]),t[252]||(t[252]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Formatting ",-1)),r("div",tt,[t[98]||(t[98]=r("p",{class:"mb-4"}," Methods for formatting strings: ",-1)),r("ul",rt,[r("li",null,[s(i,null,{default:n(()=>[...t[92]||(t[92]=[l("String.format()",-1)])]),_:1}),t[93]||(t[93]=l(" - formatted string ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[94]||(t[94]=[l("printf()",-1)])]),_:1}),t[95]||(t[95]=l(" - formatted printing ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[96]||(t[96]=[l("formatted()",-1)])]),_:1}),t[97]||(t[97]=l(" - Java 15+ formatted strings ",-1))])]),s(o,{code:H.value,language:"java"},null,8,["code"]),t[99]||(t[99]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:q.value},null,8,["output"])]),t[253]||(t[253]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Conversion ",-1)),r("div",lt,[t[110]||(t[110]=r("p",{class:"mb-4"}," Methods for converting to/from strings: ",-1)),r("ul",st,[r("li",null,[s(i,null,{default:n(()=>[...t[100]||(t[100]=[l("String.valueOf()",-1)])]),_:1}),t[101]||(t[101]=l(" - convert to String ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[102]||(t[102]=[l("toString()",-1)])]),_:1}),t[103]||(t[103]=l(" - object to String ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[104]||(t[104]=[l("parseInt()",-1)])]),_:1}),t[105]||(t[105]=l(" - String to int ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[106]||(t[106]=[l("parseDouble()",-1)])]),_:1}),t[107]||(t[107]=l(" - String to double ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[108]||(t[108]=[l("parseBoolean()",-1)])]),_:1}),t[109]||(t[109]=l(" - String to boolean ",-1))])]),s(o,{code:M.value,language:"java"},null,8,["code"]),t[111]||(t[111]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:j.value},null,8,["output"])]),t[254]||(t[254]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," StringBuilder and StringBuffer Methods ",-1)),r("div",nt,[r("p",it,[s(i,null,{default:n(()=>[...t[112]||(t[112]=[l("StringBuilder",-1)])]),_:1}),t[114]||(t[114]=l(" and ",-1)),s(i,null,{default:n(()=>[...t[113]||(t[113]=[l("StringBuffer",-1)])]),_:1}),t[115]||(t[115]=l(" provide mutable string operations: ",-1))]),r("ul",et,[r("li",null,[s(i,null,{default:n(()=>[...t[116]||(t[116]=[l("append()",-1)])]),_:1}),t[117]||(t[117]=l(" - add text ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[118]||(t[118]=[l("insert()",-1)])]),_:1}),t[119]||(t[119]=l(" - insert at position ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[120]||(t[120]=[l("replace()",-1)])]),_:1}),t[121]||(t[121]=l(" - replace substring ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[122]||(t[122]=[l("delete()",-1)])]),_:1}),t[123]||(t[123]=l(" - delete substring ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[124]||(t[124]=[l("reverse()",-1)])]),_:1}),t[125]||(t[125]=l(" - reverse string ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[126]||(t[126]=[l("capacity()",-1)])]),_:1}),t[127]||(t[127]=l(" - get current capacity ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[128]||(t[128]=[l("toString()",-1)])]),_:1}),t[129]||(t[129]=l(" - convert to String ",-1))])]),s(o,{code:T.value,language:"java"},null,8,["code"]),t[130]||(t[130]=r("p",{class:"mt-4"},"Output:",-1)),s(u,{output:I.value},null,8,["output"])]),t[255]||(t[255]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Methods Quick Reference ",-1)),r("div",ot,[r("div",ut,[r("table",at,[t[182]||(t[182]=r("thead",null,[r("tr",{class:"bg-gray-100"},[r("th",{class:"border border-gray-300 px-4 py-2 text-left"},"Method"),r("th",{class:"border border-gray-300 px-4 py-2 text-left"},"Description"),r("th",{class:"border border-gray-300 px-4 py-2 text-left"},"Example")])],-1)),r("tbody",null,[r("tr",null,[r("td",dt,[s(i,null,{default:n(()=>[...t[131]||(t[131]=[l("length()",-1)])]),_:1})]),t[132]||(t[132]=r("td",{class:"border border-gray-300 px-4 py-2"},"Returns string length",-1)),t[133]||(t[133]=r("td",{class:"border border-gray-300 px-4 py-2"},'"Hello".length() → 5',-1))]),r("tr",null,[r("td",pt,[s(i,null,{default:n(()=>[...t[134]||(t[134]=[l("charAt()",-1)])]),_:1})]),t[135]||(t[135]=r("td",{class:"border border-gray-300 px-4 py-2"},"Returns character at index",-1)),t[136]||(t[136]=r("td",{class:"border border-gray-300 px-4 py-2"},`"Hello".charAt(1) → 'e'`,-1))]),r("tr",null,[r("td",gt,[s(i,null,{default:n(()=>[...t[137]||(t[137]=[l("substring()",-1)])]),_:1})]),t[138]||(t[138]=r("td",{class:"border border-gray-300 px-4 py-2"},"Extracts substring",-1)),t[139]||(t[139]=r("td",{class:"border border-gray-300 px-4 py-2"},'"Hello".substring(1,4) → "ell"',-1))]),r("tr",null,[r("td",mt,[s(i,null,{default:n(()=>[...t[140]||(t[140]=[l("equals()",-1)])]),_:1})]),t[141]||(t[141]=r("td",{class:"border border-gray-300 px-4 py-2"},"Case-sensitive comparison",-1)),t[142]||(t[142]=r("td",{class:"border border-gray-300 px-4 py-2"},'"Hello".equals("Hello") → true',-1))]),r("tr",null,[r("td",ft,[s(i,null,{default:n(()=>[...t[143]||(t[143]=[l("indexOf()",-1)])]),_:1})]),t[144]||(t[144]=r("td",{class:"border border-gray-300 px-4 py-2"},"Finds first occurrence",-1)),t[145]||(t[145]=r("td",{class:"border border-gray-300 px-4 py-2"},`"Hello".indexOf('l') → 2`,-1))]),r("tr",null,[r("td",bt,[s(i,null,{default:n(()=>[...t[146]||(t[146]=[l("contains()",-1)])]),_:1})]),t[147]||(t[147]=r("td",{class:"border border-gray-300 px-4 py-2"},"Checks if substring exists",-1)),t[148]||(t[148]=r("td",{class:"border border-gray-300 px-4 py-2"},'"Hello".contains("ell") → true',-1))]),r("tr",null,[r("td",yt,[s(i,null,{default:n(()=>[...t[149]||(t[149]=[l("replace()",-1)])]),_:1})]),t[150]||(t[150]=r("td",{class:"border border-gray-300 px-4 py-2"},"Replaces characters",-1)),t[151]||(t[151]=r("td",{class:"border border-gray-300 px-4 py-2"},`"Hello".replace('l','x') → "He xxo"`,-1))]),r("tr",null,[r("td",xt,[s(i,null,{default:n(()=>[...t[152]||(t[152]=[l("toUpperCase()",-1)])]),_:1})]),t[153]||(t[153]=r("td",{class:"border border-gray-300 px-4 py-2"},"Converts to uppercase",-1)),t[154]||(t[154]=r("td",{class:"border border-gray-300 px-4 py-2"},'"Hello".toUpperCase() → "HELLO"',-1))]),r("tr",null,[r("td",St,[s(i,null,{default:n(()=>[...t[155]||(t[155]=[l("toLowerCase()",-1)])]),_:1})]),t[156]||(t[156]=r("td",{class:"border border-gray-300 px-4 py-2"},"Converts to lowercase",-1)),t[157]||(t[157]=r("td",{class:"border border-gray-300 px-4 py-2"},'"HELLO".toLowerCase() → "hello"',-1))]),r("tr",null,[r("td",vt,[s(i,null,{default:n(()=>[...t[158]||(t[158]=[l("trim()",-1)])]),_:1})]),t[159]||(t[159]=r("td",{class:"border border-gray-300 px-4 py-2"},"Removes whitespace",-1)),t[160]||(t[160]=r("td",{class:"border border-gray-300 px-4 py-2"},'" Hello ".trim() → "Hello"',-1))]),r("tr",null,[r("td",Ot,[s(i,null,{default:n(()=>[...t[161]||(t[161]=[l("split()",-1)])]),_:1})]),t[162]||(t[162]=r("td",{class:"border border-gray-300 px-4 py-2"},"Splits string into array",-1)),t[163]||(t[163]=r("td",{class:"border border-gray-300 px-4 py-2"},'"a,b,c".split(",") → ["a","b","c"]',-1))]),r("tr",null,[r("td",Ct,[s(i,null,{default:n(()=>[...t[164]||(t[164]=[l("join()",-1)])]),_:1})]),t[165]||(t[165]=r("td",{class:"border border-gray-300 px-4 py-2"},"Joins strings with delimiter",-1)),t[166]||(t[166]=r("td",{class:"border border-gray-300 px-4 py-2"},'String.join("-", "a","b") → "a-b"',-1))]),r("tr",null,[r("td",wt,[s(i,null,{default:n(()=>[...t[167]||(t[167]=[l("format()",-1)])]),_:1})]),t[168]||(t[168]=r("td",{class:"border border-gray-300 px-4 py-2"},"Formats string",-1)),t[169]||(t[169]=r("td",{class:"border border-gray-300 px-4 py-2"},'String.format("%d", 123) → "123"',-1))]),r("tr",null,[r("td",At,[s(i,null,{default:n(()=>[...t[170]||(t[170]=[l("valueOf()",-1)])]),_:1})]),t[171]||(t[171]=r("td",{class:"border border-gray-300 px-4 py-2"},"Converts to String",-1)),t[172]||(t[172]=r("td",{class:"border border-gray-300 px-4 py-2"},'String.valueOf(123) → "123"',-1))]),r("tr",null,[r("td",Ht,[s(i,null,{default:n(()=>[...t[173]||(t[173]=[l("isEmpty()",-1)])]),_:1})]),t[174]||(t[174]=r("td",{class:"border border-gray-300 px-4 py-2"},"Checks if empty",-1)),t[175]||(t[175]=r("td",{class:"border border-gray-300 px-4 py-2"},'"".isEmpty() → true',-1))]),r("tr",null,[r("td",qt,[s(i,null,{default:n(()=>[...t[176]||(t[176]=[l("isBlank()",-1)])]),_:1})]),t[177]||(t[177]=r("td",{class:"border border-gray-300 px-4 py-2"},"Checks if blank (11+)",-1)),t[178]||(t[178]=r("td",{class:"border border-gray-300 px-4 py-2"},'" ".isBlank() → true',-1))]),r("tr",null,[r("td",Mt,[s(i,null,{default:n(()=>[...t[179]||(t[179]=[l("repeat()",-1)])]),_:1})]),t[180]||(t[180]=r("td",{class:"border border-gray-300 px-4 py-2"},"Repeats string (11+)",-1)),t[181]||(t[181]=r("td",{class:"border border-gray-300 px-4 py-2"},'"Hi".repeat(3) → "HiHiHi"',-1))])])])])]),t[256]||(t[256]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About String Methods ",-1)),r("div",jt,[r("div",Tt,[t[199]||(t[199]=r("p",{class:"text-blue-700 font-semibold"},"Key Points:",-1)),r("ul",It,[r("li",null,[t[184]||(t[184]=l("All String methods return a ",-1)),s(i,null,{default:n(()=>[...t[183]||(t[183]=[l("new String",-1)])]),_:1}),t[185]||(t[185]=l(" (immutability) ",-1))]),r("li",null,[t[187]||(t[187]=l("Use ",-1)),s(i,null,{default:n(()=>[...t[186]||(t[186]=[l(".equals()",-1)])]),_:1}),t[188]||(t[188]=l(" for content comparison, not == ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[189]||(t[189]=[l("indexOf()",-1)])]),_:1}),t[190]||(t[190]=l(" returns -1 if not found ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[191]||(t[191]=[l("substring()",-1)])]),_:1}),t[192]||(t[192]=l(" end index is exclusive ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[193]||(t[193]=[l("split()",-1)])]),_:1}),t[194]||(t[194]=l(" takes a regex pattern ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[195]||(t[195]=[l("replaceAll()",-1)])]),_:1}),t[197]||(t[197]=l(" and ",-1)),s(i,null,{default:n(()=>[...t[196]||(t[196]=[l("replaceFirst()",-1)])]),_:1}),t[198]||(t[198]=l(" use regex ",-1))])])]),r("ul",Bt,[r("li",null,[s(i,null,{default:n(()=>[...t[200]||(t[200]=[l("trim()",-1)])]),_:1}),t[201]||(t[201]=l(" removes whitespace (≤ U+0020) ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[202]||(t[202]=[l("strip()",-1)])]),_:1}),t[203]||(t[203]=l(" removes Unicode whitespace (Java 11+) ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[204]||(t[204]=[l("StringBuilder",-1)])]),_:1}),t[205]||(t[205]=l(" is mutable and efficient for concatenation ",-1))]),r("li",null,[t[207]||(t[207]=l("Use ",-1)),s(i,null,{default:n(()=>[...t[206]||(t[206]=[l("String.format()",-1)])]),_:1}),t[208]||(t[208]=l(" for complex formatting ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[209]||(t[209]=[l("valueOf()",-1)])]),_:1}),t[210]||(t[210]=l(" handles null safely ",-1))]),t[211]||(t[211]=r("li",null,"Method chaining is possible because methods return Strings",-1))])]),t[257]||(t[257]=r("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),r("div",Wt,[r("ul",kt,[r("li",null,[t[213]||(t[213]=l("String methods provide ",-1)),s(i,null,{default:n(()=>[...t[212]||(t[212]=[l("powerful manipulation",-1)])]),_:1}),t[214]||(t[214]=l(" capabilities ",-1))]),r("li",null,[t[216]||(t[216]=l("Methods are ",-1)),s(i,null,{default:n(()=>[...t[215]||(t[215]=[l("chainable",-1)])]),_:1}),t[217]||(t[217]=l(" due to immutability ",-1))]),r("li",null,[t[219]||(t[219]=l("Use ",-1)),s(i,null,{default:n(()=>[...t[218]||(t[218]=[l(".equals()",-1)])]),_:1}),t[220]||(t[220]=l(" for string comparison ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[221]||(t[221]=[l("substring()",-1)])]),_:1}),t[222]||(t[222]=l(" extracts parts of strings ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[223]||(t[223]=[l("indexOf()",-1)])]),_:1}),t[225]||(t[225]=l(" and ",-1)),s(i,null,{default:n(()=>[...t[224]||(t[224]=[l("lastIndexOf()",-1)])]),_:1}),t[226]||(t[226]=l(" search strings ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[227]||(t[227]=[l("replace()",-1)])]),_:1}),t[229]||(t[229]=l(" and ",-1)),s(i,null,{default:n(()=>[...t[228]||(t[228]=[l("replaceAll()",-1)])]),_:1}),t[230]||(t[230]=l(" modify strings ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[231]||(t[231]=[l("split()",-1)])]),_:1}),t[233]||(t[233]=l(" and ",-1)),s(i,null,{default:n(()=>[...t[232]||(t[232]=[l("join()",-1)])]),_:1}),t[234]||(t[234]=l(" handle delimited strings ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[235]||(t[235]=[l("format()",-1)])]),_:1}),t[237]||(t[237]=l(" and ",-1)),s(i,null,{default:n(()=>[...t[236]||(t[236]=[l("valueOf()",-1)])]),_:1}),t[238]||(t[238]=l(" convert between types ",-1))]),r("li",null,[s(i,null,{default:n(()=>[...t[239]||(t[239]=[l("StringBuilder",-1)])]),_:1}),t[240]||(t[240]=l(" provides mutable string operations ",-1))]),r("li",null,[t[242]||(t[242]=l("String methods are ",-1)),s(i,null,{default:n(()=>[...t[241]||(t[241]=[l("essential",-1)])]),_:1}),t[243]||(t[243]=l(" for text processing ",-1))])])])]),_:1},8,["navigation"]))}});export{Vt as default};

import{_ as U}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{S as r}from"./SpanHighlight-C0NIfFE-.js";import{C as o}from"./CodeBlock-CjPs9I9U.js";import{O as u}from"./OutputBlock-BzLqeAqJ.js";import{u as q}from"./javaProgramming-3VCcq7Z_.js";import{d as F,r as e,p as P,l as i,m as R,o as E,a as s,t as V,b as n,k as l}from"./index-IauxWRt0.js";const I={class:"text-gray-600 mb-6 text-lg"},L={class:"mb-4"},N={class:"list-disc list-inside mb-4"},G={class:"text-gray-500 mb-6 text-lg"},W={class:"text-gray-500 mb-6 text-lg"},H={class:"mb-4"},K={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Y={class:"text-gray-500 mb-6 text-lg"},Z={class:"mb-4"},h={class:"text-gray-500 mb-6 text-lg"},_={class:"text-gray-500 mb-6 text-lg"},c={class:"list-disc list-inside mb-4"},tt={class:"text-gray-500 mb-6 text-lg"},nt={class:"mb-4"},st={class:"text-gray-500 mb-6 text-lg"},lt={class:"list-disc list-inside mb-4"},it={class:"text-gray-500 mb-6 text-lg"},rt={class:"mb-4"},et={class:"text-gray-500 mb-6 text-lg"},ot={class:"mb-4"},ut={class:"text-gray-500 mb-6 text-lg"},at={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},mt={class:"list-disc list-inside text-gray-600"},dt={class:"list-disc list-inside"},yt={class:"text-gray-500 mb-6 text-lg"},pt={class:"list-disc list-inside"},gt="July 29, 2026",wt=F({__name:"Arrays",setup(ft){const a=q(),m=e(`
public class Main {
    public static void main(String[] args) {
        // Method 1: Declaration and initialization separately
        int[] numbers;
        numbers = new int[5];

        // Method 2: Declaration and initialization together
        int[] scores = new int[3];

        // Method 3: Declaration with values
        int[] ages = {25, 30, 35, 40, 45};

        // Method 4: Using 'new' with values
        int[] values = new int[]{10, 20, 30, 40};

        // Printing array elements
        System.out.println("Ages array:");
        for(int i = 0; i < ages.length; i++) {
            System.out.println("ages[" + i + "] = " + ages[i]);
        }
    }
}
`),d=e(`
Ages array:
ages[0] = 25
ages[1] = 30
ages[2] = 35
ages[3] = 40
ages[4] = 45
`),y=e(`
public class Main {
    public static void main(String[] args) {
        // Create array
        int[] numbers = {10, 20, 30, 40, 50};

        // Access elements
        System.out.println("First element: " + numbers[0]);
        System.out.println("Third element: " + numbers[2]);
        System.out.println("Last element: " + numbers[numbers.length - 1]);

        // Modify elements
        numbers[1] = 99;
        numbers[3] = 77;

        // Print modified array
        System.out.println("Modified array:");
        for(int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
    }
}
`),p=e(`
First element: 10
Third element: 30
Last element: 50
Modified array:
10 99 30 77 50
`),g=e(`
public class Main {
    public static void main(String[] args) {
        // Default values for different types
        int[] intArray = new int[3];
        double[] doubleArray = new double[3];
        boolean[] boolArray = new boolean[3];
        String[] stringArray = new String[3];

        System.out.println("Default values:");
        System.out.println("int: " + intArray[0]);
        System.out.println("double: " + doubleArray[0]);
        System.out.println("boolean: " + boolArray[0]);
        System.out.println("String: " + stringArray[0]);
    }
}
`),f=e(`
Default values:
int: 0
double: 0.0
boolean: false
String: null
`),b=e(`
public class Main {
    public static void main(String[] args) {
        // Array of Strings
        String[] names = {"Ralph", "John", "Maria", "Sarah", "David"};

        // Print all names
        System.out.println("All names:");
        for(int i = 0; i < names.length; i++) {
            System.out.println((i + 1) + ". " + names[i]);
        }

        // Modify a name
        names[2] = "Mary";
        System.out.println("After modification:");
        System.out.println("names[2] = " + names[2]);
    }
}
`),v=e(`
All names:
1. Ralph
2. John
3. Maria
4. Sarah
5. David
After modification:
names[2] = Mary
`),S=e(`
public class Main {
    public static void main(String[] args) {
        int[] scores = {85, 92, 78, 95, 88};

        System.out.println("Scores using for-each loop:");
        // For-each loop - no index needed
        for(int score : scores) {
            System.out.println(score);
        }

        // Calculate sum using for-each
        int sum = 0;
        for(int score : scores) {
            sum += score;
        }
        double average = (double) sum / scores.length;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}
`),x=e(`
Scores using for-each loop:
85
92
78
95
88
Sum: 438
Average: 87.6
`),A=e(`
public class Main {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 8, 1, 9, 3, 7, 4, 6};

        // Find max
        int max = numbers[0];
        for(int num : numbers) {
            if(num > max) max = num;
        }
        System.out.println("Maximum: " + max);

        // Find min
        int min = numbers[0];
        for(int num : numbers) {
            if(num < min) min = num;
        }
        System.out.println("Minimum: " + min);

        // Calculate sum and average
        int sum = 0;
        for(int num : numbers) {
            sum += num;
        }
        double average = (double) sum / numbers.length;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);

        // Search for element
        int search = 7;
        boolean found = false;
        for(int num : numbers) {
            if(num == search) {
                found = true;
                break;
            }
        }
        System.out.println("Found " + search + ": " + found);
    }
}
`),M=e(`
Maximum: 9
Minimum: 1
Sum: 45
Average: 5.0
Found 7: true
`),O=e(`
public class Main {
    public static void main(String[] args) {
        int[] original = {10, 20, 30, 40, 50};

        // Method 1: Manual copy
        int[] copy1 = new int[original.length];
        for(int i = 0; i < original.length; i++) {
            copy1[i] = original[i];
        }

        // Method 2: Using System.arraycopy()
        int[] copy2 = new int[original.length];
        System.arraycopy(original, 0, copy2, 0, original.length);

        // Method 3: Using clone()
        int[] copy3 = original.clone();

        // Verify copies
        System.out.println("Original: ");
        for(int num : original) System.out.print(num + " ");
        System.out.println();

        // Modify original
        original[0] = 999;

        System.out.println("After modifying original[0] = 999");
        System.out.print("Original: ");
        for(int num : original) System.out.print(num + " ");
        System.out.println();

        System.out.print("Copy1: ");
        for(int num : copy1) System.out.print(num + " ");
        System.out.println();

        System.out.print("Copy2: ");
        for(int num : copy2) System.out.print(num + " ");
        System.out.println();

        System.out.print("Copy3: ");
        for(int num : copy3) System.out.print(num + " ");
        System.out.println();
    }
}
`),w=e(`
Original:
10 20 30 40 50
After modifying original[0] = 999
Original: 999 20 30 40 50
Copy1: 10 20 30 40 50
Copy2: 10 20 30 40 50
Copy3: 10 20 30 40 50
`),C=e(`
public class Main {
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5, 6};

        System.out.println("Original array:");
        for(int num : numbers) System.out.print(num + " ");
        System.out.println();

        // Reverse using two pointers
        int left = 0;
        int right = numbers.length - 1;

        while(left < right) {
            // Swap elements
            int temp = numbers[left];
            numbers[left] = numbers[right];
            numbers[right] = temp;

            left++;
            right--;
        }

        System.out.println("Reversed array:");
        for(int num : numbers) System.out.print(num + " ");
        System.out.println();
    }
}
`),j=e(`
Original array:
1 2 3 4 5 6
Reversed array:
6 5 4 3 2 1
`),B=e(`
public class Main {
    public static void main(String[] args) {
        String[] names = {"John", "Alice", "Bob", "David", "Alice"};

        // Get array length
        System.out.println("Array length: " + names.length);

        // Check if array contains value
        String search = "Alice";
        boolean found = false;
        for(String name : names) {
            if(name.equals(search)) {
                found = true;
                break;
            }
        }
        System.out.println("Contains '" + search + "': " + found);

        // Count occurrences
        String target = "Alice";
        int count = 0;
        for(String name : names) {
            if(name.equals(target)) {
                count++;
            }
        }
        System.out.println("'Alice' appears " + count + " times");

        // Find index
        String find = "Bob";
        int index = -1;
        for(int i = 0; i < names.length; i++) {
            if(names[i].equals(find)) {
                index = i;
                break;
            }
        }
        System.out.println("Index of 'Bob': " + index);
    }
}
`),D=e(`
Array length: 5
Contains 'Alice': true
'Alice' appears 2 times
Index of 'Bob': 2
`),k=e(`
public class Main {
    public static void main(String[] args) {
        int[] numbers = {3, 7, 2, 9, 5};

        System.out.println("Original array:");
        printArray(numbers);

        // Pass array to method
        int sum = calculateSum(numbers);
        System.out.println("Sum: " + sum);

        // Pass array and modify
        multiplyByTwo(numbers);
        System.out.println("After multiplyByTwo:");
        printArray(numbers);
    }

    public static void printArray(int[] arr) {
        for(int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static int calculateSum(int[] arr) {
        int sum = 0;
        for(int num : arr) {
            sum += num;
        }
        return sum;
    }

    public static void multiplyByTwo(int[] arr) {
        for(int i = 0; i < arr.length; i++) {
            arr[i] *= 2;
        }
    }
}
`),z=e(`
Original array:
3 7 2 9 5
Sum: 26
After multiplyByTwo:
6 14 4 18 10
`),T=e(`
public class Main {
    public static void main(String[] args) {
        // Get array from method
        int[] squares = getSquares(5);

        System.out.println("Squares of 1 to 5:");
        for(int num : squares) {
            System.out.print(num + " ");
        }
        System.out.println();
    }

    public static int[] getSquares(int n) {
        int[] result = new int[n];
        for(int i = 0; i < n; i++) {
            result[i] = (i + 1) * (i + 1);
        }
        return result;
    }
}
`),J=e(`
Squares of 1 to 5:
1 4 9 16 25
`);return(bt,t)=>(E(),P(U,{title:"Java Programming",navigation:R(a).sections},{default:i(()=>[t[125]||(t[125]=s("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Arrays in Java ",-1)),s("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+V(gt)),s("div",I,[s("p",L,[t[1]||(t[1]=n(" An ",-1)),l(r,null,{default:i(()=>[...t[0]||(t[0]=[n("array",-1)])]),_:1}),t[2]||(t[2]=n(" is a container object that holds a fixed number of values of a single type. Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. ",-1))]),t[17]||(t[17]=s("p",{class:"mb-4"}," Key characteristics of arrays: ",-1)),s("ul",N,[s("li",null,[t[4]||(t[4]=n("Arrays are ",-1)),l(r,null,{default:i(()=>[...t[3]||(t[3]=[n("fixed in size",-1)])]),_:1}),t[5]||(t[5]=n(" - once created, the size cannot be changed ",-1))]),s("li",null,[t[7]||(t[7]=n("All elements must be of the ",-1)),l(r,null,{default:i(()=>[...t[6]||(t[6]=[n("same data type",-1)])]),_:1})]),s("li",null,[t[9]||(t[9]=n("Elements are accessed using ",-1)),l(r,null,{default:i(()=>[...t[8]||(t[8]=[n("index",-1)])]),_:1}),t[10]||(t[10]=n(" (starting from 0) ",-1))]),s("li",null,[t[12]||(t[12]=n("Arrays are ",-1)),l(r,null,{default:i(()=>[...t[11]||(t[11]=[n("objects",-1)])]),_:1}),t[13]||(t[13]=n(" in Java ",-1))]),s("li",null,[t[15]||(t[15]=n("The ",-1)),l(r,null,{default:i(()=>[...t[14]||(t[14]=[n("length",-1)])]),_:1}),t[16]||(t[16]=n(" property gives the array size ",-1))])])]),t[126]||(t[126]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Array Declaration and Initialization ",-1)),s("div",G,[t[18]||(t[18]=s("p",{class:"mb-4"}," There are multiple ways to declare and initialize arrays in Java: ",-1)),l(o,{code:m.value,language:"java"},null,8,["code"]),t[19]||(t[19]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:d.value},null,8,["output"])]),t[127]||(t[127]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing and Modifying Array Elements ",-1)),s("div",W,[s("p",H,[t[21]||(t[21]=n(" Array elements are accessed using ",-1)),l(r,null,{default:i(()=>[...t[20]||(t[20]=[n("index notation",-1)])]),_:1}),t[22]||(t[22]=n(" with square brackets. Index starts at 0 and goes to length-1. ",-1))]),l(o,{code:y.value,language:"java"},null,8,["code"]),t[23]||(t[23]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:p.value},null,8,["output"])]),t[128]||(t[128]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Default Values in Arrays ",-1)),s("div",K,[s("p",$,[t[25]||(t[25]=n(" When an array is created, elements are initialized with ",-1)),l(r,null,{default:i(()=>[...t[24]||(t[24]=[n("default values",-1)])]),_:1}),t[26]||(t[26]=n(" depending on the data type. ",-1))]),l(o,{code:g.value,language:"java"},null,8,["code"]),t[27]||(t[27]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:f.value},null,8,["output"])]),t[129]||(t[129]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," String Arrays ",-1)),s("div",Q,[s("p",X,[t[29]||(t[29]=n(" Arrays can store ",-1)),l(r,null,{default:i(()=>[...t[28]||(t[28]=[n("String",-1)])]),_:1}),t[30]||(t[30]=n(" objects just like primitive types. ",-1))]),l(o,{code:b.value,language:"java"},null,8,["code"]),t[31]||(t[31]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:v.value},null,8,["output"])]),t[130]||(t[130]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," For-Each Loop with Arrays ",-1)),s("div",Y,[s("p",Z,[t[33]||(t[33]=n(" The ",-1)),l(r,null,{default:i(()=>[...t[32]||(t[32]=[n("for-each",-1)])]),_:1}),t[34]||(t[34]=n(" loop (enhanced for loop) provides a simpler way to iterate over arrays without using an index. ",-1))]),l(o,{code:S.value,language:"java"},null,8,["code"]),t[35]||(t[35]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:x.value},null,8,["output"])]),t[131]||(t[131]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Common Array Operations ",-1)),s("div",h,[t[36]||(t[36]=s("p",{class:"mb-4"}," Common operations on arrays include finding max/min, calculating sum/average, and searching. ",-1)),l(o,{code:A.value,language:"java"},null,8,["code"]),t[37]||(t[37]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:M.value},null,8,["output"])]),t[132]||(t[132]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Copying Arrays ",-1)),s("div",_,[t[44]||(t[44]=s("p",{class:"mb-4"}," There are several ways to copy arrays in Java: ",-1)),s("ul",c,[t[43]||(t[43]=s("li",null,"Manual copy using a loop",-1)),s("li",null,[t[39]||(t[39]=n("Using ",-1)),l(r,null,{default:i(()=>[...t[38]||(t[38]=[n("System.arraycopy()",-1)])]),_:1})]),s("li",null,[t[41]||(t[41]=n("Using the ",-1)),l(r,null,{default:i(()=>[...t[40]||(t[40]=[n("clone()",-1)])]),_:1}),t[42]||(t[42]=n(" method ",-1))])]),l(o,{code:O.value,language:"java"},null,8,["code"]),t[45]||(t[45]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:w.value},null,8,["output"])]),t[133]||(t[133]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Reversing an Array ",-1)),s("div",tt,[s("p",nt,[t[47]||(t[47]=n(" Arrays can be reversed using a ",-1)),l(r,null,{default:i(()=>[...t[46]||(t[46]=[n("two-pointer",-1)])]),_:1}),t[48]||(t[48]=n(" approach. ",-1))]),l(o,{code:C.value,language:"java"},null,8,["code"]),t[49]||(t[49]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:j.value},null,8,["output"])]),t[134]||(t[134]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Useful Array Methods ",-1)),s("div",st,[t[63]||(t[63]=s("p",{class:"mb-4"}," Common operations when working with arrays: ",-1)),s("ul",lt,[s("li",null,[t[52]||(t[52]=n("Get ",-1)),l(r,null,{default:i(()=>[...t[50]||(t[50]=[n("length",-1)])]),_:1}),t[53]||(t[53]=n(" using ",-1)),l(r,null,{default:i(()=>[...t[51]||(t[51]=[n("array.length",-1)])]),_:1})]),s("li",null,[t[55]||(t[55]=n("Check if array ",-1)),l(r,null,{default:i(()=>[...t[54]||(t[54]=[n("contains",-1)])]),_:1}),t[56]||(t[56]=n(" a value ",-1))]),s("li",null,[t[58]||(t[58]=n("Count ",-1)),l(r,null,{default:i(()=>[...t[57]||(t[57]=[n("occurrences",-1)])]),_:1}),t[59]||(t[59]=n(" of a value ",-1))]),s("li",null,[t[61]||(t[61]=n("Find the ",-1)),l(r,null,{default:i(()=>[...t[60]||(t[60]=[n("index",-1)])]),_:1}),t[62]||(t[62]=n(" of a value ",-1))])]),l(o,{code:B.value,language:"java"},null,8,["code"]),t[64]||(t[64]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:D.value},null,8,["output"])]),t[135]||(t[135]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Passing Arrays to Methods ",-1)),s("div",it,[s("p",rt,[t[66]||(t[66]=n(" Arrays can be ",-1)),l(r,null,{default:i(()=>[...t[65]||(t[65]=[n("passed as parameters",-1)])]),_:1}),t[67]||(t[67]=n(" to methods. Since arrays are objects, changes made to the array inside the method affect the original array. ",-1))]),l(o,{code:k.value,language:"java"},null,8,["code"]),t[68]||(t[68]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:z.value},null,8,["output"])]),t[136]||(t[136]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Returning Arrays from Methods ",-1)),s("div",et,[s("p",ot,[t[70]||(t[70]=n(" Methods can ",-1)),l(r,null,{default:i(()=>[...t[69]||(t[69]=[n("return arrays",-1)])]),_:1}),t[71]||(t[71]=n(" as their return value. ",-1))]),l(o,{code:T.value,language:"java"},null,8,["code"]),t[72]||(t[72]=s("p",{class:"mt-4"},"Output:",-1)),l(u,{output:J.value},null,8,["output"])]),t[137]||(t[137]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Arrays ",-1)),s("div",ut,[s("div",at,[t[87]||(t[87]=s("p",{class:"text-blue-700 font-semibold"},"Remember:",-1)),s("ul",mt,[s("li",null,[t[74]||(t[74]=n("Array index starts at ",-1)),l(r,null,{default:i(()=>[...t[73]||(t[73]=[n("0",-1)])]),_:1}),t[75]||(t[75]=n(" , not 1 ",-1))]),s("li",null,[t[77]||(t[77]=n("Accessing an invalid index throws ",-1)),l(r,null,{default:i(()=>[...t[76]||(t[76]=[n("ArrayIndexOutOfBoundsException",-1)])]),_:1})]),t[86]||(t[86]=s("li",null,"Arrays have a fixed size - they cannot be resized after creation",-1)),s("li",null,[t[79]||(t[79]=n("The ",-1)),l(r,null,{default:i(()=>[...t[78]||(t[78]=[n("length",-1)])]),_:1}),t[80]||(t[80]=n(" property gives the size of the array ",-1))]),s("li",null,[t[82]||(t[82]=n("Arrays of objects store ",-1)),l(r,null,{default:i(()=>[...t[81]||(t[81]=[n("references",-1)])]),_:1}),t[83]||(t[83]=n(" , not the objects themselves ",-1))]),s("li",null,[t[85]||(t[85]=n("When you copy an array, you get a ",-1)),l(r,null,{default:i(()=>[...t[84]||(t[84]=[n("shallow copy",-1)])]),_:1})])])]),s("ul",dt,[s("li",null,[t[89]||(t[89]=n("Use ",-1)),l(r,null,{default:i(()=>[...t[88]||(t[88]=[n("ArrayList",-1)])]),_:1}),t[90]||(t[90]=n(" when you need a dynamic size ",-1))]),s("li",null,[t[92]||(t[92]=n("Arrays are ",-1)),l(r,null,{default:i(()=>[...t[91]||(t[91]=[n("type-safe",-1)])]),_:1}),t[93]||(t[93]=n(" - you can only store elements of the declared type ",-1))]),s("li",null,[t[96]||(t[96]=n("The ",-1)),l(r,null,{default:i(()=>[...t[94]||(t[94]=[n("toString()",-1)])]),_:1}),t[97]||(t[97]=n(" method on arrays doesn't show the content (use ",-1)),l(r,null,{default:i(()=>[...t[95]||(t[95]=[n("Arrays.toString()",-1)])]),_:1}),t[98]||(t[98]=n(" instead) ",-1))])])]),t[138]||(t[138]=s("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),s("div",yt,[s("ul",pt,[s("li",null,[t[100]||(t[100]=n("Arrays store ",-1)),l(r,null,{default:i(()=>[...t[99]||(t[99]=[n("multiple values",-1)])]),_:1}),t[101]||(t[101]=n(" of the same type ",-1))]),s("li",null,[t[103]||(t[103]=n("Array ",-1)),l(r,null,{default:i(()=>[...t[102]||(t[102]=[n("size",-1)])]),_:1}),t[104]||(t[104]=n(" is fixed after creation ",-1))]),s("li",null,[t[106]||(t[106]=n("Elements are accessed using ",-1)),l(r,null,{default:i(()=>[...t[105]||(t[105]=[n("index",-1)])]),_:1}),t[107]||(t[107]=n(" (0 to length-1) ",-1))]),s("li",null,[t[109]||(t[109]=n("Use ",-1)),l(r,null,{default:i(()=>[...t[108]||(t[108]=[n("for-each",-1)])]),_:1}),t[110]||(t[110]=n(" loops for simple iteration ",-1))]),t[124]||(t[124]=s("li",null,"Common operations include finding max/min, sum/average, and searching",-1)),s("li",null,[t[113]||(t[113]=n("Use ",-1)),l(r,null,{default:i(()=>[...t[111]||(t[111]=[n("System.arraycopy()",-1)])]),_:1}),t[114]||(t[114]=n(" or ",-1)),l(r,null,{default:i(()=>[...t[112]||(t[112]=[n("clone()",-1)])]),_:1}),t[115]||(t[115]=n(" to copy arrays ",-1))]),s("li",null,[t[118]||(t[118]=n("Arrays can be ",-1)),l(r,null,{default:i(()=>[...t[116]||(t[116]=[n("passed to",-1)])]),_:1}),t[119]||(t[119]=n(" and ",-1)),l(r,null,{default:i(()=>[...t[117]||(t[117]=[n("returned from",-1)])]),_:1}),t[120]||(t[120]=n(" methods ",-1))]),s("li",null,[t[122]||(t[122]=n("Arrays are ",-1)),l(r,null,{default:i(()=>[...t[121]||(t[121]=[n("fundamental",-1)])]),_:1}),t[123]||(t[123]=n(" data structures in Java ",-1))])])])]),_:1},8,["navigation"]))}});export{wt as default};

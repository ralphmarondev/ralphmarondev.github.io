import{_ as C}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as r}from"./SpanHighlight-C-B7JT-9.js";import{C as o}from"./CodeBlock-DXevIYip.js";import{O as u}from"./OutputBlock-DW4hv_11.js";import{u as M}from"./javaProgramming-Pq2XLaCP.js";import{d as B,r as l,p as G,l as i,m as H,o as q,a as n,t as Q,b as e,k as s}from"./index-DaKFBQPl.js";const P={class:"text-gray-600 mb-6 text-lg"},U={class:"mb-4"},E={class:"list-disc list-inside mb-4"},z={class:"text-gray-500 mb-6 text-lg"},j={class:"text-gray-500 mb-6 text-lg"},N={class:"mb-4"},K={class:"list-disc list-inside mb-4"},D={class:"text-gray-500 mb-6 text-lg"},R={class:"mb-4"},J={class:"list-disc list-inside mb-4"},V={class:"text-gray-500 mb-6 text-lg"},Z={class:"mb-4"},W={class:"list-disc list-inside mb-4"},$={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Y={class:"list-disc list-inside mb-4"},h={class:"text-gray-500 mb-6 text-lg"},_={class:"mb-4"},c={class:"list-disc list-inside mb-4"},tt={class:"text-gray-500 mb-6 text-lg"},et={class:"mb-4"},nt={class:"list-disc list-inside mb-4"},st={class:"text-gray-500 mb-6 text-lg"},it={class:"mb-4"},rt={class:"text-gray-500 mb-6 text-lg"},lt={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},ot={class:"list-disc list-inside text-gray-600"},ut={class:"list-disc list-inside"},at={class:"text-gray-500 mb-6 text-lg"},dt={class:"list-disc list-inside"},pt="July 29, 2026",vt=B({__name:"JavaCollectionFramework",setup(mt){const a=M(),d=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Array - fixed size
        String[] array = new String[3];
        array[0] = "Apple";
        array[1] = "Banana";
        array[2] = "Orange";
        // array[3] = "Grape"; // Error! Array is fixed size

        System.out.println("Array:");
        for(String fruit : array) {
            System.out.println("  " + fruit);
        }
        System.out.println("Array length: " + array.length);
        System.out.println();

        // ArrayList - dynamic size (part of Collections Framework)
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Orange");
        list.add("Grape"); // No error - dynamic size

        System.out.println("ArrayList:");
        for(String fruit : list) {
            System.out.println("  " + fruit);
        }
        System.out.println("ArrayList size: " + list.size());
        System.out.println("First element: " + list.get(0));
        System.out.println("Contains 'Banana': " + list.contains("Banana"));
        System.out.println("Index of 'Orange': " + list.indexOf("Orange"));
    }
}
`),p=l(`
Array:
  Apple
  Banana
  Orange
Array length: 3

ArrayList:
  Apple
  Banana
  Orange
  Grape
ArrayList size: 4
First element: Apple
Contains 'Banana': true
Index of 'Orange': 2
`),m=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Java Collection Framework Hierarchy:");
        System.out.println("====================================");
        System.out.println();

        System.out.println("Iterable");
        System.out.println("  └── Collection");
        System.out.println("       ├── List (Ordered, allows duplicates)");
        System.out.println("       │   ├── ArrayList (dynamic array)");
        System.out.println("       │   ├── LinkedList (doubly-linked list)");
        System.out.println("       │   └── Vector (thread-safe ArrayList)");
        System.out.println("       │");
        System.out.println("       ├── Set (No duplicates, unordered)");
        System.out.println("       │   ├── HashSet (hash table)");
        System.out.println("       │   ├── LinkedHashSet (maintains insertion order)");
        System.out.println("       │   └── TreeSet (sorted)");
        System.out.println("       │");
        System.out.println("       └── Queue (FIFO - First In First Out)");
        System.out.println("           ├── PriorityQueue (priority-based)");
        System.out.println("           └── LinkedList (implements Queue)");
        System.out.println();
        System.out.println("Map (Key-Value pairs)");
        System.out.println("  ├── HashMap (unordered)");
        System.out.println("  ├── LinkedHashMap (insertion order)");
        System.out.println("  └── TreeMap (sorted by keys)");

        System.out.println();
        System.out.println("Key interfaces:");
        System.out.println("  - List: Ordered, allows duplicates");
        System.out.println("  - Set: No duplicates, unordered");
        System.out.println("  - Queue: FIFO or priority order");
        System.out.println("  - Map: Key-value pairs");
    }
}
`),y=l(`
Java Collection Framework Hierarchy:
====================================

Iterable
  └── Collection
       ├── List (Ordered, allows duplicates)
       │   ├── ArrayList (dynamic array)
       │   ├── LinkedList (doubly-linked list)
       │   └── Vector (thread-safe ArrayList)
       │
       ├── Set (No duplicates, unordered)
       │   ├── HashSet (hash table)
       │   ├── LinkedHashSet (maintains insertion order)
       │   └── TreeSet (sorted)
       │
       └── Queue (FIFO - First In First Out)
           ├── PriorityQueue (priority-based)
           └── LinkedList (implements Queue)

Map (Key-Value pairs)
  ├── HashMap (unordered)
  ├── LinkedHashMap (insertion order)
  └── TreeMap (sorted by keys)

Key interfaces:
  - List: Ordered, allows duplicates
  - Set: No duplicates, unordered
  - Queue: FIFO or priority order
  - Map: Key-value pairs
`),f=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Creating ArrayList
        ArrayList<String> fruits = new ArrayList<>();

        // Adding elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Apple"); // Duplicates allowed
        System.out.println("After adding: " + fruits);

        // Adding at specific index
        fruits.add(1, "Mango");
        System.out.println("After adding Mango at index 1: " + fruits);

        // Accessing elements
        System.out.println("Element at index 2: " + fruits.get(2));

        // Modifying elements
        fruits.set(2, "Grape");
        System.out.println("After modifying index 2: " + fruits);

        // Removing elements
        fruits.remove("Apple"); // Removes first occurrence
        System.out.println("After removing 'Apple': " + fruits);
        fruits.remove(2); // Removes by index
        System.out.println("After removing index 2: " + fruits);

        // Size and empty check
        System.out.println("Size: " + fruits.size());
        System.out.println("Is empty: " + fruits.isEmpty());

        // Checking existence
        System.out.println("Contains 'Banana': " + fruits.contains("Banana"));
        System.out.println("Index of 'Banana': " + fruits.indexOf("Banana"));

        // Iterating
        System.out.print("Iterating: ");
        for(String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        System.out.println();

        // Clearing
        fruits.clear();
        System.out.println("After clear: " + fruits);
        System.out.println("Is empty: " + fruits.isEmpty());
    }
}
`),g=l(`
After adding: [Apple, Banana, Orange, Apple]
After adding Mango at index 1: [Apple, Mango, Banana, Orange, Apple]
Element at index 2: Banana
After modifying index 2: [Apple, Mango, Grape, Orange, Apple]
After removing 'Apple': [Mango, Grape, Orange, Apple]
After removing index 2: [Mango, Grape, Apple]
Size: 3
Is empty: false
Contains 'Banana': false
Index of 'Banana': -1
Iterating: Mango Grape Apple
After clear: []
Is empty: true
`),S=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // LinkedList implements List and Queue
        LinkedList<String> list = new LinkedList<>();

        // Adding elements
        list.add("First");
        list.add("Second");
        list.add("Third");
        System.out.println("LinkedList: " + list);

        // Adding at beginning and end
        list.addFirst("Zero");
        list.addLast("Fourth");
        System.out.println("After addFirst/Last: " + list);

        // Queue operations (FIFO)
        System.out.println("Peek (first element): " + list.peek());
        System.out.println("Poll (remove first): " + list.poll());
        System.out.println("After poll: " + list);

        // Stack operations (LIFO)
        list.push("New First");
        System.out.println("After push: " + list);
        System.out.println("Pop (remove first): " + list.pop());
        System.out.println("After pop: " + list);

        // Getting first and last
        System.out.println("First: " + list.getFirst());
        System.out.println("Last: " + list.getLast());

        // Removing first and last
        list.removeFirst();
        System.out.println("After removeFirst: " + list);
        list.removeLast();
        System.out.println("After removeLast: " + list);
    }
}
`),b=l(`
LinkedList: [First, Second, Third]
After addFirst/Last: [Zero, First, Second, Third, Fourth]
Peek (first element): Zero
Poll (remove first): Zero
After poll: [First, Second, Third, Fourth]
After push: [New First, First, Second, Third, Fourth]
Pop (remove first): New First
After pop: [First, Second, Third, Fourth]
First: First
Last: Fourth
After removeFirst: [Second, Third, Fourth]
After removeLast: [Second, Third]
`),L=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // HashSet - no duplicates, unordered
        HashSet<String> set = new HashSet<>();

        // Adding elements
        set.add("Apple");
        set.add("Banana");
        set.add("Orange");
        set.add("Apple"); // Duplicate - will be ignored
        set.add("Mango");
        set.add("Grape");

        System.out.println("HashSet: " + set);
        System.out.println("Size: " + set.size());

        // Checking existence
        System.out.println("Contains 'Banana': " + set.contains("Banana"));
        System.out.println("Contains 'Kiwi': " + set.contains("Kiwi"));

        // Removing
        set.remove("Orange");
        System.out.println("After removing 'Orange': " + set);

        // Iterating
        System.out.print("Iterating: ");
        for(String fruit : set) {
            System.out.print(fruit + " ");
        }
        System.out.println();

        // No guaranteed order
        System.out.println("Note: HashSet does not maintain any order!");

        // Union, Intersection, Difference
        HashSet<Integer> set1 = new HashSet<>(Arrays.asList(1, 2, 3, 4, 5));
        HashSet<Integer> set2 = new HashSet<>(Arrays.asList(4, 5, 6, 7, 8));

        System.out.println("Set 1: " + set1);
        System.out.println("Set 2: " + set2);

        // Union
        HashSet<Integer> union = new HashSet<>(set1);
        union.addAll(set2);
        System.out.println("Union: " + union);

        // Intersection
        HashSet<Integer> intersection = new HashSet<>(set1);
        intersection.retainAll(set2);
        System.out.println("Intersection: " + intersection);

        // Difference
        HashSet<Integer> difference = new HashSet<>(set1);
        difference.removeAll(set2);
        System.out.println("Difference (set1 - set2): " + difference);
    }
}
`),x=l(`
HashSet: [Apple, Grape, Mango, Orange, Banana]
Size: 5
Contains 'Banana': true
Contains 'Kiwi': false
After removing 'Orange': [Apple, Grape, Mango, Banana]
Iterating: Apple Grape Mango Banana
Note: HashSet does not maintain any order!
Set 1: [1, 2, 3, 4, 5]
Set 2: [4, 5, 6, 7, 8]
Union: [1, 2, 3, 4, 5, 6, 7, 8]
Intersection: [4, 5]
Difference (set1 - set2): [1, 2, 3]
`),v=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // TreeSet - sorted, no duplicates
        TreeSet<String> set = new TreeSet<>();

        set.add("Orange");
        set.add("Apple");
        set.add("Banana");
        set.add("Mango");
        set.add("Grape");
        set.add("Apple"); // Duplicate - ignored

        System.out.println("TreeSet (sorted): " + set);
        System.out.println("First: " + set.first());
        System.out.println("Last: " + set.last());

        // TreeSet specific methods
        System.out.println("Ceiling 'G': " + set.ceiling("G")); // >= 'G'
        System.out.println("Floor 'G': " + set.floor("G"));     // <= 'G'
        System.out.println("Higher 'G': " + set.higher("G"));   // > 'G'
        System.out.println("Lower 'G': " + set.lower("G"));     // < 'G'

        // Subsets
        System.out.println("Subset 'B' to 'M': " + set.subSet("B", "M"));
        System.out.println("HeadSet 'G': " + set.headSet("G"));
        System.out.println("TailSet 'G': " + set.tailSet("G"));

        // Iterating in order
        System.out.print("Iterating sorted: ");
        for(String fruit : set) {
            System.out.print(fruit + " ");
        }
        System.out.println();

        // Reverse order
        System.out.println("Descending set: " + set.descendingSet());
    }
}
`),A=l(`
TreeSet (sorted): [Apple, Banana, Grape, Mango, Orange]
First: Apple
Last: Orange
Ceiling 'G': Grape
Floor 'G': Grape
Higher 'G': Mango
Lower 'G': Banana
Subset 'B' to 'M': [Banana, Grape]
HeadSet 'G': [Apple, Banana]
TailSet 'G': [Grape, Mango, Orange]
Iterating sorted: Apple Banana Grape Mango Orange
Descending set: [Orange, Mango, Grape, Banana, Apple]
`),O=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Queue - FIFO (First In First Out)
        Queue<String> queue = new LinkedList<>();

        // Adding elements
        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        queue.offer("Fourth");

        System.out.println("Queue: " + queue);

        // Peek - view head without removing
        System.out.println("Peek: " + queue.peek());
        System.out.println("Queue after peek: " + queue);

        // Poll - remove and return head
        System.out.println("Poll: " + queue.poll());
        System.out.println("Queue after poll: " + queue);

        // Remove - remove head (throws exception if empty)
        System.out.println("Remove: " + queue.remove());
        System.out.println("Queue after remove: " + queue);

        // Element - view head (throws exception if empty)
        System.out.println("Element: " + queue.element());

        // PriorityQueue - elements by priority (natural order by default)
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        pq.offer(5);
        pq.offer(1);
        pq.offer(3);
        pq.offer(4);
        pq.offer(2);

        System.out.println("PriorityQueue: " + pq);
        System.out.println("Polling from PriorityQueue:");
        while(!pq.isEmpty()) {
            System.out.print(pq.poll() + " ");
        }
        System.out.println();
    }
}
`),F=l(`
Queue: [First, Second, Third, Fourth]
Peek: First
Queue after peek: [First, Second, Third, Fourth]
Poll: First
Queue after poll: [Second, Third, Fourth]
Remove: Second
Queue after remove: [Third, Fourth]
Element: Third
PriorityQueue: [1, 2, 3, 5, 4]
Polling from PriorityQueue:
1 2 3 4 5
`),k=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Collections utility class
        List<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(2);
        numbers.add(8);
        numbers.add(1);
        numbers.add(9);
        numbers.add(3);

        System.out.println("Original: " + numbers);

        // Sorting
        Collections.sort(numbers);
        System.out.println("Sorted: " + numbers);

        // Reverse
        Collections.reverse(numbers);
        System.out.println("Reversed: " + numbers);

        // Shuffle
        Collections.shuffle(numbers);
        System.out.println("Shuffled: " + numbers);

        // Max and Min
        System.out.println("Max: " + Collections.max(numbers));
        System.out.println("Min: " + Collections.min(numbers));

        // Binary Search (requires sorted)
        Collections.sort(numbers);
        System.out.println("Sorted for binary search: " + numbers);
        int index = Collections.binarySearch(numbers, 5);
        System.out.println("Index of 5: " + index);

        // Frequency
        System.out.println("Frequency of 5: " + Collections.frequency(numbers, 5));

        // Fill
        Collections.fill(numbers, 0);
        System.out.println("After fill with 0: " + numbers);

        // Copy
        List<Integer> copy = new ArrayList<>(Arrays.asList(0, 0, 0, 0, 0, 0));
        Collections.copy(copy, Arrays.asList(10, 20, 30, 40, 50, 60));
        System.out.println("After copy: " + copy);

        // Immutable collections
        List<Integer> unmodifiable = Collections.unmodifiableList(copy);
        System.out.println("Unmodifiable: " + unmodifiable);
        // unmodifiable.add(70); // Throws UnsupportedOperationException
    }
}
`),T=l(`
Original: [5, 2, 8, 1, 9, 3]
Sorted: [1, 2, 3, 5, 8, 9]
Reversed: [9, 8, 5, 3, 2, 1]
Shuffled: [2, 5, 9, 3, 1, 8]
Max: 9
Min: 1
Sorted for binary search: [1, 2, 3, 5, 8, 9]
Index of 5: 3
Frequency of 5: 1
After fill with 0: [0, 0, 0, 0, 0, 0]
After copy: [10, 20, 30, 40, 50, 60]
Unmodifiable: [10, 20, 30, 40, 50, 60]
`),w=l(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ArrayList vs LinkedList
        ArrayList<Integer> arrayList = new ArrayList<>();
        LinkedList<Integer> linkedList = new LinkedList<>();

        // Adding elements at the end
        long startTime = System.nanoTime();
        for(int i = 0; i < 100000; i++) {
            arrayList.add(i);
        }
        long endTime = System.nanoTime();
        System.out.println("ArrayList add (end): " + (endTime - startTime) + " ns");

        startTime = System.nanoTime();
        for(int i = 0; i < 100000; i++) {
            linkedList.add(i);
        }
        endTime = System.nanoTime();
        System.out.println("LinkedList add (end): " + (endTime - startTime) + " ns");
        System.out.println();

        // Adding elements at the beginning
        startTime = System.nanoTime();
        arrayList.add(0, 999);
        endTime = System.nanoTime();
        System.out.println("ArrayList add (beginning): " + (endTime - startTime) + " ns");

        startTime = System.nanoTime();
        linkedList.addFirst(999);
        endTime = System.nanoTime();
        System.out.println("LinkedList add (beginning): " + (endTime - startTime) + " ns");
        System.out.println();

        // Access by index
        startTime = System.nanoTime();
        int val1 = arrayList.get(50000);
        endTime = System.nanoTime();
        System.out.println("ArrayList get (index 50000): " + (endTime - startTime) + " ns");

        startTime = System.nanoTime();
        int val2 = linkedList.get(50000);
        endTime = System.nanoTime();
        System.out.println("LinkedList get (index 50000): " + (endTime - startTime) + " ns");
        System.out.println();

        System.out.println("When to use:");
        System.out.println("  ArrayList: Best for random access (get/set)");
        System.out.println("  LinkedList: Best for frequent insertions/removals at ends");
        System.out.println("  Use ArrayList by default unless you need LinkedList features");
    }
}
`),I=l(`
ArrayList add (end): 1500000 ns
LinkedList add (end): 2000000 ns

ArrayList add (beginning): 150000 ns
LinkedList add (beginning): 5000 ns

ArrayList get (index 50000): 5000 ns
LinkedList get (index 50000): 500000 ns

When to use:
  ArrayList: Best for random access (get/set)
  LinkedList: Best for frequent insertions/removals at ends
  Use ArrayList by default unless you need LinkedList features
`);return(yt,t)=>(q(),G(C,{title:"Java Programming",navigation:H(a).sections},{default:i(()=>[t[175]||(t[175]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Java Collections Framework ",-1)),n("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+Q(pt)),n("div",P,[n("p",U,[t[1]||(t[1]=e(" The ",-1)),s(r,null,{default:i(()=>[...t[0]||(t[0]=[e("Java Collections Framework",-1)])]),_:1}),t[2]||(t[2]=e(" provides a set of classes and interfaces for storing and manipulating groups of objects. It is one of the most important and commonly used parts of Java. ",-1))]),t[13]||(t[13]=n("p",{class:"mb-4"}," Why use Collections Framework? ",-1)),n("ul",E,[n("li",null,[s(r,null,{default:i(()=>[...t[3]||(t[3]=[e("Dynamic size",-1)])]),_:1}),t[4]||(t[4]=e(" - Unlike arrays, collections can grow dynamically ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[5]||(t[5]=[e("Built-in algorithms",-1)])]),_:1}),t[6]||(t[6]=e(" - Sorting, searching, etc. ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[7]||(t[7]=[e("Multiple implementations",-1)])]),_:1}),t[8]||(t[8]=e(" - Choose the right data structure ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[9]||(t[9]=[e("Type-safe",-1)])]),_:1}),t[10]||(t[10]=e(" - Using generics ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[11]||(t[11]=[e("Performance",-1)])]),_:1}),t[12]||(t[12]=e(" - Optimized implementations ",-1))])]),s(o,{code:d.value,language:"java"},null,8,["code"]),t[14]||(t[14]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:p.value},null,8,["output"])]),t[176]||(t[176]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Collection Framework Hierarchy ",-1)),n("div",z,[t[15]||(t[15]=n("p",{class:"mb-4"}," The Java Collections Framework has a well-defined hierarchy: ",-1)),s(o,{code:m.value,language:"java"},null,8,["code"]),t[16]||(t[16]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:y.value},null,8,["output"])]),t[177]||(t[177]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," List Interface - ArrayList ",-1)),n("div",j,[n("p",N,[s(r,null,{default:i(()=>[...t[17]||(t[17]=[e("ArrayList",-1)])]),_:1}),t[18]||(t[18]=e(" is a dynamic array implementation of the List interface. It maintains insertion order and allows duplicates. ",-1))]),t[32]||(t[32]=n("p",{class:"mb-4"},"Key features:",-1)),n("ul",K,[n("li",null,[t[20]||(t[20]=e("Maintains ",-1)),s(r,null,{default:i(()=>[...t[19]||(t[19]=[e("insertion order",-1)])]),_:1})]),n("li",null,[t[22]||(t[22]=e("Allows ",-1)),s(r,null,{default:i(()=>[...t[21]||(t[21]=[e("duplicates",-1)])]),_:1})]),n("li",null,[t[24]||(t[24]=e("Provides ",-1)),s(r,null,{default:i(()=>[...t[23]||(t[23]=[e("fast random access",-1)])]),_:1}),t[25]||(t[25]=e(" (O(1) for get/set) ",-1))]),n("li",null,[t[27]||(t[27]=e("Uses ",-1)),s(r,null,{default:i(()=>[...t[26]||(t[26]=[e("dynamic array",-1)])]),_:1}),t[28]||(t[28]=e(" internally ",-1))]),n("li",null,[t[30]||(t[30]=e("Slower for ",-1)),s(r,null,{default:i(()=>[...t[29]||(t[29]=[e("insertions/deletions",-1)])]),_:1}),t[31]||(t[31]=e(" in the middle ",-1))])]),s(o,{code:f.value,language:"java"},null,8,["code"]),t[33]||(t[33]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:g.value},null,8,["output"])]),t[178]||(t[178]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," List Interface - LinkedList ",-1)),n("div",D,[n("p",R,[s(r,null,{default:i(()=>[...t[34]||(t[34]=[e("LinkedList",-1)])]),_:1}),t[35]||(t[35]=e(" is a doubly-linked list implementation that implements both List and Queue. ",-1))]),t[51]||(t[51]=n("p",{class:"mb-4"},"Key features:",-1)),n("ul",J,[n("li",null,[t[37]||(t[37]=e("Maintains ",-1)),s(r,null,{default:i(()=>[...t[36]||(t[36]=[e("insertion order",-1)])]),_:1})]),n("li",null,[t[39]||(t[39]=e("Allows ",-1)),s(r,null,{default:i(()=>[...t[38]||(t[38]=[e("duplicates",-1)])]),_:1})]),n("li",null,[t[41]||(t[41]=e("Efficient for ",-1)),s(r,null,{default:i(()=>[...t[40]||(t[40]=[e("insertions/deletions",-1)])]),_:1}),t[42]||(t[42]=e(" at ends (O(1)) ",-1))]),n("li",null,[t[44]||(t[44]=e("Slower for ",-1)),s(r,null,{default:i(()=>[...t[43]||(t[43]=[e("random access",-1)])]),_:1}),t[45]||(t[45]=e(" (O(n) for get/set) ",-1))]),n("li",null,[t[48]||(t[48]=e("Implements ",-1)),s(r,null,{default:i(()=>[...t[46]||(t[46]=[e("Queue",-1)])]),_:1}),t[49]||(t[49]=e(" and ",-1)),s(r,null,{default:i(()=>[...t[47]||(t[47]=[e("Deque",-1)])]),_:1}),t[50]||(t[50]=e(" interfaces ",-1))])]),s(o,{code:S.value,language:"java"},null,8,["code"]),t[52]||(t[52]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:b.value},null,8,["output"])]),t[179]||(t[179]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Set Interface - HashSet ",-1)),n("div",V,[n("p",Z,[s(r,null,{default:i(()=>[...t[53]||(t[53]=[e("HashSet",-1)])]),_:1}),t[54]||(t[54]=e(" implements the Set interface and stores elements in a hash table. It does not maintain any order. ",-1))]),t[66]||(t[66]=n("p",{class:"mb-4"},"Key features:",-1)),n("ul",W,[n("li",null,[s(r,null,{default:i(()=>[...t[55]||(t[55]=[e("No duplicates",-1)])]),_:1}),t[56]||(t[56]=e(" - each element appears once ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[57]||(t[57]=[e("Unordered",-1)])]),_:1}),t[58]||(t[58]=e(" - no guaranteed order ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[59]||(t[59]=[e("Fast operations",-1)])]),_:1}),t[60]||(t[60]=e(" - O(1) for add, remove, contains ",-1))]),n("li",null,[t[62]||(t[62]=e("Allows ",-1)),s(r,null,{default:i(()=>[...t[61]||(t[61]=[e("null",-1)])]),_:1}),t[63]||(t[63]=e(" values ",-1))]),n("li",null,[t[65]||(t[65]=e("Good for ",-1)),s(r,null,{default:i(()=>[...t[64]||(t[64]=[e("membership testing",-1)])]),_:1})])]),s(o,{code:L.value,language:"java"},null,8,["code"]),t[67]||(t[67]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:x.value},null,8,["output"])]),t[180]||(t[180]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Set Interface - TreeSet ",-1)),n("div",$,[n("p",X,[s(r,null,{default:i(()=>[...t[68]||(t[68]=[e("TreeSet",-1)])]),_:1}),t[70]||(t[70]=e(" implements the Set interface and stores elements in a tree structure, keeping them ",-1)),s(r,null,{default:i(()=>[...t[69]||(t[69]=[e("sorted",-1)])]),_:1}),t[71]||(t[71]=e(" . ",-1))]),t[82]||(t[82]=n("p",{class:"mb-4"},"Key features:",-1)),n("ul",Y,[n("li",null,[s(r,null,{default:i(()=>[...t[72]||(t[72]=[e("Sorted",-1)])]),_:1}),t[73]||(t[73]=e(" - elements are stored in sorted order ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[74]||(t[74]=[e("No duplicates",-1)])]),_:1})]),n("li",null,[t[76]||(t[76]=e("Operations are ",-1)),s(r,null,{default:i(()=>[...t[75]||(t[75]=[e("O(log n)",-1)])]),_:1})]),n("li",null,[t[78]||(t[78]=e("Provides ",-1)),s(r,null,{default:i(()=>[...t[77]||(t[77]=[e("range operations",-1)])]),_:1}),t[79]||(t[79]=e(" (subSet, headSet, tailSet) ",-1))]),n("li",null,[t[81]||(t[81]=e("Implements ",-1)),s(r,null,{default:i(()=>[...t[80]||(t[80]=[e("NavigableSet",-1)])]),_:1})])]),s(o,{code:v.value,language:"java"},null,8,["code"]),t[83]||(t[83]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:A.value},null,8,["output"])]),t[181]||(t[181]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Queue Interface ",-1)),n("div",h,[n("p",_,[s(r,null,{default:i(()=>[...t[84]||(t[84]=[e("Queue",-1)])]),_:1}),t[86]||(t[86]=e(" represents a collection designed for holding elements prior to processing. It typically follows ",-1)),s(r,null,{default:i(()=>[...t[85]||(t[85]=[e("FIFO",-1)])]),_:1}),t[87]||(t[87]=e(" (First-In-First-Out) order. ",-1))]),t[92]||(t[92]=n("p",{class:"mb-4"},"Common implementations:",-1)),n("ul",c,[n("li",null,[s(r,null,{default:i(()=>[...t[88]||(t[88]=[e("LinkedList",-1)])]),_:1}),t[89]||(t[89]=e(" - Implements Queue interface ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[90]||(t[90]=[e("PriorityQueue",-1)])]),_:1}),t[91]||(t[91]=e(" - Elements by priority (natural order) ",-1))])]),s(o,{code:O.value,language:"java"},null,8,["code"]),t[93]||(t[93]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:F.value},null,8,["output"])]),t[182]||(t[182]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Collections Utility Class ",-1)),n("div",tt,[n("p",et,[t[96]||(t[96]=e(" The ",-1)),s(r,null,{default:i(()=>[...t[94]||(t[94]=[e("Collections",-1)])]),_:1}),t[97]||(t[97]=e(" class provides ",-1)),s(r,null,{default:i(()=>[...t[95]||(t[95]=[e("utility methods",-1)])]),_:1}),t[98]||(t[98]=e(" for working with collections. ",-1))]),t[113]||(t[113]=n("p",{class:"mb-4"},"Common methods:",-1)),n("ul",nt,[n("li",null,[s(r,null,{default:i(()=>[...t[99]||(t[99]=[e("sort()",-1)])]),_:1}),t[100]||(t[100]=e(" - Sorts a list ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[101]||(t[101]=[e("reverse()",-1)])]),_:1}),t[102]||(t[102]=e(" - Reverses order ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[103]||(t[103]=[e("shuffle()",-1)])]),_:1}),t[104]||(t[104]=e(" - Randomizes order ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[105]||(t[105]=[e("max()",-1)])]),_:1}),t[107]||(t[107]=e(" / ",-1)),s(r,null,{default:i(()=>[...t[106]||(t[106]=[e("min()",-1)])]),_:1}),t[108]||(t[108]=e(" - Finds extremes ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[109]||(t[109]=[e("binarySearch()",-1)])]),_:1}),t[110]||(t[110]=e(" - Binary search in sorted list ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[111]||(t[111]=[e("frequency()",-1)])]),_:1}),t[112]||(t[112]=e(" - Counts occurrences ",-1))])]),s(o,{code:k.value,language:"java"},null,8,["code"]),t[114]||(t[114]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:T.value},null,8,["output"])]),t[183]||(t[183]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," ArrayList vs LinkedList ",-1)),n("div",st,[n("p",it,[t[117]||(t[117]=e(" Choosing between ",-1)),s(r,null,{default:i(()=>[...t[115]||(t[115]=[e("ArrayList",-1)])]),_:1}),t[118]||(t[118]=e(" and ",-1)),s(r,null,{default:i(()=>[...t[116]||(t[116]=[e("LinkedList",-1)])]),_:1}),t[119]||(t[119]=e(" depends on your use case. ",-1))]),t[120]||(t[120]=n("div",{class:"overflow-x-auto mb-4"},[n("table",{class:"min-w-full bg-white border border-gray-300 text-sm"},[n("thead",null,[n("tr",{class:"bg-gray-100"},[n("th",{class:"border border-gray-300 px-4 py-2 text-left"},"Operation"),n("th",{class:"border border-gray-300 px-4 py-2 text-left"},"ArrayList"),n("th",{class:"border border-gray-300 px-4 py-2 text-left"},"LinkedList")])]),n("tbody",null,[n("tr",null,[n("td",{class:"border border-gray-300 px-4 py-2"},"get(index)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(1)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(n)")]),n("tr",null,[n("td",{class:"border border-gray-300 px-4 py-2"},"add(end)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(1)*"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(1)")]),n("tr",null,[n("td",{class:"border border-gray-300 px-4 py-2"},"add(beginning)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(n)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(1)")]),n("tr",null,[n("td",{class:"border border-gray-300 px-4 py-2"},"remove(end)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(1)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(1)")]),n("tr",null,[n("td",{class:"border border-gray-300 px-4 py-2"},"remove(beginning)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(n)"),n("td",{class:"border border-gray-300 px-4 py-2"},"O(1)")]),n("tr",null,[n("td",{class:"border border-gray-300 px-4 py-2"},"Memory overhead"),n("td",{class:"border border-gray-300 px-4 py-2"},"Lower"),n("td",{class:"border border-gray-300 px-4 py-2"},"Higher")])])])],-1)),t[121]||(t[121]=n("p",{class:"text-sm text-gray-500"},"* Amortized O(1), occasional O(n) when resizing",-1)),s(o,{code:w.value,language:"java"},null,8,["code"]),t[122]||(t[122]=n("p",{class:"mt-4"},"Output:",-1)),s(u,{output:I.value},null,8,["output"])]),t[184]||(t[184]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Collections ",-1)),n("div",rt,[n("div",lt,[t[135]||(t[135]=n("p",{class:"text-blue-700 font-semibold"},"Key Points:",-1)),n("ul",ot,[n("li",null,[t[124]||(t[124]=e("Use ",-1)),s(r,null,{default:i(()=>[...t[123]||(t[123]=[e("generics",-1)])]),_:1}),t[125]||(t[125]=e(" for type safety ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[126]||(t[126]=[e("ArrayList",-1)])]),_:1}),t[127]||(t[127]=e(" is the most commonly used List ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[128]||(t[128]=[e("HashSet",-1)])]),_:1}),t[129]||(t[129]=e(" is the most commonly used Set ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[130]||(t[130]=[e("HashMap",-1)])]),_:1}),t[131]||(t[131]=e(" is the most commonly used Map ",-1))]),n("li",null,[t[133]||(t[133]=e("Use ",-1)),s(r,null,{default:i(()=>[...t[132]||(t[132]=[e("Collections",-1)])]),_:1}),t[134]||(t[134]=e(" utility class for common operations ",-1))])])]),n("ul",ut,[n("li",null,[t[137]||(t[137]=e("Collections are ",-1)),s(r,null,{default:i(()=>[...t[136]||(t[136]=[e("dynamic",-1)])]),_:1}),t[138]||(t[138]=e(" in size ",-1))]),n("li",null,[t[140]||(t[140]=e("Use ",-1)),s(r,null,{default:i(()=>[...t[139]||(t[139]=[e("LinkedList",-1)])]),_:1}),t[141]||(t[141]=e(" for frequent insertions at ends ",-1))]),n("li",null,[t[143]||(t[143]=e("Use ",-1)),s(r,null,{default:i(()=>[...t[142]||(t[142]=[e("TreeSet",-1)])]),_:1}),t[144]||(t[144]=e(" for sorted unique elements ",-1))]),n("li",null,[t[146]||(t[146]=e("Use ",-1)),s(r,null,{default:i(()=>[...t[145]||(t[145]=[e("PriorityQueue",-1)])]),_:1}),t[147]||(t[147]=e(" for priority-based processing ",-1))]),n("li",null,[t[149]||(t[149]=e("Collections ",-1)),s(r,null,{default:i(()=>[...t[148]||(t[148]=[e("cannot store primitives",-1)])]),_:1}),t[150]||(t[150]=e(" directly (use wrapper classes) ",-1))]),n("li",null,[t[152]||(t[152]=e("Most collections are ",-1)),s(r,null,{default:i(()=>[...t[151]||(t[151]=[e("not thread-safe",-1)])]),_:1}),t[153]||(t[153]=e(" by default ",-1))])])]),t[185]||(t[185]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),n("div",at,[n("ul",dt,[n("li",null,[t[155]||(t[155]=e("Java Collections Framework provides ",-1)),s(r,null,{default:i(()=>[...t[154]||(t[154]=[e("data structures",-1)])]),_:1})]),n("li",null,[s(r,null,{default:i(()=>[...t[156]||(t[156]=[e("List",-1)])]),_:1}),t[157]||(t[157]=e(" - Ordered, allows duplicates ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[158]||(t[158]=[e("Set",-1)])]),_:1}),t[159]||(t[159]=e(" - No duplicates, unordered ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[160]||(t[160]=[e("Queue",-1)])]),_:1}),t[161]||(t[161]=e(" - FIFO or priority order ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[162]||(t[162]=[e("Map",-1)])]),_:1}),t[163]||(t[163]=e(" - Key-value pairs ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[164]||(t[164]=[e("ArrayList",-1)])]),_:1}),t[165]||(t[165]=e(" - Dynamic array, fast random access ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[166]||(t[166]=[e("LinkedList",-1)])]),_:1}),t[167]||(t[167]=e(" - Doubly-linked list, fast insertions ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[168]||(t[168]=[e("HashSet",-1)])]),_:1}),t[169]||(t[169]=e(" - Hash table, fast operations ",-1))]),n("li",null,[s(r,null,{default:i(()=>[...t[170]||(t[170]=[e("TreeSet",-1)])]),_:1}),t[171]||(t[171]=e(" - Sorted, no duplicates ",-1))]),n("li",null,[t[173]||(t[173]=e("Use ",-1)),s(r,null,{default:i(()=>[...t[172]||(t[172]=[e("Collections",-1)])]),_:1}),t[174]||(t[174]=e(" utility for common operations ",-1))])])])]),_:1},8,["navigation"]))}});export{vt as default};

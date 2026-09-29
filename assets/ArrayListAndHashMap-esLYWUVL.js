import{_ as O}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as l}from"./SpanHighlight-D5QJRDV8.js";import{C as a}from"./CodeBlock-DZMpBSrv.js";import{O as o}from"./OutputBlock-DUAjxao7.js";import{u as I}from"./javaProgramming-DvM3X4gn.js";import{d as P,h as E,i as n,s as R,o as D,a as e,t as j,q as r,g as s,r as i}from"./index-fUs2VaN6.js";const J={class:"text-gray-600 mb-6 text-lg"},K={class:"mb-4"},h={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},z={class:"list-disc list-inside text-gray-600 mt-2"},T={class:"text-gray-500 mb-6 text-lg"},V={class:"mb-4"},U={class:"list-disc list-inside mb-4"},W={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},N={class:"text-gray-500 mb-6 text-lg"},X={class:"list-disc list-inside mb-4"},Y={class:"text-gray-500 mb-6 text-lg"},Z={class:"mb-4"},q={class:"list-disc list-inside mb-4"},G={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},c={class:"list-disc list-inside mb-4"},_={class:"text-gray-500 mb-6 text-lg"},tt={class:"list-disc list-inside mb-4"},et={class:"text-gray-500 mb-6 text-lg"},st={class:"text-gray-500 mb-6 text-lg"},rt={class:"text-gray-500 mb-6 text-lg"},nt={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},lt={class:"list-disc list-inside text-gray-600"},it={class:"list-disc list-inside"},at={class:"text-gray-500 mb-6 text-lg"},ot={class:"list-disc list-inside"},ut="July 29, 2026",At=P({__name:"ArrayListAndHashMap",setup(pt){const u=I(),p=i(`
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

        System.out.println("ArrayList: " + fruits);
        System.out.println("Size: " + fruits.size());
        System.out.println("Is empty: " + fruits.isEmpty());

        // Accessing elements
        System.out.println("First element: " + fruits.get(0));
        System.out.println("Element at index 2: " + fruits.get(2));

        // Modifying elements
        fruits.set(1, "Mango");
        System.out.println("After setting index 1 to Mango: " + fruits);

        // Removing elements
        fruits.remove("Apple"); // Removes first occurrence
        System.out.println("After removing 'Apple': " + fruits);
        fruits.remove(1); // Removes by index
        System.out.println("After removing index 1: " + fruits);

        // Checking existence
        System.out.println("Contains 'Banana': " + fruits.contains("Banana"));
        System.out.println("Contains 'Mango': " + fruits.contains("Mango"));
        System.out.println("Index of 'Orange': " + fruits.indexOf("Orange"));

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
`),d=i(`
ArrayList: [Apple, Banana, Orange, Apple]
Size: 4
Is empty: false
First element: Apple
Element at index 2: Orange
After setting index 1 to Mango: [Apple, Mango, Orange, Apple]
After removing 'Apple': [Mango, Orange, Apple]
After removing index 1: [Mango, Apple]
Contains 'Banana': false
Contains 'Mango': true
Index of 'Orange': -1
Iterating: Mango Apple
After clear: []
Is empty: true
`),m=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ArrayList of Integers
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(30);
        numbers.add(40);
        System.out.println("Numbers: " + numbers);

        // Sum of all elements
        int sum = 0;
        for(int num : numbers) {
            sum += num;
        }
        System.out.println("Sum: " + sum);

        // ArrayList of Doubles
        ArrayList<Double> prices = new ArrayList<>();
        prices.add(19.99);
        prices.add(29.99);
        prices.add(39.99);
        System.out.println("Prices: " + prices);

        // ArrayList of Custom Objects
        ArrayList<Student> students = new ArrayList<>();
        students.add(new Student("Ralph", 20));
        students.add(new Student("Maria", 22));
        students.add(new Student("John", 19));

        System.out.println("Students:");
        for(Student s : students) {
            System.out.println("  " + s);
        }

        // ArrayList with initial capacity
        ArrayList<String> names = new ArrayList<>(100); // Capacity 100
        names.add("Alice");
        names.add("Bob");
        System.out.println("Names: " + names);
    }
}

class Student {
    private String name;
    private int age;

    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }

    @Override
    public String toString() {
        return name + " (age: " + age + ")";
    }
}
`),y=i(`
Numbers: [10, 20, 30, 40]
Sum: 100
Prices: [19.99, 29.99, 39.99]
Students:
  Ralph (age: 20)
  Maria (age: 22)
  John (age: 19)
Names: [Alice, Bob]
`),g=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();

        // add() - add elements
        list.add("A");
        list.add("B");
        list.add("C");
        System.out.println("After add: " + list);

        // add(index, element) - insert at position
        list.add(1, "X");
        System.out.println("After insert at index 1: " + list);

        // addAll() - add another collection
        ArrayList<String> more = new ArrayList<>();
        more.add("Y");
        more.add("Z");
        list.addAll(more);
        System.out.println("After addAll: " + list);

        // addAll(index, collection) - insert collection at position
        ArrayList<String> extra = new ArrayList<>();
        extra.add("P");
        extra.add("Q");
        list.addAll(2, extra);
        System.out.println("After addAll at index 2: " + list);

        // size() - get size
        System.out.println("Size: " + list.size());

        // get() - get element at index
        System.out.println("Element at index 3: " + list.get(3));

        // set() - replace element
        list.set(3, "R");
        System.out.println("After set index 3 to R: " + list);

        // indexOf() - find first occurrence
        System.out.println("Index of 'C': " + list.indexOf("C"));
        System.out.println("Index of 'Z': " + list.indexOf("Z"));

        // lastIndexOf() - find last occurrence
        list.add("A");
        System.out.println("After adding another A: " + list);
        System.out.println("Last index of 'A': " + list.lastIndexOf("A"));

        // contains() - check if contains
        System.out.println("Contains 'X': " + list.contains("X"));
        System.out.println("Contains 'W': " + list.contains("W"));

        // remove() - remove by index or object
        list.remove(0);
        System.out.println("After remove index 0: " + list);
        list.remove("X");
        System.out.println("After remove 'X': " + list);

        // removeAll() - remove all from another collection
        ArrayList<String> toRemove = new ArrayList<>();
        toRemove.add("P");
        toRemove.add("R");
        list.removeAll(toRemove);
        System.out.println("After removeAll: " + list);

        // retainAll() - keep only elements from another collection
        ArrayList<String> toKeep = new ArrayList<>();
        toKeep.add("C");
        toKeep.add("Y");
        list.retainAll(toKeep);
        System.out.println("After retainAll: " + list);

        // subList() - get portion of list
        List<String> sub = list.subList(0, 1);
        System.out.println("SubList: " + sub);

        // toArray() - convert to array
        String[] array = list.toArray(new String[0]);
        System.out.println("Array: " + Arrays.toString(array));

        // sort() - sort the list
        list.add("B");
        list.add("A");
        System.out.println("Before sort: " + list);
        Collections.sort(list);
        System.out.println("After sort: " + list);

        // clear() - remove all
        list.clear();
        System.out.println("After clear: " + list);
        System.out.println("Is empty: " + list.isEmpty());
    }
}
`),f=i(`
After add: [A, B, C]
After insert at index 1: [A, X, B, C]
After addAll: [A, X, B, C, Y, Z]
After addAll at index 2: [A, X, P, Q, B, C, Y, Z]
Size: 8
Element at index 3: Q
After set index 3 to R: [A, X, P, R, B, C, Y, Z]
Index of 'C': 5
Index of 'Z': 7
After adding another A: [A, X, P, R, B, C, Y, Z, A]
Last index of 'A': 8
Contains 'X': true
Contains 'W': false
After remove index 0: [X, P, R, B, C, Y, Z, A]
After remove 'X': [P, R, B, C, Y, Z, A]
After removeAll: [B, C, Y, Z, A]
After retainAll: [C, Y]
SubList: [C]
Array: [C, Y]
Before sort: [C, Y, B, A]
After sort: [A, B, C, Y]
After clear: []
Is empty: true
`),b=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Creating HashMap
        HashMap<String, Integer> ages = new HashMap<>();

        // Adding key-value pairs
        ages.put("Ralph", 25);
        ages.put("Maria", 30);
        ages.put("John", 22);
        ages.put("Sarah", 28);

        System.out.println("HashMap: " + ages);
        System.out.println("Size: " + ages.size());
        System.out.println("Is empty: " + ages.isEmpty());

        // Accessing values
        System.out.println("Ralph's age: " + ages.get("Ralph"));
        System.out.println("Maria's age: " + ages.get("Maria"));
        System.out.println("Unknown person: " + ages.get("Unknown"));

        // Checking existence
        System.out.println("Contains key 'John': " + ages.containsKey("John"));
        System.out.println("Contains key 'Peter': " + ages.containsKey("Peter"));
        System.out.println("Contains value 28: " + ages.containsValue(28));
        System.out.println("Contains value 99: " + ages.containsValue(99));

        // Modifying values
        ages.put("Ralph", 26); // Updates existing value
        System.out.println("After updating Ralph: " + ages);

        // putIfAbsent() - only if key doesn't exist
        ages.putIfAbsent("John", 99);
        ages.putIfAbsent("Peter", 35);
        System.out.println("After putIfAbsent: " + ages);

        // Removing entries
        ages.remove("Sarah");
        System.out.println("After removing Sarah: " + ages);
        ages.remove("John", 22); // Removes only if key-value pair matches
        System.out.println("After removing John (22): " + ages);

        // getOrDefault() - get value or default
        System.out.println("John's age: " + ages.getOrDefault("John", 0));
        System.out.println("Peter's age: " + ages.getOrDefault("Peter", 0));

        // Iterating over entries
        System.out.println("Iterating entries:");
        for(Map.Entry<String, Integer> entry : ages.entrySet()) {
            System.out.println("  " + entry.getKey() + " = " + entry.getValue());
        }

        // Clearing
        ages.clear();
        System.out.println("After clear: " + ages);
        System.out.println("Is empty: " + ages.isEmpty());
    }
}
`),S=i(`
HashMap: {Ralph=25, Sarah=28, John=22, Maria=30}
Size: 4
Is empty: false
Ralph's age: 25
Maria's age: 30
Unknown person: null
Contains key 'John': true
Contains key 'Peter': false
Contains value 28: true
Contains value 99: false
After updating Ralph: {Ralph=26, Sarah=28, John=22, Maria=30}
After putIfAbsent: {Ralph=26, Sarah=28, John=22, Maria=30, Peter=35}
After removing Sarah: {Ralph=26, John=22, Maria=30, Peter=35}
After removing John (22): {Ralph=26, Maria=30, Peter=35}
John's age: 0
Peter's age: 35
Iterating entries:
  Ralph = 26
  Peter = 35
  Maria = 30
After clear: {}
Is empty: true
`),A=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // HashMap with custom objects as values
        HashMap<String, Product> products = new HashMap<>();

        products.put("P001", new Product("Laptop", 999.99));
        products.put("P002", new Product("Mouse", 29.99));
        products.put("P003", new Product("Keyboard", 79.99));
        products.put("P004", new Product("Monitor", 299.99));

        System.out.println("Products:");
        for(Map.Entry<String, Product> entry : products.entrySet()) {
            System.out.println("  " + entry.getKey() + ": " + entry.getValue());
        }

        // Accessing product
        Product laptop = products.get("P001");
        System.out.println("Laptop details: " + laptop);

        // Updating product price
        Product p = products.get("P003");
        p.setPrice(89.99);
        System.out.println("After updating keyboard: " + products.get("P003"));

        // HashMap with custom objects as keys
        HashMap<Employee, String> departments = new HashMap<>();
        Employee emp1 = new Employee("E001", "Ralph");
        Employee emp2 = new Employee("E002", "Maria");
        Employee emp3 = new Employee("E003", "John");

        departments.put(emp1, "IT");
        departments.put(emp2, "HR");
        departments.put(emp3, "Finance");

        System.out.println("Departments:");
        for(Map.Entry<Employee, String> entry : departments.entrySet()) {
            System.out.println("  " + entry.getKey() + " -> " + entry.getValue());
        }

        // Access by employee
        System.out.println("Ralph's department: " + departments.get(emp1));

        // Key must override equals() and hashCode()
        Employee emp4 = new Employee("E001", "Ralph"); // Same as emp1
        System.out.println("Ralph's department (with new object): " + departments.get(emp4));
    }
}

class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    @Override
    public String toString() {
        return name + " ($" + price + ")";
    }
}

class Employee {
    private String id;
    private String name;

    public Employee(String id, String name) {
        this.id = id;
        this.name = name;
    }

    @Override
    public boolean equals(Object obj) {
        if(this == obj) return true;
        if(obj == null || getClass() != obj.getClass()) return false;
        Employee emp = (Employee) obj;
        return id.equals(emp.id);
    }

    @Override
    public int hashCode() {
        return id.hashCode();
    }

    @Override
    public String toString() {
        return name + " (" + id + ")";
    }
}
`),v=i(`
Products:
  P001: Laptop ($999.99)
  P002: Mouse ($29.99)
  P003: Keyboard ($79.99)
  P004: Monitor ($299.99)
Laptop details: Laptop ($999.99)
After updating keyboard: Keyboard ($89.99)
Departments:
  Ralph (E001) -> IT
  Maria (E002) -> HR
  John (E003) -> Finance
Ralph's department: IT
Ralph's department (with new object): IT
`),M=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();

        // put() - add key-value pairs
        scores.put("Alice", 85);
        scores.put("Bob", 92);
        scores.put("Charlie", 78);
        System.out.println("Initial: " + scores);

        // get() - get value by key
        System.out.println("Alice's score: " + scores.get("Alice"));
        System.out.println("David's score: " + scores.get("David"));

        // getOrDefault() - get or default
        System.out.println("David's score (default): " + scores.getOrDefault("David", 0));

        // keySet() - get all keys
        Set<String> keys = scores.keySet();
        System.out.println("Keys: " + keys);

        // values() - get all values
        Collection<Integer> values = scores.values();
        System.out.println("Values: " + values);

        // entrySet() - get all entries
        Set<Map.Entry<String, Integer>> entries = scores.entrySet();
        System.out.println("Entries: " + entries);

        // containsKey() / containsValue()
        System.out.println("Contains key 'Bob': " + scores.containsKey("Bob"));
        System.out.println("Contains value 92: " + scores.containsValue(92));

        // replace() - replace value
        scores.replace("Charlie", 80);
        System.out.println("After replace Charlie: " + scores);
        scores.replace("David", 100); // Key doesn't exist, no change
        System.out.println("After replace David: " + scores);

        // replace(key, oldValue, newValue) - replace only if matches
        scores.replace("Bob", 92, 95);
        System.out.println("After replacing Bob (92->95): " + scores);
        scores.replace("Bob", 92, 100); // Old value doesn't match
        System.out.println("After failing to replace Bob: " + scores);

        // compute() - compute value using function
        scores.compute("Alice", (k, v) -> v + 5);
        System.out.println("After compute Alice (+5): " + scores);

        // computeIfAbsent() - compute if key absent
        scores.computeIfAbsent("David", k -> 70);
        System.out.println("After computeIfAbsent David: " + scores);

        // computeIfPresent() - compute if key present
        scores.computeIfPresent("Charlie", (k, v) -> v * 2);
        System.out.println("After computeIfPresent Charlie (*2): " + scores);

        // merge() - merge with existing value
        scores.merge("Bob", 10, (old, newVal) -> old + newVal);
        System.out.println("After merge Bob (+10): " + scores);

        // putAll() - add all from another map
        HashMap<String, Integer> more = new HashMap<>();
        more.put("Eve", 88);
        more.put("Frank", 95);
        scores.putAll(more);
        System.out.println("After putAll: " + scores);

        // remove() - remove by key
        scores.remove("Frank");
        System.out.println("After remove Frank: " + scores);

        // remove(key, value) - remove only if key-value matches
        scores.remove("Eve", 88);
        System.out.println("After remove Eve (88): " + scores);
        scores.remove("Eve", 100); // Doesn't match, no removal
        System.out.println("After trying to remove Eve: " + scores);

        // forEach() - iterate using lambda
        System.out.println("forEach iteration:");
        scores.forEach((k, v) -> System.out.println("  " + k + " = " + v));

        // size() - get size
        System.out.println("Size: " + scores.size());

        // isEmpty() - check if empty
        System.out.println("Is empty: " + scores.isEmpty());

        // clear() - clear all
        scores.clear();
        System.out.println("After clear: " + scores);
    }
}
`),x=i(`
Initial: {Alice=85, Bob=92, Charlie=78}
Alice's score: 85
David's score: null
David's score (default): 0
Keys: [Alice, Bob, Charlie]
Values: [85, 92, 78]
Entries: [Alice=85, Bob=92, Charlie=78]
Contains key 'Bob': true
Contains value 92: true
After replace Charlie: {Alice=85, Bob=92, Charlie=80}
After replace David: {Alice=85, Bob=92, Charlie=80}
After replacing Bob (92->95): {Alice=85, Bob=95, Charlie=80}
After failing to replace Bob: {Alice=85, Bob=95, Charlie=80}
After compute Alice (+5): {Alice=90, Bob=95, Charlie=80}
After computeIfAbsent David: {Alice=90, Bob=95, Charlie=80, David=70}
After computeIfPresent Charlie (*2): {Alice=90, Bob=95, Charlie=160, David=70}
After merge Bob (+10): {Alice=90, Bob=105, Charlie=160, David=70}
After putAll: {Alice=90, Bob=105, Charlie=160, David=70, Frank=95, Eve=88}
After remove Frank: {Alice=90, Bob=105, Charlie=160, David=70, Eve=88}
After remove Eve (88): {Alice=90, Bob=105, Charlie=160, David=70}
After trying to remove Eve: {Alice=90, Bob=105, Charlie=160, David=70}
forEach iteration:
  Alice = 90
  Bob = 105
  Charlie = 160
  David = 70
Size: 4
Is empty: false
After clear: {}
`),C=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // HashMap - no order
        HashMap<String, Integer> hashMap = new HashMap<>();
        hashMap.put("Banana", 3);
        hashMap.put("Apple", 5);
        hashMap.put("Orange", 2);
        hashMap.put("Mango", 4);
        System.out.println("HashMap (no order): " + hashMap);

        // LinkedHashMap - maintains insertion order
        LinkedHashMap<String, Integer> linkedHashMap = new LinkedHashMap<>();
        linkedHashMap.put("Banana", 3);
        linkedHashMap.put("Apple", 5);
        linkedHashMap.put("Orange", 2);
        linkedHashMap.put("Mango", 4);
        System.out.println("LinkedHashMap (insertion order): " + linkedHashMap);

        // TreeMap - sorted by keys
        TreeMap<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("Banana", 3);
        treeMap.put("Apple", 5);
        treeMap.put("Orange", 2);
        treeMap.put("Mango", 4);
        System.out.println("TreeMap (sorted by key): " + treeMap);

        System.out.println();
        System.out.println("When to use:");
        System.out.println("  HashMap: General purpose, fastest");
        System.out.println("  LinkedHashMap: When insertion order matters");
        System.out.println("  TreeMap: When sorted order is needed");
    }
}
`),k=i(`
HashMap (no order): {Apple=5, Banana=3, Orange=2, Mango=4}
LinkedHashMap (insertion order): {Banana=3, Apple=5, Orange=2, Mango=4}
TreeMap (sorted by key): {Apple=5, Banana=3, Mango=4, Orange=2}

When to use:
  HashMap: General purpose, fastest
  LinkedHashMap: When insertion order matters
  TreeMap: When sorted order is needed
`),L=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ArrayList vs HashMap - Use cases

        // ArrayList - Store list of items
        ArrayList<String> names = new ArrayList<>();
        names.add("Ralph");
        names.add("Maria");
        names.add("John");
        names.add("Sarah");
        System.out.println("ArrayList (list of names): " + names);

        // Access by index
        System.out.println("Name at index 2: " + names.get(2));

        // Check if exists
        System.out.println("Contains 'John': " + names.contains("John"));
        System.out.println("Contains 'Peter': " + names.contains("Peter"));

        System.out.println();

        // HashMap - Store key-value pairs
        HashMap<String, String> contacts = new HashMap<>();
        contacts.put("Ralph", "ralph@email.com");
        contacts.put("Maria", "maria@email.com");
        contacts.put("John", "john@email.com");
        contacts.put("Sarah", "sarah@email.com");
        System.out.println("HashMap (email contacts): " + contacts);

        // Access by key
        System.out.println("Ralph's email: " + contacts.get("Ralph"));
        System.out.println("John's email: " + contacts.get("John"));

        // Check if exists
        System.out.println("Contains key 'Ralph': " + contacts.containsKey("Ralph"));
        System.out.println("Contains key 'Peter': " + contacts.containsKey("Peter"));

        System.out.println();
        System.out.println("When to use:");
        System.out.println("  ArrayList: When you need ordered list with duplicates");
        System.out.println("  HashMap: When you need fast lookup by key");
    }
}
`),H=i(`
ArrayList (list of names): [Ralph, Maria, John, Sarah]
Name at index 2: John
Contains 'John': true
Contains 'Peter': false

HashMap (email contacts): {Ralph=ralph@email.com, Sarah=sarah@email.com, John=john@email.com, Maria=maria@email.com}
Ralph's email: ralph@email.com
John's email: john@email.com
Contains key 'Ralph': true
Contains key 'Peter': false

When to use:
  ArrayList: When you need ordered list with duplicates
  HashMap: When you need fast lookup by key
`),B=i(`
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // ArrayList common operations
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9, 3, 7, 4, 6));
        System.out.println("Original list: " + list);

        // Sort
        Collections.sort(list);
        System.out.println("Sorted: " + list);

        // Reverse
        Collections.reverse(list);
        System.out.println("Reversed: " + list);

        // Shuffle
        Collections.shuffle(list);
        System.out.println("Shuffled: " + list);

        // Max and min
        System.out.println("Max: " + Collections.max(list));
        System.out.println("Min: " + Collections.min(list));

        // Binary search (needs sorted)
        Collections.sort(list);
        int index = Collections.binarySearch(list, 5);
        System.out.println("Sorted for search: " + list);
        System.out.println("Index of 5: " + index);

        System.out.println();

        // HashMap common operations
        HashMap<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 85);
        scores.put("Bob", 92);
        scores.put("Charlie", 78);
        scores.put("David", 95);

        System.out.println("Scores: " + scores);

        // Get all keys
        System.out.println("Keys: " + scores.keySet());

        // Get all values
        System.out.println("Values: " + scores.values());

        // Get all entries
        System.out.println("Entries: " + scores.entrySet());

        // Iterate
        System.out.println("Iterating:");
        for(Map.Entry<String, Integer> entry : scores.entrySet()) {
            System.out.println("  " + entry.getKey() + " = " + entry.getValue());
        }

        // Find max value
        int maxScore = Collections.max(scores.values());
        System.out.println("Max score: " + maxScore);

        // Find key with max value
        for(Map.Entry<String, Integer> entry : scores.entrySet()) {
            if(entry.getValue() == maxScore) {
                System.out.println("Top scorer: " + entry.getKey());
                break;
            }
        }
    }
}
`),w=i(`
Original list: [5, 2, 8, 1, 9, 3, 7, 4, 6]
Sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Reversed: [9, 8, 7, 6, 5, 4, 3, 2, 1]
Shuffled: [7, 2, 9, 8, 1, 4, 6, 5, 3]
Max: 9
Min: 1
Sorted for search: [1, 2, 3, 4, 5, 6, 7, 8, 9]
Index of 5: 4

Scores: {Bob=92, David=95, Alice=85, Charlie=78}
Keys: [Bob, David, Alice, Charlie]
Values: [92, 95, 85, 78]
Entries: [Bob=92, David=95, Alice=85, Charlie=78]
Iterating:
  Bob = 92
  David = 95
  Alice = 85
  Charlie = 78
Max score: 95
Top scorer: David
`);return(dt,t)=>(D(),E(O,{title:"Java Programming",navigation:R(u).sections},{default:n(()=>[t[156]||(t[156]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," ArrayList and HashMap ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+j(ut)),e("div",J,[e("p",K,[r(l,null,{default:n(()=>[...t[0]||(t[0]=[s("ArrayList",-1)])]),_:1}),t[2]||(t[2]=s(" and ",-1)),r(l,null,{default:n(()=>[...t[1]||(t[1]=[s("HashMap",-1)])]),_:1}),t[3]||(t[3]=s(" are two of the most frequently used classes in the Java Collections Framework. They provide efficient ways to store and access data in different scenarios. ",-1))]),e("div",h,[t[8]||(t[8]=e("p",{class:"text-blue-700 font-semibold"},"Quick Comparison:",-1)),e("ul",z,[e("li",null,[r(l,null,{default:n(()=>[...t[4]||(t[4]=[s("ArrayList",-1)])]),_:1}),t[5]||(t[5]=s(" - Ordered list, allows duplicates, access by index ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[6]||(t[6]=[s("HashMap",-1)])]),_:1}),t[7]||(t[7]=s(" - Key-value pairs, no duplicates, fast lookup by key ",-1))])])])]),t[157]||(t[157]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," ArrayList Basics ",-1)),e("div",T,[e("p",V,[r(l,null,{default:n(()=>[...t[9]||(t[9]=[s("ArrayList",-1)])]),_:1}),t[10]||(t[10]=s(" is a resizable array implementation of the List interface. It provides dynamic array functionality with O(1) random access. ",-1))]),t[20]||(t[20]=e("p",{class:"mb-4"},"Key features:",-1)),e("ul",U,[e("li",null,[r(l,null,{default:n(()=>[...t[11]||(t[11]=[s("Dynamic size",-1)])]),_:1}),t[12]||(t[12]=s(" - Grows automatically ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[13]||(t[13]=[s("Maintains order",-1)])]),_:1}),t[14]||(t[14]=s(" - Insertion order preserved ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[15]||(t[15]=[s("Allows duplicates",-1)])]),_:1})]),e("li",null,[r(l,null,{default:n(()=>[...t[16]||(t[16]=[s("Fast random access",-1)])]),_:1}),t[17]||(t[17]=s(" - O(1) for get/set ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[18]||(t[18]=[s("Slower insertions/removals",-1)])]),_:1}),t[19]||(t[19]=s(" in middle ",-1))])]),r(a,{code:p.value,language:"java"},null,8,["code"]),t[21]||(t[21]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:d.value},null,8,["output"])]),t[158]||(t[158]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," ArrayList with Different Types ",-1)),e("div",W,[e("p",F,[t[23]||(t[23]=s(" ArrayList can store any type of object, including custom objects. Use ",-1)),r(l,null,{default:n(()=>[...t[22]||(t[22]=[s("generics",-1)])]),_:1}),t[24]||(t[24]=s(" to specify the type. ",-1))]),r(a,{code:m.value,language:"java"},null,8,["code"]),t[25]||(t[25]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:y.value},null,8,["output"])]),t[159]||(t[159]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," ArrayList Methods ",-1)),e("div",N,[t[40]||(t[40]=e("p",{class:"mb-4"}," Common ArrayList methods for managing elements: ",-1)),e("ul",X,[e("li",null,[r(l,null,{default:n(()=>[...t[26]||(t[26]=[s("add()",-1)])]),_:1}),t[27]||(t[27]=s(" - Add elements ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[28]||(t[28]=[s("get()",-1)])]),_:1}),t[29]||(t[29]=s(" - Access elements by index ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[30]||(t[30]=[s("set()",-1)])]),_:1}),t[31]||(t[31]=s(" - Modify elements ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[32]||(t[32]=[s("remove()",-1)])]),_:1}),t[33]||(t[33]=s(" - Remove elements ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[34]||(t[34]=[s("contains()",-1)])]),_:1}),t[35]||(t[35]=s(" - Check existence ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[36]||(t[36]=[s("indexOf()",-1)])]),_:1}),t[37]||(t[37]=s(" - Find position ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[38]||(t[38]=[s("sort()",-1)])]),_:1}),t[39]||(t[39]=s(" - Sort the list ",-1))])]),r(a,{code:g.value,language:"java"},null,8,["code"]),t[41]||(t[41]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:f.value},null,8,["output"])]),t[160]||(t[160]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," HashMap Basics ",-1)),e("div",Y,[e("p",Z,[r(l,null,{default:n(()=>[...t[42]||(t[42]=[s("HashMap",-1)])]),_:1}),t[44]||(t[44]=s(" is a hash table-based implementation of the Map interface. It stores ",-1)),r(l,null,{default:n(()=>[...t[43]||(t[43]=[s("key-value pairs",-1)])]),_:1}),t[45]||(t[45]=s(" and provides O(1) average time complexity for operations. ",-1))]),t[56]||(t[56]=e("p",{class:"mb-4"},"Key features:",-1)),e("ul",q,[e("li",null,[r(l,null,{default:n(()=>[...t[46]||(t[46]=[s("Key-value pairs",-1)])]),_:1})]),e("li",null,[r(l,null,{default:n(()=>[...t[47]||(t[47]=[s("No duplicates",-1)])]),_:1}),t[48]||(t[48]=s(" - Each key appears once ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[49]||(t[49]=[s("Fast lookup",-1)])]),_:1}),t[50]||(t[50]=s(" - O(1) for get/put ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[51]||(t[51]=[s("Unordered",-1)])]),_:1}),t[52]||(t[52]=s(" - No guaranteed order ",-1))]),e("li",null,[t[54]||(t[54]=s("Allows ",-1)),r(l,null,{default:n(()=>[...t[53]||(t[53]=[s("null",-1)])]),_:1}),t[55]||(t[55]=s(" keys and values ",-1))])]),r(a,{code:b.value,language:"java"},null,8,["code"]),t[57]||(t[57]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:S.value},null,8,["output"])]),t[161]||(t[161]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," HashMap with Custom Objects ",-1)),e("div",G,[e("p",$,[t[61]||(t[61]=s(" HashMap can store ",-1)),r(l,null,{default:n(()=>[...t[58]||(t[58]=[s("custom objects",-1)])]),_:1}),t[62]||(t[62]=s(" as values or keys. When using custom objects as keys, ",-1)),r(l,null,{default:n(()=>[...t[59]||(t[59]=[s("equals()",-1)])]),_:1}),t[63]||(t[63]=s(" and ",-1)),r(l,null,{default:n(()=>[...t[60]||(t[60]=[s("hashCode()",-1)])]),_:1}),t[64]||(t[64]=s(" must be properly overridden. ",-1))]),r(a,{code:A.value,language:"java"},null,8,["code"]),t[65]||(t[65]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:v.value},null,8,["output"])]),t[162]||(t[162]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," HashMap Methods ",-1)),e("div",Q,[t[85]||(t[85]=e("p",{class:"mb-4"}," Common HashMap methods for working with key-value pairs: ",-1)),e("ul",c,[e("li",null,[r(l,null,{default:n(()=>[...t[66]||(t[66]=[s("put()",-1)])]),_:1}),t[67]||(t[67]=s(" - Add key-value pairs ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[68]||(t[68]=[s("get()",-1)])]),_:1}),t[69]||(t[69]=s(" - Get value by key ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[70]||(t[70]=[s("remove()",-1)])]),_:1}),t[71]||(t[71]=s(" - Remove entry ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[72]||(t[72]=[s("keySet()",-1)])]),_:1}),t[73]||(t[73]=s(" - Get all keys ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[74]||(t[74]=[s("values()",-1)])]),_:1}),t[75]||(t[75]=s(" - Get all values ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[76]||(t[76]=[s("entrySet()",-1)])]),_:1}),t[77]||(t[77]=s(" - Get all entries ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[78]||(t[78]=[s("containsKey()",-1)])]),_:1}),t[80]||(t[80]=s(" / ",-1)),r(l,null,{default:n(()=>[...t[79]||(t[79]=[s("containsValue()",-1)])]),_:1})]),e("li",null,[r(l,null,{default:n(()=>[...t[81]||(t[81]=[s("compute()",-1)])]),_:1}),t[82]||(t[82]=s(" - Compute value using function ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[83]||(t[83]=[s("merge()",-1)])]),_:1}),t[84]||(t[84]=s(" - Merge with existing value ",-1))])]),r(a,{code:M.value,language:"java"},null,8,["code"]),t[86]||(t[86]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:x.value},null,8,["output"])]),t[163]||(t[163]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," HashMap vs TreeMap vs LinkedHashMap ",-1)),e("div",_,[t[93]||(t[93]=e("p",{class:"mb-4"}," Different Map implementations have different ordering characteristics: ",-1)),e("ul",tt,[e("li",null,[r(l,null,{default:n(()=>[...t[87]||(t[87]=[s("HashMap",-1)])]),_:1}),t[88]||(t[88]=s(" - No guaranteed order, fastest performance ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[89]||(t[89]=[s("LinkedHashMap",-1)])]),_:1}),t[90]||(t[90]=s(" - Maintains insertion order ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[91]||(t[91]=[s("TreeMap",-1)])]),_:1}),t[92]||(t[92]=s(" - Sorted by keys (natural order or comparator) ",-1))])]),r(a,{code:C.value,language:"java"},null,8,["code"]),t[94]||(t[94]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:k.value},null,8,["output"])]),t[164]||(t[164]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," ArrayList vs HashMap - When to Use ",-1)),e("div",et,[t[95]||(t[95]=e("div",{class:"overflow-x-auto mb-4"},[e("table",{class:"min-w-full bg-white border border-gray-300 text-sm"},[e("thead",null,[e("tr",{class:"bg-gray-100"},[e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"Feature"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"ArrayList"),e("th",{class:"border border-gray-300 px-4 py-2 text-left"},"HashMap")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"},"Data structure"),e("td",{class:"border border-gray-300 px-4 py-2"},"Dynamic array"),e("td",{class:"border border-gray-300 px-4 py-2"},"Hash table")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"},"Stores"),e("td",{class:"border border-gray-300 px-4 py-2"},"Elements (values)"),e("td",{class:"border border-gray-300 px-4 py-2"},"Key-value pairs")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"},"Order"),e("td",{class:"border border-gray-300 px-4 py-2"},"Maintains insertion order"),e("td",{class:"border border-gray-300 px-4 py-2"},"No guaranteed order")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"},"Duplicates"),e("td",{class:"border border-gray-300 px-4 py-2"},"Allows duplicates"),e("td",{class:"border border-gray-300 px-4 py-2"},"Unique keys")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"},"Access"),e("td",{class:"border border-gray-300 px-4 py-2"},"By index"),e("td",{class:"border border-gray-300 px-4 py-2"},"By key")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"},"Performance"),e("td",{class:"border border-gray-300 px-4 py-2"},"O(1) for get/set"),e("td",{class:"border border-gray-300 px-4 py-2"},"O(1) for get/put")]),e("tr",null,[e("td",{class:"border border-gray-300 px-4 py-2"},"Use case"),e("td",{class:"border border-gray-300 px-4 py-2"},"List of items"),e("td",{class:"border border-gray-300 px-4 py-2"},"Key-value lookups")])])])],-1)),r(a,{code:L.value,language:"java"},null,8,["code"]),t[96]||(t[96]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:H.value},null,8,["output"])]),t[165]||(t[165]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Common Operations ",-1)),e("div",st,[t[97]||(t[97]=e("p",{class:"mb-4"}," Common operations performed on ArrayList and HashMap: ",-1)),r(a,{code:B.value,language:"java"},null,8,["code"]),t[98]||(t[98]=e("p",{class:"mt-4"},"Output:",-1)),r(o,{output:w.value},null,8,["output"])]),t[166]||(t[166]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes ",-1)),e("div",rt,[e("div",nt,[t[120]||(t[120]=e("p",{class:"text-blue-700 font-semibold"},"Key Points:",-1)),e("ul",lt,[e("li",null,[t[101]||(t[101]=s("ArrayList is ",-1)),r(l,null,{default:n(()=>[...t[99]||(t[99]=[s("ordered",-1)])]),_:1}),t[102]||(t[102]=s(" and allows ",-1)),r(l,null,{default:n(()=>[...t[100]||(t[100]=[s("duplicates",-1)])]),_:1})]),e("li",null,[t[105]||(t[105]=s("HashMap is ",-1)),r(l,null,{default:n(()=>[...t[103]||(t[103]=[s("unordered",-1)])]),_:1}),t[106]||(t[106]=s(" and has ",-1)),r(l,null,{default:n(()=>[...t[104]||(t[104]=[s("unique keys",-1)])]),_:1})]),e("li",null,[t[108]||(t[108]=s("Use ",-1)),r(l,null,{default:n(()=>[...t[107]||(t[107]=[s("generics",-1)])]),_:1}),t[109]||(t[109]=s(" for type safety ",-1))]),e("li",null,[t[112]||(t[112]=s("HashMap keys must override ",-1)),r(l,null,{default:n(()=>[...t[110]||(t[110]=[s("equals()",-1)])]),_:1}),t[113]||(t[113]=s(" and ",-1)),r(l,null,{default:n(()=>[...t[111]||(t[111]=[s("hashCode()",-1)])]),_:1})]),e("li",null,[t[115]||(t[115]=s("ArrayList is ",-1)),r(l,null,{default:n(()=>[...t[114]||(t[114]=[s("not synchronized",-1)])]),_:1}),t[116]||(t[116]=s(" (use CopyOnWriteArrayList for thread-safe) ",-1))]),e("li",null,[t[118]||(t[118]=s("HashMap is ",-1)),r(l,null,{default:n(()=>[...t[117]||(t[117]=[s("not synchronized",-1)])]),_:1}),t[119]||(t[119]=s(" (use ConcurrentHashMap for thread-safe) ",-1))])])]),e("ul",it,[t[131]||(t[131]=e("li",null,"ArrayList initial capacity can be specified for performance",-1)),t[132]||(t[132]=e("li",null,"HashMap initial capacity and load factor affect performance",-1)),e("li",null,[t[122]||(t[122]=s("Use ",-1)),r(l,null,{default:n(()=>[...t[121]||(t[121]=[s("Collections.synchronizedList()",-1)])]),_:1}),t[123]||(t[123]=s(" for synchronized ArrayList ",-1))]),e("li",null,[t[125]||(t[125]=s("Use ",-1)),r(l,null,{default:n(()=>[...t[124]||(t[124]=[s("Collections.synchronizedMap()",-1)])]),_:1}),t[126]||(t[126]=s(" for synchronized HashMap ",-1))]),e("li",null,[t[129]||(t[129]=s("ArrayList is ",-1)),r(l,null,{default:n(()=>[...t[127]||(t[127]=[s("indexed",-1)])]),_:1}),t[130]||(t[130]=s(" , HashMap is ",-1)),r(l,null,{default:n(()=>[...t[128]||(t[128]=[s("keyed",-1)])]),_:1})])])]),t[167]||(t[167]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),e("div",at,[e("ul",ot,[e("li",null,[r(l,null,{default:n(()=>[...t[133]||(t[133]=[s("ArrayList",-1)])]),_:1}),t[134]||(t[134]=s(" - Dynamic array, ordered, allows duplicates ",-1))]),e("li",null,[r(l,null,{default:n(()=>[...t[135]||(t[135]=[s("HashMap",-1)])]),_:1}),t[136]||(t[136]=s(" - Key-value pairs, unordered, unique keys ",-1))]),e("li",null,[t[138]||(t[138]=s("ArrayList provides ",-1)),r(l,null,{default:n(()=>[...t[137]||(t[137]=[s("O(1)",-1)])]),_:1}),t[139]||(t[139]=s(" random access ",-1))]),e("li",null,[t[141]||(t[141]=s("HashMap provides ",-1)),r(l,null,{default:n(()=>[...t[140]||(t[140]=[s("O(1)",-1)])]),_:1}),t[142]||(t[142]=s(" key-based access ",-1))]),e("li",null,[t[144]||(t[144]=s("Use ArrayList for ",-1)),r(l,null,{default:n(()=>[...t[143]||(t[143]=[s("lists of items",-1)])]),_:1})]),e("li",null,[t[146]||(t[146]=s("Use HashMap for ",-1)),r(l,null,{default:n(()=>[...t[145]||(t[145]=[s("key-value lookups",-1)])]),_:1})]),e("li",null,[t[148]||(t[148]=s("Choose ",-1)),r(l,null,{default:n(()=>[...t[147]||(t[147]=[s("LinkedHashMap",-1)])]),_:1}),t[149]||(t[149]=s(" for insertion order ",-1))]),e("li",null,[t[151]||(t[151]=s("Choose ",-1)),r(l,null,{default:n(()=>[...t[150]||(t[150]=[s("TreeMap",-1)])]),_:1}),t[152]||(t[152]=s(" for sorted order ",-1))]),e("li",null,[t[154]||(t[154]=s("Both are ",-1)),r(l,null,{default:n(()=>[...t[153]||(t[153]=[s("fundamental",-1)])]),_:1}),t[155]||(t[155]=s(" to Java programming ",-1))])])])]),_:1},8,["navigation"]))}});export{At as default};

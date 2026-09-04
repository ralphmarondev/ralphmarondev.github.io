import{_ as j}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as r}from"./SpanHighlight-C-B7JT-9.js";import{C as i}from"./CodeBlock-DXevIYip.js";import{O as a}from"./OutputBlock-DW4hv_11.js";import{u as O}from"./javaProgramming-Pq2XLaCP.js";import{d as M,r as s,p as A,l as e,m as B,o as E,a as n,t as N,b as o,k as l}from"./index-DaKFBQPl.js";const D={class:"text-gray-600 mb-6 text-lg"},U={class:"mb-4"},J={class:"list-disc list-inside mb-4"},R={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},T={class:"text-gray-500 mb-6 text-lg"},z={class:"mb-4"},V={class:"text-gray-500 mb-6 text-lg"},L={class:"mb-4"},F={class:"text-gray-500 mb-6 text-lg"},K={class:"mb-4"},W={class:"text-gray-500 mb-6 text-lg"},Y={class:"mb-4"},G={class:"text-gray-500 mb-6 text-lg"},H={class:"mb-4"},h={class:"text-gray-500 mb-6 text-lg"},q={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Z={class:"text-gray-500 mb-6 text-lg"},_={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},tt={class:"list-disc list-inside text-gray-600"},ot={class:"list-disc list-inside"},nt={class:"text-gray-500 mb-6 text-lg"},lt={class:"list-disc list-inside"},et="July 29, 2026",gt=M({__name:"Constructors",setup(rt){const u=O(),d=s(`
// Car.java
public class Car {
    String model;
    String color;
    int year;

    // Default constructor (provided by Java if not defined)
    // public Car() { }

    void displayInfo() {
        System.out.println("Model: " + model);
        System.out.println("Color: " + color);
        System.out.println("Year: " + year);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Default constructor is called
        Car car = new Car();

        // Default values
        System.out.println("Default values:");
        car.displayInfo();

        // Set values manually
        car.model = "Toyota";
        car.color = "Red";
        car.year = 2023;

        System.out.println("After setting values:");
        car.displayInfo();
    }
}
`),p=s(`
Default values:
Model: null
Color: null
Year: 0
After setting values:
Model: Toyota
Color: Red
Year: 2023
`),m=s(`
// Student.java
public class Student {
    String name;
    int age;
    String course;

    // Parameterized constructor
    Student(String name, int age, String course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Course: " + course);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Creating objects using parameterized constructor
        Student student1 = new Student("Ralph", 20, "Computer Science");
        Student student2 = new Student("Maria", 22, "Engineering");
        Student student3 = new Student("John", 19, "Mathematics");

        System.out.println("Student Details:");
        System.out.println();
        student1.displayInfo();
        student2.displayInfo();
        student3.displayInfo();
    }
}
`),g=s(`
Student Details:

Name: Ralph
Age: 20
Course: Computer Science
-----------
Name: Maria
Age: 22
Course: Engineering
-----------
Name: John
Age: 19
Course: Mathematics
-----------
`),y=s(`
// Book.java
public class Book {
    String title;
    String author;
    double price;
    int pages;

    // Constructor with all parameters
    Book(String title, String author, double price, int pages) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.pages = pages;
    }

    // Constructor with 3 parameters
    Book(String title, String author, double price) {
        this(title, author, price, 0); // Calling another constructor
    }

    // Constructor with 2 parameters
    Book(String title, String author) {
        this(title, author, 0.0, 0);
    }

    // Default constructor
    Book() {
        this("Unknown", "Unknown", 0.0, 0);
    }

    void displayInfo() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: $" + price);
        System.out.println("Pages: " + pages);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Book book1 = new Book("Java Programming", "John Doe", 49.99, 500);
        Book book2 = new Book("Data Structures", "Jane Smith", 39.95);
        Book book3 = new Book("Algorithms", "Bob Johnson");
        Book book4 = new Book();

        System.out.println("Book 1 (All parameters):");
        book1.displayInfo();

        System.out.println("Book 2 (3 parameters):");
        book2.displayInfo();

        System.out.println("Book 3 (2 parameters):");
        book3.displayInfo();

        System.out.println("Book 4 (Default):");
        book4.displayInfo();
    }
}
`),f=s(`
Book 1 (All parameters):
Title: Java Programming
Author: John Doe
Price: $49.99
Pages: 500
-----------
Book 2 (3 parameters):
Title: Data Structures
Author: Jane Smith
Price: $39.95
Pages: 0
-----------
Book 3 (2 parameters):
Title: Algorithms
Author: Bob Johnson
Price: $0.0
Pages: 0
-----------
Book 4 (Default):
Title: Unknown
Author: Unknown
Price: $0.0
Pages: 0
-----------
`),b=s(`
// Employee.java
public class Employee {
    private String name;
    private int age;
    private double salary;

    // Constructor with validation
    Employee(String name, int age, double salary) {
        // Validate name
        if(name == null || name.trim().isEmpty()) {
            this.name = "Unknown";
            System.out.println("Invalid name, using default");
        } else {
            this.name = name;
        }

        // Validate age
        if(age < 18 || age > 65) {
            this.age = 25;
            System.out.println("Invalid age, using default (25)");
        } else {
            this.age = age;
        }

        // Validate salary
        if(salary < 0) {
            this.salary = 30000;
            System.out.println("Invalid salary, using default (30000)");
        } else {
            this.salary = salary;
        }
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Salary: $" + salary);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Valid Employee:");
        Employee emp1 = new Employee("Alice Johnson", 30, 55000);
        emp1.displayInfo();

        System.out.println("Invalid Employee:");
        Employee emp2 = new Employee("", 16, -1000);
        emp2.displayInfo();

        System.out.println("Employee with valid data:");
        Employee emp3 = new Employee("Bob Smith", 25, 48000);
        emp3.displayInfo();
    }
}
`),S=s(`
Valid Employee:
Name: Alice Johnson
Age: 30
Salary: $55000.0
-----------
Invalid Employee:
Invalid name, using default
Invalid age, using default (25)
Invalid salary, using default (30000)
Name: Unknown
Age: 25
Salary: $30000.0
-----------
Employee with valid data:
Name: Bob Smith
Age: 25
Salary: $48000.0
-----------
`),c=s(`
// Rectangle.java
public class Rectangle {
    double length;
    double width;

    // Constructor with parameters
    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    // Copy constructor
    Rectangle(Rectangle other) {
        this.length = other.length;
        this.width = other.width;
    }

    double calculateArea() {
        return length * width;
    }

    double calculatePerimeter() {
        return 2 * (length + width);
    }

    void displayInfo() {
        System.out.println("Length: " + length);
        System.out.println("Width: " + width);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Original rectangle
        Rectangle rect1 = new Rectangle(5.0, 3.0);

        // Copy using copy constructor
        Rectangle rect2 = new Rectangle(rect1);

        // Modify original
        rect1.length = 10.0;

        System.out.println("Original Rectangle (modified):");
        rect1.displayInfo();

        System.out.println("Copied Rectangle (unchanged):");
        rect2.displayInfo();
    }
}
`),v=s(`
Original Rectangle (modified):
Length: 10.0
Width: 3.0
Area: 30.0
Perimeter: 26.0
-----------
Copied Rectangle (unchanged):
Length: 5.0
Width: 3.0
Area: 15.0
Perimeter: 16.0
-----------
`),C=s(`
// Product.java
public class Product {
    String name;
    String category;
    double price;
    int stock;

    // Constructor with all fields
    Product(String name, String category, double price, int stock) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
        System.out.println("Full constructor called");
    }

    // Constructor with 3 fields
    Product(String name, String category, double price) {
        this(name, category, price, 0);
        System.out.println("3-parameter constructor called");
    }

    // Constructor with 2 fields
    Product(String name, String category) {
        this(name, category, 0.0);
        System.out.println("2-parameter constructor called");
    }

    // Constructor with 1 field
    Product(String name) {
        this(name, "General");
        System.out.println("1-parameter constructor called");
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Category: " + category);
        System.out.println("Price: $" + price);
        System.out.println("Stock: " + stock);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Creating products with different constructors:");
        System.out.println();

        Product p1 = new Product("Laptop");
        p1.displayInfo();

        Product p2 = new Product("Mouse", "Electronics");
        p2.displayInfo();

        Product p3 = new Product("Keyboard", "Electronics", 79.99);
        p3.displayInfo();

        Product p4 = new Product("Monitor", "Electronics", 299.99, 10);
        p4.displayInfo();
    }
}
`),w=s(`
Creating products with different constructors:

Full constructor called
3-parameter constructor called
2-parameter constructor called
1-parameter constructor called
Name: Laptop
Category: General
Price: $0.0
Stock: 0
-----------
Full constructor called
3-parameter constructor called
2-parameter constructor called
Name: Mouse
Category: Electronics
Price: $0.0
Stock: 0
-----------
Full constructor called
3-parameter constructor called
Name: Keyboard
Category: Electronics
Price: $79.99
Stock: 0
-----------
Full constructor called
Name: Monitor
Category: Electronics
Price: $299.99
Stock: 10
-----------
`),x=s(`
// MathUtils.java
public class MathUtils {
    // Private constructor - prevents instantiation
    private MathUtils() {
        System.out.println("Private constructor called");
    }

    // Static methods only
    public static int add(int a, int b) {
        return a + b;
    }

    public static int subtract(int a, int b) {
        return a - b;
    }

    public static int multiply(int a, int b) {
        return a * b;
    }

    public static double divide(int a, int b) {
        if(b == 0) {
            System.out.println("Cannot divide by zero");
            return 0;
        }
        return (double) a / b;
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Cannot create object of MathUtils
        // MathUtils utils = new MathUtils(); // Error!

        // Use static methods directly
        System.out.println("Using static methods without creating object:");
        System.out.println("10 + 5 = " + MathUtils.add(10, 5));
        System.out.println("10 - 5 = " + MathUtils.subtract(10, 5));
        System.out.println("10 * 5 = " + MathUtils.multiply(10, 5));
        System.out.println("10 / 5 = " + MathUtils.divide(10, 5));
    }
}
`),I=s(`
Using static methods without creating object:
10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2.0
`),k=s(`
// Order.java
public class Order {
    int orderId;
    String customerName;
    double totalAmount;
    String status;

    // Constructor with all fields
    Order(int orderId, String customerName, double totalAmount, String status) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.totalAmount = totalAmount;
        this.status = status;
        System.out.println("Order created with ID: " + orderId);
    }

    // Constructor with 3 fields (default status)
    Order(int orderId, String customerName, double totalAmount) {
        this(orderId, customerName, totalAmount, "Pending");
        System.out.println("Status set to default: Pending");
    }

    // Constructor with 2 fields (default status and total)
    Order(int orderId, String customerName) {
        this(orderId, customerName, 0.0);
        System.out.println("Total amount set to default: 0.0");
    }

    void displayInfo() {
        System.out.println("Order ID: " + orderId);
        System.out.println("Customer: " + customerName);
        System.out.println("Total: $" + totalAmount);
        System.out.println("Status: " + status);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Creating orders:");
        System.out.println();

        Order order1 = new Order(1001, "Ralph", 150.50, "Shipped");
        order1.displayInfo();

        Order order2 = new Order(1002, "Maria", 89.99);
        order2.displayInfo();

        Order order3 = new Order(1003, "John");
        order3.displayInfo();
    }
}
`),P=s(`
Creating orders:

Order created with ID: 1001
Order ID: 1001
Customer: Ralph
Total: $150.5
Status: Shipped
-----------
Order created with ID: 1002
Status set to default: Pending
Order ID: 1002
Customer: Maria
Total: $89.99
Status: Pending
-----------
Order created with ID: 1003
Status set to default: Pending
Total amount set to default: 0.0
Order ID: 1003
Customer: John
Total: $0.0
Status: Pending
-----------
`);return(st,t)=>(E(),A(j,{title:"Java Programming",navigation:B(u).sections},{default:e(()=>[t[100]||(t[100]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Constructors in Java ",-1)),n("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+N(et)),n("div",D,[n("p",U,[t[3]||(t[3]=o(" A ",-1)),l(r,null,{default:e(()=>[...t[0]||(t[0]=[o("constructor",-1)])]),_:1}),t[4]||(t[4]=o(" is a special method that is ",-1)),l(r,null,{default:e(()=>[...t[1]||(t[1]=[o("automatically called",-1)])]),_:1}),t[5]||(t[5]=o(" when an object is created. It is used to ",-1)),l(r,null,{default:e(()=>[...t[2]||(t[2]=[o("initialize",-1)])]),_:1}),t[6]||(t[6]=o(" the object's state. ",-1))]),t[21]||(t[21]=n("p",{class:"mb-4"}," Key characteristics of constructors: ",-1)),n("ul",J,[n("li",null,[t[8]||(t[8]=o("Constructor name must ",-1)),l(r,null,{default:e(()=>[...t[7]||(t[7]=[o("match",-1)])]),_:1}),t[9]||(t[9]=o(" the class name ",-1))]),n("li",null,[t[11]||(t[11]=o("Constructors ",-1)),l(r,null,{default:e(()=>[...t[10]||(t[10]=[o("do not have",-1)])]),_:1}),t[12]||(t[12]=o(" a return type (not even void) ",-1))]),n("li",null,[t[14]||(t[14]=o("Constructors are called using the ",-1)),l(r,null,{default:e(()=>[...t[13]||(t[13]=[o("new",-1)])]),_:1}),t[15]||(t[15]=o(" keyword ",-1))]),n("li",null,[t[17]||(t[17]=o("Every class has a ",-1)),l(r,null,{default:e(()=>[...t[16]||(t[16]=[o("default constructor",-1)])]),_:1}),t[18]||(t[18]=o(" (if not defined) ",-1))]),n("li",null,[t[20]||(t[20]=o("Constructors can be ",-1)),l(r,null,{default:e(()=>[...t[19]||(t[19]=[o("overloaded",-1)])]),_:1})])])]),t[101]||(t[101]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Default Constructor ",-1)),n("div",R,[n("p",$,[t[23]||(t[23]=o(" If no constructor is defined, Java provides a ",-1)),l(r,null,{default:e(()=>[...t[22]||(t[22]=[o("default constructor",-1)])]),_:1}),t[24]||(t[24]=o(" that initializes fields to default values (0 for numbers, false for boolean, null for objects). ",-1))]),l(i,{code:d.value,language:"java"},null,8,["code"]),t[25]||(t[25]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:p.value},null,8,["output"])]),t[102]||(t[102]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Parameterized Constructors ",-1)),n("div",T,[n("p",z,[l(r,null,{default:e(()=>[...t[26]||(t[26]=[o("Parameterized constructors",-1)])]),_:1}),t[27]||(t[27]=o(" accept arguments to initialize objects with specific values. ",-1))]),l(i,{code:m.value,language:"java"},null,8,["code"]),t[28]||(t[28]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:g.value},null,8,["output"])]),t[103]||(t[103]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Constructor Overloading ",-1)),n("div",V,[n("p",L,[l(r,null,{default:e(()=>[...t[29]||(t[29]=[o("Constructor overloading",-1)])]),_:1}),t[30]||(t[30]=o(" allows multiple constructors with different parameters, providing flexibility in object creation. ",-1))]),l(i,{code:y.value,language:"java"},null,8,["code"]),t[31]||(t[31]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:f.value},null,8,["output"])]),t[104]||(t[104]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Constructor with Validation ",-1)),n("div",F,[n("p",K,[t[33]||(t[33]=o(" Constructors can include ",-1)),l(r,null,{default:e(()=>[...t[32]||(t[32]=[o("validation logic",-1)])]),_:1}),t[34]||(t[34]=o(" to ensure objects are created with valid data. ",-1))]),l(i,{code:b.value,language:"java"},null,8,["code"]),t[35]||(t[35]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:S.value},null,8,["output"])]),t[105]||(t[105]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Copy Constructor ",-1)),n("div",W,[n("p",Y,[t[37]||(t[37]=o(" A ",-1)),l(r,null,{default:e(()=>[...t[36]||(t[36]=[o("copy constructor",-1)])]),_:1}),t[38]||(t[38]=o(" creates a new object by copying the state of an existing object. ",-1))]),l(i,{code:c.value,language:"java"},null,8,["code"]),t[39]||(t[39]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:v.value},null,8,["output"])]),t[106]||(t[106]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Constructor Chaining ",-1)),n("div",G,[n("p",H,[l(r,null,{default:e(()=>[...t[40]||(t[40]=[o("Constructor chaining",-1)])]),_:1}),t[42]||(t[42]=o(" allows one constructor to call another constructor using the ",-1)),l(r,null,{default:e(()=>[...t[41]||(t[41]=[o("this()",-1)])]),_:1}),t[43]||(t[43]=o(" keyword, reducing code duplication. ",-1))]),l(i,{code:C.value,language:"java"},null,8,["code"]),t[44]||(t[44]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:w.value},null,8,["output"])]),t[107]||(t[107]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Private Constructor ",-1)),n("div",h,[n("p",q,[t[47]||(t[47]=o(" A ",-1)),l(r,null,{default:e(()=>[...t[45]||(t[45]=[o("private constructor",-1)])]),_:1}),t[48]||(t[48]=o(" prevents object instantiation from outside the class. This is used in ",-1)),l(r,null,{default:e(()=>[...t[46]||(t[46]=[o("utility classes",-1)])]),_:1}),t[49]||(t[49]=o(" that contain only static methods. ",-1))]),l(i,{code:x.value,language:"java"},null,8,["code"]),t[50]||(t[50]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:I.value},null,8,["output"])]),t[108]||(t[108]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Using this() in Constructors ",-1)),n("div",Q,[n("p",X,[t[53]||(t[53]=o(" The ",-1)),l(r,null,{default:e(()=>[...t[51]||(t[51]=[o("this()",-1)])]),_:1}),t[54]||(t[54]=o(" call is used to invoke another constructor of the same class. It must be the ",-1)),l(r,null,{default:e(()=>[...t[52]||(t[52]=[o("first statement",-1)])]),_:1}),t[55]||(t[55]=o(" in the constructor. ",-1))]),l(i,{code:k.value,language:"java"},null,8,["code"]),t[56]||(t[56]=n("p",{class:"mt-4"},"Output:",-1)),l(a,{output:P.value},null,8,["output"])]),t[109]||(t[109]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Constructors ",-1)),n("div",Z,[n("div",_,[t[71]||(t[71]=n("p",{class:"text-blue-700 font-semibold"},"Remember:",-1)),n("ul",tt,[n("li",null,[t[58]||(t[58]=o("Constructors ",-1)),l(r,null,{default:e(()=>[...t[57]||(t[57]=[o("cannot be static",-1)])]),_:1})]),n("li",null,[t[60]||(t[60]=o("Constructors ",-1)),l(r,null,{default:e(()=>[...t[59]||(t[59]=[o("cannot be final",-1)])]),_:1})]),n("li",null,[t[62]||(t[62]=o("Constructors ",-1)),l(r,null,{default:e(()=>[...t[61]||(t[61]=[o("cannot be abstract",-1)])]),_:1})]),n("li",null,[t[64]||(t[64]=o("Constructors ",-1)),l(r,null,{default:e(()=>[...t[63]||(t[63]=[o("do not return",-1)])]),_:1}),t[65]||(t[65]=o(" any value ",-1))]),n("li",null,[t[67]||(t[67]=o("The ",-1)),l(r,null,{default:e(()=>[...t[66]||(t[66]=[o("this()",-1)])]),_:1}),t[68]||(t[68]=o(" call must be the first statement ",-1))]),n("li",null,[t[70]||(t[70]=o("If you define any constructor, the ",-1)),l(r,null,{default:e(()=>[...t[69]||(t[69]=[o("default constructor is not provided",-1)])]),_:1})])])]),n("ul",ot,[n("li",null,[t[73]||(t[73]=o("Use constructors for ",-1)),l(r,null,{default:e(()=>[...t[72]||(t[72]=[o("object initialization",-1)])]),_:1})]),n("li",null,[t[75]||(t[75]=o("Constructor overloading provides ",-1)),l(r,null,{default:e(()=>[...t[74]||(t[74]=[o("flexibility",-1)])]),_:1})]),n("li",null,[t[77]||(t[77]=o("Copy constructors create ",-1)),l(r,null,{default:e(()=>[...t[76]||(t[76]=[o("independent copies",-1)])]),_:1})]),n("li",null,[t[80]||(t[80]=o("Private constructors are used for ",-1)),l(r,null,{default:e(()=>[...t[78]||(t[78]=[o("singletons",-1)])]),_:1}),t[81]||(t[81]=o(" and ",-1)),l(r,null,{default:e(()=>[...t[79]||(t[79]=[o("utility classes",-1)])]),_:1})])])]),t[110]||(t[110]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),n("div",nt,[n("ul",lt,[n("li",null,[t[83]||(t[83]=o("Constructors are ",-1)),l(r,null,{default:e(()=>[...t[82]||(t[82]=[o("special methods",-1)])]),_:1}),t[84]||(t[84]=o(" that initialize objects ",-1))]),n("li",null,[l(r,null,{default:e(()=>[...t[85]||(t[85]=[o("Default constructors",-1)])]),_:1}),t[86]||(t[86]=o(" are provided if not defined ",-1))]),n("li",null,[l(r,null,{default:e(()=>[...t[87]||(t[87]=[o("Parameterized constructors",-1)])]),_:1}),t[88]||(t[88]=o(" accept initialization values ",-1))]),n("li",null,[l(r,null,{default:e(()=>[...t[89]||(t[89]=[o("Constructor overloading",-1)])]),_:1}),t[90]||(t[90]=o(" provides multiple ways to create objects ",-1))]),n("li",null,[l(r,null,{default:e(()=>[...t[91]||(t[91]=[o("Constructor chaining",-1)])]),_:1}),t[93]||(t[93]=o(" reduces code duplication using ",-1)),l(r,null,{default:e(()=>[...t[92]||(t[92]=[o("this()",-1)])]),_:1})]),n("li",null,[l(r,null,{default:e(()=>[...t[94]||(t[94]=[o("Copy constructors",-1)])]),_:1}),t[95]||(t[95]=o(" create copies of objects ",-1))]),n("li",null,[l(r,null,{default:e(()=>[...t[96]||(t[96]=[o("Private constructors",-1)])]),_:1}),t[97]||(t[97]=o(" prevent object creation from outside ",-1))]),n("li",null,[t[99]||(t[99]=o("Constructors are essential for ",-1)),l(r,null,{default:e(()=>[...t[98]||(t[98]=[o("proper object initialization",-1)])]),_:1})])])])]),_:1},8,["navigation"]))}});export{gt as default};

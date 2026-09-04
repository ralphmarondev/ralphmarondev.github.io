import{_ as O}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as i}from"./SpanHighlight-C-B7JT-9.js";import{C as r}from"./CodeBlock-DXevIYip.js";import{O as a}from"./OutputBlock-DW4hv_11.js";import{u as A}from"./javaProgramming-Pq2XLaCP.js";import{d as I,r as s,p as B,l as n,m as E,o as T,a as l,t as $,k as o,b as e}from"./index-DaKFBQPl.js";const N={class:"text-gray-600 mb-6 text-lg"},D={class:"mb-4"},J={class:"list-disc list-inside mb-4"},U={class:"text-gray-500 mb-6 text-lg"},q={class:"mb-4"},R={class:"text-gray-500 mb-6 text-lg"},z={class:"mb-4"},K={class:"text-gray-500 mb-6 text-lg"},V={class:"mb-4"},L={class:"text-gray-500 mb-6 text-lg"},Q={class:"mb-4"},Y={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},H={class:"text-gray-500 mb-6 text-lg"},W={class:"mb-4"},G={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Z={class:"text-gray-500 mb-6 text-lg"},c={class:"mb-4"},h={class:"text-gray-500 mb-6 text-lg"},_={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},tt={class:"list-disc list-inside text-gray-600"},et={class:"list-disc list-inside"},lt={class:"text-gray-500 mb-6 text-lg"},ot={class:"list-disc list-inside"},nt="July 29, 2026",yt=I({__name:"ClassesAndObjects",setup(it){const u=A(),d=s(`
// Student.java
public class Student {
    // Fields (attributes)
    String name;
    int age;
    String course;

    // Method
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Course: " + course);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Creating objects
        Student student1 = new Student();
        Student student2 = new Student();

        // Setting values
        student1.name = "Ralph";
        student1.age = 20;
        student1.course = "Computer Science";

        student2.name = "Maria";
        student2.age = 22;
        student2.course = "Engineering";

        // Calling methods
        System.out.println("Student 1:");
        student1.displayInfo();
        System.out.println();
        System.out.println("Student 2:");
        student2.displayInfo();
    }
}
`),p=s(`
Student 1:
Name: Ralph
Age: 20
Course: Computer Science

Student 2:
Name: Maria
Age: 22
Course: Engineering
`),m=s(`
// Calculator.java
public class Calculator {
    // Fields
    String brand;
    String color;

    // Methods
    int add(int a, int b) {
        return a + b;
    }

    int subtract(int a, int b) {
        return a - b;
    }

    int multiply(int a, int b) {
        return a * b;
    }

    double divide(int a, int b) {
        if(b == 0) {
            System.out.println("Cannot divide by zero");
            return 0;
        }
        return (double) a / b;
    }

    void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Color: " + color);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Calculator calc = new Calculator();
        calc.brand = "Casio";
        calc.color = "Black";

        calc.displayInfo();
        System.out.println();

        System.out.println("10 + 5 = " + calc.add(10, 5));
        System.out.println("10 - 5 = " + calc.subtract(10, 5));
        System.out.println("10 * 5 = " + calc.multiply(10, 5));
        System.out.println("10 / 5 = " + calc.divide(10, 5));
        System.out.println("10 / 0 = " + calc.divide(10, 0));
    }
}
`),y=s(`
Brand: Casio
Color: Black

10 + 5 = 15
10 - 5 = 5
10 * 5 = 50
10 / 5 = 2.0
Cannot divide by zero
10 / 0 = 0.0
`),b=s(`
// Book.java
public class Book {
    String title;
    String author;
    double price;

    void displayBook() {
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("Price: $" + price);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Creating multiple objects
        Book book1 = new Book();
        Book book2 = new Book();
        Book book3 = new Book();

        // Initialize book1
        book1.title = "Java Programming";
        book1.author = "John Doe";
        book1.price = 49.99;

        // Initialize book2
        book2.title = "Data Structures";
        book2.author = "Jane Smith";
        book2.price = 39.95;

        // Initialize book3
        book3.title = "Algorithms";
        book3.author = "Bob Johnson";
        book3.price = 54.50;

        System.out.println("Book List:");
        System.out.println();
        book1.displayBook();
        book2.displayBook();
        book3.displayBook();

        // Accessing individual fields
        System.out.println("Total books: 3");
        System.out.println("Average price: $" +
            (book1.price + book2.price + book3.price) / 3);
    }
}
`),g=s(`
Book List:

Title: Java Programming
Author: John Doe
Price: $49.99
-----------
Title: Data Structures
Author: Jane Smith
Price: $39.95
-----------
Title: Algorithms
Author: Bob Johnson
Price: $54.5
-----------
Total books: 3
Average price: $48.14666666666667
`),v=s(`
// Employee.java
public class Employee {
    String name;
    double salary;

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
    }
}

// Department.java
public class Department {
    String deptName;
    Employee manager;
    Employee[] employees;

    void displayDepartment() {
        System.out.println("Department: " + deptName);
        System.out.println("Manager:");
        manager.displayInfo();
        System.out.println("Employees:");
        for(Employee emp : employees) {
            emp.displayInfo();
        }
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Create manager
        Employee manager = new Employee();
        manager.name = "Alice Johnson";
        manager.salary = 75000;

        // Create employees
        Employee emp1 = new Employee();
        emp1.name = "Bob Smith";
        emp1.salary = 50000;

        Employee emp2 = new Employee();
        emp2.name = "Carol Davis";
        emp2.salary = 52000;

        Employee emp3 = new Employee();
        emp3.name = "David Wilson";
        emp3.salary = 48000;

        // Create department
        Department it = new Department();
        it.deptName = "Information Technology";
        it.manager = manager;
        it.employees = new Employee[]{emp1, emp2, emp3};

        it.displayDepartment();
    }
}
`),f=s(`
Department: Information Technology
Manager:
Name: Alice Johnson
Salary: $75000.0
Employees:
Name: Bob Smith
Salary: $50000.0
Name: Carol Davis
Salary: $52000.0
Name: David Wilson
Salary: $48000.0
`),S=s(`
// Person.java
public class Person {
    private String name;
    private int age;
    private String email;

    // Setter methods
    void setName(String name) {
        this.name = name;
    }

    void setAge(int age) {
        if(age >= 0 && age <= 150) {
            this.age = age;
        } else {
            System.out.println("Invalid age");
        }
    }

    void setEmail(String email) {
        if(email.contains("@")) {
            this.email = email;
        } else {
            System.out.println("Invalid email");
        }
    }

    // Getter methods
    String getName() {
        return name;
    }

    int getAge() {
        return age;
    }

    String getEmail() {
        return email;
    }

    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Email: " + email);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Person person = new Person();

        // Using setters
        person.setName("Ralph");
        person.setAge(25);
        person.setEmail("ralph@email.com");

        // Using getters
        System.out.println("Using getters:");
        System.out.println("Name: " + person.getName());
        System.out.println("Age: " + person.getAge());
        System.out.println("Email: " + person.getEmail());

        System.out.println();
        System.out.println("Using display method:");
        person.displayInfo();

        // Testing validation
        System.out.println();
        System.out.println("Testing invalid values:");
        person.setAge(200);
        person.setEmail("invalidemail");
    }
}
`),j=s(`
Using getters:
Name: Ralph
Age: 25
Email: ralph@email.com

Using display method:
Name: Ralph
Age: 25
Email: ralph@email.com

Testing invalid values:
Invalid age
Invalid email
`),x=s(`
// Car.java
public class Car {
    String model;
    String color;
    int year;
    double price;

    // Method with parameters
    void setDetails(String model, String color, int year, double price) {
        // Using 'this' to distinguish fields from parameters
        this.model = model;
        this.color = color;
        this.year = year;
        this.price = price;
    }

    void displayInfo() {
        System.out.println("Model: " + this.model);
        System.out.println("Color: " + this.color);
        System.out.println("Year: " + this.year);
        System.out.println("Price: $" + this.price);
        System.out.println("-----------");
    }

    void comparePrice(Car other) {
        if(this.price > other.price) {
            System.out.println(this.model + " is more expensive than " + other.model);
        } else if(this.price < other.price) {
            System.out.println(this.model + " is cheaper than " + other.model);
        } else {
            System.out.println(this.model + " and " + other.model + " have the same price");
        }
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Car car1 = new Car();
        Car car2 = new Car();

        car1.setDetails("Toyota Camry", "Silver", 2022, 35000);
        car2.setDetails("Honda Accord", "Blue", 2023, 32000);

        System.out.println("Car 1:");
        car1.displayInfo();

        System.out.println("Car 2:");
        car2.displayInfo();

        car1.comparePrice(car2);
    }
}
`),P=s(`
Car 1:
Model: Toyota Camry
Color: Silver
Year: 2022
Price: $35000.0
-----------
Car 2:
Model: Honda Accord
Color: Blue
Year: 2023
Price: $32000.0
-----------
Toyota Camry is more expensive than Honda Accord
`),C=s(`
// Product.java
public class Product {
    String name;
    double price;
    int quantity;

    void displayProduct() {
        System.out.println("Product: " + name);
        System.out.println("Price: $" + price);
        System.out.println("Quantity: " + quantity);
        System.out.println("Total: $" + (price * quantity));
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Array of objects
        Product[] products = new Product[4];

        // Initialize each product
        products[0] = new Product();
        products[0].name = "Laptop";
        products[0].price = 999.99;
        products[0].quantity = 5;

        products[1] = new Product();
        products[1].name = "Mouse";
        products[1].price = 29.99;
        products[1].quantity = 20;

        products[2] = new Product();
        products[2].name = "Keyboard";
        products[2].price = 79.99;
        products[2].quantity = 10;

        products[3] = new Product();
        products[3].name = "Monitor";
        products[3].price = 299.99;
        products[3].quantity = 3;

        // Display all products
        System.out.println("Product Inventory:");
        System.out.println();
        double totalValue = 0;
        for(Product product : products) {
            product.displayProduct();
            totalValue += product.price * product.quantity;
        }
        System.out.println("Total inventory value: $" + totalValue);
    }
}
`),k=s(`
Product Inventory:

Product: Laptop
Price: $999.99
Quantity: 5
Total: $4999.95
-----------
Product: Mouse
Price: $29.99
Quantity: 20
Total: $599.8
-----------
Product: Keyboard
Price: $79.99
Quantity: 10
Total: $799.9
-----------
Product: Monitor
Price: $299.99
Quantity: 3
Total: $899.97
-----------
Total inventory value: $7299.62
`),M=s(`
// Point.java
public class Point {
    int x;
    int y;

    void display() {
        System.out.println("Point(" + x + ", " + y + ")");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Point p1 = createPoint(3, 5);
        Point p2 = createPoint(7, 2);

        System.out.println("Created points:");
        p1.display();
        p2.display();

        Point midpoint = calculateMidpoint(p1, p2);
        System.out.println("Midpoint:");
        midpoint.display();
    }

    static Point createPoint(int x, int y) {
        Point p = new Point();
        p.x = x;
        p.y = y;
        return p;
    }

    static Point calculateMidpoint(Point a, Point b) {
        Point mid = new Point();
        mid.x = (a.x + b.x) / 2;
        mid.y = (a.y + b.y) / 2;
        return mid;
    }
}
`),w=s(`
Created points:
Point(3, 5)
Point(7, 2)
Midpoint:
Point(5, 3)
`);return(st,t)=>(T(),B(O,{title:"Java Programming",navigation:E(u).sections},{default:n(()=>[t[118]||(t[118]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Classes and Objects ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+$(nt)),l("div",N,[l("p",D,[o(i,null,{default:n(()=>[...t[0]||(t[0]=[e("Classes",-1)])]),_:1}),t[2]||(t[2]=e(" and ",-1)),o(i,null,{default:n(()=>[...t[1]||(t[1]=[e("Objects",-1)])]),_:1}),t[3]||(t[3]=e(" are the fundamental building blocks of Object-Oriented Programming (OOP) in Java. ",-1))]),t[20]||(t[20]=l("p",{class:"mb-4"}," Key concepts: ",-1)),l("ul",J,[l("li",null,[t[5]||(t[5]=e("A ",-1)),o(i,null,{default:n(()=>[...t[4]||(t[4]=[e("class",-1)])]),_:1}),t[6]||(t[6]=e(" is a blueprint or template for creating objects ",-1))]),l("li",null,[t[8]||(t[8]=e("An ",-1)),o(i,null,{default:n(()=>[...t[7]||(t[7]=[e("object",-1)])]),_:1}),t[9]||(t[9]=e(" is an instance of a class ",-1))]),l("li",null,[t[12]||(t[12]=e("Classes contain ",-1)),o(i,null,{default:n(()=>[...t[10]||(t[10]=[e("fields",-1)])]),_:1}),t[13]||(t[13]=e(" (attributes) and ",-1)),o(i,null,{default:n(()=>[...t[11]||(t[11]=[e("methods",-1)])]),_:1}),t[14]||(t[14]=e(" (behaviors) ",-1))]),l("li",null,[t[17]||(t[17]=e("Objects have ",-1)),o(i,null,{default:n(()=>[...t[15]||(t[15]=[e("state",-1)])]),_:1}),t[18]||(t[18]=e(" (fields) and ",-1)),o(i,null,{default:n(()=>[...t[16]||(t[16]=[e("behavior",-1)])]),_:1}),t[19]||(t[19]=e(" (methods) ",-1))])])]),t[119]||(t[119]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Class Definition ",-1)),l("div",U,[l("p",q,[t[23]||(t[23]=e(" A class defines the structure and behavior of objects. It contains ",-1)),o(i,null,{default:n(()=>[...t[21]||(t[21]=[e("fields",-1)])]),_:1}),t[24]||(t[24]=e(" to store data and ",-1)),o(i,null,{default:n(()=>[...t[22]||(t[22]=[e("methods",-1)])]),_:1}),t[25]||(t[25]=e(" to perform operations. ",-1))]),o(r,{code:d.value,language:"java"},null,8,["code"]),t[26]||(t[26]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:p.value},null,8,["output"])]),t[120]||(t[120]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Class with Methods ",-1)),l("div",R,[l("p",z,[t[28]||(t[28]=e(" Methods define the ",-1)),o(i,null,{default:n(()=>[...t[27]||(t[27]=[e("behavior",-1)])]),_:1}),t[29]||(t[29]=e(" of objects. They can perform calculations, modify fields, and interact with other objects. ",-1))]),o(r,{code:m.value,language:"java"},null,8,["code"]),t[30]||(t[30]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:y.value},null,8,["output"])]),t[121]||(t[121]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Creating Multiple Objects ",-1)),l("div",K,[l("p",V,[t[32]||(t[32]=e(" You can create ",-1)),o(i,null,{default:n(()=>[...t[31]||(t[31]=[e("multiple objects",-1)])]),_:1}),t[33]||(t[33]=e(" from the same class. Each object has its own copy of the fields. ",-1))]),o(r,{code:b.value,language:"java"},null,8,["code"]),t[34]||(t[34]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:g.value},null,8,["output"])]),t[122]||(t[122]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Object Interaction ",-1)),l("div",L,[l("p",Q,[t[36]||(t[36]=e(" Objects can ",-1)),o(i,null,{default:n(()=>[...t[35]||(t[35]=[e("interact",-1)])]),_:1}),t[37]||(t[37]=e(" with each other. One object can contain references to other objects. ",-1))]),o(r,{code:v.value,language:"java"},null,8,["code"]),t[38]||(t[38]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:f.value},null,8,["output"])]),t[123]||(t[123]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Getters and Setters ",-1)),l("div",Y,[l("p",F,[o(i,null,{default:n(()=>[...t[39]||(t[39]=[e("Getters",-1)])]),_:1}),t[43]||(t[43]=e(" and ",-1)),o(i,null,{default:n(()=>[...t[40]||(t[40]=[e("setters",-1)])]),_:1}),t[44]||(t[44]=e(" are methods used to access and modify private fields. They provide ",-1)),o(i,null,{default:n(()=>[...t[41]||(t[41]=[e("data validation",-1)])]),_:1}),t[45]||(t[45]=e(" and ",-1)),o(i,null,{default:n(()=>[...t[42]||(t[42]=[e("encapsulation",-1)])]),_:1}),t[46]||(t[46]=e(" . ",-1))]),o(r,{code:S.value,language:"java"},null,8,["code"]),t[47]||(t[47]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:j.value},null,8,["output"])]),t[124]||(t[124]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The 'this' Keyword ",-1)),l("div",H,[l("p",W,[t[51]||(t[51]=e(" The ",-1)),o(i,null,{default:n(()=>[...t[48]||(t[48]=[e("this",-1)])]),_:1}),t[52]||(t[52]=e(" keyword refers to the current object. It is used to distinguish ",-1)),o(i,null,{default:n(()=>[...t[49]||(t[49]=[e("instance variables",-1)])]),_:1}),t[53]||(t[53]=e(" from ",-1)),o(i,null,{default:n(()=>[...t[50]||(t[50]=[e("parameters",-1)])]),_:1}),t[54]||(t[54]=e(" with the same name. ",-1))]),o(r,{code:x.value,language:"java"},null,8,["code"]),t[55]||(t[55]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:P.value},null,8,["output"])]),t[125]||(t[125]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Arrays of Objects ",-1)),l("div",G,[l("p",X,[t[57]||(t[57]=e(" You can create ",-1)),o(i,null,{default:n(()=>[...t[56]||(t[56]=[e("arrays of objects",-1)])]),_:1}),t[58]||(t[58]=e(" to store and manage multiple objects efficiently. ",-1))]),o(r,{code:C.value,language:"java"},null,8,["code"]),t[59]||(t[59]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:k.value},null,8,["output"])]),t[126]||(t[126]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Returning Objects from Methods ",-1)),l("div",Z,[l("p",c,[t[63]||(t[63]=e(" Methods can ",-1)),o(i,null,{default:n(()=>[...t[60]||(t[60]=[e("return objects",-1)])]),_:1}),t[64]||(t[64]=e(" as their return value, allowing for ",-1)),o(i,null,{default:n(()=>[...t[61]||(t[61]=[e("object creation",-1)])]),_:1}),t[65]||(t[65]=e(" and ",-1)),o(i,null,{default:n(()=>[...t[62]||(t[62]=[e("transformation",-1)])]),_:1}),t[66]||(t[66]=e(" . ",-1))]),o(r,{code:M.value,language:"java"},null,8,["code"]),t[67]||(t[67]=l("p",{class:"mt-4"},"Output:",-1)),o(a,{output:w.value},null,8,["output"])]),t[127]||(t[127]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Classes and Objects ",-1)),l("div",h,[l("div",_,[t[86]||(t[86]=l("p",{class:"text-blue-700 font-semibold"},"Remember:",-1)),l("ul",tt,[l("li",null,[t[70]||(t[70]=e("A class is a ",-1)),o(i,null,{default:n(()=>[...t[68]||(t[68]=[e("blueprint",-1)])]),_:1}),t[71]||(t[71]=e(" ; an object is an ",-1)),o(i,null,{default:n(()=>[...t[69]||(t[69]=[e("instance",-1)])]),_:1})]),l("li",null,[t[73]||(t[73]=e("Objects are created using the ",-1)),o(i,null,{default:n(()=>[...t[72]||(t[72]=[e("new",-1)])]),_:1}),t[74]||(t[74]=e(" keyword ",-1))]),l("li",null,[t[76]||(t[76]=e("Each object has its own copy of ",-1)),o(i,null,{default:n(()=>[...t[75]||(t[75]=[e("instance variables",-1)])]),_:1})]),l("li",null,[t[78]||(t[78]=e("Use ",-1)),o(i,null,{default:n(()=>[...t[77]||(t[77]=[e("this",-1)])]),_:1}),t[79]||(t[79]=e(" to refer to the current object ",-1))]),l("li",null,[t[82]||(t[82]=e("Methods can have ",-1)),o(i,null,{default:n(()=>[...t[80]||(t[80]=[e("parameters",-1)])]),_:1}),t[83]||(t[83]=e(" and ",-1)),o(i,null,{default:n(()=>[...t[81]||(t[81]=[e("return values",-1)])]),_:1})]),l("li",null,[t[85]||(t[85]=e("Objects are stored in ",-1)),o(i,null,{default:n(()=>[...t[84]||(t[84]=[e("heap memory",-1)])]),_:1})])])]),l("ul",et,[l("li",null,[t[88]||(t[88]=e("Use ",-1)),o(i,null,{default:n(()=>[...t[87]||(t[87]=[e("encapsulation",-1)])]),_:1}),t[89]||(t[89]=e(" to protect data ",-1))]),l("li",null,[t[91]||(t[91]=e("Fields are typically declared ",-1)),o(i,null,{default:n(()=>[...t[90]||(t[90]=[e("private",-1)])]),_:1})]),l("li",null,[t[93]||(t[93]=e("Methods are typically declared ",-1)),o(i,null,{default:n(()=>[...t[92]||(t[92]=[e("public",-1)])]),_:1})]),l("li",null,[t[95]||(t[95]=e("Java is ",-1)),o(i,null,{default:n(()=>[...t[94]||(t[94]=[e("object-oriented",-1)])]),_:1}),t[96]||(t[96]=e(" - everything revolves around classes and objects ",-1))])])]),t[128]||(t[128]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l("div",lt,[l("ul",ot,[l("li",null,[o(i,null,{default:n(()=>[...t[97]||(t[97]=[e("Classes",-1)])]),_:1}),t[98]||(t[98]=e(" define the structure and behavior of objects ",-1))]),l("li",null,[o(i,null,{default:n(()=>[...t[99]||(t[99]=[e("Objects",-1)])]),_:1}),t[100]||(t[100]=e(" are instances of classes ",-1))]),l("li",null,[t[102]||(t[102]=e("Fields store the ",-1)),o(i,null,{default:n(()=>[...t[101]||(t[101]=[e("state",-1)])]),_:1}),t[103]||(t[103]=e(" of objects ",-1))]),l("li",null,[t[105]||(t[105]=e("Methods define the ",-1)),o(i,null,{default:n(()=>[...t[104]||(t[104]=[e("behavior",-1)])]),_:1}),t[106]||(t[106]=e(" of objects ",-1))]),l("li",null,[t[108]||(t[108]=e("Use the ",-1)),o(i,null,{default:n(()=>[...t[107]||(t[107]=[e("new",-1)])]),_:1}),t[109]||(t[109]=e(" keyword to create objects ",-1))]),l("li",null,[t[111]||(t[111]=e("The ",-1)),o(i,null,{default:n(()=>[...t[110]||(t[110]=[e("this",-1)])]),_:1}),t[112]||(t[112]=e(" keyword refers to the current object ",-1))]),l("li",null,[t[114]||(t[114]=e("Objects can ",-1)),o(i,null,{default:n(()=>[...t[113]||(t[113]=[e("interact",-1)])]),_:1}),t[115]||(t[115]=e(" with each other ",-1))]),l("li",null,[t[117]||(t[117]=e("Arrays can store ",-1)),o(i,null,{default:n(()=>[...t[116]||(t[116]=[e("multiple objects",-1)])]),_:1})])])])]),_:1},8,["navigation"]))}});export{yt as default};

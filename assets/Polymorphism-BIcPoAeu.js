import{_ as j}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as s}from"./SpanHighlight-C-B7JT-9.js";import{C as o}from"./CodeBlock-DXevIYip.js";import{O as r}from"./OutputBlock-DW4hv_11.js";import{u as M}from"./javaProgramming-Pq2XLaCP.js";import{d as h,r as i,p as D,l as a,m as O,o as R,a as l,t as k,k as n,b as e}from"./index-DaKFBQPl.js";const V={class:"text-gray-600 mb-6 text-lg"},$={class:"mb-4"},A={class:"list-disc list-inside mb-4"},I={class:"text-gray-500 mb-6 text-lg"},T={class:"mb-4"},E={class:"text-gray-500 mb-6 text-lg"},B={class:"mb-4"},q={class:"text-gray-500 mb-6 text-lg"},N={class:"mb-4"},J={class:"text-gray-500 mb-6 text-lg"},U={class:"mb-4"},W={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},H={class:"text-gray-500 mb-6 text-lg"},K={class:"mb-4"},L={class:"text-gray-500 mb-6 text-lg"},z={class:"mb-4"},G={class:"text-gray-500 mb-6 text-lg"},Q={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},X={class:"list-disc list-inside text-gray-600"},Y={class:"list-disc list-inside"},Z={class:"text-gray-500 mb-6 text-lg"},_={class:"list-disc list-inside"},tt="July 29, 2026",ut=h({__name:"Polymorphism",setup(et){const u=M(),p=i(`
// Animal.java
public class Animal {
    public void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

// Dog.java
public class Dog extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Dog barks: Woof! Woof!");
    }
}

// Cat.java
public class Cat extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cat meows: Meow! Meow!");
    }
}

// Cow.java
public class Cow extends Animal {
    @Override
    public void makeSound() {
        System.out.println("Cow moos: Moo! Moo!");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Polymorphic references
        Animal animal1 = new Dog();
        Animal animal2 = new Cat();
        Animal animal3 = new Cow();
        Animal animal4 = new Animal();

        System.out.println("Polymorphic behavior:");
        animal1.makeSound(); // Dog's sound
        animal2.makeSound(); // Cat's sound
        animal3.makeSound(); // Cow's sound
        animal4.makeSound(); // Animal's sound
    }
}
`),m=i(`
Polymorphic behavior:
Dog barks: Woof! Woof!
Cat meows: Meow! Meow!
Cow moos: Moo! Moo!
Animal makes a sound
`),d=i(`
// Shape.java
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

// Circle.java
public class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
}

// Square.java
public class Square extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a square");
    }
}

// Triangle.java
public class Triangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing a triangle");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Circle circle = new Circle();
        Square square = new Square();
        Triangle triangle = new Triangle();

        System.out.println("Passing different shapes:");
        drawShape(circle);
        drawShape(square);
        drawShape(triangle);
        drawShape(new Shape());
    }

    // Polymorphic method parameter
    public static void drawShape(Shape shape) {
        shape.draw();
    }
}
`),y=i(`
Passing different shapes:
Drawing a circle
Drawing a square
Drawing a triangle
Drawing a shape
`),b=i(`
// Payment.java
public class Payment {
    protected double amount;

    public Payment(double amount) {
        this.amount = amount;
    }

    public void processPayment() {
        System.out.println("Processing payment of $" + amount);
    }
}

// CreditCardPayment.java
public class CreditCardPayment extends Payment {
    private String cardNumber;

    public CreditCardPayment(double amount, String cardNumber) {
        super(amount);
        this.cardNumber = cardNumber;
    }

    @Override
    public void processPayment() {
        System.out.println("Processing credit card payment of $" + amount);
        System.out.println("Card: " + cardNumber.substring(0, 4) + "****");
    }
}

// PayPalPayment.java
public class PayPalPayment extends Payment {
    private String email;

    public PayPalPayment(double amount, String email) {
        super(amount);
        this.email = email;
    }

    @Override
    public void processPayment() {
        System.out.println("Processing PayPal payment of $" + amount);
        System.out.println("Email: " + email);
    }
}

// CashPayment.java
public class CashPayment extends Payment {
    public CashPayment(double amount) {
        super(amount);
    }

    @Override
    public void processPayment() {
        System.out.println("Processing cash payment of $" + amount);
        System.out.println("Cash received");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Array of Payment objects
        Payment[] payments = new Payment[4];

        payments[0] = new CreditCardPayment(100.50, "1234-5678-9012-3456");
        payments[1] = new PayPalPayment(75.25, "user@email.com");
        payments[2] = new CashPayment(50.00);
        payments[3] = new Payment(200.00);

        System.out.println("Processing all payments:");
        System.out.println("========================");
        for(Payment payment : payments) {
            payment.processPayment();
            System.out.println();
        }
    }
}
`),g=i(`
Processing all payments:
========================
Processing credit card payment of $100.5
Card: 1234****

Processing PayPal payment of $75.25
Email: user@email.com

Processing cash payment of $50.0
Cash received

Processing payment of $200.0

`),c=i(`
// Vehicle.java
public class Vehicle {
    public void start() {
        System.out.println("Vehicle starting");
    }
}

// Car.java
public class Car extends Vehicle {
    @Override
    public void start() {
        System.out.println("Car engine starting... Vroom!");
    }
}

// Motorcycle.java
public class Motorcycle extends Vehicle {
    @Override
    public void start() {
        System.out.println("Motorcycle engine starting... Rev!");
    }
}

// Truck.java
public class Truck extends Vehicle {
    @Override
    public void start() {
        System.out.println("Truck engine starting... Rumble!");
    }
}

// VehicleFactory.java
public class VehicleFactory {
    public static Vehicle createVehicle(String type) {
        if(type.equalsIgnoreCase("car")) {
            return new Car();
        } else if(type.equalsIgnoreCase("motorcycle")) {
            return new Motorcycle();
        } else if(type.equalsIgnoreCase("truck")) {
            return new Truck();
        } else {
            return new Vehicle();
        }
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Creating vehicles using factory:");
        System.out.println("--------------------------------");

        Vehicle v1 = VehicleFactory.createVehicle("car");
        Vehicle v2 = VehicleFactory.createVehicle("motorcycle");
        Vehicle v3 = VehicleFactory.createVehicle("truck");
        Vehicle v4 = VehicleFactory.createVehicle("unknown");

        v1.start();
        v2.start();
        v3.start();
        v4.start();
    }
}
`),v=i(`
Creating vehicles using factory:
--------------------------------
Car engine starting... Vroom!
Motorcycle engine starting... Rev!
Truck engine starting... Rumble!
Vehicle starting
`),S=i(`
// Employee.java
public class Employee {
    String name;
    double baseSalary;

    public Employee(String name, double baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    public double calculateSalary() {
        return baseSalary;
    }

    public void displayInfo() {
        System.out.println("Employee: " + name);
        System.out.println("Salary: $" + calculateSalary());
    }
}

// Developer.java
public class Developer extends Employee {
    double bonus;

    public Developer(String name, double baseSalary, double bonus) {
        super(name, baseSalary);
        this.bonus = bonus;
    }

    @Override
    public double calculateSalary() {
        return baseSalary + bonus;
    }

    @Override
    public void displayInfo() {
        System.out.println("Developer: " + name);
        System.out.println("Base Salary: $" + baseSalary);
        System.out.println("Bonus: $" + bonus);
        System.out.println("Total: $" + calculateSalary());
    }
}

// Manager.java
public class Manager extends Employee {
    double bonus;
    double commission;

    public Manager(String name, double baseSalary, double bonus, double commission) {
        super(name, baseSalary);
        this.bonus = bonus;
        this.commission = commission;
    }

    @Override
    public double calculateSalary() {
        return baseSalary + bonus + commission;
    }

    @Override
    public void displayInfo() {
        System.out.println("Manager: " + name);
        System.out.println("Base Salary: $" + baseSalary);
        System.out.println("Bonus: $" + bonus);
        System.out.println("Commission: $" + commission);
        System.out.println("Total: $" + calculateSalary());
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Employee emp1 = new Developer("Ralph", 50000, 10000);
        Employee emp2 = new Manager("Maria", 60000, 15000, 5000);
        Employee emp3 = new Employee("John", 40000);

        System.out.println("Runtime Polymorphism:");
        System.out.println("=====================");
        emp1.displayInfo();
        System.out.println();
        emp2.displayInfo();
        System.out.println();
        emp3.displayInfo();

        System.out.println();
        System.out.println("Salary Calculations:");
        System.out.println("Ralph's salary: $" + emp1.calculateSalary());
        System.out.println("Maria's salary: $" + emp2.calculateSalary());
        System.out.println("John's salary: $" + emp3.calculateSalary());
    }
}
`),f=i(`
Runtime Polymorphism:
=====================
Developer: Ralph
Base Salary: $50000.0
Bonus: $10000.0
Total: $60000.0

Manager: Maria
Base Salary: $60000.0
Bonus: $15000.0
Commission: $5000.0
Total: $80000.0

Employee: John
Salary: $40000.0

Salary Calculations:
Ralph's salary: $60000.0
Maria's salary: $80000.0
John's salary: $40000.0
`),P=i(`
// Printable.java
public interface Printable {
    void print();
}

// Scannable.java
public interface Scannable {
    void scan();
}

// Document.java
public class Document implements Printable, Scannable {
    String content;

    public Document(String content) {
        this.content = content;
    }

    @Override
    public void print() {
        System.out.println("Printing document: " + content);
    }

    @Override
    public void scan() {
        System.out.println("Scanning document: " + content);
    }
}

// Photo.java
public class Photo implements Printable {
    String name;

    public Photo(String name) {
        this.name = name;
    }

    @Override
    public void print() {
        System.out.println("Printing photo: " + name);
    }
}

// Report.java
public class Report implements Printable, Scannable {
    String title;
    int pages;

    public Report(String title, int pages) {
        this.title = title;
        this.pages = pages;
    }

    @Override
    public void print() {
        System.out.println("Printing report: " + title + " (" + pages + " pages)");
    }

    @Override
    public void scan() {
        System.out.println("Scanning report: " + title);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Document doc = new Document("Hello World");
        Photo photo = new Photo("Vacation 2026");
        Report report = new Report("Annual Report", 50);

        System.out.println("Printing different objects:");
        System.out.println("--------------------------");
        printItem(doc);
        printItem(photo);
        printItem(report);

        System.out.println();
        System.out.println("Scanning scannable objects:");
        System.out.println("--------------------------");
        scanItem(doc);
        scanItem(report);
    }

    public static void printItem(Printable item) {
        item.print();
    }

    public static void scanItem(Scannable item) {
        item.scan();
    }
}
`),w=i(`
Printing different objects:
--------------------------
Printing document: Hello World
Printing photo: Vacation 2026
Printing report: Annual Report (50 pages)

Scanning scannable objects:
--------------------------
Scanning document: Hello World
Scanning report: Annual Report
`),x=i(`
// Shape.java
public class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
}

// Circle.java
public class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }

    public double calculateArea() {
        return Math.PI * radius * radius;
    }
}

// Rectangle.java
public class Rectangle extends Shape {
    double length;
    double width;

    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    public void draw() {
        System.out.println("Drawing a rectangle " + length + "x" + width);
    }

    public double calculateArea() {
        return length * width;
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Shape[] shapes = new Shape[3];
        shapes[0] = new Circle(5);
        shapes[1] = new Rectangle(4, 6);
        shapes[2] = new Shape();

        for(Shape shape : shapes) {
            shape.draw();

            // Using instanceof to check type
            if(shape instanceof Circle) {
                Circle circle = (Circle) shape; // Downcasting
                System.out.println("This is a circle with area: " + circle.calculateArea());
            } else if(shape instanceof Rectangle) {
                Rectangle rect = (Rectangle) shape; // Downcasting
                System.out.println("This is a rectangle with area: " + rect.calculateArea());
            }
            System.out.println();
        }
    }
}
`),C=i(`
Drawing a circle with radius 5.0
This is a circle with area: 78.53981633974483

Drawing a rectangle 4.0x6.0
This is a rectangle with area: 24.0

Drawing a shape

`);return(lt,t)=>(R(),D(j,{title:"Java Programming",navigation:O(u).sections},{default:a(()=>[t[95]||(t[95]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Polymorphism in Java ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+k(tt)),l("div",V,[l("p",$,[n(s,null,{default:a(()=>[...t[0]||(t[0]=[e("Polymorphism",-1)])]),_:1}),t[1]||(t[1]=e(' means "many forms". It allows objects of different classes to be treated as objects of a common superclass, with the correct method being called based on the actual object type. ',-1))]),t[12]||(t[12]=l("p",{class:"mb-4"}," Key concepts: ",-1)),l("ul",A,[l("li",null,[n(s,null,{default:a(()=>[...t[2]||(t[2]=[e("Compile-time",-1)])]),_:1}),t[3]||(t[3]=e(" polymorphism (method overloading) ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[4]||(t[4]=[e("Runtime",-1)])]),_:1}),t[5]||(t[5]=e(" polymorphism (method overriding) ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[6]||(t[6]=[e("Upcasting",-1)])]),_:1}),t[7]||(t[7]=e(" - Treating subclass as superclass ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[8]||(t[8]=[e("Downcasting",-1)])]),_:1}),t[9]||(t[9]=e(" - Converting superclass reference to subclass ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[10]||(t[10]=[e("Dynamic method dispatch",-1)])]),_:1}),t[11]||(t[11]=e(" - Method call resolved at runtime ",-1))])])]),t[96]||(t[96]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Polymorphism ",-1)),l("div",I,[l("p",T,[t[14]||(t[14]=e(" A superclass reference can point to a ",-1)),n(s,null,{default:a(()=>[...t[13]||(t[13]=[e("subclass object",-1)])]),_:1}),t[15]||(t[15]=e(" . The method called depends on the actual object type, not the reference type. ",-1))]),n(o,{code:p.value,language:"java"},null,8,["code"]),t[16]||(t[16]=l("p",{class:"mt-4"},"Output:",-1)),n(r,{output:m.value},null,8,["output"])]),t[97]||(t[97]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Polymorphic Method Parameters ",-1)),l("div",E,[l("p",B,[t[19]||(t[19]=e(" Methods can accept parameters of a ",-1)),n(s,null,{default:a(()=>[...t[17]||(t[17]=[e("superclass type",-1)])]),_:1}),t[20]||(t[20]=e(" , allowing them to work with any ",-1)),n(s,null,{default:a(()=>[...t[18]||(t[18]=[e("subclass object",-1)])]),_:1}),t[21]||(t[21]=e(" . ",-1))]),n(o,{code:d.value,language:"java"},null,8,["code"]),t[22]||(t[22]=l("p",{class:"mt-4"},"Output:",-1)),n(r,{output:y.value},null,8,["output"])]),t[98]||(t[98]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Polymorphic Arrays ",-1)),l("div",q,[l("p",N,[t[25]||(t[25]=e(" Arrays of a ",-1)),n(s,null,{default:a(()=>[...t[23]||(t[23]=[e("superclass type",-1)])]),_:1}),t[26]||(t[26]=e(" can store objects of ",-1)),n(s,null,{default:a(()=>[...t[24]||(t[24]=[e("different subclasses",-1)])]),_:1}),t[27]||(t[27]=e(" , allowing uniform processing. ",-1))]),n(o,{code:b.value,language:"java"},null,8,["code"]),t[28]||(t[28]=l("p",{class:"mt-4"},"Output:",-1)),n(r,{output:g.value},null,8,["output"])]),t[99]||(t[99]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Polymorphic Return Types ",-1)),l("div",J,[l("p",U,[t[32]||(t[32]=e(" Methods can return a ",-1)),n(s,null,{default:a(()=>[...t[29]||(t[29]=[e("superclass type",-1)])]),_:1}),t[33]||(t[33]=e(" but actually return ",-1)),n(s,null,{default:a(()=>[...t[30]||(t[30]=[e("subclass objects",-1)])]),_:1}),t[34]||(t[34]=e(" . This is common in ",-1)),n(s,null,{default:a(()=>[...t[31]||(t[31]=[e("factory patterns",-1)])]),_:1}),t[35]||(t[35]=e(" . ",-1))]),n(o,{code:c.value,language:"java"},null,8,["code"]),t[36]||(t[36]=l("p",{class:"mt-4"},"Output:",-1)),n(r,{output:v.value},null,8,["output"])]),t[100]||(t[100]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Runtime Polymorphism ",-1)),l("div",W,[l("p",F,[n(s,null,{default:a(()=>[...t[37]||(t[37]=[e("Runtime polymorphism",-1)])]),_:1}),t[38]||(t[38]=e(" allows the correct method to be called at runtime based on the actual object type, not the reference type. ",-1))]),n(o,{code:S.value,language:"java"},null,8,["code"]),t[39]||(t[39]=l("p",{class:"mt-4"},"Output:",-1)),n(r,{output:f.value},null,8,["output"])]),t[101]||(t[101]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Polymorphism with Interfaces ",-1)),l("div",H,[l("p",K,[n(s,null,{default:a(()=>[...t[40]||(t[40]=[e("Interfaces",-1)])]),_:1}),t[41]||(t[41]=e(" provide another form of polymorphism, where different classes can implement the same interface and be treated uniformly. ",-1))]),n(o,{code:P.value,language:"java"},null,8,["code"]),t[42]||(t[42]=l("p",{class:"mt-4"},"Output:",-1)),n(r,{output:w.value},null,8,["output"])]),t[102]||(t[102]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Downcasting and 'instanceof' ",-1)),l("div",L,[l("p",z,[n(s,null,{default:a(()=>[...t[43]||(t[43]=[e("Downcasting",-1)])]),_:1}),t[45]||(t[45]=e(" converts a superclass reference to a subclass reference. Use ",-1)),n(s,null,{default:a(()=>[...t[44]||(t[44]=[e("instanceof",-1)])]),_:1}),t[46]||(t[46]=e(" to check the actual type before downcasting. ",-1))]),n(o,{code:x.value,language:"java"},null,8,["code"]),t[47]||(t[47]=l("p",{class:"mt-4"},"Output:",-1)),n(r,{output:C.value},null,8,["output"])]),t[103]||(t[103]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Polymorphism ",-1)),l("div",G,[l("div",Q,[t[62]||(t[62]=l("p",{class:"text-blue-700 font-semibold"},"Key Points:",-1)),l("ul",X,[l("li",null,[t[50]||(t[50]=e("Polymorphism allows ",-1)),n(s,null,{default:a(()=>[...t[48]||(t[48]=[e("flexible",-1)])]),_:1}),t[51]||(t[51]=e(" and ",-1)),n(s,null,{default:a(()=>[...t[49]||(t[49]=[e("extensible",-1)])]),_:1}),t[52]||(t[52]=e(" code ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[53]||(t[53]=[e("Upcasting",-1)])]),_:1}),t[54]||(t[54]=e(" is automatic and safe ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[55]||(t[55]=[e("Downcasting",-1)])]),_:1}),t[56]||(t[56]=e(" requires explicit casting and instanceof check ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[57]||(t[57]=[e("Dynamic method dispatch",-1)])]),_:1}),t[58]||(t[58]=e(" occurs at runtime ",-1))]),l("li",null,[t[60]||(t[60]=e("Interfaces provide ",-1)),n(s,null,{default:a(()=>[...t[59]||(t[59]=[e("multiple inheritance",-1)])]),_:1}),t[61]||(t[61]=e(" of type ",-1))])])]),l("ul",Y,[l("li",null,[n(s,null,{default:a(()=>[...t[63]||(t[63]=[e("Method overloading",-1)])]),_:1}),t[64]||(t[64]=e(" is compile-time polymorphism ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[65]||(t[65]=[e("Method overriding",-1)])]),_:1}),t[66]||(t[66]=e(" is runtime polymorphism ",-1))]),l("li",null,[t[68]||(t[68]=e("Polymorphism is essential for ",-1)),n(s,null,{default:a(()=>[...t[67]||(t[67]=[e("design patterns",-1)])]),_:1})]),l("li",null,[t[70]||(t[70]=e("Polymorphic code is ",-1)),n(s,null,{default:a(()=>[...t[69]||(t[69]=[e("easier to maintain",-1)])]),_:1})]),l("li",null,[t[72]||(t[72]=e("Reduces ",-1)),n(s,null,{default:a(()=>[...t[71]||(t[71]=[e("code duplication",-1)])]),_:1})])])]),t[104]||(t[104]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l("div",Z,[l("ul",_,[l("li",null,[t[74]||(t[74]=e("Polymorphism means ",-1)),n(s,null,{default:a(()=>[...t[73]||(t[73]=[e('"many forms"',-1)])]),_:1})]),l("li",null,[n(s,null,{default:a(()=>[...t[75]||(t[75]=[e("Runtime polymorphism",-1)])]),_:1}),t[76]||(t[76]=e(" uses method overriding ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[77]||(t[77]=[e("Compile-time polymorphism",-1)])]),_:1}),t[78]||(t[78]=e(" uses method overloading ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[79]||(t[79]=[e("Upcasting",-1)])]),_:1}),t[80]||(t[80]=e(" treats subclass as superclass ",-1))]),l("li",null,[n(s,null,{default:a(()=>[...t[81]||(t[81]=[e("Downcasting",-1)])]),_:1}),t[82]||(t[82]=e(" requires instanceof check ",-1))]),l("li",null,[t[84]||(t[84]=e("Interfaces provide ",-1)),n(s,null,{default:a(()=>[...t[83]||(t[83]=[e("polymorphism",-1)])]),_:1}),t[85]||(t[85]=e(" across class hierarchies ",-1))]),l("li",null,[t[88]||(t[88]=e("Polymorphism enables ",-1)),n(s,null,{default:a(()=>[...t[86]||(t[86]=[e("flexible",-1)])]),_:1}),t[89]||(t[89]=e(" and ",-1)),n(s,null,{default:a(()=>[...t[87]||(t[87]=[e("maintainable",-1)])]),_:1}),t[90]||(t[90]=e(" code ",-1))]),l("li",null,[t[93]||(t[93]=e("Essential for ",-1)),n(s,null,{default:a(()=>[...t[91]||(t[91]=[e("design patterns",-1)])]),_:1}),t[94]||(t[94]=e(" and ",-1)),n(s,null,{default:a(()=>[...t[92]||(t[92]=[e("frameworks",-1)])]),_:1})])])])]),_:1},8,["navigation"]))}});export{ut as default};

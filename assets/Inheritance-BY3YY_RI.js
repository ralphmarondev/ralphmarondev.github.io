import{_ as O}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as s}from"./SpanHighlight-C-B7JT-9.js";import{C as a}from"./CodeBlock-DXevIYip.js";import{O as o}from"./OutputBlock-DW4hv_11.js";import{u as w}from"./javaProgramming-Pq2XLaCP.js";import{d as c,r,p as j,l as n,m as B,o as T,a as l,t as D,k as i,b as e}from"./index-DaKFBQPl.js";const k={class:"text-gray-600 mb-6 text-lg"},P={class:"mb-4"},R={class:"list-disc list-inside mb-4"},E={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},q={class:"text-gray-500 mb-6 text-lg"},J={class:"mb-4"},N={class:"text-gray-500 mb-6 text-lg"},z={class:"mb-4"},V={class:"text-gray-500 mb-6 text-lg"},U={class:"mb-4"},L={class:"list-disc list-inside mb-4"},K={class:"text-gray-500 mb-6 text-lg"},W={class:"mb-4"},$={class:"text-gray-500 mb-6 text-lg"},G={class:"mb-4"},H={class:"text-gray-500 mb-6 text-lg"},Y={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},X={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},Z={class:"list-disc list-inside text-gray-600"},h={class:"list-disc list-inside"},_={class:"text-gray-500 mb-6 text-lg"},tt={class:"list-disc list-inside"},et="July 29, 2026",dt=c({__name:"Inheritance",setup(lt){const u=w(),d=r(`
// Animal.java - Superclass
public class Animal {
    String name;
    int age;

    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void eat() {
        System.out.println(name + " is eating");
    }

    public void sleep() {
        System.out.println(name + " is sleeping");
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
}

// Dog.java - Subclass
public class Dog extends Animal {
    String breed;

    public Dog(String name, int age, String breed) {
        super(name, age); // Call superclass constructor
        this.breed = breed;
    }

    public void bark() {
        System.out.println(name + " is barking");
    }

    public void displayInfo() {
        super.displayInfo(); // Call superclass method
        System.out.println("Breed: " + breed);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");

        System.out.println("Dog Information:");
        dog.displayInfo();
        System.out.println();

        System.out.println("Dog Actions:");
        dog.eat();    // Inherited from Animal
        dog.sleep();  // Inherited from Animal
        dog.bark();   // Dog's own method
    }
}
`),p=r(`
Dog Information:
Name: Buddy
Age: 3
Breed: Golden Retriever

Dog Actions:
Buddy is eating
Buddy is sleeping
Buddy is barking
`),m=r(`
// Vehicle.java
public class Vehicle {
    String brand;
    int year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    public void start() {
        System.out.println(brand + " vehicle is starting");
    }

    public void stop() {
        System.out.println(brand + " vehicle is stopping");
    }
}

// Car.java - extends Vehicle
public class Car extends Vehicle {
    int numberOfDoors;

    public Car(String brand, int year, int numberOfDoors) {
        super(brand, year);
        this.numberOfDoors = numberOfDoors;
    }

    public void honk() {
        System.out.println(brand + " car is honking");
    }
}

// ElectricCar.java - extends Car
public class ElectricCar extends Car {
    int batteryCapacity;

    public ElectricCar(String brand, int year, int numberOfDoors, int batteryCapacity) {
        super(brand, year, numberOfDoors);
        this.batteryCapacity = batteryCapacity;
    }

    public void charge() {
        System.out.println(brand + " electric car is charging");
    }

    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
        System.out.println("Doors: " + numberOfDoors);
        System.out.println("Battery: " + batteryCapacity + " kWh");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        ElectricCar tesla = new ElectricCar("Tesla", 2023, 4, 75);

        System.out.println("Electric Car Info:");
        tesla.displayInfo();
        System.out.println();

        System.out.println("Car Actions:");
        tesla.start();   // From Vehicle
        tesla.honk();    // From Car
        tesla.charge();  // From ElectricCar
        tesla.stop();    // From Vehicle
    }
}
`),b=r(`
Electric Car Info:
Brand: Tesla
Year: 2023
Doors: 4
Battery: 75 kWh

Car Actions:
Tesla vehicle is starting
Tesla car is honking
Tesla electric car is charging
Tesla vehicle is stopping
`),g=r(`
// Shape.java
public class Shape {
    public double calculateArea() {
        return 0;
    }

    public void display() {
        System.out.println("This is a shape");
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
    public double calculateArea() {
        return length * width;
    }

    @Override
    public void display() {
        System.out.println("Rectangle: " + length + " x " + width);
        System.out.println("Area: " + calculateArea());
    }
}

// Circle.java
public class Circle extends Shape {
    double radius;

    public Circle(double radius) {
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public void display() {
        System.out.println("Circle: radius = " + radius);
        System.out.println("Area: " + calculateArea());
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Shape shape = new Shape();
        Rectangle rect = new Rectangle(5, 3);
        Circle circle = new Circle(4);

        System.out.println("Shape:");
        shape.display();
        System.out.println("Area: " + shape.calculateArea());
        System.out.println();

        System.out.println("Rectangle:");
        rect.display();
        System.out.println();

        System.out.println("Circle:");
        circle.display();
    }
}
`),y=r(`
Shape:
This is a shape
Area: 0.0

Rectangle:
Rectangle: 5.0 x 3.0
Area: 15.0

Circle:
Circle: radius = 4.0
Area: 50.26548245743669
`),S=r(`
// Employee.java
public class Employee {
    String name;
    double salary;
    String department;

    public Employee(String name, double salary, String department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        System.out.println("Employee constructor called");
    }

    public void work() {
        System.out.println(name + " is working in " + department);
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Salary: $" + salary);
        System.out.println("Department: " + department);
    }
}

// Manager.java
public class Manager extends Employee {
    int teamSize;
    String[] teamMembers;

    public Manager(String name, double salary, String department, int teamSize) {
        super(name, salary, department);
        this.teamSize = teamSize;
        this.teamMembers = new String[teamSize];
        System.out.println("Manager constructor called");
    }

    public void addTeamMember(String member, int index) {
        if(index >= 0 && index < teamSize) {
            teamMembers[index] = member;
            System.out.println(member + " added to team");
        }
    }

    @Override
    public void work() {
        super.work(); // Call parent method
        System.out.println(name + " is managing a team of " + teamSize);
    }

    public void displayTeam() {
        System.out.println("Team members:");
        for(String member : teamMembers) {
            if(member != null) {
                System.out.println("- " + member);
            }
        }
    }

    @Override
    public void displayInfo() {
        super.displayInfo();
        System.out.println("Team Size: " + teamSize);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Manager manager = new Manager("Alice", 75000, "IT", 3);
        System.out.println();

        manager.addTeamMember("Bob", 0);
        manager.addTeamMember("Carol", 1);
        manager.addTeamMember("Dave", 2);
        System.out.println();

        System.out.println("Manager Details:");
        manager.displayInfo();
        System.out.println();

        System.out.println("Manager Work:");
        manager.work();
        System.out.println();

        System.out.println("Team:");
        manager.displayTeam();
    }
}
`),v=r(`
Employee constructor called
Manager constructor called

Bob added to team
Carol added to team
Dave added to team

Manager Details:
Name: Alice
Salary: $75000.0
Department: IT
Team Size: 3

Manager Work:
Alice is working in IT
Alice is managing a team of 3

Team:
Team members:
- Bob
- Carol
- Dave
`),f=r(`
// Person.java
public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void display() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Student.java
public class Student extends Person {
    String studentId;
    String course;

    public Student(String name, int age, String studentId, String course) {
        super(name, age);
        this.studentId = studentId;
        this.course = course;
    }

    @Override
    public void display() {
        System.out.println("Student: " + name + ", Age: " + age);
        System.out.println("ID: " + studentId + ", Course: " + course);
    }
}

// Teacher.java
public class Teacher extends Person {
    String employeeId;
    String subject;

    public Teacher(String name, int age, String employeeId, String subject) {
        super(name, age);
        this.employeeId = employeeId;
        this.subject = subject;
    }

    @Override
    public void display() {
        System.out.println("Teacher: " + name + ", Age: " + age);
        System.out.println("ID: " + employeeId + ", Subject: " + subject);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Array of Person (polymorphic)
        Person[] people = new Person[4];

        people[0] = new Person("John", 30);
        people[1] = new Student("Ralph", 20, "S001", "CS");
        people[2] = new Teacher("Maria", 35, "T001", "Math");
        people[3] = new Student("Sarah", 22, "S002", "Engineering");

        System.out.println("Displaying all people:");
        System.out.println("=====================");
        for(Person person : people) {
            person.display();
            System.out.println("-----------");
        }
    }
}
`),x=r(`
Displaying all people:
=====================
Name: John, Age: 30
-----------
Student: Ralph, Age: 20
ID: S001, Course: CS
-----------
Teacher: Maria, Age: 35
ID: T001, Subject: Math
-----------
Student: Sarah, Age: 22
ID: S002, Course: Engineering
-----------
`),A=r(`
// ShapeBase.java
public class ShapeBase {
    protected String color;
    protected double x;
    protected double y;

    public ShapeBase(String color, double x, double y) {
        this.color = color;
        this.x = x;
        this.y = y;
    }

    protected void move(double dx, double dy) {
        x += dx;
        y += dy;
        System.out.println("Moved to (" + x + ", " + y + ")");
    }

    public void display() {
        System.out.println("Color: " + color);
        System.out.println("Position: (" + x + ", " + y + ")");
    }
}

// Square.java
public class Square extends ShapeBase {
    double side;

    public Square(String color, double x, double y, double side) {
        super(color, x, y);
        this.side = side;
    }

    public double calculateArea() {
        return side * side;
    }

    public void moveShape(double dx, double dy) {
        // Can access protected method from superclass
        move(dx, dy);
    }

    @Override
    public void display() {
        super.display();
        System.out.println("Side: " + side);
        System.out.println("Area: " + calculateArea());
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Square square = new Square("Red", 0, 0, 5);

        System.out.println("Initial Square:");
        square.display();
        System.out.println();

        square.moveShape(2, 3);
        System.out.println();

        System.out.println("After moving:");
        square.display();

        // Can access protected fields from subclass
        System.out.println();
        System.out.println("Accessing protected members:");
        System.out.println("Color: " + square.color);
    }
}
`),M=r(`
Initial Square:
Color: Red
Position: (0.0, 0.0)
Side: 5.0
Area: 25.0

Moved to (2.0, 3.0)

After moving:
Color: Red
Position: (2.0, 3.0)
Side: 5.0
Area: 25.0

Accessing protected members:
Color: Red
`),C=r(`
// Animal.java
public class Animal {
    public void eat() {
        System.out.println("Animal eating");
    }
}

// Mammal.java
public class Mammal extends Animal {
    public void feedMilk() {
        System.out.println("Mammal feeding milk");
    }
}

// Bird.java
public class Bird extends Animal {
    public void fly() {
        System.out.println("Bird flying");
    }
}

// Cannot inherit from multiple classes
// public class Bat extends Mammal, Bird { } // Error!

// Interface-based multiple inheritance
interface Flyable {
    void fly();
}

interface Feedable {
    void feed();
}

// Bat extends one class and implements multiple interfaces
class Bat extends Mammal implements Flyable, Feedable {
    @Override
    public void fly() {
        System.out.println("Bat flying");
    }

    @Override
    public void feed() {
        System.out.println("Bat feeding");
    }

    public void display() {
        eat();      // From Animal
        feedMilk(); // From Mammal
        fly();      // From Flyable
        feed();     // From Feedable
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Bat bat = new Bat();
        System.out.println("Bat capabilities:");
        bat.display();
        System.out.println();

        System.out.println("Note: Java supports single inheritance (one class)");
        System.out.println("but multiple interfaces can be implemented");
    }
}
`),I=r(`
Bat capabilities:
Animal eating
Mammal feeding milk
Bat flying
Bat feeding

Note: Java supports single inheritance (one class)
but multiple interfaces can be implemented
`);return(it,t)=>(T(),j(O,{title:"Java Programming",navigation:B(u).sections},{default:n(()=>[t[110]||(t[110]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Inheritance in Java ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+D(et)),l("div",k,[l("p",P,[i(s,null,{default:n(()=>[...t[0]||(t[0]=[e("Inheritance",-1)])]),_:1}),t[2]||(t[2]=e(" is an OOP concept where a class (subclass) inherits properties and behaviors from another class (superclass). It establishes an ",-1)),i(s,null,{default:n(()=>[...t[1]||(t[1]=[e("is-a",-1)])]),_:1}),t[3]||(t[3]=e(" relationship. ",-1))]),t[14]||(t[14]=l("p",{class:"mb-4"}," Key concepts: ",-1)),l("ul",R,[l("li",null,[i(s,null,{default:n(()=>[...t[4]||(t[4]=[e("Superclass",-1)])]),_:1}),t[5]||(t[5]=e(" (Parent) - The class being inherited from ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[6]||(t[6]=[e("Subclass",-1)])]),_:1}),t[7]||(t[7]=e(" (Child) - The class that inherits ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[8]||(t[8]=[e("extends",-1)])]),_:1}),t[9]||(t[9]=e(" keyword - Used to create inheritance ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[10]||(t[10]=[e("Reusability",-1)])]),_:1}),t[11]||(t[11]=e(" - Code reuse through inheritance ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[12]||(t[12]=[e("Method Overriding",-1)])]),_:1}),t[13]||(t[13]=e(" - Redefining methods in subclass ",-1))])])]),t[111]||(t[111]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Inheritance ",-1)),l("div",E,[l("p",F,[t[18]||(t[18]=e(" A ",-1)),i(s,null,{default:n(()=>[...t[15]||(t[15]=[e("subclass",-1)])]),_:1}),t[19]||(t[19]=e(" inherits all non-private members from its ",-1)),i(s,null,{default:n(()=>[...t[16]||(t[16]=[e("superclass",-1)])]),_:1}),t[20]||(t[20]=e(" . Use the ",-1)),i(s,null,{default:n(()=>[...t[17]||(t[17]=[e("extends",-1)])]),_:1}),t[21]||(t[21]=e(" keyword. ",-1))]),i(a,{code:d.value,language:"java"},null,8,["code"]),t[22]||(t[22]=l("p",{class:"mt-4"},"Output:",-1)),i(o,{output:p.value},null,8,["output"])]),t[112]||(t[112]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Multi-level Inheritance ",-1)),l("div",q,[l("p",J,[t[24]||(t[24]=e(" Java supports ",-1)),i(s,null,{default:n(()=>[...t[23]||(t[23]=[e("multi-level inheritance",-1)])]),_:1}),t[25]||(t[25]=e(" where a class can inherit from another class, which in turn inherits from another class. ",-1))]),i(a,{code:m.value,language:"java"},null,8,["code"]),t[26]||(t[26]=l("p",{class:"mt-4"},"Output:",-1)),i(o,{output:b.value},null,8,["output"])]),t[113]||(t[113]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Method Overriding ",-1)),l("div",N,[l("p",z,[i(s,null,{default:n(()=>[...t[27]||(t[27]=[e("Method overriding",-1)])]),_:1}),t[29]||(t[29]=e(" allows a subclass to provide a specific implementation of a method that is already defined in its superclass. Use ",-1)),i(s,null,{default:n(()=>[...t[28]||(t[28]=[e("@Override",-1)])]),_:1}),t[30]||(t[30]=e(" annotation. ",-1))]),i(a,{code:g.value,language:"java"},null,8,["code"]),t[31]||(t[31]=l("p",{class:"mt-4"},"Output:",-1)),i(o,{output:y.value},null,8,["output"])]),t[114]||(t[114]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The 'super' Keyword ",-1)),l("div",V,[l("p",U,[t[33]||(t[33]=e(" The ",-1)),i(s,null,{default:n(()=>[...t[32]||(t[32]=[e("super",-1)])]),_:1}),t[34]||(t[34]=e(" keyword is used to: ",-1))]),l("ul",L,[l("li",null,[t[36]||(t[36]=e("Call the ",-1)),i(s,null,{default:n(()=>[...t[35]||(t[35]=[e("superclass constructor",-1)])]),_:1})]),l("li",null,[t[38]||(t[38]=e("Access ",-1)),i(s,null,{default:n(()=>[...t[37]||(t[37]=[e("superclass methods",-1)])]),_:1})]),l("li",null,[t[40]||(t[40]=e("Access ",-1)),i(s,null,{default:n(()=>[...t[39]||(t[39]=[e("superclass fields",-1)])]),_:1})])]),i(a,{code:S.value,language:"java"},null,8,["code"]),t[41]||(t[41]=l("p",{class:"mt-4"},"Output:",-1)),i(o,{output:v.value},null,8,["output"])]),t[115]||(t[115]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Polymorphic Arrays ",-1)),l("div",K,[l("p",W,[t[45]||(t[45]=e(" A ",-1)),i(s,null,{default:n(()=>[...t[42]||(t[42]=[e("polymorphic array",-1)])]),_:1}),t[46]||(t[46]=e(" can hold objects of different subclasses, allowing ",-1)),i(s,null,{default:n(()=>[...t[43]||(t[43]=[e("flexible",-1)])]),_:1}),t[47]||(t[47]=e(" and ",-1)),i(s,null,{default:n(()=>[...t[44]||(t[44]=[e("extensible",-1)])]),_:1}),t[48]||(t[48]=e(" code. ",-1))]),i(a,{code:f.value,language:"java"},null,8,["code"]),t[49]||(t[49]=l("p",{class:"mt-4"},"Output:",-1)),i(o,{output:x.value},null,8,["output"])]),t[116]||(t[116]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Protected Members ",-1)),l("div",$,[l("p",G,[i(s,null,{default:n(()=>[...t[50]||(t[50]=[e("Protected",-1)])]),_:1}),t[52]||(t[52]=e(" members are accessible to subclasses, providing ",-1)),i(s,null,{default:n(()=>[...t[51]||(t[51]=[e("controlled inheritance",-1)])]),_:1}),t[53]||(t[53]=e(" without exposing to all classes. ",-1))]),i(a,{code:A.value,language:"java"},null,8,["code"]),t[54]||(t[54]=l("p",{class:"mt-4"},"Output:",-1)),i(o,{output:M.value},null,8,["output"])]),t[117]||(t[117]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Inheritance Limitations ",-1)),l("div",H,[l("p",Y,[t[57]||(t[57]=e(" Java supports ",-1)),i(s,null,{default:n(()=>[...t[55]||(t[55]=[e("single inheritance",-1)])]),_:1}),t[58]||(t[58]=e(" (a class can extend only one superclass). However, ",-1)),i(s,null,{default:n(()=>[...t[56]||(t[56]=[e("multiple interfaces",-1)])]),_:1}),t[59]||(t[59]=e(" can be implemented. ",-1))]),i(a,{code:C.value,language:"java"},null,8,["code"]),t[60]||(t[60]=l("p",{class:"mt-4"},"Output:",-1)),i(o,{output:I.value},null,8,["output"])]),t[118]||(t[118]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Inheritance ",-1)),l("div",Q,[l("div",X,[t[77]||(t[77]=l("p",{class:"text-blue-700 font-semibold"},"Key Points:",-1)),l("ul",Z,[l("li",null,[t[62]||(t[62]=e("Use ",-1)),i(s,null,{default:n(()=>[...t[61]||(t[61]=[e("extends",-1)])]),_:1}),t[63]||(t[63]=e(" for inheritance ",-1))]),l("li",null,[t[65]||(t[65]=e("Subclasses inherit ",-1)),i(s,null,{default:n(()=>[...t[64]||(t[64]=[e("all non-private members",-1)])]),_:1})]),l("li",null,[t[67]||(t[67]=e("Use ",-1)),i(s,null,{default:n(()=>[...t[66]||(t[66]=[e("super()",-1)])]),_:1}),t[68]||(t[68]=e(" to call superclass constructor ",-1))]),l("li",null,[t[70]||(t[70]=e("Use ",-1)),i(s,null,{default:n(()=>[...t[69]||(t[69]=[e("super",-1)])]),_:1}),t[71]||(t[71]=e(" to access superclass members ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[72]||(t[72]=[e("@Override",-1)])]),_:1}),t[73]||(t[73]=e(" annotation is optional but recommended ",-1))]),l("li",null,[t[75]||(t[75]=e("Java supports ",-1)),i(s,null,{default:n(()=>[...t[74]||(t[74]=[e("single inheritance",-1)])]),_:1}),t[76]||(t[76]=e(" only ",-1))])])]),l("ul",h,[l("li",null,[t[79]||(t[79]=e("Constructors are ",-1)),i(s,null,{default:n(()=>[...t[78]||(t[78]=[e("not inherited",-1)])]),_:1})]),l("li",null,[i(s,null,{default:n(()=>[...t[80]||(t[80]=[e("Private",-1)])]),_:1}),t[81]||(t[81]=e(" members are not inherited ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[82]||(t[82]=[e("Protected",-1)])]),_:1}),t[83]||(t[83]=e(" members are accessible in subclasses ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[84]||(t[84]=[e("Method overriding",-1)])]),_:1}),t[85]||(t[85]=e(" requires same signature ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[86]||(t[86]=[e("final",-1)])]),_:1}),t[87]||(t[87]=e(" classes cannot be extended ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[88]||(t[88]=[e("Abstract",-1)])]),_:1}),t[89]||(t[89]=e(" classes must be extended ",-1))])])]),t[119]||(t[119]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l("div",_,[l("ul",tt,[l("li",null,[t[91]||(t[91]=e("Inheritance establishes an ",-1)),i(s,null,{default:n(()=>[...t[90]||(t[90]=[e("is-a",-1)])]),_:1}),t[92]||(t[92]=e(" relationship ",-1))]),l("li",null,[t[94]||(t[94]=e("Subclasses ",-1)),i(s,null,{default:n(()=>[...t[93]||(t[93]=[e("reuse",-1)])]),_:1}),t[95]||(t[95]=e(" code from superclasses ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[96]||(t[96]=[e("Method overriding",-1)])]),_:1}),t[97]||(t[97]=e(" provides specific implementations ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[98]||(t[98]=[e("super",-1)])]),_:1}),t[99]||(t[99]=e(" accesses superclass members ",-1))]),l("li",null,[t[101]||(t[101]=e("Java supports ",-1)),i(s,null,{default:n(()=>[...t[100]||(t[100]=[e("single inheritance",-1)])]),_:1})]),l("li",null,[i(s,null,{default:n(()=>[...t[102]||(t[102]=[e("Multiple interfaces",-1)])]),_:1}),t[103]||(t[103]=e(" can be implemented ",-1))]),l("li",null,[i(s,null,{default:n(()=>[...t[104]||(t[104]=[e("Protected",-1)])]),_:1}),t[105]||(t[105]=e(" members support controlled inheritance ",-1))]),l("li",null,[t[108]||(t[108]=e("Inheritance promotes ",-1)),i(s,null,{default:n(()=>[...t[106]||(t[106]=[e("code reuse",-1)])]),_:1}),t[109]||(t[109]=e(" and ",-1)),i(s,null,{default:n(()=>[...t[107]||(t[107]=[e("extensibility",-1)])]),_:1})])])])]),_:1},8,["navigation"]))}});export{dt as default};

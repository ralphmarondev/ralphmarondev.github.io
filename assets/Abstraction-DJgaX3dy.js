import{_ as w}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as a}from"./SpanHighlight-D5QJRDV8.js";import{C as o}from"./CodeBlock-DZMpBSrv.js";import{O as r}from"./OutputBlock-DUAjxao7.js";import{u as A}from"./javaProgramming-DvM3X4gn.js";import{d as P,h as x,i as n,s as I,o as k,a as i,t as C,q as l,g as e,r as s}from"./index-fUs2VaN6.js";const O={class:"text-gray-600 mb-6 text-lg"},B={class:"mb-4"},D={class:"list-disc list-inside mb-4"},M={class:"text-gray-500 mb-6 text-lg"},N={class:"mb-4"},j={class:"text-gray-500 mb-6 text-lg"},R={class:"mb-4"},V={class:"text-gray-500 mb-6 text-lg"},H={class:"mb-4"},T={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},E={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},z={class:"text-gray-500 mb-6 text-lg"},U={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},J={class:"list-disc list-inside text-gray-600"},L={class:"list-disc list-inside"},h={class:"text-gray-500 mb-6 text-lg"},W={class:"list-disc list-inside"},K="July 29, 2026",et=P({__name:"Abstraction",setup(Q){const u=A(),d=s(`
// Vehicle.java - Abstract class
public abstract class Vehicle {
    protected String brand;
    protected int year;

    public Vehicle(String brand, int year) {
        this.brand = brand;
        this.year = year;
    }

    // Abstract method - no implementation
    public abstract void startEngine();

    // Abstract method
    public abstract void stopEngine();

    // Concrete method - with implementation
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Year: " + year);
    }
}

// Car.java - Concrete class
public class Car extends Vehicle {
    private int numberOfDoors;

    public Car(String brand, int year, int numberOfDoors) {
        super(brand, year);
        this.numberOfDoors = numberOfDoors;
    }

    @Override
    public void startEngine() {
        System.out.println(brand + " car engine starting... Vroom!");
    }

    @Override
    public void stopEngine() {
        System.out.println(brand + " car engine stopping...");
    }

    public void displayCarInfo() {
        displayInfo();
        System.out.println("Doors: " + numberOfDoors);
    }
}

// Motorcycle.java - Concrete class
public class Motorcycle extends Vehicle {
    private boolean hasSidecar;

    public Motorcycle(String brand, int year, boolean hasSidecar) {
        super(brand, year);
        this.hasSidecar = hasSidecar;
    }

    @Override
    public void startEngine() {
        System.out.println(brand + " motorcycle engine starting... Rev!");
    }

    @Override
    public void stopEngine() {
        System.out.println(brand + " motorcycle engine stopping...");
    }

    public void displayMotorcycleInfo() {
        displayInfo();
        System.out.println("Has Sidecar: " + hasSidecar);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        // Cannot instantiate abstract class
        // Vehicle vehicle = new Vehicle("Toyota", 2023); // Error!

        Car car = new Car("Toyota", 2023, 4);
        Motorcycle bike = new Motorcycle("Harley", 2022, false);

        System.out.println("Car Information:");
        car.displayCarInfo();
        car.startEngine();
        car.stopEngine();

        System.out.println();
        System.out.println("Motorcycle Information:");
        bike.displayMotorcycleInfo();
        bike.startEngine();
        bike.stopEngine();
    }
}
`),m=s(`
Car Information:
Brand: Toyota
Year: 2023
Doors: 4
Toyota car engine starting... Vroom!
Toyota car engine stopping...

Motorcycle Information:
Brand: Harley
Year: 2022
Has Sidecar: false
Harley motorcycle engine starting... Rev!
Harley motorcycle engine stopping...
`),p=s(`
// Shape.java
public abstract class Shape {
    private String color;

    public Shape(String color) {
        this.color = color;
    }

    // Abstract methods
    public abstract double calculateArea();
    public abstract double calculatePerimeter();

    // Concrete method
    public String getColor() {
        return color;
    }

    public void display() {
        System.out.println("Color: " + color);
        System.out.println("Area: " + calculateArea());
        System.out.println("Perimeter: " + calculatePerimeter());
    }
}

// Circle.java
public class Circle extends Shape {
    private double radius;

    public Circle(String color, double radius) {
        super(color);
        this.radius = radius;
    }

    @Override
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    @Override
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }

    public double getRadius() {
        return radius;
    }
}

// Rectangle.java
public class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(String color, double length, double width) {
        super(color);
        this.length = length;
        this.width = width;
    }

    @Override
    public double calculateArea() {
        return length * width;
    }

    @Override
    public double calculatePerimeter() {
        return 2 * (length + width);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Shape circle = new Circle("Red", 5);
        Shape rectangle = new Rectangle("Blue", 4, 6);

        System.out.println("Circle:");
        circle.display();
        System.out.println();

        System.out.println("Rectangle:");
        rectangle.display();
    }
}
`),b=s(`
Circle:
Color: Red
Area: 78.53981633974483
Perimeter: 31.41592653589793

Rectangle:
Color: Blue
Area: 24.0
Perimeter: 20.0
`),c=s(`
// Drawable.java
public interface Drawable {
    void draw();
    void resize(double factor);
}

// Playable.java
public interface Playable {
    void play();
    void pause();
    void stop();
}

// MusicPlayer.java - Implements Drawable and Playable
public class MusicPlayer implements Drawable, Playable {
    private String songName;
    private boolean isPlaying;

    public MusicPlayer(String songName) {
        this.songName = songName;
        this.isPlaying = false;
    }

    @Override
    public void draw() {
        System.out.println("Drawing music player interface");
        System.out.println("Currently playing: " + songName);
        System.out.println("Status: " + (isPlaying ? "Playing" : "Paused"));
    }

    @Override
    public void resize(double factor) {
        System.out.println("Resizing music player by " + (factor * 100) + "%");
    }

    @Override
    public void play() {
        isPlaying = true;
        System.out.println("Playing: " + songName);
    }

    @Override
    public void pause() {
        isPlaying = false;
        System.out.println("Paused: " + songName);
    }

    @Override
    public void stop() {
        isPlaying = false;
        System.out.println("Stopped: " + songName);
    }
}

// VideoPlayer.java - Implements Drawable and Playable
public class VideoPlayer implements Drawable, Playable {
    private String videoTitle;
    private boolean isPlaying;

    public VideoPlayer(String videoTitle) {
        this.videoTitle = videoTitle;
        this.isPlaying = false;
    }

    @Override
    public void draw() {
        System.out.println("Drawing video player interface");
        System.out.println("Currently playing: " + videoTitle);
        System.out.println("Status: " + (isPlaying ? "Playing" : "Paused"));
    }

    @Override
    public void resize(double factor) {
        System.out.println("Resizing video player by " + (factor * 100) + "%");
    }

    @Override
    public void play() {
        isPlaying = true;
        System.out.println("Playing video: " + videoTitle);
    }

    @Override
    public void pause() {
        isPlaying = false;
        System.out.println("Paused video: " + videoTitle);
    }

    @Override
    public void stop() {
        isPlaying = false;
        System.out.println("Stopped video: " + videoTitle);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        MusicPlayer music = new MusicPlayer("Bohemian Rhapsody");
        VideoPlayer video = new VideoPlayer("Inception");

        System.out.println("Using Music Player:");
        System.out.println("------------------");
        music.play();
        music.draw();
        music.resize(1.5);
        music.pause();
        System.out.println();

        System.out.println("Using Video Player:");
        System.out.println("------------------");
        video.play();
        video.draw();
        video.resize(2.0);
        video.stop();
        System.out.println();

        System.out.println("Polymorphism with Interfaces:");
        System.out.println("----------------------------");
        Playable[] playables = {music, video};
        for(Playable p : playables) {
            p.play();
            p.pause();
        }
    }
}
`),y=s(`
Using Music Player:
------------------
Playing: Bohemian Rhapsody
Drawing music player interface
Currently playing: Bohemian Rhapsody
Status: Playing
Resizing music player by 150.0%
Paused: Bohemian Rhapsody

Using Video Player:
------------------
Playing video: Inception
Drawing video player interface
Currently playing: Inception
Status: Playing
Resizing video player by 200.0%
Stopped video: Inception

Polymorphism with Interfaces:
----------------------------
Playing: Bohemian Rhapsody
Paused: Bohemian Rhapsody
Playing video: Inception
Paused video: Inception
`),g=s(`
// Animal.java - Abstract class
public abstract class Animal {
    protected String name;

    public Animal(String name) {
        this.name = name;
    }

    public abstract void makeSound();

    public void eat() {
        System.out.println(name + " is eating");
    }
}

// Flyable.java - Interface
public interface Flyable {
    void fly();
}

// Swimmable.java - Interface
public interface Swimmable {
    void swim();
}

// Bird.java - Extends abstract class, implements interface
public class Bird extends Animal implements Flyable {
    public Bird(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(name + " chirps: Tweet! Tweet!");
    }

    @Override
    public void fly() {
        System.out.println(name + " is flying");
    }
}

// Fish.java - Extends abstract class, implements interface
public class Fish extends Animal implements Swimmable {
    public Fish(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(name + " makes bubbles: Blub! Blub!");
    }

    @Override
    public void swim() {
        System.out.println(name + " is swimming");
    }
}

// Duck.java - Extends abstract class, implements multiple interfaces
public class Duck extends Animal implements Flyable, Swimmable {
    public Duck(String name) {
        super(name);
    }

    @Override
    public void makeSound() {
        System.out.println(name + " quacks: Quack! Quack!");
    }

    @Override
    public void fly() {
        System.out.println(name + " is flying");
    }

    @Override
    public void swim() {
        System.out.println(name + " is swimming");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Bird bird = new Bird("Sparrow");
        Fish fish = new Fish("Nemo");
        Duck duck = new Duck("Donald");

        System.out.println("Bird:");
        bird.eat();
        bird.makeSound();
        bird.fly();
        System.out.println();

        System.out.println("Fish:");
        fish.eat();
        fish.makeSound();
        fish.swim();
        System.out.println();

        System.out.println("Duck:");
        duck.eat();
        duck.makeSound();
        duck.fly();
        duck.swim();
        System.out.println();

        System.out.println("Polymorphism with Interfaces:");
        Flyable[] flyers = {bird, duck};
        for(Flyable f : flyers) {
            f.fly();
        }

        Swimmable[] swimmers = {fish, duck};
        for(Swimmable s : swimmers) {
            s.swim();
        }
    }
}
`),v=s(`
Bird:
Sparrow is eating
Sparrow chirps: Tweet! Tweet!
Sparrow is flying

Fish:
Nemo is eating
Nemo makes bubbles: Blub! Blub!
Nemo is swimming

Duck:
Donald is eating
Donald quacks: Quack! Quack!
Donald is flying
Donald is swimming

Polymorphism with Interfaces:
Sparrow is flying
Donald is flying
Nemo is swimming
Donald is swimming
`),f=s(`
// Account.java - Abstract class
public abstract class Account {
    protected String accountNumber;
    protected String accountHolder;
    protected double balance;

    public Account(String accountNumber, String accountHolder, double initialBalance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = initialBalance;
    }

    // Abstract methods
    public abstract void deposit(double amount);
    public abstract void withdraw(double amount);
    public abstract double calculateInterest();

    // Concrete methods
    public double getBalance() {
        return balance;
    }

    public void displayInfo() {
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Balance: $" + balance);
        System.out.println("Interest: $" + calculateInterest());
    }
}

// SavingsAccount.java
public class SavingsAccount extends Account {
    private double interestRate;

    public SavingsAccount(String accountNumber, String accountHolder, double initialBalance, double interestRate) {
        super(accountNumber, accountHolder, initialBalance);
        this.interestRate = interestRate;
    }

    @Override
    public void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    @Override
    public void withdraw(double amount) {
        if(amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Invalid withdrawal amount");
        }
    }

    @Override
    public double calculateInterest() {
        return balance * interestRate / 100;
    }
}

// CheckingAccount.java
public class CheckingAccount extends Account {
    private double overdraftLimit;

    public CheckingAccount(String accountNumber, String accountHolder, double initialBalance, double overdraftLimit) {
        super(accountNumber, accountHolder, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }

    @Override
    public void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }

    @Override
    public void withdraw(double amount) {
        if(amount > 0 && (balance - amount) >= -overdraftLimit) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
        } else {
            System.out.println("Insufficient funds or overdraft limit exceeded");
        }
    }

    @Override
    public double calculateInterest() {
        // No interest for checking accounts
        return 0;
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Account savings = new SavingsAccount("SAV001", "Ralph", 5000, 3.5);
        Account checking = new CheckingAccount("CHK001", "Maria", 2000, 500);

        System.out.println("Savings Account:");
        savings.deposit(1000);
        savings.withdraw(500);
        savings.displayInfo();
        System.out.println();

        System.out.println("Checking Account:");
        checking.deposit(500);
        checking.withdraw(3000);
        checking.displayInfo();
        System.out.println();

        System.out.println("Polymorphic processing:");
        Account[] accounts = {savings, checking};
        for(Account acc : accounts) {
            System.out.println("Interest earned: $" + acc.calculateInterest());
        }
    }
}
`),S=s(`
Savings Account:
Deposited: $1000.0
Withdrawn: $500.0
Account Number: SAV001
Account Holder: Ralph
Balance: $5500.0
Interest: $192.5

Checking Account:
Deposited: $500.0
Withdrawn: $3000.0
Account Number: CHK001
Account Holder: Maria
Balance: $-500.0
Interest: $0.0

Polymorphic processing:
Interest earned: $192.5
Interest earned: $0.0
`);return(q,t)=>(k(),x(w,{title:"Java Programming",navigation:I(u).sections},{default:n(()=>[t[87]||(t[87]=i("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Abstraction in Java ",-1)),i("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+C(K)),i("div",O,[i("p",B,[l(a,null,{default:n(()=>[...t[0]||(t[0]=[e("Abstraction",-1)])]),_:1}),t[2]||(t[2]=e(" is the process of hiding implementation details and showing only essential features. It provides a ",-1)),l(a,null,{default:n(()=>[...t[1]||(t[1]=[e("blueprint",-1)])]),_:1}),t[3]||(t[3]=e(" for classes while hiding the complexity. ",-1))]),t[14]||(t[14]=i("p",{class:"mb-4"}," Key concepts: ",-1)),i("ul",D,[i("li",null,[l(a,null,{default:n(()=>[...t[4]||(t[4]=[e("Abstract classes",-1)])]),_:1}),t[5]||(t[5]=e(" - Classes that cannot be instantiated ",-1))]),i("li",null,[l(a,null,{default:n(()=>[...t[6]||(t[6]=[e("Abstract methods",-1)])]),_:1}),t[7]||(t[7]=e(" - Methods without implementation ",-1))]),i("li",null,[l(a,null,{default:n(()=>[...t[8]||(t[8]=[e("Interfaces",-1)])]),_:1}),t[9]||(t[9]=e(" - Fully abstract types with method signatures ",-1))]),i("li",null,[l(a,null,{default:n(()=>[...t[10]||(t[10]=[e("Concrete classes",-1)])]),_:1}),t[11]||(t[11]=e(" - Classes that implement abstract methods ",-1))]),i("li",null,[l(a,null,{default:n(()=>[...t[12]||(t[12]=[e("Hides complexity",-1)])]),_:1}),t[13]||(t[13]=e(" - Shows only what's necessary ",-1))])])]),t[88]||(t[88]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Abstract Classes ",-1)),i("div",M,[i("p",N,[t[17]||(t[17]=e(" An ",-1)),l(a,null,{default:n(()=>[...t[15]||(t[15]=[e("abstract class",-1)])]),_:1}),t[18]||(t[18]=e(" cannot be instantiated and may contain both abstract and concrete methods. It provides a ",-1)),l(a,null,{default:n(()=>[...t[16]||(t[16]=[e("common base",-1)])]),_:1}),t[19]||(t[19]=e(" for subclasses. ",-1))]),l(o,{code:d.value,language:"java"},null,8,["code"]),t[20]||(t[20]=i("p",{class:"mt-4"},"Output:",-1)),l(r,{output:m.value},null,8,["output"])]),t[89]||(t[89]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Abstract Methods ",-1)),i("div",j,[i("p",R,[l(a,null,{default:n(()=>[...t[21]||(t[21]=[e("Abstract methods",-1)])]),_:1}),t[23]||(t[23]=e(" are declared without implementation. Subclasses must provide ",-1)),l(a,null,{default:n(()=>[...t[22]||(t[22]=[e("concrete implementations",-1)])]),_:1}),t[24]||(t[24]=e(" . ",-1))]),l(o,{code:p.value,language:"java"},null,8,["code"]),t[25]||(t[25]=i("p",{class:"mt-4"},"Output:",-1)),l(r,{output:b.value},null,8,["output"])]),t[90]||(t[90]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Interfaces ",-1)),i("div",V,[i("p",H,[l(a,null,{default:n(()=>[...t[26]||(t[26]=[e("Interfaces",-1)])]),_:1}),t[28]||(t[28]=e(" define a contract that classes must implement. They can contain ",-1)),l(a,null,{default:n(()=>[...t[27]||(t[27]=[e("method signatures",-1)])]),_:1}),t[29]||(t[29]=e(" , and since Java 8, default and static methods. ",-1))]),l(o,{code:c.value,language:"java"},null,8,["code"]),t[30]||(t[30]=i("p",{class:"mt-4"},"Output:",-1)),l(r,{output:y.value},null,8,["output"])]),t[91]||(t[91]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Abstract Classes vs Interfaces ",-1)),i("div",T,[i("p",$,[t[33]||(t[33]=e(" Combining ",-1)),l(a,null,{default:n(()=>[...t[31]||(t[31]=[e("abstract classes",-1)])]),_:1}),t[34]||(t[34]=e(" and ",-1)),l(a,null,{default:n(()=>[...t[32]||(t[32]=[e("interfaces",-1)])]),_:1}),t[35]||(t[35]=e(" provides both common implementation and multiple inheritance of type. ",-1))]),l(o,{code:g.value,language:"java"},null,8,["code"]),t[36]||(t[36]=i("p",{class:"mt-4"},"Output:",-1)),l(r,{output:v.value},null,8,["output"])]),t[92]||(t[92]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Real-World Example: Banking System ",-1)),i("div",E,[i("p",F,[t[38]||(t[38]=e(" A ",-1)),l(a,null,{default:n(()=>[...t[37]||(t[37]=[e("banking system",-1)])]),_:1}),t[39]||(t[39]=e(" demonstrates abstraction where different account types share common behavior but have specific implementations. ",-1))]),l(o,{code:f.value,language:"java"},null,8,["code"]),t[40]||(t[40]=i("p",{class:"mt-4"},"Output:",-1)),l(r,{output:S.value},null,8,["output"])]),t[93]||(t[93]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Abstraction ",-1)),i("div",z,[i("div",U,[t[57]||(t[57]=i("p",{class:"text-blue-700 font-semibold"},"Key Points:",-1)),i("ul",J,[i("li",null,[l(a,null,{default:n(()=>[...t[41]||(t[41]=[e("Abstract classes",-1)])]),_:1}),t[42]||(t[42]=e(" can have constructors ",-1))]),i("li",null,[l(a,null,{default:n(()=>[...t[43]||(t[43]=[e("Interfaces",-1)])]),_:1}),t[44]||(t[44]=e(" cannot have constructors ",-1))]),i("li",null,[t[46]||(t[46]=e("Abstract classes can have ",-1)),l(a,null,{default:n(()=>[...t[45]||(t[45]=[e("state",-1)])]),_:1}),t[47]||(t[47]=e(" (fields) ",-1))]),i("li",null,[t[49]||(t[49]=e("Interfaces have ",-1)),l(a,null,{default:n(()=>[...t[48]||(t[48]=[e("static final fields",-1)])]),_:1}),t[50]||(t[50]=e(" only ",-1))]),i("li",null,[t[52]||(t[52]=e("A class can extend ",-1)),l(a,null,{default:n(()=>[...t[51]||(t[51]=[e("only one",-1)])]),_:1}),t[53]||(t[53]=e(" abstract class ",-1))]),i("li",null,[t[55]||(t[55]=e("A class can implement ",-1)),l(a,null,{default:n(()=>[...t[54]||(t[54]=[e("multiple",-1)])]),_:1}),t[56]||(t[56]=e(" interfaces ",-1))])])]),i("ul",L,[i("li",null,[t[59]||(t[59]=e("Abstract classes can have ",-1)),l(a,null,{default:n(()=>[...t[58]||(t[58]=[e("concrete methods",-1)])]),_:1})]),i("li",null,[t[61]||(t[61]=e("Interfaces can have ",-1)),l(a,null,{default:n(()=>[...t[60]||(t[60]=[e("default methods",-1)])]),_:1}),t[62]||(t[62]=e(" (Java 8+) ",-1))]),i("li",null,[t[64]||(t[64]=e("Use abstract classes for ",-1)),l(a,null,{default:n(()=>[...t[63]||(t[63]=[e("common code reuse",-1)])]),_:1})]),i("li",null,[t[66]||(t[66]=e("Use interfaces for ",-1)),l(a,null,{default:n(()=>[...t[65]||(t[65]=[e("defining contracts",-1)])]),_:1})]),i("li",null,[t[68]||(t[68]=e("Abstraction improves ",-1)),l(a,null,{default:n(()=>[...t[67]||(t[67]=[e("code maintainability",-1)])]),_:1})])])]),t[94]||(t[94]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),i("div",h,[i("ul",W,[i("li",null,[t[70]||(t[70]=e("Abstraction ",-1)),l(a,null,{default:n(()=>[...t[69]||(t[69]=[e("hides implementation details",-1)])]),_:1})]),i("li",null,[l(a,null,{default:n(()=>[...t[71]||(t[71]=[e("Abstract classes",-1)])]),_:1}),t[72]||(t[72]=e(" provide partial implementation ",-1))]),i("li",null,[l(a,null,{default:n(()=>[...t[73]||(t[73]=[e("Interfaces",-1)])]),_:1}),t[74]||(t[74]=e(" define complete contracts ",-1))]),i("li",null,[l(a,null,{default:n(()=>[...t[75]||(t[75]=[e("Abstract methods",-1)])]),_:1}),t[76]||(t[76]=e(" are implemented by subclasses ",-1))]),i("li",null,[t[78]||(t[78]=e("Classes can extend ",-1)),l(a,null,{default:n(()=>[...t[77]||(t[77]=[e("one abstract class",-1)])]),_:1})]),i("li",null,[t[80]||(t[80]=e("Classes can implement ",-1)),l(a,null,{default:n(()=>[...t[79]||(t[79]=[e("multiple interfaces",-1)])]),_:1})]),i("li",null,[t[82]||(t[82]=e("Abstraction is essential for ",-1)),l(a,null,{default:n(()=>[...t[81]||(t[81]=[e("flexible design",-1)])]),_:1})]),i("li",null,[t[85]||(t[85]=e("Promotes ",-1)),l(a,null,{default:n(()=>[...t[83]||(t[83]=[e("loose coupling",-1)])]),_:1}),t[86]||(t[86]=e(" and ",-1)),l(a,null,{default:n(()=>[...t[84]||(t[84]=[e("maintainability",-1)])]),_:1})])])])]),_:1},8,["navigation"]))}});export{et as default};

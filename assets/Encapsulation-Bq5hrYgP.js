import{_ as E}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as s}from"./SpanHighlight-D5QJRDV8.js";import{C as a}from"./CodeBlock-DZMpBSrv.js";import{O as r}from"./OutputBlock-DUAjxao7.js";import{u as I}from"./javaProgramming-DvM3X4gn.js";import{d as x,h as P,i as l,s as k,o as N,a as e,t as B,q as i,g as n,r as o}from"./index-fUs2VaN6.js";const U={class:"text-gray-600 mb-6 text-lg"},j={class:"mb-4"},O={class:"list-disc list-inside mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},R={class:"mb-4"},$={class:"text-gray-500 mb-6 text-lg"},M={class:"mb-4"},D={class:"text-gray-500 mb-6 text-lg"},L={class:"mb-4"},C={class:"text-gray-500 mb-6 text-lg"},H={class:"mb-4"},W={class:"text-gray-500 mb-6 text-lg"},q={class:"mb-4"},T={class:"text-gray-500 mb-6 text-lg"},G={class:"mb-4"},V={class:"text-gray-500 mb-6 text-lg"},F={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},J={class:"list-disc list-inside text-gray-600"},Y={class:"list-disc list-inside"},z={class:"text-gray-500 mb-6 text-lg"},K={class:"list-disc list-inside"},X="July 29, 2026",st=x({__name:"Encapsulation",setup(Z){const u=I(),d=o(`
// Person.java - Without encapsulation
public class Person {
    // Public fields - accessible from anywhere
    public String name;
    public int age;
    public String email;
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Person person = new Person();

        // Direct access - no validation
        person.name = "Ralph";
        person.age = -5; // Invalid age!
        person.email = "invalidemail"; // Invalid email!

        System.out.println("Name: " + person.name);
        System.out.println("Age: " + person.age);
        System.out.println("Email: " + person.email);
        System.out.println();

        // Anyone can modify data without validation
        person.age = 200; // Invalid age!
        person.email = ""; // Empty email!

        System.out.println("After modifications:");
        System.out.println("Name: " + person.name);
        System.out.println("Age: " + person.age);
        System.out.println("Email: " + person.email);
    }
}
`),p=o(`
Name: Ralph
Age: -5
Email: invalidemail

After modifications:
Name: Ralph
Age: 200
Email:
`),m=o(`
// Person.java - With encapsulation
public class Person {
    // Private fields - hidden from outside
    private String name;
    private int age;
    private String email;

    // Getter methods
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getEmail() {
        return email;
    }

    // Setter methods with validation
    public void setName(String name) {
        if(name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            System.out.println("Error: Invalid name");
        }
    }

    public void setAge(int age) {
        if(age >= 0 && age <= 150) {
            this.age = age;
        } else {
            System.out.println("Error: Age must be between 0 and 150");
        }
    }

    public void setEmail(String email) {
        if(email != null && email.contains("@") && email.contains(".")) {
            this.email = email;
        } else {
            System.out.println("Error: Invalid email format");
        }
    }

    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Email: " + email);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Person person = new Person();

        // Using setters with validation
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

        System.out.println();
        System.out.println("Testing invalid values:");
        person.setAge(-5);
        person.setEmail("invalid");
        person.setName("");
    }
}
`),g=o(`
Using getters:
Name: Ralph
Age: 25
Email: ralph@email.com

Using display method:
Name: Ralph
Age: 25
Email: ralph@email.com

Testing invalid values:
Error: Age must be between 0 and 150
Error: Invalid email format
Error: Invalid name
`),y=o(`
// BankAccount.java
public class BankAccount {
    private String accountNumber;
    private String accountHolder;
    private double balance;
    private String pin;

    // Constructor
    public BankAccount(String accountNumber, String accountHolder, double initialDeposit, String pin) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.pin = pin;
        if(initialDeposit >= 0) {
            this.balance = initialDeposit;
        } else {
            this.balance = 0;
            System.out.println("Initial deposit cannot be negative");
        }
    }

    // Getter for balance (read-only - no setter)
    public double getBalance() {
        return balance;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    // Methods to modify balance with validation
    public void deposit(double amount) {
        if(amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
            System.out.println("New balance: $" + balance);
        } else {
            System.out.println("Error: Deposit amount must be positive");
        }
    }

    public void withdraw(double amount, String enteredPin) {
        if(!pin.equals(enteredPin)) {
            System.out.println("Error: Incorrect PIN");
            return;
        }

        if(amount <= 0) {
            System.out.println("Error: Withdrawal amount must be positive");
            return;
        }

        if(amount > balance) {
            System.out.println("Error: Insufficient balance");
            System.out.println("Available balance: $" + balance);
            return;
        }

        balance -= amount;
        System.out.println("Withdrawn: $" + amount);
        System.out.println("New balance: $" + balance);
    }

    public void displayAccountInfo() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Balance: $" + balance);
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount("123456789", "Ralph", 1000.0, "1234");

        System.out.println("Initial Account:");
        account.displayAccountInfo();

        System.out.println();
        account.deposit(500);

        System.out.println();
        account.withdraw(200, "1234");

        System.out.println();
        account.withdraw(1500, "1234");

        System.out.println();
        account.withdraw(100, "wrongpin");

        System.out.println();
        System.out.println("Final Account:");
        account.displayAccountInfo();
    }
}
`),b=o(`
Initial Account:
Account Holder: Ralph
Account Number: 123456789
Balance: $1000.0

Deposited: $500.0
New balance: $1500.0

Withdrawn: $200.0
New balance: $1300.0

Error: Insufficient balance
Available balance: $1300.0

Error: Incorrect PIN

Final Account:
Account Holder: Ralph
Account Number: 123456789
Balance: $1300.0
`),v=o(`
// Student.java - Read-only class
public class Student {
    private final String studentId;
    private final String name;
    private final String department;
    private final int year;

    // Constructor sets all values (immutable)
    public Student(String studentId, String name, String department, int year) {
        this.studentId = studentId;
        this.name = name;
        this.department = department;
        this.year = year;
    }

    // Only getters - no setters (read-only)
    public String getStudentId() {
        return studentId;
    }

    public String getName() {
        return name;
    }

    public String getDepartment() {
        return department;
    }

    public int getYear() {
        return year;
    }

    public void displayInfo() {
        System.out.println("Student ID: " + studentId);
        System.out.println("Name: " + name);
        System.out.println("Department: " + department);
        System.out.println("Year: " + year);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Student student = new Student("S001", "Maria", "Computer Science", 3);

        System.out.println("Student Information (Read-Only):");
        System.out.println();
        student.displayInfo();

        // Cannot modify fields - no setters available
        // student.setName("New Name"); // Error!
        // student.studentId = "S002"; // Error!

        System.out.println("Note: Student data is read-only and cannot be modified");
    }
}
`),S=o(`
Student Information (Read-Only):

Student ID: S001
Name: Maria
Department: Computer Science
Year: 3
-----------
Note: Student data is read-only and cannot be modified
`),f=o(`
// Product.java - Encapsulation benefits
public class Product {
    private String name;
    private double price;
    private int stockQuantity;
    private boolean active;

    // Constructor with validation
    public Product(String name, double price, int stockQuantity) {
        setName(name);
        setPrice(price);
        setStockQuantity(stockQuantity);
        this.active = true;
    }

    // Getters
    public String getName() { return name; }
    public double getPrice() { return price; }
    public int getStockQuantity() { return stockQuantity; }
    public boolean isActive() { return active; }

    // Setters with business logic
    public void setName(String name) {
        if(name != null && !name.trim().isEmpty()) {
            this.name = name;
        } else {
            System.out.println("Error: Invalid product name");
        }
    }

    public void setPrice(double price) {
        if(price >= 0) {
            this.price = price;
        } else {
            System.out.println("Error: Price cannot be negative");
        }
    }

    public void setStockQuantity(int stockQuantity) {
        if(stockQuantity >= 0) {
            this.stockQuantity = stockQuantity;
        } else {
            System.out.println("Error: Stock cannot be negative");
        }
    }

    // Business methods
    public void updateStock(int quantity) {
        if(quantity > 0) {
            stockQuantity += quantity;
            System.out.println("Added " + quantity + " items. New stock: " + stockQuantity);
        } else if(quantity < 0) {
            int removeQuantity = Math.abs(quantity);
            if(removeQuantity <= stockQuantity) {
                stockQuantity -= removeQuantity;
                System.out.println("Removed " + removeQuantity + " items. New stock: " + stockQuantity);
                if(stockQuantity == 0) {
                    active = false;
                    System.out.println("Warning: Product is now out of stock");
                }
            } else {
                System.out.println("Error: Insufficient stock");
            }
        }
    }

    public void displayInfo() {
        System.out.println("Product: " + name);
        System.out.println("Price: $" + price);
        System.out.println("Stock: " + stockQuantity);
        System.out.println("Status: " + (active ? "Active" : "Inactive"));
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        Product product = new Product("Laptop", 999.99, 10);

        System.out.println("Initial Product:");
        product.displayInfo();

        System.out.println("Updating stock:");
        product.updateStock(5);
        product.displayInfo();

        System.out.println("Removing stock:");
        product.updateStock(-12);
        product.displayInfo();

        System.out.println("Adding more stock:");
        product.updateStock(8);
        product.displayInfo();

        System.out.println("Trying to set invalid values:");
        product.setPrice(-50);
        product.setName("");
        product.updateStock(-100);
    }
}
`),c=o(`
Initial Product:
Product: Laptop
Price: $999.99
Stock: 10
Status: Active
-----------
Updating stock:
Added 5 items. New stock: 15
Product: Laptop
Price: $999.99
Stock: 15
Status: Active
-----------
Removing stock:
Removed 12 items. New stock: 3
Product: Laptop
Price: $999.99
Stock: 3
Status: Active
-----------
Adding more stock:
Added 8 items. New stock: 11
Product: Laptop
Price: $999.99
Stock: 11
Status: Active
-----------
Trying to set invalid values:
Error: Price cannot be negative
Error: Invalid product name
Error: Insufficient stock
`),w=o(`
// User.java - Best practices for getters/setters
public class User {
    private String username;
    private String password;
    private String email;
    private int loginAttempts;

    // Constructor
    public User(String username, String password, String email) {
        setUsername(username);
        setPassword(password);
        setEmail(email);
        this.loginAttempts = 0;
    }

    // Getters
    public String getUsername() {
        return username;
    }

    // Don't expose sensitive data directly
    public String getPassword() {
        // Return null or hashed value instead of actual password
        return "********";
    }

    public String getEmail() {
        return email;
    }

    public int getLoginAttempts() {
        return loginAttempts;
    }

    // Setters
    public void setUsername(String username) {
        // Validate length
        if(username != null && username.length() >= 3 && username.length() <= 20) {
            this.username = username;
        } else {
            System.out.println("Error: Username must be 3-20 characters");
        }
    }

    public void setPassword(String password) {
        // Validate strength
        if(password != null && password.length() >= 8) {
            this.password = password;
        } else {
            System.out.println("Error: Password must be at least 8 characters");
        }
    }

    public void setEmail(String email) {
        // Validate email format
        if(email != null && email.contains("@") && email.contains(".")) {
            this.email = email;
        } else {
            System.out.println("Error: Invalid email format");
        }
    }

    // Business methods
    public boolean login(String enteredPassword) {
        if(loginAttempts >= 3) {
            System.out.println("Account locked due to too many failed attempts");
            return false;
        }

        if(password.equals(enteredPassword)) {
            loginAttempts = 0;
            System.out.println("Login successful");
            return true;
        } else {
            loginAttempts++;
            System.out.println("Invalid password. Attempts: " + loginAttempts + "/3");
            return false;
        }
    }

    public void displayInfo() {
        System.out.println("Username: " + username);
        System.out.println("Password: " + getPassword());
        System.out.println("Email: " + email);
        System.out.println("Login Attempts: " + loginAttempts);
        System.out.println("-----------");
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        User user = new User("john_doe", "password123", "john@email.com");

        System.out.println("User Information:");
        user.displayInfo();

        System.out.println("Login attempts:");
        user.login("wrong");
        user.login("wrong");
        user.login("password123");

        System.out.println();
        System.out.println("After successful login:");
        user.displayInfo();

        System.out.println("Testing invalid values:");
        user.setUsername("ab");
        user.setPassword("short");
        user.setEmail("invalid");
    }
}
`),A=o(`
User Information:
Username: john_doe
Password: ********
Email: john@email.com
Login Attempts: 0
-----------
Login attempts:
Invalid password. Attempts: 1/3
Invalid password. Attempts: 2/3
Login successful

After successful login:
Username: john_doe
Password: ********
Email: john@email.com
Login Attempts: 0
-----------
Testing invalid values:
Error: Username must be 3-20 characters
Error: Password must be at least 8 characters
Error: Invalid email format
`);return(h,t)=>(N(),P(E,{title:"Java Programming",navigation:k(u).sections},{default:l(()=>[t[109]||(t[109]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Encapsulation in Java ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+B(X)),e("div",U,[e("p",j,[i(s,null,{default:l(()=>[...t[0]||(t[0]=[n("Encapsulation",-1)])]),_:1}),t[1]||(t[1]=n(" is one of the four fundamental OOP concepts. It is the mechanism of wrapping data and code together as a single unit, and hiding the internal details from the outside world. ",-1))]),t[12]||(t[12]=e("p",{class:"mb-4"}," Key principles of encapsulation: ",-1)),e("ul",O,[e("li",null,[i(s,null,{default:l(()=>[...t[2]||(t[2]=[n("Data hiding",-1)])]),_:1}),t[3]||(t[3]=n(" - Fields are declared private ",-1))]),e("li",null,[i(s,null,{default:l(()=>[...t[4]||(t[4]=[n("Controlled access",-1)])]),_:1}),t[5]||(t[5]=n(" - Methods provide access to data ",-1))]),e("li",null,[i(s,null,{default:l(()=>[...t[6]||(t[6]=[n("Validation",-1)])]),_:1}),t[7]||(t[7]=n(" - Data validation is enforced ",-1))]),e("li",null,[i(s,null,{default:l(()=>[...t[8]||(t[8]=[n("Flexibility",-1)])]),_:1}),t[9]||(t[9]=n(" - Internal implementation can change without affecting users ",-1))]),e("li",null,[i(s,null,{default:l(()=>[...t[10]||(t[10]=[n("Security",-1)])]),_:1}),t[11]||(t[11]=n(" - Prevents unauthorized access ",-1))])])]),t[110]||(t[110]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Without Encapsulation (Bad Practice) ",-1)),e("div",Q,[e("p",R,[t[15]||(t[15]=n(" Without encapsulation, fields are ",-1)),i(s,null,{default:l(()=>[...t[13]||(t[13]=[n("public",-1)])]),_:1}),t[16]||(t[16]=n(" , allowing direct access and modification without any ",-1)),i(s,null,{default:l(()=>[...t[14]||(t[14]=[n("validation or control",-1)])]),_:1}),t[17]||(t[17]=n(" . ",-1))]),i(a,{code:d.value,language:"java"},null,8,["code"]),t[18]||(t[18]=e("p",{class:"mt-4"},"Output:",-1)),i(r,{output:p.value},null,8,["output"])]),t[111]||(t[111]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," With Encapsulation (Good Practice) ",-1)),e("div",$,[e("p",M,[t[22]||(t[22]=n(" With encapsulation, fields are ",-1)),i(s,null,{default:l(()=>[...t[19]||(t[19]=[n("private",-1)])]),_:1}),t[23]||(t[23]=n(" and access is provided through ",-1)),i(s,null,{default:l(()=>[...t[20]||(t[20]=[n("getters and setters",-1)])]),_:1}),t[24]||(t[24]=n(" with ",-1)),i(s,null,{default:l(()=>[...t[21]||(t[21]=[n("validation",-1)])]),_:1}),t[25]||(t[25]=n(" . ",-1))]),i(a,{code:m.value,language:"java"},null,8,["code"]),t[26]||(t[26]=e("p",{class:"mt-4"},"Output:",-1)),i(r,{output:g.value},null,8,["output"])]),t[112]||(t[112]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Real-World Example: Bank Account ",-1)),e("div",D,[e("p",L,[t[30]||(t[30]=n(" A ",-1)),i(s,null,{default:l(()=>[...t[27]||(t[27]=[n("BankAccount",-1)])]),_:1}),t[31]||(t[31]=n(" class demonstrates encapsulation with ",-1)),i(s,null,{default:l(()=>[...t[28]||(t[28]=[n("controlled access",-1)])]),_:1}),t[32]||(t[32]=n(" to balance and ",-1)),i(s,null,{default:l(()=>[...t[29]||(t[29]=[n("PIN validation",-1)])]),_:1}),t[33]||(t[33]=n(" for security. ",-1))]),i(a,{code:y.value,language:"java"},null,8,["code"]),t[34]||(t[34]=e("p",{class:"mt-4"},"Output:",-1)),i(r,{output:b.value},null,8,["output"])]),t[113]||(t[113]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Read-Only Class ",-1)),e("div",C,[e("p",H,[t[38]||(t[38]=n(" A ",-1)),i(s,null,{default:l(()=>[...t[35]||(t[35]=[n("read-only class",-1)])]),_:1}),t[39]||(t[39]=n(" provides ",-1)),i(s,null,{default:l(()=>[...t[36]||(t[36]=[n("only getters",-1)])]),_:1}),t[40]||(t[40]=n(" and no setters. This makes objects ",-1)),i(s,null,{default:l(()=>[...t[37]||(t[37]=[n("immutable",-1)])]),_:1}),t[41]||(t[41]=n(" once created. ",-1))]),i(a,{code:v.value,language:"java"},null,8,["code"]),t[42]||(t[42]=e("p",{class:"mt-4"},"Output:",-1)),i(r,{output:S.value},null,8,["output"])]),t[114]||(t[114]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Benefits of Encapsulation ",-1)),e("div",W,[e("p",q,[t[45]||(t[45]=n(" Encapsulation provides ",-1)),i(s,null,{default:l(()=>[...t[43]||(t[43]=[n("business logic",-1)])]),_:1}),t[46]||(t[46]=n(" in setters and methods, ensuring data integrity and ",-1)),i(s,null,{default:l(()=>[...t[44]||(t[44]=[n("controlled state changes",-1)])]),_:1}),t[47]||(t[47]=n(" . ",-1))]),i(a,{code:f.value,language:"java"},null,8,["code"]),t[48]||(t[48]=e("p",{class:"mt-4"},"Output:",-1)),i(r,{output:c.value},null,8,["output"])]),t[115]||(t[115]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Getters and Setters Best Practices ",-1)),e("div",T,[e("p",G,[t[52]||(t[52]=n(" Best practices for getters and setters include ",-1)),i(s,null,{default:l(()=>[...t[49]||(t[49]=[n("validation",-1)])]),_:1}),t[53]||(t[53]=n(" , ",-1)),i(s,null,{default:l(()=>[...t[50]||(t[50]=[n("data hiding",-1)])]),_:1}),t[54]||(t[54]=n(" , and ",-1)),i(s,null,{default:l(()=>[...t[51]||(t[51]=[n("business logic",-1)])]),_:1}),t[55]||(t[55]=n(" . ",-1))]),i(a,{code:w.value,language:"java"},null,8,["code"]),t[56]||(t[56]=e("p",{class:"mt-4"},"Output:",-1)),i(r,{output:A.value},null,8,["output"])]),t[116]||(t[116]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Encapsulation ",-1)),e("div",V,[e("div",F,[t[71]||(t[71]=e("p",{class:"text-blue-700 font-semibold"},"Best Practices:",-1)),e("ul",J,[e("li",null,[t[58]||(t[58]=n("Declare fields as ",-1)),i(s,null,{default:l(()=>[...t[57]||(t[57]=[n("private",-1)])]),_:1})]),e("li",null,[t[60]||(t[60]=n("Provide ",-1)),i(s,null,{default:l(()=>[...t[59]||(t[59]=[n("public getters and setters",-1)])]),_:1}),t[61]||(t[61]=n(" only when needed ",-1))]),e("li",null,[t[63]||(t[63]=n("Include ",-1)),i(s,null,{default:l(()=>[...t[62]||(t[62]=[n("validation logic",-1)])]),_:1}),t[64]||(t[64]=n(" in setters ",-1))]),e("li",null,[t[66]||(t[66]=n("Use ",-1)),i(s,null,{default:l(()=>[...t[65]||(t[65]=[n("business methods",-1)])]),_:1}),t[67]||(t[67]=n(" instead of exposing implementation ",-1))]),e("li",null,[t[69]||(t[69]=n("Make classes ",-1)),i(s,null,{default:l(()=>[...t[68]||(t[68]=[n("immutable",-1)])]),_:1}),t[70]||(t[70]=n(" when possible ",-1))])])]),e("ul",Y,[e("li",null,[t[73]||(t[73]=n("Encapsulation ",-1)),i(s,null,{default:l(()=>[...t[72]||(t[72]=[n("protects data integrity",-1)])]),_:1})]),e("li",null,[t[75]||(t[75]=n("It provides ",-1)),i(s,null,{default:l(()=>[...t[74]||(t[74]=[n("controlled access",-1)])]),_:1}),t[76]||(t[76]=n(" to data ",-1))]),e("li",null,[t[78]||(t[78]=n("Allows ",-1)),i(s,null,{default:l(()=>[...t[77]||(t[77]=[n("internal changes",-1)])]),_:1}),t[79]||(t[79]=n(" without affecting external code ",-1))]),e("li",null,[t[82]||(t[82]=n("Improves ",-1)),i(s,null,{default:l(()=>[...t[80]||(t[80]=[n("maintainability",-1)])]),_:1}),t[83]||(t[83]=n(" and ",-1)),i(s,null,{default:l(()=>[...t[81]||(t[81]=[n("security",-1)])]),_:1})]),e("li",null,[t[86]||(t[86]=n("Enables ",-1)),i(s,null,{default:l(()=>[...t[84]||(t[84]=[n("data validation",-1)])]),_:1}),t[87]||(t[87]=n(" and ",-1)),i(s,null,{default:l(()=>[...t[85]||(t[85]=[n("business rules",-1)])]),_:1})])])]),t[117]||(t[117]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),e("div",z,[e("ul",K,[e("li",null,[t[89]||(t[89]=n("Encapsulation is ",-1)),i(s,null,{default:l(()=>[...t[88]||(t[88]=[n("data hiding",-1)])]),_:1}),t[90]||(t[90]=n(" with controlled access ",-1))]),e("li",null,[t[92]||(t[92]=n("Fields are declared ",-1)),i(s,null,{default:l(()=>[...t[91]||(t[91]=[n("private",-1)])]),_:1})]),e("li",null,[t[94]||(t[94]=n("Getters and setters provide ",-1)),i(s,null,{default:l(()=>[...t[93]||(t[93]=[n("controlled access",-1)])]),_:1})]),e("li",null,[t[96]||(t[96]=n("Setters include ",-1)),i(s,null,{default:l(()=>[...t[95]||(t[95]=[n("validation logic",-1)])]),_:1})]),e("li",null,[t[98]||(t[98]=n("Read-only classes have ",-1)),i(s,null,{default:l(()=>[...t[97]||(t[97]=[n("only getters",-1)])]),_:1})]),e("li",null,[t[101]||(t[101]=n("Encapsulation improves ",-1)),i(s,null,{default:l(()=>[...t[99]||(t[99]=[n("security",-1)])]),_:1}),t[102]||(t[102]=n(" and ",-1)),i(s,null,{default:l(()=>[...t[100]||(t[100]=[n("maintainability",-1)])]),_:1})]),e("li",null,[t[104]||(t[104]=n("It is a ",-1)),i(s,null,{default:l(()=>[...t[103]||(t[103]=[n("fundamental OOP principle",-1)])]),_:1})]),e("li",null,[t[107]||(t[107]=n("Provides ",-1)),i(s,null,{default:l(()=>[...t[105]||(t[105]=[n("abstraction",-1)])]),_:1}),t[108]||(t[108]=n(" and ",-1)),i(s,null,{default:l(()=>[...t[106]||(t[106]=[n("modularity",-1)])]),_:1})])])])]),_:1},8,["navigation"]))}});export{st as default};

import{_ as O}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-BaTh0Yda.js";import{S as o}from"./SpanHighlight-D5QJRDV8.js";import{C as u}from"./CodeBlock-DZMpBSrv.js";import{O as r}from"./OutputBlock-DUAjxao7.js";import{u as F}from"./javaProgramming-DvM3X4gn.js";import{d as B,h as N,i,s as M,o as T,a as n,t as R,q as l,g as e,r as s}from"./index-fUs2VaN6.js";const P={class:"text-gray-600 mb-6 text-lg"},U={class:"mb-4"},j={class:"list-disc list-inside mb-4"},$={class:"text-gray-500 mb-6 text-lg"},H={class:"list-disc list-inside mb-4"},J={class:"text-gray-500 mb-6 text-lg"},z={class:"mb-4"},K={class:"list-disc list-inside mb-4"},V={class:"text-gray-500 mb-6 text-lg"},Y={class:"mb-4"},L={class:"text-gray-500 mb-6 text-lg"},W={class:"mb-4"},q={class:"text-gray-500 mb-6 text-lg"},D={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},G={class:"mb-4"},X={class:"text-gray-500 mb-6 text-lg"},Z={class:"mb-4"},_={class:"text-gray-500 mb-6 text-lg"},tt={class:"mb-4"},et={class:"text-gray-500 mb-6 text-lg"},nt={class:"mb-4"},lt={class:"list-disc list-inside mb-4"},it={class:"text-gray-500 mb-6 text-lg"},ot={class:"list-disc list-inside"},st={class:"text-gray-500 mb-6 text-lg"},ut={class:"list-disc list-inside"},rt={class:"text-gray-500 mb-6 text-lg"},at={class:"list-disc list-inside"},dt="July 29, 2026",Et=B({__name:"ExceptionHandling",setup(pt){const a=F(),d=s(`
public class Main {
    public static void main(String[] args) {
        // Example 1: ArithmeticException
        try {
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Error: Cannot divide by zero");
        }

        // Example 2: ArrayIndexOutOfBoundsException
        try {
            int[] numbers = {1, 2, 3};
            System.out.println(numbers[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Error: Array index out of bounds");
        }

        // Example 3: NullPointerException
        try {
            String str = null;
            System.out.println(str.length());
        } catch (NullPointerException e) {
            System.out.println("Error: Cannot call method on null object");
        }

        // Example 4: NumberFormatException
        try {
            int num = Integer.parseInt("abc");
            System.out.println("Number: " + num);
        } catch (NumberFormatException e) {
            System.out.println("Error: Invalid number format");
        }

        System.out.println("Program continues after handling exceptions");
    }
}
`),p=s(`
Error: Cannot divide by zero
Error: Array index out of bounds
Error: Cannot call method on null object
Error: Invalid number format
Program continues after handling exceptions
`),m=s(`
public class Main {
    public static void main(String[] args) {
        System.out.println("Program started");

        try {
            System.out.println("Inside try block");
            int[] numbers = {1, 2, 3};
            System.out.println("Accessing index 5: " + numbers[5]);
            System.out.println("This line will not execute");
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Caught exception: " + e.getMessage());
            System.out.println("Exception type: " + e.getClass().getSimpleName());
        }

        System.out.println("Program continues after try-catch");
        System.out.println("Program ended");
    }
}
`),x=s(`
Program started
Inside try block
Caught exception: Index 5 out of bounds for length 3
Exception type: ArrayIndexOutOfBoundsException
Program continues after try-catch
Program ended
`),g=s(`
public class Main {
    public static void main(String[] args) {
        String[] inputs = {"10", "abc", "0"};

        for(String input : inputs) {
            System.out.println("Processing: " + input);
            try {
                int num = Integer.parseInt(input);
                int result = 100 / num;
                System.out.println("Result: " + result);
            } catch (NumberFormatException e) {
                System.out.println("NumberFormatException: Invalid number format");
            } catch (ArithmeticException e) {
                System.out.println("ArithmeticException: Cannot divide by zero");
            } catch (Exception e) {
                System.out.println("General Exception: " + e.getMessage());
            }
            System.out.println("-----------");
        }
    }
}
`),c=s(`
Processing: 10
Result: 10
-----------
Processing: abc
NumberFormatException: Invalid number format
-----------
Processing: 0
ArithmeticException: Cannot divide by zero
-----------
`),y=s(`
public class Main {
    public static void main(String[] args) {
        System.out.println("Example 1: No exception");
        try {
            System.out.println("Inside try block");
            int result = 10 / 2;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught exception: " + e.getMessage());
        } finally {
            System.out.println("Finally block always executes");
        }
        System.out.println();

        System.out.println("Example 2: Exception occurs");
        try {
            System.out.println("Inside try block");
            int result = 10 / 0;
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Caught exception: " + e.getMessage());
        } finally {
            System.out.println("Finally block always executes");
        }
        System.out.println();

        System.out.println("Example 3: Finally with return");
        System.out.println("Result: " + getResult());
    }

    public static int getResult() {
        try {
            System.out.println("Inside try block");
            return 10;
        } catch (Exception e) {
            System.out.println("Caught exception");
            return 0;
        } finally {
            System.out.println("Finally block executes before return");
        }
    }
}
`),b=s(`
Example 1: No exception
Inside try block
Result: 5
Finally block always executes

Example 2: Exception occurs
Inside try block
Caught exception: / by zero
Finally block always executes

Example 3: Finally with return
Inside try block
Finally block executes before return
Result: 10
`),f=s(`
import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Traditional way - manually close resources
        Scanner scanner = null;
        try {
            scanner = new Scanner(System.in);
            System.out.print("Enter a number: ");
            int num = scanner.nextInt();
            System.out.println("You entered: " + num);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            if(scanner != null) {
                scanner.close();
                System.out.println("Scanner closed");
            }
        }

        System.out.println();

        // Try-with-resources - automatically closes resources
        try (Scanner scanner2 = new Scanner(System.in)) {
            System.out.print("Enter a number: ");
            int num = scanner2.nextInt();
            System.out.println("You entered: " + num);
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        }
        System.out.println("Scanner automatically closed");
    }
}
`),E=s(`
Enter a number: 42
You entered: 42
Scanner closed

Enter a number: 100
You entered: 100
Scanner automatically closed
`),S=s(`
public class Main {
    public static void main(String[] args) {
        try {
            validateAge(15);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }

        try {
            validateAge(25);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }

        try {
            validateAge(-5);
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }
    }

    public static void validateAge(int age) {
        System.out.println("Validating age: " + age);
        if(age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
        if(age < 18) {
            throw new IllegalArgumentException("Age must be at least 18");
        }
        System.out.println("Age is valid: " + age);
    }
}
`),v=s(`
Validating age: 15
Caught exception: Age must be at least 18
Validating age: 25
Age is valid: 25
Validating age: -5
Caught exception: Age cannot be negative
`),w=s(`
public class Main {
    public static void main(String[] args) {
        // Handle checked exception
        try {
            divide(10, 0);
        } catch (ArithmeticException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }

        // Handle custom exception
        try {
            withdraw(100, 200);
        } catch (InsufficientFundsException e) {
            System.out.println("Caught exception: " + e.getMessage());
            System.out.println("Shortage: $" + e.getShortage());
        }
    }

    // Throws ArithmeticException - caller must handle
    public static int divide(int a, int b) throws ArithmeticException {
        if(b == 0) {
            throw new ArithmeticException("Cannot divide by zero");
        }
        return a / b;
    }

    // Throws custom exception
    public static void withdraw(double balance, double amount) throws InsufficientFundsException {
        if(amount > balance) {
            throw new InsufficientFundsException("Insufficient funds", amount - balance);
        }
        System.out.println("Withdrawal successful");
    }
}

// Custom exception class
class InsufficientFundsException extends Exception {
    private double shortage;

    public InsufficientFundsException(String message, double shortage) {
        super(message);
        this.shortage = shortage;
    }

    public double getShortage() {
        return shortage;
    }
}
`),A=s(`
Caught exception: Cannot divide by zero
Caught exception: Insufficient funds
Shortage: $100.0
`),k=s(`
public class Main {
    public static void main(String[] args) {
        // Test custom exceptions
        try {
            BankAccount account = new BankAccount("12345", 500);
            System.out.println("Account created with balance: $" + account.getBalance());

            account.withdraw(300);
            System.out.println("After withdrawal: $" + account.getBalance());

            account.withdraw(300);
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Balance: $" + e.getBalance());
            System.out.println("Attempted withdrawal: $" + e.getAttemptedAmount());
            System.out.println("Shortage: $" + e.getShortage());
        }

        System.out.println();

        try {
            BankAccount account2 = new BankAccount("67890", -100);
        } catch (InvalidAmountException e) {
            System.out.println("Error: " + e.getMessage());
            System.out.println("Invalid amount: $" + e.getInvalidAmount());
        }
    }
}

// BankAccount class
class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) throws InvalidAmountException {
        if(initialBalance < 0) {
            throw new InvalidAmountException("Initial balance cannot be negative", initialBalance);
        }
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }

    public void withdraw(double amount) throws InsufficientFundsException {
        if(amount <= 0) {
            throw new InsufficientFundsException("Withdrawal amount must be positive", balance, amount);
        }
        if(amount > balance) {
            throw new InsufficientFundsException("Insufficient funds for withdrawal", balance, amount);
        }
        balance -= amount;
    }

    public double getBalance() {
        return balance;
    }
}

// Custom Exception 1: InsufficientFundsException
class InsufficientFundsException extends Exception {
    private double balance;
    private double attemptedAmount;

    public InsufficientFundsException(String message, double balance, double attemptedAmount) {
        super(message);
        this.balance = balance;
        this.attemptedAmount = attemptedAmount;
    }

    public double getBalance() { return balance; }
    public double getAttemptedAmount() { return attemptedAmount; }
    public double getShortage() { return attemptedAmount - balance; }
}

// Custom Exception 2: InvalidAmountException
class InvalidAmountException extends Exception {
    private double invalidAmount;

    public InvalidAmountException(String message, double invalidAmount) {
        super(message);
        this.invalidAmount = invalidAmount;
    }

    public double getInvalidAmount() { return invalidAmount; }
}
`),C=s(`
Account created with balance: $500.0
After withdrawal: $200.0
Error: Insufficient funds for withdrawal
Balance: $200.0
Attempted withdrawal: $300.0
Shortage: $100.0

Error: Initial balance cannot be negative
Invalid amount: $-100.0
`),I=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Unchecked exceptions (RuntimeException)
        // 1. ArithmeticException
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Unchecked: " + e.getClass().getSimpleName());
        }

        // 2. NullPointerException
        try {
            String str = null;
            str.length();
        } catch (NullPointerException e) {
            System.out.println("Unchecked: " + e.getClass().getSimpleName());
        }

        // 3. ArrayIndexOutOfBoundsException
        try {
            int[] arr = new int[3];
            System.out.println(arr[5]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Unchecked: " + e.getClass().getSimpleName());
        }

        // Checked exceptions (must be handled or declared)
        // 1. IOException
        try {
            readFile("nonexistent.txt");
        } catch (IOException e) {
            System.out.println("Checked: " + e.getClass().getSimpleName());
            System.out.println("Message: " + e.getMessage());
        }

        // 2. ClassNotFoundException
        try {
            Class.forName("NonExistentClass");
        } catch (ClassNotFoundException e) {
            System.out.println("Checked: " + e.getClass().getSimpleName());
        }

        System.out.println();
        System.out.println("Unchecked exceptions are not required to be caught");
        System.out.println("Checked exceptions must be caught or declared with throws");
    }

    // Method with checked exception
    public static void readFile(String filename) throws IOException {
        FileReader file = new FileReader(filename);
        BufferedReader reader = new BufferedReader(file);
        String line = reader.readLine();
        System.out.println("Read: " + line);
        reader.close();
    }
}
`),h=s(`
Unchecked: ArithmeticException
Unchecked: NullPointerException
Unchecked: ArrayIndexOutOfBoundsException
Checked: FileNotFoundException
Message: nonexistent.txt (The system cannot find the file specified)
Checked: ClassNotFoundException

Unchecked exceptions are not required to be caught
Checked exceptions must be caught or declared with throws
`);return(mt,t)=>(T(),N(O,{title:"Java Programming",navigation:M(a).sections},{default:i(()=>[t[129]||(t[129]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Exception Handling in Java ",-1)),n("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+R(dt)),n("div",P,[n("p",U,[l(o,null,{default:i(()=>[...t[0]||(t[0]=[e("Exception Handling",-1)])]),_:1}),t[1]||(t[1]=e(" is a mechanism to handle runtime errors and other exceptional events in a controlled manner. It prevents the program from crashing and provides a way to recover from errors gracefully. ",-1))]),t[14]||(t[14]=n("p",{class:"mb-4"}," Key concepts: ",-1)),n("ul",j,[n("li",null,[l(o,null,{default:i(()=>[...t[2]||(t[2]=[e("Exception",-1)])]),_:1}),t[3]||(t[3]=e(" - An event that disrupts normal program flow ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[4]||(t[4]=[e("Try-Catch",-1)])]),_:1}),t[5]||(t[5]=e(" - Blocks to handle exceptions ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[6]||(t[6]=[e("Finally",-1)])]),_:1}),t[7]||(t[7]=e(" - Block that always executes ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[8]||(t[8]=[e("Throw",-1)])]),_:1}),t[9]||(t[9]=e(" - To explicitly throw an exception ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[10]||(t[10]=[e("Throws",-1)])]),_:1}),t[11]||(t[11]=e(" - To declare exceptions in method signature ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[12]||(t[12]=[e("Checked vs Unchecked",-1)])]),_:1}),t[13]||(t[13]=e(" - Types of exceptions ",-1))])])]),t[130]||(t[130]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Common Exceptions in Java ",-1)),n("div",$,[t[23]||(t[23]=n("p",{class:"mb-4"}," Common exceptions that occur in Java programs: ",-1)),n("ul",H,[n("li",null,[l(o,null,{default:i(()=>[...t[15]||(t[15]=[e("ArithmeticException",-1)])]),_:1}),t[16]||(t[16]=e(" - Division by zero ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[17]||(t[17]=[e("ArrayIndexOutOfBoundsException",-1)])]),_:1}),t[18]||(t[18]=e(" - Invalid array index ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[19]||(t[19]=[e("NullPointerException",-1)])]),_:1}),t[20]||(t[20]=e(" - Accessing null object ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[21]||(t[21]=[e("NumberFormatException",-1)])]),_:1}),t[22]||(t[22]=e(" - Invalid number conversion ",-1))])]),l(u,{code:d.value,language:"java"},null,8,["code"]),t[24]||(t[24]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:p.value},null,8,["output"])]),t[131]||(t[131]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Try-Catch Block ",-1)),n("div",J,[n("p",z,[t[26]||(t[26]=e(" The ",-1)),l(o,null,{default:i(()=>[...t[25]||(t[25]=[e("try-catch",-1)])]),_:1}),t[27]||(t[27]=e(" block is used to handle exceptions. The code that might throw an exception is placed in the try block, and the catch block handles the exception. ",-1))]),n("ul",K,[n("li",null,[l(o,null,{default:i(()=>[...t[28]||(t[28]=[e("try",-1)])]),_:1}),t[29]||(t[29]=e(" - Contains code that might throw an exception ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[30]||(t[30]=[e("catch",-1)])]),_:1}),t[31]||(t[31]=e(" - Handles the exception if it occurs ",-1))]),t[32]||(t[32]=n("li",null,"Multiple catch blocks for different exception types",-1))]),l(u,{code:m.value,language:"java"},null,8,["code"]),t[33]||(t[33]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:x.value},null,8,["output"])]),t[132]||(t[132]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Multiple Catch Blocks ",-1)),n("div",V,[n("p",Y,[t[35]||(t[35]=e(" You can have ",-1)),l(o,null,{default:i(()=>[...t[34]||(t[34]=[e("multiple catch blocks",-1)])]),_:1}),t[36]||(t[36]=e(" to handle different types of exceptions. Order matters - catch more specific exceptions first. ",-1))]),l(u,{code:g.value,language:"java"},null,8,["code"]),t[37]||(t[37]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:c.value},null,8,["output"])]),t[133]||(t[133]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Try-Catch-Finally ",-1)),n("div",L,[n("p",W,[t[39]||(t[39]=e(" The ",-1)),l(o,null,{default:i(()=>[...t[38]||(t[38]=[e("finally",-1)])]),_:1}),t[40]||(t[40]=e(" block always executes regardless of whether an exception occurred or not. It's used for cleanup operations like closing files or database connections. ",-1))]),l(u,{code:y.value,language:"java"},null,8,["code"]),t[41]||(t[41]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:b.value},null,8,["output"])]),t[134]||(t[134]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Try-With-Resources ",-1)),n("div",q,[n("p",D,[l(o,null,{default:i(()=>[...t[42]||(t[42]=[e("Try-with-resources",-1)])]),_:1}),t[43]||(t[43]=e(" automatically closes resources that implement AutoCloseable. It was introduced in Java 7. ",-1))]),l(u,{code:f.value,language:"java"},null,8,["code"]),t[44]||(t[44]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:E.value},null,8,["output"])]),t[135]||(t[135]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The 'throw' Keyword ",-1)),n("div",Q,[n("p",G,[t[46]||(t[46]=e(" The ",-1)),l(o,null,{default:i(()=>[...t[45]||(t[45]=[e("throw",-1)])]),_:1}),t[47]||(t[47]=e(" keyword is used to explicitly throw an exception. It can be used to create and throw custom exceptions or built-in exceptions. ",-1))]),l(u,{code:S.value,language:"java"},null,8,["code"]),t[48]||(t[48]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:v.value},null,8,["output"])]),t[136]||(t[136]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," The 'throws' Keyword ",-1)),n("div",X,[n("p",Z,[t[50]||(t[50]=e(" The ",-1)),l(o,null,{default:i(()=>[...t[49]||(t[49]=[e("throws",-1)])]),_:1}),t[51]||(t[51]=e(" keyword is used in method declarations to specify that the method might throw exceptions. It delegates the exception handling to the caller. ",-1))]),l(u,{code:w.value,language:"java"},null,8,["code"]),t[52]||(t[52]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:A.value},null,8,["output"])]),t[137]||(t[137]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Custom Exceptions ",-1)),n("div",_,[n("p",tt,[t[54]||(t[54]=e(" You can create ",-1)),l(o,null,{default:i(()=>[...t[53]||(t[53]=[e("custom exceptions",-1)])]),_:1}),t[55]||(t[55]=e(" by extending Exception (checked) or RuntimeException (unchecked). Custom exceptions can have additional fields and methods. ",-1))]),l(u,{code:k.value,language:"java"},null,8,["code"]),t[56]||(t[56]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:C.value},null,8,["output"])]),t[138]||(t[138]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Checked vs Unchecked Exceptions ",-1)),n("div",et,[n("p",nt,[t[59]||(t[59]=e(" Java distinguishes between ",-1)),l(o,null,{default:i(()=>[...t[57]||(t[57]=[e("checked",-1)])]),_:1}),t[60]||(t[60]=e(" and ",-1)),l(o,null,{default:i(()=>[...t[58]||(t[58]=[e("unchecked",-1)])]),_:1}),t[61]||(t[61]=e(" exceptions: ",-1))]),n("ul",lt,[n("li",null,[l(o,null,{default:i(()=>[...t[62]||(t[62]=[e("Checked",-1)])]),_:1}),t[63]||(t[63]=e(" - Must be caught or declared (IOException, SQLException) ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[64]||(t[64]=[e("Unchecked",-1)])]),_:1}),t[65]||(t[65]=e(" - Not required to be caught (RuntimeException and its subclasses) ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[66]||(t[66]=[e("Error",-1)])]),_:1}),t[67]||(t[67]=e(" - Serious issues that cannot be handled (OutOfMemoryError) ",-1))])]),l(u,{code:I.value,language:"java"},null,8,["code"]),t[68]||(t[68]=n("p",{class:"mt-4"},"Output:",-1)),l(r,{output:h.value},null,8,["output"])]),t[139]||(t[139]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Java Exception Hierarchy ",-1)),n("div",it,[t[79]||(t[79]=n("div",{class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},[n("p",{class:"text-blue-700 font-semibold"},"Exception Hierarchy:"),n("pre",{class:"text-gray-600 text-sm mt-2"},`Throwable
├── Error (serious problems, cannot handle)
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   └── ...
└── Exception (can be handled)
    ├── RuntimeException (Unchecked)
    │   ├── ArithmeticException
    │   ├── NullPointerException
    │   ├── ArrayIndexOutOfBoundsException
    │   └── NumberFormatException
    └── (Checked Exceptions)
        ├── IOException
        ├── SQLException
        ├── ClassNotFoundException
        └── ...`)],-1)),n("ul",ot,[n("li",null,[l(o,null,{default:i(()=>[...t[69]||(t[69]=[e("Throwable",-1)])]),_:1}),t[70]||(t[70]=e(" - The root of exception hierarchy ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[71]||(t[71]=[e("Error",-1)])]),_:1}),t[72]||(t[72]=e(" - Serious issues, cannot be handled ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[73]||(t[73]=[e("Exception",-1)])]),_:1}),t[74]||(t[74]=e(" - Can be handled ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[75]||(t[75]=[e("RuntimeException",-1)])]),_:1}),t[76]||(t[76]=e(" - Unchecked exceptions ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[77]||(t[77]=[e("Checked exceptions",-1)])]),_:1}),t[78]||(t[78]=e(" - Must be handled or declared ",-1))])])]),t[140]||(t[140]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Exception Handling Best Practices ",-1)),n("div",st,[n("ul",ut,[n("li",null,[t[81]||(t[81]=e("Catch specific exceptions rather than generic ",-1)),l(o,null,{default:i(()=>[...t[80]||(t[80]=[e("Exception",-1)])]),_:1})]),n("li",null,[t[84]||(t[84]=e("Use ",-1)),l(o,null,{default:i(()=>[...t[82]||(t[82]=[e("finally",-1)])]),_:1}),t[85]||(t[85]=e(" or ",-1)),l(o,null,{default:i(()=>[...t[83]||(t[83]=[e("try-with-resources",-1)])]),_:1}),t[86]||(t[86]=e(" for cleanup ",-1))]),n("li",null,[t[88]||(t[88]=e("Log exceptions with ",-1)),l(o,null,{default:i(()=>[...t[87]||(t[87]=[e("meaningful messages",-1)])]),_:1})]),n("li",null,[t[90]||(t[90]=e("Don't swallow exceptions - ",-1)),l(o,null,{default:i(()=>[...t[89]||(t[89]=[e("rethrow or log",-1)])]),_:1}),t[91]||(t[91]=e(" them ",-1))]),n("li",null,[t[93]||(t[93]=e("Create ",-1)),l(o,null,{default:i(()=>[...t[92]||(t[92]=[e("custom exceptions",-1)])]),_:1}),t[94]||(t[94]=e(" for application-specific errors ",-1))]),n("li",null,[t[96]||(t[96]=e("Use ",-1)),l(o,null,{default:i(()=>[...t[95]||(t[95]=[e("throws",-1)])]),_:1}),t[97]||(t[97]=e(" for checked exceptions ",-1))]),n("li",null,[t[99]||(t[99]=e("Don't use exceptions for ",-1)),l(o,null,{default:i(()=>[...t[98]||(t[98]=[e("flow control",-1)])]),_:1})]),n("li",null,[t[101]||(t[101]=e("Include ",-1)),l(o,null,{default:i(()=>[...t[100]||(t[100]=[e("meaningful error messages",-1)])]),_:1})]),n("li",null,[t[103]||(t[103]=e("Use ",-1)),l(o,null,{default:i(()=>[...t[102]||(t[102]=[e("multi-catch",-1)])]),_:1}),t[104]||(t[104]=e(" for identical handling (Java 7+) ",-1))]),n("li",null,[t[106]||(t[106]=e("Consider ",-1)),l(o,null,{default:i(()=>[...t[105]||(t[105]=[e("try-with-resources",-1)])]),_:1}),t[107]||(t[107]=e(" for AutoCloseable resources ",-1))])])]),t[141]||(t[141]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),n("div",rt,[n("ul",at,[n("li",null,[t[109]||(t[109]=e("Exception handling prevents ",-1)),l(o,null,{default:i(()=>[...t[108]||(t[108]=[e("program crashes",-1)])]),_:1})]),n("li",null,[l(o,null,{default:i(()=>[...t[110]||(t[110]=[e("Try-Catch",-1)])]),_:1}),t[111]||(t[111]=e(" blocks handle exceptions ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[112]||(t[112]=[e("Finally",-1)])]),_:1}),t[113]||(t[113]=e(" always executes for cleanup ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[114]||(t[114]=[e("Throw",-1)])]),_:1}),t[115]||(t[115]=e(" explicitly throws exceptions ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[116]||(t[116]=[e("Throws",-1)])]),_:1}),t[117]||(t[117]=e(" declares exceptions in method signature ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[118]||(t[118]=[e("Checked",-1)])]),_:1}),t[119]||(t[119]=e(" exceptions must be handled ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[120]||(t[120]=[e("Unchecked",-1)])]),_:1}),t[121]||(t[121]=e(" exceptions are optional to handle ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[122]||(t[122]=[e("Custom exceptions",-1)])]),_:1}),t[123]||(t[123]=e(" provide application-specific errors ",-1))]),n("li",null,[l(o,null,{default:i(()=>[...t[124]||(t[124]=[e("Try-with-resources",-1)])]),_:1}),t[125]||(t[125]=e(" auto-closes resources ",-1))]),n("li",null,[t[127]||(t[127]=e("Exception handling is ",-1)),l(o,null,{default:i(()=>[...t[126]||(t[126]=[e("essential",-1)])]),_:1}),t[128]||(t[128]=e(" for robust programs ",-1))])])])]),_:1},8,["navigation"]))}});export{Et as default};

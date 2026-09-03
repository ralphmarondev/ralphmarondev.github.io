import{_ as R}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{S as o}from"./SpanHighlight-C0NIfFE-.js";import{C as s}from"./CodeBlock-CjPs9I9U.js";import{O as u}from"./OutputBlock-BzLqeAqJ.js";import{u as O}from"./javaProgramming-3VCcq7Z_.js";import{d as h,r,p as T,l as i,m as B,o as M,a as e,t as P,k as l,b as n}from"./index-IauxWRt0.js";const W={class:"text-gray-600 mb-6 text-lg"},N={class:"mb-4"},U={class:"list-disc list-inside mb-4"},j={class:"text-gray-500 mb-6 text-lg"},L={class:"mb-4"},D={class:"text-gray-500 mb-6 text-lg"},G={class:"mb-4"},$={class:"text-gray-500 mb-6 text-lg"},J={class:"mb-4"},z={class:"text-gray-500 mb-6 text-lg"},Y={class:"mb-4"},V={class:"text-gray-500 mb-6 text-lg"},H={class:"mb-4"},K={class:"text-gray-500 mb-6 text-lg"},q={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Z={class:"text-gray-500 mb-6 text-lg"},_={class:"mb-4"},tt={class:"list-disc list-inside mb-4"},nt={class:"text-gray-500 mb-6 text-lg"},et={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},lt={class:"list-disc list-inside text-gray-600"},it={class:"text-gray-500 mb-6 text-lg"},ot={class:"bg-red-50 border-l-4 border-red-500 p-4 mb-4"},rt={class:"list-disc list-inside text-gray-600"},st={class:"text-gray-500 mb-6 text-lg"},ut={class:"list-disc list-inside"},at="July 29, 2026",bt=h({__name:"TryCatchFinally",setup(pt){const a=O(),p=r(`
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
`),m=r(`
Program started
Inside try block
Caught exception: Index 5 out of bounds for length 3
Exception type: ArrayIndexOutOfBoundsException
Program continues after try-catch
Program ended
`),d=r(`
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
`),y=r(`
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
`),c=r(`
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
            } finally {
                System.out.println("Finally block for: " + input);
            }
            System.out.println("-----------");
        }
    }
}
`),g=r(`
Processing: 10
Result: 10
Finally block for: 10
-----------
Processing: abc
NumberFormatException: Invalid number format
Finally block for: abc
-----------
Processing: 0
ArithmeticException: Cannot divide by zero
Finally block for: 0
-----------
`),x=r(`
import java.io.*;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        // Traditional way - manually close resources
        System.out.println("Traditional way:");
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
                System.out.println("Scanner closed manually");
            }
        }

        System.out.println();

        // Try-with-resources - automatically closes resources
        System.out.println("Try-with-resources way:");
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
`),f=r(`
Traditional way:
Enter a number: 42
You entered: 42
Scanner closed manually

Try-with-resources way:
Enter a number: 100
You entered: 100
Scanner automatically closed
`),b=r(`
public class Main {
    public static void main(String[] args) {
        try {
            System.out.println("Outer try block");

            try {
                System.out.println("Inner try block");
                int[] numbers = {1, 2, 3};
                System.out.println(numbers[5]);
            } catch (ArrayIndexOutOfBoundsException e) {
                System.out.println("Inner catch: " + e.getMessage());
                throw new ArithmeticException("Error in inner catch");
            }

            System.out.println("After inner try-catch");
        } catch (ArithmeticException e) {
            System.out.println("Outer catch: " + e.getMessage());
        } finally {
            System.out.println("Outer finally block");
        }

        System.out.println();

        // Nested try with different scenarios
        processData("10");
        processData("abc");
        processData("0");
    }

    public static void processData(String input) {
        System.out.println("Processing: " + input);
        try {
            int num = Integer.parseInt(input);

            try {
                int result = 100 / num;
                System.out.println("Result: " + result);
            } catch (ArithmeticException e) {
                System.out.println("Inner catch: Cannot divide by zero");
            }

        } catch (NumberFormatException e) {
            System.out.println("Outer catch: Invalid number format");
        }
        System.out.println("-----------");
    }
}
`),S=r(`
Outer try block
Inner try block
Inner catch: Index 5 out of bounds for length 3
Outer catch: Error in inner catch
Outer finally block

Processing: 10
Result: 10
-----------
Processing: abc
Outer catch: Invalid number format
-----------
Processing: 0
Inner catch: Cannot divide by zero
-----------
`),E=r(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Use case 1: Closing resources
        System.out.println("Use Case 1: Closing resources");
        BufferedReader reader = null;
        try {
            reader = new BufferedReader(new FileReader("test.txt"));
            String line = reader.readLine();
            System.out.println("Read: " + line);
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("IO Error: " + e.getMessage());
        } finally {
            try {
                if(reader != null) {
                    reader.close();
                    System.out.println("Reader closed");
                }
            } catch (IOException e) {
                System.out.println("Error closing reader");
            }
        }

        System.out.println();

        // Use case 2: Cleanup operations
        System.out.println("Use Case 2: Cleanup operations");
        try {
            System.out.println("Starting database operation");
            // Simulate database operation
            if(Math.random() > 0.5) {
                throw new Exception("Database error");
            }
            System.out.println("Database operation successful");
        } catch (Exception e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Closing database connection");
        }

        System.out.println();

        // Use case 3: Logging
        System.out.println("Use Case 3: Logging");
        logOperation();
    }

    public static void logOperation() {
        try {
            System.out.println("Performing operation");
            int result = 100 / 2;
            System.out.println("Result: " + result);
        } catch (Exception e) {
            System.out.println("Log: Error occurred - " + e.getMessage());
        } finally {
            System.out.println("Log: Operation completed");
        }
    }
}
`),w=r(`
Use Case 1: Closing resources
File not found
Reader closed

Use Case 2: Cleanup operations
Starting database operation
Database operation successful
Closing database connection

Use Case 3: Logging
Performing operation
Result: 50
Log: Operation completed
`),v=r(`
public class Main {
    public static void main(String[] args) {
        // Test withdrawal with insufficient funds
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
        } finally {
            System.out.println("Transaction completed");
        }

        System.out.println();

        // Test with negative amount
        try {
            BankAccount account2 = new BankAccount("67890", 1000);
            account2.withdraw(-50);
        } catch (InsufficientFundsException e) {
            System.out.println("Error: " + e.getMessage());
        } finally {
            System.out.println("Transaction completed");
        }
    }
}

class BankAccount {
    private String accountNumber;
    private double balance;

    public BankAccount(String accountNumber, double initialBalance) {
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
`),I=r(`
Account created with balance: $500.0
After withdrawal: $200.0
Error: Insufficient funds for withdrawal
Balance: $200.0
Attempted withdrawal: $300.0
Shortage: $100.0
Transaction completed

Error: Withdrawal amount must be positive
Transaction completed
`),C=r(`
public class Main {
    public static void main(String[] args) {
        System.out.println("Example 1: Normal execution");
        System.out.println("Result: " + normalExecution());
        System.out.println();

        System.out.println("Example 2: Exception execution");
        System.out.println("Result: " + exceptionExecution());
        System.out.println();

        System.out.println("Example 3: Try with return");
        System.out.println("Result: " + tryWithReturn());
        System.out.println();

        System.out.println("Example 4: Try with return and finally");
        System.out.println("Result: " + tryWithReturnAndFinally());
        System.out.println();

        System.out.println("Example 5: Try with exception and finally");
        try {
            System.out.println("Result: " + tryWithExceptionAndFinally());
        } catch (Exception e) {
            System.out.println("Main catch: " + e.getMessage());
        }
    }

    public static int normalExecution() {
        System.out.println("normalExecution: Entering method");
        try {
            System.out.println("normalExecution: Inside try");
            return 10;
        } finally {
            System.out.println("normalExecution: Inside finally");
        }
    }

    public static int exceptionExecution() {
        System.out.println("exceptionExecution: Entering method");
        try {
            System.out.println("exceptionExecution: Inside try");
            throw new RuntimeException("Exception in try");
        } catch (RuntimeException e) {
            System.out.println("exceptionExecution: Inside catch - " + e.getMessage());
            return 20;
        } finally {
            System.out.println("exceptionExecution: Inside finally");
        }
    }

    public static int tryWithReturn() {
        System.out.println("tryWithReturn: Entering method");
        try {
            System.out.println("tryWithReturn: Inside try");
            return 30;
        } finally {
            System.out.println("tryWithReturn: Inside finally");
            // return 40; // Uncommenting this would override the return value
        }
    }

    public static int tryWithReturnAndFinally() {
        System.out.println("tryWithReturnAndFinally: Entering method");
        try {
            System.out.println("tryWithReturnAndFinally: Inside try");
            return 50;
        } finally {
            System.out.println("tryWithReturnAndFinally: Inside finally");
            // This doesn't change the return value
        }
    }

    public static int tryWithExceptionAndFinally() throws Exception {
        System.out.println("tryWithExceptionAndFinally: Entering method");
        try {
            System.out.println("tryWithExceptionAndFinally: Inside try");
            throw new Exception("Exception in try");
        } finally {
            System.out.println("tryWithExceptionAndFinally: Inside finally");
        }
    }
}
`),F=r(`
Example 1: Normal execution
normalExecution: Entering method
normalExecution: Inside try
normalExecution: Inside finally
Result: 10

Example 2: Exception execution
exceptionExecution: Entering method
exceptionExecution: Inside try
exceptionExecution: Inside catch - Exception in try
exceptionExecution: Inside finally
Result: 20

Example 3: Try with return
tryWithReturn: Entering method
tryWithReturn: Inside try
tryWithReturn: Inside finally
Result: 30

Example 4: Try with return and finally
tryWithReturnAndFinally: Entering method
tryWithReturnAndFinally: Inside try
tryWithReturnAndFinally: Inside finally
Result: 50

Example 5: Try with exception and finally
tryWithExceptionAndFinally: Entering method
tryWithExceptionAndFinally: Inside try
tryWithExceptionAndFinally: Inside finally
Main catch: Exception in try
`),k=r(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Good practice: Use try-with-resources
        System.out.println("Good Practice: Try-with-resources");
        try (BufferedReader reader = new BufferedReader(new FileReader("file.txt"))) {
            String line = reader.readLine();
            System.out.println("Read: " + line);
        } catch (FileNotFoundException e) {
            System.out.println("File not found");
        } catch (IOException e) {
            System.out.println("IO Error");
        }

        System.out.println();

        // Good practice: Specific exceptions first
        System.out.println("Good Practice: Specific exceptions first");
        try {
            int num = Integer.parseInt("abc");
            int result = 100 / num;
        } catch (NumberFormatException e) {
            System.out.println("Number format error");
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic error");
        } catch (Exception e) {
            System.out.println("General error");
        }

        System.out.println();

        // Good practice: Don't swallow exceptions
        System.out.println("Good Practice: Log exceptions");
        try {
            riskyOperation();
        } catch (Exception e) {
            // Log the exception properly
            System.out.println("Error logged: " + e.getClass().getSimpleName() + " - " + e.getMessage());
            // Could also rethrow or handle appropriately
        }
    }

    public static void riskyOperation() throws Exception {
        throw new Exception("Something went wrong");
    }
}
`),A=r(`
Good Practice: Try-with-resources
File not found

Good Practice: Specific exceptions first
Number format error

Good Practice: Log exceptions
Error logged: Exception - Something went wrong
`);return(mt,t)=>(M(),T(R,{title:"Java Programming",navigation:B(a).sections},{default:i(()=>[t[108]||(t[108]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Try-Catch-Finally in Java ",-1)),e("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+P(at)),e("div",W,[e("p",N,[l(o,null,{default:i(()=>[...t[0]||(t[0]=[n("Try-Catch-Finally",-1)])]),_:1}),t[1]||(t[1]=n(" is the fundamental mechanism for handling exceptions in Java. It allows you to handle runtime errors gracefully and ensure proper cleanup of resources. ",-1))]),t[10]||(t[10]=e("p",{class:"mb-4"}," Key concepts: ",-1)),e("ul",U,[e("li",null,[l(o,null,{default:i(()=>[...t[2]||(t[2]=[n("try",-1)])]),_:1}),t[3]||(t[3]=n(" - Contains code that might throw an exception ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[4]||(t[4]=[n("catch",-1)])]),_:1}),t[5]||(t[5]=n(" - Handles specific exceptions ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[6]||(t[6]=[n("finally",-1)])]),_:1}),t[7]||(t[7]=n(" - Always executes, used for cleanup ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[8]||(t[8]=[n("try-with-resources",-1)])]),_:1}),t[9]||(t[9]=n(" - Auto-closes resources (Java 7+) ",-1))])])]),t[109]||(t[109]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Basic Try-Catch ",-1)),e("div",j,[e("p",L,[t[12]||(t[12]=n(" The ",-1)),l(o,null,{default:i(()=>[...t[11]||(t[11]=[n("try-catch",-1)])]),_:1}),t[13]||(t[13]=n(" block is the simplest form of exception handling. If an exception occurs in the try block, control jumps to the catch block. ",-1))]),l(s,{code:p.value,language:"java"},null,8,["code"]),t[14]||(t[14]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:m.value},null,8,["output"])]),t[110]||(t[110]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Try-Catch-Finally ",-1)),e("div",D,[e("p",G,[t[17]||(t[17]=n(" The ",-1)),l(o,null,{default:i(()=>[...t[15]||(t[15]=[n("finally",-1)])]),_:1}),t[18]||(t[18]=n(" block always executes regardless of whether an exception occurred or not. It's used for ",-1)),l(o,null,{default:i(()=>[...t[16]||(t[16]=[n("cleanup operations",-1)])]),_:1}),t[19]||(t[19]=n(" like closing resources. ",-1))]),l(s,{code:d.value,language:"java"},null,8,["code"]),t[20]||(t[20]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:y.value},null,8,["output"])]),t[111]||(t[111]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Multiple Catch Blocks ",-1)),e("div",$,[e("p",J,[t[22]||(t[22]=n(" You can have ",-1)),l(o,null,{default:i(()=>[...t[21]||(t[21]=[n("multiple catch blocks",-1)])]),_:1}),t[23]||(t[23]=n(" to handle different types of exceptions. Order matters - catch more specific exceptions first. ",-1))]),l(s,{code:c.value,language:"java"},null,8,["code"]),t[24]||(t[24]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:g.value},null,8,["output"])]),t[112]||(t[112]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Try-With-Resources ",-1)),e("div",z,[e("p",Y,[l(o,null,{default:i(()=>[...t[25]||(t[25]=[n("Try-with-resources",-1)])]),_:1}),t[27]||(t[27]=n(" (Java 7+) automatically closes resources that implement ",-1)),l(o,null,{default:i(()=>[...t[26]||(t[26]=[n("AutoCloseable",-1)])]),_:1}),t[28]||(t[28]=n(" . This eliminates the need for explicit finally blocks for cleanup. ",-1))]),l(s,{code:x.value,language:"java"},null,8,["code"]),t[29]||(t[29]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:f.value},null,8,["output"])]),t[113]||(t[113]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Nested Try-Catch ",-1)),e("div",V,[e("p",H,[l(o,null,{default:i(()=>[...t[30]||(t[30]=[n("Nested try-catch",-1)])]),_:1}),t[31]||(t[31]=n(" blocks allow you to handle exceptions at different levels of your code. Inner blocks can catch specific exceptions while outer blocks handle more general ones. ",-1))]),l(s,{code:b.value,language:"java"},null,8,["code"]),t[32]||(t[32]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:S.value},null,8,["output"])]),t[114]||(t[114]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Finally Block Use Cases ",-1)),e("div",K,[e("p",q,[t[34]||(t[34]=n(" The ",-1)),l(o,null,{default:i(()=>[...t[33]||(t[33]=[n("finally",-1)])]),_:1}),t[35]||(t[35]=n(" block is commonly used for: ",-1))]),t[36]||(t[36]=e("ul",{class:"list-disc list-inside mb-4"},[e("li",null,"Closing files, database connections, or network sockets"),e("li",null,"Releasing system resources"),e("li",null,"Performing cleanup operations"),e("li",null,"Logging completion of operations")],-1)),l(s,{code:E.value,language:"java"},null,8,["code"]),t[37]||(t[37]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:w.value},null,8,["output"])]),t[115]||(t[115]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Try-Catch with Custom Exceptions ",-1)),e("div",Q,[e("p",X,[l(o,null,{default:i(()=>[...t[38]||(t[38]=[n("Custom exceptions",-1)])]),_:1}),t[39]||(t[39]=n(" can be thrown and caught just like built-in exceptions, providing application-specific error handling. ",-1))]),l(s,{code:v.value,language:"java"},null,8,["code"]),t[40]||(t[40]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:I.value},null,8,["output"])]),t[116]||(t[116]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Finally Block Execution Order ",-1)),e("div",Z,[e("p",_,[t[42]||(t[42]=n(" Understanding the ",-1)),l(o,null,{default:i(()=>[...t[41]||(t[41]=[n("execution order",-1)])]),_:1}),t[43]||(t[43]=n(" of try-catch-finally blocks is crucial: ",-1))]),e("ul",tt,[e("li",null,[t[45]||(t[45]=n("Finally block executes ",-1)),l(o,null,{default:i(()=>[...t[44]||(t[44]=[n("before",-1)])]),_:1}),t[46]||(t[46]=n(" the method returns ",-1))]),e("li",null,[t[48]||(t[48]=n("Finally executes even if there's a ",-1)),l(o,null,{default:i(()=>[...t[47]||(t[47]=[n("return",-1)])]),_:1}),t[49]||(t[49]=n(" statement ",-1))]),e("li",null,[t[51]||(t[51]=n("If both try and finally have returns, ",-1)),l(o,null,{default:i(()=>[...t[50]||(t[50]=[n("finally's return wins",-1)])]),_:1})])]),l(s,{code:C.value,language:"java"},null,8,["code"]),t[52]||(t[52]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:F.value},null,8,["output"])]),t[117]||(t[117]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Best Practices for Try-Catch-Finally ",-1)),e("div",nt,[e("div",et,[t[69]||(t[69]=e("p",{class:"text-blue-700 font-semibold"},"Best Practices:",-1)),e("ul",lt,[e("li",null,[t[54]||(t[54]=n("Use ",-1)),l(o,null,{default:i(()=>[...t[53]||(t[53]=[n("try-with-resources",-1)])]),_:1}),t[55]||(t[55]=n(" for AutoCloseable resources ",-1))]),e("li",null,[t[57]||(t[57]=n("Catch ",-1)),l(o,null,{default:i(()=>[...t[56]||(t[56]=[n("specific exceptions",-1)])]),_:1}),t[58]||(t[58]=n(" before general ones ",-1))]),e("li",null,[t[60]||(t[60]=n("Don't ",-1)),l(o,null,{default:i(()=>[...t[59]||(t[59]=[n("swallow exceptions",-1)])]),_:1}),t[61]||(t[61]=n(" - log or rethrow them ",-1))]),e("li",null,[t[63]||(t[63]=n("Use ",-1)),l(o,null,{default:i(()=>[...t[62]||(t[62]=[n("finally",-1)])]),_:1}),t[64]||(t[64]=n(" for cleanup operations ",-1))]),e("li",null,[t[66]||(t[66]=n("Don't use exceptions for ",-1)),l(o,null,{default:i(()=>[...t[65]||(t[65]=[n("flow control",-1)])]),_:1})]),e("li",null,[t[68]||(t[68]=n("Provide ",-1)),l(o,null,{default:i(()=>[...t[67]||(t[67]=[n("meaningful error messages",-1)])]),_:1})])])]),l(s,{code:k.value,language:"java"},null,8,["code"]),t[70]||(t[70]=e("p",{class:"mt-4"},"Output:",-1)),l(u,{output:A.value},null,8,["output"])]),t[118]||(t[118]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Common Mistakes to Avoid ",-1)),e("div",it,[e("div",ot,[t[86]||(t[86]=e("p",{class:"text-red-700 font-semibold"},"Mistakes to Avoid:",-1)),e("ul",rt,[e("li",null,[t[72]||(t[72]=n("Catching ",-1)),l(o,null,{default:i(()=>[...t[71]||(t[71]=[n("Exception",-1)])]),_:1}),t[73]||(t[73]=n(" instead of specific exceptions ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[74]||(t[74]=[n("Swallowing",-1)])]),_:1}),t[75]||(t[75]=n(" exceptions without logging ",-1))]),e("li",null,[t[77]||(t[77]=n("Using ",-1)),l(o,null,{default:i(()=>[...t[76]||(t[76]=[n("finally",-1)])]),_:1}),t[78]||(t[78]=n(" to change return values ",-1))]),e("li",null,[t[80]||(t[80]=n("Not ",-1)),l(o,null,{default:i(()=>[...t[79]||(t[79]=[n("closing resources",-1)])]),_:1}),t[81]||(t[81]=n(" in finally block ",-1))]),e("li",null,[t[83]||(t[83]=n("Catching exceptions ",-1)),l(o,null,{default:i(()=>[...t[82]||(t[82]=[n("too broadly",-1)])]),_:1})]),e("li",null,[t[85]||(t[85]=n("Using exceptions for ",-1)),l(o,null,{default:i(()=>[...t[84]||(t[84]=[n("normal flow control",-1)])]),_:1})])])])]),t[119]||(t[119]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),e("div",st,[e("ul",ut,[e("li",null,[l(o,null,{default:i(()=>[...t[87]||(t[87]=[n("Try-Catch",-1)])]),_:1}),t[88]||(t[88]=n(" handles exceptions gracefully ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[89]||(t[89]=[n("Finally",-1)])]),_:1}),t[90]||(t[90]=n(" always executes for cleanup ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[91]||(t[91]=[n("Multiple catch",-1)])]),_:1}),t[92]||(t[92]=n(" blocks handle different exception types ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[93]||(t[93]=[n("Try-with-resources",-1)])]),_:1}),t[94]||(t[94]=n(" auto-closes resources ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[95]||(t[95]=[n("Nested try-catch",-1)])]),_:1}),t[96]||(t[96]=n(" provides multi-level handling ",-1))]),e("li",null,[l(o,null,{default:i(()=>[...t[97]||(t[97]=[n("Finally",-1)])]),_:1}),t[98]||(t[98]=n(" executes before method returns ",-1))]),e("li",null,[t[100]||(t[100]=n("Use ",-1)),l(o,null,{default:i(()=>[...t[99]||(t[99]=[n("specific exceptions",-1)])]),_:1}),t[101]||(t[101]=n(" for better error handling ",-1))]),e("li",null,[t[103]||(t[103]=n("Always ",-1)),l(o,null,{default:i(()=>[...t[102]||(t[102]=[n("log or rethrow",-1)])]),_:1}),t[104]||(t[104]=n(" exceptions ",-1))]),e("li",null,[t[106]||(t[106]=n("Exception handling is ",-1)),l(o,null,{default:i(()=>[...t[105]||(t[105]=[n("essential",-1)])]),_:1}),t[107]||(t[107]=n(" for robust programs ",-1))])])])]),_:1},8,["navigation"]))}});export{bt as default};

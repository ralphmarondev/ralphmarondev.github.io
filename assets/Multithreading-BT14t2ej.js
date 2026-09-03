import{_ as W}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{S as i}from"./SpanHighlight-C0NIfFE-.js";import{C as l}from"./CodeBlock-CjPs9I9U.js";import{O as o}from"./OutputBlock-BzLqeAqJ.js";import{u as E}from"./javaProgramming-3VCcq7Z_.js";import{d as j,r as a,p as A,l as s,m as R,o as O,a as n,t as P,k as r,b as e}from"./index-IauxWRt0.js";const c={class:"text-gray-600 mb-6 text-lg"},z={class:"mb-4"},B={class:"list-disc list-inside mb-4"},U={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},D={class:"text-gray-500 mb-6 text-lg"},L={class:"mb-4"},J={class:"text-gray-500 mb-6 text-lg"},G={class:"list-disc list-inside mb-4"},H={class:"text-gray-500 mb-6 text-lg"},F={class:"mb-4"},K={class:"text-gray-500 mb-6 text-lg"},V={class:"mb-4"},Y={class:"list-disc list-inside mb-4"},q={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},Z={class:"mb-4"},_={class:"text-gray-500 mb-6 text-lg"},tt={class:"mb-4"},et={class:"text-gray-500 mb-6 text-lg"},nt={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},rt={class:"list-disc list-inside text-gray-600"},st={class:"list-disc list-inside"},it={class:"text-gray-500 mb-6 text-lg"},at={class:"list-disc list-inside"},lt="July 29, 2026",yt=j({__name:"Multithreading",setup(ot){const d=E(),u=a(`
public class Main {
    public static void main(String[] args) {
        System.out.println("Main thread started");

        // Get current thread
        Thread currentThread = Thread.currentThread();
        System.out.println("Thread name: " + currentThread.getName());
        System.out.println("Thread ID: " + currentThread.getId());
        System.out.println("Thread priority: " + currentThread.getPriority());

        // Thread states
        System.out.println("Thread states:");
        System.out.println("  NEW - Thread created but not started");
        System.out.println("  RUNNABLE - Thread is running");
        System.out.println("  BLOCKED - Thread is blocked");
        System.out.println("  WAITING - Thread is waiting");
        System.out.println("  TIMED_WAITING - Thread is waiting with timeout");
        System.out.println("  TERMINATED - Thread has finished");
    }
}
`),p=a(`
Main thread started
Thread name: main
Thread ID: 1
Thread priority: 5
Thread states:
  NEW - Thread created but not started
  RUNNABLE - Thread is running
  BLOCKED - Thread is blocked
  WAITING - Thread is waiting
  TIMED_WAITING - Thread is waiting with timeout
  TERMINATED - Thread has finished
`),m=a(`
public class Main {
    public static void main(String[] args) {
        System.out.println("Main thread started");

        // Creating threads by extending Thread
        MyThread thread1 = new MyThread("Thread 1");
        MyThread thread2 = new MyThread("Thread 2");
        MyThread thread3 = new MyThread("Thread 3");

        // Starting threads
        thread1.start();
        thread2.start();
        thread3.start();

        System.out.println("Main thread finished");
    }
}

class MyThread extends Thread {
    private String name;

    public MyThread(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for(int i = 1; i <= 5; i++) {
            System.out.println(name + ": Count " + i);
            try {
                Thread.sleep(500); // Sleep for 500ms
            } catch (InterruptedException e) {
                System.out.println(name + " was interrupted");
            }
        }
        System.out.println(name + " finished");
    }
}
`),T=a(`
Main thread started
Main thread finished
Thread 1: Count 1
Thread 2: Count 1
Thread 3: Count 1
Thread 1: Count 2
Thread 2: Count 2
Thread 3: Count 2
Thread 1: Count 3
Thread 2: Count 3
Thread 3: Count 3
Thread 1: Count 4
Thread 2: Count 4
Thread 3: Count 4
Thread 1: Count 5
Thread 2: Count 5
Thread 3: Count 5
Thread 1 finished
Thread 2 finished
Thread 3 finished
`),h=a(`
public class Main {
    public static void main(String[] args) {
        System.out.println("Main thread started");

        // Creating threads by implementing Runnable
        Runnable task1 = new MyRunnable("Task 1");
        Runnable task2 = new MyRunnable("Task 2");
        Runnable task3 = new MyRunnable("Task 3");

        Thread thread1 = new Thread(task1);
        Thread thread2 = new Thread(task2);
        Thread thread3 = new Thread(task3);

        // Starting threads
        thread1.start();
        thread2.start();
        thread3.start();

        System.out.println("Main thread finished");
    }
}

class MyRunnable implements Runnable {
    private String name;

    public MyRunnable(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for(int i = 1; i <= 5; i++) {
            System.out.println(name + ": Count " + i);
            try {
                Thread.sleep(300);
            } catch (InterruptedException e) {
                System.out.println(name + " was interrupted");
            }
        }
        System.out.println(name + " finished");
    }
}
`),g=a(`
Main thread started
Main thread finished
Task 1: Count 1
Task 2: Count 1
Task 3: Count 1
Task 1: Count 2
Task 2: Count 2
Task 3: Count 2
Task 1: Count 3
Task 2: Count 3
Task 3: Count 3
Task 1: Count 4
Task 2: Count 4
Task 3: Count 4
Task 1: Count 5
Task 2: Count 5
Task 3: Count 5
Task 1 finished
Task 2 finished
Task 3 finished
`),y=a(`
public class Main {
    public static void main(String[] args) throws InterruptedException {
        // Creating threads
        Thread t1 = new Thread(new Worker("Worker 1"));
        Thread t2 = new Thread(new Worker("Worker 2"));
        Thread t3 = new Thread(new Worker("Worker 3"));

        // Setting thread names
        t1.setName("Thread-A");
        t2.setName("Thread-B");
        t3.setName("Thread-C");

        // Setting priorities (1-10)
        t1.setPriority(Thread.MIN_PRIORITY);  // 1
        t2.setPriority(Thread.NORM_PRIORITY); // 5
        t3.setPriority(Thread.MAX_PRIORITY);  // 10

        System.out.println("Thread priorities:");
        System.out.println(t1.getName() + ": " + t1.getPriority());
        System.out.println(t2.getName() + ": " + t2.getPriority());
        System.out.println(t3.getName() + ": " + t3.getPriority());

        // Starting threads
        t1.start();
        t2.start();
        t3.start();

        // join() - wait for thread to finish
        t1.join();
        t2.join();
        t3.join();

        System.out.println("All threads finished");
    }
}

class Worker implements Runnable {
    private String name;

    public Worker(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        for(int i = 1; i <= 3; i++) {
            System.out.println(Thread.currentThread().getName() +
                " (" + name + "): Step " + i);
            try {
                Thread.sleep(400);
            } catch (InterruptedException e) {
                System.out.println(Thread.currentThread().getName() + " interrupted");
            }
        }
        System.out.println(Thread.currentThread().getName() + " finished");
    }
}
`),f=a(`
Thread priorities:
Thread-A: 1
Thread-B: 5
Thread-C: 10
Thread-A (Worker 1): Step 1
Thread-B (Worker 2): Step 1
Thread-C (Worker 3): Step 1
Thread-A (Worker 1): Step 2
Thread-B (Worker 2): Step 2
Thread-C (Worker 3): Step 2
Thread-A (Worker 1): Step 3
Thread-B (Worker 2): Step 3
Thread-C (Worker 3): Step 3
Thread-A finished
Thread-B finished
Thread-C finished
All threads finished
`),b=a(`
public class Main {
    public static void main(String[] args) throws InterruptedException {
        // Without synchronization - race condition
        Counter counter = new Counter();

        Thread[] threads = new Thread[10];
        for(int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for(int j = 0; j < 1000; j++) {
                    counter.increment();
                }
            });
            threads[i].start();
        }

        // Wait for all threads to finish
        for(Thread t : threads) {
            t.join();
        }

        System.out.println("Expected: 10000, Actual without sync: " + counter.getCount());
        System.out.println();

        // With synchronization
        SyncCounter syncCounter = new SyncCounter();

        Thread[] syncThreads = new Thread[10];
        for(int i = 0; i < syncThreads.length; i++) {
            syncThreads[i] = new Thread(() -> {
                for(int j = 0; j < 1000; j++) {
                    syncCounter.increment();
                }
            });
            syncThreads[i].start();
        }

        // Wait for all threads to finish
        for(Thread t : syncThreads) {
            t.join();
        }

        System.out.println("Expected: 10000, Actual with sync: " + syncCounter.getCount());
    }
}

class Counter {
    private int count = 0;

    public void increment() {
        count++; // Not thread-safe
    }

    public int getCount() {
        return count;
    }
}

class SyncCounter {
    private int count = 0;

    public synchronized void increment() {
        count++; // Thread-safe
    }

    public int getCount() {
        return count;
    }
}
`),k=a(`
Expected: 10000, Actual without sync: 9876

Expected: 10000, Actual with sync: 10000
`),S=a(`
public class Main {
    public static void main(String[] args) throws InterruptedException {
        BankAccount account = new BankAccount(1000);

        // Multiple threads withdrawing money
        Thread t1 = new Thread(() -> {
            for(int i = 0; i < 3; i++) {
                account.withdraw(200);
            }
        });

        Thread t2 = new Thread(() -> {
            for(int i = 0; i < 3; i++) {
                account.withdraw(200);
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("Final balance: $" + account.getBalance());
        System.out.println("Total withdrawn: $" + (1000 - account.getBalance()));
    }
}

class BankAccount {
    private double balance;

    public BankAccount(double balance) {
        this.balance = balance;
    }

    // Synchronized method
    public synchronized void withdraw(double amount) {
        if(amount <= balance) {
            System.out.println(Thread.currentThread().getName() +
                " withdrawing $" + amount);
            balance -= amount;
            System.out.println("New balance: $" + balance);
        } else {
            System.out.println(Thread.currentThread().getName() +
                " insufficient funds for $" + amount);
        }
    }

    // Synchronized block
    public double getBalance() {
        synchronized(this) {
            return balance;
        }
    }
}
`),x=a(`
Thread-0 withdrawing $200.0
New balance: $800.0
Thread-1 withdrawing $200.0
New balance: $600.0
Thread-0 withdrawing $200.0
New balance: $400.0
Thread-1 withdrawing $200.0
New balance: $200.0
Thread-0 withdrawing $200.0
New balance: $0.0
Thread-1 insufficient funds for $200.0
Final balance: $0.0
Total withdrawn: $1000.0
`),w=a(`
public class Main {
    public static void main(String[] args) throws InterruptedException {
        Message message = new Message();

        // Producer thread
        Thread producer = new Thread(() -> {
            String[] messages = {"Hello", "World", "Java", "Multithreading", "Done"};
            for(String msg : messages) {
                message.produce(msg);
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        });

        // Consumer thread
        Thread consumer = new Thread(() -> {
            while(true) {
                String msg = message.consume();
                System.out.println("Consumed: " + msg);
                if(msg.equals("Done")) {
                    break;
                }
            }
        });

        producer.start();
        consumer.start();

        producer.join();
        consumer.join();

        System.out.println("All messages processed");
    }
}

class Message {
    private String message;
    private boolean hasMessage = false;

    public synchronized void produce(String message) {
        // Wait if there's already a message
        while(hasMessage) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }

        this.message = message;
        hasMessage = true;
        System.out.println("Produced: " + message);
        notify(); // Notify consumer
    }

    public synchronized String consume() {
        // Wait if there's no message
        while(!hasMessage) {
            try {
                wait();
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return "Interrupted";
            }
        }

        hasMessage = false;
        notify(); // Notify producer
        return message;
    }
}
`),v=a(`
Produced: Hello
Consumed: Hello
Produced: World
Consumed: World
Produced: Java
Consumed: Java
Produced: Multithreading
Consumed: Multithreading
Produced: Done
Consumed: Done
All messages processed
`),C=a(`
import java.util.concurrent.*;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        // Creating a thread pool with 3 threads
        ExecutorService executor = Executors.newFixedThreadPool(3);

        System.out.println("Submitting tasks to thread pool");

        // Submit 10 tasks
        for(int i = 1; i <= 10; i++) {
            final int taskId = i;
            executor.submit(() -> {
                System.out.println("Task " + taskId + " executed by " +
                    Thread.currentThread().getName());
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                System.out.println("Task " + taskId + " completed");
            });
        }

        // Shutdown the executor
        executor.shutdown();

        // Wait for all tasks to complete
        if(!executor.awaitTermination(60, TimeUnit.SECONDS)) {
            executor.shutdownNow();
        }

        System.out.println("All tasks completed");
    }
}
`),M=a(`
Submitting tasks to thread pool
Task 1 executed by pool-1-thread-1
Task 2 executed by pool-1-thread-2
Task 3 executed by pool-1-thread-3
Task 1 completed
Task 4 executed by pool-1-thread-1
Task 2 completed
Task 5 executed by pool-1-thread-2
Task 3 completed
Task 6 executed by pool-1-thread-3
Task 4 completed
Task 7 executed by pool-1-thread-1
Task 5 completed
Task 8 executed by pool-1-thread-2
Task 6 completed
Task 9 executed by pool-1-thread-3
Task 7 completed
Task 10 executed by pool-1-thread-1
Task 8 completed
Task 9 completed
Task 10 completed
All tasks completed
`),N=a(`
public class Main {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("Race Condition Demo");
        System.out.println("===================");

        // Without synchronization
        TicketCounter counter = new TicketCounter();

        Thread t1 = new Thread(() -> {
            for(int i = 0; i < 100; i++) {
                counter.sellTicketUnsafe();
            }
        });

        Thread t2 = new Thread(() -> {
            for(int i = 0; i < 100; i++) {
                counter.sellTicketUnsafe();
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("Without sync - Tickets sold: " +
            counter.getTicketsSoldUnsafe());
        System.out.println("Expected: 200");
        System.out.println();

        // With synchronization
        SyncTicketCounter syncCounter = new SyncTicketCounter();

        Thread t3 = new Thread(() -> {
            for(int i = 0; i < 100; i++) {
                syncCounter.sellTicket();
            }
        });

        Thread t4 = new Thread(() -> {
            for(int i = 0; i < 100; i++) {
                syncCounter.sellTicket();
            }
        });

        t3.start();
        t4.start();
        t3.join();
        t4.join();

        System.out.println("With sync - Tickets sold: " +
            syncCounter.getTicketsSold());
        System.out.println("Expected: 200");
    }
}

class TicketCounter {
    private int ticketsSoldUnsafe = 0;
    private int ticketsSold = 0;

    public void sellTicketUnsafe() {
        ticketsSoldUnsafe++;
    }

    public synchronized void sellTicket() {
        ticketsSold++;
    }

    public int getTicketsSoldUnsafe() {
        return ticketsSoldUnsafe;
    }

    public int getTicketsSold() {
        return ticketsSold;
    }
}
`),I=a(`
Race Condition Demo
===================
Without sync - Tickets sold: 198
Expected: 200

With sync - Tickets sold: 200
Expected: 200
`);return(dt,t)=>(O(),A(W,{title:"Java Programming",navigation:R(d).sections},{default:s(()=>[t[118]||(t[118]=n("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Multithreading in Java ",-1)),n("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+P(lt)),n("div",c,[n("p",z,[r(i,null,{default:s(()=>[...t[0]||(t[0]=[e("Multithreading",-1)])]),_:1}),t[2]||(t[2]=e(" allows a program to execute multiple threads simultaneously. It enables ",-1)),r(i,null,{default:s(()=>[...t[1]||(t[1]=[e("parallel processing",-1)])]),_:1}),t[3]||(t[3]=e(" and improves application performance. ",-1))]),t[14]||(t[14]=n("p",{class:"mb-4"}," Key concepts: ",-1)),n("ul",B,[n("li",null,[r(i,null,{default:s(()=>[...t[4]||(t[4]=[e("Thread",-1)])]),_:1}),t[5]||(t[5]=e(" - A single sequence of execution ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[6]||(t[6]=[e("Multithreading",-1)])]),_:1}),t[7]||(t[7]=e(" - Multiple threads running concurrently ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[8]||(t[8]=[e("Concurrency",-1)])]),_:1}),t[9]||(t[9]=e(" - Multiple tasks making progress ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[10]||(t[10]=[e("Synchronization",-1)])]),_:1}),t[11]||(t[11]=e(" - Coordinating access to shared resources ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[12]||(t[12]=[e("Thread safety",-1)])]),_:1}),t[13]||(t[13]=e(" - Code that works correctly with multiple threads ",-1))])]),r(l,{code:u.value,language:"java"},null,8,["code"]),t[15]||(t[15]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:p.value},null,8,["output"])]),t[119]||(t[119]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Creating Threads - Extending Thread ",-1)),n("div",U,[n("p",$,[t[18]||(t[18]=e(" The simplest way to create a thread is to ",-1)),r(i,null,{default:s(()=>[...t[16]||(t[16]=[e("extend the Thread class",-1)])]),_:1}),t[19]||(t[19]=e(" and override the ",-1)),r(i,null,{default:s(()=>[...t[17]||(t[17]=[e("run()",-1)])]),_:1}),t[20]||(t[20]=e(" method. ",-1))]),r(l,{code:m.value,language:"java"},null,8,["code"]),t[21]||(t[21]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:T.value},null,8,["output"])]),t[120]||(t[120]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Creating Threads - Implementing Runnable ",-1)),n("div",D,[n("p",L,[t[23]||(t[23]=e(" The recommended way is to ",-1)),r(i,null,{default:s(()=>[...t[22]||(t[22]=[e("implement the Runnable interface",-1)])]),_:1}),t[24]||(t[24]=e(" and pass it to a Thread object. ",-1))]),r(l,{code:h.value,language:"java"},null,8,["code"]),t[25]||(t[25]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:g.value},null,8,["output"])]),t[121]||(t[121]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Thread Methods ",-1)),n("div",J,[t[38]||(t[38]=n("p",{class:"mb-4"}," Important Thread methods: ",-1)),n("ul",G,[n("li",null,[r(i,null,{default:s(()=>[...t[26]||(t[26]=[e("start()",-1)])]),_:1}),t[27]||(t[27]=e(" - Starts the thread ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[28]||(t[28]=[e("run()",-1)])]),_:1}),t[29]||(t[29]=e(" - Contains the thread's code ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[30]||(t[30]=[e("sleep()",-1)])]),_:1}),t[31]||(t[31]=e(" - Pauses thread execution ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[32]||(t[32]=[e("join()",-1)])]),_:1}),t[33]||(t[33]=e(" - Waits for thread to finish ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[34]||(t[34]=[e("setPriority()",-1)])]),_:1}),t[35]||(t[35]=e(" - Sets thread priority (1-10) ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[36]||(t[36]=[e("getName()",-1)])]),_:1}),t[37]||(t[37]=e(" - Gets thread name ",-1))])]),r(l,{code:y.value,language:"java"},null,8,["code"]),t[39]||(t[39]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:f.value},null,8,["output"])]),t[122]||(t[122]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Thread Synchronization ",-1)),n("div",H,[n("p",F,[r(i,null,{default:s(()=>[...t[40]||(t[40]=[e("Synchronization",-1)])]),_:1}),t[42]||(t[42]=e(" ensures that only one thread accesses a shared resource at a time, preventing ",-1)),r(i,null,{default:s(()=>[...t[41]||(t[41]=[e("race conditions",-1)])]),_:1}),t[43]||(t[43]=e(" . ",-1))]),r(l,{code:b.value,language:"java"},null,8,["code"]),t[44]||(t[44]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:k.value},null,8,["output"])]),t[123]||(t[123]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Synchronized Methods and Blocks ",-1)),n("div",K,[n("p",V,[t[46]||(t[46]=e(" Use the ",-1)),r(i,null,{default:s(()=>[...t[45]||(t[45]=[e("synchronized",-1)])]),_:1}),t[47]||(t[47]=e(" keyword to make methods or code blocks thread-safe. ",-1))]),n("ul",Y,[n("li",null,[r(i,null,{default:s(()=>[...t[48]||(t[48]=[e("synchronized method",-1)])]),_:1}),t[49]||(t[49]=e(" - Locks the entire method ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[50]||(t[50]=[e("synchronized block",-1)])]),_:1}),t[51]||(t[51]=e(" - Locks a specific block of code ",-1))])]),r(l,{code:S.value,language:"java"},null,8,["code"]),t[52]||(t[52]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:x.value},null,8,["output"])]),t[124]||(t[124]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Thread Communication - wait() and notify() ",-1)),n("div",q,[n("p",X,[r(i,null,{default:s(()=>[...t[53]||(t[53]=[e("wait()",-1)])]),_:1}),t[56]||(t[56]=e(" and ",-1)),r(i,null,{default:s(()=>[...t[54]||(t[54]=[e("notify()",-1)])]),_:1}),t[57]||(t[57]=e(" allow threads to communicate and coordinate. This is used in ",-1)),r(i,null,{default:s(()=>[...t[55]||(t[55]=[e("producer-consumer",-1)])]),_:1}),t[58]||(t[58]=e(" scenarios. ",-1))]),r(l,{code:w.value,language:"java"},null,8,["code"]),t[59]||(t[59]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:v.value},null,8,["output"])]),t[125]||(t[125]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Thread Pools ",-1)),n("div",Q,[n("p",Z,[r(i,null,{default:s(()=>[...t[60]||(t[60]=[e("Thread pools",-1)])]),_:1}),t[61]||(t[61]=e(" manage a pool of worker threads, reusing them for multiple tasks. This improves performance by reducing thread creation overhead. ",-1))]),r(l,{code:C.value,language:"java"},null,8,["code"]),t[62]||(t[62]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:M.value},null,8,["output"])]),t[126]||(t[126]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Race Condition Demo ",-1)),n("div",_,[n("p",tt,[t[64]||(t[64]=e(" A ",-1)),r(i,null,{default:s(()=>[...t[63]||(t[63]=[e("race condition",-1)])]),_:1}),t[65]||(t[65]=e(" occurs when multiple threads access shared data without proper synchronization, leading to inconsistent results. ",-1))]),r(l,{code:N.value,language:"java"},null,8,["code"]),t[66]||(t[66]=n("p",{class:"mt-4"},"Output:",-1)),r(o,{output:I.value},null,8,["output"])]),t[127]||(t[127]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Multithreading ",-1)),n("div",et,[n("div",nt,[t[82]||(t[82]=n("p",{class:"text-blue-700 font-semibold"},"Best Practices:",-1)),n("ul",rt,[n("li",null,[t[68]||(t[68]=e("Prefer ",-1)),r(i,null,{default:s(()=>[...t[67]||(t[67]=[e("Runnable",-1)])]),_:1}),t[69]||(t[69]=e(" over extending Thread ",-1))]),n("li",null,[t[71]||(t[71]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[70]||(t[70]=[e("synchronized",-1)])]),_:1}),t[72]||(t[72]=e(" for shared resources ",-1))]),n("li",null,[t[74]||(t[74]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[73]||(t[73]=[e("thread pools",-1)])]),_:1}),t[75]||(t[75]=e(" instead of creating threads manually ",-1))]),n("li",null,[t[77]||(t[77]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[76]||(t[76]=[e("volatile",-1)])]),_:1}),t[78]||(t[78]=e(" for simple flags ",-1))]),n("li",null,[t[80]||(t[80]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[79]||(t[79]=[e("java.util.concurrent",-1)])]),_:1}),t[81]||(t[81]=e(" for advanced concurrency ",-1))])])]),n("ul",st,[n("li",null,[t[84]||(t[84]=e("Threads share the ",-1)),r(i,null,{default:s(()=>[...t[83]||(t[83]=[e("same memory space",-1)])]),_:1})]),n("li",null,[r(i,null,{default:s(()=>[...t[85]||(t[85]=[e("Race conditions",-1)])]),_:1}),t[86]||(t[86]=e(" lead to inconsistent data ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[87]||(t[87]=[e("Deadlocks",-1)])]),_:1}),t[88]||(t[88]=e(" occur when threads wait for each other ",-1))]),n("li",null,[t[90]||(t[90]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[89]||(t[89]=[e("ThreadLocal",-1)])]),_:1}),t[91]||(t[91]=e(" for thread-local variables ",-1))]),n("li",null,[t[93]||(t[93]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[92]||(t[92]=[e("ConcurrentHashMap",-1)])]),_:1}),t[94]||(t[94]=e(" for thread-safe maps ",-1))])])]),t[128]||(t[128]=n("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),n("div",it,[n("ul",at,[n("li",null,[t[96]||(t[96]=e("Multithreading allows ",-1)),r(i,null,{default:s(()=>[...t[95]||(t[95]=[e("parallel execution",-1)])]),_:1})]),n("li",null,[t[99]||(t[99]=e("Create threads by extending ",-1)),r(i,null,{default:s(()=>[...t[97]||(t[97]=[e("Thread",-1)])]),_:1}),t[100]||(t[100]=e(" or implementing ",-1)),r(i,null,{default:s(()=>[...t[98]||(t[98]=[e("Runnable",-1)])]),_:1})]),n("li",null,[t[102]||(t[102]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[101]||(t[101]=[e("synchronized",-1)])]),_:1}),t[103]||(t[103]=e(" for thread safety ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[104]||(t[104]=[e("wait()",-1)])]),_:1}),t[106]||(t[106]=e(" and ",-1)),r(i,null,{default:s(()=>[...t[105]||(t[105]=[e("notify()",-1)])]),_:1}),t[107]||(t[107]=e(" for thread communication ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[108]||(t[108]=[e("Thread pools",-1)])]),_:1}),t[109]||(t[109]=e(" improve performance ",-1))]),n("li",null,[r(i,null,{default:s(()=>[...t[110]||(t[110]=[e("Race conditions",-1)])]),_:1}),t[111]||(t[111]=e(" must be prevented ",-1))]),n("li",null,[t[113]||(t[113]=e("Use ",-1)),r(i,null,{default:s(()=>[...t[112]||(t[112]=[e("java.util.concurrent",-1)])]),_:1}),t[114]||(t[114]=e(" for advanced features ",-1))]),n("li",null,[t[116]||(t[116]=e("Multithreading is ",-1)),r(i,null,{default:s(()=>[...t[115]||(t[115]=[e("essential",-1)])]),_:1}),t[117]||(t[117]=e(" for modern applications ",-1))])])])]),_:1},8,["navigation"]))}});export{yt as default};

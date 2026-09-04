import{_ as D}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-DfQkN-rF.js";import{S as n}from"./SpanHighlight-C-B7JT-9.js";import{C as o}from"./CodeBlock-DXevIYip.js";import{O as a}from"./OutputBlock-DW4hv_11.js";import{u as T}from"./javaProgramming-Pq2XLaCP.js";import{d as C,r as s,p as j,l,m as k,o as N,a as i,t as P,k as r,b as t}from"./index-DaKFBQPl.js";const U={class:"text-gray-600 mb-6 text-lg"},A={class:"mb-4"},J={class:"list-disc list-inside mb-4"},H={class:"text-gray-500 mb-6 text-lg"},c={class:"mb-4"},V={class:"text-gray-500 mb-6 text-lg"},z={class:"mb-4"},K={class:"text-gray-500 mb-6 text-lg"},$={class:"mb-4"},q={class:"text-gray-500 mb-6 text-lg"},G={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},X={class:"mb-4"},Y={class:"text-gray-500 mb-6 text-lg"},Z={class:"mb-4"},h={class:"text-gray-500 mb-6 text-lg"},_={class:"mb-4"},ee={class:"text-gray-500 mb-6 text-lg"},te={class:"mb-4"},ie={class:"text-gray-500 mb-6 text-lg"},re={class:"mb-4"},le={class:"text-gray-500 mb-6 text-lg"},ne={class:"mb-4"},se={class:"text-gray-500 mb-6 text-lg"},oe={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},ae={class:"list-disc list-inside text-gray-600"},ue={class:"list-disc list-inside"},de={class:"text-gray-500 mb-6 text-lg"},fe={class:"list-disc list-inside"},me="July 29, 2026",ve=C({__name:"FileHandling",setup(pe){const u=T(),d=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Creating File object
        File file = new File("example.txt");

        System.out.println("File name: " + file.getName());
        System.out.println("Path: " + file.getPath());
        System.out.println("Absolute path: " + file.getAbsolutePath());
        System.out.println("Parent: " + file.getParent());

        // File operations
        try {
            if(file.exists()) {
                System.out.println("File exists");
                System.out.println("Size: " + file.length() + " bytes");
                System.out.println("Last modified: " + file.lastModified());
                System.out.println("Is directory: " + file.isDirectory());
                System.out.println("Is file: " + file.isFile());
                System.out.println("Can read: " + file.canRead());
                System.out.println("Can write: " + file.canWrite());
            } else {
                System.out.println("File does not exist");
                // Create new file
                if(file.createNewFile()) {
                    System.out.println("File created successfully");
                } else {
                    System.out.println("Failed to create file");
                }
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Directory operations
        File dir = new File("myDirectory");
        if(!dir.exists()) {
            if(dir.mkdir()) {
                System.out.println("Directory created: " + dir.getName());
            }
        }

        // List files in directory
        File currentDir = new File(".");
        String[] files = currentDir.list();
        if(files != null) {
            System.out.println("Files in current directory:");
            for(String f : files) {
                System.out.println("  " + f);
            }
        }
    }
}
`),f=s(`
File name: example.txt
Path: example.txt
Absolute path: /path/to/project/example.txt
Parent: null
File does not exist
File created successfully
Directory created: myDirectory
Files in current directory:
  example.txt
  myDirectory
  src
  target
  pom.xml
`),m=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        String filename = "output.txt";

        // Writing using FileWriter
        try (FileWriter writer = new FileWriter(filename)) {
            writer.write("Hello, World!\\n");
            writer.write("This is a test file.\\n");
            writer.write("File handling in Java is easy!\\n");
            writer.write("Line 4: Writing multiple lines.");
            System.out.println("File written successfully using FileWriter");
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }

        // Writing using FileWriter with append mode
        try (FileWriter writer = new FileWriter(filename, true)) {
            writer.write("\\nThis line is appended.");
            System.out.println("Content appended successfully");
        } catch (IOException e) {
            System.out.println("Error appending: " + e.getMessage());
        }

        // Reading the file to verify
        System.out.println("\\nFile content:");
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading: " + e.getMessage());
        }
    }
}
`),p=s(`
File written successfully using FileWriter
Content appended successfully

File content:
Hello, World!
This is a test file.
File handling in Java is easy!
Line 4: Writing multiple lines.
This line is appended.
`),y=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        String filename = "data.txt";

        // Create a sample file
        try (FileWriter writer = new FileWriter(filename)) {
            writer.write("Line 1: Java Programming\\n");
            writer.write("Line 2: File I/O Operations\\n");
            writer.write("Line 3: Reading and Writing\\n");
            writer.write("Line 4: Using BufferedReader\\n");
            writer.write("Line 5: End of file");
        } catch (IOException e) {
            System.out.println("Error creating file: " + e.getMessage());
            return;
        }

        // Method 1: Reading with FileReader (character by character)
        System.out.println("Reading character by character:");
        try (FileReader reader = new FileReader(filename)) {
            int character;
            while((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("Error reading: " + e.getMessage());
        }
        System.out.println();

        // Method 2: Reading with BufferedReader (line by line)
        System.out.println("Reading line by line:");
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            int lineNum = 1;
            while((line = reader.readLine()) != null) {
                System.out.println("Line " + lineNum + ": " + line);
                lineNum++;
            }
        } catch (IOException e) {
            System.out.println("Error reading: " + e.getMessage());
        }
    }
}
`),g=s(`
Reading character by character:
Line 1: Java Programming
Line 2: File I/O Operations
Line 3: Reading and Writing
Line 4: Using BufferedReader
Line 5: End of file

Reading line by line:
Line 1: Line 1: Java Programming
Line 2: Line 2: File I/O Operations
Line 3: Line 3: Reading and Writing
Line 4: Line 4: Using BufferedReader
Line 5: Line 5: End of file
`),F=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        String filename = "buffered_test.txt";

        // Writing with BufferedWriter
        System.out.println("Writing with BufferedWriter:");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
            writer.write("Buffered Writer Example");
            writer.newLine();
            writer.write("This is more efficient for large files");
            writer.newLine();
            writer.write("Buffered streams reduce I/O operations");
            System.out.println("File written successfully");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Reading with BufferedReader
        System.out.println("\\nReading with BufferedReader:");
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            int count = 0;
            while((line = reader.readLine()) != null) {
                count++;
                System.out.println("Line " + count + ": " + line);
            }
            System.out.println("Total lines: " + count);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Performance comparison
        System.out.println("\\nPerformance comparison:");
        long startTime = System.currentTimeMillis();
        try (FileWriter writer = new FileWriter("normal.txt")) {
            for(int i = 0; i < 10000; i++) {
                writer.write("Line " + i + "\\n");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        long endTime = System.currentTimeMillis();
        System.out.println("FileWriter time: " + (endTime - startTime) + "ms");

        startTime = System.currentTimeMillis();
        try (BufferedWriter writer = new BufferedWriter(new FileWriter("buffered.txt"))) {
            for(int i = 0; i < 10000; i++) {
                writer.write("Line " + i);
                writer.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        endTime = System.currentTimeMillis();
        System.out.println("BufferedWriter time: " + (endTime - startTime) + "ms");
    }
}
`),w=s(`
Writing with BufferedWriter:
File written successfully

Reading with BufferedReader:
Line 1: Buffered Writer Example
Line 2: This is more efficient for large files
Line 3: Buffered streams reduce I/O operations
Total lines: 3

Performance comparison:
FileWriter time: 45ms
BufferedWriter time: 12ms
`),x=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        String filename = "binary_data.dat";

        // Writing binary data
        System.out.println("Writing binary data:");
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(filename))) {
            dos.writeInt(100);
            dos.writeDouble(3.14159);
            dos.writeBoolean(true);
            dos.writeUTF("Hello Binary");
            dos.writeInt(200);
            System.out.println("Binary data written successfully");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Reading binary data
        System.out.println("\\nReading binary data:");
        try (DataInputStream dis = new DataInputStream(new FileInputStream(filename))) {
            int int1 = dis.readInt();
            double d1 = dis.readDouble();
            boolean b1 = dis.readBoolean();
            String str1 = dis.readUTF();
            int int2 = dis.readInt();

            System.out.println("Integer 1: " + int1);
            System.out.println("Double: " + d1);
            System.out.println("Boolean: " + b1);
            System.out.println("String: " + str1);
            System.out.println("Integer 2: " + int2);
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Reading byte array
        System.out.println("\\nReading as byte array:");
        try (FileInputStream fis = new FileInputStream(filename)) {
            byte[] data = fis.readAllBytes();
            System.out.println("File size: " + data.length + " bytes");
            System.out.println("First 10 bytes: ");
            for(int i = 0; i < Math.min(10, data.length); i++) {
                System.out.print(data[i] + " ");
            }
            System.out.println();
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
`),S=s(`
Writing binary data:
Binary data written successfully

Reading binary data:
Integer 1: 100
Double: 3.14159
Boolean: true
String: Hello Binary
Integer 2: 200

Reading as byte array:
File size: 35 bytes
First 10 bytes:
0 0 0 100 64 9 33 249 240 1
`),b=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        String source = "source.txt";
        String destination = "destination.txt";

        // Create source file
        try (FileWriter writer = new FileWriter(source)) {
            writer.write("This is the source file.\\n");
            writer.write("It contains some sample text.\\n");
            writer.write("This text will be copied to destination.");
        } catch (IOException e) {
            System.out.println("Error creating source: " + e.getMessage());
            return;
        }

        // Method 1: Copy using FileInputStream and FileOutputStream
        System.out.println("Copying file (Method 1 - Streams):");
        try (FileInputStream fis = new FileInputStream(source);
             FileOutputStream fos = new FileOutputStream(destination)) {
            byte[] buffer = new byte[1024];
            int bytesRead;
            while((bytesRead = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, bytesRead);
            }
            System.out.println("File copied successfully!");
        } catch (IOException e) {
            System.out.println("Error copying: " + e.getMessage());
        }

        // Method 2: Copy using BufferedReader and BufferedWriter
        System.out.println("\\nCopying file (Method 2 - Buffered):");
        String destination2 = "destination2.txt";
        try (BufferedReader reader = new BufferedReader(new FileReader(source));
             BufferedWriter writer = new BufferedWriter(new FileWriter(destination2))) {
            String line;
            while((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine();
            }
            System.out.println("File copied successfully!");
        } catch (IOException e) {
            System.out.println("Error copying: " + e.getMessage());
        }

        // Verify destination file
        System.out.println("\\nDestination file content:");
        try (BufferedReader reader = new BufferedReader(new FileReader(destination))) {
            String line;
            while((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error reading: " + e.getMessage());
        }
    }
}
`),v=s(`
Copying file (Method 1 - Streams):
File copied successfully!

Copying file (Method 2 - Buffered):
File copied successfully!

Destination file content:
This is the source file.
It contains some sample text.
This text will be copied to destination.
`),R=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Create sample files
        try {
            File file1 = new File("temp1.txt");
            File file2 = new File("temp2.txt");

            if(!file1.exists()) {
                file1.createNewFile();
                System.out.println("Created: " + file1.getName());
            }
            if(!file2.exists()) {
                file2.createNewFile();
                System.out.println("Created: " + file2.getName());
            }
        } catch (IOException e) {
            System.out.println("Error creating files: " + e.getMessage());
        }

        // List files before operations
        System.out.println("\\nFiles before operations:");
        listFiles();

        // Rename file
        File oldFile = new File("temp1.txt");
        File newFile = new File("renamed.txt");
        if(oldFile.exists()) {
            if(oldFile.renameTo(newFile)) {
                System.out.println("File renamed successfully");
            } else {
                System.out.println("Failed to rename file");
            }
        }

        // Delete file
        File toDelete = new File("temp2.txt");
        if(toDelete.exists()) {
            if(toDelete.delete()) {
                System.out.println("File deleted successfully");
            } else {
                System.out.println("Failed to delete file");
            }
        }

        // List files after operations
        System.out.println("\\nFiles after operations:");
        listFiles();

        // Delete renamed file
        File cleanup = new File("renamed.txt");
        if(cleanup.exists()) {
            cleanup.delete();
        }
    }

    public static void listFiles() {
        File dir = new File(".");
        String[] files = dir.list();
        if(files != null) {
            for(String f : files) {
                if(f.endsWith(".txt")) {
                    System.out.println("  " + f);
                }
            }
        }
    }
}
`),W=s(`
Created: temp1.txt
Created: temp2.txt

Files before operations:
  temp1.txt
  temp2.txt
File renamed successfully
File deleted successfully

Files after operations:
  renamed.txt
`),O=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Creating directories
        File dir1 = new File("myFolder");
        File dir2 = new File("myFolder/subFolder");
        File dir3 = new File("myFolder/subFolder/deepFolder");

        if(!dir1.exists()) {
            if(dir1.mkdir()) {
                System.out.println("Created directory: " + dir1.getName());
            }
        }

        if(!dir2.exists()) {
            if(dir2.mkdir()) {
                System.out.println("Created directory: " + dir2.getName());
            }
        }

        // Creating nested directories
        if(!dir3.exists()) {
            if(dir3.mkdirs()) {
                System.out.println("Created nested directories: " + dir3.getPath());
            }
        }

        // Create files in directories
        try {
            File file1 = new File(dir1, "file1.txt");
            File file2 = new File(dir2, "file2.txt");
            File file3 = new File(dir3, "file3.txt");

            file1.createNewFile();
            file2.createNewFile();
            file3.createNewFile();

            System.out.println("Files created in directories");
        } catch (IOException e) {
            System.out.println("Error creating files: " + e.getMessage());
        }

        // List directory contents recursively
        System.out.println("\\nDirectory structure:");
        listDirectory(new File("myFolder"), 0);

        // Delete directory and contents
        System.out.println("\\nDeleting directory and contents...");
        deleteDirectory(new File("myFolder"));
        System.out.println("Directory deleted");
    }

    public static void listDirectory(File dir, int level) {
        String indent = "  ".repeat(level);
        File[] files = dir.listFiles();
        if(files != null) {
            for(File file : files) {
                if(file.isDirectory()) {
                    System.out.println(indent + "[DIR] " + file.getName());
                    listDirectory(file, level + 1);
                } else {
                    System.out.println(indent + "[FILE] " + file.getName());
                }
            }
        }
    }

    public static void deleteDirectory(File dir) {
        File[] files = dir.listFiles();
        if(files != null) {
            for(File file : files) {
                if(file.isDirectory()) {
                    deleteDirectory(file);
                } else {
                    file.delete();
                }
            }
        }
        dir.delete();
    }
}
`),B=s(`
Created directory: myFolder
Created directory: subFolder
Created nested directories: myFolder/subFolder/deepFolder
Files created in directories

Directory structure:
[DIR] myFolder
  [FILE] file1.txt
  [DIR] subFolder
    [FILE] file2.txt
    [DIR] deepFolder
      [FILE] file3.txt

Deleting directory and contents...
Directory deleted
`),I=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        // Create sample files
        try {
            String[] files = {"data.txt", "info.txt", "temp.txt",
                             "image.jpg", "photo.png", "document.pdf"};
            for(String f : files) {
                File file = new File(f);
                if(!file.exists()) {
                    file.createNewFile();
                }
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Filter by file extension
        System.out.println("Text files (.txt):");
        File dir = new File(".");
        FilenameFilter txtFilter = (dir1, name) -> name.endsWith(".txt");
        String[] txtFiles = dir.list(txtFilter);
        if(txtFiles != null) {
            for(String f : txtFiles) {
                System.out.println("  " + f);
            }
        }

        // Filter by file name pattern
        System.out.println("\\nFiles containing 'data':");
        FilenameFilter patternFilter = (dir1, name) -> name.contains("data");
        String[] patternFiles = dir.list(patternFilter);
        if(patternFiles != null) {
            for(String f : patternFiles) {
                System.out.println("  " + f);
            }
        }

        // Using FileFilter
        System.out.println("\\nFiles that are not text files:");
        FileFilter nonTxtFilter = file -> !file.getName().endsWith(".txt");
        File[] nonTxtFiles = dir.listFiles(nonTxtFilter);
        if(nonTxtFiles != null) {
            for(File f : nonTxtFiles) {
                if(f.isFile()) {
                    System.out.println("  " + f.getName());
                }
            }
        }

        // Cleanup
        cleanupFiles();
    }

    public static void cleanupFiles() {
        File dir = new File(".");
        String[] files = dir.list();
        if(files != null) {
            for(String f : files) {
                if(f.endsWith(".txt") || f.endsWith(".jpg") ||
                   f.endsWith(".png") || f.endsWith(".pdf")) {
                    new File(f).delete();
                }
            }
        }
    }
}
`),L=s(`
Text files (.txt):
  data.txt
  info.txt
  temp.txt

Files containing 'data':
  data.txt

Files that are not text files:
  document.pdf
  image.jpg
  photo.png
`),E=s(`
import java.io.*;

public class Main {
    public static void main(String[] args) {
        String filename = "resource_test.txt";

        // Writing with try-with-resources
        System.out.println("Writing with try-with-resources:");
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(filename))) {
            writer.write("This demonstrates try-with-resources");
            writer.newLine();
            writer.write("Resources are automatically closed");
            writer.newLine();
            writer.write("No need for finally blocks");
            System.out.println("File written successfully");
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Reading with try-with-resources
        System.out.println("\\nReading with try-with-resources:");
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        // Multiple resources
        System.out.println("\\nMultiple resources:");
        String source = "source.txt";
        String dest = "dest.txt";

        try (BufferedReader reader = new BufferedReader(new FileReader(source));
             BufferedWriter writer = new BufferedWriter(new FileWriter(dest))) {

            // Create source first
            try (FileWriter fw = new FileWriter(source)) {
                fw.write("Line 1\\nLine 2\\nLine 3");
            }

            // Copy with try-with-resources
            String line;
            while((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine();
            }
            System.out.println("File copied successfully");

            // Clean up
            new File(source).delete();
            new File(dest).delete();
            new File(filename).delete();

        } catch (IOException e) {
            System.out.println("Error: " + e.getMessage());
        }

        System.out.println("All resources closed automatically!");
    }
}
`),M=s(`
Writing with try-with-resources:
File written successfully

Reading with try-with-resources:
This demonstrates try-with-resources
Resources are automatically closed
No need for finally blocks

Multiple resources:
File copied successfully
All resources closed automatically!
`);return(ye,e)=>(N(),j(D,{title:"Java Programming",navigation:k(u).sections},{default:l(()=>[e[126]||(e[126]=i("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," File Handling in Java ",-1)),i("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+P(me)),i("div",U,[i("p",A,[r(n,null,{default:l(()=>[...e[0]||(e[0]=[t("File Handling",-1)])]),_:1}),e[2]||(e[2]=t(" in Java allows you to read from and write to files, manage directories, and perform various file operations. Java provides the ",-1)),r(n,null,{default:l(()=>[...e[1]||(e[1]=[t("java.io",-1)])]),_:1}),e[3]||(e[3]=t(" package for file I/O operations. ",-1))]),e[14]||(e[14]=i("p",{class:"mb-4"}," Key concepts: ",-1)),i("ul",J,[i("li",null,[r(n,null,{default:l(()=>[...e[4]||(e[4]=[t("File",-1)])]),_:1}),e[5]||(e[5]=t(" - Represents a file or directory path ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[6]||(e[6]=[t("FileReader/FileWriter",-1)])]),_:1}),e[7]||(e[7]=t(" - Character-based I/O ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[8]||(e[8]=[t("FileInputStream/FileOutputStream",-1)])]),_:1}),e[9]||(e[9]=t(" - Byte-based I/O ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[10]||(e[10]=[t("BufferedReader/BufferedWriter",-1)])]),_:1}),e[11]||(e[11]=t(" - Buffered I/O ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[12]||(e[12]=[t("Try-with-resources",-1)])]),_:1}),e[13]||(e[13]=t(" - Automatic resource management ",-1))])])]),e[127]||(e[127]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," File Class Basics ",-1)),i("div",H,[i("p",c,[e[16]||(e[16]=t(" The ",-1)),r(n,null,{default:l(()=>[...e[15]||(e[15]=[t("File",-1)])]),_:1}),e[17]||(e[17]=t(" class represents file and directory pathnames. It provides methods for file operations like checking existence, getting file information, and creating/deleting files. ",-1))]),r(o,{code:d.value,language:"java"},null,8,["code"]),e[18]||(e[18]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:f.value},null,8,["output"])]),e[128]||(e[128]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Writing to Files - FileWriter ",-1)),i("div",V,[i("p",z,[r(n,null,{default:l(()=>[...e[19]||(e[19]=[t("FileWriter",-1)])]),_:1}),e[21]||(e[21]=t(" is used to write character data to files. It can be used in ",-1)),r(n,null,{default:l(()=>[...e[20]||(e[20]=[t("append mode",-1)])]),_:1}),e[22]||(e[22]=t(" to add content to existing files. ",-1))]),r(o,{code:m.value,language:"java"},null,8,["code"]),e[23]||(e[23]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:p.value},null,8,["output"])]),e[129]||(e[129]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Reading from Files - FileReader ",-1)),i("div",K,[i("p",$,[r(n,null,{default:l(()=>[...e[24]||(e[24]=[t("FileReader",-1)])]),_:1}),e[26]||(e[26]=t(" reads character data from files. For better performance, wrap it in a ",-1)),r(n,null,{default:l(()=>[...e[25]||(e[25]=[t("BufferedReader",-1)])]),_:1}),e[27]||(e[27]=t(" for line-by-line reading. ",-1))]),r(o,{code:y.value,language:"java"},null,8,["code"]),e[28]||(e[28]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:g.value},null,8,["output"])]),e[130]||(e[130]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Buffered Streams ",-1)),i("div",q,[i("p",G,[r(n,null,{default:l(()=>[...e[29]||(e[29]=[t("BufferedReader",-1)])]),_:1}),e[32]||(e[32]=t(" and ",-1)),r(n,null,{default:l(()=>[...e[30]||(e[30]=[t("BufferedWriter",-1)])]),_:1}),e[33]||(e[33]=t(" improve performance by reducing the number of I/O operations through ",-1)),r(n,null,{default:l(()=>[...e[31]||(e[31]=[t("buffering",-1)])]),_:1}),e[34]||(e[34]=t(" . ",-1))]),r(o,{code:F.value,language:"java"},null,8,["code"]),e[35]||(e[35]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:w.value},null,8,["output"])]),e[131]||(e[131]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Reading and Writing Binary Files ",-1)),i("div",Q,[i("p",X,[e[40]||(e[40]=t(" Use ",-1)),r(n,null,{default:l(()=>[...e[36]||(e[36]=[t("FileInputStream",-1)])]),_:1}),e[41]||(e[41]=t(" and ",-1)),r(n,null,{default:l(()=>[...e[37]||(e[37]=[t("FileOutputStream",-1)])]),_:1}),e[42]||(e[42]=t(" for binary data. ",-1)),r(n,null,{default:l(()=>[...e[38]||(e[38]=[t("DataInputStream",-1)])]),_:1}),e[43]||(e[43]=t(" and ",-1)),r(n,null,{default:l(()=>[...e[39]||(e[39]=[t("DataOutputStream",-1)])]),_:1}),e[44]||(e[44]=t(" provide methods for reading/writing primitive types. ",-1))]),r(o,{code:x.value,language:"java"},null,8,["code"]),e[45]||(e[45]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:S.value},null,8,["output"])]),e[132]||(e[132]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Copying Files ",-1)),i("div",Y,[i("p",Z,[e[48]||(e[48]=t(" Copy files using ",-1)),r(n,null,{default:l(()=>[...e[46]||(e[46]=[t("FileInputStream/FileOutputStream",-1)])]),_:1}),e[49]||(e[49]=t(" for binary data or ",-1)),r(n,null,{default:l(()=>[...e[47]||(e[47]=[t("BufferedReader/BufferedWriter",-1)])]),_:1}),e[50]||(e[50]=t(" for text data. ",-1))]),r(o,{code:b.value,language:"java"},null,8,["code"]),e[51]||(e[51]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:v.value},null,8,["output"])]),e[133]||(e[133]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," File Operations - Delete, Rename ",-1)),i("div",h,[i("p",_,[e[54]||(e[54]=t(" File operations like ",-1)),r(n,null,{default:l(()=>[...e[52]||(e[52]=[t("delete()",-1)])]),_:1}),e[55]||(e[55]=t(" and ",-1)),r(n,null,{default:l(()=>[...e[53]||(e[53]=[t("renameTo()",-1)])]),_:1}),e[56]||(e[56]=t(" allow you to manage files in the file system. ",-1))]),r(o,{code:R.value,language:"java"},null,8,["code"]),e[57]||(e[57]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:W.value},null,8,["output"])]),e[134]||(e[134]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Working with Directories ",-1)),i("div",ee,[i("p",te,[r(n,null,{default:l(()=>[...e[58]||(e[58]=[t("mkdir()",-1)])]),_:1}),e[61]||(e[61]=t(" creates a single directory, while ",-1)),r(n,null,{default:l(()=>[...e[59]||(e[59]=[t("mkdirs()",-1)])]),_:1}),e[62]||(e[62]=t(" creates nested directories. Use ",-1)),r(n,null,{default:l(()=>[...e[60]||(e[60]=[t("listFiles()",-1)])]),_:1}),e[63]||(e[63]=t(" to traverse directory contents. ",-1))]),r(o,{code:O.value,language:"java"},null,8,["code"]),e[64]||(e[64]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:B.value},null,8,["output"])]),e[135]||(e[135]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," File Filtering ",-1)),i("div",ie,[i("p",re,[r(n,null,{default:l(()=>[...e[65]||(e[65]=[t("FilenameFilter",-1)])]),_:1}),e[67]||(e[67]=t(" and ",-1)),r(n,null,{default:l(()=>[...e[66]||(e[66]=[t("FileFilter",-1)])]),_:1}),e[68]||(e[68]=t(" allow you to filter files based on criteria like extension or name pattern. ",-1))]),r(o,{code:I.value,language:"java"},null,8,["code"]),e[69]||(e[69]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:L.value},null,8,["output"])]),e[136]||(e[136]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Try-With-Resources for Files ",-1)),i("div",le,[i("p",ne,[r(n,null,{default:l(()=>[...e[70]||(e[70]=[t("Try-with-resources",-1)])]),_:1}),e[72]||(e[72]=t(" automatically closes resources that implement ",-1)),r(n,null,{default:l(()=>[...e[71]||(e[71]=[t("AutoCloseable",-1)])]),_:1}),e[73]||(e[73]=t(" , eliminating the need for explicit finally blocks. ",-1))]),r(o,{code:E.value,language:"java"},null,8,["code"]),e[74]||(e[74]=i("p",{class:"mt-4"},"Output:",-1)),r(a,{output:M.value},null,8,["output"])]),e[137]||(e[137]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About File Handling ",-1)),i("div",se,[i("div",oe,[e[90]||(e[90]=i("p",{class:"text-blue-700 font-semibold"},"Best Practices:",-1)),i("ul",ae,[i("li",null,[e[76]||(e[76]=t("Always use ",-1)),r(n,null,{default:l(()=>[...e[75]||(e[75]=[t("try-with-resources",-1)])]),_:1}),e[77]||(e[77]=t(" for automatic cleanup ",-1))]),i("li",null,[e[79]||(e[79]=t("Use ",-1)),r(n,null,{default:l(()=>[...e[78]||(e[78]=[t("Buffered streams",-1)])]),_:1}),e[80]||(e[80]=t(" for better performance ",-1))]),i("li",null,[e[82]||(e[82]=t("Check if a file ",-1)),r(n,null,{default:l(()=>[...e[81]||(e[81]=[t("exists()",-1)])]),_:1}),e[83]||(e[83]=t(" before reading ",-1))]),i("li",null,[e[85]||(e[85]=t("Handle ",-1)),r(n,null,{default:l(()=>[...e[84]||(e[84]=[t("IOException",-1)])]),_:1}),e[86]||(e[86]=t(" properly ",-1))]),i("li",null,[e[88]||(e[88]=t("Use ",-1)),r(n,null,{default:l(()=>[...e[87]||(e[87]=[t("separator",-1)])]),_:1}),e[89]||(e[89]=t(" for platform-independent paths ",-1))])])]),i("ul",ue,[i("li",null,[e[92]||(e[92]=t("File paths can be absolute or ",-1)),r(n,null,{default:l(()=>[...e[91]||(e[91]=[t("relative",-1)])]),_:1})]),i("li",null,[e[94]||(e[94]=t("Use ",-1)),r(n,null,{default:l(()=>[...e[93]||(e[93]=[t("FileReader/FileWriter",-1)])]),_:1}),e[95]||(e[95]=t(" for text files ",-1))]),i("li",null,[e[97]||(e[97]=t("Use ",-1)),r(n,null,{default:l(()=>[...e[96]||(e[96]=[t("FileInputStream/FileOutputStream",-1)])]),_:1}),e[98]||(e[98]=t(" for binary files ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[99]||(e[99]=[t("BufferedReader",-1)])]),_:1}),e[101]||(e[101]=t(" provides ",-1)),r(n,null,{default:l(()=>[...e[100]||(e[100]=[t("readLine()",-1)])]),_:1})]),i("li",null,[r(n,null,{default:l(()=>[...e[102]||(e[102]=[t("PrintWriter",-1)])]),_:1}),e[103]||(e[103]=t(" provides convenient printing methods ",-1))]),i("li",null,[e[105]||(e[105]=t("Always ",-1)),r(n,null,{default:l(()=>[...e[104]||(e[104]=[t("close",-1)])]),_:1}),e[106]||(e[106]=t(" resources to prevent memory leaks ",-1))])])]),e[138]||(e[138]=i("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),i("div",de,[i("ul",fe,[i("li",null,[r(n,null,{default:l(()=>[...e[107]||(e[107]=[t("File",-1)])]),_:1}),e[108]||(e[108]=t(" class represents file/directory paths ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[109]||(e[109]=[t("FileReader/FileWriter",-1)])]),_:1}),e[110]||(e[110]=t(" for text I/O ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[111]||(e[111]=[t("FileInputStream/FileOutputStream",-1)])]),_:1}),e[112]||(e[112]=t(" for binary I/O ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[113]||(e[113]=[t("Buffered streams",-1)])]),_:1}),e[114]||(e[114]=t(" improve performance ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[115]||(e[115]=[t("Try-with-resources",-1)])]),_:1}),e[116]||(e[116]=t(" handles resource cleanup ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[117]||(e[117]=[t("mkdir()",-1)])]),_:1}),e[119]||(e[119]=t(" and ",-1)),r(n,null,{default:l(()=>[...e[118]||(e[118]=[t("mkdirs()",-1)])]),_:1}),e[120]||(e[120]=t(" create directories ",-1))]),i("li",null,[r(n,null,{default:l(()=>[...e[121]||(e[121]=[t("FilenameFilter",-1)])]),_:1}),e[122]||(e[122]=t(" filters files by criteria ",-1))]),i("li",null,[e[124]||(e[124]=t("File handling is ",-1)),r(n,null,{default:l(()=>[...e[123]||(e[123]=[t("essential",-1)])]),_:1}),e[125]||(e[125]=t(" for real-world applications ",-1))])])])]),_:1},8,["navigation"]))}});export{ve as default};

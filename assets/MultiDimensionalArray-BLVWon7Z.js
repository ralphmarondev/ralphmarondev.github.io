import{_ as T}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-C7cGKCkw.js";import{S as n}from"./SpanHighlight-C0NIfFE-.js";import{C as a}from"./CodeBlock-CjPs9I9U.js";import{O as e}from"./OutputBlock-BzLqeAqJ.js";import{u as J}from"./javaProgramming-3VCcq7Z_.js";import{d as z,r as s,p as U,l as o,m as B,o as F,a as l,t as L,k as r,b as i}from"./index-IauxWRt0.js";const q={class:"text-gray-600 mb-6 text-lg"},I={class:"mb-4"},N={class:"list-disc list-inside mb-4"},P={class:"text-gray-500 mb-6 text-lg"},V={class:"text-gray-500 mb-6 text-lg"},H={class:"mb-4"},K={class:"text-gray-500 mb-6 text-lg"},$={class:"text-gray-500 mb-6 text-lg"},G={class:"mb-4"},Q={class:"text-gray-500 mb-6 text-lg"},W={class:"mb-4"},X={class:"text-gray-500 mb-6 text-lg"},Y={class:"text-gray-500 mb-6 text-lg"},Z={class:"mb-4"},h={class:"text-gray-500 mb-6 text-lg"},c={class:"mb-4"},_={class:"text-gray-500 mb-6 text-lg"},tt={class:"mb-4"},lt={class:"text-gray-500 mb-6 text-lg"},it={class:"text-gray-500 mb-6 text-lg"},rt={class:"bg-blue-50 border-l-4 border-blue-500 p-4 mb-4"},ot={class:"list-disc list-inside text-gray-600"},nt={class:"list-disc list-inside"},st={class:"text-gray-500 mb-6 text-lg"},at={class:"list-disc list-inside"},et="July 29, 2026",ft=z({__name:"MultiDimensionalArray",setup(ut){const u=J(),m=s(`
public class Main {
    public static void main(String[] args) {
        // Method 1: Declaration and initialization separately
        int[][] matrix1;
        matrix1 = new int[3][4];

        // Method 2: Declaration and initialization together
        int[][] matrix2 = new int[2][3];

        // Method 3: Declaration with values
        int[][] matrix3 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Method 4: Using 'new' with values
        int[][] matrix4 = new int[][]{
            {10, 20},
            {30, 40},
            {50, 60}
        };

        System.out.println("Matrix3:");
        for(int row = 0; row < matrix3.length; row++) {
            for(int col = 0; col < matrix3[row].length; col++) {
                System.out.print(matrix3[row][col] + " ");
            }
            System.out.println();
        }
    }
}
`),d=s(`
Matrix3:
1 2 3
4 5 6
7 8 9
`),p=s(`
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Access elements
        System.out.println("matrix[0][0] = " + matrix[0][0]);
        System.out.println("matrix[1][2] = " + matrix[1][2]);
        System.out.println("matrix[2][1] = " + matrix[2][1]);

        // Modify elements
        matrix[0][1] = 99;
        matrix[2][0] = 77;

        System.out.println("After modification:");
        for(int row = 0; row < matrix.length; row++) {
            for(int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}
`),g=s(`
matrix[0][0] = 1
matrix[1][2] = 6
matrix[2][1] = 8
After modification:
1 99 3
4 5 6
77 8 9
`),x=s(`
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("Using for-each loop:");
        for(int[] row : matrix) {
            for(int value : row) {
                System.out.print(value + " ");
            }
            System.out.println();
        }
    }
}
`),y=s(`
Using for-each loop:
1 2 3
4 5 6
7 8 9
`),w=s(`
public class Main {
    public static void main(String[] args) {
        // Creating jagged array
        int[][] jagged = new int[3][];
        jagged[0] = new int[]{1, 2, 3, 4};
        jagged[1] = new int[]{5, 6};
        jagged[2] = new int[]{7, 8, 9};

        System.out.println("Jagged Array:");
        for(int row = 0; row < jagged.length; row++) {
            for(int col = 0; col < jagged[row].length; col++) {
                System.out.print(jagged[row][col] + " ");
            }
            System.out.println();
        }

        // Print row lengths
        System.out.println("Row lengths:");
        for(int i = 0; i < jagged.length; i++) {
            System.out.println("Row " + i + " length: " + jagged[i].length);
        }
    }
}
`),f=s(`
Jagged Array:
1 2 3 4
5 6
7 8 9
Row lengths:
Row 0 length: 4
Row 1 length: 2
Row 2 length: 3
`),b=s(`
public class Main {
    public static void main(String[] args) {
        int[][] matrix1 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int[][] matrix2 = {
            {9, 8, 7},
            {6, 5, 4},
            {3, 2, 1}
        };

        int[][] result = new int[3][3];

        // Add matrices
        for(int row = 0; row < result.length; row++) {
            for(int col = 0; col < result[row].length; col++) {
                result[row][col] = matrix1[row][col] + matrix2[row][col];
            }
        }

        System.out.println("Matrix 1:");
        printMatrix(matrix1);

        System.out.println("Matrix 2:");
        printMatrix(matrix2);

        System.out.println("Result (Addition):");
        printMatrix(result);
    }

    public static void printMatrix(int[][] matrix) {
        for(int row = 0; row < matrix.length; row++) {
            for(int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}
`),v=s(`
Matrix 1:
1 2 3
4 5 6
7 8 9
Matrix 2:
9 8 7
6 5 4
3 2 1
Result (Addition):
10 10 10
10 10 10
10 10 10
`),S=s(`
public class Main {
    public static void main(String[] args) {
        int[][] matrix1 = {
            {1, 2, 3},
            {4, 5, 6}
        };

        int[][] matrix2 = {
            {7, 8},
            {9, 10},
            {11, 12}
        };

        // Result dimensions: matrix1.rows x matrix2.columns
        int[][] result = new int[matrix1.length][matrix2[0].length];

        // Multiply matrices
        for(int row = 0; row < result.length; row++) {
            for(int col = 0; col < result[row].length; col++) {
                for(int k = 0; k < matrix1[row].length; k++) {
                    result[row][col] += matrix1[row][k] * matrix2[k][col];
                }
            }
        }

        System.out.println("Matrix 1 (2x3):");
        printMatrix(matrix1);

        System.out.println("Matrix 2 (3x2):");
        printMatrix(matrix2);

        System.out.println("Result (Multiplication 2x2):");
        printMatrix(result);
    }

    public static void printMatrix(int[][] matrix) {
        for(int row = 0; row < matrix.length; row++) {
            for(int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}
`),M=s(`
Matrix 1 (2x3):
1 2 3
4 5 6
Matrix 2 (3x2):
7 8
9 10
11 12
Result (Multiplication 2x2):
58 64
139 154
`),D=s(`
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int rows = matrix.length;
        int cols = matrix[0].length;
        int[][] transpose = new int[cols][rows];

        // Transpose matrix
        for(int row = 0; row < rows; row++) {
            for(int col = 0; col < cols; col++) {
                transpose[col][row] = matrix[row][col];
            }
        }

        System.out.println("Original Matrix:");
        printMatrix(matrix);

        System.out.println("Transposed Matrix:");
        printMatrix(transpose);
    }

    public static void printMatrix(int[][] matrix) {
        for(int row = 0; row < matrix.length; row++) {
            for(int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}
`),A=s(`
Original Matrix:
1 2 3
4 5 6
7 8 9
Transposed Matrix:
1 4 7
2 5 8
3 6 9
`),O=s(`
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("Matrix:");
        printMatrix(matrix);

        System.out.println("Main Diagonal:");
        for(int i = 0; i < matrix.length; i++) {
            System.out.print(matrix[i][i] + " ");
        }
        System.out.println();

        System.out.println("Secondary Diagonal:");
        for(int i = 0; i < matrix.length; i++) {
            System.out.print(matrix[i][matrix.length - 1 - i] + " ");
        }
        System.out.println();
    }

    public static void printMatrix(int[][] matrix) {
        for(int row = 0; row < matrix.length; row++) {
            for(int col = 0; col < matrix[row].length; col++) {
                System.out.print(matrix[row][col] + " ");
            }
            System.out.println();
        }
    }
}
`),j=s(`
Matrix:
1 2 3
4 5 6
7 8 9
Main Diagonal:
1 5 9
Secondary Diagonal:
3 5 7
`),C=s(`
public class Main {
    public static void main(String[] args) {
        // 3D array: 2 layers, 3 rows, 4 columns
        int[][][] threeD = new int[2][3][4];

        // Initialize with values
        int value = 1;
        for(int layer = 0; layer < threeD.length; layer++) {
            for(int row = 0; row < threeD[layer].length; row++) {
                for(int col = 0; col < threeD[layer][row].length; col++) {
                    threeD[layer][row][col] = value++;
                }
            }
        }

        System.out.println("3D Array:");
        for(int layer = 0; layer < threeD.length; layer++) {
            System.out.println("Layer " + layer + ":");
            for(int row = 0; row < threeD[layer].length; row++) {
                for(int col = 0; col < threeD[layer][row].length; col++) {
                    System.out.print(threeD[layer][row][col] + " ");
                }
                System.out.println();
            }
            System.out.println();
        }
    }
}
`),R=s(`
3D Array:
Layer 0:
1 2 3 4
5 6 7 8
9 10 11 12

Layer 1:
13 14 15 16
17 18 19 20
21 22 23 24
`),E=s(`
public class Main {
    public static void main(String[] args) {
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        // Calculate sum of all elements
        int totalSum = 0;
        for(int row = 0; row < matrix.length; row++) {
            for(int col = 0; col < matrix[row].length; col++) {
                totalSum += matrix[row][col];
            }
        }
        System.out.println("Sum of all elements: " + totalSum);

        // Calculate sum of each row
        for(int row = 0; row < matrix.length; row++) {
            int rowSum = 0;
            for(int col = 0; col < matrix[row].length; col++) {
                rowSum += matrix[row][col];
            }
            System.out.println("Row " + row + " sum: " + rowSum);
        }

        // Calculate sum of each column
        System.out.println("Column sums:");
        for(int col = 0; col < matrix[0].length; col++) {
            int colSum = 0;
            for(int row = 0; row < matrix.length; row++) {
                colSum += matrix[row][col];
            }
            System.out.println("Column " + col + " sum: " + colSum);
        }
    }
}
`),k=s(`
Sum of all elements: 45
Row 0 sum: 6
Row 1 sum: 15
Row 2 sum: 24
Column sums:
Column 0 sum: 12
Column 1 sum: 15
Column 2 sum: 18
`);return(mt,t)=>(F(),U(T,{title:"Java Programming",navigation:B(u).sections},{default:o(()=>[t[95]||(t[95]=l("h2",{class:"text-3xl font-bold text-gray-800 mb-2"}," Multi-dimensional Arrays ",-1)),l("p",{class:"text-sm text-gray-500 mb-4"}," Last Updated : "+L(et)),l("div",q,[l("p",I,[r(n,null,{default:o(()=>[...t[0]||(t[0]=[i("Multi-dimensional arrays",-1)])]),_:1}),t[1]||(t[1]=i(" are arrays of arrays. The most common type is the two-dimensional (2D) array, which can be visualized as a table with rows and columns. ",-1))]),t[15]||(t[15]=l("p",{class:"mb-4"}," Key concepts: ",-1)),l("ul",N,[l("li",null,[t[3]||(t[3]=i("A 2D array is an array of ",-1)),r(n,null,{default:o(()=>[...t[2]||(t[2]=[i("arrays",-1)])]),_:1})]),t[14]||(t[14]=l("li",null,"Each row is itself an array",-1)),l("li",null,[t[5]||(t[5]=i("Rows can have ",-1)),r(n,null,{default:o(()=>[...t[4]||(t[4]=[i("different lengths",-1)])]),_:1}),t[6]||(t[6]=i(" (jagged arrays) ",-1))]),l("li",null,[t[9]||(t[9]=i("Access elements using ",-1)),r(n,null,{default:o(()=>[...t[7]||(t[7]=[i("two indices",-1)])]),_:1}),t[10]||(t[10]=i(" : ",-1)),r(n,null,{default:o(()=>[...t[8]||(t[8]=[i("array[row][col]",-1)])]),_:1})]),l("li",null,[t[12]||(t[12]=i("Multi-dimensional arrays can have ",-1)),r(n,null,{default:o(()=>[...t[11]||(t[11]=[i("3 or more",-1)])]),_:1}),t[13]||(t[13]=i(" dimensions ",-1))])])]),t[96]||(t[96]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Declaring 2D Arrays ",-1)),l("div",P,[t[16]||(t[16]=l("p",{class:"mb-4"}," There are multiple ways to declare and initialize 2D arrays in Java: ",-1)),r(a,{code:m.value,language:"java"},null,8,["code"]),t[17]||(t[17]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:d.value},null,8,["output"])]),t[97]||(t[97]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Accessing 2D Array Elements ",-1)),l("div",V,[l("p",H,[t[20]||(t[20]=i(" Elements are accessed using ",-1)),r(n,null,{default:o(()=>[...t[18]||(t[18]=[i("row index",-1)])]),_:1}),t[21]||(t[21]=i(" and ",-1)),r(n,null,{default:o(()=>[...t[19]||(t[19]=[i("column index",-1)])]),_:1}),t[22]||(t[22]=i(" . ",-1))]),r(a,{code:p.value,language:"java"},null,8,["code"]),t[23]||(t[23]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:g.value},null,8,["output"])]),t[98]||(t[98]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," For-Each Loop with 2D Arrays ",-1)),l("div",K,[t[24]||(t[24]=l("p",{class:"mb-4"}," The for-each loop can be used to iterate through 2D arrays by iterating over rows first. ",-1)),r(a,{code:x.value,language:"java"},null,8,["code"]),t[25]||(t[25]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:y.value},null,8,["output"])]),t[99]||(t[99]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Jagged Arrays ",-1)),l("div",$,[l("p",G,[t[27]||(t[27]=i(" A ",-1)),r(n,null,{default:o(()=>[...t[26]||(t[26]=[i("jagged array",-1)])]),_:1}),t[28]||(t[28]=i(" is a 2D array where each row can have a different number of columns. ",-1))]),r(a,{code:w.value,language:"java"},null,8,["code"]),t[29]||(t[29]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:f.value},null,8,["output"])]),t[100]||(t[100]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Matrix Addition ",-1)),l("div",Q,[l("p",W,[t[31]||(t[31]=i(" Adding two matrices requires them to have the ",-1)),r(n,null,{default:o(()=>[...t[30]||(t[30]=[i("same dimensions",-1)])]),_:1}),t[32]||(t[32]=i(" . ",-1))]),r(a,{code:b.value,language:"java"},null,8,["code"]),t[33]||(t[33]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:v.value},null,8,["output"])]),t[101]||(t[101]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Matrix Multiplication ",-1)),l("div",X,[t[34]||(t[34]=l("p",{class:"mb-4"}," For matrix multiplication, the number of columns in the first matrix must equal the number of rows in the second matrix. ",-1)),r(a,{code:S.value,language:"java"},null,8,["code"]),t[35]||(t[35]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:M.value},null,8,["output"])]),t[102]||(t[102]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Matrix Transpose ",-1)),l("div",Y,[l("p",Z,[t[37]||(t[37]=i(" The ",-1)),r(n,null,{default:o(()=>[...t[36]||(t[36]=[i("transpose",-1)])]),_:1}),t[38]||(t[38]=i(" of a matrix swaps rows with columns. ",-1))]),r(a,{code:D.value,language:"java"},null,8,["code"]),t[39]||(t[39]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:A.value},null,8,["output"])]),t[103]||(t[103]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Diagonal Elements ",-1)),l("div",h,[l("p",c,[t[42]||(t[42]=i(" In a square matrix, the ",-1)),r(n,null,{default:o(()=>[...t[40]||(t[40]=[i("main diagonal",-1)])]),_:1}),t[43]||(t[43]=i(" consists of elements where row == col, and the ",-1)),r(n,null,{default:o(()=>[...t[41]||(t[41]=[i("secondary diagonal",-1)])]),_:1}),t[44]||(t[44]=i(" consists of elements where row + col == length - 1. ",-1))]),r(a,{code:O.value,language:"java"},null,8,["code"]),t[45]||(t[45]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:j.value},null,8,["output"])]),t[104]||(t[104]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," 3D Arrays ",-1)),l("div",_,[l("p",tt,[t[47]||(t[47]=i(" Java supports arrays with ",-1)),r(n,null,{default:o(()=>[...t[46]||(t[46]=[i("3 or more dimensions",-1)])]),_:1}),t[48]||(t[48]=i(" . A 3D array can be visualized as multiple layers of 2D arrays. ",-1))]),r(a,{code:C.value,language:"java"},null,8,["code"]),t[49]||(t[49]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:R.value},null,8,["output"])]),t[105]||(t[105]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Sum of Elements in 2D Array ",-1)),l("div",lt,[t[50]||(t[50]=l("p",{class:"mb-4"}," Common operations include calculating the sum of all elements, row sums, and column sums. ",-1)),r(a,{code:E.value,language:"java"},null,8,["code"]),t[51]||(t[51]=l("p",{class:"mt-4"},"Output:",-1)),r(e,{output:k.value},null,8,["output"])]),t[106]||(t[106]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Important Notes About Multi-dimensional Arrays ",-1)),l("div",it,[l("div",rt,[t[65]||(t[65]=l("p",{class:"text-blue-700 font-semibold"},"Remember:",-1)),l("ul",ot,[l("li",null,[t[53]||(t[53]=i("Multi-dimensional arrays are stored as ",-1)),r(n,null,{default:o(()=>[...t[52]||(t[52]=[i("arrays of arrays",-1)])]),_:1})]),l("li",null,[t[55]||(t[55]=i("Use ",-1)),r(n,null,{default:o(()=>[...t[54]||(t[54]=[i("matrix[row].length",-1)])]),_:1}),t[56]||(t[56]=i(" to get the number of columns in a row ",-1))]),l("li",null,[t[58]||(t[58]=i("For square matrices, ",-1)),r(n,null,{default:o(()=>[...t[57]||(t[57]=[i("rows == columns",-1)])]),_:1})]),l("li",null,[t[60]||(t[60]=i("Jagged arrays have ",-1)),r(n,null,{default:o(()=>[...t[59]||(t[59]=[i("different column sizes",-1)])]),_:1}),t[61]||(t[61]=i(" per row ",-1))]),l("li",null,[t[63]||(t[63]=i("Always check bounds to avoid ",-1)),r(n,null,{default:o(()=>[...t[62]||(t[62]=[i("ArrayIndexOutOfBoundsException",-1)])]),_:1})]),t[64]||(t[64]=l("li",null,"Common algorithms include addition, multiplication, and transpose",-1))])]),l("ul",nt,[l("li",null,[t[67]||(t[67]=i("3D arrays are useful for representing ",-1)),r(n,null,{default:o(()=>[...t[66]||(t[66]=[i("layered data",-1)])]),_:1})]),l("li",null,[t[69]||(t[69]=i("Performance consideration: nested loops in multi-dimensional arrays can be ",-1)),r(n,null,{default:o(()=>[...t[68]||(t[68]=[i("expensive",-1)])]),_:1})]),l("li",null,[t[71]||(t[71]=i("For large matrices, consider using ",-1)),r(n,null,{default:o(()=>[...t[70]||(t[70]=[i("linear arrays",-1)])]),_:1}),t[72]||(t[72]=i(" or specialized libraries ",-1))])])]),t[107]||(t[107]=l("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"}," Summary ",-1)),l("div",st,[l("ul",at,[l("li",null,[t[74]||(t[74]=i("Multi-dimensional arrays are ",-1)),r(n,null,{default:o(()=>[...t[73]||(t[73]=[i("arrays of arrays",-1)])]),_:1})]),l("li",null,[t[76]||(t[76]=i("2D arrays represent ",-1)),r(n,null,{default:o(()=>[...t[75]||(t[75]=[i("tables",-1)])]),_:1}),t[77]||(t[77]=i(" with rows and columns ",-1))]),l("li",null,[t[79]||(t[79]=i("Elements are accessed using ",-1)),r(n,null,{default:o(()=>[...t[78]||(t[78]=[i("two indices",-1)])]),_:1})]),l("li",null,[r(n,null,{default:o(()=>[...t[80]||(t[80]=[i("Jagged arrays",-1)])]),_:1}),t[81]||(t[81]=i(" have rows of different lengths ",-1))]),l("li",null,[t[85]||(t[85]=i("Common matrix operations: ",-1)),r(n,null,{default:o(()=>[...t[82]||(t[82]=[i("addition",-1)])]),_:1}),t[86]||(t[86]=i(" , ",-1)),r(n,null,{default:o(()=>[...t[83]||(t[83]=[i("multiplication",-1)])]),_:1}),t[87]||(t[87]=i(" , ",-1)),r(n,null,{default:o(()=>[...t[84]||(t[84]=[i("transpose",-1)])]),_:1})]),l("li",null,[t[89]||(t[89]=i("Diagonal elements have ",-1)),r(n,null,{default:o(()=>[...t[88]||(t[88]=[i("special relationships",-1)])]),_:1})]),l("li",null,[t[91]||(t[91]=i("Support for ",-1)),r(n,null,{default:o(()=>[...t[90]||(t[90]=[i("3D and higher",-1)])]),_:1}),t[92]||(t[92]=i(" dimensional arrays ",-1))]),l("li",null,[t[94]||(t[94]=i("Use nested loops for ",-1)),r(n,null,{default:o(()=>[...t[93]||(t[93]=[i("iteration",-1)])]),_:1})])])])]),_:1},8,["navigation"]))}});export{ft as default};

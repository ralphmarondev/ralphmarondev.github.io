import{_ as d}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as s,a as r,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as e,C as i}from"./CodeBlock-CSdrTDFH.js";import{O as a}from"./OutputBlock-BPpR2jjy.js";import{d as w,h as p,i as u,o as g,a as o,q as t,g as n}from"./index-D3WOnH5O.js";const y={class:"max-w-4xl mx-auto"},b=`
int[][] numbers = {
    {10, 20, 30},
    {40, 50, 60}
};`,x=`
int[][] numbers = {
    {10, 20, 30},
    {40, 50, 60}
};

System.out.println(numbers[0][0]);
System.out.println(numbers[0][2]);
System.out.println(numbers[1][1]);`,v=`10
30
50`,T=`
int[][] numbers = {
    {10, 20},
    {30, 40}
};

numbers[1][0] = 35;

System.out.println(numbers[1][0]);`,A="35",O=`
int[][] numbers = {
    {10, 20, 30},
    {40, 50, 60}
};

for (int row = 0; row < numbers.length; row++) {
    for (int column = 0; column < numbers[row].length; column++) {
        System.out.print(numbers[row][column] + " ");
    }
}`,S=`
10 20 30
40 50 60`,F=`
int[][] scores = {
    {85, 90, 88},
    {92, 87, 95}
};

for (int row = 0; row < scores.length; row++) {
    for (int column = 0; column < scores[row].length; column++) {
        System.out.print(scores[row][column] + " ");
    }
}`,j=`
85 90 88
92 87 95`,E=`
int[][] numbers = new int[2][3];

numbers[0][0] = 10;
numbers[0][1] = 20;
numbers[0][2] = 30;

numbers[1][0] = 40;
numbers[1][1] = 50;
numbers[1][2] = 60;`,k=`
int[][] numbers = new int[2][3];

System.out.println(numbers[0][0]);
System.out.println(numbers[1][2]);`,C=`
0
0`,R=w({__name:"MultidimensionalArrays",setup(M){return(D,l)=>(g(),p(m,null,{default:u(()=>[o("div",y,[l[108]||(l[108]=o("div",{class:"w-full flex justify-center mb-6"},[o("img",{src:d,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[109]||(l[109]=o("div",{class:"text-center mb-4"},[o("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 4 "),o("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Multidimensional Arrays ")],-1)),t(s,null,{default:u(()=>[...l[0]||(l[0]=[n(" A one-dimensional array stores elements in a single sequence. However, some data is naturally organized into rows and columns. ",-1)])]),_:1}),t(s,null,{default:u(()=>[l[2]||(l[2]=n(" Java supports ",-1)),t(e,null,{default:u(()=>[...l[1]||(l[1]=[n("multidimensional arrays",-1)])]),_:1}),l[3]||(l[3]=n(" , which allow arrays to contain other arrays. The most common example is a two-dimensional array. ",-1))]),_:1}),t(r,null,{default:u(()=>[...l[4]||(l[4]=[n("What is a Two-Dimensional Array?",-1)])]),_:1}),t(s,null,{default:u(()=>[l[6]||(l[6]=n(" A ",-1)),t(e,null,{default:u(()=>[...l[5]||(l[5]=[n("two-dimensional array",-1)])]),_:1}),l[7]||(l[7]=n(" can be thought of as a table containing rows and columns. Each element is identified using two indexes. ",-1))]),_:1}),t(s,null,{default:u(()=>[l[8]||(l[8]=n(" For example: ",-1)),t(i,{code:b,language:"java"})]),_:1}),t(s,null,{default:u(()=>[...l[9]||(l[9]=[n(" This array contains two rows and three columns. ",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[10]||(l[10]=[n(" It can be visualized as: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null,"Row 0 → 10, 20, 30"),o("li",null,"Row 1 → 40, 50, 60")],-1)])]),_:1}),t(r,null,{default:u(()=>[...l[11]||(l[11]=[n("Declaring a Two-Dimensional Array",-1)])]),_:1}),t(s,null,{default:u(()=>[l[13]||(l[13]=n(" A two-dimensional integer array can be declared using two pairs of square brackets: ",-1)),t(e,null,{default:u(()=>[...l[12]||(l[12]=[n("int[][] numbers",-1)])]),_:1}),l[14]||(l[14]=n(" . ",-1))]),_:1}),t(s,null,{default:u(()=>[...l[15]||(l[15]=[n(" Each pair of brackets represents a dimension. The first index identifies the row, while the second identifies the column. ",-1)])]),_:1}),t(r,null,{default:u(()=>[...l[16]||(l[16]=[n("Accessing Elements",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[17]||(l[17]=[n(" To access an element in a two-dimensional array, provide the row index followed by the column index. ",-1)])]),_:1}),t(s,null,{default:u(()=>[l[18]||(l[18]=n(" For example: ",-1)),t(i,{code:x,language:"java"})]),_:1}),t(s,null,{default:u(()=>[l[19]||(l[19]=n(" Output: ",-1)),t(a,{output:v})]),_:1}),t(s,null,{default:u(()=>[l[22]||(l[22]=n(" The expression ",-1)),t(e,null,{default:u(()=>[...l[20]||(l[20]=[n("numbers[0][0]",-1)])]),_:1}),l[23]||(l[23]=n(" accesses the first row and first column. The expression ",-1)),t(e,null,{default:u(()=>[...l[21]||(l[21]=[n("numbers[1][1]",-1)])]),_:1}),l[24]||(l[24]=n(" accesses the second row and second column. ",-1))]),_:1}),t(r,null,{default:u(()=>[...l[25]||(l[25]=[n("Changing Elements",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[26]||(l[26]=[n(" Elements can be changed by assigning a new value to a specific row and column. ",-1)])]),_:1}),t(s,null,{default:u(()=>[l[27]||(l[27]=n(" For example: ",-1)),t(i,{code:T,language:"java"})]),_:1}),t(s,null,{default:u(()=>[l[28]||(l[28]=n(" Output: ",-1)),t(a,{output:A})]),_:1}),t(s,null,{default:u(()=>[l[33]||(l[33]=n(" The value at row ",-1)),t(e,null,{default:u(()=>[...l[29]||(l[29]=[n("1",-1)])]),_:1}),l[34]||(l[34]=n(" and column ",-1)),t(e,null,{default:u(()=>[...l[30]||(l[30]=[n("0",-1)])]),_:1}),l[35]||(l[35]=n(" changes from ",-1)),t(e,null,{default:u(()=>[...l[31]||(l[31]=[n("30",-1)])]),_:1}),l[36]||(l[36]=n(" to ",-1)),t(e,null,{default:u(()=>[...l[32]||(l[32]=[n("35",-1)])]),_:1}),l[37]||(l[37]=n(" . ",-1))]),_:1}),t(r,null,{default:u(()=>[...l[38]||(l[38]=[n("Creating a Two-Dimensional Array with a Size",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[39]||(l[39]=[n(" A two-dimensional array can also be created by specifying the number of rows and columns. ",-1)])]),_:1}),t(s,null,{default:u(()=>[l[40]||(l[40]=n(" For example: ",-1)),t(i,{code:E,language:"java"})]),_:1}),t(s,null,{default:u(()=>[l[42]||(l[42]=n(" The expression ",-1)),t(e,null,{default:u(()=>[...l[41]||(l[41]=[n("new int[2][3]",-1)])]),_:1}),l[43]||(l[43]=n(" creates an array with two rows and three columns. ",-1))]),_:1}),t(s,null,{default:u(()=>[...l[44]||(l[44]=[n(" Like one-dimensional arrays, the elements receive default values when no values are provided. ",-1)])]),_:1}),t(s,null,{default:u(()=>[l[47]||(l[47]=n(" For an ",-1)),t(e,null,{default:u(()=>[...l[45]||(l[45]=[n("int",-1)])]),_:1}),l[48]||(l[48]=n(" array, the default value is ",-1)),t(e,null,{default:u(()=>[...l[46]||(l[46]=[n("0",-1)])]),_:1}),l[49]||(l[49]=n(" . For example: ",-1)),t(i,{code:k,language:"java"})]),_:1}),t(s,null,{default:u(()=>[l[50]||(l[50]=n(" Output: ",-1)),t(a,{output:C})]),_:1}),t(r,null,{default:u(()=>[...l[51]||(l[51]=[n("Traversing a Two-Dimensional Array",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[52]||(l[52]=[n(" Because a two-dimensional array has rows and columns, nested loops are commonly used to visit every element. ",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[53]||(l[53]=[n(" The outer loop processes the rows, while the inner loop processes the columns within each row. ",-1)])]),_:1}),t(s,null,{default:u(()=>[l[54]||(l[54]=n(" For example: ",-1)),t(i,{code:O,language:"java"})]),_:1}),t(s,null,{default:u(()=>[l[55]||(l[55]=n(" Output: ",-1)),t(a,{output:S})]),_:1}),t(s,null,{default:u(()=>[l[57]||(l[57]=n(" The outer ",-1)),t(e,null,{default:u(()=>[...l[56]||(l[56]=[n("for",-1)])]),_:1}),l[58]||(l[58]=n(" loop moves through each row. For every row, the inner loop moves through each column. ",-1))]),_:1}),t(r,null,{default:u(()=>[...l[59]||(l[59]=[n("Using length with Multidimensional Arrays",-1)])]),_:1}),t(s,null,{default:u(()=>[l[62]||(l[62]=n(" The ",-1)),t(e,null,{default:u(()=>[...l[60]||(l[60]=[n("length",-1)])]),_:1}),l[63]||(l[63]=n(" property can be used to determine the number of rows. Each individual row also has its own ",-1)),t(e,null,{default:u(()=>[...l[61]||(l[61]=[n("length",-1)])]),_:1}),l[64]||(l[64]=n(" property for determining the number of columns. ",-1))]),_:1}),t(s,null,{default:u(()=>[l[67]||(l[67]=n(" This is why the traversal uses: ",-1)),t(e,null,{default:u(()=>[...l[65]||(l[65]=[n("numbers.length",-1)])]),_:1}),l[68]||(l[68]=n(" for the rows and ",-1)),t(e,null,{default:u(()=>[...l[66]||(l[66]=[n("numbers[row].length",-1)])]),_:1}),l[69]||(l[69]=n(" for the columns. ",-1))]),_:1}),t(r,null,{default:u(()=>[...l[70]||(l[70]=[n("Example: Student Scores",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[71]||(l[71]=[n(" A two-dimensional array can represent data arranged in rows and columns. For example, each row could represent a student and each column could represent a score. ",-1)])]),_:1}),t(s,null,{default:u(()=>[t(i,{code:F,language:"java"})]),_:1}),t(s,null,{default:u(()=>[l[72]||(l[72]=n(" Output: ",-1)),t(a,{output:j})]),_:1}),t(s,null,{default:u(()=>[...l[73]||(l[73]=[n(" Here, the first row contains the scores of one student and the second row contains the scores of another student. ",-1)])]),_:1}),t(r,null,{default:u(()=>[...l[74]||(l[74]=[n("Two-Dimensional vs One-Dimensional Arrays",-1)])]),_:1}),t(s,null,{default:u(()=>[l[76]||(l[76]=n(" A one-dimensional array uses one index: ",-1)),t(e,null,{default:u(()=>[...l[75]||(l[75]=[n("numbers[index]",-1)])]),_:1}),l[77]||(l[77]=n(" . ",-1))]),_:1}),t(s,null,{default:u(()=>[l[79]||(l[79]=n(" A two-dimensional array uses two indexes: ",-1)),t(e,null,{default:u(()=>[...l[78]||(l[78]=[n("numbers[row][column]",-1)])]),_:1}),l[80]||(l[80]=n(" . ",-1))]),_:1}),t(s,null,{default:u(()=>[...l[81]||(l[81]=[n(" The additional dimension makes two-dimensional arrays useful for representing tables, matrices, grids, and other structured data. ",-1)])]),_:1}),t(r,null,{default:u(()=>[...l[82]||(l[82]=[n("Jagged Arrays",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[83]||(l[83]=[n(" In Java, a multidimensional array is actually an array of arrays. This means different rows can have different lengths. ",-1)])]),_:1}),t(s,null,{default:u(()=>[l[85]||(l[85]=n(" Such an arrangement is sometimes called a ",-1)),t(e,null,{default:u(()=>[...l[84]||(l[84]=[n("jagged array",-1)])]),_:1}),l[86]||(l[86]=n(" . ",-1))]),_:1}),t(s,null,{default:u(()=>[...l[87]||(l[87]=[n(" This is possible because each row is a separate array. ",-1)])]),_:1}),t(r,null,{default:u(()=>[...l[88]||(l[88]=[n("Common Mistake",-1)])]),_:1}),t(s,null,{default:u(()=>[l[90]||(l[90]=n(" Remember that array indexes begin at ",-1)),t(e,null,{default:u(()=>[...l[89]||(l[89]=[n("0",-1)])]),_:1}),l[91]||(l[91]=n(" . For a two-dimensional array, both the row and column indexes must be within their valid ranges. ",-1))]),_:1}),t(s,null,{default:u(()=>[l[98]||(l[98]=n(" For example, an array created with ",-1)),t(e,null,{default:u(()=>[...l[92]||(l[92]=[n("new int[2][3]",-1)])]),_:1}),l[99]||(l[99]=n(" has valid row indexes ",-1)),t(e,null,{default:u(()=>[...l[93]||(l[93]=[n("0",-1)])]),_:1}),l[100]||(l[100]=n(" and ",-1)),t(e,null,{default:u(()=>[...l[94]||(l[94]=[n("1",-1)])]),_:1}),l[101]||(l[101]=n(" , and valid column indexes ",-1)),t(e,null,{default:u(()=>[...l[95]||(l[95]=[n("0",-1)])]),_:1}),l[102]||(l[102]=n(" , ",-1)),t(e,null,{default:u(()=>[...l[96]||(l[96]=[n("1",-1)])]),_:1}),l[103]||(l[103]=n(" , and ",-1)),t(e,null,{default:u(()=>[...l[97]||(l[97]=[n("2",-1)])]),_:1}),l[104]||(l[104]=n(" . ",-1))]),_:1}),t(r,null,{default:u(()=>[...l[105]||(l[105]=[n("Summary",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[106]||(l[106]=[n(" Multidimensional arrays allow Java programs to organize data using multiple dimensions. ",-1)])]),_:1}),t(s,null,{default:u(()=>[...l[107]||(l[107]=[n(" In this topic, you learned that: ",-1),o("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[o("li",null," A two-dimensional array organizes data into rows and columns. "),o("li",null," Two indexes are used to access an element. "),o("li",null," The first index represents the row. "),o("li",null," The second index represents the column. "),o("li",null," Nested loops can be used to traverse a two-dimensional array. "),o("li",null," Each row can have its own length. "),o("li",null," Java multidimensional arrays are arrays of arrays. ")],-1)])]),_:1}),l[110]||(l[110]=o("br",null,null,-1)),t(f,{to:"/academia/student/classes/java",text:"Finish"})])]),_:1}))}});export{R as default};

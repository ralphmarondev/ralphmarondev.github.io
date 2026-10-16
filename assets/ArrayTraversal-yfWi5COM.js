import{_ as d}from"./logo-C9ImmdpX.js";import{_ as m}from"./MainLayout.vue_vue_type_script_setup_true_lang-Or-oJNwO.js";import{T as e,a as o,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-B8GvNcob.js";import{T as r,C as i}from"./CodeBlock-CSdrTDFH.js";import{O as a}from"./OutputBlock-BPpR2jjy.js";import{d as p,h as y,i as u,o as v,a as s,q as n,g as t}from"./index-D3WOnH5O.js";const g={class:"max-w-4xl mx-auto"},x={class:"list-disc pl-8 mt-3 space-y-2"},b=`
int[] numbers = {10, 20, 30, 40, 50};

for (int i = 0; i < numbers.length; i++) {
    System.out.println(numbers[i]);
}`,w=`
10
20
30
40
50`,T=`
int[] numbers = {10, 20, 30};

for (int i = 0; i < numbers.length; i++) {
    System.out.println("Index " + i + ": " + numbers[i]);
}`,A=`
Index 0: 10
Index 1: 20
Index 2: 30`,S=`
int[] numbers = {10, 20, 30, 40};
int sum = 0;

for (int i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

System.out.println(sum);`,O="100",I=`
int[] numbers = {10, 20, 30, 40};

for (int i = 0; i < numbers.length; i++) {
    numbers[i] *= 2;
}

System.out.println(numbers[0]);
System.out.println(numbers[1]);
System.out.println(numbers[2]);
System.out.println(numbers[3]);`,j=`
20
40
60
80`,F=`
int[] numbers = {10, 20, 30, 40};

for (int number : numbers) {
    System.out.println(number);
}`,C=`
10
20
30
40`,k=`
String[] names = {"Ralph", "Fern", "Java"};

for (String name : names) {
    System.out.println(name);
}`,B=`
Ralph
Fern
Java`,W=p({__name:"ArrayTraversal",setup(E){return(J,l)=>(v(),y(m,null,{default:u(()=>[s("div",g,[l[108]||(l[108]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:d,alt:"Java Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[109]||(l[109]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Array Traversal ")],-1)),n(e,null,{default:u(()=>[...l[0]||(l[0]=[t(" An array can contain many elements, so accessing each element individually can become repetitive. Java allows us to use loops to process every element in an array. ",-1)])]),_:1}),n(e,null,{default:u(()=>[l[2]||(l[2]=t(" The process of visiting each element in an array is called ",-1)),n(r,null,{default:u(()=>[...l[1]||(l[1]=[t("array traversal",-1)])]),_:1}),l[3]||(l[3]=t(" . ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[4]||(l[4]=[t("Traversing an Array with a for Loop",-1)])]),_:1}),n(e,null,{default:u(()=>[l[6]||(l[6]=t(" A ",-1)),n(r,null,{default:u(()=>[...l[5]||(l[5]=[t("for",-1)])]),_:1}),l[7]||(l[7]=t(" loop is commonly used to traverse an array because the loop variable can represent each array index. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[8]||(l[8]=t(" For example: ",-1)),n(i,{code:b,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[9]||(l[9]=t(" Output: ",-1)),n(a,{output:w})]),_:1}),n(e,null,{default:u(()=>[l[12]||(l[12]=t(" The loop starts at index ",-1)),n(r,null,{default:u(()=>[...l[10]||(l[10]=[t("0",-1)])]),_:1}),l[13]||(l[13]=t(" and continues while the index is less than the array's ",-1)),n(r,null,{default:u(()=>[...l[11]||(l[11]=[t("length",-1)])]),_:1}),l[14]||(l[14]=t(" . ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[15]||(l[15]=[t("Using the Index During Traversal",-1)])]),_:1}),n(e,null,{default:u(()=>[...l[16]||(l[16]=[t(" Because the loop variable represents the current index, it can also be used to display both the index and its corresponding value. ",-1)])]),_:1}),n(e,null,{default:u(()=>[l[17]||(l[17]=t(" For example: ",-1)),n(i,{code:T,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[18]||(l[18]=t(" Output: ",-1)),n(a,{output:A})]),_:1}),n(e,null,{default:u(()=>[l[20]||(l[20]=t(" The expression ",-1)),n(r,null,{default:u(()=>[...l[19]||(l[19]=[t("numbers[i]",-1)])]),_:1}),l[21]||(l[21]=t(" accesses the element at the current index. ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[22]||(l[22]=[t("Why Use length?",-1)])]),_:1}),n(e,null,{default:u(()=>[l[24]||(l[24]=t(" Using ",-1)),n(r,null,{default:u(()=>[...l[23]||(l[23]=[t("numbers.length",-1)])]),_:1}),l[25]||(l[25]=t(" in the loop condition allows the loop to automatically adapt to the size of the array. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[30]||(l[30]=t(" For example, if the array contains five elements, the loop processes indexes ",-1)),n(r,null,{default:u(()=>[...l[26]||(l[26]=[t("0",-1)])]),_:1}),l[31]||(l[31]=t(" through ",-1)),n(r,null,{default:u(()=>[...l[27]||(l[27]=[t("4",-1)])]),_:1}),l[32]||(l[32]=t(" . If the array contains ten elements, the same loop can process indexes ",-1)),n(r,null,{default:u(()=>[...l[28]||(l[28]=[t("0",-1)])]),_:1}),l[33]||(l[33]=t(" through ",-1)),n(r,null,{default:u(()=>[...l[29]||(l[29]=[t("9",-1)])]),_:1}),l[34]||(l[34]=t(" . ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[35]||(l[35]=[t("Calculating a Sum",-1)])]),_:1}),n(e,null,{default:u(()=>[...l[36]||(l[36]=[t(" Traversal can be used to perform calculations using every element of an array. ",-1)])]),_:1}),n(e,null,{default:u(()=>[l[37]||(l[37]=t(" For example, we can calculate the sum of all the numbers: ",-1)),n(i,{code:S,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[38]||(l[38]=t(" Output: ",-1)),n(a,{output:O})]),_:1}),n(e,null,{default:u(()=>[l[40]||(l[40]=t(" Each element is added to ",-1)),n(r,null,{default:u(()=>[...l[39]||(l[39]=[t("sum",-1)])]),_:1}),l[41]||(l[41]=t(" as the loop moves through the array. ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[42]||(l[42]=[t("Modifying Array Elements",-1)])]),_:1}),n(e,null,{default:u(()=>[...l[43]||(l[43]=[t(" Traversal can also be used to modify every element in an array. Since the loop provides the index, we can assign a new value to each position. ",-1)])]),_:1}),n(e,null,{default:u(()=>[l[44]||(l[44]=t(" For example: ",-1)),n(i,{code:I,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[45]||(l[45]=t(" Output: ",-1)),n(a,{output:j})]),_:1}),n(e,null,{default:u(()=>[l[47]||(l[47]=t(" The loop multiplies every element by ",-1)),n(r,null,{default:u(()=>[...l[46]||(l[46]=[t("2",-1)])]),_:1}),l[48]||(l[48]=t(" . ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[49]||(l[49]=[t("Enhanced for Loop",-1)])]),_:1}),n(e,null,{default:u(()=>[l[52]||(l[52]=t(" Java also provides an ",-1)),n(r,null,{default:u(()=>[...l[50]||(l[50]=[t("enhanced for loop",-1)])]),_:1}),l[53]||(l[53]=t(" , also known as a ",-1)),n(r,null,{default:u(()=>[...l[51]||(l[51]=[t("for-each loop",-1)])]),_:1}),l[54]||(l[54]=t(" . It provides a simpler way to visit every element when the index itself is not needed. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[55]||(l[55]=t(" For example: ",-1)),n(i,{code:F,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[56]||(l[56]=t(" Output: ",-1)),n(a,{output:C})]),_:1}),n(e,null,{default:u(()=>[l[58]||(l[58]=t(" In this example, ",-1)),n(r,null,{default:u(()=>[...l[57]||(l[57]=[t("number",-1)])]),_:1}),l[59]||(l[59]=t(" represents the current element during each iteration. ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[60]||(l[60]=[t("for Loop vs Enhanced for Loop",-1)])]),_:1}),n(e,null,{default:u(()=>[...l[61]||(l[61]=[t(" Both approaches can traverse an array, but they are useful in different situations. ",-1)])]),_:1}),n(e,null,{default:u(()=>[l[63]||(l[63]=t(" A traditional ",-1)),n(r,null,{default:u(()=>[...l[62]||(l[62]=[t("for",-1)])]),_:1}),l[64]||(l[64]=t(" loop is useful when the index is needed or when elements need to be modified using their positions. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[66]||(l[66]=t(" An enhanced ",-1)),n(r,null,{default:u(()=>[...l[65]||(l[65]=[t("for",-1)])]),_:1}),l[67]||(l[67]=t(" loop is useful when we simply need to read each element without working with its index. ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[68]||(l[68]=[t("Traversing a String Array",-1)])]),_:1}),n(e,null,{default:u(()=>[l[70]||(l[70]=t(" Array traversal also works with arrays containing objects such as ",-1)),n(r,null,{default:u(()=>[...l[69]||(l[69]=[t("String",-1)])]),_:1}),l[71]||(l[71]=t(" values. ",-1))]),_:1}),n(e,null,{default:u(()=>[l[72]||(l[72]=t(" For example: ",-1)),n(i,{code:k,language:"java"})]),_:1}),n(e,null,{default:u(()=>[l[73]||(l[73]=t(" Output: ",-1)),n(a,{output:B})]),_:1}),n(o,null,{default:u(()=>[...l[74]||(l[74]=[t("Common Traversal Pattern",-1)])]),_:1}),n(e,null,{default:u(()=>[l[76]||(l[76]=t(" A common pattern for traversing an array with a traditional ",-1)),n(r,null,{default:u(()=>[...l[75]||(l[75]=[t("for",-1)])]),_:1}),l[77]||(l[77]=t(" loop is: ",-1)),l[78]||(l[78]=s("ul",{class:"list-disc pl-8 mt-3 space-y-2"},[s("li",null,"Start the index at 0."),s("li",null,"Continue while the index is less than the array length."),s("li",null,"Access the current element using the index."),s("li",null,"Increase the index after each iteration.")],-1))]),_:1}),n(o,null,{default:u(()=>[...l[79]||(l[79]=[t("Avoiding Index Errors",-1)])]),_:1}),n(e,null,{default:u(()=>[l[82]||(l[82]=t(" The loop condition should normally use ",-1)),n(r,null,{default:u(()=>[...l[80]||(l[80]=[t("i < array.length",-1)])]),_:1}),l[83]||(l[83]=t(" rather than ",-1)),n(r,null,{default:u(()=>[...l[81]||(l[81]=[t("i <= array.length",-1)])]),_:1}),l[84]||(l[84]=t(" . ",-1))]),_:1}),n(e,null,{default:u(()=>[l[87]||(l[87]=t(" Remember that the last valid index is always ",-1)),n(r,null,{default:u(()=>[...l[85]||(l[85]=[t("length - 1",-1)])]),_:1}),l[88]||(l[88]=t(" . Using ",-1)),n(r,null,{default:u(()=>[...l[86]||(l[86]=[t("<=",-1)])]),_:1}),l[89]||(l[89]=t(" can cause the loop to access an index that does not exist. ",-1))]),_:1}),n(o,null,{default:u(()=>[...l[90]||(l[90]=[t("Summary",-1)])]),_:1}),n(e,null,{default:u(()=>[...l[91]||(l[91]=[t(" Array traversal is the process of visiting the elements of an array, usually with a loop. ",-1)])]),_:1}),n(e,null,{default:u(()=>[l[107]||(l[107]=t(" In this topic, you learned that: ",-1)),s("ul",x,[l[104]||(l[104]=s("li",null," Array traversal processes elements one at a time. ",-1)),s("li",null,[l[93]||(l[93]=t(" A ",-1)),n(r,null,{default:u(()=>[...l[92]||(l[92]=[t("for",-1)])]),_:1}),l[94]||(l[94]=t(" loop can use an index to traverse an array. ",-1))]),s("li",null,[l[96]||(l[96]=t(" The ",-1)),n(r,null,{default:u(()=>[...l[95]||(l[95]=[t("length",-1)])]),_:1}),l[97]||(l[97]=t(" property helps determine when traversal should stop. ",-1))]),l[105]||(l[105]=s("li",null," Traversal can be used to calculate values such as a sum. ",-1)),l[106]||(l[106]=s("li",null," Traversal can be used to modify array elements. ",-1)),s("li",null,[l[99]||(l[99]=t(" The enhanced ",-1)),n(r,null,{default:u(()=>[...l[98]||(l[98]=[t("for",-1)])]),_:1}),l[100]||(l[100]=t(" loop provides a simple way to visit every element. ",-1))]),s("li",null,[l[102]||(l[102]=t(" The last valid array index is ",-1)),n(r,null,{default:u(()=>[...l[101]||(l[101]=[t("length - 1",-1)])]),_:1}),l[103]||(l[103]=t(" . ",-1))])])]),_:1}),l[110]||(l[110]=s("br",null,null,-1)),n(f,{to:"/academia/student/classes/java-multi-dimensional-arrays"})])]),_:1}))}});export{W as default};

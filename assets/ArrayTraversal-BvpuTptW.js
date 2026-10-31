import{_ as m}from"./logo-C9ImmdpX.js";import{T as l,a as i,_ as f}from"./TopicNext.vue_vue_type_script_setup_true_lang-Do3NQ57y.js";import{T as u}from"./TopicTerm-Wsy3IcMW.js";import{C as a}from"./CodeBlock-YTzl4NkG.js";import{O as o}from"./OutputBlock-BsSWLsEy.js";import{_ as d}from"./FernInfo.vue_vue_type_script_setup_true_lang-BvXcjq5z.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-rzR0vzcF.js";import{d as g,h as v,i as r,o as b,a as s,q as n,g as e}from"./index-8Z-dxxHw.js";const y={class:"max-w-4xl mx-auto"},T=`
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 0; i < 5; i++) {
        printf("%d\\n", numbers[i]);
    }
    return 0;
}`,x=`
10
20
30
40
50`,O=`
#include <stdio.h>

int main() {
    int numbers[4] = {10, 20, 30, 40};

    for (int i = 0; i < 4; i++) {
        printf("Index %d: %d\\n", i, numbers[i]);
    }
    return 0;
}`,A=`
Index 0: 10
Index 1: 20
Index 2: 30
Index 3: 40`,w=`
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};
    int sum = 0;

    for (int i = 0; i < 5; i++) {
        sum += numbers[i];
    }

    printf("Sum: %d\\n", sum);
    return 0;
}`,E=`
Sum: 150`,I=`
#include <stdio.h>

int main() {
    int scores[5] = {80, 90, 75, 85, 100};
    int sum = 0;
    float average;

    for (int i = 0; i < 5; i++) {
        sum += scores[i];
    }
    average = sum / 5.0;
    printf("Average: %.2f\\n", average);
    return 0;
}`,P=`
Average: 86.00`,S=`
#include <stdio.h>

int main() {
    int numbers[5] = {12, 45, 7, 32, 18};
    int largest = numbers[0];

    for (int i = 1; i < 5; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    printf("Largest: %d\\n", largest);
    return 0;
}`,C=`
Largest: 45`,k=`
#include <stdio.h>

int main() {
    int numbers[5] = {12, 45, 7, 32, 18};
    int smallest = numbers[0];

    for (int i = 1; i < 5; i++) {
        if (numbers[i] < smallest) {
            smallest = numbers[i];
        }
    }
    printf("Smallest: %d\\n", smallest);
    return 0;
}`,L=`
Smallest: 7`,N=`
#include <stdio.h>

int main() {
    int numbers[6] = {5, 12, 8, 20, 3, 15};
    int count = 0;

    for (int i = 0; i < 6; i++) {
        if (numbers[i] >= 10) {
            count++;
        }
    }
    printf("Numbers >= 10: %d\\n", count);
    return 0;
}`,B=`
Numbers >= 10: 3`,V=`
#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
        numbers[i] *= 2;
    }
    for (int i = 0; i < 5; i++) {
        printf("%d\\n", numbers[i]);
    }
    return 0;
}`,W=`
2
4
6
8
10`,F=`
#include <stdio.h>

int main() {
    int numbers[5];

    for (int i = 0; i < 5; i++) {
        printf("Enter number %d: ", i + 1);
        scanf("%d", &numbers[i]);
    }
    printf("Numbers: ");

    for (int i = 0; i < 5; i++) {
        printf("%d ", numbers[i]);
    }
    printf("\\n");
    return 0;
}`,M=`
Enter number 1: 10
Enter number 2: 20
Enter number 3: 30
Enter number 4: 40
Enter number 5: 50
Numbers: 10 20 30 40 50`,$=`
#include <stdio.h>

int main() {
    int numbers[5] = {10, 20, 30, 40, 50};

    for (int i = 4; i >= 0; i--) {
        printf("%d\\n", numbers[i]);
    }
    return 0;
}`,j=`
50
40
30
20
10`,q=`
#include <stdio.h>

int main() {
    int scores[5] = {85, 92, 78, 90, 88};
    int passed = 0;

    for (int i = 0; i < 5; i++) {
        if (scores[i] >= 75) {
            passed++;
        }
    }
    printf("Students who passed: %d\\n", passed);
    return 0;
}`,R=`
Students who passed: 5`,Z=g({__name:"ArrayTraversal",setup(U){return(D,t)=>(b(),v(p,null,{default:r(()=>[s("div",y,[t[76]||(t[76]=s("div",{class:"w-full flex justify-center mb-6"},[s("img",{src:m,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),t[77]||(t[77]=s("div",{class:"text-center mb-4"},[s("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 3 "),s("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Array Traversal ")],-1)),n(l,null,{default:r(()=>[n(u,null,{default:r(()=>[...t[0]||(t[0]=[e("Array traversal",-1)])]),_:1}),t[1]||(t[1]=e(" means visiting the elements of an array one by one. ",-1))]),_:1}),n(l,null,{default:r(()=>[...t[2]||(t[2]=[e(" Instead of accessing each element manually, a loop can be used to process every element in the array. ",-1)])]),_:1}),n(d,{title:"Think of It This Way"},{default:r(()=>[...t[3]||(t[3]=[e(" Imagine walking through a row of boxes from the first box to the last. Each box is visited one at a time. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[4]||(t[4]=[e("Traversing an Array with a for Loop",-1)])]),_:1}),n(l,null,{default:r(()=>[t[6]||(t[6]=e(" A ",-1)),n(u,null,{default:r(()=>[...t[5]||(t[5]=[e("for",-1)])]),_:1}),t[7]||(t[7]=e(" loop is commonly used to traverse an array. ",-1)),n(a,{language:"c",code:T}),t[8]||(t[8]=e(" Output ",-1)),n(o,{output:x})]),_:1}),n(l,null,{default:r(()=>[t[11]||(t[11]=e(" The variable ",-1)),n(u,null,{default:r(()=>[...t[9]||(t[9]=[e("i",-1)])]),_:1}),t[12]||(t[12]=e(" represents the current array index. It starts at ",-1)),n(u,null,{default:r(()=>[...t[10]||(t[10]=[e("0",-1)])]),_:1}),t[13]||(t[13]=e(" and increases until the last index is reached. ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[14]||(t[14]=[e("Using the Index During Traversal",-1)])]),_:1}),n(l,null,{default:r(()=>[t[15]||(t[15]=e(" The loop variable can be used to display both the index and its corresponding value. ",-1)),n(a,{language:"c",code:O}),t[16]||(t[16]=e(" Output ",-1)),n(o,{output:A})]),_:1}),n(l,null,{default:r(()=>[n(u,null,{default:r(()=>[...t[17]||(t[17]=[e("numbers[i]",-1)])]),_:1}),t[19]||(t[19]=e(" means that the current value of ",-1)),n(u,null,{default:r(()=>[...t[18]||(t[18]=[e("i",-1)])]),_:1}),t[20]||(t[20]=e(" is used as the array index. ",-1))]),_:1}),n(d,{title:"Remember"},{default:r(()=>[...t[21]||(t[21]=[e(" When traversing an array, the loop variable commonly represents the current index. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[22]||(t[22]=[e("Calculating the Sum",-1)])]),_:1}),n(l,null,{default:r(()=>[t[23]||(t[23]=e(" Traversal makes it easier to perform calculations using every element. ",-1)),n(a,{language:"c",code:w}),t[24]||(t[24]=e(" Output ",-1)),n(o,{output:E})]),_:1}),n(l,null,{default:r(()=>[t[26]||(t[26]=e(" Each element is added to ",-1)),n(u,null,{default:r(()=>[...t[25]||(t[25]=[e("sum",-1)])]),_:1}),t[27]||(t[27]=e(" as the loop moves through the array. ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[28]||(t[28]=[e("Calculating the Average",-1)])]),_:1}),n(l,null,{default:r(()=>[t[29]||(t[29]=e(" The same technique can be used to calculate an average. ",-1)),n(a,{language:"c",code:I}),t[30]||(t[30]=e(" Output ",-1)),n(o,{output:P})]),_:1}),n(l,null,{default:r(()=>[...t[31]||(t[31]=[e(" First, the values are added together. The total is then divided by the number of elements. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[32]||(t[32]=[e("Finding the Largest Value",-1)])]),_:1}),n(l,null,{default:r(()=>[t[33]||(t[33]=e(" An array can be traversed to find its largest value. ",-1)),n(a,{language:"c",code:S}),t[34]||(t[34]=e(" Output ",-1)),n(o,{output:C})]),_:1}),n(l,null,{default:r(()=>[...t[35]||(t[35]=[e(" The first element is initially treated as the largest. Each remaining element is then compared with it. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[36]||(t[36]=[e("Finding the Smallest Value",-1)])]),_:1}),n(l,null,{default:r(()=>[t[37]||(t[37]=e(" The same approach can be used to find the smallest value. ",-1)),n(a,{language:"c",code:k}),t[38]||(t[38]=e(" Output ",-1)),n(o,{output:L})]),_:1}),n(l,null,{default:r(()=>[t[40]||(t[40]=e(" If a smaller value is found, it becomes the new ",-1)),n(u,null,{default:r(()=>[...t[39]||(t[39]=[e("smallest",-1)])]),_:1}),t[41]||(t[41]=e(". ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[42]||(t[42]=[e("Counting Elements That Match a Condition",-1)])]),_:1}),n(l,null,{default:r(()=>[t[43]||(t[43]=e(" Traversal can also be used to count how many elements satisfy a condition. ",-1)),n(a,{language:"c",code:N}),t[44]||(t[44]=e(" Output ",-1)),n(o,{output:B})]),_:1}),n(l,null,{default:r(()=>[t[47]||(t[47]=e(" Every element is checked. Whenever an element is at least ",-1)),n(u,null,{default:r(()=>[...t[45]||(t[45]=[e("10",-1)])]),_:1}),t[48]||(t[48]=e(", ",-1)),n(u,null,{default:r(()=>[...t[46]||(t[46]=[e("count",-1)])]),_:1}),t[49]||(t[49]=e(" increases by one. ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[50]||(t[50]=[e("Modifying Every Element",-1)])]),_:1}),n(l,null,{default:r(()=>[t[51]||(t[51]=e(" Traversal is not only useful for reading values. It can also be used to modify every element. ",-1)),n(a,{language:"c",code:V}),t[52]||(t[52]=e(" Output ",-1)),n(o,{output:W})]),_:1}),n(l,null,{default:r(()=>[t[54]||(t[54]=e(" Each element is multiplied by ",-1)),n(u,null,{default:r(()=>[...t[53]||(t[53]=[e("2",-1)])]),_:1}),t[55]||(t[55]=e(" using its current index. ",-1))]),_:1}),n(i,null,{default:r(()=>[...t[56]||(t[56]=[e("Traversing While Getting User Input",-1)])]),_:1}),n(l,null,{default:r(()=>[t[57]||(t[57]=e(" A loop can also be used to fill an array with user input. ",-1)),n(a,{language:"c",code:F}),t[58]||(t[58]=e(" Output ",-1)),n(o,{output:M})]),_:1}),n(l,null,{default:r(()=>[...t[59]||(t[59]=[e(" Each iteration asks for one value and stores it at the current index. A second loop then traverses the array to display the stored values. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[60]||(t[60]=[e("Traversing in Reverse",-1)])]),_:1}),n(l,null,{default:r(()=>[t[62]||(t[62]=e(" Traversal does not have to start at index ",-1)),n(u,null,{default:r(()=>[...t[61]||(t[61]=[e("0",-1)])]),_:1}),t[63]||(t[63]=e(". An array can also be traversed from the last element toward the first. ",-1)),n(a,{language:"c",code:$}),t[64]||(t[64]=e(" Output ",-1)),n(o,{output:j})]),_:1}),n(l,null,{default:r(()=>[...t[65]||(t[65]=[e(" The loop starts at the last index and decreases the index on every iteration. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[66]||(t[66]=[e("A Practical Example",-1)])]),_:1}),n(l,null,{default:r(()=>[t[67]||(t[67]=e(" Suppose an array contains the scores of five students. We can traverse the array and count how many students passed. ",-1)),n(a,{language:"c",code:q}),t[68]||(t[68]=e(" Output ",-1)),n(o,{output:R})]),_:1}),n(l,null,{default:r(()=>[t[70]||(t[70]=e(" The loop checks each student's score against the passing score of ",-1)),n(u,null,{default:r(()=>[...t[69]||(t[69]=[e("75",-1)])]),_:1}),t[71]||(t[71]=e(". ",-1))]),_:1}),n(d,{title:"The Main Idea"},{default:r(()=>[...t[72]||(t[72]=[e(" Arrays store the data. Loops provide the easiest way to move through that data one element at a time. ",-1)])]),_:1}),n(i,null,{default:r(()=>[...t[73]||(t[73]=[e("Summary",-1)])]),_:1}),n(l,null,{default:r(()=>[...t[74]||(t[74]=[e(" Array traversal means visiting array elements one by one, usually with a loop. This allows programs to process an entire array without manually accessing every index. ",-1)])]),_:1}),n(l,null,{default:r(()=>[...t[75]||(t[75]=[s("ul",{class:"list-disc pl-6 space-y-2"},[s("li",null,"A loop can visit every element of an array."),s("li",null,"The loop variable commonly represents the current index."),s("li",null,"Traversal can be used for calculations such as sums and averages."),s("li",null,"Traversal can be used to find the largest or smallest value."),s("li",null,"Traversal can count elements that satisfy a condition."),s("li",null,"Array elements can be modified during traversal."),s("li",null,"An array can also be traversed in reverse order.")],-1)])]),_:1}),t[78]||(t[78]=s("br",null,null,-1)),n(f,{to:"/academia/student/classes/c-multi-dimensional-arrays"})])]),_:1}))}});export{Z as default};

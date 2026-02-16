import{_ as c}from"./MainLayout.vue_vue_type_style_index_0_lang-CH6Zctfs.js";import{C as s,_ as w}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-DW29gltG.js";import{O as l}from"./OutputBlock-C3SfWrev.js";import{d as v,r,x as k,j as C,b as e,i as o,t as O,e as n,o as h}from"./index-DdgbXUPT.js";import"./Footer.vue_vue_type_script_setup_true_lang-CKyncM6S.js";const S={class:"text-gray-500 mb-2 text-lg"},q={class:"text-gray-500 mb-2 text-lg"},E={class:"text-gray-500 mb-2 text-lg"},F={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},T="February 16, 2026",M=v({__name:"IntroductionIndex",setup(A){const a=r(`
#include <stdio.h>

void greet() {
    printf("Greetings, brave traveler!\\n");
}

int main() {
    greet(); // call the function
    return 0;
}
`),i=r(`
Greetings, brave traveler!
`),u=r(`
#include <stdio.h>

void forgeSword(int length) {
    printf("Forged a sword of length %d\\n", length);
}

int main() {
    forgeSword(12);
    forgeSword(15);
    forgeSword(20);
    return 0;
}
`),d=r(`
Forged a sword of length 12
Forged a sword of length 15
Forged a sword of length 20
`),g=r(`
#include <stdio.h>

int totalEnergy() {
    int crystal1 = 150, crystal2 = 200, crystal3 = 100;
    return crystal1 + crystal2 + crystal3;
}

int main() {
    int energy = totalEnergy();
    printf("Total magic energy: %d\\n", energy);
    return 0;
}
`),p=r(`
Total magic energy: 450
`),m=r(`
#include <stdio.h>

int totalYield(int field1, int field2) {
    return field1 + field2;
}

int main() {
    int f1, f2;
    printf("Enter yield of field 1 and field 2: ");
    scanf("%d %d", &f1, &f2);
    int total = totalYield(f1, f2);
    printf("Total produce is: %d\\n", total);
    return 0;
}
`),f=r(`
Enter yield of field 1 and field 2: 30 45
Total produce is: 75
`),y=r(`
#include <stdio.h>

int square(int num) {
    return num * num;
}

int main() {
    int a, b, c;
    printf("Enter 3 numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    printf("Squares: %d %d %d\\n", square(a), square(b), square(c));
    return 0;
}
`),x=r(`
Enter 3 numbers: 2 4 5
Squares: 4 16 25
`),b=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Identifiers",route:"/blog/c-identifiers"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Loops",route:"/blog/c-loops"}];return(N,t)=>(h(),k(c,null,{default:C(()=>[t[20]||(t[20]=e("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Learning Functions in C: A Story of Wizards and Blacksmiths",-1)),e("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated: "+O(T)),t[21]||(t[21]=e("p",{class:"text-gray-600 mb-6 text-lg"}," Functions in C are like special spells or tools in a wizard's tower or a blacksmith's workshop. You can write a piece of logic once and reuse it whenever needed. This keeps your code organized, clean, and easier to manage. ",-1)),t[22]||(t[22]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"1. Greeting Adventurers (No Arguments, No Return)",-1)),e("p",S,[t[0]||(t[0]=n(" Imagine you are entering an enchanted forest. A mystical voice guides you to greet every adventurer who enters. We can define a function ",-1)),t[1]||(t[1]=e("span",{class:"bg-pink-50 px-2 rounded-lg"},"greet()",-1)),t[2]||(t[2]=n(" that simply prints a warm greeting. No input is needed, and it doesn't return anything. ",-1)),o(s,{code:a.value,language:"c"},null,8,["code"]),t[3]||(t[3]=n(" Output: ",-1)),o(l,{output:i.value},null,8,["output"])]),t[23]||(t[23]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"2. Forging Swords (Arguments, No Return)",-1)),e("p",q,[t[4]||(t[4]=n(" In a small village, you are the blacksmith. Your apprentice gives you lengths for swords to forge. We define ",-1)),t[5]||(t[5]=e("span",{class:"bg-pink-50 px-2 rounded-lg"},"forgeSword(int length)",-1)),t[6]||(t[6]=n(" that takes a sword length and prints the crafted sword. Each time you call it, it uses the input to print a message. ",-1)),o(s,{code:u.value,language:"c"},null,8,["code"]),t[7]||(t[7]=n(" Output: ",-1)),o(l,{output:d.value},null,8,["output"])]),t[24]||(t[24]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"3. Crystal Energy (No Arguments, Return Value)",-1)),e("p",E,[t[8]||(t[8]=n(" In the wizard tower, magical crystals hold energy. You need a function that calculates the total energy. We define ",-1)),t[9]||(t[9]=e("span",{class:"bg-pink-50 px-2 rounded-lg"},"totalEnergy()",-1)),t[10]||(t[10]=n(" which sums the crystal powers and returns it. Main stores the returned value and prints it. ",-1)),o(s,{code:g.value,language:"c"},null,8,["code"]),t[11]||(t[11]=n(" Output: ",-1)),o(l,{output:p.value},null,8,["output"])]),t[25]||(t[25]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"4. Farmer’s Yield (Arguments and Return Value)",-1)),e("p",F,[t[12]||(t[12]=n(" A farmer wants to calculate the combined produce from two fields. We define ",-1)),t[13]||(t[13]=e("span",{class:"bg-pink-50 px-2 rounded-lg"},"totalYield(int field1, int field2)",-1)),t[14]||(t[14]=n(" that returns the sum of yields. Main reads values from the user, calls the function, and prints the total. ",-1)),o(s,{code:m.value,language:"c"},null,8,["code"]),t[15]||(t[15]=n(" Output: ",-1)),o(l,{output:f.value},null,8,["output"])]),t[26]||(t[26]=e("h2",{class:"text-2xl font-semibold text-gray-800 mb-2 mt-6"},"5. Magical Squares (Multiple Calls)",-1)),e("p",I,[t[16]||(t[16]=n(" In the kingdom library, a sage wants to study the square of numbers. We define ",-1)),t[17]||(t[17]=e("span",{class:"bg-pink-50 px-2 rounded-lg"},"square(int num)",-1)),t[18]||(t[18]=n(" that returns the square. The user enters multiple numbers, and we call the function for each, printing the results. This demonstrates reusing the same logic multiple times. ",-1)),o(s,{code:y.value,language:"c"},null,8,["code"]),t[19]||(t[19]=n(" Output: ",-1)),o(l,{output:x.value},null,8,["output"])]),o(w,{links:b})]),_:1}))}});export{M as default};

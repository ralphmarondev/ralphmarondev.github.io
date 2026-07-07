import{_ as y}from"./TutorialMainLayout.vue_vue_type_script_setup_true_lang-Iid74Gt7.js";import{C as t}from"./CodeBlock-EK9_wzx3.js";import{u as k}from"./cProgramming-CgDASWC3.js";import{d as w,r as i,p as v,l as L,m as E,o as C,a as o,t as U,b as n,k as s}from"./index-COhN-orq.js";const S={class:"text-gray-500 mb-2 text-lg"},j={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},T={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},P={class:"text-gray-500 mb-2 text-lg"},B="February 16, 2026",F=w({__name:"LoopsIndex",setup(z){const e=k(),r=i(`
for (initialization; condition; update) {
    // body of the loop
}
`),u=i(`
for (int i = 0; i < 5; i++) {
    printf("%d ", i + 1);
}
`),p=i(`
while (condition) {
    // body of the loop
}
`),d=i(`
int i = 0;
while (i < 5) {
    printf("%d ", i + 1);
    i++;
}
`),a=i(`
do {
    // body of the loop
} while (condition);
`),m=i(`
int i = 0;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);
`),g=i(`
// Using for
for ( ; ; ) {
    // body executes indefinitely
}

// Using while
while (1) {
    // body executes indefinitely
}

// Using do-while
do {
    // body executes indefinitely
} while (1);
`),x=i(`
for (int i = 0; i < outer; i++) {
    for (int j = 0; j < inner; j++) {
        // body executes multiple times
    }
}
`),f=i(`
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        printf("i = %d, j = %d\\n", i, j);
    }
}
`),b=i(`
for (int i = 0; i < 5; i++) {
    if (i == 3) break;      // exit loop
    printf("%d ", i);
}

for (int i = 0; i < 5; i++) {
    if (i == 3) continue;   // skip iteration
    printf("%d ", i);
}

for (int i = 0; i < 5; i++) {
    if (i == 3) goto skip;  // jump to label
    printf("%d ", i);
}

skip:
printf("\\nJumped to the 'skip' label.");
`);return(R,l)=>(C(),v(y,{title:"C Programming",navigation:E(e).sections},{default:L(()=>[l[73]||(l[73]=o("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Loops in C",-1)),o("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+U(B)),l[74]||(l[74]=o("p",{class:"text-gray-600 mb-4 text-lg"},[n(" Loops are fundamental programming constructs used to repeat a block of code multiple times without rewriting it. Imagine printing a message 100 times manually; loops make this task simple, efficient, and maintainable. Loops allow a program to control the flow of execution dynamically, making it more flexible and responsive to conditions. "),o("br"),n(" Loops are used in numerous scenarios such as iterating through arrays, performing repeated calculations, creating menus, or managing tasks in games and simulations. By mastering loops, you can reduce redundancy in code and improve clarity. ")],-1)),l[75]||(l[75]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"1. For Loop",-1)),o("p",S,[l[0]||(l[0]=n(" The ",-1)),l[1]||(l[1]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"for",-1)),l[2]||(l[2]=n(" loop is an entry-controlled loop that repeats code a known number of times. ",-1)),l[3]||(l[3]=o("br",null,null,-1)),l[4]||(l[4]=n("Syntax: ",-1)),s(t,{code:r.value,language:"c"},null,8,["code"]),l[5]||(l[5]=n(" Example: Print numbers from 1 to 5 ",-1)),s(t,{code:u.value,language:"c"},null,8,["code"]),l[6]||(l[6]=n(" Explanation: ",-1)),l[7]||(l[7]=o("br",null,null,-1)),l[8]||(l[8]=n(" The loop initializes ",-1)),l[9]||(l[9]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"i",-1)),l[10]||(l[10]=n(" to 0, checks the condition ",-1)),l[11]||(l[11]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"i < 5",-1)),l[12]||(l[12]=n(", executes the body, and updates ",-1)),l[13]||(l[13]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"i++",-1)),l[14]||(l[14]=n(" each iteration. ",-1)),l[15]||(l[15]=o("br",null,null,-1)),l[16]||(l[16]=n("Use Cases: ",-1)),l[17]||(l[17]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Iterating over arrays or lists."),o("li",null,"Counting loops with known repetitions."),o("li",null,"Repeating operations a fixed number of times.")],-1))]),l[76]||(l[76]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"2. While Loop",-1)),o("p",j,[l[18]||(l[18]=n(" The ",-1)),l[19]||(l[19]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"while",-1)),l[20]||(l[20]=n(" loop repeats a block while a condition is true. Initialization and update must be handled manually. ",-1)),l[21]||(l[21]=o("br",null,null,-1)),l[22]||(l[22]=n("Syntax: ",-1)),s(t,{code:p.value,language:"c"},null,8,["code"]),l[23]||(l[23]=n(" Example: Print numbers from 1 to 5 ",-1)),s(t,{code:d.value,language:"c"},null,8,["code"]),l[24]||(l[24]=n(" Explanation: ",-1)),l[25]||(l[25]=o("br",null,null,-1)),l[26]||(l[26]=n(" The loop checks the condition before each iteration. If the condition is false initially, the loop body may never execute. ",-1)),l[27]||(l[27]=o("br",null,null,-1)),l[28]||(l[28]=n("Use Cases: ",-1)),l[29]||(l[29]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Repeating tasks until a condition changes."),o("li",null,"Reading input until a sentinel value is encountered.")],-1))]),l[77]||(l[77]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"3. Do-While Loop",-1)),o("p",I,[l[30]||(l[30]=n(" The ",-1)),l[31]||(l[31]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"do-while",-1)),l[32]||(l[32]=n(" loop executes the block first and checks the condition afterward. It always runs at least once. ",-1)),l[33]||(l[33]=o("br",null,null,-1)),l[34]||(l[34]=n("Syntax: ",-1)),s(t,{code:a.value,language:"c"},null,8,["code"]),l[35]||(l[35]=n(" Example: Print numbers from 0 to 5 ",-1)),s(t,{code:m.value,language:"c"},null,8,["code"]),l[36]||(l[36]=n(" Explanation: ",-1)),l[37]||(l[37]=o("br",null,null,-1)),l[38]||(l[38]=n(" Unlike while, the do-while guarantees at least one execution. Ideal when the loop body must run at least once regardless of the condition. ",-1)),l[39]||(l[39]=o("br",null,null,-1)),l[40]||(l[40]=n("Use Cases: ",-1)),l[41]||(l[41]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Menu-driven programs that should display options at least once."),o("li",null,"Input validation loops where user input must be requested before checking.")],-1))]),l[78]||(l[78]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"4. Infinite Loops",-1)),o("p",T,[l[42]||(l[42]=n(" An ",-1)),l[43]||(l[43]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"infinite loop",-1)),l[44]||(l[44]=n(" repeats indefinitely until interrupted. Usually, it occurs when the condition never becomes false. Loop control statements are often used to exit such loops. ",-1)),l[45]||(l[45]=o("br",null,null,-1)),l[46]||(l[46]=n("Syntax: ",-1)),s(t,{code:g.value,language:"c"},null,8,["code"]),l[47]||(l[47]=n(" Explanation: ",-1)),l[48]||(l[48]=o("br",null,null,-1)),l[49]||(l[49]=n(" Infinite loops are useful for servers, embedded systems, and ongoing processes but require careful control to avoid program freeze. ",-1)),l[50]||(l[50]=o("br",null,null,-1)),l[51]||(l[51]=n("Use Cases: ",-1)),l[52]||(l[52]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Real-time systems that continuously monitor sensors."),o("li",null,"Event loops in games or GUI programs.")],-1))]),l[79]||(l[79]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"5. Nested Loops",-1)),o("p",N,[l[53]||(l[53]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"Nested loops",-1)),l[54]||(l[54]=n(" are loops inside loops. The inner loop executes fully for each iteration of the outer loop. ",-1)),l[55]||(l[55]=o("br",null,null,-1)),l[56]||(l[56]=n("Syntax: ",-1)),s(t,{code:x.value,language:"c"},null,8,["code"]),l[57]||(l[57]=n(" Example: Nested iterations ",-1)),s(t,{code:f.value,language:"c"},null,8,["code"]),l[58]||(l[58]=n(" Explanation: ",-1)),l[59]||(l[59]=o("br",null,null,-1)),l[60]||(l[60]=n(" Each outer loop iteration runs all inner loop iterations. Useful for multidimensional arrays or repeated tasks requiring multiple levels. ",-1)),l[61]||(l[61]=o("br",null,null,-1)),l[62]||(l[62]=n("Use Cases: ",-1)),l[63]||(l[63]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Processing 2D arrays or matrices."),o("li",null,"Generating patterns like tables or pyramids.")],-1))]),l[80]||(l[80]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"6. Loop Control Statements",-1)),o("p",P,[l[64]||(l[64]=n(" Loop control statements alter the normal flow of loops: ",-1)),l[65]||(l[65]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,[o("span",{class:"bg-pink-50 px-2 rounded-lg"},"break"),n(": exit the loop immediately.")]),o("li",null,[o("span",{class:"bg-pink-50 px-2 rounded-lg"},"continue"),n(": skip current iteration and continue next.")]),o("li",null,[o("span",{class:"bg-pink-50 px-2 rounded-lg"},"goto"),n(": jump to a labeled statement.")])],-1)),l[66]||(l[66]=n(" Example: ",-1)),s(t,{code:b.value,language:"c"},null,8,["code"]),l[67]||(l[67]=n(" Explanation: ",-1)),l[68]||(l[68]=o("br",null,null,-1)),l[69]||(l[69]=n(" These statements provide fine-grained control over loops, allowing early exit, skipping iterations, or jumps to specific code points. ",-1)),l[70]||(l[70]=o("br",null,null,-1)),l[71]||(l[71]=n("Use Cases: ",-1)),l[72]||(l[72]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Terminate loops on specific conditions."),o("li",null,"Skip processing certain values."),o("li",null,"Jump to error handling or recovery code.")],-1))])]),_:1},8,["navigation"]))}});export{F as default};

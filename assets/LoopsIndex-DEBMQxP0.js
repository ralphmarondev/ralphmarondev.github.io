import{_ as y}from"./MainLayout.vue_vue_type_style_index_0_lang-BnMcHLIP.js";import{C as i,_ as k}from"./UsefulLinks.vue_vue_type_script_setup_true_lang-BGxgIw6C.js";import{d as w,r as s,z as v,j as L,b as o,i as n,t as E,e as l,o as C}from"./index-Bk0_C35p.js";const U={class:"text-gray-500 mb-2 text-lg"},I={class:"text-gray-500 mb-2 text-lg"},S={class:"text-gray-500 mb-2 text-lg"},j={class:"text-gray-500 mb-2 text-lg"},T={class:"text-gray-500 mb-2 text-lg"},N={class:"text-gray-500 mb-2 text-lg"},z="February 16, 2026",W=w({__name:"LoopsIndex",setup(B){const e=s(`
for (initialization; condition; update) {
    // body of the loop
}
`),r=s(`
for (int i = 0; i < 5; i++) {
    printf("%d ", i + 1);
}
`),u=s(`
while (condition) {
    // body of the loop
}
`),p=s(`
int i = 0;
while (i < 5) {
    printf("%d ", i + 1);
    i++;
}
`),d=s(`
do {
    // body of the loop
} while (condition);
`),a=s(`
int i = 0;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);
`),g=s(`
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
`),m=s(`
for (int i = 0; i < outer; i++) {
    for (int j = 0; j < inner; j++) {
        // body executes multiple times
    }
}
`),b=s(`
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        printf("i = %d, j = %d\\n", i, j);
    }
}
`),x=s(`
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
`),f=[{title:"Introduction to C",route:"/blog/c-introduction"},{title:"Compilation Process",route:"/blog/c-compilation-process"},{title:"Identifiers",route:"/blog/c-identifiers"},{title:"Keywords",route:"/blog/c-keywords"},{title:"Variables",route:"/blog/c-variables"},{title:"Data Types",route:"/blog/c-data-types"},{title:"Input and Output",route:"/blog/c-input-output"},{title:"Operators",route:"/blog/c-operators"},{title:"Conditional Statements",route:"/blog/c-conditional-statements"}];return(P,t)=>(C(),v(y,null,{default:L(()=>[t[73]||(t[73]=o("h2",{class:"text-3xl font-bold text-gray-800 mb-2"},"Loops in C",-1)),o("p",{class:"text-sm text-gray-500 mb-4"},"Last Updated : "+E(z)),t[74]||(t[74]=o("p",{class:"text-gray-600 mb-4 text-lg"},[l(" Loops are fundamental programming constructs used to repeat a block of code multiple times without rewriting it. Imagine printing a message 100 times manually; loops make this task simple, efficient, and maintainable. Loops allow a program to control the flow of execution dynamically, making it more flexible and responsive to conditions. "),o("br"),l(" Loops are used in numerous scenarios such as iterating through arrays, performing repeated calculations, creating menus, or managing tasks in games and simulations. By mastering loops, you can reduce redundancy in code and improve clarity. ")],-1)),t[75]||(t[75]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"1. For Loop",-1)),o("p",U,[t[0]||(t[0]=l(" The ",-1)),t[1]||(t[1]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"for",-1)),t[2]||(t[2]=l(" loop is an entry-controlled loop that repeats code a known number of times. ",-1)),t[3]||(t[3]=o("br",null,null,-1)),t[4]||(t[4]=l("Syntax: ",-1)),n(i,{code:e.value,language:"c"},null,8,["code"]),t[5]||(t[5]=l(" Example: Print numbers from 1 to 5 ",-1)),n(i,{code:r.value,language:"c"},null,8,["code"]),t[6]||(t[6]=l(" Explanation: ",-1)),t[7]||(t[7]=o("br",null,null,-1)),t[8]||(t[8]=l(" The loop initializes ",-1)),t[9]||(t[9]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"i",-1)),t[10]||(t[10]=l(" to 0, checks the condition ",-1)),t[11]||(t[11]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"i < 5",-1)),t[12]||(t[12]=l(", executes the body, and updates ",-1)),t[13]||(t[13]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"i++",-1)),t[14]||(t[14]=l(" each iteration. ",-1)),t[15]||(t[15]=o("br",null,null,-1)),t[16]||(t[16]=l("Use Cases: ",-1)),t[17]||(t[17]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Iterating over arrays or lists."),o("li",null,"Counting loops with known repetitions."),o("li",null,"Repeating operations a fixed number of times.")],-1))]),t[76]||(t[76]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"2. While Loop",-1)),o("p",I,[t[18]||(t[18]=l(" The ",-1)),t[19]||(t[19]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"while",-1)),t[20]||(t[20]=l(" loop repeats a block while a condition is true. Initialization and update must be handled manually. ",-1)),t[21]||(t[21]=o("br",null,null,-1)),t[22]||(t[22]=l("Syntax: ",-1)),n(i,{code:u.value,language:"c"},null,8,["code"]),t[23]||(t[23]=l(" Example: Print numbers from 1 to 5 ",-1)),n(i,{code:p.value,language:"c"},null,8,["code"]),t[24]||(t[24]=l(" Explanation: ",-1)),t[25]||(t[25]=o("br",null,null,-1)),t[26]||(t[26]=l(" The loop checks the condition before each iteration. If the condition is false initially, the loop body may never execute. ",-1)),t[27]||(t[27]=o("br",null,null,-1)),t[28]||(t[28]=l("Use Cases: ",-1)),t[29]||(t[29]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Repeating tasks until a condition changes."),o("li",null,"Reading input until a sentinel value is encountered.")],-1))]),t[77]||(t[77]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"3. Do-While Loop",-1)),o("p",S,[t[30]||(t[30]=l(" The ",-1)),t[31]||(t[31]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"do-while",-1)),t[32]||(t[32]=l(" loop executes the block first and checks the condition afterward. It always runs at least once. ",-1)),t[33]||(t[33]=o("br",null,null,-1)),t[34]||(t[34]=l("Syntax: ",-1)),n(i,{code:d.value,language:"c"},null,8,["code"]),t[35]||(t[35]=l(" Example: Print numbers from 0 to 5 ",-1)),n(i,{code:a.value,language:"c"},null,8,["code"]),t[36]||(t[36]=l(" Explanation: ",-1)),t[37]||(t[37]=o("br",null,null,-1)),t[38]||(t[38]=l(" Unlike while, the do-while guarantees at least one execution. Ideal when the loop body must run at least once regardless of the condition. ",-1)),t[39]||(t[39]=o("br",null,null,-1)),t[40]||(t[40]=l("Use Cases: ",-1)),t[41]||(t[41]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Menu-driven programs that should display options at least once."),o("li",null,"Input validation loops where user input must be requested before checking.")],-1))]),t[78]||(t[78]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"4. Infinite Loops",-1)),o("p",j,[t[42]||(t[42]=l(" An ",-1)),t[43]||(t[43]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"infinite loop",-1)),t[44]||(t[44]=l(" repeats indefinitely until interrupted. Usually, it occurs when the condition never becomes false. Loop control statements are often used to exit such loops. ",-1)),t[45]||(t[45]=o("br",null,null,-1)),t[46]||(t[46]=l("Syntax: ",-1)),n(i,{code:g.value,language:"c"},null,8,["code"]),t[47]||(t[47]=l(" Explanation: ",-1)),t[48]||(t[48]=o("br",null,null,-1)),t[49]||(t[49]=l(" Infinite loops are useful for servers, embedded systems, and ongoing processes but require careful control to avoid program freeze. ",-1)),t[50]||(t[50]=o("br",null,null,-1)),t[51]||(t[51]=l("Use Cases: ",-1)),t[52]||(t[52]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Real-time systems that continuously monitor sensors."),o("li",null,"Event loops in games or GUI programs.")],-1))]),t[79]||(t[79]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"5. Nested Loops",-1)),o("p",T,[t[53]||(t[53]=o("span",{class:"bg-pink-50 px-2 rounded-lg"},"Nested loops",-1)),t[54]||(t[54]=l(" are loops inside loops. The inner loop executes fully for each iteration of the outer loop. ",-1)),t[55]||(t[55]=o("br",null,null,-1)),t[56]||(t[56]=l("Syntax: ",-1)),n(i,{code:m.value,language:"c"},null,8,["code"]),t[57]||(t[57]=l(" Example: Nested iterations ",-1)),n(i,{code:b.value,language:"c"},null,8,["code"]),t[58]||(t[58]=l(" Explanation: ",-1)),t[59]||(t[59]=o("br",null,null,-1)),t[60]||(t[60]=l(" Each outer loop iteration runs all inner loop iterations. Useful for multidimensional arrays or repeated tasks requiring multiple levels. ",-1)),t[61]||(t[61]=o("br",null,null,-1)),t[62]||(t[62]=l("Use Cases: ",-1)),t[63]||(t[63]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Processing 2D arrays or matrices."),o("li",null,"Generating patterns like tables or pyramids.")],-1))]),t[80]||(t[80]=o("h2",{class:"text-2xl font-semibold text-gray-800 mb-2"},"6. Loop Control Statements",-1)),o("p",N,[t[64]||(t[64]=l(" Loop control statements alter the normal flow of loops: ",-1)),t[65]||(t[65]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,[o("span",{class:"bg-pink-50 px-2 rounded-lg"},"break"),l(": exit the loop immediately.")]),o("li",null,[o("span",{class:"bg-pink-50 px-2 rounded-lg"},"continue"),l(": skip current iteration and continue next.")]),o("li",null,[o("span",{class:"bg-pink-50 px-2 rounded-lg"},"goto"),l(": jump to a labeled statement.")])],-1)),t[66]||(t[66]=l(" Example: ",-1)),n(i,{code:x.value,language:"c"},null,8,["code"]),t[67]||(t[67]=l(" Explanation: ",-1)),t[68]||(t[68]=o("br",null,null,-1)),t[69]||(t[69]=l(" These statements provide fine-grained control over loops, allowing early exit, skipping iterations, or jumps to specific code points. ",-1)),t[70]||(t[70]=o("br",null,null,-1)),t[71]||(t[71]=l("Use Cases: ",-1)),t[72]||(t[72]=o("ul",{class:"list-disc list-inside space-y-1"},[o("li",null,"Terminate loops on specific conditions."),o("li",null,"Skip processing certain values."),o("li",null,"Jump to error handling or recovery code.")],-1))]),n(k,{links:f})]),_:1}))}});export{W as default};

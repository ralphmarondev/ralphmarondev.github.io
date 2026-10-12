import{_ as e}from"./logo-C9ImmdpX.js";import{_ as p}from"./MainLayout.vue_vue_type_script_setup_true_lang-BRS_fCyU.js";import{T as s,a as r,_ as m}from"./TopicNext.vue_vue_type_script_setup_true_lang-CyK2fsKE.js";import{T as i,C as o}from"./CodeBlock-Ayh7J4dk.js";import{O as f}from"./OutputBlock-CjsXuZMe.js";import{d as a,h as g,i as n,o as y,a as d,q as u,g as t}from"./index-DSMoD1xp.js";const x={class:"max-w-4xl mx-auto"},b={class:"list-disc pl-8 space-y-2"},v={class:"list-disc pl-8 mt-3 space-y-2"},w=`
printf("%d", 25);
`,T=`
#include <stdio.h>

int main() {
    printf("%d", 25);
    return 0;
}
`,O=`
#include <stdio.h>

int main() {
    printf("%f", 3.14);
    return 0;
}
`,C=`
#include <stdio.h>

int main() {
    printf("%.2f", 3.141592);
    return 0;
}
`,A=`
#include <stdio.h>

int main() {
    printf("%c", 'A');
    return 0;
}
`,S=`
#include <stdio.h>

int main() {
    printf("%s", "Hello, C!");
    return 0;
}
`,F=`
#include <stdio.h>

int main() {
    printf("Age: %d\\n", 23);
    printf("Grade: %.2f\\n", 95.50);
    printf("Letter: %c\\n", 'A');
    return 0;
}
`,k=`
#include <stdio.h>

int main() {
    printf("I have %d apples and %.2f liters of juice.", 5, 1.5);
    return 0;
}
`,G=a({__name:"FormatSpecifiers",setup(B){return(I,l)=>(y(),g(p,null,{default:n(()=>[d("div",x,[l[124]||(l[124]=d("div",{class:"w-full flex justify-center mb-6"},[d("img",{src:e,alt:"C Programming",class:"h-56 lg:h-64 w-auto object-contain"})],-1)),l[125]||(l[125]=d("div",{class:"text-center mb-4"},[d("p",{class:"text-xl md:text-2xl font-bold text-gray-400 md:mb-1"}," TOPIC 2 "),d("h2",{class:"text-2xl md:text-4xl font-bold text-gray-600"}," Format Specifiers ")],-1)),u(s,null,{default:n(()=>[l[1]||(l[1]=t(" In the previous topic, we used ",-1)),u(i,null,{default:n(()=>[...l[0]||(l[0]=[t("printf()",-1)])]),_:1}),l[2]||(l[2]=t(" to display text. But what if we want to display different kinds of values, such as numbers or individual characters? ",-1))]),_:1}),u(s,null,{default:n(()=>[l[5]||(l[5]=t(" This is where ",-1)),u(i,null,{default:n(()=>[...l[3]||(l[3]=[t("format specifiers",-1)])]),_:1}),l[6]||(l[6]=t(" are used. A format specifier tells ",-1)),u(i,null,{default:n(()=>[...l[4]||(l[4]=[t("printf()",-1)])]),_:1}),l[7]||(l[7]=t(" how a value should be interpreted and displayed. ",-1))]),_:1}),u(r,null,{default:n(()=>[...l[8]||(l[8]=[t("Basic Structure",-1)])]),_:1}),u(s,null,{default:n(()=>[l[11]||(l[11]=t(" A format specifier begins with a percent sign ",-1)),u(i,null,{default:n(()=>[...l[9]||(l[9]=[t("%",-1)])]),_:1}),l[12]||(l[12]=t(" and is placed inside the string passed to ",-1)),u(i,null,{default:n(()=>[...l[10]||(l[10]=[t("printf()",-1)])]),_:1}),l[13]||(l[13]=t(" . ",-1)),u(o,{code:w,language:"c"})]),_:1}),u(s,null,{default:n(()=>[l[17]||(l[17]=t(" In this example, ",-1)),u(i,null,{default:n(()=>[...l[14]||(l[14]=[t("%d",-1)])]),_:1}),l[18]||(l[18]=t(" tells ",-1)),u(i,null,{default:n(()=>[...l[15]||(l[15]=[t("printf()",-1)])]),_:1}),l[19]||(l[19]=t(" that the value ",-1)),u(i,null,{default:n(()=>[...l[16]||(l[16]=[t("25",-1)])]),_:1}),l[20]||(l[20]=t(" should be displayed as an integer. ",-1)),u(f,{output:"25"})]),_:1}),u(r,null,{default:n(()=>[...l[21]||(l[21]=[t("Integer Values: %d",-1)])]),_:1}),u(s,null,{default:n(()=>[l[23]||(l[23]=t(" The ",-1)),u(i,null,{default:n(()=>[...l[22]||(l[22]=[t("%d",-1)])]),_:1}),l[24]||(l[24]=t(" format specifier is used to display integer values, such as whole numbers. ",-1)),u(o,{code:T,language:"c"}),l[25]||(l[25]=t(" Output ",-1)),u(f,{output:"25"})]),_:1}),u(s,null,{default:n(()=>[l[29]||(l[29]=t(" Integer values do not contain a decimal part. Examples include ",-1)),u(i,null,{default:n(()=>[...l[26]||(l[26]=[t("10",-1)])]),_:1}),l[30]||(l[30]=t(" , ",-1)),u(i,null,{default:n(()=>[...l[27]||(l[27]=[t("25",-1)])]),_:1}),l[31]||(l[31]=t(" , and ",-1)),u(i,null,{default:n(()=>[...l[28]||(l[28]=[t("-7",-1)])]),_:1}),l[32]||(l[32]=t(" . ",-1))]),_:1}),u(r,null,{default:n(()=>[...l[33]||(l[33]=[t("Floating-Point Values: %f",-1)])]),_:1}),u(s,null,{default:n(()=>[l[35]||(l[35]=t(" The ",-1)),u(i,null,{default:n(()=>[...l[34]||(l[34]=[t("%f",-1)])]),_:1}),l[36]||(l[36]=t(" format specifier is used to display floating-point values, which can contain a decimal part. ",-1)),u(o,{code:O,language:"c"}),l[37]||(l[37]=t(" Output ",-1)),u(f,{output:"3.140000"})]),_:1}),u(s,null,{default:n(()=>[l[39]||(l[39]=t(" By default, ",-1)),u(i,null,{default:n(()=>[...l[38]||(l[38]=[t("%f",-1)])]),_:1}),l[40]||(l[40]=t(" displays six digits after the decimal point. ",-1))]),_:1}),u(r,null,{default:n(()=>[...l[41]||(l[41]=[t("Controlling Decimal Places",-1)])]),_:1}),u(s,null,{default:n(()=>[l[43]||(l[43]=t(" We can control the number of digits displayed after the decimal point by placing a precision value between the percent sign and ",-1)),u(i,null,{default:n(()=>[...l[42]||(l[42]=[t("f",-1)])]),_:1}),l[44]||(l[44]=t(" . ",-1)),u(o,{code:C,language:"c"}),l[45]||(l[45]=t(" Output ",-1)),u(f,{output:"3.14"})]),_:1}),u(s,null,{default:n(()=>[l[49]||(l[49]=t(" In ",-1)),u(i,null,{default:n(()=>[...l[46]||(l[46]=[t("%.2f",-1)])]),_:1}),l[50]||(l[50]=t(" , the ",-1)),u(i,null,{default:n(()=>[...l[47]||(l[47]=[t(".2",-1)])]),_:1}),l[51]||(l[51]=t(" tells ",-1)),u(i,null,{default:n(()=>[...l[48]||(l[48]=[t("printf()",-1)])]),_:1}),l[52]||(l[52]=t(" to display two digits after the decimal point. ",-1))]),_:1}),u(r,null,{default:n(()=>[...l[53]||(l[53]=[t("Character Values: %c",-1)])]),_:1}),u(s,null,{default:n(()=>[l[55]||(l[55]=t(" The ",-1)),u(i,null,{default:n(()=>[...l[54]||(l[54]=[t("%c",-1)])]),_:1}),l[56]||(l[56]=t(" format specifier is used to display a single character. ",-1)),u(o,{code:A,language:"c"}),l[57]||(l[57]=t(" Output ",-1)),u(f,{output:"A"})]),_:1}),u(s,null,{default:n(()=>[l[61]||(l[61]=t(" A character is written inside single quotation marks, such as ",-1)),u(i,null,{default:n(()=>[...l[58]||(l[58]=[t("'A'",-1)])]),_:1}),l[62]||(l[62]=t(" , ",-1)),u(i,null,{default:n(()=>[...l[59]||(l[59]=[t("'B'",-1)])]),_:1}),l[63]||(l[63]=t(" , or ",-1)),u(i,null,{default:n(()=>[...l[60]||(l[60]=[t("'7'",-1)])]),_:1}),l[64]||(l[64]=t(" . ",-1))]),_:1}),u(r,null,{default:n(()=>[...l[65]||(l[65]=[t("String Values: %s",-1)])]),_:1}),u(s,null,{default:n(()=>[l[67]||(l[67]=t(" The ",-1)),u(i,null,{default:n(()=>[...l[66]||(l[66]=[t("%s",-1)])]),_:1}),l[68]||(l[68]=t(" format specifier is used to display a string. ",-1)),u(o,{code:S,language:"c"}),l[69]||(l[69]=t(" Output ",-1)),u(f,{output:"Hello, C!"})]),_:1}),u(s,null,{default:n(()=>[...l[70]||(l[70]=[t(" A string is a sequence of characters enclosed in double quotation marks. ",-1)])]),_:1}),u(r,null,{default:n(()=>[...l[71]||(l[71]=[t("Using Multiple Format Specifiers",-1)])]),_:1}),u(s,null,{default:n(()=>[l[73]||(l[73]=t(" A single ",-1)),u(i,null,{default:n(()=>[...l[72]||(l[72]=[t("printf()",-1)])]),_:1}),l[74]||(l[74]=t(" statement can contain multiple format specifiers. The values after the string are matched with the format specifiers from left to right. ",-1)),u(o,{code:F,language:"c"}),l[75]||(l[75]=t(" Output ",-1)),u(f,{output:`Age: 23
Grade: 95.50
Letter: A`})]),_:1}),u(s,null,{default:n(()=>[...l[76]||(l[76]=[t(" The first value is displayed using the first format specifier, the second value uses the second format specifier, and so on. ",-1)])]),_:1}),u(r,null,{default:n(()=>[...l[77]||(l[77]=[t("Combining Text and Values",-1)])]),_:1}),u(s,null,{default:n(()=>[l[78]||(l[78]=t(" Format specifiers can be placed alongside ordinary text to create more meaningful output. ",-1)),u(o,{code:k,language:"c"}),l[79]||(l[79]=t(" Output ",-1)),u(f,{output:"I have 5 apples and 1.50 liters of juice."})]),_:1}),u(s,null,{default:n(()=>[...l[80]||(l[80]=[t(" The text remains unchanged, while the format specifiers determine how the values are displayed. ",-1)])]),_:1}),u(r,null,{default:n(()=>[...l[81]||(l[81]=[t("Common Format Specifiers",-1)])]),_:1}),u(s,null,{default:n(()=>[...l[82]||(l[82]=[t(" Some commonly used format specifiers in C are: ",-1)])]),_:1}),u(s,null,{default:n(()=>[d("ul",b,[d("li",null,[u(i,null,{default:n(()=>[...l[83]||(l[83]=[t("%d",-1)])]),_:1}),l[84]||(l[84]=t(" — integer ",-1))]),d("li",null,[u(i,null,{default:n(()=>[...l[85]||(l[85]=[t("%f",-1)])]),_:1}),l[86]||(l[86]=t(" — floating-point value ",-1))]),d("li",null,[u(i,null,{default:n(()=>[...l[87]||(l[87]=[t("%c",-1)])]),_:1}),l[88]||(l[88]=t(" — single character ",-1))]),d("li",null,[u(i,null,{default:n(()=>[...l[89]||(l[89]=[t("%s",-1)])]),_:1}),l[90]||(l[90]=t(" — string ",-1))])])]),_:1}),u(r,null,{default:n(()=>[...l[91]||(l[91]=[t("Matching the Format Specifier",-1)])]),_:1}),u(s,null,{default:n(()=>[...l[92]||(l[92]=[t(" The format specifier should match the kind of value being displayed. Using the wrong format specifier can produce unexpected output or incorrect results. ",-1)])]),_:1}),u(s,null,{default:n(()=>[l[97]||(l[97]=t(" For example, use ",-1)),u(i,null,{default:n(()=>[...l[93]||(l[93]=[t("%d",-1)])]),_:1}),l[98]||(l[98]=t(" for an integer, ",-1)),u(i,null,{default:n(()=>[...l[94]||(l[94]=[t("%f",-1)])]),_:1}),l[99]||(l[99]=t(" for a floating-point value, ",-1)),u(i,null,{default:n(()=>[...l[95]||(l[95]=[t("%c",-1)])]),_:1}),l[100]||(l[100]=t(" for a character, and ",-1)),u(i,null,{default:n(()=>[...l[96]||(l[96]=[t("%s",-1)])]),_:1}),l[101]||(l[101]=t(" for a string. ",-1))]),_:1}),u(r,null,{default:n(()=>[...l[102]||(l[102]=[t("Summary",-1)])]),_:1}),u(s,null,{default:n(()=>[l[104]||(l[104]=t(" Format specifiers allow ",-1)),u(i,null,{default:n(()=>[...l[103]||(l[103]=[t("printf()",-1)])]),_:1}),l[105]||(l[105]=t(" to display different kinds of values in the appropriate format. ",-1))]),_:1}),u(s,null,{default:n(()=>[l[123]||(l[123]=t(" In this topic, you learned that: ",-1)),d("ul",v,[d("li",null,[l[107]||(l[107]=t(" Format specifiers begin with ",-1)),u(i,null,{default:n(()=>[...l[106]||(l[106]=[t("%",-1)])]),_:1}),l[108]||(l[108]=t(" . ",-1))]),d("li",null,[u(i,null,{default:n(()=>[...l[109]||(l[109]=[t("%d",-1)])]),_:1}),l[110]||(l[110]=t(" displays integers. ",-1))]),d("li",null,[u(i,null,{default:n(()=>[...l[111]||(l[111]=[t("%f",-1)])]),_:1}),l[112]||(l[112]=t(" displays floating-point values. ",-1))]),d("li",null,[u(i,null,{default:n(()=>[...l[113]||(l[113]=[t("%c",-1)])]),_:1}),l[114]||(l[114]=t(" displays a single character. ",-1))]),d("li",null,[u(i,null,{default:n(()=>[...l[115]||(l[115]=[t("%s",-1)])]),_:1}),l[116]||(l[116]=t(" displays a string. ",-1))]),d("li",null,[l[118]||(l[118]=t(" Precision can be used with ",-1)),u(i,null,{default:n(()=>[...l[117]||(l[117]=[t("%f",-1)])]),_:1}),l[119]||(l[119]=t(" to control decimal places. ",-1))]),d("li",null,[l[121]||(l[121]=t(" Multiple format specifiers can be used in one ",-1)),u(i,null,{default:n(()=>[...l[120]||(l[120]=[t("printf()",-1)])]),_:1}),l[122]||(l[122]=t(" statement. ",-1))])])]),_:1}),l[126]||(l[126]=d("br",null,null,-1)),u(m,{to:"/academia/student/classes/c-escape-sequences"})])]),_:1}))}});export{G as default};

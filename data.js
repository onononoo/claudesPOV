// everything the extra tabs show. String.raw keeps backslashes like \n as typed.
const r = String.raw;

// ---------- cheat sheet: [label, code] per language ----------
const CHEATSHEET = {
  python: [
    ["comment", r`# a comment`],
    ["print", r`print("hello")
print("age:", 12)`],
    ["variables", r`name = "kai"
age = 12
pi = 3.14`],
    ["read input", r`name = input("name? ")
age = int(input("age? "))`],
    ["if / else", r`if age >= 18:
    print("adult")
elif age > 12:
    print("teen")
else:
    print("kid")`],
    ["loops", r`for i in range(5):
    print(i)

while x > 0:
    x -= 1`],
    ["function", r`def add(a, b):
    return a + b`],
    ["list", r`nums = [3, 1, 2]
nums.append(4)
print(nums[0], len(nums))`],
    ["dictionary", r`ages = {"kai": 12}
ages["sam"] = 30
for name, age in ages.items():
    print(name, age)`],
  ],
  javascript: [
    ["comment", r`// a comment`],
    ["print", r`console.log("hello");
console.log("age:", 12);`],
    ["variables", r`let name = "kai";   // can change
const age = 12;     // can't change`],
    ["read input", r`const name = prompt("name?");`],
    ["if / else", r`if (age >= 18) {
    console.log("adult");
} else if (age > 12) {
    console.log("teen");
} else {
    console.log("kid");
}`],
    ["loops", r`for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (const n of nums) {
    console.log(n);
}`],
    ["function", r`function add(a, b) {
    return a + b;
}

const double = (x) => x * 2;`],
    ["array", r`const nums = [3, 1, 2];
nums.push(4);
console.log(nums[0], nums.length);`],
    ["object", r`const ages = { kai: 12 };
ages.sam = 30;
console.log(ages.kai);`],
  ],
  html: [
    ["comment", r`<!-- a comment -->`],
    ["page skeleton", r`<!doctype html>
<html>
<head>
    <title>my page</title>
</head>
<body>
</body>
</html>`],
    ["text", r`<h1>big heading</h1>
<h2>smaller heading</h2>
<p>a paragraph with <b>bold</b> and <i>italic</i>.</p>`],
    ["link and image", r`<a href="https://example.com">a link</a>
<img src="cat.jpg" alt="a cat">`],
    ["lists", r`<ul>
    <li>dots</li>
</ul>
<ol>
    <li>numbers</li>
</ol>`],
    ["form bits", r`<input type="text" placeholder="name">
<input type="checkbox"> tick me
<button>click</button>`],
    ["boxes", r`<div class="box">a block</div>
<span class="tag">inline</span>`],
    ["table", r`<table>
    <tr><th>name</th><th>age</th></tr>
    <tr><td>kai</td><td>12</td></tr>
</table>`],
  ],
  css: [
    ["comment", r`/* a comment */`],
    ["selectors", r`p { }          /* every <p> */
.box { }       /* class="box" */
#title { }     /* id="title" */
ul li { }      /* li inside ul */`],
    ["text", r`p {
    color: navy;
    font-size: 18px;
    font-family: sans-serif;
    text-align: center;
}`],
    ["box model", r`.box {
    width: 200px;
    padding: 10px;
    border: 2px solid black;
    margin: 20px auto;
}`],
    ["flexbox", r`.row {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
}`],
    ["grid", r`.gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
}`],
    ["hover", r`button:hover {
    background: yellow;
}`],
    ["small screens", r`@media (max-width: 600px) {
    .row { flex-direction: column; }
}`],
  ],
  php: [
    ["comment", r`// a comment
# also a comment`],
    ["print", r`echo "hello\n";
echo "age: " . 12 . "\n";`],
    ["variables", r`$name = "kai";
$age = 12;
echo "$name is $age\n";`],
    ["read input", r`// in a terminal (not on this site):
$name = trim(fgets(STDIN));`],
    ["if / else", r`if ($age >= 18) {
    echo "adult";
} elseif ($age > 12) {
    echo "teen";
} else {
    echo "kid";
}`],
    ["loops", r`for ($i = 0; $i < 5; $i++) {
    echo $i . "\n";
}

foreach ($nums as $n) {
    echo $n . "\n";
}`],
    ["function", r`function add($a, $b) {
    return $a + $b;
}`],
    ["array", r`$nums = [3, 1, 2];
$nums[] = 4;
echo $nums[0], " ", count($nums);`],
    ["keyed array", r`$ages = ["kai" => 12];
$ages["sam"] = 30;
foreach ($ages as $name => $age) {
    echo "$name: $age\n";
}`],
  ],
  c: [
    ["comment", r`// a comment
/* also a comment */`],
    ["program", r`#include <stdio.h>

int main(void) {
    return 0;
}`],
    ["print", r`printf("hello\n");
printf("%s is %d\n", "kai", 12);`],
    ["variables", r`int age = 12;
double pi = 3.14;
char name[] = "kai";`],
    ["read input", r`int age;
scanf("%d", &age);`],
    ["if / else", r`if (age >= 18) {
    printf("adult\n");
} else if (age > 12) {
    printf("teen\n");
} else {
    printf("kid\n");
}`],
    ["loops", r`for (int i = 0; i < 5; i++) {
    printf("%d\n", i);
}

while (x > 0) {
    x--;
}`],
    ["function", r`int add(int a, int b) {
    return a + b;
}`],
    ["array", r`int nums[] = {3, 1, 2};
int count = sizeof nums / sizeof nums[0];`],
  ],
  cpp: [
    ["comment", r`// a comment`],
    ["program", r`#include <iostream>

int main() {
    return 0;
}`],
    ["print", r`std::cout << "hello" << std::endl;
std::cout << "age: " << 12 << "\n";`],
    ["variables", r`int age = 12;
std::string name = "kai";
auto pi = 3.14;`],
    ["read input", r`std::string name;
std::cin >> name;             // one word
std::getline(std::cin, name); // a whole line`],
    ["if / else", r`if (age >= 18) {
    std::cout << "adult\n";
} else if (age > 12) {
    std::cout << "teen\n";
} else {
    std::cout << "kid\n";
}`],
    ["loops", r`for (int i = 0; i < 5; i++) {
    std::cout << i << "\n";
}

for (int n : nums) {
    std::cout << n << "\n";
}`],
    ["function", r`int add(int a, int b) {
    return a + b;
}`],
    ["vector", r`#include <vector>

std::vector<int> nums = {3, 1, 2};
nums.push_back(4);
std::cout << nums[0] << " " << nums.size();`],
  ],
  csharp: [
    ["comment", r`// a comment`],
    ["print", r`Console.WriteLine("hello");
Console.WriteLine($"age: {age}");`],
    ["variables", r`int age = 12;
string name = "kai";
var pi = 3.14;`],
    ["read input", r`string name = Console.ReadLine();
int age = int.Parse(Console.ReadLine());`],
    ["if / else", r`if (age >= 18) {
    Console.WriteLine("adult");
} else if (age > 12) {
    Console.WriteLine("teen");
} else {
    Console.WriteLine("kid");
}`],
    ["loops", r`for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

foreach (var n in nums) {
    Console.WriteLine(n);
}`],
    ["function", r`static int Add(int a, int b) {
    return a + b;
}`],
    ["list", r`using System.Collections.Generic;

var nums = new List<int> { 3, 1, 2 };
nums.Add(4);
Console.WriteLine(nums[0] + " " + nums.Count);`],
  ],
  holyc: [
    ["comment", r`// a comment`],
    ["types", r`U0     // nothing, like void
I64    // 64-bit whole number
U8     // one byte
F64    // decimal number
Bool   // TRUE or FALSE`],
    ["print", r`"hello\n";
"%s is %d\n", "kai", 12;
Print("hello\n");`],
    ["variables", r`I64 age = 12;
F64 pi = 3.14;
U8 *name = "kai";`],
    ["read input", r`U8 *name = GetStr("name? ");
I64 age = GetI64("age? ");`],
    ["if / else", r`if (age >= 18)
    "adult\n";
else
    "kid\n";`],
    ["loops", r`I64 i;
for (i = 0; i < 5; i++)
    "%d\n", i;`],
    ["function", r`I64 Add(I64 a, I64 b)
{
    return a + b;
}

U0 Hi()
{
    "hi\n";
}

Hi; // no-argument calls can skip the ()`],
    ["array", r`I64 nums[3] = {3, 1, 2};`],
  ],
  rust: [
    ["comment", r`// a comment`],
    ["print", r`println!("hello");
println!("{} is {}", name, age);`],
    ["variables", r`let age = 12;       // can't change
let mut score = 0;  // can change
let name = "kai";`],
    ["read input", r`let mut line = String::new();
std::io::stdin().read_line(&mut line).unwrap();
let age: i32 = line.trim().parse().unwrap();`],
    ["if / else", r`if age >= 18 {
    println!("adult");
} else if age > 12 {
    println!("teen");
} else {
    println!("kid");
}`],
    ["loops", r`for i in 0..5 {
    println!("{}", i);
}

while x > 0 {
    x -= 1;
}`],
    ["function", r`fn add(a: i32, b: i32) -> i32 {
    a + b
}`],
    ["vector", r`let mut nums = vec![3, 1, 2];
nums.push(4);
println!("{} {}", nums[0], nums.len());`],
  ],
  go: [
    ["comment", r`// a comment`],
    ["program", r`package main

import "fmt"

func main() {
}`],
    ["print", r`fmt.Println("hello")
fmt.Printf("%s is %d\n", name, age)`],
    ["variables", r`age := 12
var name string = "kai"`],
    ["read input", r`var name string
fmt.Scan(&name)`],
    ["if / else", r`if age >= 18 {
    fmt.Println("adult")
} else if age > 12 {
    fmt.Println("teen")
} else {
    fmt.Println("kid")
}`],
    ["loops", r`for i := 0; i < 5; i++ {
    fmt.Println(i)
}

for x > 0 { // go's while loop
    x--
}`],
    ["function", r`func add(a int, b int) int {
    return a + b
}`],
    ["slice", r`nums := []int{3, 1, 2}
nums = append(nums, 4)
fmt.Println(nums[0], len(nums))`],
  ],
  java: [
    ["comment", r`// a comment`],
    ["program", r`class Main {
    public static void main(String[] args) {
    }
}`],
    ["print", r`System.out.println("hello");
System.out.println("age: " + 12);`],
    ["variables", r`int age = 12;
String name = "kai";
var pi = 3.14;`],
    ["read input", r`import java.util.Scanner;

Scanner in = new Scanner(System.in);
String name = in.nextLine();
int age = in.nextInt();`],
    ["if / else", r`if (age >= 18) {
    System.out.println("adult");
} else if (age > 12) {
    System.out.println("teen");
} else {
    System.out.println("kid");
}`],
    ["loops", r`for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

for (int n : nums) {
    System.out.println(n);
}`],
    ["function", r`static int add(int a, int b) {
    return a + b;
}`],
    ["list", r`import java.util.ArrayList;

ArrayList<Integer> nums = new ArrayList<>();
nums.add(3);
System.out.println(nums.get(0) + " " + nums.size());`],
  ],
  kotlin: [
    ["comment", r`// a comment`],
    ["print", r`println("hello")
println("$name is $age")`],
    ["variables", r`val age = 12    // can't change
var score = 0   // can change`],
    ["read input", r`val name = readln()
val age = readln().toInt()`],
    ["if / else", r`if (age >= 18) {
    println("adult")
} else if (age > 12) {
    println("teen")
} else {
    println("kid")
}`],
    ["loops", r`for (i in 0 until 5) {
    println(i)
}

while (x > 0) {
    x--
}`],
    ["function", r`fun add(a: Int, b: Int): Int {
    return a + b
}`],
    ["list", r`val nums = mutableListOf(3, 1, 2)
nums.add(4)
println(nums[0])
println(nums.size)`],
  ],
  swift: [
    ["comment", r`// a comment`],
    ["print", r`print("hello")
print("\(name) is \(age)")`],
    ["variables", r`let age = 12    // can't change
var score = 0   // can change`],
    ["read input", r`let name = readLine() ?? ""
let age = Int(readLine() ?? "") ?? 0`],
    ["if / else", r`if age >= 18 {
    print("adult")
} else if age > 12 {
    print("teen")
} else {
    print("kid")
}`],
    ["loops", r`for i in 0..<5 {
    print(i)
}

while x > 0 {
    x -= 1
}`],
    ["function", r`func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}`],
    ["array", r`var nums = [3, 1, 2]
nums.append(4)
print(nums[0], nums.count)`],
  ],
  ruby: [
    ["comment", r`# a comment`],
    ["print", r`puts "hello"
puts "#{name} is #{age}"`],
    ["variables", r`name = "kai"
age = 12`],
    ["read input", r`name = gets.chomp
age = gets.to_i`],
    ["if / else", r`if age >= 18
  puts "adult"
elsif age > 12
  puts "teen"
else
  puts "kid"
end`],
    ["loops", r`5.times do |i|
  puts i
end

nums.each { |n| puts n }`],
    ["function", r`def add(a, b)
  a + b
end`],
    ["array", r`nums = [3, 1, 2]
nums << 4
puts nums[0], nums.length`],
    ["hash", r`ages = { "kai" => 12 }
ages["sam"] = 30`],
  ],
  lua: [
    ["comment", r`-- a comment`],
    ["print", r`print("hello")
print(name .. " is " .. age)`],
    ["variables", r`local name = "kai"
local age = 12`],
    ["read input", r`local name = io.read()
local age = io.read("n")`],
    ["if / else", r`if age >= 18 then
  print("adult")
elseif age > 12 then
  print("teen")
else
  print("kid")
end`],
    ["loops", r`for i = 1, 5 do
  print(i)
end

while x > 0 do
  x = x - 1
end`],
    ["function", r`local function add(a, b)
  return a + b
end`],
    ["table", r`local nums = {3, 1, 2}  -- counts from 1, not 0
table.insert(nums, 4)
print(nums[1], #nums)`],
  ],
};

// ---------- quiz ----------
const QUIZ = [
  { lang: "python", code: r`print(3 * "ab")`, choices: ["ababab", "3ab", "an error", "ab ab ab"], answer: 0,
    why: "multiplying a string by a number repeats it." },
  { lang: "javascript", code: r`console.log(0.1 + 0.2 === 0.3);`, choices: ["true", "false", "0.3", "an error"], answer: 1,
    why: "0.1 + 0.2 is really 0.30000000000000004. decimals are stored in binary and don't come out exact." },
  { lang: "javascript", code: r`console.log("5" + 3);
console.log("5" - 3);`, choices: ["8, then 2", "53, then 2", "53, then 53", "an error"], answer: 1,
    why: "+ with a string glues text together. - only works on numbers, so the string gets turned into one." },
  { lang: "python", code: r`print(7 // 2, 7 % 2)`, choices: ["3.5 1", "3 1", "3 0.5", "4 1"], answer: 1,
    why: "// divides and throws away the remainder. % gives just the remainder." },
  { lang: "c", code: r`int x = 5 / 2;
printf("%d\n", x);`, choices: ["2", "2.5", "3", "0"], answer: 0,
    why: "dividing two whole numbers gives a whole number. the .5 is dropped, not rounded." },
  { lang: "python", code: r`a = [1, 2, 3]
b = a
b.append(4)
print(len(a))`, choices: ["3", "4", "an error", "0"], answer: 1,
    why: "b = a doesn't copy the list. both names point at the same list." },
  { lang: "javascript", code: r`console.log(typeof null);`, choices: ["null", "undefined", "object", "an error"], answer: 2,
    why: "a mistake from 1995 that can never be fixed without breaking the internet." },
  { lang: "python", code: r`print(bool(""), bool("0"))`, choices: ["False False", "False True", "True False", "True True"], answer: 1,
    why: "an empty string is false. any string with something in it is true, even \"0\"." },
  { lang: "go", code: r`fmt.Println(len("héllo"))`, choices: ["5", "6", "4", "an error"], answer: 1,
    why: "len counts bytes, not letters. é takes two bytes in utf-8." },
  { lang: "rust", code: r`let x = 5;
let x = x + 1;
println!("{}", x);`, choices: ["5", "6", "an error, x isn't mut", "11"], answer: 1,
    why: "the second let makes a brand new x that hides the old one. that's called shadowing, and it's allowed." },
  { lang: "java", code: r`System.out.println(1 + 2 + "3" + 4 + 5);`, choices: ["15", "12345", "3345", "339"], answer: 2,
    why: "it goes left to right. 1 + 2 is 3, then a string shows up and everything after is glued on as text." },
  { lang: "ruby", code: r`puts [1, 2, 3].map { |n| n * 2 }.sum`, choices: ["6", "12", "[2, 4, 6]", "an error"], answer: 1,
    why: "map doubles each number into [2, 4, 6], then sum adds them up." },
  { lang: "lua", code: r`print(#"hello", 10 / 2)`, choices: ["5   5.0", "5   5", "hello   5", "an error"], answer: 0,
    why: "# gives the length. / always gives a decimal in lua, even when it divides evenly." },
  { lang: "python", code: r`print("hello"[-1])`, choices: ["h", "o", "an error", "nothing"], answer: 1,
    why: "negative indexes count from the end. -1 is the last character." },
  { lang: "javascript", code: r`console.log([10, 1, 3].sort());`, choices: ["[1, 3, 10]", "[1, 10, 3]", "[10, 3, 1]", "an error"], answer: 1,
    why: "sort() compares things as text by default, and \"10\" comes before \"3\" alphabetically." },
  { lang: "c", code: r`printf("%zu\n", sizeof(char));`, choices: ["1", "2", "4", "8"], answer: 0,
    why: "a char is always exactly 1 by definition. every other size is measured in chars." },
  { lang: "php", code: r`echo "10" == "1e1" ? "yes" : "no";`, choices: ["yes", "no", "an error", "10"], answer: 0,
    why: "both strings look like numbers, so == compares them as numbers. 1e1 means 1 x 10." },
  { lang: "css", question: "what colour is the word hi?", code: r`/* <p id="x" class="y">hi</p> */

p  { color: red; }
.y { color: green; }
#x { color: blue; }`, choices: ["red", "green", "blue", "black"], answer: 2,
    why: "an id beats a class, and a class beats a tag name, no matter which comes last." },
  { lang: "python", code: r`x = 10

def f():
    x = 5

f()
print(x)`, choices: ["5", "10", "an error", "None"], answer: 1,
    why: "the x inside f is a separate local variable. the outside x never changes." },
  { lang: "cpp", code: r`std::cout << 7 / 2.0 << std::endl;`, choices: ["3", "3.5", "4", "an error"], answer: 1,
    why: "2.0 is a decimal, so the whole division becomes decimal division." },
  { lang: "javascript", code: r`console.log([] + []);`, choices: ["[]", "an empty line", "0", "an error"], answer: 1,
    why: "both arrays turn into empty strings, and \"\" + \"\" is still \"\"." },
  { lang: "csharp", code: r`Console.WriteLine(10 / 4);`, choices: ["2", "2.5", "3", "2.0"], answer: 0,
    why: "two ints divided give an int. use 10 / 4.0 to get 2.5." },
  { lang: "kotlin", code: r`println("5".toInt() + 3)`, choices: ["53", "8", "an error", "5"], answer: 1,
    why: "toInt() turns the text into a real number first." },
  { lang: "holyc", code: r`"%d\n", 3 + 4;`, choices: ["7", "3 + 4", "nothing", "an error"], answer: 0,
    why: "in holy c, a string on its own line is a print. the values after the comma fill in the %d." },
];

// ---------- glossary ----------
const GLOSSARY = [
  ["variable", "a name that holds a value, like a labelled box. age = 12 puts 12 in a box called age."],
  ["string", "text. anything in quotes, like \"hello\"."],
  ["integer", "a whole number with no decimal point, like 7 or -3."],
  ["float", "a number with a decimal point, like 3.14. short for floating point."],
  ["boolean", "a value that's only ever true or false."],
  ["array / list", "a bunch of values in order, reached by position. the first one is usually at 0."],
  ["index", "the position of something in a list. most languages start counting at 0. lua starts at 1."],
  ["loop", "code that runs again and again, either a set number of times or until something changes."],
  ["condition", "a question the code asks that is either true or false, like age >= 18."],
  ["function", "a named chunk of code you can run whenever you want by calling its name."],
  ["parameter", "a name in a function's definition for a value it will be given. in add(a, b), a and b are parameters."],
  ["argument", "the actual value you hand to a function when you call it. in add(2, 3), 2 and 3 are arguments."],
  ["return", "how a function hands a value back to whoever called it."],
  ["bug", "code that does something other than what you meant. named after a real moth found in a computer in 1947."],
  ["debugging", "finding out why the code does what it does instead of what you wanted."],
  ["syntax", "the grammar rules of a language. a syntax error means the code isn't written in a way the language understands."],
  ["compiler", "a program that turns your code into something the computer can run directly, before it runs."],
  ["interpreter", "a program that reads your code and runs it line by line, with no separate build step."],
  ["stdin / stdout", "standard input and standard output. where a program reads typing from and where it prints to."],
  ["object", "a bundle of related values and functions, like a player with a name, health and a jump()."],
  ["class", "a blueprint for making objects. a Dog class can make lots of dog objects."],
  ["recursion", "a function that calls itself. see: recursion."],
  ["algorithm", "a step by step recipe for solving a problem."],
  ["api", "a list of things one program lets other programs ask it to do."],
  ["library", "code someone else wrote that you can use in your own, so you don't start from nothing."],
  ["framework", "a library that decides the structure of your program for you, and you fill in the gaps."],
  ["git", "a tool that keeps a history of every change to your code so you can go back in time."],
  ["commit", "one saved snapshot of your code in git, with a message saying what changed."],
  ["null", "a value that means \"nothing here\". a common source of crashes."],
  ["off-by-one error", "looping one time too many or one too few. one of the most common bugs there is."],
  ["infinite loop", "a loop whose condition never becomes false, so it never stops."],
  ["refactor", "rewriting code so it's cleaner without changing what it does."],
  ["frontend", "the part of a website or app you see and click."],
  ["backend", "the part that runs on a server: storing data, logging people in, doing the work you don't see."],
  ["html", "the language that describes what's on a web page: headings, paragraphs, links, images."],
  ["css", "the language that describes how a web page looks: colours, sizes, layout."],
  ["rubber duck debugging", "explaining your code, line by line, to a rubber duck. halfway through you usually find the bug yourself."],
  ["spaghetti code", "code so tangled that pulling on one piece moves everything else."],
  ["banana", "a fruit. not code. why are you here."],
  ["soup", "not a programming term. we checked."],
  ["goose", "a bird that has read your code and has notes."],
  ["the duck", "see: rubber duck debugging. also see: the nonsense tab."],
];

// ---------- nonsense ----------
const NONSENSE = {
  lines: [
    "the spoon is compiling.",
    "blorp.",
    "12 12 12 12 12 12 12 12 12 12 12 12",
    "your semicolon has been adopted by geese.",
    "error: the moon.",
    "wednesday is not a number.",
    "hello from inside the banana.",
    "potato.exe has stopped potatoing.",
    "quack (in c++).",
    "if (sock) { sock(); }",
    "all your variables are named steve now.",
    "the loop went home.",
    "404 banana not found.",
    "please do not the code.",
    "i am a function now.",
    "the cheese is recursive.",
    "this page is 12% soup.",
    "while (true) { chimp(); }",
    "nothing happened.",
    "the button is tired.",
    "undefined undefined undefined.",
    "someone ate the brackets.",
    "the compiler is a horse.",
    "banana = banana + banana",
    "hmm.",
    "the pixels are gossiping.",
    "look behind you. no, in the code.",
    "print(\"soup\")",
    "there are 3 ducks in this sentence.",
    "the chimp pressed it first.",
    "tuesday.exe",
    "your code smells like toast.",
    "segmentation fault (core feelings).",
    "ok.",
    "the cursor blinked at you.",
    "0 + 0 = banana",
    "the internet is under the couch.",
    "the tabs are now spaces are now tabs.",
    "a goose has read your code.",
    "beep.",
    "the soup has entered the chat.",
    "this sentence was left intentionally banana.",
    "the button has been pressed. the button is aware.",
    "ceiling.",
    "somebody moved the moon two inches to the left.",
    "404 soup not found.",
    "please remain seated while the page thinks.",
    "the duck says hi.",
    "your mouse is showing.",
    "it's raining noodles in sector 12.",
    "the goose is in the building.",
    "System.out.println(\"why\");",
    "this text is legally a sandwich.",
    "the variables have unionised.",
    "sock detected.",
    "wobble.",
    "the computer would like a snack.",
    "return banana;",
    "your keyboard called. it wants a vacation.",
    "the spoon has left the drawer.",
    "everything is fine. the goose said so.",
    "12.",
    "the pixels have been counted. there are too many.",
    "exit code: soup.",
    "loading... just kidding.",
    "the page just sneezed.",
    "bread.",
    "there's a frog in the footer.",
    "nope.",
    "the monitor is watching you back.",
    "a potato has been compiled successfully.",
    "the loop is doing its best.",
    "someone left the internet running.",
    "your code has been sent to the moon for review.",
    "the chimp approved this message.",
    "quack.exe is running.",
    "null is not a banana.",
    "everything is soup if you believe.",
    "the button went on break. try again.",
    "beep boop, but backwards.",
    "the semicolon is on holiday.",
    "this is not a drill. it's a spoon.",
    "cheese.",
    "the cursor is lost. please return it.",
    "the ducks are organising.",
    "the page has run out of words. here's one anyway: noodle.",
    "try turning the moon off and on again.",
    "tuesday has been deprecated.",
    "the tabs and spaces are getting married.",
    "ok but what if soup.",
    "the toaster knows.",
    "brb, feeding the variables.",
    "there's a bug in this sentence. it's a ladybug.",
    "the goose has taken your seat.",
    "the banana is in the mainframe.",
    "error: too much vibe.",
    "waffles.",
    "hello world, but the world said no.",
    "please stop pressing. (don't stop.)",
    "the chimp is on the phone. with a banana.",
    "the moon would like a word.",
    "this page is best viewed upside down.",
    "sandwich overflow.",
    "the file has been sent to the shadow realm.",
    "all systems banana.",
    "flibbertigibbet.",
    "the frog has left the footer.",
    "your chair is judging you.",
    "the duck has returned. the duck has always been here.",
    "fun fact: that wasn't a fact.",
    "if (you) { press(); }",
    "a noodle has been spotted in production.",
    "nothing to see here. except this.",
    "you found the secret message. it's 'soup'.",
    "the keyboard is full of crumbs and dreams.",
    "the page is now 13% soup. it was 12% earlier.",
    "another one.",
    "the button is proud of you.",
    "banana banana banana banana banana banana banana banana banana banana banana banana",
  ],
  facts: [
    "bananas are 40% wifi.",
    "the moon is legally a tuesday.",
    "every duck is secretly two smaller ducks.",
    "spoons were invented after soup, which was a hard time.",
    "a chimp can hold 12 bananas, or 11 bananas and a phone.",
    "the letter q is afraid of the letter u.",
    "pigeons cannot see the color beige.",
    "python was originally a very long lizard.",
    "if you say 'semicolon' 12 times, a semicolon appears.",
    "there are more socks under your bed than stars in the sky.",
    "toasters dream in bread.",
    "the first computer was a potato with ambition.",
    "clouds are just shy fog.",
    "every time you close a tab, a goose gets its wings.",
    "cheese is a solid form of milk's opinion.",
    "wednesday was added in 1974 as a joke.",
    "the internet weighs about as much as a medium strawberry.",
    "frogs invented the button.",
    "a group of bugs in your code is called a tuesday.",
    "the ocean is 3% soup.",
    "keyboards were originally made for cats.",
    "the number 7 is just a 1 that fell over.",
    "lightbulbs are afraid of the dark, which is why they glow.",
    "most chairs have never been to the beach.",
    "the color blue was discovered by a fish.",
    "rubber ducks can't swim. they just refuse to sink.",
    "your computer can hear you sigh.",
    "pickles are cucumbers that have seen things.",
    "the word 'banana' has 12 letters if you count loudly.",
    "every loop eventually wants to go home.",
    "raccoons invented the trash can and regret nothing.",
    "the sun is a very big lamp nobody turned off.",
    "cats run on javascript.",
    "a potato is a rock that learned to cook.",
    "the moon has never once checked its email.",
    "spaghetti is a long noodle with a short temper.",
    "the @ symbol is a snail that got lost.",
    "all doors are just walls that changed their minds.",
    "birds are only pretending to be far away.",
    "sandwiches were invented by bread that wanted friends.",
    "your mouse cursor gets tired around 3pm.",
    "the letter o is a hole with good posture.",
    "geese have read every book and liked none of them.",
    "the first website was about soup.",
    "pencils are just trees with something to say.",
    "a single grape can power a small idea.",
    "12 is the loudest number.",
    "snails are the fastest animal if you watch them backwards.",
    "the floor is lava on alternate thursdays.",
    "most bugs in code are actually tiny beetles doing their best.",
    "a spoon is a bowl on a stick.",
    "error messages are just the computer journaling.",
    "chimps can smell a missing semicolon.",
    "the dark is just light taking a nap.",
    "every penguin owns one formal outfit.",
    "keyboards have 104 keys and one favourite.",
    "tuesday is shaped like a trapezoid.",
    "fish don't know they're wet, and that's okay.",
    "the moon is 60% cheese and 40% vibes.",
    "somewhere, a duck is thinking about you.",
    "the moon is just the sun's night shift.",
    "toast is bread that has been through something.",
    "ducks have 12 knees but only use 3.",
    "every banana has a middle name.",
    "the letter z is tired of being last.",
    "bees can't spell 'honey' and it upsets them.",
    "the average cloud weighs one grandma.",
    "a sneeze is a tiny vacation for your face.",
    "socks are shoes for shoes.",
    "there is exactly one spoon that knows your secret.",
    "goldfish remember everything and choose to forget.",
    "the sky was green until someone complained.",
    "the letter w is two v's holding hands.",
    "if you drop toast, it lands on whichever side hates you.",
    "all cats are the same cat, rotating very fast.",
    "potatoes have eyes but refuse to look at you.",
    "the ocean is just a very large puddle with confidence.",
    "the number 0 is a donut that got a job.",
    "every wifi signal is a ghost trying to help.",
    "turtles are just rocks with a plan.",
    "dust is the moon's glitter.",
    "frogs are legally allowed to vote on tuesdays.",
    "the first sandwich was two sandwiches.",
    "most mountains are just tall hills who lied.",
    "elbows were invented in 1823.",
    "the word 'soup' is soup spelled wrong.",
    "a chair is a tiny floor for sitting.",
    "pigeons are government-issued.",
    "moths are butterflies that work nights.",
    "a mirror is just a window to a copy of you.",
    "the concept of thursday was invented by a goose.",
    "noodles cannot swim but they try in soup.",
    "the shortest war lasted 38 minutes, and it was between two spoons.",
    "the moon owes the earth 12 dollars.",
    "an apple a day keeps the apples away.",
    "if you hum, your code runs 2% faster.",
    "bread can hear you when you're toasting it.",
    "a cloud once rained upward for a whole afternoon.",
    "there are no fish in the sea, only very wet birds.",
    "your fridge light stays on when the door is closed. it's just shy.",
    "the longest word is 'smiles' because there's a mile between the s's.",
    "horses can't count past 12, and neither can this page.",
    "a lemon is a lime that went to college.",
    "every time you blink, a pixel changes color.",
    "grapes are tiny water balloons for mice.",
    "the letter e is the most popular, and it knows.",
    "a jellyfish is just ocean jelly with anxiety.",
    "ants have tiny meetings about crumbs.",
    "a hat is a roof for one person.",
    "bubbles are just air wearing a coat.",
    "the stars are the sky's freckles.",
    "a cactus is a tree that went to the gym.",
    "the moon has a dog. the dog is also the moon.",
    "shadows are just you, but lazier.",
    "a banana peel is the banana's jacket.",
    "the first computer mouse was a real mouse, and it quit.",
    "blankets are just floor clothing.",
    "octopuses have three hearts and all of them love soup.",
    "the hiccup was invented by a frog on a dare.",
    "a shoe is a boat for a foot.",
    "the internet is stored in a very big shoebox in iceland.",
    "teeth are just bones that went outside.",
    "a duck's quack doesn't echo, because it's too polite.",
    "yawns are the body's loading screen.",
    "the ocean is salty because it cried once.",
    "most pens are filled with the ink of other pens.",
    "rainbows are just the sky showing off.",
    "a pillow is a cloud that retired.",
    "a stapler is a tiny alligator with a job.",
    "lamps are just indoor suns on a budget.",
    "the moon wears sunglasses during the day.",
    "a sneeze travels at the speed of gossip.",
    "trees are just very slow fireworks.",
    "a peanut is neither a pea nor a nut, and it's very confused.",
    "the letter y keeps asking why.",
    "bricks are loaves of bread that gave up.",
    "a fork is a spoon with too many ideas.",
    "ice is water that got cold feet.",
    "a snowman is a cloud that sat down.",
    "the wind is just the planet breathing out.",
    "glue sticks to everything except the inside of the bottle, because it's loyal.",
    "pineapples are neither pines nor apples. nobody told them.",
    "a volcano is a mountain with a cold.",
    "jam is fruit that has been through a lot.",
    "a comma is a period with a tail.",
    "a microwave is a tiny room where food gets a tan.",
    "a snail carries its house because it forgot where it lives.",
    "spiders knit, but only for themselves.",
    "the bottom of the ocean is mostly lost socks.",
    "an egg is a chicken's first draft.",
    "a dictionary has every story ever written, just in the wrong order.",
    "the letter x marks every spot, just very quietly.",
    "a fridge is a winter cupboard.",
    "every car horn is saying 'banana' in its own language.",
    "a banana a day confuses the doctor.",
    "milk is just white juice.",
    "a calculator can't do feelings. it tried once.",
    "the first joke ever told was 'wednesday'.",
    "batteries are tiny lunchboxes of lightning.",
    "a candle is a stick that went to a party.",
    "a sock puppet is a sock with a dream.",
    "the moon has never seen its own back.",
    "a submarine is a boat that dives for coins.",
    "if you stare at a potato for 12 minutes, it stares back.",
    "a sandwich is a salad in a bread coat.",
    "every keyboard has one key that nobody has ever pressed.",
    "the sun rises in the east because it prefers the view.",
    "a question mark is a confused period.",
    "a toaster has more friends than a microwave.",
    "the tooth fairy has a spreadsheet.",
    "buttons were originally just very small doors.",
    "a ladder is a staircase that went on a diet.",
    "somewhere, a spoon is being used as a fork.",
    "a cheese grater is a very angry sponge.",
    "if a tree falls in a forest, it says 'oops'.",
    "most rocks are just waiting.",
    "a flamingo is a chicken in a pink costume.",
    "the snooze button is the most pressed button on earth, after 'press' on this page.",
    "an umbrella is a tiny portable ceiling.",
    "the last digit of pi is 12.",
    "every loaf of bread has one slice that's the boss.",
    "a crumb is a sandwich's ghost.",
  ],
  duck: [
    "quack.",
    "quack?",
    "QUACK.",
    "...",
    "quack quack.",
    "the duck left.",
    "quack. (no.)",
    "kcauq.",
    "quack quack quack quack.",
    "the duck is thinking.",
    "the duck nodded.",
    "quack (sarcastically).",
    "the duck ate your bug.",
    "honk. (wrong bird.)",
    "the duck has no comment.",
    "quack?? QUACK??",
    "the duck agrees with the goose.",
    "quack. (it's always the semicolon.)",
    "the duck fell asleep.",
    "the duck blinked twice.",
    "qu-ack.",
    "the duck wants bread.",
    "the duck says try soup.",
    "🦆",
  ],
  pressLabels: [
    "press",
    "again",
    "press harder",
    "no",
    "one more",
    "why",
    "ok fine",
    "press (gently)",
    "banana",
    "keep going",
    "stop",
    "don't stop",
    "press?",
    "PRESS",
    "boop",
    "soup",
  ],
  statusBits: [
    "(soup)",
    "(banana)",
    "(the duck watched)",
    "(quack)",
    "(ok)",
    "(12)",
    "(wow)",
    "(the goose approves)",
    "(beep)",
  ],
  typing: [
    "banana = banana + banana",
    "while (true) { chimp(); }",
    "if (sock) { sock(); }",
    "print(\"soup\")",
    "return banana;",
    "let duck = \"quack\";",
    "goose.honk(12);",
  ],
  away: [
    "come back",
    "hello?",
    "banana?",
    "quack",
    "12",
    "the soup is getting cold",
    "where did you go",
    "the duck misses you",
    "your code is lonely",
    "psst",
    "hey",
    "we're still here",
    "bread?",
    "the goose took your tab",
    "come back (please)",
    "the chimp is waiting",
  ],
  timeNotes: {
    12: "twelve!",
    30: "soup is ready.",
    42: "the answer.",
    60: "one minute. wow.",
    69: "nice.",
    90: "the duck is proud.",
    120: "two minutes of pure banana.",
    144: "twelve twelves!",
    180: "the goose woke up.",
    240: "still here? cool.",
    300: "five minutes. have some soup.",
    360: "a whole circle.",
    404: "404.",
    420: "the frog says hi.",
    500: "halfway to 1000. probably.",
    600: "drink water.",
    666: "spooky.",
    720: "sixty twelves!",
    777: "jackpot (no prize).",
    900: "fifteen minutes. famous now.",
    1000: "one thousand. unreal.",
    1200: "the duck went home.",
    1337: "leet.",
    1728: "twelve twelve twelves!!",
    1800: "half an hour of nonsense.",
    2400: "the moon is up.",
    3000: "the soup is cold now.",
    3600: "an hour??",
    7200: "two hours. go outside. bring the duck.",
  },
};

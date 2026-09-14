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
];

// ---------- nonsense ----------
const NONSENSE = {
  excuses: [
    "it works on my machine.",
    "a cosmic ray flipped a bit.",
    "the semicolon was decorative.",
    "mercury is in retrograde.",
    "the compiler is having a bad day.",
    "that's not a bug, it's a surprise feature.",
    "the code was fine until someone ran it.",
    "the cat walked on the keyboard. the cat has not apologised.",
    "you're using the wrong kind of whitespace.",
    "the computer can sense fear.",
    "it was working five minutes ago and nothing changed. (something changed.)",
    "the variable was named 'temp' and took that personally.",
    "a chimp is holding a banana to its head and it has something to do with it.",
    "you forgot to turn it off and on again.",
    "the tabs and the spaces are at war again.",
    "there's a missing bracket. it's always a missing bracket.",
    "it's 12 o'clock somewhere, and that's when the bug comes out.",
    "the internet is closed today.",
    "the bug is load-bearing. removing it would break everything else.",
    "someone else touched it. (you, three weeks ago.)",
    "the code is fine. the universe is wrong.",
    "it's not broken, it's just shy.",
    "you ran the old file.",
    "the chimp said it was fine.",
  ],
  errorKinds: ["error", "fatal", "warning", "panic", "oops", "segmentation fault"],
  errorMessages: [
    "banana not found in scope",
    "unexpected vibes on line 12",
    "stack overflow (the website, you've been there too long)",
    "cannot divide by zero, and stop asking",
    "function returned a feeling instead of a value",
    "expected ';' but found sadness",
    "too many open tabs, in your browser and in your head",
    "keyboard not detected, press any key to continue",
    "the variable 'x' has left the building",
    "array index out of bounds, and out of patience",
    "infinite loop detected, see you never",
    "undefined is not a function, and neither am i",
    "the compiler is a teapot",
    "missing chimp at address 0x0000000C",
    "semicolon expected. semicolon disappointed.",
    "too much banana in the call stack",
    "variable declared but never loved",
    "your code has been put in timeout for 12 seconds",
    "the duck refuses to continue",
    "reached end of file while parsing your life choices",
    "type mismatch: expected a number, got a potato",
  ],
  commits: [
    "fix", "fix again", "actually fix", "please work", "revert that", "revert the revert",
    "i don't know why this works", "remove console.log (all 400 of them)", "it's friday", "minor changes (everything)",
    "rename things so they make sense this time", "delete code nobody understood", "add banana",
    "final version", "final version 2", "final version 2 (real)", "trust me", "wip", "oops",
    "make the tests pass by deleting the tests",
    "added a comment explaining the other comment",
    "tabs to spaces. spaces to tabs. tabs to spaces.",
    "the chimp told me to",
    "fixed the fix that fixed the fix",
    "12 bananas",
  ],
  adjectives: ["sleepy", "angry", "tiny", "legacy", "temporary", "forbidden", "haunted", "spicy", "sneaky", "wobbly", "ancient", "shiny", "suspicious", "extra", "confused"],
  nouns: ["banana", "chimp", "potato", "wizard", "spoon", "goblin", "noodle", "toaster", "pigeon", "sock", "pickle", "cactus", "raccoon", "duck", "waffle"],
  suffixes: ["Manager", "Handler", "Factory", "Helper", "Service", "Thing", "Stuff", "Count", "List", "Final", "2", "Temp", "Old", "New"],
  startupThings: ["toasters", "ghosts", "pet rocks", "dogs", "socks", "sandwiches", "grandparents", "houseplants", "left shoes", "spoons", "chimps", "clouds", "rubber ducks", "bananas", "pigeons"],
  startupFormats: [
    "uber, but for {thing}.",
    "{thing}, but on the blockchain.",
    "a social network where you can only post about {thing}.",
    "a subscription box that sends you one of {thing} a month, forever.",
    "an app that rates {thing} out of 12, based purely on vibes.",
    "tinder, but for {thing}.",
    "a smart fridge that only stores {thing}.",
    "a streaming service where every show is about {thing}.",
  ],
  facts: [
    "the first computer bug was a real moth, found stuck inside the harvard mark ii in 1947.",
    "python is named after monty python, not the snake.",
    "javascript was written in about 10 days in 1995.",
    "java was first called oak, after a tree outside its creator's office.",
    "php originally stood for personal home page.",
    "lua means moon in portuguese.",
    "kotlin is named after an island near st. petersburg.",
    "c# was code named cool while it was being made.",
    "the first website ever made is still online at info.cern.ch.",
    "ada lovelace wrote what is often called the first computer program, in the 1840s.",
    "templeos, home of holy c, was written almost entirely by one person, terry davis.",
    "ray tomlinson picked the @ sign for email addresses in 1971.",
    "the word robot comes from a czech play from 1920.",
    "go's gopher mascot was drawn by renée french.",
    "the word bit is short for binary digit.",
    "css was first proposed by håkon wium lie in 1994.",
    "ctrl + alt + delete was created at ibm by david bradley.",
    "ruby was named partly as a nod to perl. pearl, ruby. birthstones.",
    "chimpanzees share roughly 98% of their dna with humans, and 0% of their opinions on tabs vs spaces.",
    "'hello, world' was made famous by the 1978 book the c programming language.",
    "the first .com domain ever registered was symbolics.com, in 1985.",
    "linus torvalds wrote the first version of git in 2005, in a matter of days.",
    "the # symbol is also called an octothorpe.",
    "grace hopper's team built one of the first compilers, the a-0 system, in 1952.",
    "the first computer mouse, shown off in the 1960s, had a wooden shell.",
  ],
  fortunes: [
    "the bug you seek is in the file you didn't open.",
    "a missing bracket will find you soon.",
    "you will name a variable 'data2' and regret it.",
    "your next program will run on the first try. (it won't.)",
    "good things come to those who read the error message.",
    "someone will ask 'did you try restarting it', and they will be right.",
    "the code you write today is the legacy code of tomorrow.",
    "a chimp with a banana knows something you don't.",
    "twelve is your lucky number. use it as an array index at your own risk.",
    "you will google something you already googled last week.",
    "a comment you wrote long ago will make no sense at all.",
    "the tests will pass. do not ask why.",
    "a group of programmers is not officially called 'a merge conflict'. yet.",
    "you will fix it at 2am and not remember how.",
    "the answer was on stack overflow the whole time. the question was from you.",
    "a semicolon you forgot will be forgiven, but not by the compiler.",
    "one day you will understand pointers. not today.",
  ],
  duck: [
    "quack.",
    "quack?",
    "quack quack. (have you checked the line above it?)",
    "...quack. (what did you expect that variable to be?)",
    "quack. (print it out and look.)",
    "QUACK. (is the loop running one time too many?)",
    "quack. (did you save the file?)",
    "the duck stares at you. you know what you did.",
    "quack quack quack. (try explaining that last part again, slower.)",
    "quack. (is it spelled the same in both places?)",
    "the duck has fallen asleep. try again with fewer words.",
    "quack. (read the error message. the whole thing. out loud.)",
    "quack. (what happens if the list is empty?)",
    "quack quack. (have you tried it with just one thing first?)",
    "the duck blinks slowly. it's a typo. it's always a typo.",
    "quack. (you said 'it should' three times. does it, though?)",
  ],
  moods: [
    "today's mood: segfault.", "today's mood: compiling.", "today's mood: 12 bananas.", "today's mood: works on my machine.",
    "today's mood: infinite loop.", "today's mood: missing semicolon.", "today's mood: tabs, not spaces.",
    "today's mood: undefined.", "today's mood: 404.", "today's mood: chimp with a banana phone.",
    "today's mood: off by one.", "today's mood: git push --force (don't).",
    "today's mood: rewriting it in rust.", "today's mood: 12 open tabs.", "today's mood: quack.",
    "today's mood: works in production, not locally.", "today's mood: forgot to save.",
  ],
  awayTitles: [
    "come back, the code misses you",
    "the duck is waiting",
    "your semicolons are lonely",
    "hello? ...quack?",
    "the chimp noticed you left",
    "12 bananas and no you",
  ],
  timeNotes: {
    12: "(twelve. the chimp approves.)",
    30: "(thirty. nice.)",
    60: "(a whole minute. proud of you.)",
    120: "(two minutes. that's a lot of seconds.)",
    300: "(five minutes. written any code yet?)",
    404: "(404 seconds. time not found.)",
    600: "(ten minutes. drink some water.)",
    1000: "(four digits!)",
    1200: "(twenty minutes. the duck is asleep.)",
    1800: "(half an hour. this is a lifestyle now.)",
    3600: "(an hour. the duck has concerns.)",
    7200: "(two hours. go outside. the code will wait.)",
  },
  rateRemarks: [
    "good use of letters.",
    "the indentation has a strong personality.",
    "would compile in a parallel universe.",
    "reads like a mystery novel. nobody knows who did it.",
    "the chimp nodded once.",
    "too many vowels.",
    "not enough bananas.",
    "the duck is impressed and a little scared.",
    "this code has seen things.",
    "certified 'works on my machine'.",
    "the brackets are holding hands. adorable.",
    "a senior developer would sigh, but in a respectful way.",
  ],
  eightBall: [
    "ship it.",
    "rewrite it in rust.",
    "ask the duck.",
    "not on a friday.",
    "yes, but add a comment this time.",
    "absolutely not.",
    "turn it off and on again first.",
    "outlook good. tests: not so much.",
    "reply hazy. print more things and try again.",
    "only if you write a test first.",
    "the chimp says yes.",
    "do it, but commit first so you can undo your regret.",
  ],
  langStarts: ["Bana", "Quack", "Spaghe", "Chimp", "Nul", "Sock", "Gob", "Twelv", "Wob", "Pickl", "Noodl", "Toast"],
  langEnds: ["lang", "script", "++", "#", "ly", "sharp", "o", "ium", "C", "py", "ust", "ML"],
  langReal: ["python", "c", "javascript", "rust", "html", "lua", "go", "java", "holy c", "php"],
  langTwists: [
    "every line has to rhyme",
    "all variables must be named after fruit",
    "semicolons are replaced with the word banana",
    "it only runs on tuesdays",
    "the compiler asks how your day was first",
    "arrays start at 12",
    "indentation is done with emoji",
    "every error message is a haiku",
    "you have to say please before each function call",
    "loops run one extra time for luck",
    "comments run and the code is ignored",
    "true and false swap every hour",
  ],
};

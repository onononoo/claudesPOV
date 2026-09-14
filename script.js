// languages: how each one is highlighted and how it runs
const LANGS = {
  python: { name: "python", prism: "python", run: "python",
    start: 'name = input("what is your name? ")\nprint("hello,", name)\n' },
  javascript: { name: "javascript", prism: "javascript", run: "js",
    start: 'const name = "world";\nconsole.log(`hello, ${name}`);\n' },
  html: { name: "html", prism: "markup", run: "html",
    start: '<!doctype html>\n<html>\n<head>\n    <title>my page</title>\n</head>\n<body>\n    <h1>hello</h1>\n    <p>edit me.</p>\n</body>\n</html>\n' },
  css: { name: "css", prism: "css", run: "css",
    start: '/* this styles a small sample page:\n   h1, p, a, ul, li, button, input and .box */\n\nbody {\n    font-family: sans-serif;\n    padding: 20px;\n}\n\n.box {\n    background: lightyellow;\n    padding: 10px;\n}\n' },
  php: { name: "php", prism: "php", run: "php",
    start: '<?php\n$name = "world";\necho "hello, $name\\n";\n' },
  c: { name: "c", prism: "c", run: "ce", ce: "c",
    start: '#include <stdio.h>\n\nint main(void) {\n    printf("hello, world\\n");\n    return 0;\n}\n' },
  cpp: { name: "c++", prism: "cpp", run: "ce", ce: "c++",
    start: '#include <iostream>\n\nint main() {\n    std::cout << "hello, world\\n";\n    return 0;\n}\n' },
  csharp: { name: "c#", prism: "csharp", run: "ce", ce: "csharp",
    start: 'using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("hello, world");\n    }\n}\n' },
  holyc: { name: "holy c", prism: "holyc", run: "none",
    start: 'U0 Hello()\n{\n    "hello, world\\n";\n}\n\nHello;\n' },
  rust: { name: "rust", prism: "rust", run: "ce", ce: "rust",
    start: 'fn main() {\n    println!("hello, world");\n}\n' },
  go: { name: "go", prism: "go", run: "ce", ce: "go",
    start: 'package main\n\nimport "fmt"\n\nfunc main() {\n    fmt.Println("hello, world")\n}\n' },
  java: { name: "java", prism: "java", run: "ce", ce: "java",
    start: 'class Main {\n    public static void main(String[] args) {\n        System.out.println("hello, world");\n    }\n}\n' },
  kotlin: { name: "kotlin", prism: "kotlin", run: "ce", ce: "kotlin",
    start: 'fun main() {\n    println("hello, world")\n}\n' },
  swift: { name: "swift", prism: "swift", run: "ce", ce: "swift",
    start: 'print("hello, world")\n' },
  ruby: { name: "ruby", prism: "ruby", run: "ce", ce: "ruby",
    start: 'name = "world"\nputs "hello, #{name}"\n' },
  lua: { name: "lua", prism: "lua", run: "ce", ce: "lua",
    start: 'local name = "world"\nprint("hello, " .. name)\n' },
};

// holy c is close enough to c to borrow its grammar, plus its own types
Prism.languages.holyc = Prism.languages.extend("c", {});
Prism.languages.insertBefore("holyc", "keyword", {
  "class-name": /\b(?:U0|I0|U8|I8|U16|I16|U32|I32|U64|I64|F64|Bool|CDate|CTask)\b/,
  keyword: /\b(?:class|union|public|extern|_extern|import|_import|lastclass|lock|try|catch|throw|no_warn|reg|noreg|interrupt|haserrcode|argpop|noargpop|asm|goto|if|else|while|for|do|switch|case|default|break|return|sizeof|offset|start|end|static|const)\b/,
});

const $ = (id) => document.getElementById(id);
const langSel = $("lang"), codeEl = $("codeInput"), hl = $("hl"), pre = hl.parentElement;
const out = $("output"), frame = $("frame"), statusEl = $("status");

const codeByLang = {};
let lang = "python";
let promptIndex = -1;

// ---------- setup ----------
for (const [id, l] of Object.entries(LANGS)) {
  langSel.add(new Option(l.name, id));
}
langSel.value = lang;
codeEl.value = LANGS[lang].start;
highlight();
newPrompt();
showOutputFor(lang);

langSel.addEventListener("change", () => setLanguage(langSel.value));

// used by the other tabs too
function setLanguage(id, code) {
  codeByLang[lang] = codeEl.value;
  lang = langSel.value = id;
  codeEl.value = code ?? codeByLang[lang] ?? LANGS[lang].start;
  codeEl.scrollTop = codeEl.scrollLeft = 0;
  highlight();
  showOutputFor(lang);
}

function usePrompt(i) {
  promptIndex = i;
  $("prompt").textContent = PROMPTS[i];
}

$("newPrompt").addEventListener("click", newPrompt);
$("run").addEventListener("click", run);
$("reset").addEventListener("click", () => {
  if (codeEl.value !== LANGS[lang].start && !confirm("clear your code and start over?")) return;
  codeEl.value = LANGS[lang].start;
  highlight();
});

function newPrompt() {
  let i;
  do { i = Math.floor(Math.random() * PROMPTS.length); } while (i === promptIndex && PROMPTS.length > 1);
  usePrompt(i);
}

// ---------- editor ----------
function highlight() {
  const l = LANGS[lang];
  // trailing space keeps the last empty line the same height as the textarea's
  const text = codeEl.value + " ";
  hl.innerHTML = Prism.highlight(text, Prism.languages[l.prism], l.prism);
  syncScroll();
}

function syncScroll() {
  pre.scrollTop = codeEl.scrollTop;
  pre.scrollLeft = codeEl.scrollLeft;
}

function insert(text) {
  codeEl.focus();
  // execCommand keeps ctrl+z working; setRangeText is the fallback
  if (!document.execCommand("insertText", false, text)) {
    codeEl.setRangeText(text, codeEl.selectionStart, codeEl.selectionEnd, "end");
    highlight();
  }
}

codeEl.addEventListener("input", highlight);
codeEl.addEventListener("scroll", syncScroll);
codeEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    run();
  } else if (e.key === "Tab" && !e.shiftKey) {
    e.preventDefault();
    insert("    ");
  } else if (e.key === "Enter") {
    e.preventDefault();
    const before = codeEl.value.slice(0, codeEl.selectionStart);
    const line = before.slice(before.lastIndexOf("\n") + 1);
    let indent = line.match(/^[ \t]*/)[0];
    if (/[{:\[(]\s*$/.test(line)) indent += "    ";
    insert("\n" + indent);
  }
});

// ---------- output ----------
function showOutputFor(id) {
  const visual = LANGS[id].run === "html" || LANGS[id].run === "css";
  frame.hidden = !visual;
  out.hidden = visual;
  $("stdinRow").hidden = visual || LANGS[id].run === "none";
  out.textContent = "";
  statusEl.textContent = "";
}

function print(text, cls) {
  const span = document.createElement("span");
  if (cls) span.className = cls;
  span.textContent = text.endsWith("\n") ? text : text + "\n";
  out.appendChild(span);
  out.scrollTop = out.scrollHeight;
}

const stripAnsi = (s) => s.replace(/\x1b\[[0-9;]*[A-Za-z]/g, "");

// ---------- running ----------
let running = false;

async function run() {
  if (running) return;
  const l = LANGS[lang];
  const code = codeEl.value;
  const stdin = $("stdin").value;

  running = true;
  $("run").disabled = true;
  out.textContent = "";
  statusEl.textContent = "running...";
  const started = performance.now();

  try {
    if (l.run === "html") frame.srcdoc = code;
    else if (l.run === "css") frame.srcdoc = cssSample(code);
    else if (l.run === "js") await runJs(code);
    else if (l.run === "python") await runPython(code, stdin);
    else if (l.run === "php") await runPhp(code);
    else if (l.run === "ce") await runCompilerExplorer(l, code, stdin);
    else print("holy c only runs inside templeos, so it can't be run here. write it here, run it there.", "note");
    if (l.run !== "none" && l.run !== "html" && l.run !== "css" && !out.textContent) print("(no output)", "note");
  } catch (err) {
    print(String(err && err.message ? err.message : err), "err");
  } finally {
    running = false;
    $("run").disabled = false;
    statusEl.textContent = l.run === "none" ? "" : `done in ${((performance.now() - started) / 1000).toFixed(2)}s`;
  }
}

function cssSample(css) {
  return `<!doctype html><html><head><style>${css}</style></head><body>
<h1>a heading</h1>
<p>a paragraph with <a href="#">a link</a> inside it.</p>
<ul><li>first item</li><li>second item</li><li>third item</li></ul>
<div class="box">a div with class="box"</div>
<p><input placeholder="an input"> <button>a button</button></p>
</body></html>`;
}

async function runJs(code) {
  const show = (v) => typeof v === "string" ? v : (() => { try { return JSON.stringify(v); } catch { return String(v); } })();
  const fakeConsole = {
    log: (...a) => print(a.map(show).join(" ")),
    info: (...a) => print(a.map(show).join(" ")),
    warn: (...a) => print(a.map(show).join(" "), "err"),
    error: (...a) => print(a.map(show).join(" "), "err"),
  };
  const AsyncFunction = (async () => {}).constructor;
  try {
    await new AsyncFunction("console", code)(fakeConsole);
  } catch (err) {
    print(String(err), "err");
  }
}

let pyodide;
async function runPython(code, stdin) {
  if (!pyodide) {
    statusEl.textContent = "loading python (only the first time)...";
    await loadScript("https://cdn.jsdelivr.net/pyodide/v314.0.6/full/pyodide.js");
    pyodide = await loadPyodide();
    statusEl.textContent = "running...";
  }
  const lines = stdin ? stdin.split("\n") : [];
  let i = 0;
  pyodide.setStdin({ stdin: () => (i < lines.length ? lines[i++] : null) });
  pyodide.setStdout({ batched: (s) => print(s) });
  pyodide.setStderr({ batched: (s) => print(s, "err") });
  const globals = pyodide.globals.get("dict")();
  try {
    await pyodide.runPythonAsync(code, { globals });
  } catch (err) {
    // keep only the part of the traceback that points at the user's code
    const msg = String(err.message);
    const at = msg.indexOf('File "<exec>"');
    print(at >= 0 ? "Traceback (most recent call last):\n  " + msg.slice(at) : msg, "err");
  } finally {
    globals.destroy();
  }
}

let php;
async function runPhp(code) {
  if (!php) {
    statusEl.textContent = "loading php (only the first time)...";
    const { PhpWeb } = await import("https://cdn.jsdelivr.net/npm/php-wasm@0.1.0/PhpWeb.mjs");
    php = new PhpWeb();
    php.addEventListener("output", (e) => print(e.detail.join ? e.detail.join("") : String(e.detail)));
    php.addEventListener("error", (e) => print(e.detail.join ? e.detail.join("") : String(e.detail), "err"));
    statusEl.textContent = "running...";
  }
  await php.run(code);
  await php.refresh?.();
}

let ceDefaults;
async function runCompilerExplorer(l, code, stdin) {
  if (!ceDefaults) {
    const res = await fetch("https://godbolt.org/api/languages?fields=id,defaultCompiler", { headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error("couldn't reach godbolt.org. check your connection and try again.");
    ceDefaults = Object.fromEntries((await res.json()).map((x) => [x.id, x.defaultCompiler]));
  }
  // java files there are not named after the class, so a public class won't compile
  if (l.ce === "java") code = code.replace(/\bpublic\s+((?:final\s+|abstract\s+)*)class\b/g, "$1class");

  const res = await fetch(`https://godbolt.org/api/compiler/${encodeURIComponent(ceDefaults[l.ce])}/compile`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      source: code,
      options: {
        userArguments: "",
        executeParameters: { args: [], stdin },
        compilerOptions: { executorRequest: true },
        filters: { execute: true },
      },
      allowStoreCodeDebug: false,
    }),
  });
  if (res.status === 429) throw new Error("too many runs in a short time. wait a moment and try again.");
  if (!res.ok) throw new Error(`the compiler didn't answer (error ${res.status}). try again in a moment.`);
  const r = await res.json();

  const text = (lines) => stripAnsi((lines || []).map((x) => x.text).join("\n"))
    .split("\n").filter((s) => !/jansi|native library/i.test(s)).join("\n").trim();
  const build = r.buildResult || {};

  if (!r.didExecute) {
    const errors = [text(build.stdout), text(build.stderr), text(r.stdout), text(r.stderr)].filter(Boolean).join("\n");
    print(errors || "it didn't compile.", "err");
    return;
  }
  if (text(r.stdout)) print(text(r.stdout));
  if (text(r.stderr)) print(text(r.stderr), "err");
  if (r.timedOut) print("stopped: it ran too long.", "err");
  else if (r.code) print(`exited with code ${r.code}`, "note");
}

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = resolve;
    s.onerror = () => reject(new Error("couldn't load " + src.split("/")[2] + ". check your connection."));
    document.head.appendChild(s);
  });
}

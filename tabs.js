const pick = (list) => list[Math.floor(Math.random() * list.length)];
const shuffle = (list) => list.map((v) => [Math.random(), v]).sort((a, b) => a[0] - b[0]).map((x) => x[1]);
const hi = (code, id) => Prism.highlight(code, Prism.languages[LANGS[id].prism], LANGS[id].prism);

// ---------- tabs ----------
const TABS = [...document.querySelectorAll("section[data-tab]")].map((s) => s.dataset.tab);

function showTab() {
  const name = TABS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "code";
  for (const s of document.querySelectorAll("section[data-tab]")) s.hidden = s.dataset.tab !== name;
  for (const a of document.querySelectorAll("#tabs a")) a.classList.toggle("on", a.getAttribute("href") === "#" + name);
  if (name === "typing" && !typing.target) newSnippet();
  if (name === "quiz" && quiz.current === null) nextQuestion();
}
window.addEventListener("hashchange", showTab);

function goToEditor() {
  location.hash = "#code";
  window.scrollTo(0, 0);
}

// ---------- nonsense sprinkled everywhere ----------
const arrived = Date.now();
setInterval(() => {
  const seconds = Math.floor((Date.now() - arrived) / 1000);
  $("timeOnPage").textContent = seconds;
  // each milestone note hangs around for 5 seconds
  const milestone = Object.keys(NONSENSE.timeNotes).map(Number).filter((m) => m <= seconds && seconds - m < 5).pop();
  $("timeNote").textContent = milestone ? NONSENSE.timeNotes[milestone] : "";
}, 250);

document.addEventListener("visibilitychange", () => {
  document.title = document.hidden ? pick(NONSENSE.away) : "claudesPOV";
});

$("copyBtc").addEventListener("click", async () => {
  const button = $("copyBtc");
  try {
    await navigator.clipboard.writeText($("btc").textContent);
    button.textContent = "copied!";
  } catch {
    getSelection().selectAllChildren($("btc"));
    button.textContent = "press ctrl + c";
  }
  setTimeout(() => (button.textContent = "copy"), 1500);
});
$("ticker").textContent = shuffle(NONSENSE.lines).join("   ");

let typedTail = "", bananas = 0;
document.addEventListener("keydown", (e) => {
  if (e.key.length !== 1) return;
  typedTail = (typedTail + e.key.toLowerCase()).slice(-6);
  if (typedTail !== "banana") return;
  typedTail = "";
  $("bananaCount").textContent = ++bananas;
  const logo = $("logo");
  logo.classList.toggle("spin");
  if (bananas === 12) alert("12 bananas");
});

// ---------- prompts ----------
{
  let n = 0;
  const box = $("promptGroups");
  for (const [group, list] of Object.entries(PROMPT_GROUPS)) {
    const h = document.createElement("h3");
    h.textContent = group.replaceAll("_", " ") + ` (${list.length})`;
    const ol = document.createElement("ol");
    ol.className = "promptList";
    ol.start = n + 1;
    for (const text of list) {
      const i = n++;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#code";
      a.textContent = text;
      a.addEventListener("click", (e) => { e.preventDefault(); usePrompt(i); goToEditor(); });
      li.appendChild(a);
      ol.appendChild(li);
    }
    box.append(h, ol);
  }
  $("randomPrompt").addEventListener("click", () => { newPrompt(); goToEditor(); });
}

// ---------- cheat sheet ----------
const sheetLang = $("sheetLang");
for (const id of Object.keys(CHEATSHEET)) sheetLang.add(new Option(LANGS[id].name, id));

function renderSheet() {
  const id = sheetLang.value;
  const table = $("sheet");
  table.innerHTML = "";
  for (const [label, code] of CHEATSHEET[id]) {
    const row = table.insertRow();
    row.insertCell().textContent = label;
    const pre = document.createElement("pre");
    pre.innerHTML = hi(code, id);
    row.insertCell().appendChild(pre);
  }
}
sheetLang.addEventListener("change", renderSheet);
$("sheetOpen").addEventListener("click", () => { setLanguage(sheetLang.value); goToEditor(); });
renderSheet();

// ---------- typing ----------
const typing = { target: "", lang: "", start: 0 };
const typeBox = $("typeBox");

function newSnippet() {
  const pool = [];
  for (const [id, rows] of Object.entries(CHEATSHEET)) {
    for (const [label, code] of rows) {
      if (label !== "comment" && label !== "types" && code.length <= 160) pool.push([id, code]);
    }
  }
  let next;
  do { next = pick(pool); } while (next[1] === typing.target && pool.length > 1);
  [typing.lang, typing.target] = next;
  typing.start = 0;
  typeBox.value = "";
  typeBox.disabled = false;
  $("typeLang").textContent = "(" + LANGS[typing.lang].name + ")";
  $("typeStats").textContent = "";
  renderTyping();
}

function renderTyping() {
  const typed = typeBox.value, target = typing.target;
  const pre = $("typeTarget");
  pre.innerHTML = "";
  for (let i = 0; i < target.length; i++) {
    const span = document.createElement("span");
    span.textContent = target[i];
    if (i < typed.length) span.className = typed[i] === target[i] ? "good" : "bad";
    else if (i === typed.length) span.className = "cursor";
    pre.appendChild(span);
  }
}

typeBox.addEventListener("keydown", (e) => {
  if (e.key === "Tab") {
    e.preventDefault();
    typeBox.setRangeText("    ", typeBox.selectionStart, typeBox.selectionEnd, "end");
    typeBox.dispatchEvent(new Event("input"));
  }
});

typeBox.addEventListener("input", () => {
  if (!typing.start) typing.start = performance.now();
  const typed = typeBox.value.slice(0, typing.target.length);
  if (typed !== typeBox.value) typeBox.value = typed;
  renderTyping();

  let right = 0;
  for (let i = 0; i < typed.length; i++) if (typed[i] === typing.target[i]) right++;
  // wait a couple of seconds before guessing a speed, or the first key reads as a million wpm
  const minutes = Math.max((performance.now() - typing.start) / 60000, 2 / 60);
  const wpm = Math.round(right / 5 / minutes);
  const accuracy = typed.length ? Math.round((right / typed.length) * 100) : 100;

  if (typed.length === typing.target.length) {
    typeBox.disabled = true;
    const verdict = accuracy === 100 ? "no typos, nice." : accuracy > 90 ? "close enough." : "hmm.";
    $("typeStats").textContent = `done! ${wpm} wpm, ${accuracy}% accurate. ${verdict}`;
  } else {
    $("typeStats").textContent = `${wpm} wpm, ${accuracy}% accurate`;
  }
});
typeBox.addEventListener("paste", (e) => {
  e.preventDefault();
  $("typeStats").textContent = "no pasting :)";
});
$("typeNew").addEventListener("click", () => { newSnippet(); typeBox.focus(); });

// ---------- quiz ----------
const quiz = { order: shuffle(QUIZ.map((_, i) => i)), pos: -1, current: null, right: 0, asked: 0 };

function nextQuestion() {
  quiz.pos = (quiz.pos + 1) % quiz.order.length;
  const q = QUIZ[quiz.order[quiz.pos]];
  quiz.current = q;
  $("quizLang").textContent = LANGS[q.lang].name + (q.question ? ": " + q.question : "");
  $("quizCode").innerHTML = hi(q.code, q.lang);
  $("quizResult").textContent = "";
  const box = $("quizChoices");
  box.innerHTML = "";
  for (const i of shuffle(q.choices.map((_, i) => i))) {
    const b = document.createElement("button");
    b.textContent = q.choices[i];
    b.addEventListener("click", () => answer(i, b));
    box.appendChild(b);
  }
}

function answer(i, button) {
  const q = quiz.current;
  const buttons = $("quizChoices").querySelectorAll("button");
  buttons.forEach((b) => (b.disabled = true));
  quiz.asked++;
  const result = $("quizResult");
  if (i === q.answer) {
    quiz.right++;
    result.className = "ok";
    result.textContent = "right. " + q.why;
  } else {
    result.className = "err";
    result.textContent = `nope, it's ${q.choices[q.answer]}. ${q.why}`;
  }
  button.textContent = (i === q.answer ? "✔ " : "✘ ") + button.textContent;
  $("quizScore").textContent = `(${quiz.right} / ${quiz.asked})`;
}
$("quizNext").addEventListener("click", nextQuestion);

// ---------- glossary ----------
function renderGlossary() {
  const q = $("glossarySearch").value.trim().toLowerCase();
  const dl = $("glossaryList");
  dl.innerHTML = "";
  const matches = GLOSSARY.filter(([term, def]) => !q || term.includes(q) || def.toLowerCase().includes(q))
    .sort((a, b) => a[0].localeCompare(b[0]));
  for (const [term, def] of matches) {
    const dt = document.createElement("dt");
    dt.textContent = term;
    const dd = document.createElement("dd");
    dd.textContent = def;
    dl.append(dt, dd);
  }
  if (!matches.length) dl.textContent = "nothing found.";
}
$("glossarySearch").addEventListener("input", renderGlossary);
renderGlossary();

// ---------- nonsense tab ----------
$("nonsenseButton").addEventListener("click", () => {
  $("nonsenseOut").textContent = pick(NONSENSE.lines);
});

$("duckAsk").addEventListener("click", () => {
  $("duckReply").textContent = pick(NONSENSE.duck);
});
$("duckBox").addEventListener("keydown", (e) => { if (e.key === "Enter") $("duckAsk").click(); });

showTab();

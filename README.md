# claudesPOV, YOU get vibecoded... o algo.

a small place to write code in the browser. pick a language, take a random prompt, build the thing.

python, javascript, php, html, css, c, c++, c#, holy c, rust, go, java, kotlin, swift, ruby and lua.

## what's on it

- **code** – an editor with syntax highlighting, a random prompt (an app, a website, a tool, a game or some nonsense), and a run button.
- **prompts** – every prompt on the site, grouped. click one to start on it.
- **cheat sheet** – the basics of each language: printing, variables, input, if / else, loops, functions, lists.
- **typing** – type real code snippets and see your speed and accuracy.
- **quiz** – "what does this print?" questions across the languages.
- **glossary** – coding words explained plainly.
- **nonsense** – excuses, fake errors, commit messages, a rubber duck, a magic 8-ball, a code rater, and a banana-o-meter.

## how code runs

- **python, javascript, php** run in the browser (python via [pyodide](https://pyodide.org), php via [php-wasm](https://github.com/seanmorris/php-wasm)).
- **html and css** are drawn in a sandboxed frame on the page.
- **c, c++, c#, rust, go, java, kotlin, swift, ruby, lua** are sent to [compiler explorer](https://godbolt.org) to be compiled and run, and the output comes back.
- **holy c** can be written but not run. it only lives inside templeos.

nothing is saved. a refresh clears everything.

## running it locally. 

it's a static site with no build step. put the files on any static host (github pages, netlify, etc.), or serve the folder locally:

```bash
python -m http.server 5173
```

then open http://localhost:5173.

opening `index.html` straight from the file system mostly works too, but a local server is more reliable.

## files

| file | what it is |
| --- | --- |
| `index.html` | the page and its styling |
| `script.js` | the editor, highlighting and running code |
| `prompts.js` | every prompt, in groups |
| `data.js` | cheat sheets, quiz, glossary and all the nonsense |
| `tabs.js` | the tabs and everything on them |
| `twelve.jpg` | the logo |

to add prompts, edit `prompts.js`. to add more nonsense, edit the lists in `data.js`.

---

source code and my other projects: https://github.com/onononoo/claudesPOV :: https://github.com/onononoo/

this project is open source, so please donate to keep it up :) btc: `bc1qs4z04ltddh6vaqd4stu3p4vekv253ht4cwqma4`

# claudesPOV, YOU get vibecoded... o algo.

write code in your browser. pick a language, get a random prompt, make the thing.

works with python, javascript, php, html, css, c, c++, c#, holy c, rust, go, java, kotlin, swift, ruby and lua.

there's also a cheat sheet, a typing test, a quiz, a glossary and a nonsense tab. don't ask about the nonsense tab.

## how code runs

python, javascript and php run in the browser (python uses pyodide, php uses php-wasm). html and css show up in a box on the page.

c, c++, c#, rust, go, java, kotlin, swift, ruby and lua get sent to godbolt.org to run.

holy c doesn't run. it only works in templeos.

nothing gets saved.

## running it locally. 

no build step, it's just html and js. put it on github pages or whatever, or run this in the folder:

```bash
python -m http.server 5173
```

and go to http://localhost:5173

prompts are in `prompts.js`. the cheat sheets, quiz, glossary and nonsense are in `data.js`.

---

source code and my other projects: https://github.com/onononoo/claudesPOV :: https://github.com/onononoo/

this project is open source, so please donate to keep it up :) btc: bc1qs4z04ltddh6vaqd4stu3p4vekv253ht4cwqma4

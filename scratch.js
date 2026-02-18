import nlp from './src/index.js'
nlp.verbose('tagger')

// to run:
// npm install

// then run:
// node scratch.js

// change something in /data
// then run: npm run pack

let doc = nlp('shiúil an buachaill go dtí an siopa')
doc.debug()

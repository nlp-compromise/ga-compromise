import nlp from './src/index.js'
nlp.verbose('tagger')


let doc = nlp('shiúil an buachaill go dtí an siopa').debug()

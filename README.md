<div align="center">
  <img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
  <div><b>ga-compromise</b></div>
  <img src="https://user-images.githubusercontent.com/399657/68222691-6597f180-ffb9-11e9-8a32-a7f38aa8bded.png"/>
  <div>próiseáil teanga nádúrtha measartha i javascript</div>
  <div><code>npm install ga-compromise</code></div>
  <div align="center">
    <sub>
        obair idir lámha!  •  work-in-progress!
    </sub>
  </div>
  <img height="25px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>
</div>

<div align="center">
  <div>
    <a href="https://npmjs.org/package/ga-compromise">
    <img src="https://img.shields.io/npm/v/ga-compromise.svg?style=flat-square" />
  </a>
  <!-- <a href="https://codecov.io/gh/spencermountain/ga-compromise">
    <img src="https://codecov.io/gh/spencermountain/ga-compromise/branch/master/graph/badge.svg" />
  </a> -->
  <a href="https://bundlephobia.com/result?p=ga-compromise">
    <img src="https://img.shields.io/bundlephobia/min/ga-compromise"/>
  </a>
  </div>
  <div align="center">
    <sub>
     féach freisin: <a href="https://github.com/nlp-compromise/en-compromise">inglés</a> • <a href="https://github.com/nlp-compromise/fr-compromise">francés</a> • <a href="https://github.com/nlp-compromise/de-compromise">alemán</a> • <a href="https://github.com/nlp-compromise/it-compromise">italiano</a> • <a href="https://github.com/nlp-compromise/pt-compromise">portugués</a>
    </sub>
  </div>
</div>


<!-- spacer -->
<img height="85px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>


`ga-compromise` is a port of [compromise](https://github.com/nlp-compromise/compromise) in Irish (Gaeilge)

Is é cuspóir an tionscadail seo clibeálaí POS beag, bunúsach, bunaithe ar rialacha a sholáthar i nGaeilge.

<p><i ><sub>
  (this project is a small, basic, rules-based POS tagger!)
</sub></i></p>

<!-- spacer -->
<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

```js
import nlp from 'ga-compromise'

let doc = nlp('shiúil an buachaill go dtí an siopa')
doc.match('#Verb').text()
// 'shiúil'
```

<!-- spacer -->
<img height="15px" src="https://user-images.githubusercontent.com/399657/68221862-17ceb980-ffb8-11e9-87d4-7b30b6488f16.png"/>

o en el navegador:
```html
<script src="https://unpkg.com/ga-compromise"></script>
<script>
  let txt = 'shiúil an buachaill go dtí an siopa'
  let doc = gaCompromise(txt) // window.gaCompromise
  console.log(doc.json())
  // { text:'shiúil ...', terms:[ ... ] }
</script>
```


### treoracha maidir le ranníocaíocht
le do thoil bí páirteach chun cabhrú - please join to help!

*help with first PR[1](https://github.com/spencermountain/compromise/wiki/Contributing)*
```
git clone https://github.com/nlp-compromise/ga-compromise.git
cd ga-compromise
npm install
npm test
npm watch
```

<div align="center">
  <img src="https://user-images.githubusercontent.com/399657/68221731-e8b84800-ffb7-11e9-8453-6395e0e903fa.png"/>
</div>

## féach freisin
- [BuNaMo](https://github.com/michmech/BuNaMo)  Irish National Morphology Database
- [irish-word-frequency](https://github.com/michmech/irish-word-frequency)  ~6,500 lemmas by frequency
- [Gramadan](https://github.com/michmech/Gramadan)  computational grammar of Irish
- [reimnigh](https://github.com/cudail/reimnigh)  verb conjugation patterns
- [UD_Irish-IDT](https://github.com/UniversalDependencies/UD_Irish-IDT) Universal Dependencies Irish treebank

MIT

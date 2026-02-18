import lexData from './_data.js'
import { unpack } from 'efrt'
import methods from './methods/index.js'
import misc from './misc.js'

const { toPresent, toPast } = methods.verb
let lexicon = misc

const tagMap = {
  first: 'FirstPerson',
  second: 'SecondPerson',
  third: 'ThirdPerson',
  firstPlural: 'FirstPersonPlural',
  secondPlural: 'SecondPersonPlural',
  thirdPlural: 'ThirdPersonPlural'
}

const addWords = function (obj, tag, lex) {
  Object.keys(obj).forEach((k) => {
    let w = obj[k]
    if (!lex[w]) {
      lex[w] = [tag, tagMap[k]]
    }
  })
}

// i am really not sure about this stuff!
const toImperativeReflexive = function (obj) {
  if (obj.second) {
    obj.second += 'te'
  }
  if (obj.third) {
    obj.second += 'se'
  }
  if (obj.firstPlural) {
    obj.firstPlural += 'nos'
  }
  return obj
}

Object.keys(lexData).forEach((tag) => {
  let wordsObj = unpack(lexData[tag])
  Object.keys(wordsObj).forEach((w) => {
    lexicon[w] = tag

    // add conjugations for our verbs
    if (tag === 'Infinitive') {
      // add present tense
      let obj = toPresent(w)
      addWords(obj, 'PresentTense', lexicon)
      // add past tense
      obj = toPast(w)
      addWords(obj, 'PastTense', lexicon)
      // add reflexive infinitive forms
      obj = toImperativeReflexive(obj)
      addWords(obj, 'Reflexive', lexicon)
    }
    if (tag === 'Cardinal') {
      lexicon[w] = ['Cardinal', 'TextValue']
    }
    if (tag === 'Ordinal') {
      lexicon[w] = ['Ordinal', 'TextValue']
    }
  })
})
// console.log(lexicon['ganado'])

export default lexicon

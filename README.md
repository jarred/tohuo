# TOHUTŌ (macron)

An aid to my learning of te reo Māori.

The action of entering words into a programmatic grammar _should_ help with my recollection, and also my overall understanding of how the language is structured. Hopefully I can create a tool to celebrate the beautiful metaphors inherit in the structure of the language that will help others learn also.

(What follows in this document are some of my workings around how I might structure data...)

[8 parts of pākehā speech](https://www.dictionary.com/e/parts-of-speech/)

- Noun
- Pronoun
- Verb
- Adjective
- Adverb
- Preposition
- Conjunction
- Interjection

Also?

- articles
- quantifiers
- numerals

Te reo Māori utilises

- prefixes
- suffixes
- modifiers >

---

## Grammar structure

```ne

INPUT ->
  PORTMANTEAU

PORTMANTEAU ->
  PREFIX:* WORD SUFFIX:*

PREFIX ->

WORD ->
  NOUN
| PRONOUN
| VERB
| ADJECTIVE
| ADVERB
| PREPOSITION

SUFFIX ->

```

## Data structure

```md
e.g. "kaitiakitanga"

kaitiakitanga  
_noun_
guardianship, stewardship, trusteeship, trustee

kai-tiaki-tanga
(1)-(2)---(3)

1. kai  
   _prefix_  
   Added to verbs which express some kind of action to form nouns denoting a human agent (i.e. the person doing the action),
2. tiaki  
   _verb_  
   To guard, keep, nursed, protect, conserve.
3. Tanga
   _suffix_
   Used to make verbs into nouns
```

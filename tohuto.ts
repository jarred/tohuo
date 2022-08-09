// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

  const W = (d:any, type:string, translation:string) => {
    return {
      type,
      translation,
      d
    }
  }

interface NearleyToken {
  value: any;
  [key: string]: any;
};

interface NearleyLexer {
  reset: (chunk: string, info: any) => void;
  next: () => NearleyToken | undefined;
  save: () => any;
  formatError: (token: never) => string;
  has: (tokenType: string) => boolean;
};

interface NearleyRule {
  name: string;
  symbols: NearleySymbol[];
  postprocess?: (d: any[], loc?: number, reject?: {}) => any;
};

type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };

interface Grammar {
  Lexer: NearleyLexer | undefined;
  ParserRules: NearleyRule[];
  ParserStart: string;
};

const grammar: Grammar = {
  Lexer: undefined,
  ParserRules: [
    {"name": "INPUT", "symbols": ["PORTMANTEAU"]},
    {"name": "PORTMANTEAU$ebnf$1", "symbols": []},
    {"name": "PORTMANTEAU$ebnf$1", "symbols": ["PORTMANTEAU$ebnf$1", "WORD"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PORTMANTEAU$ebnf$2", "symbols": []},
    {"name": "PORTMANTEAU$ebnf$2", "symbols": ["PORTMANTEAU$ebnf$2", "WORD"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PORTMANTEAU", "symbols": ["PORTMANTEAU$ebnf$1", "WORD", "PORTMANTEAU$ebnf$2"]},
    {"name": "WORD$string$1", "symbols": [{"literal":"a"}, {"literal":"u"}, {"literal":"ē"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$1"], "postprocess": d => W(d, "verb", "to cry, howl, groan, wail, bawl")},
    {"name": "WORD$string$2", "symbols": [{"literal":"a"}, {"literal":"t"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$2"], "postprocess":  d => [
          W(d, "noun", "morning"),
          W(d, "noun", "form, shape, object"),
        ] },
    {"name": "WORD$string$3", "symbols": [{"literal":"a"}, {"literal":"r"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$3"], "postprocess": d => W(d, "noun", "way, path, lane, track, course, route")},
    {"name": "WORD$string$4", "symbols": [{"literal":"k"}, {"literal":"a"}, {"literal":"i"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$4"], "postprocess":  d => [
          W(d, "prefix", "human involvement"),
          W(d, "noun", "food, meal"), W(d, "verb", "to eat, consume, feed (oneself), partake, devour"), 
          W(d, "verb", "to drink liquid other than water, consume, feed (oneself), partake, devour")
        ] },
    {"name": "WORD$string$5", "symbols": [{"literal":"k"}, {"literal":"a"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$5"], "postprocess": d => W(d, "noun", "guardianship, stewardship, trusteeship, trustee")},
    {"name": "WORD$string$6", "symbols": [{"literal":"k"}, {"literal":"ā"}, {"literal":"k"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$6"], "postprocess": d => W(d, "stative", " be hot, red-hot (e.g. chillies), inflamed")},
    {"name": "WORD$string$7", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$7"], "postprocess": d => W(d, "suffix", "turns a verb into a noun. Usually means the place or time of a verbs action")},
    {"name": "WORD$string$8", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$8"], "postprocess": d => W(d, "verb", "guard, keep, nurse, care, protect")},
    {"name": "WORD$string$9", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"i"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$9"], "postprocess":  d => [
          W(d, "noun", "water, liquid"),
          W(d, "personal noun", "who? whom? what?")
        ] },
    {"name": "WORD$string$10", "symbols": [{"literal":"w"}, {"literal":"a"}, {"literal":"i"}, {"literal":"a"}, {"literal":"t"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$10"], "postprocess": d => W(d, "verb", "to sing")},
    {"name": "ws$ebnf$1", "symbols": []},
    {"name": "ws$ebnf$1", "symbols": ["ws$ebnf$1", /[\t ]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ws", "symbols": ["ws$ebnf$1"], "postprocess": d => null}
  ],
  ParserStart: "INPUT",
};

export default grammar;

// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
// Bypasses TS6133. Allow declared but unused functions.
// @ts-ignore
function id(d: any[]): any { return d[0]; }

  // suffixes
  const S = (d:any, text:string) => {
    return {
      type: 'suffix', 
      text,
      d
    }
  }
  // words...
  const W = (d:any, type:string, translation:string) => {
    return {
      type,
      translation,
      d
    }
  }
  // prefixes...
  const P = (d:any, text:string) => {
    return {
      type: 'prefix', 
      text,
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
    {"name": "PORTMANTEAU$ebnf$1", "symbols": ["PORTMANTEAU$ebnf$1", "PREFIX"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PORTMANTEAU$ebnf$2", "symbols": []},
    {"name": "PORTMANTEAU$ebnf$2", "symbols": ["PORTMANTEAU$ebnf$2", "SUFFIX"], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "PORTMANTEAU", "symbols": ["PORTMANTEAU$ebnf$1", "WORD", "PORTMANTEAU$ebnf$2"]},
    {"name": "PREFIX$string$1", "symbols": [{"literal":"k"}, {"literal":"a"}, {"literal":"i"}], "postprocess": (d) => d.join('')},
    {"name": "PREFIX", "symbols": ["PREFIX$string$1"], "postprocess": d => P(d, 'human involvement')},
    {"name": "SUFFIX$string$1", "symbols": [{"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "SUFFIX", "symbols": ["SUFFIX$string$1"], "postprocess": d => S(d, 'turns a verb into a noun. Usually means the place or time of a verbs action')},
    {"name": "WORD$string$1", "symbols": [{"literal":"a"}, {"literal":"u"}, {"literal":"ē"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$1"], "postprocess": d => W(d, 'verb', 'to cry, howl, groan, wail, bawl')},
    {"name": "WORD$string$2", "symbols": [{"literal":"k"}, {"literal":"a"}, {"literal":"i"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$2"], "postprocess": d => W(d, 'noun', 'food, meal')},
    {"name": "WORD$string$3", "symbols": [{"literal":"k"}, {"literal":"a"}, {"literal":"i"}, {"literal":"t"}, {"literal":"i"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}, {"literal":"t"}, {"literal":"a"}, {"literal":"n"}, {"literal":"g"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$3"], "postprocess": d => W(d, 'noun', 'guardianship, stewardship, trusteeship, trustee')},
    {"name": "WORD$string$4", "symbols": [{"literal":"k"}, {"literal":"ā"}, {"literal":"k"}, {"literal":"a"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$4"], "postprocess": d => W(d, 'stative', ' be hot, red-hot (e.g. chillies), inflamed')},
    {"name": "WORD$string$5", "symbols": [{"literal":"t"}, {"literal":"i"}, {"literal":"a"}, {"literal":"k"}, {"literal":"i"}], "postprocess": (d) => d.join('')},
    {"name": "WORD", "symbols": ["WORD$string$5"], "postprocess": d => W(d, 'verb', 'guard, keep, nurse, care, protect')},
    {"name": "ws$ebnf$1", "symbols": []},
    {"name": "ws$ebnf$1", "symbols": ["ws$ebnf$1", /[\t ]/], "postprocess": (d) => d[0].concat([d[1]])},
    {"name": "ws", "symbols": ["ws$ebnf$1"], "postprocess": d => null}
  ],
  ParserStart: "INPUT",
};

export default grammar;

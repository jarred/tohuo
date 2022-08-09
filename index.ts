import { uniq } from "lodash";
import { Parser, Grammar } from "nearley";
import Tohuto from "./tohuto";

const grammar = Grammar.fromCompiled(Tohuto);
const parser = new Parser(grammar);

parser.feed("kaitiakitanga");

const results = uniq(parser.results);

console.log(`${results.length} result/s`);
console.log(JSON.stringify(results, null, 2));

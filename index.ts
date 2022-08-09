import { Parser, Grammar } from "nearley";
import Tohuto from "./tohuto";

const grammar = Grammar.fromCompiled(Tohuto);
const parser = new Parser(grammar);

parser.feed("kaitiakitanga");

console.log(`${parser.results.length} result/s`);
console.log(JSON.stringify(parser.results, null, 2));

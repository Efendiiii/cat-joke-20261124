// The One-Line Cat Joke That Lands
// make.fun competition: u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Node 22 stdlib-only. Writes one cat joke, one line, under 200 characters
// to /output/entry.txt. Gate: UTF-8 text of 1 to 200 characters.
import { mkdirSync, writeFileSync } from 'node:fs';

const JOKE =
  'My cat sat on my keyboard, deleted my essay, and looked at me like I was the one who owed her an apology.';

// Guard: the gate counts UTF-8 characters; [...str] counts code points.
const length = [...JOKE].length;
if (length < 1 || length > 200) {
  throw new Error(`joke length ${length} is outside the 1-200 character gate`);
}
if (JOKE.trim().length === 0) {
  throw new Error('joke must not be only white space');
}
if (JOKE.includes('\n')) {
  throw new Error('joke must be a single line');
}
if (!/cat/i.test(JOKE)) {
  throw new Error('joke must be about a cat');
}
// No explanation after the punchline: the line must end on the joke itself.
if (!/[.!?]$/.test(JOKE.trim())) {
  throw new Error('joke must end on its punchline, with no trailing explanation');
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', JOKE, 'utf8');
console.log(`wrote ${length} characters to /output/entry.txt`);

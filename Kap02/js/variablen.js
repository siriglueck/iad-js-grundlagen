j = 10;
k;
l = 11;

console.log("j hat den Wert: ", j);
console.log("k hat den Wert: ", k);
console.log("l hat den Wert: ", l, "\n");

zahl = 1;
zeichen = '1';
erg = zahl + zahl;
console.log("zahl + zahl = ", erg, "\n");

erg = zeichen + zeichen;
console.log("zeichen + zeichen = ", erg, "\n");

erg = '1a' * zahl;
console.log("1a * zahl = ", erg, "\n");

erg = zahl + zeichen;
console.log("zahl + zeichen = ", erg);

erg = "Text plus Zahl " + 7;
console.log(erg, typeof (erg));

erg = "Text plus Zahl " + 7 * 7;
console.log(erg, typeof (erg));

erg = 7 + 7 + " Text plus Zahl";
console.log(erg, typeof (erg));

erg = "Text plus Zahl " + 7 + 7;
console.log(erg, typeof (erg));

erg = "7" * 7;
console.log(erg, typeof (erg));

x = "7";
y = 7;
console.log(x, typeof (x), y, typeof (y));
console.log(x * y, typeof (x * y));
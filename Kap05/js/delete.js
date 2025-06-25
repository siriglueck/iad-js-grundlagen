function Kunde(name) {
    this.name = name;
}
kd = new Kunde("Meier");
console.log(kd.vorname);
kd.vorname = "Frank"; // neue Eigenschaft hinzufügen
console.log(kd);
// delete kd.vorname; // die Eigenschaft wieder entfernen – 
// ein Weg, aber kritisch
// console.log(kd);

kd.vorname = undefined; // die Eigenschaft wieder entfernen – 
// alternativer Weg
console.log(kd.vorname);
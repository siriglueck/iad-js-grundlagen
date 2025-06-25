var a = 1;

function eins() {
    var a = 2;
    console.log(a); //2
    {
        var a;
        console.log(a);
        a++;
        console.log(a);
        
    }

    console.log(a);
}
console.log(a); // 1
eins();
console.log(a);
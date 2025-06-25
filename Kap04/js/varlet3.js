var a = 1;

function eins() {
    let a = 2;
    console.log(a); // 2
    {
        let a;
        a++;
        console.log(a); // NaN
        
    }

    console.log(a); // 2
}
console.log(a); // 1
eins();
console.log(a); // 1
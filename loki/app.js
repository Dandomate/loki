//Adatbázis készités
const loki=require('lokijs');
const uuid=require('uuid');
const db = new loki('library.db'); //adatbázis neve
db.addCollection("books",["id","title", "author"]); //index
const b =db.addCollection("books2",{
    indices:["title", "author"], //ez lesz a fejlécbe
    unique:["title","id"] //ez a kulcs
});
//beszurás az adatbázisba insert segitségével
try{
    b.insert({"id":uuid.v4(),"title": "The Witcher","author": "Andrzej Sapkowski"},); //1. példa
    b.insert({"id":uuid.v4(),"title": "The Maze Runner","author": "James Dashner"}); // 2. példa
    b.insert({"id":uuid.v4(),"title": "Game of Thrones","author": "George R. R. Martin"}); // 3. példa
}catch(err){ 
    console.log(err); // ha nem működik hibát dob
}
//----------------------------------------------------------------------
const konyveim= b.find({ //könyvek keresése

});
console.table(konyveim); //konzolba kiiratja akönyveimet 
//----------------------------------------------------------------------
//----------------------------------------------------------------------
const egyKonyv = b.findOne({ //egy könyv keresése
    title:'Game of Thrones'
})

console.table(egyKonyv); //konzolba kiirat egy könyvet
//----------------------------------------------------------------------
b.remove(egyKonyv); //törlés 
console.table(konyveim); //konzolba kiiratja a könyveimet 
//----------------------------------------------------------------------
let ujkonyv = b.find({
    cim: 'The Witcher'
})
ujkonyv.author='Ujszerzo';
b.update(ujkonyv);

console.log(b.find()),
//----------------------------------------------------------------------

db.saveDatabase(err=>{ //adatbázis mentése 
    console.log(err);
}); 
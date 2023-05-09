//get csv fie
//d3.csv('data/harry_potter.csv').then(
    //res=>{
        //console.log('Local CSV:',res)
        //console.log(typeof(res))
    //}
//);
//get json file
//d3.json('data/harry_potter.json').then(
    //res=>{
        //console.log('Local JSON:',res)
        //console.log(typeof(res))
    //}
//);
//get multi files
//const potter=d3.csv('data/harry_potter.csv');
//const rings=d3.csv('data/lord_of_the_rings.csv');
//Promise.all([potter,rings]).then(
    //res=>{
       // //console.log(res);
        //console.log(...res[0],...res[1]);
    //}
//);

//get internet json
d3.json("https://api.chucknorris.io/jokes/search?query=cat").then(
    res=>{
        console.log(res.result);
        console.log(res.result[0].value);
    }
);
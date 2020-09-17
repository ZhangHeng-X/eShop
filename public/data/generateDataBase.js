let fs = require('fs')
let database = require('./productData/database.json')
console.log(database.length)

let newDatabase = []
database.forEach(item => {
    let flag = true
    newDatabase.forEach(newItem =>{
        if (item.detail.des === newItem.detail.des){
            flag = false
        }        
    })
    if(flag){
        newDatabase.push(item)
    }
});
console.log(newDatabase.length)

let finalDatabase = []
let hotSaleDatabase = []
for(i = 0; i < 26; i += 1){
    newDatabase.some(item => {
        let salePrice = Math.floor(Math.random() * 50);
        let marketPrice = salePrice + 10 + Math.floor(Math.random() * 10);
        let product = {
            id: item.id + String.fromCharCode(i+65),
            category: item.category,
            type: item.type,
            name: item.name + ' ' + String.fromCharCode(i+65),
            price: {
                marketPrice: marketPrice,
                salePrice: salePrice
            },
            imgSrc: item.id,
            color: item.detail.color,
            des: item.detail.des
        }
        finalDatabase.push(Object.assign({}, product));
        if(i === 0){
            hotSaleDatabase.push(Object.assign({}, product));
        }
    })
}

console.log(finalDatabase.length)
let dataToWrite = JSON.stringify(finalDatabase, null, 4);
fs.writeFileSync('database.json', dataToWrite);

console.log(hotSaleDatabase.length)
dataToWrite = JSON.stringify(hotSaleDatabase, null, 4);
fs.writeFileSync('hotSale.json', dataToWrite);



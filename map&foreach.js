//Exercise1
let arr = [1, 2, 3, 4, 5];
let arr2 = arr.map(function (x) {
    return x * 2;
    
})
console.log(arr2);
//Exercise2
let arr3 = arr.map(function (x) {
    return String(x);
    
})
console.log(arr3);
//Exercise3
let names=["baraah","youser"]
let arr4 = names.map(function (x) {
    return  (x).toUpperCase();
    
})
console.log(arr4);
//Exercise4
let user = [{ nam: "baraah", age: 21 }, { nam: "yosr", age: 23 }];

let arr6 = user.map(function (x) {
    return x.nam;
})
console.log(arr6);
//Exercise6
let user2 = [{ nam: "baraah", age: 80 }, { nam: "yosr", age: 80 }, { nam: "noor", age: 88 }];
let arr7 = user2.map(function (x) {
    if (x.age > 80) {
        return `${x.nam} :go to the matrix`
    }
    else
    return  `${x.nam} :under age`  ;
})
console.log(arr7);
//Exercise8
let arr8 = arr.map(function (x,i) {
    return x * i;
    
})
console.log(arr8);
//Exercise10
let user3 = [{ first: "baraah", last: "adnan" }, {first: "yosr", last: "zohair" }, { first: "noor", last: "mohammed" }];
let arr9 = user3.map(function (x) {
    return `${x.first} ${x.last}`
})
console.log(arr9);
//foreach
//1
let array = [1, 2, 3, 4, 5];
let arr10 = [];
array.forEach(function (x) {
    return arr10.push(x * 2);
    
}
)
console.log(arr10);
//2
let arr11 = [];
array.forEach(function (x) {
    if (x % 2 == 0) {
        return arr11.push(x);
    }

    
}
)
console.log(arr11);
//3
let narr = ["barrah", "razan", "noor"];
let arr12 = [];
narr.forEach(function (x) {
    return arr12.push(`${x[0]} ${x[x.length - 1]}`);

    
}
)
console.log(arr12);
//4
let user4 = [{ nam: "baraah" }, { nam: "yosr" }, { nam: "noor" }];
let b = [];
user4.forEach(function (x) {

    user5 = { nam: x.nam, title: "instroctor" };

    return b.push(user5);

})
console.log(b);
//5
let value = ["baraah", "ali"];
let vowel = ["i", "a", "e", "o", "u"];
let result = [];
value.forEach(function (x) {

    if (x.charAt(value).includes(vowel)) {
        return result.push(`${x}${indexof(x)}`);

}
})
console.log(result);
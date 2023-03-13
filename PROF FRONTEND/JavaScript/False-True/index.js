// 02.03


const TRUE = () => {
    console.log('True Was calculated');
    return true;
};
const FALSE = () => {
    console.log('False Was calculated');
    return false;
};

console.log(TRUE() && TRUE());  // true
console.log(TRUE() && FALSE()); // false
console.log(FALSE() && TRUE()); // false
console.log(FALSE() && FALSE()); // false

console.log(TRUE() || TRUE());  // true
console.log(TRUE() || FALSE()); // true
console.log(FALSE() || TRUE()); // true
console.log(FALSE() || FALSE()); // false

console.log(!TRUE); // false
console.log(!FALSE); // true




console.log(false == 0); // true
console.log(false === 0); // false
console.log(false == ""); // true
console.log(false == "false"); // false
console.log(false == []); // true
console.log(false == [""]); // true
console.log(false == ["", ""]); // false
console.log(false == ["qwerty"]); // false
console.log(false == [0]); // true
console.log(false == [1]); // false

console.log(false == undefined); // false
console.log(!undefined); // true   
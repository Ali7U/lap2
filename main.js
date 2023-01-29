"use strict";
exports.__esModule = true;
var st1 = {
    id: 1,
    name: "Ali",
    leve: "Profissional",
    isSenior: true
};
var st2 = {
    id: 2,
    name: "Faris",
    leve: "Middle",
    isSenior: true
};
var st3 = {
    id: 3,
    name: "Saad",
    leve: "Beginner",
    isSenior: false
};
var school = [
    {
        id: 4,
        name: "Ibrahim",
        leve: "Profissional",
        isSenior: true
    },
    {
        id: 5,
        name: "Khaled",
        leve: "Beginner",
        isSenior: false
    },
];
// console.log(school);
function info() {
    return console.log(school);
}
info();
var teachObj = [
    {
        id: 6,
        name: "Ahmed",
        specialty: "CS",
        courseNum: 8
    },
    {
        id: 7,
        name: "Saud",
        specialty: "IT",
        courseNum: 2
    },
    {
        id: 8,
        name: "Ibrahim",
        specialty: "CS",
        courseNum: 9
    },
];
var newSchool = [
    { id: 1, name: "Saad" },
    { id: 2, name: "Noor" },
    { id: 3, name: "Ali" },
    { id: 4, name: "Masha" },
    { id: 5, name: "Khaled" },
    { id: 6, name: "Ibrahim" },
];
newSchool.forEach(function (item) {
    return item.id < 4
        ? console.log("The Student: ".concat(item.name))
        : console.log("The Teacher: ".concat(item.name));
});
function isSenior() {
    var isS = school.forEach(function (item) {
        return item.isSenior ? console.log(false) : console.log(true);
    });
    return isS;
}
isSenior();

interface Students {
  id: number;
  name: string;
  leve: string;
  isSenior: boolean;
}

let st1: Students = {
  id: 1,
  name: "Ali",
  leve: "Profissional",
  isSenior: true,
};
let st2: Students = {
  id: 2,
  name: "Faris",
  leve: "Middle",
  isSenior: true,
};
let st3: Students = {
  id: 3,
  name: "Saad",
  leve: "Beginner",
  isSenior: false,
};

let school: Students[] = [
  {
    id: 4,
    name: "Ibrahim",
    leve: "Profissional",
    isSenior: true,
  },
  {
    id: 5,
    name: "Khaled",
    leve: "Beginner",
    isSenior: false,
  },
];
// console.log(school);

function info() {
  return console.log(school);
}
info();

interface Teachers {}

let teachObj: Teachers[] = [
  {
    id: 6,
    name: "Ahmed",
    specialty: "CS",
    courseNum: 8,
  },
  {
    id: 7,
    name: "Saud",
    specialty: "IT",
    courseNum: 2,
  },
  {
    id: 8,
    name: "Ibrahim",
    specialty: "CS",
    courseNum: 9,
  },
];
// school.push(teachObj)

type strOrNum = string | number;

type schoolObj = {
  id: strOrNum;
  name: string;
};

const newSchool: schoolObj[] = [
  { id: 1, name: "Saad" },
  { id: 2, name: "Noor" },
  { id: 3, name: "Ali" },
  { id: 4, name: "Masha" },
  { id: 5, name: "Khaled" },
  { id: 6, name: "Ibrahim" },
];
newSchool.forEach((item) =>
  item.id < 4
    ? console.log(`The Student: ${item.name}`)
    : console.log(`The Teacher: ${item.name}`)
);

function isSenior() {
  let isS = school.forEach((item) =>
    item.isSenior ? console.log(false) : console.log(true)
  );
  return isS;
}
isSenior();




export {};

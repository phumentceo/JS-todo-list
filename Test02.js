//Single Array VS Array Object
const students1 = [
    {
        "id" : 1,
        "name" : "Reaksa",
        "gender" : "Male",
        "age"   : 18
    },
    {
        "id" : 2 ,
        "name" : "Panha",
        "gender" : "Male",
        "age"  : 19
    }
];

const students2 = [
    {
        "id"     : 3,
        "name"   : "lita",
        "gender" : "Rothana",
        "age"    : 18
    },
    {
        "id"     : 4,
        "name"   : "Ravi",
        "gender" : "Male",
        "age"    : 20
    }
]

// const allStudent = students1.concat(students2);
const allStudents = [...students1,...students2];


allStudents.map(item => (
    console.log(`
       id     : ${item.id} 
       name   : ${item.name} 
       gender : ${item.gender}
       age    : ${item.age} 
    `)
));
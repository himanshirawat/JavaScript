const familyMembers = [
    {
        name: "Narsingrao",
        age: 56
    },
    {
        name: "Padma",
        age: 52
    },
    {
        name: "Poonam",
        age: 30
    },
    {
        name: "Prakash",
        age: 27
    },
    {
        name: "Ashish",
        age: 50
    }
]

const agee = familyMembers.reduce((acc,cur) => acc + cur.age,0);
const result = agee/familyMembers.length
console.log(result);
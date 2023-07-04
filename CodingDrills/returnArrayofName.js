// course solution

const employees = [
    {
        name: "Prakash",
        numOfYears: 5
    },
    {
        name: "Ashish",
        numOfYears: 3
    },
    {
        name: "Riya",
        numOfYears: 1
    },
    {
        name: "Jay",
        numOfYears: 1
    },
    {
        name: "Chinmoy",
        numOfYears: 5
    }
]

// Chaining method .filter().map() or vice versa and with reduce() too.
console.log(employees.filter(employees => employees.numOfYears > 3).map(employees=> employees.name));
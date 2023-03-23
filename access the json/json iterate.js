
let jsonData = {
  "employees": [
    {
      "name": "Narasimhan",
      "age": 30,
      "department": "Sales"
    },
    {
      "name": "Naveen",
      "age": 25,
      "department": "Marketing"
    },
    {
      "name": "victor",
      "age": 35,
      "department": "Engineering"
    }
  ]
};

// iterating over the JSON data using for loops
for (let i = 0; i < jsonData.employees.length; i++) {
  let employee = jsonData.employees[i];
 console.log(employee)
}
// example JSON data
let jsonData1 = {
  "employees": [
    {
      "name": "Narasimhan",
      "age": 30,
      "department": "Sales"
    },
    {
      "name": "Naveen",
      "age": 25,
      "department": "Marketing"
    },
    {
      "name": "victor",
      "age": 35,
      "department": "Engineering"
    }
  ]
};

// iterating over the JSON data using for...of loop
for (let employee of jsonData1.employees) {
console.log(employee)
}

// example JSON data
let jsonData2 = {
  "employees": [
    {
      "name": "Narasimhan",
      "age": 30,
      "department": "Sales"
    },
    {
      "name": "Naveen",
      "age": 25,
      "department": "Marketing"
    },
    {
      "name": "victor",
      "age": 35,
      "department": "Engineering"
    }
  ]
};

// iterating over the JSON data using for...in loop
for (let i in jsonData2.employees) {
  let employee = jsonData2.employees[i];
  console.log(employee);
}

// example JSON data
let jsonData3 = {
  "employees": [
    {
      "name": "Narasimhan",
      "age": 30,
      "department": "Sales"
    },
    {
      "name": "Naveen",
      "age": 25,
      "department": "Marketing"
    },
    {
      "name": "victor",
      "age": 35,
      "department": "Engineering"
    }
  ]
};

// iterating over the JSON data using forEach() loop
jsonData3.employees.forEach(function (employee) {

});




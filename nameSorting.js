var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
//returns arrays with names/age
  // var nameKey = students.map(function(a) {
  //   return a.name;
  // });
  // var ageKey = students.map(function(a) {
  //   return a.age;
  // });


  // nameKey.sort();

students.sort(function(a,b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  else {
      if (a.age < b.age) {
        return -1;
      }
      if (a.age > b.age) {
        return 1;
      }
    };
  });

  console.log(students);



// checking how to access object variables
// console.log(students[0]['name']);
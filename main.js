const students = [
  {
    name: "Martin",
    lastName: "Lant",
    marks: [9, 8, null, 7, 5],
  },
  {
    name: "Francesco",
    lastName: "Portus",
    marks: [5, 4, 2, 3, 2],
  },
  {
    name: "Bill",
    lastName: "Merdoc",
    marks: [10, null, null, null, 10],
  },
  {
    name: "John",
    lastName: "Entman",
    marks: [9, 8, 9, 7, 5],
  },
];

const wrapper = document.querySelector(".wrapper");

function studentsList(students) {
  return students.map(
    (students) => `
        <div class="card-list">
        <p>Student name: <p class="name">${students.name}</p>
        </p>
        <p>Student last name: <p class="lastName">${students.lastName}</p>
        </p>
        <p>Visited lectures: <p class="lectures">${students.name}</p>
        </p>
        <p>Average mark: <p class="mark">${students.marks}</p>
        </p>
        </div>`
  );
}

wrapper.innerHTML = studentsList(students);

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
    (students) =>
      `
    <div class="card-list">
    <p>Student name: <p class="name">${students.name}</p>
    </p>
    <p>Student last name: <p class="lastName">${students.lastName}</p>
    </p>
    <p>Visited lectures: <p class="lectures">${getLectures(students.marks)}</p>
    </p>
    <p>Average mark: <p class="mark">${getAverage(students.marks)}</p>
    </p>
    </div>`
  );
}

const getLectures = (arr) => {
  const nullFilter = arr.filter(Number);
  const sum = nullFilter.length;
  return sum;
};

const getAverage = (arr) => {
  const reducer = (a, b) => a + b;
  const sum = arr.reduce(reducer);
  const ave = sum / arr.length;
  return ave;
};

wrapper.innerHTML = studentsList(students);

const studentMark = document.querySelectorAll(".mark");
const card = document.querySelectorAll(".card-list");

for (let i = 0; i < studentMark.length; i++) {
  const aveMark = studentMark[i].innerHTML;
  if (aveMark < 5) {
    card[i].style.borderColor = "red";
  } else {
    card[i].style.borderColor = "green";
  }
}

for (let i = 0; i < card.length; i++) {
  card[i].style.backgroundColor = "white";
  card[i].addEventListener("click", () => {
    if (card[i].style.backgroundColor === "white") {
      card[i].style.backgroundColor = "gray";
    } else {
      card[i].style.backgroundColor = "white";
    }
  });
}

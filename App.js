const data = [
  {
    name: "sagar",
    age: 19,
    City: "karachi",
    Language: "JavaScript",
    frameWork: "React",
    Photo: "https://randomuser.me/api/portraits/thumb/men/76.jpg",
  },
  {
    name: "Ali",
    age: 21,
    City: "Baldia",
    Language: "Python",
    frameWork: "Django",
    Photo: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
  },
  {
    name: "Abdul Ahad",
    age: 20,
    City: "Nazimabad",
    Language: "JavaScript",
    frameWork: "React",
    Photo: "https://randomuser.me/api/portraits/thumb/men/87.jpg",
  },
  {
    name: "Huzaifa",
    age: 20,
    City: "Orangi Town",
    Language: "JavaScript",
    frameWork: "React Native",
    Photo: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
  },
  {
    name: "Ashal Ansari",
    age: 19,
    City: "karachi",
    Language: "Pyhton",
    frameWork: "Django",
    Photo: "https://randomuser.me/api/portraits/thumb/men/54.jpg",
  },
];

function candidateIterator(candidates) {
  let nextIndex = 0;
  return {
    values: () => {
      return nextIndex < candidates.length //?shows if
        ? {
            value: candidates[nextIndex++],
            index: false,
          }
        : {
            index: true,
          };
    },
  };
}
const CandList = candidateIterator(data);
cvHandler();
// console.log(candidatesList.values());
let btn = document.getElementById("btn");
btn.addEventListener("click", cvHandler);
function cvHandler() {
  const candidatesList = CandList.values().value;
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");
  if (candidatesList != undefined) {
    image.innerHTML = `<img src="${candidatesList.Photo}" ">`;
    profile.innerHTML = `
             <li class="list-group-item">${candidatesList.name}</li>
             <li class="list-group-item">${candidatesList.age}</li>
             <li class="list-group-item">${candidatesList.City}</li>
             <li class="list-group-item">${candidatesList.Language}</li>
             <li class="list-group-item">${candidatesList.frameWork}</li>`;
  }
  else {
    alert("And of Candites List");
    window.location.reload();
  }
}

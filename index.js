

// Created Established freelaners and added in requested new freelancer plus two additional
const freelancer = [
  {name: "Alice", occupation: "Writer", startPrice: 30},
  {name: "Bob", occupation: "Teacher", startPrice: 30},
]

const newFreelancer = [
  {name: "Carol", occupation: "Programmer", startPrice: 50},
  {name: "Duke", occupation: "Pilot", startPrice: 100},
  {name: "Eddie", occupation: "Babysitter", startPrice: 5},
];
//Add new freelancer at interval
const addNew = () => {
  const randomIndex = Math.floor(Math.random() * freelancer.length)
  console.log(randomIndex)
  const newF = freelancer[randomIndex]
  freelancer.push(newF)
  renderfreelancer()
}

const add = setInterval(addNew, 1000)

setTimeout(()=>{
  clearInterval(add)
}, 10000)


// Created Established freelancers and added in requested new freelancer plus two additional
const freelancers = [
  {name: "Alice", occupation: "Writer", startPrice: "$30"},
  {name: "Bob", occupation: "Teacher", startPrice: "$30"},
]

const newFreelancers = [
  {name: "Carol", occupation: "Programmer", startPrice: "$70"},
  {name: "Duke", occupation: "Pilot", startPrice: "$100"},
  {name: "Eddie", occupation: "Babysitter", startPrice: "$5"},
  {name: "Carol", occupation: "Programmer", startPrice: "$50"},
];

//Create
function init(){
//Create a container to hold our freelancers.
  const root = document.querySelector("#root")

  const h1 = document.createElement("h1")
  h1.innerHTML = "Available Freelancers"
  root.append(h1)

  const freeContainer = document.createElement("div")
  freeContainer.id = "freeContainer"
  freeContainer.classList.add("freelancers")
  root.append(freeContainer)

  renderFree()

};

//Create a function to render the freelancers in our array
function renderFree(){
  //target the freeContainer created in the init function
  const container = document.querySelector("#freeContainer")
  container.innerHTML = ""

  //loop over freelancer in arrray
  freelancers.forEach((freelancer)=>{
    //create a div to hold details for each freelancer
    const freeDiv = document.createElement("div")
    //add the class of "freelancer" to each div created
    freeDiv.classList.add("freelancer")
    //add the details for each freelancer to the div we care
    freeDiv.innerHTML = freeDiv.innerHTML = `<span><strong> Name: </strong> ${freelancer.name} </span>
                                            <span><strong>Occupation: </strong> ${freelancer.occupation} </span>
                                            <span><strong>Starting Price per Hour: </strong> ${freelancer.startPrice} </span>`
    
    container.append(freeDiv)
  })

}

//Add Carol
const addC = () => {
  const newC = newFreelancers[0]
  freelancers.push(newC)
  renderFree()
} 


//Change Carol's Price
const chgC = () => {
  const newC = newFreeLancers[3]
  freelancers.push(chgC)
  renderFree()
}

//Add Duke
const addD = () => {
  const newD = newFreelancers[1]
  freelancers.push(newD)
  renderFree()
} 

//Add Eddie
const addE = () => {
  const newE = newFreelancers[2]
  freelancers.push(newE)
  renderFree()
} 

//Calculate total average price
function avgPrice(){
  const priceCont = document.querySelector("freelancer")
  priceCont.innerHTML = ""

  freelancers.forEach(()=>{

  }
)
}

init()
console.dir(freelancers)
addC()
addD()
addE()
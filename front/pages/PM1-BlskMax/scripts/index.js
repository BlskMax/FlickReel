class Activity {
    constructor(id, title, description, imgURL) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgURL = imgURL;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

getAllActivities () {
    return this.activities;
}
createActivity (title, description, imgURL) {
    this.id++
    const activity = new Activity (this.id, title, description, imgURL);
    this.activities.push(activity);
}
deleteActivity (id) {
    this.activities = this.activities.filter (Activity => Activity.id !== id);
    return this.activities;
}

}

const repository = new Repository();

const handleDelete = (id) => {
    repository.deleteActivity(id);
    convertInstancesToElement();
}

function activityToHtml ({title, description, imgURL}) {
    const cardActivityTitle = document.createElement("h3");
    const cardDescription = document.createElement("p");
    const cardImgUrl = document.createElement("img");
    const card = document.createElement("div");
    card.className = "nuevaTarjeta";
    

    cardActivityTitle.textContent = title;
    cardDescription.textContent = description;
    cardImgUrl.src = imgURL;
    console.log(cardImgUrl);

    cardActivityTitle.classList.add("title");
    cardDescription.classList.add("parrafo");
    cardImgUrl.classList.add("imageForm");
    card.classList.add("divContainerCard");

   
    
    card.appendChild(cardActivityTitle)
    card.appendChild(cardDescription)
    card.appendChild(cardImgUrl)
    
    
    return card;
}

function convertInstancesToElement( ) {
    const divContainerCards = document.getElementById
    ('divContainerCards')
    divContainerCards.innerHTML = ''

    const activities = repository.getAllActivities()
    console.log(activities);
    const listActivities = activities.map(activityToHtml)
    console.log(listActivities);
    listActivities.forEach(lista => divContainerCards.appendChild(lista))

    console.log(divContainerCards);
}

function handleSubmit(event) {
    event.preventDefault();
    const inputTitle = document.getElementById("textForm").value;
    const inputImage = document.getElementById("imageForm").value;
    const textArea = document.getElementById("descriptionForm").value;
    const form = document.getElementById("formulario");

    if(!inputTitle || !inputImage || !textArea) return alert ("Hay  incompletos!")

    repository.createActivity(inputTitle, textArea, inputImage)

    convertInstancesToElement()
    form.reset()
}

const buttonSubmit = document.getElementById("buttonForm");
buttonSubmit.addEventListener("click", handleSubmit);


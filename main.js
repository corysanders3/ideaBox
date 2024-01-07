var button = document.querySelector('.submit');
var title = document.querySelector('#titleInput');
var body = document.querySelector('#bodyInput');
var ideaSection = document.querySelector('.inputs');
var inputForm = document.querySelector('.input-form');
var deleteButton = document.querySelector('.delete-button');
var viewType = document.querySelector('.viewType');

inputForm.addEventListener('input', enableSaveButton);
viewType.addEventListener('click', changeView);

var ideas = [];
var favIdeas = [];

function addIdea(title, body){
    var newIdea = {
        title: title,
        body: body,
        id: Date.now(),
        isFavorited: false,
        star: "./Assets/star.svg",
        isPushed: false
    }
  ideas.push(newIdea)
};

function changeView() {
  if(viewType.innerText === "Show Starred Ideas") {
    for(var i = 0; i < ideas.length; i++) {
      if(ideas[i].isFavorited && !ideas[i].isPushed) {
        ideas[i].isPushed = true
        favIdeas.push(ideas[i])
      }
    }
    renderIdea(favIdeas)
    viewType.innerText = "Show All Ideas"
  } else {
      renderIdea(ideas)
    viewType.innerText = "Show Starred Ideas"
  }
};

button.addEventListener('click', function(){
  addIdea(title.value, body.value);
  renderIdea(ideas);
  title.value = ''
  body.value = ''
  button.disabled = true
  viewType.innerText = "Show Starred Ideas"
});

function renderIdea(allIdeas){
  ideaSection.innerHTML = '';
  for(var i = 0; i < allIdeas.length; i++){
    ideaSection.innerHTML +=
      `<div class='userIdeaBox'>
        <header> 
        <img src=${allIdeas[i].star} class="star" alt="star click to favorite">
        <img src="./Assets/delete.svg" class="delete-button" id=${allIdeas[i].id} alt="X click to delete">
        </header>
        <h3>${allIdeas[i].title}</h3>
        <p> ${allIdeas[i].body}</p>
      </div>`
  }
};

function enableSaveButton() { 
  if (title.value.trim().length >= 1  && body.value.trim().length >= 1) {
    button.disabled = false
  } else {
    button.disabled = true
  }
};

ideaSection.addEventListener('click', function(event) {
  updateIdeas(ideas, event);
  updateIdeas(favIdeas, event);
  updateFavIdeas(event);
  displayIdea();
  });
        
function updateIdeas(ideasArray, event) {
  var deleteIdea = Number(event.target.id)
  for (var i = 0; i < ideasArray.length; i++) {
    if (ideasArray[i].id === deleteIdea) {
      ideasArray.splice(i, 1)
    }
   }
};

function updateFavIdeas(event){  
  if(event.target.classList.contains('star')) {
    var cardId = Number(event.target.parentNode.children[1].id)
    for(var i = 0; i < ideas.length; i++) {
      if(ideas[i].id === cardId) {
        if(!ideas[i].isFavorited){
          ideas[i].isFavorited = true
        } else if (ideas[i].isFavorited) {
          ideas[i].isFavorited = false
          ideas[i].isPushed = false
          for(var x = 0; x < favIdeas.length; x++) {
            if(favIdeas[x].id === cardId) {
              favIdeas.splice(x,1)
            }
          }
        }
      }
    }
  }
  isTrue(ideas);
  isTrue(favIdeas);
};

function isTrue(array) {
  for(var i = 0; i < array.length; i++) {
    if(array[i].isFavorited) {
      array[i].star = "./Assets/star-active.svg"
    } else {
      array[i].star = "./Assets/star.svg"
    }
  } 
};

function displayIdea(){
  if(viewType.innerText === 'Show Starred Ideas'){
    renderIdea(ideas)
  } else {
    renderIdea(favIdeas)
  }
};
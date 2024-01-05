var button = document.querySelector('.submit')
var title = document.querySelector('#titleInput')
var body = document.querySelector('#bodyInput')
var ideaSection = document.querySelector('.inputs')
var inputForm = document.querySelector('.input-form')
var deleteButton = document.querySelector('.delete-button')
var favoriteSrc = "./Assets/star-active.svg"
var notFavoriteSrc = "./Assets/star.svg"

inputForm.addEventListener('input', enableSaveButton)


var ideas = [];

function addIdea(title, body){
    var newIdea = {
        title: title,
        body: body,
        id: Date.now(),
        isFavorited: false
    }
  ideas.push(newIdea)
}

button.addEventListener('click', function(){
  addIdea(title.value, body.value);
  renderIdea(ideas);
  title.value = ''
  body.value = ''
  button.disabled = true
}); 

function renderIdea(allIdeas){
  ideaSection.innerHTML = '';
  for(var i = 0; i < allIdeas.length; i++){
    ideaSection.insertAdjacentHTML ("afterbegin",
`<div class='userIdeaBox'>
<header> 
<img src= "" class="star" id="test">
<img src="./Assets/delete.svg" class="delete-button" id=${allIdeas[i].id}>
</header>
<h3>${allIdeas[i].title}</h3>
<p> ${allIdeas[i].body}</p>
</div>
`)
  }  
}

function enableSaveButton() { 
  if (title.value.length > 1  && body.value.length > 1) {
    button.disabled = false
  }
}

ideaSection.addEventListener('click', function(event) {
   var deleteIdea = Number(event.target.id)
   for (var i = 0; i < ideas.length; i++) {
    if (ideas[i].id === deleteIdea) {
      ideas.splice(i, 1)
    }
   }
   renderIdea(ideas);
  //  favoriteCards(event);
})

// function favoriteCards(event) {
//   event.preventDefault()
//   if(event.target.classList.contains('star')){
//     event.target.src="./Assets/star-active.svg"
//     console.log(event.target)
//   }
// }

ideaSection.addEventListener('click', function(event){
  if(event.target.classList.contains('star')) {
    console.log(event.target)
    event.target.classList.toggle('favorite')
    event.target.classList.toggle('star')
  }
});

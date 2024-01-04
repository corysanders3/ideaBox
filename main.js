var button = document.querySelector('.submit')
var title = document.querySelector('#titleInput')
var body = document.querySelector('#bodyInput')
var ideaSection = document.querySelector('.inputs')
var inputForm = document.querySelector('.input-form')
var deleteButton = document.querySelector('.delete-button')

inputForm.addEventListener('input', enableSaveButton)


var ideas = [];

function addIdea(title, body){
    var newIdea = {
        title: title,
        body: body,
        id: Date.now()
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
<header> <img src="./Assets/delete.svg" class="delete-button" id=${allIdeas[i].id}> </header>
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
   } renderIdea(ideas);
})
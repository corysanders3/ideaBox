var button = document.querySelector('.submit')
var title = document.querySelector('#titleInput')
var body = document.querySelector('#bodyInput')
var ideaSection = document.querySelector('.inputs')
var inputFields = document.querySelector('.inputField')
var inputForm = document.querySelector('.input-form')

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
rendorIdea(ideas);
}); 

function rendorIdea(allIdeas){
  ideaSection.innerHTML = '';
  for(var i = 0; i < allIdeas.length; i++){
    ideaSection.insertAdjacentHTML ("afterbegin", 
`<div class='userIdeaBox'>
<h3>${allIdeas[i].title}</h3>
<p> ${allIdeas[i].body}</p>
</div>
`)
  }  
}

function enableSaveButton() {
  console.log(title.value.length)
  console.log(body.value.length) 
  if (title.value.length > 1  && body.value.length > 1) {
    button.disabled = false
  }
}

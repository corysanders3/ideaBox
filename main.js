var button = document.querySelector('.submit')
var title = document.querySelector('#titleInput')
var body = document.querySelector('#bodyInput')
var ideaSection = document.querySelector('.inputs')

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

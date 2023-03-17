const openQuizAnswerBtn = document.getElementsByClassName('open-details-btn');
const description = document.getElementsByClassName('description')

console.log(openQuizAnswerBtn.length)

for(let i = 0; i < openQuizAnswerBtn.length; i += 1){
  for(let j = 0; j < description.length; j += 1){
    openQuizAnswerBtn[i].addEventListener('click', () => {
    
    if(description[j].style.display === 'none'){
      description[j].style.display === 'block' &&
      openQuizAnswerBtn[i].style.rotate === '53deg';
    }
    else {
      description[j].style.display === 'none'

    }
  })

  }
  
}
;

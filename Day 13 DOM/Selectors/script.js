//getElementByid

//access the id using document
let idSelector = document.getElementById('class1');
console.log(idSelector);

// idSelector.style.color ="pink";

//getElemnenstByClassName


let classSelector =  document.getElementsByClassName('class1');
console.log(classSelector);

// classSelector[0].style.border = '1px solid red'
// classSelector[1].style.border = '1px solid red';
  

//using loops
for(let i=0; i<classSelector.length;i++){
    classSelector[i].style.border = '1px solid red';
       classSelector[i].style.backgroundColor = 'Orange';
}

// //using tagName
  let tagSelector = document.getElementsByTagName('li');
  console.log(tagSelector);

  tagSelector[1].style.color ='White';
  //  tagSelector[73].style.color ='White';

   //using loop
   for(let i=0;i<tagSelector.length;i++){
    tagSelector[i].style.color ='white'
   }


   //quersy - id, tag, classname-it returns the first occurence of the elment



  //  let quesrySelector = document.querySelector('.class1');
  //  console.log(quesrySelector);
   



  //querySelectorAll


  let querySelctall = document.querySelectorAll('li,p');
  console.log(querySelctall);
  
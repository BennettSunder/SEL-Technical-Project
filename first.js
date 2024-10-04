

function addItem(){
  if (document.getElementById('input1').value.trim() !== ''){
    let userInput = document.getElementById('input1').value;
    // alert(textItem);
    
    const newLI = document.createElement('div');
    newLI.textContent = userInput;
    newLI.innerHTML += '<button onclick="kamikazi(this)">&#x2715;</button>';

    document.getElementById('list').appendChild(newLI);
    document.getElementById('input1').value = '';
    document.getElementById('input1').focus();
  } else {
    alert('You forgot to type an item.\nPlease type an item to add.')
    document.getElementById('input1').focus();
  }
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
});

function kamikazi(element){
  element.parentElement.remove();
}


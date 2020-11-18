document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest(); 

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function() {
    if(this.status === 200) {
     document.getElementById('customer').innerHTML = `<h1> ${this.responseText} </h1>`
    }
  }

  xhr.send();

  e.preventDefault();
}
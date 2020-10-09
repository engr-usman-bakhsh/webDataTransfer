console.log('JSON Objects')
document.querySelector('#button1').addEventListener('click', loadCustomer)

document.querySelector('#button2').addEventListener('click', loadCustomers)

// load single  customer
function loadCustomer(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);


    xhr.onload = function() {
        if (this.status === 200) {
            //  console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            const output =
                `
      <ul>
         <li> ID: ${customer.id} </li>
         <li> name: ${customer.name} </li>
         <li> Company: ${customer.company} </li>
         <li> Contact: ${customer.contact} </li>
         <li> Validater: ${customer.validater} </li>
      </ul>
      `
            document.getElementById('customer').innerHTML = output;
        }
    }
    xhr.send()
    e.preventDefault();
}


// load customers
function loadCustomers(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);


    xhr.onload = function() {
        if (this.status === 200) {
            //  console.log(this.responseText);
            // here we need a loop

            const customers = JSON.parse(this.responseText);
            let output;

            customers.forEach(function(customer) {
                // +- will append new customer onto it
                output += ` 
     <ul>
        <li> ID: ${customer.id} </li>
        <li> name: ${customer.name} </li>
        <li> Company: ${customer.company} </li>
        <li> Contact: ${customer.contact} </li>
        <li> Validater: ${customer.validater} </li>
     </ul>
     `
            })
            document.getElementById('customers').innerHTML = output;
        }
    }
    xhr.send()
    e.preventDefault();
}
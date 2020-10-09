console.log('Ajax Tutorial');
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // create an XHR object
    const xhr = new XMLHttpRequest(); // this object has different properties and methods associated with it
    // these are


    // OPEN
    // it specify the type of request we want to make, and URL or the name of file that we want to make it too.
    xhr.open('GET', 'data.txt', true); // here 'GET' is method, 'data.txt' is the name of file and 'true' makes it  asynchronous

    // console.log('ReadyState ', xhr.readyState)

    // GET request means we want to just read the file or read the URL


    // Optional - (onprogress Method)- Used for spinners or loaders
    xhr.onprogress = function() {
        // console.log('ReadyState ', xhr.readyState)
    }


    xhr.onload = function() {
            // console.log('ReadyState ' , xhr.readyState)
            if (this.status === 200) {
                // console.log(this.responseText)
                document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
            }
        }
        // onload is a new concept, here readyStates value is 4;
        // before onload we had xhr.onreadyStateChange and we had to check it and sure that we were at step 4

    // here we will do whatever we want to do with the data which we will get

    // here we have to check the status it should be 200 which means everything is OK

    // by the way Ajax and XHR are mor complex than 'Fetch' we will learn fetch latter. Fetch is a newer standard

    // here is the example of onreadystatechange

    // xhr.onreadystatechange = function(){
    //   console.log('ReadyState ' , xhr.readyState)
    //   if (this.status === 200 && this.readyState === 4){
    //     console.log('ReadyState ' , xhr.readyState)
    //     console.log(this.responseText);
    //     // we can also check the ready state by writing xhr.readystate
    //   }
    // }


    // OnError
    xhr.onerror = function() {
        console.log('request error...')
    }
    xhr.send()


    // ReadyState Values
    // 0: Request Not Initialized
    // 1: Server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready 




    // HTTP statuses
    // 200 = ok;
    // 403 = 'Forbidden';
    // 404 = 'Not Found';
    // these are not all but a few important , we can google it for all type of statuses

}
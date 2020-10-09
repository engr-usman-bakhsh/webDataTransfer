// we will use the following URL to catch the APIs
//http://www.icndb.com/api/
//it a small project
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    // console.log('get jokes');
    const number = document.querySelector('#number').value;

    const xhr = new XMLHttpRequest();

    // console.log(number);
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
    if (number !== '') {
        if (Math.sign(number) === -1) {
            let output = '';
            output += '<li> Enter a Positive number </li>'
            document.querySelector('.jokes').innerHTML = output;
        } else {
            xhr.onload = function() {
                if (this.status === 200) {
                    const response = JSON.parse(this.responseText);

                    let output = '';

                    if (response.type === 'success') {
                        response.value.forEach(function(joke) {
                            output += `<li> ${joke.joke}</li>`
                        })
                    } else {
                        output += '<li> Somethig went wrong </li>'
                    }
                    // console.log(response);

                    document.querySelector('.jokes').innerHTML = output;
                }
            }

        }


    } else {
        let output = '';
        output += '<li> Enter a valid number </li>'
        document.querySelector('.jokes').innerHTML = output;
    }
    xhr.send();

    e.preventDefault();
}
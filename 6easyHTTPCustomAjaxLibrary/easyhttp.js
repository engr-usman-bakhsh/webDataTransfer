// // this file used to create a library
// // we can use this library to create a real application.
// // this isn't going to be in ES6 object oriented library so we are using prototypes instead of classes.
// // we will remake this latter on with new fetch API instead of Ajax and also use classes so we'll make kind of an updated version of library,
// // we are going to start off with just using AJAX because we can learn more about different types of requests. it will also give us more familiar with prototypes which is a good thing to know because that is what runs under the classes.
// /////////////////////////////////////////////////////////////////

function easyHTTP() {
    this.http = new XMLHttpRequest();

}

// Make an HTTP Get Request
easyHTTP.prototype.get = function(url, callBack) {
    this.http.open('GET', url, true)

    let self = this;

    this.http.onload = function() { // it will work if function is removed and => is putt after parenthesis
        // we cannot use 'this' here, because its for a block level scope.
        if (self.http.status === 200) {
            //here this.http is undefined in this case
            // we can solve this problem by using arrow function which is actually used in ES6, we'll learn it letter.
            callBack(null, self.http.responseText);
        } else {
            callBack('Error : ' + self.http.status);
        }
    }

    this.http.send()
}

// Make an HTTP Post Request
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open("POST", url, true);
    this.http.setRequestHeader('Content-type', 'application/json')

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP Put Request

easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open("PUT", url, true);
    this.http.setRequestHeader('Content-type', 'application/json')

    let self = this;
    this.http.onload = function() {
        callback(null, self.http.responseText)
    }

    this.http.send(JSON.stringify(data));
}

// Make an HTTP Delete Request

easyHTTP.prototype.delete = function(url, callBack) {
    this.http.open('DELETE', url, true)

    let self = this;

    this.http.onload = function() {
        if (self.http.status === 200) {
            callBack(null, 'Post Deleted');
        } else {
            callBack('Error : ' + self.http.status);
        }
    }

    this.http.send()
}
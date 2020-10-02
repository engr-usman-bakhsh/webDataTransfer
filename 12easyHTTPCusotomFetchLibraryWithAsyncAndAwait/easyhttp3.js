/** 
*
*
*EasyHTTP Library
*Library for making HTTP request
*
*@version 3.0.0
*@author H M Usman
*@client MIT
*
*
**/

class easyHTTP {
  // make an http GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

  // make an http POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }


  // make an http PUT Request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }


  // make an http DELETE Request
  async delete(url, data) {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      },
    })
    const resData = await 'Resource Deleted...';
    return resData;
  }
}


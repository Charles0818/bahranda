export const sendHttpRequest = async (method, url, data, authToken ) => {
  if(method === 'GET' || method === 'DELETE') {
    const response = await fetch(url, {
      method:method,
      headers: {
        'Authorization': authToken ? `Token ${authToken}` : ""
      }
    })
    
    if(response.status >= 400) {
      console.log(response)
      const err = await response.json()
      throw err
    }
    console.log(response)
    return await response.json()
  }
  const response =  await fetch(url, {
    method:method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': authToken ? `Token ${authToken}` : ""
    }
  });
  console.log(response)
  if(response.status >= 400) {
    const err = await response.json();
    throw err
  }
  return response.json()
}

const apiKey = 'http://bahranda.test/v1';

const getData = (url) => sendHttpRequest('GET', url, null)

const sendData = (url, data, file) => sendHttpRequest('POST', url, data, file);
const modifyData = (url, data, file) => sendHttpRequest('PATCH', url, data, file);
const deleteData = (url) => sendHttpRequest('DELETE', url, null);

export { sendData, getData, modifyData, deleteData, apiKey }
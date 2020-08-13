export const sendHttpRequest = async (method, url, data, authToken ) => {
  if(method === 'GET' || method === 'DELETE') {
    const response = await fetch(url, {
      method:method,
      headers: {
        'Accept': 'application/json',
        'Authorization': authToken ? `Bearer ${authToken}` : ""
      }
    })
    
    if(response.status >= 400) {
      const err = await response.json()
      throw err
    }
    return await response.json()
  }
  const response =  await fetch(url, {
    method:method,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': authToken ? `Bearer ${authToken}` : ""
    }
  });
  if(response.status >= 400) {
    const err = await response.json();
    throw err
  }
  return response.json()
}

const apiKey = 'https://bahranda.ml/v1';

const getData = (url, token) => sendHttpRequest('GET', url, null, token)

const sendData = (url, data, token) => sendHttpRequest('POST', url, data, token);
const modifyData = (url, data, token) => sendHttpRequest('PATCH', url, data, token);
const deleteData = (url, token) => sendHttpRequest('DELETE', url, null, token);

export { sendData, getData, modifyData, deleteData, apiKey }
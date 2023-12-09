export function getPost(useState) {
  const resultFetch = fetch(process.env.REACT_APP_SERVER)
  .then(res => res.json())
  .then(res => useState(res))
  .catch(err => console.log(err));

  return resultFetch
}

export function postNewPost(obj) {
  const resultFetch = fetch(process.env.REACT_APP_SERVER, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(obj),
  })
  .then(res => res.json())
  .then(res=> console.log(res))
  .catch(err => console.log(err));

  return resultFetch
}

export function putEditPost(id, obj) {
  const resultFetch = fetch(`${process.env.REACT_APP_SERVER}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify(obj),
  })
  .then(res => res.json())
  .then(res=> console.log(res))
  .catch(err => console.log(err));

  return resultFetch
}

export function deletePost(id) {
  const resultFetch = fetch(`${process.env.REACT_APP_SERVER}/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
  })
  .then(res => res.json())
  .catch(err => console.log(err));

  return resultFetch
}
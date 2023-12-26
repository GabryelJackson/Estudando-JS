const url = 'https://tranquil-rex-405218.rj.r.appspot.com/hashCodeServer?nome=gabryel&email=gabryeljackson5@gmail.com&cpf=047.721.381-29';
const params = {
  nome: 'gabryel',
  email: 'gabryeljackon5@gmail.com',
  cpf: '047.721.381-29'
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(params)
};

fetch(url, requestOptions)
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro de requisição: ' + response.status);
    }
    return response.text();
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Erro:', error);
  });

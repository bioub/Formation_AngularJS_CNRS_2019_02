
var fakeDb = {
  '/contacts/12': {
    prenom: 'Romain',
    societe_id: 95,
  },
  '/societes/95': {
    nom: 'formation.tech',
  },
}

var $http = {
  get: function(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        var data = fakeDb[url];

        if (!data) {
          reject(new Error('Not Found'));
        }

        return resolve({
          data: data,
        });
      }, Math.random() * 1000);
    })
  }
}













/*
$http.get('/contacts/12')
  .then(function (res) {
    var contact = res.data;
    return $http.get('/societes/' + contact.societe_id);
  })
  .then(function (res) {
    var societe = res.data;
    console.log(societe);
  })
  .catch(function (err) {
    console.log(err.message);
  });
*/

Promise.all([
  $http.get('/contacts/12'),
  $http.get('/societes/95'),
]).then(function(responses) {
  const contact = responses[0].data;
  const societe = responses[1].data;

  console.log({
    prenom: contact.prenom,
    societe: societe,
  });
})


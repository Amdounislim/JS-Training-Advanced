const url = 'https://blockchain.info/ticker';

async function recupererPrix() {
  // Créer une requête
//   let requete = new XMLHttpRequest(); // Créer un objet
//   requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
//   requete.responseType = 'json'; // Nous attendons du JSON
//   requete.send(); // Nous envoyons notre requête

//   // Dèss qu'on reçoit une réponse, cette fonction est executée
//   requete.onload = function() {
//     if (requete.readyState === XMLHttpRequest.DONE) {
//       if (requete.status === 200) {
//         let reponse = requete.response; // on stock la réponse
//         let prixEnEuros = reponse.EUR.last;
//         document.querySelector('span').textContent = prixEnEuros;
//       }
//       else {
//         alert('Un problème est intervenu, merci de revenir plus tard.');
//       }
//     }
//   }
//   console.log('Prix actualisé');
//   const requete = await fetch(url, {
//     method: 'GET'
//   });
  
//   if(!requete.ok) {
//     alert('Un problème est survenu.');
//   } else {
//     let donnees = await requete.json();
//     // console.log(donnees);
//     document.querySelector('span').textContent = donnees.EUR.last;
//   }
  axios.get(url)
    .then(function(donnees) {
      // console.log(donnees);
    document.querySelector('span').textContent = donnees.data.EUR.last;
    })
    .catch(function(erreur) {
      alert('Un problème est survenu');
    })
  .then(function () {
    console.log('mise à jour effectuée');
  });
}

setInterval(recupererPrix, 1000);

/**********************Post**********/
// const url = 'https://lesoublisdelinfo.com/api.php';

// let requete = new XMLHttpRequest();

// requete.open('POST', url);
// requete.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// requete.responseType = 'json';
// requete.send('prenom=John');

// requete.onload = function() {
//   if (requete.readyState === XMLHttpRequest.DONE) {
//     if (requete.status === 200) {
//       let reponse = requete.response;
//       console.log(reponse);
//     }
//     else {
//       alert('Un problème est intervenu, merci de revenir plus tard.');
//     }
//   }
// }

// async function envoyerPrenom(prenom) {
//   const requete = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     body: new URLSearchParams({
//       prenom
//     })
//   });
  
//   if(!requete.ok) {
//     alert('Un problème est survenu.');
//   }
//   else {
//     const donnees = await requete.json();
//     console.log(donnees);
//   }
// }

// envoyerPrenom('Elon');

const axiosInstancePost = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL: 'https://lesoublisdelinfo.com/'
});

axiosInstancePost.post('api.php', new URLSearchParams({
  prenom: 'Steve'
}))
  .then(function(donnees) {
      console.log(donnees.data);
  })
  .catch(function(erreur) {
    console.log(erreur);
  })
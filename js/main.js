const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const inputField = document.querySelector('#search');
  var content = document.querySelector('.content');
  var inputVal = inputField.value;
  inputVal = encodeURI(inputVal);
  let api = `https://api.giphy.com/v1/gifs/search?q=${inputVal}&limit=19&rating=pg-13&api_key=dc6zaTOxFJmzC`;
  console.log(api)
  fetch(api).then(response => response.json())
  .then(json => {
    console.log(json.data)
    let text = `<h1 class="Rusults">Rusults for ${inputField.value}</h1>`;
    if (json.data.length == 0){
      text += "No Results Found"
    }else{text += `<div class="gifs">`
    for (var i = 0; i < json.data.length; i++) {
      if (json.data[i].user != null) {
        console.log('i got here')
        text += `<article>
        <img src="${json.data[i].images.original.url}" alt="" />
          <a href="${json.data[i].user.profile_url}">${json.data[i].user.display_name}</a>
          <a target="_blank" href="${json.data[i].url}">source</a>
      </article>`
      }
    }
    }
     text += `</div>`
     text += `<a class="btn" href="https://giphy.com/search/">view more on giphy</a>`
    content.innerHTML = text;

  })
})

//example of json that i might need
/**/

console.log(getCollections);

const $user = document.getElementById(`user`);
const $collections = document.getElementById(`collections`);

// Show the user's name
$user.innerHTML = getCollections.name;

/*
// THE VIEW:
<ul id="collections">
  <li>Intro Web: HTML, CSS</li>
  <li>Advanced Web: JS, HTML, CSS</li>
</ul>
*/

const getTagAsHTML = ( t ) => {

  let star = ``;

  if (t.fav == true) {
    star = `<img src="img/star.svg" class="star" alt="This tag is a favourite">`
  } else {
    star = `<img src="img/empty-star.svg" class="star" alt="Not a favourite">`
  }

  return `
    <article>
      <h4>${t.tag}</h4>
      ${ star }
    </article>
  `;

}



// Show the user's collections
// Map through each of the collections and create a <li>
$collections.innerHTML = getCollections.collections.map(col => `
  <li>
    <h3>${ col.name }</h3>
    ${ 
      // Map through each of the tags in this collection
      col.tags.map( getTagAsHTML ).join(`\n`) 
    }
  </li>
`).join(``);
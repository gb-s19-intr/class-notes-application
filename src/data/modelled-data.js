// George brown is logged in on the home page, we want to show all  of the collections he has created. Get all of the collections for this user along with their tags
const getCollections = {
  user_id: 1,
  name: `George Brown`,
  collections: [
    { 
      collection_id: 1, 
      name: `Intro Web`,
      tags: [ 
        { tag_id: 2, tag: `HTML`, fav: false },
        { tag_id: 3, tag: `CSS`, fav: false }
      ]
    },
    { 
      collection_id: 2, 
      name: `Advanced Web`,
      tags: [ 
        { tag_id: 1, tag: `JS`, fav: true },
        { tag_id: 2, tag: `HTML`, fav: false },
        { tag_id: 3, tag: `CSS`, fav: false }
      ]
    },
  ]
};


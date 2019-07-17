// Create a new note
const users = [
  { user_id: 1, name: `George Brown` },
  { user_id: 2, name: `Some Person` },
  { user_id: 3, name: `Another Human` },
];

const tags = [
  { tag_id: 1, user_id: 1, tag: `JS`, fav: true },    // 0
  { tag_id: 2, user_id: 1, tag: `HTML`, fav: false }, // 1
  { tag_id: 3, user_id: 1, tag: `CSS`, fav: false },  // 2
  { tag_id: 4, user_id: 1, tag: `UX`, fav: false },   // 3
  { tag_id: 5, user_id: 2, tag: `User Interface`, fav: false },
  { tag_id: 6, user_id: 2, tag: `JS`, fav: true },
];

const collections = [
  { collection_id: 1, name: `Intro Web`, tags: [ 2, 3 ] },
  { collection_id: 2, name: `Advanced Web`, tags: [ 1, 2, 3 ] },
];














/*
const newNote = {
  user_id: 1,
  name: `George Brown`,
  tags: [
    { tag_id: 1, tag: `JS`},
    { tag_id: 2, tag: `HTML`},
    { tag_id: 3, tag: `CSS`},
  ],
  collection: [
    {  }
  ]

}*/
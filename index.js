// Animal Sounds
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  oink: "pig",
  cluck: "chicken"
};

const { moo, neigh, baa, oink, cluck } = animalSounds;

// Animal Names
const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};

const { bessie, dolly, babe, little } = animalNames;

// Animal Colors
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};

const { blackAndWhite, black, pink } = animalColors;

// Rainbow Colors
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbow;

// Rainbow Initials
const [r, o, y, g, b, , v] = rainbow;

// Indigo Variable
const [, , , , , indg] = rainbow;

// Muppet Object
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
  songs: ["The Rainbow Connection", "Moving Right Along", "Can You Picture That?", "I Hope That Something Better Comes Along"],
  nested: {
    nestedJob: "Host of The Muppet Show",
    nestedPartner: "Miss Piggy"
  }
};

const { muppetName, color, song, job, partner, songs, nested } = muppet;
const [song1, song2, song3, song4] = songs;
const { nestedJob, nestedPartner } = nested;

// Export variables for testing
module.exports = {
  moo, neigh, baa, oink, cluck,
  bessie, dolly, babe, little,
  blackAndWhite, black, pink,
  red, orange, yellow, green, blue, indigo, violet,
  r, o, y, g, b, v, indg,
  muppetName, color, song, job, partner, song2, song4,
  nestedJob, nestedPartner
};

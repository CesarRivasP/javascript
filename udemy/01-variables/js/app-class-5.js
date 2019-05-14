//  -- Object Literal Enhacement --

// Coloca valores juntos
const band = 'Metallica';
const genre = 'Heavy Metal';
const songs = [
  'Master of Puppets',
  'Seek & Destroy',
  'Enter Sandman'
];

// Anterior forma
const Metallica = {
  band: band,
  genre: genre,
  songs: songs
}
console.log(Metallica);

// Nueva forma
const metallica = {
  band,
  genre,
  songs
}
console.log(metallica);

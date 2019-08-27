console.log("favorite songs");

const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];

const myPlaylist = [];

function addSongToDatabase(song, songDatabase) {
    songDatabase.push(song);

    return songDatabase;
}

const newSong = {
    songId: 5,
    title: 'This song',
    artist: 'This artist'
};
const anotherSong = {
    songId: 6,
    title: 'This song again',
    artist: 'This artist again'
};

console.log(songDatabase);
addSongToDatabase(newSong, songDatabase);
addSongToDatabase(anotherSong, songDatabase);
console.log(songDatabase);

/**
 * search for a song
*/

function getSongByTitle(title) {
    for(let i = 0; i < songDatabase.length; i++) {
        if (title === songDatabase[i].title) {
            return songDatabase[i];
        }

        // fuzzy search
        /*
        if (songDatabase[i].title.includes(title)) {
            return songDatabase[i];
        }
        */
    }
    return;
}

const searchIt = getSongByTitle("This song");
console.log(searchIt);
const searchAnother = getSongByTitle("This song does not exist");
console.log(searchAnother);

function addSongToMyPlaylist(title, playlist) {
    let myPlaylist;
    const song = getSongByTitle(title);

    if (song !== undefined) {
        myPlaylist = addSongToDatabase(song, playlist);
    }

    return myPlaylist;
}

addSongToMyPlaylist('3 nails in wood', myPlaylist);
addSongToMyPlaylist('This song', myPlaylist);
console.log(myPlaylist);
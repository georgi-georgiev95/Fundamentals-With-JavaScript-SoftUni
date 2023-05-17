function solve(list) {
    class Song{
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let index = 1; index <= Number(list[0]); index++) {
        let currentSongInfo = list[index].split('_');
        let song = new Song(currentSongInfo[0], currentSongInfo[1], currentSongInfo[2]);
        if (list[list.length - 1] === song.typeList) {
            console.log(song.name);
        } else if (list[list.length - 1] === 'all') {
            console.log(song.name);
        }
    }

    
}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']

);
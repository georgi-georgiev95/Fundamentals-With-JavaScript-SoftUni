function playList(inputArray) {
    
    class Song{
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let tracksCount = Number(inputArray.shift());
    let command = inputArray.pop();

    for (const track of inputArray) {
        let [typeList, name, time] = track.split('_');

        let song = new Song(typeList, name, time);

        if (command === 'all') {
            console.log(song.name);
        } else {
            if (song.typeList === command) {
                console.log(song.name);
            }
        }
    }

}
playList([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
playList([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
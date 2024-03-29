// Variables
const m3ufile = "default.m3u8";
const theDiv = document.getElementById("m3utohtml");

// Le main function
function m3uToHtml(data) {
    // turns the text as an array, splited by line
    let text = data.split("\n");

    // Creates the list in the html
    const songList = document.createElement("ul");
    songList.setAttribute("id","songlist");
    theDiv.appendChild(songList);

    // Loop through all lines
    text.forEach(function(line) {

        // only cares of lines with songs
        if (line != "#EXTM3U" && line != "#EXTINF" && line != "") {

            // removes the absolute path
            let songName = line.replace(/^.*[\\\/]/, '');

            // Removes the extensions and cleans up some jdownloader bs
            // Add more if needed.
            toClean = [".mp3",".m4a","(152kbit_Opus)","(128kbit_Opus)","(128kbit_AAC)","(192kbit_AAC)","(256kbit)","(128kbit)","(152kbit)","(384kbit_AAC)"];
            toClean.forEach((item) => {
                songName = songName.replace(item,"");
            });

            // appends a list element for the song
            let songEntry = document.createElement("li");
            songEntry.innerText = songName;
            songList.appendChild(songEntry);
        }

    });
};

// Fetches the file data and does the shit.
fetch(m3ufile)
    .then(res => res.text())
    .then(data => m3uToHtml(data));


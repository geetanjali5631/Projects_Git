let progress = document.getElementById('progress')
    let song = document.getElementById('song')
    let ctrlIcon = document.getElementById('ctrl-icon')

    song.onloadedmetadata = function(){
        progress.max = song.duration;
        progress.value = song.currentTime;
    }
    function playPause(){
      if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.add("fa-play")
        ctrlIcon.classList.remove("fa-pause")
      }else{
        song.play();
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
      }
    }
    if(song.play()){
        setInterval(()=>{
            progress.value=song.currentTime;
        },500)
    }
    progress.onchange= function(){
        song.play();
        song.currentTime=progress.value;
        ctrlIcon.classList.remove("fa-play")
        ctrlIcon.classList.add("fa-pause")
    }

    let theme = document.getElementsByClassName('fa-bars');
    
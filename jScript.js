    var startB, stopB;
    startB = document.getElementById(startButton);
    stopB = document.getElementById(stopButton);
    if (navigator.mediaDevices.getUserMedia)
    {
      console.log("getUserMedia isn't broken! Woo!");
    
    
      const constraints =  {audio:true};
     
      navigator.mediaDevices.getUserMedia({
        audio: true
      })
      .then(function(stream) {
        const options = {mimeType: 'audio/webm'}; 
        const record = [];
        const Recorder = new MediaRecorder(stream, options);
        console.log("initialized mediaRecorder");
        startB.addEventListener('click', startRecording);
        stopB.addEventListener('click', stopRecording);
        Recorder.addEventListener('dataavailable', yuh);


      });
        function startRecording()
        {
          Recorder.start()

        }
        

        function stopRecording() {

          Recorder.stop()

        }
        function yuh(e)
        {
            if (yuh.data.size > 0)
            {
                record.push(yuh.data);
                download();
            }
            if(stopTime == true && stopped == false)
            {
                Recorder.stop();
                stopped = true;
            } 
        }
     
        }
      function download() {
        var blob = new Blob(record, {
          type: "audio/webm"
        });

        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        a.href = url;
        a.download = "test.webm";
        a.click();
        window.URL.revokeObjectURL(url);
      }
    
   
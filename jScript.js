    var startB, stopB;
    startB = document.getElementById("startButton");
    stopB = document.getElementById("stopButton");
    downB = document.getElementById("downloadButton");
    if (navigator.mediaDevices.getUserMedia)
    {
      console.log("getUserMedia isn't broken! Woo!");
    
    
      const constraints =  {audio:true};
     
      navigator.mediaDevices.getUserMedia({
        audio: true
      })
    
      let Success = function(stream) {
        var options = {mimeType: 'audio/webm'}; 
        var record = [];
        var stopped = false;
        var stopTime = false;
        var Recorder = new MediaRecorder(stream, options);
        console.log("initialized mediaRecorder");
        //startB.addEventListener('click', startRecording);
        //stopB.addEventListener('click', stopRecording);
        //Recorder.addEventListener('dataavailable', yuh);


      
        startB.onclick = function startRecording()
        {
          Recorder.start();
          startB.style.background = "red";
          stopB.style.background = "red";
        }
        

        stopB.onclick = function stopRecording() {

          Recorder.stop();
          startB.style.background = "blue";
          stopB.style.background = "blue";
          //downloadTime(record);
          stopTime = true;
        }
        Recorder.ondataavailable = function(yuh)
        {
            if (yuh.data.size > 0)
            {
                record.push(yuh.data);
            }
            if(stopTime == true)
            {
                Recorder.stop();
                stopped = true;
                //downloadTime(record);

            } 
        }
        downB.onclick = function downloadTime()
        {
          var blob = new Blob(record, {
            type: "audio/webm"
          });
          record = []
          var a = document.createElement("a");
          var url = URL.createObjectURL(blob);
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = url;
          a.download = "test.webm";
          a.click();
          window.URL.revokeObjectURL(url);
        }

        function downloadTime2(record) {
          var blob = new Blob(record, {
            type: "audio/webm"
          });
          record = []
          var a = document.createElement("a");
          var url = URL.createObjectURL(blob);
          document.body.appendChild(a);
          a.style = "display: none";
          a.href = url;
          a.download = "test.webm";
          a.click();
          window.URL.revokeObjectURL(url);
        }
      



     
        }
      var error = function(err){
        console.log("GetUserMedia didn't work, RIP");
      }
        navigator.mediaDevices.getUserMedia(constraints).then(Success, error);

    }
     
   
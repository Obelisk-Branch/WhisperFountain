var slideIndex = 1;
      showSlides(slideIndex);
    const startButton = document.getElementById(startButton);
    const stopButton = document.getElementById(stopButton);
    if (navigator.mediaDevices.getUserMedia)
    {
        console.log("getUserMedia isn't broken! Woo!");
    }
      const record = function(stream) {
        const options = {mimeType: 'audio/webm'}; 
        const record = []
        const Recorder = new MediaRecorder(stream, options);
        Recorder.addEventListener('dataavailable', function (yuh)
        {
            if (yuh.data.size > 0)
            {
                record.push(yuh.data);
            }
            if(stopTime == true && stopped == false)
            {
                Recorder.stop();
                stopped = true;
            } 
        });
        }   
      // Next/previous controls
      function plusSlides(n) {
        showSlides(slideIndex += n);
      }

      // Thumbnail image controls
      function currentSlide(n) {
        showSlides(slideIndex = n);
      }

      function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
      }
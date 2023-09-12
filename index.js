function startCamera(){
    console.log("Stream Start")
    var constraints = { audio: false, video: { facingMode: "environment" } };

    navigator.mediaDevices.getUserMedia(constraints)
    .then(
      function( stream ) {
        const video = document.querySelector("video");
        video.width = 1280;
        video.height = 720;
        video.srcObject = stream;
        video.onloadedmetadata = function( e ) {
          video.play();
        };
      }
    )
};

const stopCamera = () => {
    console.log("Stream Stop")
    var constraints = { audio: false, video: { facingMode: "environment" } };

    navigator.mediaDevices.getUserMedia( constraints )
    .then(
      function( stream ) {
        const video = document.querySelector("video");
        video.srcObject = stream;
        video.onloadedmetadata = function( e ) {
          stream.getVideoTracks()[0].stop();
        };
      }
    )
};

import styled from "styled-components";

const App = () => {
  const recorder = document.getElementById("recorder");
  const player = document.getElementById("player");

  const handleSuccess = function (stream) {
    player.srcObject = stream;
  };

  navigator.mediaDevices.enumerateDevices().then((devices) => {
    devices = devices.filter((d) => d.kind === "videoinput");
  });

  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then(handleSuccess);

  return (
    <CameraInput>
      <input type="file" accept="video/*" capture="camera" id="recorder" />
      <video id="player" controls></video>
    </CameraInput>
  );
};

const CameraInput = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: translateY(-10%);
`;

export default App;

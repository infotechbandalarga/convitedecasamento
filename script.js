function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const videoContainer = document.getElementById('videoContainer');
  const invitationVideo = document.getElementById('invitationVideo');

  // Esconder o envelope e mostrar o vídeo em tela cheia
  envelope.style.display = 'none';
  videoContainer.style.display = 'flex';
  
  // Iniciar o vídeo em tela cheia automaticamente
  invitationVideo.play();
}

function closeVideo() {
  const envelope = document.getElementById('envelope');
  const videoContainer = document.getElementById('videoContainer');
  const invitationVideo = document.getElementById('invitationVideo');

  // Parar o vídeo e sair de tela cheia
  invitationVideo.pause();
  videoContainer.style.display = 'none';
  envelope.style.display = 'block';
}
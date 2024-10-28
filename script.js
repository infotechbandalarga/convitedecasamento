function openEnvelope() {
  const envelopeContent = document.getElementById('envelopeContent');
  const videoContainer = document.getElementById('videoContainer');

  // Esconder o conteúdo do envelope
  envelopeContent.style.display = 'none';

  // Mostrar o vídeo
  videoContainer.style.display = 'flex'; // Mantém a centralização
}

function closeVideo() {
  const envelopeContent = document.getElementById('envelopeContent');
  const videoContainer = document.getElementById('videoContainer');

  // Mostrar o conteúdo do envelope
  envelopeContent.style.display = 'block';

  // Esconder o vídeo
  videoContainer.style.display = 'none';
}
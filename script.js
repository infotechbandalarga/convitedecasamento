function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const videoContainer = document.getElementById('videoContainer');
  
    // Esconder o envelope
    envelope.style.display = 'none';
  
    // Mostrar o vídeo
    videoContainer.style.display = 'flex'; // Manter como 'flex' para centralização
  }
  
  function closeVideo() {
    const envelope = document.getElementById('envelope');
    const videoContainer = document.getElementById('videoContainer');
  
    // Mostrar o envelope
    envelope.style.display = 'block';
  
    // Esconder o vídeo
    videoContainer.style.display = 'none';
  }
  
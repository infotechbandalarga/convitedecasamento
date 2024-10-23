function openEnvelope() {
  const envelope = document.getElementById('envelope');
  const videoContainer = document.getElementById('videoContainer');

  // Esconder o envelope
  envelope.style.display = 'none';

  // Mostrar o vídeo
  videoContainer.style.display = 'flex'; // Alterado para 'flex' para melhor centralização
}

function closeVideo() {
    console.log('Botão de voltar clicado'); // Para verificar se a função é chamada
    const envelope = document.getElementById('envelope');
    const videoContainer = document.getElementById('videoContainer');
  
    // Mostrar o envelope
    envelope.style.display = 'block';
  
    // Esconder o vídeo
    videoContainer.style.display = 'none';
  }  
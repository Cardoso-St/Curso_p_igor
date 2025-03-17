window.onload = function() {
   const audio = document.getElementById('meuAudio');
   //document.addEventListener('click', function() 
        audio.play().catch(function(error) {
            console.error('Erro ao reproduzir o áudio:', error);
        });
    
 }




const div1 = document.querySelector('.texto') 

window.onload = function() {
    alert('Bem-vindo à Guri Brigadeiro! Aproveite nossos deliciosos doces!');
};
document.addEventListener('DOMContentLoaded', function() {
  
    // Animação para a seção de texto
    const textElements = document.querySelectorAll('.texto p');
    
    // Inicializar estilo dos textos
    textElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        // Mostrar textos imediatamente com animação
        setTimeout(() => {
            element.style.transition = 'opacity 1s, transform 1s';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 300);
    });
    
    // Criar um popup de promoção após 3 segundos
    setTimeout(() => {
        const popup = document.createElement('div');
        popup.className = 'promo-popup';
        
        // Estilizar o popup
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.right = '20px';
        popup.style.backgroundColor = '#373851';
        popup.style.padding = '20px';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 4px 15px #ff69b4';
        popup.style.zIndex = '1000';
        popup.style.maxWidth = '300px';
        
        // Conteúdo do popup
        popup.innerHTML = `
            <h3 style="margin-bottom: 10px; color: #ff69b4; font-size: 18px;">Oferta Especial!</h3>
            <p style="margin-bottom: 15px;">Ganhe 10% de desconto na sua primeira compra. Use o cupom: GURI10</p>
            <button id="closePopup" style="background: #ff69b4; color:rgb(0, 0, 0); border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold;">Fechar</button>
        `;
        
        // Adicionar ao corpo da página
        document.body.appendChild(popup);
        
        // Adicionar função de fechar
        document.getElementById('closePopup').addEventListener('click', () => {
            popup.remove();
        });
    }, 3000);
});



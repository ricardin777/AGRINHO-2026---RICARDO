document.addEventListener("DOMContentLoaded", function () {

    // 🌱 mensagem de boas-vindas
    console.log("🌾 AgroTech carregado com sucesso!");
  
    // 🌾 pega todos os cards
    const cards = document.querySelectorAll(".card");
  
    cards.forEach(card => {
      card.addEventListener("click", function () {
  
        // efeito visual ao clicar
        card.style.transform = "scale(1.05)";
        card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
  
        // volta ao normal depois
        setTimeout(() => {
          card.style.transform = "scale(1)";
          card.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
        }, 300);
  
      });
    });
  
  });
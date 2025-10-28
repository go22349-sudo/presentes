const links = [
  {
    titulo: "Camisetas Oversized berserk",
    descricao: "Imagem de exemplo Tamnho G.",
    imagem: "https://berzerk.com.br/cdn/shop/files/Costasshura_1000x.png?v=1759435264",
    url: "https://berzerk.com.br/products/oversized-shura"
  },
  {
    titulo: "Corrente",
    descricao: "corrente.",
    imagem: "https://images.tcdn.com.br/img/img_prod/684087/conjunto_corrente_pingente_born_to_win_banho_prata_22141_1_c94ebc305cca95beea2ceef518fd325d.jpg",
    url: "https://www.garimpodeouro.com.br/masculino/conjunto-corrente-pingente-born-to-win-banho-prata"
  },
  {
    titulo: "Camisa Santos",
    descricao: "Tamanho G.",
    imagem: "https://wantedind.com/wp-content/uploads/2025/03/01-SEMPRE-SANTOS-CAMISA-POLO-.png",
    url: "https://wantedind.com/loja/camisa-polo-sempre-santos/"
  }
];

const idieas = document.getElementById('ideias');

links.forEach(link => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="${link.imagem}" alt="${link.titulo}">
    <div class="card-content">
      <h3>${link.titulo}</h3>
      <p>${link.descricao}</p>
      <a href="${link.url}" target="_blank">Visitar →</a>
    </div>
  `;
  ideias.appendChild(card);
});

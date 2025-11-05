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
  },
  {
    titulo: "Game stick",
    descricao: "Game stick.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_965644-MLB97009032943_112025-F.webp",
    url: "https://www.mercadolivre.com.br/adaptador-videogame-game-stick-m15-hdmi-retro-2-controles/up/MLBU3536142982?pdp_filters=item_id:MLB5889938088#is_advertising=true&searchVariation=MLBU3536142982&backend_model=search-backend&position=1&search_layout=grid&type=pad&tracking_id=c83d3285-3666-4082-93d7-e6de7657fd5c&ad_domain=VQCATCORE_LST&ad_position=1&ad_click_id=YmYwMDg2NmUtMjU0My00MDY2LTg0N2MtNjcyZTI5NmRkYTNm"
  },
  {
    titulo: "Barrinha",
    descricao: "Barrinha.",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_2X_697324-MLA96155280493_102025-F.webp",
    url: "https://www.mercadolivre.com.br/barra-de-proteina-crisp-bar-ovomaltine-12-unidades-integralmedica/p/MLB48937886?pdp_filters=item_id%3AMLB5751307170#polycard_client=cart_list&wid=MLB5751307170&sid=cart"
  },
  {
    titulo: "Tenis Branco",
    descricao: "Tamanho 40/41. Pode ser outras marcas preferencia branco.",
    imagem: "https://imgcentauro-a.akamaihd.net/660x660/98436301A1.jpg",
    url: "https://www.centauro.com.br/tenis-puma-caven-2-0-bdp-masculino-984363.html?cor=01&utm_term=&utm_campaign=SCH_NOB_PMAX_USC_Apostas&utm_content=Apostas_bf2025&utm_source=google&utm_medium=cpc&gad_source=1&gad_campaignid=18189325582&gclid=Cj0KCQiA5abIBhCaARIsAM3-zFVl5u21BsuB7ZX33SsVcW8_Nw57LL717iDUo5-fvYfEbd_0xyKQmlgaAsxvEALw_wcB&utm_referrer=https://www.google.com/"
  },
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

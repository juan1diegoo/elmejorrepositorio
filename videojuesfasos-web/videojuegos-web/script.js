

document.addEventListener('DOMContentLoaded', () => {
   
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
      link.addEventListener('click', e => {
        if (link.hash !== '') {
          e.preventDefault();
          const target = document.querySelector(link.hash);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  
    
    const games = [
      {
        title: "Cyberpunk 2077",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg",
        description: "RPG futurista en mundo abierto."
      },
      {
        title: "Elden Ring",
        image: "https://cdn.akamai.steamstatic.com/steam/apps/1245620/header.jpg",
        description: "Una experiencia épica de fantasía oscura."
      }
    ];
  
    const container = document.querySelector('.container');
  
    if (container && games.length > 0) {
      games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
          <p>${game.description}</p>
        `;
        container.appendChild(card);
      });
    }
  });
  
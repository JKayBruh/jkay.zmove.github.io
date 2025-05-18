// boss.js
class BossTeams {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    if (window.bossData) this.renderBossTeams();
  }

  renderBossTeams() {
    const container = document.getElementById('boss-container');
    container.innerHTML = '';

    window.bossData.forEach(boss => {
      const bossSection = document.createElement('div');
      bossSection.className = 'boss-section';
      
      // Lấy màu theo hệ đầu tiên
      const primaryType = boss.type.split('/')[0].trim();
      const typeColor = this.getTypeColor(primaryType);

      bossSection.innerHTML = `
        <h2 class="boss-header" style="border-color: ${typeColor}">
          ${boss.type}
        </h2>
        <div class="boss-teams-container"></div>
      `;

      const teamsContainer = bossSection.querySelector('.boss-teams-container');
      const header = bossSection.querySelector('.boss-header');
header.addEventListener('click', () => {
  const isVisible = teamsContainer.style.display !== 'none';
  teamsContainer.style.display = isVisible ? 'none' : 'block';
});

      boss.teams.forEach((team, index) => {
        const teamDiv = document.createElement('div');
        teamDiv.className = 'boss-team';
        teamDiv.innerHTML = `<h3>Team ${index + 1}</h3>`;
        
        const grid = document.createElement('div');
        grid.className = 'pokemon-grid';
        
        team.forEach(pokemon => {
          grid.appendChild(this.createPokemonCard(pokemon, typeColor));
        });
        
        teamDiv.appendChild(grid);
        teamsContainer.appendChild(teamDiv);
      });

      container.appendChild(bossSection);
    });
  }

  createPokemonCard(name, typeColor) {
    const card = document.createElement('div');
    card.className = 'pokemon-card';
    
    const isMega = name.includes('Mega');
    const imgUrl = this.getPokemonImage(name);
    
    card.innerHTML = `
      <img class="pokemon-image" 
           src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23f0f0f0'/%3E%3C/svg%3E" 
           data-src="${imgUrl}"
           alt="${name}"
           loading="lazy">
      <div class="pokemon-name">${name}</div>
     
    `;
    
    return card;
  }

  getTypeColor(type) {
    const typeColors = {
      'Normal': '#A8A878',
      'Fire': '#F08030',
      'Water': '#6890F0',
      // Thêm các hệ khác...
    };
    return typeColors[type] || '#777';
  }

  getPokemonImage(name) {
    const formattedName = name.toLowerCase()
      .replace(' mega', '-mega')
      .replace(' alolan', '-alola')
      .replace(/\s+/g, '-');
    return `https://img.pokemondb.net/sprites/sword-shield/icon/${formattedName}.png`;
  }

  setupEventListeners() {
    document.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        if (btn.dataset.mode === 'teams') {
          document.querySelector('.teams-content').style.display = 'block';
          document.querySelector('.bosses-content').style.display = 'none';
        } else {
          document.querySelector('.teams-content').style.display = 'none';
          document.querySelector('.bosses-content').style.display = 'block';
          if (!document.getElementById('boss-container').innerHTML) {
            this.renderBossTeams();
          }
        }
      });
    });
  }
}

// Khởi tạo khi DOM sẵn sàng
document.addEventListener('DOMContentLoaded', () => {
  new BossTeams();
});
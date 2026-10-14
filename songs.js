// Массив треков REDEMPTATION
const redemptationTracks = [
  { title: "Redemptation", file: "a3f9c2.mp3" },
  { title: "The Only One Who Stayed", file: "b7e1d4.mp3" },
  { title: "Angela", file: "c5a8f0.mp3" },
  { title: "Tamara", file: "d2b6e9.mp3" },
  { title: "RUSSIA", file: "e8c3a1.mp3" },
  { title: "Out of the Gray Storm", file: "f4d7b2.mp3" },
  { title: "Thank you", file: "1a9e5c.mp3" },
  { title: "Two Brothers", file: "2b8f6d.mp3" },
  { title: "The Demon", file: "3c7a4e.mp3" },
  { title: "The Scar", file: "4d6b9f.mp3" },
  { title: "London, I Am Your Son", file: "5e5c8a.mp3" },
  { title: "Home", file: "6f4d7b.mp3" },
  { title: "Together", file: "7a3e2c.mp3" },
  { title: "Angela (Russian Version)", file: "8b1f9d.mp3" },
  { title: "KARDASH", file: "9c0a6e.mp3" },
  { title: "Out of the Gray Storm (Russian Version)", file: "0d9b5f.mp3" }
];

// Массив треков квинтета
const quintetTracks = [
  { title: "Ту-144", file: "a1b2c3.mp3" },
  { title: "Полёт", file: "d4e5f6.mp3" },
  { title: "Цыганская плясовая", file: "g7h8i9.mp3" },
  { title: "Над горизонтом", file: "j0k1l2.mp3" }
];

// Массив состава группы
const bandMembers = [
  { name: "Михаил Матвеев", role: "Основатель, гитара", img: "images/band/mikhail.jpg" },
  { name: "Michael Matthew", role: "Вокал", img: "images/band/michael.jpg" },
  { name: "Алексей «Лёха» Ветров", role: "Соло-гитара", img: "images/band/lyokha.jpg" },
  { name: "Дмитрий «Дима» Сталь", role: "Ритм-гитара", img: "images/band/stal.jpg" },
  { name: "Сергей «Серж» Волков", role: "Бас-гитара", img: "images/band/serzh.jpg" },
  { name: "Андрей «Драйв» Ковалёв", role: "Барабаны", img: "images/band/draiv.jpg" },
  { name: "Екатерина «Катя» Соболева", role: "Виолончель", img: "images/band/katya.jpg" },
  { name: "Артём «Тёмный» Лебедев", role: "Клавиши", img: "images/band/tyomny.jpg" }
];

let currentAudio = null;
let currentButton = null;

function createTrackElement(track, folder) {
  const div = document.createElement('div');
  div.className = 'track';
  
  const title = document.createElement('div');
  title.className = 'track-title';
  title.innerHTML = `<span>▶</span> ${track.title}`;
  
  const btn = document.createElement('button');
  btn.className = 'play-btn';
  btn.textContent = 'Слушать';
  
  btn.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
      if (currentButton) {
        currentButton.textContent = 'Слушать';
        currentButton.disabled = false;
      }
    }
    
    if (currentButton === btn) {
      currentButton = null;
      return;
    }
    
    btn.textContent = 'Загрузка...';
    btn.disabled = true;
    
    const audioUrl = folder + track.file;
    
    fetch(audioUrl)
      .then(response => response.blob())
      .then(blob => {
        const blobUrl = URL.createObjectURL(blob);
        const audio = new Audio(blobUrl);
        
        audio.addEventListener('ended', () => {
          btn.textContent = 'Слушать';
          btn.disabled = false;
          currentAudio = null;
          currentButton = null;
        });
        
        audio.play();
        currentAudio = audio;
        currentButton = btn;
        btn.textContent = 'Играет...';
        btn.disabled = false;
      })
      .catch(err => {
        console.error('Ошибка загрузки:', err);
        btn.textContent = 'Ошибка';
        btn.disabled = false;
      });
  });
  
  div.appendChild(title);
  div.appendChild(btn);
  return div;
}

function createBandMember(member) {
  const div = document.createElement('div');
  div.className = 'band-member';
  
  const img = document.createElement('img');
  img.src = member.img;
  img.alt = member.name;
  
  const name = document.createElement('p');
  name.innerHTML = `<strong>${member.name}</strong><br>${member.role}`;
  
  div.appendChild(img);
  div.appendChild(name);
  return div;
}

function renderAll() {
  const trackList = document.getElementById('track-list');
  redemptationTracks.forEach(track => {
    trackList.appendChild(createTrackElement(track, 'audio/previews/'));
  });
  
  const quintetList = document.getElementById('quintet-list');
  quintetTracks.forEach(track => {
    quintetList.appendChild(createTrackElement(track, 'audio/quintet/'));
  });
  
  const bandList = document.getElementById('band-list');
  bandMembers.forEach(member => {
    bandList.appendChild(createBandMember(member));
  });
}

document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('DOMContentLoaded', renderAll);
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

// Основной состав
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

// Экспромт-квинтет
const quintetMembers = [
  { name: "Илья Матвеев", role: "Домра", img: "images/quintet/ilya.jpg" },
  { name: "Андрей Демидов", role: "Балалайка", img: "images/quintet/demidov.jpg" },
  { name: "Сергей Погурцев", role: "Баян", img: "images/quintet/pogurtsev.jpg" },
  { name: "Константин Ильгин", role: "Гитара", img: "images/quintet/ilgin.jpg" },
  { name: "Гай Давтян", role: "Контрабас", img: "images/quintet/davtyan.jpg" }
];

// Состояние плеера
let currentAudio = null;
let currentButton = null;
let currentTracks = null;
let currentButtons = null;
let currentFolder = null;
let currentIndex = -1;

function playAt(index, tracks, buttons, folder) {
  // Остановить текущий
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }
  if (currentButton) {
    currentButton.textContent = 'Слушать';
    currentButton.disabled = false;
  }

  // Конец плейлиста
  if (index >= tracks.length || index < 0) {
    currentButton = null;
    return;
  }

  const track = tracks[index];
  const btn = buttons[index];

  btn.textContent = 'Загрузка...';
  btn.disabled = true;

  fetch(folder + track.file)
    .then(r => r.blob())
    .then(blob => {
      const audio = new Audio(URL.createObjectURL(blob));

      audio.addEventListener('ended', () => {
        // Автоплей следующего
        playAt(index + 1, tracks, buttons, folder);
      });

      audio.play();
      currentAudio = audio;
      currentButton = btn;
      currentTracks = tracks;
      currentButtons = buttons;
      currentFolder = folder;
      currentIndex = index;
      btn.textContent = 'Играет...';
      btn.disabled = false;
    })
    .catch(err => {
      console.error('Ошибка загрузки:', err);
      btn.textContent = 'Ошибка';
      btn.disabled = false;
    });
}

function renderTracks(tracks, folder, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const buttons = [];

  tracks.forEach((track, index) => {
    const div = document.createElement('div');
    div.className = 'track';

    const title = document.createElement('div');
    title.className = 'track-title';
    title.innerHTML = `<span>▶</span> ${track.title}`;

    const btn = document.createElement('button');
    btn.className = 'play-btn';
    btn.textContent = 'Слушать';

    btn.addEventListener('click', () => {
      // Если играет этот трек — стоп
      if (currentButton === btn && currentAudio) {
        currentAudio.pause();
        currentAudio = null;
        currentButton = null;
        btn.textContent = 'Слушать';
        return;
      }
      // Иначе — играть с этого места
      playAt(index, tracks, buttons, folder);
    });

    buttons.push(btn);
    div.appendChild(title);
    div.appendChild(btn);
    container.appendChild(div);
  });
}

function createMemberCard(member) {
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
  renderTracks(redemptationTracks, 'audio/previews/', 'track-list');
  renderTracks(quintetTracks, 'audio/quintet/', 'quintet-list');

  const bandList = document.getElementById('band-list');
  if (bandList) {
    bandMembers.forEach(m => bandList.appendChild(createMemberCard(m)));
  }

  const quintetPhotos = document.getElementById('quintet-photos');
  if (quintetPhotos) {
    quintetMembers.forEach(m => quintetPhotos.appendChild(createMemberCard(m)));
  }
}

// Остановить аудио при уходе со вкладки
document.addEventListener('visibilitychange', () => {
  if (document.hidden && currentAudio) {
    currentAudio.pause();
    currentAudio = null;
    if (currentButton) {
      currentButton.textContent = 'Слушать';
      currentButton = null;
    }
  }
});

// Защита от правой кнопки мыши
document.addEventListener('contextmenu', e => e.preventDefault());

// Инициализация
document.addEventListener('DOMContentLoaded', renderAll);

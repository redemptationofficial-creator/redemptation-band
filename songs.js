// songs.js — REDEMPTATION
// Язык берётся из <html lang="...">: en / ru / zh-CN
// Adèle Vermeil сюда не входит. Проекты не смешиваем.

const pageLang = (document.documentElement.lang || 'ru').toLowerCase();
const currentLang = pageLang.startsWith('en')
  ? 'en'
  : pageLang.startsWith('zh')
    ? 'zh'
    : 'ru';

function pickLang(value) {
  if (typeof value === 'string') return value;
  if (!value) return '';
  return value[currentLang] || value.en || value.ru || value.zh || '';
}

// 16 треков REDEMPTATION
const redemptationTracks = [
  { title: { en: "Redemptation", ru: "Редемптейшн", zh: "救赎与诱惑" }, file: "a3f9c2.mp3" },
  { title: { en: "The Only One Who Stayed", ru: "Единственная, кто осталась", zh: "唯一留下的人" }, file: "b7e1d4.mp3" },
  { title: { en: "Angela", ru: "Анжела", zh: "安吉拉" }, file: "c5a8f0.mp3" },
  { title: { en: "Tamara", ru: "Тамара", zh: "塔玛拉" }, file: "d2b6e9.mp3" },
  { title: { en: "RUSSIA", ru: "Россия", zh: "俄罗斯" }, file: "e8c3a1.mp3" },
  { title: { en: "Out of the Gray Storm", ru: "Из серого шторма", zh: "走出灰色风暴" }, file: "f4d7b2.mp3" },
  { title: { en: "Thank You", ru: "Спасибо", zh: "谢谢你" }, file: "1a9e5c.mp3" },
  { title: { en: "Two Brothers", ru: "Два брата", zh: "两兄弟" }, file: "2b8f6d.mp3" },
  { title: { en: "The Demon", ru: "Демон", zh: "恶魔" }, file: "3c7a4e.mp3" },
  { title: { en: "The Scar", ru: "Шрам", zh: "伤痕" }, file: "4d6b9f.mp3" },
  { title: { en: "London, I Am Your Son", ru: "Лондон, я твой сын", zh: "伦敦，我是你的儿子" }, file: "5e5c8a.mp3" },
  { title: { en: "Home", ru: "Дом", zh: "家" }, file: "6f4d7b.mp3" },
  { title: { en: "Together", ru: "Вместе", zh: "在一起" }, file: "7a3e2c.mp3" },
  { title: { en: "Angela (Russian Version)", ru: "Анжела (русская версия)", zh: "安吉拉（俄语版）" }, file: "8b1f9d.mp3" },
  { title: { en: "KARDASH", ru: "Кардаш", zh: "卡尔达什" }, file: "9c0a6e.mp3" },
  { title: { en: "Out of the Gray Storm (Russian Version)", ru: "Из серого шторма (русская версия)", zh: "走出灰色风暴（俄语版）" }, file: "0d9b5f.mp3" }
];

// Экспромт-квинтет
const quintetTracks = [
  { title: { en: "Tu-144", ru: "Ту-144", zh: "图-144" }, file: "a1b2c3.mp3" },
  { title: { en: "Flight", ru: "Полёт", zh: "飞行" }, file: "d4e5f6.mp3" },
  { title: { en: "Gypsy Dance", ru: "Цыганская плясовая", zh: "吉普赛舞曲" }, file: "g7h8i9.mp3" },
  { title: { en: "Above the Horizon", ru: "Над горизонтом", zh: "地平线之上" }, file: "j0k1l2.mp3" }
];

// Основной состав
const bandMembers = [
  { name: { en: "Mikhail Matveev", ru: "Михаил Матвеев", zh: "米哈伊尔·马特维耶夫 (Mikhail Matveev)" }, role: { en: "Founder, guitar", ru: "Основатель, гитара", zh: "创始人，吉他手" }, img: "images/band/mikhail.jpg" },
  { name: { en: "Michael Matthew", ru: "Michael Matthew", zh: "迈克尔·马修 (Michael Matthew)" }, role: { en: "Vocals", ru: "Вокал", zh: "主唱" }, img: "images/band/michael.jpg" },
  { name: { en: 'Alexey "Lyokha" Vetrov', ru: "Алексей «Лёха» Ветров", zh: "阿列克谢·“廖哈”·韦特罗夫" }, role: { en: "Lead guitar", ru: "Соло-гитара", zh: "主音吉他" }, img: "images/band/lyokha.jpg" },
  { name: { en: 'Dmitry "Dima" Stal', ru: "Дмитрий «Дима» Сталь", zh: "德米特里·“季马”·斯塔尔" }, role: { en: "Rhythm guitar", ru: "Ритм-гитара", zh: "节奏吉他" }, img: "images/band/stal.jpg" },
  { name: { en: 'Sergey "Serzh" Volkov', ru: "Сергей «Серж» Волков", zh: "谢尔盖·“谢尔日”·沃尔科夫" }, role: { en: "Bass guitar", ru: "Бас-гитара", zh: "贝斯手" }, img: "images/band/serzh.jpg" },
  { name: { en: 'Andrey "Drive" Kovalev', ru: "Андрей «Драйв» Ковалёв", zh: "安德烈·“驱动”·科瓦廖夫" }, role: { en: "Drums", ru: "Барабаны", zh: "鼓手" }, img: "images/band/draiv.jpg" },
  { name: { en: 'Ekaterina "Katya" Soboleva', ru: "Екатерина «Катя» Соболева", zh: "叶卡捷琳娜·“卡佳”·索博列娃" }, role: { en: "Cello", ru: "Виолончель", zh: "大提琴" }, img: "images/band/katya.jpg" },
  { name: { en: 'Artem "Tyomny" Lebedev', ru: "Артём «Тёмный» Лебедев", zh: "阿尔乔姆·“暗影”·列别杰夫" }, role: { en: "Keyboards", ru: "Клавиши", zh: "键盘手" }, img: "images/band/tyomny.jpg" }
];

// Экспромт-квинтет
const quintetMembers = [
  { name: { en: "Ilya Matveev", ru: "Илья Матвеев", zh: "伊利亚·马特维耶夫" }, role: { en: "Domra", ru: "Домра", zh: "多姆拉琴" }, img: "images/quintet/ilya.jpg" },
  { name: { en: "Andrey Demidov", ru: "Андрей Демидов", zh: "安德烈·杰米多夫" }, role: { en: "Balalaika", ru: "Балалайка", zh: "巴拉莱卡" }, img: "images/quintet/demidov.jpg" },
  { name: { en: "Sergey Pogurtsev", ru: "Сергей Погурцев", zh: "谢尔盖·波古尔采夫" }, role: { en: "Bayan", ru: "Баян", zh: "巴扬手风琴" }, img: "images/quintet/pogurtsev.jpg" },
  { name: { en: "Konstantin Ilgin", ru: "Константин Ильгин", zh: "康斯坦丁·伊利金" }, role: { en: "Guitar", ru: "Гитара", zh: "吉他" }, img: "images/quintet/ilgin.jpg" },
  { name: { en: "Guy Davtyan", ru: "Гай Давтян", zh: "盖伊·达夫强" }, role: { en: "Double bass", ru: "Контрабас", zh: "低音提琴" }, img: "images/quintet/davtyan.jpg" }
];

// --- ЛОГИКА ПЛЕЕРА (С АВТОПЕРЕХОДОМ) ---

let currentAudio = null;
let currentButton = null;
let currentTrackIndex = -1;
let currentPlaylist = [];
let currentFolder = '';

const idleText = currentLang === 'en' ? 'Listen' : currentLang === 'zh' ? '试听' : 'Слушать';
const loadingText = currentLang === 'en' ? 'Loading...' : currentLang === 'zh' ? '加载中...' : 'Загрузка...';
const playingText = currentLang === 'en' ? 'Playing...' : currentLang === 'zh' ? '播放中...' : 'Играет...';

function playTrack(playlist, index, folder, btnElement) {
  // Если нажали на тот же трек, который играет — ставим на паузу
  if (currentAudio && currentButton === btnElement && !currentAudio.paused) {
    currentAudio.pause();
    btnElement.textContent = idleText;
    return;
  }

  // Если нажали на тот же трек, который на паузе — продолжаем
  if (currentAudio && currentButton === btnElement && currentAudio.paused) {
    currentAudio.play();
    btnElement.textContent = playingText;
    return;
  }

  // Остановить предыдущий
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if (currentButton) {
    currentButton.textContent = idleText;
    currentButton.disabled = false;
  }

  // Конец плейлиста
  if (index >= playlist.length) {
    currentTrackIndex = -1;
    currentPlaylist = [];
    return;
  }

  const track = playlist[index];
  currentTrackIndex = index;
  currentPlaylist = playlist;
  currentFolder = folder;
  currentButton = btnElement;

  btnElement.textContent = loadingText;
  btnElement.disabled = true;

  const audioUrl = folder + track.file;

  fetch(audioUrl)
    .then(response => {
      if (!response.ok) throw new Error('HTTP ' + response.status);
      return response.blob();
    })
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);
      currentAudio = new Audio(blobUrl);

      currentAudio.addEventListener('ended', () => {
        URL.revokeObjectURL(blobUrl);
        // МАГИЯ АВТОПЕРЕХОДА: запускаем следующий трек
        if (currentPlaylist === playlist) { // Проверка, что плейлист не сменился
          playTrack(playlist, index + 1, folder, null);
        }
      });

      currentAudio.play();
      btnElement.textContent = playingText;
      btnElement.disabled = false;
      
      // Если следующий трек существует, заранее готовим его кнопку (опционально)
    })
    .catch(err => {
      console.error('Ошибка загрузки:', err);
      btnElement.textContent = currentLang === 'en' ? 'Error' : currentLang === 'zh' ? '错误' : 'Ошибка';
      btnElement.disabled = false;
    });
}

function createTrackElement(track, folder, playlist, index) {
  const div = document.createElement('div');
  div.className = 'track';

  const title = document.createElement('div');
  title.className = 'track-title';

  const arrow = document.createElement('span');
  arrow.textContent = '▶';

  const label = document.createElement('span');
  label.textContent = pickLang(track.title);

  title.appendChild(arrow);
  title.appendChild(label);

  const btn = document.createElement('button');
  btn.className = 'play-btn';
  btn.textContent = idleText;

  btn.addEventListener('click', () => {
    playTrack(playlist, index, folder, btn);
  });

  div.appendChild(title);
  div.appendChild(btn);
  return div;
}

function createMemberCard(member) {
  const div = document.createElement('div');
  div.className = 'band-member';

  const img = document.createElement('img');
  img.src = member.img;
  img.alt = pickLang(member.name);

  const name = document.createElement('p');
  const strong = document.createElement('strong');
  strong.textContent = pickLang(member.name);

  name.appendChild(strong);
  name.appendChild(document.createElement('br'));
  name.appendChild(document.createTextNode(pickLang(member.role)));

  div.appendChild(img);
  div.appendChild(name);
  return div;
}

function renderAll() {
  const trackList = document.getElementById('track-list');
  if (trackList) {
    redemptationTracks.forEach((track, index) => {
      trackList.appendChild(createTrackElement(track, 'audio/previews/', redemptationTracks, index));
    });
  }

  const quintetList = document.getElementById('quintet-list');
  if (quintetList) {
    quintetTracks.forEach((track, index) => {
      quintetList.appendChild(createTrackElement(track, 'audio/quintet/', quintetTracks, index));
    });
  }

  const bandList = document.getElementById('band-list');
  if (bandList) {
    bandMembers.forEach(member => {
      bandList.appendChild(createMemberCard(member));
    });
  }

  const quintetPhotos = document.getElementById('quintet-photos');
  if (quintetPhotos) {
    quintetMembers.forEach(member => {
      quintetPhotos.appendChild(createMemberCard(member));
    });
  }
}

// Защита от правой кнопки мыши
document.addEventListener('contextmenu', e => e.preventDefault());

document.addEventListener('DOMContentLoaded', renderAll);

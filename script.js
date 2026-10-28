
const videos = [
  "videos/chickengun.mp4",
  "videos/standoff.mp4",
  "videos/femboys.mp4",
  "videos/skibidi.mp4"
];

const titles = [
  "🐔 Чикен Ган",
  "🎯 Стандофф",
  "💅 Фембои",
  "🚽 Скибиди-туалеты"
];

const player = document.getElementById("player");
const video = document.getElementById("video");
const videoTitle = document.getElementById("videoTitle");
const message = document.getElementById("message");

document.querySelectorAll(".tile").forEach(button => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.index);

    if (index < 0 || index >= videos.length) return;

    player.classList.add("active");
    videoTitle.textContent = titles[index];

    player.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

    video.pause();
    video.removeAttribute("src");
    video.load();

    video.style.display = "block";
    message.style.display = "none";

    video.src = videos[index];

    video.onerror = () => {
      video.style.display = "none";
      message.style.display = "block";
      message.textContent =
        "Не удалось загрузить видео. Проверь название файла " +
        "и наличие видео в папке videos на GitHub.";
    };

    video.load();

    video.play().catch(() => {
      // Если автозапуск заблокирован, нажми Play.
    });
  });
});

document.getElementById("close").addEventListener("click", () => {
  video.pause();
  video.removeAttribute("src");
  video.load();

  player.classList.remove("active");
});

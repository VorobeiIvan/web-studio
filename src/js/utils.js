// Функція для завантаження HTML частини
export function loadSection(url, elementId) {
  fetch(url)
    .then((response) => response.text()) // Отримуємо HTML як текст
    .then((html) => {
      document.getElementById(elementId).innerHTML = html; // Вставляємо HTML у DOM
    })
    .catch((error) => {
      console.warn("Помилка завантаження:", error);
    });
}

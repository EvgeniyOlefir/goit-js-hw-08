import images from "../gallery-items.js";

// функция создания разметки
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
  >
    <img
    class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
      </a>
      </li>
      `;
    })
    .join("");
}

// функция фильтра кликов делегирования
function onImgClick(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  currentImg = e.target;

  e.preventDefault();
  addLightboxContent(currentImg);
  onOpenModal();
}

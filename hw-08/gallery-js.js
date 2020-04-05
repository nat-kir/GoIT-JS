import images from "./gallery-items.js";

const galleryRef = document.querySelector(".js-gallery");
const modalRef = document.querySelector(".js-lightbox");
const originalImgRef = document.querySelector(".lightbox__image");
const modalCloseBtnRef = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const modalOverlayRef = document.querySelector(".lightbox__content");

galleryRef.addEventListener("click", onOpenModal);
modalCloseBtnRef.addEventListener("click", onCloseModal);
modalOverlayRef.addEventListener("click", OverlayCloseModal);

const a = images.map(image => {
  const index = images.indexOf(image);
  const imageString = `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
      data-index = "${index}"
    />
  </a>
</li>`;
  galleryRef.insertAdjacentHTML("beforeend", imageString);
});

function onOpenModal(event) {
  event.preventDefault();
  window.addEventListener("keydown", onPressEsc);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  modalRef.classList.add("is-open");
  originalImgRef.src = event.target.dataset.source;
  window.addEventListener("keydown", leftrightImgController);  
}

function onCloseModal(event) {
  modalRef.classList.remove("is-open");
  originalImgRef.src = "";
  window.removeEventListener("keydown", onPressEsc);
  window.removeEventListener("keydown", leftrightImgController);
}

function OverlayCloseModal(event) {
  if (event.target === event.currentTarget) {
    onCloseModal();
  }
}
function onPressEsc(event) {
  if (event.code === "Escape") {
    onCloseModal();
  }
}

function leftrightImgController(event) {
  if (event.code === "ArrowRight") {
    const currentImg = originalImgRef.src;
    const currentImage = images.find(image => image.original === currentImg);
    const currentImgIndex = images.indexOf(currentImage);
    let targetNextImgIndex = Number(currentImgIndex);
    targetNextImgIndex = targetNextImgIndex + 1;
    if (targetNextImgIndex > 8) {
      onCloseModal();
      return;
    }
    const nextImage =
      galleryRef.childNodes[targetNextImgIndex].firstElementChild
        .firstElementChild;
    originalImgRef.src = nextImage.dataset.source;
  }

  if (event.code === "ArrowLeft") {
    const currentImg = originalImgRef.src;
    const currentImage = images.find(image => image.original === currentImg);
    const currentImgIndex = images.indexOf(currentImage);
    let targetNextImgIndex = Number(currentImgIndex);
    targetNextImgIndex = targetNextImgIndex - 1;
    if (targetNextImgIndex < 0) {
      onCloseModal();
      return;
    }
    const nextImage =
      galleryRef.childNodes[targetNextImgIndex].firstElementChild
        .firstElementChild;
    originalImgRef.src = nextImage.dataset.source;
  }
}

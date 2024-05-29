import { galleryItems } from "./gallery-items.js";

const galleryList = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
  </li>`
).join("")

const gallery = document.getElementById("gallery");
gallery.innerHTML = galleryList;

// ----- Open Modal Popup ------


let visiblePopup = false;

document.getElementById('gallery').addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target && event.target.classList.contains('gallery__image')) {

    const instance = basicLightbox.create(`
      <img width="1400" height="900" src="${event.target.dataset.source}" alt="${event.target.alt}">
    `,
      {
        closable: false,
        onShow: () => {
          console.log('is shown');
        },
      })
    instance.show()
    visiblePopup = instance.visible()



    // ----- Close popup on Esc ------
    document.addEventListener("keydown", (event) => {
      if ((event.key == 'Escape' || event.key == 'Esc') && visiblePopup) {
        instance.close();
      }
    })

  }
});

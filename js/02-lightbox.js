import { galleryItems } from "./gallery-items.js";

const galleryList = galleryItems.map( ({ preview, original, description }) =>
  `<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`
).join("")

const gallery = document.getElementById("gallery");
gallery.innerHTML = galleryList;

let lightbox = new SimpleLightbox('.gallery a', 
    { 
        captionsData: 'alt',
        captionDelay: 250
    }
);
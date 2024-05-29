console.log('test');

import { galleryItems } from "./gallery-items.js";

console.log(galleryItems);

const galleryList = galleryItems.map(el=>
  `<div class="gallery__item"><img scr="${el.preview}" /></div>`
).join("")

const gallery = document.getElementById("gallery")

console.log(gallery);

gallery.innerHTML = galleryList;
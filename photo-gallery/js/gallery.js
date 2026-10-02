const photos = [
  {
    src: "images/photo01.jpg",
    title: "夕暮れ",
    description: "夕方に撮影した一枚。",
    category: "landscape"
  },
  {
    src: "images/photo02.jpg",
    title: "街の風景",
    description: "街を歩いている途中で撮影しました。",
    category: "city"
  },
  {
    src: "images/photo03.jpg",
    title: "お気に入り",
    description: "個人的に気に入っている写真です。",
    category: "other"
  }
];

const gallery = document.getElementById("gallery");

function displayPhotos(category = "all") {
  gallery.innerHTML = "";

  const filteredPhotos =
    category === "all"
      ? photos
      : photos.filter(photo => photo.category === category);

  filteredPhotos.forEach(photo => {
    const card = document.createElement("article");
    card.className = "photo-card";

    card.innerHTML = `
      <img src="${photo.src}" alt="${photo.title}">
      <div class="photo-info">
        <h3>${photo.title}</h3>
        <p>${photo.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      openModal(photo);
    });

    gallery.appendChild(card);
  });
}

const buttons = document.querySelectorAll(".category-buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    displayPhotos(category);
  });
});

const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.getElementById("modal-close");

function openModal(photo) {
  modalImage.src = photo.src;
  modalTitle.textContent = photo.title;
  modalDescription.textContent = photo.description;

  modal.classList.add("show");
}

modalClose.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", event => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

displayPhotos();
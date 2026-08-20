 const gallery = document.querySelector(".image-gallery");
const items = [...gallery.querySelectorAll("a")];

function layoutGallery() {
  const gap = 16;
  const minimumItemWidth = 200;

  const columns = Math.max(
    1,
    Math.floor((gallery.clientWidth + gap) / (minimumItemWidth + gap))
  );

  gallery.style.setProperty("--gallery-columns", columns);
  let index = 0;
  items.forEach((item) => {
    index = index + (3 + Math.floor(Math.random() * 4));
    const position = index;
    const column = position % columns;
    const row = Math.floor(position / columns);

    item.style.gridColumnStart = column + 1;
    item.style.gridRow = row + 1;
  });
}

layoutGallery();
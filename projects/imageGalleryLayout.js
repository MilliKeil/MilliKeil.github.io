 const gallery = document.querySelector(".image-gallery");
const items = [...gallery.querySelectorAll("a")];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function layoutGallery() {
  const gap = 16;
  const minimumItemWidth = 200;

  const columns = Math.max(
    1,
    Math.floor((gallery.clientWidth + gap) / (minimumItemWidth + gap))
  );

  gallery.style.setProperty("--gallery-columns", columns);

  const occupied = [];
  const columnUsage = Array(columns).fill(0);
  const rowUsage = [];

  function isFree(row, start, span) {
    if (!occupied[row]) {
      occupied[row] = Array(columns).fill(false);
    }

    return occupied[row]
      .slice(start, start + span)
      .every((cell) => !cell);
  }

  function occupy(row, start, span) {
    if (!occupied[row]) {
      occupied[row] = Array(columns).fill(false);
    }

    for (let column = start; column < start + span; column++) {
      occupied[row][column] = true;
    }
  }

  items.forEach((item) => {
    const span = Math.min(randomInt(1, 5), columns);
    const candidates = [];

    // Consider every usable row instead of always filling the first one.
    // This prevents items from forming dense bands at the top of the grid.
    for (let row = 0; row <= items.length; row++) {
      for (let start = 0; start <= columns - span; start++) {
        if (isFree(row, start, span)) {
          const columnLoad = columnUsage
            .slice(start, start + span)
            .reduce((total, usage) => total + usage, 0);
          candidates.push({
            row,
            start,
            score: (rowUsage[row] || 0) * columns + columnLoad,
          });
        }
      }
    }

    const bestScore = Math.min(...candidates.map(({ score }) => score));
    const balancedCandidates = candidates.filter(
      ({ score }) => score === bestScore
    );
    const { row, start } =
      balancedCandidates[randomInt(0, balancedCandidates.length - 1)];

    item.style.gridColumnStart = start + 1;
    item.style.gridColumnEnd = `span ${span}`;
    item.style.gridRow = row + 1;

    occupy(row, start, span);
    rowUsage[row] = (rowUsage[row] || 0) + 1;
    for (let column = start; column < start + span; column++) {
      columnUsage[column]++;
    }
  });
}

const observer = new ResizeObserver(layoutGallery);
observer.observe(gallery);

layoutGallery();
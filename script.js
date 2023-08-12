const container = document.getElementById('gridContainer');
const clearButton = document.getElementById('clearButton');
const eraser = document.getElementById('eraser');

for (let i = 0; i < 16 * 16; i++) {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  container.appendChild(gridItem);

  gridItem.addEventListener('mouseenter', () => { 
    gridItem.classList.add('hovered');
  });
}

clearButton.addEventListener('click', () => {
  const gridItems = document.querySelectorAll('.grid-item');
  gridItems.forEach(item => item.classList.remove('hovered'));
});

let erasing = false; // Flag to track erasing state

eraser.addEventListener('click', () => {
  erasing = !erasing; // Toggle erasing state
  
  if (erasing) {
    eraser.classList.add('active'); // Add a visual cue that eraser mode is active
  } else {
    eraser.classList.remove('active'); // Remove the active visual cue
  }
});

container.addEventListener('mouseover', (event) => {
  if (erasing) {
    const hoveredGridItem = event.target;
    if (hoveredGridItem.classList.contains('grid-item')) {
      hoveredGridItem.style.backgroundColor = 'white';
    }
  }
});



/*
const container = document.getElementById('gridContainer');
const clearButton = document.getElementById('clearButton');
const eraser = document.getElementById('eraser');

    
    for (let i = 0; i < 16 * 16; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      container.appendChild(gridItem);

      gridItem.addEventListener('mouseenter', () => { 
        gridItem.classList.add('hovered');
      });
    }

    clearButton.addEventListener('click', () => {
      const gridItem = document.querySelectorAll('.grid-item');
      gridItem.forEach(item => item.classList.remove('hovered'));
    });

    eraser.addEventListener('click', () => {
      const gridItem = document.querySelector('.grid-item');
      gridItem.forEach(item => item.style.backgroundColor = 'white');
    });

*/
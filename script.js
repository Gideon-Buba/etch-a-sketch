const container = document.getElementById('gridContainer');

    
    for (let i = 0; i < 16 * 16; i++) {
      const gridItem = document.createElement('div');
      gridItem.classList.add('grid-item');
      container.appendChild(gridItem);

      gridItem.addEventListener('mouseenter', () => {
        gridItem.classList.add('hovered');
      });
    }
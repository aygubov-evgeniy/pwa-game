import Grid from './grid';
import Matrix from './matrix';

const canvas = document.getElementById('app');
const context = canvas.getContext('2d');

const grid = new Grid({ context, width: 500, height: 500 });
const matrix = new Matrix();

function gameControls(e) {
  switch (e.key) {
    case 'ArrowUp':
      matrix.up();
      break;
    case 'ArrowRight':
      matrix.right();
      break;
    case 'ArrowDown':
      matrix.down();
      break;
    case 'ArrowLeft':
      matrix.left();
      break;
    default:
      break;
  }
}

document.onkeydown = gameControls;
function gameLoop() {
  window.requestAnimationFrame(gameLoop);
  grid.draw(matrix.matrix);
}
// @TODO check some stuffs here, like, game over, pause, etc..
gameLoop();

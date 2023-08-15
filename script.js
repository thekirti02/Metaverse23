AFRAME.registerComponent('camera-controls', {
    schema: {
      speed: { default: 0.1 },
      pitchSpeed: { default: 0.02 }
    },
  
    init: function () {
      window.addEventListener('keydown', (event) => {
        const camera = this.el.querySelector('[camera]');
        const currentPosition = camera.getAttribute('position');
        const currentRotation = camera.getAttribute('rotation');
        const speed = this.data.speed;
        const pitchSpeed = this.data.pitchSpeed;
  
        if (event.key === 'ArrowUp') {
          camera.setAttribute('position', {
            x: currentPosition.x,
            y: currentPosition.y + speed,
            z: currentPosition.z
          });
        } else if (event.key === 'ArrowDown') {
          camera.setAttribute('position', {
            x: currentPosition.x,
            y: currentPosition.y - speed,
            z: currentPosition.z
          });
        }
  
        if (event.key === 'ArrowLeft') {
          camera.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y - pitchSpeed,
            z: currentRotation.z
          });
        } else if (event.key === 'ArrowRight') {
          camera.setAttribute('rotation', {
            x: currentRotation.x,
            y: currentRotation.y + pitchSpeed,
            z: currentRotation.z
          });
        }
      });
    }
  });
  

  const numberOfCoins = 1000;
  for (let i = 0; i < numberOfCoins; i++) {
    const coin = document.createElement('a-sphere');
    const x = Math.random() * 200 - 100;
    const y = 23 
    const z = Math.random() * 200 - 100;
    coin.setAttribute('position', `${x} ${y} ${z}`);
    coin.setAttribute('radius', '0.1');
    coin.setAttribute('color', 'gold');
    coin.setAttribute('class', 'coin');
    coin.setAttribute('dynamic-body', ''); // Add dynamic-body for physic 
    document.querySelector('a-scene').appendChild(coin);
  }
// Collision detection and removal logic
const character = document.querySelector('#character');
const coins = document.querySelectorAll('.coin');
const counter = document.querySelector('#counter');

// A-Frame physics collision event
character.addEventListener('collide', function(event) {
  const collidedElement = event.detail.body.el;

  if (collidedElement.classList.contains('coin')) {
    collidedElement.parentNode.removeChild(collidedElement);
    collisionCount++;
    counter.setAttribute('text', { value: collisionCount });
    collisionLabel.setAttribute('value', `Collisions: ${collisionCount}`);
  }
});





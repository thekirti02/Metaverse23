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
  









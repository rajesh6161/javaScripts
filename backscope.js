const colorOfSky = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
      let color = 'pink';
      console.log(color); // pink
    }
    console.log(color); // blue 
  };
  
  colorOfSky(); // blue
  
  
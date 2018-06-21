const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
};

console.log('The volume of a sphere is ' + Math.floor(volumeOfSphere(10)) + ' cubic centimeters');
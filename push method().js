//Arrays are lists and are a way to store data in JavaScript.
//Arrays are created with brackets [].
/*Arrays have their own methods, 
 including .push() and .pop(), 
 which add and remove items from an array, respectively.*/





let newYearsResolutions = ['Learn new language', 'Do a good job', 'Be a good person'];

//.push() is used to add new elements 
newYearsResolutions.push('Buy a new laptop', 'Do better at programming')
console.log(newYearsResolutions);

//.pop() is used to del elements
newYearsResolutions.pop(newYearsResolutions[5]);
console.log(newYearsResolutions);
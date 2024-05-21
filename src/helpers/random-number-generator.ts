/**
 * 
 * @function randomIntFromInterval It generates a random number between a min and max range
 * @param min The minimum value the random generator will pick
 * @param max The maximum value the random generator will pick
 * @returns A randon number between the min and max threshold
 */
export default function randomIntFromInterval(min:number, max:number):number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
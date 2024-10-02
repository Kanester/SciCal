export class Arithmetic {
  static eval(numbers: number[], operation: string) {
    switch (operation) {
      case 'add':
        return console.log(numbers.reduce((total, num) => total + num, 0));
      case 'subtract':
        return console.log(numbers.reduce((total, num) => total - num));
      case 'multiply':
        return console.log(numbers.reduce((total, num) => total * num, 1));
      case 'divide':
        return console.log(numbers.reduce((total, num) => total / num));
      default:
        console.log('Invalid operation');
    }
  }
}
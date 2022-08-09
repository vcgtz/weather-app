class Greeting {
  constructor(private name: string) {}

  public sayHello(): string {
    return `Hello ${this.name}`;
  }
}

const greeting = new Greeting('Vicente');
console.log(greeting.sayHello());

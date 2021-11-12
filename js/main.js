console.log('Hello percel');

async function test() {
  const promise = Prmise.resolve(123);
  console.log(await promise);
}
test();

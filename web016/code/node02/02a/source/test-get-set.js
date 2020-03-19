const kaikeba = {
  info: {name: '开课吧'},
  get name() {
    return this.info.name
  },
  set name(val) {
    console.log('新名字是 ' + val);
    this.info.name = val
  }
}
console.log(kaikeba.name);
kaikeba.name = 'kaikeba'
console.log(kaikeba.name);


const loTime = () => {
  console.log(`Log...${name} ${new Date().toLocaleString()}`);
}
exports.callback = () => {
  setTimeout(() => {
    loTime('callback1')
    setTimeout(() => {
      loTime('callback2')
    }, 100)
  }, 100)
}

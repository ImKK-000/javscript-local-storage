window.addEventListener('load', () => {
  if (typeof(Storage) !== 'undefined') {
    localStorage.setItem('nodes', [
      {
        id: 'aaaaa',
        type: 'functionA'
      },
      {
        id: 'bbbbb',
        type: 'functionB'
      }
    ])
  }

  console.log("dasdasdasdasd")
})

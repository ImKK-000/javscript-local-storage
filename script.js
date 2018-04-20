const NODES = 'NODES'
const mockData = [
  {
    id: '12345',
    count: 0,
  },
  {
    id: '54321',
    count: 0,
  }
]

const saveNodes = (value) => {
  localStorage.setItem(NODES, JSON.stringify(value))
}

const loadNodes = () => {
  return JSON.parse(localStorage.getItem(NODES))
}

const setNodes = (value) => {
  window[NODES] = value
}

const getNodes = () => {
  return window[NODES]
}

window.addEventListener('load', () => {
  if (!!!Storage) {
    console.log('your web browser not supported localStorage!')
    return
  }

  if (!!!localStorage.getItem(NODES)) {
    setNodes(mockData)
    saveNodes(getNodes())
  }

  const handleClick = ({ target: { innerText: type } }) => {
    console.log(type)

    switch (type) {
      case 'load':
        // load data
        setNodes(loadNodes())
        break
      case 'save':
        // modify before save
        const nodes = getNodes()
        if (nodes) {
          const newData = nodes.map(element => {
            element.count++
            return element
          })
          saveNodes(newData)
        } else
          alert('getNodes Error, please try again!')
        break
      case 'clear':
        // clear all data in storage
        localStorage.clear()
        delete window[NODES]
        break
    }

    console.log(localStorage)
  }
  document.querySelectorAll('button').forEach(element => {
    element.addEventListener('click', handleClick)
  })

  console.log(localStorage)
})

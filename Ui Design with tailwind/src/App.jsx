import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: 'https://i.pinimg.com/736x/99/35/4f/99354f4a15b031d43b214bec20ff22e3.jpg',
      intor: '',
      tag: 'Satisfied',
      color:'blue'
    },
    {
      img: 'https://i.pinimg.com/736x/6a/8a/c3/6a8ac3845d7bfa3e4b9ae9b1952d7ba4.jpg',
      intor: '',
      tag: 'Underseved',
      color:'green'

    },
    {
      img: 'https://i.pinimg.com/1200x/a7/52/c1/a752c111044a4e76347b981d7030d70a.jpg',
      intor: '',
      tag: 'Underbanked',
      color:'Orange'

    },{
      img: 'https://i.pinimg.com/736x/d2/5a/a8/d25aa8a89fd0de4995593cce2e517c4e.jpg',
      intor: '',
      tag: 'Bestworker',
      color:'purple'

    }
  ]

  return (
    <>
      <Section1 users={users} />
      <Section2 />
    </>
  )
}

export default App

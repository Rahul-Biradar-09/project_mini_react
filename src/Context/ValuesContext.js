import React from 'react'

const ValuesContext = React.createContext({
  count: 0,
  unattempted: [],
  rightAnwers: 0,
  increaseCount: () => {},
  notattempeted: () => {},
  correctAnswers: () => {},
})

export default ValuesContext

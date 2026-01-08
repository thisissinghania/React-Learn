import { memo } from 'react'

const SecondComp = memo(({handleChange}) => {

  console.log('Child Component')

  return (
    <div>
      <button onClick={handleChange}>Child Click</button>
    </div>
  )
})


export default SecondComp

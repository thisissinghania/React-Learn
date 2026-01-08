import { memo } from "react"

const SecondComp = ({ userData }) => {

  console.log('User data component')

  return (
    <div>
      {JSON.stringify(userData)}
    </div>
  )
}

const ChildComp = memo(SecondComp)

export default ChildComp

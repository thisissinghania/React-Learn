import useCustomHooks from './CustomHooks'

const CustomHookParent = () => {
    const { data } = useCustomHooks("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default CustomHookParent

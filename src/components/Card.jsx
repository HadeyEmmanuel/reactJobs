const card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className={`${bg} p-6 shadow-md rounded-lg`}>{children}</div>
  )
}

export default card
const MainPage = ({user}) => {
  return (
    <div className="fixed inset-0 bg-black font-mate">
      <h1 className="text-white">Welcome {user}</h1>
      <div className="absolute top-3 right-3 rounded-full bg-white">
        {/* Hello */}
      </div>
    </div>
  )
}

export default MainPage
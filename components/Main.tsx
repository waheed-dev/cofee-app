const Main = () => {
    const handleClick = () => {
        console.log('i was clicked')
    }
    return (
        <main className="px-20">
            <h1 className={'text-6xl font-bold pt-20'}>Discover Coffee near you</h1>
            <p className={'mt-4 text-2xl'}>best coffee in your area!</p>
            <button onClick={handleClick} className={'px-10 py-2 bg-blue-700 hover:bg-blue-900 mt-4 rounded-2xl text-white'}>Search</button>
        </main>
    )
}
export default Main
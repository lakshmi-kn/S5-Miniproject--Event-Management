const Header = () => {
    return (
        <div className="header text-white absolute w-full h-12 py-10 px-20 justify-between flex align-middle z-10">
            <h1 className="text-4xl font-bold" >GatherEase</h1>
            <div className="button_rack text-xl font-bold pt-3">
                <button className="px-3" >Home</button>
                <button className="px-5" >Services</button>
                <button className="px-5" >About</button>
                <button className="px-5" >Blogs</button>
                <button className="px-5" >Contact</button>
            </div>
        </div>
    )
}

export default Header;
import { Menu } from "lucide-react"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

const Header = () => {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const searchHandler = (e) => {
        if (query.length > 0) {
            navigate(`/search/${query}`)
        } else {
            navigate('/')
        }

        if (e.key === "Enter") {
            setOpen(false)
        }
    }

    return (
        <header className="absolute top-0 z-20">
            <nav className={`h-14 px-8 flex items-center justify-between  text-white`}>
                <div className="left flex items-center gap-9">
                    {/* Hamburger */}
                    <div className="hamburger relative z-30 cursor-pointer md:hidden" onClick={() => setOpen(!open)}>
                        <Menu size={28} strokeWidth={2.5} />
                    </div>
                    {/* LOGO */}
                    <div className="logo text-lg  cursor-pointer tracking-widest" onClick={() => navigate('/')}>
                        Film<span className="text-[#ff0000] font-bold">Spotlight</span>
                    </div>
                    {/* NAVLINKS */}
                    <ul className={` navlink  flex items-center gap-4 font-semibold text-sm ${open ? 'flex flex-col absolute h-[100vh]  top-0 left-0 font-bold text-4xl pt-24  gap-y-16 w-[100vw] ' : 'hidden '} md:static md:flex md:bg-transparent`} >
                        <li className="md:ml-6">
                            <NavLink onClick={() => setOpen(false)} to={'/'}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setOpen(false)} to={'/explore/movie'}>Movies</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={() => setOpen(false)} to={'/explore/tv'}>Tv Shows</NavLink>
                        </li>
                        <li>
                            <div className="">
                                <input className="bg-white h-8 px-5 pr-16 rounded-full text-sm focus:outline-none text-black font-wider font-semibold"
                                    type="search"
                                    name="search"
                                    placeholder="Search"
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyUp={searchHandler}
                                />
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
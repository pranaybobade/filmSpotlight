import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate()
    return (
        <footer className='bg-[#131313] h-20 leading-[5rem]'>
            <div className='text-white flex justify-between px-5 sm:px-10 md:px-14 lg:px-20 '>
                <div className='cursor-pointer tracking-widest' onClick={() => navigate('/')}>Film<span className='text-[#ff0000] font-bold'>Spotlight</span></div>
                <ul className='flex gap-2 sm:gap-5 md:gap-6 lg:gap-7'>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/explore/movie'}>Movies</Link>
                    </li>
                    <li>
                        <Link to={'/explore/tv'}>Tv Shows</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
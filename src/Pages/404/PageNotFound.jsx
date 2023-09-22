import { useNavigate } from "react-router-dom"

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-indigo-900 relative overflow-hidden h-screen">
            <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" className="absolute h-full w-full object-cover" />
            <div className="inset-0 bg-black opacity-25 absolute">
            </div>
            <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                <div className="w-full font-mono flex flex-col items-center relative z-10">
                    <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                        You are all alone here
                    </h1>
                    <p className="font-extrabold text-8xl my-32 text-white animate-bounce">
                        404
                    </p>
                    <button className="bg-red-500 -mt-28 py-1.5 px-3 font-bold font-wider text-white rounded-full" onClick={() => navigate('/')}>Go to Home</button>

                </div>
            </div>
        </div>

    )
}

export default PageNotFound
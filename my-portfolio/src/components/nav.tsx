
const Nav = () => {
    return (
        <div className='flex h-16 w-full mx-auto px-10 text-black border-b-2'>
            <ul className='space-x-4 pt-2  md:flex w-full flex justify-center sm:justify-start'>
                <li><button className="px-4 py-1 h-10 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Skills</button></li>
                <li><button className="px-4 py-1 h-10 rounded-md border border-black bg-white text-neutarl-700 text-sm  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Projects</button></li>
                <li><button className="px-4 py-1 h-10 rounded-md border border-black bg-white text-neutarl-700 text-sm  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Contact</button></li>
            </ul>
        </div>
    )
}

export default Nav
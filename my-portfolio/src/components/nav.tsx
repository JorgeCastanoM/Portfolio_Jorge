
export function Nav () {
    return (
        <div className='flex h-16 w-full mx-auto px-10 text-black border-b-2 sticky top-0 z-50 bg-white'>
            <ul className='space-x-4 pt-2 md:flex w-full flex justify-center sm:justify-start items-center'>
                <li><a className="px-4 py-2 h-10 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200" href="#skills">Skills</a></li>
                <li><a className="px-4 py-2 h-10 rounded-md border border-black bg-white text-neutarl-700 text-sm  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200" href="#projects">Projects</a></li>
                <li><a className="px-4 py-2 h-10 rounded-md border border-black bg-white text-neutarl-700 text-sm  hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200" href="#contact">Contact</a></li>
            </ul>
        </div>
    );
}

export default Nav
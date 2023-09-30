import {CodeBracketSquareIcon} from '@heroicons/react/24/solid';

const Header = () => {

    return( 
        <div className='shadow-md w-full bg-white'>
            <div className="md:px-10 py-4 px-7 ">
                 <img src="" alt="" />{/* Logo Aqui */}
                 <div className='flex text-2xl cursor-pointer gap-2'>
                    <CodeBracketSquareIcon className='w-9 h-9 text-purple-900' />
                    <span className='font-bold'>Kaio Eduardo</span>
                 </div>
                 {/* Nav Links */}
                 <div>
                    
                 </div>
            </div>
        </div>
    )

}

export default Header;
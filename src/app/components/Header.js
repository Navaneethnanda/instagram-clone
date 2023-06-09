import Image from "next/image";
import { PlusCircleIcon,UserGroupIcon,HeartIcon,PaperAirplaneIcon, Bars3Icon} from '@heroicons/react/24/outline'
import {HomeIcon} from '@heroicons/react/24/solid';

function Header() {


    return (
        <div className="shadow-sm border-b bg-white z-50 sticky">
            <div className="flex justify-between max-w-5xl  mx-5 lg:mx-auto">
                {/* left */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <Image src="https://links.papareact.com/ocw" fill className="object-contain" />
                </div>
                <div className="relative w-10  lg:hidden flex-shrink-0">
                    <Image src="https://links.papareact.com/jjm" fill style={{objectFit:"contain"}}/>
                </div>

                
                {/* middle */}
                <div className="relative mt-1 p-2 rounded-md  ">
                    <div className="absolute inset-y-0 pl-3 flex items-center">
                    <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>

                    </div>
                    <input type="text" placeholder="search" className="bg-gray-50 block w-full pl-10 text-sm md:text- border-gray-500 border-solid rounded-md focus:border-gray-800 focus:ring-gray-800 pt-1 pb-1 b"/>
                </div>


                {/* right */}
                <div className="flex items-center justify-end space-x-4 ">
                    <HomeIcon  className="navBtn"/>
                    <div className="relative navBtn">
                    <PaperAirplaneIcon className="navBtn -rotate-45"/>
                    <div className="absolute -top-1 -right-2 animate-pulse bg-red-500 w-5 h-5 flex items-center justify-center rounded-full" >3</div>
                    </div>
                    <PlusCircleIcon className="navBtn"/>
                    <UserGroupIcon className="navBtn"/>
                    <HeartIcon className="navBtn"/>
                    <Bars3Icon className="w-6 md:hidden"/>

                    <img src="/Nanda.jpg"  alt="profile pic" className="h-10 rounded-full hidden sm:inline-flex"/>
                </div>
            </div>


        </div>
    );

}

export default Header;
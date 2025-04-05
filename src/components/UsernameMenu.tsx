import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { CircleUserRound } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const usernameMenu = () => {
    const {user , logout} = useAuth0();

  return (
   <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center px-3 hover:text-red-500 gap-2">
         <CircleUserRound className="text-red-500" />
         {user?.email}
    </DropdownMenuTrigger>
    <DropdownMenuContent className="w-68 bg-white items-center shadow-md rounded-md p-8">
        <DropdownMenuItem className='items-center'>
        <Link to="/user-profile" className="font-bold  hover:text-red-500">
         User Profile
        </Link>
        </DropdownMenuItem>
        <Separator/>
        <DropdownMenuItem  className='items-center'>
            <Button  onClick= {() => logout()}className="flex flex-1 font-bold bg-red-500">
                Log Out 
            </Button>
        </DropdownMenuItem>
       
    </DropdownMenuContent>
    
   </DropdownMenu>
  )
}

export default usernameMenu
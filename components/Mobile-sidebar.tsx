import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet";
  
import { Button } from '@/components/ui/button';

import {AiOutlineMenu} from 'react-icons/ai';


import Sidebar from '@/components/Sidebar';
  

const MobileSidebar = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Button variant="ghost" size="icon" className='md:hidden'>
                <AiOutlineMenu />
            </Button>
        </SheetTrigger>
        <SheetContent side='left' className='p-0'>
            <Sidebar />
        </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar
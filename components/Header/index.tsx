import Image from "next/image";
import DUC_IMG from '@/public/duc.png'
import XUA_IMG from '@/public/xua.png'

const Header = () => {
    return <header className={'flex justify-center py-4'}>
        <div className={'flex space-x-4 items-center'}>
            <Image src={DUC_IMG} alt='duc-meme' height={80} />
            <span className={'text-5xl'}>💞</span>
            <Image src={XUA_IMG} alt='duc-meme' height={80} />
        </div>
    </header>
}

export default Header

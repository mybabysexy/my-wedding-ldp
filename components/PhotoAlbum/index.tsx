import Image from "next/image";
import PHOTO_1 from '@/public/album/1.jpg'
import PHOTO_2 from '@/public/album/2.jpg'
import PHOTO_3 from '@/public/album/3.jpg'
import PHOTO_4 from '@/public/album/4.jpg'
import PHOTO_5 from '@/public/album/5.jpg'
import PHOTO_6 from '@/public/album/6.jpg'

const PhotoAlbum = () => {
    return <section>
        <div className='container'>
            <h3 className={'text-center'}>Ảnh của chúng mình nè</h3>
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-2'}>
                <div
                    className={'relative transition hover:scale-110 hover:z-10 hover:shadow-2xl cursor-zoom-in rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image quality={100} src={PHOTO_1} alt={'Ảnh 1'} fill className={'object-cover object-top'}/>
                </div>
                <div
                    className={'relative transition hover:scale-110 hover:z-10 hover:shadow-2xl cursor-zoom-in row-span-2 rounded-2xl overflow-hidden md:min-h-[350px]'}>
                    <Image quality={100} src={PHOTO_3} alt={'Ảnh 2'} fill className={'object-cover object-top'}/>
                </div>
                <div
                    className={'relative transition hover:scale-110 hover:z-10 hover:shadow-2xl cursor-zoom-in rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image quality={100} src={PHOTO_4} alt={'Ảnh 3'} fill className={'object-cover object-top'}/>
                </div>
                <div
                    className={'relative transition hover:scale-110 hover:z-10 hover:shadow-2xl cursor-zoom-in md:row-span-2 rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image quality={100} src={PHOTO_6} alt={'Ảnh 4'} fill className={'object-cover object-top'}/>
                </div>
                <div
                    className={'relative transition hover:scale-110 hover:z-10 hover:shadow-2xl cursor-zoom-in rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[350px]'}>
                    <Image quality={100} src={PHOTO_5} alt={'Ảnh 5'} fill className={'object-cover object-top'}/>
                </div>
                <div
                    className={'relative transition hover:scale-110 hover:z-10 hover:shadow-2xl cursor-zoom-in col-span-2 rounded-2xl overflow-hidden h-[200px] md:h-auto md:min-h-[450px]'}>
                    <Image quality={100} src={PHOTO_2} alt={'Ảnh 6'} fill className={'object-cover object-top'}/>
                </div>
            </div>
        </div>
    </section>;
}

export default PhotoAlbum;

import DUC_FULL from '@/public/duc-full.jpg'
import XUA_FULL from '@/public/xua-full.jpg'
import Image from 'next/image'

const AboutUs = () => {
    return (
        <section className={'bg-orange-100'}>
            <div className='container'>
                <h3 className={'text-center'}>Ơ đám cưới ai nhỉ?</h3>
                <div className={'flex flex-col md:flex-row gap-10 md:gap-20 justify-center'}>
                    <div className={'rounded-2xl bg-white drop-shadow-xl border overflow-hidden relative'}>
                        <div className={'w-full min-w-[350px] h-[350px] rounded-2xl shadow relative'}>
                            <Image quality={100} src={DUC_FULL} alt={'Ảnh Đức'} fill={true} className={'object-cover object-top'} />
                        </div>
                        <span
                            className='absolute top-2 right-2 bg-white rounded-full text-white w-10 h-10 flex justify-center items-center cursor-wait'>
                            😝
                        </span>
                        <div className={'px-6 py-4'}>
                            <h4 className={'text-3xl'}>
                                Lương Minh Đức
                            </h4>
                            <div className='text-xl mt-2'>
                                Chú rể
                            </div>
                            <button disabled
                                    className={'mt-4 bg-gray-200 text-gray-500 cursor-not-allowed w-full py-3 rounded-2xl'}>
                                Hết hàng
                            </button>
                        </div>
                    </div>
                    <div className={'rounded-2xl bg-white drop-shadow-xl border overflow-hidden relative'}>
                        <div className={'w-full min-w-[350px] h-[350px] rounded-2xl shadow relative'}>
                            <Image quality={100} src={XUA_FULL} alt={'Ảnh Xua'} fill={true} className={'object-cover object-top'} />
                        </div>
                        <span
                            className='absolute top-2 right-2 bg-white rounded-full text-white w-10 h-10 flex justify-center items-center cursor-wait'>
                            😺
                        </span>
                        <div className={'px-6 py-4'}>
                            <h4 className={'text-3xl'}>
                                Nguyễn Thanh Xuân
                            </h4>
                            <div className='text-xl mt-2'>
                                Cô dâu
                            </div>
                            <button disabled
                                    className={'mt-4 bg-gray-200 text-gray-500 cursor-not-allowed w-full py-3 rounded-2xl'}>
                                Hết hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs

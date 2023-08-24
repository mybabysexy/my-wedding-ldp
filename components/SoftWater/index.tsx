import SOFTWATER_1 from '@/public/softwater-1.jpg'
import Image from 'next/image'

const SoftWater = () => {
    return (
        <section className={'md:px-20 relative'}>
            <Image src={SOFTWATER_1} alt={'Softwater'} fill={true} placeholder={'blur'} style={{
                filter: 'brightness(0.5)'
            }} />
            <div className='container z-0'>
                <h3 className={'text-white'}>
                    Chỉ 1 hôm duy nhất!
                </h3>
                <div className={'text-4xl text-white flex items-baseline mt-10'}>
                    11h30 tại nhà hàng tiệc cưới sân vườn Softwater
                </div>
                <div className={'text-2xl text-white mt-10'}>
                    Địa chỉ: <a href='https://goo.gl/maps/c7wycQH85NFT6QwX9' target={'_blank'} className={'text-green-200 hover:text-green-300'}>
                        42 đường 9, tập thể F361 An Dương, Tây Hồ, Hà Nội
                    </a>
                </div>
            </div>

        </section>
    )
}

export default SoftWater

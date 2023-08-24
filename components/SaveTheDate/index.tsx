const SaveTheDate = () => {
    return (
        <section>
            <div className='container'>
                <h3 className={'text-center'}>
                    Chúng mình sẽ cưới vào
                </h3>
                <div className={'flex justify-center space-y-10 md:space-y-0 md:space-x-20 flex-col md:flex-row'}>
                    <div className={'flex flex-col items-center gap-2'}>
                        <span
                            className={'text-7xl md:text-9xl font-bold leading-none px-6 py-3 bg-black text-white rounded-3xl order-2 md:order-1'}>21</span>
                        <span className={'text-2xl md:text-3xl order-1'}>ngày</span>
                    </div>
                    <div className={'flex flex-col items-center gap-2'}>
                        <span
                            className={'text-7xl md:text-9xl font-bold leading-none px-6 py-3 bg-black text-white rounded-3xl order-2 md:order-1'}>11</span>
                        <span className={'text-2xl md:text-3xl order-1'}>tháng</span>
                    </div>
                    <div className={'flex flex-col items-center gap-2'}>
                        <span
                            className={'text-7xl md:text-9xl font-bold leading-none px-6 py-3 bg-black text-white rounded-3xl order-2 md:order-1'}>2023</span>
                        <span className={'text-2xl md:text-3xl order-1'}>năm</span>
                    </div>
                </div>
                <div className='mt-5 text-center md:text-2xl italic'>
                    (Tức ngày 09 tháng 10 năm 2023 Âm lịch)
                </div>
            </div>
        </section>
    )
}

export default SaveTheDate

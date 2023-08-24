"use client";

import {useState} from "react";
import {SECTION_ANIMATIONS} from "@/components/_animations";
import {motion} from "framer-motion";

const Invitation = () => {
    const [name, setName] = useState('')
    const [valid, setValid] = useState(true)
    const [willAttend, setWillAttend] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleOnSubmit = async (_willAttend: boolean) => {
        setValid(true);
        setSubmitted(false);
        const _valid = !!name && name.length > 0;
        setTimeout(() => {
            setValid(_valid);
        }, 100);
        if (_valid) {
            setLoading(true);
            setWillAttend(_willAttend);
            try {
                console.log({
                    name,
                    _willAttend
                })
                await fetch('/api/invitation', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name, willAttend: _willAttend})
                });
                setSubmitted(true);
            } catch (e) {

            }
            setLoading(false);
        }
    }

    return <motion.section className={'bg-purple-900'} {...SECTION_ANIMATIONS}>
        <div className='container'>
            <h3 className={'text-center text-white'}>Chung vui cùng chúng mình nhé!</h3>
            <motion.div className={'flex justify-center'} initial={{
                opacity: 0,
                y: 100,
            }} whileInView={{
                opacity: 1,
                y: 0,
            }}>
                <div className={`px-5 py-2 bg-white w-full max-w-[500px] flex justify-center rounded-2xl ${!valid ? 'input-shake' : ''}`}>
                    <input type='text' name={'fullname'} placeholder={'Tên của bạn'}
                           value={name} onChange={(e) => setName(e.target.value)}
                           readOnly={loading || submitted}
                           className={'bg-white outline-none text-3xl text-center w-full'}/>
                </div>
            </motion.div>
            <motion.div className={'flex justify-center mt-4'} initial={{
                opacity: 0,
                y: 100,
            }} whileInView={{
                opacity: 1,
                y: 0,
            }}>
                {
                    submitted ? <div className="text-3xl text-white">
                        {
                            willAttend ? `Yayy hẹn gặp ${name} tại bữa tiêc!` : 'Chúng mình sẽ tiếc khi bạn không thể đến :(('
                        }
                    </div> : <>
                        <div className={'flex gap-4 w-full max-w-[500px]'}>
                            <button onClick={() => handleOnSubmit(false)}
                                    disabled={loading}
                                    className={'px-5 py-3 rounded-2xl w-full bg-gray-500 transition hover:bg-gray-600 font-bold text-xl text-gray-800'}>
                                Mình bận mất rồi
                            </button>
                            <button onClick={() => handleOnSubmit(true)}
                                    disabled={loading}
                                    className={'px-5 py-3 rounded-2xl w-full bg-green-500 transition hover:bg-green-400 font-bold text-xl text-white'}>
                                Mình sẽ đến
                            </button>
                        </div>
                    </>
                }

            </motion.div>
        </div>
    </motion.section>;
}

export default Invitation;

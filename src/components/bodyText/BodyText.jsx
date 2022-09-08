import React from 'react'
import { bodytext } from '../../data'

const BodyText = () => {

    return (
        <div>
            {bodytext.map((item) => (
                <div>
                    <div className='mb-4 '>
                        <div className='text-xl  font-semibold lg:text-2xl lg:font-medium'>
                            <h5> {item.title}</h5>

                        </div>
                        <div className='p-1 mx-6  '>
                            <p className='text-sm text-gray-500 lg:text-base'>{item.body}</p>

                        </div>
                    </div>

                </div>
            ))}

        </div>

    )
}

export default BodyText
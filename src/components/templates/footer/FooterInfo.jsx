import React from 'react'
import SideTitle from '../../ui/SideTitle'

function FooterInfo({title, infos}) {
    return (
        <div className='flex flex-col'>
            <SideTitle Paragraph={title} />
            <>
                {infos.map((info) =>
                    <p key={info} className='block '>{info}</p>
                )}
            </>
        </div>
    )
}

export default FooterInfo

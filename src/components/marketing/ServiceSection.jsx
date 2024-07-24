import React from 'react'
import { CardBoxComponent } from './CardBoxComponent'

function ServiceSection() {
  return (
    <div>
      <div>
        <br />
        <div className='md:mx-60 sm:mx-32 mx-0 items-center flex flex-col text-center sm:text-start sm:items-start'>
      <small className="text-md text-white"><span className="text-yellow-300">// </span>
                0 . 1 SERVICES
            </small>
            <h2 className='text-2xl w-[300px] max-w-[300px] text-white'>High-impact services to take your business to the next level</h2>
            </div>
            <div className='mx-'>
            <div
            className='flex flex-wrap gap-5 xl:flex-row justify-center mt-16 xl:mx-32 lg:mx-0 md:mx-0'
            >
                <CardBoxComponent image="" name="Mystery Shopping" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt."/>
                <CardBoxComponent image="" name="Website Design" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Branding" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Contant Writing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="SEO & SEN" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Paid Advertising" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Influencer Marketing" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
                <CardBoxComponent image="" name="Management" desc="Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret reprehendunt. "/>
            </div>
            </div>
            </div>
    </div>
  )
}

export default ServiceSection

import React from 'react'
import FeatureBox from './FeatureBox'
import featureimage from '../../public/images/feature_1.png'
import featureimage1 from '../../public/images/feature_2.png'
import featureimage2 from '../../public/images/feature_3.png'

function FeatureA() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox images={featureimage} title='Development course' />
                <FeatureBox images={featureimage1} title='Money Saving Services' />
                <FeatureBox images={featureimage2} title='Usebility Interface' />
            </div>
        </div>
    )
}

export default FeatureA
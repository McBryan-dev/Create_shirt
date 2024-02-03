import React from 'react';

import CustomButton from './CustomButton';

import {SketchPicker} from 'react-color';

import {useSnapshot} from 'valtio';

import state from '../store';

const AIPicker = () => {

    const snap = useSnapshot(state);

    return (
        <div className="colorpicker-container ml-2">

            <SketchPicker
                color={snap.color}
                disableAlpha
                onchange= {
                    (color) => {
                        state.color = color.hex
                    }
                }
            />
            
        </div>
    )

}

export default AIPicker;
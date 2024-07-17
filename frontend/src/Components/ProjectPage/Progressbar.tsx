import React from 'react';



const Progressbar = ({progress}: {progress: number}) =>  {
    return (
        <div className="progessbar">
            <div style={{width: `${progress}%`}}>
            </div>
        </div>
    )
}

export default Progressbar;
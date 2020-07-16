import React from 'react';


const Outputbox = (props) =>
    (
        <div className="text-box">
            <textarea className="text-box-area" placeholder='Decimal is' defaultValue={props.decimal} >

            </textarea>
        </div>
    )

export default Outputbox
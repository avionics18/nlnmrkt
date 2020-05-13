import React from 'react'

export default function Brand() {
    return (
        <div className="brand px-3 pt-4">
            <p className="brand-name m-0">NLN<span>MRKT</span></p>
            <div className="input-group shadow-sm search-bar">
                <input type="text" className="form-control" />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button">Search</button>
                </div>
            </div>
        </div>
    );
}

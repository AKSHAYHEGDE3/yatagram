import React from 'react'

const RoomBox = () => {
    return (
        <div>
            <div className="row">
                    <div className="col-8 border bg-warning">
                        Room 2
                    </div>
                    <div className="col-4 border bg-warning">
                        <button type="button" className="btn btn-danger">Join Room</button>
                    </div>
                </div>
        </div>
    )
}

export default RoomBox

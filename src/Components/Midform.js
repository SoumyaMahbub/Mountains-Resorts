import React from 'react'

function Midform() {
    return (
        <div className="mid-form-wrapper">
            <p className="bold">Search Rooms</p>
            <form className="mid-form">
				<div className="mid-table-wrapper">
					<table className="form-table" cellSpacing="0">
						<tbody>
							<tr>
								<td className="form-sections">
									<label htmlFor="check-in" className="text-gold mid-form-label bold">Check-in</label>
									<input className="input-text" type="text" id="check-in"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="check-in" className="text-gold mid-form-label bold">Check-out</label>
									<input className="input-text" type="text" id="check-in"></input>
								</td>
							</tr>
							<tr>
								<td className="form-sections">
									<label htmlFor="check-in" className="text-gold mid-form-label bold">Rooms</label>
									<input className="input-text" type="text" id="check-in"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="check-in" className="text-gold mid-form-label bold">Room Type</label>
									<input className="input-text" type="text" id="check-in"></input>
								</td>
							</tr>
							<tr>
								<td className="form-sections">
									<label htmlFor="check-in" className="text-gold mid-form-label bold">Adults</label>
									<input className="input-text" type="text" id="check-in"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="check-in" className="text-gold mid-form-label bold">Children</label>
									<input className="input-text" type="text" id="check-in"></input>
								</td>
							</tr>
						</tbody>
						{/* <tfoot>
							<tr>
								<td className="text-center py-3" colSpan="2">
									<a>Book Now</a>
								</td>
							</tr>
						</tfoot> */}
					</table>
				</div>
				<button className="mid-form-btn text-light">Book Now</button>
            </form>
			<div className="pop-room-wrapper">
				<div className="pop-room-sec">
					<p className="bold mb-3">Popular Rooms</p>
					<div className = "d-flex justify-content-between">
						<div>
							<p>Luxury Twin Room</p>
							<p className="pop-room-price bold">from $59</p>
						</div>
						<button className="pop-room-btn bold">Book Now</button>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Midform

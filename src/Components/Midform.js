import React from 'react'

function Midform() {
    return (
        <div className="mid-form-wrapper bg-white text-start">
            <p className="fw-bold">Search Rooms</p>
            <form className="mid-form my-4">
				<div className="mid-table-wrapper">
					<table className="form-table" cellSpacing="0">
						<tbody>
							<tr>
								<td className="form-sections">
									<label htmlFor="check-in" className="fs-12 text-gold mid-form-label fw-bold">Check-in</label>
									<input className="border-none w-100" type="text" id="check-in"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="check-in" className="fs-12 text-gold mid-form-label fw-bold">Check-out</label>
									<input className="border-none w-100" type="text" id="check-in"></input>
								</td>
							</tr>
							<tr>
								<td className="form-sections">
									<label htmlFor="check-in" className="fs-12 text-gold mid-form-label fw-bold">Rooms</label>
									<input className="border-none w-100" type="text" id="check-in"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="check-in" className="fs-12 text-gold mid-form-label fw-bold">Room Type</label>
									<input className="border-none w-100" type="text" id="check-in"></input>
								</td>
							</tr>
							<tr>
								<td className="form-sections">
									<label htmlFor="check-in" className="fs-12 text-gold mid-form-label fw-bold">Adults</label>
									<input className="border-none w-100" type="text" id="check-in"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="check-in" className="fs-12 text-gold mid-form-label fw-bold">Children</label>
									<input className="border-none w-100" type="text" id="check-in"></input>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<button className="mid-form-btn border-none text-light">Book Now</button>
            </form>
			<div className="pop-room-wrapper w-100">
				<div className="pop-room-sec mt-3">
					<p className="fw-bold mb-3">Popular Rooms</p>
					<div className = "d-flex justify-content-between">
						<div>
							<p>Luxury Twin Room</p>
							<p className="pop-room-price fs-10 fw-bold">from $59</p>
						</div>
						<button className="pop-room-btn border-none rounded-pill fs-12 fw-bold">Book Now</button>
					</div>
				</div>
			</div>
        </div>
    )
}

export default Midform

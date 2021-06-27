import React from 'react'

function Midform() {
    return (
        <div className="mid-form-wrapper bg-white text-start animate__animated animate__fadeInUp">
            <p className="fw-bold">Search Rooms</p>
            <form className="mid-form my-4" method="get"> 
				<div className="mid-table-wrapper">
					<table className="form-table" cellSpacing="0">
						<tbody>
							<tr>
								<td className="form-sections">
									<label htmlFor="check-in" className="fs-12 text-gold fw-bold">Check-in</label>
									<input className="border-none w-100" type="text" id="check-in"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="check-out" className="fs-12 text-gold fw-bold">Check-out</label>
									<input className="border-none w-100" type="text" id="check-out"></input>
								</td>
							</tr>
							<tr>
								<td className="form-sections">
									<label htmlFor="rooms" className="fs-12 text-gold fw-bold">Rooms</label>
									<input className="border-none w-100" type="number" id="rooms" min="1" max="9"></input>
								</td>
								<td className="form-sections">
									<label htmlFor="room-type" className="fs-12 text-gold fw-bold">Room Type</label>
									<input className="border-none w-100" type="text" id="room-type"></input>
								</td>
							</tr>
							<tr>
								<td className="form-sections">
									<div>
										<label htmlFor="adults" className="fs-12 text-gold fw-bold">Adults</label>
										<input className="border-none w-75" type="number" id="adults" min="0"></input>
									</div>
									{/* <div>
										<button>+</button>
									</div> */}
								</td>
								<td className="form-sections">
									<label htmlFor="children" className="fs-12 text-gold fw-bold">Children</label>
									<input className="border-none w-75" type="number" id="children" min="0"></input>
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

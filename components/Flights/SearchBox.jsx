import React, { useContext, useEffect, useState } from "react";
import { domain, allTheAirports } from "@/public/utils/apiFetch";
import AirportAutoCompleteMUI from "../Custom-MUI-Components/AirportAutoCompleteMUI";
import FlightSearchContext from "@/contexts/FlightSearchContext";
export default function SearchBox() {
	return (
		<div className="flightSearchBox">
			<div className="innerBox">
				<div className="boxTitle poppins-extrabold">
					Search Lowest Price
				</div>
				<MainBox />
			</div>
		</div>
	);
}

function MainBox() {
	const [airportNames, setAirportNames] = useState([]);
	const searchData = useContext(FlightSearchContext);
	const {
		source,
		destination,
		day,
		numberOfPassengers,
		updateFlightSearchStates,
	} = searchData;
	useEffect(() => {
		fetch(`${domain}${allTheAirports}`, {
			method: "GET",
			headers: {
				projectID: "4xh7gn2pv8it",
			},
		})
			.then((res) => res.json())
			.then((apiData) => {
				setAirportNames(apiData?.data?.airports);
				updateFlightSearchStates("source", apiData?.data?.airports[7]);
				updateFlightSearchStates(
					"destination",
					apiData?.data?.airports[8]
				);
			});
	}, []);
	useEffect(() => {
		console.log(airportNames);
		console.log(source);
		console.log(destination);
	}, [airportNames]);
	return (
		<div className="mainBox">
			<AirportSearchBoxes
				airportNames={airportNames}
				target={source}
				labelText="FROM"
			/>
			<AirportSearchBoxes
				airportNames={airportNames}
				target={destination}
				labelText="TO"
			/>
		</div>
	);
}

function AirportSearchBoxes({
	airportNames,
	target,
	labelText,
	updateFlightSearchStates,
}) {
	return (
		<>
			<div className="singleSearchComponent">
				<label>{labelText}</label>
				<AirportAutoCompleteMUI
					optionsName={airportNames}
					airportSelection={target}
					labelText={labelText}
				/>
				<p>
					{target?.name ? (
						target.name
					) : (
						<span className="errorAirportName">
							Select an Airport
						</span>
					)}
				</p>
			</div>
		</>
	);
}

function AirportSearchDateBox() {}

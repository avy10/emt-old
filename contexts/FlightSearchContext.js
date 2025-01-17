import React, { createContext, useEffect, useState } from "react";
const FlightSearchContext = createContext();
export default FlightSearchContext;
export function FlightSearchProvider({ children }) {
	const [source, setSource] = useState({
		coordinates: {
			latitude: 28.5562,
			longitude: 77.1,
		},
		additional_info: {
			timezone: "IST",
			elevation: 237,
		},
		_id: "6514309e348f6fafa1b86607",
		name: "Indira Gandhi International Airport",
		city: "Delhi",
		country: "India",
		iata_code: "DEL",
		icao_code: "VIDP",
		__v: 0,
	});
	const [destination, setDestination] = useState({
		coordinates: {
			latitude: 19.0896,
			longitude: 72.8656,
		},
		additional_info: {
			timezone: "IST",
			elevation: 14,
		},
		_id: "6514309e348f6fafa1b86608",
		name: "Chhatrapati Shivaji Maharaj International Airport",
		city: "Mumbai",
		country: "India",
		iata_code: "BOM",
		icao_code: "VABB",
		__v: 0,
	});
	const [day, setDay] = useState("");
	const [numberOfPassengers, setNumberOfPassengers] = useState(1);
	const [isTwoWay, setIsTwoWay] = useState(false);
	function updateFlightSearchStates(text, val) {
		// console.log(text, val);
		if (text == "source" || text == "FROM") {
			setSource(val);
		} else if (text == "destination" || text == "TO") {
			setDestination(val);
		} else if (text == "day") {
			setDay(val);
		} else if (text == numberOfPassengers) {
			setNumberOfPassengers(val);
		} else {
			return;
		}
	}
	function updateTwoWay(val) {
		setIsTwoWay(val);
	}
	useEffect(() => {
		console.log("isTwoWay", isTwoWay);
	}, [isTwoWay]);
	return (
		<FlightSearchContext.Provider
			value={{
				source,
				destination,
				day,
				numberOfPassengers,
				updateFlightSearchStates,
				isTwoWay,
				updateTwoWay,
			}}
		>
			{children}
		</FlightSearchContext.Provider>
	);
}

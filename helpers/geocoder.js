import { Location, Permissions } from 'expo';

export async function getCity()
{
	let { status } = await Permissions.askAsync(Permissions.LOCATION);
	if (status !== 'granted') {
	    return null;
	}

	let location = await Location.getCurrentPositionAsync({});
	let loc = { latitude: location.coords.latitude,
		    longitude: location.coords.longitude}
	let city = await Location.reverseGeocodeAsync(loc);
	return "test";

}

export function filterByComponentName(dataArray, name) {
	return dataArray.find((item) => item.name === 'carbon-fields/' + name);
}

export function parseJSON(jsonString) {
	try {
		return JSON.parse(jsonString);
	} catch (error) {
		console.error('Failed to parse JSON:', error);
		return null;
	}
}

export function isEmpty(obj) {
	return Object.keys(obj).length === 0 && obj.constructor === Object;
}

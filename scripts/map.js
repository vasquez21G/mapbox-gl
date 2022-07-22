module.exports.save = () => {
	let click = document.getElementById('click')
	function getMap() {
		mapboxgl.accessToken = '<%= tokenID %>'
		click.addEventListener('click', function () {
			const map = new mapboxgl.Map({
				container: 'map',
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [-73.97, 40.75],
				zoom: 12,
			})
		})
	}
}

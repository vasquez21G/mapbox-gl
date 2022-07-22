const express = require('express')
const app = express()
const mapboxgl = require('mapbox-gl')
const map = require('./scripts/map')

mapboxgl.accessToken =
	'pk.eyJ1Ijoic2VybGlzIiwiYSI6ImNsNXNyYjc2ODA1OXkzYnFxYTY2Y3piYXcifQ.YBHbD2NsbJ3rs65L5Wfbqw'

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.send(`
		<!DOCTYPE html>
	<button id="save()">Click me</button>
	<script>${map.save}</script>
	</html>
	`)
})

app.listen(3000, () => {
	console.log('Example app listening on port 3000!')
})

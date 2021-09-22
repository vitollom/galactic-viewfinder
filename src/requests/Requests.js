const apiKey = process.env.REACT_APP_NASA_API_KEY
const baseURL = 'https://api.nasa.gov/planetary/apod'

export async function getSpecificImage(date) {
  return await fetch(`${baseURL}?api_key=${apiKey}&date=${date}`, {
    method: 'GET',
  }).then((res) => res.json())
}
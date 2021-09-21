const apiKey = 'um4GgBr7BLCrvW8mv4PL3LolOKeVEVbprTrpOfWq'
const baseURL = 'https://api.nasa.gov/planetary/apod'

export async function getTodaysImage() {
  return await fetch(`${baseURL}?api_key=${apiKey}`, {
    method: 'GET',
  }).then((res) => res.json())
} 

export async function getSpecificImage(date) {
  return await fetch(`${baseURL}?api_key=${apiKey}&date=${date}`, {
    method: 'GET',
  }).then((res) => res.json())
}
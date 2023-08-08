import axios from 'axios'

export const getImage = async () => {
  const { data } = await axios.get(
    'https://api.api-ninjas.com/v1/randomimage?category=technology',
    {
      headers: {
        'X-Api-Key': 'DyKM+/8S1Mn50+qF6QpZrA==VAk6Se7n9aGwtLnb',
        'Accept': 'image/jpeg', // Update the Accept header to request JPEG format
        // 'Accept-Charset': 'utf-8',
      },
      responseType: 'arraybuffer', // Set the response type to 'arraybuffer'
    }
  )

  // Convert the arraybuffer response to base64
  const base64Image = 'data:image/jpeg;base64,' + btoa(
    new Uint8Array(data).reduce((data, byte) => data + String.fromCharCode(byte), '')
  )

  return base64Image
}
import axios from "axios"

const url = "https://opentdb.com/api.php?amount=10"

const getAll = () => {
  const request = axios.get(url)
  return request.then((response) => response.data)
}

export default { getAll }

import axios from "axios";

// добавить axiod instance
// код в shared не должен подвязывать к какой-то бизнес логике, максимально глупый код

export async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data); // удалить лог
    return response.data;
  } catch (error) {
    console.error(error); // удалить лог
    throw error; // throw new Error(error)
  }
}

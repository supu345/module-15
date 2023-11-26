import axios from "axios";

export async function listOrderRequest() {
  try {
    let res = await fetch("http://localhost:5010/api/v1/list-Order");
    let JSONData = await res.json();
    return JSONData["data"];
  } catch (e) {
    return [];
  }
}

export async function orderByIDRequest(id) {
  try {
    let res = await fetch("http://localhost:5010/api/v1/order-by-id/" + id);
    let JSONData = await res.json();
    return JSONData["data"][0];
  } catch (e) {
    return [];
  }
}

export async function createOrderRequest(postBody) {
  try {
    let res = await axios.post(
      "http://localhost:5010/api/v1/create-Order",
      postBody
    );
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

export async function updateOrderRequest(postBody, id) {
  try {
    let res = await axios.post(
      "http://localhost:5010/api/v1/update-Order/" + id,
      postBody
    );
    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

export async function deleteOrderRequest(id) {
  try {
    let res = await fetch("http://localhost:5010/api/v1/delete-Order/" + id);
    let JSONData = await res.json();
    if (JSONData["status"] === "success") {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
}

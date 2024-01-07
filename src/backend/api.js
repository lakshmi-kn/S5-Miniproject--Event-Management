const API_URL =
  "https://s5-miniproject-event-management-production.up.railway.app/api/";

export async function getVenue() {
  try {
    const response = await fetch(API_URL + "venues?populate=*");
    const venueData = await response.json();
    return venueData;
  } catch (error) {
    console.error("Error fetching catering data:", error);
    throw error;
  }
}

export async function getCatering() {
  try {
    const response = await fetch(API_URL + "caterings");
    const caterData = await response.json();
    return caterData;
  } catch (error) {
    console.error("Error fetching catering data:", error);
    throw error;
  }
}

export async function getTransport() {
  try {
    const response = await fetch(API_URL + "transports?populate=*");
    const transportData = await response.json();
    return transportData;
  } catch (error) {
    console.error("Error fetching catering data:", error);
    throw error;
  }
}

import { createClient } from "@supabase/supabase-js";
import { number } from "prop-types";

const API_URL =
  "https://s5-miniproject-event-management-production.up.railway.app/api/";
const SUPABASE_API_URL = "https://gdbyyvsbjuqmwhppozle.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkYnl5dnNianVxbXdocHBvemxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NjQ4MTUsImV4cCI6MjAyMDA0MDgxNX0.h5H46F3J4v3CeAQoySPOexmEmXeGtaq1lALozHCXir0";

const supabaseClient = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY);

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

export async function postDataToSupabase(combinedData, id) {
  try {
    await supabaseClient
      .from("bookings")
      .insert({ data: JSON.stringify(combinedData), userid: id });
    console.log("Data posted to Supabase successfully!");
  } catch (error) {
    console.error("Error posting data to Supabase:", error.message);
    throw error;
  }
}

export async function getBookingData(userId) {
  try {
    const { data, error } = await supabaseClient
      .from("bookings")
      .select("*")
      .eq("userid", userId);

    if (error) {
      console.error("Error fetching bookings:", error);
      return [];
    }

    return data;
  } catch (error) {
    console.error("Error fetching bookings:", error);
    // Handle other potential errors here
    throw error;
  }
}

export async function deleteBookingData(userId, bookingId) {
  try {
    console.log(typeof userId, typeof bookingId);
    const { data , error } = await supabaseClient
      .from("bookings")
      .delete()
      .eq("userid", Number(userId))
      .eq("id", bookingId); 

    if (error) {
      console.error("Error deleting booking:", error);
      throw error; // Re-throw for proper error handling
    }

    console.log("Booking deleted successfully!");
  } catch (error) {
    // Handle errors gracefully (e.g., display error messages to the user)
    console.error("Error deleting booking:", error);
    throw error;
  }
}

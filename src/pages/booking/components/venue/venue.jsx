import { useEffect, useState } from "react";
import { getVenue } from "../../../../backend/api";

import Card from "../card/card";
import img from "../../../../assets/images/gallery/1.jpeg"

export const VenueComponent = ({ venue, updateVenue }) => {
    const [venueData, setVenue] = useState();
    // const venueData = [
    //     {
    //         title: "The Grand Budapest Hotel",
    //         imageSrc: img,
    //         description: "A visually stunning and whimsical masterpiece of symmetry and color, The Grand Budapest Hotel will transport you to a world of elegance and intrigue.",
    //         rating: 8.9,
    //         reviewsCount: 1254,
    //         price: 2500,
    //         actions: [
    //             { text: "View Details", href: "#" },
    //             { text: "Book Now", href: "#" },
    //         ],
    //     },
    //     {
    //         title: "The Grand Budapest Hotel",
    //         imageSrc: img,
    //         description: "A visually stunning and whimsical masterpiece of symmetry and color, The Grand Budapest Hotel will transport you to a world of elegance and intrigue.",
    //         rating: 8.9,
    //         price: 2500,
    //         actions: [
    //             { text: "View Details", handle: "#" },
    //             { text: "Book Now", handle: "#" },
    //         ],
    //     }
    // ]

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getVenue();
                const formattedList = response.data.map(venue => ({
                    VenueName: venue.attributes.VenueName,
                    Capacity: venue.attributes.Capacity,
                    Rating: venue.attributes.Rating,
                    NumberOfReviews: venue.attributes.NumberOfReviews,
                    Price: venue.attributes.Price,
                    VenueDescription: venue.attributes.VenueDescription,
                    Address: venue.attributes.Address,
                    ImageSrc: venue.attributes.VenueImage.data[0].attributes.url
                }));
                console.log(formattedList)
                setVenue(formattedList);
            } catch (error) {
                console.log(error)
            }
        }

        fetchData();
    }, []);

    const handleBookNowClick = (venueData) => {
        updateVenue({
            ...venue,
            venueName: venueData.VenueName,
            venueLocation: venueData.Address,
            venueSize: venueData.Capacity,
            venueInformation: venueData.VenueDescription,
            venuePrice: venueData.Price
        });
    };
    

    return (
        <div className="venue">
            <h2>Venue Information</h2>
            {
                venueData && venueData.map((v) => {
                    return (
                        <Card
                            title={v.VenueName}
                            description={v.VenueDescription}
                            image={img}
                            price={v.Price}
                            onBookNowClick={() => handleBookNowClick(v)}
                            key="1"
                        />
                    )
                })
            }
        </div>
    );
};

import React, { createContext, useContext, useState } from 'react';

const EventsContext = createContext();

export const EventsProvider = ({ children }) => {
    const [events, setEvents] = useState([
        {
            img: "https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/sasffg-Y6J0ruzUydncYkDlPim1qDQvGjZERj.png",
            title: "Teamwork Escape Rooms",
            distance: "1.2 km",
            time: "10:00 AM - 10:00 PM",
            like: "150",
            quote: "$600",
            siteLink: "https://teamworkescaperooms.com",
            menuLink: "",
            description: "Solve puzzles and challenges as a team in a fun and interactive escape room experience.",
            bookingDeadline: "4 days in advance",
            reviews: [
                { reviewer: "Rick", comment: "A fantastic bonding experience for our team!", stars: 5, date: "2024-01-15" },
                { reviewer: "Lucy", comment: "Great fun, but some puzzles were a bit tricky.", stars: 4 }
            ],
            rating: 4.5,
            category: "Team Collaboration",
            options: [
                {
                    name: "Standard",
                    includes: ["Escape Room Experience"],
                    budget: "$600"
                },
                {
                    name: "With Food",
                    includes: ["Escape Room Experience", "Snacks", "Soft Drinks"],
                    budget: "$750"
                },
                {
                    name: "With Food & Drinks",
                    includes: ["Escape Room Experience", "Snacks", "Soft Drinks", "Alcoholic Drinks"],
                    budget: "$900"
                }
            ]
        },
        {
            img: "https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/sasffg-Y6J0ruzUydncYkDlPim1qDQvGjZERj.png",
            title: "Active Sports Arena",
            distance: "1.5 km",
            time: "9:00 AM - 11:00 PM",
            like: "200",
            quote: "$800",
            siteLink: "https://activesportsarena.com",
            menuLink: "",
            description: "A facility offering a range of team sports activities, perfect for team-building exercises.",
            bookingDeadline: "5 days in advance",
            reviews: [
                { reviewer: "John", comment: "This place is excellent for team sports; we had a blast!", stars: 5 },
                { reviewer: "Maya", comment: "Facilities are good, but it's a bit expensive.", stars: 4 }
            ],
            rating: 4.2,
            category: "Physical Activity",
            options: [
                {
                    name: "Basic",
                    includes: ["Sports Facility Access"],
                    budget: "$800"
                },
                {
                    name: "With Food",
                    includes: ["Sports Facility Access", "Buffet Lunch"],
                    budget: "$950"
                },
                {
                    name: "With Food & Drinks",
                    includes: ["Sports Facility Access", "Buffet Lunch", "Soft Drinks"],
                    budget: "$1050"
                }
            ]
        },
        {
            img: "https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/sasffg-Y6J0ruzUydncYkDlPim1qDQvGjZERj.png",
            title: "Culinary Classes",
            distance: "0.8 km",
            time: "10:00 AM - 6:00 PM",
            like: "120",
            quote: "$400",
            siteLink: "https://culinaryclasseswithchefmia.com",
            menuLink: "https://culinaryclasseswithchefmia.com/menu",
            description: "Learn to cook together in an interactive environment; ideal for team bonding.",
            bookingDeadline: "3 days in advance",
            reviews: [
                { reviewer: "Sara", comment: "The cooking class was fun and educational!", stars: 5 },
                { reviewer: "Tom", comment: "Great food, but I wish we had more time.", stars: 4 }
            ],
            rating: 4.7,
            category: "Creative Collaboration",
            options: [
                {
                    name: "Standard",
                    includes: ["Cooking Class", "Ingredients", "Soft Drinks"],
                    budget: "$400"
                },
                {
                    name: "With Alcoholic Drinks",
                    includes: ["Cooking Class", "Ingredients", "Soft Drinks", "Wine Pairing"],
                    budget: "$500"
                }
            ]
        },
        {
            img: "https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/sasffg-Y6J0ruzUydncYkDlPim1qDQvGjZERj.png",
            title: "The Game Room",
            distance: "1.0 km",
            time: "12:00 PM - 10:00 PM",
            like: "201",
            quote: "$350",
            siteLink: "https://thegameroom.com",
            menuLink: "",
            description: "Enjoy a variety of board games and snacks, perfect for informal discussions and social engagement.",
            bookingDeadline: "2 days in advance",
            reviews: [
                { reviewer: "Katy", comment: "A great place to unwind and have fun with colleagues.", stars: 4 },
                { reviewer: "Ben", comment: "Many game options, loved it!", stars: 5 }
            ],
            rating: 4.3,
            category: "Communication",
            options: [
                {
                    name: "Standard",
                    includes: ["Board Games", "Snacks"],
                    budget: "$350"
                },
                {
                    name: "With Drinks",
                    includes: ["Board Games", "Snacks", "Soft Drinks"],
                    budget: "$400"
                }
            ]
        },
        {
            img: "https://bwwgddl6kxqlkkp1.public.blob.vercel-storage.com/images/sasffg-Y6J0ruzUydncYkDlPim1qDQvGjZERj.png",
            title: "Zen Yoga Studio",
            distance: "1.3 km",
            time: "6:00 AM - 9:00 PM",
            like: "90",
            quote: "$250",
            siteLink: "https://zenyogastudio.com",
            menuLink: "",
            description: "Relax and rejuvenate with group yoga sessions, promoting mindfulness and team wellness.",
            bookingDeadline: "2 days in advance",
            reviews: [
                { reviewer: "Claire", comment: "Perfect for team stress relief and relaxation.", stars: 5 },
                { reviewer: "Mark", comment: "A bit crowded, but otherwise a lovely experience.", stars: 4 }
            ],
            rating: 4.6,
            category: "Physical Activity",
            options: [
                {
                    name: "Standard",
                    includes: ["Yoga Session", "Yoga Mats"],
                    budget: "$250"
                },
                {
                    name: "With Healthy Snacks",
                    includes: ["Yoga Session", "Yoga Mats", "Healthy Snacks"],
                    budget: "$300"
                }
            ]
        }
    ]);

    const [selectedEvent, setSelectedEvent] = useState(null);

    return (
        <EventsContext.Provider value={{ events, setEvents, selectedEvent, setSelectedEvent }}>
            {children}
        </EventsContext.Provider>
    );
};

export const useContextEvents = () => {
    const context = useContext(EventsContext);
    if (!context) {
        throw new Error('useContextEvents must be used within an EventsProvider');
    }
    return context;
}; 
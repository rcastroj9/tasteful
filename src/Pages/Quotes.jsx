import React, { useContext, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useContextEvents } from '../context/EventsContext';
import EventsFound from './EventsFound';

const Quotes = () => {
    const [searchParams] = useSearchParams();
    const email = searchParams.get('email');
    const { events } = useContextEvents();
    const [userQuotes, setUserQuotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserQuotes = async () => {
            if (!email) return;

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`http://localhost:3000/api/event-quotes/${encodeURIComponent(email)}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch quotes');
                }
                const quotes = await response.json();
                setUserQuotes(quotes);
            } catch (err) {
                setError(err.message);
                console.error('Error fetching quotes:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUserQuotes();
    }, [email]);

    if (loading) {
        return (
            <section className='bg-[#F8F8F8] -mt-[88px] lg:-mt-[98px] pt-[100px]'>
                <div className="container mx-auto px-4 py-8">
                    <p>Loading your quotes...</p>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className='bg-[#F8F8F8] -mt-[88px] lg:-mt-[98px] pt-[100px]'>
                <div className="container mx-auto px-4 py-8">
                    <p className="text-red-500">Error: {error}</p>
                </div>
            </section>
        );
    }

    if (!email) {
        return (
            <section className='bg-[#F8F8F8] -mt-[88px] lg:-mt-[98px] pt-[100px]'>
                <div className="container mx-auto px-4 py-8">
                    <p className="text-gray-600">Please enter your email to view your quotes.</p>
                </div>
            </section>
        );
    }

    return (
        <section className='bg-[#F8F8F8] -mt-[88px] lg:-mt-[98px] pt-[100px]'>
            <EventsFound />
        </section>
    );
};

export default Quotes;

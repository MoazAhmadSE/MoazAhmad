
'use client';

import { useState, useEffect } from 'react';
import Lottie from "lottie-react";

const LottiePlayer = () => {
    const [animationData, setAnimationData] = useState(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://assets1.lottiefiles.com/packages/lf20_v92o72md.json')
            .then(res => {
              if (!res.ok) {
                throw new Error('Failed to fetch animation');
              }
              return res.json();
            })
            .then(data => setAnimationData(data))
            .catch(err => setError(err.message));
    }, []);

    if (error) {
        return (
            <div className="relative w-full max-w-lg h-[400px] mx-auto lg:mx-0 flex items-center justify-center bg-muted/50 rounded-lg">
                <p className="text-destructive-foreground">Could not load animation.</p>
            </div>
        )
    }

    if (!animationData) {
        return (
            <div className="relative w-full max-w-lg h-[400px] mx-auto lg:mx-0 flex items-center justify-center">
                <div className="w-24 h-24 border-4 border-dashed rounded-full animate-spin border-primary"></div>
            </div>
        );
    }
    
    return <Lottie animationData={animationData} loop={true} style={{height: '400px', width: '400px'}} />;
};

export default LottiePlayer;

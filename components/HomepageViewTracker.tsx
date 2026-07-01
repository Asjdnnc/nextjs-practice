'use client';

import { useEffect } from "react";
import posthog from "posthog-js";

const HomepageViewTracker = () => {
    useEffect(() => {
        posthog.capture("homepage_viewed");
    }, []);

    return null;
};

export default HomepageViewTracker;

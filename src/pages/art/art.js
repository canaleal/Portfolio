


import React from 'react'

import { useState, useEffect } from 'react';

const Art = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        setIsLoaded(true);


    }, []);

    return (
        <div className="main">
            {isLoaded ?

                error ?
                    <p>Error! Unable to load projects.</p>
                    :
                    <div>
                        <h1 className='text-4xl weight-bold'>Art/Images</h1>

                        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-4 my-4 ">

                            <div className="card col-span-1 "
                                style={{ backgroundImage: `url(https://lh3.googleusercontent.com/fife/AAWUweUwCnHV5dz1oTPo-YMgkoFZjyUHLJB8XrALz1shjhx3YeLVmMG2AXuge8Z21cJ1ctbYXfsJwAl8qDzOt0J5LlX39G99dLyUCn-xl-73bK3WAT1PRv7cgdcV74m4UzpS5ydbS2w2qUiWcM5wEJMqdkc7BGW8j8T7UGHOr0s2vF1LwR4U44LkWm0zBORFZX06_LUlZYHPcIHKS2LsVKK3j0xNySKQvS0h17FlPuNuNgvFIdGogtg4y4xFM8WmSwCIAMNdCzNIjFCpxH5-YkoEDcx-Dl-zZUjiIkZtff4MAmkSrbVRvnO53jGaSFaTQNkOaezeE_A0BuaK80QFdhZqe_itNayQUYQ07o_TuhYDUUG0C2ScTZmj8_AzErfGviDYTx23aONfN43JNUR8lJxmyCgB6Y08IdCipRXxmx7eXl-MpSGvSYwWUnQWzR-9KZu6hHkM-wJgNVHICVZa1zkBV8TJbB1c8efnYfet-LmG4jSiB5TLcOJ0aHuRd7DtZq35c53-PsQ-bXmEAkLZ6muCOeqfpUDh9TsdwbbDfUcg6OGS0yIbisSgZpKPmaMNPXTbMFjYBtl5FjB60737tNbwKdcoyst7pNob1bZhLgLoYvR7oSiPjJl3ZdR6aEea8XTcCkRSsZ_Rji3Vj8xXCSMZVoYQH6NuSuBKAPrIhQ8inF0yZ7dNEDiSiAnUHIIjtSsy3EO1BniZGayX5DWY5CO0X9MNhXc2R7qnExc=w1366-h656)` }} loading="lazy">
                            </div>

                            <div className="card  col-span-1"
                                style={{ backgroundImage: `url(https://lh3.google.com/u/0/d/112czajCUScokWjaEfP35uvRA-KvtQv-r=w885-h656-iv1)` }} loading="lazy">
                            </div>

                            <div className="card col-span-1"
                                style={{ backgroundImage: `url(https://lh3.google.com/u/0/d/10wgnPGivHSEXpwaaaczqfL0whr84OazB=w885-h656-iv1)` }} loading="lazy">
                            </div>

                            <div className="card col-span-1"
                                style={{ backgroundImage: `url(http://localhost:3000/assets/images/castle.png)` }} loading="lazy">
                            </div>

                            <div className="card col-span-1"
                                style={{ backgroundImage: `url(http://localhost:3000/assets/images/trials.png)` }} loading="lazy">
                            </div>

                        </div>
                    </div>
                :
                <p>Loading</p>
            }
        </div>
    )
}

export default Art;
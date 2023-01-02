
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';

import SmallContainer from '../components/small-container';
import MainHeading from '../components/main-heading';


function secondsToHms(d) {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const hDisplay = h > 0 ? h + (h == 1 ? ' hour' : ' hours') : '';
    const mDisplay = m > 0 ? m + (m == 1 ? ' minute' : ' minutes') : '';
    const sDisplay = s > 0 ? s + (s == 1 ? ' second' : ' seconds') : '';
    return [hDisplay, mDisplay, sDisplay].filter((v) => !!v).join(', ');
}

const NotFoundPage = () => {

    const date = new Date(1672849200000);

    const [text, setText] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            setText(
                secondsToHms((date.getTime() - (new Date()).getTime()) / 1000)
            )
        }, 1000);

        return () => {
            clearInterval(interval)
        }
    }, [text])

    return (

        <Layout>
            <SmallContainer>
                <MainHeading>
                    {text}
                </MainHeading>
            </SmallContainer>
        </Layout>
    )
};

export default NotFoundPage;


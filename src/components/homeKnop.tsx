import { useState, useEffect } from 'react';
import Kaart from "@/pages/components/kaart";

export default function HomeKnop({ data }) {
    const [href, setHref] = useState('');
    useEffect(() => {if (data){setHref(data?.hrefInp)}}, [data]);
    return (
        <Kaart data={{
            hrefInp: href,
            titelInp: "Terug naar homepage",
            subTextInp: "Als u terugkeert naar de startpagina van de vacaturesite, kunt u alle beschikbare vacatures bekijken."}}/>);
}

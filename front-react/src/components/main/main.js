import Nav from './nav/nav';
import Footer from './footer/footer';
import Intro from './items/intro';
import Summary from './items/summary';
import SummaryButton from './items/summaryButton';
import SummaryButtonNews from './items/summaryButtonNews';
import SummaryButtonSlider from './items/summaryButtonSlider';


export default function Main() {
    return (
        <>
            <Nav />
            <Intro />
            <Summary />
            <Summary />
            <SummaryButton />
            <SummaryButton />
            <SummaryButtonNews />
            <SummaryButtonSlider />
            <Footer />
        </>

    );
}
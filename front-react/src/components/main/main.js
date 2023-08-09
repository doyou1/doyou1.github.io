import Nav from 'components/main/nav/nav';
import Footer from 'components/main/footer/footer';
import Intro from 'components/main/items/intro';
import Summary from 'components/main/items/summary';
import SummaryButton from 'components/main/items/summaryButton';
import SummaryButtonNews from 'components/main/items/summaryButtonNews';
import SummaryButtonPlatform from 'components/main/items/summaryButtonPlatform';
import SummaryButtonSlider from 'components/main/items/summaryButtonSlider';


export default function Main() {
    return (
        <>
            <Nav />
            <Intro />
            <Summary />
            <Summary />
            <SummaryButton />
            <SummaryButton />
            <SummaryButtonPlatform />
            <SummaryButtonNews />
            <SummaryButtonSlider />
            <Footer />
        </>

    );
}
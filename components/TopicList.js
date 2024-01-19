import SectionTitle from "./SectionTitle";
import TopicPanel from "./TopicPanel";

const TopicList = () => {
    return ( <section>
        <SectionTitle text={'Round 2 Topic'} ></SectionTitle>

        <TopicPanel></TopicPanel>
        <TopicPanel></TopicPanel>
    </section> );
}
 
export default TopicList;
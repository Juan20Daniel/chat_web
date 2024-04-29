import Contacts from "../../components/contacts/Contacts";
import Profile from "../../components/profile/Profile";
import Section from "../../components/section/Section";
import Search from "../../components/search/Search";
import './home.css';
const Home = () => {
  return (
    <Section>
      <Profile />
      <Search />
      <Contacts />
    </Section>
  )
}

export default Home
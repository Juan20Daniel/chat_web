import Section from "../../components/section/Section";
import Profile from "../../components/profile/Profile";
import Search from "../../components/search/Search";
import Users from "../../components/users/Users";
import './myCount.css';
const Home = () => {
  return (
    <Section>
      <Profile />
      <Search />
      <Users />
    </Section>
  )
}

export default Home
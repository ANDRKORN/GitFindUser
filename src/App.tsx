import {Container} from "./components/Container";
import {Header} from "./components/Header";
import {Search} from "./components/Search";
import {UserCard} from "./components/UserCard";
import {useState} from "react";
import {UserErrorT, UserT} from "./types/user";
const BASE_URL = 'https://api.github.com/users/';
function App() {
    const [user, setUser] = useState<UserT | null>(null)
    const fetchUser =  async (username: string) => {
        const url = BASE_URL + username;
        const res = await fetch(url);
        const user = await res.json() as UserT | UserErrorT;
        if ('message' in user) {
            setUser(null)
        } else {
            setUser(user)
        }
    };
  return (
    <Container>
      <Header />
      <Search hasError={!user} onSubmit={fetchUser} />
        {
            user
                ? (<UserCard {...user} />)
                : <></>
        }
    </Container>
  );
}

export default App;

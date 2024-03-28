// src/components/App/App.jsx
import userData from "../../userData.json";
import Profile from "../Profile/Profile.jsx";

export default function App() {
  return (
    <div>
      <Profile         
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}/>
    </div>
  );
}


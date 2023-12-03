import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbare from "./Component/Navbare";
import ProfileCard from "./Component/ProfileCard";
import Groups from "./Component/Groups";
import MakePost from "./Component/MakePost";
import Post from "./Component/Post";
import Suivre from "./Component/Suivre";
import Upgrade from "./Component/Upgrade";
import posts from "./Component/posts";

function App() {
  return (
    <div className="App">
      <Navbare />
      <div className="main-container">
        <div class="row">
          <div class="col" >
            <ProfileCard/>
            <Groups/>
          </div>
          <div class="col-6">
            <MakePost/>
            {/* <Post/> */}
            {
              posts.map(post=> <Post {...post}/>)
            }
          </div>
          <div class="col" style={{width:"250px"}}>
          <Suivre/>
          <Upgrade/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

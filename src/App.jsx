import postData from "./data/posts.json";
import Nav from "./Components/Nav";

function App() {
  console.log(postData);
  return (
    <main class= "">
      <Nav />
      <form class= "grid gap-3" role="search">
      Search posts by location...
        <input class= "form-control me-2" type= "search"  ></input> 
       
        <button class="btn black-text-warning text-bg-warning p-3"  type="submit"> Cancel </button>
      </form>
    </main>
  );
}

export default App;

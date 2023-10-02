import "./App.css";
import SearchBar from "./components/SearchBar";
import apiFetch from "./components/apiFetch";
import UnitSwitch from "./components/UnitSwitch";

function App() {
  // const [weatherDescription, setWeatherDescription] = useState(null);

  // async function getDescription() {
  //   const description = await apiFetch("manhattan");
  //   setWeatherDescription(description.weather[0].description);
  // }

  // useEffect(() => {
  //   getDescription();
  // }, []);
  return (
    <>
      <UnitSwitch />
    </>
  );
}

export default App;

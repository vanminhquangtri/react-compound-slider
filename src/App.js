import HookForm from "components/react-hook-form";
import Tooltips from "components/Tooltips";
import RangeSlider from "./components/RangeSlider";

function App() {
	return (
		<div className="App">
			<RangeSlider />
			<Tooltips />
			<HookForm />
		</div>
	);
}

export default App;

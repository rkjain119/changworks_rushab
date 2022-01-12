import React from "react";
import { GlobalHotKeys } from "react-hotkeys";
import fireConfetti from "./confetti";
import "./App.css";

const App = () => {
	const keyMap = {
		FIRE_CONFETTI: [
			"c h a n g w o r k s",
			"shift+c h a n g w o r k s",
			"C H A N G W O R K S",
			"shift+c shift+h shift+a shift+n shift+g shift+w shift+o shift+r shift+k shift+s",
		],
	};

	const handlers = {
		FIRE_CONFETTI: () => fireConfetti(),
	};

	return (
		<GlobalHotKeys keyMap={keyMap} handlers={handlers} root={true} play>
			<div className='container'>
				<h1 className='title'>
					Type <span>"changworks"</span>
				</h1>
			</div>
		</GlobalHotKeys>
	);
};

export default App;

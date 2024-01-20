import { useLocalStorage } from './../../utils/UseLocalStorage';
import {  useEffect } from "react";
import DetermineMode from '../../utils/determineMode';

import sun from "../../content/icons/sun.svg";
import moon from "../../content/icons/moon.svg";




function ButtonMode() {
    // const [mode, setMode] = useState('dark')
    const [mode, setMode] = useLocalStorage('mode', DetermineMode());

    // const modeButton = useRef(null);
    useEffect(() => {
        if (mode == 'dark') {
            document.body.classList.add('dark');
            // modeButton.current.classList.add('dark-mode-btn--active')
        } else {
            document.body.classList.remove('dark');
            // modeButton.current.classList.remove('dark-mode-btn--active')
        }
    }, [mode])

    useEffect(() => {
        window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setMode(newColorScheme);
    });
    }, []);

    function changeMode() {
        setMode((currVal) => {
           return currVal == 'light' ? 'dark' : 'light'
        })
        console.log(mode)
    }

    const buttonDef = 'dark-mode-btn';
    const buttonActive = 'dark-mode-btn dark-mode-btn--active';

  return (
    <button className={mode == 'dark' ? buttonActive : buttonDef} onClick={changeMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default ButtonMode;

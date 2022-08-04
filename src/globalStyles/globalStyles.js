import { createGlobalStyle } from 'styled-components';
import AznKnucklesTrialLight from "./FontFiles/AznKnucklesTrialLight.otf"
import AznKnucklesTrialBold from "./FontFiles/AznKnucklesTrialBold.otf"
import ChargeVector from './FontFiles/ChargeVector.ttf'

export const GlobalSyle = createGlobalStyle`
html {
    --brightest-red: #de0f10;
    --text-grey: #aaa;
    --darkest-grey: #272b30;
    --white: #e2e2e2;
    --dark-grey: #2a2e33;
    --blue: #4799eb;
    --light-grey: #32383e;
  }
  body{
    background: var(--dark-grey);
  }
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  @font-face {
    font-family: 'cVector';
    src: url(${ChargeVector});
  }

  @font-face {
    font-family: 'aznLight';
    src: url(${AznKnucklesTrialLight});
  }
  @font-face {
    font-family: 'aznBold';
    src: url(${AznKnucklesTrialBold});
  }
  /*---------Custom Scrollbar Styling---------*/
::-webkit-scrollbar {
  width: 0.8vw;
  background: var(--light-grey);
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--blue);
  border: 0.5px solid black;
  background-clip: padding-box;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: cyan;
}

`
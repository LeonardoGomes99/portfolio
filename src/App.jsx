import { Fragment } from 'react'
import { NavBar } from './assets/components/navbar';
import { About } from './assets/components/about';
import { Content } from './assets/components/content';
import { FadeInSquares } from './assets/components/animatedBackground';
import { Experience } from './assets/components/experience';

export const Main = () => {
  return (
    <Fragment>
      <NavBar />
      <Content>
        <FadeInSquares>
          <About />
          <Experience />
        </FadeInSquares>
      </Content>
    </Fragment>
  )
}

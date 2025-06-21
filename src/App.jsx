import { Fragment } from 'react'
import { NavBar } from './assets/components/navbar';
import { About } from './assets/components/about';
import { Content } from './assets/components/content';
import { FadeInSquares } from './assets/components/animatedBackground';
import { ExperienceAndGraduation } from './assets/components/experienceAndGraduation';

export const Main = () => {
  return (
    <Fragment>
      <NavBar />
      <Content>
        <FadeInSquares>
          <About />
          <ExperienceAndGraduation />
        </FadeInSquares>
      </Content>
    </Fragment>
  )
}

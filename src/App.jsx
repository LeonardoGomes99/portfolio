import { Fragment } from 'react'
import { NavBar } from './assets/components/navbar';
import { About } from './assets/components/about';
import { Content } from './assets/components/content';
import { ExperienceAndGraduation } from './assets/components/experienceAndGraduation';

export const Main = () => {
  return (
    <Fragment>
      <NavBar />
      <Content>
        <About />
        <ExperienceAndGraduation />
      </Content>
    </Fragment>
  )
}

import { Fragment } from 'react'
import { NavBar } from './assets/components/navbar';
import { Content } from './assets/components/content';
import { Introduction } from './assets/components/introduction';
import { Timeline } from './assets/components/timeline';
import { Certifications } from './assets/components/certifications';
import { Projects } from './assets/components/projects';
import { Footer } from './assets/components/footer';


export const Main = () => {
  return (
    <Fragment>
      <NavBar />
      <Content>
        <Introduction />
        <Timeline />
        <Certifications />
        <Projects />
      </Content>
      <Footer />
    </Fragment>
  )
}

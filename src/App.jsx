import Nav               from './components/Nav'
import Hero              from './components/Hero'
import Problem           from './components/Problem'
import Requirements      from './components/Requirements'
import SystemConcept     from './components/SystemConcept'
import SystemArchitecture from './components/SystemArchitecture'
import Software          from './components/Software'
import MissionSequences  from './components/MissionSequences'
import Hardware          from './components/Hardware'
import Media             from './components/Media'
import Footer            from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Media />
        <Problem />
        <Requirements />
        <SystemConcept />
        <SystemArchitecture />
        <Software />
        <MissionSequences />
        <Hardware />
      </main>
      <Footer />
    </>
  )
}

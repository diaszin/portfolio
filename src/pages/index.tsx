import HeroSection from './component/HeroSection'
import MyProjectSection from './component/MyProjectsSection'
import MySkillsSection from './component/MySkillsSection'



export default function Home() {
  return (
    <main>
      <HeroSection/>
      <MyProjectSection/>
      <MySkillsSection/>
    </main>
  )
}

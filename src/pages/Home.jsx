import HeroSlider from "../components/HeroSlider"
import SchoolIntro from "../components/SchoolIntro"
import SchoolStats from "../components/SchoolStats"
import ArticleSection from "../components/ArticleSection"
import SchoolAchievements from "../components/SchoolAchievements"
import SchoolExtracurricular from "../components/SchoolExtracurricular"
import GallerySection from "../components/GallerySection"

function Home() {
  return (
    <>
      <HeroSlider />
      <SchoolIntro />
      <SchoolStats />
      <ArticleSection />
      <SchoolAchievements />
      <SchoolExtracurricular />
      <GallerySection />
    </>
  )
}

export default Home
import Layout from "../Layout";
import Event from "../component/Event";
import Feature from "../component/Feature";
import HomeBanner from "../component/HomeBanner";
import PopularCourse from "../component/PopularCourse";
import Registration from "../component/Registration";
import Testimonial from "../component/Testimonial";
import Trainer from "../component/Trainer";

function HomePage() {
  return (
    <Layout>
      <HomeBanner />

      <Feature />

      <PopularCourse />

      <Registration />
      <Trainer />

      <Event />

      <Testimonial />
    </Layout>
  );
}

export default HomePage;

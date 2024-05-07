import FrontendLayout from "@/Layouts/FrontendLayout";
import HomeBanner from "./Components/Banner";
import ClientSection from "./Components/Client";
import CompanyCategory from "./Components/CompanyCategory";
import CaseStudy from "./Components/CaseStudy";
import About from "./Components/About";
import Service from "./Components/Service";
import Testimonial from "./Components/Testimonial";
import Counter from "./Components/Counter";
import Article from "./Components/Article";
import ArticleBox from "./Components/ArticleBox";

export default function HomePage() {
    return (
        <FrontendLayout>
            <HomeBanner />
            <ClientSection />
            <CompanyCategory />
            <CaseStudy />
            <About />
            <Service />
            <Testimonial />
            <Counter />
            <Article />
            <ArticleBox />
        </FrontendLayout>
    );
}

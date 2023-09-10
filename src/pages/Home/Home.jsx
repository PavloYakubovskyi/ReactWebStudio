import CartEmploeer from "../../components/CartEmploeer/CartEmploeer";
import Hero from "../../components/Hero/Hero";
import SecondTitle from "../../components/SecondTitle/SecondTitle";
import MarkGuerreroImg from "./../../assets/Images/Employers/mark_guerrero.jpg";
import TomFordImg from "./../../assets/Images/Employers/tom_ford.jpg";
import CamilaGarciaImg from "./../../assets/Images/Employers/camila_garcia.jpg";
import DanielWilsonImg from "./../../assets/Images/Employers/daniel_wilson.jpg";
import CartOffer from "../../components/CartOffer/CartOffer";
import Offer1Img from "../../assets/Images/Offer/img1.jpg";
import Offer2Img from "../../assets/Images/Offer/img2.jpg";
import Offer3Img from "../../assets/Images/Offer/img3.jpg";
import CartAboutUs from "../../components/AboutUs/AboutUs";
import Section from "../../components/Section/Section";
import ListEmployer from "../../components/ListEmployer/ListEmployer";
import { HeroSection } from "../../components/Hero/Hero.styled";

const employees = [
  {
    images: MarkGuerreroImg,
    name: "Mark Guerrero",
    position: "Product Designer",
    social: [{ instagram: "", twiter: "", facebook: "", linkedin: "" }],
  },
  {
    images: TomFordImg,
    name: "Tom Ford",
    position: "Frontend Developer",
    social: [{ instagram: "", twiter: "", facebook: "", linkedin: "" }],
  },
  {
    images: CamilaGarciaImg,
    name: "Camila Garcia",
    position: "Marketing",
    social: [{ instagram: "", twiter: "", facebook: "", linkedin: "" }],
  },
  {
    images: DanielWilsonImg,
    name: "Daniel Wilson",
    position: "UI Designer",
    social: [{ instagram: "", twiter: "", facebook: "", linkedin: "" }],
  },
];

const offers = [
  {
    name: "offer1",
    images: Offer1Img,
  },
  {
    name: "offer2",
    images: Offer2Img,
  },
  {
    name: "offer3",
    images: Offer3Img,
  },
];

const aboutus = [
  {
    thirdtitle: "Strategy",
    description:
      "Our goal is to identify the business problem to walk away with the perfect and creative solution.",
  },
  {
    thirdtitle: "Punctuality",
    description:
      "Bring the key message to the brand's audience for the best price within the shortest possible time.",
  },
  {
    thirdtitle: "Diligence",
    description:
      "Research and confirm brands that present the strongest digital growth opportunities and minimize risk.",
  },
  {
    thirdtitle: "Technologies",
    description:
      "Design practice focused on digital experiences. We bring forth a deep passion for problem-solving.",
  },
];

function Home() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <HeroSection>
        <h1>Effective Solutions for Your Business</h1>
        <button>Order Service</button>
      </HeroSection>
      <section>
        <SecondTitle title="" />
        <ul>
          {aboutus.map((aboutus) => (
            <CartAboutUs key={aboutus.thirdtitle} aboutus={aboutus} />
          ))}
        </ul>
      </section>
      <SecondTitle title="What Are We Doing" />
      <section>
        <ul>
          {offers.map((offer) => (
            <CartOffer key={offer.name} offer={offer} />
          ))}
        </ul>
      </section>

      <Section title="Our Team">
        <ListEmployer list={employees} />
      </Section>

      <section>
        {/* ============================================== */}
        {/* Друний спосіб того що є в 107-109 строці */}
        {/* <SecondTitle title="Our Team" />
        <ul>
          {employees.map((employeer) => (
            <CartEmploeer key={employeer.name} employeer={employeer} />
          ))}
        </ul> */}
        {/* ============================================== */}

        {/* <div class="container">
          <h2 class="second-title">Our Team</h2>
          <ul class="list employees">
            <li class="employees-item">
              <img
                srcset="
                  ./images/employees/mark_guerrero.jpg.jpg 1x,
                  ./images/employees/mark_guerrero@2x.jpg  2x
                "
                src="./images/employees/mark_guerrero.jpg.jpg"
                alt="mark_guerrero"
                width="264"
                height="260"
              />
              <div class="employees-item-content-wrapper text-align-center">
                <h3 class="employees-title">Mark Guerrero</h3>
                <p class="section-description">Product Designer</p>
                <ul class="employees-soc-list list">
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-instagramsvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-twittersvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-facebooksvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-linkedinsvg"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="employees-item">
              <img
                srcset="
                  ./images/employees/tom_ford.jpg.jpg 1x,
                  ./images/employees/tom_ford@2x.jpg  2x
                "
                src="./images/employees/tom_ford.jpg.jpg"
                alt="tom_ford"
                width="264"
                height="260"
              />
              <div class="employees-item-content-wrapper text-align-center">
                <h3 class="employees-title">Tom Ford</h3>
                <p class="section-description">Frontend Developer</p>
                <ul class="employees-soc-list list">
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-instagramsvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-twittersvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-facebooksvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-linkedinsvg"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="employees-item">
              <img
                srcset="
                  ./images/employees/camila_garcia.jpg.jpg 1x,
                  ./images/employees/camila_garcia@2x.jpg  2x
                "
                src="./images/employees/camila_garcia.jpg.jpg"
                alt="camila_garcia"
                width="264"
                height="260"
              />
              <div class="employees-item-content-wrapper text-align-center">
                <h3 class="employees-title">Camila Garcia</h3>
                <p class="section-description">Marketing</p>
                <ul class="employees-soc-list list">
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-instagramsvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-twittersvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-facebooksvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-linkedinsvg"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="employees-item">
              <img
                srcset="
                  ./images/employees/daniel_wilson.jpg.jpg 1x,
                  ./images/employees/daniel_wilson@2x.jpg  2x
                "
                src="./images/employees/daniel_wilson.jpg.jpg"
                alt="daniel_wilson"
                width="264"
                height="260"
              />
              <div class="employees-item-content-wrapper text-align-center">
                <h3 class="employees-title">Daniel Wilson</h3>
                <p class="section-description">UI Designer</p>
                <ul class="employees-soc-list list">
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-instagramsvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-twittersvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-facebooksvg"></use>
                      </svg>
                    </a>
                  </li>
                  <li class="employees-soc-item">
                    <a href="" class="employees-soc-link link">
                      <svg class="employees-soc-icon" width="16" height="16">
                        <use href="./images/icons.svg#icon-linkedinsvg"></use>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div> */}
      </section>
    </>
  );
}

export default Home;

// ednf;   Snipet - z ustawień na dole ES7+ React/Redux/React-Native
// export default function first(second) {third}

// sfc Snipet - Simple React Snippets Компонент

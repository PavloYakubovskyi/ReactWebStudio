import CartEmploeer from "../../components/CartEmploeer/CartEmploeer";
import Hero from "../../components/Hero/Hero";
import SecondTitle from "../../components/SecondTitle/SecondTitle";
import MarkGuerreroImg from "./../../assets/Images/Employers/mark_guerrero.jpg";

const employees = [
  {
    images: MarkGuerreroImg,
    name: "Mark Guerrero",
    position: "Product Designer",
    social: [{ instagram: "", twiter: "", facebook: "", linkedin: "" }],
  },
  {
    images: "",
    name: "Tom Ford",
    position: "Frontend Developer",
    social: [{ instagram: "", twiter: "", facebook: "", linkedin: "" }],
  },
];

function Home() {
  //   const [count, setCount] = useState(0);

  return (
    <>
      <Hero>
        <h1>Hero</h1>
        <p>Description</p>
      </Hero>
      <SecondTitle title="Employeers" />
      <section>
        <ul>
          {employees.map((employeer) => (
            <CartEmploeer key={employeer.name} employeer={employeer} />
          ))}
        </ul>

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

import { services } from "../data";
import Title from "./Title";

const Services = () =>{
    return (
        <section class="section services" id="services">
        <Title title='our' subTitle= 'services'/>
        <div class="section-center services-center">
        {services.map((link)=>{
          const {id, icon, title, text} = link;
          return (<article class="service" key={id}>
            <span class="service-icon"><i class={icon}></i></span>
            <div class="service-info">
              <h4 class="service-title">{title}</h4>
              <p class="service-text"> {text}</p>
            </div>
          </article>)
        })}
        </div>
      </section>
    );
}
export default Services;
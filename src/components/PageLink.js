import { pageLink } from "../data";

const PageLink =({parentClass, itemClass})=>{
    return(
        <ul className={parentClass} id="nav-links">
        {pageLink.map((link)=>{
          return(
            <li key={link.id}>
            <a href={link.href} className={itemClass}> {link.text} </a>
          </li>
          )
        })}
        </ul>
    )
}
    export default PageLink;
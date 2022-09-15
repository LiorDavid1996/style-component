import { CardStyle } from "../styles/Card.style"
export default function Card({item:{id,title,body,image}}) {
    return(
        <CardStyle layout={id%2===0 && 'row-reverse'}>
             <div>
        <h2>{title}</h2>
        <p>{body}</p>
         </div>
         <div>
          <img src={`./imges/${image}`} alt=""/>
         </div>
        </CardStyle>
        
        
    )
}
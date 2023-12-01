import lessonStyle from "./Lesson.module.css"

function Card({data}){
    return(

        <div className={lessonStyle['container']}>

        {data.map(({id, name, hour, image})=>{
            return(
            <div className={lessonStyle['card']}> 
            <img src={image} alt="" />
            <p>{name}</p>
            <p>{hour}</p>
            </div>
            )
        })}
        </div>
        
    )
}

export default Card
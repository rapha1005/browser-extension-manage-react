

export default function Card({name, description, image}){
    return(
        <div className="card">
                    
            <h1>hello</h1>
            <img src={image} alt="" />
            <p className="extension-title">{name}</p>
            <p className="extension-description">{description}</p>
            
        </div>
    )
}
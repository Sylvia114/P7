import '../../components/Tags/styles.css'

function Tags({ tags }) {    

    return(
        <div>
            {tags.map((tag, index) => (
                <p key={index}>{tag}</p>
                    ))}
                </div>
        
    )
}

export default Tags
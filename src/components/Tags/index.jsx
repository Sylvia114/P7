import '../../components/Tags/styles.css'

function Tags({ tags }) {    

    return(
        <div className='tagsDisplay'>
            {tags.map((tag, index) => (<div key={index} className='tags'>{tag}</div>))}
        </div>
        
    )
}

export default Tags
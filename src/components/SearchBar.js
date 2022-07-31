import React, { useState } from 'react'

function SearchBar({onSubmit }) {
    const [searchTerm, setsearchTerm] = useState("")

    const onInputChange = (event)=>{
        setsearchTerm(event.target.value)
    }

    
    function onFormSubmit(event){
        event.preventDefault();
        onSubmit(searchTerm);
    }

    return (
        
        <div className="search-bar ui segment" style={{ margin: "30px" }}>
            <h1>Welcome to DUBE</h1>

            <form className="ui form" onSubmit={onFormSubmit}>
                <div className="field">
                    <div className="field">
                        <input type="text" placeholder="Search For A Video" value={searchTerm} onChange={onInputChange}/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchBar

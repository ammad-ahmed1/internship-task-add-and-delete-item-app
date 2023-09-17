
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const styles = {
        title: {
            marginLeft: '20px',
        },
        search: {
            marginRight: '20px',
        }
    }
    
    const [search, setSearch] = useState('');
    return (
        <div>
            <nav class="navbar navbar-dark bg-primary">
                
                <a class="navbar-brand" href="/" left="10px" style={styles.title}>
                    {/* <Link to = '/'><h3>Movies</h3></Link> */}
                    Movies
                </a>
                <form class="form-inline my-2 my-lg-0" style = {styles.search}>
                <input value={search}
                            onChange={e => setSearch(e.target.value)}
                            id=''
                            type="text"
                            className='form-control'
                            placeholder='Search'
                            required
                        ></input>
                        {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}
            </nav>

        </div>
    )
}

export default Navbar

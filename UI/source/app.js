import React from 'react';
import styles from './app.css';

function App(){
    return(
        <div className={styles.appBody}>
            <h1>React</h1>
            <h2>File Server Test</h2>
                <form 
                    action="http://localhost:3000/file/upload" 
                    enctype="multipart/form-data" 
                    method="post"
                >
                    <input 
                        type="file" 
                        name="upload" 
                        multiple
                    />
                    <input 
                        type="submit" 
                        value="Upload"
                    />
                </form>
        </div>
    )
}

export default App;
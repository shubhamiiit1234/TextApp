import React from 'react'

export default function About(props){

    // const [theme1, setTheme1] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })

    // const [themeBtn, setThemeBtn] = useState("Enable Dark Mode")

    // const ChangeTheme = ()=> {
    //     if(props.theme === 'info'){
    //         setTheme1({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         // setThemeBtn("Enable Dark Mode")
    //     }
    //     else{
    //         setTheme1({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         // setThemeBtn("Enable Light Mode")
    //     }
    // }

    return(


        <div className="container my-3" >
            <h3>About Us</h3>
            <div className="accordion my-3"  id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={{backgroundColor:props.theme==='dark'?'#1B2631':'white', color:props.theme==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Authors</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.theme==='dark'?'#1B2631':'white', color:props.theme==='dark'?'white':'black'}}>
                        The Author is the one and only The<strong> Bablu OP!!!</strong>
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.theme==='dark'?'#1B2631':'white', color:props.theme==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Contacts</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={{backgroundColor:props.theme==='dark'?'#1B2631':'white', color:props.theme==='dark'?'white':'black'}}>
                            Please don't contact me!! Still if you have to then you can call me on:<strong> +916204898163 </strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.theme==='dark'?'#1B2631':'white', color:props.theme==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>More</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={{backgroundColor:props.theme==='dark'?'#1B2631':'white', color:props.theme==='dark'?'white':'black'}}>
                        There is nothing more left to know in this section.
                    </div>
                    </div>
                </div>
            </div>
            {/* <button onClick={ChangeTheme} type="button" className='btn btn-outline-primary mx-1'><b>{themeBtn}</b></button> */}
        </div>
    );
}
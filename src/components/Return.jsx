import React from "react";
// import { Popover } from "bootstrap";
import Popup from 'reactjs-popup';

const Return = () =>{
    return(
        <>
         <h1>Return Page</h1>

             {/* <!-- Button trigger modal --> */}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button>

            {/* <!-- Modal --> */}
            {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
               <h1>I am popup</h1>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div> */}

                {/* <div>
                <Popup trigger={<button> Trigger</button>} position="right center">
                    <div>Popup content here !!</div>
                </Popup>
                </div> */}

            <div>
                <h4>Popup - GeeksforGeeks</h4>
                <Popup trigger=
                    {<button> Click to open popup </button>}
                    position="right center">
                    <div>GeeksforGeeks</div>
                    <button>Click here</button>
                </Popup>
            </div>

            <div>
            <h4>Popup - GeeksforGeeks</h4>
            <Popup trigger=
                {<button> Click to open modal </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                Welcome to GFG!!!
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close modal
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
  {/* </div> */}
{/* </div> */}
        </>

    )
}

export default Return;
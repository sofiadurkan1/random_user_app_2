import React from 'react'
import './Card.css'
import Cw from '../svg/Cw';
import Design from '../svg/Design'
import GrowingUpMan from '../svg/GrowingUpMan';
import GrowingUpWoman from '../svg/GrowingUpWoman';
import Mail from '../svg/Mail';
import Man from '../svg/Man';
import Map from '../svg/Map';
import Padlock from '../svg/Padlock';
import Phone from '../svg/Phone';
import Woman from '../svg/Woman';



const Card = () => {
    return (
        <div className="container">
        <Cw/>
        <div className="card">
            <div className="user-image">
                <img src="" alt="" />
            </div>
            <div className="user-name">
                <p>My is</p>

            </div>

            <div className="svg">
        <Man/>
        <Woman/>
        <Mail/>
        <GrowingUpWoman/>
        <GrowingUpMan/>
        <Map/>
        <Phone/>
        <Padlock/>



            </div>
            <div className="buttons">
                <button>NEW USER</button>
                <button>ADD USER</button>

            </div>
            <div className="user-info">
                <table>
                <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Age</th>
                    </tr>
                </thead>
                </table>

            </div>

        </div>


        <Design />

             
        </div>
    )
}

export default Card

import {BiUserCircle} from "react-icons/bi"


export default function Searchprofile({name}) {
    return(
        <div className='search--profile'>
<BiUserCircle className='search--profile-icon' />
<h2 className='search--name'>{name}</h2>
<h2 className='search--profession'>Lawyer</h2>
<h2 className='search--location'>Chennai, TamilNadu</h2>
<div className='search--row-container'>
<p>$20k+ earned</p>
<p>⭐4.5</p>
<p>200 clients</p>
</div>
<p className='search--summary'>I am a full-service, licensed attorney with over 20 years of experience and an impeccable track record of consistently and effectively resolving my client's legal problems. I am dedicated to effectively resolving legal issues that arise</p>
            </div>
    )
}
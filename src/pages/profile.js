import { BiUserCircle } from "react-icons/bi"
import { MdLocationPin } from "react-icons/md"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
function Profile() {
  return (
    <div className='profile'>
        <Navbar hide1={{display: 'none'}} />
        <div className='profile--container'>
        <div className='profile--top-section'>
            <div className='profile--flex-container-1'>
         <div className='profile--flex-child'>
            <BiUserCircle className='profile--icon'/>
            <h1 className='profile--name'>
                Tamizhselvan
            </h1>
            <div className='profile--flex-container-2'>
           
            <p className='profile--location'> <MdLocationPin className="profile--location-icon"/>Chennai</p>
       
            <p className='profile--ratings'>⭐⭐⭐⭐ 4 | 100+ clients</p>
<p className='profile--experience'>14 years of Experience</p>
            </div>
     
    </div>
<Link style={{textDecoration: 'none'}} to="/message" className='profile--message-btn'>Message</Link>
</div>
        </div>
        <div className='profile--bottom-section'>
            <div className='profile--bottom-left'>
                <h1 className='profile--left-heading'>
                    Practice Areas
                </h1>
                <p className='profile--left-lists'>Domestic voilence</p>
                <p className='profile--left-lists'>Anticipatory Bail</p>
                <p className='profile--left-lists'>Family Lawyer</p>
                <p className='profile--left-lists'>Cyber Crime</p>
                <p className='profile--left-lists'>Motor Accident</p>
                <h1 className='profile--left-heading'>
                    Courts
                </h1>
                <p className='profile--left-lists'>Supreme Court</p>
                <p className='profile--left-lists'>Madras High Court</p>
            </div>
            <div className='profile--bottom-right'>
                <h1 className='profile--right-heading'>
                    Experienced Advocate
                </h1>
                <p className='profile--bio'>
                I am a full-service, licensed attorney with over 20 years of experience and an impeccable track record of consistently and effectively resolving my client's legal problems.

I am dedicated to effectively resolving legal issues that arise while ensuring that you and your business remain protected and poised for success.

I specialize in drafting, reviewing, editing, and skillfully redlining contracts and other essential business documents, to ensure that your agreements are comprehensive and strategically sound.

I offer invaluable dispute resolution and litigation support to you by providing strategic guidance across a wide spectrum of legal matters.

My strong negotiation skills and ability to navigate complex legal disputes are instrumental in securing favorable resolutions and protecting your interests.

Whether it's drafting contracts, providing litigation support, or resolving disputes, I take the time to listen, understand, and empathize with their unique situations, ensuring that I tailor my approach to meet your specific needs.

Please send me an invitation and let's talk about your case.
                </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile
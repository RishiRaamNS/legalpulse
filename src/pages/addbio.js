import { AiOutlineStar } from 'react-icons/ai'
import { RiSuitcaseLine } from 'react-icons/ri'
import {AiOutlineUser} from "react-icons/ai"
import Getstartnavbar from '../components/getstartnavbar'
import Getstartbottomnav from '../components/getstartbottomnav'
export default function Addbio() {
  return (
    <div className="App-bio">
      <Getstartnavbar />
      <div className='flex-container-bio'>

   
      <div>
      <div className="content-bio">
        <h1>
          Great! Now write a bio to tell the <br /> world about yourself.
        </h1>
        <p>
          Help people get to know you at a glance. What work are you best at?
          Tell them clearly, Using paragraphs or bullet points.You can always
          edit later - just make sure you proofread now!
        </p>
      </div>
      <div className="biobox-bio">
        <h4>Your overview</h4>
        <textarea
          className="textbox-bio"
          maxLength="3000"
          placeholder="I am a full-service, licensed attorney with over 20 years of experience and an impeccable track record of consistently and effectively resolving my client's legal problems."
        ></textarea>
        {/* <span className="count">You have {3000-val.length} left</span> */}
      </div>
      
      </div>
      <div className="about-you-bio">
        <div className="online-outer-bio">
          <div className="online-bio"></div>
        </div>
        <img src="/bio-image2.jpg" alt="" className="image-bio" />
        <div className="rating-bio">
          <p>
            <AiOutlineStar className="icon-bio" /> 5.0
          </p>
          <p>
            <RiSuitcaseLine className="icon-bio" /> 14 clients
          </p>
        </div>
        <div className="txt-bio">
          {' '}
          <div className="bio-bio">
            <p>
              "I am a lawyer from Brazil. I attended college in the USA
              (Business Degree) and lived there for about seven years (I speak
              English fluently).
            </p>
          </div>
          <div className="list-bio">
            <ul>
              <li>I'm experienced in Divorce cases.</li>
              <li>
                I can help you with any area of law, specially in Business Law,
                Tech Law and LGPD or GDPR.
              </li>
              <li>
                I have a lot of experience as a Virtual Assistant, and I have
                worked with several companies and startups coming to India in
                their legal and business needs."
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    <Getstartbottomnav botButton="Choose Your Categories"/>
    </div>
  )
}

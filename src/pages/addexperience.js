import Getstartbottomnav from '../components/getstartbottomnav'
import Getstartnavbar from '../components/getstartnavbar'
import { AiFillPlusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Experience() {
  return (
    <div className="Experience">
      <Getstartnavbar />
      <div className="content">
        <h1 className="heading">
          If you have relevant work experience, add it here.{' '}
        </h1>
        <p>
          Professional who add their experience are twice as likely to win work.
          But if you're just starting out,you can still create a great profile.
          Just head on to the next page.
        </p>
      </div>
      <div className="add-experience">
        <AiFillPlusCircle className="icon" />
        <p>Add Experience</p>
      </div>
      <div>
      <Link to='/getting-started/certification'>
      <Getstartbottomnav botButton = "Add your Certification"/>
      </Link>
      </div>
    </div>
  )
}


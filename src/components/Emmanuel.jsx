import {Link} from 'react-router-dom'
import Person from "../assets/images/avatar_3.jpg"

const Emmanuel = () => {
  return (
<section className="cont">

<div className="grid two-col-grid">

    <img src={Person} alt="" className="img" />

    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae eum adipisci explicabo quisquam distinctio, 
          velit vitae exercitationem labore dolorum nihil aspernatur eaque minus doloremque numquam odit perferendis, ratione eveniet nobis!</p>
    </div>

</div>

    <div>
      <h1>This the Emmanuelpage</h1>
      <Link to="/">go to homepage </Link>
    </div>

  <button id='emma'><Link to ="/" >Go back Man</Link></button> 

</section>
  )
}
export default Emmanuel

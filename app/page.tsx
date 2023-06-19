import { Linkedin } from 'react-feather';
import { GitHub } from 'react-feather';
import { Heart } from 'react-feather'

export default async function Page() {

  return (
    <div>
      <div>
        <p>
          Hi! I&apos;m Sarthak Joshi. Based out of Bangalore region of Indian subcontinent, 
          I work as a Software Engineer (frontend) and spend majority of my days in 
          development and maintenance of crucial web applications for renowned multinational 
          firms.
        </p>
        <p>
          Welcome to my portfolio/blog site! and please feel free to explore further!
        </p>
        <p>
          Built with <Heart /> using next.js.
        </p>
      </div>
      <div className="profLinks" style={{ marginTop: 100, display: 'flex', alignItems: 'center'}}>
        <a href="https://www.linkedin.com/in/josh1-sarthak"><Linkedin color="black" /></a>
        <a href="https://github.com/josh1-sarthak"><GitHub color="black" /></a>
      </div>
    </div>
  )
}
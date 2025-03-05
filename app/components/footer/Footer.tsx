import styles from './footer.module.css'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <h2>AUTONO</h2>

      <div>
        <div className={styles.autono_info}>
          <span>
            <a href='#' style={{color: 'black'}}>Technology</a>
          </span>
          <span>
            <a href='#' style={{color: 'black'}}>About</a>
          </span>
          <span>
            <a href='' style={{color: 'black'}}>Careers</a>
          </span>
          <span style={{color: 'black'}}>Tel: 123-456-7890</span>
          <span style={{color: 'black'}}>Email: info@mysite.com</span>
          <span style={{color: 'black'}}>500 Terry Francine St San Francisco, CA 94158</span>
        </div>
        <div className={styles.autono_form}>
          <form action=''>
            <h2 style={{color: 'black'}}>SUBSCRIBE</h2>
            <p style={{color: 'black'}}>Sign up to receive Autono news and updates.</p>
            <div className={styles.form_field}>
              <label htmlFor='email' style={{color: 'black'}}>Email *</label>
              <div>
                <input type='text' />
                <button type='submit'>Subscribe</button>
              </div>
            </div>
            <div>
              <input type='checkbox' />
              <label htmlFor='checkbox' style={{color: 'black'}}>
                Yes, Subscribe me to your newsletter. *
              </label>
            </div>
          </form>
        </div>
      </div>

      <div className={styles.credit}>
        <div>
          <p style={{color: 'black'}}>
            &copy; 2025 by Autono. Idea by <span>WIX</span>, Designed by{' '}
            <a
            target='_blank'
              href='https://www.tinyurl.com/peteromohh'
              style={{ textDecoration: 'underline' }}
            >
              Peter Omohh
            </a>
          </p>
        </div>
        <div className={styles.socials}>
          <div>
            <FaLinkedin   style={{color: 'black'}}/>
          </div>
          <div>
            <FaFacebook  style={{color: 'black'}}/>
          </div>
          <div>
            <FaX  style={{color: 'black'}}/>
          </div>
          <div>
            <FaInstagram  style={{color: 'black'}}/>
          </div>
        </div>
      </div>
    </footer>
  )
}

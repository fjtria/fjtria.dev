import '../styles/Skills.css'
import reactImg from '../assets/images/react.png'
import vueImg from '../assets/images/vue.png'
import threeImg from '../assets/images/three.png'
import nextImg from '../assets/images/next.png'
import jsImg from '../assets/images/javascript.png'
import tsImg from '../assets/images/typescript.png'
import pythonImg from '../assets/images/python.png'
import javaImg from '../assets/images/java.png'

function Skills() {
  return(
    <div id='skills'>
      <h2>Some of my skills.</h2>
      <div className='skillList'>

        <div className='skillCard'>
          <img src={reactImg} alt='React.js Logo'></img>
          <p>React.js/React Native</p>
        </div>

        <div className='skillCard'>
          <img src={vueImg}></img>
          <p>Vue.js</p>
        </div>

        <div className='skillCard'>
          <img src={threeImg}></img>
          <p>Three.js</p>
        </div>

        <div className='skillCard'>
          <img src={nextImg}></img>
          <p>Next.js</p>
        </div>

        <div className='skillCard'>
          <img src={jsImg}></img>
          <p>JavaScript</p>
        </div>

        <div className='skillCard'>
          <img src={tsImg}></img>
          <p>TypeScript</p>
        </div>

        <div className='skillCard'>
          <img src={pythonImg}></img>
          <p>Python</p>
        </div>

        <div className='skillCard'>
          <img src={javaImg}></img>
          <p>Java</p>
        </div>

      </div>
    </div>
  );
}

export default Skills;
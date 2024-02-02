import * as Styles from './About.styles';

export const About = () => {
  return (
    <>
      <Styles.Container>
        <Styles.ContainerInner>
          <h2 id='about'>About</h2>
          <Styles.About>             
            <div className="aboutContainerContent">
              <p>XX PAINTING COMPANY has been running in Sydney for more than 20 years, perfect quality and good price. </p>
              <p>At the same time, we pay attention to timeliness in our work, the construction progress is fast, and we will complete the work on time.</p>
            </div>
            <img src={require('../../assets/team.png')} />
          </Styles.About>
        </Styles.ContainerInner>
    </Styles.Container>
  </>
)};

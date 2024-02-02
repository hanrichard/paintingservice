import * as Styles from './Service.styles';

export const Service = () => {
  return (
    <>
      <Styles.Container>
        <Styles.ContainerInner>
          <h2 id="services">Services</h2>
          <Styles.Service>
            <img src={require('../../assets/services.png')} />
            <ul>
              <li>Various outdoor paints,</li>
              <li>indoor paints,</li>
              <li>tile spray paint</li>
              <li>bathtub spray paint</li>
              <li>aluminum alloy window spray paint</li>
              <li>Kitchen cabinet spray paint</li>
              <li>various wood paints</li>
              <li>high-end furniture varnish</li>
              <li>garage driveway floor paint</li>
            </ul>
        </Styles.Service>
        </Styles.ContainerInner>
    </Styles.Container>
  </>
)};

import * as Styles from './Service.styles';

export const Service = () => {
  return (
    <>
      <Styles.Container>
        <Styles.ContainerInner>
          <h2 id="services">Services</h2>
          <Styles.Service>
            <img  alt='' src={require('../../assets/services.png')} />
            <ul>
              <li>Various outdoor paints,</li>
              <li>Indoor paints,</li>
              <li>Tile spray paint</li>
              <li>Bathtub spray paint</li>
              <li>Aluminum alloy window spray paint</li>
              <li>Kitchen cabinet spray paint</li>
              <li>Various wood paints</li>
              <li>High-end furniture varnish</li>
              <li>Garage driveway floor paint</li>
            </ul>
        </Styles.Service>
        </Styles.ContainerInner>
    </Styles.Container>
  </>
)};

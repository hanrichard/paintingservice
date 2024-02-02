import * as Styles from './Footer.styles';

export const Footer = () => {
  return (
    <Styles.FooterWrapper>
      <Styles.Container>
        <Styles.ContainerInner>
          <h2 id="contact">Contact</h2>
          <ul>
            <li>Mobile: 0406203440</li>
            <li>Email: 458578411@qq.com</li>
          </ul>
        </Styles.ContainerInner>
      </Styles.Container>

      <Styles.Footer>
        <Styles.FooterInner>
          @xxx painting service
        </Styles.FooterInner>
      </Styles.Footer>
    </Styles.FooterWrapper>
  )
};


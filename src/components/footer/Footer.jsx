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
            <li>Location: Sydney Australia NSW</li>
          </ul>
        </Styles.ContainerInner>
      </Styles.Container>

      <Styles.Footer>
        <Styles.FooterInner>
          @2024 Professional painting services. All rights reserved.
        </Styles.FooterInner>
      </Styles.Footer>
    </Styles.FooterWrapper>
  )
};


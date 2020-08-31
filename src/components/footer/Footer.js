import React from 'react';
import { Divider } from 'semantic-ui-react';
import FootMenu from './FooterMenu';
import FooterSocialInfo from './FooterSocialInfo';
import FooterCopyright from './FooterCopyright';
import './footer.css'

const Footer = () => (
<footer id='footer'>
    <FootMenu/>
    <FooterSocialInfo/>
    <FooterCopyright/>
</footer>
)

export default Footer;
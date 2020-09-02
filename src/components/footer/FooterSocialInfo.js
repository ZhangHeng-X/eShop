import React from 'react';
import { Icon } from 'semantic-ui-react';

class FooterSocialInfo extends React.Component {
constructor(props) {
    super(props);
}
render(){
    return(
    <div className="social">
        <a href='https://github.com/ZhangHeng-X'>
        <Icon link name='github' size='big'/>
        </a>
        <a href='http://youtube.com'>
        <Icon link name='youtube' size='big'/>
        </a>
        <a href='http://twitter.com'>
        <Icon link name='twitter' size='big'/>
        </a>
        <a href='http://facebook.com'>
        <Icon link name='facebook' size='big'/>
        </a>
    </div>
    )
}
}

export default FooterSocialInfo;
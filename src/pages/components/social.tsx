import * as React from "react";
import { SocialIcon } from 'react-social-icons';

import './social.scss';

interface Props { 
  socialLinks: string[];
}

class HomePage extends React.Component<Props> {
  public render(): JSX.Element {
    const { socialLinks } = this.props;

    return (
        <div className="social-icons">
            {socialLinks ? 
                socialLinks.map((socialUrl: string, index: number): JSX.Element => {
                    return <SocialIcon key={index} url={socialUrl} />;
                })
                : null
            }
        </div>
    );
  }
}

export default HomePage;

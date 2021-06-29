import React from 'react';
import './externalLinks.css';

const links = [
    {
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/austin-nadler-a011b41a7/",
        icon: "linkedin"
    },
    {
        title: "Resume",
        url: "assets/files/AustinNadlerResume.pdf",
        icon: "file"
    },
    {
        title: "GitHub",
        url: "https://github.com/austinnadler",
        icon: "github"
    }
];

class externalLinks extends React.Component {
    render() {
        return (
            <div className="text-center">
                {
                    links.map(function(link) {
                        return (
                            <a key={link.title} className="btn btn-primary" href={link.url} target="_blank" rel="noreferrer">
                                <i className={"fa fa-" + link.icon}></i>&nbsp;{link.title}
                            </a>
                        )
                    })
                }
            </div>
        );
    }
}

export default externalLinks;
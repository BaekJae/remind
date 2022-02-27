import React from 'react';
import SvgIcon from "@material-ui/icons/CollectionsBookmark";

class StudyHeader extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="writeHeader" style={{"width":"100%","height":"25vh", "overflow": "hidden"}}>
                <div className="bg-image2"></div>
                <div className="bg-text">
                    <div className="Logosection" style={{"float":"left", "paddingLeft":"1%"}}>
                        <SvgIcon style={{"color":"white", "fontSize": "11em", "paddingLeft": "75%", "marginTop": "10%"}}/>
                    </div>
                    <div style={{"marginTop":"5%", "marginLeft":"35%", "color": "white", "fontSize": "3em"}}>
                        학습
                    </div>
                </div>
            </div>

        )
    }
}

export default StudyHeader;

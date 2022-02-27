import React from 'react';
import CollectionBookmarkIcon from "@material-ui/icons/CollectionsBookmark";
import SvgIcon from "@material-ui/icons/CollectionsBookmark";

class ChatHeader extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="commentHeader" style={{"width":"100%","height":"25vh", "overflow": "hidden"}}>
                <div className="bg-image1"></div>
                <div className="bg-text">
                    <div className="Logosection" style={{"float":"left", "paddingLeft":"1%"}}>
                        <SvgIcon style={{"color":"white", "fontSize": "9em", "paddingLeft": "75%", "marginTop": "10%", "paddingTop":"5%"}}/>
                    </div>
                    <div style={{"marginTop":"5%", "marginLeft":"35%", "color": "white", "fontSize": "3em"}}>
                        자유게시판
                    </div>
                </div>
            </div>
        )
    }
}

export default ChatHeader;

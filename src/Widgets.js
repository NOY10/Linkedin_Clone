
import { FiberManualRecord, Info } from '@material-ui/icons';
import React from 'react';
import './Widgets.css';

function Widgets() {

    const newsArticle=(heading,subtitle) =>(
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecord />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>

        </div>
    )
  return (
      <div className='widgets'>
          <div className='widgets_header'>
              <h2>LinkedIn News</h2>
              <Info />
             

          </div>
          {newsArticle("dracula bleh bleh bleh","Top news - 10000 readers")}
          {newsArticle("Coronavirus: updates", "top news - 3489")}
          {newsArticle("Coronavirus: updates", "top news - 3489")}
          {newsArticle("Coronavirus: updates", "top news - 3489")}
          {newsArticle("Coronavirus: updates", "top news - 3489")}
        </div>
  
  
    );
}

export default Widgets;

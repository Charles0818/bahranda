import React from 'react';
import model from '../../assets/model.svg'
import { Animation } from '../../../components';
const { ScrollToBottom } = Animation;
const BahrandaModel = () => {
  return (

    <div className="padding-horizontal-xlg padding-vertical-md bg-gray d-flex column align-items-center model margin-bottom-md">
       <ScrollToBottom duration={.1}>
         <h1 className="font-lg text-center margin-bottom-md">The Bahranda Model</h1>
        </ScrollToBottom>
       <img src={model} alt="bahranda" className="bahranda-triangle margin-bottom-md" />
      <p className=" font-md text-content">Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit. Nullam 
        in tempus magna. Vestibulum et arcu mollis, 
        elementum leo eget, porttitor elit. Curabitur 
        nec lorem in justo posuere molestie a quis felis. Quisque porta vestibulum
         finibus. Nullam vitae lobortis elit. Nullam tristique 
         sem sed felis imperdiet convallis. In volutpat augue 
         in turpis vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla 
         tortor, eget fermentum urna vehicula eget. Duis pharetra ligula sit amet tincidunt
          interdum. Vivamus non nisl tortor. Ut nec vehicula risus. Proin et augue sit amet
           arcu blandit pulvinar. Vivamus blandit quam at imperdiet pharetra. Donec ut tempus lacus, 
           et lacinia augue. Nam orci metus, porta suscipit blandit ac, mattis dignissim ipsum. Proin quis elementum lacus, non feugiat erat. Suspendisse potenti. Nulla convallis non nulla et pulvinar. Integer interdum euismod pulvinar. Nullam odio ligula, hendrerit a feugiat vitae, aliquam et massa. Nulla eget consequat velit, facilisis pulvinar magna. Donec venenatis magna eu sapien</p>
    </div>
  )
}

export default BahrandaModel

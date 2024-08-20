import { FreeTrialWrapper } from "./FreeTrial.styles"
import { Container, HeadingTitle, Paragraph } from "../../../styles/global/default";
import { BaseLinkPrimary } from "../../../styles/components/Button"

const FreeTrial = () => {
  const trailer=()=>{
 
    window.location.href="https://www.justwatch.com/us/tv-show/breaking-bad"
   
   
  }
   return (
     <FreeTrialWrapper className="section-py">
       <Container>
         <div className="free-trial-content bg-black06 flex items-center justify-between flex-wrap">
             <div>
                 <HeadingTitle>Start your free trial today!</HeadingTitle>
                 <Paragraph>
                     This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                 </Paragraph>
             </div>
             <BaseLinkPrimary>
             <button type="button" className="tralier-btn" onClick={trailer}>Start a Free Trial</button>
             </BaseLinkPrimary>
            
         </div>
       </Container>
     </FreeTrialWrapper>
   )
 }
 
 export default FreeTrial
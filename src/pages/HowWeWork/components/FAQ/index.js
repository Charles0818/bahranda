import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Accordion, Animation, Spinners } from '../../../components';
import { actions } from '../../../../helpers';
const { otherActions: { getFaqRequest } } = actions;
const { SectionSpinner } = Spinners;
const { ScrollToBottom } = Animation;
const FAQ = ({ faqs, getFaqRequest, loading, hasFetchedFaq }) => {
  useEffect(() => {
    if(!hasFetchedFaq) getFaqRequest()
  }, [hasFetchedFaq])
  // const faqs = [
  //   {
  //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  //     answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
  //     porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
  //     Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
  //     Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
  //     vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
  //     eget fermentum urna vehicula eget.`
  //   },
  //   {
  //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  //     answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
  //     porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
  //     Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
  //     Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
  //     vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
  //     eget fermentum urna vehicula eget.`
  //   },
  //   {
  //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  //     answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
  //     porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
  //     Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
  //     Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
  //     vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
  //     eget fermentum urna vehicula eget.`
  //   },
  //   {
  //     question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  //     answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //     Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
  //     porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
  //     Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
  //     Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
  //     vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
  //     eget fermentum urna vehicula eget.`
  //   }
  // ]
  return (
    <section className="padding-horizontal-xlg margin-bottom-md faqs">
      <ScrollToBottom duration={.1}>
        <h2 className="text-center font-lg margin-bottom-md font-weight-normal font-style-normal">Frequently Asked Questions</h2>
      </ScrollToBottom>
      {!loading
      ? faqs.map((faq, index) => (
        <Accordion title={faq.faq_question} content={<p className="font-md text-content">{faq.faq_answer}</p>} key={faq.id} />
        ))
      : <SectionSpinner isLoading={loading} />}
    </section>
  )
}

const mapStateToProps = state => {
  const {
    faqs,
    loadingIndicators: { faqs: loading },
    success: { hasFetchedFaq }
  } = state.otherReducer;
  return { faqs, loading, hasFetchedFaq }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getFaqRequest }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FAQ);

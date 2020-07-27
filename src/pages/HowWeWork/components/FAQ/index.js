import React from 'react';
import { Accordion, Animation } from '../../../components';
const { ScrollToBottom } = Animation;
const FAQ = () => {
  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
      porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
      Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
      Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
      vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
      eget fermentum urna vehicula eget.`
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
      porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
      Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
      Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
      vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
      eget fermentum urna vehicula eget.`
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
      porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
      Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
      Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
      vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
      eget fermentum urna vehicula eget.`
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Nullam in tempus magna. Vestibulum et arcu mollis, elementum leo eget, 
      porttitor elit. Curabitur nec lorem in justo posuere molestie a quis felis. 
      Quisque porta vestibulum finibus. Nullam vitae lobortis elit. 
      Nullam tristique sem sed felis imperdiet convallis. In volutpat augue in turpis 
      vestibulum, sit amet rutrum nisi mollis. Nunc vestibulum fringilla tortor, 
      eget fermentum urna vehicula eget.`
    }
  ]
  return (
    <section className="padding-horizontal-xlg margin-bottom-md faqs">
      <ScrollToBottom duration={.1}>
        <h2 className="text-center font-lg margin-bottom-md font-weight-normal font-style-normal">Frequently Asked Questions</h2>
      </ScrollToBottom>
      {faqs.map((faq, index) => (
        <Accordion title={faq.question} content={<p className="font-md text-content">{faq.answer}</p>} key={index} />
      ))}
    </section>
  )
}

export default FAQ;

import React from 'react';
import { Accordion, PageWrapper } from '../components';
const FAQs = () => {
  const faqs = [
    {
      question: 'Are trades insured?',
      answer: `We understand the importance of your investment, hence why Our commodities are comprehensively 
              insured with our insurance partners, while on transit and in warehouses, 
              against burglary, fire and in any event of 
              unforeseen circumstances. However our expertise and high standards in supply chain management serve as a more guaranteed insurance. `
    },
    {
      question: 'How do I start?',
      answer: `Simply create an account, select any number of units
               in commodities you are interested in, make payment 
               and we would get you started. `
    },
    {
      question: 'How much do I get at the end of the trade?',
      answer: `At the end of the stipulated investment / trade cycle, your 
              capital and return on investment specific to the 
              contracted trade is paid into your account.`
    },
    {
      question: 'How are the returns calculated?? ',
      answer: `Returns are calculated by assigning 
              a percentage of predetermined profit 
              projections to selected commodity. `
    },
    {
      question: 'Where are you located?',
      answer: `Our administrative office is at No21 Ajasa Street,
               Victoria island, Lagos. And we operate our 
               warehouses in a number of states across the 
               middlebelt in Nigeria, depending on the commodity. `
    },
    {
      question: 'Can I visit the warehouse?',
      answer: `Our warehouses are always accessible to partners 
              via a wait list, please do contact us and we'll be glad to give you a tour.`
    },
  ]
  return (
    <PageWrapper>
      <section className="padding-horizontal-xlg padding-vertical-lg">
        <h2 className="text-center font-lg margin-bottom-md font-weight-normal font-style-normal">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <Accordion title={faq.question} content={<p className="font-md text-content">{faq.answer}</p>} key={index} />
        ))}
      </section>
    </PageWrapper>
  )
}

export default FAQs;

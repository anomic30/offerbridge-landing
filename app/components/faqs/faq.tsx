import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs1 = [
  {
    title: "What's the catch?",
    content: "There's no catch, we are a transparent platform developed by Not Fulltime to help SMBs streamline their Interviews, and get productive.",
  },
  {
    title: "How are you so cheap?",
    content: "We are charging only for the man hours put into developing this tool, and maintenance. Goal is to help you streamline your interviews without additional burden.",
  },
  {
    title: "Is there a free version?",
    content: "Yes, you can set up your first 2 pipelines for free and interview up to 10 candidates in each before you have to upgrade.",
  },
];

const faqs2 = [
  {
    title: "Can I add more users?",
    content: "You can share a unique administrative link for each campaign with your associates, and they can view the applicant information.",
  },
  {
    title: "How long does it take to set up?",
    content: "You can go live with a basic pipeline in under a minute, with additional time required for integrations, assessments, and further customisations.",
  },
  {
    title: "Can I get a refund?",
    content: "Yes, there is a 7 days refund window if you have not created more than 2 pipelines.",
  },
];

type FaqsProps = {
  fontSize?: string;
};

const Faqs = ({fontSize}:FaqsProps) => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl py-10 md:py-20 text-center" id="faqs">
      <p className="text-left md:text-center text-[12px] text-app font-semibold tracking-widest">FAQs</p>
      <h2 className={`text-left md:text-center ${fontSize} font-semibold font-epilogue mt-6`}>
        Commonly Asked Questions
      </h2>
      <p className="text-left md:text-center text-sm mt-6 text-zinc-500">
        From fees to interviews to sending offer letters, get answers to the most common questions about your team.
      </p>
      <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 text-left md:gap-[5%]">
        <Accordion type="single" collapsible>
          {faqs1.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <Accordion type="single" collapsible>
          {faqs2.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;

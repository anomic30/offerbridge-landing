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
    content: "We are able to offer our services at a lower price point because we are a small team and we don't have the overheads that larger companies do.",
  },
  {
    title: "Is there a free version?",
    content: "Yes, we offer a free version of our platform with limited features. You can upgrade to a paid plan at any time to access more features.",
  },
];

const faqs2 = [
  {
    title: "Can I add more users?",
    content: "Yes, you can add more users to your account. Please contact us to add more users to your account.",
  },
  {
    title: "How long does it take to set up?",
    content: "It takes less than 5 minutes to set up your account and start using our platform. You can start using our platform immediately after signing up.",
  },
  {
    title: "Can I get a refund?",
    content: "Yes, we offer a 30-day money-back guarantee. If you are not satisfied with our platform, you can request a refund within 30 days of signing up.",
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

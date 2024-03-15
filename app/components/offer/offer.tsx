import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import offerImg from "../../assets/images/offer.png"

const offerFaqs = [
  {
    title: "Create your interview pipeline in a minute.",
    content: "Use existing templates, or create your own. Simply drop test links, and round information."
  },
  {
    title: "Integrate with Calendly, Zoom, & more...",
    content: "Connect with your favorite tools to streamline your interview process. Use Calendly to schedule interviews, and Zoom to conduct them. You can also integrate with Google Meet, Microsoft Teams, and more."
  },
  {
    title: "Chat with applicants, & track progress.",
    content: "Easily communicate with applicants and track their progress. Keep track of all your conversations and interactions in one place. For example, 'Easily communicate with applicants and track their progress."
  },
]


const Offer = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] py-10 md:py-20 text-center relative" id="team-management">
      <p className="uppercase text-left md:text-center text-[12px] text-app font-semibold tracking-widest">WHY OFFER BRIDGE?</p>
      <h2 className='text-left md:text-center text-3xl font-semibold font-epilogue mt-6'>Create The Perfect Experience For Your Applicants</h2>
      <p className="text-left md:text-center text-sm mt-6 text-zinc-500">
      Speed up your interview process with a simple, easy to use ATS.
      </p>
      <div className="w-full mx-auto max-w-screen-2xl md:mt-20 py-5 md:py-28 text-left">
        <div className="w-full md:w-1/2 mt-6">
          <Accordion type="single" collapsible>
            {offerFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Image src={offerImg} alt="Offer" className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-2/5 mt-24 rounded-tl-xl" />
    </section>
  )
}

export default Offer
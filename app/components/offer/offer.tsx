import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"
import offerImg from "../../assets/images/offer.png"

const manageTeamsFaqs = [
  {
    title: "Manage all your team in one place",
    content: "Once your team is ready, you'll get access to your own headquarters where you can build more new teams, monitor live teams, and collaborate with admins from your company."
  },
  {
    title: "Track and limit the time worked",
    content: "Implement systems to monitor and control the time spent on tasks by team members. Establish clear guidelines to ensure efficient use of time while promoting a healthy work culture within the team."
  },
  {
    title: "Add and remove team members",
    content: "Easily add or remove members from your team within 24 hours. When adding members, commit to a minimum 3-month contract. If you onboard 3 people, you must use those members for at least 3 months. You can replace members during this period, but the 3-month commitment remains from the day of onboarding."
  },
  {
    title: "Monitor and rate your team members",
    content: "Keep track of your team's work and assess their performance. For example, 'Regularly review and rate team members based on their contributions and achievements.' Maintain transparency and accountability to ensure effective teamwork and continuous improvement."
  },
  {
    title: "Pay easily with one unified invoice",
    content: "Streamline the payment process by consolidating all expenses into one unified invoice. Enjoy the convenience of simplified billing for improved financial management."
  },
]


const Offer = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] py-10 md:py-20 text-center relative" id="team-management">
      <p className="uppercase text-left md:text-center text-[12px] text-app font-semibold tracking-widest">WHY OFFER BRIDGE?</p>
      <h2 className='text-left md:text-center text-3xl font-semibold font-epilogue mt-6'>Create the perfect experience for your applicants.</h2>
      <p className="text-left md:text-center text-sm mt-6 text-zinc-500">
      Speed up your interview process with a simple, easy to use ATS.
      </p>
      <div className="w-full mx-auto max-w-screen-2xl mt-10 md:mt-20 py-5 md:py-20 text-left">
        <div className="w-full md:w-1/2 mt-6">
          <Accordion type="single" collapsible>
            {manageTeamsFaqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.title}</AccordionTrigger>
                <AccordionContent>{faq.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Image src={offerImg} alt="Manage Team" className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 w-2/5 mt-24" />
    </section>
  )
}

export default Offer
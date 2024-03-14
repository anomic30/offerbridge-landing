const stats = [
  {
    title: "18,000+",
    body: "Candidates applied",
    footer: "on interviews conducted here"
  },
  {
    title: "1,200+",
    body: "Interviews conducted",
    footer: "from offer bridge since launch"
  },
  {
    title: "70+",
    body: "Offer letters",
    footer: "sent to candidates"
  },
  {
    title: "200+",
    body: "Companies shifted",
    footer: "from tools like lever, and darwinbox"
  },
]

type StatsCardProps = {
  title: string
  body: string
  footer: string
}

const StatsCard = ({ title, body, footer }:StatsCardProps) => {
  return (
    <div className="min-w-56 border-l pl-6 pt-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm font-semibold mt-1">{body}</p>
      <p className="text-sm text-slate-400 mt-1">{footer}</p>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="w-full mx-auto px-[1rem] md:px-[2rem] max-w-screen-2xl pt-20 pb-20 text-left">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </section>
  )
}

export default Stats
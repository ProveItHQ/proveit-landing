import Counter from "./counter"
import StatisticCard from "./card"

export default function ProblemEnriched() {
    return (
        <section className="bg-gray-50 py-20">
            <div className="section-padding">
                <div className="text-center mb-16">
                    <h2 className="text-6xl md:text-4xl font-bold mb-4">
                        Traditional Interviews <span className="text-destructive">Fail</span>. We{" "}
                        <span className="text-secondary">Succeed</span>.
                    </h2>
                    <p className="text-4xl md:3xl text-gray-400 max-w-5xl mx-auto font-bold">
                        Outdated Interviews Are<br />
                        <span className="text-3xl text-gray-800 max-w-4xl mx-auto font-black">Draining Talent, Time and Trust.</span>
                    </p>
                    <br></br>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto">See the data - then join the fix.</p>

                    <Counter
                        value={250}
                        decimal={true}
                        suffix="%"
                        stiffness={200}
                        damping={50}
                    />

                </div>
            </div>
        </section>
    )

}
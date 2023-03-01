import Layout from "@/components/Layout";
import Head from "next/head";
import Paragraph from "@/components/Paragraph";

export default function AboutMe() {
    return (
        <Layout>
            <Head>
                <title>About Me</title>
            </Head>

            <div>
                <h1 className='text-4xl mb-4'>About Me</h1>
                <Paragraph>
                    I am an aspiring software engineer specializing in backend web development with experience working fullstack.
                </Paragraph>
                <Paragraph>
                    I have a focus on quality and efficiency in my work, in that I ensure any code I write is easily readable and
                    maintainable as well as scalable so that whoever needs to build on top of it is able to dive in with ease.
                </Paragraph>
                <Paragraph>
                    I have a passion for learning new things about software development.
                    If a new technology piques my interest I am able to quickly dive in headfirst and start learning about it and building with it.
                </Paragraph>
                <Paragraph>
                    I take responsibility for my work. In my internship roles, although I was at a lower level than the rest of my colleagues,
                    I held myself to the same standards of work as them. I was able to work quickly and was often able to complete my work tickets
                    ahead of schedule and pick up new work items. In addition I ensured that this speed did not come at the cost of quality.
                    I always used my knowledge of best practices when coding and when it came time for code reviews, I always tagged my mentors
                    who I knew were the most scrutinous when it came to code quality to make doubly sure my work was good and possibly learn a thing or two.
                </Paragraph>
            </div>

            <div>
                <h1 className="text-4xl mt-10 mb-4">Technical Proficiencies</h1>
                <h2 className="text-xl">Java Spring-Boot</h2>
                <h2 className="text-xl">TypeScript Express</h2>
                <h2 className="text-xl">TypeScript React</h2>
                <h2 className="text-xl">AWS</h2>
            </div>

            <div>
                <h1 className='text-4xl mt-10 mb-4'>Education</h1>
                <Paragraph>
                    I started attending the University of British Columbia in 2016 and initially pursued an education in Physics,
                    but in 2018 I took an introductory software construction course where we worked on a Java mobile app.
                </Paragraph>
                <Paragraph>
                    My completion of this course marked a turning point in my education as I changed my major from Physics to a combined major in Physics and Computer Science.
                    After changing my program, I began learning a variety of computer science concepts such as data structures and algorithms,
                    machine learning algorithms, graphics rendering and domain specific language design and implementation.
                </Paragraph>
                <Paragraph>
                    Among the most important of the courses I started taking was my introductory software engineering course where
                    I learned about software development methodologies like Waterfall and Agile and software concepts such as REST and API design,
                    which I later used to great effect during my co-op/internship experiences.
                </Paragraph>
            </div>

            <div>
                <h1 className="text-4xl mt-10 mb-5">Co-op Experience</h1>
                <div >
                    <h2 className="text-xl">WiiBid</h2>
                    <Paragraph>
                        My first co-op opportunity came in April of 2021. I began working at a fintech startup specializing in an online marketplace for mortgages
                        which would match lenders with prospective homeowners. The web app that I worked on used the ASP.NET MVC framework which invariably involved
                        fullstack development with a C# backend and jQuery with Razor Pages on the frontend.
                    </Paragraph>
                    <Paragraph>
                        Since our development team was rather small, I had many chances to work on major user-facing changes. For example, I was given the opportunity
                        to completely overhaul our application's user registration flow. The existing registration had the user enter their email and confirm it via a link sent to said email.
                    </Paragraph>
                    <Paragraph>
                        This change was prompted by the CEO wanting to be able to contact our customers more quickly via their mobile phone. In order to do this, we would need to change our
                        registration process from verifying the user's email, to verifying their phone number via an SMS code.
                    </Paragraph>
                    <Paragraph>
                        The technical requirements for these changes involved integrating with Twilio's verification service with our backend to send codes through SMS and later verify these codes.
                        I then had to change the registration UI to prompt the user to enter their phone number, and add a screen for the user to enter the verification code they received.
                    </Paragraph>
                    <Paragraph>
                        After the code changes were done, before deployment we had to update our user records in our database to pre-populate existing users' records with existing phone number
                        information to ensure that existing users would not be locked out of their accounts.
                    </Paragraph>
                </div>

                <div className="mt-5">
                    <h2 className="text-xl">Generac</h2>
                    <Paragraph>
                        My second co-op experience was in August 2021 working at a larger company specializing in selling and manufacturing solar energy equipment.
                    </Paragraph>
                    <Paragraph>
                        My role at the company was to help maintain a web application used by installers of our equipment to view and manage installation sites.
                        Officially my responsibilities were to maintain and update the application's backend micro-services which were written with Java and Sprint-Boot, but my team
                        had also given me the opportunity to work on the React frontend.
                    </Paragraph>
                    <Paragraph>
                        After my on-boarding I had been able to work quickly and was soon being assigned work related to major new features to our application. At first this work had
                        been simply to implement an API endpoint according to a design provided to me from my mentor, but soon I had been able to work on features from design to
                        implementation across the full stack.
                    </Paragraph>
                    <Paragraph>
                        I had also been able to take on leadership roles at this company. I had found myself as the only developer on a feature and carried out its design and
                        implementation through both the backend and the frontend. I also had the opportunity to act as a scrum master for two sprints, leading daily stand-up
                        meetings and bi-weekly sprint planning meetings.
                    </Paragraph>
                </div>
            </div>


        </Layout>
    );
}
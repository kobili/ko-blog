import BlogPageLayout from "@/components/BlogPageLayout";
import Head from "next/head";
import Paragraph from "@/components/Paragraph";
import type { ReactNode } from "react";

export default function AboutMe() {
    return (
        <BlogPageLayout>
            <Head>
                <title>About Me</title>
            </Head>

            <div>
                <Header>About Me</Header>
                <Paragraph>
                    I am an aspiring software engineer specializing in backend web development with experience working fullstack.
                </Paragraph>
                <Paragraph>
                    I have a focus on quality and efficiency in my work, in that I go to great lengths to ensure any code I write is easily readable and
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

            <div className="mt-10">
                <Header>Technical Proficiencies</Header>
                <div className="mb-10">
                    <SubHeader>Java Spring-Boot</SubHeader>
                    <Paragraph>
                        I have extensive professional experience working with Spring Boot micro-services.
                        I have worked on APIs connected to MySQL and Postgres databases and have experience in containerizing them using Docker and deploying them to AWS.
                    </Paragraph>
                </div>
                <div className="mb-10">
                    <SubHeader>TypeScript Express</SubHeader>
                    <Paragraph>
                        I have developed many APIs using Express in TypeScript and have connected to Postgres databases using the TypeOrm library and MongoDB databases using
                        the Mongoose library. I can get an API working so quickly in Express that it&apos;s my go-to API prototyping library.
                    </Paragraph>
                </div>
                <div className="mb-10">
                    <SubHeader>TypeScript React</SubHeader>
                    <Paragraph>
                        I have developed many personal projects in TypeScript React since I picked it up as my primary frontend tool in 2021 and have also worked on a React web
                        application professionally. In addition to the base React framework, I have also incorporated Redux, Bootstrap and Styled Components in my projects and
                        have even recently started learning about NextJs (which I used to build <a href={'https://github.com/kobili/ko-blog'} target="_blank" className="text-blue-500 drop-shadow-sm">this website</a>!).
                    </Paragraph>
                </div>
                <div className="mb-10">
                    <SubHeader>AWS</SubHeader>
                    <Paragraph>
                        I have used AWS services both in professional environments to host micro-service APIs and databases, as well as in personal and university projects to build serverless APIs.
                        I have used CDK extensively to write and deploy serverless API Gateway APIs with Lambda and Step Function integration, as well as the SAM CLI to test said APIs locally.
                        I have also deployed Spring-Boot applications to both EC2 using both ECS and Elastic Beanstalk.
                    </Paragraph>
                </div>
                <div>
                    <SubHeader>Git</SubHeader>
                    <Paragraph>
                        Does anyone NOT know git?
                    </Paragraph>
                </div>
            </div>

            <div className="mt-10">
                <Header>Education</Header>
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

            <div className="mt-10">
                <Header>Co-op Experience</Header>
                <div >
                    <SubHeader>WiiBid</SubHeader>
                    <Paragraph>
                        My first co-op opportunity came in April of 2021. I began working at a fintech startup specializing in an online marketplace for mortgages
                        which would match lenders with prospective homeowners. The web app that I worked on used the ASP.NET MVC framework which invariably involved
                        fullstack development with a C# backend and jQuery with Razor Pages on the frontend.
                    </Paragraph>
                    <Paragraph>
                        Since our development team was rather small, I had many chances to work on major user-facing changes. For example, I was given the opportunity
                        to completely overhaul our application&apos;s user registration flow. The existing registration had the user enter their email and confirm it via a link sent to said email.
                    </Paragraph>
                    <Paragraph>
                        This change was prompted by the CEO wanting to be able to contact our customers more quickly via their mobile phone. In order to do this, we would need to change our
                        registration process from verifying the user&apos;s email, to verifying their phone number via an SMS code.
                    </Paragraph>
                    <Paragraph>
                        The technical requirements for these changes involved integrating with Twilio&apos;s verification service with our backend to send codes through SMS and later verify these codes.
                        I then had to change the registration UI to prompt the user to enter their phone number, and add a screen for the user to enter the verification code they received.
                    </Paragraph>
                    <Paragraph>
                        After the code changes were done, before deployment we had to update our user records in our database to pre-populate existing users&apos; records with existing phone number
                        information to ensure that existing users would not be locked out of their accounts.
                    </Paragraph>
                </div>

                <div className="mt-5">
                    <SubHeader>Generac</SubHeader>
                    <Paragraph>
                        My second co-op experience was in August 2021 working at a larger company specializing in selling and manufacturing solar energy equipment.
                    </Paragraph>
                    <Paragraph>
                        My role at the company was to help maintain a web application used by installers of our equipment to view and manage installation sites.
                        Officially my responsibilities were to maintain and update the application&apos;s backend micro-services which were written with Java and Sprint-Boot, but my team
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
        </BlogPageLayout>
    );
}

interface HeaderProps {
    children: ReactNode;
}
const Header = ({ children }: HeaderProps) => {
    return (
        <>
            <h1 className="text-4xl mb-5 font-bold">{children}</h1>
        </>
    );
}

const SubHeader = ({ children }: HeaderProps) => {
    return (
        <>
            <h2 className="text-xl font-bold">{children}</h2>
        </>
    )
}



const Page = () => {
    return (
        <main>
            <article dangerouslySetInnerHTML={{__html: `Hello!

My name is Jaagup and until this autumn I was a student in kood/Jõhvi school. Many of my school tasks required me to take the team lead role and organize the projects with my team. For that, we usually had stand-ups every weekday in the morning. Additionally, I was the student council president. This position gave me the opportunity to organize school life, so that the students felt accommodated.

The biggest and most exciting project in kood/Jõhvi, was to build an online multiplayer first-person shooter, only using Rust. We had an 8-person team, the frontend team used raycasting to build a feel for 3D inside the game and me plus a few other people took care of the WebSockets and the ECS architecture. The four of us split the backend architecture structure more or less equally, however I was also mainly responsible for the collision detection and the game ‘tick’ system. After the project was finished, we let other people at our school try it out and play with each other from their own computers. Aside from that, we also built many projects using REST API using Go and ReactJS.

Until recently, I was pushing forward with MindSee, a top 20 student-led startup in Estonia's 'Ajujaht' series. We continuously improved ourselves by adding new user features. I'm open to many different opportunities for change, which led me to this startup and has given me valuable connections and experiences. I have decided to move on due to the increasing uncertainty around the future funding of the project.

Thank you for your time!

Jaagup Tomingas`.split('\n').join("<br>")}} className="text-justify bg-bg1 px-[15%] pt-32 pb-16 space-y-4 ">
            </article>

        </main>
    )
}

export default Page;
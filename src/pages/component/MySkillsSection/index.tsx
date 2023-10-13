import MySkillItem from "../MySkillItem";

function MyAllSkills(props: { skills: { title: string; img: string }[] }) {
  const myAllSkills = props.skills.map((skill, ind) => (
    <MySkillItem key={ind} skillTitle={skill.title} skillImg={skill.img} />
  ));
  return myAllSkills;
}

export default function MySkillsSection() {
  const mySkillsList = [
    {
      img: "/next-dot-js-svgrepo-com.svg",
      title: "Next.js",
    },
    {
      img: "/gitlab-svgrepo-com.svg",
      title: "Gitlab",
    },
    {
      img: "/python-127-svgrepo-com.svg",
      title: "Python",
    },
    {
      img: "/typescript-16-svgrepo-com.svg",
      title: "TypeScript",
    },
    {
      img: "/github-142-svgrepo-com.svg",
      title: "Github",
    },
    {
      img: "/git-svgrepo-com.svg",
      title: "Git",
    },
    {
      img: "/react-svgrepo-com.svg",
      title: "React",
    },
    {
      img: "/tailwind-svgrepo-com.svg",
      title: "Tailwind",
    },
    {
      img: "/database-svgrepo-com.svg",
      title: "MySQL",
    },
    {
      img: "/brand-scrum-svgrepo-com.svg",
      title: "Scrum",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="font-mono font-medium text-2xl">
        Minhas principais habilidades
      </h2>
      <div className="flex flex-col justify-center items-center my-4">
        <div className="grid grid-cols-3 items-center gap-7">
          <MyAllSkills skills={mySkillsList} />
        </div>
        <a className="flex justify-center items-center gap-2 my-5 py-4 px-[6rem] transition duration-300 bg-blue-950 rounded-lg font-bold cursor-pointer hover:bg-[darkblue]">
          Baixar Curriculo
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file-earmark-arrow-down-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0z" />
          </svg>
        </a>
      </div>
    </section>
  );
}

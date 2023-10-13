import CardProject from "../CardProject";

export default function MyProjectSection() {
  return (
    <section className="py-3 flex flex-col items-center justify-center">
      <h2 className="font-mono font-medium text-2xl">Meu projetos</h2>
      <div className="flex flex-col gap-10 self-start">
        <CardProject
          title="Site da SSIG.tech"
          stacks={["Next.js", "TypeScript", "Redux", "React", "Tailwind"]}
          description="Site que espelha a identidade visual da empresa, mantendo sua credibilidade e atração para os seus clientes."
          imgSrc="/projeto_1.png"
        />
        <CardProject
          title="WatchTower - TCC"
          stacks={["React", " Express", "Axios", "AdminLTE"]}
          description="O objetivo desse projeto é gerenciar projetos de maneira efeitva com um algoritmo de fazer a sugestão de funcionários."
          imgSrc="/projeto_2.png"
        />
        <CardProject
          title="Ecommerce"
          stacks={["Node", "EJS", "Express", "Bootstrap"]}
          description="Construir um sistema de ecommerce capaz de realizar cadastro, alteração e exclusão de produtos"
          imgSrc="/projeto_3.png"
        />
      </div>
    </section>
  );
}

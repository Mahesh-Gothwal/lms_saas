import CompanionForm from "@/components/CompanionForm";

const NewCompanion = () => {
  return (
    <main className="min-lg:w-1/3 lg:w-1/2 min-md:w-2/3 items-center justify-center">
      <article className="w-full gap-4 flex flex-col mb-5">
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;

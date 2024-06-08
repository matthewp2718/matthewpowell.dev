function App() {
  return (
    <div className="p-8 text-sm font-semibold font-redditMono">
      <h1 className="text-3xl">hi, i'm matthew 👋</h1>
      <p className="pt-3 font-medium">
        i'm currently building an awesome company with awesome people.
      </p>
      <p className="pt-1">
        <a
          href="https://github.com/matthewp2718"
          className="text-blue-700 underline"
          target="_blank"
        >
          github
        </a>{" "}
        /{" "}
        <a
          href="https://www.linkedin.com/in/matthew-r-powell/"
          className="text-blue-700 underline"
          target="_blank"
        >
          linkedin
        </a>
      </p>
      {/* Projects section */}
      <p className="mt-6 font-[400] text-xl">projects</p>

      <div className="mt-6">
        <p className="text-base font-bold">rabbitcode</p>
        <p className="max-w-[500px] mt-1 font-[400]">coming soon...</p>
      </div>

      <div className="mt-6">
        <p className="text-base font-bold">chapter one</p>
        <p className="pt-1">
          <a href="#" className="text-blue-700 underline" target="_blank">
            live project
          </a>{" "}
          /{" "}
          <a href="#" className="text-blue-700 underline" target="_blank">
            github for client
          </a>{" "}
          /{" "}
          <a href="#" className="text-blue-700 underline" target="_blank">
            github for server
          </a>
        </p>
        <p className="max-w-[500px] mt-3 font-[350]">
          enter the job that you are trying to get, upload your resume/cv and
          get instant feedback and guidance on how you should optimise your
          resume/cv for the job you are looking to get.
        </p>
      </div>
    </div>
  );
}

export default App;
